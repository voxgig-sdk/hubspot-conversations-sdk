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
(0, node_test_1.describe)('ConversationsInboxMessagesPublicThreadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_CONVERSATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotConversationsSDK.test();
        const ent = testsdk.ConversationsInboxMessagesPublicThread();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversations_inbox_messages_public_thread.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "sh": "Whether this thread is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "associatedTicketId": { "a": true, "h": "Associated Ticket Id", "n": "associatedTicketId", "r": false, "t": "`$STRING`", "key$": "associatedTicketId", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The thread's status: `OPEN` or `CLOSED`.", "t": "`$STRING`", "key$": "status", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "conversations_inbox_messages_public_thread", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /conversations/v3/conversations/threads/{threadId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "thread_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "association", "or": "association", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "property", "or": "property", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/conversations/v3/conversations/threads/{threadId}", "q": { "exist": ["archived", "association", "id", "property"] }, "r": { "param": { "threadId": "id" } }, "s": [{ "lit": "conversations" }, { "lit": "v3" }, { "lit": "conversations" }, { "lit": "threads" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.threadAssociations`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /conversations/v3/conversations/threads/{threadId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "thread_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/conversations/v3/conversations/threads/{threadId}", "q": { "exist": ["archived", "id"] }, "r": { "param": { "threadId": "id" } }, "s": [{ "lit": "conversations" }, { "lit": "v3" }, { "lit": "conversations" }, { "lit": "threads" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.threadAssociations`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "conversations_inbox_messages_public_thread", "name__orig": "conversations_inbox_messages_public_thread", "Name": "ConversationsInboxMessagesPublicThread", "name_": "conversations_inbox_messages_public_thread", "name-": "conversations-inbox-messages-public-thread", "NAME": "CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD", "index$": 19 }, { "active": true, "entity": "conversations_inbox_messages_public_thread", "key$": "BasicConversationsInboxMessagesPublicThreadFlow", "kind": "basic", "name": "BasicConversationsInboxMessagesPublicThreadFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "conversations_inbox_messages_public_thread_ref01", "srcdatavar": "conversations_inbox_messages_public_thread_ref01_data", "suffix": "_up0", "textfield": "associatedTicketId" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-conversations_inbox_messages_public_thread_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "conversations_inbox_messages_public_thread_ref01", "srcdatavar": "conversations_inbox_messages_public_thread_ref01_data", "suffix": "_dt0" }, "m": { "id": "conversations_inbox_messages_public_thread01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-conversations_inbox_messages_public_thread_ref01" } }], "index$": 1 }] }, 'ConversationsInboxMessagesPublicThread', { "GET /conversations/v3/conversations/threads/{threadId}": { "protocol": "http", "parameters": [{ "name": "archived", "in": "query", "description": "Whether to return only results that have been archived. Default is false.", "required": false, "style": "form", "explode": true, "schema": { "type": "boolean" }, "index$": 0 }, { "name": "association", "in": "query", "description": "You can specify an association type here of `TICKET`. If this is set the response will included a thread associations object and associated ticket id if present. If there are no associations to a ticket with this conversation, then the thread associations object will not be present on the response. ", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "items": { "type": "string", "enum": ["TICKET"] } }, "index$": 1 }, { "name": "property", "in": "query", "description": "A specific property to include in the thread response.", "required": false, "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 2 }, { "name": "threadId", "in": "path", "description": "The unique ID of the thread.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64" }, "index$": 3 }] }, "PATCH /conversations/v3/conversations/threads/{threadId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "archived": { "type": "boolean", "description": "Whether this thread is archived. Set to false to restore the thread.", "key$": "archived" }, "status": { "type": "string", "description": "The thread's status: `OPEN` or `CLOSED`.", "enum": ["CLOSED", "OPEN"], "key$": "status" } }, "x-ref": "#/components/schemas/ConversationsInboxMessagesPublicThreadUpdateRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "archived", "in": "query", "description": "Whether the thread to update is archived. Default is false. A thread's status property can not be updated if the thread is archived.", "required": false, "style": "form", "explode": true, "schema": { "type": "boolean" }, "index$": 0 }, { "name": "threadId", "in": "path", "description": "The unique ID of the thread.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let conversations_inbox_messages_public_thread_ref01_data = Object.values(setup.data.existing.conversations_inbox_messages_public_thread)[0];
        // UPDATE
        const conversations_inbox_messages_public_thread_ref01_ent = client.ConversationsInboxMessagesPublicThread();
        const conversations_inbox_messages_public_thread_ref01_data_up0 = {};
        conversations_inbox_messages_public_thread_ref01_data_up0.id = conversations_inbox_messages_public_thread_ref01_data.id;
        const conversations_inbox_messages_public_thread_ref01_markdef_up0 = { name: 'associatedTicketId', value: 'Mark01-conversations_inbox_messages_public_thread_ref01_' + setup.now };
        conversations_inbox_messages_public_thread_ref01_data_up0[conversations_inbox_messages_public_thread_ref01_markdef_up0.name] = conversations_inbox_messages_public_thread_ref01_markdef_up0.value;
        const conversations_inbox_messages_public_thread_ref01_resdata_up0 = (await conversations_inbox_messages_public_thread_ref01_ent.update(conversations_inbox_messages_public_thread_ref01_data_up0)).data();
        (0, node_assert_1.default)(conversations_inbox_messages_public_thread_ref01_resdata_up0.id === conversations_inbox_messages_public_thread_ref01_data_up0.id);
        (0, node_assert_1.default)(conversations_inbox_messages_public_thread_ref01_resdata_up0[conversations_inbox_messages_public_thread_ref01_markdef_up0.name] === conversations_inbox_messages_public_thread_ref01_markdef_up0.value);
        // LOAD
        const conversations_inbox_messages_public_thread_ref01_match_dt0 = {};
        conversations_inbox_messages_public_thread_ref01_match_dt0.id = conversations_inbox_messages_public_thread_ref01_data.id;
        const conversations_inbox_messages_public_thread_ref01_data_dt0 = (await conversations_inbox_messages_public_thread_ref01_ent.load(conversations_inbox_messages_public_thread_ref01_match_dt0)).data();
        (0, node_assert_1.default)(conversations_inbox_messages_public_thread_ref01_data_dt0.id === conversations_inbox_messages_public_thread_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversations_inbox_messages_public_thread/ConversationsInboxMessagesPublicThreadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotConversationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversations_inbox_messages_public_thread01', 'conversations_inbox_messages_public_thread02', 'conversations_inbox_messages_public_thread03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID': idmap,
        'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
        'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_CONVERSATIONS_APIKEY': '',
    });
    idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID'];
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
//# sourceMappingURL=ConversationsInboxMessagesPublicThreadEntity.test.js.map