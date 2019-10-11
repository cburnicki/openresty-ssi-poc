"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorResponseHandler(req, res, next) {
    if (!req.url.startsWith('/status/')) {
        next();
        return;
    }
    const code = (req.url.split('/').pop() || 500);
    res.status(code);
    res.send();
}
exports.errorResponseHandler = errorResponseHandler;
//# sourceMappingURL=error-response-handler.js.map