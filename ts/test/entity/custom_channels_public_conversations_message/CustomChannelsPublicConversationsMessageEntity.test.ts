

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CustomChannelsPublicConversationsMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotConversationsSDK.test()
    const ent = testsdk.CustomChannelsPublicConversationsMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_channels_public_conversations_message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":true,"sh":"A boolean indicating whether the message is archived.","t":"`$BOOLEAN`","key$":"archived","index$":0},"associateWithContactId":{"a":true,"fo":"int64","h":"Associate With Contact Id","n":"associateWithContactId","r":false,"sh":"The ID of the contact with which this message should be associated.","t":"`$INTEGER`","key$":"associateWithContactId","index$":1},"attachments":{"a":true,"h":"Attachments","n":"attachments","r":true,"sh":"An array of attachments included with the message, which can be files, locations, contacts, or other supported types.","t":"`$ARRAY`","union":{"branches":8,"count":1,"depth":1},"key$":"attachments","index$":2},"channelAccountId":{"a":true,"h":"Channel Account Id","n":"channelAccountId","r":true,"sh":"The identifier of the channel account associated with the message.","t":"`$STRING`","key$":"channelAccountId","index$":3},"channelId":{"a":true,"h":"Channel Id","n":"channelId","r":true,"sh":"The identifier of the channel through which the message was sent.","t":"`$STRING`","key$":"channelId","index$":4},"client":{"a":true,"h":"Client","n":"client","r":true,"t":"`$OBJECT`","key$":"client","index$":5},"conversationsThreadId":{"a":true,"h":"Conversations Thread Id","n":"conversationsThreadId","r":true,"sh":"The identifier for the conversation thread to which this message belongs.","t":"`$STRING`","key$":"conversationsThreadId","index$":6},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date and time when the message was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":7},"createdBy":{"a":true,"h":"Created By","n":"createdBy","r":true,"sh":"The identifier of the user or system that created the message.","t":"`$STRING`","key$":"createdBy","index$":8},"direction":{"a":true,"h":"Direction","n":"direction","r":true,"sh":"The direction of the message, either 'INCOMING' or 'OUTGOING'.","t":"`$STRING`","key$":"direction","index$":9},"errorMessage":{"a":true,"h":"Error Message","n":"errorMessage","r":false,"sh":"A string containing an error message, if applicable.","t":"`$STRING`","key$":"errorMessage","index$":10},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the message.","t":"`$STRING`","key$":"id","index$":11},"inReplyToId":{"a":true,"h":"In Reply To Id","n":"inReplyToId","r":false,"sh":"The identifier of the message to which this message is a reply, if applicable.","t":"`$STRING`","key$":"inReplyToId","index$":12},"integrationIdempotencyId":{"a":true,"h":"Integration Idempotency Id","n":"integrationIdempotencyId","r":false,"sh":"A unique identifier to ensure idempotency of the message within the integration.","t":"`$STRING`","key$":"integrationIdempotencyId","index$":13},"integrationThreadId":{"a":true,"h":"Integration Thread Id","n":"integrationThreadId","r":false,"sh":"A unique identifier for the thread within the integration.","t":"`$STRING`","key$":"integrationThreadId","index$":14},"messageDirection":{"a":true,"h":"Message Direction","n":"messageDirection","r":true,"sh":"The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.","t":"`$STRING`","key$":"messageDirection","index$":15},"preResolvedContacts":{"a":true,"h":"Pre Resolved Contacts","n":"preResolvedContacts","r":true,"t":"`$OBJECT`","key$":"preResolvedContacts","index$":16},"recipients":{"a":true,"h":"Recipients","n":"recipients","r":true,"sh":"An array of recipients of the message, each containing recipient details.","t":"`$ARRAY`","key$":"recipients","index$":17},"richText":{"a":true,"h":"Rich Text","n":"richText","r":false,"sh":"The rich text content of the message, if available.","t":"`$STRING`","key$":"richText","index$":18},"senders":{"a":true,"h":"Senders","n":"senders","r":true,"sh":"An array of senders associated with the message, each containing sender details.","t":"`$ARRAY`","key$":"senders","index$":19},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$OBJECT`","key$":"status","index$":20},"statusType":{"a":true,"h":"Status Type","n":"statusType","r":true,"sh":"Valid status are SENT, FAILED, and READ","t":"`$STRING`","key$":"statusType","index$":21},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"The subject of the message, if applicable.","t":"`$STRING`","key$":"subject","index$":22},"text":{"a":true,"h":"Text","n":"text","r":true,"sh":"The plain text content of the message.","t":"`$STRING`","key$":"text","index$":23},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":true,"sh":"The date and time when the message was created, in ISO 8601 format.","t":"`$STRING`","key$":"timestamp","index$":24},"truncationStatus":{"a":true,"h":"Truncation Status","n":"truncationStatus","r":true,"sh":"Indicates whether the message content is truncated.","t":"`$STRING`","key$":"truncationStatus","index$":25},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the message, which is always 'MESSAGE'.","t":"`$STRING`","key$":"type","index$":26},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the message was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":27}},"id":{"field":"id","name":"id"},"name":"custom_channels_public_conversations_message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/custom-channels/2026-09/{channelId}/messages","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/conversations/custom-channels/2026-09/{channelId}/messages","q":{"exist":["channel_id"]},"r":{"param":{"channelId":"channel_id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"message_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}","q":{"exist":["channel_id","id"]},"r":{"param":{"channelId":"channel_id","messageId":"id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"channel_id","or":"channel_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"message_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}","q":{"exist":["channel_id","id"]},"r":{"param":{"channelId":"channel_id","messageId":"id"}},"s":[{"lit":"conversations"},{"lit":"custom-channels"},{"lit":"2026-09"},{"var":"channel_id"},{"lit":"messages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_channels_public_conversations_message","name__orig":"custom_channels_public_conversations_message","Name":"CustomChannelsPublicConversationsMessage","name_":"custom_channels_public_conversations_message","name-":"custom-channels-public-conversations-message","NAME":"CUSTOM_CHANNELS_PUBLIC_CONVERSATIONS_MESSAGE","index$":32}, {"active":true,"entity":"custom_channels_public_conversations_message","key$":"BasicCustomChannelsPublicConversationsMessageFlow","kind":"basic","name":"BasicCustomChannelsPublicConversationsMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_channels_public_conversations_message_ref01"},"m":{"channel_id":"channel01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"channel_id":"channel01"},"i":{"ref":"custom_channels_public_conversations_message_ref01","srcdatavar":"custom_channels_public_conversations_message_ref01_data","suffix":"_up0","textfield":"channelAccountId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_conversations_message_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_channels_public_conversations_message_ref01","srcdatavar":"custom_channels_public_conversations_message_ref01_data","suffix":"_dt0"},"m":{"channel_id":"channel01","id":"custom_channels_public_conversations_message01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_channels_public_conversations_message_ref01"}}],"index$":2}]}, 'CustomChannelsPublicConversationsMessage', {"POST /conversations/custom-channels/2026-09/{channelId}/messages":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["attachments","channelAccountId","messageDirection","recipients","senders","text","timestamp"],"type":"object","properties":{"associateWithContactId":{"type":"integer","description":"The ID of the contact with which this message should be associated.","format":"int64","example":null,"key$":"associateWithContactId"},"attachments":{"type":"array","description":"An array of attachments included with the message, which can be files, locations, contacts, or other supported types.","example":null,"items":{"example":null,"oneOf":[{"title":"FILE","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsFileAttachment"},{"title":"LOCATION","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsLocationAttachment"},{"title":"CONTACT","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsContactAttachment"},{"title":"UNSUPPORTED_CONTENT","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsUnsupportedContentAttachment"},{"title":"MESSAGE_HEADER","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsMessageHeaderAttachment"},{"title":"QUICK_REPLIES","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsQuickRepliesAttachment"},{"title":"SOCIAL_MEDIA_METADATA","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/CustomChannelsSocialMetadataIntegrationAttachment"}]},"key$":"attachments"},"channelAccountId":{"type":"string","description":"The ID of the channel account through which the message is sent.","example":null,"key$":"channelAccountId"},"inReplyToId":{"type":"string","description":"The ID of the message this message is replying to.","example":null,"key$":"inReplyToId"},"integrationIdempotencyId":{"type":"string","description":"A unique identifier to ensure idempotency of the message within the integration.","example":null,"key$":"integrationIdempotencyId"},"integrationThreadId":{"type":"string","description":"A unique identifier for the thread within the integration.","example":null,"key$":"integrationThreadId"},"messageDirection":{"type":"string","description":"The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.","example":null,"enum":["INCOMING","OUTGOING"],"key$":"messageDirection"},"preResolvedContacts":{"required":["contacts"],"type":"object","properties":{"contacts":{"type":"array","description":"An array of PreResolvedContact objects. Each object contains information about a contact that has been pre-resolved, including properties that led to the match. This array is required.","example":null,"items":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/CustomChannelsPreResolvedContact"}}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPreResolvedContacts","key$":"preResolvedContacts"},"recipients":{"type":"array","description":"An array of participants representing the recipients of the message.","example":null,"items":{"required":["deliveryIdentifier"],"type":"object","properties":{"deliveryIdentifier":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicDeliveryIdentifier"},"name":{"type":"string","description":"The name of the participant. It is a string that can be used to identify the participant within the channel.","example":null},"senderActorId":{"type":"string","description":"A string representing the unique identifier of the sender actor. This is used to distinguish the sender within the channel integration.","example":null}},"example":null,"x-ref":"#/components/schemas/CustomChannelsChannelIntegrationParticipant"},"key$":"recipients"},"richText":{"type":"string","description":"The rich text content of the message, allowing for formatting.","example":null,"key$":"richText"},"senders":{"type":"array","description":"An array of participants representing the senders of the message.","example":null,"items":{"required":["deliveryIdentifier"],"type":"object","properties":{"deliveryIdentifier":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicDeliveryIdentifier"},"name":{"type":"string","description":"The name of the participant. It is a string that can be used to identify the participant within the channel.","example":null},"senderActorId":{"type":"string","description":"A string representing the unique identifier of the sender actor. This is used to distinguish the sender within the channel integration.","example":null}},"example":null,"x-ref":"#/components/schemas/CustomChannelsChannelIntegrationParticipant"},"key$":"senders"},"text":{"type":"string","description":"The plain text content of the message.","example":null,"key$":"text"},"timestamp":{"type":"string","description":"The date and time when the message was created, in ISO 8601 format.","format":"date-time","example":null,"key$":"timestamp"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsChannelIntegrationMessageEgg","index$":1},"example":null}},"required":true},"parameters":[{"name":"channelId","in":"path","description":"The unique identifier of the custom channel where the message will be created.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}":{"protocol":"http","parameters":[{"name":"channelId","in":"path","description":"The unique identifier of the custom channel from which the message is to be retrieved.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0},{"name":"messageId","in":"path","description":"The unique identifier of the message to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":1}]},"PATCH /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["statusType"],"type":"object","properties":{"errorMessage":{"type":"string","description":"A string containing an error message, if applicable.","example":null,"key$":"errorMessage"},"statusType":{"type":"string","description":"Valid status are SENT, FAILED, and READ","example":null,"enum":["FAILED","READ","SENT"],"key$":"statusType"}},"example":null,"x-ref":"#/components/schemas/CustomChannelsPublicChannelIntegrationMessageUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"channelId","in":"path","description":"The unique identifier of the custom channel that contains the message.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0},{"name":"messageId","in":"path","description":"The unique identifier of the message to update.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_channels_public_conversations_message_ref01_ent = client.CustomChannelsPublicConversationsMessage()
    let custom_channels_public_conversations_message_ref01_data = setup.data.new.custom_channels_public_conversations_message['custom_channels_public_conversations_message_ref01']
    custom_channels_public_conversations_message_ref01_data['channel_id'] = setup.idmap['channel01']

    custom_channels_public_conversations_message_ref01_data = (await custom_channels_public_conversations_message_ref01_ent.create(custom_channels_public_conversations_message_ref01_data)).data()
    assert(null != custom_channels_public_conversations_message_ref01_data.id)


    // UPDATE
    const custom_channels_public_conversations_message_ref01_data_up0: any = {}
    custom_channels_public_conversations_message_ref01_data_up0.id = custom_channels_public_conversations_message_ref01_data.id
    custom_channels_public_conversations_message_ref01_data_up0 ['channel_id'] = setup.idmap['channel_id']

    const custom_channels_public_conversations_message_ref01_markdef_up0 = { name: 'channelAccountId', value: 'Mark01-custom_channels_public_conversations_message_ref01_' + setup.now }
    ;(custom_channels_public_conversations_message_ref01_data_up0 as any)[custom_channels_public_conversations_message_ref01_markdef_up0.name] = custom_channels_public_conversations_message_ref01_markdef_up0.value

    const custom_channels_public_conversations_message_ref01_resdata_up0 = (await custom_channels_public_conversations_message_ref01_ent.update(custom_channels_public_conversations_message_ref01_data_up0)).data()
    assert(custom_channels_public_conversations_message_ref01_resdata_up0.id === custom_channels_public_conversations_message_ref01_data_up0.id)

    assert((custom_channels_public_conversations_message_ref01_resdata_up0 as any)[custom_channels_public_conversations_message_ref01_markdef_up0.name] === custom_channels_public_conversations_message_ref01_markdef_up0.value)


    // LOAD
    const custom_channels_public_conversations_message_ref01_match_dt0: any = {}
    custom_channels_public_conversations_message_ref01_match_dt0.id = custom_channels_public_conversations_message_ref01_data.id
    const custom_channels_public_conversations_message_ref01_data_dt0 = (await custom_channels_public_conversations_message_ref01_ent.load(custom_channels_public_conversations_message_ref01_match_dt0)).data()
    assert(custom_channels_public_conversations_message_ref01_data_dt0.id === custom_channels_public_conversations_message_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_channels_public_conversations_message/CustomChannelsPublicConversationsMessageTestData.json')

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
    ['custom_channels_public_conversations_message01','custom_channels_public_conversations_message02','custom_channels_public_conversations_message03','channel01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CONVERSATIONS_MESSAGE_ENTID': idmap,
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CONVERSATIONS_MESSAGE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CONVERSATIONS_MESSAGE_ENTID']
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
  
