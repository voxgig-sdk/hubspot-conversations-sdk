import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesCollectionResponsePublicMessage, ConversationsInboxMessagesCollectionResponsePublicMessageListMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesCollectionResponsePublicMessageEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesCollectionResponsePublicMessage> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesCollectionResponsePublicMessageEntity): ConversationsInboxMessagesCollectionResponsePublicMessageEntity;
    list(this: any, reqmatch?: ConversationsInboxMessagesCollectionResponsePublicMessageListMatch, ctrl?: Control): Promise<ConversationsInboxMessagesCollectionResponsePublicMessageEntity[]>;
}
export { ConversationsInboxMessagesCollectionResponsePublicMessageEntity };
