
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


describe('ConversationsPublicChannelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsPublicChannel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the channel.","t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the channel.","t":"`$STRING`","key$":"name","index$":1}},"id":{"field":"id","name":"id"},"name":"conversations_public_channel","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/channels/{channelId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/channels/{channelId}","q":{"exist":["id"]},"r":{"param":{"channelId":"id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"channels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"conversations_public_channel","name__orig":"conversations_public_channel","Name":"ConversationsPublicChannel","name_":"conversations_public_channel","name-":"conversations-public-channel","NAME":"CONVERSATIONS_PUBLIC_CHANNEL","index$":21}, {"active":true,"entity":"conversations_public_channel","key$":"BasicConversationsPublicChannelFlow","kind":"basic","name":"BasicConversationsPublicChannelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_public_channel_ref01","srcdatavar":"conversations_public_channel_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_public_channel01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_channel_ref01"}}],"index$":0}]}, 'ConversationsPublicChannel', {"GET /conversations/conversations/2026-09/channels/{channelId}":{"protocol":"http","parameters":[{"name":"channelId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_public_channel_ref01_data = Object.values(setup.data.existing.conversations_public_channel)[0]

    // LOAD
    const conversations_public_channel_ref01_ent = client.ConversationsPublicChannel()
    const conversations_public_channel_ref01_match_dt0 = {}
    conversations_public_channel_ref01_match_dt0.id = conversations_public_channel_ref01_data.id
    const conversations_public_channel_ref01_data_dt0 = (await conversations_public_channel_ref01_ent.load(conversations_public_channel_ref01_match_dt0)).data()
    assert(conversations_public_channel_ref01_data_dt0.id === conversations_public_channel_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_public_channel/ConversationsPublicChannelTestData.json')

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
    ['conversations_public_channel01','conversations_public_channel02','conversations_public_channel03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_CHANNEL_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_CHANNEL_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_CHANNEL_ENTID']
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
  
