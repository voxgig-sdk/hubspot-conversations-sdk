package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/hubspot-conversations-sdk/go/utility/struct"
)

type HubspotConversationsSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewHubspotConversationsSDK(options map[string]any) *HubspotConversationsSDK {
	sdk := &HubspotConversationsSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *HubspotConversationsSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *HubspotConversationsSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *HubspotConversationsSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *HubspotConversationsSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *HubspotConversationsSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *HubspotConversationsSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *HubspotConversationsSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("HubspotConversationsSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *HubspotConversationsSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *HubspotConversationsSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("HubspotConversationsSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Channel returns a Channel entity bound to this client.
// Idiomatic usage: client.Channel(nil).List(nil, nil) or
// client.Channel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) Channel(data map[string]any) HubspotConversationsEntity {
	return NewChannelEntityFunc(sdk, data)
}


// ConversationsBatchResponsePublicActor returns a ConversationsBatchResponsePublicActor entity bound to this client.
// Idiomatic usage: client.ConversationsBatchResponsePublicActor(nil).List(nil, nil) or
// client.ConversationsBatchResponsePublicActor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsBatchResponsePublicActor(data map[string]any) HubspotConversationsEntity {
	return NewConversationsBatchResponsePublicActorEntityFunc(sdk, data)
}


// ConversationsCollectionResponsePublicMessageForwardPaging returns a ConversationsCollectionResponsePublicMessageForwardPaging entity bound to this client.
// Idiomatic usage: client.ConversationsCollectionResponsePublicMessageForwardPaging(nil).List(nil, nil) or
// client.ConversationsCollectionResponsePublicMessageForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsCollectionResponsePublicMessageForwardPaging(data map[string]any) HubspotConversationsEntity {
	return NewConversationsCollectionResponsePublicMessageForwardPagingEntityFunc(sdk, data)
}


// ConversationsCollectionResponsePublicThreadForwardPaging returns a ConversationsCollectionResponsePublicThreadForwardPaging entity bound to this client.
// Idiomatic usage: client.ConversationsCollectionResponsePublicThreadForwardPaging(nil).List(nil, nil) or
// client.ConversationsCollectionResponsePublicThreadForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsCollectionResponsePublicThreadForwardPaging(data map[string]any) HubspotConversationsEntity {
	return NewConversationsCollectionResponsePublicThreadForwardPagingEntityFunc(sdk, data)
}


// ConversationsCollectionResponseWithTotalPublicChannel returns a ConversationsCollectionResponseWithTotalPublicChannel entity bound to this client.
// Idiomatic usage: client.ConversationsCollectionResponseWithTotalPublicChannel(nil).List(nil, nil) or
// client.ConversationsCollectionResponseWithTotalPublicChannel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsCollectionResponseWithTotalPublicChannel(data map[string]any) HubspotConversationsEntity {
	return NewConversationsCollectionResponseWithTotalPublicChannelEntityFunc(sdk, data)
}


// ConversationsCollectionResponseWithTotalPublicChannelAccount returns a ConversationsCollectionResponseWithTotalPublicChannelAccount entity bound to this client.
// Idiomatic usage: client.ConversationsCollectionResponseWithTotalPublicChannelAccount(nil).List(nil, nil) or
// client.ConversationsCollectionResponseWithTotalPublicChannelAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsCollectionResponseWithTotalPublicChannelAccount(data map[string]any) HubspotConversationsEntity {
	return NewConversationsCollectionResponseWithTotalPublicChannelAccountEntityFunc(sdk, data)
}


// ConversationsCollectionResponseWithTotalPublicInbox returns a ConversationsCollectionResponseWithTotalPublicInbox entity bound to this client.
// Idiomatic usage: client.ConversationsCollectionResponseWithTotalPublicInbox(nil).List(nil, nil) or
// client.ConversationsCollectionResponseWithTotalPublicInbox(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsCollectionResponseWithTotalPublicInbox(data map[string]any) HubspotConversationsEntity {
	return NewConversationsCollectionResponseWithTotalPublicInboxEntityFunc(sdk, data)
}


// ConversationsInboxMessagesBatchResponsePublicActor returns a ConversationsInboxMessagesBatchResponsePublicActor entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesBatchResponsePublicActor(nil).List(nil, nil) or
// client.ConversationsInboxMessagesBatchResponsePublicActor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesBatchResponsePublicActor(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesBatchResponsePublicActorEntityFunc(sdk, data)
}


// ConversationsInboxMessagesCollectionResponsePublicMessage returns a ConversationsInboxMessagesCollectionResponsePublicMessage entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesCollectionResponsePublicMessage(nil).List(nil, nil) or
// client.ConversationsInboxMessagesCollectionResponsePublicMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesCollectionResponsePublicMessage(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesCollectionResponsePublicMessageEntityFunc(sdk, data)
}


