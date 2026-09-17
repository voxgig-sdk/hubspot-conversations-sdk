# HubspotConversations Golang SDK



The Golang SDK for the HubspotConversations API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Channel(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-conversations-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-conversations-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-conversations-sdk/go=../hubspot-conversations-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-conversations-sdk/go"
)

func main() {
    client := sdk.NewHubspotConversationsSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_CONVERSATIONS_APIKEY"),
    })

    // Remove a channel.
    removed, err := client.Channel(nil).Remove(map[string]any{"channel_id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
conversationsinboxmessagespublicthread, err := client.ConversationsInboxMessagesPublicThread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    // handle err
    return
}
_ = conversationsinboxmessagespublicthread
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

conversationsInboxMessagesPublicThread, err := client.ConversationsInboxMessagesPublicThread(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicThread) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotConversationsSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewHubspotConversationsSDK

```go
func NewHubspotConversationsSDK(options map[string]any) *HubspotConversationsSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotConversationsSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotConversationsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Channel` | `(data map[string]any) HubspotConversationsEntity` | Create a Channel entity instance. |
| `ConversationsBatchResponsePublicActor` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsBatchResponsePublicActor entity instance. |
| `ConversationsCollectionResponsePublicMessageForwardPaging` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsCollectionResponsePublicMessageForwardPaging entity instance. |
| `ConversationsCollectionResponsePublicThreadForwardPaging` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsCollectionResponsePublicThreadForwardPaging entity instance. |
| `ConversationsCollectionResponseWithTotalPublicChannel` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsCollectionResponseWithTotalPublicChannel entity instance. |
| `ConversationsCollectionResponseWithTotalPublicChannelAccount` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsCollectionResponseWithTotalPublicChannelAccount entity instance. |
| `ConversationsCollectionResponseWithTotalPublicInbox` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsCollectionResponseWithTotalPublicInbox entity instance. |
| `ConversationsInboxMessagesBatchResponsePublicActor` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesBatchResponsePublicActor entity instance. |
| `ConversationsInboxMessagesCollectionResponsePublicMessage` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesCollectionResponsePublicMessage entity instance. |
| `ConversationsInboxMessagesCollectionResponsePublicThread` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesCollectionResponsePublicThread entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic2` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic2 entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic3` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic3 entity instance. |
| `ConversationsInboxMessagesPublicActor` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicActor entity instance. |
| `ConversationsInboxMessagesPublicChannel` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicChannel entity instance. |
| `ConversationsInboxMessagesPublicChannelAccount` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicChannelAccount entity instance. |
| `ConversationsInboxMessagesPublicInbox` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicInbox entity instance. |
| `ConversationsInboxMessagesPublicMessage` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicMessage entity instance. |
| `ConversationsInboxMessagesPublicMessageContent` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicMessageContent entity instance. |
| `ConversationsInboxMessagesPublicThread` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsInboxMessagesPublicThread entity instance. |
| `ConversationsPublicActor` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicActor entity instance. |
| `ConversationsPublicChannel` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicChannel entity instance. |
| `ConversationsPublicChannelAccount` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicChannelAccount entity instance. |
| `ConversationsPublicInbox` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicInbox entity instance. |
| `ConversationsPublicMessage` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicMessage entity instance. |
| `ConversationsPublicMessageContent` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicMessageContent entity instance. |
| `ConversationsPublicThread` | `(data map[string]any) HubspotConversationsEntity` | Create a ConversationsPublicThread entity instance. |
| `CustomChannelsCollectionResponseWithTotalPublicChannel` | `(data map[string]any) HubspotConversationsEntity` | Create a CustomChannelsCollectionResponseWithTotalPublicChannel entity instance. |
| `CustomChannelsCollectionResponseWithTotalPublicChannel2` | `(data map[string]any) HubspotConversationsEntity` | Create a CustomChannelsCollectionResponseWithTotalPublicChannel2 entity instance. |
| `CustomChannelsPublicChannelAccount` | `(data map[string]any) HubspotConversationsEntity` | Create a CustomChannelsPublicChannelAccount entity instance. |
| `CustomChannelsPublicChannelAccountStagingToken` | `(data map[string]any) HubspotConversationsEntity` | Create a CustomChannelsPublicChannelAccountStagingToken entity instance. |
| `CustomChannelsPublicChannelIntegrationChannel` | `(data map[string]any) HubspotConversationsEntity` | Create a CustomChannelsPublicChannelIntegrationChannel entity instance. |
| `CustomChannelsPublicConversationsMessage` | `(data map[string]any) HubspotConversationsEntity` | Create a CustomChannelsPublicConversationsMessage entity instance. |
| `PublicThread` | `(data map[string]any) HubspotConversationsEntity` | Create a PublicThread entity instance. |
| `Thread` | `(data map[string]any) HubspotConversationsEntity` | Create a Thread entity instance. |
| `VisitorIdentificationIdentificationToken` | `(data map[string]any) HubspotConversationsEntity` | Create a VisitorIdentificationIdentificationToken entity instance. |

### Entity interface (HubspotConversationsEntity)

All entities implement the `HubspotConversationsEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    channel, err := client.Channel(nil).Remove(nil, nil)
    if err != nil { /* handle */ }
    // channel is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Channel

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/conversations/custom-channels/2026-09/{channelId}`

#### ConversationsBatchResponsePublicActor

| Field | Description |
| --- | --- |
| `"completedAt"` |  |
| `"errors"` |  |
| `"inputs"` |  |
| `"links"` |  |
| `"numErrors"` |  |
| `"requestedAt"` |  |
| `"results"` |  |
| `"startedAt"` |  |
| `"status"` |  |

Operations: Create.

API path: `/conversations/conversations/2026-09/actors/batch/read`

#### ConversationsCollectionResponsePublicMessageForwardPaging

| Field | Description |
| --- | --- |
| `"paging"` |  |
| `"results"` |  |

Operations: List.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages`

#### ConversationsCollectionResponsePublicThreadForwardPaging

| Field | Description |
| --- | --- |
| `"archived"` | Whether this thread is archived. |
| `"assignedTo"` |  |
| `"associatedContactId"` | The ID of the associated Contact in the CRM. |
| `"closedAt"` | When the thread was closed. |
| `"createdAt"` | When the thread was created. |
| `"id"` | The unique ID of the thread. |
| `"inboxId"` | The ID of the conversations inbox containing the thread. |
| `"latestMessageReceivedTimestamp"` | The time that the latest message was sent on the thread. |
| `"latestMessageSentTimestamp"` | The time that the latest message was sent on the thread. |
| `"latestMessageTimestamp"` | The time that the latest message was sent or received on the thread. |
| `"originalChannelAccountId"` |  |
| `"originalChannelId"` |  |
| `"spam"` | Whether the thread is marked as spam. |
| `"status"` | The thread's status: `OPEN` or `CLOSED`. |
| `"threadAssociations"` |  |

Operations: List.

API path: `/conversations/conversations/2026-09/threads`

#### ConversationsCollectionResponseWithTotalPublicChannel

| Field | Description |
| --- | --- |
| `"id"` | The ID of the channel. |
| `"name"` | The name of the channel. |

Operations: List.

API path: `/conversations/conversations/2026-09/channels`

#### ConversationsCollectionResponseWithTotalPublicChannelAccount

| Field | Description |
| --- | --- |
| `"active"` | Whether the channel account is turned on. |
| `"archived"` |  |
| `"archivedAt"` |  |
| `"authorized"` |  |
| `"channelId"` | The ID of the channel that the channel account is an instance of. |
| `"createdAt"` |  |
| `"deliveryIdentifier"` |  |
| `"id"` | The ID of the channel account. |
| `"inboxId"` | The ID of the conversations inbox that contains the channel account. |
| `"name"` | The name of the channel account. |

Operations: List.

API path: `/conversations/conversations/2026-09/channel-accounts`

#### ConversationsCollectionResponseWithTotalPublicInbox

| Field | Description |
| --- | --- |
| `"archived"` |  |
| `"archivedAt"` |  |
| `"createdAt"` | When the inbox was created. |
| `"id"` | The ID of the inbox. |
| `"name"` | The name of the inbox. |
| `"type"` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `"updatedAt"` |  |

Operations: List.

API path: `/conversations/conversations/2026-09/inboxes`

#### ConversationsInboxMessagesBatchResponsePublicActor

| Field | Description |
| --- | --- |
| `"completedAt"` |  |
| `"inputs"` |  |
| `"links"` |  |
| `"requestedAt"` |  |
| `"results"` |  |
| `"startedAt"` |  |
| `"status"` |  |

Operations: Create.

API path: `/conversations/v3/conversations/actors/batch/read`

#### ConversationsInboxMessagesCollectionResponsePublicMessage

| Field | Description |
| --- | --- |
| `"paging"` |  |
| `"results"` |  |

Operations: List.

API path: `/conversations/v3/conversations/threads/{threadId}/messages`

#### ConversationsInboxMessagesCollectionResponsePublicThread

| Field | Description |
| --- | --- |
| `"archived"` | Whether this thread is archived. |
| `"assignedTo"` |  |
| `"associatedContactId"` | The ID of the associated Contact in the CRM. |
| `"closedAt"` | When the thread was closed. |
| `"createdAt"` | When the thread was created. |
| `"id"` | The unique ID of the thread. |
| `"inboxId"` | The ID of the conversations inbox containing the thread. |
| `"latestMessageReceivedTimestamp"` | The time that the latest message was sent on the thread. |
| `"latestMessageSentTimestamp"` | The time that the latest message was sent on the thread. |
| `"latestMessageTimestamp"` | The time that the latest message was sent or received on the thread. |
| `"originalChannelAccountId"` |  |
| `"originalChannelId"` |  |
| `"spam"` | Whether the thread is marked as spam. |
| `"status"` | The thread's status: `OPEN` or `CLOSED`. |
| `"threadAssociations"` |  |

Operations: List.

API path: `/conversations/v3/conversations/threads`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic

| Field | Description |
| --- | --- |
| `"active"` | Whether the channel account is turned on. |
| `"archived"` |  |
| `"archivedAt"` |  |
| `"authorized"` |  |
| `"channelId"` | The ID of the channel that the channel account is an instance of. |
| `"createdAt"` |  |
| `"deliveryIdentifier"` |  |
| `"id"` | The ID of the channel account. |
| `"inboxId"` | The ID of the conversations inbox that contains the channel account. |
| `"name"` | The name of the channel account. |

Operations: List.

API path: `/conversations/v3/conversations/channel-accounts`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

| Field | Description |
| --- | --- |
| `"id"` | The ID of the channel. |
| `"name"` | The name of the channel. |

Operations: List.

API path: `/conversations/v3/conversations/channels`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic3

| Field | Description |
| --- | --- |
| `"archived"` |  |
| `"archivedAt"` |  |
| `"createdAt"` | When the inbox was created. |
| `"id"` | The ID of the inbox. |
| `"name"` | The name of the inbox. |
| `"type"` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `"updatedAt"` |  |

Operations: List.

API path: `/conversations/v3/conversations/inboxes`

#### ConversationsInboxMessagesPublicActor

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/conversations/v3/conversations/actors/{actorId}`

#### ConversationsInboxMessagesPublicChannel

| Field | Description |
| --- | --- |
| `"id"` | The ID of the channel. |
| `"name"` | The name of the channel. |

Operations: Load.

API path: `/conversations/v3/conversations/channels/{channelId}`

#### ConversationsInboxMessagesPublicChannelAccount

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"type"` | The type of identifier. |
| `"value"` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

Operations: Load.

API path: `/conversations/v3/conversations/channel-accounts/{channelAccountId}`

#### ConversationsInboxMessagesPublicInbox

| Field | Description |
| --- | --- |
| `"archived"` |  |
| `"archivedAt"` |  |
| `"createdAt"` | When the inbox was created. |
| `"id"` | The ID of the inbox. |
| `"name"` | The name of the inbox. |
| `"type"` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `"updatedAt"` |  |

Operations: Load.

API path: `/conversations/v3/conversations/inboxes/{inboxId}`

#### ConversationsInboxMessagesPublicMessage

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load.

API path: `/conversations/v3/conversations/threads/{threadId}/messages`

#### ConversationsInboxMessagesPublicMessageContent

| Field | Description |
| --- | --- |
| `"richText"` |  |
| `"text"` |  |

Operations: Load.

API path: `/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content`

#### ConversationsInboxMessagesPublicThread

| Field | Description |
| --- | --- |
| `"archived"` | Whether this thread is archived. |
| `"associatedTicketId"` |  |
| `"id"` |  |
| `"status"` | The thread's status: `OPEN` or `CLOSED`. |

Operations: Load, Update.

API path: `/conversations/v3/conversations/threads/{threadId}`

#### ConversationsPublicActor

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/conversations/conversations/2026-09/actors/{actorId}`

#### ConversationsPublicChannel

| Field | Description |
| --- | --- |
| `"id"` | The ID of the channel. |
| `"name"` | The name of the channel. |

Operations: Load.

API path: `/conversations/conversations/2026-09/channels/{channelId}`

#### ConversationsPublicChannelAccount

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"type"` | The type of identifier. |
| `"value"` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

Operations: Load.

API path: `/conversations/conversations/2026-09/channel-accounts/{channelAccountId}`

#### ConversationsPublicInbox

| Field | Description |
| --- | --- |
| `"archived"` |  |
| `"archivedAt"` |  |
| `"createdAt"` | When the inbox was created. |
| `"id"` | The ID of the inbox. |
| `"name"` | The name of the inbox. |
| `"type"` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `"updatedAt"` |  |

Operations: Load.

API path: `/conversations/conversations/2026-09/inboxes/{inboxId}`

#### ConversationsPublicMessage

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages`

#### ConversationsPublicMessageContent

| Field | Description |
| --- | --- |
| `"richText"` |  |
| `"text"` |  |

Operations: Load.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content`

#### ConversationsPublicThread

| Field | Description |
| --- | --- |
| `"archived"` | Whether this thread is archived. |
| `"associatedTicketId"` |  |
| `"id"` |  |
| `"status"` | The thread's status: `OPEN` or `CLOSED`. |

Operations: Load, Remove, Update.

API path: `/conversations/conversations/2026-09/threads/{threadId}`

#### CustomChannelsCollectionResponseWithTotalPublicChannel

| Field | Description |
| --- | --- |
| `"capabilities"` | An object detailing the capabilities of the channel, with additional properties as objects. |
| `"channelAccountConnectionRedirectUrl"` | A string representing the URL used to redirect for channel account connection. |
| `"channelDescription"` | A string providing a description of the channel. |
| `"channelLogoUrl"` | A string representing the URL of the channel's logo. |
| `"createdAt"` | The date and time when the channel was created, in ISO 8601 format. |
| `"id"` | A string that uniquely identifies the channel. |
| `"name"` | A string representing the name of the channel. |
| `"webhookUrl"` | A string representing the URL to which webhook events will be sent. |

Operations: List.

API path: `/conversations/custom-channels/2026-09`

#### CustomChannelsCollectionResponseWithTotalPublicChannel2

| Field | Description |
| --- | --- |
| `"active"` | A boolean indicating whether the channel account is currently active. |
| `"archived"` | A boolean indicating whether the channel account is archived. |
| `"archivedAt"` | The date and time when the channel account was archived, in ISO 8601 format. |
| `"authorized"` | A boolean indicating whether the channel account is authorized. |
| `"channelId"` | The unique identifier for the channel to which this account belongs, represented as a string. |
| `"createdAt"` | The date and time when the channel account was created, in ISO 8601 format. |
| `"deliveryIdentifier"` |  |
| `"id"` | The unique identifier for this channel account, represented as a string. |
| `"inboxId"` | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `"name"` | The name of the channel account, represented as a string. |

Operations: List.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-accounts`

#### CustomChannelsPublicChannelAccount

| Field | Description |
| --- | --- |
| `"authorized"` | A boolean indicating whether the channel account is authorized. |
| `"deliveryIdentifier"` |  |
| `"id"` |  |
| `"inboxId"` | The unique identifier for the inbox associated with this channel account. |
| `"name"` | The name of the channel account. |
| `"type"` | A string representing the type of delivery identifier. |
| `"value"` | A string representing the value associated with the delivery identifier type. |

Operations: Create, Load, Update.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-accounts`

#### CustomChannelsPublicChannelAccountStagingToken

| Field | Description |
| --- | --- |
| `"accountName"` | A string representing the name of the account associated with the staging token. |
| `"deliveryIdentifier"` |  |
| `"id"` |  |
| `"type"` | A string representing the type of delivery identifier. |
| `"value"` | A string representing the value associated with the delivery identifier type. |

Operations: Update.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}`

#### CustomChannelsPublicChannelIntegrationChannel

| Field | Description |
| --- | --- |
| `"capabilities"` | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `"channelAccountConnectionRedirectUrl"` | A string representing the URL to which users will be redirected to connect their channel account. |
| `"channelDescription"` | A string providing a description of the channel. |
| `"channelLogoUrl"` | A string representing the URL of the channel's logo. |
| `"name"` | A string representing the name of the channel. |
| `"webhookUrl"` | A string representing the URL to which webhook events will be sent. |

Operations: Create, Load, Update.

API path: `/conversations/custom-channels/2026-09`

#### CustomChannelsPublicConversationsMessage

| Field | Description |
| --- | --- |
| `"archived"` | A boolean indicating whether the message is archived. |
| `"associateWithContactId"` | The ID of the contact with which this message should be associated. |
| `"attachments"` | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `"channelAccountId"` | The identifier of the channel account associated with the message. |
| `"channelId"` | The identifier of the channel through which the message was sent. |
| `"client"` |  |
| `"conversationsThreadId"` | The identifier for the conversation thread to which this message belongs. |
| `"createdAt"` | The date and time when the message was created, in ISO 8601 format. |
| `"createdBy"` | The identifier of the user or system that created the message. |
| `"direction"` | The direction of the message, either 'INCOMING' or 'OUTGOING'. |
| `"errorMessage"` | A string containing an error message, if applicable. |
| `"id"` | The unique identifier for the message. |
| `"inReplyToId"` | The identifier of the message to which this message is a reply, if applicable. |
| `"integrationIdempotencyId"` | A unique identifier to ensure idempotency of the message within the integration. |
| `"integrationThreadId"` | A unique identifier for the thread within the integration. |
| `"messageDirection"` | The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'. |
| `"preResolvedContacts"` |  |
| `"recipients"` | An array of recipients of the message, each containing recipient details. |
| `"richText"` | The rich text content of the message, if available. |
| `"senders"` | An array of senders associated with the message, each containing sender details. |
| `"status"` |  |
| `"statusType"` | Valid status are SENT, FAILED, and READ |
| `"subject"` | The subject of the message, if applicable. |
| `"text"` | The plain text content of the message. |
| `"timestamp"` | The date and time when the message was created, in ISO 8601 format. |
| `"truncationStatus"` | Indicates whether the message content is truncated. |
| `"type"` | The type of the message, which is always 'MESSAGE'. |
| `"updatedAt"` | The date and time when the message was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/conversations/custom-channels/2026-09/{channelId}/messages`

#### PublicThread

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/conversations/v3/conversations/threads/{threadId}`

#### Thread

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/conversations/conversations/2026-09/threads/{threadId}`

#### VisitorIdentificationIdentificationToken

| Field | Description |
| --- | --- |
| `"email"` | The email of the visitor that you wish to identify |
| `"firstName"` | The first name of the visitor that you wish to identify. |
| `"hsCustomerAgentContext"` | An object containing additional context about the customer agent. |
| `"lastName"` | The last name of the visitor that you wish to identify. |
| `"token"` | An identification token that allows the visitor to be treated as a known contact. |

Operations: Create.

API path: `/visitor-identification/2026-09/tokens/create`



## Entities


### Channel

Create an instance: `channel := client.Channel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ConversationsBatchResponsePublicActor

Create an instance: `conversationsBatchResponsePublicActor := client.ConversationsBatchResponsePublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` |  |
| `errors` | `[]any` |  |
| `inputs` | `[]any` |  |
| `links` | `map[string]any` |  |
| `numErrors` | `int` |  |
| `requestedAt` | `string` |  |
| `results` | `[]any` |  |
| `startedAt` | `string` |  |
| `status` | `string` |  |

#### Example: Create

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


### ConversationsCollectionResponsePublicMessageForwardPaging

Create an instance: `conversationsCollectionResponsePublicMessageForwardPaging := client.ConversationsCollectionResponsePublicMessageForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `map[string]any` |  |
| `results` | `[]any` |  |

#### Example: List

```go
conversationsCollectionResponsePublicMessageForwardPagings, err := client.ConversationsCollectionResponsePublicMessageForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsCollectionResponsePublicMessageForwardPagings) // the array of records
```


### ConversationsCollectionResponsePublicThreadForwardPaging

Create an instance: `conversationsCollectionResponsePublicThreadForwardPaging := client.ConversationsCollectionResponsePublicThreadForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
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
| `spam` | `bool` | Whether the thread is marked as spam. |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `map[string]any` |  |

