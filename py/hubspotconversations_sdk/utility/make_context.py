# HubspotConversations SDK utility: make_context

from hubspotconversations_sdk.core.context import HubspotConversationsContext


def make_context_util(ctxmap, basectx):
    return HubspotConversationsContext(ctxmap, basectx)
