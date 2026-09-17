import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicThread, ConversationsInboxMessagesPublicThreadLoadMatch, ConversationsInboxMessagesPublicThreadUpdateData } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicThreadEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicThread> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicThreadEntity): ConversationsInboxMessagesPublicThreadEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicThreadLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicThreadEntity>;
    update(this: any, reqdata?: ConversationsInboxMessagesPublicThreadUpdateData, ctrl?: Control): Promise<ConversationsInboxMessagesPublicThreadEntity>;
}
export { ConversationsInboxMessagesPublicThreadEntity };
