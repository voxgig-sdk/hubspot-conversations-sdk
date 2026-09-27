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
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/custom-channels/2026-09/{channelId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversations_batch_response_public_actor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "numErrors",
						"title": "Num Errors",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "conversations_batch_response_public_actor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"actors",
									"batch",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"property",
									},
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
						"title": "Paging",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "conversations_collection_response_public_message_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"conversations_collection_response_public_thread_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this thread is archived.",
					},
					map[string]any{
						"name": "assignedTo",
						"title": "Assigned To",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "associatedContactId",
						"title": "Associated Contact Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the associated Contact in the CRM.",
					},
					map[string]any{
						"name": "closedAt",
						"title": "Closed At",
						"type": "`$STRING`",
						"short": "When the thread was closed.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the thread was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique ID of the thread.",
					},
					map[string]any{
						"name": "inboxId",
						"title": "Inbox Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the conversations inbox containing the thread.",
					},
					map[string]any{
						"name": "latestMessageReceivedTimestamp",
						"title": "Latest Message Received Timestamp",
						"type": "`$STRING`",
						"short": "The time that the latest message was sent on the thread.",
						"format": "date-time",
					},
					map[string]any{
						"name": "latestMessageSentTimestamp",
						"title": "Latest Message Sent Timestamp",
						"type": "`$STRING`",
						"short": "The time that the latest message was sent on the thread.",
						"format": "date-time",
					},
					map[string]any{
						"name": "latestMessageTimestamp",
						"title": "Latest Message Timestamp",
						"type": "`$STRING`",
						"short": "The time that the latest message was sent or received on the thread.",
						"format": "date-time",
					},
					map[string]any{
						"name": "originalChannelAccountId",
						"title": "Original Channel Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "originalChannelId",
						"title": "Original Channel Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "spam",
						"title": "Spam",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the thread is marked as spam.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The thread's status: `OPEN` or `CLOSED`.",
					},
					map[string]any{
						"name": "threadAssociations",
						"title": "Thread Associations",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "associated_contact_id",
											"orig": "associated_contact_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "associated_ticket_id",
											"orig": "associated_ticket_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "latest_message_timestamp_after",
											"orig": "latest_message_timestamp_after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "thread_status",
											"orig": "thread_status",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
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
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel.",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the channel account is turned on.",
					},
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "authorized",
						"title": "Authorized",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "channelId",
						"title": "Channel Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel that the channel account is an instance of.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"title": "Delivery Identifier",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel account.",
					},
					map[string]any{
						"name": "inboxId",
						"title": "Inbox Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the conversations inbox that contains the channel account.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel account.",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channel-accounts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the inbox was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the inbox.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the inbox.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"inboxes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "conversations_inbox_messages_batch_response_public_actor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"actors",
									"batch",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"property",
									},
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
						"title": "Paging",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "conversations_inbox_messages_collection_response_public_message",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"conversations_inbox_messages_collection_response_public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this thread is archived.",
					},
					map[string]any{
						"name": "assignedTo",
						"title": "Assigned To",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "associatedContactId",
						"title": "Associated Contact Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the associated Contact in the CRM.",
					},
					map[string]any{
						"name": "closedAt",
						"title": "Closed At",
						"type": "`$STRING`",
						"short": "When the thread was closed.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the thread was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique ID of the thread.",
					},
					map[string]any{
						"name": "inboxId",
						"title": "Inbox Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the conversations inbox containing the thread.",
					},
					map[string]any{
						"name": "latestMessageReceivedTimestamp",
						"title": "Latest Message Received Timestamp",
						"type": "`$STRING`",
						"short": "The time that the latest message was sent on the thread.",
						"format": "date-time",
					},
					map[string]any{
						"name": "latestMessageSentTimestamp",
						"title": "Latest Message Sent Timestamp",
						"type": "`$STRING`",
						"short": "The time that the latest message was sent on the thread.",
						"format": "date-time",
					},
					map[string]any{
						"name": "latestMessageTimestamp",
						"title": "Latest Message Timestamp",
						"type": "`$STRING`",
						"short": "The time that the latest message was sent or received on the thread.",
						"format": "date-time",
					},
					map[string]any{
						"name": "originalChannelAccountId",
						"title": "Original Channel Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "originalChannelId",
						"title": "Original Channel Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "spam",
						"title": "Spam",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the thread is marked as spam.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The thread's status: `OPEN` or `CLOSED`.",
					},
					map[string]any{
						"name": "threadAssociations",
						"title": "Thread Associations",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "associated_contact_id",
											"orig": "associated_contact_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "latest_message_timestamp_after",
											"orig": "latest_message_timestamp_after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "thread_status",
											"orig": "thread_status",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the channel account is turned on.",
					},
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "authorized",
						"title": "Authorized",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "channelId",
						"title": "Channel Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel that the channel account is an instance of.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"title": "Delivery Identifier",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel account.",
					},
					map[string]any{
						"name": "inboxId",
						"title": "Inbox Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the conversations inbox that contains the channel account.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel account.",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channel-accounts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "inbox_id",
											"orig": "inbox_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel.",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the inbox was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the inbox.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the inbox.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"inboxes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/actors/{actorId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"actors",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"actorId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
									},
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
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/channels/{channelId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of identifier.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/channel-accounts/{channelAccountId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"channel-accounts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "channel_account_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the inbox was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the inbox.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the inbox.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/inboxes/{inboxId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"inboxes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"inboxId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "inbox_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
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
						"title": "Id",
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
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"thread_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{thread_id}",
									"messages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "id",
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
										"thread_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"conversations_inbox_messages_public_message_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "richText",
						"title": "Rich Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content",
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
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "message_id",
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
										"property",
										"thread_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"conversations_inbox_messages_public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "Whether this thread is archived.",
					},
					map[string]any{
						"name": "associatedTicketId",
						"title": "Associated Ticket Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "The thread's status: `OPEN` or `CLOSED`.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/v3/conversations/threads/{threadId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/v3/conversations/threads/{threadId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
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
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/actors/{actorId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"actors",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"actorId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "actor_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
									},
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
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the channel.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/channels/{channelId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of identifier.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representation of the PublicDeliveryIdentifier, either an an E.164 phone number, an email address, or a channel-specific identifier.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/channel-accounts/{channelAccountId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"channel-accounts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "channel_account_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the inbox was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the inbox.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the inbox.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies whether this refers to a Conversations Inbox or to the Help Desk.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/inboxes/{inboxId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"inboxes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"inboxId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "inbox_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
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
						"title": "Id",
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
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"thread_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"messages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "id",
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"property",
										"thread_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"conversations_public_message_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "richText",
						"title": "Rich Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content",
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
								"rename": map[string]any{
									"param": map[string]any{
										"messageId": "message_id",
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
										"property",
										"thread_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"conversations_public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "Whether this thread is archived.",
					},
					map[string]any{
						"name": "associatedTicketId",
						"title": "Associated Ticket Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "The thread's status: `OPEN` or `CLOSED`.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "association",
											"orig": "association",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/assignee",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"assignee",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"$action": "assignee",
									"exist": []any{
										"thread_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}/assignee",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{thread_id}",
									"assignee",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threadAssociations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"$action": "assignee",
									"exist": []any{
										"thread_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.thread",
						},
					},
				},
			},
			"custom_channels_collection_response_with_total_public_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "capabilities",
						"title": "Capabilities",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object detailing the capabilities of the channel, with additional properties as objects.",
					},
					map[string]any{
						"name": "channelAccountConnectionRedirectUrl",
						"title": "Channel Account Connection Redirect Url",
						"type": "`$STRING`",
						"short": "A string representing the URL used to redirect for channel account connection.",
					},
					map[string]any{
						"name": "channelDescription",
						"title": "Channel Description",
						"type": "`$STRING`",
						"short": "A string providing a description of the channel.",
					},
					map[string]any{
						"name": "channelLogoUrl",
						"title": "Channel Logo Url",
						"type": "`$STRING`",
						"short": "A string representing the URL of the channel's logo.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the channel was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A string that uniquely identifies the channel.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the name of the channel.",
					},
					map[string]any{
						"name": "webhookUrl",
						"title": "Webhook Url",
						"type": "`$STRING`",
						"short": "A string representing the URL to which webhook events will be sent.",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the channel account is currently active.",
					},
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the channel account is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time when the channel account was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "authorized",
						"title": "Authorized",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the channel account is authorized.",
					},
					map[string]any{
						"name": "channelId",
						"title": "Channel Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the channel to which this account belongs, represented as a string.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the channel account was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"title": "Delivery Identifier",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for this channel account, represented as a string.",
					},
					map[string]any{
						"name": "inboxId",
						"title": "Inbox Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the inbox associated with this channel account, represented as a string.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the channel account, represented as a string.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "default_page_length",
											"orig": "default_page_length",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "delivery_identifier_type",
											"orig": "delivery_identifier_type",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "delivery_identifier_value",
											"orig": "delivery_identifier_value",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_channels_public_channel_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authorized",
						"title": "Authorized",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether the channel account is authorized.",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"title": "Delivery Identifier",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inboxId",
						"title": "Inbox Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the inbox associated with this channel account.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the channel account.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the type of delivery identifier.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the value associated with the delivery identifier type.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "channel_account_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"channel_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-accounts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelAccountId": "id",
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "channel_account_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_channels_public_channel_account_staging_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountName",
						"title": "Account Name",
						"type": "`$STRING`",
						"short": "A string representing the name of the account associated with the staging token.",
					},
					map[string]any{
						"name": "deliveryIdentifier",
						"title": "Delivery Identifier",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the type of delivery identifier.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the value associated with the delivery identifier type.",
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
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"channel-account-staging-tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountToken": "id",
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deliveryIdentifier`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "account_token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_channels_public_channel_integration_channel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "capabilities",
						"title": "Capabilities",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object that defines the capabilities of the channel, with additional properties as key-value pairs.",
					},
					map[string]any{
						"name": "channelAccountConnectionRedirectUrl",
						"title": "Channel Account Connection Redirect Url",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL to which users will be redirected to connect their channel account.",
					},
					map[string]any{
						"name": "channelDescription",
						"title": "Channel Description",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string providing a description of the channel.",
					},
					map[string]any{
						"name": "channelLogoUrl",
						"title": "Channel Logo Url",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL of the channel's logo.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the name of the channel.",
					},
					map[string]any{
						"name": "webhookUrl",
						"title": "Webhook Url",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL to which webhook events will be sent.",
					},
				},
				"name": "custom_channels_public_channel_integration_channel",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.capabilities`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.capabilities`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.capabilities`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_channels_public_conversations_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the message is archived.",
					},
					map[string]any{
						"name": "associateWithContactId",
						"title": "Associate With Contact Id",
						"type": "`$INTEGER`",
						"short": "The ID of the contact with which this message should be associated.",
						"format": "int64",
					},
					map[string]any{
						"name": "attachments",
						"title": "Attachments",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of attachments included with the message, which can be files, locations, contacts, or other supported types.",
					},
					map[string]any{
						"name": "channelAccountId",
						"title": "Channel Account Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the channel account associated with the message.",
					},
					map[string]any{
						"name": "channelId",
						"title": "Channel Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the channel through which the message was sent.",
					},
					map[string]any{
						"name": "client",
						"title": "Client",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "conversationsThreadId",
						"title": "Conversations Thread Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier for the conversation thread to which this message belongs.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the message was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdBy",
						"title": "Created By",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the user or system that created the message.",
					},
					map[string]any{
						"name": "direction",
						"title": "Direction",
						"type": "`$STRING`",
						"req": true,
						"short": "The direction of the message, either 'INCOMING' or 'OUTGOING'.",
					},
					map[string]any{
						"name": "errorMessage",
						"title": "Error Message",
						"type": "`$STRING`",
						"short": "A string containing an error message, if applicable.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the message.",
					},
					map[string]any{
						"name": "inReplyToId",
						"title": "In Reply To Id",
						"type": "`$STRING`",
						"short": "The identifier of the message to which this message is a reply, if applicable.",
					},
					map[string]any{
						"name": "integrationIdempotencyId",
						"title": "Integration Idempotency Id",
						"type": "`$STRING`",
						"short": "A unique identifier to ensure idempotency of the message within the integration.",
					},
					map[string]any{
						"name": "integrationThreadId",
						"title": "Integration Thread Id",
						"type": "`$STRING`",
						"short": "A unique identifier for the thread within the integration.",
					},
					map[string]any{
						"name": "messageDirection",
						"title": "Message Direction",
						"type": "`$STRING`",
						"req": true,
						"short": "The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.",
					},
					map[string]any{
						"name": "preResolvedContacts",
						"title": "Pre Resolved Contacts",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "recipients",
						"title": "Recipients",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of recipients of the message, each containing recipient details.",
					},
					map[string]any{
						"name": "richText",
						"title": "Rich Text",
						"type": "`$STRING`",
						"short": "The rich text content of the message, if available.",
					},
					map[string]any{
						"name": "senders",
						"title": "Senders",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of senders associated with the message, each containing sender details.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "statusType",
						"title": "Status Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Valid status are SENT, FAILED, and READ",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"short": "The subject of the message, if applicable.",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$STRING`",
						"req": true,
						"short": "The plain text content of the message.",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the message was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "truncationStatus",
						"title": "Truncation Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Indicates whether the message content is truncated.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of the message, which is always 'MESSAGE'.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the message was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/messages",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"messages",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"messages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
										"messageId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}",
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
								"parts": []any{
									"conversations",
									"custom-channels",
									"2026-09",
									"{channel_id}",
									"messages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"channelId": "channel_id",
										"messageId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "message_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"public_thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/v3/conversations/threads/{threadId}",
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
								"parts": []any{
									"conversations",
									"v3",
									"conversations",
									"threads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/conversations/2026-09/threads/{threadId}",
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
								"parts": []any{
									"conversations",
									"conversations",
									"2026-09",
									"threads",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"threadId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "The email of the visitor that you wish to identify",
					},
					map[string]any{
						"name": "firstName",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the visitor that you wish to identify.",
					},
					map[string]any{
						"name": "hsCustomerAgentContext",
						"title": "Hs Customer Agent Context",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object containing additional context about the customer agent.",
					},
					map[string]any{
						"name": "lastName",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the visitor that you wish to identify.",
					},
					map[string]any{
						"name": "token",
						"title": "Token",
						"type": "`$STRING`",
						"req": true,
						"short": "An identification token that allows the visitor to be treated as a known contact.",
					},
				},
				"name": "visitor_identification_identification_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"visitor-identification",
									"2026-09",
									"tokens",
									"create",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
