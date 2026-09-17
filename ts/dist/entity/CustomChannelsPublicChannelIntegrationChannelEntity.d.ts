import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { CustomChannelsPublicChannelIntegrationChannel, CustomChannelsPublicChannelIntegrationChannelLoadMatch, CustomChannelsPublicChannelIntegrationChannelCreateData, CustomChannelsPublicChannelIntegrationChannelUpdateData } from '../HubspotConversationsTypes';
declare class CustomChannelsPublicChannelIntegrationChannelEntity extends HubspotConversationsEntityBase<CustomChannelsPublicChannelIntegrationChannel> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: CustomChannelsPublicChannelIntegrationChannelEntity): CustomChannelsPublicChannelIntegrationChannelEntity;
    load(this: any, reqmatch?: CustomChannelsPublicChannelIntegrationChannelLoadMatch, ctrl?: Control): Promise<CustomChannelsPublicChannelIntegrationChannelEntity>;
    create(this: any, reqdata?: CustomChannelsPublicChannelIntegrationChannelCreateData, ctrl?: Control): Promise<CustomChannelsPublicChannelIntegrationChannelEntity>;
    update(this: any, reqdata?: CustomChannelsPublicChannelIntegrationChannelUpdateData, ctrl?: Control): Promise<CustomChannelsPublicChannelIntegrationChannelEntity>;
}
export { CustomChannelsPublicChannelIntegrationChannelEntity };
