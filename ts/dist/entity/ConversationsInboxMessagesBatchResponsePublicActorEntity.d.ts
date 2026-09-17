import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsInboxMessagesBatchResponsePublicActor, ConversationsInboxMessagesBatchResponsePublicActorCreateData } from '../HubspotConversationsTypes';
declare class ConversationsInboxMessagesBatchResponsePublicActorEntity extends HubspotConversationsEntityBase<ConversationsInboxMessagesBatchResponsePublicActor> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsInboxMessagesBatchResponsePublicActorEntity): ConversationsInboxMessagesBatchResponsePublicActorEntity;
    create(this: any, reqdata?: ConversationsInboxMessagesBatchResponsePublicActorCreateData, ctrl?: Control): Promise<ConversationsInboxMessagesBatchResponsePublicActorEntity>;
}
export { ConversationsInboxMessagesBatchResponsePublicActorEntity };
