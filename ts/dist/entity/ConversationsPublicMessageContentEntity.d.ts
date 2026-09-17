import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicMessageContent, ConversationsPublicMessageContentLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsPublicMessageContentEntity extends HubspotConversationsEntityBase<ConversationsPublicMessageContent> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicMessageContentEntity): ConversationsPublicMessageContentEntity;
    load(this: any, reqmatch?: ConversationsPublicMessageContentLoadMatch, ctrl?: Control): Promise<ConversationsPublicMessageContentEntity>;
}
export { ConversationsPublicMessageContentEntity };
