
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotConversationsSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ConversationsInboxMessagesCollectionResponsePublicThreadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesCollectionResponsePublicThread()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":true,"short":"Whether this thread is archived.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"assignedTo","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"associatedContactId","req":true,"short":"The ID of the associated Contact in the CRM.","type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"closedAt","req":false,"short":"When the thread was closed.","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"When the thread was created.","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":true,"short":"The unique ID of the thread.","type":"`$STRING`","index$":5},{"active":true,"name":"inboxId","req":true,"short":"The ID of the conversations inbox containing the thread.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"latestMessageReceivedTimestamp","req":false,"short":"The time that the latest message was sent on the thread.","type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"latestMessageSentTimestamp","req":false,"short":"The time that the latest message was sent on the thread.","type":"`$STRING`","index$":8},{"active":true,"format":"date-time","name":"latestMessageTimestamp","req":false,"short":"The time that the latest message was sent or received on the thread.","type":"`$STRING`","index$":9},{"active":true,"name":"originalChannelAccountId","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"originalChannelId","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"spam","req":true,"short":"Whether the thread is marked as spam.","type":"`$BOOLEAN`","index$":12},{"active":true,"name":"status","req":true,"short":"The thread's status: `OPEN` or `CLOSED`.","type":"`$STRING`","index$":13},{"active":true,"name":"threadAssociations","req":false,"type":"`$OBJECT`","index$":14}],"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_collection_response_public_thread","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"associated_contact_id","orig":"associated_contact_id","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"association","orig":"association","reqd":false,"type":"`$ARRAY`","index$":3},{"active":true,"kind":"query","name":"inbox_id","orig":"inbox_id","reqd":false,"type":"`$ARRAY`","index$":4},{"active":true,"kind":"query","name":"latest_message_timestamp_after","orig":"latest_message_timestamp_after","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":6},{"active":true,"kind":"query","name":"property","orig":"property","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":8},{"active":true,"kind":"query","name":"thread_status","orig":"thread_status","reqd":false,"type":"`$STRING`","index$":9}]},"contract":{"id":"GET /conversations/v3/conversations/threads","json":"{\"operationId\":\"get-/conversations/v3/conversations/threads\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"Whether to return only results that have been archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"Retrieve a filtered list of conversations for a specific contact by its ID. This parameter cannot be used in conjunction with the `inboxId` property.\",\"explode\":true,\"in\":\"query\",\"name\":\"associatedContactId\",\"required\":false,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"You can specify an association type here of `TICKET`. If this is set the response will included a thread associations object and associated ticket id if present. If there are no associations to a ticket with this conversation, then the thread associations object will not be present on the response. \",\"explode\":true,\"in\":\"query\",\"name\":\"association\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"TICKET\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"The ID of the conversations inbox you can optionally include to retrieve the associated messages for. This parameter cannot be used in conjunction with the `associatedContactId` property.\",\"explode\":true,\"in\":\"query\",\"name\":\"inboxId\",\"required\":false,\"schema\":{\"items\":{\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"The minimum(earliest) `latestMessageTimestamp`. This is required only when sorting by `latestMessageTimestamp`.\",\"explode\":true,\"in\":\"query\",\"name\":\"latestMessageTimestampAfter\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"A specific property to include in the thread response.\",\"explode\":true,\"in\":\"query\",\"name\":\"property\",\"required\":false,\"schema\":{\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"Set the sort order of the response. Valid options are `id` (default) and `latestMessageTimestamp` (which requires the `latestMessageTimestampAfter` field to also be set). If you’re filtering threads by `associatedContactId` , you can sort in descending order by prepending - to the sort option (e.g., `-id` or `-latestMessageTimestampAfter` ). Otherwise, results are always returned in ascending order.\",\"explode\":true,\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"The status of the associated conversations to filter by (either `OPEN` or `CLOSED`). This property must be provided if you’re including the `associatedContactId` query parameter.\",\"explode\":true,\"in\":\"query\",\"name\":\"threadStatus\",\"required\":false,\"schema\":{\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"paging\":{\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"archived\":{\"description\":\"Whether this thread is archived.\",\"type\":\"boolean\"},\"assignedTo\":{\"type\":\"string\"},\"associatedContactId\":{\"description\":\"The ID of the associated Contact in the CRM. If the Contact for the thread has not yet been added or created, the `associatedContactId` returned will be a visitorID and cannot be used to search for the Contact in the CRM.\",\"type\":\"string\"},\"closedAt\":{\"description\":\"When the thread was closed. Only set if the thread is closed.\",\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"When the thread was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the thread.\",\"type\":\"string\"},\"inboxId\":{\"description\":\"The ID of the conversations inbox containing the thread.\",\"type\":\"string\"},\"latestMessageReceivedTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageSentTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageTimestamp\":{\"description\":\"The time that the latest message was sent or received on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"originalChannelAccountId\":{\"type\":\"string\"},\"originalChannelId\":{\"type\":\"string\"},\"spam\":{\"description\":\"Whether the thread is marked as spam.\",\"type\":\"boolean\"},\"status\":{\"description\":\"The thread's status: `OPEN` or `CLOSED`.\",\"enum\":[\"CLOSED\",\"OPEN\"],\"type\":\"string\"},\"threadAssociations\":{\"properties\":{\"associatedTicketId\":{\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"archived\",\"associatedContactId\",\"createdAt\",\"id\",\"inboxId\",\"originalChannelAccountId\",\"originalChannelId\",\"spam\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"items\":{\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"An error occurred.\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/v3/conversations/threads","segments":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"threads"}],"select":{"exist":["after","archived","associated_contact_id","association","inbox_id","latest_message_timestamp_after","limit","property","sort","thread_status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_collection_response_public_thread","name__orig":"conversations_inbox_messages_collection_response_public_thread","Name":"ConversationsInboxMessagesCollectionResponsePublicThread","name_":"conversations_inbox_messages_collection_response_public_thread","name-":"conversations-inbox-messages-collection-response-public-thread","NAME":"CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD","index$":9}, {"active":true,"entity":"conversations_inbox_messages_collection_response_public_thread","key$":"BasicConversationsInboxMessagesCollectionResponsePublicThreadFlow","kind":"basic","name":"BasicConversationsInboxMessagesCollectionResponsePublicThreadFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"conversations_inbox_messages_collection_response_public_thread_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesCollectionResponsePublicThread')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_collection_response_public_thread_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_collection_response_public_thread)[0]

    // LIST
    const conversations_inbox_messages_collection_response_public_thread_ref01_ent = client.ConversationsInboxMessagesCollectionResponsePublicThread()
    const conversations_inbox_messages_collection_response_public_thread_ref01_match = {}

    const conversations_inbox_messages_collection_response_public_thread_ref01_list = (await conversations_inbox_messages_collection_response_public_thread_ref01_ent.list(conversations_inbox_messages_collection_response_public_thread_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_collection_response_public_thread/ConversationsInboxMessagesCollectionResponsePublicThreadTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotConversationsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['conversations_inbox_messages_collection_response_public_thread01','conversations_inbox_messages_collection_response_public_thread02','conversations_inbox_messages_collection_response_public_thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotConversationsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_CONVERSATIONS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
