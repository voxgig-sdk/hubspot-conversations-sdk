-- HubspotConversations SDK error

local HubspotConversationsError = {}
HubspotConversationsError.__index = HubspotConversationsError


function HubspotConversationsError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotConversationsError)
  self.is_sdk_error = true
  self.sdk = "HubspotConversations"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotConversationsError:error()
  return self.msg
end


function HubspotConversationsError:__tostring()
  return self.msg
end


return HubspotConversationsError
