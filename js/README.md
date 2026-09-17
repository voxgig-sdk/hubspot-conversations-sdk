# HubspotConversations JavaScript SDK



The JavaScript SDK for the HubspotConversations API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Channel()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install hubspot-conversations
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { HubspotConversationsSDK } = require('@voxgig-sdk/hubspot-conversations-js')

const client = new HubspotConversationsSDK({
  apikey: process.env.HUBSPOT_CONVERSATIONS_APIKEY,
})
```

### Remove a Channel

```js
await client.Channel().remove({ channel_id: 1 })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const conversationsinboxmessagespublicthread = await client.ConversationsInboxMessagesPublicThread().load({ id: 1 })
  console.log(conversationsinboxmessagespublicthread)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = HubspotConversationsSDK.test()

const conversationsinboxmessagespublicthread = await client.ConversationsInboxMessagesPublicThread().load({ id: 1 })
// conversationsinboxmessagespublicthread is the entity, populated with mock response data
// — call conversationsinboxmessagespublicthread.data() for the record itself
console.log(conversationsinboxmessagespublicthread)
```

You can also use the instance method:

```js
const client = new HubspotConversationsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.ConversationsInboxMessagesPublicThread()

// First call runs the operation and stores its result
await entity.load({ id: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HubspotConversationsSDK({
  apikey: '...',
  extend: [logger],
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
cd js && npm test
```


## Reference

### HubspotConversationsSDK

#### Constructor

```js
new HubspotConversationsSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Channel(data?)` | `ChannelEntity` | Create a Channel entity instance. |
| `ConversationsBatchResponsePublicActor(data?)` | `ConversationsBatchResponsePublicActorEntity` | Create a ConversationsBatchResponsePublicActor entity instance. |
| `ConversationsCollectionResponsePublicMessageForwardPaging(data?)` | `ConversationsCollectionResponsePublicMessageForwardPagingEntity` | Create a ConversationsCollectionResponsePublicMessageForwardPaging entity instance. |
| `ConversationsCollectionResponsePublicThreadForwardPaging(data?)` | `ConversationsCollectionResponsePublicThreadForwardPagingEntity` | Create a ConversationsCollectionResponsePublicThreadForwardPaging entity instance. |
| `ConversationsCollectionResponseWithTotalPublicChannel(data?)` | `ConversationsCollectionResponseWithTotalPublicChannelEntity` | Create a ConversationsCollectionResponseWithTotalPublicChannel entity instance. |
| `ConversationsCollectionResponseWithTotalPublicChannelAccount(data?)` | `ConversationsCollectionResponseWithTotalPublicChannelAccountEntity` | Create a ConversationsCollectionResponseWithTotalPublicChannelAccount entity instance. |
| `ConversationsCollectionResponseWithTotalPublicInbox(data?)` | `ConversationsCollectionResponseWithTotalPublicInboxEntity` | Create a ConversationsCollectionResponseWithTotalPublicInbox entity instance. |
| `ConversationsInboxMessagesBatchResponsePublicActor(data?)` | `ConversationsInboxMessagesBatchResponsePublicActorEntity` | Create a ConversationsInboxMessagesBatchResponsePublicActor entity instance. |
| `ConversationsInboxMessagesCollectionResponsePublicMessage(data?)` | `ConversationsInboxMessagesCollectionResponsePublicMessageEntity` | Create a ConversationsInboxMessagesCollectionResponsePublicMessage entity instance. |
| `ConversationsInboxMessagesCollectionResponsePublicThread(data?)` | `ConversationsInboxMessagesCollectionResponsePublicThreadEntity` | Create a ConversationsInboxMessagesCollectionResponsePublicThread entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic(data?)` | `ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data?)` | `ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic2 entity instance. |
| `ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data?)` | `ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity` | Create a ConversationsInboxMessagesCollectionResponseWithTotalPublic3 entity instance. |
| `ConversationsInboxMessagesPublicActor(data?)` | `ConversationsInboxMessagesPublicActorEntity` | Create a ConversationsInboxMessagesPublicActor entity instance. |
| `ConversationsInboxMessagesPublicChannel(data?)` | `ConversationsInboxMessagesPublicChannelEntity` | Create a ConversationsInboxMessagesPublicChannel entity instance. |
| `ConversationsInboxMessagesPublicChannelAccount(data?)` | `ConversationsInboxMessagesPublicChannelAccountEntity` | Create a ConversationsInboxMessagesPublicChannelAccount entity instance. |
| `ConversationsInboxMessagesPublicInbox(data?)` | `ConversationsInboxMessagesPublicInboxEntity` | Create a ConversationsInboxMessagesPublicInbox entity instance. |
| `ConversationsInboxMessagesPublicMessage(data?)` | `ConversationsInboxMessagesPublicMessageEntity` | Create a ConversationsInboxMessagesPublicMessage entity instance. |
| `ConversationsInboxMessagesPublicMessageContent(data?)` | `ConversationsInboxMessagesPublicMessageContentEntity` | Create a ConversationsInboxMessagesPublicMessageContent entity instance. |
| `ConversationsInboxMessagesPublicThread(data?)` | `ConversationsInboxMessagesPublicThreadEntity` | Create a ConversationsInboxMessagesPublicThread entity instance. |
| `ConversationsPublicActor(data?)` | `ConversationsPublicActorEntity` | Create a ConversationsPublicActor entity instance. |
| `ConversationsPublicChannel(data?)` | `ConversationsPublicChannelEntity` | Create a ConversationsPublicChannel entity instance. |
| `ConversationsPublicChannelAccount(data?)` | `ConversationsPublicChannelAccountEntity` | Create a ConversationsPublicChannelAccount entity instance. |
| `ConversationsPublicInbox(data?)` | `ConversationsPublicInboxEntity` | Create a ConversationsPublicInbox entity instance. |
| `ConversationsPublicMessage(data?)` | `ConversationsPublicMessageEntity` | Create a ConversationsPublicMessage entity instance. |
| `ConversationsPublicMessageContent(data?)` | `ConversationsPublicMessageContentEntity` | Create a ConversationsPublicMessageContent entity instance. |
| `ConversationsPublicThread(data?)` | `ConversationsPublicThreadEntity` | Create a ConversationsPublicThread entity instance. |
| `CustomChannelsCollectionResponseWithTotalPublicChannel(data?)` | `CustomChannelsCollectionResponseWithTotalPublicChannelEntity` | Create a CustomChannelsCollectionResponseWithTotalPublicChannel entity instance. |
| `CustomChannelsCollectionResponseWithTotalPublicChannel2(data?)` | `CustomChannelsCollectionResponseWithTotalPublicChannel2Entity` | Create a CustomChannelsCollectionResponseWithTotalPublicChannel2 entity instance. |
| `CustomChannelsPublicChannelAccount(data?)` | `CustomChannelsPublicChannelAccountEntity` | Create a CustomChannelsPublicChannelAccount entity instance. |
| `CustomChannelsPublicChannelAccountStagingToken(data?)` | `CustomChannelsPublicChannelAccountStagingTokenEntity` | Create a CustomChannelsPublicChannelAccountStagingToken entity instance. |
| `CustomChannelsPublicChannelIntegrationChannel(data?)` | `CustomChannelsPublicChannelIntegrationChannelEntity` | Create a CustomChannelsPublicChannelIntegrationChannel entity instance. |
| `CustomChannelsPublicConversationsMessage(data?)` | `CustomChannelsPublicConversationsMessageEntity` | Create a CustomChannelsPublicConversationsMessage entity instance. |
| `PublicThread(data?)` | `PublicThreadEntity` | Create a PublicThread entity instance. |
| `Thread(data?)` | `ThreadEntity` | Create a Thread entity instance. |
| `VisitorIdentificationIdentificationToken(data?)` | `VisitorIdentificationIdentificationTokenEntity` | Create a VisitorIdentificationIdentificationToken entity instance. |
| `tester(testopts?, sdkopts?)` | `HubspotConversationsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HubspotConversationsSDK.test(testopts?, sdkopts?)` | `HubspotConversationsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HubspotConversationsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### Channel

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create.

API path: `/conversations/conversations/2026-09/actors/batch/read`

#### ConversationsCollectionResponsePublicMessageForwardPaging

| Field | Description |
| --- | --- |
| `paging` |  |
| `results` |  |

Operations: list.

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

Operations: list.

API path: `/conversations/conversations/2026-09/threads`

#### ConversationsCollectionResponseWithTotalPublicChannel

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: list.

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

Operations: list.

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

Operations: list.

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

Operations: create.

API path: `/conversations/v3/conversations/actors/batch/read`

#### ConversationsInboxMessagesCollectionResponsePublicMessage

| Field | Description |
| --- | --- |
| `paging` |  |
| `results` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/conversations/v3/conversations/channel-accounts`

#### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: list.

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

Operations: list.

API path: `/conversations/v3/conversations/inboxes`

#### ConversationsInboxMessagesPublicActor

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/conversations/v3/conversations/actors/{actorId}`

#### ConversationsInboxMessagesPublicChannel

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: load.

API path: `/conversations/v3/conversations/channels/{channelId}`

#### ConversationsInboxMessagesPublicChannelAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `type` | The type of identifier. |
| `value` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

Operations: load.

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

Operations: load.

API path: `/conversations/v3/conversations/inboxes/{inboxId}`

#### ConversationsInboxMessagesPublicMessage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load.

API path: `/conversations/v3/conversations/threads/{threadId}/messages`

#### ConversationsInboxMessagesPublicMessageContent

| Field | Description |
| --- | --- |
| `richText` |  |
| `text` |  |

Operations: load.

API path: `/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content`

#### ConversationsInboxMessagesPublicThread

| Field | Description |
| --- | --- |
| `archived` | Whether this thread is archived. |
| `associatedTicketId` |  |
| `id` |  |
| `status` | The thread's status: `OPEN` or `CLOSED`. |

Operations: load, update.

API path: `/conversations/v3/conversations/threads/{threadId}`

#### ConversationsPublicActor

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/conversations/conversations/2026-09/actors/{actorId}`

#### ConversationsPublicChannel

| Field | Description |
| --- | --- |
| `id` | The ID of the channel. |
| `name` | The name of the channel. |

Operations: load.

API path: `/conversations/conversations/2026-09/channels/{channelId}`

#### ConversationsPublicChannelAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `type` | The type of identifier. |
| `value` | A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier. |

Operations: load.

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

Operations: load.

API path: `/conversations/conversations/2026-09/inboxes/{inboxId}`

#### ConversationsPublicMessage

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages`

#### ConversationsPublicMessageContent

| Field | Description |
| --- | --- |
| `richText` |  |
| `text` |  |

Operations: load.

API path: `/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content`

#### ConversationsPublicThread

| Field | Description |
| --- | --- |
| `archived` | Whether this thread is archived. |
| `associatedTicketId` |  |
| `id` |  |
| `status` | The thread's status: `OPEN` or `CLOSED`. |

Operations: load, remove, update.

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

Operations: list.

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

Operations: list.

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

Operations: create, load, update.

API path: `/conversations/custom-channels/2026-09/{channelId}/channel-accounts`

#### CustomChannelsPublicChannelAccountStagingToken

| Field | Description |
| --- | --- |
| `accountName` | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` |  |
| `id` |  |
| `type` | A string representing the type of delivery identifier. |
| `value` | A string representing the value associated with the delivery identifier type. |

Operations: update.

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

Operations: create, load, update.

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

Operations: create, load, update.

API path: `/conversations/custom-channels/2026-09/{channelId}/messages`

#### PublicThread

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/conversations/v3/conversations/threads/{threadId}`

#### Thread

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/conversations/conversations/2026-09/threads/{threadId}`

#### VisitorIdentificationIdentificationToken

| Field | Description |
| --- | --- |
| `email` | The email of the visitor that you wish to identify |
| `firstName` | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | An object containing additional context about the customer agent. |
| `lastName` | The last name of the visitor that you wish to identify. |
| `token` | An identification token that allows the visitor to be treated as a known contact. |

Operations: create.

API path: `/visitor-identification/2026-09/tokens/create`



## Entities


### Channel

Create an instance: `const channel = client.Channel()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ConversationsBatchResponsePublicActor

Create an instance: `const conversations_batch_response_public_actor = client.ConversationsBatchResponsePublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` |  |
| `errors` | `Array` |  |
| `inputs` | `Array` |  |
| `links` | `Object` |  |
| `numErrors` | `number` |  |
| `requestedAt` | `string` |  |
| `results` | `Array` |  |
| `startedAt` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```ts
const conversations_batch_response_public_actor = await client.ConversationsBatchResponsePublicActor().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### ConversationsCollectionResponsePublicMessageForwardPaging

Create an instance: `const conversations_collection_response_public_message_forward_paging = client.ConversationsCollectionResponsePublicMessageForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `Object` |  |
| `results` | `Array` |  |

#### Example: List

```ts
const conversations_collection_response_public_message_forward_pagings = await client.ConversationsCollectionResponsePublicMessageForwardPaging().list({ thread_id: 1 })
```


### ConversationsCollectionResponsePublicThreadForwardPaging

Create an instance: `const conversations_collection_response_public_thread_forward_paging = client.ConversationsCollectionResponsePublicThreadForwardPaging()`

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
| `threadAssociations` | `Object` |  |

#### Example: List

```ts
const conversations_collection_response_public_thread_forward_pagings = await client.ConversationsCollectionResponsePublicThreadForwardPaging().list()
```


### ConversationsCollectionResponseWithTotalPublicChannel

Create an instance: `const conversations_collection_response_with_total_public_channel = client.ConversationsCollectionResponseWithTotalPublicChannel()`

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

```ts
const conversations_collection_response_with_total_public_channels = await client.ConversationsCollectionResponseWithTotalPublicChannel().list()
```


### ConversationsCollectionResponseWithTotalPublicChannelAccount

Create an instance: `const conversations_collection_response_with_total_public_channel_account = client.ConversationsCollectionResponseWithTotalPublicChannelAccount()`

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
| `deliveryIdentifier` | `Object` |  |
| `id` | `string` | The ID of the channel account. |
| `inboxId` | `string` | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | The name of the channel account. |

#### Example: List

```ts
const conversations_collection_response_with_total_public_channel_accounts = await client.ConversationsCollectionResponseWithTotalPublicChannelAccount().list()
```


### ConversationsCollectionResponseWithTotalPublicInbox

Create an instance: `const conversations_collection_response_with_total_public_inbox = client.ConversationsCollectionResponseWithTotalPublicInbox()`

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

```ts
const conversations_collection_response_with_total_public_inboxs = await client.ConversationsCollectionResponseWithTotalPublicInbox().list()
```


### ConversationsInboxMessagesBatchResponsePublicActor

Create an instance: `const conversations_inbox_messages_batch_response_public_actor = client.ConversationsInboxMessagesBatchResponsePublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` |  |
| `inputs` | `Array` |  |
| `links` | `Object` |  |
| `requestedAt` | `string` |  |
| `results` | `Array` |  |
| `startedAt` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```ts
const conversations_inbox_messages_batch_response_public_actor = await client.ConversationsInboxMessagesBatchResponsePublicActor().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### ConversationsInboxMessagesCollectionResponsePublicMessage

Create an instance: `const conversations_inbox_messages_collection_response_public_message = client.ConversationsInboxMessagesCollectionResponsePublicMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `Object` |  |
| `results` | `Array` |  |

#### Example: List

```ts
const conversations_inbox_messages_collection_response_public_messages = await client.ConversationsInboxMessagesCollectionResponsePublicMessage().list({ thread_id: 1 })
```


### ConversationsInboxMessagesCollectionResponsePublicThread

Create an instance: `const conversations_inbox_messages_collection_response_public_thread = client.ConversationsInboxMessagesCollectionResponsePublicThread()`

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
| `threadAssociations` | `Object` |  |

#### Example: List

```ts
const conversations_inbox_messages_collection_response_public_threads = await client.ConversationsInboxMessagesCollectionResponsePublicThread().list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic

Create an instance: `const conversations_inbox_messages_collection_response_with_total_public = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic()`

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
| `deliveryIdentifier` | `Object` |  |
| `id` | `string` | The ID of the channel account. |
| `inboxId` | `string` | The ID of the conversations inbox that contains the channel account. |
| `name` | `string` | The name of the channel account. |

#### Example: List

```ts
const conversations_inbox_messages_collection_response_with_total_publics = await client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic2

Create an instance: `const conversations_inbox_messages_collection_response_with_total_public2 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2()`

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

```ts
const conversations_inbox_messages_collection_response_with_total_public2s = await client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().list()
```


### ConversationsInboxMessagesCollectionResponseWithTotalPublic3

Create an instance: `const conversations_inbox_messages_collection_response_with_total_public3 = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3()`

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

```ts
const conversations_inbox_messages_collection_response_with_total_public3s = await client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().list()
```


### ConversationsInboxMessagesPublicActor

Create an instance: `const conversations_inbox_messages_public_actor = client.ConversationsInboxMessagesPublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const conversations_inbox_messages_public_actor = await client.ConversationsInboxMessagesPublicActor().load({ id: 'conversations_inbox_messages_public_actor_id' })
```


### ConversationsInboxMessagesPublicChannel

Create an instance: `const conversations_inbox_messages_public_channel = client.ConversationsInboxMessagesPublicChannel()`

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

```ts
const conversations_inbox_messages_public_channel = await client.ConversationsInboxMessagesPublicChannel().load({ id: 1 })
```


### ConversationsInboxMessagesPublicChannelAccount

Create an instance: `const conversations_inbox_messages_public_channel_account = client.ConversationsInboxMessagesPublicChannelAccount()`

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

```ts
const conversations_inbox_messages_public_channel_account = await client.ConversationsInboxMessagesPublicChannelAccount().load({ id: 1 })
```


### ConversationsInboxMessagesPublicInbox

Create an instance: `const conversations_inbox_messages_public_inbox = client.ConversationsInboxMessagesPublicInbox()`

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

```ts
const conversations_inbox_messages_public_inbox = await client.ConversationsInboxMessagesPublicInbox().load({ id: 1 })
```


### ConversationsInboxMessagesPublicMessage

Create an instance: `const conversations_inbox_messages_public_message = client.ConversationsInboxMessagesPublicMessage()`

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

```ts
const conversations_inbox_messages_public_message = await client.ConversationsInboxMessagesPublicMessage().load({ id: 'conversations_inbox_messages_public_message_id', thread_id: 1 })
```

#### Example: Create

```ts
const conversations_inbox_messages_public_message = await client.ConversationsInboxMessagesPublicMessage().create({
  thread_id: 1,
})
```


### ConversationsInboxMessagesPublicMessageContent

Create an instance: `const conversations_inbox_messages_public_message_content = client.ConversationsInboxMessagesPublicMessageContent()`

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

```ts
const conversations_inbox_messages_public_message_content = await client.ConversationsInboxMessagesPublicMessageContent().load({ message_id: 'message_id', thread_id: 1 })
```


### ConversationsInboxMessagesPublicThread

Create an instance: `const conversations_inbox_messages_public_thread = client.ConversationsInboxMessagesPublicThread()`

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

```ts
const conversations_inbox_messages_public_thread = await client.ConversationsInboxMessagesPublicThread().load({ id: 1 })
```


### ConversationsPublicActor

Create an instance: `const conversations_public_actor = client.ConversationsPublicActor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const conversations_public_actor = await client.ConversationsPublicActor().load({ id: 'conversations_public_actor_id' })
```


### ConversationsPublicChannel

Create an instance: `const conversations_public_channel = client.ConversationsPublicChannel()`

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

```ts
const conversations_public_channel = await client.ConversationsPublicChannel().load({ id: 1 })
```


### ConversationsPublicChannelAccount

Create an instance: `const conversations_public_channel_account = client.ConversationsPublicChannelAccount()`

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

```ts
const conversations_public_channel_account = await client.ConversationsPublicChannelAccount().load({ id: 1 })
```


### ConversationsPublicInbox

Create an instance: `const conversations_public_inbox = client.ConversationsPublicInbox()`

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

```ts
const conversations_public_inbox = await client.ConversationsPublicInbox().load({ id: 1 })
```


### ConversationsPublicMessage

Create an instance: `const conversations_public_message = client.ConversationsPublicMessage()`

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

```ts
const conversations_public_message = await client.ConversationsPublicMessage().load({ id: 'conversations_public_message_id', thread_id: 1 })
```

#### Example: Create

```ts
const conversations_public_message = await client.ConversationsPublicMessage().create({
  thread_id: 1,
})
```


### ConversationsPublicMessageContent

Create an instance: `const conversations_public_message_content = client.ConversationsPublicMessageContent()`

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

```ts
const conversations_public_message_content = await client.ConversationsPublicMessageContent().load({ message_id: 'message_id', thread_id: 1 })
```


### ConversationsPublicThread

Create an instance: `const conversations_public_thread = client.ConversationsPublicThread()`

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

```ts
const conversations_public_thread = await client.ConversationsPublicThread().load({ id: 1 })
```


### CustomChannelsCollectionResponseWithTotalPublicChannel

Create an instance: `const custom_channels_collection_response_with_total_public_channel = client.CustomChannelsCollectionResponseWithTotalPublicChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `Object` | An object detailing the capabilities of the channel, with additional properties as objects. |
| `channelAccountConnectionRedirectUrl` | `string` | A string representing the URL used to redirect for channel account connection. |
| `channelDescription` | `string` | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | A string representing the URL of the channel's logo. |
| `createdAt` | `string` | The date and time when the channel was created, in ISO 8601 format. |
| `id` | `string` | A string that uniquely identifies the channel. |
| `name` | `string` | A string representing the name of the channel. |
| `webhookUrl` | `string` | A string representing the URL to which webhook events will be sent. |

#### Example: List

```ts
const custom_channels_collection_response_with_total_public_channels = await client.CustomChannelsCollectionResponseWithTotalPublicChannel().list()
```


### CustomChannelsCollectionResponseWithTotalPublicChannel2

Create an instance: `const custom_channels_collection_response_with_total_public_channel2 = client.CustomChannelsCollectionResponseWithTotalPublicChannel2()`

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
| `deliveryIdentifier` | `Object` |  |
| `id` | `string` | The unique identifier for this channel account, represented as a string. |
| `inboxId` | `string` | The unique identifier for the inbox associated with this channel account, represented as a string. |
| `name` | `string` | The name of the channel account, represented as a string. |

#### Example: List

```ts
const custom_channels_collection_response_with_total_public_channel2s = await client.CustomChannelsCollectionResponseWithTotalPublicChannel2().list({ channel_id: 1 })
```


### CustomChannelsPublicChannelAccount

Create an instance: `const custom_channels_public_channel_account = client.CustomChannelsPublicChannelAccount()`

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
| `deliveryIdentifier` | `Object` |  |
| `id` | `string` |  |
| `inboxId` | `string` | The unique identifier for the inbox associated with this channel account. |
| `name` | `string` | The name of the channel account. |
| `type` | `string` | A string representing the type of delivery identifier. |
| `value` | `string` | A string representing the value associated with the delivery identifier type. |

#### Example: Load

```ts
const custom_channels_public_channel_account = await client.CustomChannelsPublicChannelAccount().load({ id: 1, channel_id: 1 })
```

#### Example: Create

```ts
const custom_channels_public_channel_account = await client.CustomChannelsPublicChannelAccount().create({
  channel_id: 1,
  authorized: true,
  deliveryIdentifier: {},
  inboxId: 'example_inboxId',
  name: 'example_name',
  type: 'example_type',
  value: 'example_value',
})
```


### CustomChannelsPublicChannelAccountStagingToken

Create an instance: `const custom_channels_public_channel_account_staging_token = client.CustomChannelsPublicChannelAccountStagingToken()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountName` | `string` | A string representing the name of the account associated with the staging token. |
| `deliveryIdentifier` | `Object` |  |
| `id` | `string` |  |
| `type` | `string` | A string representing the type of delivery identifier. |
| `value` | `string` | A string representing the value associated with the delivery identifier type. |


### CustomChannelsPublicChannelIntegrationChannel

Create an instance: `const custom_channels_public_channel_integration_channel = client.CustomChannelsPublicChannelIntegrationChannel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `Object` | An object that defines the capabilities of the channel, with additional properties as key-value pairs. |
| `channelAccountConnectionRedirectUrl` | `string` | A string representing the URL to which users will be redirected to connect their channel account. |
| `channelDescription` | `string` | A string providing a description of the channel. |
| `channelLogoUrl` | `string` | A string representing the URL of the channel's logo. |
| `name` | `string` | A string representing the name of the channel. |
| `webhookUrl` | `string` | A string representing the URL to which webhook events will be sent. |

#### Example: Load

```ts
const custom_channels_public_channel_integration_channel = await client.CustomChannelsPublicChannelIntegrationChannel().load({ channel_id: 1 })
```

#### Example: Create

```ts
const custom_channels_public_channel_integration_channel = await client.CustomChannelsPublicChannelIntegrationChannel().create({
  capabilities: {},
  name: 'example_name',
})
```


### CustomChannelsPublicConversationsMessage

Create an instance: `const custom_channels_public_conversations_message = client.CustomChannelsPublicConversationsMessage()`

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
| `attachments` | `Array` | An array of attachments included with the message, which can be files, locations, contacts, or other supported types. |
| `channelAccountId` | `string` | The identifier of the channel account associated with the message. |
| `channelId` | `string` | The identifier of the channel through which the message was sent. |
| `client` | `Object` |  |
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
| `preResolvedContacts` | `Object` |  |
| `recipients` | `Array` | An array of recipients of the message, each containing recipient details. |
| `richText` | `string` | The rich text content of the message, if available. |
| `senders` | `Array` | An array of senders associated with the message, each containing sender details. |
| `status` | `Object` |  |
| `statusType` | `string` | Valid status are SENT, FAILED, and READ |
| `subject` | `string` | The subject of the message, if applicable. |
| `text` | `string` | The plain text content of the message. |
| `timestamp` | `string` | The date and time when the message was created, in ISO 8601 format. |
| `truncationStatus` | `string` | Indicates whether the message content is truncated. |
| `type` | `string` | The type of the message, which is always 'MESSAGE'. |
| `updatedAt` | `string` | The date and time when the message was last updated, in ISO 8601 format. |

#### Example: Load

```ts
const custom_channels_public_conversations_message = await client.CustomChannelsPublicConversationsMessage().load({ id: 'custom_channels_public_conversations_message_id', channel_id: 1 })
```

#### Example: Create

```ts
const custom_channels_public_conversations_message = await client.CustomChannelsPublicConversationsMessage().create({
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


### PublicThread

Create an instance: `const public_thread = client.PublicThread()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Thread

Create an instance: `const thread = client.Thread()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### VisitorIdentificationIdentificationToken

Create an instance: `const visitor_identification_identification_token = client.VisitorIdentificationIdentificationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email of the visitor that you wish to identify |
| `firstName` | `string` | The first name of the visitor that you wish to identify. |
| `hsCustomerAgentContext` | `Object` | An object containing additional context about the customer agent. |
| `lastName` | `string` | The last name of the visitor that you wish to identify. |
| `token` | `string` | An identification token that allows the visitor to be treated as a known contact. |

#### Example: Create

```ts
const visitor_identification_identification_token = await client.VisitorIdentificationIdentificationToken().create({
  email: 'example_email',
  hsCustomerAgentContext: {},
  token: 'example_token',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
hubspot-conversations/
├── src/
│   ├── HubspotConversationsSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { HubspotConversationsSDK } = require('@voxgig-sdk/hubspot-conversations-js')
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const conversationsinboxmessagespublicthread = client.ConversationsInboxMessagesPublicThread()
await conversationsinboxmessagespublicthread.load({ id: 1 })

// conversationsinboxmessagespublicthread.data() now returns the conversationsinboxmessagespublicthread data from the last `load`
// conversationsinboxmessagespublicthread.match() returns { id: 1 }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
