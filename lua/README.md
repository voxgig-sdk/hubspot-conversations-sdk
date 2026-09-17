# HubspotConversations Lua SDK



The Lua SDK for the HubspotConversations API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Channel()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-conversations-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("hubspot-conversations_sdk")

local client = sdk.new({
  apikey = os.getenv("HUBSPOT_CONVERSATIONS_APIKEY"),
})
```

### 3. Load a conversationsinboxmessagespublicmessage

ConversationsInboxMessagesPublicMessage is nested under thread, so provide the `thread_id`.

```lua
local conversationsinboxmessagespublicmessage, err = client:ConversationsInboxMessagesPublicMessage():load({ thread_id = 1, id = "example_id" })
if err then error(err) end
print(conversationsinboxmessagespublicmessage)
```

### 4. Create, update, and remove

```lua
-- Remove
client:Channel():remove({ channel_id = 1 })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local conversationsinboxmessagespublicthread, err = client:ConversationsInboxMessagesPublicThread():load({ id = 1 })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:ConversationsInboxMessagesPublicThread():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE
HUBSPOT_CONVERSATIONS_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### HubspotConversationsSDK

```lua
local sdk = require("hubspot-conversations_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotConversationsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Channel` | `(data) -> ChannelEntity` | Create a Channel entity instance. |
| `ConversationsBatchResponsePublicActor` | `(data) -> ConversationsBatchResponsePublicActorEntity` | Create a ConversationsBatchResponsePublicActor entity instance. |
| `ConversationsCollectionResponsePublicMessageForwardPaging` | `(data) -> ConversationsCollectionResponsePublicMessageForwardPagingEntity` | Create a ConversationsCollectionResponsePublicMessageForwardPaging entity instance. |
| `ConversationsCollectionResponsePublicThreadForwardPaging` | `(data) -> ConversationsCollectionResponsePublicThreadForwardPagingEntity` | Create a ConversationsCollectionResponsePublicThreadForwardPaging entity instance. |
| `ConversationsCollectionResponseWithTotalPublicChannel` | `(data) -> ConversationsCollectionResponseWithTotalPublicChannelEntity` | Create a ConversationsCollectionResponseWithTotalPublicChannel entity instance. |
| `ConversationsCollectionResponseWithTotalPublicChannelAccount` | `(data) -> ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` | Create a ConversationsCollectionResponseWithTotalPublicChannelAccount entity instance. |
| `ConversationsCollectionResponseWithTotalPublicInbox` | `(data) -> ConversationsCollectionResponseWithTotalPublicInboxEntity` | Create a ConversationsCollectionResponseWithTotalPublicInbox entity instance. |
| `ConversationsInboxMessagesBatchResponsePublicActor` | `(data) -> ConversationsInboxMessagesBatchResponsePublicActorEntity` | Create a ConversationsInboxMessagesBatchResponsePublicActor entity instance. |
| `ConversationsInboxMessagesCollectionResponsePublicMessage` | `(data) -> ConversationsInboxMessagesCollectionResponsePublicMessageEntity` | Create a ConversationsInboxMessagesCollectionResponsePublicMessage entity instance. |
| `ConversationsInboxMessagesCollectionResponsePublicThread` | `(data) -> ConversationsInboxMessagesCollectionResponsePublicThreadEntity` | Create a ConversationsInboxMessagesCollectionResponsePublicThread entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic` | `(data) -> ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic2` | `(data) -> ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic2 entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic3` | `(data) -> ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic3 entity instance. |
| `ConversationsInboxMessagesPublicActor` | `(data) -> ConversationsInboxMessagesPublicActorEntity` | Create a ConversationsInboxMessagesPublicActor entity instance. |
| `ConversationsInboxMessagesPublicChannel` | `(data) -> ConversationsInboxMessagesPublicChannelEntity` | Create a ConversationsInboxMessagesPublicChannel entity instance. |
| `ConversationsInboxMessagesPublicChannelAccount` | `(data) -> ConversationsInboxMessagesPublicChannelAccountEntity` | Create a ConversationsInboxMessagesPublicChannelAccount entity instance. |
| `ConversationsInboxMessagesPublicInbox` | `(data) -> ConversationsInboxMessagesPublicInboxEntity` | Create a ConversationsInboxMessagesPublicInbox entity instance. |
| `ConversationsInboxMessagesPublicMessage` | `(data) -> ConversationsInboxMessagesPublicMessageEntity` | Create a ConversationsInboxMessagesPublicMessage entity instance. |
| `ConversationsInboxMessagesPublicMessageContent` | `(data) -> ConversationsInboxMessagesPublicMessageContentEntity` | Create a ConversationsInboxMessagesPublicMessageContent entity instance. |
| `ConversationsInboxMessagesPublicThread` | `(data) -> ConversationsInboxMessagesPublicThreadEntity` | Create a ConversationsInboxMessagesPublicThread entity instance. |
| `ConversationsPublicActor` | `(data) -> ConversationsPublicActorEntity` | Create a ConversationsPublicActor entity instance. |
| `ConversationsPublicChannel` | `(data) -> ConversationsPublicChannelEntity` | Create a ConversationsPublicChannel entity instance. |
| `ConversationsPublicChannelAccount` | `(data) -> ConversationsPublicChannelAccountEntity` | Create a ConversationsPublicChannelAccount entity instance. |
| `ConversationsPublicInbox` | `(data) -> ConversationsPublicInboxEntity` | Create a ConversationsPublicInbox entity instance. |
| `ConversationsPublicMessage` | `(data) -> ConversationsPublicMessageEntity` | Create a ConversationsPublicMessage entity instance. |
| `ConversationsPublicMessageContent` | `(data) -> ConversationsPublicMessageContentEntity` | Create a ConversationsPublicMessageContent entity instance. |
| `ConversationsPublicThread` | `(data) -> ConversationsPublicThreadEntity` | Create a ConversationsPublicThread entity instance. |
| `CustomChannelsCollectionResponseWithTotalPublicChannel` | `(data) -> CustomChannelsCollectionResponseWithTotalPublicChannelEntity` | Create a CustomChannelsCollectionResponseWithTotalPublicChannel entity instance. |
| `CustomChannelsCollectionResponseWithTotalPublicChannel2` | `(data) -> CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` | Create a CustomChannelsCollectionResponseWithTotalPublicChannel2 entity instance. |
| `CustomChannelsPublicChannelAccount` | `(data) -> CustomChannelsPublicChannelAccountEntity` | Create a CustomChannelsPublicChannelAccount entity instance. |
| `CustomChannelsPublicChannelAccountStagingToken` | `(data) -> CustomChannelsPublicChannelAccountStagingTokenEntity` | Create a CustomChannelsPublicChannelAccountStagingToken entity instance. |
| `CustomChannelsPublicChannelIntegrationChannel` | `(data) -> CustomChannelsPublicChannelIntegrationChannelEntity` | Create a CustomChannelsPublicChannelIntegrationChannel entity instance. |
| `CustomChannelsPublicConversationsMessage` | `(data) -> CustomChannelsPublicConversationsMessageEntity` | Create a CustomChannelsPublicConversationsMessage entity instance. |
| `PublicThread` | `(data) -> PublicThreadEntity` | Create a PublicThread entity instance. |
| `Thread` | `(data) -> ThreadEntity` | Create a Thread entity instance. |
| `VisitorIdentificationIdentificationToken` | `(data) -> VisitorIdentificationIdentificationTokenEntity` | Create a VisitorIdentificationIdentificationToken entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local conversations_inbox_messages_public_actor, err = client:ConversationsInboxMessagesPublicActor():load({ id = "example_id" })
    if err then error(err) end
    -- conversations_inbox_messages_public_actor is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Channel

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/conversations/custom-channels/2026-09/{channelId}`

#### ConversationsBatchResponsePublicActor

| Field | Description |
| --- | --- |
| `completedAt` |  |
| `errors` |  |
| `inputs` |  |
| `links` |  |
| `numErrors` |  |
| `requestedAt` |  |
| `results` |  |
| `startedAt` |  |
| `status` |  |

Operations: Create.

API path: `/conversations/conversations/2026-09/actors/batch/read`

#### ConversationsCollectionResponsePublicMessageForwardPaging

| Field | Description |
| --- | --- |
| `paging` |  |
| `results` |  |

Operations: List.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages`

