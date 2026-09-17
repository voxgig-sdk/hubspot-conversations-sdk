

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ConversationsInboxMessagesPublicInboxEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.ConversationsInboxMessagesPublicInbox()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversations_inbox_messages_public_inbox.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":true,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"archivedAt","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"When the inbox was created.","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"short":"The ID of the inbox.","type":"`$STRING`","index$":3},{"active":true,"name":"name","req":true,"short":"The name of the inbox.","type":"`$STRING`","index$":4},{"active":true,"name":"type","req":true,"short":"Specifies whether this refers to a Conversations Inbox or to the Help Desk.","type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"updatedAt","req":true,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"conversations_inbox_messages_public_inbox","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"inbox_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"archived","orig":"archived","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /conversations/v3/conversations/inboxes/{inboxId}","json":"{\"operationId\":\"get-/conversations/v3/conversations/inboxes/{inboxId}\",\"parameters\":[{\"description\":\"Whether to include archived inboxes in the response.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"The unique ID of the inbox.\",\"explode\":false,\"in\":\"path\",\"name\":\"inboxId\",\"required\":true,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"archived\":{\"type\":\"boolean\"},\"archivedAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"When the inbox was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The ID of the inbox.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the inbox.\",\"type\":\"string\"},\"type\":{\"description\":\"Specifies whether this refers to a Conversations Inbox or to the Help Desk. Valid values are INBOX or HELP_DESK\",\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"archived\",\"createdAt\",\"id\",\"name\",\"type\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"items\":{\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"An error occurred.\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/v3/conversations/inboxes/{inboxId}","rename":{"param":{"inboxId":"id"}},"segments":[{"lit":"conversations"},{"lit":"v3"},{"lit":"conversations"},{"lit":"inboxes"},{"var":"id"}],"select":{"exist":["archived","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"conversations_inbox_messages_public_inbox","name__orig":"conversations_inbox_messages_public_inbox","Name":"ConversationsInboxMessagesPublicInbox","name_":"conversations_inbox_messages_public_inbox","name-":"conversations-inbox-messages-public-inbox","NAME":"CONVERSATIONS_INBOX_MESSAGES_PUBLIC_INBOX","index$":16}, {"active":true,"entity":"conversations_inbox_messages_public_inbox","key$":"BasicConversationsInboxMessagesPublicInboxFlow","kind":"basic","name":"BasicConversationsInboxMessagesPublicInboxFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"conversations_inbox_messages_public_inbox_ref01","srcdatavar":"conversations_inbox_messages_public_inbox_ref01_data","suffix":"_dt0"},"match":{"id":"conversations_inbox_messages_public_inbox01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_inbox_messages_public_inbox_ref01"}}],"index$":0}]}, 'ConversationsInboxMessagesPublicInbox')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversations_inbox_messages_public_inbox_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_public_inbox)[0] as any

    // LOAD
    const conversations_inbox_messages_public_inbox_ref01_ent = client.ConversationsInboxMessagesPublicInbox()
    const conversations_inbox_messages_public_inbox_ref01_match_dt0: any = {}
    conversations_inbox_messages_public_inbox_ref01_match_dt0.id = conversations_inbox_messages_public_inbox_ref01_data.id
    const conversations_inbox_messages_public_inbox_ref01_data_dt0 = (await conversations_inbox_messages_public_inbox_ref01_ent.load(conversations_inbox_messages_public_inbox_ref01_match_dt0)).data()
    assert(conversations_inbox_messages_public_inbox_ref01_data_dt0.id === conversations_inbox_messages_public_inbox_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversations_inbox_messages_public_inbox/ConversationsInboxMessagesPublicInboxTestData.json')

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
    ['conversations_inbox_messages_public_inbox01','conversations_inbox_messages_public_inbox02','conversations_inbox_messages_public_inbox03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_INBOX_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_INBOX_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_INBOX_ENTID']
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
  
