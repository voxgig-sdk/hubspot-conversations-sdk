<?php
declare(strict_types=1);

// ConversationsInboxMessagesCollectionResponseWithTotalPublic entity test

require_once __DIR__ . '/../hubspotconversations_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConversationsInboxMessagesCollectionResponseWithTotalPublicEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HubspotConversationsSDK::test(null, null);
        $ent = $testsdk->ConversationsInboxMessagesCollectionResponseWithTotalPublic(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "conversations_inbox_messages_collection_response_with_total_public" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = HubspotConversationsSDK::test($seed, null);
        $seen = iterator_to_array($base->ConversationsInboxMessagesCollectionResponseWithTotalPublic(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = HubspotConversationsConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = HubspotConversationsSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->ConversationsInboxMessagesCollectionResponseWithTotalPublic(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = conversations_inbox_messages_collection_response_with_total_public_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "conversations_inbox_messages_collection_response_with_total_public." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $conversations_inbox_messages_collection_response_with_total_public_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.conversations_inbox_messages_collection_response_with_total_public")));
        $conversations_inbox_messages_collection_response_with_total_public_ref01_data = null;
        if (count($conversations_inbox_messages_collection_response_with_total_public_ref01_data_raw) > 0) {
            $conversations_inbox_messages_collection_response_with_total_public_ref01_data = Helpers::to_map($conversations_inbox_messages_collection_response_with_total_public_ref01_data_raw[0][1]);
        }

        // LIST
        $conversations_inbox_messages_collection_response_with_total_public_ref01_ent = $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic(null);
        $conversations_inbox_messages_collection_response_with_total_public_ref01_match = [];

        $conversations_inbox_messages_collection_response_with_total_public_ref01_list_result = $conversations_inbox_messages_collection_response_with_total_public_ref01_ent->list($conversations_inbox_messages_collection_response_with_total_public_ref01_match, null);
        $this->assertIsArray($conversations_inbox_messages_collection_response_with_total_public_ref01_list_result);

    }
}

function conversations_inbox_messages_collection_response_with_total_public_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/conversations_inbox_messages_collection_response_with_total_public/ConversationsInboxMessagesCollectionResponseWithTotalPublicTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HubspotConversationsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["conversations_inbox_messages_collection_response_with_total_public01", "conversations_inbox_messages_collection_response_with_total_public02", "conversations_inbox_messages_collection_response_with_total_public03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_ENTID" => $idmap,
        "HUBSPOT_CONVERSATIONS_TEST_LIVE" => "FALSE",
        "HUBSPOT_CONVERSATIONS_TEST_EXPLAIN" => "FALSE",
        "HUBSPOT_CONVERSATIONS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HUBSPOT_CONVERSATIONS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["HUBSPOT_CONVERSATIONS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new HubspotConversationsSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["HUBSPOT_CONVERSATIONS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HUBSPOT_CONVERSATIONS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
