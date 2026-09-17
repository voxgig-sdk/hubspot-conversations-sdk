<?php
declare(strict_types=1);

// HubspotConversations SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class HubspotConversationsSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new HubspotConversationsUtility();
        $this->_utility = $utility;

        $config = HubspotConversationsConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = HubspotConversationsHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = HubspotConversationsHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!HubspotConversationsFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, HubspotConversationsFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return HubspotConversationsUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = HubspotConversationsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = HubspotConversationsHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = HubspotConversationsHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new HubspotConversationsSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new HubspotConversationsError($op . "_allow",
                "HubspotConversationsSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = HubspotConversationsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = HubspotConversationsHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new HubspotConversationsError("graphql_error",
                "HubspotConversationsSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_channel = null;

    // Canonical facade: $client->Channel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->channel()
    // resolves here too.
    public function Channel($data = null)
    {
        require_once __DIR__ . '/entity/channel_entity.php';
        if ($data === null) {
            if ($this->_channel === null) {
                $this->_channel = new ChannelEntity($this, null);
            }
            return $this->_channel;
        }
        return new ChannelEntity($this, $data);
    }


    private $_conversations_batch_response_public_actor = null;

    // Canonical facade: $client->ConversationsBatchResponsePublicActor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_batch_response_public_actor()
    // resolves here too.
    public function ConversationsBatchResponsePublicActor($data = null)
    {
        require_once __DIR__ . '/entity/conversations_batch_response_public_actor_entity.php';
        if ($data === null) {
            if ($this->_conversations_batch_response_public_actor === null) {
                $this->_conversations_batch_response_public_actor = new ConversationsBatchResponsePublicActorEntity($this, null);
            }
            return $this->_conversations_batch_response_public_actor;
        }
        return new ConversationsBatchResponsePublicActorEntity($this, $data);
    }


    private $_conversations_collection_response_public_message_forward_paging = null;

    // Canonical facade: $client->ConversationsCollectionResponsePublicMessageForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_collection_response_public_message_forward_paging()
    // resolves here too.
    public function ConversationsCollectionResponsePublicMessageForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/conversations_collection_response_public_message_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_conversations_collection_response_public_message_forward_paging === null) {
                $this->_conversations_collection_response_public_message_forward_paging = new ConversationsCollectionResponsePublicMessageForwardPagingEntity($this, null);
            }
            return $this->_conversations_collection_response_public_message_forward_paging;
        }
        return new ConversationsCollectionResponsePublicMessageForwardPagingEntity($this, $data);
    }


    private $_conversations_collection_response_public_thread_forward_paging = null;

    // Canonical facade: $client->ConversationsCollectionResponsePublicThreadForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_collection_response_public_thread_forward_paging()
    // resolves here too.
    public function ConversationsCollectionResponsePublicThreadForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/conversations_collection_response_public_thread_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_conversations_collection_response_public_thread_forward_paging === null) {
                $this->_conversations_collection_response_public_thread_forward_paging = new ConversationsCollectionResponsePublicThreadForwardPagingEntity($this, null);
            }
            return $this->_conversations_collection_response_public_thread_forward_paging;
        }
        return new ConversationsCollectionResponsePublicThreadForwardPagingEntity($this, $data);
    }


    private $_conversations_collection_response_with_total_public_channel = null;

    // Canonical facade: $client->ConversationsCollectionResponseWithTotalPublicChannel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_collection_response_with_total_public_channel()
    // resolves here too.
    public function ConversationsCollectionResponseWithTotalPublicChannel($data = null)
    {
        require_once __DIR__ . '/entity/conversations_collection_response_with_total_public_channel_entity.php';
        if ($data === null) {
            if ($this->_conversations_collection_response_with_total_public_channel === null) {
                $this->_conversations_collection_response_with_total_public_channel = new ConversationsCollectionResponseWithTotalPublicChannelEntity($this, null);
            }
            return $this->_conversations_collection_response_with_total_public_channel;
        }
        return new ConversationsCollectionResponseWithTotalPublicChannelEntity($this, $data);
    }


    private $_conversations_collection_response_with_total_public_channel_account = null;

    // Canonical facade: $client->ConversationsCollectionResponseWithTotalPublicChannelAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_collection_response_with_total_public_channel_account()
    // resolves here too.
    public function ConversationsCollectionResponseWithTotalPublicChannelAccount($data = null)
    {
        require_once __DIR__ . '/entity/conversations_collection_response_with_total_public_channel_account_entity.php';
        if ($data === null) {
            if ($this->_conversations_collection_response_with_total_public_channel_account === null) {
                $this->_conversations_collection_response_with_total_public_channel_account = new ConversationsCollectionResponseWithTotalPublicChannelAccountEntity($this, null);
            }
            return $this->_conversations_collection_response_with_total_public_channel_account;
        }
        return new ConversationsCollectionResponseWithTotalPublicChannelAccountEntity($this, $data);
    }


    private $_conversations_collection_response_with_total_public_inbox = null;

    // Canonical facade: $client->ConversationsCollectionResponseWithTotalPublicInbox()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_collection_response_with_total_public_inbox()
    // resolves here too.
    public function ConversationsCollectionResponseWithTotalPublicInbox($data = null)
    {
        require_once __DIR__ . '/entity/conversations_collection_response_with_total_public_inbox_entity.php';
        if ($data === null) {
            if ($this->_conversations_collection_response_with_total_public_inbox === null) {
                $this->_conversations_collection_response_with_total_public_inbox = new ConversationsCollectionResponseWithTotalPublicInboxEntity($this, null);
            }
            return $this->_conversations_collection_response_with_total_public_inbox;
        }
        return new ConversationsCollectionResponseWithTotalPublicInboxEntity($this, $data);
    }


    private $_conversations_inbox_messages_batch_response_public_actor = null;

    // Canonical facade: $client->ConversationsInboxMessagesBatchResponsePublicActor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_batch_response_public_actor()
    // resolves here too.
    public function ConversationsInboxMessagesBatchResponsePublicActor($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_batch_response_public_actor_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_batch_response_public_actor === null) {
                $this->_conversations_inbox_messages_batch_response_public_actor = new ConversationsInboxMessagesBatchResponsePublicActorEntity($this, null);
            }
            return $this->_conversations_inbox_messages_batch_response_public_actor;
        }
        return new ConversationsInboxMessagesBatchResponsePublicActorEntity($this, $data);
    }


    private $_conversations_inbox_messages_collection_response_public_message = null;

    // Canonical facade: $client->ConversationsInboxMessagesCollectionResponsePublicMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_collection_response_public_message()
    // resolves here too.
    public function ConversationsInboxMessagesCollectionResponsePublicMessage($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_collection_response_public_message_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_collection_response_public_message === null) {
                $this->_conversations_inbox_messages_collection_response_public_message = new ConversationsInboxMessagesCollectionResponsePublicMessageEntity($this, null);
            }
            return $this->_conversations_inbox_messages_collection_response_public_message;
        }
        return new ConversationsInboxMessagesCollectionResponsePublicMessageEntity($this, $data);
    }


    private $_conversations_inbox_messages_collection_response_public_thread = null;

    // Canonical facade: $client->ConversationsInboxMessagesCollectionResponsePublicThread()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_collection_response_public_thread()
    // resolves here too.
    public function ConversationsInboxMessagesCollectionResponsePublicThread($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_collection_response_public_thread_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_collection_response_public_thread === null) {
                $this->_conversations_inbox_messages_collection_response_public_thread = new ConversationsInboxMessagesCollectionResponsePublicThreadEntity($this, null);
            }
            return $this->_conversations_inbox_messages_collection_response_public_thread;
        }
        return new ConversationsInboxMessagesCollectionResponsePublicThreadEntity($this, $data);
    }


    private $_conversations_inbox_messages_collection_response_with_total_public = null;

    // Canonical facade: $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_collection_response_with_total_public()
    // resolves here too.
    public function ConversationsInboxMessagesCollectionResponseWithTotalPublic($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_collection_response_with_total_public_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_collection_response_with_total_public === null) {
                $this->_conversations_inbox_messages_collection_response_with_total_public = new ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity($this, null);
            }
            return $this->_conversations_inbox_messages_collection_response_with_total_public;
        }
        return new ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity($this, $data);
    }


    private $_conversations_inbox_messages_collection_response_with_total_public2 = null;

    // Canonical facade: $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_collection_response_with_total_public2()
    // resolves here too.
    public function ConversationsInboxMessagesCollectionResponseWithTotalPublic2($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_collection_response_with_total_public2_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_collection_response_with_total_public2 === null) {
                $this->_conversations_inbox_messages_collection_response_with_total_public2 = new ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity($this, null);
            }
            return $this->_conversations_inbox_messages_collection_response_with_total_public2;
        }
        return new ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity($this, $data);
    }


    private $_conversations_inbox_messages_collection_response_with_total_public3 = null;

    // Canonical facade: $client->ConversationsInboxMessagesCollectionResponseWithTotalPublic3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_collection_response_with_total_public3()
    // resolves here too.
    public function ConversationsInboxMessagesCollectionResponseWithTotalPublic3($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_collection_response_with_total_public3_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_collection_response_with_total_public3 === null) {
                $this->_conversations_inbox_messages_collection_response_with_total_public3 = new ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity($this, null);
            }
            return $this->_conversations_inbox_messages_collection_response_with_total_public3;
        }
        return new ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity($this, $data);
    }


    private $_conversations_inbox_messages_public_actor = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicActor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_actor()
    // resolves here too.
    public function ConversationsInboxMessagesPublicActor($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_actor_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_actor === null) {
                $this->_conversations_inbox_messages_public_actor = new ConversationsInboxMessagesPublicActorEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_actor;
        }
        return new ConversationsInboxMessagesPublicActorEntity($this, $data);
    }


    private $_conversations_inbox_messages_public_channel = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicChannel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_channel()
    // resolves here too.
    public function ConversationsInboxMessagesPublicChannel($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_channel_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_channel === null) {
                $this->_conversations_inbox_messages_public_channel = new ConversationsInboxMessagesPublicChannelEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_channel;
        }
        return new ConversationsInboxMessagesPublicChannelEntity($this, $data);
    }


    private $_conversations_inbox_messages_public_channel_account = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicChannelAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_channel_account()
    // resolves here too.
    public function ConversationsInboxMessagesPublicChannelAccount($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_channel_account_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_channel_account === null) {
                $this->_conversations_inbox_messages_public_channel_account = new ConversationsInboxMessagesPublicChannelAccountEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_channel_account;
        }
        return new ConversationsInboxMessagesPublicChannelAccountEntity($this, $data);
    }


    private $_conversations_inbox_messages_public_inbox = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicInbox()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_inbox()
    // resolves here too.
    public function ConversationsInboxMessagesPublicInbox($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_inbox_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_inbox === null) {
                $this->_conversations_inbox_messages_public_inbox = new ConversationsInboxMessagesPublicInboxEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_inbox;
        }
        return new ConversationsInboxMessagesPublicInboxEntity($this, $data);
    }


    private $_conversations_inbox_messages_public_message = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_message()
    // resolves here too.
    public function ConversationsInboxMessagesPublicMessage($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_message_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_message === null) {
                $this->_conversations_inbox_messages_public_message = new ConversationsInboxMessagesPublicMessageEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_message;
        }
        return new ConversationsInboxMessagesPublicMessageEntity($this, $data);
    }


    private $_conversations_inbox_messages_public_message_content = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicMessageContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_message_content()
    // resolves here too.
    public function ConversationsInboxMessagesPublicMessageContent($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_message_content_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_message_content === null) {
                $this->_conversations_inbox_messages_public_message_content = new ConversationsInboxMessagesPublicMessageContentEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_message_content;
        }
        return new ConversationsInboxMessagesPublicMessageContentEntity($this, $data);
    }


    private $_conversations_inbox_messages_public_thread = null;

    // Canonical facade: $client->ConversationsInboxMessagesPublicThread()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_inbox_messages_public_thread()
    // resolves here too.
    public function ConversationsInboxMessagesPublicThread($data = null)
    {
        require_once __DIR__ . '/entity/conversations_inbox_messages_public_thread_entity.php';
        if ($data === null) {
            if ($this->_conversations_inbox_messages_public_thread === null) {
                $this->_conversations_inbox_messages_public_thread = new ConversationsInboxMessagesPublicThreadEntity($this, null);
            }
            return $this->_conversations_inbox_messages_public_thread;
        }
        return new ConversationsInboxMessagesPublicThreadEntity($this, $data);
    }


    private $_conversations_public_actor = null;

    // Canonical facade: $client->ConversationsPublicActor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_actor()
    // resolves here too.
    public function ConversationsPublicActor($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_actor_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_actor === null) {
                $this->_conversations_public_actor = new ConversationsPublicActorEntity($this, null);
            }
            return $this->_conversations_public_actor;
        }
        return new ConversationsPublicActorEntity($this, $data);
    }


    private $_conversations_public_channel = null;

    // Canonical facade: $client->ConversationsPublicChannel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_channel()
    // resolves here too.
    public function ConversationsPublicChannel($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_channel_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_channel === null) {
                $this->_conversations_public_channel = new ConversationsPublicChannelEntity($this, null);
            }
            return $this->_conversations_public_channel;
        }
        return new ConversationsPublicChannelEntity($this, $data);
    }


    private $_conversations_public_channel_account = null;

    // Canonical facade: $client->ConversationsPublicChannelAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_channel_account()
    // resolves here too.
    public function ConversationsPublicChannelAccount($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_channel_account_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_channel_account === null) {
                $this->_conversations_public_channel_account = new ConversationsPublicChannelAccountEntity($this, null);
            }
            return $this->_conversations_public_channel_account;
        }
        return new ConversationsPublicChannelAccountEntity($this, $data);
    }


    private $_conversations_public_inbox = null;

    // Canonical facade: $client->ConversationsPublicInbox()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_inbox()
    // resolves here too.
    public function ConversationsPublicInbox($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_inbox_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_inbox === null) {
                $this->_conversations_public_inbox = new ConversationsPublicInboxEntity($this, null);
            }
            return $this->_conversations_public_inbox;
        }
        return new ConversationsPublicInboxEntity($this, $data);
    }


    private $_conversations_public_message = null;

    // Canonical facade: $client->ConversationsPublicMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_message()
    // resolves here too.
    public function ConversationsPublicMessage($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_message_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_message === null) {
                $this->_conversations_public_message = new ConversationsPublicMessageEntity($this, null);
            }
            return $this->_conversations_public_message;
        }
        return new ConversationsPublicMessageEntity($this, $data);
    }


    private $_conversations_public_message_content = null;

    // Canonical facade: $client->ConversationsPublicMessageContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_message_content()
    // resolves here too.
    public function ConversationsPublicMessageContent($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_message_content_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_message_content === null) {
                $this->_conversations_public_message_content = new ConversationsPublicMessageContentEntity($this, null);
            }
            return $this->_conversations_public_message_content;
        }
        return new ConversationsPublicMessageContentEntity($this, $data);
    }


    private $_conversations_public_thread = null;

    // Canonical facade: $client->ConversationsPublicThread()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversations_public_thread()
    // resolves here too.
    public function ConversationsPublicThread($data = null)
    {
        require_once __DIR__ . '/entity/conversations_public_thread_entity.php';
        if ($data === null) {
            if ($this->_conversations_public_thread === null) {
                $this->_conversations_public_thread = new ConversationsPublicThreadEntity($this, null);
            }
            return $this->_conversations_public_thread;
        }
        return new ConversationsPublicThreadEntity($this, $data);
    }


    private $_custom_channels_collection_response_with_total_public_channel = null;

    // Canonical facade: $client->CustomChannelsCollectionResponseWithTotalPublicChannel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_channels_collection_response_with_total_public_channel()
    // resolves here too.
    public function CustomChannelsCollectionResponseWithTotalPublicChannel($data = null)
    {
        require_once __DIR__ . '/entity/custom_channels_collection_response_with_total_public_channel_entity.php';
        if ($data === null) {
            if ($this->_custom_channels_collection_response_with_total_public_channel === null) {
                $this->_custom_channels_collection_response_with_total_public_channel = new CustomChannelsCollectionResponseWithTotalPublicChannelEntity($this, null);
            }
            return $this->_custom_channels_collection_response_with_total_public_channel;
        }
        return new CustomChannelsCollectionResponseWithTotalPublicChannelEntity($this, $data);
    }


    private $_custom_channels_collection_response_with_total_public_channel2 = null;

    // Canonical facade: $client->CustomChannelsCollectionResponseWithTotalPublicChannel2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_channels_collection_response_with_total_public_channel2()
    // resolves here too.
    public function CustomChannelsCollectionResponseWithTotalPublicChannel2($data = null)
    {
        require_once __DIR__ . '/entity/custom_channels_collection_response_with_total_public_channel2_entity.php';
        if ($data === null) {
            if ($this->_custom_channels_collection_response_with_total_public_channel2 === null) {
                $this->_custom_channels_collection_response_with_total_public_channel2 = new CustomChannelsCollectionResponseWithTotalPublicChannel2Entity($this, null);
            }
            return $this->_custom_channels_collection_response_with_total_public_channel2;
        }
        return new CustomChannelsCollectionResponseWithTotalPublicChannel2Entity($this, $data);
    }


    private $_custom_channels_public_channel_account = null;

    // Canonical facade: $client->CustomChannelsPublicChannelAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_channels_public_channel_account()
    // resolves here too.
    public function CustomChannelsPublicChannelAccount($data = null)
    {
        require_once __DIR__ . '/entity/custom_channels_public_channel_account_entity.php';
        if ($data === null) {
            if ($this->_custom_channels_public_channel_account === null) {
                $this->_custom_channels_public_channel_account = new CustomChannelsPublicChannelAccountEntity($this, null);
            }
            return $this->_custom_channels_public_channel_account;
        }
        return new CustomChannelsPublicChannelAccountEntity($this, $data);
    }


    private $_custom_channels_public_channel_account_staging_token = null;

    // Canonical facade: $client->CustomChannelsPublicChannelAccountStagingToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_channels_public_channel_account_staging_token()
    // resolves here too.
    public function CustomChannelsPublicChannelAccountStagingToken($data = null)
    {
        require_once __DIR__ . '/entity/custom_channels_public_channel_account_staging_token_entity.php';
        if ($data === null) {
            if ($this->_custom_channels_public_channel_account_staging_token === null) {
                $this->_custom_channels_public_channel_account_staging_token = new CustomChannelsPublicChannelAccountStagingTokenEntity($this, null);
            }
            return $this->_custom_channels_public_channel_account_staging_token;
        }
        return new CustomChannelsPublicChannelAccountStagingTokenEntity($this, $data);
    }


    private $_custom_channels_public_channel_integration_channel = null;

    // Canonical facade: $client->CustomChannelsPublicChannelIntegrationChannel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_channels_public_channel_integration_channel()
    // resolves here too.
    public function CustomChannelsPublicChannelIntegrationChannel($data = null)
    {
        require_once __DIR__ . '/entity/custom_channels_public_channel_integration_channel_entity.php';
        if ($data === null) {
            if ($this->_custom_channels_public_channel_integration_channel === null) {
                $this->_custom_channels_public_channel_integration_channel = new CustomChannelsPublicChannelIntegrationChannelEntity($this, null);
            }
            return $this->_custom_channels_public_channel_integration_channel;
        }
        return new CustomChannelsPublicChannelIntegrationChannelEntity($this, $data);
    }


    private $_custom_channels_public_conversations_message = null;

    // Canonical facade: $client->CustomChannelsPublicConversationsMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_channels_public_conversations_message()
    // resolves here too.
    public function CustomChannelsPublicConversationsMessage($data = null)
    {
        require_once __DIR__ . '/entity/custom_channels_public_conversations_message_entity.php';
        if ($data === null) {
            if ($this->_custom_channels_public_conversations_message === null) {
                $this->_custom_channels_public_conversations_message = new CustomChannelsPublicConversationsMessageEntity($this, null);
            }
            return $this->_custom_channels_public_conversations_message;
        }
        return new CustomChannelsPublicConversationsMessageEntity($this, $data);
    }


    private $_public_thread = null;

    // Canonical facade: $client->PublicThread()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->public_thread()
    // resolves here too.
    public function PublicThread($data = null)
    {
        require_once __DIR__ . '/entity/public_thread_entity.php';
        if ($data === null) {
            if ($this->_public_thread === null) {
                $this->_public_thread = new PublicThreadEntity($this, null);
            }
            return $this->_public_thread;
        }
        return new PublicThreadEntity($this, $data);
    }


    private $_thread = null;

    // Canonical facade: $client->Thread()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->thread()
    // resolves here too.
    public function Thread($data = null)
    {
        require_once __DIR__ . '/entity/thread_entity.php';
        if ($data === null) {
            if ($this->_thread === null) {
                $this->_thread = new ThreadEntity($this, null);
            }
            return $this->_thread;
        }
        return new ThreadEntity($this, $data);
    }


    private $_visitor_identification_identification_token = null;

    // Canonical facade: $client->VisitorIdentificationIdentificationToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->visitor_identification_identification_token()
    // resolves here too.
    public function VisitorIdentificationIdentificationToken($data = null)
    {
        require_once __DIR__ . '/entity/visitor_identification_identification_token_entity.php';
        if ($data === null) {
            if ($this->_visitor_identification_identification_token === null) {
                $this->_visitor_identification_identification_token = new VisitorIdentificationIdentificationTokenEntity($this, null);
            }
            return $this->_visitor_identification_identification_token;
        }
        return new VisitorIdentificationIdentificationTokenEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new HubspotConversationsSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
