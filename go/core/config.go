package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotConversations",
			"slug": "hubspot-conversations",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"channel": map[string]any{},
				"conversations_batch_response_public_actor": map[string]any{},
				"conversations_collection_response_public_message_forward_paging": map[string]any{},
				"conversations_collection_response_public_thread_forward_paging": map[string]any{},
				"conversations_collection_response_with_total_public_channel": map[string]any{},
				"conversations_collection_response_with_total_public_channel_account": map[string]any{},
				"conversations_collection_response_with_total_public_inbox": map[string]any{},
				"conversations_inbox_messages_batch_response_public_actor": map[string]any{},
				"conversations_inbox_messages_collection_response_public_message": map[string]any{},
				"conversations_inbox_messages_collection_response_public_thread": map[string]any{},
				"conversations_inbox_messages_collection_response_with_total_public": map[string]any{},
				"conversations_inbox_messages_collection_response_with_total_public2": map[string]any{},
				"conversations_inbox_messages_collection_response_with_total_public3": map[string]any{},
				"conversations_inbox_messages_public_actor": map[string]any{},
				"conversations_inbox_messages_public_channel": map[string]any{},
				"conversations_inbox_messages_public_channel_account": map[string]any{},
				"conversations_inbox_messages_public_inbox": map[string]any{},
				"conversations_inbox_messages_public_message": map[string]any{},
				"conversations_inbox_messages_public_message_content": map[string]any{},
				"conversations_inbox_messages_public_thread": map[string]any{},
				"conversations_public_actor": map[string]any{},
				"conversations_public_channel": map[string]any{},
				"conversations_public_channel_account": map[string]any{},
				"conversations_public_inbox": map[string]any{},
				"conversations_public_message": map[string]any{},
				"conversations_public_message_content": map[string]any{},
				"conversations_public_thread": map[string]any{},
				"custom_channels_collection_response_with_total_public_channel": map[string]any{},
				"custom_channels_collection_response_with_total_public_channel2": map[string]any{},
				"custom_channels_public_channel_account": map[string]any{},
				"custom_channels_public_channel_account_staging_token": map[string]any{},
				"custom_channels_public_channel_integration_channel": map[string]any{},
				"custom_channels_public_conversations_message": map[string]any{},
				"public_thread": map[string]any{},
				"thread": map[string]any{},
				"visitor_identification_identification_token": map[string]any{},
			},
		},
		"entity": map[string]any{
			"channel": map[string]any{
				"fields": []any{},
				"name": "channel",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/custom-channels/2026-09/{channelId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"conversations_batch_response_public_actor": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 7,
							"count": 2,
							"depth": 5,
						},
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "conversations_batch_response_public_actor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/conversations/2026-09/actors/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "actors",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"actors",
									"batch",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_collection_response_public_message_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "paging",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 8,
							"count": 4,
							"depth": 12,
						},
					},
				},
				"name": "conversations_collection_response_public_message_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"limit",
										"property",
										"sort",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
						},
					},
				},
			},
			"conversations_collection_response_public_thread_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "Whether this thread is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assignedTo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "associatedContactId",
						"req": true,
						"short": "The ID of the associated Contact in the CRM.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "closedAt",
						"short": "When the thread was closed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "When the thread was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"req": true,
						"short": "The ID of the conversations inbox containing the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "latestMessageReceivedTimestamp",
						"short": "The time that the latest message was sent on the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "latestMessageSentTimestamp",
						"short": "The time that the latest message was sent on the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "latestMessageTimestamp",
						"short": "The time that the latest message was sent or received on the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalChannelAccountId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalChannelId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spam",
						"req": true,
						"short": "Whether the thread is marked as spam.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The thread's status: `OPEN` or `CLOSED`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "threadAssociations",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_collection_response_public_thread_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "associated_contact_id",
											"orig": "associated_contact_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "associated_ticket_id",
											"orig": "associated_ticket_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "latest_message_timestamp_after",
											"orig": "latest_message_timestamp_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "thread_status",
											"orig": "thread_status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_collection_response_with_total_public_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_collection_response_with_total_public_channel",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/channels",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "channels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"default_page_length",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channels",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_collection_response_with_total_public_channel_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"req": true,
						"short": "Whether the channel account is turned on.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authorized",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "channelId",
						"req": true,
						"short": "The ID of the channel that the channel account is an instance of.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"req": true,
						"short": "The ID of the conversations inbox that contains the channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel account.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_collection_response_with_total_public_channel_account",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/channel-accounts",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"channel_id",
										"default_page_length",
										"inbox_id",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channel-accounts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_collection_response_with_total_public_inbox": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "When the inbox was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_collection_response_with_total_public_inbox",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/inboxes",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "inboxes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"default_page_length",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"inboxes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_batch_response_public_actor": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 7,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "conversations_inbox_messages_batch_response_public_actor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/v3/conversations/actors/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "actors",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"actors",
									"batch",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_collection_response_public_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "paging",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 8,
							"count": 4,
							"depth": 12,
						},
					},
				},
				"name": "conversations_inbox_messages_collection_response_public_message",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"limit",
										"property",
										"sort",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
						},
					},
				},
			},
			"conversations_inbox_messages_collection_response_public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "Whether this thread is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assignedTo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "associatedContactId",
						"req": true,
						"short": "The ID of the associated Contact in the CRM.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "closedAt",
						"short": "When the thread was closed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "When the thread was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"req": true,
						"short": "The ID of the conversations inbox containing the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "latestMessageReceivedTimestamp",
						"short": "The time that the latest message was sent on the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "latestMessageSentTimestamp",
						"short": "The time that the latest message was sent on the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "latestMessageTimestamp",
						"short": "The time that the latest message was sent or received on the thread.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalChannelAccountId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalChannelId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spam",
						"req": true,
						"short": "Whether the thread is marked as spam.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The thread's status: `OPEN` or `CLOSED`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "threadAssociations",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_collection_response_public_thread",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "associated_contact_id",
											"orig": "associated_contact_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "latest_message_timestamp_after",
											"orig": "latest_message_timestamp_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "thread_status",
											"orig": "thread_status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_collection_response_with_total_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"req": true,
						"short": "Whether the channel account is turned on.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authorized",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "channelId",
						"req": true,
						"short": "The ID of the channel that the channel account is an instance of.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"req": true,
						"short": "The ID of the conversations inbox that contains the channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel account.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_collection_response_with_total_public",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/channel-accounts",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"channel_id",
										"default_page_length",
										"inbox_id",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channel-accounts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_collection_response_with_total_public2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_collection_response_with_total_public2",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/channels",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "channels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"default_page_length",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channels",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_collection_response_with_total_public3": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "When the inbox was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_collection_response_with_total_public3",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/inboxes",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "inboxes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"default_page_length",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"inboxes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_public_actor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_public_actor",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "actor_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/actors/{actorId}",
								"rename": map[string]any{
									"param": map[string]any{
										"actorId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "actors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"actors",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_public_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_public_channel",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/channels/{channelId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channels",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_public_channel_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"req": true,
						"short": "A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_public_channel_account",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "channel_account_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/channel-accounts/{channelAccountId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channel-accounts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_public_inbox": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "When the inbox was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_public_inbox",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "inbox_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/inboxes/{inboxId}",
								"rename": map[string]any{
									"param": map[string]any{
										"inboxId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "inboxes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"inboxes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_inbox_messages_public_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_public_message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}",
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "id",
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
						},
					},
				},
			},
			"conversations_inbox_messages_public_message_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "richText",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"type": "`$STRING`",
					},
				},
				"name": "conversations_inbox_messages_public_message_content",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "message_id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content",
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "message_id",
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "original-content",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
										"property",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
									"{message_id}",
									"original-content",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
							"message",
						},
					},
				},
			},
			"conversations_inbox_messages_public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "Whether this thread is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "associatedTicketId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The thread's status: `OPEN` or `CLOSED`.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_inbox_messages_public_thread",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"association",
										"id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/v3/conversations/threads/{threadId}",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_public_actor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_public_actor",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "actor_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/actors/{actorId}",
								"rename": map[string]any{
									"param": map[string]any{
										"actorId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "actors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"actors",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_public_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_public_channel",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/channels/{channelId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "channels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channels",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_public_channel_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"req": true,
						"short": "A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_public_channel_account",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "channel_account_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/channel-accounts/{channelAccountId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channel-accounts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_public_inbox": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "When the inbox was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_public_inbox",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "inbox_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/inboxes/{inboxId}",
								"rename": map[string]any{
									"param": map[string]any{
										"inboxId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "inboxes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"inboxes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_public_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_public_message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}",
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "id",
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
						},
					},
				},
			},
			"conversations_public_message_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "richText",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"type": "`$STRING`",
					},
				},
				"name": "conversations_public_message_content",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "message_id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content",
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "message_id",
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "original-content",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
										"property",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
									"{message_id}",
									"original-content",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
							"message",
						},
					},
				},
			},
			"conversations_public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "Whether this thread is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "associatedTicketId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The thread's status: `OPEN` or `CLOSED`.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversations_public_thread",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"association",
										"id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/assignee",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "assignee",
									},
								},
								"select": map[string]any{
									"$action": "assignee",
									"exist": []any{
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"assignee",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/assignee",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "thread_id",
									},
									map[string]any{
										"lit": "assignee",
									},
								},
								"select": map[string]any{
									"$action": "assignee",
									"exist": []any{
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"assignee",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
						},
					},
				},
			},
			"custom_channels_collection_response_with_total_public_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "capabilities",
						"req": true,
						"short": "An object detailing the capabilities of the channel, with additional properties as objects.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "channelAccountConnectionRedirectUrl",
						"short": "A string representing the URL used to redirect for channel account connection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channelDescription",
						"short": "A string providing a description of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channelLogoUrl",
						"short": "A string representing the URL of the channel's logo.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the channel was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "A string that uniquely identifies the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "A string representing the name of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "webhookUrl",
						"short": "A string representing the URL to which webhook events will be sent.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_channels_collection_response_with_total_public_channel",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"default_page_length",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_channels_collection_response_with_total_public_channel2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"req": true,
						"short": "A boolean indicating whether the channel account is currently active.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "A boolean indicating whether the channel account is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "The date and time when the channel account was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authorized",
						"req": true,
						"short": "A boolean indicating whether the channel account is authorized.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "channelId",
						"req": true,
						"short": "The unique identifier for the channel to which this account belongs, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the channel account was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for this channel account, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"req": true,
						"short": "The unique identifier for the inbox associated with this channel account, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the channel account, represented as a string.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_channels_collection_response_with_total_public_channel2",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "delivery_identifier_type",
											"orig": "delivery_identifier_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "delivery_identifier_value",
											"orig": "delivery_identifier_value",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"channel_id",
										"default_page_length",
										"delivery_identifier_type",
										"delivery_identifier_value",
										"limit",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"custom_channels_public_channel_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authorized",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the channel account is authorized.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"req": true,
						"short": "The unique identifier for the inbox associated with this channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "A string representing the type of delivery identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"req": true,
						"short": "A string representing the value associated with the delivery identifier type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_channels_public_channel_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "channel_account_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"channel_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "channel_account_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "channel-accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"custom_channels_public_channel_account_staging_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountName",
						"short": "A string representing the name of the account associated with the staging token.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "A string representing the type of delivery identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"req": true,
						"short": "A string representing the value associated with the delivery identifier type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_channels_public_channel_account_staging_token",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "account_token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountToken": "id",
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "channel-account-staging-tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-account-staging-tokens",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"custom_channels_public_channel_integration_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "capabilities",
						"req": true,
						"short": "An object that defines the capabilities of the channel, with additional properties as key-value pairs.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "channelAccountConnectionRedirectUrl",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL to which users will be redirected to connect their channel account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channelDescription",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string providing a description of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channelLogoUrl",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL of the channel's logo.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "A string representing the name of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "webhookUrl",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL to which webhook events will be sent.",
						"type": "`$STRING`",
					},
				},
				"name": "custom_channels_public_channel_integration_channel",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/custom-channels/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.capabilities`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.capabilities`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.capabilities`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"custom_channels_public_conversations_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "A boolean indicating whether the message is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "int64",
						"name": "associateWithContactId",
						"short": "The ID of the contact with which this message should be associated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "attachments",
						"req": true,
						"short": "An array of attachments included with the message, which can be files, locations, contacts, or other supported types.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 8,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "channelAccountId",
						"req": true,
						"short": "The identifier of the channel account associated with the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channelId",
						"req": true,
						"short": "The identifier of the channel through which the message was sent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "client",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "conversationsThreadId",
						"req": true,
						"short": "The identifier for the conversation thread to which this message belongs.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the message was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdBy",
						"req": true,
						"short": "The identifier of the user or system that created the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "direction",
						"req": true,
						"short": "The direction of the message, either 'INCOMING' or 'OUTGOING'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errorMessage",
						"short": "A string containing an error message, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inReplyToId",
						"short": "The identifier of the message to which this message is a reply, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integrationIdempotencyId",
						"short": "A unique identifier to ensure idempotency of the message within the integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integrationThreadId",
						"short": "A unique identifier for the thread within the integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messageDirection",
						"req": true,
						"short": "The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preResolvedContacts",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "recipients",
						"req": true,
						"short": "An array of recipients of the message, each containing recipient details.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "richText",
						"short": "The rich text content of the message, if available.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "senders",
						"req": true,
						"short": "An array of senders associated with the message, each containing sender details.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "statusType",
						"req": true,
						"short": "Valid status are SENT, FAILED, and READ",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject of the message, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"short": "The plain text content of the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"req": true,
						"short": "The date and time when the message was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "truncationStatus",
						"req": true,
						"short": "Indicates whether the message content is truncated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of the message, which is always 'MESSAGE'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the message was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_channels_public_conversations_message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"messages",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
										"messageId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"messages",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}",
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
										"messageId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "custom-channels",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "channel_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"messages",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "public_thread",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/v3/conversations/threads/{threadId}",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "thread",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}",
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "threads",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"visitor_identification_identification_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"req": true,
						"short": "The email of the visitor that you wish to identify",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstName",
						"short": "The first name of the visitor that you wish to identify.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hsCustomerAgentContext",
						"req": true,
						"short": "An object containing additional context about the customer agent.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lastName",
						"short": "The last name of the visitor that you wish to identify.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"req": true,
						"short": "An identification token that allows the visitor to be treated as a known contact.",
						"type": "`$STRING`",
					},
				},
				"name": "visitor_identification_identification_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/visitor-identification/2026-09/tokens/create",
								"segments": []any{
									map[string]any{
										"lit": "visitor-identification",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"lit": "create",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"visitor-identification",
									"2026-09",
									"tokens",
									"create",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
