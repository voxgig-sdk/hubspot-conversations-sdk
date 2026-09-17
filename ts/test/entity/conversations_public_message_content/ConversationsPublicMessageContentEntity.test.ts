

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"richText","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"text","req":false,"type":"`$STRING`","index$":1}],"name":"conversations_public_message_content","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"message_id","orig":"message_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"param","name":"thread_id","orig":"thread_id","reqd":true,"type":"`$INTEGER`","index$":1}],"query":[{"active":true,"example":null,"kind":"query","name":"property","orig":"property","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content","json":"{\"operationId\":\"get-/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content\",\"parameters\":[{\"description\":\"\",\"explode\":false,\"in\":\"path\",\"name\":\"messageId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"\",\"explode\":false,\"in\":\"path\",\"name\":\"threadId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"property\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"richText\":{\"example\":null,\"type\":\"string\"},\"text\":{\"example\":null,\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content","rename":{"param":{"messageId":"message_id","threadId":"thread_id"}},"segments":[{"lit":"conversations"},{"lit":"conversations"},{"lit":"2026-09"},{"lit":"threads"},{"var":"thread_id"},{"lit":"messages"},{"var":"message_id"},{"lit":"original-content"}],"select":{"exist":["message_id","property","thread_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["thread","message"]]},"key$":"conversations_public_message_content","name__orig":"conversations_public_message_content","Name":"ConversationsPublicMessageContent","name_":"conversations_public_message_content","name-":"conversations-public-message-content","NAME":"CONVERSATIONS_PUBLIC_MESSAGE_CONTENT","index$":25}, {"active":true,"entity":"conversations_public_message_content","key$":"BasicConversationsPublicMessageContentFlow","kind":"basic","name":"BasicConversationsPublicMessageContentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"conversations_public_message_content_ref01","srcdatavar":"conversations_public_message_content_ref01_data","suffix":"_dt0"},"match":{"id":"conversations_public_message_content01","thread_id":"thread01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversations_public_message_content_ref01"}}],"index$":0}]}, 'ConversationsPublicMessageContent')
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
    ['conversations_public_message_content01','conversations_public_message_content02','conversations_public_message_content03','thread01','thread02','thread03','message01','message02','message03'],
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
  
