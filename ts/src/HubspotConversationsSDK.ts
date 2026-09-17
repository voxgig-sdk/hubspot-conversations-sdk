// HubspotConversations Ts SDK

import { ChannelEntity } from './entity/ChannelEntity'
import { ConversationsBatchResponsePublicActorEntity } from './entity/ConversationsBatchResponsePublicActorEntity'
import { ConversationsCollectionResponsePublicMessageForwardPagingEntity } from './entity/ConversationsCollectionResponsePublicMessageForwardPagingEntity'
import { ConversationsCollectionResponsePublicThreadForwardPagingEntity } from './entity/ConversationsCollectionResponsePublicThreadForwardPagingEntity'
import { ConversationsCollectionResponseWithTotalPublicChannelEntity } from './entity/ConversationsCollectionResponseWithTotalPublicChannelEntity'
import { ConversationsCollectionResponseWithTotalPublicChannelAccountEntity } from './entity/ConversationsCollectionResponseWithTotalPublicChannelAccountEntity'
import { ConversationsCollectionResponseWithTotalPublicInboxEntity } from './entity/ConversationsCollectionResponseWithTotalPublicInboxEntity'
import { ConversationsInboxMessagesBatchResponsePublicActorEntity } from './entity/ConversationsInboxMessagesBatchResponsePublicActorEntity'
import { ConversationsInboxMessagesCollectionResponsePublicMessageEntity } from './entity/ConversationsInboxMessagesCollectionResponsePublicMessageEntity'
import { ConversationsInboxMessagesCollectionResponsePublicThreadEntity } from './entity/ConversationsInboxMessagesCollectionResponsePublicThreadEntity'
import { ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity } from './entity/ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity'
import { ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity } from './entity/ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity'
import { ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity } from './entity/ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity'
import { ConversationsInboxMessagesPublicActorEntity } from './entity/ConversationsInboxMessagesPublicActorEntity'
import { ConversationsInboxMessagesPublicChannelEntity } from './entity/ConversationsInboxMessagesPublicChannelEntity'
import { ConversationsInboxMessagesPublicChannelAccountEntity } from './entity/ConversationsInboxMessagesPublicChannelAccountEntity'
import { ConversationsInboxMessagesPublicInboxEntity } from './entity/ConversationsInboxMessagesPublicInboxEntity'
import { ConversationsInboxMessagesPublicMessageEntity } from './entity/ConversationsInboxMessagesPublicMessageEntity'
import { ConversationsInboxMessagesPublicMessageContentEntity } from './entity/ConversationsInboxMessagesPublicMessageContentEntity'
import { ConversationsInboxMessagesPublicThreadEntity } from './entity/ConversationsInboxMessagesPublicThreadEntity'
import { ConversationsPublicActorEntity } from './entity/ConversationsPublicActorEntity'
import { ConversationsPublicChannelEntity } from './entity/ConversationsPublicChannelEntity'
import { ConversationsPublicChannelAccountEntity } from './entity/ConversationsPublicChannelAccountEntity'
import { ConversationsPublicInboxEntity } from './entity/ConversationsPublicInboxEntity'
import { ConversationsPublicMessageEntity } from './entity/ConversationsPublicMessageEntity'
import { ConversationsPublicMessageContentEntity } from './entity/ConversationsPublicMessageContentEntity'
import { ConversationsPublicThreadEntity } from './entity/ConversationsPublicThreadEntity'
import { CustomChannelsCollectionResponseWithTotalPublicChannelEntity } from './entity/CustomChannelsCollectionResponseWithTotalPublicChannelEntity'
import { CustomChannelsCollectionResponseWithTotalPublicChannel2Entity } from './entity/CustomChannelsCollectionResponseWithTotalPublicChannel2Entity'
import { CustomChannelsPublicChannelAccountEntity } from './entity/CustomChannelsPublicChannelAccountEntity'
import { CustomChannelsPublicChannelAccountStagingTokenEntity } from './entity/CustomChannelsPublicChannelAccountStagingTokenEntity'
import { CustomChannelsPublicChannelIntegrationChannelEntity } from './entity/CustomChannelsPublicChannelIntegrationChannelEntity'
import { CustomChannelsPublicConversationsMessageEntity } from './entity/CustomChannelsPublicConversationsMessageEntity'
import { PublicThreadEntity } from './entity/PublicThreadEntity'
import { ThreadEntity } from './entity/ThreadEntity'
import { VisitorIdentificationIdentificationTokenEntity } from './entity/VisitorIdentificationIdentificationTokenEntity'