#### ConversationsCollectionResponsePublicThreadForwardPaging

| Field | Description |
| --- | --- |
| `archived` | Whether this thread is archived. |
| `assignedTo` |  |
| `associatedContactId` | The ID of the associated Contact in the CRM. |
| `closedAt` | When the thread was closed. |
| `createdAt` | When the thread was created. |
| `id` | The unique ID of the thread. |
| `inboxId` | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` |  |
| `originalChannelId` |  |
| `spam` | Whether the thread is marked as spam. |
| `status` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` |  |

Operations: List.

API path: `/conversations/conversations/2026-09/threads`

#### ConversationsCollectionResponseWithTotalPublicChannel

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: List.

API path: `/conversations/conversations/2026-09/channels`

#### ConversationsCollectionResponseWithTotalPublicChannelAccount

| Field | Description |
| --- | --- |
| `active` | Whether the channel account is turned on. |
| `archived` |  |
| `archivedAt` |  |
| `authorized` |  |
| `channelId` | The ID of the channel that the channel account is an instance of. |
| `createdAt` |  |
| `deliveryIdentifier` |  |
| `id` | The ID of the channel account. |
| `inboxId` | The ID of the conversations inbox that contains the channel account. |
| `name` | The name of the channel account. |

Operations: List.

API path: `/conversations/conversations/2026-09/channel-accounts`

