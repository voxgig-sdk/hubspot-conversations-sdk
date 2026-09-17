# HubspotConversations SDK utility: make_context

from projectname_sdk.core.context import HubspotConversationsContext


def make_context_util(ctxmap, basectx):
    return HubspotConversationsContext(ctxmap, basectx)
