# HubSpot Conversations API

HubSpot Conversations API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 36 entities and 48 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Channel](docs/api/channel.html)

Results: No content.

SDK operations: `remove`.

### [ConversationsBatchResponsePublicActor](docs/api/conversations_batch_response_public_actor.html)

Results: successful operation.

SDK operations: `create`.

### [ConversationsCollectionResponsePublicMessageForwardPaging](docs/api/conversations_collection_response_public_message_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

### [ConversationsCollectionResponsePublicThreadForwardPaging](docs/api/conversations_collection_response_public_thread_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `archived`: Whether this thread is archived.
- `associatedContactId`: The ID of the associated Contact in the CRM. If the Contact for the thread has not yet been added or created, the `associatedContactId` returned will be a visitorID and cannot be used to search for the Contact in the CRM.
- `closedAt`: When the thread was closed. Only set if the thread is closed.
- `createdAt`: When the thread was created.
- `id`: The unique ID of the thread.

### [ConversationsCollectionResponseWithTotalPublicChannel](docs/api/conversations_collection_response_with_total_public_channel.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `id`: The ID of the channel.
- `name`: The name of the channel.

### [ConversationsCollectionResponseWithTotalPublicChannelAccount](docs/api/conversations_collection_response_with_total_public_channel_account.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `active`: Whether the channel account is turned on.
- `channelId`: The ID of the channel that the channel account is an instance of.
- `id`: The ID of the channel account.
- `inboxId`: The ID of the conversations inbox that contains the channel account.
- `name`: The name of the channel account.

### [ConversationsCollectionResponseWithTotalPublicInbox](docs/api/conversations_collection_response_with_total_public_inbox.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: When the inbox was created.
- `id`: The ID of the inbox.
- `name`: The name of the inbox.
- `type`: Specifies whether this refers to a Conversations Inbox or to the Help Desk. Valid values are INBOX or HELP_DESK

### [ConversationsInboxMessagesBatchResponsePublicActor](docs/api/conversations_inbox_messages_batch_response_public_actor.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

### [ConversationsInboxMessagesCollectionResponsePublicMessage](docs/api/conversations_inbox_messages_collection_response_public_message.html)

Results: successful operation.

SDK operations: `list`.

### [ConversationsInboxMessagesCollectionResponsePublicThread](docs/api/conversations_inbox_messages_collection_response_public_thread.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `archived`: Whether this thread is archived.
- `associatedContactId`: The ID of the associated Contact in the CRM. If the Contact for the thread has not yet been added or created, the `associatedContactId` returned will be a visitorID and cannot be used to search for the Contact in the CRM.
- `closedAt`: When the thread was closed. Only set if the thread is closed.
- `createdAt`: When the thread was created.
- `id`: The unique ID of the thread.

### [ConversationsInboxMessagesCollectionResponseWithTotalPublic](docs/api/conversations_inbox_messages_collection_response_with_total_public.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `active`: Whether the channel account is turned on.
- `channelId`: The ID of the channel that the channel account is an instance of.
- `id`: The ID of the channel account.
- `inboxId`: The ID of the conversations inbox that contains the channel account.
- `name`: The name of the channel account.

### [ConversationsInboxMessagesCollectionResponseWithTotalPublic2](docs/api/conversations_inbox_messages_collection_response_with_total_public2.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `id`: The ID of the channel.
- `name`: The name of the channel.

### [ConversationsInboxMessagesCollectionResponseWithTotalPublic3](docs/api/conversations_inbox_messages_collection_response_with_total_public3.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: When the inbox was created.
- `id`: The ID of the inbox.
- `name`: The name of the inbox.
- `type`: Specifies whether this refers to a Conversations Inbox or to the Help Desk. Valid values are INBOX or HELP_DESK

### [ConversationsInboxMessagesPublicActor](docs/api/conversations_inbox_messages_public_actor.html)

Results: successful operation.

SDK operations: `load`.

### [ConversationsInboxMessagesPublicChannel](docs/api/conversations_inbox_messages_public_channel.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `id`: The ID of the channel.
- `name`: The name of the channel.

