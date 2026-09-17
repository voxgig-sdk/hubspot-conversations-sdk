import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicChannel, ConversationsPublicChannelLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsPublicChannelEntity extends HubspotConversationsEntityBase<ConversationsPublicChannel> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicChannelEntity): ConversationsPublicChannelEntity;
    load(this: any, reqmatch?: ConversationsPublicChannelLoadMatch, ctrl?: Control): Promise<ConversationsPublicChannelEntity>;
}
export { ConversationsPublicChannelEntity };
