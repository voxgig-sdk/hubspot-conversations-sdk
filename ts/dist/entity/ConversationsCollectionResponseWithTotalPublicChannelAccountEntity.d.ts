import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsCollectionResponseWithTotalPublicChannelAccount, ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch } from '../HubspotConversationsTypes';
declare class ConversationsCollectionResponseWithTotalPublicChannelAccountEntity extends HubspotConversationsEntityBase<ConversationsCollectionResponseWithTotalPublicChannelAccount> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsCollectionResponseWithTotalPublicChannelAccountEntity): ConversationsCollectionResponseWithTotalPublicChannelAccountEntity;
    list(this: any, reqmatch?: ConversationsCollectionResponseWithTotalPublicChannelAccountListMatch, ctrl?: Control): Promise<ConversationsCollectionResponseWithTotalPublicChannelAccountEntity[]>;
}
export { ConversationsCollectionResponseWithTotalPublicChannelAccountEntity };