### [ConversationsInboxMessagesPublicChannelAccount](docs/api/conversations_inbox_messages_public_channel_account.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `type`: The type of identifier. HS_EMAIL_ADDRESS for email addresses; HS_PHONE_NUMBER for a phone number; CHANNEL_SPECIFIC_OPAQUE_ID for channels that use their own proprietary identifiers, like Facebook Messenger or LiveChat.
- `value`: A string representation of the PublicDeliveryIdentifier, either an E.164 phone number, an email address, or a channel-specific identifier.

### [ConversationsInboxMessagesPublicInbox](docs/api/conversations_inbox_messages_public_inbox.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `createdAt`: When the inbox was created.
- `id`: The ID of the inbox.
- `name`: The name of the inbox.
- `type`: Specifies whether this refers to a Conversations Inbox or to the Help Desk. Valid values are INBOX or HELP_DESK

### [ConversationsInboxMessagesPublicMessage](docs/api/conversations_inbox_messages_public_message.html)

Results: successful operation.

SDK operations: `create`, `load`.

### [ConversationsInboxMessagesPublicMessageContent](docs/api/conversations_inbox_messages_public_message_content.html)

Results: successful operation.

SDK operations: `load`.

### [ConversationsInboxMessagesPublicThread](docs/api/conversations_inbox_messages_public_thread.html)

Results: successful operation.

SDK operations: `load`, `update`.

Key fields to recognise:

- `archived`: Whether this thread is archived.
- `status`: The thread&#39;s status: `OPEN` or `CLOSED`.

### [ConversationsPublicActor](docs/api/conversations_public_actor.html)

Results: successful operation.

SDK operations: `load`.

### [ConversationsPublicChannel](docs/api/conversations_public_channel.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `id`: The ID of the channel.
- `name`: The name of the channel.

### [ConversationsPublicChannelAccount](docs/api/conversations_public_channel_account.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `type`: The type of identifier. HS_EMAIL_ADDRESS for email addresses; HS_PHONE_NUMBER for a phone number; CHANNEL_SPECIFIC_OPAQUE_ID for channels that use their own proprietary identifiers, like Facebook Messenger or LiveChat.
- `value`: A string representation of the PublicDeliveryIdentifier, either an E.164 phone number, an email address, or a channel-specific identifier.

### [ConversationsPublicInbox](docs/api/conversations_public_inbox.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `createdAt`: When the inbox was created.
- `id`: The ID of the inbox.
- `name`: The name of the inbox.
- `type`: Specifies whether this refers to a Conversations Inbox or to the Help Desk. Valid values are INBOX or HELP_DESK

### [ConversationsPublicMessage](docs/api/conversations_public_message.html)

Results: successful operation.

SDK operations: `create`, `load`.

### [ConversationsPublicMessageContent](docs/api/conversations_public_message_content.html)

Results: successful operation.

SDK operations: `load`.

### [ConversationsPublicThread](docs/api/conversations_public_thread.html)

Results: successful operation; No content.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `archived`: Whether this thread is archived.
- `status`: The thread&#39;s status: `OPEN` or `CLOSED`.

### [CustomChannelsCollectionResponseWithTotalPublicChannel](docs/api/custom_channels_collection_response_with_total_public_channel.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `capabilities`: An object detailing the capabilities of the channel, with additional properties as objects.
- `channelAccountConnectionRedirectUrl`: A string representing the URL used to redirect for channel account connection.
- `channelDescription`: A string providing a description of the channel.
- `channelLogoUrl`: A string representing the URL of the channel&#39;s logo.
- `createdAt`: The date and time when the channel was created, in ISO 8601 format.

### [CustomChannelsCollectionResponseWithTotalPublicChannel2](docs/api/custom_channels_collection_response_with_total_public_channel2.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `active`: A boolean indicating whether the channel account is currently active.
- `archived`: A boolean indicating whether the channel account is archived.
- `archivedAt`: The date and time when the channel account was archived, in ISO 8601 format.
- `authorized`: A boolean indicating whether the channel account is authorized.
- `channelId`: The unique identifier for the channel to which this account belongs, represented as a string.

### [CustomChannelsPublicChannelAccount](docs/api/custom_channels_public_channel_account.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `authorized`: A boolean indicating whether the channel account is authorized.
- `inboxId`: The unique identifier for the inbox associated with this channel account, represented as a string.
- `name`: The name of the channel account, represented as a string.
- `type`: A string representing the type of delivery identifier. Valid values include &#39;HS_EMAIL_ADDRESS&#39;, &#39;HS_PHONE_NUMBER&#39;, &#39;HS_SHORT_CODE&#39;, and &#39;CHANNEL_SPECIFIC_OPAQUE_ID&#39;.
- `value`: A string representing the value associated with the delivery identifier type.