#### ConversationsCollectionResponseWithTotalPublicInbox

| Field | Description |
| --- | --- |
| `archived` |  |
| `archivedAt` |  |
| `createdAt` | When the inbox was created. |
| `id` | The ID of the inbox. |
| `name` | The name of the inbox. |
| `type` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` |  |

Operations: List.

API path: `/conversations/conversations/2026-09/inboxes`

#### ConversationsInboxMessagesBatchResponsePublicActor

| Field | Description |
| --- | --- |
| `completedAt` |  |
| `inputs` |  |
| `links` |  |
| `requestedAt` |  |
| `results` |  |
| `startedAt` |  |
| `status` |  |

Operations: Create.

API path: `/conversations/v3/conversations/actors/batch/read`

#### ConversationsInboxMessagesCollectionResponsePublicMessage

| Field | Description |
| --- | --- |
| `paging` |  |
| `results` |  |

Operations: List.

API path: `/conversations/v3/conversations/threads/{threadId}/messages`

#### ConversationsInboxMessagesCollectionResponsePublicThread

| Field | Description |
| --- | --- |
| `archived` | Whether this thread is archived. |
| `assignedTo` |  |
| `associatedContactId` | The ID of the associated Contact in the CRM. |
| `closedAt` | When the thread was closed. |
| `createdAt` | When the thread was created. |
| `id` | The unique ID of the thread. |
| `inboxId` | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` |  |
| `originalChannelId` |  |
| `spam` | Whether the thread is marked as spam. |
| `status` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` |  |

Operations: List.

API path: `/conversations/v3/conversations/threads`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic

| Field | Description |
| --- | --- |
| `active` | Whether the channel account is turned on. |
| `archived` |  |
| `archivedAt` |  |
| `authorized` |  |
| `channelId` | The ID of the channel that the channel account is an instance of. |
| `createdAt` |  |
| `deliveryIdentifier` |  |
| `id` | The ID of the channel account. |
| `inboxId` | The ID of the conversations inbox that contains the channel account. |
| `name` | The name of the channel account. |

Operations: List.

API path: `/conversations/v3/conversations/channel-accounts`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: List.

API path: `/conversations/v3/conversations/channels`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic3

| Field | Description |
| --- | --- |
| `archived` |  |
| `archivedAt` |  |
| `createdAt` | When the inbox was created. |
| `id` | The ID of the inbox. |
| `name` | The name of the inbox. |
| `type` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` |  |

Operations: List.

API path: `/conversations/v3/conversations/inboxes`

#### ConversationsInboxMessagesPublicActor

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/conversations/v3/conversations/actors/{actorId}`

#### ConversationsInboxMessagesPublicChannel

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: Load.

API path: `/conversations/v3/conversations/channels/{channelId}`

#### ConversationsInboxMessagesPublicChannelAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `type` | The type of identifier. |
| `value` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

Operations: Load.

API path: `/conversations/v3/conversations/channel-accounts/{channelAccountId}`

#### ConversationsInboxMessagesPublicInbox

| Field | Description |
| --- | --- |
| `archived` |  |
| `archivedAt` |  |
| `createdAt` | When the inbox was created. |
| `id` | The ID of the inbox. |
| `name` | The name of the inbox. |
| `type` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` |  |

Operations: Load.

API path: `/conversations/v3/conversations/inboxes/{inboxId}`

#### ConversationsInboxMessagesPublicMessage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load.

API path: `/conversations/v3/conversations/threads/{threadId}/messages`

#### ConversationsInboxMessagesPublicMessageContent

| Field | Description |
| --- | --- |
| `richText` |  |
| `text` |  |

Operations: Load.

API path: `/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content`

#### ConversationsInboxMessagesPublicThread

| Field | Description |
| --- | --- |
| `archived` | Whether this thread is archived. |
| `associatedTicketId` |  |
| `id` |  |
| `status` | The thread's status: `OPEN` or `CLOSED`. |

Operations: Load, Update.

API path: `/conversations/v3/conversations/threads/{threadId}`

#### ConversationsPublicActor

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/conversations/conversations/2026-09/actors/{actorId}`

#### ConversationsPublicChannel

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: Load.

API path: `/conversations/conversations/2026-09/channels/{channelId}`

#### ConversationsPublicChannelAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `type` | The type of identifier. |
| `value` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

Operations: Load.

API path: `/conversations/conversations/2026-09/channel-accounts/{channelAccountId}`

#### ConversationsPublicInbox

| Field | Description |
| --- | --- |
| `archived` |  |
| `archivedAt` |  |
| `createdAt` | When the inbox was created. |
| `id` | The ID of the inbox. |
| `name` | The name of the inbox. |
| `type` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` |  |

