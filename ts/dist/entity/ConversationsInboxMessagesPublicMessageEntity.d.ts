import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicMessage, ConversationsInboxMessagesPublicMessageLoadMatch, ConversationsInboxMessagesPublicMessageCreateData } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicMessageEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicMessage> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicMessageEntity): ConversationsInboxMessagesPublicMessageEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicMessageLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicMessageEntity>;
    create(this: any, reqdata?: ConversationsInboxMessagesPublicMessageCreateData, ctrl?: Control): Promise<ConversationsInboxMessagesPublicMessageEntity>;
}
export { ConversationsInboxMessagesPublicMessageEntity };
