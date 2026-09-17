# HubspotConversations PHP SDK Reference

Complete API reference for the HubspotConversations PHP SDK.


## HubspotConversationsSDK

### Constructor

```php
require_once __DIR__ . '/hubspotconversations_sdk.php';

$client = new HubspotConversationsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotConversationsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotConversationsSDK::test();
```


### Instance Methods

#### `Channel($data = null)`

Create a new `ChannelEntity` instance. Pass `null` for no initial data.

#### `ConversationsBatchResponsePublicActor($data = null)`

Create a new `ConversationsBatchResponsePublicActorEntity` instance. Pass `null` for no initial data.

#### `ConversationsCollectionResponsePublicMessageForwardPaging($data = null)`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance. Pass `null` for no initial data.

#### `ConversationsCollectionResponsePublicThreadForwardPaging($data = null)`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance. Pass `null` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannel($data = null)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance. Pass `null` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannelAccount($data = null)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance. Pass `null` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicInbox($data = null)`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesBatchResponsePublicActor($data = null)`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicMessage($data = null)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicThread($data = null)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic($data = null)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic2($data = null)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic3($data = null)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicActor($data = null)`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicChannel($data = null)`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicChannelAccount($data = null)`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicInbox($data = null)`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicMessage($data = null)`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicMessageContent($data = null)`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance. Pass `null` for no initial data.

#### `ConversationsInboxMessagesPublicThread($data = null)`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicActor($data = null)`

Create a new `ConversationsPublicActorEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicChannel($data = null)`

Create a new `ConversationsPublicChannelEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicChannelAccount($data = null)`

Create a new `ConversationsPublicChannelAccountEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicInbox($data = null)`

Create a new `ConversationsPublicInboxEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicMessage($data = null)`

Create a new `ConversationsPublicMessageEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicMessageContent($data = null)`

Create a new `ConversationsPublicMessageContentEntity` instance. Pass `null` for no initial data.

#### `ConversationsPublicThread($data = null)`

Create a new `ConversationsPublicThreadEntity` instance. Pass `null` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel($data = null)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance. Pass `null` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel2($data = null)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance. Pass `null` for no initial data.

#### `CustomChannelsPublicChannelAccount($data = null)`

Create a new `CustomChannelsPublicChannelAccountEntity` instance. Pass `null` for no initial data.

#### `CustomChannelsPublicChannelAccountStagingToken($data = null)`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance. Pass `null` for no initial data.

#### `CustomChannelsPublicChannelIntegrationChannel($data = null)`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance. Pass `null` for no initial data.

#### `CustomChannelsPublicConversationsMessage($data = null)`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance. Pass `null` for no initial data.

#### `PublicThread($data = null)`

Create a new `PublicThreadEntity` instance. Pass `null` for no initial data.

#### `Thread($data = null)`

Create a new `ThreadEntity` instance. Pass `null` for no initial data.

#### `VisitorIdentificationIdentificationToken($data = null)`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotConversationsUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ChannelEntity

```php
$channel = $client->Channel();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Channel()->remove(["channel_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChannelEntity`

Create a new `ChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsBatchResponsePublicActorEntity

```php
$conversations_batch_response_public_actor = $client->ConversationsBatchResponsePublicActor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `errors` | `array` | No |  |
| `inputs` | `array` | Yes |  |
| `links` | `array` | No |  |
| `numErrors` | `int` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `array` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationsBatchResponsePublicActor()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsBatchResponsePublicActorEntity`

Create a new `ConversationsBatchResponsePublicActorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsCollectionResponsePublicMessageForwardPagingEntity

```php
$conversations_collection_response_public_message_forward_paging = $client->ConversationsCollectionResponsePublicMessageForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `array` | No |  |
| `results` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsCollectionResponsePublicMessageForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsCollectionResponsePublicMessageForwardPagingEntity`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsCollectionResponsePublicThreadForwardPagingEntity

```php
$conversations_collection_response_public_thread_forward_paging = $client->ConversationsCollectionResponsePublicThreadForwardPaging();
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
| `threadAssociations` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsCollectionResponsePublicThreadForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsCollectionResponsePublicThreadForwardPagingEntity`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelEntity

```php
$conversations_collection_response_with_total_public_channel = $client->ConversationsCollectionResponseWithTotalPublicChannel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsCollectionResponseWithTotalPublicChannel()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsCollectionResponseWithTotalPublicChannelEntity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelAccountEntity

```php
$conversations_collection_response_with_total_public_channel_account = $client->ConversationsCollectionResponseWithTotalPublicChannelAccount();
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
| `deliveryIdentifier` | `array` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsCollectionResponseWithTotalPublicChannelAccount()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsCollectionResponseWithTotalPublicChannelAccountEntity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicInboxEntity

```php
$conversations_collection_response_with_total_public_inbox = $client->ConversationsCollectionResponseWithTotalPublicInbox();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsCollectionResponseWithTotalPublicInbox()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsCollectionResponseWithTotalPublicInboxEntity`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesBatchResponsePublicActorEntity

