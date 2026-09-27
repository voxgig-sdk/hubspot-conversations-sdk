

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

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_channels_public_channel_integration_channel.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"capabilities":{"a":true,"h":"Capabilities","n":"capabilities","r":true,"sh":"An object that defines the capabilities of the channel, with additional properties as key-value pairs.","t":"`$OBJECT`","key$":"capabilities","index$":0},"channelAccountConnectionRedirectUrl":{"a":true,"h":"Channel Account Connection Redirect Url","n":"channelAccountConnectionRedirectUrl","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"A string representing the URL to which users will be redirected to connect their channel account.","t":"`$STRING`","key$":"channelAccountConnectionRedirectUrl","index$":1},"channelDescription":{"a":true,"h":"Channel Description","n":"channelDescription","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"A string providing a description of the channel.","t":"`$STRING`","key$":"channelDescription","index$":2},"channelLogoUrl":{"a":true,"h":"Channel Logo Url","n":"channelLogoUrl","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"A string representing the URL of the channel's logo.","t":"`$STRING`","key$":"channelLogoUrl","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"A string representing the name of the channel.","t":"`$STRING`","key$":"name","index$":4},"webhookUrl":{"a":true,"h":"Webhook Url","n":"webhookUrl","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"A string representing the URL to which webhook events will be sent.","t":"`$STRING`","key$":"webhookUrl","index$":5}},"name":"custom_channels_public_channel_integration_channel","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/custom-channels/2026-09","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/conversations/custom-channels/2026-09","q":{},"r":{},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"}],"t":{"req":"`reqdata`","res":"`body.capabilities`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/custom-channels/2026-09/{channelId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/conversations/custom-channels/2026-09/{channelId}","q":{"exist":["channel_id"]},"r":{"param":{"channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"}],"t":{"req":"`reqdata`","res":"`body.capabilities`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /conversations/custom-channels/2026-09/{channelId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/conversations/custom-channels/2026-09/{channelId}","q":{"exist":["channel_id"]},"r":{"param":{"channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"}],"t":{"req":"`reqdata`","res":"`body.capabilities`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_channels_public_channel_integration_channel","name__orig":"custom_channels_public_channel_integration_channel","Name":"CustomChannelsPublicChannelIntegrationChannel","name_":"custom_channels_public_channel_integration_channel","name-":"custom-channels-public-channel-integration-channel","NAME":"CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL","index$":31}, {"active":true,"entity":"custom_channels_public_channel_integration_channel","key$":"BasicCustomChannelsPublicChannelIntegrationChannelFlow","kind":"basic","name":"BasicCustomChannelsPublicChannelIntegrationChannelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_channels_public_channel_integration_channel_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"custom_channels_public_channel_integration_channel_ref01","srcdatavar":"custom_channels_public_channel_integration_channel_ref01_data","suffix":"_up0","textfield":"channelAccountConnectionRedirectUrl"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_integration_channel_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_channels_public_channel_integration_channel_ref01","srcdatavar":"custom_channels_public_channel_integration_channel_ref01_data","suffix":"_dt0"},"m":{"id":"custom_channels_public_channel_integration_channel01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_channel_integration_channel_ref01"}}],"index$":2}]}, 'CustomChannelsPublicChannelIntegrationChannel', {"POST /conversations/custom-channels/2026-09":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["capabilities","name"],"type":"object","properties":{"capabilities":{"type":"object","additionalProperties":{"type":"object","properties":{},"example":null},"description":"An object that defines the capabilities of the channel, with additional properties as key-value pairs.","example":null,"key$":"capabilities"},"channelAccountConnectionRedirectUrl":{"type":"string","description":"A string representing the URL to which users will be redirected to connect their channel account.","example":null,"key$":"channelAccountConnectionRedirectUrl"},"channelDescription":{"type":"string","description":"A string providing a description of the channel.","example":null,"key$":"channelDescription"},"channelLogoUrl":{"type":"string","description":"A string representing the URL of the channel's logo.","example":null,"key$":"channelLogoUrl"},"name":{"type":"string","description":"A string representing the name of the channel.","example":null,"key$":"name"},"webhookUrl":{"type":"string","description":"A string representing the URL to which webhook events will be sent.","example":null,"key$":"webhookUrl"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicChannelIntegrationChannelCreate","index$":1},"example":null}},"required":true},"parameters":[]},"GET /conversations/custom-channels/2026-09/{channelId}":{"protocol":"http","parameters":[{"name":"channelId","in":"path","description":"The unique identifier of the custom channel to retrieve. It is an integer value.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"PATCH /conversations/custom-channels/2026-09/{channelId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["capabilities","channelAccountConnectionRedirectUrl","channelDescription","channelLogoUrl","name","webhookUrl"],"type":"object","properties":{"capabilities":{"type":"object","additionalProperties":{"type":"object","properties":{},"example":null},"description":"An object that defines the capabilities of the channel. This can include various properties that describe what the channel can do.","example":null,"key$":"capabilities"},"channelAccountConnectionRedirectUrl":{"type":"object","properties":{},"description":"An object representing the URL used to redirect for channel account connection.","example":null,"key$":"channelAccountConnectionRedirectUrl"},"channelDescription":{"type":"object","properties":{},"description":"An object containing the description of the channel.","example":null,"key$":"channelDescription"},"channelLogoUrl":{"type":"object","properties":{},"description":"An object representing the URL of the channel's logo.","example":null,"key$":"channelLogoUrl"},"name":{"type":"object","properties":{},"description":"An object representing the name of the channel.","example":null,"key$":"name"},"webhookUrl":{"type":"object","properties":{},"description":"An object representing the URL for the webhook associated with the channel.","example":null,"key$":"webhookUrl"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicChannelIntegrationChannelPatch","index$":1},"example":null}},"required":true},"parameters":[{"name":"channelId","in":"path","description":"The unique identifier of the custom channel to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]}})
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
    const custom_channels_public_channel_integration_channel_ref01_data_up0: any = {}

    const custom_channels_public_channel_integration_channel_ref01_markdef_up0 = { name: 'channelAccountConnectionRedirectUrl', value: 'Mark01-custom_channels_public_channel_integration_channel_ref01_' + setup.now }
    ;(custom_channels_public_channel_integration_channel_ref01_data_up0 as any)[custom_channels_public_channel_integration_channel_ref01_markdef_up0.name] = custom_channels_public_channel_integration_channel_ref01_markdef_up0.value

    const custom_channels_public_channel_integration_channel_ref01_resdata_up0 = (await custom_channels_public_channel_integration_channel_ref01_ent.update(custom_channels_public_channel_integration_channel_ref01_data_up0)).data()
    assert(null != custom_channels_public_channel_integration_channel_ref01_resdata_up0)

    assert((custom_channels_public_channel_integration_channel_ref01_resdata_up0 as any)[custom_channels_public_channel_integration_channel_ref01_markdef_up0.name] === custom_channels_public_channel_integration_channel_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
    ['custom_channels_public_channel_integration_channel01','custom_channels_public_channel_integration_channel02','custom_channels_public_channel_integration_channel03'],
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
  