#### Example: List

```go
conversationsCollectionResponsePublicThreadForwardPagings, err := client.ConversationsCollectionResponsePublicThreadForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsCollectionResponsePublicThreadForwardPagings) // the array of records
```


### ConversationsCollectionResponseWithTotalPublicChannel

Create an instance: `conversationsCollectionResponseWithTotalPublicChannel := client.ConversationsCollectionResponseWithTotalPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: List

```go
conversationsCollectionResponseWithTotalPublicChannels, err := client.ConversationsCollectionResponseWithTotalPublicChannel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsCollectionResponseWithTotalPublicChannels) // the array of records
```


### ConversationsCollectionResponseWithTotalPublicChannelAccount

Create an instance: `conversationsCollectionResponseWithTotalPublicChannelAccount := client.ConversationsCollectionResponseWithTotalPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the channel account is turned on. |
| `archived` | `bool` |  |
| `archivedAt` | `string` |  |
| `authorized` | `bool` |  |
| `channelId` | `string` | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` |  |
| `deliveryIdentifier` | `map[string]any` |  |
| `id` | `string` | The ID of the channel account. |
| `inboxId` | `string` | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | The name of the channel account. |

#### Example: List

```go
conversationsCollectionResponseWithTotalPublicChannelAccounts, err := client.ConversationsCollectionResponseWithTotalPublicChannelAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsCollectionResponseWithTotalPublicChannelAccounts) // the array of records
```


### ConversationsCollectionResponseWithTotalPublicInbox

Create an instance: `conversationsCollectionResponseWithTotalPublicInbox := client.ConversationsCollectionResponseWithTotalPublicInbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: List

