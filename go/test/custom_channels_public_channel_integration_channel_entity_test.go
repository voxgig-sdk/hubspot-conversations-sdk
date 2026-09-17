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

func TestCustomChannelsPublicChannelIntegrationChannelEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomChannelsPublicChannelIntegrationChannel(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomChannelsPublicChannelIntegrationChannelEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := custom_channels_public_channel_integration_channelBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_channels_public_channel_integration_channel." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customChannelsPublicChannelIntegrationChannelRef01Ent := client.CustomChannelsPublicChannelIntegrationChannel(nil)
		customChannelsPublicChannelIntegrationChannelRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "custom_channels_public_channel_integration_channel"}), "custom_channels_public_channel_integration_channel_ref01"))

		customChannelsPublicChannelIntegrationChannelRef01DataResult, err := customChannelsPublicChannelIntegrationChannelRef01Ent.Create(customChannelsPublicChannelIntegrationChannelRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customChannelsPublicChannelIntegrationChannelRef01Data = core.ToMapAny(entityData(customChannelsPublicChannelIntegrationChannelRef01DataResult))
		if customChannelsPublicChannelIntegrationChannelRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		customChannelsPublicChannelIntegrationChannelRef01DataUp0Up := map[string]any{
		}

		customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Name := "channelAccountConnectionRedirectUrl"
		customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_channels_public_channel_integration_channel_ref01_%d", setup.now)
		customChannelsPublicChannelIntegrationChannelRef01DataUp0Up[customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Name] = customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Value

		customChannelsPublicChannelIntegrationChannelRef01ResdataUp0Result, err := customChannelsPublicChannelIntegrationChannelRef01Ent.Update(customChannelsPublicChannelIntegrationChannelRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customChannelsPublicChannelIntegrationChannelRef01ResdataUp0 := core.ToMapAny(entityData(customChannelsPublicChannelIntegrationChannelRef01ResdataUp0Result))
		if customChannelsPublicChannelIntegrationChannelRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customChannelsPublicChannelIntegrationChannelRef01ResdataUp0[customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Name] != customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Name, customChannelsPublicChannelIntegrationChannelRef01ResdataUp0[customChannelsPublicChannelIntegrationChannelRef01MarkdefUp0Name])
		}

		// LOAD
		customChannelsPublicChannelIntegrationChannelRef01MatchDt0 := map[string]any{}
		customChannelsPublicChannelIntegrationChannelRef01DataDt0Loaded, err := customChannelsPublicChannelIntegrationChannelRef01Ent.Load(customChannelsPublicChannelIntegrationChannelRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if customChannelsPublicChannelIntegrationChannelRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func custom_channels_public_channel_integration_channelBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_channels_public_channel_integration_channel", "CustomChannelsPublicChannelIntegrationChannelTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_channels_public_channel_integration_channel test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_channels_public_channel_integration_channel test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_channels_public_channel_integration_channel01", "custom_channels_public_channel_integration_channel02", "custom_channels_public_channel_integration_channel03", "2026_0901", "2026_0902", "2026_0903"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID": idmap,
		"HUBSPOT_CONVERSATIONS_TEST_LIVE":      "FALSE",
		"HUBSPOT_CONVERSATIONS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_CONVERSATIONS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_INTEGRATION_CHANNEL_ENTID"])
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
