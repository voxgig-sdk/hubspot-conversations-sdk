<?php
declare(strict_types=1);

// HubspotConversations SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotConversationsMakeContext
{
    public static function call(array $ctxmap, ?HubspotConversationsContext $basectx): HubspotConversationsContext
    {
        return new HubspotConversationsContext($ctxmap, $basectx);
    }
}
