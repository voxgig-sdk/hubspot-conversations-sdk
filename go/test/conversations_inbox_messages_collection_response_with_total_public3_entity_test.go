package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-conversations-sdk/go"
	"github.com/voxgig-sdk/hubspot-conversations-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-conversations-sdk/go/utility/struct"
)

func TestConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"conversations_inbox_messages_collection_response_with_total_public3": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := conversations_inbox_messages_collection_response_with_total_public3BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "conversations_inbox_messages_collection_response_with_total_public3." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.conversations_inbox_messages_collection_response_with_total_public3")))
		var conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Data map[string]any
		if len(conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01DataRaw) > 0 {
			conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Data = core.ToMapAny(conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Data

		// LIST
		conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Ent := client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil)
		conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Match := map[string]any{}

		conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01ListResult, err := conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Ent.List(conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01ListOk := conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01ListResult.([]any)
		if !conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01ListOk {
			t.Fatalf("expected list result to be an array, got %T", conversationsInboxMessagesCollectionResponseWithTotalPublic3Ref01ListResult)
		}

	})
}

func conversations_inbox_messages_collection_response_with_total_public3BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "conversations_inbox_messages_collection_response_with_total_public3", "ConversationsInboxMessagesCollectionResponseWithTotalPublic3TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read conversations_inbox_messages_collection_response_with_total_public3 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse conversations_inbox_messages_collection_response_with_total_public3 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"conversations_inbox_messages_collection_response_with_total_public301", "conversations_inbox_messages_collection_response_with_total_public302", "conversations_inbox_messages_collection_response_with_total_public303"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID": idmap,
		"HUBSPOT_CONVERSATIONS_TEST_LIVE":      "FALSE",
		"HUBSPOT_CONVERSATIONS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_CONVERSATIONS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC3_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HUBSPOT_CONVERSATIONS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_CONVERSATIONS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotConversationsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_CONVERSATIONS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_CONVERSATIONS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
