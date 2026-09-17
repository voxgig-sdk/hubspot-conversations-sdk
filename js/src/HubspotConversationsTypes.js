// Typed models for the HubspotConversations SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Channel
 */

/**
 * @typedef {Object} ChannelRemoveMatch
 * @property {number} channel_id
 */

/**
 * @typedef {Object} ConversationsBatchResponsePublicActor
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ConversationsBatchResponsePublicActorCreateData
 * @property {string} [property]
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ConversationsCollectionResponsePublicMessageForwardPaging
 * @property {Object} [paging]
 * @property {Array} results
 */

/**
 * @typedef {Object} ConversationsCollectionResponsePublicMessageForwardPagingListMatch
 * @property {number} thread_id
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [limit]
 * @property {string} [property]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsCollectionResponsePublicThreadForwardPaging
 * @property {boolean} archived
 * @property {string} [assignedTo]
 * @property {string} associatedContactId
 * @property {string} [closedAt]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} inboxId
 * @property {string} [latestMessageReceivedTimestamp]
 * @property {string} [latestMessageSentTimestamp]
 * @property {string} [latestMessageTimestamp]
 * @property {string} originalChannelAccountId
 * @property {string} originalChannelId
 * @property {boolean} spam
 * @property {string} status
 * @property {Object} [threadAssociations]
 */

/**
 * @typedef {Object} ConversationsCollectionResponsePublicThreadForwardPagingListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [associated_contact_id]
 * @property {number} [associated_ticket_id]
 * @property {Array} [association]
 * @property {Array} [inbox_id]
 * @property {string} [latest_message_timestamp_after]
 * @property {number} [limit]
 * @property {string} [property]
 * @property {Array} [sort]
 * @property {string} [thread_status]
 */

/**
 * @typedef {Object} ConversationsCollectionResponseWithTotalPublicChannel
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} ConversationsCollectionResponseWithTotalPublicChannelListMatch
 * @property {string} [after]
 * @property {number} [default_page_length]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsCollectionResponseWithTotalPublicChannelAccount
 * @property {boolean} active
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {boolean} authorized
 * @property {string} channelId
 * @property {string} createdAt
 * @property {Object} deliveryIdentifier
 * @property {string} id
 * @property {string} inboxId
 * @property {string} name
 */

/**
 * @typedef {Object} ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {Array} [channel_id]
 * @property {number} [default_page_length]
 * @property {Array} [inbox_id]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsCollectionResponseWithTotalPublicInbox
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} ConversationsCollectionResponseWithTotalPublicInboxListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [default_page_length]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesBatchResponsePublicActor
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ConversationsInboxMessagesBatchResponsePublicActorCreateData
 * @property {string} [property]
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponsePublicMessage
 * @property {Object} [paging]
 * @property {Array} results
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponsePublicMessageListMatch
 * @property {number} thread_id
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [limit]
 * @property {string} [property]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponsePublicThread
 * @property {boolean} archived
 * @property {string} [assignedTo]
 * @property {string} associatedContactId
 * @property {string} [closedAt]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} inboxId
 * @property {string} [latestMessageReceivedTimestamp]
 * @property {string} [latestMessageSentTimestamp]
 * @property {string} [latestMessageTimestamp]
 * @property {string} originalChannelAccountId
 * @property {string} originalChannelId
 * @property {boolean} spam
 * @property {string} status
 * @property {Object} [threadAssociations]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponsePublicThreadListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [associated_contact_id]
 * @property {Array} [association]
 * @property {Array} [inbox_id]
 * @property {string} [latest_message_timestamp_after]
 * @property {number} [limit]
 * @property {string} [property]
 * @property {Array} [sort]
 * @property {string} [thread_status]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponseWithTotalPublic
 * @property {boolean} active
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {boolean} authorized
 * @property {string} channelId
 * @property {string} createdAt
 * @property {Object} deliveryIdentifier
 * @property {string} id
 * @property {string} inboxId
 * @property {string} name
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {Array} [channel_id]
 * @property {number} [default_page_length]
 * @property {Array} [inbox_id]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponseWithTotalPublic2
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch
 * @property {string} [after]
 * @property {number} [default_page_length]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponseWithTotalPublic3
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [default_page_length]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicActor
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicActorLoadMatch
 * @property {string} id
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicChannel
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicChannelLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicChannelAccount
 * @property {string} [id]
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicChannelAccountLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicInbox
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicInboxLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicMessage
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicMessageLoadMatch
 * @property {string} id
 * @property {number} thread_id
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicMessageCreateData
 * @property {number} thread_id
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicMessageContent
 * @property {string} [richText]
 * @property {string} [text]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicMessageContentLoadMatch
 * @property {string} message_id
 * @property {number} thread_id
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicThread
 * @property {boolean} [archived]
 * @property {string} [associatedTicketId]
 * @property {string} [id]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicThreadLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 * @property {Array} [association]
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsInboxMessagesPublicThreadUpdateData
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [associatedTicketId]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ConversationsPublicActor
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationsPublicActorLoadMatch
 * @property {string} id
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsPublicChannel
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} ConversationsPublicChannelLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ConversationsPublicChannelAccount
 * @property {string} [id]
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} ConversationsPublicChannelAccountLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} ConversationsPublicInbox
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} ConversationsPublicInboxLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} ConversationsPublicMessage
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationsPublicMessageLoadMatch
 * @property {string} id
 * @property {number} thread_id
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsPublicMessageCreateData
 * @property {number} thread_id
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationsPublicMessageContent
 * @property {string} [richText]
 * @property {string} [text]
 */

