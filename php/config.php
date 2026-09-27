<?php
declare(strict_types=1);

// HubspotConversations SDK configuration

class HubspotConversationsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HubspotConversations",
                "slug" => "hubspot-conversations",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.hubapi.com",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "channel" => [],
                    "conversations_batch_response_public_actor" => [],
                    "conversations_collection_response_public_message_forward_paging" => [],
                    "conversations_collection_response_public_thread_forward_paging" => [],
                    "conversations_collection_response_with_total_public_channel" => [],
                    "conversations_collection_response_with_total_public_channel_account" => [],
                    "conversations_collection_response_with_total_public_inbox" => [],
                    "conversations_inbox_messages_batch_response_public_actor" => [],
                    "conversations_inbox_messages_collection_response_public_message" => [],
                    "conversations_inbox_messages_collection_response_public_thread" => [],
                    "conversations_inbox_messages_collection_response_with_total_public" => [],
                    "conversations_inbox_messages_collection_response_with_total_public2" => [],
                    "conversations_inbox_messages_collection_response_with_total_public3" => [],
                    "conversations_inbox_messages_public_actor" => [],
                    "conversations_inbox_messages_public_channel" => [],
                    "conversations_inbox_messages_public_channel_account" => [],
                    "conversations_inbox_messages_public_inbox" => [],
                    "conversations_inbox_messages_public_message" => [],
                    "conversations_inbox_messages_public_message_content" => [],
                    "conversations_inbox_messages_public_thread" => [],
                    "conversations_public_actor" => [],
                    "conversations_public_channel" => [],
                    "conversations_public_channel_account" => [],
                    "conversations_public_inbox" => [],
                    "conversations_public_message" => [],
                    "conversations_public_message_content" => [],
                    "conversations_public_thread" => [],
                    "custom_channels_collection_response_with_total_public_channel" => [],
                    "custom_channels_collection_response_with_total_public_channel2" => [],
                    "custom_channels_public_channel_account" => [],
                    "custom_channels_public_channel_account_staging_token" => [],
                    "custom_channels_public_channel_integration_channel" => [],
                    "custom_channels_public_conversations_message" => [],
                    "public_thread" => [],
                    "thread" => [],
                    "visitor_identification_identification_token" => [],
                ],
            ],
            "entity" => [
        'channel' => [
          'fields' => [],
          'name' => 'channel',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_batch_response_public_actor' => [
          'fields' => [
            [
              'name' => 'completedAt',
              'title' => 'Completed At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'links',
              'title' => 'Links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'numErrors',
              'title' => 'Num Errors',
              'type' => '`$INTEGER`',
              'format' => 'int32',
            ],
            [
              'name' => 'requestedAt',
              'title' => 'Requested At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'startedAt',
              'title' => 'Started At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'conversations_batch_response_public_actor',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/conversations/2026-09/actors/batch/read',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'actors',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'read',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'actors',
                    'batch',
                    'read',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'property',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_collection_response_public_message_forward_paging' => [
          'fields' => [
            [
              'name' => 'paging',
              'title' => 'Paging',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
          ],
          'name' => 'conversations_collection_response_public_message_forward_paging',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}/messages',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{thread_id}',
                    'messages',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'limit',
                      'property',
                      'sort',
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'conversations_collection_response_public_thread_forward_paging' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether this thread is archived.',
            ],
            [
              'name' => 'assignedTo',
              'title' => 'Assigned To',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'associatedContactId',
              'title' => 'Associated Contact Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the associated Contact in the CRM.',
            ],
            [
              'name' => 'closedAt',
              'title' => 'Closed At',
              'type' => '`$STRING`',
              'short' => 'When the thread was closed.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the thread was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique ID of the thread.',
            ],
            [
              'name' => 'inboxId',
              'title' => 'Inbox Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the conversations inbox containing the thread.',
            ],
            [
              'name' => 'latestMessageReceivedTimestamp',
              'title' => 'Latest Message Received Timestamp',
              'type' => '`$STRING`',
              'short' => 'The time that the latest message was sent on the thread.',
              'format' => 'date-time',
            ],
            [
              'name' => 'latestMessageSentTimestamp',
              'title' => 'Latest Message Sent Timestamp',
              'type' => '`$STRING`',
              'short' => 'The time that the latest message was sent on the thread.',
              'format' => 'date-time',
            ],
            [
              'name' => 'latestMessageTimestamp',
              'title' => 'Latest Message Timestamp',
              'type' => '`$STRING`',
              'short' => 'The time that the latest message was sent or received on the thread.',
              'format' => 'date-time',
            ],
            [
              'name' => 'originalChannelAccountId',
              'title' => 'Original Channel Account Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'originalChannelId',
              'title' => 'Original Channel Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'spam',
              'title' => 'Spam',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the thread is marked as spam.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The thread\'s status: `OPEN` or `CLOSED`.',
            ],
            [
              'name' => 'threadAssociations',
              'title' => 'Thread Associations',
              'type' => '`$OBJECT`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_collection_response_public_thread_forward_paging',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/threads',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'associated_contact_id',
                        'orig' => 'associated_contact_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'associated_ticket_id',
                        'orig' => 'associated_ticket_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'association',
                        'orig' => 'association',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'inbox_id',
                        'orig' => 'inbox_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'latest_message_timestamp_after',
                        'orig' => 'latest_message_timestamp_after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'thread_status',
                        'orig' => 'thread_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'associated_contact_id',
                      'associated_ticket_id',
                      'association',
                      'inbox_id',
                      'latest_message_timestamp_after',
                      'limit',
                      'property',
                      'sort',
                      'thread_status',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_collection_response_with_total_public_channel' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_collection_response_with_total_public_channel',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/channels',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'channels',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'channels',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'default_page_length',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_collection_response_with_total_public_channel_account' => [
          'fields' => [
            [
              'name' => 'active',
              'title' => 'Active',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the channel account is turned on.',
            ],
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'authorized',
              'title' => 'Authorized',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'channelId',
              'title' => 'Channel Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel that the channel account is an instance of.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'deliveryIdentifier',
              'title' => 'Delivery Identifier',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel account.',
            ],
            [
              'name' => 'inboxId',
              'title' => 'Inbox Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the conversations inbox that contains the channel account.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel account.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_collection_response_with_total_public_channel_account',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/channel-accounts',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'channel-accounts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'inbox_id',
                        'orig' => 'inbox_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'channel_id',
                      'default_page_length',
                      'inbox_id',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_collection_response_with_total_public_inbox' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the inbox was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the inbox.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the inbox.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specifies whether this refers to a Conversations Inbox or to the Help Desk.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_collection_response_with_total_public_inbox',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/inboxes',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'inboxes',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'inboxes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'default_page_length',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_batch_response_public_actor' => [
          'fields' => [
            [
              'name' => 'completedAt',
              'title' => 'Completed At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'links',
              'title' => 'Links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'requestedAt',
              'title' => 'Requested At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'startedAt',
              'title' => 'Started At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'conversations_inbox_messages_batch_response_public_actor',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/v3/conversations/actors/batch/read',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'actors',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'read',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'actors',
                    'batch',
                    'read',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'property',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_collection_response_public_message' => [
          'fields' => [
            [
              'name' => 'paging',
              'title' => 'Paging',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
          ],
          'name' => 'conversations_inbox_messages_collection_response_public_message',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}/messages',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{thread_id}',
                    'messages',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'limit',
                      'property',
                      'sort',
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'conversations_inbox_messages_collection_response_public_thread' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether this thread is archived.',
            ],
            [
              'name' => 'assignedTo',
              'title' => 'Assigned To',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'associatedContactId',
              'title' => 'Associated Contact Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the associated Contact in the CRM.',
            ],
            [
              'name' => 'closedAt',
              'title' => 'Closed At',
              'type' => '`$STRING`',
              'short' => 'When the thread was closed.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the thread was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique ID of the thread.',
            ],
            [
              'name' => 'inboxId',
              'title' => 'Inbox Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the conversations inbox containing the thread.',
            ],
            [
              'name' => 'latestMessageReceivedTimestamp',
              'title' => 'Latest Message Received Timestamp',
              'type' => '`$STRING`',
              'short' => 'The time that the latest message was sent on the thread.',
              'format' => 'date-time',
            ],
            [
              'name' => 'latestMessageSentTimestamp',
              'title' => 'Latest Message Sent Timestamp',
              'type' => '`$STRING`',
              'short' => 'The time that the latest message was sent on the thread.',
              'format' => 'date-time',
            ],
            [
              'name' => 'latestMessageTimestamp',
              'title' => 'Latest Message Timestamp',
              'type' => '`$STRING`',
              'short' => 'The time that the latest message was sent or received on the thread.',
              'format' => 'date-time',
            ],
            [
              'name' => 'originalChannelAccountId',
              'title' => 'Original Channel Account Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'originalChannelId',
              'title' => 'Original Channel Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'spam',
              'title' => 'Spam',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the thread is marked as spam.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The thread\'s status: `OPEN` or `CLOSED`.',
            ],
            [
              'name' => 'threadAssociations',
              'title' => 'Thread Associations',
              'type' => '`$OBJECT`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_collection_response_public_thread',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/threads',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'associated_contact_id',
                        'orig' => 'associated_contact_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'association',
                        'orig' => 'association',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'inbox_id',
                        'orig' => 'inbox_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'latest_message_timestamp_after',
                        'orig' => 'latest_message_timestamp_after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'thread_status',
                        'orig' => 'thread_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'associated_contact_id',
                      'association',
                      'inbox_id',
                      'latest_message_timestamp_after',
                      'limit',
                      'property',
                      'sort',
                      'thread_status',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_collection_response_with_total_public' => [
          'fields' => [
            [
              'name' => 'active',
              'title' => 'Active',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the channel account is turned on.',
            ],
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'authorized',
              'title' => 'Authorized',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'channelId',
              'title' => 'Channel Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel that the channel account is an instance of.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'deliveryIdentifier',
              'title' => 'Delivery Identifier',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel account.',
            ],
            [
              'name' => 'inboxId',
              'title' => 'Inbox Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the conversations inbox that contains the channel account.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel account.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_collection_response_with_total_public',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/channel-accounts',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'channel-accounts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'inbox_id',
                        'orig' => 'inbox_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'channel_id',
                      'default_page_length',
                      'inbox_id',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_collection_response_with_total_public2' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_collection_response_with_total_public2',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/channels',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'channels',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'channels',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'default_page_length',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_collection_response_with_total_public3' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the inbox was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the inbox.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the inbox.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specifies whether this refers to a Conversations Inbox or to the Help Desk.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_collection_response_with_total_public3',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/inboxes',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'inboxes',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'inboxes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'default_page_length',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_public_actor' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_public_actor',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/actors/{actorId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'actors',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'actors',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'actorId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'actor_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_public_channel' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_public_channel',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/channels/{channelId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'channels',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'channels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_public_channel_account' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of identifier.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_public_channel_account',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/channel-accounts/{channelAccountId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'channel-accounts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelAccountId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.deliveryIdentifier`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'channel_account_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_public_inbox' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the inbox was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the inbox.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the inbox.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specifies whether this refers to a Conversations Inbox or to the Help Desk.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_public_inbox',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/inboxes/{inboxId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'inboxes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'inboxes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'inboxId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'inbox_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_inbox_messages_public_message' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_public_message',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}/messages',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{thread_id}',
                    'messages',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}/messages/{messageId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{thread_id}',
                    'messages',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'messageId' => 'id',
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'message_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'property',
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'conversations_inbox_messages_public_message_content' => [
          'fields' => [
            [
              'name' => 'richText',
              'title' => 'Rich Text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'text',
              'title' => 'Text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'conversations_inbox_messages_public_message_content',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                    [
                      'var' => 'message_id',
                    ],
                    [
                      'lit' => 'original-content',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{thread_id}',
                    'messages',
                    '{message_id}',
                    'original-content',
                  ],
                  'rename' => [
                    'param' => [
                      'messageId' => 'message_id',
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'message_id',
                        'orig' => 'message_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'message_id',
                      'property',
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'conversations_inbox_messages_public_thread' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether this thread is archived.',
            ],
            [
              'name' => 'associatedTicketId',
              'title' => 'Associated Ticket Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'The thread\'s status: `OPEN` or `CLOSED`.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_inbox_messages_public_thread',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.threadAssociations`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'association',
                        'orig' => 'association',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'association',
                      'id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.threadAssociations`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_public_actor' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_public_actor',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/actors/{actorId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'actors',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'actors',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'actorId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'actor_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_public_channel' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the channel.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_public_channel',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/channels/{channelId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'channels',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'channels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_public_channel_account' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of identifier.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_public_channel_account',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/channel-accounts/{channelAccountId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'channel-accounts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelAccountId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.deliveryIdentifier`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'channel_account_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_public_inbox' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'When the inbox was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the inbox.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the inbox.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specifies whether this refers to a Conversations Inbox or to the Help Desk.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_public_inbox',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/inboxes/{inboxId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'inboxes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'inboxes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'inboxId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'inbox_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversations_public_message' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_public_message',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}/messages',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{thread_id}',
                    'messages',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{thread_id}',
                    'messages',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'messageId' => 'id',
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'message_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'property',
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'conversations_public_message_content' => [
          'fields' => [
            [
              'name' => 'richText',
              'title' => 'Rich Text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'text',
              'title' => 'Text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'conversations_public_message_content',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                    [
                      'var' => 'message_id',
                    ],
                    [
                      'lit' => 'original-content',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{thread_id}',
                    'messages',
                    '{message_id}',
                    'original-content',
                  ],
                  'rename' => [
                    'param' => [
                      'messageId' => 'message_id',
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'message_id',
                        'orig' => 'message_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'message_id',
                      'property',
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'conversations_public_thread' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether this thread is archived.',
            ],
            [
              'name' => 'associatedTicketId',
              'title' => 'Associated Ticket Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'The thread\'s status: `OPEN` or `CLOSED`.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'conversations_public_thread',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.threadAssociations`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'association',
                        'orig' => 'association',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'association',
                      'id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}/assignee',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'assignee',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{thread_id}',
                    'assignee',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'assignee',
                    'exist' => [
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.threadAssociations`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}/assignee',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'thread_id',
                    ],
                    [
                      'lit' => 'assignee',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{thread_id}',
                    'assignee',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.threadAssociations`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'assignee',
                    'exist' => [
                      'thread_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.thread',
              ],
            ],
          ],
        ],
        'custom_channels_collection_response_with_total_public_channel' => [
          'fields' => [
            [
              'name' => 'capabilities',
              'title' => 'Capabilities',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object detailing the capabilities of the channel, with additional properties as objects.',
            ],
            [
              'name' => 'channelAccountConnectionRedirectUrl',
              'title' => 'Channel Account Connection Redirect Url',
              'type' => '`$STRING`',
              'short' => 'A string representing the URL used to redirect for channel account connection.',
            ],
            [
              'name' => 'channelDescription',
              'title' => 'Channel Description',
              'type' => '`$STRING`',
              'short' => 'A string providing a description of the channel.',
            ],
            [
              'name' => 'channelLogoUrl',
              'title' => 'Channel Logo Url',
              'type' => '`$STRING`',
              'short' => 'A string representing the URL of the channel\'s logo.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the channel was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string that uniquely identifies the channel.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the name of the channel.',
            ],
            [
              'name' => 'webhookUrl',
              'title' => 'Webhook Url',
              'type' => '`$STRING`',
              'short' => 'A string representing the URL to which webhook events will be sent.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'custom_channels_collection_response_with_total_public_channel',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/custom-channels/2026-09',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'default_page_length',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_channels_collection_response_with_total_public_channel2' => [
          'fields' => [
            [
              'name' => 'active',
              'title' => 'Active',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the channel account is currently active.',
            ],
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the channel account is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the channel account was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'authorized',
              'title' => 'Authorized',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the channel account is authorized.',
            ],
            [
              'name' => 'channelId',
              'title' => 'Channel Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the channel to which this account belongs, represented as a string.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the channel account was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'deliveryIdentifier',
              'title' => 'Delivery Identifier',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for this channel account, represented as a string.',
            ],
            [
              'name' => 'inboxId',
              'title' => 'Inbox Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the inbox associated with this channel account, represented as a string.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the channel account, represented as a string.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'custom_channels_collection_response_with_total_public_channel2',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/channel-accounts',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'channel-accounts',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'default_page_length',
                        'orig' => 'default_page_length',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'delivery_identifier_type',
                        'orig' => 'delivery_identifier_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'delivery_identifier_value',
                        'orig' => 'delivery_identifier_value',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'channel_id',
                      'default_page_length',
                      'delivery_identifier_type',
                      'delivery_identifier_value',
                      'limit',
                      'sort',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_channels_public_channel_account' => [
          'fields' => [
            [
              'name' => 'authorized',
              'title' => 'Authorized',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether the channel account is authorized.',
            ],
            [
              'name' => 'deliveryIdentifier',
              'title' => 'Delivery Identifier',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'inboxId',
              'title' => 'Inbox Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the inbox associated with this channel account.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The name of the channel account.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the type of delivery identifier.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the value associated with the delivery identifier type.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'custom_channels_public_channel_account',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/channel-accounts',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'channel-accounts',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.deliveryIdentifier`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'channel-accounts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelAccountId' => 'id',
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.deliveryIdentifier`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'channel_account_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'channel_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'channel-accounts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'channel-accounts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelAccountId' => 'id',
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.deliveryIdentifier`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'channel_account_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_channels_public_channel_account_staging_token' => [
          'fields' => [
            [
              'name' => 'accountName',
              'title' => 'Account Name',
              'type' => '`$STRING`',
              'short' => 'A string representing the name of the account associated with the staging token.',
            ],
            [
              'name' => 'deliveryIdentifier',
              'title' => 'Delivery Identifier',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the type of delivery identifier.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the value associated with the delivery identifier type.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'custom_channels_public_channel_account_staging_token',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'channel-account-staging-tokens',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'channel-account-staging-tokens',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountToken' => 'id',
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.deliveryIdentifier`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'account_token',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_channels_public_channel_integration_channel' => [
          'fields' => [
            [
              'name' => 'capabilities',
              'title' => 'Capabilities',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object that defines the capabilities of the channel, with additional properties as key-value pairs.',
            ],
            [
              'name' => 'channelAccountConnectionRedirectUrl',
              'title' => 'Channel Account Connection Redirect Url',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string representing the URL to which users will be redirected to connect their channel account.',
            ],
            [
              'name' => 'channelDescription',
              'title' => 'Channel Description',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string providing a description of the channel.',
            ],
            [
              'name' => 'channelLogoUrl',
              'title' => 'Channel Logo Url',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string representing the URL of the channel\'s logo.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the name of the channel.',
            ],
            [
              'name' => 'webhookUrl',
              'title' => 'Webhook Url',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string representing the URL to which webhook events will be sent.',
            ],
          ],
          'name' => 'custom_channels_public_channel_integration_channel',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/custom-channels/2026-09',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.capabilities`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.capabilities`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.capabilities`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_channels_public_conversations_message' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the message is archived.',
            ],
            [
              'name' => 'associateWithContactId',
              'title' => 'Associate With Contact Id',
              'type' => '`$INTEGER`',
              'short' => 'The ID of the contact with which this message should be associated.',
              'format' => 'int64',
            ],
            [
              'name' => 'attachments',
              'title' => 'Attachments',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of attachments included with the message, which can be files, locations, contacts, or other supported types.',
            ],
            [
              'name' => 'channelAccountId',
              'title' => 'Channel Account Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The identifier of the channel account associated with the message.',
            ],
            [
              'name' => 'channelId',
              'title' => 'Channel Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The identifier of the channel through which the message was sent.',
            ],
            [
              'name' => 'client',
              'title' => 'Client',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'conversationsThreadId',
              'title' => 'Conversations Thread Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The identifier for the conversation thread to which this message belongs.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the message was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdBy',
              'title' => 'Created By',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The identifier of the user or system that created the message.',
            ],
            [
              'name' => 'direction',
              'title' => 'Direction',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The direction of the message, either \'INCOMING\' or \'OUTGOING\'.',
            ],
            [
              'name' => 'errorMessage',
              'title' => 'Error Message',
              'type' => '`$STRING`',
              'short' => 'A string containing an error message, if applicable.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the message.',
            ],
            [
              'name' => 'inReplyToId',
              'title' => 'In Reply To Id',
              'type' => '`$STRING`',
              'short' => 'The identifier of the message to which this message is a reply, if applicable.',
            ],
            [
              'name' => 'integrationIdempotencyId',
              'title' => 'Integration Idempotency Id',
              'type' => '`$STRING`',
              'short' => 'A unique identifier to ensure idempotency of the message within the integration.',
            ],
            [
              'name' => 'integrationThreadId',
              'title' => 'Integration Thread Id',
              'type' => '`$STRING`',
              'short' => 'A unique identifier for the thread within the integration.',
            ],
            [
              'name' => 'messageDirection',
              'title' => 'Message Direction',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The direction of the message, indicating whether it is \'INCOMING\' or \'OUTGOING\'.',
            ],
            [
              'name' => 'preResolvedContacts',
              'title' => 'Pre Resolved Contacts',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'recipients',
              'title' => 'Recipients',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of recipients of the message, each containing recipient details.',
            ],
            [
              'name' => 'richText',
              'title' => 'Rich Text',
              'type' => '`$STRING`',
              'short' => 'The rich text content of the message, if available.',
            ],
            [
              'name' => 'senders',
              'title' => 'Senders',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of senders associated with the message, each containing sender details.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'statusType',
              'title' => 'Status Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Valid status are SENT, FAILED, and READ',
            ],
            [
              'name' => 'subject',
              'title' => 'Subject',
              'type' => '`$STRING`',
              'short' => 'The subject of the message, if applicable.',
            ],
            [
              'name' => 'text',
              'title' => 'Text',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The plain text content of the message.',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the message was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'truncationStatus',
              'title' => 'Truncation Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Indicates whether the message content is truncated.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of the message, which is always \'MESSAGE\'.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the message was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'custom_channels_public_conversations_message',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/messages',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'messages',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'messages',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                      'messageId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'message_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'custom-channels',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'var' => 'channel_id',
                    ],
                    [
                      'lit' => 'messages',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'custom-channels',
                    '2026-09',
                    '{channel_id}',
                    'messages',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'channelId' => 'channel_id',
                      'messageId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'channel_id',
                        'orig' => 'channel_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'message_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'channel_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'public_thread' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'public_thread',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/conversations/v3/conversations/threads/{threadId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'v3',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'v3',
                    'conversations',
                    'threads',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'thread' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'thread',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/conversations/conversations/2026-09/threads/{threadId}',
                  'segments' => [
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => 'conversations',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'threads',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'conversations',
                    'conversations',
                    '2026-09',
                    'threads',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'threadId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'thread_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'visitor_identification_identification_token' => [
          'fields' => [
            [
              'name' => 'email',
              'title' => 'Email',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The email of the visitor that you wish to identify',
            ],
            [
              'name' => 'firstName',
              'title' => 'First Name',
              'type' => '`$STRING`',
              'short' => 'The first name of the visitor that you wish to identify.',
            ],
            [
              'name' => 'hsCustomerAgentContext',
              'title' => 'Hs Customer Agent Context',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object containing additional context about the customer agent.',
            ],
            [
              'name' => 'lastName',
              'title' => 'Last Name',
              'type' => '`$STRING`',
              'short' => 'The last name of the visitor that you wish to identify.',
            ],
            [
              'name' => 'token',
              'title' => 'Token',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'An identification token that allows the visitor to be treated as a known contact.',
            ],
          ],
          'name' => 'visitor_identification_identification_token',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/visitor-identification/2026-09/tokens/create',
                  'segments' => [
                    [
                      'lit' => 'visitor-identification',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'tokens',
                    ],
                    [
                      'lit' => 'create',
                    ],
                  ],
                  'parts' => [
                    'visitor-identification',
                    '2026-09',
                    'tokens',
                    'create',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HubspotConversationsFeatures::make_feature($name);
    }
}
