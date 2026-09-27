

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


describe('ConversationsBatchResponsePublicActorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsBatchResponsePublicActor()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversations_batch_response_public_actor.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completedAt":{"a":true,"fo":"date-time","h":"Completed At","n":"completedAt","r":true,"t":"`$STRING`","key$":"completedAt","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"t":"`$ARRAY`","key$":"errors","index$":1},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"t":"`$ARRAY`","key$":"inputs","index$":2},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":3},"numErrors":{"a":true,"fo":"int32","h":"Num Errors","n":"numErrors","r":false,"t":"`$INTEGER`","key$":"numErrors","index$":4},"requestedAt":{"a":true,"fo":"date-time","h":"Requested At","n":"requestedAt","r":false,"t":"`$STRING`","key$":"requestedAt","index$":5},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","union":{"branches":7,"count":2,"depth":5},"key$":"results","index$":6},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"t":"`$STRING`","key$":"startedAt","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":8}},"name":"conversations_batch_response_public_actor","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/conversations/2026-09/actors/batch/read","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/conversations/conversations/2026-09/actors/batch/read","q":{"exist":["property"]},"r":{},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"actors"},{"lit":"batch"},{"lit":"read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"conversations_batch_response_public_actor","name__orig":"conversations_batch_response_public_actor","Name":"ConversationsBatchResponsePublicActor","name_":"conversations_batch_response_public_actor","name-":"conversations-batch-response-public-actor","NAME":"CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR","index$":1}, {"active":true,"entity":"conversations_batch_response_public_actor","key$":"BasicConversationsBatchResponsePublicActorFlow","kind":"basic","name":"BasicConversationsBatchResponsePublicActorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_batch_response_public_actor_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ConversationsBatchResponsePublicActor', {"POST /conversations/conversations/2026-09/actors/batch/read":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","example":null,"items":{"type":"string","example":null},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/ConversationsBatchInputString","index$":1},"example":null}},"required":true},"parameters":[{"name":"property","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conversations_batch_response_public_actor_ref01_ent = client.ConversationsBatchResponsePublicActor()
    let conversations_batch_response_public_actor_ref01_data = setup.data.new.conversations_batch_response_public_actor['conversations_batch_response_public_actor_ref01']

    conversations_batch_response_public_actor_ref01_data = (await conversations_batch_response_public_actor_ref01_ent.create(conversations_batch_response_public_actor_ref01_data)).data()
    assert(null != conversations_batch_response_public_actor_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversations_batch_response_public_actor/ConversationsBatchResponsePublicActorTestData.json')

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
    ['conversations_batch_response_public_actor01','conversations_batch_response_public_actor02','conversations_batch_response_public_actor03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID']
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
  