Operations: Load.

API path: `/conversations/conversations/2026-09/inboxes/{inboxId}`

#### ConversationsPublicMessage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages`

#### ConversationsPublicMessageContent

| Field | Description |
| --- | --- |
| `richText` |  |
| `text` |  |

Operations: Load.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content`

#### ConversationsPublicThread

| Field | Description |
| --- | --- |
| `archived` | Whether this thread is archived. |
| `associatedTicketId` |  |
| `id` |  |
| `status` | The thread's status: `OPEN` or `CLOSED`. |

Operations: Load, Remove, Update.

API path: `/conversations/conversations/2026-09/threads/{threadId}`

#### CustomChannelsCollectionResponseWithTotalPublicChannel

| Field | Description |
| --- | --- |
| `capabilities` | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | A string providing a description of the channel. |
| `channelLogoUrl` | A string representing the URL of the channel's logo. |
| `createdAt` | The date and time when the channel was created, in ISO 8601 format. |
| `id` | A string that uniquely identifies the channel. |
| `name` | A string representing the name of the channel. |
| `webhookUrl` | A string representing the URL to which webhook events will be sent. |

Operations: List.

API path: `/conversations/custom-channels/2026-09`

#### CustomChannelsCollectionResponseWithTotalPublicChannel2

| Field | Description |
| --- | --- |
| `active` | A boolean indicating whether the channel account is currently active. |
| `archived` | A boolean indicating whether the channel account is archived. |
| `archivedAt` | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | A boolean indicating whether the channel account is authorized. |
| `channelId` | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` |  |
| `id` | The unique identifier for this channel account, represented as a string. |
| `inboxId` | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | The name of the channel account, represented as a string. |

Operations: List.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-accounts`

#### CustomChannelsPublicChannelAccount

| Field | Description |
| --- | --- |
| `authorized` | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` |  |
| `id` |  |
| `inboxId` | The unique identifier for the inbox associated with this channel account. |
| `name` | The name of the channel account. |
| `type` | A string representing the type of delivery identifier. |
| `value` | A string representing the value associated with the delivery identifier type. |

Operations: Create, Load, Update.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-accounts`

#### CustomChannelsPublicChannelAccountStagingToken

| Field | Description |
| --- | --- |
| `accountName` | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` |  |
| `id` |  |
| `type` | A string representing the type of delivery identifier. |
| `value` | A string representing the value associated with the delivery identifier type. |

Operations: Update.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}`

#### CustomChannelsPublicChannelIntegrationChannel

| Field | Description |
| --- | --- |
| `capabilities` | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | A string providing a description of the channel. |
| `channelLogoUrl` | A string representing the URL of the channel's logo. |
| `name` | A string representing the name of the channel. |
| `webhookUrl` | A string representing the URL to which webhook events will be sent. |

Operations: Create, Load, Update.

API path: `/conversations/custom-channels/2026-09`

#### CustomChannelsPublicConversationsMessage

| Field | Description |
| --- | --- |
| `archived` | A boolean indicating whether the message is archived. |
| `associateWithContactId` | The ID of the contact with which this message should be associated. |
| `attachments` | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | The identifier of the channel account associated with the message. |
| `channelId` | The identifier of the channel through which the message was sent. |
| `client` |  |
| `conversationsThreadId` | The identifier for the conversation thread to which this message belongs. |
| `createdAt` | The date and time when the message was created, in ISO 8601 format. |
| `createdBy` | The identifier of the user or system that created the message. |
| `direction` | The direction of the message, either 'INCOMING' or 'OUTGOING'. |
| `errorMessage` | A string containing an error message, if applicable. |
| `id` | The unique identifier for the message. |
| `inReplyToId` | The identifier of the message to which this message is a reply, if applicable. |
| `integrationIdempotencyId` | A unique identifier to ensure idempotency of the message within the integration. |
| `integrationThreadId` | A unique identifier for the thread within the integration. |
| `messageDirection` | The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'. |
| `preResolvedContacts` |  |
| `recipients` | An array of recipients of the message, each containing recipient details. |
| `richText` | The rich text content of the message, if available. |
| `senders` | An array of senders associated with the message, each containing sender details. |
| `status` |  |
| `statusType` | Valid status are SENT, FAILED, and READ |
| `subject` | The subject of the message, if applicable. |
| `text` | The plain text content of the message. |
| `timestamp` | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | Indicates whether the message content is truncated. |
| `type` | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | The date and time when the message was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/conversations/custom-channels/2026-09/{channelId}/messages`

#### PublicThread

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/conversations/v3/conversations/threads/{threadId}`

#### Thread

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/conversations/conversations/2026-09/threads/{threadId}`

