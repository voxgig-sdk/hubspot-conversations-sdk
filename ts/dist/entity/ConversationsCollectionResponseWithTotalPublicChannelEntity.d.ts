import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsCollectionResponseWithTotalPublicChannel, ConversationsCollectionResponseWithTotalPublicChannelListMatch } from '../HubspotConversationsTypes';
declare class ConversationsCollectionResponseWithTotalPublicChannelEntity extends HubspotConversationsEntityBase<ConversationsCollectionResponseWithTotalPublicChannel> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsCollectionResponseWithTotalPublicChannelEntity): ConversationsCollectionResponseWithTotalPublicChannelEntity;
    list(this: any, reqmatch?: ConversationsCollectionResponseWithTotalPublicChannelListMatch, ctrl?: Control): Promise<ConversationsCollectionResponseWithTotalPublicChannelEntity[]>;
}
export { ConversationsCollectionResponseWithTotalPublicChannelEntity };