### [CustomChannelsPublicChannelAccountStagingToken](docs/api/custom_channels_public_channel_account_staging_token.html)

Results: successful operation.

SDK operations: `update`.

Key fields to recognise:

- `accountName`: A string representing the name of the account.
- `type`: A string representing the type of delivery identifier. Valid values include &#39;HS_EMAIL_ADDRESS&#39;, &#39;HS_PHONE_NUMBER&#39;, &#39;HS_SHORT_CODE&#39;, and &#39;CHANNEL_SPECIFIC_OPAQUE_ID&#39;.
- `value`: A string representing the value associated with the delivery identifier type.

### [CustomChannelsPublicChannelIntegrationChannel](docs/api/custom_channels_public_channel_integration_channel.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `capabilities`: An object detailing the capabilities of the channel, with additional properties as objects.
- `channelAccountConnectionRedirectUrl`: A string representing the URL used to redirect for channel account connection.
- `channelDescription`: A string providing a description of the channel.
- `channelLogoUrl`: A string representing the URL of the channel&#39;s logo.
- `name`: A string representing the name of the channel.

### [CustomChannelsPublicConversationsMessage](docs/api/custom_channels_public_conversations_message.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archived`: A boolean indicating whether the message is archived.
- `associateWithContactId`: The ID of the contact with which this message should be associated.
- `attachments`: An array of attachments included with the message, which can be files, locations, contacts, or other supported types.
- `channelAccountId`: The identifier of the channel account associated with the message.
- `channelId`: The identifier of the channel through which the message was sent.

### [PublicThread](docs/api/public_thread.html)

Results: No content.

SDK operations: `remove`.

### [Thread](docs/api/thread.html)

Results: No content.

SDK operations: `remove`.