export type * from './HubspotConversationsTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { HubspotConversationsEntityBase } from './HubspotConversationsEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class HubspotConversationsSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('HubspotConversationsSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('HubspotConversationsSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('HubspotConversationsSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Channel().list()` / `client.Channel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Channel(entopts?: Record<string, any>) {
    const self = this
    return new ChannelEntity(self, entopts)
  }


  // Entity access: `client.ConversationsBatchResponsePublicActor().list()` / `client.ConversationsBatchResponsePublicActor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsBatchResponsePublicActor(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsBatchResponsePublicActorEntity(self, entopts)
  }


  // Entity access: `client.ConversationsCollectionResponsePublicMessageForwardPaging().list()` / `client.ConversationsCollectionResponsePublicMessageForwardPaging().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsCollectionResponsePublicMessageForwardPaging(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsCollectionResponsePublicMessageForwardPagingEntity(self, entopts)
  }


  // Entity access: `client.ConversationsCollectionResponsePublicThreadForwardPaging().list()` / `client.ConversationsCollectionResponsePublicThreadForwardPaging().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsCollectionResponsePublicThreadForwardPaging(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsCollectionResponsePublicThreadForwardPagingEntity(self, entopts)
  }


  // Entity access: `client.ConversationsCollectionResponseWithTotalPublicChannel().list()` / `client.ConversationsCollectionResponseWithTotalPublicChannel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsCollectionResponseWithTotalPublicChannel(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsCollectionResponseWithTotalPublicChannelEntity(self, entopts)
  }


  // Entity access: `client.ConversationsCollectionResponseWithTotalPublicChannelAccount().list()` / `client.ConversationsCollectionResponseWithTotalPublicChannelAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsCollectionResponseWithTotalPublicChannelAccount(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsCollectionResponseWithTotalPublicChannelAccountEntity(self, entopts)
  }


  // Entity access: `client.ConversationsCollectionResponseWithTotalPublicInbox().list()` / `client.ConversationsCollectionResponseWithTotalPublicInbox().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsCollectionResponseWithTotalPublicInbox(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsCollectionResponseWithTotalPublicInboxEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesBatchResponsePublicActor().list()` / `client.ConversationsInboxMessagesBatchResponsePublicActor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesBatchResponsePublicActor(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesBatchResponsePublicActorEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesCollectionResponsePublicMessage().list()` / `client.ConversationsInboxMessagesCollectionResponsePublicMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesCollectionResponsePublicMessage(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesCollectionResponsePublicMessageEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesCollectionResponsePublicThread().list()` / `client.ConversationsInboxMessagesCollectionResponsePublicThread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesCollectionResponsePublicThread(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesCollectionResponsePublicThreadEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().list()` / `client.ConversationsInboxMessagesCollectionResponseWithTotalPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesCollectionResponseWithTotalPublic(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().list()` / `client.ConversationsInboxMessagesCollectionResponseWithTotalPublic2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesCollectionResponseWithTotalPublic2(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().list()` / `client.ConversationsInboxMessagesCollectionResponseWithTotalPublic3().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesCollectionResponseWithTotalPublic3(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicActor().list()` / `client.ConversationsInboxMessagesPublicActor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicActor(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicActorEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicChannel().list()` / `client.ConversationsInboxMessagesPublicChannel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicChannel(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicChannelEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicChannelAccount().list()` / `client.ConversationsInboxMessagesPublicChannelAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicChannelAccount(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicChannelAccountEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicInbox().list()` / `client.ConversationsInboxMessagesPublicInbox().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicInbox(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicInboxEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicMessage().list()` / `client.ConversationsInboxMessagesPublicMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicMessage(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicMessageEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicMessageContent().list()` / `client.ConversationsInboxMessagesPublicMessageContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicMessageContent(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicMessageContentEntity(self, entopts)
  }


  // Entity access: `client.ConversationsInboxMessagesPublicThread().list()` / `client.ConversationsInboxMessagesPublicThread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsInboxMessagesPublicThread(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsInboxMessagesPublicThreadEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicActor().list()` / `client.ConversationsPublicActor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicActor(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicActorEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicChannel().list()` / `client.ConversationsPublicChannel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicChannel(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicChannelEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicChannelAccount().list()` / `client.ConversationsPublicChannelAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicChannelAccount(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicChannelAccountEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicInbox().list()` / `client.ConversationsPublicInbox().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicInbox(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicInboxEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicMessage().list()` / `client.ConversationsPublicMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicMessage(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicMessageEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicMessageContent().list()` / `client.ConversationsPublicMessageContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicMessageContent(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicMessageContentEntity(self, entopts)
  }


  // Entity access: `client.ConversationsPublicThread().list()` / `client.ConversationsPublicThread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationsPublicThread(entopts?: Record<string, any>) {
    const self = this
    return new ConversationsPublicThreadEntity(self, entopts)
  }


  // Entity access: `client.CustomChannelsCollectionResponseWithTotalPublicChannel().list()` / `client.CustomChannelsCollectionResponseWithTotalPublicChannel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomChannelsCollectionResponseWithTotalPublicChannel(entopts?: Record<string, any>) {
    const self = this
    return new CustomChannelsCollectionResponseWithTotalPublicChannelEntity(self, entopts)
  }


  // Entity access: `client.CustomChannelsCollectionResponseWithTotalPublicChannel2().list()` / `client.CustomChannelsCollectionResponseWithTotalPublicChannel2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomChannelsCollectionResponseWithTotalPublicChannel2(entopts?: Record<string, any>) {
    const self = this
    return new CustomChannelsCollectionResponseWithTotalPublicChannel2Entity(self, entopts)
  }


  // Entity access: `client.CustomChannelsPublicChannelAccount().list()` / `client.CustomChannelsPublicChannelAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomChannelsPublicChannelAccount(entopts?: Record<string, any>) {
    const self = this
    return new CustomChannelsPublicChannelAccountEntity(self, entopts)
  }


  // Entity access: `client.CustomChannelsPublicChannelAccountStagingToken().list()` / `client.CustomChannelsPublicChannelAccountStagingToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomChannelsPublicChannelAccountStagingToken(entopts?: Record<string, any>) {
    const self = this
    return new CustomChannelsPublicChannelAccountStagingTokenEntity(self, entopts)
  }


  // Entity access: `client.CustomChannelsPublicChannelIntegrationChannel().list()` / `client.CustomChannelsPublicChannelIntegrationChannel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomChannelsPublicChannelIntegrationChannel(entopts?: Record<string, any>) {
    const self = this
    return new CustomChannelsPublicChannelIntegrationChannelEntity(self, entopts)
  }


  // Entity access: `client.CustomChannelsPublicConversationsMessage().list()` / `client.CustomChannelsPublicConversationsMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomChannelsPublicConversationsMessage(entopts?: Record<string, any>) {
    const self = this
    return new CustomChannelsPublicConversationsMessageEntity(self, entopts)
  }


  // Entity access: `client.PublicThread().list()` / `client.PublicThread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicThread(entopts?: Record<string, any>) {
    const self = this
    return new PublicThreadEntity(self, entopts)
  }


  // Entity access: `client.Thread().list()` / `client.Thread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Thread(entopts?: Record<string, any>) {
    const self = this
    return new ThreadEntity(self, entopts)
  }


  // Entity access: `client.VisitorIdentificationIdentificationToken().list()` / `client.VisitorIdentificationIdentificationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VisitorIdentificationIdentificationToken(entopts?: Record<string, any>) {
    const self = this
    return new VisitorIdentificationIdentificationTokenEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new HubspotConversationsSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return HubspotConversationsSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'HubspotConversations' }
  }

  toString() {
    return 'HubspotConversations ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = HubspotConversationsSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  HubspotConversationsEntityBase,

  HubspotConversationsSDK,
  SDK,
}


