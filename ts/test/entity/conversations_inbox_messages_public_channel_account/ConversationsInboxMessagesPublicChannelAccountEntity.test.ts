

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


describe('ConversationsInboxMessagesPublicChannelAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesPublicChannelAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversations_inbox_messages_public_channel_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of identifier.","t":"`$STRING`","key$":"type","index$":1},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.","t":"`$STRING`","key$":"value","index$":2}},"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_public_channel_account","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/v3/conversations/channel-accounts/{channelAccountId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"channel_account_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/conversations/v3/conversations/channel-accounts/{channelAccountId}","q":{"exist":["archived","id"]},"r":{"param":{"channelAccountId":"id"}},"s":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"channel-accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.deliveryIdentifier`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_public_channel_account","name__orig":"conversations_inbox_messages_public_channel_account","Name":"ConversationsInboxMessagesPublicChannelAccount","name_":"conversations_inbox_messages_public_channel_account","name-":"conversations-inbox-messages-public-channel-account","NAME":"CONVERSATIONS_INBOX_MESSAGES_PUBLIC_CHANNEL_ACCOUNT","index$":15}, {"active":true,"entity":"conversations_inbox_messages_public_channel_account","key$":"BasicConversationsInboxMessagesPublicChannelAccountFlow","kind":"basic","name":"BasicConversationsInboxMessagesPublicChannelAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_inbox_messages_public_channel_account_ref01","srcdatavar":"conversations_inbox_messages_public_channel_account_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_inbox_messages_public_channel_account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_inbox_messages_public_channel_account_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesPublicChannelAccount', {"GET /conversations/v3/conversations/channel-accounts/{channelAccountId}":{"protocol":"http","parameters":[{"name":"archived","in":"query","description":"Whether to include archived channel accounts in the response.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":0},{"name":"channelAccountId","in":"path","description":"The unique ID of the channel account.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_public_channel_account_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_public_channel_account)[0] as any

    // LOAD
    const conversations_inbox_messages_public_channel_account_ref01_ent = client.ConversationsInboxMessagesPublicChannelAccount()
    const conversations_inbox_messages_public_channel_account_ref01_match_dt0: any = {}
    conversations_inbox_messages_public_channel_account_ref01_match_dt0.id = conversations_inbox_messages_public_channel_account_ref01_data.id
    const conversations_inbox_messages_public_channel_account_ref01_data_dt0 = (await conversations_inbox_messages_public_channel_account_ref01_ent.load(conversations_inbox_messages_public_channel_account_ref01_match_dt0)).data()
    assert(conversations_inbox_messages_public_channel_account_ref01_data_dt0.id === conversations_inbox_messages_public_channel_account_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversations_inbox_messages_public_channel_account/ConversationsInboxMessagesPublicChannelAccountTestData.json')

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
    ['conversations_inbox_messages_public_channel_account01','conversations_inbox_messages_public_channel_account02','conversations_inbox_messages_public_channel_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_CHANNEL_ACCOUNT_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_CHANNEL_ACCOUNT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_CHANNEL_ACCOUNT_ENTID']
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
  