### [VisitorIdentificationIdentificationToken](docs/api/visitor_identification_identification_token.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `email`: The email of the visitor that you wish to identify
- `firstName`: The first name of the visitor that you wish to identify.
- `hsCustomerAgentContext`: An object containing additional context about the customer agent.
- `lastName`: The last name of the visitor that you wish to identify.
- `token`: An identification token that allows the visitor to be treated as a known contact.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Channel](docs/api/channel.html) | `remove` | `DELETE /conversations/custom-channels/2026-09/{channelId}` | Not required |
| [ConversationsBatchResponsePublicActor](docs/api/conversations_batch_response_public_actor.html) | `create` | `POST /conversations/conversations/2026-09/actors/batch/read` | Required |
| [ConversationsCollectionResponsePublicMessageForwardPaging](docs/api/conversations_collection_response_public_message_forward_paging.html) | `list` | `GET /conversations/conversations/2026-09/threads/{threadId}/messages` | Required |
| [ConversationsCollectionResponsePublicThreadForwardPaging](docs/api/conversations_collection_response_public_thread_forward_paging.html) | `list` | `GET /conversations/conversations/2026-09/threads` | Required |
| [ConversationsCollectionResponseWithTotalPublicChannel](docs/api/conversations_collection_response_with_total_public_channel.html) | `list` | `GET /conversations/conversations/2026-09/channels` | Required |
| [ConversationsCollectionResponseWithTotalPublicChannelAccount](docs/api/conversations_collection_response_with_total_public_channel_account.html) | `list` | `GET /conversations/conversations/2026-09/channel-accounts` | Required |
| [ConversationsCollectionResponseWithTotalPublicInbox](docs/api/conversations_collection_response_with_total_public_inbox.html) | `list` | `GET /conversations/conversations/2026-09/inboxes` | Required |
| [ConversationsInboxMessagesBatchResponsePublicActor](docs/api/conversations_inbox_messages_batch_response_public_actor.html) | `create` | `POST /conversations/v3/conversations/actors/batch/read` | Required |
| [ConversationsInboxMessagesCollectionResponsePublicMessage](docs/api/conversations_inbox_messages_collection_response_public_message.html) | `list` | `GET /conversations/v3/conversations/threads/{threadId}/messages` | Required |
| [ConversationsInboxMessagesCollectionResponsePublicThread](docs/api/conversations_inbox_messages_collection_response_public_thread.html) | `list` | `GET /conversations/v3/conversations/threads` | Required |
| [ConversationsInboxMessagesCollectionResponseWithTotalPublic](docs/api/conversations_inbox_messages_collection_response_with_total_public.html) | `list` | `GET /conversations/v3/conversations/channel-accounts` | Required |
| [ConversationsInboxMessagesCollectionResponseWithTotalPublic2](docs/api/conversations_inbox_messages_collection_response_with_total_public2.html) | `list` | `GET /conversations/v3/conversations/channels` | Required |
| [ConversationsInboxMessagesCollectionResponseWithTotalPublic3](docs/api/conversations_inbox_messages_collection_response_with_total_public3.html) | `list` | `GET /conversations/v3/conversations/inboxes` | Required |
| [ConversationsInboxMessagesPublicActor](docs/api/conversations_inbox_messages_public_actor.html) | `load` | `GET /conversations/v3/conversations/actors/{actorId}` | Required |
| [ConversationsInboxMessagesPublicChannel](docs/api/conversations_inbox_messages_public_channel.html) | `load` | `GET /conversations/v3/conversations/channels/{channelId}` | Required |
| [ConversationsInboxMessagesPublicChannelAccount](docs/api/conversations_inbox_messages_public_channel_account.html) | `load` | `GET /conversations/v3/conversations/channel-accounts/{channelAccountId}` | Required |
| [ConversationsInboxMessagesPublicInbox](docs/api/conversations_inbox_messages_public_inbox.html) | `load` | `GET /conversations/v3/conversations/inboxes/{inboxId}` | Required |
| [ConversationsInboxMessagesPublicMessage](docs/api/conversations_inbox_messages_public_message.html) | `create` | `POST /conversations/v3/conversations/threads/{threadId}/messages` | Required |
| [ConversationsInboxMessagesPublicMessage](docs/api/conversations_inbox_messages_public_message.html) | `load` | `GET /conversations/v3/conversations/threads/{threadId}/messages/{messageId}` | Required |
| [ConversationsInboxMessagesPublicMessageContent](docs/api/conversations_inbox_messages_public_message_content.html) | `load` | `GET /conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content` | Required |
| [ConversationsInboxMessagesPublicThread](docs/api/conversations_inbox_messages_public_thread.html) | `load` | `GET /conversations/v3/conversations/threads/{threadId}` | Required |
| [ConversationsInboxMessagesPublicThread](docs/api/conversations_inbox_messages_public_thread.html) | `update` | `PATCH /conversations/v3/conversations/threads/{threadId}` | Required |
| [ConversationsPublicActor](docs/api/conversations_public_actor.html) | `load` | `GET /conversations/conversations/2026-09/actors/{actorId}` | Required |
| [ConversationsPublicChannel](docs/api/conversations_public_channel.html) | `load` | `GET /conversations/conversations/2026-09/channels/{channelId}` | Required |
| [ConversationsPublicChannelAccount](docs/api/conversations_public_channel_account.html) | `load` | `GET /conversations/conversations/2026-09/channel-accounts/{channelAccountId}` | Required |
| [ConversationsPublicInbox](docs/api/conversations_public_inbox.html) | `load` | `GET /conversations/conversations/2026-09/inboxes/{inboxId}` | Required |
| [ConversationsPublicMessage](docs/api/conversations_public_message.html) | `create` | `POST /conversations/conversations/2026-09/threads/{threadId}/messages` | Required |
| [ConversationsPublicMessage](docs/api/conversations_public_message.html) | `load` | `GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}` | Required |
| [ConversationsPublicMessageContent](docs/api/conversations_public_message_content.html) | `load` | `GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content` | Required |
| [ConversationsPublicThread](docs/api/conversations_public_thread.html) | `load` | `GET /conversations/conversations/2026-09/threads/{threadId}` | Required |
| [ConversationsPublicThread](docs/api/conversations_public_thread.html) | `remove` | `DELETE /conversations/conversations/2026-09/threads/{threadId}/assignee` | Required |
| [ConversationsPublicThread](docs/api/conversations_public_thread.html) | `update` | `PATCH /conversations/conversations/2026-09/threads/{threadId}` | Required |
| [ConversationsPublicThread](docs/api/conversations_public_thread.html) | `update` | `PUT /conversations/conversations/2026-09/threads/{threadId}/assignee` | Required |
| [CustomChannelsCollectionResponseWithTotalPublicChannel](docs/api/custom_channels_collection_response_with_total_public_channel.html) | `list` | `GET /conversations/custom-channels/2026-09` | Not required |
| [CustomChannelsCollectionResponseWithTotalPublicChannel2](docs/api/custom_channels_collection_response_with_total_public_channel2.html) | `list` | `GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts` | Required |
| [CustomChannelsPublicChannelAccount](docs/api/custom_channels_public_channel_account.html) | `create` | `POST /conversations/custom-channels/2026-09/{channelId}/channel-accounts` | Required |
| [CustomChannelsPublicChannelAccount](docs/api/custom_channels_public_channel_account.html) | `load` | `GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}` | Required |
| [CustomChannelsPublicChannelAccount](docs/api/custom_channels_public_channel_account.html) | `update` | `PATCH /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}` | Required |
| [CustomChannelsPublicChannelAccountStagingToken](docs/api/custom_channels_public_channel_account_staging_token.html) | `update` | `PATCH /conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}` | Required |
| [CustomChannelsPublicChannelIntegrationChannel](docs/api/custom_channels_public_channel_integration_channel.html) | `create` | `POST /conversations/custom-channels/2026-09` | Not required |
| [CustomChannelsPublicChannelIntegrationChannel](docs/api/custom_channels_public_channel_integration_channel.html) | `load` | `GET /conversations/custom-channels/2026-09/{channelId}` | Not required |
| [CustomChannelsPublicChannelIntegrationChannel](docs/api/custom_channels_public_channel_integration_channel.html) | `update` | `PATCH /conversations/custom-channels/2026-09/{channelId}` | Not required |
| [CustomChannelsPublicConversationsMessage](docs/api/custom_channels_public_conversations_message.html) | `create` | `POST /conversations/custom-channels/2026-09/{channelId}/messages` | Required |
| [CustomChannelsPublicConversationsMessage](docs/api/custom_channels_public_conversations_message.html) | `load` | `GET /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}` | Required |
| [CustomChannelsPublicConversationsMessage](docs/api/custom_channels_public_conversations_message.html) | `update` | `PATCH /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}` | Required |
| [PublicThread](docs/api/public_thread.html) | `remove` | `DELETE /conversations/v3/conversations/threads/{threadId}` | Required |
| [Thread](docs/api/thread.html) | `remove` | `DELETE /conversations/conversations/2026-09/threads/{threadId}` | Required |
| [VisitorIdentificationIdentificationToken](docs/api/visitor_identification_identification_token.html) | `create` | `POST /visitor-identification/2026-09/tokens/create` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /conversations/custom-channels/2026-09`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.hubapi.com/conversations/custom-channels/2026-09'
```

