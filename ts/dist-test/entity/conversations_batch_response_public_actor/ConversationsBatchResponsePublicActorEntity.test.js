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
(0, node_test_1.describe)('ConversationsBatchResponsePublicActorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_CONVERSATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotConversationsSDK.test();
        const ent = testsdk.ConversationsBatchResponsePublicActor();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversations_batch_response_public_actor.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "completedAt", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "errors", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "inputs", "req": true, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "links", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "format": "int32", "name": "numErrors", "req": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "format": "date-time", "name": "requestedAt", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "results", "req": true, "type": "`$ARRAY`", "union": { "branches": 7, "count": 2, "depth": 5 }, "index$": 6 }, { "active": true, "format": "date-time", "name": "startedAt", "req": true, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "status", "req": true, "type": "`$STRING`", "index$": 8 }], "name": "conversations_batch_response_public_actor", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": null, "kind": "query", "name": "property", "orig": "property", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /conversations/conversations/2026-09/actors/batch/read", "json": "{\"operationId\":\"post-/conversations/conversations/2026-09/actors/batch/read\",\"parameters\":[{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"property\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"inputs\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"inputs\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"errors\":{\"example\":null,\"items\":{\"description\":\"Ye olde error\",\"example\":null,\"properties\":{\"category\":{\"description\":\"The main category of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Additional context-specific information related to the error.\",\"example\":null,\"type\":\"object\"},\"errors\":{\"description\":\"The detailed error objects.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"A unique ID for the error instance.\",\"example\":null,\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"URLs linking to documentation or resources associated with the error.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human-readable string describing the error and possible remediation steps.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The HTTP status code associated with the error.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A more specific error category within each main category.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"category\",\"context\",\"errors\",\"links\",\"message\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"example\":null,\"type\":\"object\"},\"numErrors\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"requestedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"example\":null,\"items\":{\"example\":null,\"oneOf\":[{\"allOf\":[{\"example\":null,\"oneOf\":[{\"allOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf]\",\"example\":null,\"properties\":{}},{\"allOf\":[{\"example\":null,\"oneOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf.0.oneOf]\",\"properties\":{}},{\"example\":null,\"properties\":{\"avatar\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":null,\"type\":\"string\"},\"name\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"BOT\",\"enum\":[\"BOT\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{}},{\"allOf\":[{\"example\":null,\"oneOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf.0.oneOf]\",\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf/0/properties\"}},{\"example\":null,\"properties\":{\"avatar\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":null,\"type\":\"string\"},\"name\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"INTEGRATOR\",\"enum\":[\"INTEGRATOR\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{}},{\"allOf\":[{\"example\":null,\"oneOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf.0.oneOf]\",\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf/0/properties\"}},{\"example\":null,\"properties\":{\"id\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"SYSTEM\",\"enum\":[\"SYSTEM\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{}},{\"allOf\":[{\"example\":null,\"oneOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf.0.oneOf]\",\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf/0/properties\"}},{\"example\":null,\"properties\":{\"avatar\":{\"example\":null,\"type\":\"string\"},\"email\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":null,\"type\":\"string\"},\"name\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"VISITOR\",\"enum\":[\"VISITOR\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{}},{\"allOf\":[{\"example\":null,\"oneOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf.0.oneOf]\",\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf/0/properties\"}},{\"example\":null,\"properties\":{\"email\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"EMAIL\",\"enum\":[\"EMAIL\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"email\",\"id\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{}},{\"allOf\":[{\"example\":null,\"oneOf\":\"[Circular *paths./conversations/conversations/2026-09/actors/batch/read.post.responses.200.content.application/json.schema.properties.results.items.oneOf.0.allOf.0.oneOf]\",\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf/0/properties\"}},{\"example\":null,\"properties\":{\"avatar\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":null,\"type\":\"string\"},\"name\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"LLM\",\"enum\":[\"LLM\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{}}],\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf/0/properties\"}},{\"example\":null,\"properties\":{\"avatar\":{\"example\":null,\"type\":\"string\"},\"email\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":null,\"type\":\"string\"},\"name\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"AGENT\",\"enum\":[\"AGENT\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"type\"],\"type\":\"object\"}],\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/0/properties\"}},{\"allOf\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/allOf\"},\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/1/properties\"}},{\"allOf\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/2/allOf\"},\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/2/properties\"}},{\"allOf\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/3/allOf\"},\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/3/properties\"}},{\"allOf\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/4/allOf\"},\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/4/properties\"}},{\"allOf\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/5/allOf\"},\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/5/properties\"}},{\"allOf\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/6/allOf\"},\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/oneOf/0/allOf/0/oneOf/6/properties\"}}]},\"type\":\"array\"},\"startedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"conversations.read\"]},{\"private_apps\":[\"conversations.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"conversations.read\":\"Read from conversations\",\"conversations.write\":\"Write to conversations\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/conversations/conversations/2026-09/actors/batch/read", "segments": [{ "lit": "conversations" }, { "lit": "conversations" }, { "lit": "2026-09" }, { "lit": "actors" }, { "lit": "batch" }, { "lit": "read" }], "select": { "exist": ["property"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "conversations_batch_response_public_actor", "name__orig": "conversations_batch_response_public_actor", "Name": "ConversationsBatchResponsePublicActor", "name_": "conversations_batch_response_public_actor", "name-": "conversations-batch-response-public-actor", "NAME": "CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR", "index$": 1 }, { "active": true, "entity": "conversations_batch_response_public_actor", "key$": "BasicConversationsBatchResponsePublicActorFlow", "kind": "basic", "name": "BasicConversationsBatchResponsePublicActorFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "conversations_batch_response_public_actor_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'ConversationsBatchResponsePublicActor');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const conversations_batch_response_public_actor_ref01_ent = client.ConversationsBatchResponsePublicActor();
        let conversations_batch_response_public_actor_ref01_data = setup.data.new.conversations_batch_response_public_actor['conversations_batch_response_public_actor_ref01'];
        conversations_batch_response_public_actor_ref01_data = (await conversations_batch_response_public_actor_ref01_ent.create(conversations_batch_response_public_actor_ref01_data)).data();
        (0, node_assert_1.default)(null != conversations_batch_response_public_actor_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversations_batch_response_public_actor/ConversationsBatchResponsePublicActorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotConversationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversations_batch_response_public_actor01', 'conversations_batch_response_public_actor02', 'conversations_batch_response_public_actor03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID': idmap,
        'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
        'HUBSPOT_CONVERSATIONS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_CONVERSATIONS_APIKEY': '',
    });
    idmap = env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_BATCH_RESPONSE_PUBLIC_ACTOR_ENTID'];
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
//# sourceMappingURL=ConversationsBatchResponsePublicActorEntity.test.js.map