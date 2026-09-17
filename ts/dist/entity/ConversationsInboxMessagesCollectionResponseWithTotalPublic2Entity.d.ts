import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesCollectionResponseWithTotalPublic2, ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity extends HubspotConversationsEntityBase<ConversationsInboxMessagesCollectionResponseWithTotalPublic2> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity): ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity;
    list(this: any, reqmatch?: ConversationsInboxMessagesCollectionResponseWithTotalPublic2ListMatch, ctrl?: Control): Promise<ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity[]>;
}
export { ConversationsInboxMessagesCollectionResponseWithTotalPublic2Entity };
