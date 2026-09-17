# Typed models for the HubspotConversations SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Channel(TypedDict):
    pass


class ChannelRemoveMatch(TypedDict):
    channel_id: int


class ConversationsBatchResponsePublicActorRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class ConversationsBatchResponsePublicActor(ConversationsBatchResponsePublicActorRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class ConversationsBatchResponsePublicActorCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class ConversationsBatchResponsePublicActorCreateData(ConversationsBatchResponsePublicActorCreateDataRequired, total=False):
    property: str
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class ConversationsCollectionResponsePublicMessageForwardPagingRequired(TypedDict):
    results: list


class ConversationsCollectionResponsePublicMessageForwardPaging(ConversationsCollectionResponsePublicMessageForwardPagingRequired, total=False):
    paging: dict


class ConversationsCollectionResponsePublicMessageForwardPagingListMatchRequired(TypedDict):
    thread_id: int


class ConversationsCollectionResponsePublicMessageForwardPagingListMatch(ConversationsCollectionResponsePublicMessageForwardPagingListMatchRequired, total=False):
    after: str
    archived: bool
    limit: int
    property: str
    sort: list


class ConversationsCollectionResponsePublicThreadForwardPagingRequired(TypedDict):
    archived: bool
    associatedContactId: str
    createdAt: str
    id: str
    inboxId: str
    originalChannelAccountId: str
    originalChannelId: str
    spam: bool
    status: str


class ConversationsCollectionResponsePublicThreadForwardPaging(ConversationsCollectionResponsePublicThreadForwardPagingRequired, total=False):
    assignedTo: str
    closedAt: str
    latestMessageReceivedTimestamp: str
    latestMessageSentTimestamp: str
    latestMessageTimestamp: str
    threadAssociations: dict


class ConversationsCollectionResponsePublicThreadForwardPagingListMatch(TypedDict, total=False):
    after: str
    archived: bool
    associated_contact_id: int
    associated_ticket_id: int
    association: list
    inbox_id: list
    latest_message_timestamp_after: str
    limit: int
    property: str
    sort: list
    thread_status: str


class ConversationsCollectionResponseWithTotalPublicChannel(TypedDict):
    id: str
    name: str


class ConversationsCollectionResponseWithTotalPublicChannelListMatch(TypedDict, total=False):
    after: str
    default_page_length: int
    limit: int
    sort: list


class ConversationsCollectionResponseWithTotalPublicChannelAccountRequired(TypedDict):
    active: bool
    archived: bool
    authorized: bool
    channelId: str
    createdAt: str
    deliveryIdentifier: dict
    id: str
    inboxId: str
    name: str


class ConversationsCollectionResponseWithTotalPublicChannelAccount(ConversationsCollectionResponseWithTotalPublicChannelAccountRequired, total=False):
    archivedAt: str


class ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch(TypedDict, total=False):
    after: str
    archived: bool
    channel_id: list
    default_page_length: int
    inbox_id: list
    limit: int
    sort: list


class ConversationsCollectionResponseWithTotalPublicInboxRequired(TypedDict):
    archived: bool
    createdAt: str
    id: str
    name: str
    type: str
    updatedAt: str


class ConversationsCollectionResponseWithTotalPublicInbox(ConversationsCollectionResponseWithTotalPublicInboxRequired, total=False):
    archivedAt: str


class ConversationsCollectionResponseWithTotalPublicInboxListMatch(TypedDict, total=False):
    after: str
    archived: bool
    default_page_length: int
    limit: int
    sort: list


class ConversationsInboxMessagesBatchResponsePublicActorRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class ConversationsInboxMessagesBatchResponsePublicActor(ConversationsInboxMessagesBatchResponsePublicActorRequired, total=False):
    links: dict
    requestedAt: str


class ConversationsInboxMessagesBatchResponsePublicActorCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class ConversationsInboxMessagesBatchResponsePublicActorCreateData(ConversationsInboxMessagesBatchResponsePublicActorCreateDataRequired, total=False):
    property: str
    links: dict
    requestedAt: str


class ConversationsInboxMessagesCollectionResponsePublicMessageRequired(TypedDict):
    results: list


class ConversationsInboxMessagesCollectionResponsePublicMessage(ConversationsInboxMessagesCollectionResponsePublicMessageRequired, total=False):
    paging: dict


class ConversationsInboxMessagesCollectionResponsePublicMessageListMatchRequired(TypedDict):
    thread_id: int


class ConversationsInboxMessagesCollectionResponsePublicMessageListMatch(ConversationsInboxMessagesCollectionResponsePublicMessageListMatchRequired, total=False):
    after: str
    archived: bool
    limit: int
    property: str
    sort: list


class ConversationsInboxMessagesCollectionResponsePublicThreadRequired(TypedDict):
    archived: bool
    associatedContactId: str
    createdAt: str
    id: str
    inboxId: str
    originalChannelAccountId: str
    originalChannelId: str
    spam: bool
    status: str


class ConversationsInboxMessagesCollectionResponsePublicThread(ConversationsInboxMessagesCollectionResponsePublicThreadRequired, total=False):
    assignedTo: str
    closedAt: str
    latestMessageReceivedTimestamp: str
    latestMessageSentTimestamp: str
    latestMessageTimestamp: str
    threadAssociations: dict


class ConversationsInboxMessagesCollectionResponsePublicThreadListMatch(TypedDict, total=False):
    after: str
    archived: bool
    associated_contact_id: int
    association: list
    inbox_id: list
    latest_message_timestamp_after: str
    limit: int
    property: str
    sort: list
    thread_status: str


class ConversationsInboxMessagesCollectionResponseWithTotalPublicRequired(TypedDict):
    active: bool
    archived: bool
    authorized: bool
    channelId: str
    createdAt: str
    deliveryIdentifier: dict
    id: str
    inboxId: str
    name: str


class ConversationsInboxMessagesCollectionResponseWithTotalPublic(ConversationsInboxMessagesCollectionResponseWithTotalPublicRequired, total=False):
    archivedAt: str


class ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch(TypedDict, total=False):
    after: str
    archived: bool
    channel_id: list
    default_page_length: int
    inbox_id: list
    limit: int
    sort: list


class ConversationsInboxMessagesCollectionResponseWithTotalPublic2(TypedDict):
    id: str
    name: str


class ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch(TypedDict, total=False):
    after: str
    default_page_length: int
    limit: int
    sort: list


class ConversationsInboxMessagesCollectionResponseWithTotalPublic3Required(TypedDict):
    archived: bool
    createdAt: str
    id: str
    name: str
    type: str
    updatedAt: str


class ConversationsInboxMessagesCollectionResponseWithTotalPublic3(ConversationsInboxMessagesCollectionResponseWithTotalPublic3Required, total=False):
    archivedAt: str


class ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch(TypedDict, total=False):
    after: str
    archived: bool
    default_page_length: int
    limit: int
    sort: list


class ConversationsInboxMessagesPublicActor(TypedDict, total=False):
    id: str


class ConversationsInboxMessagesPublicActorLoadMatchRequired(TypedDict):
    id: str


class ConversationsInboxMessagesPublicActorLoadMatch(ConversationsInboxMessagesPublicActorLoadMatchRequired, total=False):
    property: str


class ConversationsInboxMessagesPublicChannel(TypedDict):
    id: str
    name: str


class ConversationsInboxMessagesPublicChannelLoadMatch(TypedDict):
    id: int


class ConversationsInboxMessagesPublicChannelAccountRequired(TypedDict):
    type: str
    value: str


class ConversationsInboxMessagesPublicChannelAccount(ConversationsInboxMessagesPublicChannelAccountRequired, total=False):
    id: str


class ConversationsInboxMessagesPublicChannelAccountLoadMatchRequired(TypedDict):
    id: int


class ConversationsInboxMessagesPublicChannelAccountLoadMatch(ConversationsInboxMessagesPublicChannelAccountLoadMatchRequired, total=False):
    archived: bool


class ConversationsInboxMessagesPublicInboxRequired(TypedDict):
    archived: bool
    createdAt: str
    id: str
    name: str
    type: str
    updatedAt: str


class ConversationsInboxMessagesPublicInbox(ConversationsInboxMessagesPublicInboxRequired, total=False):
    archivedAt: str


class ConversationsInboxMessagesPublicInboxLoadMatchRequired(TypedDict):
    id: int


class ConversationsInboxMessagesPublicInboxLoadMatch(ConversationsInboxMessagesPublicInboxLoadMatchRequired, total=False):
    archived: bool


class ConversationsInboxMessagesPublicMessage(TypedDict, total=False):
    id: str


class ConversationsInboxMessagesPublicMessageLoadMatchRequired(TypedDict):
    id: str
    thread_id: int


class ConversationsInboxMessagesPublicMessageLoadMatch(ConversationsInboxMessagesPublicMessageLoadMatchRequired, total=False):
    property: str


class ConversationsInboxMessagesPublicMessageCreateDataRequired(TypedDict):
    thread_id: int


class ConversationsInboxMessagesPublicMessageCreateData(ConversationsInboxMessagesPublicMessageCreateDataRequired, total=False):
    id: str


class ConversationsInboxMessagesPublicMessageContent(TypedDict, total=False):
    richText: str
    text: str


class ConversationsInboxMessagesPublicMessageContentLoadMatchRequired(TypedDict):
    message_id: str
    thread_id: int


class ConversationsInboxMessagesPublicMessageContentLoadMatch(ConversationsInboxMessagesPublicMessageContentLoadMatchRequired, total=False):
    property: str


class ConversationsInboxMessagesPublicThread(TypedDict, total=False):
    archived: bool
    associatedTicketId: str
    id: str
    status: str


class ConversationsInboxMessagesPublicThreadLoadMatchRequired(TypedDict):
    id: int


class ConversationsInboxMessagesPublicThreadLoadMatch(ConversationsInboxMessagesPublicThreadLoadMatchRequired, total=False):
    archived: bool
    association: list
    property: str


class ConversationsInboxMessagesPublicThreadUpdateDataRequired(TypedDict):
    id: int


class ConversationsInboxMessagesPublicThreadUpdateData(ConversationsInboxMessagesPublicThreadUpdateDataRequired, total=False):
    archived: bool
    associatedTicketId: str
    status: str


class ConversationsPublicActor(TypedDict, total=False):
    id: str


class ConversationsPublicActorLoadMatchRequired(TypedDict):
    id: str


class ConversationsPublicActorLoadMatch(ConversationsPublicActorLoadMatchRequired, total=False):
    property: str


class ConversationsPublicChannel(TypedDict):
    id: str
    name: str


class ConversationsPublicChannelLoadMatch(TypedDict):
    id: int


class ConversationsPublicChannelAccountRequired(TypedDict):
    type: str
    value: str


class ConversationsPublicChannelAccount(ConversationsPublicChannelAccountRequired, total=False):
    id: str


class ConversationsPublicChannelAccountLoadMatchRequired(TypedDict):
    id: int


class ConversationsPublicChannelAccountLoadMatch(ConversationsPublicChannelAccountLoadMatchRequired, total=False):
    archived: bool


class ConversationsPublicInboxRequired(TypedDict):
    archived: bool
    createdAt: str
    id: str
    name: str
    type: str
    updatedAt: str


class ConversationsPublicInbox(ConversationsPublicInboxRequired, total=False):
    archivedAt: str


class ConversationsPublicInboxLoadMatchRequired(TypedDict):
    id: int


class ConversationsPublicInboxLoadMatch(ConversationsPublicInboxLoadMatchRequired, total=False):
    archived: bool


class ConversationsPublicMessage(TypedDict, total=False):
    id: str


class ConversationsPublicMessageLoadMatchRequired(TypedDict):
    id: str
    thread_id: int


class ConversationsPublicMessageLoadMatch(ConversationsPublicMessageLoadMatchRequired, total=False):
    property: str


class ConversationsPublicMessageCreateDataRequired(TypedDict):
    thread_id: int


class ConversationsPublicMessageCreateData(ConversationsPublicMessageCreateDataRequired, total=False):
    id: str


class ConversationsPublicMessageContent(TypedDict, total=False):
    richText: str
    text: str


class ConversationsPublicMessageContentLoadMatchRequired(TypedDict):
    message_id: str
    thread_id: int


class ConversationsPublicMessageContentLoadMatch(ConversationsPublicMessageContentLoadMatchRequired, total=False):
    property: str


class ConversationsPublicThread(TypedDict, total=False):
    archived: bool
    associatedTicketId: str
    id: str
    status: str


class ConversationsPublicThreadLoadMatchRequired(TypedDict):
    id: int


class ConversationsPublicThreadLoadMatch(ConversationsPublicThreadLoadMatchRequired, total=False):
    archived: bool
    association: list
    property: str


class ConversationsPublicThreadUpdateDataRequired(TypedDict):
    id: int


class ConversationsPublicThreadUpdateData(ConversationsPublicThreadUpdateDataRequired, total=False):
    archived: bool
    associatedTicketId: str
    status: str


class ConversationsPublicThreadRemoveMatch(TypedDict):
    thread_id: int


class CustomChannelsCollectionResponseWithTotalPublicChannelRequired(TypedDict):
    capabilities: dict
    createdAt: str
    id: str
    name: str


class CustomChannelsCollectionResponseWithTotalPublicChannel(CustomChannelsCollectionResponseWithTotalPublicChannelRequired, total=False):
    channelAccountConnectionRedirectUrl: str
    channelDescription: str
    channelLogoUrl: str
    webhookUrl: str


class CustomChannelsCollectionResponseWithTotalPublicChannelListMatch(TypedDict, total=False):
    after: str
    default_page_length: int
    limit: int
    sort: list


class CustomChannelsCollectionResponseWithTotalPublicChannel2Required(TypedDict):
    active: bool
    archived: bool
    authorized: bool
    channelId: str
    createdAt: str
    deliveryIdentifier: dict
    id: str
    inboxId: str
    name: str


class CustomChannelsCollectionResponseWithTotalPublicChannel2(CustomChannelsCollectionResponseWithTotalPublicChannel2Required, total=False):
    archivedAt: str


class CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatchRequired(TypedDict):
    channel_id: int


class CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch(CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatchRequired, total=False):
    after: str
    archived: bool
    default_page_length: int
    delivery_identifier_type: list
    delivery_identifier_value: list
    limit: int
    sort: list


class CustomChannelsPublicChannelAccountRequired(TypedDict):
    authorized: bool
    deliveryIdentifier: dict
    inboxId: str
    name: str
    type: str
    value: str


class CustomChannelsPublicChannelAccount(CustomChannelsPublicChannelAccountRequired, total=False):
    id: str


class CustomChannelsPublicChannelAccountLoadMatchRequired(TypedDict):
    channel_id: int
    id: int


class CustomChannelsPublicChannelAccountLoadMatch(CustomChannelsPublicChannelAccountLoadMatchRequired, total=False):
    archived: bool


class CustomChannelsPublicChannelAccountCreateDataRequired(TypedDict):
    channel_id: int
    authorized: bool
    deliveryIdentifier: dict
    inboxId: str
    name: str
    type: str
    value: str


class CustomChannelsPublicChannelAccountCreateData(CustomChannelsPublicChannelAccountCreateDataRequired, total=False):
    id: str


class CustomChannelsPublicChannelAccountUpdateDataRequired(TypedDict):
    channel_id: int
    id: int


class CustomChannelsPublicChannelAccountUpdateData(CustomChannelsPublicChannelAccountUpdateDataRequired, total=False):
    authorized: bool
    deliveryIdentifier: dict
    inboxId: str
    name: str
    type: str
    value: str


class CustomChannelsPublicChannelAccountStagingTokenRequired(TypedDict):
    deliveryIdentifier: dict
    type: str
    value: str


class CustomChannelsPublicChannelAccountStagingToken(CustomChannelsPublicChannelAccountStagingTokenRequired, total=False):
    accountName: str
    id: str


class CustomChannelsPublicChannelAccountStagingTokenUpdateDataRequired(TypedDict):
    channel_id: int
    id: str


class CustomChannelsPublicChannelAccountStagingTokenUpdateData(CustomChannelsPublicChannelAccountStagingTokenUpdateDataRequired, total=False):
    accountName: str
    deliveryIdentifier: dict
    type: str
    value: str


class CustomChannelsPublicChannelIntegrationChannelRequired(TypedDict):
    capabilities: dict
    name: str


class CustomChannelsPublicChannelIntegrationChannel(CustomChannelsPublicChannelIntegrationChannelRequired, total=False):
    channelAccountConnectionRedirectUrl: str
    channelDescription: str
    channelLogoUrl: str
    webhookUrl: str


class CustomChannelsPublicChannelIntegrationChannelLoadMatch(TypedDict):
    channel_id: int


class CustomChannelsPublicChannelIntegrationChannelCreateDataRequired(TypedDict):
    capabilities: dict
    name: str


class CustomChannelsPublicChannelIntegrationChannelCreateData(CustomChannelsPublicChannelIntegrationChannelCreateDataRequired, total=False):
    channelAccountConnectionRedirectUrl: str
    channelDescription: str
    channelLogoUrl: str
    webhookUrl: str


class CustomChannelsPublicChannelIntegrationChannelUpdateDataRequired(TypedDict):
    channel_id: int


class CustomChannelsPublicChannelIntegrationChannelUpdateData(CustomChannelsPublicChannelIntegrationChannelUpdateDataRequired, total=False):
    capabilities: dict
    channelAccountConnectionRedirectUrl: str
    channelDescription: str
    channelLogoUrl: str
    name: str
    webhookUrl: str


class CustomChannelsPublicConversationsMessageRequired(TypedDict):
    archived: bool
    attachments: list
    channelAccountId: str
    channelId: str
    client: dict
    conversationsThreadId: str
    createdAt: str
    createdBy: str
    direction: str
    id: str
    messageDirection: str
    preResolvedContacts: dict
    recipients: list
    senders: list
    status: dict
    statusType: str
    text: str
    timestamp: str
    truncationStatus: str
    type: str


class CustomChannelsPublicConversationsMessage(CustomChannelsPublicConversationsMessageRequired, total=False):
    associateWithContactId: int
    errorMessage: str
    inReplyToId: str
    integrationIdempotencyId: str
    integrationThreadId: str
    richText: str
    subject: str
    updatedAt: str


class CustomChannelsPublicConversationsMessageLoadMatch(TypedDict):
    channel_id: int
    id: str


class CustomChannelsPublicConversationsMessageCreateDataRequired(TypedDict):
    channel_id: int
    archived: bool
    attachments: list
    channelAccountId: str
    channelId: str
    client: dict
    conversationsThreadId: str
    createdAt: str
    createdBy: str
    direction: str
    id: str
    messageDirection: str
    preResolvedContacts: dict
    recipients: list
    senders: list
    status: dict
    statusType: str
    text: str
    timestamp: str
    truncationStatus: str
    type: str


class CustomChannelsPublicConversationsMessageCreateData(CustomChannelsPublicConversationsMessageCreateDataRequired, total=False):
    associateWithContactId: int
    errorMessage: str
    inReplyToId: str
    integrationIdempotencyId: str
    integrationThreadId: str
    richText: str
    subject: str
    updatedAt: str


class CustomChannelsPublicConversationsMessageUpdateDataRequired(TypedDict):
    channel_id: int
    id: str


class CustomChannelsPublicConversationsMessageUpdateData(CustomChannelsPublicConversationsMessageUpdateDataRequired, total=False):
    archived: bool
    associateWithContactId: int
    attachments: list
    channelAccountId: str
    channelId: str
    client: dict
    conversationsThreadId: str
    createdAt: str
    createdBy: str
    direction: str
    errorMessage: str
    inReplyToId: str
    integrationIdempotencyId: str
    integrationThreadId: str
    messageDirection: str
    preResolvedContacts: dict
    recipients: list
    richText: str
    senders: list
    status: dict
    statusType: str
    subject: str
    text: str
    timestamp: str
    truncationStatus: str
    type: str
    updatedAt: str


class PublicThread(TypedDict, total=False):
    id: str


class PublicThreadRemoveMatch(TypedDict):
    id: int


class Thread(TypedDict, total=False):
    id: str


class ThreadRemoveMatch(TypedDict):
    id: int


class VisitorIdentificationIdentificationTokenRequired(TypedDict):
    email: str
    hsCustomerAgentContext: dict
    token: str


class VisitorIdentificationIdentificationToken(VisitorIdentificationIdentificationTokenRequired, total=False):
    firstName: str
    lastName: str


class VisitorIdentificationIdentificationTokenCreateDataRequired(TypedDict):
    email: str
    hsCustomerAgentContext: dict
    token: str


class VisitorIdentificationIdentificationTokenCreateData(VisitorIdentificationIdentificationTokenCreateDataRequired, total=False):
    firstName: str
    lastName: str
