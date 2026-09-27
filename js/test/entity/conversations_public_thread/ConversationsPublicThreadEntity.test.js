
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


describe('ConversationsPublicThreadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsPublicThread()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Whether this thread is archived.","t":"`$BOOLEAN`","key$":"archived","index$":0},"associatedTicketId":{"a":true,"h":"Associated Ticket Id","n":"associatedTicketId","r":false,"t":"`$STRING`","key$":"associatedTicketId","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The thread's status: `OPEN` or `CLOSED`.","t":"`$STRING`","key$":"status","index$":3}},"id":{"field":"id","name":"id"},"name":"conversations_public_thread","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/threads/{threadId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":null,"k":"query","n":"association","or":"association","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/threads/{threadId}","q":{"exist":["archived","association","id","property"]},"r":{"param":{"threadId":"id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.threadAssociations`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /conversations/conversations/2026-09/threads/{threadId}/assignee","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/conversations/conversations/2026-09/threads/{threadId}/assignee","q":{"$action":"assignee","exist":["thread_id"]},"r":{"param":{"threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"assignee"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /conversations/conversations/2026-09/threads/{threadId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"PATCH","o":"/conversations/conversations/2026-09/threads/{threadId}","q":{"exist":["archived","id"]},"r":{"param":{"threadId":"id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.threadAssociations`"},"index$":0},{"a":true,"co":{"id":"PUT /conversations/conversations/2026-09/threads/{threadId}/assignee","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/conversations/conversations/2026-09/threads/{threadId}/assignee","q":{"$action":"assignee","exist":["thread_id"]},"r":{"param":{"threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"assignee"}],"t":{"req":"`reqdata`","res":"`body.threadAssociations`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.thread"]]},"key$":"conversations_public_thread","name__orig":"conversations_public_thread","Name":"ConversationsPublicThread","name_":"conversations_public_thread","name-":"conversations-public-thread","NAME":"CONVERSATIONS_PUBLIC_THREAD","index$":26}, {"active":true,"entity":"conversations_public_thread","key$":"BasicConversationsPublicThreadFlow","kind":"basic","name":"BasicConversationsPublicThreadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_public_thread_ref01","srcdatavar":"conversations_public_thread_ref01_data","suffix":"_up0","textfield":"associatedTicketId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_thread_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"conversations_public_thread_ref01","srcdatavar":"conversations_public_thread_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_public_thread01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_thread_ref01"}}],"index$":1}]}, 'ConversationsPublicThread', {"GET /conversations/conversations/2026-09/threads/{threadId}":{"protocol":"http","parameters":[{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":1},{"name":"association","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null,"enum":["TICKET"]}},"index$":2},{"name":"property","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":3}]},"DELETE /conversations/conversations/2026-09/threads/{threadId}/assignee":{"protocol":"http","parameters":[{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"PATCH /conversations/conversations/2026-09/threads/{threadId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"archived":{"type":"boolean","description":"Whether this thread is archived. Set to false to restore the thread.","example":null,"key$":"archived"},"status":{"type":"string","description":"The thread's status: `OPEN` or `CLOSED`.","example":null,"enum":["CLOSED","OPEN"],"key$":"status"}},"example":null,"x-ref":"#/components/schemas/ConversationsPublicThreadUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":1}]},"PUT /conversations/conversations/2026-09/threads/{threadId}/assignee":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["actorId"],"type":"object","properties":{"actorId":{"type":"string","example":null}},"example":null,"x-ref":"#/components/schemas/ConversationsPublicThreadAssignRequest"},"example":null}},"required":true},"parameters":[{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_public_thread_ref01_data = Object.values(setup.data.existing.conversations_public_thread)[0]

    // UPDATE
    const conversations_public_thread_ref01_ent = client.ConversationsPublicThread()
    const conversations_public_thread_ref01_data_up0 = {}
    conversations_public_thread_ref01_data_up0.id = conversations_public_thread_ref01_data.id

    const conversations_public_thread_ref01_markdef_up0 = { name: 'associatedTicketId', value: 'Mark01-conversations_public_thread_ref01_' + setup.now }
    conversations_public_thread_ref01_data_up0 [conversations_public_thread_ref01_markdef_up0.name] = conversations_public_thread_ref01_markdef_up0.value

    const conversations_public_thread_ref01_resdata_up0 = (await conversations_public_thread_ref01_ent.update(conversations_public_thread_ref01_data_up0)).data()
    assert(conversations_public_thread_ref01_resdata_up0.id === conversations_public_thread_ref01_data_up0.id)

    assert(conversations_public_thread_ref01_resdata_up0[conversations_public_thread_ref01_markdef_up0.name] === conversations_public_thread_ref01_markdef_up0.value)


    // LOAD
    const conversations_public_thread_ref01_match_dt0 = {}
    conversations_public_thread_ref01_match_dt0.id = conversations_public_thread_ref01_data.id
    const conversations_public_thread_ref01_data_dt0 = (await conversations_public_thread_ref01_ent.load(conversations_public_thread_ref01_match_dt0)).data()
    assert(conversations_public_thread_ref01_data_dt0.id === conversations_public_thread_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_public_thread/ConversationsPublicThreadTestData.json')

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
    ['conversations_public_thread01','conversations_public_thread02','conversations_public_thread03','thread01','thread02','thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_THREAD_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_THREAD_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_THREAD_ENTID']
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
  
