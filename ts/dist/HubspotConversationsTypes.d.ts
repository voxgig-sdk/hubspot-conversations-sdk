export interface Channel {
}
export interface ChannelRemoveMatch {
    channel_id: number;
}
export interface ConversationsBatchResponsePublicActor {
    completedAt: string;
    errors?: any[];
    inputs: any[];
    links?: Record<string, any>;
    numErrors?: number;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ConversationsBatchResponsePublicActorCreateData {
    property?: string;
    completedAt: string;
    errors?: any[];
    inputs: any[];
    links?: Record<string, any>;
    numErrors?: number;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ConversationsCollectionResponsePublicMessageForwardPaging {
    paging?: Record<string, any>;
    results: any[];
}
export interface ConversationsCollectionResponsePublicMessageForwardPagingListMatch {
    thread_id: number;
    after?: string;
    archived?: boolean;
    limit?: number;
    property?: string;
    sort?: any[];
}
export interface ConversationsCollectionResponsePublicThreadForwardPaging {
    archived: boolean;
    assignedTo?: string;
    associatedContactId: string;
    closedAt?: string;
    createdAt: string;
    id: string;
    inboxId: string;
    latestMessageReceivedTimestamp?: string;
    latestMessageSentTimestamp?: string;
    latestMessageTimestamp?: string;
    originalChannelAccountId: string;
    originalChannelId: string;
    spam: boolean;
    status: string;
    threadAssociations?: Record<string, any>;
}
export interface ConversationsCollectionResponsePublicThreadForwardPagingListMatch {
    after?: string;
    archived?: boolean;
    associated_contact_id?: number;
    associated_ticket_id?: number;
    association?: any[];
    inbox_id?: any[];
    latest_message_timestamp_after?: string;
    limit?: number;
    property?: string;
    sort?: any[];
    thread_status?: string;
}
export interface ConversationsCollectionResponseWithTotalPublicChannel {
    id: string;
    name: string;
}
export interface ConversationsCollectionResponseWithTotalPublicChannelListMatch {
    after?: string;
    default_page_length?: number;
    limit?: number;
    sort?: any[];
}
export interface ConversationsCollectionResponseWithTotalPublicChannelAccount {
    active: boolean;
    archived: boolean;
    archivedAt?: string;
    authorized: boolean;
    channelId: string;
    createdAt: string;
    deliveryIdentifier: Record<string, any>;
    id: string;
    inboxId: string;
    name: string;
}
export interface ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch {
    after?: string;
    archived?: boolean;
    channel_id?: any[];
    default_page_length?: number;
    inbox_id?: any[];
    limit?: number;
    sort?: any[];
}
export interface ConversationsCollectionResponseWithTotalPublicInbox {
    archived: boolean;
    archivedAt?: string;
    createdAt: string;
    id: string;
    name: string;
    type: string;
    updatedAt: string;
}
export interface ConversationsCollectionResponseWithTotalPublicInboxListMatch {
    after?: string;
    archived?: boolean;
    default_page_length?: number;
    limit?: number;
    sort?: any[];
}
export interface ConversationsInboxMessagesBatchResponsePublicActor {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ConversationsInboxMessagesBatchResponsePublicActorCreateData {
    property?: string;
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ConversationsInboxMessagesCollectionResponsePublicMessage {
    paging?: Record<string, any>;
    results: any[];
}
export interface ConversationsInboxMessagesCollectionResponsePublicMessageListMatch {
    thread_id: number;
    after?: string;
    archived?: boolean;
    limit?: number;
    property?: string;
    sort?: any[];
}
export interface ConversationsInboxMessagesCollectionResponsePublicThread {
    archived: boolean;
    assignedTo?: string;
    associatedContactId: string;
    closedAt?: string;
    createdAt: string;
    id: string;
    inboxId: string;
    latestMessageReceivedTimestamp?: string;
    latestMessageSentTimestamp?: string;
    latestMessageTimestamp?: string;
    originalChannelAccountId: string;
    originalChannelId: string;
    spam: boolean;
    status: string;
    threadAssociations?: Record<string, any>;
}
export interface ConversationsInboxMessagesCollectionResponsePublicThreadListMatch {
    after?: string;
    archived?: boolean;
    associated_contact_id?: number;
    association?: any[];
    inbox_id?: any[];
    latest_message_timestamp_after?: string;
    limit?: number;
    property?: string;
    sort?: any[];
    thread_status?: string;
}
export interface ConversationsInboxMessagesCollectionResponseWithTotalPublic {
    active: boolean;
    archived: boolean;
    archivedAt?: string;
    authorized: boolean;
    channelId: string;
    createdAt: string;
    deliveryIdentifier: Record<string, any>;
    id: string;
    inboxId: string;
    name: string;
}
export interface ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch {
    after?: string;
    archived?: boolean;
    channel_id?: any[];
    default_page_length?: number;
    inbox_id?: any[];
    limit?: number;
    sort?: any[];
}
export interface ConversationsInboxMessagesCollectionResponseWithTotalPublic2 {
    id: string;
    name: string;
}
export interface ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch {
    after?: string;
    default_page_length?: number;
    limit?: number;
    sort?: any[];
}
export interface ConversationsInboxMessagesCollectionResponseWithTotalPublic3 {
    archived: boolean;
    archivedAt?: string;
    createdAt: string;
    id: string;
    name: string;
    type: string;
    updatedAt: string;
}
export interface ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch {
    after?: string;
    archived?: boolean;
    default_page_length?: number;
    limit?: number;
    sort?: any[];
}
export interface ConversationsInboxMessagesPublicActor {
    id?: string;
}
export interface ConversationsInboxMessagesPublicActorLoadMatch {
    id: string;
    property?: string;
}
export interface ConversationsInboxMessagesPublicChannel {
    id: string;
    name: string;
}
export interface ConversationsInboxMessagesPublicChannelLoadMatch {
    id: number;
}
export interface ConversationsInboxMessagesPublicChannelAccount {
    id?: string;
    type: string;
    value: string;
}
export interface ConversationsInboxMessagesPublicChannelAccountLoadMatch {
    id: number;
    archived?: boolean;
}
export interface ConversationsInboxMessagesPublicInbox {
    archived: boolean;
    archivedAt?: string;
    createdAt: string;
    id: string;
    name: string;
    type: string;
    updatedAt: string;
}
export interface ConversationsInboxMessagesPublicInboxLoadMatch {
    id: number;
    archived?: boolean;
}
export interface ConversationsInboxMessagesPublicMessage {
    id?: string;
}
export interface ConversationsInboxMessagesPublicMessageLoadMatch {
    id: string;
    thread_id: number;
    property?: string;
}
export interface ConversationsInboxMessagesPublicMessageCreateData {
    thread_id: number;
    id?: string;
}
export interface ConversationsInboxMessagesPublicMessageContent {
    richText?: string;
    text?: string;
}
export interface ConversationsInboxMessagesPublicMessageContentLoadMatch {
    message_id: string;
    thread_id: number;
    property?: string;
}
export interface ConversationsInboxMessagesPublicThread {
    archived?: boolean;
    associatedTicketId?: string;
    id?: string;
    status?: string;
}
export interface ConversationsInboxMessagesPublicThreadLoadMatch {
    id: number;
    archived?: boolean;
    association?: any[];
    property?: string;
}
export interface ConversationsInboxMessagesPublicThreadUpdateData {
    id: number;
    archived?: boolean;
    associatedTicketId?: string;
    status?: string;
}
export interface ConversationsPublicActor {
    id?: string;
}
export interface ConversationsPublicActorLoadMatch {
    id: string;
    property?: string;
}
export interface ConversationsPublicChannel {
    id: string;
    name: string;
}
export interface ConversationsPublicChannelLoadMatch {
    id: number;
}
export interface ConversationsPublicChannelAccount {
    id?: string;
    type: string;
    value: string;
}
export interface ConversationsPublicChannelAccountLoadMatch {
    id: number;
    archived?: boolean;
}
export interface ConversationsPublicInbox {
    archived: boolean;
    archivedAt?: string;
    createdAt: string;
    id: string;
    name: string;
    type: string;
    updatedAt: string;
}
export interface ConversationsPublicInboxLoadMatch {
    id: number;
    archived?: boolean;
}
export interface ConversationsPublicMessage {
    id?: string;
}
export interface ConversationsPublicMessageLoadMatch {
    id: string;
    thread_id: number;
    property?: string;
}
export interface ConversationsPublicMessageCreateData {
    thread_id: number;
    id?: string;
}
export interface ConversationsPublicMessageContent {
    richText?: string;
    text?: string;
}
export interface ConversationsPublicMessageContentLoadMatch {
    message_id: string;
    thread_id: number;
    property?: string;
}
export interface ConversationsPublicThread {
    archived?: boolean;
    associatedTicketId?: string;
    id?: string;
    status?: string;
}
export interface ConversationsPublicThreadLoadMatch {
    id: number;
    archived?: boolean;
    association?: any[];
    property?: string;
}
export interface ConversationsPublicThreadUpdateData {
    id: number;
    archived?: boolean;
    associatedTicketId?: string;
    status?: string;
    $action?: string;
    [action: string]: any;
}
export interface ConversationsPublicThreadRemoveMatch {
    thread_id: number;
    $action?: string;
    [action: string]: any;
}
export interface CustomChannelsCollectionResponseWithTotalPublicChannel {
    capabilities: Record<string, any>;
    channelAccountConnectionRedirectUrl?: string;
    channelDescription?: string;
    channelLogoUrl?: string;
    createdAt: string;
    id: string;
    name: string;
    webhookUrl?: string;
}
export interface CustomChannelsCollectionResponseWithTotalPublicChannelListMatch {
    after?: string;
    default_page_length?: number;
    limit?: number;
    sort?: any[];
}
export interface CustomChannelsCollectionResponseWithTotalPublicChannel2 {
    active: boolean;
    archived: boolean;
    archivedAt?: string;
    authorized: boolean;
    channelId: string;
    createdAt: string;
    deliveryIdentifier: Record<string, any>;
    id: string;
    inboxId: string;
    name: string;
}
export interface CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch {
    channel_id: number;
    after?: string;
    archived?: boolean;
    default_page_length?: number;
    delivery_identifier_type?: any[];
    delivery_identifier_value?: any[];
    limit?: number;
    sort?: any[];
}
export interface CustomChannelsPublicChannelAccount {
    authorized: boolean;
    deliveryIdentifier: Record<string, any>;
    id?: string;
    inboxId: string;
    name: string;
    type: string;
    value: string;
}
export interface CustomChannelsPublicChannelAccountLoadMatch {
    channel_id: number;
    id: number;
    archived?: boolean;
}
export interface CustomChannelsPublicChannelAccountCreateData {
    channel_id: number;
    authorized: boolean;
    deliveryIdentifier: Record<string, any>;
    id?: string;
    inboxId: string;
    name: string;
    type: string;
    value: string;
}
export interface CustomChannelsPublicChannelAccountUpdateData {
    channel_id: number;
    id: number;
    authorized?: boolean;
    deliveryIdentifier?: Record<string, any>;
    inboxId?: string;
    name?: string;
    type?: string;
    value?: string;
}
export interface CustomChannelsPublicChannelAccountStagingToken {
    accountName?: string;
    deliveryIdentifier: Record<string, any>;
    id?: string;
    type: string;
    value: string;
}
export interface CustomChannelsPublicChannelAccountStagingTokenUpdateData {
    channel_id: number;
    id: string;
    accountName?: string;
    deliveryIdentifier?: Record<string, any>;
    type?: string;
    value?: string;
}
export interface CustomChannelsPublicChannelIntegrationChannel {
    capabilities: Record<string, any>;
    channelAccountConnectionRedirectUrl?: string;
    channelDescription?: string;
    channelLogoUrl?: string;
    name: string;
    webhookUrl?: string;
}
export interface CustomChannelsPublicChannelIntegrationChannelLoadMatch {
    channel_id: number;
}
export interface CustomChannelsPublicChannelIntegrationChannelCreateData {
    capabilities: Record<string, any>;
    channelAccountConnectionRedirectUrl?: string;
    channelDescription?: string;
    channelLogoUrl?: string;
    name: string;
    webhookUrl?: string;
}
export interface CustomChannelsPublicChannelIntegrationChannelUpdateData {
    channel_id: number;
    capabilities?: Record<string, any>;
    channelAccountConnectionRedirectUrl?: string;
    channelDescription?: string;
    channelLogoUrl?: string;
    name?: string;
    webhookUrl?: string;
}
export interface CustomChannelsPublicConversationsMessage {
    archived: boolean;
    associateWithContactId?: number;
    attachments: any[];
    channelAccountId: string;
    channelId: string;
    client: Record<string, any>;
    conversationsThreadId: string;
    createdAt: string;
    createdBy: string;
    direction: string;
    errorMessage?: string;
    id: string;
    inReplyToId?: string;
    integrationIdempotencyId?: string;
    integrationThreadId?: string;
    messageDirection: string;
    preResolvedContacts: Record<string, any>;
    recipients: any[];
    richText?: string;
    senders: any[];
    status: Record<string, any>;
    statusType: string;
    subject?: string;
    text: string;
    timestamp: string;
    truncationStatus: string;
    type: string;
    updatedAt?: string;
}
export interface CustomChannelsPublicConversationsMessageLoadMatch {
    channel_id: number;
    id: string;
}
export interface CustomChannelsPublicConversationsMessageCreateData {
    channel_id: number;
    archived: boolean;
    associateWithContactId?: number;
    attachments: any[];
    channelAccountId: string;
    channelId: string;
    client: Record<string, any>;
    conversationsThreadId: string;
    createdAt: string;
    createdBy: string;
    direction: string;
    errorMessage?: string;
    id: string;
    inReplyToId?: string;
    integrationIdempotencyId?: string;
    integrationThreadId?: string;
    messageDirection: string;
    preResolvedContacts: Record<string, any>;
    recipients: any[];
    richText?: string;
    senders: any[];
    status: Record<string, any>;
    statusType: string;
    subject?: string;
    text: string;
    timestamp: string;
    truncationStatus: string;
    type: string;
    updatedAt?: string;
}
export interface CustomChannelsPublicConversationsMessageUpdateData {
    channel_id: number;
    id: string;
    archived?: boolean;
    associateWithContactId?: number;
    attachments?: any[];
    channelAccountId?: string;
    channelId?: string;
    client?: Record<string, any>;
    conversationsThreadId?: string;
    createdAt?: string;
    createdBy?: string;
    direction?: string;
    errorMessage?: string;
    inReplyToId?: string;
    integrationIdempotencyId?: string;
    integrationThreadId?: string;
    messageDirection?: string;
    preResolvedContacts?: Record<string, any>;
    recipients?: any[];
    richText?: string;
    senders?: any[];
    status?: Record<string, any>;
    statusType?: string;
    subject?: string;
    text?: string;
    timestamp?: string;
    truncationStatus?: string;
    type?: string;
    updatedAt?: string;
}
export interface PublicThread {
    id?: string;
}
export interface PublicThreadRemoveMatch {
    id: number;
}
export interface Thread {
    id?: string;
}
export interface ThreadRemoveMatch {
    id: number;
}
export interface VisitorIdentificationIdentificationToken {
    email: string;
    firstName?: string;
    hsCustomerAgentContext: Record<string, any>;
    lastName?: string;
    token: string;
}
export interface VisitorIdentificationIdentificationTokenCreateData {
    email: string;
    firstName?: string;
    hsCustomerAgentContext: Record<string, any>;
    lastName?: string;
    token: string;
}
