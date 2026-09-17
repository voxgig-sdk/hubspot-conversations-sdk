package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestConversationsInboxMessagesPublicThreadEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ConversationsInboxMessagesPublicThread(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConversationsInboxMessagesPublicThreadEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := conversations_inbox_messages_public_threadBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "conversations_inbox_messages_public_thread." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		conversationsInboxMessagesPublicThreadRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.conversations_inbox_messages_public_thread")))
		var conversationsInboxMessagesPublicThreadRef01Data map[string]any
		if len(conversationsInboxMessagesPublicThreadRef01DataRaw) > 0 {
			conversationsInboxMessagesPublicThreadRef01Data = core.ToMapAny(conversationsInboxMessagesPublicThreadRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = conversationsInboxMessagesPublicThreadRef01Data

		// UPDATE
		conversationsInboxMessagesPublicThreadRef01Ent := client.ConversationsInboxMessagesPublicThread(nil)
		conversationsInboxMessagesPublicThreadRef01DataUp0Up := map[string]any{
			"id": conversationsInboxMessagesPublicThreadRef01Data["id"],
		}

		conversationsInboxMessagesPublicThreadRef01MarkdefUp0Name := "associatedTicketId"
		conversationsInboxMessagesPublicThreadRef01MarkdefUp0Value := fmt.Sprintf("Mark01-conversations_inbox_messages_public_thread_ref01_%d", setup.now)
		conversationsInboxMessagesPublicThreadRef01DataUp0Up[conversationsInboxMessagesPublicThreadRef01MarkdefUp0Name] = conversationsInboxMessagesPublicThreadRef01MarkdefUp0Value

		conversationsInboxMessagesPublicThreadRef01ResdataUp0Result, err := conversationsInboxMessagesPublicThreadRef01Ent.Update(conversationsInboxMessagesPublicThreadRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		conversationsInboxMessagesPublicThreadRef01ResdataUp0 := core.ToMapAny(entityData(conversationsInboxMessagesPublicThreadRef01ResdataUp0Result))
		if conversationsInboxMessagesPublicThreadRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if conversationsInboxMessagesPublicThreadRef01ResdataUp0["id"] != conversationsInboxMessagesPublicThreadRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if conversationsInboxMessagesPublicThreadRef01ResdataUp0[conversationsInboxMessagesPublicThreadRef01MarkdefUp0Name] != conversationsInboxMessagesPublicThreadRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", conversationsInboxMessagesPublicThreadRef01MarkdefUp0Name, conversationsInboxMessagesPublicThreadRef01ResdataUp0[conversationsInboxMessagesPublicThreadRef01MarkdefUp0Name])
		}

		// LOAD
		conversationsInboxMessagesPublicThreadRef01MatchDt0 := map[string]any{
			"id": conversationsInboxMessagesPublicThreadRef01Data["id"],
		}
		conversationsInboxMessagesPublicThreadRef01DataDt0Loaded, err := conversationsInboxMessagesPublicThreadRef01Ent.Load(conversationsInboxMessagesPublicThreadRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		conversationsInboxMessagesPublicThreadRef01DataDt0LoadResult := core.ToMapAny(entityData(conversationsInboxMessagesPublicThreadRef01DataDt0Loaded))
		if conversationsInboxMessagesPublicThreadRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if conversationsInboxMessagesPublicThreadRef01DataDt0LoadResult["id"] != conversationsInboxMessagesPublicThreadRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func conversations_inbox_messages_public_threadBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "conversations_inbox_messages_public_thread", "ConversationsInboxMessagesPublicThreadTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read conversations_inbox_messages_public_thread test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse conversations_inbox_messages_public_thread test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"conversations_inbox_messages_public_thread01", "conversations_inbox_messages_public_thread02", "conversations_inbox_messages_public_thread03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID": idmap,
		"HUBSPOT_CONVERSATIONS_TEST_LIVE":      "FALSE",
		"HUBSPOT_CONVERSATIONS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_CONVERSATIONS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_CONVERSATIONS_TEST_CONVERSATIONS_INBOX_MESSAGES_PUBLIC_THREAD_ENTID"])
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
