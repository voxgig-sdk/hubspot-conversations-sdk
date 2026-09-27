// Typed models for the HubspotConversations SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-conversations-sdk/go/core"
)

// Channel is the typed data model for the channel entity.
type Channel struct {
}

// ChannelRemoveMatch is the typed request payload for Channel.RemoveTyped.
type ChannelRemoveMatch struct {
	ChannelId int `json:"channel_id"`
}

// ConversationsBatchResponsePublicActor is the typed data model for the conversations_batch_response_public_actor entity.
type ConversationsBatchResponsePublicActor struct {
}

// ConversationsBatchResponsePublicActorCreateData is the typed request payload for ConversationsBatchResponsePublicActor.CreateTyped.
type ConversationsBatchResponsePublicActorCreateData struct {
	Property *string `json:"property,omitempty"`
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// ConversationsCollectionResponsePublicMessageForwardPaging is the typed data model for the conversations_collection_response_public_message_forward_paging entity.
type ConversationsCollectionResponsePublicMessageForwardPaging struct {
}

// ConversationsCollectionResponsePublicMessageForwardPagingListMatch is the typed request payload for ConversationsCollectionResponsePublicMessageForwardPaging.ListTyped.
type ConversationsCollectionResponsePublicMessageForwardPagingListMatch struct {
	ThreadId int `json:"thread_id"`
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Property *string `json:"property,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsCollectionResponsePublicThreadForwardPaging is the typed data model for the conversations_collection_response_public_thread_forward_paging entity.
type ConversationsCollectionResponsePublicThreadForwardPaging struct {
}

// ConversationsCollectionResponsePublicThreadForwardPagingListMatch is the typed request payload for ConversationsCollectionResponsePublicThreadForwardPaging.ListTyped.
type ConversationsCollectionResponsePublicThreadForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedContactId *int `json:"associated_contact_id,omitempty"`
	AssociatedTicketId *int `json:"associated_ticket_id,omitempty"`
	Association *[]any `json:"association,omitempty"`
	InboxId *[]any `json:"inbox_id,omitempty"`
	LatestMessageTimestampAfter *string `json:"latest_message_timestamp_after,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Property *string `json:"property,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
	ThreadStatus *string `json:"thread_status,omitempty"`
}

// ConversationsCollectionResponseWithTotalPublicChannel is the typed data model for the conversations_collection_response_with_total_public_channel entity.
type ConversationsCollectionResponseWithTotalPublicChannel struct {
}

// ConversationsCollectionResponseWithTotalPublicChannelListMatch is the typed request payload for ConversationsCollectionResponseWithTotalPublicChannel.ListTyped.
type ConversationsCollectionResponseWithTotalPublicChannelListMatch struct {
	After *string `json:"after,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsCollectionResponseWithTotalPublicChannelAccount is the typed data model for the conversations_collection_response_with_total_public_channel_account entity.
type ConversationsCollectionResponseWithTotalPublicChannelAccount struct {
}

// ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch is the typed request payload for ConversationsCollectionResponseWithTotalPublicChannelAccount.ListTyped.
type ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	ChannelId *[]any `json:"channel_id,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	InboxId *[]any `json:"inbox_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsCollectionResponseWithTotalPublicInbox is the typed data model for the conversations_collection_response_with_total_public_inbox entity.
type ConversationsCollectionResponseWithTotalPublicInbox struct {
}

// ConversationsCollectionResponseWithTotalPublicInboxListMatch is the typed request payload for ConversationsCollectionResponseWithTotalPublicInbox.ListTyped.
type ConversationsCollectionResponseWithTotalPublicInboxListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsInboxMessagesBatchResponsePublicActor is the typed data model for the conversations_inbox_messages_batch_response_public_actor entity.
type ConversationsInboxMessagesBatchResponsePublicActor struct {
}

// ConversationsInboxMessagesBatchResponsePublicActorCreateData is the typed request payload for ConversationsInboxMessagesBatchResponsePublicActor.CreateTyped.
type ConversationsInboxMessagesBatchResponsePublicActorCreateData struct {
	Property *string `json:"property,omitempty"`
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// ConversationsInboxMessagesCollectionResponsePublicMessage is the typed data model for the conversations_inbox_messages_collection_response_public_message entity.
type ConversationsInboxMessagesCollectionResponsePublicMessage struct {
}

// ConversationsInboxMessagesCollectionResponsePublicMessageListMatch is the typed request payload for ConversationsInboxMessagesCollectionResponsePublicMessage.ListTyped.
type ConversationsInboxMessagesCollectionResponsePublicMessageListMatch struct {
	ThreadId int `json:"thread_id"`
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Property *string `json:"property,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsInboxMessagesCollectionResponsePublicThread is the typed data model for the conversations_inbox_messages_collection_response_public_thread entity.
type ConversationsInboxMessagesCollectionResponsePublicThread struct {
}

// ConversationsInboxMessagesCollectionResponsePublicThreadListMatch is the typed request payload for ConversationsInboxMessagesCollectionResponsePublicThread.ListTyped.
type ConversationsInboxMessagesCollectionResponsePublicThreadListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedContactId *int `json:"associated_contact_id,omitempty"`
	Association *[]any `json:"association,omitempty"`
	InboxId *[]any `json:"inbox_id,omitempty"`
	LatestMessageTimestampAfter *string `json:"latest_message_timestamp_after,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Property *string `json:"property,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
	ThreadStatus *string `json:"thread_status,omitempty"`
}

// ConversationsInboxMessagesCollectionResponseWithTotalPublic is the typed data model for the conversations_inbox_messages_collection_response_with_total_public entity.
type ConversationsInboxMessagesCollectionResponseWithTotalPublic struct {
}

// ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch is the typed request payload for ConversationsInboxMessagesCollectionResponseWithTotalPublic.ListTyped.
type ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	ChannelId *[]any `json:"channel_id,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	InboxId *[]any `json:"inbox_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsInboxMessagesCollectionResponseWithTotalPublic2 is the typed data model for the conversations_inbox_messages_collection_response_with_total_public2 entity.
type ConversationsInboxMessagesCollectionResponseWithTotalPublic2 struct {
}

// ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch is the typed request payload for ConversationsInboxMessagesCollectionResponseWithTotalPublic2.ListTyped.
type ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch struct {
	After *string `json:"after,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsInboxMessagesCollectionResponseWithTotalPublic3 is the typed data model for the conversations_inbox_messages_collection_response_with_total_public3 entity.
type ConversationsInboxMessagesCollectionResponseWithTotalPublic3 struct {
}

// ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch is the typed request payload for ConversationsInboxMessagesCollectionResponseWithTotalPublic3.ListTyped.
type ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ConversationsInboxMessagesPublicActor is the typed data model for the conversations_inbox_messages_public_actor entity.
type ConversationsInboxMessagesPublicActor struct {
}

// ConversationsInboxMessagesPublicActorLoadMatch is the typed request payload for ConversationsInboxMessagesPublicActor.LoadTyped.
type ConversationsInboxMessagesPublicActorLoadMatch struct {
	Id string `json:"id"`
	Property *string `json:"property,omitempty"`
}

// ConversationsInboxMessagesPublicChannel is the typed data model for the conversations_inbox_messages_public_channel entity.
type ConversationsInboxMessagesPublicChannel struct {
}

// ConversationsInboxMessagesPublicChannelLoadMatch is the typed request payload for ConversationsInboxMessagesPublicChannel.LoadTyped.
type ConversationsInboxMessagesPublicChannelLoadMatch struct {
	Id int `json:"id"`
}

// ConversationsInboxMessagesPublicChannelAccount is the typed data model for the conversations_inbox_messages_public_channel_account entity.
type ConversationsInboxMessagesPublicChannelAccount struct {
}

// ConversationsInboxMessagesPublicChannelAccountLoadMatch is the typed request payload for ConversationsInboxMessagesPublicChannelAccount.LoadTyped.
type ConversationsInboxMessagesPublicChannelAccountLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// ConversationsInboxMessagesPublicInbox is the typed data model for the conversations_inbox_messages_public_inbox entity.
type ConversationsInboxMessagesPublicInbox struct {
}

// ConversationsInboxMessagesPublicInboxLoadMatch is the typed request payload for ConversationsInboxMessagesPublicInbox.LoadTyped.
type ConversationsInboxMessagesPublicInboxLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// ConversationsInboxMessagesPublicMessage is the typed data model for the conversations_inbox_messages_public_message entity.
type ConversationsInboxMessagesPublicMessage struct {
}

// ConversationsInboxMessagesPublicMessageLoadMatch is the typed request payload for ConversationsInboxMessagesPublicMessage.LoadTyped.
type ConversationsInboxMessagesPublicMessageLoadMatch struct {
	Id string `json:"id"`
	ThreadId int `json:"thread_id"`
	Property *string `json:"property,omitempty"`
}

// ConversationsInboxMessagesPublicMessageCreateData is the typed request payload for ConversationsInboxMessagesPublicMessage.CreateTyped.
type ConversationsInboxMessagesPublicMessageCreateData struct {
	ThreadId int `json:"thread_id"`
	Id *string `json:"id,omitempty"`
}

// ConversationsInboxMessagesPublicMessageContent is the typed data model for the conversations_inbox_messages_public_message_content entity.
type ConversationsInboxMessagesPublicMessageContent struct {
}

// ConversationsInboxMessagesPublicMessageContentLoadMatch is the typed request payload for ConversationsInboxMessagesPublicMessageContent.LoadTyped.
type ConversationsInboxMessagesPublicMessageContentLoadMatch struct {
	MessageId string `json:"message_id"`
	ThreadId int `json:"thread_id"`
	Property *string `json:"property,omitempty"`
}

// ConversationsInboxMessagesPublicThread is the typed data model for the conversations_inbox_messages_public_thread entity.
type ConversationsInboxMessagesPublicThread struct {
}

// ConversationsInboxMessagesPublicThreadLoadMatch is the typed request payload for ConversationsInboxMessagesPublicThread.LoadTyped.
type ConversationsInboxMessagesPublicThreadLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	Association *[]any `json:"association,omitempty"`
	Property *string `json:"property,omitempty"`
}

// ConversationsInboxMessagesPublicThreadUpdateData is the typed request payload for ConversationsInboxMessagesPublicThread.UpdateTyped.
type ConversationsInboxMessagesPublicThreadUpdateData struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedTicketId *string `json:"associatedTicketId,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ConversationsPublicActor is the typed data model for the conversations_public_actor entity.
type ConversationsPublicActor struct {
}

// ConversationsPublicActorLoadMatch is the typed request payload for ConversationsPublicActor.LoadTyped.
type ConversationsPublicActorLoadMatch struct {
	Id string `json:"id"`
	Property *string `json:"property,omitempty"`
}

// ConversationsPublicChannel is the typed data model for the conversations_public_channel entity.
type ConversationsPublicChannel struct {
}

// ConversationsPublicChannelLoadMatch is the typed request payload for ConversationsPublicChannel.LoadTyped.
type ConversationsPublicChannelLoadMatch struct {
	Id int `json:"id"`
}

// ConversationsPublicChannelAccount is the typed data model for the conversations_public_channel_account entity.
type ConversationsPublicChannelAccount struct {
}

// ConversationsPublicChannelAccountLoadMatch is the typed request payload for ConversationsPublicChannelAccount.LoadTyped.
type ConversationsPublicChannelAccountLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// ConversationsPublicInbox is the typed data model for the conversations_public_inbox entity.
type ConversationsPublicInbox struct {
}

// ConversationsPublicInboxLoadMatch is the typed request payload for ConversationsPublicInbox.LoadTyped.
type ConversationsPublicInboxLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// ConversationsPublicMessage is the typed data model for the conversations_public_message entity.
type ConversationsPublicMessage struct {
}

// ConversationsPublicMessageLoadMatch is the typed request payload for ConversationsPublicMessage.LoadTyped.
type ConversationsPublicMessageLoadMatch struct {
	Id string `json:"id"`
	ThreadId int `json:"thread_id"`
	Property *string `json:"property,omitempty"`
}

// ConversationsPublicMessageCreateData is the typed request payload for ConversationsPublicMessage.CreateTyped.
type ConversationsPublicMessageCreateData struct {
	ThreadId int `json:"thread_id"`
	Id *string `json:"id,omitempty"`
}

// ConversationsPublicMessageContent is the typed data model for the conversations_public_message_content entity.
type ConversationsPublicMessageContent struct {
}

// ConversationsPublicMessageContentLoadMatch is the typed request payload for ConversationsPublicMessageContent.LoadTyped.
type ConversationsPublicMessageContentLoadMatch struct {
	MessageId string `json:"message_id"`
	ThreadId int `json:"thread_id"`
	Property *string `json:"property,omitempty"`
}

// ConversationsPublicThread is the typed data model for the conversations_public_thread entity.
type ConversationsPublicThread struct {
}

// ConversationsPublicThreadLoadMatch is the typed request payload for ConversationsPublicThread.LoadTyped.
type ConversationsPublicThreadLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	Association *[]any `json:"association,omitempty"`
	Property *string `json:"property,omitempty"`
}

// ConversationsPublicThreadUpdateData is the typed request payload for ConversationsPublicThread.UpdateTyped.
type ConversationsPublicThreadUpdateData struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedTicketId *string `json:"associatedTicketId,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ConversationsPublicThreadRemoveMatch is the typed request payload for ConversationsPublicThread.RemoveTyped.
type ConversationsPublicThreadRemoveMatch struct {
	ThreadId int `json:"thread_id"`
}

// CustomChannelsCollectionResponseWithTotalPublicChannel is the typed data model for the custom_channels_collection_response_with_total_public_channel entity.
type CustomChannelsCollectionResponseWithTotalPublicChannel struct {
}

// CustomChannelsCollectionResponseWithTotalPublicChannelListMatch is the typed request payload for CustomChannelsCollectionResponseWithTotalPublicChannel.ListTyped.
type CustomChannelsCollectionResponseWithTotalPublicChannelListMatch struct {
	After *string `json:"after,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// CustomChannelsCollectionResponseWithTotalPublicChannel2 is the typed data model for the custom_channels_collection_response_with_total_public_channel2 entity.
type CustomChannelsCollectionResponseWithTotalPublicChannel2 struct {
}

// CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch is the typed request payload for CustomChannelsCollectionResponseWithTotalPublicChannel2.ListTyped.
type CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch struct {
	ChannelId int `json:"channel_id"`
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DefaultPageLength *int `json:"default_page_length,omitempty"`
	DeliveryIdentifierType *[]any `json:"delivery_identifier_type,omitempty"`
	DeliveryIdentifierValue *[]any `json:"delivery_identifier_value,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// CustomChannelsPublicChannelAccount is the typed data model for the custom_channels_public_channel_account entity.
type CustomChannelsPublicChannelAccount struct {
}

// CustomChannelsPublicChannelAccountLoadMatch is the typed request payload for CustomChannelsPublicChannelAccount.LoadTyped.
type CustomChannelsPublicChannelAccountLoadMatch struct {
	ChannelId int `json:"channel_id"`
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// CustomChannelsPublicChannelAccountCreateData is the typed request payload for CustomChannelsPublicChannelAccount.CreateTyped.
type CustomChannelsPublicChannelAccountCreateData struct {
	ChannelId int `json:"channel_id"`
	Authorized bool `json:"authorized"`
	DeliveryIdentifier map[string]any `json:"deliveryIdentifier"`
	Id *string `json:"id,omitempty"`
	InboxId string `json:"inboxId"`
	Name string `json:"name"`
	Type string `json:"type"`
	Value string `json:"value"`
}

// CustomChannelsPublicChannelAccountUpdateData is the typed request payload for CustomChannelsPublicChannelAccount.UpdateTyped.
type CustomChannelsPublicChannelAccountUpdateData struct {
	ChannelId int `json:"channel_id"`
	Id int `json:"id"`
	Authorized *bool `json:"authorized,omitempty"`
	DeliveryIdentifier *map[string]any `json:"deliveryIdentifier,omitempty"`
	InboxId *string `json:"inboxId,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomChannelsPublicChannelAccountStagingToken is the typed data model for the custom_channels_public_channel_account_staging_token entity.
type CustomChannelsPublicChannelAccountStagingToken struct {
}

// CustomChannelsPublicChannelAccountStagingTokenUpdateData is the typed request payload for CustomChannelsPublicChannelAccountStagingToken.UpdateTyped.
type CustomChannelsPublicChannelAccountStagingTokenUpdateData struct {
	ChannelId int `json:"channel_id"`
	Id string `json:"id"`
	AccountName *string `json:"accountName,omitempty"`
	DeliveryIdentifier *map[string]any `json:"deliveryIdentifier,omitempty"`
	Type *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomChannelsPublicChannelIntegrationChannel is the typed data model for the custom_channels_public_channel_integration_channel entity.
type CustomChannelsPublicChannelIntegrationChannel struct {
}

// CustomChannelsPublicChannelIntegrationChannelLoadMatch is the typed request payload for CustomChannelsPublicChannelIntegrationChannel.LoadTyped.
type CustomChannelsPublicChannelIntegrationChannelLoadMatch struct {
	ChannelId int `json:"channel_id"`
}

// CustomChannelsPublicChannelIntegrationChannelCreateData is the typed request payload for CustomChannelsPublicChannelIntegrationChannel.CreateTyped.
type CustomChannelsPublicChannelIntegrationChannelCreateData struct {
	Capabilities map[string]any `json:"capabilities"`
	ChannelAccountConnectionRedirectUrl *string `json:"channelAccountConnectionRedirectUrl,omitempty"`
	ChannelDescription *string `json:"channelDescription,omitempty"`
	ChannelLogoUrl *string `json:"channelLogoUrl,omitempty"`
	Name string `json:"name"`
	WebhookUrl *string `json:"webhookUrl,omitempty"`
}

// CustomChannelsPublicChannelIntegrationChannelUpdateData is the typed request payload for CustomChannelsPublicChannelIntegrationChannel.UpdateTyped.
type CustomChannelsPublicChannelIntegrationChannelUpdateData struct {
	ChannelId int `json:"channel_id"`
	Capabilities *map[string]any `json:"capabilities,omitempty"`
	ChannelAccountConnectionRedirectUrl *string `json:"channelAccountConnectionRedirectUrl,omitempty"`
	ChannelDescription *string `json:"channelDescription,omitempty"`
	ChannelLogoUrl *string `json:"channelLogoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	WebhookUrl *string `json:"webhookUrl,omitempty"`
}

// CustomChannelsPublicConversationsMessage is the typed data model for the custom_channels_public_conversations_message entity.
type CustomChannelsPublicConversationsMessage struct {
}

// CustomChannelsPublicConversationsMessageLoadMatch is the typed request payload for CustomChannelsPublicConversationsMessage.LoadTyped.
type CustomChannelsPublicConversationsMessageLoadMatch struct {
	ChannelId int `json:"channel_id"`
	Id string `json:"id"`
}

// CustomChannelsPublicConversationsMessageCreateData is the typed request payload for CustomChannelsPublicConversationsMessage.CreateTyped.
type CustomChannelsPublicConversationsMessageCreateData struct {
	ChannelId int `json:"channel_id"`
	Archived bool `json:"archived"`
	AssociateWithContactId *int `json:"associateWithContactId,omitempty"`
	Attachments []any `json:"attachments"`
	ChannelAccountId string `json:"channelAccountId"`
	ChannelId2 string `json:"channelId"`
	Client map[string]any `json:"client"`
	ConversationsThreadId string `json:"conversationsThreadId"`
	CreatedAt string `json:"createdAt"`
	CreatedBy string `json:"createdBy"`
	Direction string `json:"direction"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Id string `json:"id"`
	InReplyToId *string `json:"inReplyToId,omitempty"`
	IntegrationIdempotencyId *string `json:"integrationIdempotencyId,omitempty"`
	IntegrationThreadId *string `json:"integrationThreadId,omitempty"`
	MessageDirection string `json:"messageDirection"`
	PreResolvedContacts map[string]any `json:"preResolvedContacts"`
	Recipients []any `json:"recipients"`
	RichText *string `json:"richText,omitempty"`
	Senders []any `json:"senders"`
	Status map[string]any `json:"status"`
	StatusType string `json:"statusType"`
	Subject *string `json:"subject,omitempty"`
	Text string `json:"text"`
	Timestamp string `json:"timestamp"`
	TruncationStatus string `json:"truncationStatus"`
	Type string `json:"type"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// CustomChannelsPublicConversationsMessageUpdateData is the typed request payload for CustomChannelsPublicConversationsMessage.UpdateTyped.
type CustomChannelsPublicConversationsMessageUpdateData struct {
	ChannelId int `json:"channel_id"`
	Id string `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	AssociateWithContactId *int `json:"associateWithContactId,omitempty"`
	Attachments *[]any `json:"attachments,omitempty"`
	ChannelAccountId *string `json:"channelAccountId,omitempty"`
	ChannelId2 *string `json:"channelId,omitempty"`
	Client *map[string]any `json:"client,omitempty"`
	ConversationsThreadId *string `json:"conversationsThreadId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Direction *string `json:"direction,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	InReplyToId *string `json:"inReplyToId,omitempty"`
	IntegrationIdempotencyId *string `json:"integrationIdempotencyId,omitempty"`
	IntegrationThreadId *string `json:"integrationThreadId,omitempty"`
	MessageDirection *string `json:"messageDirection,omitempty"`
	PreResolvedContacts *map[string]any `json:"preResolvedContacts,omitempty"`
	Recipients *[]any `json:"recipients,omitempty"`
	RichText *string `json:"richText,omitempty"`
	Senders *[]any `json:"senders,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	StatusType *string `json:"statusType,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Text *string `json:"text,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	TruncationStatus *string `json:"truncationStatus,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PublicThread is the typed data model for the public_thread entity.
type PublicThread struct {
}

// PublicThreadRemoveMatch is the typed request payload for PublicThread.RemoveTyped.
type PublicThreadRemoveMatch struct {
	Id int `json:"id"`
}

// Thread is the typed data model for the thread entity.
type Thread struct {
}

// ThreadRemoveMatch is the typed request payload for Thread.RemoveTyped.
type ThreadRemoveMatch struct {
	Id int `json:"id"`
}

// VisitorIdentificationIdentificationToken is the typed data model for the visitor_identification_identification_token entity.
type VisitorIdentificationIdentificationToken struct {
}

// VisitorIdentificationIdentificationTokenCreateData is the typed request payload for VisitorIdentificationIdentificationToken.CreateTyped.
type VisitorIdentificationIdentificationTokenCreateData struct {
	Email string `json:"email"`
	FirstName *string `json:"firstName,omitempty"`
	HsCustomerAgentContext map[string]any `json:"hsCustomerAgentContext"`
	LastName *string `json:"lastName,omitempty"`
	Token string `json:"token"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
