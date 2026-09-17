
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


describe('ConversationsCollectionResponsePublicThreadForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsCollectionResponsePublicThreadForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":true,"short":"Whether this thread is archived.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"assignedTo","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"associatedContactId","req":true,"short":"The ID of the associated Contact in the CRM.","type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"closedAt","req":false,"short":"When the thread was closed.","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"When the thread was created.","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":true,"short":"The unique ID of the thread.","type":"`$STRING`","index$":5},{"active":true,"name":"inboxId","req":true,"short":"The ID of the conversations inbox containing the thread.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"latestMessageReceivedTimestamp","req":false,"short":"The time that the latest message was sent on the thread.","type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"latestMessageSentTimestamp","req":false,"short":"The time that the latest message was sent on the thread.","type":"`$STRING`","index$":8},{"active":true,"format":"date-time","name":"latestMessageTimestamp","req":false,"short":"The time that the latest message was sent or received on the thread.","type":"`$STRING`","index$":9},{"active":true,"name":"originalChannelAccountId","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"originalChannelId","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"spam","req":true,"short":"Whether the thread is marked as spam.","type":"`$BOOLEAN`","index$":12},{"active":true,"name":"status","req":true,"short":"The thread's status: `OPEN` or `CLOSED`.","type":"`$STRING`","index$":13},{"active":true,"name":"threadAssociations","req":false,"type":"`$OBJECT`","index$":14}],"id":{"field":"id","name":"id"},"name":"conversations_collection_response_public_thread_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":null,"kind":"query","name":"associated_contact_id","orig":"associated_contact_id","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":null,"kind":"query","name":"associated_ticket_id","orig":"associated_ticket_id","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":null,"kind":"query","name":"association","orig":"association","reqd":false,"type":"`$ARRAY`","index$":4},{"active":true,"example":null,"kind":"query","name":"inbox_id","orig":"inbox_id","reqd":false,"type":"`$ARRAY`","index$":5},{"active":true,"example":null,"kind":"query","name":"latest_message_timestamp_after","orig":"latest_message_timestamp_after","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"example":null,"kind":"query","name":"property","orig":"property","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":null,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":9},{"active":true,"example":null,"kind":"query","name":"thread_status","orig":"thread_status","reqd":false,"type":"`$STRING`","index$":10}]},"contract":{"id":"GET /conversations/conversations/2026-09/threads","json":"{\"operationId\":\"get-/conversations/conversations/2026-09/threads\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"Whether to return only results that have been archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"associatedContactId\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"associatedTicketId\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"association\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"enum\":[\"TICKET\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"inboxId\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"latestMessageTimestampAfter\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"property\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"threadStatus\",\"required\":false,\"schema\":{\"enum\":[\"CLOSED\",\"OPEN\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"archived\":{\"description\":\"Whether this thread is archived.\",\"example\":null,\"type\":\"boolean\"},\"assignedTo\":{\"example\":null,\"type\":\"string\"},\"associatedContactId\":{\"description\":\"The ID of the associated Contact in the CRM. If the Contact for the thread has not yet been added or created, the `associatedContactId` returned will be a visitorID and cannot be used to search for the Contact in the CRM.\",\"example\":null,\"type\":\"string\"},\"closedAt\":{\"description\":\"When the thread was closed. Only set if the thread is closed.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"When the thread was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the thread.\",\"example\":null,\"type\":\"string\"},\"inboxId\":{\"description\":\"The ID of the conversations inbox containing the thread.\",\"example\":null,\"type\":\"string\"},\"latestMessageReceivedTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageSentTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageTimestamp\":{\"description\":\"The time that the latest message was sent or received on the thread.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"originalChannelAccountId\":{\"example\":null,\"type\":\"string\"},\"originalChannelId\":{\"example\":null,\"type\":\"string\"},\"spam\":{\"description\":\"Whether the thread is marked as spam.\",\"example\":null,\"type\":\"boolean\"},\"status\":{\"description\":\"The thread's status: `OPEN` or `CLOSED`.\",\"enum\":[\"CLOSED\",\"OPEN\"],\"example\":null,\"type\":\"string\"},\"threadAssociations\":{\"example\":null,\"properties\":{\"associatedTicketId\":{\"example\":null,\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"archived\",\"associatedContactId\",\"createdAt\",\"id\",\"inboxId\",\"originalChannelAccountId\",\"originalChannelId\",\"spam\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/conversations/2026-09/threads","segments":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"}],"select":{"exist":["after","archived","associated_contact_id","associated_ticket_id","association","inbox_id","latest_message_timestamp_after","limit","property","sort","thread_status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_collection_response_public_thread_forward_paging","name__orig":"conversations_collection_response_public_thread_forward_paging","Name":"ConversationsCollectionResponsePublicThreadForwardPaging","name_":"conversations_collection_response_public_thread_forward_paging","name-":"conversations-collection-response-public-thread-forward-paging","NAME":"CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING","index$":3}, {"active":true,"entity":"conversations_collection_response_public_thread_forward_paging","key$":"BasicConversationsCollectionResponsePublicThreadForwardPagingFlow","kind":"basic","name":"BasicConversationsCollectionResponsePublicThreadForwardPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"conversations_collection_response_public_thread_forward_paging_ref01"}}],"index$":0}]}, 'ConversationsCollectionResponsePublicThreadForwardPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_collection_response_public_thread_forward_paging_ref01_data = Object.values(setup.data.existing.conversations_collection_response_public_thread_forward_paging)[0]

    // LIST
    const conversations_collection_response_public_thread_forward_paging_ref01_ent = client.ConversationsCollectionResponsePublicThreadForwardPaging()
    const conversations_collection_response_public_thread_forward_paging_ref01_match = {}

    const conversations_collection_response_public_thread_forward_paging_ref01_list = (await conversations_collection_response_public_thread_forward_paging_ref01_ent.list(conversations_collection_response_public_thread_forward_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_collection_response_public_thread_forward_paging/ConversationsCollectionResponsePublicThreadForwardPagingTestData.json')

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
    ['conversations_collection_response_public_thread_forward_paging01','conversations_collection_response_public_thread_forward_paging02','conversations_collection_response_public_thread_forward_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING_ENTID']
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
  