#### VisitorIdentificationIdentificationToken

| Field | Description |
| --- | --- |
| `email` | The email of the visitor that you wish to identify |
| `firstName` | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | An object containing additional context about the customer agent. |
| `lastName` | The last name of the visitor that you wish to identify. |
| `token` | An identification token that allows the visitor to be treated as a known contact. |

Operations: Create.

API path: `/visitor-identification/2026-09/tokens/create`



## Entities


### Channel

Create an instance: `local channel = client:Channel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ConversationsBatchResponsePublicActor

Create an instance: `local conversations_batch_response_public_actor = client:ConversationsBatchResponsePublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` |  |
| `errors` | `table` |  |
| `inputs` | `table` |  |
| `links` | `table` |  |
| `numErrors` | `number` |  |
| `requestedAt` | `string` |  |
| `results` | `table` |  |
| `startedAt` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```lua
local conversations_batch_response_public_actor, err = client:ConversationsBatchResponsePublicActor():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### ConversationsCollectionResponsePublicMessageForwardPaging

Create an instance: `local conversations_collection_response_public_message_forward_paging = client:ConversationsCollectionResponsePublicMessageForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `table` |  |
| `results` | `table` |  |

#### Example: List

```lua
local conversations_collection_response_public_message_forward_pagings, err = client:ConversationsCollectionResponsePublicMessageForwardPaging():list()
```


### ConversationsCollectionResponsePublicThreadForwardPaging

Create an instance: `local conversations_collection_response_public_thread_forward_paging = client:ConversationsCollectionResponsePublicThreadForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether this thread is archived. |
| `assignedTo` | `string` |  |
| `associatedContactId` | `string` | The ID of the associated Contact in the CRM. |
| `closedAt` | `string` | When the thread was closed. |
| `createdAt` | `string` | When the thread was created. |
| `id` | `string` | The unique ID of the thread. |
| `inboxId` | `string` | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `string` | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `string` | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `string` | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `string` |  |
| `originalChannelId` | `string` |  |
| `spam` | `boolean` | Whether the thread is marked as spam. |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `table` |  |

#### Example: List

```lua
local conversations_collection_response_public_thread_forward_pagings, err = client:ConversationsCollectionResponsePublicThreadForwardPaging():list()
```


### ConversationsCollectionResponseWithTotalPublicChannel

Create an instance: `local conversations_collection_response_with_total_public_channel = client:ConversationsCollectionResponseWithTotalPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: List

```lua
local conversations_collection_response_with_total_public_channels, err = client:ConversationsCollectionResponseWithTotalPublicChannel():list()
```


### ConversationsCollectionResponseWithTotalPublicChannelAccount

Create an instance: `local conversations_collection_response_with_total_public_channel_account = client:ConversationsCollectionResponseWithTotalPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the channel account is turned on. |
| `archived` | `boolean` |  |
| `archivedAt` | `string` |  |
| `authorized` | `boolean` |  |
| `channelId` | `string` | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` |  |
| `deliveryIdentifier` | `table` |  |
| `id` | `string` | The ID of the channel account. |
| `inboxId` | `string` | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | The name of the channel account. |

#### Example: List

```lua
local conversations_collection_response_with_total_public_channel_accounts, err = client:ConversationsCollectionResponseWithTotalPublicChannelAccount():list()
```


### ConversationsCollectionResponseWithTotalPublicInbox

Create an instance: `local conversations_collection_response_with_total_public_inbox = client:ConversationsCollectionResponseWithTotalPublicInbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: List

```lua
local conversations_collection_response_with_total_public_inboxs, err = client:ConversationsCollectionResponseWithTotalPublicInbox():list()
```


### ConversationsInboxMessagesBatchResponsePublicActor

Create an instance: `local conversations_inbox_messages_batch_response_public_actor = client:ConversationsInboxMessagesBatchResponsePublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` |  |
| `inputs` | `table` |  |
| `links` | `table` |  |
| `requestedAt` | `string` |  |
| `results` | `table` |  |
| `startedAt` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```lua
local conversations_inbox_messages_batch_response_public_actor, err = client:ConversationsInboxMessagesBatchResponsePublicActor():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### ConversationsInboxMessagesCollectionResponsePublicMessage

Create an instance: `local conversations_inbox_messages_collection_response_public_message = client:ConversationsInboxMessagesCollectionResponsePublicMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `table` |  |
| `results` | `table` |  |

#### Example: List

```lua
local conversations_inbox_messages_collection_response_public_messages, err = client:ConversationsInboxMessagesCollectionResponsePublicMessage():list()
```


### ConversationsInboxMessagesCollectionResponsePublicThread

