# HubspotConversations SDK exists test

import pytest
from hubspotconversations_sdk import HubspotConversationsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotConversationsSDK.test(None, None)
        assert testsdk is not None
