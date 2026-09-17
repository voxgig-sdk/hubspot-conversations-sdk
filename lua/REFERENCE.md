# HubspotConversations Lua SDK Reference

Complete API reference for the HubspotConversations Lua SDK.


## HubspotConversationsSDK

### Constructor

```lua
local sdk = require("hubspot-conversations_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Channel(data)`

Create a new `Channel` entity instance. Pass `nil` for no initial data.

#### `ConversationsBatchResponsePublicActor(data)`

Create a new `ConversationsBatchResponsePublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponsePublicMessageForwardPaging(data)`

Create a new `ConversationsCollectionResponsePublicMessageForwardPaging` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponsePublicThreadForwardPaging(data)`

Create a new `ConversationsCollectionResponsePublicThreadForwardPaging` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannel(data)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannel` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannelAccount(data)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicInbox(data)`

Create a new `ConversationsCollectionResponseWithTotalPublicInbox` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesBatchResponsePublicActor(data)`

Create a new `ConversationsInboxMessagesBatchResponsePublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicMessage(data)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessage` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicThread(data)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThread` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic(data)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicActor(data)`

Create a new `ConversationsInboxMessagesPublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicChannel(data)`

Create a new `ConversationsInboxMessagesPublicChannel` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicChannelAccount(data)`

Create a new `ConversationsInboxMessagesPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicInbox(data)`

Create a new `ConversationsInboxMessagesPublicInbox` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicMessage(data)`

Create a new `ConversationsInboxMessagesPublicMessage` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicMessageContent(data)`

Create a new `ConversationsInboxMessagesPublicMessageContent` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicThread(data)`

Create a new `ConversationsInboxMessagesPublicThread` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicActor(data)`

Create a new `ConversationsPublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicChannel(data)`

Create a new `ConversationsPublicChannel` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicChannelAccount(data)`

Create a new `ConversationsPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicInbox(data)`

Create a new `ConversationsPublicInbox` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicMessage(data)`

Create a new `ConversationsPublicMessage` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicMessageContent(data)`

Create a new `ConversationsPublicMessageContent` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicThread(data)`

Create a new `ConversationsPublicThread` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel(data)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel2(data)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicChannelAccount(data)`

Create a new `CustomChannelsPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicChannelAccountStagingToken(data)`

Create a new `CustomChannelsPublicChannelAccountStagingToken` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicChannelIntegrationChannel(data)`

Create a new `CustomChannelsPublicChannelIntegrationChannel` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicConversationsMessage(data)`

Create a new `CustomChannelsPublicConversationsMessage` entity instance. Pass `nil` for no initial data.

#### `PublicThread(data)`

Create a new `PublicThread` entity instance. Pass `nil` for no initial data.

#### `Thread(data)`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `VisitorIdentificationIdentificationToken(data)`

Create a new `VisitorIdentificationIdentificationToken` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ChannelEntity

```lua
local channel = client:Channel(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Channel():remove({ channel_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsBatchResponsePublicActorEntity

```lua
local conversations_batch_response_public_actor = client:ConversationsBatchResponsePublicActor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `errors` | `table` | No |  |
| `inputs` | `table` | Yes |  |
| `links` | `table` | No |  |
| `numErrors` | `number` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `table` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationsBatchResponsePublicActor():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsBatchResponsePublicActorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsCollectionResponsePublicMessageForwardPagingEntity

```lua
local conversations_collection_response_public_message_forward_paging = client:ConversationsCollectionResponsePublicMessageForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `table` | No |  |
| `results` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsCollectionResponsePublicMessageForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsCollectionResponsePublicThreadForwardPagingEntity

```lua
local conversations_collection_response_public_thread_forward_paging = client:ConversationsCollectionResponsePublicThreadForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether this thread is archived. |
| `assignedTo` | `string` | No |  |
| `associatedContactId` | `string` | Yes | The ID of the associated Contact in the CRM. |
| `closedAt` | `string` | No | When the thread was closed. |
| `createdAt` | `string` | Yes | When the thread was created. |
| `id` | `string` | Yes | The unique ID of the thread. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `string` | No | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `string` | No | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `string` | No | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `string` | Yes |  |
| `originalChannelId` | `string` | Yes |  |
| `spam` | `boolean` | Yes | Whether the thread is marked as spam. |
| `status` | `string` | Yes | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsCollectionResponsePublicThreadForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelEntity

