# hubspot-conversations-mcp

[MCP](https://modelcontextprotocol.io) server exposing the HubspotConversations SDK as
two agent tools — `hubspot-conversations_list` and `hubspot-conversations_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/hubspot-conversations-mcp)
make build

# 2. Provide credentials via the environment
export HUBSPOT_CONVERSATIONS_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user hubspot-conversations \
  -- /absolute/path/to/hubspot-conversations-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./hubspot-conversations-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// hubspot-conversations_list: first page of records
{ "entity": "conversations_collection_response_public_message_forward_paging" }
{ "entity": "conversations_collection_response_public_message_forward_paging", "query": { } }

// hubspot-conversations_load: one record by id
{ "entity": "conversations_inbox_messages_public_actor", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/hubspot-conversations-mcp
   ```

2. **Set your API key:**

   ```sh
   export HUBSPOT_CONVERSATIONS_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user hubspot-conversations \
     -- "$PWD"/dist/*/hubspot-conversations-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `hubspot-conversations_list` and `hubspot-conversations_load` tools now appear
   in new sessions. Ask the agent to *"list conversations_collection_response_public_message_forward_paging using hubspot-conversations"*
   and it calls `hubspot-conversations_list` with `{"entity":"conversations_collection_response_public_message_forward_paging"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export HUBSPOT_CONVERSATIONS_APIKEY=sk_live_xxx            # API key
export HUBSPOT_CONVERSATIONS_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./hubspot-conversations-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `hubspot-conversations_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "conversations_collection_response_public_message_forward_paging" }
```

### Call the `hubspot-conversations_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "conversations_inbox_messages_public_actor", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `hubspot-conversations_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `hubspot-conversations_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 36 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `HUBSPOT_CONVERSATIONS_APIKEY` | API key sent with every request. |
| `HUBSPOT_CONVERSATIONS_BASE` | Optional override of the API base URL. |

### Entities

The 36 entities valid as the `entity` argument:

channel | conversations_batch_response_public_actor | conversations_collection_response_public_message_forward_paging | conversations_collection_response_public_thread_forward_paging | conversations_collection_response_with_total_public_channel | conversations_collection_response_with_total_public_channel_account | conversations_collection_response_with_total_public_inbox | conversations_inbox_messages_batch_response_public_actor | conversations_inbox_messages_collection_response_public_message | conversations_inbox_messages_collection_response_public_thread | conversations_inbox_messages_collection_response_with_total_public | conversations_inbox_messages_collection_response_with_total_public2 | conversations_inbox_messages_collection_response_with_total_public3 | conversations_inbox_messages_public_actor | conversations_inbox_messages_public_channel | conversations_inbox_messages_public_channel_account | conversations_inbox_messages_public_inbox | conversations_inbox_messages_public_message | conversations_inbox_messages_public_message_content | conversations_inbox_messages_public_thread | conversations_public_actor | conversations_public_channel | conversations_public_channel_account | conversations_public_inbox | conversations_public_message | conversations_public_message_content | conversations_public_thread | custom_channels_collection_response_with_total_public_channel | custom_channels_collection_response_with_total_public_channel2 | custom_channels_public_channel_account | custom_channels_public_channel_account_staging_token | custom_channels_public_channel_integration_channel | custom_channels_public_conversations_message | public_thread | thread | visitor_identification_identification_token

### Smoke test via HTTP (raw JSON-RPC)

```sh
./hubspot-conversations-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"hubspot-conversations_load","arguments":{"entity":"conversations_inbox_messages_public_actor","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
