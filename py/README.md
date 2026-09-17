# HubspotConversations Python SDK



The Python SDK for the HubspotConversations API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Channel()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-conversations-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from hubspotconversations_sdk import HubspotConversationsSDK

client = HubspotConversationsSDK({
    "apikey": os.environ.get("HUBSPOT_CONVERSATIONS_APIKEY"),
})
```

### 3. Load a conversationsinboxmessagespublicmessage

ConversationsInboxMessagesPublicMessage is nested under thread, so provide the `thread_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    conversationsinboxmessagespublicmessage = client.ConversationsInboxMessagesPublicMessage().load({"thread_id": 1, "id": "example_id"})
    print(conversationsinboxmessagespublicmessage)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Remove
client.Channel().remove({"channel_id": 1})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    conversationsinboxmessagespublicthread = client.ConversationsInboxMessagesPublicThread().load({"id": 1})
    print(conversationsinboxmessagespublicthread)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = HubspotConversationsSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
conversationsinboxmessagespublicthread = client.ConversationsInboxMessagesPublicThread().load({"id": "test01"})
# conversationsinboxmessagespublicthread contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = HubspotConversationsSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### HubspotConversationsSDK

```python
from hubspotconversations_sdk import HubspotConversationsSDK

client = HubspotConversationsSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = HubspotConversationsSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### HubspotConversationsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `channel = client.Channel()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ConversationsBatchResponsePublicActor

Create an instance: `conversations_batch_response_public_actor = client.ConversationsBatchResponsePublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` |  |
| `errors` | `list` |  |
| `inputs` | `list` |  |
| `links` | `dict` |  |
| `numErrors` | `int` |  |
| `requestedAt` | `str` |  |
| `results` | `list` |  |
| `startedAt` | `str` |  |
| `status` | `str` |  |

#### Example: Create

```python
conversations_batch_response_public_actor = client.ConversationsBatchResponsePublicActor().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### ConversationsCollectionResponsePublicMessageForwardPaging

Create an instance: `conversations_collection_response_public_message_forward_paging = client.ConversationsCollectionResponsePublicMessageForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `dict` |  |
| `results` | `list` |  |

#### Example: List

```python
conversations_collection_response_public_message_forward_pagings = client.ConversationsCollectionResponsePublicMessageForwardPaging().list({"thread_id": 1})
```


### ConversationsCollectionResponsePublicThreadForwardPaging

Create an instance: `conversations_collection_response_public_thread_forward_paging = client.ConversationsCollectionResponsePublicThreadForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
| `assignedTo` | `str` |  |
| `associatedContactId` | `str` | The ID of the associated Contact in the CRM. |
| `closedAt` | `str` | When the thread was closed. |
| `createdAt` | `str` | When the thread was created. |
| `id` | `str` | The unique ID of the thread. |
| `inboxId` | `str` | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `str` | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `str` | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `str` | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `str` |  |
| `originalChannelId` | `str` |  |
| `spam` | `bool` | Whether the thread is marked as spam. |
| `status` | `str` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `dict` |  |

#### Example: List

```python
conversations_collection_response_public_thread_forward_pagings = client.ConversationsCollectionResponsePublicThreadForwardPaging().list()
```


### ConversationsCollectionResponseWithTotalPublicChannel

Create an instance: `conversations_collection_response_with_total_public_channel = client.ConversationsCollectionResponseWithTotalPublicChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the channel. |
| `name` | `str` | The name of the channel. |

#### Example: List

```python
conversations_collection_response_with_total_public_channels = client.ConversationsCollectionResponseWithTotalPublicChannel().list()
```


### ConversationsCollectionResponseWithTotalPublicChannelAccount