// ConversationsInboxMessagesCollectionResponsePublicThread returns a ConversationsInboxMessagesCollectionResponsePublicThread entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesCollectionResponsePublicThread(nil).List(nil, nil) or
// client.ConversationsInboxMessagesCollectionResponsePublicThread(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesCollectionResponsePublicThread(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesCollectionResponsePublicThreadEntityFunc(sdk, data)
}


// ConversationsInboxMessagesCollectionResponseWithTotalPublic returns a ConversationsInboxMessagesCollectionResponseWithTotalPublic entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil).List(nil, nil) or
// client.ConversationsInboxMessagesCollectionResponseWithTotalPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesCollectionResponseWithTotalPublic(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesCollectionResponseWithTotalPublicEntityFunc(sdk, data)
}


// ConversationsInboxMessagesCollectionResponseWithTotalPublic2 returns a ConversationsInboxMessagesCollectionResponseWithTotalPublic2 entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil).List(nil, nil) or
// client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesCollectionResponseWithTotalPublic2(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesCollectionResponseWithTotalPublic2EntityFunc(sdk, data)
}


// ConversationsInboxMessagesCollectionResponseWithTotalPublic3 returns a ConversationsInboxMessagesCollectionResponseWithTotalPublic3 entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil).List(nil, nil) or
// client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesCollectionResponseWithTotalPublic3(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesCollectionResponseWithTotalPublic3EntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicActor returns a ConversationsInboxMessagesPublicActor entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicActor(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicActor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicActor(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicActorEntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicChannel returns a ConversationsInboxMessagesPublicChannel entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicChannel(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicChannel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicChannel(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicChannelEntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicChannelAccount returns a ConversationsInboxMessagesPublicChannelAccount entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicChannelAccount(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicChannelAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicChannelAccount(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicChannelAccountEntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicInbox returns a ConversationsInboxMessagesPublicInbox entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicInbox(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicInbox(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicInbox(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicInboxEntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicMessage returns a ConversationsInboxMessagesPublicMessage entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicMessage(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicMessage(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicMessageEntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicMessageContent returns a ConversationsInboxMessagesPublicMessageContent entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicMessageContent(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicMessageContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicMessageContent(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicMessageContentEntityFunc(sdk, data)
}


// ConversationsInboxMessagesPublicThread returns a ConversationsInboxMessagesPublicThread entity bound to this client.
// Idiomatic usage: client.ConversationsInboxMessagesPublicThread(nil).List(nil, nil) or
// client.ConversationsInboxMessagesPublicThread(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsInboxMessagesPublicThread(data map[string]any) HubspotConversationsEntity {
	return NewConversationsInboxMessagesPublicThreadEntityFunc(sdk, data)
}


// ConversationsPublicActor returns a ConversationsPublicActor entity bound to this client.
// Idiomatic usage: client.ConversationsPublicActor(nil).List(nil, nil) or
// client.ConversationsPublicActor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicActor(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicActorEntityFunc(sdk, data)
}


// ConversationsPublicChannel returns a ConversationsPublicChannel entity bound to this client.
// Idiomatic usage: client.ConversationsPublicChannel(nil).List(nil, nil) or
// client.ConversationsPublicChannel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicChannel(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicChannelEntityFunc(sdk, data)
}


// ConversationsPublicChannelAccount returns a ConversationsPublicChannelAccount entity bound to this client.
// Idiomatic usage: client.ConversationsPublicChannelAccount(nil).List(nil, nil) or
// client.ConversationsPublicChannelAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicChannelAccount(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicChannelAccountEntityFunc(sdk, data)
}


// ConversationsPublicInbox returns a ConversationsPublicInbox entity bound to this client.
// Idiomatic usage: client.ConversationsPublicInbox(nil).List(nil, nil) or
// client.ConversationsPublicInbox(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicInbox(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicInboxEntityFunc(sdk, data)
}


// ConversationsPublicMessage returns a ConversationsPublicMessage entity bound to this client.
// Idiomatic usage: client.ConversationsPublicMessage(nil).List(nil, nil) or
// client.ConversationsPublicMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicMessage(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicMessageEntityFunc(sdk, data)
}


// ConversationsPublicMessageContent returns a ConversationsPublicMessageContent entity bound to this client.
// Idiomatic usage: client.ConversationsPublicMessageContent(nil).List(nil, nil) or
// client.ConversationsPublicMessageContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicMessageContent(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicMessageContentEntityFunc(sdk, data)
}


