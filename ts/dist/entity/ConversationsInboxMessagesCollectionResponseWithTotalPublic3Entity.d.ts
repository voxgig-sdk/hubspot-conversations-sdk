import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesCollectionResponseWithTotalPublic3, ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity extends HubspotConversationsEntityBase<ConversationsInboxMessagesCollectionResponseWithTotalPublic3> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity): ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity;
    list(this: any, reqmatch?: ConversationsInboxMessagesCollectionResponseWithTotalPublic3ListMatch, ctrl?: Control): Promise<ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity[]>;
}
export { ConversationsInboxMessagesCollectionResponseWithTotalPublic3Entity };