/**
 * @typedef {Object} ConversationsPublicMessageContentLoadMatch
 * @property {string} message_id
 * @property {number} thread_id
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsPublicThread
 * @property {boolean} [archived]
 * @property {string} [associatedTicketId]
 * @property {string} [id]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ConversationsPublicThreadLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 * @property {Array} [association]
 * @property {string} [property]
 */

/**
 * @typedef {Object} ConversationsPublicThreadUpdateData
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [associatedTicketId]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ConversationsPublicThreadRemoveMatch
 * @property {number} thread_id
 */

/**
 * @typedef {Object} CustomChannelsCollectionResponseWithTotalPublicChannel
 * @property {Object} capabilities
 * @property {string} [channelAccountConnectionRedirectUrl]
 * @property {string} [channelDescription]
 * @property {string} [channelLogoUrl]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} name
 * @property {string} [webhookUrl]
 */

/**
 * @typedef {Object} CustomChannelsCollectionResponseWithTotalPublicChannelListMatch
 * @property {string} [after]
 * @property {number} [default_page_length]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} CustomChannelsCollectionResponseWithTotalPublicChannel2
 * @property {boolean} active
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {boolean} authorized
 * @property {string} channelId
 * @property {string} createdAt
 * @property {Object} deliveryIdentifier
 * @property {string} id
 * @property {string} inboxId
 * @property {string} name
 */

/**
 * @typedef {Object} CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch
 * @property {number} channel_id
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [default_page_length]
 * @property {Array} [delivery_identifier_type]
 * @property {Array} [delivery_identifier_value]
 * @property {number} [limit]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelAccount
 * @property {boolean} authorized
 * @property {Object} deliveryIdentifier
 * @property {string} [id]
 * @property {string} inboxId
 * @property {string} name
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelAccountLoadMatch
 * @property {number} channel_id
 * @property {number} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelAccountCreateData
 * @property {number} channel_id
 * @property {boolean} authorized
 * @property {Object} deliveryIdentifier
 * @property {string} [id]
 * @property {string} inboxId
 * @property {string} name
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelAccountUpdateData
 * @property {number} channel_id
 * @property {number} id
 * @property {boolean} [authorized]
 * @property {Object} [deliveryIdentifier]
 * @property {string} [inboxId]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelAccountStagingToken
 * @property {string} [accountName]
 * @property {Object} deliveryIdentifier
 * @property {string} [id]
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelAccountStagingTokenUpdateData
 * @property {number} channel_id
 * @property {string} id
 * @property {string} [accountName]
 * @property {Object} [deliveryIdentifier]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelIntegrationChannel
 * @property {Object} capabilities
 * @property {string} [channelAccountConnectionRedirectUrl]
 * @property {string} [channelDescription]
 * @property {string} [channelLogoUrl]
 * @property {string} name
 * @property {string} [webhookUrl]
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelIntegrationChannelLoadMatch
 * @property {number} channel_id
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelIntegrationChannelCreateData
 * @property {Object} capabilities
 * @property {string} [channelAccountConnectionRedirectUrl]
 * @property {string} [channelDescription]
 * @property {string} [channelLogoUrl]
 * @property {string} name
 * @property {string} [webhookUrl]
 */

