

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


describe('ConversationsPublicMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsPublicMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversations_public_message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"conversations_public_message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/conversations/2026-09/threads/{threadId}/messages","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/conversations/conversations/2026-09/threads/{threadId}/messages","q":{"exist":["thread_id"]},"r":{"param":{"threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"message_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}","q":{"exist":["id","property","thread_id"]},"r":{"param":{"messageId":"id","threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.thread"]]},"key$":"conversations_public_message","name__orig":"conversations_public_message","Name":"ConversationsPublicMessage","name_":"conversations_public_message","name-":"conversations-public-message","NAME":"CONVERSATIONS_PUBLIC_MESSAGE","index$":24}, {"active":true,"entity":"conversations_public_message","key$":"BasicConversationsPublicMessageFlow","kind":"basic","name":"BasicConversationsPublicMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_public_message_ref01"},"m":{"thread_id":"thread01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"conversations_public_message_ref01","srcdatavar":"conversations_public_message_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_public_message01","thread_id":"thread01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_message_ref01"}}],"index$":1}]}, 'ConversationsPublicMessage', {"POST /conversations/conversations/2026-09/threads/{threadId}/messages":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{},"example":null,"oneOf":[{"properties":{},"example":null,"allOf":[{"properties":{},"example":null,"oneOf":"[Circular *paths./conversations/conversations/2026-09/threads/{threadId}/messages.post.requestBody.content.application/json.schema.oneOf]","x-ref":"#/components/schemas/ConversationsPublicMessageEgg"},{"required":["attachments","channelAccountId","channelId","recipients","senderActorId","text","type"],"type":"object","properties":{"type":{},"text":{},"richText":{},"attachments":{},"recipients":{},"senderActorId":{},"channelId":{},"channelAccountId":{},"subject":{}},"example":null,"x-hubspot-sub-type-impl":true}],"x-ref":"#/components/schemas/ConversationsPublicConversationsMessageEgg"},{"properties":{},"example":null,"allOf":[{"properties":{},"example":null,"oneOf":"[Circular *paths./conversations/conversations/2026-09/threads/{threadId}/messages.post.requestBody.content.application/json.schema.oneOf]","x-ref":"#/components/schemas/ConversationsPublicMessageEgg"},{"required":["attachments","text","type"],"type":"object","properties":{"type":{},"text":{},"richText":{},"attachments":{}},"example":null,"x-hubspot-sub-type-impl":true}],"x-ref":"#/components/schemas/ConversationsPublicCommentEgg"}],"x-ref":"#/components/schemas/ConversationsPublicMessageEgg","index$":1},"example":null}},"required":true},"parameters":[{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}":{"protocol":"http","parameters":[{"name":"messageId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":1},{"name":"property","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conversations_public_message_ref01_ent = client.ConversationsPublicMessage()
    let conversations_public_message_ref01_data = setup.data.new.conversations_public_message['conversations_public_message_ref01']
    conversations_public_message_ref01_data['thread_id'] = setup.idmap['thread01']

    conversations_public_message_ref01_data = (await conversations_public_message_ref01_ent.create(conversations_public_message_ref01_data)).data()
    assert(null != conversations_public_message_ref01_data.id)


    // LOAD
    const conversations_public_message_ref01_match_dt0: any = {}
    conversations_public_message_ref01_match_dt0.id = conversations_public_message_ref01_data.id
    const conversations_public_message_ref01_data_dt0 = (await conversations_public_message_ref01_ent.load(conversations_public_message_ref01_match_dt0)).data()
    assert(conversations_public_message_ref01_data_dt0.id === conversations_public_message_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversations_public_message/ConversationsPublicMessageTestData.json')

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
    ['conversations_public_message01','conversations_public_message02','conversations_public_message03','thread01','thread02','thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_MESSAGE_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_MESSAGE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_MESSAGE_ENTID']
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
  
