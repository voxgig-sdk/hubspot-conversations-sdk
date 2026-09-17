
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


describe('CustomChannelsPublicChannelIntegrationChannelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.CustomChannelsPublicChannelIntegrationChannel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"capabilities","req":true,"short":"An object that defines the capabilities of the channel, with additional properties as key-value pairs.","type":"`$OBJECT`","index$":0},{"active":true,"name":"channelAccountConnectionRedirectUrl","op":{"update":{"req":true,"type":"`$OBJECT`"}},"req":false,"short":"A string representing the URL to which users will be redirected to connect their channel account.","type":"`$STRING`","index$":1},{"active":true,"name":"channelDescription","op":{"update":{"req":true,"type":"`$OBJECT`"}},"req":false,"short":"A string providing a description of the channel.","type":"`$STRING`","index$":2},{"active":true,"name":"channelLogoUrl","op":{"update":{"req":true,"type":"`$OBJECT`"}},"req":false,"short":"A string representing the URL of the channel's logo.","type":"`$STRING`","index$":3},{"active":true,"name":"name","req":true,"short":"A string representing the name of the channel.","type":"`$STRING`","index$":4},{"active":true,"name":"webhookUrl","op":{"update":{"req":true,"type":"`$OBJECT`"}},"req":false,"short":"A string representing the URL to which webhook events will be sent.","type":"`$STRING`","index$":5}],"name":"custom_channels_public_channel_integration_channel","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /conversations/custom-channels/2026-09","json":"{\"operationId\":\"post-/conversations/custom-channels/2026-09_/conversations/custom-channels/v3\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"capabilities\":{\"additionalProperties\":{\"example\":null,\"properties\":{},\"type\":\"object\"},\"description\":\"An object that defines the capabilities of the channel, with additional properties as key-value pairs.\",\"example\":null,\"type\":\"object\"},\"channelAccountConnectionRedirectUrl\":{\"description\":\"A string representing the URL to which users will be redirected to connect their channel account.\",\"example\":null,\"type\":\"string\"},\"channelDescription\":{\"description\":\"A string providing a description of the channel.\",\"example\":null,\"type\":\"string\"},\"channelLogoUrl\":{\"description\":\"A string representing the URL of the channel's logo.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"A string representing the name of the channel.\",\"example\":null,\"type\":\"string\"},\"webhookUrl\":{\"description\":\"A string representing the URL to which webhook events will be sent.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"capabilities\",\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"capabilities\":{\"additionalProperties\":{\"example\":null,\"properties\":{},\"type\":\"object\"},\"description\":\"An object detailing the capabilities of the channel, with additional properties as objects.\",\"example\":null,\"type\":\"object\"},\"channelAccountConnectionRedirectUrl\":{\"description\":\"A string representing the URL used to redirect for channel account connection.\",\"example\":null,\"type\":\"string\"},\"channelDescription\":{\"description\":\"A string providing a description of the channel.\",\"example\":null,\"type\":\"string\"},\"channelLogoUrl\":{\"description\":\"A string representing the URL of the channel's logo.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the channel was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"A string that uniquely identifies the channel.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"A string representing the name of the channel.\",\"example\":null,\"type\":\"string\"},\"webhookUrl\":{\"description\":\"A string representing the URL to which webhook events will be sent.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"capabilities\",\"createdAt\",\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\",\"headers\":{\"Location\":{\"description\":\"URL of the newly created resource\",\"explode\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}}},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/conversations/custom-channels/2026-09","segments":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.capabilities`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"channel_id","orig":"channel_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /conversations/custom-channels/2026-09/{channelId}","json":"{\"operationId\":\"get-/conversations/custom-channels/2026-09/{channelId}\",\"parameters\":[{\"description\":\"The unique identifier of the custom channel to retrieve. It is an integer value.\",\"explode\":false,\"in\":\"path\",\"name\":\"channelId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"capabilities\":{\"additionalProperties\":{\"example\":null,\"properties\":{},\"type\":\"object\"},\"description\":\"An object detailing the capabilities of the channel, with additional properties as objects.\",\"example\":null,\"type\":\"object\"},\"channelAccountConnectionRedirectUrl\":{\"description\":\"A string representing the URL used to redirect for channel account connection.\",\"example\":null,\"type\":\"string\"},\"channelDescription\":{\"description\":\"A string providing a description of the channel.\",\"example\":null,\"type\":\"string\"},\"channelLogoUrl\":{\"description\":\"A string representing the URL of the channel's logo.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the channel was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"A string that uniquely identifies the channel.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"A string representing the name of the channel.\",\"example\":null,\"type\":\"string\"},\"webhookUrl\":{\"description\":\"A string representing the URL to which webhook events will be sent.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"capabilities\",\"createdAt\",\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/custom-channels/2026-09/{channelId}","rename":{"param":{"channelId":"channel_id"}},"segments":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"}],"select":{"exist":["channel_id"]},"transform":{"req":"`reqdata`","res":"`body.capabilities`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"channel_id","orig":"channel_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"PATCH /conversations/custom-channels/2026-09/{channelId}","json":"{\"operationId\":\"patch-/conversations/custom-channels/2026-09/{channelId}\",\"parameters\":[{\"description\":\"The unique identifier of the custom channel to update.\",\"explode\":false,\"in\":\"path\",\"name\":\"channelId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"capabilities\":{\"additionalProperties\":{\"example\":null,\"properties\":{},\"type\":\"object\"},\"description\":\"An object that defines the capabilities of the channel. This can include various properties that describe what the channel can do.\",\"example\":null,\"type\":\"object\"},\"channelAccountConnectionRedirectUrl\":{\"description\":\"An object representing the URL used to redirect for channel account connection.\",\"example\":null,\"properties\":{},\"type\":\"object\"},\"channelDescription\":{\"description\":\"An object containing the description of the channel.\",\"example\":null,\"properties\":{},\"type\":\"object\"},\"channelLogoUrl\":{\"description\":\"An object representing the URL of the channel's logo.\",\"example\":null,\"properties\":{},\"type\":\"object\"},\"name\":{\"description\":\"An object representing the name of the channel.\",\"example\":null,\"properties\":{},\"type\":\"object\"},\"webhookUrl\":{\"description\":\"An object representing the URL for the webhook associated with the channel.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"capabilities\",\"channelAccountConnectionRedirectUrl\",\"channelDescription\",\"channelLogoUrl\",\"name\",\"webhookUrl\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"capabilities\":{\"additionalProperties\":{\"example\":null,\"properties\":{},\"type\":\"object\"},\"description\":\"An object detailing the capabilities of the channel, with additional properties as objects.\",\"example\":null,\"type\":\"object\"},\"channelAccountConnectionRedirectUrl\":{\"description\":\"A string representing the URL used to redirect for channel account connection.\",\"example\":null,\"type\":\"string\"},\"channelDescription\":{\"description\":\"A string providing a description of the channel.\",\"example\":null,\"type\":\"string\"},\"channelLogoUrl\":{\"description\":\"A string representing the URL of the channel's logo.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the channel was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"A string that uniquely identifies the channel.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"A string representing the name of the channel.\",\"example\":null,\"type\":\"string\"},\"webhookUrl\":{\"description\":\"A string representing the URL to which webhook events will be sent.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"capabilities\",\"createdAt\",\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/conversations/custom-channels/2026-09/{channelId}","rename":{"param":{"channelId":"channel_id"}},"segments":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"}],"select":{"exist":["channel_id"]},"transform":{"req":"`reqdata`","res":"`body.capabilities`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["2026_09"]]},"key$":"custom_channels_public_channel_integration_channel","name__orig":"custom_channels_public_channel_integration_channel","Name":"CustomChannelsPublicChannelIntegrationChannel","name_":"custom_channels_public_channel_integration_channel","name-":"custom-channels-public-channel-integration-channel","NAME":"CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL","index$":31}, {"active":true,"entity":"custom_channels_public_channel_integration_channel","key$":"BasicCustomChannelsPublicChannelIntegrationChannelFlow","kind":"basic","name":"BasicCustomChannelsPublicChannelIntegrationChannelFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"custom_channels_public_channel_integration_channel_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"custom_channels_public_channel_integration_channel_ref01","srcdatavar":"custom_channels_public_channel_integration_channel_ref01_data","suffix":"_up0","textfield":"channelAccountConnectionRedirectUrl"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_integration_channel_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"custom_channels_public_channel_integration_channel_ref01","srcdatavar":"custom_channels_public_channel_integration_channel_ref01_data","suffix":"_dt0"},"match":{"id":"custom_channels_public_channel_integration_channel01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_integration_channel_ref01"}}],"index$":2}]}, 'CustomChannelsPublicChannelIntegrationChannel')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_channels_public_channel_integration_channel_ref01_ent = client.CustomChannelsPublicChannelIntegrationChannel()
    let custom_channels_public_channel_integration_channel_ref01_data = setup.data.new.custom_channels_public_channel_integration_channel['custom_channels_public_channel_integration_channel_ref01']

    custom_channels_public_channel_integration_channel_ref01_data = (await custom_channels_public_channel_integration_channel_ref01_ent.create(custom_channels_public_channel_integration_channel_ref01_data)).data()
    assert(null != custom_channels_public_channel_integration_channel_ref01_data)


    // UPDATE
    const custom_channels_public_channel_integration_channel_ref01_data_up0 = {}

    const custom_channels_public_channel_integration_channel_ref01_markdef_up0 = { name: 'channelAccountConnectionRedirectUrl', value: 'Mark01-custom_channels_public_channel_integration_channel_ref01_' + setup.now }
    custom_channels_public_channel_integration_channel_ref01_data_up0 [custom_channels_public_channel_integration_channel_ref01_markdef_up0.name] = custom_channels_public_channel_integration_channel_ref01_markdef_up0.value

    const custom_channels_public_channel_integration_channel_ref01_resdata_up0 = (await custom_channels_public_channel_integration_channel_ref01_ent.update(custom_channels_public_channel_integration_channel_ref01_data_up0)).data()
    assert(null != custom_channels_public_channel_integration_channel_ref01_resdata_up0)

    assert(custom_channels_public_channel_integration_channel_ref01_resdata_up0[custom_channels_public_channel_integration_channel_ref01_markdef_up0.name] === custom_channels_public_channel_integration_channel_ref01_markdef_up0.value)


    // LOAD
    const custom_channels_public_channel_integration_channel_ref01_match_dt0 = {}
    const custom_channels_public_channel_integration_channel_ref01_data_dt0 = (await custom_channels_public_channel_integration_channel_ref01_ent.load(custom_channels_public_channel_integration_channel_ref01_match_dt0)).data()
    assert(null != custom_channels_public_channel_integration_channel_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_channels_public_channel_integration_channel/CustomChannelsPublicChannelIntegrationChannelTestData.json')

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
    ['custom_channels_public_channel_integration_channel01','custom_channels_public_channel_integration_channel02','custom_channels_public_channel_integration_channel03','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID']
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
  
