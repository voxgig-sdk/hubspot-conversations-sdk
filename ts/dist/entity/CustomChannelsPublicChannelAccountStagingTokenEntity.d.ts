import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { CustomChannelsPublicChannelAccountStagingToken, CustomChannelsPublicChannelAccountStagingTokenUpdateData } from '../HubspotConversationsTypes';
declare class CustomChannelsPublicChannelAccountStagingTokenEntity extends HubspotConversationsEntityBase<CustomChannelsPublicChannelAccountStagingToken> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: CustomChannelsPublicChannelAccountStagingTokenEntity): CustomChannelsPublicChannelAccountStagingTokenEntity;
    update(this: any, reqdata?: CustomChannelsPublicChannelAccountStagingTokenUpdateData, ctrl?: Control): Promise<CustomChannelsPublicChannelAccountStagingTokenEntity>;
}
export { CustomChannelsPublicChannelAccountStagingTokenEntity };
