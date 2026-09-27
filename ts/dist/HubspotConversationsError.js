"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubspotConversationsError = void 0;
class HubspotConversationsError extends Error {
    isHubspotConversationsError = true;
    sdk = 'HubspotConversations';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.HubspotConversationsError = HubspotConversationsError;
//# sourceMappingURL=HubspotConversationsError.js.map