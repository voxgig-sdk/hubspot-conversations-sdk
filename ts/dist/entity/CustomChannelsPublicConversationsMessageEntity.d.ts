import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { CustomChannelsPublicConversationsMessage, CustomChannelsPublicConversationsMessageLoadMatch, CustomChannelsPublicConversationsMessageCreateData, CustomChannelsPublicConversationsMessageUpdateData } from '../HubspotConversationsTypes';
declare class CustomChannelsPublicConversationsMessageEntity extends HubspotConversationsEntityBase<CustomChannelsPublicConversationsMessage> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: CustomChannelsPublicConversationsMessageEntity): CustomChannelsPublicConversationsMessageEntity;
    load(this: any, reqmatch?: CustomChannelsPublicConversationsMessageLoadMatch, ctrl?: Control): Promise<CustomChannelsPublicConversationsMessageEntity>;
    create(this: any, reqdata?: CustomChannelsPublicConversationsMessageCreateData, ctrl?: Control): Promise<CustomChannelsPublicConversationsMessageEntity>;
    update(this: any, reqdata?: CustomChannelsPublicConversationsMessageUpdateData, ctrl?: Control): Promise<CustomChannelsPublicConversationsMessageEntity>;
}
export { CustomChannelsPublicConversationsMessageEntity };
