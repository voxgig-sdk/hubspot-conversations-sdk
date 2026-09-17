# HubspotConversations Golang SDK Reference

Complete API reference for the HubspotConversations Golang SDK.


## HubspotConversationsSDK

### Constructor

```go
func NewHubspotConversationsSDK(options map[string]any) *HubspotConversationsSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HubspotConversationsSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HubspotConversationsSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Channel(data map[string]any) HubspotConversationsEntity`

Create a new `Channel` entity instance. Pass `nil` for no initial data.

#### `ConversationsBatchResponsePublicActor(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsBatchResponsePublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponsePublicMessageForwardPaging(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsCollectionResponsePublicMessageForwardPaging` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponsePublicThreadForwardPaging(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsCollectionResponsePublicThreadForwardPaging` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannel(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannel` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannelAccount(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicInbox(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsCollectionResponseWithTotalPublicInbox` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesBatchResponsePublicActor(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesBatchResponsePublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicMessage(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessage` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicThread(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThread` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicActor(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicChannel(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicChannel` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicChannelAccount(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicInbox(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicInbox` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicMessage(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicMessage` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicMessageContent(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicMessageContent` entity instance. Pass `nil` for no initial data.

#### `ConversationsInboxMessagesPublicThread(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsInboxMessagesPublicThread` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicActor(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicActor` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicChannel(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicChannel` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicChannelAccount(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicInbox(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicInbox` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicMessage(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicMessage` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicMessageContent(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicMessageContent` entity instance. Pass `nil` for no initial data.

#### `ConversationsPublicThread(data map[string]any) HubspotConversationsEntity`

Create a new `ConversationsPublicThread` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel(data map[string]any) HubspotConversationsEntity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel2(data map[string]any) HubspotConversationsEntity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicChannelAccount(data map[string]any) HubspotConversationsEntity`

Create a new `CustomChannelsPublicChannelAccount` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicChannelAccountStagingToken(data map[string]any) HubspotConversationsEntity`

Create a new `CustomChannelsPublicChannelAccountStagingToken` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicChannelIntegrationChannel(data map[string]any) HubspotConversationsEntity`

Create a new `CustomChannelsPublicChannelIntegrationChannel` entity instance. Pass `nil` for no initial data.

#### `CustomChannelsPublicConversationsMessage(data map[string]any) HubspotConversationsEntity`

Create a new `CustomChannelsPublicConversationsMessage` entity instance. Pass `nil` for no initial data.

#### `PublicThread(data map[string]any) HubspotConversationsEntity`

Create a new `PublicThread` entity instance. Pass `nil` for no initial data.

#### `Thread(data map[string]any) HubspotConversationsEntity`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `VisitorIdentificationIdentificationToken(data map[string]any) HubspotConversationsEntity`

Create a new `VisitorIdentificationIdentificationToken` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ChannelEntity

```go
channel := client.Channel(nil)
fmt.Println(channel.GetName()) // "channel"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Channel(nil).Remove(map[string]any{"channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsBatchResponsePublicActorEntity

```go
conversationsBatchResponsePublicActor := client.ConversationsBatchResponsePublicActor(nil)
fmt.Println(conversationsBatchResponsePublicActor.GetName()) // "conversations_batch_response_public_actor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `errors` | `[]any` | No |  |
| `inputs` | `[]any` | Yes |  |
| `links` | `map[string]any` | No |  |
| `numErrors` | `int` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `[]any` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationsBatchResponsePublicActor(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsBatchResponsePublicActorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsCollectionResponsePublicMessageForwardPagingEntity

```go
conversationsCollectionResponsePublicMessageForwardPaging := client.ConversationsCollectionResponsePublicMessageForwardPaging(nil)
fmt.Println(conversationsCollectionResponsePublicMessageForwardPaging.GetName()) // "conversations_collection_response_public_message_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `map[string]any` | No |  |
| `results` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsCollectionResponsePublicMessageForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsCollectionResponsePublicThreadForwardPagingEntity

```go
conversationsCollectionResponsePublicThreadForwardPaging := client.ConversationsCollectionResponsePublicThreadForwardPaging(nil)
fmt.Println(conversationsCollectionResponsePublicThreadForwardPaging.GetName()) // "conversations_collection_response_public_thread_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether this thread is archived. |
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
| `spam` | `bool` | Yes | Whether the thread is marked as spam. |
| `status` | `string` | Yes | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsCollectionResponsePublicThreadForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelEntity

```go
conversationsCollectionResponseWithTotalPublicChannel := client.ConversationsCollectionResponseWithTotalPublicChannel(nil)
fmt.Println(conversationsCollectionResponseWithTotalPublicChannel.GetName()) // "conversations_collection_response_with_total_public_channel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsCollectionResponseWithTotalPublicChannel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelAccountEntity

