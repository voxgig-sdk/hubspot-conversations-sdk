<?php
declare(strict_types=1);

// Typed models for the HubspotConversations SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Channel entity data model. */
class Channel
{
}

/** Request payload for Channel#remove. */
class ChannelRemoveMatch
{
    public int $channel_id;
}

/** ConversationsBatchResponsePublicActor entity data model. */
class ConversationsBatchResponsePublicActor
{
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for ConversationsBatchResponsePublicActor#create. */
class ConversationsBatchResponsePublicActorCreateData
{
    public ?string $property = null;
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** ConversationsCollectionResponsePublicMessageForwardPaging entity data model. */
class ConversationsCollectionResponsePublicMessageForwardPaging
{
    public ?array $paging = null;
    public array $results;
}

/** Request payload for ConversationsCollectionResponsePublicMessageForwardPaging#list. */
class ConversationsCollectionResponsePublicMessageForwardPagingListMatch
{
    public int $thread_id;
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $limit = null;
    public ?string $property = null;
    public ?array $sort = null;
}

/** ConversationsCollectionResponsePublicThreadForwardPaging entity data model. */
class ConversationsCollectionResponsePublicThreadForwardPaging
{
    public bool $archived;
    public ?string $assignedTo = null;
    public string $associatedContactId;
    public ?string $closedAt = null;
    public string $createdAt;
    public string $id;
    public string $inboxId;
    public ?string $latestMessageReceivedTimestamp = null;
    public ?string $latestMessageSentTimestamp = null;
    public ?string $latestMessageTimestamp = null;
    public string $originalChannelAccountId;
    public string $originalChannelId;
    public bool $spam;
    public string $status;
    public ?array $threadAssociations = null;
}

/** Request payload for ConversationsCollectionResponsePublicThreadForwardPaging#list. */
class ConversationsCollectionResponsePublicThreadForwardPagingListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $associated_contact_id = null;
    public ?int $associated_ticket_id = null;
    public ?array $association = null;
    public ?array $inbox_id = null;
    public ?string $latest_message_timestamp_after = null;
    public ?int $limit = null;
    public ?string $property = null;
    public ?array $sort = null;
    public ?string $thread_status = null;
}

/** ConversationsCollectionResponseWithTotalPublicChannel entity data model. */
class ConversationsCollectionResponseWithTotalPublicChannel
{
    public string $id;
    public string $name;
}

/** Request payload for ConversationsCollectionResponseWithTotalPublicChannel#list. */
class ConversationsCollectionResponseWithTotalPublicChannelListMatch
{
    public ?string $after = null;
    public ?int $default_page_length = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** ConversationsCollectionResponseWithTotalPublicChannelAccount entity data model. */
class ConversationsCollectionResponseWithTotalPublicChannelAccount
{
    public bool $active;
    public bool $archived;
    public ?string $archivedAt = null;
    public bool $authorized;
    public string $channelId;
    public string $createdAt;
    public array $deliveryIdentifier;
    public string $id;
    public string $inboxId;
    public string $name;
}

/** Request payload for ConversationsCollectionResponseWithTotalPublicChannelAccount#list. */
class ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?array $channel_id = null;
    public ?int $default_page_length = null;
    public ?array $inbox_id = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** ConversationsCollectionResponseWithTotalPublicInbox entity data model. */
class ConversationsCollectionResponseWithTotalPublicInbox
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $createdAt;
    public string $id;
    public string $name;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ConversationsCollectionResponseWithTotalPublicInbox#list. */
class ConversationsCollectionResponseWithTotalPublicInboxListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $default_page_length = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** ConversationsInboxMessagesBatchResponsePublicActor entity data model. */
class ConversationsInboxMessagesBatchResponsePublicActor
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for ConversationsInboxMessagesBatchResponsePublicActor#create. */
class ConversationsInboxMessagesBatchResponsePublicActorCreateData
{
    public ?string $property = null;
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** ConversationsInboxMessagesCollectionResponsePublicMessage entity data model. */
class ConversationsInboxMessagesCollectionResponsePublicMessage
{
    public ?array $paging = null;
    public array $results;
}

/** Request payload for ConversationsInboxMessagesCollectionResponsePublicMessage#list. */
class ConversationsInboxMessagesCollectionResponsePublicMessageListMatch
{
    public int $thread_id;
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $limit = null;
    public ?string $property = null;
    public ?array $sort = null;
}

/** ConversationsInboxMessagesCollectionResponsePublicThread entity data model. */
class ConversationsInboxMessagesCollectionResponsePublicThread
{
    public bool $archived;
    public ?string $assignedTo = null;
    public string $associatedContactId;
    public ?string $closedAt = null;
    public string $createdAt;
    public string $id;
    public string $inboxId;
    public ?string $latestMessageReceivedTimestamp = null;
    public ?string $latestMessageSentTimestamp = null;
    public ?string $latestMessageTimestamp = null;
    public string $originalChannelAccountId;
    public string $originalChannelId;
    public bool $spam;
    public string $status;
    public ?array $threadAssociations = null;
}

/** Request payload for ConversationsInboxMessagesCollectionResponsePublicThread#list. */
class ConversationsInboxMessagesCollectionResponsePublicThreadListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $associated_contact_id = null;
    public ?array $association = null;
    public ?array $inbox_id = null;
    public ?string $latest_message_timestamp_after = null;
    public ?int $limit = null;
    public ?string $property = null;
    public ?array $sort = null;
    public ?string $thread_status = null;
}

/** ConversationsInboxMessagesCollectionResponseWithTotalPublic entity data model. */
class ConversationsInboxMessagesCollectionResponseWithTotalPublic
{
    public bool $active;
    public bool $archived;
    public ?string $archivedAt = null;
    public bool $authorized;
    public string $channelId;
    public string $createdAt;
    public array $deliveryIdentifier;
    public string $id;
    public string $inboxId;
    public string $name;
}

/** Request payload for ConversationsInboxMessagesCollectionResponseWithTotalPublic#list. */
class ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?array $channel_id = null;
    public ?int $default_page_length = null;
    public ?array $inbox_id = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** ConversationsInboxMessagesCollectionResponseWithTotalPublic2 entity data model. */
class ConversationsInboxMessagesCollectionResponseWithTotalPublic2
{
    public string $id;
    public string $name;
}

/** Request payload for ConversationsInboxMessagesCollectionResponseWithTotalPublic2#list. */
class ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch
{
    public ?string $after = null;
    public ?int $default_page_length = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** ConversationsInboxMessagesCollectionResponseWithTotalPublic3 entity data model. */
class ConversationsInboxMessagesCollectionResponseWithTotalPublic3
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $createdAt;
    public string $id;
    public string $name;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ConversationsInboxMessagesCollectionResponseWithTotalPublic3#list. */
class ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $default_page_length = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** ConversationsInboxMessagesPublicActor entity data model. */
class ConversationsInboxMessagesPublicActor
{
    public ?string $id = null;
}

/** Request payload for ConversationsInboxMessagesPublicActor#load. */
class ConversationsInboxMessagesPublicActorLoadMatch
{
    public string $id;
    public ?string $property = null;
}

/** ConversationsInboxMessagesPublicChannel entity data model. */
class ConversationsInboxMessagesPublicChannel
{
    public string $id;
    public string $name;
}

/** Request payload for ConversationsInboxMessagesPublicChannel#load. */
class ConversationsInboxMessagesPublicChannelLoadMatch
{
    public int $id;
}

/** ConversationsInboxMessagesPublicChannelAccount entity data model. */
class ConversationsInboxMessagesPublicChannelAccount
{
    public ?string $id = null;
    public string $type;
    public string $value;
}

/** Request payload for ConversationsInboxMessagesPublicChannelAccount#load. */
class ConversationsInboxMessagesPublicChannelAccountLoadMatch
{
    public int $id;
    public ?bool $archived = null;
}

/** ConversationsInboxMessagesPublicInbox entity data model. */
class ConversationsInboxMessagesPublicInbox
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $createdAt;
    public string $id;
    public string $name;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ConversationsInboxMessagesPublicInbox#load. */
class ConversationsInboxMessagesPublicInboxLoadMatch
{
    public int $id;
    public ?bool $archived = null;
}

/** ConversationsInboxMessagesPublicMessage entity data model. */
class ConversationsInboxMessagesPublicMessage
{
    public ?string $id = null;
}

/** Request payload for ConversationsInboxMessagesPublicMessage#load. */
class ConversationsInboxMessagesPublicMessageLoadMatch
{
    public string $id;
    public int $thread_id;
    public ?string $property = null;
}

/** Request payload for ConversationsInboxMessagesPublicMessage#create. */
class ConversationsInboxMessagesPublicMessageCreateData
{
    public int $thread_id;
    public ?string $id = null;
}

/** ConversationsInboxMessagesPublicMessageContent entity data model. */
class ConversationsInboxMessagesPublicMessageContent
{
    public ?string $richText = null;
    public ?string $text = null;
}

/** Request payload for ConversationsInboxMessagesPublicMessageContent#load. */
class ConversationsInboxMessagesPublicMessageContentLoadMatch
{
    public string $message_id;
    public int $thread_id;
    public ?string $property = null;
}

/** ConversationsInboxMessagesPublicThread entity data model. */
class ConversationsInboxMessagesPublicThread
{
    public ?bool $archived = null;
    public ?string $associatedTicketId = null;
    public ?string $id = null;
    public ?string $status = null;
}

/** Request payload for ConversationsInboxMessagesPublicThread#load. */
class ConversationsInboxMessagesPublicThreadLoadMatch
{
    public int $id;
    public ?bool $archived = null;
    public ?array $association = null;
    public ?string $property = null;
}

/** Request payload for ConversationsInboxMessagesPublicThread#update. */
class ConversationsInboxMessagesPublicThreadUpdateData
{
    public int $id;
    public ?bool $archived = null;
    public ?string $associatedTicketId = null;
    public ?string $status = null;
}

/** ConversationsPublicActor entity data model. */
class ConversationsPublicActor
{
    public ?string $id = null;
}

/** Request payload for ConversationsPublicActor#load. */
class ConversationsPublicActorLoadMatch
{
    public string $id;
    public ?string $property = null;
}

/** ConversationsPublicChannel entity data model. */
class ConversationsPublicChannel
{
    public string $id;
    public string $name;
}

/** Request payload for ConversationsPublicChannel#load. */
class ConversationsPublicChannelLoadMatch
{
    public int $id;
}

/** ConversationsPublicChannelAccount entity data model. */
class ConversationsPublicChannelAccount
{
    public ?string $id = null;
    public string $type;
    public string $value;
}

/** Request payload for ConversationsPublicChannelAccount#load. */
class ConversationsPublicChannelAccountLoadMatch
{
    public int $id;
    public ?bool $archived = null;
}

/** ConversationsPublicInbox entity data model. */
class ConversationsPublicInbox
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $createdAt;
    public string $id;
    public string $name;
    public string $type;
    public string $updatedAt;
}

/** Request payload for ConversationsPublicInbox#load. */
class ConversationsPublicInboxLoadMatch
{
    public int $id;
    public ?bool $archived = null;
}

/** ConversationsPublicMessage entity data model. */
class ConversationsPublicMessage
{
    public ?string $id = null;
}

/** Request payload for ConversationsPublicMessage#load. */
class ConversationsPublicMessageLoadMatch
{
    public string $id;
    public int $thread_id;
    public ?string $property = null;
}

/** Request payload for ConversationsPublicMessage#create. */
class ConversationsPublicMessageCreateData
{
    public int $thread_id;
    public ?string $id = null;
}

/** ConversationsPublicMessageContent entity data model. */
class ConversationsPublicMessageContent
{
    public ?string $richText = null;
    public ?string $text = null;
}

/** Request payload for ConversationsPublicMessageContent#load. */
class ConversationsPublicMessageContentLoadMatch
{
    public string $message_id;
    public int $thread_id;
    public ?string $property = null;
}

/** ConversationsPublicThread entity data model. */
class ConversationsPublicThread
{
    public ?bool $archived = null;
    public ?string $associatedTicketId = null;
    public ?string $id = null;
    public ?string $status = null;
}

/** Request payload for ConversationsPublicThread#load. */
class ConversationsPublicThreadLoadMatch
{
    public int $id;
    public ?bool $archived = null;
    public ?array $association = null;
    public ?string $property = null;
}

/** Request payload for ConversationsPublicThread#update. */
class ConversationsPublicThreadUpdateData
{
    public int $id;
    public ?bool $archived = null;
    public ?string $associatedTicketId = null;
    public ?string $status = null;
}

/** Request payload for ConversationsPublicThread#remove. */
class ConversationsPublicThreadRemoveMatch
{
    public int $thread_id;
}

/** CustomChannelsCollectionResponseWithTotalPublicChannel entity data model. */
class CustomChannelsCollectionResponseWithTotalPublicChannel
{
    public array $capabilities;
    public ?string $channelAccountConnectionRedirectUrl = null;
    public ?string $channelDescription = null;
    public ?string $channelLogoUrl = null;
    public string $createdAt;
    public string $id;
    public string $name;
    public ?string $webhookUrl = null;
}

/** Request payload for CustomChannelsCollectionResponseWithTotalPublicChannel#list. */
class CustomChannelsCollectionResponseWithTotalPublicChannelListMatch
{
    public ?string $after = null;
    public ?int $default_page_length = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** CustomChannelsCollectionResponseWithTotalPublicChannel2 entity data model. */
class CustomChannelsCollectionResponseWithTotalPublicChannel2
{
    public bool $active;
    public bool $archived;
    public ?string $archivedAt = null;
    public bool $authorized;
    public string $channelId;
    public string $createdAt;
    public array $deliveryIdentifier;
    public string $id;
    public string $inboxId;
    public string $name;
}

/** Request payload for CustomChannelsCollectionResponseWithTotalPublicChannel2#list. */
class CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch
{
    public int $channel_id;
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $default_page_length = null;
    public ?array $delivery_identifier_type = null;
    public ?array $delivery_identifier_value = null;
    public ?int $limit = null;
    public ?array $sort = null;
}

/** CustomChannelsPublicChannelAccount entity data model. */
class CustomChannelsPublicChannelAccount
{
    public bool $authorized;
    public array $deliveryIdentifier;
    public ?string $id = null;
    public string $inboxId;
    public string $name;
    public string $type;
    public string $value;
}

/** Request payload for CustomChannelsPublicChannelAccount#load. */
class CustomChannelsPublicChannelAccountLoadMatch
{
    public int $channel_id;
    public int $id;
    public ?bool $archived = null;
}

/** Request payload for CustomChannelsPublicChannelAccount#create. */
class CustomChannelsPublicChannelAccountCreateData
{
    public int $channel_id;
    public bool $authorized;
    public array $deliveryIdentifier;
    public ?string $id = null;
    public string $inboxId;
    public string $name;
    public string $type;
    public string $value;
}

/** Request payload for CustomChannelsPublicChannelAccount#update. */
class CustomChannelsPublicChannelAccountUpdateData
{
    public int $channel_id;
    public int $id;
    public ?bool $authorized = null;
    public ?array $deliveryIdentifier = null;
    public ?string $inboxId = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $value = null;
}

/** CustomChannelsPublicChannelAccountStagingToken entity data model. */
class CustomChannelsPublicChannelAccountStagingToken
{
    public ?string $accountName = null;
    public array $deliveryIdentifier;
    public ?string $id = null;
    public string $type;
    public string $value;
}

/** Request payload for CustomChannelsPublicChannelAccountStagingToken#update. */
class CustomChannelsPublicChannelAccountStagingTokenUpdateData
{
    public int $channel_id;
    public string $id;
    public ?string $accountName = null;
    public ?array $deliveryIdentifier = null;
    public ?string $type = null;
    public ?string $value = null;
}

/** CustomChannelsPublicChannelIntegrationChannel entity data model. */
class CustomChannelsPublicChannelIntegrationChannel
{
    public array $capabilities;
    public ?string $channelAccountConnectionRedirectUrl = null;
    public ?string $channelDescription = null;
    public ?string $channelLogoUrl = null;
    public string $name;
    public ?string $webhookUrl = null;
}

/** Request payload for CustomChannelsPublicChannelIntegrationChannel#load. */
class CustomChannelsPublicChannelIntegrationChannelLoadMatch
{
    public int $channel_id;
}

/** Request payload for CustomChannelsPublicChannelIntegrationChannel#create. */
class CustomChannelsPublicChannelIntegrationChannelCreateData
{
    public array $capabilities;
    public ?string $channelAccountConnectionRedirectUrl = null;
    public ?string $channelDescription = null;
    public ?string $channelLogoUrl = null;
    public string $name;
    public ?string $webhookUrl = null;
}

/** Request payload for CustomChannelsPublicChannelIntegrationChannel#update. */
class CustomChannelsPublicChannelIntegrationChannelUpdateData
{
    public int $channel_id;
    public ?array $capabilities = null;
    public ?string $channelAccountConnectionRedirectUrl = null;
    public ?string $channelDescription = null;
    public ?string $channelLogoUrl = null;
    public ?string $name = null;
    public ?string $webhookUrl = null;
}

/** CustomChannelsPublicConversationsMessage entity data model. */
class CustomChannelsPublicConversationsMessage
{
    public bool $archived;
    public ?int $associateWithContactId = null;
    public array $attachments;
    public string $channelAccountId;
    public string $channelId;
    public array $client;
    public string $conversationsThreadId;
    public string $createdAt;
    public string $createdBy;
    public string $direction;
    public ?string $errorMessage = null;
    public string $id;
    public ?string $inReplyToId = null;
    public ?string $integrationIdempotencyId = null;
    public ?string $integrationThreadId = null;
    public string $messageDirection;
    public array $preResolvedContacts;
    public array $recipients;
    public ?string $richText = null;
    public array $senders;
    public array $status;
    public string $statusType;
    public ?string $subject = null;
    public string $text;
    public string $timestamp;
    public string $truncationStatus;
    public string $type;
    public ?string $updatedAt = null;
}

/** Request payload for CustomChannelsPublicConversationsMessage#load. */
class CustomChannelsPublicConversationsMessageLoadMatch
{
    public int $channel_id;
    public string $id;
}

/** Request payload for CustomChannelsPublicConversationsMessage#create. */
class CustomChannelsPublicConversationsMessageCreateData
{
    public int $channel_id;
    public bool $archived;
    public ?int $associateWithContactId = null;
    public array $attachments;
    public string $channelAccountId;
    public string $channelId;
    public array $client;
    public string $conversationsThreadId;
    public string $createdAt;
    public string $createdBy;
    public string $direction;
    public ?string $errorMessage = null;
    public string $id;
    public ?string $inReplyToId = null;
    public ?string $integrationIdempotencyId = null;
    public ?string $integrationThreadId = null;
    public string $messageDirection;
    public array $preResolvedContacts;
    public array $recipients;
    public ?string $richText = null;
    public array $senders;
    public array $status;
    public string $statusType;
    public ?string $subject = null;
    public string $text;
    public string $timestamp;
    public string $truncationStatus;
    public string $type;
    public ?string $updatedAt = null;
}

/** Request payload for CustomChannelsPublicConversationsMessage#update. */
class CustomChannelsPublicConversationsMessageUpdateData
{
    public int $channel_id;
    public string $id;
    public ?bool $archived = null;
    public ?int $associateWithContactId = null;
    public ?array $attachments = null;
    public ?string $channelAccountId = null;
    public ?string $channelId = null;
    public ?array $client = null;
    public ?string $conversationsThreadId = null;
    public ?string $createdAt = null;
    public ?string $createdBy = null;
    public ?string $direction = null;
    public ?string $errorMessage = null;
    public ?string $inReplyToId = null;
    public ?string $integrationIdempotencyId = null;
    public ?string $integrationThreadId = null;
    public ?string $messageDirection = null;
    public ?array $preResolvedContacts = null;
    public ?array $recipients = null;
    public ?string $richText = null;
    public ?array $senders = null;
    public ?array $status = null;
    public ?string $statusType = null;
    public ?string $subject = null;
    public ?string $text = null;
    public ?string $timestamp = null;
    public ?string $truncationStatus = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
}

/** PublicThread entity data model. */
class PublicThread
{
    public ?string $id = null;
}

/** Request payload for PublicThread#remove. */
class PublicThreadRemoveMatch
{
    public int $id;
}

/** Thread entity data model. */
class Thread
{
    public ?string $id = null;
}

/** Request payload for Thread#remove. */
class ThreadRemoveMatch
{
    public int $id;
}

/** VisitorIdentificationIdentificationToken entity data model. */
class VisitorIdentificationIdentificationToken
{
    public string $email;
    public ?string $firstName = null;
    public array $hsCustomerAgentContext;
    public ?string $lastName = null;
    public string $token;
}

/** Request payload for VisitorIdentificationIdentificationToken#create. */
class VisitorIdentificationIdentificationTokenCreateData
{
    public string $email;
    public ?string $firstName = null;
    public array $hsCustomerAgentContext;
    public ?string $lastName = null;
    public string $token;
}

