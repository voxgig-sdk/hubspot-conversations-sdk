import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { PublicThread, PublicThreadRemoveMatch } from '../HubspotConversationsTypes';
declare class PublicThreadEntity extends HubspotConversationsEntityBase<PublicThread> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: PublicThreadEntity): PublicThreadEntity;
    remove(this: any, reqmatch?: PublicThreadRemoveMatch, ctrl?: Control): Promise<PublicThreadEntity>;
}
export { PublicThreadEntity };