Create an instance: `local conversations_inbox_messages_collection_response_public_thread = client:ConversationsInboxMessagesCollectionResponsePublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether this thread is archived. |
| `assignedTo` | `string` |  |
| `associatedContactId` | `string` | The ID of the associated Contact in the CRM. |
| `closedAt` | `string` | When the thread was closed. |
| `createdAt` | `string` | When the thread was created. |
| `id` | `string` | The unique ID of the thread. |
| `inboxId` | `string` | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `string` | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `string` | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `string` | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `string` |  |
| `originalChannelId` | `string` |  |
| `spam` | `boolean` | Whether the thread is marked as spam. |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `table` |  |

#### Example: List

```lua
local conversations_inbox_messages_collection_response_public_threads, err = client:ConversationsInboxMessagesCollectionResponsePublicThread():list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic

Create an instance: `local conversations_inbox_messages_collection_response_with_total_public = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the channel account is turned on. |
| `archived` | `boolean` |  |
| `archivedAt` | `string` |  |
| `authorized` | `boolean` |  |
| `channelId` | `string` | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` |  |
| `deliveryIdentifier` | `table` |  |
| `id` | `string` | The ID of the channel account. |
| `inboxId` | `string` | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | The name of the channel account. |

#### Example: List

```lua
local conversations_inbox_messages_collection_response_with_total_publics, err = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic():list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

Create an instance: `local conversations_inbox_messages_collection_response_with_total_public2 = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: List

```lua
local conversations_inbox_messages_collection_response_with_total_public2s, err = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic2():list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic3

Create an instance: `local conversations_inbox_messages_collection_response_with_total_public3 = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: List

```lua
local conversations_inbox_messages_collection_response_with_total_public3s, err = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic3():list()
```


### ConversationsInboxMessagesPublicActor

Create an instance: `local conversations_inbox_messages_public_actor = client:ConversationsInboxMessagesPublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local conversations_inbox_messages_public_actor, err = client:ConversationsInboxMessagesPublicActor():load({ id = "conversations_inbox_messages_public_actor_id" })
```


### ConversationsInboxMessagesPublicChannel

Create an instance: `local conversations_inbox_messages_public_channel = client:ConversationsInboxMessagesPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: Load

```lua
local conversations_inbox_messages_public_channel, err = client:ConversationsInboxMessagesPublicChannel():load({ id = 1 })
```


### ConversationsInboxMessagesPublicChannelAccount

Create an instance: `local conversations_inbox_messages_public_channel_account = client:ConversationsInboxMessagesPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `type` | `string` | The type of identifier. |
| `value` | `string` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

#### Example: Load

```lua
local conversations_inbox_messages_public_channel_account, err = client:ConversationsInboxMessagesPublicChannelAccount():load({ id = 1 })
```


### ConversationsInboxMessagesPublicInbox

Create an instance: `local conversations_inbox_messages_public_inbox = client:ConversationsInboxMessagesPublicInbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: Load

```lua
local conversations_inbox_messages_public_inbox, err = client:ConversationsInboxMessagesPublicInbox():load({ id = 1 })
```


### ConversationsInboxMessagesPublicMessage

Create an instance: `local conversations_inbox_messages_public_message = client:ConversationsInboxMessagesPublicMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local conversations_inbox_messages_public_message, err = client:ConversationsInboxMessagesPublicMessage():load({ id = "conversations_inbox_messages_public_message_id", thread_id = 1 })
```

#### Example: Create

```lua
local conversations_inbox_messages_public_message, err = client:ConversationsInboxMessagesPublicMessage():create({
  thread_id = 1, -- number
})
```


### ConversationsInboxMessagesPublicMessageContent

Create an instance: `local conversations_inbox_messages_public_message_content = client:ConversationsInboxMessagesPublicMessageContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `richText` | `string` |  |
| `text` | `string` |  |

#### Example: Load

```lua
local conversations_inbox_messages_public_message_content, err = client:ConversationsInboxMessagesPublicMessageContent():load({ message_id = "message_id", thread_id = 1 })
```


### ConversationsInboxMessagesPublicThread

Create an instance: `local conversations_inbox_messages_public_thread = client:ConversationsInboxMessagesPublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether this thread is archived. |
| `associatedTicketId` | `string` |  |
| `id` | `string` |  |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |

#### Example: Load

```lua
local conversations_inbox_messages_public_thread, err = client:ConversationsInboxMessagesPublicThread():load({ id = 1 })
```


### ConversationsPublicActor

Create an instance: `local conversations_public_actor = client:ConversationsPublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local conversations_public_actor, err = client:ConversationsPublicActor():load({ id = "conversations_public_actor_id" })
```


### ConversationsPublicChannel

Create an instance: `local conversations_public_channel = client:ConversationsPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: Load

```lua
local conversations_public_channel, err = client:ConversationsPublicChannel():load({ id = 1 })
```


