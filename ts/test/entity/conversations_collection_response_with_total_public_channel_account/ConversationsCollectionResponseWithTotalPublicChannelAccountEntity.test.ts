

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotConversationsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ConversationsCollectionResponseWithTotalPublicChannelAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsCollectionResponseWithTotalPublicChannelAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversations_collection_response_with_total_public_channel_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":true,"short":"Whether the channel account is turned on.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"archived","req":true,"type":"`$BOOLEAN`","index$":1},{"active":true,"format":"date-time","name":"archivedAt","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"authorized","req":true,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"channelId","req":true,"short":"The ID of the channel that the channel account is an instance of.","type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"createdAt","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"deliveryIdentifier","req":true,"type":"`$OBJECT`","index$":6},{"active":true,"name":"id","req":true,"short":"The ID of the channel account.","type":"`$STRING`","index$":7},{"active":true,"name":"inboxId","req":true,"short":"The ID of the conversations inbox that contains the channel account.","type":"`$STRING`","index$":8},{"active":true,"name":"name","req":true,"short":"The name of the channel account.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"conversations_collection_response_with_total_public_channel_account","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":null,"kind":"query","name":"channel_id","orig":"channel_id","reqd":false,"type":"`$ARRAY`","index$":2},{"active":true,"example":null,"kind":"query","name":"default_page_length","orig":"default_page_length","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":null,"kind":"query","name":"inbox_id","orig":"inbox_id","reqd":false,"type":"`$ARRAY`","index$":4},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"example":null,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":6}]},"contract":{"id":"GET /conversations/conversations/2026-09/channel-accounts","json":"{\"operationId\":\"get-/conversations/conversations/2026-09/channel-accounts\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"Whether to return only results that have been archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"channelId\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"defaultPageLength\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"inboxId\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"},\"prev\":{\"description\":\"specifies the paging information needed to retrieve the previous set of results in a paginated API response\",\"example\":null,\"properties\":{\"before\":{\"description\":\"A paging cursor token for retrieving previous pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the previous pages' results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"before\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"Whether the channel account is turned on.\",\"example\":null,\"type\":\"boolean\"},\"archived\":{\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"authorized\":{\"example\":null,\"type\":\"boolean\"},\"channelId\":{\"description\":\"The ID of the channel that the channel account is an instance of.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"deliveryIdentifier\":{\"example\":null,\"properties\":{\"type\":{\"description\":\"The type of identifier. HS_EMAIL_ADDRESS for email addresses; HS_PHONE_NUMBER for a phone number; CHANNEL_SPECIFIC_OPAQUE_ID for channels that use their own proprietary identifiers, like Facebook Messenger or LiveChat.\",\"enum\":[\"CHANNEL_SPECIFIC_OPAQUE_ID\",\"HS_EMAIL_ADDRESS\",\"HS_PHONE_NUMBER\",\"HS_SHORT_CODE\"],\"example\":null,\"type\":\"string\"},\"value\":{\"description\":\"A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"type\",\"value\"],\"type\":\"object\"},\"id\":{\"description\":\"The ID of the channel account.\",\"example\":null,\"type\":\"string\"},\"inboxId\":{\"description\":\"The ID of the conversations inbox that contains the channel account.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the channel account.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"active\",\"archived\",\"authorized\",\"channelId\",\"createdAt\",\"id\",\"inboxId\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"results\",\"total\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/conversations/2026-09/channel-accounts","segments":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"channel-accounts"}],"select":{"exist":["after","archived","channel_id","default_page_length","inbox_id","limit","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_collection_response_with_total_public_channel_account","name__orig":"conversations_collection_response_with_total_public_channel_account","Name":"ConversationsCollectionResponseWithTotalPublicChannelAccount","name_":"conversations_collection_response_with_total_public_channel_account","name-":"conversations-collection-response-with-total-public-channel-account","NAME":"CONVERSATIONS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ACCOUNT","index$":5}, {"active":true,"entity":"conversations_collection_response_with_total_public_channel_account","key$":"BasicConversationsCollectionResponseWithTotalPublicChannelAccountFlow","kind":"basic","name":"BasicConversationsCollectionResponseWithTotalPublicChannelAccountFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"conversations_collection_response_with_total_public_channel_account_ref01"}}],"index$":0}]}, 'ConversationsCollectionResponseWithTotalPublicChannelAccount')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_collection_response_with_total_public_channel_account_ref01_data = Object.values(setup.data.existing.conversations_collection_response_with_total_public_channel_account)[0] as any

    // LIST
    const conversations_collection_response_with_total_public_channel_account_ref01_ent = client.ConversationsCollectionResponseWithTotalPublicChannelAccount()
    const conversations_collection_response_with_total_public_channel_account_ref01_match: any = {}

    const conversations_collection_response_with_total_public_channel_account_ref01_list = (await conversations_collection_response_with_total_public_channel_account_ref01_ent.list(conversations_collection_response_with_total_public_channel_account_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversations_collection_response_with_total_public_channel_account/ConversationsCollectionResponseWithTotalPublicChannelAccountTestData.json')

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
    ['conversations_collection_response_with_total_public_channel_account01','conversations_collection_response_with_total_public_channel_account02','conversations_collection_response_with_total_public_channel_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ACCOUNT_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ACCOUNT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ACCOUNT_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