Create an instance: `conversations_collection_response_with_total_public_channel_account = client.ConversationsCollectionResponseWithTotalPublicChannelAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the channel account is turned on. |
| `archived` | `bool` |  |
| `archivedAt` | `str` |  |
| `authorized` | `bool` |  |
| `channelId` | `str` | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `str` |  |
| `deliveryIdentifier` | `dict` |  |
| `id` | `str` | The ID of the channel account. |
| `inboxId` | `str` | The ID of the conversations inbox that contains the channel account. |
| `name` | `str` | The name of the channel account. |

#### Example: List

```python
conversations_collection_response_with_total_public_channel_accounts = client.ConversationsCollectionResponseWithTotalPublicChannelAccount().list()
```


### ConversationsCollectionResponseWithTotalPublicInbox

Create an instance: `conversations_collection_response_with_total_public_inbox = client.ConversationsCollectionResponseWithTotalPublicInbox()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `str` |  |
| `createdAt` | `str` | When the inbox was created. |
| `id` | `str` | The ID of the inbox. |
| `name` | `str` | The name of the inbox. |
| `type` | `str` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` |  |

#### Example: List

```python
conversations_collection_response_with_total_public_inboxs = client.ConversationsCollectionResponseWithTotalPublicInbox().list()
```


### ConversationsInboxMessagesBatchResponsePublicActor

Create an instance: `conversations_inbox_messages_batch_response_public_actor = client.ConversationsInboxMessagesBatchResponsePublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` |  |
| `inputs` | `list` |  |
| `links` | `dict` |  |
| `requestedAt` | `str` |  |
| `results` | `list` |  |
| `startedAt` | `str` |  |
| `status` | `str` |  |

#### Example: Create

```python
conversations_inbox_messages_batch_response_public_actor = client.ConversationsInboxMessagesBatchResponsePublicActor().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### ConversationsInboxMessagesCollectionResponsePublicMessage

Create an instance: `conversations_inbox_messages_collection_response_public_message = client.ConversationsInboxMessagesCollectionResponsePublicMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `dict` |  |
| `results` | `list` |  |

#### Example: List

```python
conversations_inbox_messages_collection_response_public_messages = client.ConversationsInboxMessagesCollectionResponsePublicMessage().list({"thread_id": 1})
```


### ConversationsInboxMessagesCollectionResponsePublicThread

Create an instance: `conversations_inbox_messages_collection_response_public_thread = client.ConversationsInboxMessagesCollectionResponsePublicThread()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
| `assignedTo` | `str` |  |
| `associatedContactId` | `str` | The ID of the associated Contact in the CRM. |
| `closedAt` | `str` | When the thread was closed. |
| `createdAt` | `str` | When the thread was created. |
| `id` | `str` | The unique ID of the thread. |
| `inboxId` | `str` | The ID of the conversations inbox containing the thread. |
| `latestMessageReceivedTimestamp` | `str` | The time that the latest message was sent on the thread. |
| `latestMessageSentTimestamp` | `str` | The time that the latest message was sent on the thread. |
| `latestMessageTimestamp` | `str` | The time that the latest message was sent or received on the thread. |
| `originalChannelAccountId` | `str` |  |
| `originalChannelId` | `str` |  |
| `spam` | `bool` | Whether the thread is marked as spam. |
| `status` | `str` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `dict` |  |

#### Example: List

```python
conversations_inbox_messages_collection_response_public_threads = client.ConversationsInboxMessagesCollectionResponsePublicThread().list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic

Create an instance: `conversations_inbox_messages_collection_response_with_total_public = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the channel account is turned on. |
| `archived` | `bool` |  |
| `archivedAt` | `str` |  |
| `authorized` | `bool` |  |
| `channelId` | `str` | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `str` |  |
| `deliveryIdentifier` | `dict` |  |
| `id` | `str` | The ID of the channel account. |
| `inboxId` | `str` | The ID of the conversations inbox that contains the channel account. |
| `name` | `str` | The name of the channel account. |

#### Example: List

```python
conversations_inbox_messages_collection_response_with_total_publics = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

Create an instance: `conversations_inbox_messages_collection_response_with_total_public2 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the channel. |
| `name` | `str` | The name of the channel. |

#### Example: List

