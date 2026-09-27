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
(0, node_test_1.describe)('ConversationsCollectionResponsePublicThreadForwardPagingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_CONVERSATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotConversationsSDK.test();
        const ent = testsdk.ConversationsCollectionResponsePublicThreadForwardPaging();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversations_collection_response_public_thread_forward_paging.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": true, "sh": "Whether this thread is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "assignedTo": { "a": true, "h": "Assigned To", "n": "assignedTo", "r": false, "t": "`$STRING`", "key$": "assignedTo", "index$": 1 }, "associatedContactId": { "a": true, "h": "Associated Contact Id", "n": "associatedContactId", "r": true, "sh": "The ID of the associated Contact in the CRM.", "t": "`$STRING`", "key$": "associatedContactId", "index$": 2 }, "closedAt": { "a": true, "fo": "date-time", "h": "Closed At", "n": "closedAt", "r": false, "sh": "When the thread was closed.", "t": "`$STRING`", "key$": "closedAt", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "When the thread was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique ID of the thread.", "t": "`$STRING`", "key$": "id", "index$": 5 }, "inboxId": { "a": true, "h": "Inbox Id", "n": "inboxId", "r": true, "sh": "The ID of the conversations inbox containing the thread.", "t": "`$STRING`", "key$": "inboxId", "index$": 6 }, "latestMessageReceivedTimestamp": { "a": true, "fo": "date-time", "h": "Latest Message Received Timestamp", "n": "latestMessageReceivedTimestamp", "r": false, "sh": "The time that the latest message was sent on the thread.", "t": "`$STRING`", "key$": "latestMessageReceivedTimestamp", "index$": 7 }, "latestMessageSentTimestamp": { "a": true, "fo": "date-time", "h": "Latest Message Sent Timestamp", "n": "latestMessageSentTimestamp", "r": false, "sh": "The time that the latest message was sent on the thread.", "t": "`$STRING`", "key$": "latestMessageSentTimestamp", "index$": 8 }, "latestMessageTimestamp": { "a": true, "fo": "date-time", "h": "Latest Message Timestamp", "n": "latestMessageTimestamp", "r": false, "sh": "The time that the latest message was sent or received on the thread.", "t": "`$STRING`", "key$": "latestMessageTimestamp", "index$": 9 }, "originalChannelAccountId": { "a": true, "h": "Original Channel Account Id", "n": "originalChannelAccountId", "r": true, "t": "`$STRING`", "key$": "originalChannelAccountId", "index$": 10 }, "originalChannelId": { "a": true, "h": "Original Channel Id", "n": "originalChannelId", "r": true, "t": "`$STRING`", "key$": "originalChannelId", "index$": 11 }, "spam": { "a": true, "h": "Spam", "n": "spam", "r": true, "sh": "Whether the thread is marked as spam.", "t": "`$BOOLEAN`", "key$": "spam", "index$": 12 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The thread's status: `OPEN` or `CLOSED`.", "t": "`$STRING`", "key$": "status", "index$": 13 }, "threadAssociations": { "a": true, "h": "Thread Associations", "n": "threadAssociations", "r": false, "t": "`$OBJECT`", "key$": "threadAssociations", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "conversations_collection_response_public_thread_forward_paging", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /conversations/conversations/2026-09/threads", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": null, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": null, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": null, "k": "query", "n": "associated_contact_id", "or": "associated_contact_id", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": null, "k": "query", "n": "associated_ticket_id", "or": "associated_ticket_id", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": null, "k": "query", "n": "association", "or": "association", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "ex": null, "k": "query", "n": "inbox_id", "or": "inbox_id", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "ex": null, "k": "query", "n": "latest_message_timestamp_after", "or": "latest_message_timestamp_after", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": null, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "ex": null, "k": "query", "n": "property", "or": "property", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": null, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ARRAY`", "index$": 9 }, { "a": true, "ex": null, "k": "query", "n": "thread_status", "or": "thread_status", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/conversations/conversations/2026-09/threads", "q": { "exist": ["after", "archived", "associated_contact_id", "associated_ticket_id", "association", "inbox_id", "latest_message_timestamp_after", "limit", "property", "sort", "thread_status"] }, "r": {}, "s": [{ "lit": "conversations" }, { "lit": "conversations" }, { "lit": "2026-09" }, { "lit": "threads" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "conversations_collection_response_public_thread_forward_paging", "name__orig": "conversations_collection_response_public_thread_forward_paging", "Name": "ConversationsCollectionResponsePublicThreadForwardPaging", "name_": "conversations_collection_response_public_thread_forward_paging", "name-": "conversations-collection-response-public-thread-forward-paging", "NAME": "CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING", "index$": 3 }, { "active": true, "entity": "conversations_collection_response_public_thread_forward_paging", "key$": "BasicConversationsCollectionResponsePublicThreadForwardPagingFlow", "kind": "basic", "name": "BasicConversationsCollectionResponsePublicThreadForwardPagingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "conversations_collection_response_public_thread_forward_paging_ref01" } }], "index$": 0 }] }, 'ConversationsCollectionResponsePublicThreadForwardPaging', { "GET /conversations/conversations/2026-09/threads": { "protocol": "http", "parameters": [{ "name": "after", "in": "query", "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null }, "index$": 0 }, { "name": "archived", "in": "query", "description": "Whether to return only results that have been archived.", "required": false, "style": "form", "explode": true, "schema": { "type": "boolean", "example": null }, "index$": 1 }, { "name": "associatedContactId", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 2 }, { "name": "associatedTicketId", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 3 }, { "name": "association", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "example": null, "items": { "type": "string", "example": null, "enum": ["TICKET"] } }, "index$": 4 }, { "name": "inboxId", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "example": null, "items": { "type": "integer", "format": "int32", "example": null } }, "index$": 5 }, { "name": "latestMessageTimestampAfter", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "format": "date-time", "example": null }, "index$": 6 }, { "name": "limit", "in": "query", "description": "The maximum number of results to display per page.", "required": false, "style": "form", "explode": true, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 7 }, { "name": "property", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null }, "index$": 8 }, { "name": "sort", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "example": null, "items": { "type": "string", "example": null } }, "index$": 9 }, { "name": "threadStatus", "in": "query", "description": "", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null, "enum": ["CLOSED", "OPEN"] }, "index$": 10 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let conversations_collection_response_public_thread_forward_paging_ref01_data = Object.values(setup.data.existing.conversations_collection_response_public_thread_forward_paging)[0];
        // LIST
        const conversations_collection_response_public_thread_forward_paging_ref01_ent = client.ConversationsCollectionResponsePublicThreadForwardPaging();
        const conversations_collection_response_public_thread_forward_paging_ref01_match = {};
        const conversations_collection_response_public_thread_forward_paging_ref01_list = (await conversations_collection_response_public_thread_forward_paging_ref01_ent.list(conversations_collection_response_public_thread_forward_paging_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversations_collection_response_public_thread_forward_paging/ConversationsCollectionResponsePublicThreadForwardPagingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotConversationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversations_collection_response_public_thread_forward_paging01', 'conversations_collection_response_public_thread_forward_paging02', 'conversations_collection_response_public_thread_forward_paging03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING_ENTID': idmap,
        'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
        'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_CONVERSATIONS_APIKEY': '',
    });
    idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_COLLECTION_RESPONSE_PUBLIC_THREAD_FORWARD_PAGING_ENTID'];
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
//# sourceMappingURL=ConversationsCollectionResponsePublicThreadForwardPagingEntity.test.js.map