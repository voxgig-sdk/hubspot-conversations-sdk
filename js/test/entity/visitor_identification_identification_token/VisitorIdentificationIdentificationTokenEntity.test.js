
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


describe('VisitorIdentificationIdentificationTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.VisitorIdentificationIdentificationToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"h":"Email","n":"email","r":true,"sh":"The email of the visitor that you wish to identify","t":"`$STRING`","key$":"email","index$":0},"firstName":{"a":true,"h":"First Name","n":"firstName","r":false,"sh":"The first name of the visitor that you wish to identify.","t":"`$STRING`","key$":"firstName","index$":1},"hsCustomerAgentContext":{"a":true,"h":"Hs Customer Agent Context","n":"hsCustomerAgentContext","r":true,"sh":"An object containing additional context about the customer agent.","t":"`$OBJECT`","key$":"hsCustomerAgentContext","index$":2},"lastName":{"a":true,"h":"Last Name","n":"lastName","r":false,"sh":"The last name of the visitor that you wish to identify.","t":"`$STRING`","key$":"lastName","index$":3},"token":{"a":true,"h":"Token","n":"token","r":true,"sh":"An identification token that allows the visitor to be treated as a known contact.","t":"`$STRING`","key$":"token","index$":4}},"name":"visitor_identification_identification_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /visitor-identification/2026-09/tokens/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/visitor-identification/2026-09/tokens/create","q":{},"r":{},"s":[{"lit":"visitor-identification"},{"lit":"2026-09"},{"lit":"tokens"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"visitor_identification_identification_token","name__orig":"visitor_identification_identification_token","Name":"VisitorIdentificationIdentificationToken","name_":"visitor_identification_identification_token","name-":"visitor-identification-identification-token","NAME":"VISITOR_IDENTIFICATION_IDENTIFICATION_TOKEN","index$":35}, {"active":true,"entity":"visitor_identification_identification_token","key$":"BasicVisitorIdentificationIdentificationTokenFlow","kind":"basic","name":"BasicVisitorIdentificationIdentificationTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"visitor_identification_identification_token_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'VisitorIdentificationIdentificationToken', {"POST /visitor-identification/2026-09/tokens/create":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["email","hsCustomerAgentContext"],"type":"object","properties":{"email":{"type":"string","description":"The email of the visitor that you wish to identify","example":null,"key$":"email"},"firstName":{"type":"string","description":"The first name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where first name is unknown. Optional.","example":null,"key$":"firstName"},"hsCustomerAgentContext":{"type":"object","additionalProperties":{"type":"string","example":null},"description":"An object containing additional context about the customer agent. This field is required and can include various string properties.","example":null,"key$":"hsCustomerAgentContext"},"lastName":{"type":"string","description":"The last name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where last name is unknown. Optional.","example":null,"key$":"lastName"}},"example":null,"x-ref":"#/components/schemas/VisitorIdentificationIdentificationTokenGenerationRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const visitor_identification_identification_token_ref01_ent = client.VisitorIdentificationIdentificationToken()
    let visitor_identification_identification_token_ref01_data = setup.data.new.visitor_identification_identification_token['visitor_identification_identification_token_ref01']

    visitor_identification_identification_token_ref01_data = (await visitor_identification_identification_token_ref01_ent.create(visitor_identification_identification_token_ref01_data)).data()
    assert(null != visitor_identification_identification_token_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/visitor_identification_identification_token/VisitorIdentificationIdentificationTokenTestData.json')

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
    ['visitor_identification_identification_token01','visitor_identification_identification_token02','visitor_identification_identification_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_VISITOR_IDENTIFICATION_IDENTIFICATION_TOKEN_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_VISITOR_IDENTIFICATION_IDENTIFICATION_TOKEN_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_VISITOR_IDENTIFICATION_IDENTIFICATION_TOKEN_ENTID']
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
  
