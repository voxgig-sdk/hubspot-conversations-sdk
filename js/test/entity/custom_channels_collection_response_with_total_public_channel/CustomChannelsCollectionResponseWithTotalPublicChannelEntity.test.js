
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


describe('CustomChannelsCollectionResponseWithTotalPublicChannelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.CustomChannelsCollectionResponseWithTotalPublicChannel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"capabilities","req":true,"short":"An object detailing the capabilities of the channel, with additional properties as objects.","type":"`$OBJECT`","index$":0},{"active":true,"name":"channelAccountConnectionRedirectUrl","req":false,"short":"A string representing the URL used to redirect for channel account connection.","type":"`$STRING`","index$":1},{"active":true,"name":"channelDescription","req":false,"short":"A string providing a description of the channel.","type":"`$STRING`","index$":2},{"active":true,"name":"channelLogoUrl","req":false,"short":"A string representing the URL of the channel's logo.","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"The date and time when the channel was created, in ISO 8601 format.","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":true,"short":"A string that uniquely identifies the channel.","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":true,"short":"A string representing the name of the channel.","type":"`$STRING`","index$":6},{"active":true,"name":"webhookUrl","req":false,"short":"A string representing the URL to which webhook events will be sent.","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"custom_channels_collection_response_with_total_public_channel","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"default_page_length","orig":"default_page_length","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":null,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ARRAY`","index$":3}]},"contract":{"id":"GET /conversations/custom-channels/2026-09","json":"{\"operationId\":\"get-/conversations/custom-channels/2026-09_/conversations/custom-channels/v3\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The default number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"defaultPageLength\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"An array of fields to sort the results by.\",\"explode\":true,\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"},\"prev\":{\"description\":\"specifies the paging information needed to retrieve the previous set of results in a paginated API response\",\"example\":null,\"properties\":{\"before\":{\"description\":\"A string token indicating the position before the current page in the pagination sequence.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL string that can be used to access the previous page of results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"before\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"description\":\"An array of public channel integration channels. Each item in the array is a PublicChannelIntegrationChannel object.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"capabilities\":{\"additionalProperties\":{\"example\":null,\"properties\":{},\"type\":\"object\"},\"description\":\"An object detailing the capabilities of the channel, with additional properties as objects.\",\"example\":null,\"type\":\"object\"},\"channelAccountConnectionRedirectUrl\":{\"description\":\"A string representing the URL used to redirect for channel account connection.\",\"example\":null,\"type\":\"string\"},\"channelDescription\":{\"description\":\"A string providing a description of the channel.\",\"example\":null,\"type\":\"string\"},\"channelLogoUrl\":{\"description\":\"A string representing the URL of the channel's logo.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the channel was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"A string that uniquely identifies the channel.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"A string representing the name of the channel.\",\"example\":null,\"type\":\"string\"},\"webhookUrl\":{\"description\":\"A string representing the URL to which webhook events will be sent.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"capabilities\",\"createdAt\",\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"description\":\"The total number of public channel integration channels available. This is an integer value.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"results\",\"total\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/custom-channels/2026-09","segments":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"}],"select":{"exist":["after","default_page_length","limit","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"custom_channels_collection_response_with_total_public_channel","name__orig":"custom_channels_collection_response_with_total_public_channel","Name":"CustomChannelsCollectionResponseWithTotalPublicChannel","name_":"custom_channels_collection_response_with_total_public_channel","name-":"custom-channels-collection-response-with-total-public-channel","NAME":"CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL","index$":27}, {"active":true,"entity":"custom_channels_collection_response_with_total_public_channel","key$":"BasicCustomChannelsCollectionResponseWithTotalPublicChannelFlow","kind":"basic","name":"BasicCustomChannelsCollectionResponseWithTotalPublicChannelFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"custom_channels_collection_response_with_total_public_channel_ref01"}}],"index$":0}]}, 'CustomChannelsCollectionResponseWithTotalPublicChannel')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_channels_collection_response_with_total_public_channel_ref01_data = Object.values(setup.data.existing.custom_channels_collection_response_with_total_public_channel)[0]

    // LIST
    const custom_channels_collection_response_with_total_public_channel_ref01_ent = client.CustomChannelsCollectionResponseWithTotalPublicChannel()
    const custom_channels_collection_response_with_total_public_channel_ref01_match = {}

    const custom_channels_collection_response_with_total_public_channel_ref01_list = (await custom_channels_collection_response_with_total_public_channel_ref01_ent.list(custom_channels_collection_response_with_total_public_channel_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_channels_collection_response_with_total_public_channel/CustomChannelsCollectionResponseWithTotalPublicChannelTestData.json')

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
    ['custom_channels_collection_response_with_total_public_channel01','custom_channels_collection_response_with_total_public_channel02','custom_channels_collection_response_with_total_public_channel03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ENTID']
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
  
