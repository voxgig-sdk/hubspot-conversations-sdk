import { HubspotConversationsEntityBase } from '../HubspotConversationsEntityBase';
import type { HubspotConversationsSDK } from '../HubspotConversationsSDK';
import type { Control } from '../types';
import type { Channel, ChannelRemoveMatch } from '../HubspotConversationsTypes';
declare class ChannelEntity extends HubspotConversationsEntityBase<Channel> {
    constructor(client: HubspotConversationsSDK, entopts: any);
    make(this: ChannelEntity): ChannelEntity;
    remove(this: any, reqmatch?: ChannelRemoveMatch, ctrl?: Control): Promise<ChannelEntity>;
}
export { ChannelEntity };
