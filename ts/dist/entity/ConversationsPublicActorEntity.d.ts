import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsPublicActor, ConversationsPublicActorLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsPublicActorEntity extends HubspotConversationsEntityBase<ConversationsPublicActor> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsPublicActorEntity): ConversationsPublicActorEntity;
    load(this: any, reqmatch?: ConversationsPublicActorLoadMatch, ctrl?: Control): Promise<ConversationsPublicActorEntity>;
}
export { ConversationsPublicActorEntity };