```python
conversations_inbox_messages_collection_response_with_total_public2s = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic3

Create an instance: `conversations_inbox_messages_collection_response_with_total_public3 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `str` |  |
| `createdAt` | `str` | When the inbox was created. |
| `id` | `str` | The ID of the inbox. |
| `name` | `str` | The name of the inbox. |
| `type` | `str` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` |  |

#### Example: List

```python
conversations_inbox_messages_collection_response_with_total_public3s = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().list()
```


### ConversationsInboxMessagesPublicActor

Create an instance: `conversations_inbox_messages_public_actor = client.ConversationsInboxMessagesPublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
conversations_inbox_messages_public_actor = client.ConversationsInboxMessagesPublicActor().load({"id": "conversations_inbox_messages_public_actor_id"})
```


### ConversationsInboxMessagesPublicChannel

Create an instance: `conversations_inbox_messages_public_channel = client.ConversationsInboxMessagesPublicChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the channel. |
| `name` | `str` | The name of the channel. |

#### Example: Load

```python
conversations_inbox_messages_public_channel = client.ConversationsInboxMessagesPublicChannel().load({"id": 1})
```


### ConversationsInboxMessagesPublicChannelAccount

Create an instance: `conversations_inbox_messages_public_channel_account = client.ConversationsInboxMessagesPublicChannelAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `type` | `str` | The type of identifier. |
| `value` | `str` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

#### Example: Load

```python
conversations_inbox_messages_public_channel_account = client.ConversationsInboxMessagesPublicChannelAccount().load({"id": 1})
```


### ConversationsInboxMessagesPublicInbox

Create an instance: `conversations_inbox_messages_public_inbox = client.ConversationsInboxMessagesPublicInbox()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `str` |  |
| `createdAt` | `str` | When the inbox was created. |
| `id` | `str` | The ID of the inbox. |
| `name` | `str` | The name of the inbox. |
| `type` | `str` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` |  |

#### Example: Load

```python
conversations_inbox_messages_public_inbox = client.ConversationsInboxMessagesPublicInbox().load({"id": 1})
```


### ConversationsInboxMessagesPublicMessage

Create an instance: `conversations_inbox_messages_public_message = client.ConversationsInboxMessagesPublicMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
conversations_inbox_messages_public_message = client.ConversationsInboxMessagesPublicMessage().load({"id": "conversations_inbox_messages_public_message_id", "thread_id": 1})
```

#### Example: Create

```python
conversations_inbox_messages_public_message = client.ConversationsInboxMessagesPublicMessage().create({
    "thread_id": 1,  # int
})
```


### ConversationsInboxMessagesPublicMessageContent

Create an instance: `conversations_inbox_messages_public_message_content = client.ConversationsInboxMessagesPublicMessageContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `richText` | `str` |  |
| `text` | `str` |  |

#### Example: Load

```python
conversations_inbox_messages_public_message_content = client.ConversationsInboxMessagesPublicMessageContent().load({"message_id": "message_id", "thread_id": 1})
```


### ConversationsInboxMessagesPublicThread

Create an instance: `conversations_inbox_messages_public_thread = client.ConversationsInboxMessagesPublicThread()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
| `associatedTicketId` | `str` |  |
| `id` | `str` |  |
| `status` | `str` | The thread's status: `OPEN` or `CLOSED`. |

#### Example: Load

```python
conversations_inbox_messages_public_thread = client.ConversationsInboxMessagesPublicThread().load({"id": 1})
```


### ConversationsPublicActor

Create an instance: `conversations_public_actor = client.ConversationsPublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
conversations_public_actor = client.ConversationsPublicActor().load({"id": "conversations_public_actor_id"})
```


### ConversationsPublicChannel

Create an instance: `conversations_public_channel = client.ConversationsPublicChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the channel. |
| `name` | `str` | The name of the channel. |

#### Example: Load

```python
conversations_public_channel = client.ConversationsPublicChannel().load({"id": 1})
```


### ConversationsPublicChannelAccount

Create an instance: `conversations_public_channel_account = client.ConversationsPublicChannelAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `type` | `str` | The type of identifier. |
| `value` | `str` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

#### Example: Load

```python
conversations_public_channel_account = client.ConversationsPublicChannelAccount().load({"id": 1})
```


### ConversationsPublicInbox

Create an instance: `conversations_public_inbox = client.ConversationsPublicInbox()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `str` |  |
| `createdAt` | `str` | When the inbox was created. |
| `id` | `str` | The ID of the inbox. |
| `name` | `str` | The name of the inbox. |
| `type` | `str` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `str` |  |

