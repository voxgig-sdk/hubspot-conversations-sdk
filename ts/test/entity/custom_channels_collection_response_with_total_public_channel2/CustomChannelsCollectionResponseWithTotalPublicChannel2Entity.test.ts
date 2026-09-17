

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


describe('CustomChannelsCollectionResponseWithTotalPublicChannel2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.CustomChannelsCollectionResponseWithTotalPublicChannel2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_channels_collection_response_with_total_public_channel2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":true,"short":"A boolean indicating whether the channel account is currently active.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"archived","req":true,"short":"A boolean indicating whether the channel account is archived.","type":"`$BOOLEAN`","index$":1},{"active":true,"format":"date-time","name":"archivedAt","req":false,"short":"The date and time when the channel account was archived, in ISO 8601 format.","type":"`$STRING`","index$":2},{"active":true,"name":"authorized","req":true,"short":"A boolean indicating whether the channel account is authorized.","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"channelId","req":true,"short":"The unique identifier for the channel to which this account belongs, represented as a string.","type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"The date and time when the channel account was created, in ISO 8601 format.","type":"`$STRING`","index$":5},{"active":true,"name":"deliveryIdentifier","req":true,"type":"`$OBJECT`","index$":6},{"active":true,"name":"id","req":true,"short":"The unique identifier for this channel account, represented as a string.","type":"`$STRING`","index$":7},{"active":true,"name":"inboxId","req":true,"short":"The unique identifier for the inbox associated with this channel account, represented as a string.","type":"`$STRING`","index$":8},{"active":true,"name":"name","req":true,"short":"The name of the channel account, represented as a string.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"custom_channels_collection_response_with_total_public_channel2","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"channel_id","orig":"channel_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":null,"kind":"query","name":"default_page_length","orig":"default_page_length","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":null,"kind":"query","name":"delivery_identifier_type","orig":"delivery_identifier_type","reqd":false,"type":"`$ARRAY`","index$":3},{"active":true,"example":null,"kind":"query","name":"delivery_identifier_value","orig":"delivery_identifier_value","reqd":false,"type":"`$ARRAY`","index$":4},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"example":null,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":6}]},"contract":{"id":"GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts","json":"{\"operationId\":\"get-/conversations/custom-channels/2026-09/{channelId}/channel-accounts\",\"parameters\":[{\"description\":\"The unique identifier of the channel for which to list the accounts.\",\"explode\":false,\"in\":\"path\",\"name\":\"channelId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"Whether to return only results that have been archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"The default number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"defaultPageLength\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"An array of delivery identifier types to filter the results. Valid values include HS_EMAIL_ADDRESS, HS_PHONE_NUMBER, HS_SHORT_CODE, and CHANNEL_SPECIFIC_OPAQUE_ID.\",\"explode\":true,\"in\":\"query\",\"name\":\"deliveryIdentifierType\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"enum\":[\"HS_EMAIL_ADDRESS\",\"HS_PHONE_NUMBER\",\"HS_SHORT_CODE\",\"CHANNEL_SPECIFIC_OPAQUE_ID\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"An array of delivery identifier values to filter the results.\",\"explode\":true,\"in\":\"query\",\"name\":\"deliveryIdentifierValue\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"An array specifying the sort order of the results.\",\"explode\":true,\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"},\"prev\":{\"description\":\"specifies the paging information needed to retrieve the previous set of results in a paginated API response\",\"example\":null,\"properties\":{\"before\":{\"description\":\"A string token indicating the position before the current page in the pagination sequence.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL string that can be used to access the previous page of results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"before\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"description\":\"An array of PublicChannelAccount objects, each representing a public channel account with its details.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"A boolean indicating whether the channel account is currently active.\",\"example\":null,\"type\":\"boolean\"},\"archived\":{\"description\":\"A boolean indicating whether the channel account is archived.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when the channel account was archived, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"authorized\":{\"description\":\"A boolean indicating whether the channel account is authorized.\",\"example\":null,\"type\":\"boolean\"},\"channelId\":{\"description\":\"The unique identifier for the channel to which this account belongs, represented as a string.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the channel account was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"deliveryIdentifier\":{\"example\":null,\"properties\":{\"type\":{\"description\":\"A string representing the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.\",\"enum\":[\"CHANNEL_SPECIFIC_OPAQUE_ID\",\"HS_EMAIL_ADDRESS\",\"HS_PHONE_NUMBER\",\"HS_SHORT_CODE\"],\"example\":null,\"type\":\"string\"},\"value\":{\"description\":\"A string representing the value associated with the delivery identifier type.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"type\",\"value\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier for this channel account, represented as a string.\",\"example\":null,\"type\":\"string\"},\"inboxId\":{\"description\":\"The unique identifier for the inbox associated with this channel account, represented as a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the channel account, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"active\",\"archived\",\"authorized\",\"channelId\",\"createdAt\",\"id\",\"inboxId\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"description\":\"An integer representing the total number of public channel accounts available.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"results\",\"total\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.custom_channels.read\"]},{\"oauth2\":[\"conversations.custom_channels.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/custom-channels/2026-09/{channelId}/channel-accounts","rename":{"param":{"channelId":"channel_id"}},"segments":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"channel-accounts"}],"select":{"exist":["after","archived","channel_id","default_page_length","delivery_identifier_type","delivery_identifier_value","limit","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["2026_09"]]},"key$":"custom_channels_collection_response_with_total_public_channel2","name__orig":"custom_channels_collection_response_with_total_public_channel2","Name":"CustomChannelsCollectionResponseWithTotalPublicChannel2","name_":"custom_channels_collection_response_with_total_public_channel2","name-":"custom-channels-collection-response-with-total-public-channel2","NAME":"CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL2","index$":28}, {"active":true,"entity":"custom_channels_collection_response_with_total_public_channel2","key$":"BasicCustomChannelsCollectionResponseWithTotalPublicChannel2Flow","kind":"basic","name":"BasicCustomChannelsCollectionResponseWithTotalPublicChannel2Flow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"channel_id":"channel01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"custom_channels_collection_response_with_total_public_channel2_ref01"}}],"index$":0}]}, 'CustomChannelsCollectionResponseWithTotalPublicChannel2')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_channels_collection_response_with_total_public_channel2_ref01_data = Object.values(setup.data.existing.custom_channels_collection_response_with_total_public_channel2)[0] as any

    // LIST
    const custom_channels_collection_response_with_total_public_channel2_ref01_ent = client.CustomChannelsCollectionResponseWithTotalPublicChannel2()
    const custom_channels_collection_response_with_total_public_channel2_ref01_match: any = {}
    custom_channels_collection_response_with_total_public_channel2_ref01_match['channel_id'] = setup.idmap['channel01']

    const custom_channels_collection_response_with_total_public_channel2_ref01_list = (await custom_channels_collection_response_with_total_public_channel2_ref01_ent.list(custom_channels_collection_response_with_total_public_channel2_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_channels_collection_response_with_total_public_channel2/CustomChannelsCollectionResponseWithTotalPublicChannel2TestData.json')

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
    ['custom_channels_collection_response_with_total_public_channel201','custom_channels_collection_response_with_total_public_channel202','custom_channels_collection_response_with_total_public_channel203','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL2_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL2_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL2_ENTID']
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
  
