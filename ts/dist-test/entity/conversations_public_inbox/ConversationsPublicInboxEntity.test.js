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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ConversationsPublicInboxEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_CONVERSATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotConversationsSDK.test();
        const ent = testsdk.ConversationsPublicInbox();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversations_public_inbox.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archived", "req": true, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "format": "date-time", "name": "archivedAt", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "date-time", "name": "createdAt", "req": true, "short": "When the inbox was created.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "The ID of the inbox.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": true, "short": "The name of the inbox.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "type", "req": true, "short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": true, "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "conversations_public_inbox", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": null, "kind": "param", "name": "id", "orig": "inbox_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }], "query": [{ "active": true, "example": null, "kind": "query", "name": "archived", "orig": "archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }] }, "contract": { "id": "GET /conversations/conversations/2026-09/inboxes/{inboxId}", "json": "{\"operationId\":\"get-/conversations/conversations/2026-09/inboxes/{inboxId}\",\"parameters\":[{\"description\":\"\",\"explode\":false,\"in\":\"path\",\"name\":\"inboxId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"Whether to return only results that have been archived.\",\"explode\":true,\"in\":\"query\",\"name\":\"archived\",\"required\":false,\"schema\":{\"default\":false,\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"archived\":{\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"When the inbox was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The ID of the inbox.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the inbox.\",\"example\":null,\"type\":\"string\"},\"type\":{\"description\":\"Specifies whether this refers to a Conversations Inbox or to the Help Desk. Valid values are INBOX or HELP_DESK\",\"enum\":[\"HELP_DESK\",\"INBOX\"],\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"archived\",\"createdAt\",\"id\",\"name\",\"type\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/conversations/conversations/2026-09/inboxes/{inboxId}", "rename": { "param": { "inboxId": "id" } }, "segments": [{ "lit": "conversations" }, { "lit": "conversations" }, { "lit": "2026-09" }, { "lit": "inboxes" }, { "var": "id" }], "select": { "exist": ["archived", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "conversations_public_inbox", "name__orig": "conversations_public_inbox", "Name": "ConversationsPublicInbox", "name_": "conversations_public_inbox", "name-": "conversations-public-inbox", "NAME": "CONVERSATIONS_PUBLIC_INBOX", "index$": 23 }, { "active": true, "entity": "conversations_public_inbox", "key$": "BasicConversationsPublicInboxFlow", "kind": "basic", "name": "BasicConversationsPublicInboxFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "conversations_public_inbox_ref01", "srcdatavar": "conversations_public_inbox_ref01_data", "suffix": "_dt0" }, "match": { "id": "conversations_public_inbox01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-conversations_public_inbox_ref01" } }], "index$": 0 }] }, 'ConversationsPublicInbox');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let conversations_public_inbox_ref01_data = Object.values(setup.data.existing.conversations_public_inbox)[0];
        // LOAD
        const conversations_public_inbox_ref01_ent = client.ConversationsPublicInbox();
        const conversations_public_inbox_ref01_match_dt0 = {};
        conversations_public_inbox_ref01_match_dt0.id = conversations_public_inbox_ref01_data.id;
        const conversations_public_inbox_ref01_data_dt0 = (await conversations_public_inbox_ref01_ent.load(conversations_public_inbox_ref01_match_dt0)).data();
        (0, node_assert_1.default)(conversations_public_inbox_ref01_data_dt0.id === conversations_public_inbox_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversations_public_inbox/ConversationsPublicInboxTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotConversationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversations_public_inbox01', 'conversations_public_inbox02', 'conversations_public_inbox03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_INBOX_ENTID': idmap,
        'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
        'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_CONVERSATIONS_APIKEY': '',
    });
    idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_INBOX_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_PUBLIC_INBOX_ENTID'];
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
//# sourceMappingURL=ConversationsPublicInboxEntity.test.js.map