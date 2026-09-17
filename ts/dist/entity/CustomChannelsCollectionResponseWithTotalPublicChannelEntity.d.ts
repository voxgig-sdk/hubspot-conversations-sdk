import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { CustomChannelsCollectionResponseWithTotalPublicChannel, CustomChannelsCollectionResponseWithTotalPublicChannelListMatch } from '../HubspotConversationsTypes';
declare class CustomChannelsCollectionResponseWithTotalPublicChannelEntity extends HubspotConversationsEntityBase<CustomChannelsCollectionResponseWithTotalPublicChannel> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: CustomChannelsCollectionResponseWithTotalPublicChannelEntity): CustomChannelsCollectionResponseWithTotalPublicChannelEntity;
    list(this: any, reqmatch?: CustomChannelsCollectionResponseWithTotalPublicChannelListMatch, ctrl?: Control): Promise<CustomChannelsCollectionResponseWithTotalPublicChannelEntity[]>;
}
export { CustomChannelsCollectionResponseWithTotalPublicChannelEntity };
