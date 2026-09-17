package voxgighubspotconversationssdk

import (
	"github.com/voxgig-sdk/hubspot-conversations-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-conversations-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-conversations-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-conversations-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotConversationsSDK = core.HubspotConversationsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotConversationsEntity = core.HubspotConversationsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotConversationsError = core.HubspotConversationsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewChannelEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewChannelEntity(client, entopts)
	}
	core.NewConversationsBatchResponsePublicActorEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsBatchResponsePublicActorEntity(client, entopts)
	}
	core.NewConversationsCollectionResponsePublicMessageForwardPagingEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsCollectionResponsePublicMessageForwardPagingEntity(client, entopts)
	}
	core.NewConversationsCollectionResponsePublicThreadForwardPagingEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsCollectionResponsePublicThreadForwardPagingEntity(client, entopts)
	}
	core.NewConversationsCollectionResponseWithTotalPublicChannelEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsCollectionResponseWithTotalPublicChannelEntity(client, entopts)
	}
	core.NewConversationsCollectionResponseWithTotalPublicChannelAccountEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsCollectionResponseWithTotalPublicChannelAccountEntity(client, entopts)
	}
	core.NewConversationsCollectionResponseWithTotalPublicInboxEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsCollectionResponseWithTotalPublicInboxEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesBatchResponsePublicActorEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesBatchResponsePublicActorEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesCollectionResponsePublicMessageEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesCollectionResponsePublicMessageEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesCollectionResponsePublicThreadEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesCollectionResponsePublicThreadEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesCollectionResponseWithTotalPublicEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesCollectionResponseWithTotalPublicEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesCollectionResponseWithTotalPublic2EntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity(client, entopts)
	}
	core.NewConversationsInboxMessagesCollectionResponseWithTotalPublic3EntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicActorEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicActorEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicChannelEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicChannelEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicChannelAccountEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicChannelAccountEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicInboxEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicInboxEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicMessageEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicMessageEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicMessageContentEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicMessageContentEntity(client, entopts)
	}
	core.NewConversationsInboxMessagesPublicThreadEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsInboxMessagesPublicThreadEntity(client, entopts)
	}
	core.NewConversationsPublicActorEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicActorEntity(client, entopts)
	}
	core.NewConversationsPublicChannelEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicChannelEntity(client, entopts)
	}
	core.NewConversationsPublicChannelAccountEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicChannelAccountEntity(client, entopts)
	}
	core.NewConversationsPublicInboxEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicInboxEntity(client, entopts)
	}
	core.NewConversationsPublicMessageEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicMessageEntity(client, entopts)
	}
	core.NewConversationsPublicMessageContentEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicMessageContentEntity(client, entopts)
	}
	core.NewConversationsPublicThreadEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewConversationsPublicThreadEntity(client, entopts)
	}
	core.NewCustomChannelsCollectionResponseWithTotalPublicChannelEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewCustomChannelsCollectionResponseWithTotalPublicChannelEntity(client, entopts)
	}
	core.NewCustomChannelsCollectionResponseWithTotalPublicChannel2EntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewCustomChannelsCollectionResponseWithTotalPublicChannel2Entity(client, entopts)
	}
	core.NewCustomChannelsPublicChannelAccountEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewCustomChannelsPublicChannelAccountEntity(client, entopts)
	}
	core.NewCustomChannelsPublicChannelAccountStagingTokenEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewCustomChannelsPublicChannelAccountStagingTokenEntity(client, entopts)
	}
	core.NewCustomChannelsPublicChannelIntegrationChannelEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewCustomChannelsPublicChannelIntegrationChannelEntity(client, entopts)
	}
	core.NewCustomChannelsPublicConversationsMessageEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewCustomChannelsPublicConversationsMessageEntity(client, entopts)
	}
	core.NewPublicThreadEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewPublicThreadEntity(client, entopts)
	}
	core.NewThreadEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewThreadEntity(client, entopts)
	}
	core.NewVisitorIdentificationIdentificationTokenEntityFunc = func(client *core.HubspotConversationsSDK, entopts map[string]any) core.HubspotConversationsEntity {
		return entity.NewVisitorIdentificationIdentificationTokenEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotConversationsSDK = core.NewHubspotConversationsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotConversationsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotConversationsSDK  { return NewHubspotConversationsSDK(nil) }
func Test() *HubspotConversationsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
