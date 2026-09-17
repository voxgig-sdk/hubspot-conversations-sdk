-- Typed models for the HubspotConversations SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Channel

---@class ChannelRemoveMatch
---@field channel_id number

---@class ConversationsBatchResponsePublicActor
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class ConversationsBatchResponsePublicActorCreateData
---@field property? string
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class ConversationsCollectionResponsePublicMessageForwardPaging
---@field paging? table
---@field results table

---@class ConversationsCollectionResponsePublicMessageForwardPagingListMatch
---@field thread_id number
---@field after? string
---@field archived? boolean
---@field limit? number
---@field property? string
---@field sort? table

---@class ConversationsCollectionResponsePublicThreadForwardPaging
---@field archived boolean
---@field assignedTo? string
---@field associatedContactId string
---@field closedAt? string
---@field createdAt string
---@field id string
---@field inboxId string
---@field latestMessageReceivedTimestamp? string
---@field latestMessageSentTimestamp? string
---@field latestMessageTimestamp? string
---@field originalChannelAccountId string
---@field originalChannelId string
---@field spam boolean
---@field status string
---@field threadAssociations? table

---@class ConversationsCollectionResponsePublicThreadForwardPagingListMatch
---@field after? string
---@field archived? boolean
---@field associated_contact_id? number
---@field associated_ticket_id? number
---@field association? table
---@field inbox_id? table
---@field latest_message_timestamp_after? string
---@field limit? number
---@field property? string
---@field sort? table
---@field thread_status? string

---@class ConversationsCollectionResponseWithTotalPublicChannel
---@field id string
---@field name string

---@class ConversationsCollectionResponseWithTotalPublicChannelListMatch
---@field after? string
---@field default_page_length? number
---@field limit? number
---@field sort? table

---@class ConversationsCollectionResponseWithTotalPublicChannelAccount
---@field active boolean
---@field archived boolean
---@field archivedAt? string
---@field authorized boolean
---@field channelId string
---@field createdAt string
---@field deliveryIdentifier table
---@field id string
---@field inboxId string
---@field name string

---@class ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch
---@field after? string
---@field archived? boolean
---@field channel_id? table
---@field default_page_length? number
---@field inbox_id? table
---@field limit? number
---@field sort? table

---@class ConversationsCollectionResponseWithTotalPublicInbox
---@field archived boolean
---@field archivedAt? string
---@field createdAt string
---@field id string
---@field name string
---@field type string
---@field updatedAt string

---@class ConversationsCollectionResponseWithTotalPublicInboxListMatch
---@field after? string
---@field archived? boolean
---@field default_page_length? number
---@field limit? number
---@field sort? table

---@class ConversationsInboxMessagesBatchResponsePublicActor
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class ConversationsInboxMessagesBatchResponsePublicActorCreateData
---@field property? string
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class ConversationsInboxMessagesCollectionResponsePublicMessage
---@field paging? table
---@field results table

---@class ConversationsInboxMessagesCollectionResponsePublicMessageListMatch
---@field thread_id number
---@field after? string
---@field archived? boolean
---@field limit? number
---@field property? string
---@field sort? table

---@class ConversationsInboxMessagesCollectionResponsePublicThread
---@field archived boolean
---@field assignedTo? string
---@field associatedContactId string
---@field closedAt? string
---@field createdAt string
---@field id string
---@field inboxId string
---@field latestMessageReceivedTimestamp? string
---@field latestMessageSentTimestamp? string
---@field latestMessageTimestamp? string
---@field originalChannelAccountId string
---@field originalChannelId string
---@field spam boolean
---@field status string
---@field threadAssociations? table

---@class ConversationsInboxMessagesCollectionResponsePublicThreadListMatch
---@field after? string
---@field archived? boolean
---@field associated_contact_id? number
---@field association? table
---@field inbox_id? table
---@field latest_message_timestamp_after? string
---@field limit? number
---@field property? string
---@field sort? table
---@field thread_status? string

---@class ConversationsInboxMessagesCollectionResponseWithTotalPublic
---@field active boolean
---@field archived boolean
---@field archivedAt? string
---@field authorized boolean
---@field channelId string
---@field createdAt string
---@field deliveryIdentifier table
---@field id string
---@field inboxId string
---@field name string

---@class ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch
---@field after? string
---@field archived? boolean
---@field channel_id? table
---@field default_page_length? number
---@field inbox_id? table
---@field limit? number
---@field sort? table

---@class ConversationsInboxMessagesCollectionResponseWithTotalPublic2
---@field id string
---@field name string

---@class ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch
---@field after? string
---@field default_page_length? number
---@field limit? number
---@field sort? table

---@class ConversationsInboxMessagesCollectionResponseWithTotalPublic3
---@field archived boolean
---@field archivedAt? string
---@field createdAt string
---@field id string
---@field name string
---@field type string
---@field updatedAt string

