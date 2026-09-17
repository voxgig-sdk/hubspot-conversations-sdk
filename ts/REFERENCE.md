# HubspotConversations TypeScript SDK Reference

Complete API reference for the HubspotConversations TypeScript SDK.


## HubspotConversationsSDK

### Constructor

```ts
new HubspotConversationsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotConversationsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotConversationsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotConversationsSDK` instance in test mode.


### Instance Methods

#### `Channel(data?: object)`

Create a new `Channel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChannelEntity` instance.

#### `ConversationsBatchResponsePublicActor(data?: object)`

Create a new `ConversationsBatchResponsePublicActor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsBatchResponsePublicActorEntity` instance.

#### `ConversationsCollectionResponsePublicMessageForwardPaging(data?: object)`

Create a new `ConversationsCollectionResponsePublicMessageForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance.

#### `ConversationsCollectionResponsePublicThreadForwardPaging(data?: object)`

Create a new `ConversationsCollectionResponsePublicThreadForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance.

#### `ConversationsCollectionResponseWithTotalPublicChannel(data?: object)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance.

#### `ConversationsCollectionResponseWithTotalPublicChannelAccount(data?: object)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance.

#### `ConversationsCollectionResponseWithTotalPublicInbox(data?: object)`

Create a new `ConversationsCollectionResponseWithTotalPublicInbox` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance.

#### `ConversationsInboxMessagesBatchResponsePublicActor(data?: object)`

Create a new `ConversationsInboxMessagesBatchResponsePublicActor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance.

#### `ConversationsInboxMessagesCollectionResponsePublicMessage(data?: object)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance.

#### `ConversationsInboxMessagesCollectionResponsePublicThread(data?: object)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic(data?: object)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data?: object)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data?: object)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance.

#### `ConversationsInboxMessagesPublicActor(data?: object)`

Create a new `ConversationsInboxMessagesPublicActor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicActorEntity` instance.

#### `ConversationsInboxMessagesPublicChannel(data?: object)`

Create a new `ConversationsInboxMessagesPublicChannel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicChannelEntity` instance.

#### `ConversationsInboxMessagesPublicChannelAccount(data?: object)`

Create a new `ConversationsInboxMessagesPublicChannelAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicChannelAccountEntity` instance.

#### `ConversationsInboxMessagesPublicInbox(data?: object)`

Create a new `ConversationsInboxMessagesPublicInbox` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicInboxEntity` instance.

#### `ConversationsInboxMessagesPublicMessage(data?: object)`

Create a new `ConversationsInboxMessagesPublicMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicMessageEntity` instance.

#### `ConversationsInboxMessagesPublicMessageContent(data?: object)`

Create a new `ConversationsInboxMessagesPublicMessageContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicMessageContentEntity` instance.

#### `ConversationsInboxMessagesPublicThread(data?: object)`

Create a new `ConversationsInboxMessagesPublicThread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsInboxMessagesPublicThreadEntity` instance.

#### `ConversationsPublicActor(data?: object)`

Create a new `ConversationsPublicActor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicActorEntity` instance.

#### `ConversationsPublicChannel(data?: object)`

Create a new `ConversationsPublicChannel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicChannelEntity` instance.

#### `ConversationsPublicChannelAccount(data?: object)`

Create a new `ConversationsPublicChannelAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicChannelAccountEntity` instance.

#### `ConversationsPublicInbox(data?: object)`

Create a new `ConversationsPublicInbox` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicInboxEntity` instance.

#### `ConversationsPublicMessage(data?: object)`

Create a new `ConversationsPublicMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicMessageEntity` instance.

#### `ConversationsPublicMessageContent(data?: object)`

Create a new `ConversationsPublicMessageContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicMessageContentEntity` instance.

#### `ConversationsPublicThread(data?: object)`

Create a new `ConversationsPublicThread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationsPublicThreadEntity` instance.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel(data?: object)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel2(data?: object)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance.

#### `CustomChannelsPublicChannelAccount(data?: object)`

Create a new `CustomChannelsPublicChannelAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomChannelsPublicChannelAccountEntity` instance.

