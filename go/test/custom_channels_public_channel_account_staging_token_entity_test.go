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

func TestCustomChannelsPublicChannelAccountStagingTokenEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomChannelsPublicChannelAccountStagingToken(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomChannelsPublicChannelAccountStagingTokenEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := custom_channels_public_channel_account_staging_tokenBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_channels_public_channel_account_staging_token." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		customChannelsPublicChannelAccountStagingTokenRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.custom_channels_public_channel_account_staging_token")))
		var customChannelsPublicChannelAccountStagingTokenRef01Data map[string]any
		if len(customChannelsPublicChannelAccountStagingTokenRef01DataRaw) > 0 {
			customChannelsPublicChannelAccountStagingTokenRef01Data = core.ToMapAny(customChannelsPublicChannelAccountStagingTokenRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = customChannelsPublicChannelAccountStagingTokenRef01Data

		// UPDATE
		customChannelsPublicChannelAccountStagingTokenRef01Ent := client.CustomChannelsPublicChannelAccountStagingToken(nil)
		customChannelsPublicChannelAccountStagingTokenRef01DataUp0Up := map[string]any{
			"id": customChannelsPublicChannelAccountStagingTokenRef01Data["id"],
			"channel_id": setup.idmap["channel_id"],
		}

		customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Name := "accountName"
		customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_channels_public_channel_account_staging_token_ref01_%d", setup.now)
		customChannelsPublicChannelAccountStagingTokenRef01DataUp0Up[customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Name] = customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Value

		customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0Result, err := customChannelsPublicChannelAccountStagingTokenRef01Ent.Update(customChannelsPublicChannelAccountStagingTokenRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0 := core.ToMapAny(entityData(customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0Result))
		if customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0["id"] != customChannelsPublicChannelAccountStagingTokenRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0[customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Name] != customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Name, customChannelsPublicChannelAccountStagingTokenRef01ResdataUp0[customChannelsPublicChannelAccountStagingTokenRef01MarkdefUp0Name])
		}

	})
}

func custom_channels_public_channel_account_staging_tokenBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_channels_public_channel_account_staging_token", "CustomChannelsPublicChannelAccountStagingTokenTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_channels_public_channel_account_staging_token test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_channels_public_channel_account_staging_token test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_channels_public_channel_account_staging_token01", "custom_channels_public_channel_account_staging_token02", "custom_channels_public_channel_account_staging_token03", "2026_0901", "2026_0902", "2026_0903", "channel01"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID": idmap,
		"HUBSPOT_CONVERSATIONS_TEST_LIVE":      "FALSE",
		"HUBSPOT_CONVERSATIONS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_CONVERSATIONS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_STAGING_TOKEN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add channel_id alias for update test.
	if idmapResolved["channel_id"] == nil {
		idmapResolved["channel_id"] = idmapResolved["channel01"]
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
