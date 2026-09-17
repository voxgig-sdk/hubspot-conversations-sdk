import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicChannelAccount, ConversationsPublicChannelAccountLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsPublicChannelAccountEntity extends HubspotConversationsEntityBase<ConversationsPublicChannelAccount> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicChannelAccountEntity): ConversationsPublicChannelAccountEntity;
    load(this: any, reqmatch?: ConversationsPublicChannelAccountLoadMatch, ctrl?: Control): Promise<ConversationsPublicChannelAccountEntity>;
}
export { ConversationsPublicChannelAccountEntity };
