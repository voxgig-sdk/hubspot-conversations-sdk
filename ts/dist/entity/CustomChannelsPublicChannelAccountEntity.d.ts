import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { CustomChannelsPublicChannelAccount, CustomChannelsPublicChannelAccountLoadMatch, CustomChannelsPublicChannelAccountCreateData, CustomChannelsPublicChannelAccountUpdateData } from '../HubspotConversationsTypes';
declare class CustomChannelsPublicChannelAccountEntity extends HubspotConversationsEntityBase<CustomChannelsPublicChannelAccount> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: CustomChannelsPublicChannelAccountEntity): CustomChannelsPublicChannelAccountEntity;
    load(this: any, reqmatch?: CustomChannelsPublicChannelAccountLoadMatch, ctrl?: Control): Promise<CustomChannelsPublicChannelAccountEntity>;
    create(this: any, reqdata?: CustomChannelsPublicChannelAccountCreateData, ctrl?: Control): Promise<CustomChannelsPublicChannelAccountEntity>;
    update(this: any, reqdata?: CustomChannelsPublicChannelAccountUpdateData, ctrl?: Control): Promise<CustomChannelsPublicChannelAccountEntity>;
}
export { CustomChannelsPublicChannelAccountEntity };
