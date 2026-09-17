
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


describe('ConversationsPublicChannelAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsPublicChannelAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"type","req":true,"short":"The type of identifier.","type":"`$STRING`","index$":1},{"active":true,"name":"value","req":true,"short":"A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.","type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"conversations_public_channel_account","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"id","orig":"channel_account_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /conversations/conversations/2026-09/channel-accounts/{channelAccountId}","json":"{\"operationId\":\"get-/conversations/conversations/2026-09/channel-accounts/{channelAccountId}\",\"parameters\":[{\"description\":\"\",\"explode\":false,\"in\":\"path\",\"name\":\"channelAccountId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"Whether to return only results that have been archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"default\":false,\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"Whether the channel account is turned on.\",\"example\":null,\"type\":\"boolean\"},\"archived\":{\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"authorized\":{\"example\":null,\"type\":\"boolean\"},\"channelId\":{\"description\":\"The ID of the channel that the channel account is an instance of.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"deliveryIdentifier\":{\"example\":null,\"properties\":{\"type\":{\"description\":\"The type of identifier. HS_EMAIL_ADDRESS for email addresses; HS_PHONE_NUMBER for a phone number; CHANNEL_SPECIFIC_OPAQUE_ID for channels that use their own proprietary identifiers, like Facebook Messenger or LiveChat.\",\"enum\":[\"CHANNEL_SPECIFIC_OPAQUE_ID\",\"HS_EMAIL_ADDRESS\",\"HS_PHONE_NUMBER\",\"HS_SHORT_CODE\"],\"example\":null,\"type\":\"string\"},\"value\":{\"description\":\"A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"type\",\"value\"],\"type\":\"object\"},\"id\":{\"description\":\"The ID of the channel account.\",\"example\":null,\"type\":\"string\"},\"inboxId\":{\"description\":\"The ID of the conversations inbox that contains the channel account.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the channel account.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"active\",\"archived\",\"authorized\",\"channelId\",\"createdAt\",\"id\",\"inboxId\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/conversations/2026-09/channel-accounts/{channelAccountId}","rename":{"param":{"channelAccountId":"id"}},"segments":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"channel-accounts"},{"var":"id"}],"select":{"exist":["archived","id"]},"transform":{"req":"`reqdata`","res":"`body.deliveryIdentifier`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"conversations_public_channel_account","name__orig":"conversations_public_channel_account","Name":"ConversationsPublicChannelAccount","name_":"conversations_public_channel_account","name-":"conversations-public-channel-account","NAME":"CONVERSATIONS_PUBLIC_CHANNEL_ACCOUNT","index$":22}, {"active":true,"entity":"conversations_public_channel_account","key$":"BasicConversationsPublicChannelAccountFlow","kind":"basic","name":"BasicConversationsPublicChannelAccountFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"conversations_public_channel_account_ref01","srcdatavar":"conversations_public_channel_account_ref01_data","suffix":"_dt0"},"match":{"id":"conversations_public_channel_account01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_channel_account_ref01"}}],"index$":0}]}, 'ConversationsPublicChannelAccount')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_public_channel_account_ref01_data = Object.values(setup.data.existing.conversations_public_channel_account)[0]

    // LOAD
    const conversations_public_channel_account_ref01_ent = client.ConversationsPublicChannelAccount()
    const conversations_public_channel_account_ref01_match_dt0 = {}
    conversations_public_channel_account_ref01_match_dt0.id = conversations_public_channel_account_ref01_data.id
    const conversations_public_channel_account_ref01_data_dt0 = (await conversations_public_channel_account_ref01_ent.load(conversations_public_channel_account_ref01_match_dt0)).data()
    assert(conversations_public_channel_account_ref01_data_dt0.id === conversations_public_channel_account_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_public_channel_account/ConversationsPublicChannelAccountTestData.json')

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
    ['conversations_public_channel_account01','conversations_public_channel_account02','conversations_public_channel_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_CHANNEL_ACCOUNT_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_CHANNEL_ACCOUNT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_CHANNEL_ACCOUNT_ENTID']
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
  
