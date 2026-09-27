
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


describe('ConversationsInboxMessagesPublicMessageContentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesPublicMessageContent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"richText":{"a":true,"h":"Rich Text","n":"richText","r":false,"t":"`$STRING`","key$":"richText","index$":0},"text":{"a":true,"h":"Text","n":"text","r":false,"t":"`$STRING`","key$":"text","index$":1}},"name":"conversations_inbox_messages_public_message_content","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"message_id","or":"message_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content","q":{"exist":["message_id","property","thread_id"]},"r":{"param":{"messageId":"message_id","threadId":"thread_id"}},"s":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"threads"},{"var":"thread_id"},{"lit":"messages"},{"var":"message_id"},{"lit":"original-content"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.thread"]]},"key$":"conversations_inbox_messages_public_message_content","name__orig":"conversations_inbox_messages_public_message_content","Name":"ConversationsInboxMessagesPublicMessageContent","name_":"conversations_inbox_messages_public_message_content","name-":"conversations-inbox-messages-public-message-content","NAME":"CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_CONTENT","index$":18}, {"active":true,"entity":"conversations_inbox_messages_public_message_content","key$":"BasicConversationsInboxMessagesPublicMessageContentFlow","kind":"basic","name":"BasicConversationsInboxMessagesPublicMessageContentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversations_inbox_messages_public_message_content_ref01","srcdatavar":"conversations_inbox_messages_public_message_content_ref01_data","suffix":"_dt0"},"m":{"id":"conversations_inbox_messages_public_message_content01","thread_id":"thread01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_inbox_messages_public_message_content_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesPublicMessageContent', {"GET /conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content":{"protocol":"http","parameters":[{"name":"messageId","in":"path","description":"The unique ID of the message.","required":true,"style":"simple","explode":false,"schema":{"type":"string"},"index$":0},{"name":"property","in":"query","description":"A specific property to include in the original content response.","required":false,"style":"form","explode":true,"schema":{"type":"string"},"index$":1},{"name":"threadId","in":"path","description":"The unique ID of the thread.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_public_message_content_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_public_message_content)[0]

    // LOAD
    const conversations_inbox_messages_public_message_content_ref01_ent = client.ConversationsInboxMessagesPublicMessageContent()
    const conversations_inbox_messages_public_message_content_ref01_match_dt0 = {}
    const conversations_inbox_messages_public_message_content_ref01_data_dt0 = (await conversations_inbox_messages_public_message_content_ref01_ent.load(conversations_inbox_messages_public_message_content_ref01_match_dt0)).data()
    assert(null != conversations_inbox_messages_public_message_content_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_public_message_content/ConversationsInboxMessagesPublicMessageContentTestData.json')

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
    ['conversations_inbox_messages_public_message_content01','conversations_inbox_messages_public_message_content02','conversations_inbox_messages_public_message_content03','thread01','thread02','thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_CONTENT_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_CONTENT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_CONTENT_ENTID']
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
  
