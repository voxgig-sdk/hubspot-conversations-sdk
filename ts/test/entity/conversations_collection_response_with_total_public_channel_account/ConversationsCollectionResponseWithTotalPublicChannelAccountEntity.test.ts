

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Whether the channel account is turned on.","t":"`$BOOLEAN`","key$":"active","index$":0},"archived":{"a":true,"h":"Archived","n":"archived","r":true,"t":"`$BOOLEAN`","key$":"archived","index$":1},"archivedAt":{"a":true,"fo":"date-time","h":"Archived At","n":"archivedAt","r":false,"t":"`$STRING`","key$":"archivedAt","index$":2},"authorized":{"a":true,"h":"Authorized","n":"authorized","r":true,"t":"`$BOOLEAN`","key$":"authorized","index$":3},"channelId":{"a":true,"h":"Channel Id","n":"channelId","r":true,"sh":"The ID of the channel that the channel account is an instance of.","t":"`$STRING`","key$":"channelId","index$":4},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":5},"deliveryIdentifier":{"a":true,"h":"Delivery Identifier","n":"deliveryIdentifier","r":true,"t":"`$OBJECT`","key$":"deliveryIdentifier","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the channel account.","t":"`$STRING`","key$":"id","index$":7},"inboxId":{"a":true,"h":"Inbox Id","n":"inboxId","r":true,"sh":"The ID of the conversations inbox that contains the channel account.","t":"`$STRING`","key$":"inboxId","index$":8},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the channel account.","t":"`$STRING`","key$":"name","index$":9}},"id":{"field":"id","name":"id"},"name":"conversations_collection_response_with_total_public_channel_account","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/channel-accounts","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":null,"k":"query","n":"channel_id","or":"channel_id","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":null,"k":"query","n":"default_page_length","or":"default_page_length","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":null,"k":"query","n":"inbox_id","or":"inbox_id","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":null,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":6}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/channel-accounts","q":{"exist":["after","archived","channel_id","default_page_length","inbox_id","limit","sort"]},"r":{},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"channel-accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_collection_response_with_total_public_channel_account","name__orig":"conversations_collection_response_with_total_public_channel_account","Name":"ConversationsCollectionResponseWithTotalPublicChannelAccount","name_":"conversations_collection_response_with_total_public_channel_account","name-":"conversations-collection-response-with-total-public-channel-account","NAME":"CONVERSATIONS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL_ACCOUNT","index$":5}, {"active":true,"entity":"conversations_collection_response_with_total_public_channel_account","key$":"BasicConversationsCollectionResponseWithTotalPublicChannelAccountFlow","kind":"basic","name":"BasicConversationsCollectionResponseWithTotalPublicChannelAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"conversations_collection_response_with_total_public_channel_account_ref01"}}],"index$":0}]}, 'ConversationsCollectionResponseWithTotalPublicChannelAccount', {"GET /conversations/conversations/2026-09/channel-accounts":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":1},{"name":"channelId","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"integer","format":"int32","example":null}},"index$":2},{"name":"defaultPageLength","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":3},{"name":"inboxId","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"integer","format":"int32","example":null}},"index$":4},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":5},{"name":"sort","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":6}]}})
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
  