```go
conversationsCollectionResponseWithTotalPublicInboxs, err := client.ConversationsCollectionResponseWithTotalPublicInbox(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsCollectionResponseWithTotalPublicInboxs) // the array of records
```


### ConversationsInboxMessagesBatchResponsePublicActor

Create an instance: `conversationsInboxMessagesBatchResponsePublicActor := client.ConversationsInboxMessagesBatchResponsePublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` |  |
| `inputs` | `[]any` |  |
| `links` | `map[string]any` |  |
| `requestedAt` | `string` |  |
| `results` | `[]any` |  |
| `startedAt` | `string` |  |
| `status` | `string` |  |

#### Example: Create

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


### ConversationsInboxMessagesCollectionResponsePublicMessage

Create an instance: `conversationsInboxMessagesCollectionResponsePublicMessage := client.ConversationsInboxMessagesCollectionResponsePublicMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `map[string]any` |  |
| `results` | `[]any` |  |

#### Example: List

```go
conversationsInboxMessagesCollectionResponsePublicMessages, err := client.ConversationsInboxMessagesCollectionResponsePublicMessage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesCollectionResponsePublicMessages) // the array of records
```


### ConversationsInboxMessagesCollectionResponsePublicThread

Create an instance: `conversationsInboxMessagesCollectionResponsePublicThread := client.ConversationsInboxMessagesCollectionResponsePublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
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
| `spam` | `bool` | Whether the thread is marked as spam. |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |
| `threadAssociations` | `map[string]any` |  |

