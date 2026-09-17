# HubspotConversations Python SDK Reference

Complete API reference for the HubspotConversations Python SDK.


## HubspotConversationsSDK

### Constructor

```python
from hubspotconversations_sdk import HubspotConversationsSDK

client = HubspotConversationsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotConversationsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HubspotConversationsSDK.test()
```


### Instance Methods

#### `Channel(data=None)`

Create a new `ChannelEntity` instance. Pass `None` for no initial data.

#### `ConversationsBatchResponsePublicActor(data=None)`

Create a new `ConversationsBatchResponsePublicActorEntity` instance. Pass `None` for no initial data.

#### `ConversationsCollectionResponsePublicMessageForwardPaging(data=None)`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance. Pass `None` for no initial data.

#### `ConversationsCollectionResponsePublicThreadForwardPaging(data=None)`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance. Pass `None` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannel(data=None)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance. Pass `None` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicChannelAccount(data=None)`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance. Pass `None` for no initial data.

#### `ConversationsCollectionResponseWithTotalPublicInbox(data=None)`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesBatchResponsePublicActor(data=None)`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicMessage(data=None)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesCollectionResponsePublicThread(data=None)`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic(data=None)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data=None)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data=None)`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicActor(data=None)`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicChannel(data=None)`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicChannelAccount(data=None)`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicInbox(data=None)`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicMessage(data=None)`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicMessageContent(data=None)`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance. Pass `None` for no initial data.

#### `ConversationsInboxMessagesPublicThread(data=None)`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicActor(data=None)`

Create a new `ConversationsPublicActorEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicChannel(data=None)`

Create a new `ConversationsPublicChannelEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicChannelAccount(data=None)`

Create a new `ConversationsPublicChannelAccountEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicInbox(data=None)`

Create a new `ConversationsPublicInboxEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicMessage(data=None)`

Create a new `ConversationsPublicMessageEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicMessageContent(data=None)`

Create a new `ConversationsPublicMessageContentEntity` instance. Pass `None` for no initial data.

#### `ConversationsPublicThread(data=None)`

Create a new `ConversationsPublicThreadEntity` instance. Pass `None` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel(data=None)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance. Pass `None` for no initial data.

#### `CustomChannelsCollectionResponseWithTotalPublicChannel2(data=None)`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance. Pass `None` for no initial data.

#### `CustomChannelsPublicChannelAccount(data=None)`

Create a new `CustomChannelsPublicChannelAccountEntity` instance. Pass `None` for no initial data.

#### `CustomChannelsPublicChannelAccountStagingToken(data=None)`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance. Pass `None` for no initial data.

#### `CustomChannelsPublicChannelIntegrationChannel(data=None)`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance. Pass `None` for no initial data.

#### `CustomChannelsPublicConversationsMessage(data=None)`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance. Pass `None` for no initial data.

#### `PublicThread(data=None)`

Create a new `PublicThreadEntity` instance. Pass `None` for no initial data.

#### `Thread(data=None)`

Create a new `ThreadEntity` instance. Pass `None` for no initial data.

#### `VisitorIdentificationIdentificationToken(data=None)`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ChannelEntity

```python
channel = client.Channel()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Channel().remove({"channel_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsBatchResponsePublicActorEntity

```python
conversations_batch_response_public_actor = client.ConversationsBatchResponsePublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes |  |
| `errors` | `list` | No |  |
| `inputs` | `list` | Yes |  |
| `links` | `dict` | No |  |
| `numErrors` | `int` | No |  |
| `requestedAt` | `str` | No |  |
| `results` | `list` | Yes |  |
| `startedAt` | `str` | Yes |  |
| `status` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationsBatchResponsePublicActor().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsBatchResponsePublicActorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsCollectionResponsePublicMessageForwardPagingEntity