```go
conversationsCollectionResponseWithTotalPublicChannelAccount := client.ConversationsCollectionResponseWithTotalPublicChannelAccount(nil)
fmt.Println(conversationsCollectionResponseWithTotalPublicChannelAccount.GetName()) // "conversations_collection_response_with_total_public_channel_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the channel account is turned on. |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `string` | No |  |
| `authorized` | `bool` | Yes |  |
| `channelId` | `string` | Yes | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` | Yes |  |
| `deliveryIdentifier` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsCollectionResponseWithTotalPublicChannelAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicInboxEntity

```go
conversationsCollectionResponseWithTotalPublicInbox := client.ConversationsCollectionResponseWithTotalPublicInbox(nil)
fmt.Println(conversationsCollectionResponseWithTotalPublicInbox.GetName()) // "conversations_collection_response_with_total_public_inbox"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsCollectionResponseWithTotalPublicInbox(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesBatchResponsePublicActorEntity

```go
conversationsInboxMessagesBatchResponsePublicActor := client.ConversationsInboxMessagesBatchResponsePublicActor(nil)
fmt.Println(conversationsInboxMessagesBatchResponsePublicActor.GetName()) // "conversations_inbox_messages_batch_response_public_actor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `inputs` | `[]any` | Yes |  |
| `links` | `map[string]any` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `[]any` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationsInboxMessagesBatchResponsePublicActor(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicMessageEntity

```go
conversationsInboxMessagesCollectionResponsePublicMessage := client.ConversationsInboxMessagesCollectionResponsePublicMessage(nil)
fmt.Println(conversationsInboxMessagesCollectionResponsePublicMessage.GetName()) // "conversations_inbox_messages_collection_response_public_message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `map[string]any` | No |  |
| `results` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsInboxMessagesCollectionResponsePublicMessage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicThreadEntity

```go
conversationsInboxMessagesCollectionResponsePublicThread := client.ConversationsInboxMessagesCollectionResponsePublicThread(nil)
fmt.Println(conversationsInboxMessagesCollectionResponsePublicThread.GetName()) // "conversations_inbox_messages_collection_response_public_thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether this thread is archived. |
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
| `spam` | `bool` | Yes | Whether the thread is marked as spam. |
| `status` | `string` | Yes | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsInboxMessagesCollectionResponsePublicThread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity

```go
conversationsInboxMessagesCollectionResponseWithTotalPublic := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil)
fmt.Println(conversationsInboxMessagesCollectionResponseWithTotalPublic.GetName()) // "conversations_inbox_messages_collection_response_with_total_public"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the channel account is turned on. |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `string` | No |  |
| `authorized` | `bool` | Yes |  |
| `channelId` | `string` | Yes | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` | Yes |  |
| `deliveryIdentifier` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity

```go
conversationsInboxMessagesCollectionResponseWithTotalPublic2 := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil)
fmt.Println(conversationsInboxMessagesCollectionResponseWithTotalPublic2.GetName()) // "conversations_inbox_messages_collection_response_with_total_public2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity

```go
conversationsInboxMessagesCollectionResponseWithTotalPublic3 := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil)
fmt.Println(conversationsInboxMessagesCollectionResponseWithTotalPublic3.GetName()) // "conversations_inbox_messages_collection_response_with_total_public3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicActorEntity

```go
conversationsInboxMessagesPublicActor := client.ConversationsInboxMessagesPublicActor(nil)
fmt.Println(conversationsInboxMessagesPublicActor.GetName()) // "conversations_inbox_messages_public_actor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicActor(nil).Load(map[string]any{"id": "conversations_inbox_messages_public_actor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelEntity

```go
conversationsInboxMessagesPublicChannel := client.ConversationsInboxMessagesPublicChannel(nil)
fmt.Println(conversationsInboxMessagesPublicChannel.GetName()) // "conversations_inbox_messages_public_channel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicChannel(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelAccountEntity

```go
conversationsInboxMessagesPublicChannelAccount := client.ConversationsInboxMessagesPublicChannelAccount(nil)
fmt.Println(conversationsInboxMessagesPublicChannelAccount.GetName()) // "conversations_inbox_messages_public_channel_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicChannelAccount(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicInboxEntity

```go
conversationsInboxMessagesPublicInbox := client.ConversationsInboxMessagesPublicInbox(nil)
fmt.Println(conversationsInboxMessagesPublicInbox.GetName()) // "conversations_inbox_messages_public_inbox"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicInbox(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageEntity

```go
conversationsInboxMessagesPublicMessage := client.ConversationsInboxMessagesPublicMessage(nil)
fmt.Println(conversationsInboxMessagesPublicMessage.GetName()) // "conversations_inbox_messages_public_message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicMessage(nil).Load(map[string]any{"id": "conversations_inbox_messages_public_message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationsInboxMessagesPublicMessage(nil).Create(map[string]any{
    "thread_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageContentEntity

```go
conversationsInboxMessagesPublicMessageContent := client.ConversationsInboxMessagesPublicMessageContent(nil)
fmt.Println(conversationsInboxMessagesPublicMessageContent.GetName()) // "conversations_inbox_messages_public_message_content"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicMessageContent(nil).Load(map[string]any{"message_id": "message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsInboxMessagesPublicThreadEntity

```go
conversationsInboxMessagesPublicThread := client.ConversationsInboxMessagesPublicThread(nil)
fmt.Println(conversationsInboxMessagesPublicThread.GetName()) // "conversations_inbox_messages_public_thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsInboxMessagesPublicThread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ConversationsInboxMessagesPublicThread(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicActorEntity

```go
conversationsPublicActor := client.ConversationsPublicActor(nil)
fmt.Println(conversationsPublicActor.GetName()) // "conversations_public_actor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicActor(nil).Load(map[string]any{"id": "conversations_public_actor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicActorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicChannelEntity

```go
conversationsPublicChannel := client.ConversationsPublicChannel(nil)
fmt.Println(conversationsPublicChannel.GetName()) // "conversations_public_channel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicChannel(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicChannelAccountEntity

```go
conversationsPublicChannelAccount := client.ConversationsPublicChannelAccount(nil)
fmt.Println(conversationsPublicChannelAccount.GetName()) // "conversations_public_channel_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicChannelAccount(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicChannelAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicInboxEntity

```go
conversationsPublicInbox := client.ConversationsPublicInbox(nil)
fmt.Println(conversationsPublicInbox.GetName()) // "conversations_public_inbox"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `string` | No |  |
| `createdAt` | `string` | Yes | When the inbox was created. |
| `id` | `string` | Yes | The ID of the inbox. |
| `name` | `string` | Yes | The name of the inbox. |
| `type` | `string` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicInbox(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicInboxEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicMessageEntity

```go
conversationsPublicMessage := client.ConversationsPublicMessage(nil)
fmt.Println(conversationsPublicMessage.GetName()) // "conversations_public_message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicMessage(nil).Load(map[string]any{"id": "conversations_public_message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationsPublicMessage(nil).Create(map[string]any{
    "thread_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicMessageContentEntity

```go
conversationsPublicMessageContent := client.ConversationsPublicMessageContent(nil)
fmt.Println(conversationsPublicMessageContent.GetName()) // "conversations_public_message_content"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicMessageContent(nil).Load(map[string]any{"message_id": "message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicMessageContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationsPublicThreadEntity

```go
conversationsPublicThread := client.ConversationsPublicThread(nil)
fmt.Println(conversationsPublicThread.GetName()) // "conversations_public_thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationsPublicThread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ConversationsPublicThread(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ConversationsPublicThread(nil).Remove(map[string]any{"thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationsPublicThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannelEntity

```go
customChannelsCollectionResponseWithTotalPublicChannel := client.CustomChannelsCollectionResponseWithTotalPublicChannel(nil)
fmt.Println(customChannelsCollectionResponseWithTotalPublicChannel.GetName()) // "custom_channels_collection_response_with_total_public_channel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `map[string]any` | Yes | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | No | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | No | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | Yes | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | Yes | A string that uniquely identifies the channel. |
| `name` | `string` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `string` | No | A string representing the URL to which webhook events will be sent. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomChannelsCollectionResponseWithTotalPublicChannel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannel2Entity

```go
customChannelsCollectionResponseWithTotalPublicChannel2 := client.CustomChannelsCollectionResponseWithTotalPublicChannel2(nil)
fmt.Println(customChannelsCollectionResponseWithTotalPublicChannel2.GetName()) // "custom_channels_collection_response_with_total_public_channel2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | A boolean indicating whether the channel account is currently active. |
| `archived` | `bool` | Yes | A boolean indicating whether the channel account is archived. |
| `archivedAt` | `string` | No | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | `bool` | Yes | A boolean indicating whether the channel account is authorized. |
| `channelId` | `string` | Yes | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | `string` | Yes | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | Yes | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | Yes | The name of the channel account, represented as a string. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomChannelsCollectionResponseWithTotalPublicChannel2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomChannelsPublicChannelAccountEntity

```go
customChannelsPublicChannelAccount := client.CustomChannelsPublicChannelAccount(nil)
fmt.Println(customChannelsPublicChannelAccount.GetName()) // "custom_channels_public_channel_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorized` | `bool` | Yes | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `map[string]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomChannelsPublicChannelAccount(nil).Load(map[string]any{"id": 1, "channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomChannelsPublicChannelAccount(nil).Create(map[string]any{
    "channel_id": 1,
    "authorized": true,
    "deliveryIdentifier": map[string]any{},
    "inboxId": "example_inboxId",
    "name": "example_name",
    "type": "example_type",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomChannelsPublicChannelAccount(nil).Update(map[string]any{
    "id": 1,
    "channel_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomChannelsPublicChannelAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomChannelsPublicChannelAccountStagingTokenEntity

```go
customChannelsPublicChannelAccountStagingToken := client.CustomChannelsPublicChannelAccountStagingToken(nil)
fmt.Println(customChannelsPublicChannelAccountStagingToken.GetName()) // "custom_channels_public_channel_account_staging_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountName` | `string` | No | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `map[string]any` | Yes |  |
| `id` | `string` | No |  |
| `type` | `string` | Yes | A string representing the type of delivery identifier. |
| `value` | `string` | Yes | A string representing the value associated with the delivery identifier type. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomChannelsPublicChannelAccountStagingToken(nil).Update(map[string]any{
    "channel_id": 1,
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomChannelsPublicChannelIntegrationChannelEntity

```go
customChannelsPublicChannelIntegrationChannel := client.CustomChannelsPublicChannelIntegrationChannel(nil)
fmt.Println(customChannelsPublicChannelIntegrationChannel.GetName()) // "custom_channels_public_channel_integration_channel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `map[string]any` | Yes | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomChannelsPublicChannelIntegrationChannel(nil).Load(map[string]any{"channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomChannelsPublicChannelIntegrationChannel(nil).Create(map[string]any{
    "capabilities": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomChannelsPublicChannelIntegrationChannel(nil).Update(map[string]any{
    "channel_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomChannelsPublicConversationsMessageEntity

```go
customChannelsPublicConversationsMessage := client.CustomChannelsPublicConversationsMessage(nil)
fmt.Println(customChannelsPublicConversationsMessage.GetName()) // "custom_channels_public_conversations_message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `int` | No | The ID of the contact with which this message should be associated. |
| `attachments` | `[]any` | Yes | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | Yes | The identifier of the channel account associated with the message. |
| `channelId` | `string` | Yes | The identifier of the channel through which the message was sent. |
| `client` | `map[string]any` | Yes |  |
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
| `preResolvedContacts` | `map[string]any` | Yes |  |
| `recipients` | `[]any` | Yes | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | No | The rich text content of the message, if available. |
| `senders` | `[]any` | Yes | An array of senders associated with the message, each containing sender details. |
| `status` | `map[string]any` | Yes |  |
| `statusType` | `string` | Yes | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | No | The subject of the message, if applicable. |
| `text` | `string` | Yes | The plain text content of the message. |
| `timestamp` | `string` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Yes | Indicates whether the message content is truncated. |
| `type` | `string` | Yes | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | No | The date and time when the message was last updated, in ISO 8601 format. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomChannelsPublicConversationsMessage(nil).Load(map[string]any{"id": "custom_channels_public_conversations_message_id", "channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomChannelsPublicConversationsMessage(nil).Create(map[string]any{
    "channel_id": 1,
    "archived": true,
    "attachments": []any{},
    "channelAccountId": "example_channelAccountId",
    "channelId": "example_channelId",
    "client": map[string]any{},
    "conversationsThreadId": "example_conversationsThreadId",
    "createdAt": "example_createdAt",
    "createdBy": "example_createdBy",
    "direction": "example_direction",
    "id": "example_id",
    "messageDirection": "example_messageDirection",
    "preResolvedContacts": map[string]any{},
    "recipients": []any{},
    "senders": []any{},
    "status": map[string]any{},
    "statusType": "example_statusType",
    "text": "example_text",
    "timestamp": "example_timestamp",
    "truncationStatus": "example_truncationStatus",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomChannelsPublicConversationsMessage(nil).Update(map[string]any{
    "id": "custom_channels_public_conversations_message_id",
    "channel_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublicThreadEntity

```go
publicThread := client.PublicThread(nil)
fmt.Println(publicThread.GetName()) // "public_thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PublicThread(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ThreadEntity

```go
thread := client.Thread(nil)
fmt.Println(thread.GetName()) // "thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Thread(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VisitorIdentificationIdentificationTokenEntity

```go
visitorIdentificationIdentificationToken := client.VisitorIdentificationIdentificationToken(nil)
fmt.Println(visitorIdentificationIdentificationToken.GetName()) // "visitor_identification_identification_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email of the visitor that you wish to identify |
| `firstName` | `string` | No | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `map[string]any` | Yes | An object containing additional context about the customer agent. |
| `lastName` | `string` | No | The last name of the visitor that you wish to identify. |
| `token` | `string` | Yes | An identification token that allows the visitor to be treated as a known contact. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.VisitorIdentificationIdentificationToken(nil).Create(map[string]any{
    "email": "example_email",
    "hsCustomerAgentContext": map[string]any{},
    "token": "example_token",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewHubspotConversationsSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