```lua
local conversations_collection_response_with_total_public_channel = client:ConversationsCollectionResponseWithTotalPublicChannel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsCollectionResponseWithTotalPublicChannel():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelAccountEntity

```lua
local conversations_collection_response_with_total_public_channel_account = client:ConversationsCollectionResponseWithTotalPublicChannelAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the channel account is turned on. |
| `archived` | `boolean` | Yes |  |
| `archivedAt` | `string` | No |  |
| `authorized` | `boolean` | Yes |  |
| `channelId` | `string` | Yes | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` | Yes |  |
| `deliveryIdentifier` | `table` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsCollectionResponseWithTotalPublicChannelAccount():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicInboxEntity

```lua
local conversations_collection_response_with_total_public_inbox = client:ConversationsCollectionResponseWithTotalPublicInbox(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsCollectionResponseWithTotalPublicInbox():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesBatchResponsePublicActorEntity

```lua
local conversations_inbox_messages_batch_response_public_actor = client:ConversationsInboxMessagesBatchResponsePublicActor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `inputs` | `table` | Yes |  |
| `links` | `table` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `table` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationsInboxMessagesBatchResponsePublicActor():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicMessageEntity

```lua
local conversations_inbox_messages_collection_response_public_message = client:ConversationsInboxMessagesCollectionResponsePublicMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `table` | No |  |
| `results` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsInboxMessagesCollectionResponsePublicMessage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicThreadEntity

```lua
local conversations_inbox_messages_collection_response_public_thread = client:ConversationsInboxMessagesCollectionResponsePublicThread(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether this thread is archived. |
| `assignedTo` | `string` | No |  |
| `associatedContactId` | `string` | Yes | The ID of the associated Contact in the CRM. |
| `closedAt` | `string` | No | When the thread was closed. |
| `createdAt` | `string` | Yes | When the thread was created. |
| `id` | `string` | Yes | The unique ID of the thread. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `string` | No | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `string` | No | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `string` | No | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `string` | Yes |  |
| `originalChannelId` | `string` | Yes |  |
| `spam` | `boolean` | Yes | Whether the thread is marked as spam. |
| `status` | `string` | Yes | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsInboxMessagesCollectionResponsePublicThread():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity

```lua
local conversations_inbox_messages_collection_response_with_total_public = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the channel account is turned on. |
| `archived` | `boolean` | Yes |  |
| `archivedAt` | `string` | No |  |
| `authorized` | `boolean` | Yes |  |
| `channelId` | `string` | Yes | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` | Yes |  |
| `deliveryIdentifier` | `table` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity

```lua
local conversations_inbox_messages_collection_response_with_total_public2 = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic2():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity

```lua
local conversations_inbox_messages_collection_response_with_total_public3 = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationsInboxMessagesCollectionResponseWithTotalPublic3():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicActorEntity

```lua
local conversations_inbox_messages_public_actor = client:ConversationsInboxMessagesPublicActor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicActor():load({ id = "conversations_inbox_messages_public_actor_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelEntity

```lua
local conversations_inbox_messages_public_channel = client:ConversationsInboxMessagesPublicChannel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicChannel():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelAccountEntity

```lua
local conversations_inbox_messages_public_channel_account = client:ConversationsInboxMessagesPublicChannelAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicChannelAccount():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicInboxEntity

```lua
local conversations_inbox_messages_public_inbox = client:ConversationsInboxMessagesPublicInbox(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicInbox():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageEntity

```lua
local conversations_inbox_messages_public_message = client:ConversationsInboxMessagesPublicMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationsInboxMessagesPublicMessage():create({
  thread_id = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicMessage():load({ id = "conversations_inbox_messages_public_message_id", thread_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageContentEntity

```lua
local conversations_inbox_messages_public_message_content = client:ConversationsInboxMessagesPublicMessageContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicMessageContent():load({ message_id = "message_id", thread_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsInboxMessagesPublicThreadEntity

```lua
local conversations_inbox_messages_public_thread = client:ConversationsInboxMessagesPublicThread(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsInboxMessagesPublicThread():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ConversationsInboxMessagesPublicThread():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicActorEntity

```lua
local conversations_public_actor = client:ConversationsPublicActor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicActor():load({ id = "conversations_public_actor_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicActorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicChannelEntity

```lua
local conversations_public_channel = client:ConversationsPublicChannel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicChannel():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicChannelAccountEntity

```lua
local conversations_public_channel_account = client:ConversationsPublicChannelAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicChannelAccount():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicInboxEntity

```lua
local conversations_public_inbox = client:ConversationsPublicInbox(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicInbox():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicInboxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicMessageEntity

```lua
local conversations_public_message = client:ConversationsPublicMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationsPublicMessage():create({
  thread_id = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicMessage():load({ id = "conversations_public_message_id", thread_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicMessageContentEntity

```lua
local conversations_public_message_content = client:ConversationsPublicMessageContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicMessageContent():load({ message_id = "message_id", thread_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicMessageContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationsPublicThreadEntity

```lua
local conversations_public_thread = client:ConversationsPublicThread(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicThread():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ConversationsPublicThread():remove({ thread_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ConversationsPublicThread():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannelEntity

```lua
local custom_channels_collection_response_with_total_public_channel = client:CustomChannelsCollectionResponseWithTotalPublicChannel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `table` | Yes | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | No | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | No | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | Yes | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | Yes | A string that uniquely identifies the channel. |
| `name` | `string` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `string` | No | A string representing the URL to which webhook events will be sent. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomChannelsCollectionResponseWithTotalPublicChannel():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannel2Entity

```lua
local custom_channels_collection_response_with_total_public_channel2 = client:CustomChannelsCollectionResponseWithTotalPublicChannel2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | A boolean indicating whether the channel account is currently active. |
| `archived` | `boolean` | Yes | A boolean indicating whether the channel account is archived. |
| `archivedAt` | `string` | No | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | `boolean` | Yes | A boolean indicating whether the channel account is authorized. |
| `channelId` | `string` | Yes | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | `string` | Yes | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` | `table` | Yes |  |
| `id` | `string` | Yes | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | Yes | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | Yes | The name of the channel account, represented as a string. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomChannelsCollectionResponseWithTotalPublicChannel2():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomChannelsPublicChannelAccountEntity

```lua
local custom_channels_public_channel_account = client:CustomChannelsPublicChannelAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorized` | `boolean` | Yes | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `table` | Yes |  |
| `id` | `string` | No |  |
| `inboxId` | `string` | Yes | The unique identifier for the inbox associated with this channel account. |
| `name` | `string` | Yes | The name of the channel account. |
| `type` | `string` | Yes | A string representing the type of delivery identifier. |
| `value` | `string` | Yes | A string representing the value associated with the delivery identifier type. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `authorized` | - | - | Yes |
| `deliveryIdentifier` | - | - | - |
| `id` | - | - | - |
| `inboxId` | - | - | - |
| `name` | - | - | Yes |
| `type` | - | - | - |
| `value` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomChannelsPublicChannelAccount():create({
  channel_id = --[[ number ]],
  authorized = --[[ boolean ]],
  deliveryIdentifier = --[[ table ]],
  inboxId = --[[ string ]],
  name = --[[ string ]],
  type = --[[ string ]],
  value = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomChannelsPublicChannelAccount():load({ id = 1, channel_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomChannelsPublicChannelAccount():update({
  id = 1,
  channel_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomChannelsPublicChannelAccountStagingTokenEntity

```lua
local custom_channels_public_channel_account_staging_token = client:CustomChannelsPublicChannelAccountStagingToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountName` | `string` | No | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `table` | Yes |  |
| `id` | `string` | No |  |
| `type` | `string` | Yes | A string representing the type of delivery identifier. |
| `value` | `string` | Yes | A string representing the value associated with the delivery identifier type. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomChannelsPublicChannelAccountStagingToken():update({
  channel_id = 1,
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomChannelsPublicChannelIntegrationChannelEntity

```lua
local custom_channels_public_channel_integration_channel = client:CustomChannelsPublicChannelIntegrationChannel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `table` | Yes | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | `string` | No | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | `string` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | No | A string representing the URL of the channel's logo. |
| `name` | `string` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `string` | No | A string representing the URL to which webhook events will be sent. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `capabilities` | - | - | - |
| `channelAccountConnectionRedirectUrl` | - | - | Yes |
| `channelDescription` | - | - | Yes |
| `channelLogoUrl` | - | - | Yes |
| `name` | - | - | - |
| `webhookUrl` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomChannelsPublicChannelIntegrationChannel():create({
  capabilities = --[[ table ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomChannelsPublicChannelIntegrationChannel():load({ channel_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomChannelsPublicChannelIntegrationChannel():update({
  channel_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomChannelsPublicConversationsMessageEntity

```lua
local custom_channels_public_conversations_message = client:CustomChannelsPublicConversationsMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `number` | No | The ID of the contact with which this message should be associated. |
| `attachments` | `table` | Yes | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | Yes | The identifier of the channel account associated with the message. |
| `channelId` | `string` | Yes | The identifier of the channel through which the message was sent. |
| `client` | `table` | Yes |  |
| `conversationsThreadId` | `string` | Yes | The identifier for the conversation thread to which this message belongs. |
| `createdAt` | `string` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `createdBy` | `string` | Yes | The identifier of the user or system that created the message. |
| `direction` | `string` | Yes | The direction of the message, either 'INCOMING' or 'OUTGOING'. |
| `errorMessage` | `string` | No | A string containing an error message, if applicable. |
| `id` | `string` | Yes | The unique identifier for the message. |
| `inReplyToId` | `string` | No | The identifier of the message to which this message is a reply, if applicable. |
| `integrationIdempotencyId` | `string` | No | A unique identifier to ensure idempotency of the message within the integration. |
| `integrationThreadId` | `string` | No | A unique identifier for the thread within the integration. |
| `messageDirection` | `string` | Yes | The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'. |
| `preResolvedContacts` | `table` | Yes |  |
| `recipients` | `table` | Yes | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | No | The rich text content of the message, if available. |
| `senders` | `table` | Yes | An array of senders associated with the message, each containing sender details. |
| `status` | `table` | Yes |  |
| `statusType` | `string` | Yes | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | No | The subject of the message, if applicable. |
| `text` | `string` | Yes | The plain text content of the message. |
| `timestamp` | `string` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Yes | Indicates whether the message content is truncated. |
| `type` | `string` | Yes | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | No | The date and time when the message was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomChannelsPublicConversationsMessage():create({
  channel_id = --[[ number ]],
  archived = --[[ boolean ]],
  attachments = --[[ table ]],
  channelAccountId = --[[ string ]],
  channelId = --[[ string ]],
  client = --[[ table ]],
  conversationsThreadId = --[[ string ]],
  createdAt = --[[ string ]],
  createdBy = --[[ string ]],
  direction = --[[ string ]],
  id = --[[ string ]],
  messageDirection = --[[ string ]],
  preResolvedContacts = --[[ table ]],
  recipients = --[[ table ]],
  senders = --[[ table ]],
  status = --[[ table ]],
  statusType = --[[ string ]],
  text = --[[ string ]],
  timestamp = --[[ string ]],
  truncationStatus = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomChannelsPublicConversationsMessage():load({ id = "custom_channels_public_conversations_message_id", channel_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomChannelsPublicConversationsMessage():update({
  id = "custom_channels_public_conversations_message_id",
  channel_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicThreadEntity

```lua
local public_thread = client:PublicThread(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PublicThread():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ThreadEntity

```lua
local thread = client:Thread(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Thread():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VisitorIdentificationIdentificationTokenEntity

```lua
local visitor_identification_identification_token = client:VisitorIdentificationIdentificationToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email of the visitor that you wish to identify |
| `firstName` | `string` | No | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `table` | Yes | An object containing additional context about the customer agent. |
| `lastName` | `string` | No | The last name of the visitor that you wish to identify. |
| `token` | `string` | Yes | An identification token that allows the visitor to be treated as a known contact. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:VisitorIdentificationIdentificationToken():create({
  email = --[[ string ]],
  hsCustomerAgentContext = --[[ table ]],
  token = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

