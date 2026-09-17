<?php
declare(strict_types=1);

// HubspotConversations SDK utility: result_body

class HubspotConversationsResultBody
{
    public static function call(HubspotConversationsContext $ctx): ?HubspotConversationsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
