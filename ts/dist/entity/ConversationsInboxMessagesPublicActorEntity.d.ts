import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesPublicActor, ConversationsInboxMessagesPublicActorLoadMatch } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesPublicActorEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesPublicActor> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesPublicActorEntity): ConversationsInboxMessagesPublicActorEntity;
    load(this: any, reqmatch?: ConversationsInboxMessagesPublicActorLoadMatch, ctrl?: Control): Promise<ConversationsInboxMessagesPublicActorEntity>;
}
export { ConversationsInboxMessagesPublicActorEntity };
