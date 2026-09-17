import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicInbox, ConversationsPublicInboxLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsPublicInboxEntity extends HubspotConversationsEntityBase<ConversationsPublicInbox> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicInboxEntity): ConversationsPublicInboxEntity;
    load(this: any, reqmatch?: ConversationsPublicInboxLoadMatch, ctrl?: Control): Promise<ConversationsPublicInboxEntity>;
}
export { ConversationsPublicInboxEntity };
