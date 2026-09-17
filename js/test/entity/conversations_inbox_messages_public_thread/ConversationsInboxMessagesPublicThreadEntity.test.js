
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


describe('ConversationsInboxMessagesPublicThreadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesPublicThread()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":false,"short":"Whether this thread is archived.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"associatedTicketId","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"status","req":false,"short":"The thread's status: `OPEN` or `CLOSED`.","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_public_thread","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"thread_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"association","orig":"association","reqd":false,"type":"`$ARRAY`","index$":1},{"active":true,"kind":"query","name":"property","orig":"property","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /conversations/v3/conversations/threads/{threadId}","json":"{\"operationId\":\"get-/conversations/v3/conversations/threads/{threadId}\",\"parameters\":[{\"description\":\"Whether to return only results that have been archived. Default is false.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"You can specify an association type here of `TICKET`. If this is set the response will included a thread associations object and associated ticket id if present. If there are no associations to a ticket with this conversation, then the thread associations object will not be present on the response. \",\"explode\":true,\"in\":\"query\",\"name\":\"association\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"TICKET\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"A specific property to include in the thread response.\",\"explode\":true,\"in\":\"query\",\"name\":\"property\",\"required\":false,\"schema\":{\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The unique ID of the thread.\",\"explode\":false,\"in\":\"path\",\"name\":\"threadId\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"archived\":{\"description\":\"Whether this thread is archived.\",\"type\":\"boolean\"},\"assignedTo\":{\"type\":\"string\"},\"associatedContactId\":{\"description\":\"The ID of the associated Contact in the CRM. If the Contact for the thread has not yet been added or created, the `associatedContactId` returned will be a visitorID and cannot be used to search for the Contact in the CRM.\",\"type\":\"string\"},\"closedAt\":{\"description\":\"When the thread was closed. Only set if the thread is closed.\",\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"When the thread was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the thread.\",\"type\":\"string\"},\"inboxId\":{\"description\":\"The ID of the conversations inbox containing the thread.\",\"type\":\"string\"},\"latestMessageReceivedTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageSentTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageTimestamp\":{\"description\":\"The time that the latest message was sent or received on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"originalChannelAccountId\":{\"type\":\"string\"},\"originalChannelId\":{\"type\":\"string\"},\"spam\":{\"description\":\"Whether the thread is marked as spam.\",\"type\":\"boolean\"},\"status\":{\"description\":\"The thread's status: `OPEN` or `CLOSED`.\",\"enum\":[\"CLOSED\",\"OPEN\"],\"type\":\"string\"},\"threadAssociations\":{\"properties\":{\"associatedTicketId\":{\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"archived\",\"associatedContactId\",\"createdAt\",\"id\",\"inboxId\",\"originalChannelAccountId\",\"originalChannelId\",\"spam\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"items\":{\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"An error occurred.\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/v3/conversations/threads/{threadId}","rename":{"param":{"threadId":"id"}},"segments":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"threads"},{"var":"id"}],"select":{"exist":["archived","association","id","property"]},"transform":{"req":"`reqdata`","res":"`body.threadAssociations`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"thread_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"PATCH /conversations/v3/conversations/threads/{threadId}","json":"{\"operationId\":\"patch-/conversations/v3/conversations/threads/{threadId}\",\"parameters\":[{\"description\":\"Whether the thread to update is archived. Default is false. A thread's status property can not be updated if the thread is archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"The unique ID of the thread.\",\"explode\":false,\"in\":\"path\",\"name\":\"threadId\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"archived\":{\"description\":\"Whether this thread is archived. Set to false to restore the thread.\",\"type\":\"boolean\"},\"status\":{\"description\":\"The thread's status: `OPEN` or `CLOSED`.\",\"enum\":[\"CLOSED\",\"OPEN\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"archived\":{\"description\":\"Whether this thread is archived.\",\"type\":\"boolean\"},\"assignedTo\":{\"type\":\"string\"},\"associatedContactId\":{\"description\":\"The ID of the associated Contact in the CRM. If the Contact for the thread has not yet been added or created, the `associatedContactId` returned will be a visitorID and cannot be used to search for the Contact in the CRM.\",\"type\":\"string\"},\"closedAt\":{\"description\":\"When the thread was closed. Only set if the thread is closed.\",\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"When the thread was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the thread.\",\"type\":\"string\"},\"inboxId\":{\"description\":\"The ID of the conversations inbox containing the thread.\",\"type\":\"string\"},\"latestMessageReceivedTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageSentTimestamp\":{\"description\":\"The time that the latest message was sent on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"latestMessageTimestamp\":{\"description\":\"The time that the latest message was sent or received on the thread.\",\"format\":\"date-time\",\"type\":\"string\"},\"originalChannelAccountId\":{\"type\":\"string\"},\"originalChannelId\":{\"type\":\"string\"},\"spam\":{\"description\":\"Whether the thread is marked as spam.\",\"type\":\"boolean\"},\"status\":{\"description\":\"The thread's status: `OPEN` or `CLOSED`.\",\"enum\":[\"CLOSED\",\"OPEN\"],\"type\":\"string\"},\"threadAssociations\":{\"properties\":{\"associatedTicketId\":{\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"archived\",\"associatedContactId\",\"createdAt\",\"id\",\"inboxId\",\"originalChannelAccountId\",\"originalChannelId\",\"spam\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"items\":{\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"An error occurred.\"}},\"security\":[{\"oauth2\":[\"conversations.write\"]},{\"private_apps\":[\"conversations.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/conversations/v3/conversations/threads/{threadId}","rename":{"param":{"threadId":"id"}},"segments":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"threads"},{"var":"id"}],"select":{"exist":["archived","id"]},"transform":{"req":"`reqdata`","res":"`body.threadAssociations`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_public_thread","name__orig":"conversations_inbox_messages_public_thread","Name":"ConversationsInboxMessagesPublicThread","name_":"conversations_inbox_messages_public_thread","name-":"conversations-inbox-messages-public-thread","NAME":"CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD","index$":19}, {"active":true,"entity":"conversations_inbox_messages_public_thread","key$":"BasicConversationsInboxMessagesPublicThreadFlow","kind":"basic","name":"BasicConversationsInboxMessagesPublicThreadFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"conversations_inbox_messages_public_thread_ref01","srcdatavar":"conversations_inbox_messages_public_thread_ref01_data","suffix":"_up0","textfield":"associatedTicketId"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_inbox_messages_public_thread_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"conversations_inbox_messages_public_thread_ref01","srcdatavar":"conversations_inbox_messages_public_thread_ref01_data","suffix":"_dt0"},"match":{"id":"conversations_inbox_messages_public_thread01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_inbox_messages_public_thread_ref01"}}],"index$":1}]}, 'ConversationsInboxMessagesPublicThread')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_public_thread_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_public_thread)[0]

    // UPDATE
    const conversations_inbox_messages_public_thread_ref01_ent = client.ConversationsInboxMessagesPublicThread()
    const conversations_inbox_messages_public_thread_ref01_data_up0 = {}
    conversations_inbox_messages_public_thread_ref01_data_up0.id = conversations_inbox_messages_public_thread_ref01_data.id

    const conversations_inbox_messages_public_thread_ref01_markdef_up0 = { name: 'associatedTicketId', value: 'Mark01-conversations_inbox_messages_public_thread_ref01_' + setup.now }
    conversations_inbox_messages_public_thread_ref01_data_up0 [conversations_inbox_messages_public_thread_ref01_markdef_up0.name] = conversations_inbox_messages_public_thread_ref01_markdef_up0.value

    const conversations_inbox_messages_public_thread_ref01_resdata_up0 = (await conversations_inbox_messages_public_thread_ref01_ent.update(conversations_inbox_messages_public_thread_ref01_data_up0)).data()
    assert(conversations_inbox_messages_public_thread_ref01_resdata_up0.id === conversations_inbox_messages_public_thread_ref01_data_up0.id)

    assert(conversations_inbox_messages_public_thread_ref01_resdata_up0[conversations_inbox_messages_public_thread_ref01_markdef_up0.name] === conversations_inbox_messages_public_thread_ref01_markdef_up0.value)


    // LOAD
    const conversations_inbox_messages_public_thread_ref01_match_dt0 = {}
    conversations_inbox_messages_public_thread_ref01_match_dt0.id = conversations_inbox_messages_public_thread_ref01_data.id
    const conversations_inbox_messages_public_thread_ref01_data_dt0 = (await conversations_inbox_messages_public_thread_ref01_ent.load(conversations_inbox_messages_public_thread_ref01_match_dt0)).data()
    assert(conversations_inbox_messages_public_thread_ref01_data_dt0.id === conversations_inbox_messages_public_thread_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_public_thread/ConversationsInboxMessagesPublicThreadTestData.json')

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
    ['conversations_inbox_messages_public_thread01','conversations_inbox_messages_public_thread02','conversations_inbox_messages_public_thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID']
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
  
