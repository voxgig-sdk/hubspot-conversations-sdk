import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesCollectionResponseWithTotalPublic, ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesCollectionResponseWithTotalPublic> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity): ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity;
    list(this: any, reqmatch?: ConversationsInboxMessagesCollectionResponseWithTotalPublicListMatch, ctrl?: Control): Promise<ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity[]>;
}
export { ConversationsInboxMessagesCollectionResponseWithTotalPublicEntity };
