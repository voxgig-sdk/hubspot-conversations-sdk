"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ConversationsInboxMessagesPublicMessageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_CONVERSATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotConversationsSDK.test();
        const ent = testsdk.ConversationsInboxMessagesPublicMessage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversations_inbox_messages_public_message.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "conversations_inbox_messages_public_message", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /conversations/v3/conversations/threads/{threadId}/messages", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/conversations/v3/conversations/threads/{threadId}/messages", "q": { "exist": ["thread_id"] }, "r": { "param": { "threadId": "thread_id" } }, "s": [{ "lit": "conversations" }, { "lit": "v3" }, { "lit": "conversations" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "messages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /conversations/v3/conversations/threads/{threadId}/messages/{messageId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "message_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$INTEGER`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "property", "or": "property", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}", "q": { "exist": ["id", "property", "thread_id"] }, "r": { "param": { "messageId": "id", "threadId": "thread_id" } }, "s": [{ "lit": "conversations" }, { "lit": "v3" }, { "lit": "conversations" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "messages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.thread"]] }, "key$": "conversations_inbox_messages_public_message", "name__orig": "conversations_inbox_messages_public_message", "Name": "ConversationsInboxMessagesPublicMessage", "name_": "conversations_inbox_messages_public_message", "name-": "conversations-inbox-messages-public-message", "NAME": "CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE", "index$": 17 }, { "active": true, "entity": "conversations_inbox_messages_public_message", "key$": "BasicConversationsInboxMessagesPublicMessageFlow", "kind": "basic", "name": "BasicConversationsInboxMessagesPublicMessageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "conversations_inbox_messages_public_message_ref01" }, "m": { "thread_id": "thread01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "conversations_inbox_messages_public_message_ref01", "srcdatavar": "conversations_inbox_messages_public_message_ref01_data", "suffix": "_dt0" }, "m": { "id": "conversations_inbox_messages_public_message01", "thread_id": "thread01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-conversations_inbox_messages_public_message_ref01" } }], "index$": 1 }] }, 'ConversationsInboxMessagesPublicMessage', { "POST /conversations/v3/conversations/threads/{threadId}/messages": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": {}, "oneOf": [{ "properties": {}, "allOf": [{ "properties": {}, "oneOf": "[Circular *paths./conversations/v3/conversations/threads/{threadId}/messages.post.requestBody.content.application/json.schema.oneOf]", "x-ref": "#/components/schemas/ConversationsInboxMessagesPublicMessageEgg" }, { "required": ["attachments", "channelAccountId", "channelId", "recipients", "senderActorId", "text", "type"], "type": "object", "properties": { "type": {}, "text": {}, "richText": {}, "attachments": {}, "recipients": {}, "senderActorId": {}, "channelId": {}, "channelAccountId": {}, "subject": {} }, "x-hubspot-sub-type-impl": true }], "x-ref": "#/components/schemas/ConversationsInboxMessagesPublicConversationsMessageEgg" }, { "properties": {}, "allOf": [{ "properties": {}, "oneOf": "[Circular *paths./conversations/v3/conversations/threads/{threadId}/messages.post.requestBody.content.application/json.schema.oneOf]", "x-ref": "#/components/schemas/ConversationsInboxMessagesPublicMessageEgg" }, { "required": ["attachments", "text", "type"], "type": "object", "properties": { "type": {}, "text": {}, "richText": {}, "attachments": {} }, "x-hubspot-sub-type-impl": true }], "x-ref": "#/components/schemas/ConversationsInboxMessagesPublicCommentEgg" }], "x-ref": "#/components/schemas/ConversationsInboxMessagesPublicMessageEgg", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "threadId", "in": "path", "description": "The unique ID of the thread.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64" }, "index$": 0 }] }, "GET /conversations/v3/conversations/threads/{threadId}/messages/{messageId}": { "protocol": "http", "parameters": [{ "name": "messageId", "in": "path", "description": "The unique ID of the message.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "property", "in": "query", "description": "A specific property to include in the message response.", "required": false, "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "threadId", "in": "path", "description": "The unique ID of the thread.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const conversations_inbox_messages_public_message_ref01_ent = client.ConversationsInboxMessagesPublicMessage();
        let conversations_inbox_messages_public_message_ref01_data = setup.data.new.conversations_inbox_messages_public_message['conversations_inbox_messages_public_message_ref01'];
        conversations_inbox_messages_public_message_ref01_data['thread_id'] = setup.idmap['thread01'];
        conversations_inbox_messages_public_message_ref01_data = (await conversations_inbox_messages_public_message_ref01_ent.create(conversations_inbox_messages_public_message_ref01_data)).data();
        (0, node_assert_1.default)(null != conversations_inbox_messages_public_message_ref01_data.id);
        // LOAD
        const conversations_inbox_messages_public_message_ref01_match_dt0 = {};
        conversations_inbox_messages_public_message_ref01_match_dt0.id = conversations_inbox_messages_public_message_ref01_data.id;
        const conversations_inbox_messages_public_message_ref01_data_dt0 = (await conversations_inbox_messages_public_message_ref01_ent.load(conversations_inbox_messages_public_message_ref01_match_dt0)).data();
        (0, node_assert_1.default)(conversations_inbox_messages_public_message_ref01_data_dt0.id === conversations_inbox_messages_public_message_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversations_inbox_messages_public_message/ConversationsInboxMessagesPublicMessageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotConversationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversations_inbox_messages_public_message01', 'conversations_inbox_messages_public_message02', 'conversations_inbox_messages_public_message03', 'thread01', 'thread02', 'thread03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_ENTID': idmap,
        'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
        'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_CONVERSATIONS_APIKEY': '',
    });
    idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_MESSAGE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotConversationsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ConversationsInboxMessagesPublicMessageEntity.test.js.map