import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { CustomChannelsCollectionResponseWithTotalPublicChannel2, CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch } from '../HubspotConversationsTypes';
declare class CustomChannelsCollectionResponseWithTotalPublicChannel2Entity extends HubspotConversationsEntityBase<CustomChannelsCollectionResponseWithTotalPublicChannel2> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: CustomChannelsCollectionResponseWithTotalPublicChannel2Entity): CustomChannelsCollectionResponseWithTotalPublicChannel2Entity;
    list(this: any, reqmatch?: CustomChannelsCollectionResponseWithTotalPublicChannel2ListMatch, ctrl?: Control): Promise<CustomChannelsCollectionResponseWithTotalPublicChannel2Entity[]>;
}
export { CustomChannelsCollectionResponseWithTotalPublicChannel2Entity };
