import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsCollectionResponsePublicThreadForwardPaging, ConversationsCollectionResponsePublicThreadForwardPagingListMatch } from '../HubspotConversationsTypes';
declare class ConversationsCollectionResponsePublicThreadForwardPagingEntity extends HubspotConversationsEntityBase<ConversationsCollectionResponsePublicThreadForwardPaging> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsCollectionResponsePublicThreadForwardPagingEntity): ConversationsCollectionResponsePublicThreadForwardPagingEntity;
    list(this: any, reqmatch?: ConversationsCollectionResponsePublicThreadForwardPagingListMatch, ctrl?: Control): Promise<ConversationsCollectionResponsePublicThreadForwardPagingEntity[]>;
}
export { ConversationsCollectionResponsePublicThreadForwardPagingEntity };
