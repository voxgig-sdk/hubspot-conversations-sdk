
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


describe('ConversationsCollectionResponsePublicMessageForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsCollectionResponsePublicMessageForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"paging":{"a":true,"h":"Paging","n":"paging","r":false,"t":"`$OBJECT`","key$":"paging","index$":0},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","union":{"branches":8,"count":5,"depth":12},"key$":"results","index$":1}},"name":"conversations_collection_response_public_message_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/conversations/2026-09/threads/{threadId}/messages","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":null,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":4}]},"k":"http","m":"GET","o":"/conversations/conversations/2026-09/threads/{threadId}/messages","q":{"exist":["after","archived","limit","property","sort","thread_id"]},"r":{"param":{"threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.thread"]]},"key$":"conversations_collection_response_public_message_forward_paging","name__orig":"conversations_collection_response_public_message_forward_paging","Name":"ConversationsCollectionResponsePublicMessageForwardPaging","name_":"conversations_collection_response_public_message_forward_paging","name-":"conversations-collection-response-public-message-forward-paging","NAME":"CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_MESSAGE_FORWARD_PAGING","index$":2}, {"active":true,"entity":"conversations_collection_response_public_message_forward_paging","key$":"BasicConversationsCollectionResponsePublicMessageForwardPagingFlow","kind":"basic","name":"BasicConversationsCollectionResponsePublicMessageForwardPagingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"thread_id":"thread01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"conversations_collection_response_public_message_forward_paging_ref01"}}],"index$":0}]}, 'ConversationsCollectionResponsePublicMessageForwardPaging', {"GET /conversations/conversations/2026-09/threads/{threadId}/messages":{"protocol":"http","parameters":[{"name":"threadId","in":"path","description":"","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":1},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":2},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":3},{"name":"property","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":4},{"name":"sort","in":"query","description":"","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_collection_response_public_message_forward_paging_ref01_data = Object.values(setup.data.existing.conversations_collection_response_public_message_forward_paging)[0]

    // LIST
    const conversations_collection_response_public_message_forward_paging_ref01_ent = client.ConversationsCollectionResponsePublicMessageForwardPaging()
    const conversations_collection_response_public_message_forward_paging_ref01_match = {}
    conversations_collection_response_public_message_forward_paging_ref01_match['thread_id'] = setup.idmap['thread01']

    const conversations_collection_response_public_message_forward_paging_ref01_list = (await conversations_collection_response_public_message_forward_paging_ref01_ent.list(conversations_collection_response_public_message_forward_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_collection_response_public_message_forward_paging/ConversationsCollectionResponsePublicMessageForwardPagingTestData.json')

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
    ['conversations_collection_response_public_message_forward_paging01','conversations_collection_response_public_message_forward_paging02','conversations_collection_response_public_message_forward_paging03','thread01','thread02','thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_MESSAGE_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_MESSAGE_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_MESSAGE_FORWARD_PAGING_ENTID']
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
  