#### Example: List

```go
conversationsInboxMessagesCollectionResponsePublicThreads, err := client.ConversationsInboxMessagesCollectionResponsePublicThread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesCollectionResponsePublicThreads) // the array of records
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic

Create an instance: `conversationsInboxMessagesCollectionResponseWithTotalPublic := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the channel account is turned on. |
| `archived` | `bool` |  |
| `archivedAt` | `string` |  |
| `authorized` | `bool` |  |
| `channelId` | `string` | The ID of the channel that the channel account is an instance of. |
| `createdAt` | `string` |  |
| `deliveryIdentifier` | `map[string]any` |  |
| `id` | `string` | The ID of the channel account. |
| `inboxId` | `string` | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | The name of the channel account. |

#### Example: List

```go
conversationsInboxMessagesCollectionResponseWithTotalPublics, err := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesCollectionResponseWithTotalPublics) // the array of records
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

Create an instance: `conversationsInboxMessagesCollectionResponseWithTotalPublic2 := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: List

```go
conversationsInboxMessagesCollectionResponseWithTotalPublic2s, err := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesCollectionResponseWithTotalPublic2s) // the array of records
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic3

Create an instance: `conversationsInboxMessagesCollectionResponseWithTotalPublic3 := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: List

```go
conversationsInboxMessagesCollectionResponseWithTotalPublic3s, err := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesCollectionResponseWithTotalPublic3s) // the array of records
```


