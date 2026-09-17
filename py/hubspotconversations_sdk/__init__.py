# HubspotConversations SDK

from hubspotconversations_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotconversations_sdk.core.utility_type import HubspotConversationsUtility
from hubspotconversations_sdk.core.spec import HubspotConversationsSpec
from hubspotconversations_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from hubspotconversations_sdk.utility import register

# Load features
from hubspotconversations_sdk.feature.base_feature import HubspotConversationsBaseFeature
from hubspotconversations_sdk.features import _has_feature, _make_feature


class HubspotConversationsSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = HubspotConversationsUtility()
        self._utility = utility

        from hubspotconversations_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return HubspotConversationsUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = HubspotConversationsSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "HubspotConversationsSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("HubspotConversationsSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Channel(self, data=None) -> "ChannelEntity":
        """Entity factory: client.Channel().list() / client.Channel().load({"id": ...})."""
        from hubspotconversations_sdk.entity.channel_entity import ChannelEntity
        return ChannelEntity(self, data)


    def ConversationsBatchResponsePublicActor(self, data=None) -> "ConversationsBatchResponsePublicActorEntity":
        """Entity factory: client.ConversationsBatchResponsePublicActor().list() / client.ConversationsBatchResponsePublicActor().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_batch_response_public_actor_entity import ConversationsBatchResponsePublicActorEntity
        return ConversationsBatchResponsePublicActorEntity(self, data)


    def ConversationsCollectionResponsePublicMessageForwardPaging(self, data=None) -> "ConversationsCollectionResponsePublicMessageForwardPagingEntity":
        """Entity factory: client.ConversationsCollectionResponsePublicMessageForwardPaging().list() / client.ConversationsCollectionResponsePublicMessageForwardPaging().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_collection_response_public_message_forward_paging_entity import ConversationsCollectionResponsePublicMessageForwardPagingEntity
        return ConversationsCollectionResponsePublicMessageForwardPagingEntity(self, data)


    def ConversationsCollectionResponsePublicThreadForwardPaging(self, data=None) -> "ConversationsCollectionResponsePublicThreadForwardPagingEntity":
        """Entity factory: client.ConversationsCollectionResponsePublicThreadForwardPaging().list() / client.ConversationsCollectionResponsePublicThreadForwardPaging().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_collection_response_public_thread_forward_paging_entity import ConversationsCollectionResponsePublicThreadForwardPagingEntity
        return ConversationsCollectionResponsePublicThreadForwardPagingEntity(self, data)


    def ConversationsCollectionResponseWithTotalPublicChannel(self, data=None) -> "ConversationsCollectionResponseWithTotalPublicChannelEntity":
        """Entity factory: client.ConversationsCollectionResponseWithTotalPublicChannel().list() / client.ConversationsCollectionResponseWithTotalPublicChannel().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_collection_response_with_total_public_channel_entity import ConversationsCollectionResponseWithTotalPublicChannelEntity
        return ConversationsCollectionResponseWithTotalPublicChannelEntity(self, data)


    def ConversationsCollectionResponseWithTotalPublicChannelAccount(self, data=None) -> "ConversationsCollectionResponseWithTotalPublicChannelAccountEntity":
        """Entity factory: client.ConversationsCollectionResponseWithTotalPublicChannelAccount().list() / client.ConversationsCollectionResponseWithTotalPublicChannelAccount().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_collection_response_with_total_public_channel_account_entity import ConversationsCollectionResponseWithTotalPublicChannelAccountEntity
        return ConversationsCollectionResponseWithTotalPublicChannelAccountEntity(self, data)


    def ConversationsCollectionResponseWithTotalPublicInbox(self, data=None) -> "ConversationsCollectionResponseWithTotalPublicInboxEntity":
        """Entity factory: client.ConversationsCollectionResponseWithTotalPublicInbox().list() / client.ConversationsCollectionResponseWithTotalPublicInbox().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_collection_response_with_total_public_inbox_entity import ConversationsCollectionResponseWithTotalPublicInboxEntity
        return ConversationsCollectionResponseWithTotalPublicInboxEntity(self, data)


    def ConversationsInboxMessagesBatchResponsePublicActor(self, data=None) -> "ConversationsInboxMessagesBatchResponsePublicActorEntity":
        """Entity factory: client.ConversationsInboxMessagesBatchResponsePublicActor().list() / client.ConversationsInboxMessagesBatchResponsePublicActor().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_batch_response_public_actor_entity import ConversationsInboxMessagesBatchResponsePublicActorEntity
        return ConversationsInboxMessagesBatchResponsePublicActorEntity(self, data)


    def ConversationsInboxMessagesCollectionResponsePublicMessage(self, data=None) -> "ConversationsInboxMessagesCollectionResponsePublicMessageEntity":
        """Entity factory: client.ConversationsInboxMessagesCollectionResponsePublicMessage().list() / client.ConversationsInboxMessagesCollectionResponsePublicMessage().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_public_message_entity import ConversationsInboxMessagesCollectionResponsePublicMessageEntity
        return ConversationsInboxMessagesCollectionResponsePublicMessageEntity(self, data)


    def ConversationsInboxMessagesCollectionResponsePublicThread(self, data=None) -> "ConversationsInboxMessagesCollectionResponsePublicThreadEntity":
        """Entity factory: client.ConversationsInboxMessagesCollectionResponsePublicThread().list() / client.ConversationsInboxMessagesCollectionResponsePublicThread().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_public_thread_entity import ConversationsInboxMessagesCollectionResponsePublicThreadEntity
        return ConversationsInboxMessagesCollectionResponsePublicThreadEntity(self, data)


    def ConversationsInboxMessagesCollectionResponseWithTotalPublic(self, data=None) -> "ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity":
        """Entity factory: client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().list() / client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_with_total_public_entity import ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity
        return ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity(self, data)


    def ConversationsInboxMessagesCollectionResponseWithTotalPublic2(self, data=None) -> "ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity":
        """Entity factory: client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().list() / client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_with_total_public2_entity import ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity
        return ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity(self, data)


    def ConversationsInboxMessagesCollectionResponseWithTotalPublic3(self, data=None) -> "ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity":
        """Entity factory: client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().list() / client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_with_total_public3_entity import ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity
        return ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity(self, data)


    def ConversationsInboxMessagesPublicActor(self, data=None) -> "ConversationsInboxMessagesPublicActorEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicActor().list() / client.ConversationsInboxMessagesPublicActor().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_actor_entity import ConversationsInboxMessagesPublicActorEntity
        return ConversationsInboxMessagesPublicActorEntity(self, data)


    def ConversationsInboxMessagesPublicChannel(self, data=None) -> "ConversationsInboxMessagesPublicChannelEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicChannel().list() / client.ConversationsInboxMessagesPublicChannel().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_channel_entity import ConversationsInboxMessagesPublicChannelEntity
        return ConversationsInboxMessagesPublicChannelEntity(self, data)


    def ConversationsInboxMessagesPublicChannelAccount(self, data=None) -> "ConversationsInboxMessagesPublicChannelAccountEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicChannelAccount().list() / client.ConversationsInboxMessagesPublicChannelAccount().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_channel_account_entity import ConversationsInboxMessagesPublicChannelAccountEntity
        return ConversationsInboxMessagesPublicChannelAccountEntity(self, data)


    def ConversationsInboxMessagesPublicInbox(self, data=None) -> "ConversationsInboxMessagesPublicInboxEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicInbox().list() / client.ConversationsInboxMessagesPublicInbox().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_inbox_entity import ConversationsInboxMessagesPublicInboxEntity
        return ConversationsInboxMessagesPublicInboxEntity(self, data)


    def ConversationsInboxMessagesPublicMessage(self, data=None) -> "ConversationsInboxMessagesPublicMessageEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicMessage().list() / client.ConversationsInboxMessagesPublicMessage().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_message_entity import ConversationsInboxMessagesPublicMessageEntity
        return ConversationsInboxMessagesPublicMessageEntity(self, data)


    def ConversationsInboxMessagesPublicMessageContent(self, data=None) -> "ConversationsInboxMessagesPublicMessageContentEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicMessageContent().list() / client.ConversationsInboxMessagesPublicMessageContent().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_message_content_entity import ConversationsInboxMessagesPublicMessageContentEntity
        return ConversationsInboxMessagesPublicMessageContentEntity(self, data)


    def ConversationsInboxMessagesPublicThread(self, data=None) -> "ConversationsInboxMessagesPublicThreadEntity":
        """Entity factory: client.ConversationsInboxMessagesPublicThread().list() / client.ConversationsInboxMessagesPublicThread().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_inbox_messages_public_thread_entity import ConversationsInboxMessagesPublicThreadEntity
        return ConversationsInboxMessagesPublicThreadEntity(self, data)


    def ConversationsPublicActor(self, data=None) -> "ConversationsPublicActorEntity":
        """Entity factory: client.ConversationsPublicActor().list() / client.ConversationsPublicActor().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_actor_entity import ConversationsPublicActorEntity
        return ConversationsPublicActorEntity(self, data)


    def ConversationsPublicChannel(self, data=None) -> "ConversationsPublicChannelEntity":
        """Entity factory: client.ConversationsPublicChannel().list() / client.ConversationsPublicChannel().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_channel_entity import ConversationsPublicChannelEntity
        return ConversationsPublicChannelEntity(self, data)


    def ConversationsPublicChannelAccount(self, data=None) -> "ConversationsPublicChannelAccountEntity":
        """Entity factory: client.ConversationsPublicChannelAccount().list() / client.ConversationsPublicChannelAccount().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_channel_account_entity import ConversationsPublicChannelAccountEntity
        return ConversationsPublicChannelAccountEntity(self, data)


    def ConversationsPublicInbox(self, data=None) -> "ConversationsPublicInboxEntity":
        """Entity factory: client.ConversationsPublicInbox().list() / client.ConversationsPublicInbox().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_inbox_entity import ConversationsPublicInboxEntity
        return ConversationsPublicInboxEntity(self, data)


    def ConversationsPublicMessage(self, data=None) -> "ConversationsPublicMessageEntity":
        """Entity factory: client.ConversationsPublicMessage().list() / client.ConversationsPublicMessage().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_message_entity import ConversationsPublicMessageEntity
        return ConversationsPublicMessageEntity(self, data)


    def ConversationsPublicMessageContent(self, data=None) -> "ConversationsPublicMessageContentEntity":
        """Entity factory: client.ConversationsPublicMessageContent().list() / client.ConversationsPublicMessageContent().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_message_content_entity import ConversationsPublicMessageContentEntity
        return ConversationsPublicMessageContentEntity(self, data)


    def ConversationsPublicThread(self, data=None) -> "ConversationsPublicThreadEntity":
        """Entity factory: client.ConversationsPublicThread().list() / client.ConversationsPublicThread().load({"id": ...})."""
        from hubspotconversations_sdk.entity.conversations_public_thread_entity import ConversationsPublicThreadEntity
        return ConversationsPublicThreadEntity(self, data)


    def CustomChannelsCollectionResponseWithTotalPublicChannel(self, data=None) -> "CustomChannelsCollectionResponseWithTotalPublicChannelEntity":
        """Entity factory: client.CustomChannelsCollectionResponseWithTotalPublicChannel().list() / client.CustomChannelsCollectionResponseWithTotalPublicChannel().load({"id": ...})."""
        from hubspotconversations_sdk.entity.custom_channels_collection_response_with_total_public_channel_entity import CustomChannelsCollectionResponseWithTotalPublicChannelEntity
        return CustomChannelsCollectionResponseWithTotalPublicChannelEntity(self, data)


    def CustomChannelsCollectionResponseWithTotalPublicChannel2(self, data=None) -> "CustomChannelsCollectionResponseWithTotalPublicChannel2Entity":
        """Entity factory: client.CustomChannelsCollectionResponseWithTotalPublicChannel2().list() / client.CustomChannelsCollectionResponseWithTotalPublicChannel2().load({"id": ...})."""
        from hubspotconversations_sdk.entity.custom_channels_collection_response_with_total_public_channel2_entity import CustomChannelsCollectionResponseWithTotalPublicChannel2Entity
        return CustomChannelsCollectionResponseWithTotalPublicChannel2Entity(self, data)


    def CustomChannelsPublicChannelAccount(self, data=None) -> "CustomChannelsPublicChannelAccountEntity":
        """Entity factory: client.CustomChannelsPublicChannelAccount().list() / client.CustomChannelsPublicChannelAccount().load({"id": ...})."""
        from hubspotconversations_sdk.entity.custom_channels_public_channel_account_entity import CustomChannelsPublicChannelAccountEntity
        return CustomChannelsPublicChannelAccountEntity(self, data)


    def CustomChannelsPublicChannelAccountStagingToken(self, data=None) -> "CustomChannelsPublicChannelAccountStagingTokenEntity":
        """Entity factory: client.CustomChannelsPublicChannelAccountStagingToken().list() / client.CustomChannelsPublicChannelAccountStagingToken().load({"id": ...})."""
        from hubspotconversations_sdk.entity.custom_channels_public_channel_account_staging_token_entity import CustomChannelsPublicChannelAccountStagingTokenEntity
        return CustomChannelsPublicChannelAccountStagingTokenEntity(self, data)


    def CustomChannelsPublicChannelIntegrationChannel(self, data=None) -> "CustomChannelsPublicChannelIntegrationChannelEntity":
        """Entity factory: client.CustomChannelsPublicChannelIntegrationChannel().list() / client.CustomChannelsPublicChannelIntegrationChannel().load({"id": ...})."""
        from hubspotconversations_sdk.entity.custom_channels_public_channel_integration_channel_entity import CustomChannelsPublicChannelIntegrationChannelEntity
        return CustomChannelsPublicChannelIntegrationChannelEntity(self, data)


    def CustomChannelsPublicConversationsMessage(self, data=None) -> "CustomChannelsPublicConversationsMessageEntity":
        """Entity factory: client.CustomChannelsPublicConversationsMessage().list() / client.CustomChannelsPublicConversationsMessage().load({"id": ...})."""
        from hubspotconversations_sdk.entity.custom_channels_public_conversations_message_entity import CustomChannelsPublicConversationsMessageEntity
        return CustomChannelsPublicConversationsMessageEntity(self, data)


    def PublicThread(self, data=None) -> "PublicThreadEntity":
        """Entity factory: client.PublicThread().list() / client.PublicThread().load({"id": ...})."""
        from hubspotconversations_sdk.entity.public_thread_entity import PublicThreadEntity
        return PublicThreadEntity(self, data)


    def Thread(self, data=None) -> "ThreadEntity":
        """Entity factory: client.Thread().list() / client.Thread().load({"id": ...})."""
        from hubspotconversations_sdk.entity.thread_entity import ThreadEntity
        return ThreadEntity(self, data)


    def VisitorIdentificationIdentificationToken(self, data=None) -> "VisitorIdentificationIdentificationTokenEntity":
        """Entity factory: client.VisitorIdentificationIdentificationToken().list() / client.VisitorIdentificationIdentificationToken().load({"id": ...})."""
        from hubspotconversations_sdk.entity.visitor_identification_identification_token_entity import VisitorIdentificationIdentificationTokenEntity
        return VisitorIdentificationIdentificationTokenEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "HubspotConversationsSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from hubspotconversations_sdk.entity.channel_entity import ChannelEntity
    from hubspotconversations_sdk.entity.conversations_batch_response_public_actor_entity import ConversationsBatchResponsePublicActorEntity
    from hubspotconversations_sdk.entity.conversations_collection_response_public_message_forward_paging_entity import ConversationsCollectionResponsePublicMessageForwardPagingEntity
    from hubspotconversations_sdk.entity.conversations_collection_response_public_thread_forward_paging_entity import ConversationsCollectionResponsePublicThreadForwardPagingEntity
    from hubspotconversations_sdk.entity.conversations_collection_response_with_total_public_channel_entity import ConversationsCollectionResponseWithTotalPublicChannelEntity
    from hubspotconversations_sdk.entity.conversations_collection_response_with_total_public_channel_account_entity import ConversationsCollectionResponseWithTotalPublicChannelAccountEntity
    from hubspotconversations_sdk.entity.conversations_collection_response_with_total_public_inbox_entity import ConversationsCollectionResponseWithTotalPublicInboxEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_batch_response_public_actor_entity import ConversationsInboxMessagesBatchResponsePublicActorEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_public_message_entity import ConversationsInboxMessagesCollectionResponsePublicMessageEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_public_thread_entity import ConversationsInboxMessagesCollectionResponsePublicThreadEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_with_total_public_entity import ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_with_total_public2_entity import ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_collection_response_with_total_public3_entity import ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_actor_entity import ConversationsInboxMessagesPublicActorEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_channel_entity import ConversationsInboxMessagesPublicChannelEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_channel_account_entity import ConversationsInboxMessagesPublicChannelAccountEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_inbox_entity import ConversationsInboxMessagesPublicInboxEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_message_entity import ConversationsInboxMessagesPublicMessageEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_message_content_entity import ConversationsInboxMessagesPublicMessageContentEntity
    from hubspotconversations_sdk.entity.conversations_inbox_messages_public_thread_entity import ConversationsInboxMessagesPublicThreadEntity
    from hubspotconversations_sdk.entity.conversations_public_actor_entity import ConversationsPublicActorEntity
    from hubspotconversations_sdk.entity.conversations_public_channel_entity import ConversationsPublicChannelEntity
    from hubspotconversations_sdk.entity.conversations_public_channel_account_entity import ConversationsPublicChannelAccountEntity
    from hubspotconversations_sdk.entity.conversations_public_inbox_entity import ConversationsPublicInboxEntity
    from hubspotconversations_sdk.entity.conversations_public_message_entity import ConversationsPublicMessageEntity
    from hubspotconversations_sdk.entity.conversations_public_message_content_entity import ConversationsPublicMessageContentEntity
    from hubspotconversations_sdk.entity.conversations_public_thread_entity import ConversationsPublicThreadEntity
    from hubspotconversations_sdk.entity.custom_channels_collection_response_with_total_public_channel_entity import CustomChannelsCollectionResponseWithTotalPublicChannelEntity
    from hubspotconversations_sdk.entity.custom_channels_collection_response_with_total_public_channel2_entity import CustomChannelsCollectionResponseWithTotalPublicChannel2Entity
    from hubspotconversations_sdk.entity.custom_channels_public_channel_account_entity import CustomChannelsPublicChannelAccountEntity
    from hubspotconversations_sdk.entity.custom_channels_public_channel_account_staging_token_entity import CustomChannelsPublicChannelAccountStagingTokenEntity
    from hubspotconversations_sdk.entity.custom_channels_public_channel_integration_channel_entity import CustomChannelsPublicChannelIntegrationChannelEntity
    from hubspotconversations_sdk.entity.custom_channels_public_conversations_message_entity import CustomChannelsPublicConversationsMessageEntity
    from hubspotconversations_sdk.entity.public_thread_entity import PublicThreadEntity
    from hubspotconversations_sdk.entity.thread_entity import ThreadEntity
    from hubspotconversations_sdk.entity.visitor_identification_identification_token_entity import VisitorIdentificationIdentificationTokenEntity
