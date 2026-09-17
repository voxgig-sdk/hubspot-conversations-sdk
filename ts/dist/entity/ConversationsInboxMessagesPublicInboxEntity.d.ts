import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicInbox, ConversationsInboxMessagesPublicInboxLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicInboxEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicInbox> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicInboxEntity): ConversationsInboxMessagesPublicInboxEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicInboxLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicInboxEntity>;
}
export { ConversationsInboxMessagesPublicInboxEntity };
