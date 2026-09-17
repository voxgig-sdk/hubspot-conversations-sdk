import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesCollectionResponsePublicThread, ConversationsInboxMessagesCollectionResponsePublicThreadListMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesCollectionResponsePublicThreadEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesCollectionResponsePublicThread> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesCollectionResponsePublicThreadEntity): ConversationsInboxMessagesCollectionResponsePublicThreadEntity;
    list(this: any, reqmatch?: ConversationsInboxMessagesCollectionResponsePublicThreadListMatch, ctrl?: Control): Promise<ConversationsInboxMessagesCollectionResponsePublicThreadEntity[]>;
}
export { ConversationsInboxMessagesCollectionResponsePublicThreadEntity };