#### Example: Load

```python
conversations_public_inbox = client.ConversationsPublicInbox().load({"id": 1})
```


### ConversationsPublicMessage

Create an instance: `conversations_public_message = client.ConversationsPublicMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
conversations_public_message = client.ConversationsPublicMessage().load({"id": "conversations_public_message_id", "thread_id": 1})
```

#### Example: Create

```python
conversations_public_message = client.ConversationsPublicMessage().create({
    "thread_id": 1,  # int
})
```


### ConversationsPublicMessageContent

Create an instance: `conversations_public_message_content = client.ConversationsPublicMessageContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `richText` | `str` |  |
| `text` | `str` |  |

#### Example: Load

```python
conversations_public_message_content = client.ConversationsPublicMessageContent().load({"message_id": "message_id", "thread_id": 1})
```


### ConversationsPublicThread

Create an instance: `conversations_public_thread = client.ConversationsPublicThread()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
| `associatedTicketId` | `str` |  |
| `id` | `str` |  |
| `status` | `str` | The thread's status: `OPEN` or `CLOSED`. |

#### Example: Load

```python
conversations_public_thread = client.ConversationsPublicThread().load({"id": 1})
```


### CustomChannelsCollectionResponseWithTotalPublicChannel

Create an instance: `custom_channels_collection_response_with_total_public_channel = client.CustomChannelsCollectionResponseWithTotalPublicChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `dict` | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `str` | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `str` | A string providing a description of the channel. |
| `channelLogoUrl` | `str` | A string representing the URL of the channel's logo. |
| `createdAt` | `str` | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `str` | A string that uniquely identifies the channel. |
| `name` | `str` | A string representing the name of the channel. |
| `webhookUrl` | `str` | A string representing the URL to which webhook events will be sent. |

#### Example: List

```python
custom_channels_collection_response_with_total_public_channels = client.CustomChannelsCollectionResponseWithTotalPublicChannel().list()
```


### CustomChannelsCollectionResponseWithTotalPublicChannel2

Create an instance: `custom_channels_collection_response_with_total_public_channel2 = client.CustomChannelsCollectionResponseWithTotalPublicChannel2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | A boolean indicating whether the channel account is currently active. |
| `archived` | `bool` | A boolean indicating whether the channel account is archived. |
| `archivedAt` | `str` | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | `bool` | A boolean indicating whether the channel account is authorized. |
| `channelId` | `str` | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | `str` | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` | `dict` |  |
| `id` | `str` | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `str` | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `str` | The name of the channel account, represented as a string. |

#### Example: List

```python
custom_channels_collection_response_with_total_public_channel2s = client.CustomChannelsCollectionResponseWithTotalPublicChannel2().list({"channel_id": 1})
```


### CustomChannelsPublicChannelAccount

Create an instance: `custom_channels_public_channel_account = client.CustomChannelsPublicChannelAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorized` | `bool` | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `dict` |  |
| `id` | `str` |  |
| `inboxId` | `str` | The unique identifier for the inbox associated with this channel account. |
| `name` | `str` | The name of the channel account. |
| `type` | `str` | A string representing the type of delivery identifier. |
| `value` | `str` | A string representing the value associated with the delivery identifier type. |

#### Example: Load

```python
custom_channels_public_channel_account = client.CustomChannelsPublicChannelAccount().load({"id": 1, "channel_id": 1})
```

#### Example: Create

```python
custom_channels_public_channel_account = client.CustomChannelsPublicChannelAccount().create({
    "channel_id": 1,  # int
    "authorized": True,  # bool
    "deliveryIdentifier": {},  # dict
    "inboxId": "example_inboxId",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
    "value": "example_value",  # str
})
```


### CustomChannelsPublicChannelAccountStagingToken

Create an instance: `custom_channels_public_channel_account_staging_token = client.CustomChannelsPublicChannelAccountStagingToken()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountName` | `str` | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `dict` |  |
| `id` | `str` |  |
| `type` | `str` | A string representing the type of delivery identifier. |
| `value` | `str` | A string representing the value associated with the delivery identifier type. |


### CustomChannelsPublicChannelIntegrationChannel

Create an instance: `custom_channels_public_channel_integration_channel = client.CustomChannelsPublicChannelIntegrationChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `dict` | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | `str` | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | `str` | A string providing a description of the channel. |
| `channelLogoUrl` | `str` | A string representing the URL of the channel's logo. |
| `name` | `str` | A string representing the name of the channel. |
| `webhookUrl` | `str` | A string representing the URL to which webhook events will be sent. |

