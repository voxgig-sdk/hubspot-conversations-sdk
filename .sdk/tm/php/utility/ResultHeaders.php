<?php
declare(strict_types=1);

// HubspotConversations SDK utility: result_headers

class HubspotConversationsResultHeaders
{
    public static function call(HubspotConversationsContext $ctx): ?HubspotConversationsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