### ConversationsPublicChannelAccount

Create an instance: `local conversations_public_channel_account = client:ConversationsPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `type` | `string` | The type of identifier. |
| `value` | `string` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

#### Example: Load

```lua
local conversations_public_channel_account, err = client:ConversationsPublicChannelAccount():load({ id = 1 })
```


### ConversationsPublicInbox

Create an instance: `local conversations_public_inbox = client:ConversationsPublicInbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: Load

```lua
local conversations_public_inbox, err = client:ConversationsPublicInbox():load({ id = 1 })
```


### ConversationsPublicMessage

Create an instance: `local conversations_public_message = client:ConversationsPublicMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local conversations_public_message, err = client:ConversationsPublicMessage():load({ id = "conversations_public_message_id", thread_id = 1 })
```

#### Example: Create

```lua
local conversations_public_message, err = client:ConversationsPublicMessage():create({
  thread_id = 1, -- number
})
```


### ConversationsPublicMessageContent

Create an instance: `local conversations_public_message_content = client:ConversationsPublicMessageContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `richText` | `string` |  |
| `text` | `string` |  |

#### Example: Load

```lua
local conversations_public_message_content, err = client:ConversationsPublicMessageContent():load({ message_id = "message_id", thread_id = 1 })
```


### ConversationsPublicThread

Create an instance: `local conversations_public_thread = client:ConversationsPublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether this thread is archived. |
| `associatedTicketId` | `string` |  |
| `id` | `string` |  |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |

#### Example: Load

```lua
local conversations_public_thread, err = client:ConversationsPublicThread():load({ id = 1 })
```


### CustomChannelsCollectionResponseWithTotalPublicChannel

Create an instance: `local custom_channels_collection_response_with_total_public_channel = client:CustomChannelsCollectionResponseWithTotalPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `table` | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | A string that uniquely identifies the channel. |
| `name` | `string` | A string representing the name of the channel. |
| `webhookUrl` | `string` | A string representing the URL to which webhook events will be sent. |

#### Example: List

```lua
local custom_channels_collection_response_with_total_public_channels, err = client:CustomChannelsCollectionResponseWithTotalPublicChannel():list()
```


### CustomChannelsCollectionResponseWithTotalPublicChannel2

Create an instance: `local custom_channels_collection_response_with_total_public_channel2 = client:CustomChannelsCollectionResponseWithTotalPublicChannel2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | A boolean indicating whether the channel account is currently active. |
| `archived` | `boolean` | A boolean indicating whether the channel account is archived. |
| `archivedAt` | `string` | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | `boolean` | A boolean indicating whether the channel account is authorized. |
| `channelId` | `string` | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | `string` | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` | `table` |  |
| `id` | `string` | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | The name of the channel account, represented as a string. |

#### Example: List

```lua
local custom_channels_collection_response_with_total_public_channel2s, err = client:CustomChannelsCollectionResponseWithTotalPublicChannel2():list()
```


### CustomChannelsPublicChannelAccount

Create an instance: `local custom_channels_public_channel_account = client:CustomChannelsPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorized` | `boolean` | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `table` |  |
| `id` | `string` |  |
| `inboxId` | `string` | The unique identifier for the inbox associated with this channel account. |
| `name` | `string` | The name of the channel account. |
| `type` | `string` | A string representing the type of delivery identifier. |
| `value` | `string` | A string representing the value associated with the delivery identifier type. |

#### Example: Load

```lua
local custom_channels_public_channel_account, err = client:CustomChannelsPublicChannelAccount():load({ id = 1, channel_id = 1 })
```

#### Example: Create

```lua
local custom_channels_public_channel_account, err = client:CustomChannelsPublicChannelAccount():create({
  channel_id = 1, -- number
  authorized = true, -- boolean
  deliveryIdentifier = {}, -- table
  inboxId = "example_inboxId", -- string
  name = "example_name", -- string
  type = "example_type", -- string
  value = "example_value", -- string
})
```


### CustomChannelsPublicChannelAccountStagingToken

Create an instance: `local custom_channels_public_channel_account_staging_token = client:CustomChannelsPublicChannelAccountStagingToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountName` | `string` | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `table` |  |
| `id` | `string` |  |
| `type` | `string` | A string representing the type of delivery identifier. |
| `value` | `string` | A string representing the value associated with the delivery identifier type. |


### CustomChannelsPublicChannelIntegrationChannel

Create an instance: `local custom_channels_public_channel_integration_channel = client:CustomChannelsPublicChannelIntegrationChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `table` | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | `string` | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | `string` | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | A string representing the URL of the channel's logo. |
| `name` | `string` | A string representing the name of the channel. |
| `webhookUrl` | `string` | A string representing the URL to which webhook events will be sent. |

#### Example: Load

