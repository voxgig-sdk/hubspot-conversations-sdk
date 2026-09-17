import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicThread, ConversationsPublicThreadLoadMatch, ConversationsPublicThreadUpdateData, ConversationsPublicThreadRemoveMatch } from '../HubspotConversationsTypes';
declare class ConversationsPublicThreadEntity extends HubspotConversationsEntityBase<ConversationsPublicThread> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicThreadEntity): ConversationsPublicThreadEntity;
    load(this: any, reqmatch?: ConversationsPublicThreadLoadMatch, ctrl?: Control): Promise<ConversationsPublicThreadEntity>;
    update(this: any, reqdata?: ConversationsPublicThreadUpdateData, ctrl?: Control): Promise<ConversationsPublicThreadEntity>;
    remove(this: any, reqmatch?: ConversationsPublicThreadRemoveMatch, ctrl?: Control): Promise<ConversationsPublicThreadEntity>;
}
export { ConversationsPublicThreadEntity };
