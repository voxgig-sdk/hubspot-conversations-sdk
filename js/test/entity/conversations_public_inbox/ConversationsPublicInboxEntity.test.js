
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


describe('ConversationsPublicInboxEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsPublicInbox()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":true,"t":"`$BOOLEAN`","key$":"archived","index$":0},"archivedAt":{"a":true,"fo":"date-time","h":"Archived At","n":"archivedAt","r":false,"t":"`$STRING`","key$":"archivedAt","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"When the inbox was created.","t":"`$STRING`","key$":"createdAt","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the inbox.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the inbox.","t":"`$STRING`","key$":"name","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Specifies whether this refers to a Conversations Inbox or to the Help Desk.","t":"`$STRING`","key$":"type","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"conversations_public_inbox","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/inboxes/{inboxId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"inbox_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/inboxes/{inboxId}","q":{"exist":["archived","id"]},"r":{"param":{"inboxId":"id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"inboxes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"conversations_public_inbox","name__orig":"conversations_public_inbox","Name":"ConversationsPublicInbox","name_":"conversations_public_inbox","name-":"conversations-public-inbox","NAME":"CONVERSATIONS_PUBLIC_INBOX","index$":23}, {"active":true,"entity":"conversations_public_inbox","key$":"BasicConversationsPublicInboxFlow","kind":"basic","name":"BasicConversationsPublicInboxFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_public_inbox_ref01","srcdatavar":"conversations_public_inbox_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_public_inbox01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_inbox_ref01"}}],"index$":0}]}, 'ConversationsPublicInbox', {"GET /conversations/conversations/2026-09/inboxes/{inboxId}":{"protocol":"http","parameters":[{"name":"inboxId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null,"default":false},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_public_inbox_ref01_data = Object.values(setup.data.existing.conversations_public_inbox)[0]

    // LOAD
    const conversations_public_inbox_ref01_ent = client.ConversationsPublicInbox()
    const conversations_public_inbox_ref01_match_dt0 = {}
    conversations_public_inbox_ref01_match_dt0.id = conversations_public_inbox_ref01_data.id
    const conversations_public_inbox_ref01_data_dt0 = (await conversations_public_inbox_ref01_ent.load(conversations_public_inbox_ref01_match_dt0)).data()
    assert(conversations_public_inbox_ref01_data_dt0.id === conversations_public_inbox_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_public_inbox/ConversationsPublicInboxTestData.json')

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
    ['conversations_public_inbox01','conversations_public_inbox02','conversations_public_inbox03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_INBOX_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_INBOX_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_INBOX_ENTID']
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
  
