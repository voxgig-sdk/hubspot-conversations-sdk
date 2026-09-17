-- CustomChannelsPublicChannelAccount entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-conversations_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CustomChannelsPublicChannelAccountEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CustomChannelsPublicChannelAccount(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = custom_channels_public_channel_account_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "custom_channels_public_channel_account." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local custom_channels_public_channel_account_ref01_ent = client:CustomChannelsPublicChannelAccount(nil)
    local custom_channels_public_channel_account_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.custom_channels_public_channel_account"), "custom_channels_public_channel_account_ref01"))
    custom_channels_public_channel_account_ref01_data["channel_id"] = setup.idmap["channel01"]

    local custom_channels_public_channel_account_ref01_data_result, err = custom_channels_public_channel_account_ref01_ent:create(custom_channels_public_channel_account_ref01_data, nil)
    assert.is_nil(err)
    custom_channels_public_channel_account_ref01_data = helpers.to_map(type(custom_channels_public_channel_account_ref01_data_result) == 'table' and custom_channels_public_channel_account_ref01_data_result.data_get and custom_channels_public_channel_account_ref01_data_result:data_get() or custom_channels_public_channel_account_ref01_data_result)
    assert.is_not_nil(custom_channels_public_channel_account_ref01_data)
    assert.is_not_nil(custom_channels_public_channel_account_ref01_data["id"])

    -- UPDATE
    local custom_channels_public_channel_account_ref01_data_up0_up = {
      id = custom_channels_public_channel_account_ref01_data["id"],
      ["channel_id"] = setup.idmap["channel_id"],
    }

    local custom_channels_public_channel_account_ref01_markdef_up0_name = "inboxId"
    local custom_channels_public_channel_account_ref01_markdef_up0_value = "Mark01-custom_channels_public_channel_account_ref01_" .. tostring(setup.now)
    custom_channels_public_channel_account_ref01_data_up0_up[custom_channels_public_channel_account_ref01_markdef_up0_name] = custom_channels_public_channel_account_ref01_markdef_up0_value

    local custom_channels_public_channel_account_ref01_resdata_up0_result, err = custom_channels_public_channel_account_ref01_ent:update(custom_channels_public_channel_account_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local custom_channels_public_channel_account_ref01_resdata_up0 = helpers.to_map(type(custom_channels_public_channel_account_ref01_resdata_up0_result) == 'table' and custom_channels_public_channel_account_ref01_resdata_up0_result.data_get and custom_channels_public_channel_account_ref01_resdata_up0_result:data_get() or custom_channels_public_channel_account_ref01_resdata_up0_result)
    assert.is_not_nil(custom_channels_public_channel_account_ref01_resdata_up0)
    assert.are.equal(custom_channels_public_channel_account_ref01_resdata_up0["id"], custom_channels_public_channel_account_ref01_data_up0_up["id"])
    assert.are.equal(custom_channels_public_channel_account_ref01_resdata_up0[custom_channels_public_channel_account_ref01_markdef_up0_name], custom_channels_public_channel_account_ref01_markdef_up0_value)

    -- LOAD
    local custom_channels_public_channel_account_ref01_match_dt0 = {
      id = custom_channels_public_channel_account_ref01_data["id"],
    }
    local custom_channels_public_channel_account_ref01_data_dt0_loaded, err = custom_channels_public_channel_account_ref01_ent:load(custom_channels_public_channel_account_ref01_match_dt0, nil)
    assert.is_nil(err)
    local custom_channels_public_channel_account_ref01_data_dt0_load_result = helpers.to_map(type(custom_channels_public_channel_account_ref01_data_dt0_loaded) == 'table' and custom_channels_public_channel_account_ref01_data_dt0_loaded.data_get and custom_channels_public_channel_account_ref01_data_dt0_loaded:data_get() or custom_channels_public_channel_account_ref01_data_dt0_loaded)
    assert.is_not_nil(custom_channels_public_channel_account_ref01_data_dt0_load_result)
    assert.are.equal(custom_channels_public_channel_account_ref01_data_dt0_load_result["id"], custom_channels_public_channel_account_ref01_data["id"])

  end)
end)

function custom_channels_public_channel_account_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/custom_channels_public_channel_account/CustomChannelsPublicChannelAccountTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read custom_channels_public_channel_account test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "custom_channels_public_channel_account01", "custom_channels_public_channel_account02", "custom_channels_public_channel_account03", "2026_0901", "2026_0902", "2026_0903", "channel01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID"] = idmap,
    ["HUBSPOT_CONVERSATIONS_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_CONVERSATIONS_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_CONVERSATIONS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["channel_id"] == nil then
    idmap_resolved["channel_id"] = idmap_resolved["channel01"]
  end

  if env["HUBSPOT_CONVERSATIONS_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["HUBSPOT_CONVERSATIONS_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["HUBSPOT_CONVERSATIONS_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["HUBSPOT_CONVERSATIONS_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