---@class ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch
---@field after? string
---@field archived? boolean
---@field default_page_length? number
---@field limit? number
---@field sort? table

---@class ConversationsInboxMessagesPublicActor
---@field id? string

---@class ConversationsInboxMessagesPublicActorLoadMatch
---@field id string
---@field property? string

---@class ConversationsInboxMessagesPublicChannel
---@field id string
---@field name string

---@class ConversationsInboxMessagesPublicChannelLoadMatch
---@field id number

---@class ConversationsInboxMessagesPublicChannelAccount
---@field id? string
---@field type string
---@field value string

---@class ConversationsInboxMessagesPublicChannelAccountLoadMatch
---@field id number
---@field archived? boolean

---@class ConversationsInboxMessagesPublicInbox
---@field archived boolean
---@field archivedAt? string
---@field createdAt string
---@field id string
---@field name string
---@field type string
---@field updatedAt string

---@class ConversationsInboxMessagesPublicInboxLoadMatch
---@field id number
---@field archived? boolean

---@class ConversationsInboxMessagesPublicMessage
---@field id? string

---@class ConversationsInboxMessagesPublicMessageLoadMatch
---@field id string
---@field thread_id number
---@field property? string

---@class ConversationsInboxMessagesPublicMessageCreateData
---@field thread_id number
---@field id? string

---@class ConversationsInboxMessagesPublicMessageContent
---@field richText? string
---@field text? string

---@class ConversationsInboxMessagesPublicMessageContentLoadMatch
---@field message_id string
---@field thread_id number
---@field property? string

---@class ConversationsInboxMessagesPublicThread
---@field archived? boolean
---@field associatedTicketId? string
---@field id? string
---@field status? string

---@class ConversationsInboxMessagesPublicThreadLoadMatch
---@field id number
---@field archived? boolean
---@field association? table
---@field property? string

---@class ConversationsInboxMessagesPublicThreadUpdateData
---@field id number
---@field archived? boolean
---@field associatedTicketId? string
---@field status? string

---@class ConversationsPublicActor
---@field id? string

---@class ConversationsPublicActorLoadMatch
---@field id string
---@field property? string

---@class ConversationsPublicChannel
---@field id string
---@field name string

---@class ConversationsPublicChannelLoadMatch
---@field id number

---@class ConversationsPublicChannelAccount
---@field id? string
---@field type string
---@field value string

---@class ConversationsPublicChannelAccountLoadMatch
---@field id number
---@field archived? boolean

---@class ConversationsPublicInbox
---@field archived boolean
---@field archivedAt? string
---@field createdAt string
---@field id string
---@field name string
---@field type string
---@field updatedAt string

---@class ConversationsPublicInboxLoadMatch
---@field id number
---@field archived? boolean

---@class ConversationsPublicMessage
---@field id? string

---@class ConversationsPublicMessageLoadMatch
---@field id string
---@field thread_id number
---@field property? string

---@class ConversationsPublicMessageCreateData
---@field thread_id number
---@field id? string

---@class ConversationsPublicMessageContent
---@field richText? string
---@field text? string

---@class ConversationsPublicMessageContentLoadMatch
---@field message_id string
---@field thread_id number
---@field property? string

---@class ConversationsPublicThread
---@field archived? boolean
---@field associatedTicketId? string
---@field id? string
---@field status? string

---@class ConversationsPublicThreadLoadMatch
---@field id number
---@field archived? boolean
---@field association? table
---@field property? string

---@class ConversationsPublicThreadUpdateData
---@field id number
---@field archived? boolean
---@field associatedTicketId? string
---@field status? string

---@class ConversationsPublicThreadRemoveMatch
---@field thread_id number

---@class CustomChannelsCollectionResponseWithTotalPublicChannel
---@field capabilities table
---@field channelAccountConnectionRedirectUrl? string
---@field channelDescription? string
---@field channelLogoUrl? string
---@field createdAt string
---@field id string
---@field name string
---@field webhookUrl? string

---@class CustomChannelsCollectionResponseWithTotalPublicChannelListMatch
---@field after? string
---@field default_page_length? number
---@field limit? number
---@field sort? table

---@class CustomChannelsCollectionResponseWithTotalPublicChannel2
---@field active boolean
---@field archived boolean
---@field archivedAt? string
---@field authorized boolean
---@field channelId string
---@field createdAt string
---@field deliveryIdentifier table
---@field id string
---@field inboxId string
---@field name string

---@class CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch
---@field channel_id number
---@field after? string
---@field archived? boolean
---@field default_page_length? number
---@field delivery_identifier_type? table
---@field delivery_identifier_value? table
---@field limit? number
---@field sort? table

---@class CustomChannelsPublicChannelAccount
---@field authorized boolean
---@field deliveryIdentifier table
---@field id? string
---@field inboxId string
---@field name string
---@field type string
---@field value string