```python
conversations_collection_response_public_message_forward_paging = client.ConversationsCollectionResponsePublicMessageForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `dict` | No |  |
| `results` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsCollectionResponsePublicMessageForwardPaging().list({"thread_id": 1})
for conversations_collection_response_public_message_forward_paging in results:
    print(conversations_collection_response_public_message_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponsePublicMessageForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsCollectionResponsePublicThreadForwardPagingEntity

```python
conversations_collection_response_public_thread_forward_paging = client.ConversationsCollectionResponsePublicThreadForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether this thread is archived. |
| `assignedTo` | `str` | No |  |
| `associatedContactId` | `str` | Yes | The ID of the associated Contact in the CRM. |
| `closedAt` | `str` | No | When the thread was closed. |
| `createdAt` | `str` | Yes | When the thread was created. |
| `id` | `str` | Yes | The unique ID of the thread. |
| `inboxId` | `str` | Yes | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `str` | No | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `str` | No | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `str` | No | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `str` | Yes |  |
| `originalChannelId` | `str` | Yes |  |
| `spam` | `bool` | Yes | Whether the thread is marked as spam. |
| `status` | `str` | Yes | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsCollectionResponsePublicThreadForwardPaging().list()
for conversations_collection_response_public_thread_forward_paging in results:
    print(conversations_collection_response_public_thread_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponsePublicThreadForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelEntity

```python
conversations_collection_response_with_total_public_channel = client.ConversationsCollectionResponseWithTotalPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The ID of the channel. |
| `name` | `str` | Yes | The name of the channel. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsCollectionResponseWithTotalPublicChannel().list()
for conversations_collection_response_with_total_public_channel in results:
    print(conversations_collection_response_with_total_public_channel)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicChannelAccountEntity

```python
conversations_collection_response_with_total_public_channel_account = client.ConversationsCollectionResponseWithTotalPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the channel account is turned on. |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `str` | No |  |
| `authorized` | `bool` | Yes |  |
| `channelId` | `str` | Yes | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `str` | Yes |  |
| `deliveryIdentifier` | `dict` | Yes |  |
| `id` | `str` | Yes | The ID of the channel account. |
| `inboxId` | `str` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `str` | Yes | The name of the channel account. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsCollectionResponseWithTotalPublicChannelAccount().list()
for conversations_collection_response_with_total_public_channel_account in results:
    print(conversations_collection_response_with_total_public_channel_account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsCollectionResponseWithTotalPublicInboxEntity

```python
conversations_collection_response_with_total_public_inbox = client.ConversationsCollectionResponseWithTotalPublicInbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `str` | No |  |
| `createdAt` | `str` | Yes | When the inbox was created. |
| `id` | `str` | Yes | The ID of the inbox. |
| `name` | `str` | Yes | The name of the inbox. |
| `type` | `str` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsCollectionResponseWithTotalPublicInbox().list()
for conversations_collection_response_with_total_public_inbox in results:
    print(conversations_collection_response_with_total_public_inbox)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsCollectionResponseWithTotalPublicInboxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesBatchResponsePublicActorEntity

```python
conversations_inbox_messages_batch_response_public_actor = client.ConversationsInboxMessagesBatchResponsePublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes |  |
| `inputs` | `list` | Yes |  |
| `links` | `dict` | No |  |
| `requestedAt` | `str` | No |  |
| `results` | `list` | Yes |  |
| `startedAt` | `str` | Yes |  |
| `status` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationsInboxMessagesBatchResponsePublicActor().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesBatchResponsePublicActorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicMessageEntity

```python
conversations_inbox_messages_collection_response_public_message = client.ConversationsInboxMessagesCollectionResponsePublicMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `dict` | No |  |
| `results` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsInboxMessagesCollectionResponsePublicMessage().list({"thread_id": 1})
for conversations_inbox_messages_collection_response_public_message in results:
    print(conversations_inbox_messages_collection_response_public_message)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponsePublicThreadEntity

```python
conversations_inbox_messages_collection_response_public_thread = client.ConversationsInboxMessagesCollectionResponsePublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether this thread is archived. |
| `assignedTo` | `str` | No |  |
| `associatedContactId` | `str` | Yes | The ID of the associated Contact in the CRM. |
| `closedAt` | `str` | No | When the thread was closed. |
| `createdAt` | `str` | Yes | When the thread was created. |
| `id` | `str` | Yes | The unique ID of the thread. |
| `inboxId` | `str` | Yes | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `str` | No | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `str` | No | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `str` | No | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `str` | Yes |  |
| `originalChannelId` | `str` | Yes |  |
| `spam` | `bool` | Yes | Whether the thread is marked as spam. |
| `status` | `str` | Yes | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsInboxMessagesCollectionResponsePublicThread().list()
for conversations_inbox_messages_collection_response_public_thread in results:
    print(conversations_inbox_messages_collection_response_public_thread)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity

```python
conversations_inbox_messages_collection_response_with_total_public = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the channel account is turned on. |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `str` | No |  |
| `authorized` | `bool` | Yes |  |
| `channelId` | `str` | Yes | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `str` | Yes |  |
| `deliveryIdentifier` | `dict` | Yes |  |
| `id` | `str` | Yes | The ID of the channel account. |
| `inboxId` | `str` | Yes | The ID of the conversations inbox that contains the channel account. |
| `name` | `str` | Yes | The name of the channel account. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().list()
for conversations_inbox_messages_collection_response_with_total_public in results:
    print(conversations_inbox_messages_collection_response_with_total_public)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity

```python
conversations_inbox_messages_collection_response_with_total_public2 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The ID of the channel. |
| `name` | `str` | Yes | The name of the channel. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().list()
for conversations_inbox_messages_collection_response_with_total_public2 in results:
    print(conversations_inbox_messages_collection_response_with_total_public2)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity

```python
conversations_inbox_messages_collection_response_with_total_public3 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `str` | No |  |
| `createdAt` | `str` | Yes | When the inbox was created. |
| `id` | `str` | Yes | The ID of the inbox. |
| `name` | `str` | Yes | The name of the inbox. |
| `type` | `str` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().list()
for conversations_inbox_messages_collection_response_with_total_public3 in results:
    print(conversations_inbox_messages_collection_response_with_total_public3)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicActorEntity

```python
conversations_inbox_messages_public_actor = client.ConversationsInboxMessagesPublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicActor().load({"id": "conversations_inbox_messages_public_actor_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicActorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelEntity

```python
conversations_inbox_messages_public_channel = client.ConversationsInboxMessagesPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The ID of the channel. |
| `name` | `str` | Yes | The name of the channel. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicChannel().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicChannelAccountEntity

```python
conversations_inbox_messages_public_channel_account = client.ConversationsInboxMessagesPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `type` | `str` | Yes | The type of identifier. |
| `value` | `str` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicChannelAccount().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicChannelAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicInboxEntity

```python
conversations_inbox_messages_public_inbox = client.ConversationsInboxMessagesPublicInbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `str` | No |  |
| `createdAt` | `str` | Yes | When the inbox was created. |
| `id` | `str` | Yes | The ID of the inbox. |
| `name` | `str` | Yes | The name of the inbox. |
| `type` | `str` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicInbox().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicInboxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageEntity

```python
conversations_inbox_messages_public_message = client.ConversationsInboxMessagesPublicMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicMessage().create({
    "thread_id": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicMessage().load({"id": "conversations_inbox_messages_public_message_id", "thread_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicMessageContentEntity

```python
conversations_inbox_messages_public_message_content = client.ConversationsInboxMessagesPublicMessageContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `str` | No |  |
| `text` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicMessageContent().load({"message_id": "message_id", "thread_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicMessageContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsInboxMessagesPublicThreadEntity

```python
conversations_inbox_messages_public_thread = client.ConversationsInboxMessagesPublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether this thread is archived. |
| `associatedTicketId` | `str` | No |  |
| `id` | `str` | No |  |
| `status` | `str` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicThread().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ConversationsInboxMessagesPublicThread().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsInboxMessagesPublicThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicActorEntity

```python
conversations_public_actor = client.ConversationsPublicActor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicActor().load({"id": "conversations_public_actor_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicActorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicChannelEntity

```python
conversations_public_channel = client.ConversationsPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The ID of the channel. |
| `name` | `str` | Yes | The name of the channel. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicChannel().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicChannelAccountEntity

```python
conversations_public_channel_account = client.ConversationsPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `type` | `str` | Yes | The type of identifier. |
| `value` | `str` | Yes | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicChannelAccount().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicChannelAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicInboxEntity

```python
conversations_public_inbox = client.ConversationsPublicInbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `archivedAt` | `str` | No |  |
| `createdAt` | `str` | Yes | When the inbox was created. |
| `id` | `str` | Yes | The ID of the inbox. |
| `name` | `str` | Yes | The name of the inbox. |
| `type` | `str` | Yes | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicInbox().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicInboxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicMessageEntity

```python
conversations_public_message = client.ConversationsPublicMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationsPublicMessage().create({
    "thread_id": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicMessage().load({"id": "conversations_public_message_id", "thread_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicMessageContentEntity

```python
conversations_public_message_content = client.ConversationsPublicMessageContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `richText` | `str` | No |  |
| `text` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicMessageContent().load({"message_id": "message_id", "thread_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicMessageContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationsPublicThreadEntity

```python
conversations_public_thread = client.ConversationsPublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether this thread is archived. |
| `associatedTicketId` | `str` | No |  |
| `id` | `str` | No |  |
| `status` | `str` | No | The thread's status: `OPEN` or `CLOSED`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationsPublicThread().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ConversationsPublicThread().remove({"thread_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ConversationsPublicThread().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationsPublicThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannelEntity

```python
custom_channels_collection_response_with_total_public_channel = client.CustomChannelsCollectionResponseWithTotalPublicChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `dict` | Yes | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `str` | No | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `str` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `str` | No | A string representing the URL of the channel's logo. |
| `createdAt` | `str` | Yes | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `str` | Yes | A string that uniquely identifies the channel. |
| `name` | `str` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `str` | No | A string representing the URL to which webhook events will be sent. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomChannelsCollectionResponseWithTotalPublicChannel().list()
for custom_channels_collection_response_with_total_public_channel in results:
    print(custom_channels_collection_response_with_total_public_channel)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomChannelsCollectionResponseWithTotalPublicChannel2Entity

```python
custom_channels_collection_response_with_total_public_channel2 = client.CustomChannelsCollectionResponseWithTotalPublicChannel2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | A boolean indicating whether the channel account is currently active. |
| `archived` | `bool` | Yes | A boolean indicating whether the channel account is archived. |
| `archivedAt` | `str` | No | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | `bool` | Yes | A boolean indicating whether the channel account is authorized. |
| `channelId` | `str` | Yes | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | `str` | Yes | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` | `dict` | Yes |  |
| `id` | `str` | Yes | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `str` | Yes | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `str` | Yes | The name of the channel account, represented as a string. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomChannelsCollectionResponseWithTotalPublicChannel2().list({"channel_id": 1})
for custom_channels_collection_response_with_total_public_channel2 in results:
    print(custom_channels_collection_response_with_total_public_channel2)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomChannelsPublicChannelAccountEntity

```python
custom_channels_public_channel_account = client.CustomChannelsPublicChannelAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorized` | `bool` | Yes | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `dict` | Yes |  |
| `id` | `str` | No |  |
| `inboxId` | `str` | Yes | The unique identifier for the inbox associated with this channel account. |
| `name` | `str` | Yes | The name of the channel account. |
| `type` | `str` | Yes | A string representing the type of delivery identifier. |
| `value` | `str` | Yes | A string representing the value associated with the delivery identifier type. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelAccount().create({
    "channel_id": 1,  # int
    "authorized": True,  # bool
    "deliveryIdentifier": {},  # dict
    "inboxId": "example_inboxId",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
    "value": "example_value",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelAccount().load({"id": 1, "channel_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelAccount().update({
    "id": 1,
    "channel_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicChannelAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomChannelsPublicChannelAccountStagingTokenEntity

```python
custom_channels_public_channel_account_staging_token = client.CustomChannelsPublicChannelAccountStagingToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountName` | `str` | No | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `dict` | Yes |  |
| `id` | `str` | No |  |
| `type` | `str` | Yes | A string representing the type of delivery identifier. |
| `value` | `str` | Yes | A string representing the value associated with the delivery identifier type. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelAccountStagingToken().update({
    "channel_id": 1,
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicChannelAccountStagingTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomChannelsPublicChannelIntegrationChannelEntity

```python
custom_channels_public_channel_integration_channel = client.CustomChannelsPublicChannelIntegrationChannel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `dict` | Yes | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | `str` | No | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | `str` | No | A string providing a description of the channel. |
| `channelLogoUrl` | `str` | No | A string representing the URL of the channel's logo. |
| `name` | `str` | Yes | A string representing the name of the channel. |
| `webhookUrl` | `str` | No | A string representing the URL to which webhook events will be sent. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelIntegrationChannel().create({
    "capabilities": {},  # dict
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelIntegrationChannel().load({"channel_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomChannelsPublicChannelIntegrationChannel().update({
    "channel_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicChannelIntegrationChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomChannelsPublicConversationsMessageEntity

```python
custom_channels_public_conversations_message = client.CustomChannelsPublicConversationsMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `int` | No | The ID of the contact with which this message should be associated. |
| `attachments` | `list` | Yes | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `str` | Yes | The identifier of the channel account associated with the message. |
| `channelId` | `str` | Yes | The identifier of the channel through which the message was sent. |
| `client` | `dict` | Yes |  |
| `conversationsThreadId` | `str` | Yes | The identifier for the conversation thread to which this message belongs. |
| `createdAt` | `str` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `createdBy` | `str` | Yes | The identifier of the user or system that created the message. |
| `direction` | `str` | Yes | The direction of the message, either 'INCOMING' or 'OUTGOING'. |
| `errorMessage` | `str` | No | A string containing an error message, if applicable. |
| `id` | `str` | Yes | The unique identifier for the message. |
| `inReplyToId` | `str` | No | The identifier of the message to which this message is a reply, if applicable. |
| `integrationIdempotencyId` | `str` | No | A unique identifier to ensure idempotency of the message within the integration. |
| `integrationThreadId` | `str` | No | A unique identifier for the thread within the integration. |
| `messageDirection` | `str` | Yes | The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'. |
| `preResolvedContacts` | `dict` | Yes |  |
| `recipients` | `list` | Yes | An array of recipients of the message, each containing recipient details. |
| `richText` | `str` | No | The rich text content of the message, if available. |
| `senders` | `list` | Yes | An array of senders associated with the message, each containing sender details. |
| `status` | `dict` | Yes |  |
| `statusType` | `str` | Yes | Valid status are SENT, FAILED, and READ |
| `subject` | `str` | No | The subject of the message, if applicable. |
| `text` | `str` | Yes | The plain text content of the message. |
| `timestamp` | `str` | Yes | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `str` | Yes | Indicates whether the message content is truncated. |
| `type` | `str` | Yes | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `str` | No | The date and time when the message was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomChannelsPublicConversationsMessage().create({
    "channel_id": 1,  # int
    "archived": True,  # bool
    "attachments": [],  # list
    "channelAccountId": "example_channelAccountId",  # str
    "channelId": "example_channelId",  # str
    "client": {},  # dict
    "conversationsThreadId": "example_conversationsThreadId",  # str
    "createdAt": "example_createdAt",  # str
    "createdBy": "example_createdBy",  # str
    "direction": "example_direction",  # str
    "id": "example_id",  # str
    "messageDirection": "example_messageDirection",  # str
    "preResolvedContacts": {},  # dict
    "recipients": [],  # list
    "senders": [],  # list
    "status": {},  # dict
    "statusType": "example_statusType",  # str
    "text": "example_text",  # str
    "timestamp": "example_timestamp",  # str
    "truncationStatus": "example_truncationStatus",  # str
    "type": "example_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomChannelsPublicConversationsMessage().load({"id": "custom_channels_public_conversations_message_id", "channel_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomChannelsPublicConversationsMessage().update({
    "id": "custom_channels_public_conversations_message_id",
    "channel_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomChannelsPublicConversationsMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublicThreadEntity

```python
public_thread = client.PublicThread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PublicThread().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ThreadEntity

```python
thread = client.Thread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Thread().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VisitorIdentificationIdentificationTokenEntity

```python
visitor_identification_identification_token = client.VisitorIdentificationIdentificationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | The email of the visitor that you wish to identify |
| `firstName` | `str` | No | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `dict` | Yes | An object containing additional context about the customer agent. |
| `lastName` | `str` | No | The last name of the visitor that you wish to identify. |
| `token` | `str` | Yes | An identification token that allows the visitor to be treated as a known contact. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.VisitorIdentificationIdentificationToken().create({
    "email": "example_email",  # str
    "hsCustomerAgentContext": {},  # dict
    "token": "example_token",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VisitorIdentificationIdentificationTokenEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = HubspotConversationsSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

