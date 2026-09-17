# HubspotConversations SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HubspotConversations",
            "slug": "hubspot-conversations",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.hubapi.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "channel": {},
                "conversations_batch_response_public_actor": {},
                "conversations_collection_response_public_message_forward_paging": {},
                "conversations_collection_response_public_thread_forward_paging": {},
                "conversations_collection_response_with_total_public_channel": {},
                "conversations_collection_response_with_total_public_channel_account": {},
                "conversations_collection_response_with_total_public_inbox": {},
                "conversations_inbox_messages_batch_response_public_actor": {},
                "conversations_inbox_messages_collection_response_public_message": {},
                "conversations_inbox_messages_collection_response_public_thread": {},
                "conversations_inbox_messages_collection_response_with_total_public": {},
                "conversations_inbox_messages_collection_response_with_total_public2": {},
                "conversations_inbox_messages_collection_response_with_total_public3": {},
                "conversations_inbox_messages_public_actor": {},
                "conversations_inbox_messages_public_channel": {},
                "conversations_inbox_messages_public_channel_account": {},
                "conversations_inbox_messages_public_inbox": {},
                "conversations_inbox_messages_public_message": {},
                "conversations_inbox_messages_public_message_content": {},
                "conversations_inbox_messages_public_thread": {},
                "conversations_public_actor": {},
                "conversations_public_channel": {},
                "conversations_public_channel_account": {},
                "conversations_public_inbox": {},
                "conversations_public_message": {},
                "conversations_public_message_content": {},
                "conversations_public_thread": {},
                "custom_channels_collection_response_with_total_public_channel": {},
                "custom_channels_collection_response_with_total_public_channel2": {},
                "custom_channels_public_channel_account": {},
                "custom_channels_public_channel_account_staging_token": {},
                "custom_channels_public_channel_integration_channel": {},
                "custom_channels_public_conversations_message": {},
                "public_thread": {},
                "thread": {},
                "visitor_identification_identification_token": {},
            },
        },
        "entity": {
      "channel": {
        "fields": [],
        "name": "channel",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/conversations/custom-channels/2026-09/{channelId}",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "conversations_batch_response_public_actor": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "errors",
            "type": "`$ARRAY`",
          },
          {
            "name": "inputs",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "type": "`$OBJECT`",
          },
          {
            "format": "int32",
            "name": "numErrors",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "type": "`$ARRAY`",
            "union": {
              "branches": 7,
              "count": 2,
              "depth": 5,
            },
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "conversations_batch_response_public_actor",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/conversations/2026-09/actors/batch/read",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "actors",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "read",
                  },
                ],
                "select": {
                  "exist": [
                    "property",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "actors",
                  "batch",
                  "read",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_collection_response_public_message_forward_paging": {
        "fields": [
          {
            "name": "paging",
            "type": "`$OBJECT`",
          },
          {
            "name": "results",
            "req": True,
            "type": "`$ARRAY`",
            "union": {
              "branches": 8,
              "count": 4,
              "depth": 12,
            },
          },
        ],
        "name": "conversations_collection_response_public_message_forward_paging",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}/messages",
                "rename": {
                  "param": {
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "limit",
                    "property",
                    "sort",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{thread_id}",
                  "messages",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
            ],
          ],
        },
      },
      "conversations_collection_response_public_thread_forward_paging": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "short": "Whether this thread is archived.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assignedTo",
            "type": "`$STRING`",
          },
          {
            "name": "associatedContactId",
            "req": True,
            "short": "The ID of the associated Contact in the CRM.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "closedAt",
            "short": "When the thread was closed.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "When the thread was created.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The unique ID of the thread.",
            "type": "`$STRING`",
          },
          {
            "name": "inboxId",
            "req": True,
            "short": "The ID of the conversations inbox containing the thread.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "latestMessageReceivedTimestamp",
            "short": "The time that the latest message was sent on the thread.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "latestMessageSentTimestamp",
            "short": "The time that the latest message was sent on the thread.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "latestMessageTimestamp",
            "short": "The time that the latest message was sent or received on the thread.",
            "type": "`$STRING`",
          },
          {
            "name": "originalChannelAccountId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "originalChannelId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "spam",
            "req": True,
            "short": "Whether the thread is marked as spam.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The thread's status: `OPEN` or `CLOSED`.",
            "type": "`$STRING`",
          },
          {
            "name": "threadAssociations",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_collection_response_public_thread_forward_paging",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "associated_contact_id",
                      "orig": "associated_contact_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "associated_ticket_id",
                      "orig": "associated_ticket_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "association",
                      "orig": "association",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "inbox_id",
                      "orig": "inbox_id",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "latest_message_timestamp_after",
                      "orig": "latest_message_timestamp_after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "thread_status",
                      "orig": "thread_status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/threads",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "associated_contact_id",
                    "associated_ticket_id",
                    "association",
                    "inbox_id",
                    "latest_message_timestamp_after",
                    "limit",
                    "property",
                    "sort",
                    "thread_status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_collection_response_with_total_public_channel": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "short": "The ID of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_collection_response_with_total_public_channel",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/channels",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "channels",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "default_page_length",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "channels",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_collection_response_with_total_public_channel_account": {
        "fields": [
          {
            "name": "active",
            "req": True,
            "short": "Whether the channel account is turned on.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "type": "`$STRING`",
          },
          {
            "name": "authorized",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "channelId",
            "req": True,
            "short": "The ID of the channel that the channel account is an instance of.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "deliveryIdentifier",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The ID of the channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "inboxId",
            "req": True,
            "short": "The ID of the conversations inbox that contains the channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel account.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_collection_response_with_total_public_channel_account",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "inbox_id",
                      "orig": "inbox_id",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/channel-accounts",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "channel_id",
                    "default_page_length",
                    "inbox_id",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "channel-accounts",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_collection_response_with_total_public_inbox": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "When the inbox was created.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The ID of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_collection_response_with_total_public_inbox",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/inboxes",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "inboxes",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "default_page_length",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "inboxes",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_batch_response_public_actor": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "inputs",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "type": "`$OBJECT`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "type": "`$ARRAY`",
            "union": {
              "branches": 7,
              "count": 1,
              "depth": 1,
            },
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "conversations_inbox_messages_batch_response_public_actor",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/v3/conversations/actors/batch/read",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "actors",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "read",
                  },
                ],
                "select": {
                  "exist": [
                    "property",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "actors",
                  "batch",
                  "read",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_collection_response_public_message": {
        "fields": [
          {
            "name": "paging",
            "type": "`$OBJECT`",
          },
          {
            "name": "results",
            "req": True,
            "type": "`$ARRAY`",
            "union": {
              "branches": 8,
              "count": 4,
              "depth": 12,
            },
          },
        ],
        "name": "conversations_inbox_messages_collection_response_public_message",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/threads/{threadId}/messages",
                "rename": {
                  "param": {
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "limit",
                    "property",
                    "sort",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{thread_id}",
                  "messages",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
            ],
          ],
        },
      },
      "conversations_inbox_messages_collection_response_public_thread": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "short": "Whether this thread is archived.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assignedTo",
            "type": "`$STRING`",
          },
          {
            "name": "associatedContactId",
            "req": True,
            "short": "The ID of the associated Contact in the CRM.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "closedAt",
            "short": "When the thread was closed.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "When the thread was created.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The unique ID of the thread.",
            "type": "`$STRING`",
          },
          {
            "name": "inboxId",
            "req": True,
            "short": "The ID of the conversations inbox containing the thread.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "latestMessageReceivedTimestamp",
            "short": "The time that the latest message was sent on the thread.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "latestMessageSentTimestamp",
            "short": "The time that the latest message was sent on the thread.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "latestMessageTimestamp",
            "short": "The time that the latest message was sent or received on the thread.",
            "type": "`$STRING`",
          },
          {
            "name": "originalChannelAccountId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "originalChannelId",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "spam",
            "req": True,
            "short": "Whether the thread is marked as spam.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The thread's status: `OPEN` or `CLOSED`.",
            "type": "`$STRING`",
          },
          {
            "name": "threadAssociations",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_collection_response_public_thread",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "associated_contact_id",
                      "orig": "associated_contact_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "association",
                      "orig": "association",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "inbox_id",
                      "orig": "inbox_id",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "latest_message_timestamp_after",
                      "orig": "latest_message_timestamp_after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "thread_status",
                      "orig": "thread_status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/threads",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "associated_contact_id",
                    "association",
                    "inbox_id",
                    "latest_message_timestamp_after",
                    "limit",
                    "property",
                    "sort",
                    "thread_status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_collection_response_with_total_public": {
        "fields": [
          {
            "name": "active",
            "req": True,
            "short": "Whether the channel account is turned on.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "type": "`$STRING`",
          },
          {
            "name": "authorized",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "channelId",
            "req": True,
            "short": "The ID of the channel that the channel account is an instance of.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "deliveryIdentifier",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The ID of the channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "inboxId",
            "req": True,
            "short": "The ID of the conversations inbox that contains the channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel account.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_collection_response_with_total_public",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "inbox_id",
                      "orig": "inbox_id",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/channel-accounts",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "channel_id",
                    "default_page_length",
                    "inbox_id",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "channel-accounts",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_collection_response_with_total_public2": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "short": "The ID of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_collection_response_with_total_public2",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/channels",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "channels",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "default_page_length",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "channels",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_collection_response_with_total_public3": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "When the inbox was created.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The ID of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_collection_response_with_total_public3",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/inboxes",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "inboxes",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "default_page_length",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "inboxes",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_public_actor": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_public_actor",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "actor_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/actors/{actorId}",
                "rename": {
                  "param": {
                    "actorId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "actors",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "property",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "actors",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_public_channel": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "short": "The ID of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_public_channel",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/channels/{channelId}",
                "rename": {
                  "param": {
                    "channelId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "channels",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "channels",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_public_channel_account": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "The type of identifier.",
            "type": "`$STRING`",
          },
          {
            "name": "value",
            "req": True,
            "short": "A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_public_channel_account",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_account_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/channel-accounts/{channelAccountId}",
                "rename": {
                  "param": {
                    "channelAccountId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deliveryIdentifier`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "channel-accounts",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_public_inbox": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "When the inbox was created.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The ID of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_public_inbox",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "inbox_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/inboxes/{inboxId}",
                "rename": {
                  "param": {
                    "inboxId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "inboxes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "inboxes",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_inbox_messages_public_message": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_public_message",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/v3/conversations/threads/{threadId}/messages",
                "rename": {
                  "param": {
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                ],
                "select": {
                  "exist": [
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{thread_id}",
                  "messages",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}",
                "rename": {
                  "param": {
                    "messageId": "id",
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "property",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{thread_id}",
                  "messages",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
            ],
          ],
        },
      },
      "conversations_inbox_messages_public_message_content": {
        "fields": [
          {
            "name": "richText",
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "type": "`$STRING`",
          },
        ],
        "name": "conversations_inbox_messages_public_message_content",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "message_id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content",
                "rename": {
                  "param": {
                    "messageId": "message_id",
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                  {
                    "var": "message_id",
                  },
                  {
                    "lit": "original-content",
                  },
                ],
                "select": {
                  "exist": [
                    "message_id",
                    "property",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{thread_id}",
                  "messages",
                  "{message_id}",
                  "original-content",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
              "message",
            ],
          ],
        },
      },
      "conversations_inbox_messages_public_thread": {
        "fields": [
          {
            "name": "archived",
            "short": "Whether this thread is archived.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "associatedTicketId",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "The thread's status: `OPEN` or `CLOSED`.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_inbox_messages_public_thread",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "association",
                      "orig": "association",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/v3/conversations/threads/{threadId}",
                "rename": {
                  "param": {
                    "threadId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "association",
                    "id",
                    "property",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.threadAssociations`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{id}",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/conversations/v3/conversations/threads/{threadId}",
                "rename": {
                  "param": {
                    "threadId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.threadAssociations`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_public_actor": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_public_actor",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "actor_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/actors/{actorId}",
                "rename": {
                  "param": {
                    "actorId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "actors",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "property",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "actors",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_public_channel": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "short": "The ID of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_public_channel",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/channels/{channelId}",
                "rename": {
                  "param": {
                    "channelId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "channels",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "channels",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_public_channel_account": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "The type of identifier.",
            "type": "`$STRING`",
          },
          {
            "name": "value",
            "req": True,
            "short": "A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_public_channel_account",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_account_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/channel-accounts/{channelAccountId}",
                "rename": {
                  "param": {
                    "channelAccountId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deliveryIdentifier`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "channel-accounts",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_public_inbox": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "When the inbox was created.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The ID of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the inbox.",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_public_inbox",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "inbox_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/inboxes/{inboxId}",
                "rename": {
                  "param": {
                    "inboxId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "inboxes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "inboxes",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversations_public_message": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_public_message",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}/messages",
                "rename": {
                  "param": {
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                ],
                "select": {
                  "exist": [
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{thread_id}",
                  "messages",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}",
                "rename": {
                  "param": {
                    "messageId": "id",
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "property",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{thread_id}",
                  "messages",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
            ],
          ],
        },
      },
      "conversations_public_message_content": {
        "fields": [
          {
            "name": "richText",
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "type": "`$STRING`",
          },
        ],
        "name": "conversations_public_message_content",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "message_id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content",
                "rename": {
                  "param": {
                    "messageId": "message_id",
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "messages",
                  },
                  {
                    "var": "message_id",
                  },
                  {
                    "lit": "original-content",
                  },
                ],
                "select": {
                  "exist": [
                    "message_id",
                    "property",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{thread_id}",
                  "messages",
                  "{message_id}",
                  "original-content",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
              "message",
            ],
          ],
        },
      },
      "conversations_public_thread": {
        "fields": [
          {
            "name": "archived",
            "short": "Whether this thread is archived.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "associatedTicketId",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "The thread's status: `OPEN` or `CLOSED`.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversations_public_thread",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "association",
                      "orig": "association",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "property",
                      "orig": "property",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}",
                "rename": {
                  "param": {
                    "threadId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "association",
                    "id",
                    "property",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.threadAssociations`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{id}",
                ],
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}/assignee",
                "rename": {
                  "param": {
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "assignee",
                  },
                ],
                "select": {
                  "$action": "assignee",
                  "exist": [
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{thread_id}",
                  "assignee",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}",
                "rename": {
                  "param": {
                    "threadId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.threadAssociations`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}/assignee",
                "rename": {
                  "param": {
                    "threadId": "thread_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "thread_id",
                  },
                  {
                    "lit": "assignee",
                  },
                ],
                "select": {
                  "$action": "assignee",
                  "exist": [
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.threadAssociations`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{thread_id}",
                  "assignee",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
            ],
          ],
        },
      },
      "custom_channels_collection_response_with_total_public_channel": {
        "fields": [
          {
            "name": "capabilities",
            "req": True,
            "short": "An object detailing the capabilities of the channel, with additional properties as objects.",
            "type": "`$OBJECT`",
          },
          {
            "name": "channelAccountConnectionRedirectUrl",
            "short": "A string representing the URL used to redirect for channel account connection.",
            "type": "`$STRING`",
          },
          {
            "name": "channelDescription",
            "short": "A string providing a description of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "channelLogoUrl",
            "short": "A string representing the URL of the channel's logo.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the channel was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "A string that uniquely identifies the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "A string representing the name of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "webhookUrl",
            "short": "A string representing the URL to which webhook events will be sent.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "custom_channels_collection_response_with_total_public_channel",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/custom-channels/2026-09",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "default_page_length",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "custom_channels_collection_response_with_total_public_channel2": {
        "fields": [
          {
            "name": "active",
            "req": True,
            "short": "A boolean indicating whether the channel account is currently active.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "archived",
            "req": True,
            "short": "A boolean indicating whether the channel account is archived.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "archivedAt",
            "short": "The date and time when the channel account was archived, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "authorized",
            "req": True,
            "short": "A boolean indicating whether the channel account is authorized.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "channelId",
            "req": True,
            "short": "The unique identifier for the channel to which this account belongs, represented as a string.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the channel account was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "deliveryIdentifier",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The unique identifier for this channel account, represented as a string.",
            "type": "`$STRING`",
          },
          {
            "name": "inboxId",
            "req": True,
            "short": "The unique identifier for the inbox associated with this channel account, represented as a string.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the channel account, represented as a string.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "custom_channels_collection_response_with_total_public_channel2",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "default_page_length",
                      "orig": "default_page_length",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "delivery_identifier_type",
                      "orig": "delivery_identifier_type",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "delivery_identifier_value",
                      "orig": "delivery_identifier_value",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "archived",
                    "channel_id",
                    "default_page_length",
                    "delivery_identifier_type",
                    "delivery_identifier_value",
                    "limit",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "channel-accounts",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "custom_channels_public_channel_account": {
        "fields": [
          {
            "name": "authorized",
            "op": {
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "A boolean indicating whether the channel account is authorized.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "deliveryIdentifier",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "inboxId",
            "req": True,
            "short": "The unique identifier for the inbox associated with this channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "op": {
              "update": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "The name of the channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "A string representing the type of delivery identifier.",
            "type": "`$STRING`",
          },
          {
            "name": "value",
            "req": True,
            "short": "A string representing the value associated with the delivery identifier type.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "custom_channels_public_channel_account",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deliveryIdentifier`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "channel-accounts",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_account_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "archived",
                      "orig": "archived",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}",
                "rename": {
                  "param": {
                    "channelAccountId": "id",
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "archived",
                    "channel_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deliveryIdentifier`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "channel-accounts",
                  "{id}",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "channel_account_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}",
                "rename": {
                  "param": {
                    "channelAccountId": "id",
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "channel-accounts",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deliveryIdentifier`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "channel-accounts",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "custom_channels_public_channel_account_staging_token": {
        "fields": [
          {
            "name": "accountName",
            "short": "A string representing the name of the account associated with the staging token.",
            "type": "`$STRING`",
          },
          {
            "name": "deliveryIdentifier",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "A string representing the type of delivery identifier.",
            "type": "`$STRING`",
          },
          {
            "name": "value",
            "req": True,
            "short": "A string representing the value associated with the delivery identifier type.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "custom_channels_public_channel_account_staging_token",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "account_token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}",
                "rename": {
                  "param": {
                    "accountToken": "id",
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "channel-account-staging-tokens",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.deliveryIdentifier`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "channel-account-staging-tokens",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "custom_channels_public_channel_integration_channel": {
        "fields": [
          {
            "name": "capabilities",
            "req": True,
            "short": "An object that defines the capabilities of the channel, with additional properties as key-value pairs.",
            "type": "`$OBJECT`",
          },
          {
            "name": "channelAccountConnectionRedirectUrl",
            "op": {
              "update": {
                "req": True,
                "type": "`$OBJECT`",
              },
            },
            "short": "A string representing the URL to which users will be redirected to connect their channel account.",
            "type": "`$STRING`",
          },
          {
            "name": "channelDescription",
            "op": {
              "update": {
                "req": True,
                "type": "`$OBJECT`",
              },
            },
            "short": "A string providing a description of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "channelLogoUrl",
            "op": {
              "update": {
                "req": True,
                "type": "`$OBJECT`",
              },
            },
            "short": "A string representing the URL of the channel's logo.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "A string representing the name of the channel.",
            "type": "`$STRING`",
          },
          {
            "name": "webhookUrl",
            "op": {
              "update": {
                "req": True,
                "type": "`$OBJECT`",
              },
            },
            "short": "A string representing the URL to which webhook events will be sent.",
            "type": "`$STRING`",
          },
        ],
        "name": "custom_channels_public_channel_integration_channel",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/custom-channels/2026-09",
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.capabilities`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/custom-channels/2026-09/{channelId}",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.capabilities`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/conversations/custom-channels/2026-09/{channelId}",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.capabilities`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "custom_channels_public_conversations_message": {
        "fields": [
          {
            "name": "archived",
            "req": True,
            "short": "A boolean indicating whether the message is archived.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "int64",
            "name": "associateWithContactId",
            "short": "The ID of the contact with which this message should be associated.",
            "type": "`$INTEGER`",
          },
          {
            "name": "attachments",
            "req": True,
            "short": "An array of attachments included with the message, which can be files, locations, contacts, or other supported types.",
            "type": "`$ARRAY`",
            "union": {
              "branches": 8,
              "count": 1,
              "depth": 1,
            },
          },
          {
            "name": "channelAccountId",
            "req": True,
            "short": "The identifier of the channel account associated with the message.",
            "type": "`$STRING`",
          },
          {
            "name": "channelId",
            "req": True,
            "short": "The identifier of the channel through which the message was sent.",
            "type": "`$STRING`",
          },
          {
            "name": "client",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "conversationsThreadId",
            "req": True,
            "short": "The identifier for the conversation thread to which this message belongs.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the message was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "createdBy",
            "req": True,
            "short": "The identifier of the user or system that created the message.",
            "type": "`$STRING`",
          },
          {
            "name": "direction",
            "req": True,
            "short": "The direction of the message, either 'INCOMING' or 'OUTGOING'.",
            "type": "`$STRING`",
          },
          {
            "name": "errorMessage",
            "short": "A string containing an error message, if applicable.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The unique identifier for the message.",
            "type": "`$STRING`",
          },
          {
            "name": "inReplyToId",
            "short": "The identifier of the message to which this message is a reply, if applicable.",
            "type": "`$STRING`",
          },
          {
            "name": "integrationIdempotencyId",
            "short": "A unique identifier to ensure idempotency of the message within the integration.",
            "type": "`$STRING`",
          },
          {
            "name": "integrationThreadId",
            "short": "A unique identifier for the thread within the integration.",
            "type": "`$STRING`",
          },
          {
            "name": "messageDirection",
            "req": True,
            "short": "The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.",
            "type": "`$STRING`",
          },
          {
            "name": "preResolvedContacts",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "recipients",
            "req": True,
            "short": "An array of recipients of the message, each containing recipient details.",
            "type": "`$ARRAY`",
          },
          {
            "name": "richText",
            "short": "The rich text content of the message, if available.",
            "type": "`$STRING`",
          },
          {
            "name": "senders",
            "req": True,
            "short": "An array of senders associated with the message, each containing sender details.",
            "type": "`$ARRAY`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "statusType",
            "req": True,
            "short": "Valid status are SENT, FAILED, and READ",
            "type": "`$STRING`",
          },
          {
            "name": "subject",
            "short": "The subject of the message, if applicable.",
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "req": True,
            "short": "The plain text content of the message.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "req": True,
            "short": "The date and time when the message was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "truncationStatus",
            "req": True,
            "short": "Indicates whether the message content is truncated.",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "The type of the message, which is always 'MESSAGE'.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "short": "The date and time when the message was last updated, in ISO 8601 format.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "custom_channels_public_conversations_message",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/messages",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "messages",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "messages",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                    "messageId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "messages",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "messages",
                  "{id}",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}",
                "rename": {
                  "param": {
                    "channelId": "channel_id",
                    "messageId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "custom-channels",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "channel_id",
                  },
                  {
                    "lit": "messages",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "custom-channels",
                  "2026-09",
                  "{channel_id}",
                  "messages",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "public_thread": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "public_thread",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/conversations/v3/conversations/threads/{threadId}",
                "rename": {
                  "param": {
                    "threadId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "v3",
                  "conversations",
                  "threads",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "thread": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "thread",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/conversations/conversations/2026-09/threads/{threadId}",
                "rename": {
                  "param": {
                    "threadId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "conversations",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "threads",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations",
                  "conversations",
                  "2026-09",
                  "threads",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "visitor_identification_identification_token": {
        "fields": [
          {
            "name": "email",
            "req": True,
            "short": "The email of the visitor that you wish to identify",
            "type": "`$STRING`",
          },
          {
            "name": "firstName",
            "short": "The first name of the visitor that you wish to identify.",
            "type": "`$STRING`",
          },
          {
            "name": "hsCustomerAgentContext",
            "req": True,
            "short": "An object containing additional context about the customer agent.",
            "type": "`$OBJECT`",
          },
          {
            "name": "lastName",
            "short": "The last name of the visitor that you wish to identify.",
            "type": "`$STRING`",
          },
          {
            "name": "token",
            "req": True,
            "short": "An identification token that allows the visitor to be treated as a known contact.",
            "type": "`$STRING`",
          },
        ],
        "name": "visitor_identification_identification_token",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/visitor-identification/2026-09/tokens/create",
                "segments": [
                  {
                    "lit": "visitor-identification",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "tokens",
                  },
                  {
                    "lit": "create",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "visitor-identification",
                  "2026-09",
                  "tokens",
                  "create",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
