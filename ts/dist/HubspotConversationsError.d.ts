import { Context } from './Context';
declare class HubspotConversationsError extends Error {
    isHubspotConversationsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotConversationsError };
