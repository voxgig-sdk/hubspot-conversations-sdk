# HubspotConversations SDK feature factory

from hubspotconversations_sdk.feature.base_feature import HubspotConversationsBaseFeature
from hubspotconversations_sdk.feature.debug_feature import HubspotConversationsDebugFeature
from hubspotconversations_sdk.feature.idempotency_feature import HubspotConversationsIdempotencyFeature
from hubspotconversations_sdk.feature.metrics_feature import HubspotConversationsMetricsFeature
from hubspotconversations_sdk.feature.paging_feature import HubspotConversationsPagingFeature
from hubspotconversations_sdk.feature.ratelimit_feature import HubspotConversationsRatelimitFeature
from hubspotconversations_sdk.feature.retry_feature import HubspotConversationsRetryFeature
from hubspotconversations_sdk.feature.test_feature import HubspotConversationsTestFeature
from hubspotconversations_sdk.feature.timeout_feature import HubspotConversationsTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotConversationsBaseFeature(),
    "debug": lambda: HubspotConversationsDebugFeature(),
    "idempotency": lambda: HubspotConversationsIdempotencyFeature(),
    "metrics": lambda: HubspotConversationsMetricsFeature(),
    "paging": lambda: HubspotConversationsPagingFeature(),
    "ratelimit": lambda: HubspotConversationsRatelimitFeature(),
    "retry": lambda: HubspotConversationsRetryFeature(),
    "test": lambda: HubspotConversationsTestFeature(),
    "timeout": lambda: HubspotConversationsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