### ConversationsInboxMessagesPublicActor

Create an instance: `conversationsInboxMessagesPublicActor := client.ConversationsInboxMessagesPublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
conversationsInboxMessagesPublicActor, err := client.ConversationsInboxMessagesPublicActor(nil).Load(map[string]any{"id": "conversations_inbox_messages_public_actor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicActor) // the loaded record
```


### ConversationsInboxMessagesPublicChannel

Create an instance: `conversationsInboxMessagesPublicChannel := client.ConversationsInboxMessagesPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: Load

```go
conversationsInboxMessagesPublicChannel, err := client.ConversationsInboxMessagesPublicChannel(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicChannel) // the loaded record
```


### ConversationsInboxMessagesPublicChannelAccount

Create an instance: `conversationsInboxMessagesPublicChannelAccount := client.ConversationsInboxMessagesPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `type` | `string` | The type of identifier. |
| `value` | `string` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

#### Example: Load

```go
conversationsInboxMessagesPublicChannelAccount, err := client.ConversationsInboxMessagesPublicChannelAccount(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicChannelAccount) // the loaded record
```


### ConversationsInboxMessagesPublicInbox

Create an instance: `conversationsInboxMessagesPublicInbox := client.ConversationsInboxMessagesPublicInbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: Load

```go
conversationsInboxMessagesPublicInbox, err := client.ConversationsInboxMessagesPublicInbox(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicInbox) // the loaded record
```


### ConversationsInboxMessagesPublicMessage

Create an instance: `conversationsInboxMessagesPublicMessage := client.ConversationsInboxMessagesPublicMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
conversationsInboxMessagesPublicMessage, err := client.ConversationsInboxMessagesPublicMessage(nil).Load(map[string]any{"id": "conversations_inbox_messages_public_message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicMessage) // the loaded record
```

#### Example: Create

```go
result, err := client.ConversationsInboxMessagesPublicMessage(nil).Create(map[string]any{
    "thread_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ConversationsInboxMessagesPublicMessageContent

Create an instance: `conversationsInboxMessagesPublicMessageContent := client.ConversationsInboxMessagesPublicMessageContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `richText` | `string` |  |
| `text` | `string` |  |

#### Example: Load

```go
conversationsInboxMessagesPublicMessageContent, err := client.ConversationsInboxMessagesPublicMessageContent(nil).Load(map[string]any{"message_id": "message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicMessageContent) // the loaded record
```


### ConversationsInboxMessagesPublicThread

Create an instance: `conversationsInboxMessagesPublicThread := client.ConversationsInboxMessagesPublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
| `associatedTicketId` | `string` |  |
| `id` | `string` |  |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |

#### Example: Load

```go
conversationsInboxMessagesPublicThread, err := client.ConversationsInboxMessagesPublicThread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsInboxMessagesPublicThread) // the loaded record
```


### ConversationsPublicActor

Create an instance: `conversationsPublicActor := client.ConversationsPublicActor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
conversationsPublicActor, err := client.ConversationsPublicActor(nil).Load(map[string]any{"id": "conversations_public_actor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicActor) // the loaded record
```


### ConversationsPublicChannel

Create an instance: `conversationsPublicChannel := client.ConversationsPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the channel. |
| `name` | `string` | The name of the channel. |

#### Example: Load

```go
conversationsPublicChannel, err := client.ConversationsPublicChannel(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicChannel) // the loaded record
```


### ConversationsPublicChannelAccount

Create an instance: `conversationsPublicChannelAccount := client.ConversationsPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `type` | `string` | The type of identifier. |
| `value` | `string` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

#### Example: Load

```go
conversationsPublicChannelAccount, err := client.ConversationsPublicChannelAccount(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicChannelAccount) // the loaded record
```


### ConversationsPublicInbox

Create an instance: `conversationsPublicInbox := client.ConversationsPublicInbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `archivedAt` | `string` |  |
| `createdAt` | `string` | When the inbox was created. |
| `id` | `string` | The ID of the inbox. |
| `name` | `string` | The name of the inbox. |
| `type` | `string` | Specifies whether this refers to a Conversations Inbox or to the Help Desk. |
| `updatedAt` | `string` |  |

#### Example: Load

```go
conversationsPublicInbox, err := client.ConversationsPublicInbox(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicInbox) // the loaded record
```


### ConversationsPublicMessage

Create an instance: `conversationsPublicMessage := client.ConversationsPublicMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
conversationsPublicMessage, err := client.ConversationsPublicMessage(nil).Load(map[string]any{"id": "conversations_public_message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicMessage) // the loaded record
```

#### Example: Create

```go
result, err := client.ConversationsPublicMessage(nil).Create(map[string]any{
    "thread_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ConversationsPublicMessageContent

Create an instance: `conversationsPublicMessageContent := client.ConversationsPublicMessageContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `richText` | `string` |  |
| `text` | `string` |  |

#### Example: Load

```go
conversationsPublicMessageContent, err := client.ConversationsPublicMessageContent(nil).Load(map[string]any{"message_id": "message_id", "thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicMessageContent) // the loaded record
```


### ConversationsPublicThread

Create an instance: `conversationsPublicThread := client.ConversationsPublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether this thread is archived. |
| `associatedTicketId` | `string` |  |
| `id` | `string` |  |
| `status` | `string` | The thread's status: `OPEN` or `CLOSED`. |

#### Example: Load

```go
conversationsPublicThread, err := client.ConversationsPublicThread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationsPublicThread) // the loaded record
```


### CustomChannelsCollectionResponseWithTotalPublicChannel

Create an instance: `customChannelsCollectionResponseWithTotalPublicChannel := client.CustomChannelsCollectionResponseWithTotalPublicChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `map[string]any` | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | A string that uniquely identifies the channel. |
| `name` | `string` | A string representing the name of the channel. |
| `webhookUrl` | `string` | A string representing the URL to which webhook events will be sent. |

#### Example: List

```go
customChannelsCollectionResponseWithTotalPublicChannels, err := client.CustomChannelsCollectionResponseWithTotalPublicChannel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customChannelsCollectionResponseWithTotalPublicChannels) // the array of records
```


### CustomChannelsCollectionResponseWithTotalPublicChannel2

Create an instance: `customChannelsCollectionResponseWithTotalPublicChannel2 := client.CustomChannelsCollectionResponseWithTotalPublicChannel2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | A boolean indicating whether the channel account is currently active. |
| `archived` | `bool` | A boolean indicating whether the channel account is archived. |
| `archivedAt` | `string` | The date and time when the channel account was archived, in ISO 8601 format. |
| `authorized` | `bool` | A boolean indicating whether the channel account is authorized. |
| `channelId` | `string` | The unique identifier for the channel to which this account belongs, represented as a string. |
| `createdAt` | `string` | The date and time when the channel account was created, in ISO 8601 format. |
| `deliveryIdentifier` | `map[string]any` |  |
| `id` | `string` | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | The name of the channel account, represented as a string. |

#### Example: List

```go
customChannelsCollectionResponseWithTotalPublicChannel2s, err := client.CustomChannelsCollectionResponseWithTotalPublicChannel2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customChannelsCollectionResponseWithTotalPublicChannel2s) // the array of records
```


### CustomChannelsPublicChannelAccount

Create an instance: `customChannelsPublicChannelAccount := client.CustomChannelsPublicChannelAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorized` | `bool` | A boolean indicating whether the channel account is authorized. |
| `deliveryIdentifier` | `map[string]any` |  |
| `id` | `string` |  |
| `inboxId` | `string` | The unique identifier for the inbox associated with this channel account. |
| `name` | `string` | The name of the channel account. |
| `type` | `string` | A string representing the type of delivery identifier. |
| `value` | `string` | A string representing the value associated with the delivery identifier type. |

#### Example: Load

```go
customChannelsPublicChannelAccount, err := client.CustomChannelsPublicChannelAccount(nil).Load(map[string]any{"id": 1, "channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customChannelsPublicChannelAccount) // the loaded record
```

#### Example: Create

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


### CustomChannelsPublicChannelAccountStagingToken

Create an instance: `customChannelsPublicChannelAccountStagingToken := client.CustomChannelsPublicChannelAccountStagingToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountName` | `string` | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `map[string]any` |  |
| `id` | `string` |  |
| `type` | `string` | A string representing the type of delivery identifier. |
| `value` | `string` | A string representing the value associated with the delivery identifier type. |


### CustomChannelsPublicChannelIntegrationChannel

Create an instance: `customChannelsPublicChannelIntegrationChannel := client.CustomChannelsPublicChannelIntegrationChannel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `map[string]any` | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | `string` | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | `string` | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | A string representing the URL of the channel's logo. |
| `name` | `string` | A string representing the name of the channel. |
| `webhookUrl` | `string` | A string representing the URL to which webhook events will be sent. |

#### Example: Load

```go
customChannelsPublicChannelIntegrationChannel, err := client.CustomChannelsPublicChannelIntegrationChannel(nil).Load(map[string]any{"channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customChannelsPublicChannelIntegrationChannel) // the loaded record
```

#### Example: Create

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


### CustomChannelsPublicConversationsMessage

Create an instance: `customChannelsPublicConversationsMessage := client.CustomChannelsPublicConversationsMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the message is archived. |
| `associateWithContactId` | `int` | The ID of the contact with which this message should be associated. |
| `attachments` | `[]any` | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | The identifier of the channel account associated with the message. |
| `channelId` | `string` | The identifier of the channel through which the message was sent. |
| `client` | `map[string]any` |  |
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
| `preResolvedContacts` | `map[string]any` |  |
| `recipients` | `[]any` | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | The rich text content of the message, if available. |
| `senders` | `[]any` | An array of senders associated with the message, each containing sender details. |
| `status` | `map[string]any` |  |
| `statusType` | `string` | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | The subject of the message, if applicable. |
| `text` | `string` | The plain text content of the message. |
| `timestamp` | `string` | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Indicates whether the message content is truncated. |
| `type` | `string` | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | The date and time when the message was last updated, in ISO 8601 format. |

#### Example: Load

```go
customChannelsPublicConversationsMessage, err := client.CustomChannelsPublicConversationsMessage(nil).Load(map[string]any{"id": "custom_channels_public_conversations_message_id", "channel_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customChannelsPublicConversationsMessage) // the loaded record
```

#### Example: Create

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


### PublicThread

Create an instance: `publicThread := client.PublicThread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Thread

Create an instance: `thread := client.Thread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### VisitorIdentificationIdentificationToken

Create an instance: `visitorIdentificationIdentificationToken := client.VisitorIdentificationIdentificationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email of the visitor that you wish to identify |
| `firstName` | `string` | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `map[string]any` | An object containing additional context about the customer agent. |
| `lastName` | `string` | The last name of the visitor that you wish to identify. |
| `token` | `string` | An identification token that allows the visitor to be treated as a known contact. |

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-conversations-sdk/go/
├── hubspot-conversations.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-conversations-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
conversationsinboxmessagespublicthread := client.ConversationsInboxMessagesPublicThread(nil)
conversationsinboxmessagespublicthread.Load(map[string]any{"id": 1}, nil)

// conversationsinboxmessagespublicthread.Data() now returns the conversationsinboxmessagespublicthread data from the last load
// conversationsinboxmessagespublicthread.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