// ConversationsPublicThread returns a ConversationsPublicThread entity bound to this client.
// Idiomatic usage: client.ConversationsPublicThread(nil).List(nil, nil) or
// client.ConversationsPublicThread(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) ConversationsPublicThread(data map[string]any) HubspotConversationsEntity {
	return NewConversationsPublicThreadEntityFunc(sdk, data)
}


// CustomChannelsCollectionResponseWithTotalPublicChannel returns a CustomChannelsCollectionResponseWithTotalPublicChannel entity bound to this client.
// Idiomatic usage: client.CustomChannelsCollectionResponseWithTotalPublicChannel(nil).List(nil, nil) or
// client.CustomChannelsCollectionResponseWithTotalPublicChannel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) CustomChannelsCollectionResponseWithTotalPublicChannel(data map[string]any) HubspotConversationsEntity {
	return NewCustomChannelsCollectionResponseWithTotalPublicChannelEntityFunc(sdk, data)
}


// CustomChannelsCollectionResponseWithTotalPublicChannel2 returns a CustomChannelsCollectionResponseWithTotalPublicChannel2 entity bound to this client.
// Idiomatic usage: client.CustomChannelsCollectionResponseWithTotalPublicChannel2(nil).List(nil, nil) or
// client.CustomChannelsCollectionResponseWithTotalPublicChannel2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) CustomChannelsCollectionResponseWithTotalPublicChannel2(data map[string]any) HubspotConversationsEntity {
	return NewCustomChannelsCollectionResponseWithTotalPublicChannel2EntityFunc(sdk, data)
}


// CustomChannelsPublicChannelAccount returns a CustomChannelsPublicChannelAccount entity bound to this client.
// Idiomatic usage: client.CustomChannelsPublicChannelAccount(nil).List(nil, nil) or
// client.CustomChannelsPublicChannelAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) CustomChannelsPublicChannelAccount(data map[string]any) HubspotConversationsEntity {
	return NewCustomChannelsPublicChannelAccountEntityFunc(sdk, data)
}


// CustomChannelsPublicChannelAccountStagingToken returns a CustomChannelsPublicChannelAccountStagingToken entity bound to this client.
// Idiomatic usage: client.CustomChannelsPublicChannelAccountStagingToken(nil).List(nil, nil) or
// client.CustomChannelsPublicChannelAccountStagingToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) CustomChannelsPublicChannelAccountStagingToken(data map[string]any) HubspotConversationsEntity {
	return NewCustomChannelsPublicChannelAccountStagingTokenEntityFunc(sdk, data)
}


// CustomChannelsPublicChannelIntegrationChannel returns a CustomChannelsPublicChannelIntegrationChannel entity bound to this client.
// Idiomatic usage: client.CustomChannelsPublicChannelIntegrationChannel(nil).List(nil, nil) or
// client.CustomChannelsPublicChannelIntegrationChannel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) CustomChannelsPublicChannelIntegrationChannel(data map[string]any) HubspotConversationsEntity {
	return NewCustomChannelsPublicChannelIntegrationChannelEntityFunc(sdk, data)
}


// CustomChannelsPublicConversationsMessage returns a CustomChannelsPublicConversationsMessage entity bound to this client.
// Idiomatic usage: client.CustomChannelsPublicConversationsMessage(nil).List(nil, nil) or
// client.CustomChannelsPublicConversationsMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) CustomChannelsPublicConversationsMessage(data map[string]any) HubspotConversationsEntity {
	return NewCustomChannelsPublicConversationsMessageEntityFunc(sdk, data)
}


// PublicThread returns a PublicThread entity bound to this client.
// Idiomatic usage: client.PublicThread(nil).List(nil, nil) or
// client.PublicThread(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) PublicThread(data map[string]any) HubspotConversationsEntity {
	return NewPublicThreadEntityFunc(sdk, data)
}


// Thread returns a Thread entity bound to this client.
// Idiomatic usage: client.Thread(nil).List(nil, nil) or
// client.Thread(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) Thread(data map[string]any) HubspotConversationsEntity {
	return NewThreadEntityFunc(sdk, data)
}


// VisitorIdentificationIdentificationToken returns a VisitorIdentificationIdentificationToken entity bound to this client.
// Idiomatic usage: client.VisitorIdentificationIdentificationToken(nil).List(nil, nil) or
// client.VisitorIdentificationIdentificationToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotConversationsSDK) VisitorIdentificationIdentificationToken(data map[string]any) HubspotConversationsEntity {
	return NewVisitorIdentificationIdentificationTokenEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotConversationsSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewHubspotConversationsSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