#### Example: Load

```python
custom_channels_public_channel_integration_channel = client.CustomChannelsPublicChannelIntegrationChannel().load({"channel_id": 1})
```

#### Example: Create

```python
custom_channels_public_channel_integration_channel = client.CustomChannelsPublicChannelIntegrationChannel().create({
    "capabilities": {},  # dict
    "name": "example_name",  # str
})
```


### CustomChannelsPublicConversationsMessage

Create an instance: `custom_channels_public_conversations_message = client.CustomChannelsPublicConversationsMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `int` | The ID of the contact with which this message should be associated. |
| `attachments` | `list` | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `str` | The identifier of the channel account associated with the message. |
| `channelId` | `str` | The identifier of the channel through which the message was sent. |
| `client` | `dict` |  |
| `conversationsThreadId` | `str` | The identifier for the conversation thread to which this message belongs. |
| `createdAt` | `str` | The date and time when the message was created, in ISO 8601 format. |
| `createdBy` | `str` | The identifier of the user or system that created the message. |
| `direction` | `str` | The direction of the message, either 'INCOMING' or 'OUTGOING'. |
| `errorMessage` | `str` | A string containing an error message, if applicable. |
| `id` | `str` | The unique identifier for the message. |
| `inReplyToId` | `str` | The identifier of the message to which this message is a reply, if applicable. |
| `integrationIdempotencyId` | `str` | A unique identifier to ensure idempotency of the message within the integration. |
| `integrationThreadId` | `str` | A unique identifier for the thread within the integration. |
| `messageDirection` | `str` | The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'. |
| `preResolvedContacts` | `dict` |  |
| `recipients` | `list` | An array of recipients of the message, each containing recipient details. |
| `richText` | `str` | The rich text content of the message, if available. |
| `senders` | `list` | An array of senders associated with the message, each containing sender details. |
| `status` | `dict` |  |
| `statusType` | `str` | Valid status are SENT, FAILED, and READ |
| `subject` | `str` | The subject of the message, if applicable. |
| `text` | `str` | The plain text content of the message. |
| `timestamp` | `str` | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `str` | Indicates whether the message content is truncated. |
| `type` | `str` | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `str` | The date and time when the message was last updated, in ISO 8601 format. |

#### Example: Load

```python
custom_channels_public_conversations_message = client.CustomChannelsPublicConversationsMessage().load({"id": "custom_channels_public_conversations_message_id", "channel_id": 1})
```

#### Example: Create

```python
custom_channels_public_conversations_message = client.CustomChannelsPublicConversationsMessage().create({
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


### PublicThread

Create an instance: `public_thread = client.PublicThread()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Thread

Create an instance: `thread = client.Thread()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### VisitorIdentificationIdentificationToken

Create an instance: `visitor_identification_identification_token = client.VisitorIdentificationIdentificationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The email of the visitor that you wish to identify |
| `firstName` | `str` | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `dict` | An object containing additional context about the customer agent. |
| `lastName` | `str` | The last name of the visitor that you wish to identify. |
| `token` | `str` | An identification token that allows the visitor to be treated as a known contact. |

#### Example: Create

```python
visitor_identification_identification_token = client.VisitorIdentificationIdentificationToken().create({
    "email": "example_email",  # str
    "hsCustomerAgentContext": {},  # dict
    "token": "example_token",  # str
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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── hubspotconversations_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`hubspotconversations_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
conversationsinboxmessagespublicthread = client.ConversationsInboxMessagesPublicThread()
conversationsinboxmessagespublicthread.load({"id": 1})

# conversationsinboxmessagespublicthread.data_get() now returns the conversationsinboxmessagespublicthread data from the last load
# conversationsinboxmessagespublicthread.match_get() returns the last match criteria
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
