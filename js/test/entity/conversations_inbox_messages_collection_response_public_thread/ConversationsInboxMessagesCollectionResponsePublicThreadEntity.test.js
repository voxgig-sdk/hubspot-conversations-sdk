
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


describe('ConversationsInboxMessagesCollectionResponsePublicThreadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesCollectionResponsePublicThread()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":true,"sh":"Whether this thread is archived.","t":"`$BOOLEAN`","key$":"archived","index$":0},"assignedTo":{"a":true,"h":"Assigned To","n":"assignedTo","r":false,"t":"`$STRING`","key$":"assignedTo","index$":1},"associatedContactId":{"a":true,"h":"Associated Contact Id","n":"associatedContactId","r":true,"sh":"The ID of the associated Contact in the CRM.","t":"`$STRING`","key$":"associatedContactId","index$":2},"closedAt":{"a":true,"fo":"date-time","h":"Closed At","n":"closedAt","r":false,"sh":"When the thread was closed.","t":"`$STRING`","key$":"closedAt","index$":3},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"When the thread was created.","t":"`$STRING`","key$":"createdAt","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique ID of the thread.","t":"`$STRING`","key$":"id","index$":5},"inboxId":{"a":true,"h":"Inbox Id","n":"inboxId","r":true,"sh":"The ID of the conversations inbox containing the thread.","t":"`$STRING`","key$":"inboxId","index$":6},"latestMessageReceivedTimestamp":{"a":true,"fo":"date-time","h":"Latest Message Received Timestamp","n":"latestMessageReceivedTimestamp","r":false,"sh":"The time that the latest message was sent on the thread.","t":"`$STRING`","key$":"latestMessageReceivedTimestamp","index$":7},"latestMessageSentTimestamp":{"a":true,"fo":"date-time","h":"Latest Message Sent Timestamp","n":"latestMessageSentTimestamp","r":false,"sh":"The time that the latest message was sent on the thread.","t":"`$STRING`","key$":"latestMessageSentTimestamp","index$":8},"latestMessageTimestamp":{"a":true,"fo":"date-time","h":"Latest Message Timestamp","n":"latestMessageTimestamp","r":false,"sh":"The time that the latest message was sent or received on the thread.","t":"`$STRING`","key$":"latestMessageTimestamp","index$":9},"originalChannelAccountId":{"a":true,"h":"Original Channel Account Id","n":"originalChannelAccountId","r":true,"t":"`$STRING`","key$":"originalChannelAccountId","index$":10},"originalChannelId":{"a":true,"h":"Original Channel Id","n":"originalChannelId","r":true,"t":"`$STRING`","key$":"originalChannelId","index$":11},"spam":{"a":true,"h":"Spam","n":"spam","r":true,"sh":"Whether the thread is marked as spam.","t":"`$BOOLEAN`","key$":"spam","index$":12},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The thread's status: `OPEN` or `CLOSED`.","t":"`$STRING`","key$":"status","index$":13},"threadAssociations":{"a":true,"h":"Thread Associations","n":"threadAssociations","r":false,"t":"`$OBJECT`","key$":"threadAssociations","index$":14}},"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_collection_response_public_thread","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/v3/conversations/threads","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"associated_contact_id","or":"associated_contact_id","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"association","or":"association","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"inbox_id","or":"inbox_id","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"latest_message_timestamp_after","or":"latest_message_timestamp_after","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"property","or":"property","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"k":"query","n":"thread_status","or":"thread_status","r":false,"t":"`$STRING`","index$":9}]},"k":"http","m":"GET","o":"/conversations/v3/conversations/threads","q":{"exist":["after","archived","associated_contact_id","association","inbox_id","latest_message_timestamp_after","limit","property","sort","thread_status"]},"r":{},"s":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"threads"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_collection_response_public_thread","name__orig":"conversations_inbox_messages_collection_response_public_thread","Name":"ConversationsInboxMessagesCollectionResponsePublicThread","name_":"conversations_inbox_messages_collection_response_public_thread","name-":"conversations-inbox-messages-collection-response-public-thread","NAME":"CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD","index$":9}, {"active":true,"entity":"conversations_inbox_messages_collection_response_public_thread","key$":"BasicConversationsInboxMessagesCollectionResponsePublicThreadFlow","kind":"basic","name":"BasicConversationsInboxMessagesCollectionResponsePublicThreadFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"conversations_inbox_messages_collection_response_public_thread_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesCollectionResponsePublicThread', {"GET /conversations/v3/conversations/threads":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string"},"index$":0},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean"},"index$":1},{"name":"associatedContactId","in":"query","description":"Retrieve a filtered list of conversations for a specific contact by its ID. This parameter cannot be used in conjunction with the `inboxId` property.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int64"},"index$":2},{"name":"association","in":"query","description":"You can specify an association type here of `TICKET`. If this is set the response will included a thread associations object and associated ticket id if present. If there are no associations to a ticket with this conversation, then the thread associations object will not be present on the response. ","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string","enum":["TICKET"]}},"index$":3},{"name":"inboxId","in":"query","description":"The ID of the conversations inbox you can optionally include to retrieve the associated messages for. This parameter cannot be used in conjunction with the `associatedContactId` property.","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int32"}},"index$":4},{"name":"latestMessageTimestampAfter","in":"query","description":"The minimum(earliest) `latestMessageTimestamp`. This is required only when sorting by `latestMessageTimestamp`.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time"},"index$":5},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":6},{"name":"property","in":"query","description":"A specific property to include in the thread response.","required":false,"style":"form","explode":true,"schema":{"type":"string"},"index$":7},{"name":"sort","in":"query","description":"Set the sort order of the response. Valid options are `id` (default) and `latestMessageTimestamp` (which requires the `latestMessageTimestampAfter` field to also be set). If you’re filtering threads by `associatedContactId` , you can sort in descending order by prepending - to the sort option (e.g., `-id` or `-latestMessageTimestampAfter` ). Otherwise, results are always returned in ascending order.","required":false,"style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"index$":8},{"name":"threadStatus","in":"query","description":"The status of the associated conversations to filter by (either `OPEN` or `CLOSED`). This property must be provided if you’re including the `associatedContactId` query parameter.","required":false,"style":"form","explode":true,"schema":{"type":"string"},"index$":9}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_collection_response_public_thread_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_collection_response_public_thread)[0]

    // LIST
    const conversations_inbox_messages_collection_response_public_thread_ref01_ent = client.ConversationsInboxMessagesCollectionResponsePublicThread()
    const conversations_inbox_messages_collection_response_public_thread_ref01_match = {}

    const conversations_inbox_messages_collection_response_public_thread_ref01_list = (await conversations_inbox_messages_collection_response_public_thread_ref01_ent.list(conversations_inbox_messages_collection_response_public_thread_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversations_inbox_messages_collection_response_public_thread/ConversationsInboxMessagesCollectionResponsePublicThreadTestData.json')

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
    ['conversations_inbox_messages_collection_response_public_thread01','conversations_inbox_messages_collection_response_public_thread02','conversations_inbox_messages_collection_response_public_thread03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_PUBLIC_THREAD_ENTID']
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
  
