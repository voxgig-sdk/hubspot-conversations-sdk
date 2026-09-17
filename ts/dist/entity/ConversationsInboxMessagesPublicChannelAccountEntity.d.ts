import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicChannelAccount, ConversationsInboxMessagesPublicChannelAccountLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicChannelAccountEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicChannelAccount> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicChannelAccountEntity): ConversationsInboxMessagesPublicChannelAccountEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicChannelAccountLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicChannelAccountEntity>;
}
export { ConversationsInboxMessagesPublicChannelAccountEntity };
