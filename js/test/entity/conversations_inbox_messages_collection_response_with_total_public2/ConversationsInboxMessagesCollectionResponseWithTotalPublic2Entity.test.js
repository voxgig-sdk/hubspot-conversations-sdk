
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


describe('ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesCollectionResponseWithTotalPublic2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"The ID of the channel.","type":"`$STRING`","index$":0},{"active":true,"name":"name","req":true,"short":"The name of the channel.","type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_collection_response_with_total_public2","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"default_page_length","orig":"default_page_length","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":3}]},"contract":{"id":"GET /conversations/v3/conversations/channels","json":"{\"operationId\":\"get-/conversations/v3/conversations/channels\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The default number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"defaultPageLength\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"Specify the sort order for the channels.\",\"explode\":true,\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"paging\":{\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"id\":{\"description\":\"The ID of the channel.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the channel.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"results\",\"total\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"items\":{\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"An error occurred.\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/v3/conversations/channels","segments":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"channels"}],"select":{"exist":["after","default_page_length","limit","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_collection_response_with_total_public2","name__orig":"conversations_inbox_messages_collection_response_with_total_public2","Name":"ConversationsInboxMessagesCollectionResponseWithTotalPublic2","name_":"conversations_inbox_messages_collection_response_with_total_public2","name-":"conversations-inbox-messages-collection-response-with-total-public2","NAME":"CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC2","index$":11}, {"active":true,"entity":"conversations_inbox_messages_collection_response_with_total_public2","key$":"BasicConversationsInboxMessagesCollectionResponseWithTotalPublic2Flow","kind":"basic","name":"BasicConversationsInboxMessagesCollectionResponseWithTotalPublic2Flow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"conversations_inbox_messages_collection_response_with_total_public2_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesCollectionResponseWithTotalPublic2')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_collection_response_with_total_public2_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_collection_response_with_total_public2)[0]

    // LIST
    const conversations_inbox_messages_collection_response_with_total_public2_ref01_ent = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2()
    const conversations_inbox_messages_collection_response_with_total_public2_ref01_match = {}

    const conversations_inbox_messages_collection_response_with_total_public2_ref01_list = (await conversations_inbox_messages_collection_response_with_total_public2_ref01_ent.list(conversations_inbox_messages_collection_response_with_total_public2_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_collection_response_with_total_public2/ConversationsInboxMessagesCollectionResponseWithTotalPublic2TestData.json')

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
    ['conversations_inbox_messages_collection_response_with_total_public201','conversations_inbox_messages_collection_response_with_total_public202','conversations_inbox_messages_collection_response_with_total_public203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC2_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC2_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC2_ENTID']
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
  
