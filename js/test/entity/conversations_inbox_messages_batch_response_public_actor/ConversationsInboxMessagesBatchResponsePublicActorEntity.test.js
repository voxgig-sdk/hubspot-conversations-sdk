
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


describe('ConversationsInboxMessagesBatchResponsePublicActorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesBatchResponsePublicActor()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completedAt":{"a":true,"fo":"date-time","h":"Completed At","n":"completedAt","r":true,"t":"`$STRING`","key$":"completedAt","index$":0},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"t":"`$ARRAY`","key$":"inputs","index$":1},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":2},"requestedAt":{"a":true,"fo":"date-time","h":"Requested At","n":"requestedAt","r":false,"t":"`$STRING`","key$":"requestedAt","index$":3},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","union":{"branches":7,"count":1,"depth":1},"key$":"results","index$":4},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"t":"`$STRING`","key$":"startedAt","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":6}},"name":"conversations_inbox_messages_batch_response_public_actor","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/v3/conversations/actors/batch/read","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/conversations/v3/conversations/actors/batch/read","q":{"exist":["property"]},"r":{},"s":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"actors"},{"lit":"batch"},{"lit":"read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_batch_response_public_actor","name__orig":"conversations_inbox_messages_batch_response_public_actor","Name":"ConversationsInboxMessagesBatchResponsePublicActor","name_":"conversations_inbox_messages_batch_response_public_actor","name-":"conversations-inbox-messages-batch-response-public-actor","NAME":"CONVERSATIONS_INBOX_MESSAGES_BATCH_RESPONSE_PUBLIC_ACTOR","index$":7}, {"active":true,"entity":"conversations_inbox_messages_batch_response_public_actor","key$":"BasicConversationsInboxMessagesBatchResponsePublicActorFlow","kind":"basic","name":"BasicConversationsInboxMessagesBatchResponsePublicActorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_inbox_messages_batch_response_public_actor_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ConversationsInboxMessagesBatchResponsePublicActor', {"POST /conversations/v3/conversations/actors/batch/read":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","items":{"type":"string"},"key$":"inputs"}},"x-ref":"#/components/schemas/ConversationsInboxMessagesBatchInputString","index$":1}}},"required":true},"parameters":[{"name":"property","in":"query","description":"A specific property to include in the actor response.","required":false,"style":"form","explode":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conversations_inbox_messages_batch_response_public_actor_ref01_ent = client.ConversationsInboxMessagesBatchResponsePublicActor()
    let conversations_inbox_messages_batch_response_public_actor_ref01_data = setup.data.new.conversations_inbox_messages_batch_response_public_actor['conversations_inbox_messages_batch_response_public_actor_ref01']

    conversations_inbox_messages_batch_response_public_actor_ref01_data = (await conversations_inbox_messages_batch_response_public_actor_ref01_ent.create(conversations_inbox_messages_batch_response_public_actor_ref01_data)).data()
    assert(null != conversations_inbox_messages_batch_response_public_actor_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_batch_response_public_actor/ConversationsInboxMessagesBatchResponsePublicActorTestData.json')

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
    ['conversations_inbox_messages_batch_response_public_actor01','conversations_inbox_messages_batch_response_public_actor02','conversations_inbox_messages_batch_response_public_actor03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID']
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
  
