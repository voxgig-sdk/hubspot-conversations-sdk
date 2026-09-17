import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { VisitorIdentificationIdentificationToken, VisitorIdentificationIdentificationTokenCreateData } from '../HubspotConversationsTypes';
declare class VisitorIdentificationIdentificationTokenEntity extends HubspotConversationsEntityBase<VisitorIdentificationIdentificationToken> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: VisitorIdentificationIdentificationTokenEntity): VisitorIdentificationIdentificationTokenEntity;
    create(this: any, reqdata?: VisitorIdentificationIdentificationTokenCreateData, ctrl?: Control): Promise<VisitorIdentificationIdentificationTokenEntity>;
}
export { VisitorIdentificationIdentificationTokenEntity };
