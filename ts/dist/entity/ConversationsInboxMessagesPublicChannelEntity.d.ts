import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicChannel, ConversationsInboxMessagesPublicChannelLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicChannelEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicChannel> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicChannelEntity): ConversationsInboxMessagesPublicChannelEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicChannelLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicChannelEntity>;
}
export { ConversationsInboxMessagesPublicChannelEntity };
