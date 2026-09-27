

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


describe('ConversationsPublicMessageContentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsPublicMessageContent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversations_public_message_content.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"richText":{"a":true,"h":"Rich Text","n":"richText","r":false,"t":"`$STRING`","key$":"richText","index$":0},"text":{"a":true,"h":"Text","n":"text","r":false,"t":"`$STRING`","key$":"text","index$":1}},"name":"conversations_public_message_content","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"message_id","or":"message_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content","q":{"exist":["message_id","property","thread_id"]},"r":{"param":{"messageId":"message_id","threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"messages"},{"var":"message_id"},{"lit":"original-content"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.thread"]]},"key$":"conversations_public_message_content","name__orig":"conversations_public_message_content","Name":"ConversationsPublicMessageContent","name_":"conversations_public_message_content","name-":"conversations-public-message-content","NAME":"CONVERSATIONS_PUBLIC_MESSAGE_CONTENT","index$":25}, {"active":true,"entity":"conversations_public_message_content","key$":"BasicConversationsPublicMessageContentFlow","kind":"basic","name":"BasicConversationsPublicMessageContentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_public_message_content_ref01","srcdatavar":"conversations_public_message_content_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_public_message_content01","thread_id":"thread01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_message_content_ref01"}}],"index$":0}]}, 'ConversationsPublicMessageContent', {"GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content":{"protocol":"http","parameters":[{"name":"messageId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":1},{"name":"property","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_public_message_content_ref01_data = Object.values(setup.data.existing.conversations_public_message_content)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const conversations_public_message_content_ref01_ent = client.ConversationsPublicMessageContent()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversations_public_message_content/ConversationsPublicMessageContentTestData.json')

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
    ['conversations_public_message_content01','conversations_public_message_content02','conversations_public_message_content03','thread01','thread02','thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_MESSAGE_CONTENT_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_MESSAGE_CONTENT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_MESSAGE_CONTENT_ENTID']
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
  