#### `CustomChannelsPublicChannelAccountStagingToken(data?: object)`

Create a new `CustomChannelsPublicChannelAccountStagingToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomChannelsPublicChannelAccountStagingTokenEntity` instance.

#### `CustomChannelsPublicChannelIntegrationChannel(data?: object)`

Create a new `CustomChannelsPublicChannelIntegrationChannel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomChannelsPublicChannelIntegrationChannelEntity` instance.

#### `CustomChannelsPublicConversationsMessage(data?: object)`

Create a new `CustomChannelsPublicConversationsMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomChannelsPublicConversationsMessageEntity` instance.

#### `PublicThread(data?: object)`

Create a new `PublicThread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicThreadEntity` instance.

#### `Thread(data?: object)`

Create a new `Thread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThreadEntity` instance.

#### `VisitorIdentificationIdentificationToken(data?: object)`

Create a new `VisitorIdentificationIdentificationToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VisitorIdentificationIdentificationTokenEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotConversationsSDK.test()`.

**Returns:** `HubspotConversationsSDK` instance in test mode.


---

## ChannelEntity

```ts
const channel = client.Channel()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Channel().remove({ channel_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsBatchResponsePublicActorEntity

```ts
const conversations_batch_response_public_actor = client.ConversationsBatchResponsePublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `errors` | `any[]` | No |  |
| `inputs` | `any[]` | Yes |  |
| `links` | `Record<string, any>` | No |  |
| `numErrors` | `number` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `any[]` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationsBatchResponsePublicActor().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsBatchResponsePublicActorEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsCollectionResponsePublicMessageForwardPagingEntity

```ts
const conversations_collection_response_public_message_forward_paging = client.ConversationsCollectionResponsePublicMessageForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `Record<string, any>` | No |  |
| `results` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsCollectionResponsePublicMessageForwardPaging().list({ thread_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsCollectionResponsePublicThreadForwardPagingEntity

```ts
const conversations_collection_response_public_thread_forward_paging = client.ConversationsCollectionResponsePublicThreadForwardPaging()
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
| `threadAssociations` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsCollectionResponsePublicThreadForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsCollectionResponseWithTotalPublicChannelEntity

```ts
const conversations_collection_response_with_total_public_channel = client.ConversationsCollectionResponseWithTotalPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsCollectionResponseWithTotalPublicChannel().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsCollectionResponseWithTotalPublicChannelAccountEntity

```ts
const conversations_collection_response_with_total_public_channel_account = client.ConversationsCollectionResponseWithTotalPublicChannelAccount()
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
| `deliveryIdentifier` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsCollectionResponseWithTotalPublicChannelAccount().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsCollectionResponseWithTotalPublicInboxEntity

```ts
const conversations_collection_response_with_total_public_inbox = client.ConversationsCollectionResponseWithTotalPublicInbox()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsCollectionResponseWithTotalPublicInbox().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesBatchResponsePublicActorEntity

```ts
const conversations_inbox_messages_batch_response_public_actor = client.ConversationsInboxMessagesBatchResponsePublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `inputs` | `any[]` | Yes |  |
| `links` | `Record<string, any>` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `any[]` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationsInboxMessagesBatchResponsePublicActor().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesCollectionResponsePublicMessageEntity

```ts
const conversations_inbox_messages_collection_response_public_message = client.ConversationsInboxMessagesCollectionResponsePublicMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `Record<string, any>` | No |  |
| `results` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsInboxMessagesCollectionResponsePublicMessage().list({ thread_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesCollectionResponsePublicThreadEntity

```ts
const conversations_inbox_messages_collection_response_public_thread = client.ConversationsInboxMessagesCollectionResponsePublicThread()
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
| `threadAssociations` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsInboxMessagesCollectionResponsePublicThread().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity

```ts
const conversations_inbox_messages_collection_response_with_total_public = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic()
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
| `deliveryIdentifier` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity

```ts
const conversations_inbox_messages_collection_response_with_total_public2 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity

```ts
const conversations_inbox_messages_collection_response_with_total_public3 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicActorEntity

```ts
const conversations_inbox_messages_public_actor = client.ConversationsInboxMessagesPublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicActor().load({ id: 'conversations_inbox_messages_public_actor_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicChannelEntity

```ts
const conversations_inbox_messages_public_channel = client.ConversationsInboxMessagesPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicChannel().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicChannelAccountEntity

```ts
const conversations_inbox_messages_public_channel_account = client.ConversationsInboxMessagesPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicChannelAccount().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicInboxEntity

```ts
const conversations_inbox_messages_public_inbox = client.ConversationsInboxMessagesPublicInbox()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicInbox().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicMessageEntity

```ts
const conversations_inbox_messages_public_message = client.ConversationsInboxMessagesPublicMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationsInboxMessagesPublicMessage().create({
  thread_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicMessage().load({ id: 'conversations_inbox_messages_public_message_id', thread_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicMessageContentEntity

```ts
const conversations_inbox_messages_public_message_content = client.ConversationsInboxMessagesPublicMessageContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicMessageContent().load({ message_id: 'message_id', thread_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsInboxMessagesPublicThreadEntity

```ts
const conversations_inbox_messages_public_thread = client.ConversationsInboxMessagesPublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsInboxMessagesPublicThread().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ConversationsInboxMessagesPublicThread().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicActorEntity

```ts
const conversations_public_actor = client.ConversationsPublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicActor().load({ id: 'conversations_public_actor_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicActorEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicChannelEntity

```ts
const conversations_public_channel = client.ConversationsPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicChannel().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicChannelAccountEntity

```ts
const conversations_public_channel_account = client.ConversationsPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicChannelAccount().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicChannelAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicInboxEntity

```ts
const conversations_public_inbox = client.ConversationsPublicInbox()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicInbox().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicInboxEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicMessageEntity

```ts
const conversations_public_message = client.ConversationsPublicMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationsPublicMessage().create({
  thread_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicMessage().load({ id: 'conversations_public_message_id', thread_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicMessageContentEntity

```ts
const conversations_public_message_content = client.ConversationsPublicMessageContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicMessageContent().load({ message_id: 'message_id', thread_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicMessageContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationsPublicThreadEntity

```ts
const conversations_public_thread = client.ConversationsPublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `assignee` | `/conversations/conversations/2026-09/threads/{threadId}/assignee` | `client.ConversationsPublicThread().remove({ $action: 'assignee', ... })` |
| `assignee` | `/conversations/conversations/2026-09/threads/{threadId}/assignee` | `client.ConversationsPublicThread().update({ $action: 'assignee', ... })` |

An action returns that action's OWN response, which is not necessarily a
ConversationsPublicThread record — check the API definition for its shape.

```ts
const result = await client.ConversationsPublicThread().remove({
  $action: 'assignee',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationsPublicThread().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ConversationsPublicThread().remove({ thread_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ConversationsPublicThread().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationsPublicThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomChannelsCollectionResponseWithTotalPublicChannelEntity

```ts
const custom_channels_collection_response_with_total_public_channel = client.CustomChannelsCollectionResponseWithTotalPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `Record<string, any>` | Yes | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | No | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | No | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | Yes | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | Yes | A string that uniquely identifies the channel. |
| `name` | `string` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `string` | No | A string representing the URL to which webhook events will be sent. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomChannelsCollectionResponseWithTotalPublicChannel().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomChannelsCollectionResponseWithTotalPublicChannel2Entity

```ts
const custom_channels_collection_response_with_total_public_channel2 = client.CustomChannelsCollectionResponseWithTotalPublicChannel2()
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
| `deliveryIdentifier` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | Yes | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | Yes | The name of the channel account, represented as a string. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomChannelsCollectionResponseWithTotalPublicChannel2().list({ channel_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomChannelsPublicChannelAccountEntity

```ts
const custom_channels_public_channel_account = client.CustomChannelsPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorized` | `boolean` | Yes | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomChannelsPublicChannelAccount().create({
  channel_id: 1,
  authorized: true,
  deliveryIdentifier: {},
  inboxId: 'example_inboxId',
  name: 'example_name',
  type: 'example_type',
  value: 'example_value',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomChannelsPublicChannelAccount().load({ id: 1, channel_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomChannelsPublicChannelAccount().update({
  id: 1,
  channel_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomChannelsPublicChannelAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomChannelsPublicChannelAccountStagingTokenEntity

```ts
const custom_channels_public_channel_account_staging_token = client.CustomChannelsPublicChannelAccountStagingToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountName` | `string` | No | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `Record<string, any>` | Yes |  |
| `id` | `string` | No |  |
| `type` | `string` | Yes | A string representing the type of delivery identifier. |
| `value` | `string` | Yes | A string representing the value associated with the delivery identifier type. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomChannelsPublicChannelAccountStagingToken().update({
  channel_id: 1,
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomChannelsPublicChannelIntegrationChannelEntity

```ts
const custom_channels_public_channel_integration_channel = client.CustomChannelsPublicChannelIntegrationChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `Record<string, any>` | Yes | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomChannelsPublicChannelIntegrationChannel().create({
  capabilities: {},
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomChannelsPublicChannelIntegrationChannel().load({ channel_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomChannelsPublicChannelIntegrationChannel().update({
  channel_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomChannelsPublicConversationsMessageEntity

```ts
const custom_channels_public_conversations_message = client.CustomChannelsPublicConversationsMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `number` | No | The ID of the contact with which this message should be associated. |
| `attachments` | `any[]` | Yes | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | Yes | The identifier of the channel account associated with the message. |
| `channelId` | `string` | Yes | The identifier of the channel through which the message was sent. |
| `client` | `Record<string, any>` | Yes |  |
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
| `preResolvedContacts` | `Record<string, any>` | Yes |  |
| `recipients` | `any[]` | Yes | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | No | The rich text content of the message, if available. |
| `senders` | `any[]` | Yes | An array of senders associated with the message, each containing sender details. |
| `status` | `Record<string, any>` | Yes |  |
| `statusType` | `string` | Yes | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | No | The subject of the message, if applicable. |
| `text` | `string` | Yes | The plain text content of the message. |
| `timestamp` | `string` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Yes | Indicates whether the message content is truncated. |
| `type` | `string` | Yes | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | No | The date and time when the message was last updated, in ISO 8601 format. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomChannelsPublicConversationsMessage().create({
  channel_id: 1,
  archived: true,
  attachments: [],
  channelAccountId: 'example_channelAccountId',
  channelId: 'example_channelId',
  client: {},
  conversationsThreadId: 'example_conversationsThreadId',
  createdAt: 'example_createdAt',
  createdBy: 'example_createdBy',
  direction: 'example_direction',
  id: 'example_id',
  messageDirection: 'example_messageDirection',
  preResolvedContacts: {},
  recipients: [],
  senders: [],
  status: {},
  statusType: 'example_statusType',
  text: 'example_text',
  timestamp: 'example_timestamp',
  truncationStatus: 'example_truncationStatus',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomChannelsPublicConversationsMessage().load({ id: 'custom_channels_public_conversations_message_id', channel_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomChannelsPublicConversationsMessage().update({
  id: 'custom_channels_public_conversations_message_id',
  channel_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicThreadEntity

```ts
const public_thread = client.PublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PublicThread().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThreadEntity

```ts
const thread = client.Thread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Thread().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VisitorIdentificationIdentificationTokenEntity

```ts
const visitor_identification_identification_token = client.VisitorIdentificationIdentificationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email of the visitor that you wish to identify |
| `firstName` | `string` | No | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `Record<string, any>` | Yes | An object containing additional context about the customer agent. |
| `lastName` | `string` | No | The last name of the visitor that you wish to identify. |
| `token` | `string` | Yes | An identification token that allows the visitor to be treated as a known contact. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.VisitorIdentificationIdentificationToken().create({
  email: 'example_email',
  hsCustomerAgentContext: {},
  token: 'example_token',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotConversationsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new HubspotConversationsSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

