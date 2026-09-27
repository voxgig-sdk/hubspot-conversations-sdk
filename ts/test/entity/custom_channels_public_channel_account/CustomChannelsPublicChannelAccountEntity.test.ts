

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CustomChannelsPublicChannelAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.CustomChannelsPublicChannelAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_channels_public_channel_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authorized":{"a":true,"h":"Authorized","n":"authorized","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"A boolean indicating whether the channel account is authorized.","t":"`$BOOLEAN`","key$":"authorized","index$":0},"deliveryIdentifier":{"a":true,"h":"Delivery Identifier","n":"deliveryIdentifier","r":true,"t":"`$OBJECT`","key$":"deliveryIdentifier","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"inboxId":{"a":true,"h":"Inbox Id","n":"inboxId","r":true,"sh":"The unique identifier for the inbox associated with this channel account.","t":"`$STRING`","key$":"inboxId","index$":3},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the channel account.","t":"`$STRING`","key$":"name","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"A string representing the type of delivery identifier.","t":"`$STRING`","key$":"type","index$":5},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"A string representing the value associated with the delivery identifier type.","t":"`$STRING`","key$":"value","index$":6}},"id":{"field":"id","name":"id"},"name":"custom_channels_public_channel_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/custom-channels/2026-09/{channelId}/channel-accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/conversations/custom-channels/2026-09/{channelId}/channel-accounts","q":{"exist":["channel_id"]},"r":{"param":{"channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"channel-accounts"}],"t":{"req":"`reqdata`","res":"`body.deliveryIdentifier`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"channel_account_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}","q":{"exist":["archived","channel_id","id"]},"r":{"param":{"channelAccountId":"id","channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"channel-accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.deliveryIdentifier`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"channel_account_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PATCH","o":"/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}","q":{"exist":["channel_id","id"]},"r":{"param":{"channelAccountId":"id","channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"channel-accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.deliveryIdentifier`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_channels_public_channel_account","name__orig":"custom_channels_public_channel_account","Name":"CustomChannelsPublicChannelAccount","name_":"custom_channels_public_channel_account","name-":"custom-channels-public-channel-account","NAME":"CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT","index$":29}, {"active":true,"entity":"custom_channels_public_channel_account","key$":"BasicCustomChannelsPublicChannelAccountFlow","kind":"basic","name":"BasicCustomChannelsPublicChannelAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_channels_public_channel_account_ref01"},"m":{"channel_id":"channel01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"channel_id":"channel01"},"i":{"ref":"custom_channels_public_channel_account_ref01","srcdatavar":"custom_channels_public_channel_account_ref01_data","suffix":"_up0","textfield":"inboxId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_account_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_channels_public_channel_account_ref01","srcdatavar":"custom_channels_public_channel_account_ref01_data","suffix":"_dt0"},"m":{"channel_id":"channel01","id":"custom_channels_public_channel_account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_account_ref01"}}],"index$":2}]}, 'CustomChannelsPublicChannelAccount', {"POST /conversations/custom-channels/2026-09/{channelId}/channel-accounts":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["authorized","inboxId","name"],"type":"object","properties":{"authorized":{"type":"boolean","description":"A boolean indicating whether the channel account is authorized.","example":null,"key$":"authorized"},"deliveryIdentifier":{"required":["type","value"],"type":"object","properties":{"type":{"description":"A string representing the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.","enum":["CHANNEL_SPECIFIC_OPAQUE_ID","HS_EMAIL_ADDRESS","HS_PHONE_NUMBER","HS_SHORT_CODE"],"example":null,"type":"string","key$":"type"},"value":{"description":"A string representing the value associated with the delivery identifier type.","example":null,"type":"string","key$":"value"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicDeliveryIdentifier","key$":"deliveryIdentifier"},"inboxId":{"type":"string","description":"The unique identifier for the inbox associated with this channel account. It is a string.","example":null,"key$":"inboxId"},"name":{"type":"string","description":"The name of the channel account. It is a string.","example":null,"key$":"name"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicChannelAccountEgg","index$":1},"example":null}},"required":true},"parameters":[{"name":"channelId","in":"path","description":"The unique identifier of the custom channel for which the channel account is being created.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}":{"protocol":"http","parameters":[{"name":"channelAccountId","in":"path","description":"The unique identifier of the channel account to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"channelId","in":"path","description":"The unique identifier of the custom channel.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":1},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null,"default":false},"index$":2}]},"PATCH /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"authorized":{"type":"boolean","description":"A boolean indicating whether the channel account is authorized.","example":null,"key$":"authorized"},"name":{"type":"string","description":"A string representing the name of the channel account.","example":null,"key$":"name"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicChannelAccountUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"channelAccountId","in":"path","description":"The unique identifier of the channel account to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"channelId","in":"path","description":"The unique identifier of the custom channel to which the account belongs.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_channels_public_channel_account_ref01_ent = client.CustomChannelsPublicChannelAccount()
    let custom_channels_public_channel_account_ref01_data = setup.data.new.custom_channels_public_channel_account['custom_channels_public_channel_account_ref01']
    custom_channels_public_channel_account_ref01_data['channel_id'] = setup.idmap['channel01']

    custom_channels_public_channel_account_ref01_data = (await custom_channels_public_channel_account_ref01_ent.create(custom_channels_public_channel_account_ref01_data)).data()
    assert(null != custom_channels_public_channel_account_ref01_data.id)


    // UPDATE
    const custom_channels_public_channel_account_ref01_data_up0: any = {}
    custom_channels_public_channel_account_ref01_data_up0.id = custom_channels_public_channel_account_ref01_data.id
    custom_channels_public_channel_account_ref01_data_up0 ['channel_id'] = setup.idmap['channel_id']

    const custom_channels_public_channel_account_ref01_markdef_up0 = { name: 'inboxId', value: 'Mark01-custom_channels_public_channel_account_ref01_' + setup.now }
    ;(custom_channels_public_channel_account_ref01_data_up0 as any)[custom_channels_public_channel_account_ref01_markdef_up0.name] = custom_channels_public_channel_account_ref01_markdef_up0.value

    const custom_channels_public_channel_account_ref01_resdata_up0 = (await custom_channels_public_channel_account_ref01_ent.update(custom_channels_public_channel_account_ref01_data_up0)).data()
    assert(custom_channels_public_channel_account_ref01_resdata_up0.id === custom_channels_public_channel_account_ref01_data_up0.id)

    assert((custom_channels_public_channel_account_ref01_resdata_up0 as any)[custom_channels_public_channel_account_ref01_markdef_up0.name] === custom_channels_public_channel_account_ref01_markdef_up0.value)


    // LOAD
    const custom_channels_public_channel_account_ref01_match_dt0: any = {}
    custom_channels_public_channel_account_ref01_match_dt0.id = custom_channels_public_channel_account_ref01_data.id
    const custom_channels_public_channel_account_ref01_data_dt0 = (await custom_channels_public_channel_account_ref01_ent.load(custom_channels_public_channel_account_ref01_match_dt0)).data()
    assert(custom_channels_public_channel_account_ref01_data_dt0.id === custom_channels_public_channel_account_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_channels_public_channel_account/CustomChannelsPublicChannelAccountTestData.json')

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
    ['custom_channels_public_channel_account01','custom_channels_public_channel_account02','custom_channels_public_channel_account03','channel01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID']
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
  
