import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { Thread, ThreadRemoveMatch } from '../HubspotConversationsTypes';
declare class ThreadEntity extends HubspotConversationsEntityBase<Thread> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ThreadEntity): ThreadEntity;
    remove(this: any, reqmatch?: ThreadRemoveMatch, ctrl?: Control): Promise<ThreadEntity>;
}
export { ThreadEntity };
