# CustomChannelsPublicChannelAccount entity test

import json
import os
import time

import pytest

from hubspotconversations_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotconversations_sdk import HubspotConversationsSDK
from hubspotconversations_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCustomChannelsPublicChannelAccountEntity:

    def test_should_create_instance(self):
        testsdk = HubspotConversationsSDK.test(None, None)
        ent = testsdk.CustomChannelsPublicChannelAccount(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _custom_channels_public_channel_account_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "custom_channels_public_channel_account." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        custom_channels_public_channel_account_ref01_ent = client.CustomChannelsPublicChannelAccount(None)
        custom_channels_public_channel_account_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.custom_channels_public_channel_account"), "custom_channels_public_channel_account_ref01"))
        custom_channels_public_channel_account_ref01_data["channel_id"] = setup["idmap"]["channel01"]

        custom_channels_public_channel_account_ref01_data = helpers.to_map(runner.entity_data(custom_channels_public_channel_account_ref01_ent.create(custom_channels_public_channel_account_ref01_data, None)))
        assert custom_channels_public_channel_account_ref01_data is not None
        assert custom_channels_public_channel_account_ref01_data["id"] is not None

        # UPDATE
        custom_channels_public_channel_account_ref01_data_up0_up = {
            "id": custom_channels_public_channel_account_ref01_data["id"],
            "channel_id": setup["idmap"]["channel_id"],
        }

        custom_channels_public_channel_account_ref01_markdef_up0_name = "inboxId"
        custom_channels_public_channel_account_ref01_markdef_up0_value = "Mark01-custom_channels_public_channel_account_ref01_" + str(setup["now"])
        custom_channels_public_channel_account_ref01_data_up0_up[custom_channels_public_channel_account_ref01_markdef_up0_name] = custom_channels_public_channel_account_ref01_markdef_up0_value

        custom_channels_public_channel_account_ref01_resdata_up0 = helpers.to_map(runner.entity_data(custom_channels_public_channel_account_ref01_ent.update(custom_channels_public_channel_account_ref01_data_up0_up, None)))
        assert custom_channels_public_channel_account_ref01_resdata_up0 is not None
        assert custom_channels_public_channel_account_ref01_resdata_up0["id"] == custom_channels_public_channel_account_ref01_data_up0_up["id"]
        assert custom_channels_public_channel_account_ref01_resdata_up0[custom_channels_public_channel_account_ref01_markdef_up0_name] == custom_channels_public_channel_account_ref01_markdef_up0_value

        # LOAD
        custom_channels_public_channel_account_ref01_match_dt0 = {
            "id": custom_channels_public_channel_account_ref01_data["id"],
        }
        custom_channels_public_channel_account_ref01_data_dt0_loaded = custom_channels_public_channel_account_ref01_ent.load(custom_channels_public_channel_account_ref01_match_dt0, None)
        custom_channels_public_channel_account_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(custom_channels_public_channel_account_ref01_data_dt0_loaded))
        assert custom_channels_public_channel_account_ref01_data_dt0_load_result is not None
        assert custom_channels_public_channel_account_ref01_data_dt0_load_result["id"] == custom_channels_public_channel_account_ref01_data["id"]



def _custom_channels_public_channel_account_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/custom_channels_public_channel_account/CustomChannelsPublicChannelAccountTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotConversationsSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["custom_channels_public_channel_account01", "custom_channels_public_channel_account02", "custom_channels_public_channel_account03", "2026_0901", "2026_0902", "2026_0903", "channel01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID": idmap,
        "HUBSPOT_CONVERSATIONS_TEST_LIVE": "FALSE",
        "HUBSPOT_CONVERSATIONS_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_CONVERSATIONS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_PUBLIC_CHANNEL_ACCOUNT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("channel_id") is None:
        idmap_resolved["channel_id"] = idmap_resolved.get("channel01")

    if env.get("HUBSPOT_CONVERSATIONS_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("HUBSPOT_CONVERSATIONS_APIKEY"),
            },
            extra or {},
        ])
        client = HubspotConversationsSDK(helpers.to_map(merged_opts))

    _live = env.get("HUBSPOT_CONVERSATIONS_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("HUBSPOT_CONVERSATIONS_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
