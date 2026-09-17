-- HubspotConversations SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("hubspot-conversations_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local HubspotConversationsSDK = {}
HubspotConversationsSDK.__index = HubspotConversationsSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

HubspotConversationsSDK._make_feature = _make_feature


function HubspotConversationsSDK.new(options)
  local self = setmetatable({}, HubspotConversationsSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function HubspotConversationsSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function HubspotConversationsSDK:get_utility()
  return Utility.copy(self._utility)
end


function HubspotConversationsSDK:get_root_ctx()
  return self._rootctx
end


function HubspotConversationsSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function HubspotConversationsSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function HubspotConversationsSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function HubspotConversationsSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "HubspotConversationsSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function HubspotConversationsSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function HubspotConversationsSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "HubspotConversationsSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Channel():list() / client:Channel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:Channel(data)
  local EntityMod = require("entity.channel_entity")
  if data == nil then
    if self._channel == nil then
      self._channel = EntityMod.new(self, nil)
    end
    return self._channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsBatchResponsePublicActor():list() / client:ConversationsBatchResponsePublicActor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsBatchResponsePublicActor(data)
  local EntityMod = require("entity.conversations_batch_response_public_actor_entity")
  if data == nil then
    if self._conversations_batch_response_public_actor == nil then
      self._conversations_batch_response_public_actor = EntityMod.new(self, nil)
    end
    return self._conversations_batch_response_public_actor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsCollectionResponsePublicMessageForwardPaging():list() / client:ConversationsCollectionResponsePublicMessageForwardPaging():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsCollectionResponsePublicMessageForwardPaging(data)
  local EntityMod = require("entity.conversations_collection_response_public_message_forward_paging_entity")
  if data == nil then
    if self._conversations_collection_response_public_message_forward_paging == nil then
      self._conversations_collection_response_public_message_forward_paging = EntityMod.new(self, nil)
    end
    return self._conversations_collection_response_public_message_forward_paging
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsCollectionResponsePublicThreadForwardPaging():list() / client:ConversationsCollectionResponsePublicThreadForwardPaging():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsCollectionResponsePublicThreadForwardPaging(data)
  local EntityMod = require("entity.conversations_collection_response_public_thread_forward_paging_entity")
  if data == nil then
    if self._conversations_collection_response_public_thread_forward_paging == nil then
      self._conversations_collection_response_public_thread_forward_paging = EntityMod.new(self, nil)
    end
    return self._conversations_collection_response_public_thread_forward_paging
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsCollectionResponseWithTotalPublicChannel():list() / client:ConversationsCollectionResponseWithTotalPublicChannel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsCollectionResponseWithTotalPublicChannel(data)
  local EntityMod = require("entity.conversations_collection_response_with_total_public_channel_entity")
  if data == nil then
    if self._conversations_collection_response_with_total_public_channel == nil then
      self._conversations_collection_response_with_total_public_channel = EntityMod.new(self, nil)
    end
    return self._conversations_collection_response_with_total_public_channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsCollectionResponseWithTotalPublicChannelAccount():list() / client:ConversationsCollectionResponseWithTotalPublicChannelAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsCollectionResponseWithTotalPublicChannelAccount(data)
  local EntityMod = require("entity.conversations_collection_response_with_total_public_channel_account_entity")
  if data == nil then
    if self._conversations_collection_response_with_total_public_channel_account == nil then
      self._conversations_collection_response_with_total_public_channel_account = EntityMod.new(self, nil)
    end
    return self._conversations_collection_response_with_total_public_channel_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsCollectionResponseWithTotalPublicInbox():list() / client:ConversationsCollectionResponseWithTotalPublicInbox():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsCollectionResponseWithTotalPublicInbox(data)
  local EntityMod = require("entity.conversations_collection_response_with_total_public_inbox_entity")
  if data == nil then
    if self._conversations_collection_response_with_total_public_inbox == nil then
      self._conversations_collection_response_with_total_public_inbox = EntityMod.new(self, nil)
    end
    return self._conversations_collection_response_with_total_public_inbox
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesBatchResponsePublicActor():list() / client:ConversationsInboxMessagesBatchResponsePublicActor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesBatchResponsePublicActor(data)
  local EntityMod = require("entity.conversations_inbox_messages_batch_response_public_actor_entity")
  if data == nil then
    if self._conversations_inbox_messages_batch_response_public_actor == nil then
      self._conversations_inbox_messages_batch_response_public_actor = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_batch_response_public_actor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesCollectionResponsePublicMessage():list() / client:ConversationsInboxMessagesCollectionResponsePublicMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesCollectionResponsePublicMessage(data)
  local EntityMod = require("entity.conversations_inbox_messages_collection_response_public_message_entity")
  if data == nil then
    if self._conversations_inbox_messages_collection_response_public_message == nil then
      self._conversations_inbox_messages_collection_response_public_message = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_collection_response_public_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesCollectionResponsePublicThread():list() / client:ConversationsInboxMessagesCollectionResponsePublicThread():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesCollectionResponsePublicThread(data)
  local EntityMod = require("entity.conversations_inbox_messages_collection_response_public_thread_entity")
  if data == nil then
    if self._conversations_inbox_messages_collection_response_public_thread == nil then
      self._conversations_inbox_messages_collection_response_public_thread = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_collection_response_public_thread
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesCollectionResponseWithTotalPublic():list() / client:ConversationsInboxMessagesCollectionResponseWithTotalPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesCollectionResponseWithTotalPublic(data)
  local EntityMod = require("entity.conversations_inbox_messages_collection_response_with_total_public_entity")
  if data == nil then
    if self._conversations_inbox_messages_collection_response_with_total_public == nil then
      self._conversations_inbox_messages_collection_response_with_total_public = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_collection_response_with_total_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesCollectionResponseWithTotalPublic2():list() / client:ConversationsInboxMessagesCollectionResponseWithTotalPublic2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data)
  local EntityMod = require("entity.conversations_inbox_messages_collection_response_with_total_public2_entity")
  if data == nil then
    if self._conversations_inbox_messages_collection_response_with_total_public2 == nil then
      self._conversations_inbox_messages_collection_response_with_total_public2 = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_collection_response_with_total_public2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesCollectionResponseWithTotalPublic3():list() / client:ConversationsInboxMessagesCollectionResponseWithTotalPublic3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data)
  local EntityMod = require("entity.conversations_inbox_messages_collection_response_with_total_public3_entity")
  if data == nil then
    if self._conversations_inbox_messages_collection_response_with_total_public3 == nil then
      self._conversations_inbox_messages_collection_response_with_total_public3 = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_collection_response_with_total_public3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicActor():list() / client:ConversationsInboxMessagesPublicActor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicActor(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_actor_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_actor == nil then
      self._conversations_inbox_messages_public_actor = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_actor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicChannel():list() / client:ConversationsInboxMessagesPublicChannel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicChannel(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_channel_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_channel == nil then
      self._conversations_inbox_messages_public_channel = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicChannelAccount():list() / client:ConversationsInboxMessagesPublicChannelAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicChannelAccount(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_channel_account_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_channel_account == nil then
      self._conversations_inbox_messages_public_channel_account = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_channel_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicInbox():list() / client:ConversationsInboxMessagesPublicInbox():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicInbox(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_inbox_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_inbox == nil then
      self._conversations_inbox_messages_public_inbox = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_inbox
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicMessage():list() / client:ConversationsInboxMessagesPublicMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicMessage(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_message_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_message == nil then
      self._conversations_inbox_messages_public_message = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicMessageContent():list() / client:ConversationsInboxMessagesPublicMessageContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicMessageContent(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_message_content_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_message_content == nil then
      self._conversations_inbox_messages_public_message_content = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_message_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsInboxMessagesPublicThread():list() / client:ConversationsInboxMessagesPublicThread():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsInboxMessagesPublicThread(data)
  local EntityMod = require("entity.conversations_inbox_messages_public_thread_entity")
  if data == nil then
    if self._conversations_inbox_messages_public_thread == nil then
      self._conversations_inbox_messages_public_thread = EntityMod.new(self, nil)
    end
    return self._conversations_inbox_messages_public_thread
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicActor():list() / client:ConversationsPublicActor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicActor(data)
  local EntityMod = require("entity.conversations_public_actor_entity")
  if data == nil then
    if self._conversations_public_actor == nil then
      self._conversations_public_actor = EntityMod.new(self, nil)
    end
    return self._conversations_public_actor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicChannel():list() / client:ConversationsPublicChannel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicChannel(data)
  local EntityMod = require("entity.conversations_public_channel_entity")
  if data == nil then
    if self._conversations_public_channel == nil then
      self._conversations_public_channel = EntityMod.new(self, nil)
    end
    return self._conversations_public_channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicChannelAccount():list() / client:ConversationsPublicChannelAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicChannelAccount(data)
  local EntityMod = require("entity.conversations_public_channel_account_entity")
  if data == nil then
    if self._conversations_public_channel_account == nil then
      self._conversations_public_channel_account = EntityMod.new(self, nil)
    end
    return self._conversations_public_channel_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicInbox():list() / client:ConversationsPublicInbox():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicInbox(data)
  local EntityMod = require("entity.conversations_public_inbox_entity")
  if data == nil then
    if self._conversations_public_inbox == nil then
      self._conversations_public_inbox = EntityMod.new(self, nil)
    end
    return self._conversations_public_inbox
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicMessage():list() / client:ConversationsPublicMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicMessage(data)
  local EntityMod = require("entity.conversations_public_message_entity")
  if data == nil then
    if self._conversations_public_message == nil then
      self._conversations_public_message = EntityMod.new(self, nil)
    end
    return self._conversations_public_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicMessageContent():list() / client:ConversationsPublicMessageContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicMessageContent(data)
  local EntityMod = require("entity.conversations_public_message_content_entity")
  if data == nil then
    if self._conversations_public_message_content == nil then
      self._conversations_public_message_content = EntityMod.new(self, nil)
    end
    return self._conversations_public_message_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationsPublicThread():list() / client:ConversationsPublicThread():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:ConversationsPublicThread(data)
  local EntityMod = require("entity.conversations_public_thread_entity")
  if data == nil then
    if self._conversations_public_thread == nil then
      self._conversations_public_thread = EntityMod.new(self, nil)
    end
    return self._conversations_public_thread
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomChannelsCollectionResponseWithTotalPublicChannel():list() / client:CustomChannelsCollectionResponseWithTotalPublicChannel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:CustomChannelsCollectionResponseWithTotalPublicChannel(data)
  local EntityMod = require("entity.custom_channels_collection_response_with_total_public_channel_entity")
  if data == nil then
    if self._custom_channels_collection_response_with_total_public_channel == nil then
      self._custom_channels_collection_response_with_total_public_channel = EntityMod.new(self, nil)
    end
    return self._custom_channels_collection_response_with_total_public_channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomChannelsCollectionResponseWithTotalPublicChannel2():list() / client:CustomChannelsCollectionResponseWithTotalPublicChannel2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:CustomChannelsCollectionResponseWithTotalPublicChannel2(data)
  local EntityMod = require("entity.custom_channels_collection_response_with_total_public_channel2_entity")
  if data == nil then
    if self._custom_channels_collection_response_with_total_public_channel2 == nil then
      self._custom_channels_collection_response_with_total_public_channel2 = EntityMod.new(self, nil)
    end
    return self._custom_channels_collection_response_with_total_public_channel2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomChannelsPublicChannelAccount():list() / client:CustomChannelsPublicChannelAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:CustomChannelsPublicChannelAccount(data)
  local EntityMod = require("entity.custom_channels_public_channel_account_entity")
  if data == nil then
    if self._custom_channels_public_channel_account == nil then
      self._custom_channels_public_channel_account = EntityMod.new(self, nil)
    end
    return self._custom_channels_public_channel_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomChannelsPublicChannelAccountStagingToken():list() / client:CustomChannelsPublicChannelAccountStagingToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:CustomChannelsPublicChannelAccountStagingToken(data)
  local EntityMod = require("entity.custom_channels_public_channel_account_staging_token_entity")
  if data == nil then
    if self._custom_channels_public_channel_account_staging_token == nil then
      self._custom_channels_public_channel_account_staging_token = EntityMod.new(self, nil)
    end
    return self._custom_channels_public_channel_account_staging_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomChannelsPublicChannelIntegrationChannel():list() / client:CustomChannelsPublicChannelIntegrationChannel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:CustomChannelsPublicChannelIntegrationChannel(data)
  local EntityMod = require("entity.custom_channels_public_channel_integration_channel_entity")
  if data == nil then
    if self._custom_channels_public_channel_integration_channel == nil then
      self._custom_channels_public_channel_integration_channel = EntityMod.new(self, nil)
    end
    return self._custom_channels_public_channel_integration_channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomChannelsPublicConversationsMessage():list() / client:CustomChannelsPublicConversationsMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:CustomChannelsPublicConversationsMessage(data)
  local EntityMod = require("entity.custom_channels_public_conversations_message_entity")
  if data == nil then
    if self._custom_channels_public_conversations_message == nil then
      self._custom_channels_public_conversations_message = EntityMod.new(self, nil)
    end
    return self._custom_channels_public_conversations_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PublicThread():list() / client:PublicThread():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:PublicThread(data)
  local EntityMod = require("entity.public_thread_entity")
  if data == nil then
    if self._public_thread == nil then
      self._public_thread = EntityMod.new(self, nil)
    end
    return self._public_thread
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Thread():list() / client:Thread():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:Thread(data)
  local EntityMod = require("entity.thread_entity")
  if data == nil then
    if self._thread == nil then
      self._thread = EntityMod.new(self, nil)
    end
    return self._thread
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VisitorIdentificationIdentificationToken():list() / client:VisitorIdentificationIdentificationToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotConversationsSDK:VisitorIdentificationIdentificationToken(data)
  local EntityMod = require("entity.visitor_identification_identification_token_entity")
  if data == nil then
    if self._visitor_identification_identification_token == nil then
      self._visitor_identification_identification_token = EntityMod.new(self, nil)
    end
    return self._visitor_identification_identification_token
  end
  return EntityMod.new(self, data)
end




function HubspotConversationsSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = HubspotConversationsSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return HubspotConversationsSDK
