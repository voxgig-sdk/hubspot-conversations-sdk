import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicMessageContent, ConversationsInboxMessagesPublicMessageContentLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicMessageContentEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicMessageContent> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicMessageContentEntity): ConversationsInboxMessagesPublicMessageContentEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicMessageContentLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicMessageContentEntity>;
}
export { ConversationsInboxMessagesPublicMessageContentEntity };
