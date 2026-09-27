
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


describe('ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesCollectionResponseWithTotalPublic3()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":true,"t":"`$BOOLEAN`","key$":"archived","index$":0},"archivedAt":{"a":true,"fo":"date-time","h":"Archived At","n":"archivedAt","r":false,"t":"`$STRING`","key$":"archivedAt","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"When the inbox was created.","t":"`$STRING`","key$":"createdAt","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the inbox.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the inbox.","t":"`$STRING`","key$":"name","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Specifies whether this refers to a Conversations Inbox or to the Help Desk.","t":"`$STRING`","key$":"type","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_collection_response_with_total_public3","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/v3/conversations/inboxes","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"default_page_length","or":"default_page_length","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":4}]},"k":"http","m":"GET","o":"/conversations/v3/conversations/inboxes","q":{"exist":["after","archived","default_page_length","limit","sort"]},"r":{},"s":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"inboxes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_collection_response_with_total_public3","name__orig":"conversations_inbox_messages_collection_response_with_total_public3","Name":"ConversationsInboxMessagesCollectionResponseWithTotalPublic3","name_":"conversations_inbox_messages_collection_response_with_total_public3","name-":"conversations-inbox-messages-collection-response-with-total-public3","NAME":"CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3","index$":12}, {"active":true,"entity":"conversations_inbox_messages_collection_response_with_total_public3","key$":"BasicConversationsInboxMessagesCollectionResponseWithTotalPublic3Flow","kind":"basic","name":"BasicConversationsInboxMessagesCollectionResponseWithTotalPublic3Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"conversations_inbox_messages_collection_response_with_total_public3_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesCollectionResponseWithTotalPublic3', {"GET /conversations/v3/conversations/inboxes":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string"},"index$":0},{"name":"archived","in":"query","description":"Whether to include archived inboxes in the response.","required":false,"style":"form","explode":true,"schema":{"type":"boolean"},"index$":1},{"name":"defaultPageLength","in":"query","description":"The default number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":2},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":3},{"name":"sort","in":"query","description":"Specify the sort order for the inboxes.","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_collection_response_with_total_public3_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_collection_response_with_total_public3)[0]

    // LIST
    const conversations_inbox_messages_collection_response_with_total_public3_ref01_ent = client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3()
    const conversations_inbox_messages_collection_response_with_total_public3_ref01_match = {}

    const conversations_inbox_messages_collection_response_with_total_public3_ref01_list = (await conversations_inbox_messages_collection_response_with_total_public3_ref01_ent.list(conversations_inbox_messages_collection_response_with_total_public3_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_collection_response_with_total_public3/ConversationsInboxMessagesCollectionResponseWithTotalPublic3TestData.json')

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
    ['conversations_inbox_messages_collection_response_with_total_public301','conversations_inbox_messages_collection_response_with_total_public302','conversations_inbox_messages_collection_response_with_total_public303'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID']
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
  