```lua
local custom_channels_public_channel_integration_channel, err = client:CustomChannelsPublicChannelIntegrationChannel():load({ channel_id = 1 })
```

#### Example: Create

```lua
local custom_channels_public_channel_integration_channel, err = client:CustomChannelsPublicChannelIntegrationChannel():create({
  capabilities = {}, -- table
  name = "example_name", -- string
})
```


### CustomChannelsPublicConversationsMessage

Create an instance: `local custom_channels_public_conversations_message = client:CustomChannelsPublicConversationsMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `number` | The ID of the contact with which this message should be associated. |
| `attachments` | `table` | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | The identifier of the channel account associated with the message. |
| `channelId` | `string` | The identifier of the channel through which the message was sent. |
| `client` | `table` |  |
| `conversationsThreadId` | `string` | The identifier for the conversation thread to which this message belongs. |
| `createdAt` | `string` | The date and time when the message was created, in ISO 8601 format. |
| `createdBy` | `string` | The identifier of the user or system that created the message. |
| `direction` | `string` | The direction of the message, either 'INCOMING' or 'OUTGOING'. |
| `errorMessage` | `string` | A string containing an error message, if applicable. |
| `id` | `string` | The unique identifier for the message. |
| `inReplyToId` | `string` | The identifier of the message to which this message is a reply, if applicable. |
| `integrationIdempotencyId` | `string` | A unique identifier to ensure idempotency of the message within the integration. |
| `integrationThreadId` | `string` | A unique identifier for the thread within the integration. |
| `messageDirection` | `string` | The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'. |
| `preResolvedContacts` | `table` |  |
| `recipients` | `table` | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | The rich text content of the message, if available. |
| `senders` | `table` | An array of senders associated with the message, each containing sender details. |
| `status` | `table` |  |
| `statusType` | `string` | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | The subject of the message, if applicable. |
| `text` | `string` | The plain text content of the message. |
| `timestamp` | `string` | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Indicates whether the message content is truncated. |
| `type` | `string` | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | The date and time when the message was last updated, in ISO 8601 format. |

#### Example: Load

```lua
local custom_channels_public_conversations_message, err = client:CustomChannelsPublicConversationsMessage():load({ id = "custom_channels_public_conversations_message_id", channel_id = 1 })
```

#### Example: Create

```lua
local custom_channels_public_conversations_message, err = client:CustomChannelsPublicConversationsMessage():create({
  channel_id = 1, -- number
  archived = true, -- boolean
  attachments = {}, -- table
  channelAccountId = "example_channelAccountId", -- string
  channelId = "example_channelId", -- string
  client = {}, -- table
  conversationsThreadId = "example_conversationsThreadId", -- string
  createdAt = "example_createdAt", -- string
  createdBy = "example_createdBy", -- string
  direction = "example_direction", -- string
  id = "example_id", -- string
  messageDirection = "example_messageDirection", -- string
  preResolvedContacts = {}, -- table
  recipients = {}, -- table
  senders = {}, -- table
  status = {}, -- table
  statusType = "example_statusType", -- string
  text = "example_text", -- string
  timestamp = "example_timestamp", -- string
  truncationStatus = "example_truncationStatus", -- string
  type = "example_type", -- string
})
```


### PublicThread

Create an instance: `local public_thread = client:PublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Thread

Create an instance: `local thread = client:Thread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### VisitorIdentificationIdentificationToken

Create an instance: `local visitor_identification_identification_token = client:VisitorIdentificationIdentificationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email of the visitor that you wish to identify |
| `firstName` | `string` | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `table` | An object containing additional context about the customer agent. |
| `lastName` | `string` | The last name of the visitor that you wish to identify. |
| `token` | `string` | An identification token that allows the visitor to be treated as a known contact. |

#### Example: Create

```lua
local visitor_identification_identification_token, err = client:VisitorIdentificationIdentificationToken():create({
  email = "example_email", -- string
  hsCustomerAgentContext = {}, -- table
  token = "example_token", -- string
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

5 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `conversations_collection_response_public_message_forward_paging` | `results` | 8 | 12 levels |
| `conversations_inbox_messages_collection_response_public_message` | `results` | 8 | 12 levels |
| `custom_channels_public_conversations_message` | `attachments` | 8 | 1 level |
| `conversations_batch_response_public_actor` | `results` | 7 | 5 levels |
| `conversations_inbox_messages_batch_response_public_actor` | `results` | 7 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── hubspot-conversations_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`hubspot-conversations_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local conversationsinboxmessagespublicthread = client:ConversationsInboxMessagesPublicThread()
conversationsinboxmessagespublicthread:load({ id = 1 })

-- conversationsinboxmessagespublicthread:data_get() now returns the conversationsinboxmessagespublicthread data from the last load
-- conversationsinboxmessagespublicthread:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