```php
$conversations_inbox_messages_batch_response_public_actor = $client->ConversationsInboxMessagesBatchResponsePublicActor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes |  |
| `inputs` | `array` | Yes |  |
| `links` | `array` | No |  |
| `requestedAt` | `string` | No |  |
| `results` | `array` | Yes |  |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationsInboxMessagesBatchResponsePublicActor()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesBatchResponsePublicActorEntity`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicMessageEntity

```php
$conversations_inbox_messages_collection_response_public_message = $client->ConversationsInboxMessagesCollectionResponsePublicMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `array` | No |  |
| `results` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsInboxMessagesCollectionResponsePublicMessage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesCollectionResponsePublicMessageEntity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicThreadEntity

```php
$conversations_inbox_messages_collection_response_public_thread = $client->ConversationsInboxMessagesCollectionResponsePublicThread();
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
| `threadAssociations` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsInboxMessagesCollectionResponsePublicThread()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesCollectionResponsePublicThreadEntity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity

```php
$conversations_inbox_messages_collection_response_with_total_public = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic();
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
| `deliveryIdentifier` | `array` | Yes |  |
| `id` | `string` | Yes | The ID of the channel account. |
| `inboxId` | `string` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | Yes | The name of the channel account. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity

```php
$conversations_inbox_messages_collection_response_with_total_public2 = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic2()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity

```php
$conversations_inbox_messages_collection_response_with_total_public3 = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic3();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic3()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicActorEntity

```php
$conversations_inbox_messages_public_actor = $client->ConversationsInboxMessagesPublicActor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicActor()->load(["id" => "conversations_inbox_messages_public_actor_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicActorEntity`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelEntity

```php
$conversations_inbox_messages_public_channel = $client->ConversationsInboxMessagesPublicChannel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicChannel()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicChannelEntity`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelAccountEntity

```php
$conversations_inbox_messages_public_channel_account = $client->ConversationsInboxMessagesPublicChannelAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicChannelAccount()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicChannelAccountEntity`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicInboxEntity

```php
$conversations_inbox_messages_public_inbox = $client->ConversationsInboxMessagesPublicInbox();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicInbox()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicInboxEntity`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageEntity

```php
$conversations_inbox_messages_public_message = $client->ConversationsInboxMessagesPublicMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicMessage()->create([
  "thread_id" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicMessage()->load(["id" => "conversations_inbox_messages_public_message_id", "thread_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicMessageEntity`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageContentEntity

```php
$conversations_inbox_messages_public_message_content = $client->ConversationsInboxMessagesPublicMessageContent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicMessageContent()->load(["message_id" => "message_id", "thread_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicMessageContentEntity`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsInboxMessagesPublicThreadEntity

```php
$conversations_inbox_messages_public_thread = $client->ConversationsInboxMessagesPublicThread();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicThread()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ConversationsInboxMessagesPublicThread()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsInboxMessagesPublicThreadEntity`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicActorEntity

```php
$conversations_public_actor = $client->ConversationsPublicActor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicActor()->load(["id" => "conversations_public_actor_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicActorEntity`

Create a new `ConversationsPublicActorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicChannelEntity

```php
$conversations_public_channel = $client->ConversationsPublicChannel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The ID of the channel. |
| `name` | `string` | Yes | The name of the channel. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicChannel()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicChannelEntity`

Create a new `ConversationsPublicChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicChannelAccountEntity

```php
$conversations_public_channel_account = $client->ConversationsPublicChannelAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | Yes | The type of identifier. |
| `value` | `string` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicChannelAccount()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicChannelAccountEntity`

Create a new `ConversationsPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicInboxEntity

```php
$conversations_public_inbox = $client->ConversationsPublicInbox();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicInbox()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicInboxEntity`

Create a new `ConversationsPublicInboxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicMessageEntity

```php
$conversations_public_message = $client->ConversationsPublicMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationsPublicMessage()->create([
  "thread_id" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicMessage()->load(["id" => "conversations_public_message_id", "thread_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicMessageEntity`

Create a new `ConversationsPublicMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicMessageContentEntity

```php
$conversations_public_message_content = $client->ConversationsPublicMessageContent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `string` | No |  |
| `text` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicMessageContent()->load(["message_id" => "message_id", "thread_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicMessageContentEntity`

Create a new `ConversationsPublicMessageContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationsPublicThreadEntity

```php
$conversations_public_thread = $client->ConversationsPublicThread();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether this thread is archived. |
| `associatedTicketId` | `string` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicThread()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationsPublicThread()->remove(["thread_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ConversationsPublicThread()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationsPublicThreadEntity`

Create a new `ConversationsPublicThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannelEntity

```php
$custom_channels_collection_response_with_total_public_channel = $client->CustomChannelsCollectionResponseWithTotalPublicChannel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `array` | Yes | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | No | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | No | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | Yes | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | Yes | A string that uniquely identifies the channel. |
| `name` | `string` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `string` | No | A string representing the URL to which webhook events will be sent. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomChannelsCollectionResponseWithTotalPublicChannel()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomChannelsCollectionResponseWithTotalPublicChannelEntity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannel2Entity

```php
$custom_channels_collection_response_with_total_public_channel2 = $client->CustomChannelsCollectionResponseWithTotalPublicChannel2();
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
| `deliveryIdentifier` | `array` | Yes |  |
| `id` | `string` | Yes | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | Yes | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | Yes | The name of the channel account, represented as a string. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomChannelsCollectionResponseWithTotalPublicChannel2()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomChannelsCollectionResponseWithTotalPublicChannel2Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomChannelsPublicChannelAccountEntity

```php
$custom_channels_public_channel_account = $client->CustomChannelsPublicChannelAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorized` | `bool` | Yes | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelAccount()->create([
  "channel_id" => null, // int
  "authorized" => null, // bool
  "deliveryIdentifier" => null, // array
  "inboxId" => null, // string
  "name" => null, // string
  "type" => null, // string
  "value" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelAccount()->load(["id" => 1, "channel_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelAccount()->update([
  "id" => 1,
  "channel_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomChannelsPublicChannelAccountEntity`

Create a new `CustomChannelsPublicChannelAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomChannelsPublicChannelAccountStagingTokenEntity

```php
$custom_channels_public_channel_account_staging_token = $client->CustomChannelsPublicChannelAccountStagingToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountName` | `string` | No | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `array` | Yes |  |
| `id` | `string` | No |  |
| `type` | `string` | Yes | A string representing the type of delivery identifier. |
| `value` | `string` | Yes | A string representing the value associated with the delivery identifier type. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelAccountStagingToken()->update([
  "channel_id" => 1,
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomChannelsPublicChannelAccountStagingTokenEntity`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomChannelsPublicChannelIntegrationChannelEntity

```php
$custom_channels_public_channel_integration_channel = $client->CustomChannelsPublicChannelIntegrationChannel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `array` | Yes | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelIntegrationChannel()->create([
  "capabilities" => null, // array
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelIntegrationChannel()->load(["channel_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomChannelsPublicChannelIntegrationChannel()->update([
  "channel_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomChannelsPublicChannelIntegrationChannelEntity`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomChannelsPublicConversationsMessageEntity

```php
$custom_channels_public_conversations_message = $client->CustomChannelsPublicConversationsMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `int` | No | The ID of the contact with which this message should be associated. |
| `attachments` | `array` | Yes | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | Yes | The identifier of the channel account associated with the message. |
| `channelId` | `string` | Yes | The identifier of the channel through which the message was sent. |
| `client` | `array` | Yes |  |
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
| `preResolvedContacts` | `array` | Yes |  |
| `recipients` | `array` | Yes | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | No | The rich text content of the message, if available. |
| `senders` | `array` | Yes | An array of senders associated with the message, each containing sender details. |
| `status` | `array` | Yes |  |
| `statusType` | `string` | Yes | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | No | The subject of the message, if applicable. |
| `text` | `string` | Yes | The plain text content of the message. |
| `timestamp` | `string` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Yes | Indicates whether the message content is truncated. |
| `type` | `string` | Yes | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | No | The date and time when the message was last updated, in ISO 8601 format. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomChannelsPublicConversationsMessage()->create([
  "channel_id" => null, // int
  "archived" => null, // bool
  "attachments" => null, // array
  "channelAccountId" => null, // string
  "channelId" => null, // string
  "client" => null, // array
  "conversationsThreadId" => null, // string
  "createdAt" => null, // string
  "createdBy" => null, // string
  "direction" => null, // string
  "id" => null, // string
  "messageDirection" => null, // string
  "preResolvedContacts" => null, // array
  "recipients" => null, // array
  "senders" => null, // array
  "status" => null, // array
  "statusType" => null, // string
  "text" => null, // string
  "timestamp" => null, // string
  "truncationStatus" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomChannelsPublicConversationsMessage()->load(["id" => "custom_channels_public_conversations_message_id", "channel_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomChannelsPublicConversationsMessage()->update([
  "id" => "custom_channels_public_conversations_message_id",
  "channel_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomChannelsPublicConversationsMessageEntity`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicThreadEntity

```php
$public_thread = $client->PublicThread();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PublicThread()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicThreadEntity`

Create a new `PublicThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ThreadEntity

```php
$thread = $client->Thread();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Thread()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ThreadEntity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VisitorIdentificationIdentificationTokenEntity

```php
$visitor_identification_identification_token = $client->VisitorIdentificationIdentificationToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email of the visitor that you wish to identify |
| `firstName` | `string` | No | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `array` | Yes | An object containing additional context about the customer agent. |
| `lastName` | `string` | No | The last name of the visitor that you wish to identify. |
| `token` | `string` | Yes | An identification token that allows the visitor to be treated as a known contact. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->VisitorIdentificationIdentificationToken()->create([
  "email" => null, // string
  "hsCustomerAgentContext" => null, // array
  "token" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VisitorIdentificationIdentificationTokenEntity`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new HubspotConversationsSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

