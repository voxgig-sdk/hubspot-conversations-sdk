import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { ConversationsBatchResponsePublicActor, ConversationsBatchResponsePublicActorCreateData } from '../HubspotConversationsTypes';
declare class ConversationsBatchResponsePublicActorEntity extends HubspotConversationsEntityBase<ConversationsBatchResponsePublicActor> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ConversationsBatchResponsePublicActorEntity): ConversationsBatchResponsePublicActorEntity;
    create(this: any, reqdata?: ConversationsBatchResponsePublicActorCreateData, ctrl?: Control): Promise<ConversationsBatchResponsePublicActorEntity>;
}
export { ConversationsBatchResponsePublicActorEntity };
