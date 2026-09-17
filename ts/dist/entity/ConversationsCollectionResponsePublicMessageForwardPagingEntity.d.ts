import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsCollectionResponsePublicMessageForwardPaging, ConversationsCollectionResponsePublicMessageForwardPagingListMatch } from '../HubspotConversationsTypes';
declare class ConversationsCollectionResponsePublicMessageForwardPagingEntity extends HubspotConversationsEntityBase<ConversationsCollectionResponsePublicMessageForwardPaging> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsCollectionResponsePublicMessageForwardPagingEntity): ConversationsCollectionResponsePublicMessageForwardPagingEntity;
    list(this: any, reqmatch?: ConversationsCollectionResponsePublicMessageForwardPagingListMatch, ctrl?: Control): Promise<ConversationsCollectionResponsePublicMessageForwardPagingEntity[]>;
}
export { ConversationsCollectionResponsePublicMessageForwardPagingEntity };