Inspect the response using the [CustomChannelsCollectionResponseWithTotalPublicChannel](docs/api/custom_channels_collection_response_with_total_public_channel.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-conversations_list`: List records for an entity. Supported entities: `conversations_collection_response_public_message_forward_paging`, `conversations_collection_response_public_thread_forward_paging`, `conversations_collection_response_with_total_public_channel`, `conversations_collection_response_with_total_public_channel_account`, `conversations_collection_response_with_total_public_inbox`, `conversations_inbox_messages_collection_response_public_message`, `conversations_inbox_messages_collection_response_public_thread`, `conversations_inbox_messages_collection_response_with_total_public`, `conversations_inbox_messages_collection_response_with_total_public2`, `conversations_inbox_messages_collection_response_with_total_public3`, `custom_channels_collection_response_with_total_public_channel`, `custom_channels_collection_response_with_total_public_channel2`.
- `hubspot-conversations_load`: Load one record for an entity. Supported entities: `conversations_inbox_messages_public_actor`, `conversations_inbox_messages_public_channel`, `conversations_inbox_messages_public_channel_account`, `conversations_inbox_messages_public_inbox`, `conversations_inbox_messages_public_message`, `conversations_inbox_messages_public_message_content`, `conversations_inbox_messages_public_thread`, `conversations_public_actor`, `conversations_public_channel`, `conversations_public_channel_account`, `conversations_public_inbox`, `conversations_public_message`, `conversations_public_message_content`, `conversations_public_thread`, `custom_channels_public_channel_account`, `custom_channels_public_channel_integration_channel`, `custom_channels_public_conversations_message`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