/**
 * @typedef {Object} CustomChannelsPublicChannelIntegrationChannelUpdateData
 * @property {number} channel_id
 * @property {Object} [capabilities]
 * @property {string} [channelAccountConnectionRedirectUrl]
 * @property {string} [channelDescription]
 * @property {string} [channelLogoUrl]
 * @property {string} [name]
 * @property {string} [webhookUrl]
 */

/**
 * @typedef {Object} CustomChannelsPublicConversationsMessage
 * @property {boolean} archived
 * @property {number} [associateWithContactId]
 * @property {Array} attachments
 * @property {string} channelAccountId
 * @property {string} channelId
 * @property {Object} client
 * @property {string} conversationsThreadId
 * @property {string} createdAt
 * @property {string} createdBy
 * @property {string} direction
 * @property {string} [errorMessage]
 * @property {string} id
 * @property {string} [inReplyToId]
 * @property {string} [integrationIdempotencyId]
 * @property {string} [integrationThreadId]
 * @property {string} messageDirection
 * @property {Object} preResolvedContacts
 * @property {Array} recipients
 * @property {string} [richText]
 * @property {Array} senders
 * @property {Object} status
 * @property {string} statusType
 * @property {string} [subject]
 * @property {string} text
 * @property {string} timestamp
 * @property {string} truncationStatus
 * @property {string} type
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} CustomChannelsPublicConversationsMessageLoadMatch
 * @property {number} channel_id
 * @property {string} id
 */

/**
 * @typedef {Object} CustomChannelsPublicConversationsMessageCreateData
 * @property {number} channel_id
 * @property {boolean} archived
 * @property {number} [associateWithContactId]
 * @property {Array} attachments
 * @property {string} channelAccountId
 * @property {string} channelId
 * @property {Object} client
 * @property {string} conversationsThreadId
 * @property {string} createdAt
 * @property {string} createdBy
 * @property {string} direction
 * @property {string} [errorMessage]
 * @property {string} id
 * @property {string} [inReplyToId]
 * @property {string} [integrationIdempotencyId]
 * @property {string} [integrationThreadId]
 * @property {string} messageDirection
 * @property {Object} preResolvedContacts
 * @property {Array} recipients
 * @property {string} [richText]
 * @property {Array} senders
 * @property {Object} status
 * @property {string} statusType
 * @property {string} [subject]
 * @property {string} text
 * @property {string} timestamp
 * @property {string} truncationStatus
 * @property {string} type
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} CustomChannelsPublicConversationsMessageUpdateData
 * @property {number} channel_id
 * @property {string} id
 * @property {boolean} [archived]
 * @property {number} [associateWithContactId]
 * @property {Array} [attachments]
 * @property {string} [channelAccountId]
 * @property {string} [channelId]
 * @property {Object} [client]
 * @property {string} [conversationsThreadId]
 * @property {string} [createdAt]
 * @property {string} [createdBy]
 * @property {string} [direction]
 * @property {string} [errorMessage]
 * @property {string} [inReplyToId]
 * @property {string} [integrationIdempotencyId]
 * @property {string} [integrationThreadId]
 * @property {string} [messageDirection]
 * @property {Object} [preResolvedContacts]
 * @property {Array} [recipients]
 * @property {string} [richText]
 * @property {Array} [senders]
 * @property {Object} [status]
 * @property {string} [statusType]
 * @property {string} [subject]
 * @property {string} [text]
 * @property {string} [timestamp]
 * @property {string} [truncationStatus]
 * @property {string} [type]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PublicThread
 * @property {string} [id]
 */

/**
 * @typedef {Object} PublicThreadRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Thread
 * @property {string} [id]
 */

/**
 * @typedef {Object} ThreadRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} VisitorIdentificationIdentificationToken
 * @property {string} email
 * @property {string} [firstName]
 * @property {Object} hsCustomerAgentContext
 * @property {string} [lastName]
 * @property {string} token
 */

/**
 * @typedef {Object} VisitorIdentificationIdentificationTokenCreateData
 * @property {string} email
 * @property {string} [firstName]
 * @property {Object} hsCustomerAgentContext
 * @property {string} [lastName]
 * @property {string} token
 */

