"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonHandler(req, res, next) {
    if (!req.url.startsWith('/json')) {
        next();
        return;
    }
    if (req.method === 'GET') {
        res.json(req.query);
    }
    else {
        res.json(req.body);
    }
    next();
}
exports.jsonHandler = jsonHandler;
//# sourceMappingURL=json-handler.js.map