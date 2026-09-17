<?php
declare(strict_types=1);

// HubspotConversations SDK exists test

require_once __DIR__ . '/../hubspotconversations_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HubspotConversationsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
