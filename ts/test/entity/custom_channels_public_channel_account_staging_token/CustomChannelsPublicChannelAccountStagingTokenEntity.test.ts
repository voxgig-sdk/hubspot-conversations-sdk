

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


describe('CustomChannelsPublicChannelAccountStagingTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.CustomChannelsPublicChannelAccountStagingToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_channels_public_channel_account_staging_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountName":{"a":true,"h":"Account Name","n":"accountName","r":false,"sh":"A string representing the name of the account associated with the staging token.","t":"`$STRING`","key$":"accountName","index$":0},"deliveryIdentifier":{"a":true,"h":"Delivery Identifier","n":"deliveryIdentifier","r":true,"t":"`$OBJECT`","key$":"deliveryIdentifier","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"A string representing the type of delivery identifier.","t":"`$STRING`","key$":"type","index$":3},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"A string representing the value associated with the delivery identifier type.","t":"`$STRING`","key$":"value","index$":4}},"id":{"field":"id","name":"id"},"name":"custom_channels_public_channel_account_staging_token","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"account_token","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}","q":{"exist":["channel_id","id"]},"r":{"param":{"accountToken":"id","channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"channel-account-staging-tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.deliveryIdentifier`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_channels_public_channel_account_staging_token","name__orig":"custom_channels_public_channel_account_staging_token","Name":"CustomChannelsPublicChannelAccountStagingToken","name_":"custom_channels_public_channel_account_staging_token","name-":"custom-channels-public-channel-account-staging-token","NAME":"CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN","index$":30}, {"active":true,"entity":"custom_channels_public_channel_account_staging_token","key$":"BasicCustomChannelsPublicChannelAccountStagingTokenFlow","kind":"basic","name":"BasicCustomChannelsPublicChannelAccountStagingTokenFlow","param":{},"step":[{"a":true,"d":{"channel_id":"channel01"},"i":{"ref":"custom_channels_public_channel_account_staging_token_ref01","srcdatavar":"custom_channels_public_channel_account_staging_token_ref01_data","suffix":"_up0","textfield":"accountName"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_account_staging_token_ref01"}}],"v":[],"index$":0}]}, 'CustomChannelsPublicChannelAccountStagingToken', {"PATCH /conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"accountName":{"type":"string","description":"A string representing the name of the account associated with the staging token.","example":null,"key$":"accountName"},"deliveryIdentifier":{"required":["type","value"],"type":"object","properties":{"type":{"description":"A string representing the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.","enum":["CHANNEL_SPECIFIC_OPAQUE_ID","HS_EMAIL_ADDRESS","HS_PHONE_NUMBER","HS_SHORT_CODE"],"example":null,"type":"string","key$":"type"},"value":{"description":"A string representing the value associated with the delivery identifier type.","example":null,"type":"string","key$":"value"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicDeliveryIdentifier","key$":"deliveryIdentifier"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicChannelAccountStagingTokenUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"accountToken","in":"path","description":"The unique token of the channel account staging to be updated.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"channelId","in":"path","description":"The unique identifier of the custom conversation channel.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_channels_public_channel_account_staging_token_ref01_data = Object.values(setup.data.existing.custom_channels_public_channel_account_staging_token)[0] as any

    // UPDATE
    const custom_channels_public_channel_account_staging_token_ref01_ent = client.CustomChannelsPublicChannelAccountStagingToken()
    const custom_channels_public_channel_account_staging_token_ref01_data_up0: any = {}
    custom_channels_public_channel_account_staging_token_ref01_data_up0.id = custom_channels_public_channel_account_staging_token_ref01_data.id
    custom_channels_public_channel_account_staging_token_ref01_data_up0 ['channel_id'] = setup.idmap['channel_id']

    const custom_channels_public_channel_account_staging_token_ref01_markdef_up0 = { name: 'accountName', value: 'Mark01-custom_channels_public_channel_account_staging_token_ref01_' + setup.now }
    ;(custom_channels_public_channel_account_staging_token_ref01_data_up0 as any)[custom_channels_public_channel_account_staging_token_ref01_markdef_up0.name] = custom_channels_public_channel_account_staging_token_ref01_markdef_up0.value

    const custom_channels_public_channel_account_staging_token_ref01_resdata_up0 = (await custom_channels_public_channel_account_staging_token_ref01_ent.update(custom_channels_public_channel_account_staging_token_ref01_data_up0)).data()
    assert(custom_channels_public_channel_account_staging_token_ref01_resdata_up0.id === custom_channels_public_channel_account_staging_token_ref01_data_up0.id)

    assert((custom_channels_public_channel_account_staging_token_ref01_resdata_up0 as any)[custom_channels_public_channel_account_staging_token_ref01_markdef_up0.name] === custom_channels_public_channel_account_staging_token_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_channels_public_channel_account_staging_token/CustomChannelsPublicChannelAccountStagingTokenTestData.json')

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
    ['custom_channels_public_channel_account_staging_token01','custom_channels_public_channel_account_staging_token02','custom_channels_public_channel_account_staging_token03','channel01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID']
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
  