---@class CustomChannelsPublicChannelAccountLoadMatch
---@field channel_id number
---@field id number
---@field archived? boolean

---@class CustomChannelsPublicChannelAccountCreateData
---@field channel_id number
---@field authorized boolean
---@field deliveryIdentifier table
---@field id? string
---@field inboxId string
---@field name string
---@field type string
---@field value string

---@class CustomChannelsPublicChannelAccountUpdateData
---@field channel_id number
---@field id number
---@field authorized? boolean
---@field deliveryIdentifier? table
---@field inboxId? string
---@field name? string
---@field type? string
---@field value? string

---@class CustomChannelsPublicChannelAccountStagingToken
---@field accountName? string
---@field deliveryIdentifier table
---@field id? string
---@field type string
---@field value string

---@class CustomChannelsPublicChannelAccountStagingTokenUpdateData
---@field channel_id number
---@field id string
---@field accountName? string
---@field deliveryIdentifier? table
---@field type? string
---@field value? string

---@class CustomChannelsPublicChannelIntegrationChannel
---@field capabilities table
---@field channelAccountConnectionRedirectUrl? string
---@field channelDescription? string
---@field channelLogoUrl? string
---@field name string
---@field webhookUrl? string

---@class CustomChannelsPublicChannelIntegrationChannelLoadMatch
---@field channel_id number

---@class CustomChannelsPublicChannelIntegrationChannelCreateData
---@field capabilities table
---@field channelAccountConnectionRedirectUrl? string
---@field channelDescription? string
---@field channelLogoUrl? string
---@field name string
---@field webhookUrl? string

---@class CustomChannelsPublicChannelIntegrationChannelUpdateData
---@field channel_id number
---@field capabilities? table
---@field channelAccountConnectionRedirectUrl? string
---@field channelDescription? string
---@field channelLogoUrl? string
---@field name? string
---@field webhookUrl? string

---@class CustomChannelsPublicConversationsMessage
---@field archived boolean
---@field associateWithContactId? number
---@field attachments table
---@field channelAccountId string
---@field channelId string
---@field client table
---@field conversationsThreadId string
---@field createdAt string
---@field createdBy string
---@field direction string
---@field errorMessage? string
---@field id string
---@field inReplyToId? string
---@field integrationIdempotencyId? string
---@field integrationThreadId? string
---@field messageDirection string
---@field preResolvedContacts table
---@field recipients table
---@field richText? string
---@field senders table
---@field status table
---@field statusType string
---@field subject? string
---@field text string
---@field timestamp string
---@field truncationStatus string
---@field type string
---@field updatedAt? string

---@class CustomChannelsPublicConversationsMessageLoadMatch
---@field channel_id number
---@field id string

---@class CustomChannelsPublicConversationsMessageCreateData
---@field channel_id number
---@field archived boolean
---@field associateWithContactId? number
---@field attachments table
---@field channelAccountId string
---@field channelId string
---@field client table
---@field conversationsThreadId string
---@field createdAt string
---@field createdBy string
---@field direction string
---@field errorMessage? string
---@field id string
---@field inReplyToId? string
---@field integrationIdempotencyId? string
---@field integrationThreadId? string
---@field messageDirection string
---@field preResolvedContacts table
---@field recipients table
---@field richText? string
---@field senders table
---@field status table
---@field statusType string
---@field subject? string
---@field text string
---@field timestamp string
---@field truncationStatus string
---@field type string
---@field updatedAt? string

---@class CustomChannelsPublicConversationsMessageUpdateData
---@field channel_id number
---@field id string
---@field archived? boolean
---@field associateWithContactId? number
---@field attachments? table
---@field channelAccountId? string
---@field channelId? string
---@field client? table
---@field conversationsThreadId? string
---@field createdAt? string
---@field createdBy? string
---@field direction? string
---@field errorMessage? string
---@field inReplyToId? string
---@field integrationIdempotencyId? string
---@field integrationThreadId? string
---@field messageDirection? string
---@field preResolvedContacts? table
---@field recipients? table
---@field richText? string
---@field senders? table
---@field status? table
---@field statusType? string
---@field subject? string
---@field text? string
---@field timestamp? string
---@field truncationStatus? string
---@field type? string
---@field updatedAt? string

---@class PublicThread
---@field id? string

---@class PublicThreadRemoveMatch
---@field id number

---@class Thread
---@field id? string

---@class ThreadRemoveMatch
---@field id number

---@class VisitorIdentificationIdentificationToken
---@field email string
---@field firstName? string
---@field hsCustomerAgentContext table
---@field lastName? string
---@field token string

---@class VisitorIdentificationIdentificationTokenCreateData
---@field email string
---@field firstName? string
---@field hsCustomerAgentContext table
---@field lastName? string
---@field token string

local M = {}

return M
