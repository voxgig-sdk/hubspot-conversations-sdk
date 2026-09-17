import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsCollectionResponseWithTotalPublicInbox, ConversationsCollectionResponseWithTotalPublicInboxListMatch } from '../HubspotConversationsTypes';
declare class ConversationsCollectionResponseWithTotalPublicInboxEntity extends HubspotConversationsEntityBase<ConversationsCollectionResponseWithTotalPublicInbox> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsCollectionResponseWithTotalPublicInboxEntity): ConversationsCollectionResponseWithTotalPublicInboxEntity;
    list(this: any, reqmatch?: ConversationsCollectionResponseWithTotalPublicInboxListMatch, ctrl?: Control): Promise<ConversationsCollectionResponseWithTotalPublicInboxEntity[]>;
}
export { ConversationsCollectionResponseWithTotalPublicInboxEntity };
