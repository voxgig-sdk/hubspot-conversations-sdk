import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicMessage, ConversationsPublicMessageLoadMatch, ConversationsPublicMessageCreateData } from '../HubspotConversationsTypes';
declare class ConversationsPublicMessageEntity extends HubspotConversationsEntityBase<ConversationsPublicMessage> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicMessageEntity): ConversationsPublicMessageEntity;
    load(this: any, reqmatch?: ConversationsPublicMessageLoadMatch, ctrl?: Control): Promise<ConversationsPublicMessageEntity>;
    create(this: any, reqdata?: ConversationsPublicMessageCreateData, ctrl?: Control): Promise<ConversationsPublicMessageEntity>;
}
export { ConversationsPublicMessageEntity };
