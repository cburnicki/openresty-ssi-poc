"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requestLogging(req, res, next) {
    console.log(new Date().toISOString() + ' ' + req.method + ' @ ' + req.url);
    console.log('HEADERS:');
    for (const [key, value] of Object.entries(req.headers)) {
        console.log('  ' + key + ': ' + value);
    }
    console.log('\n');
    next();
}
exports.requestLogging = requestLogging;
//# sourceMappingURL=request-logging.js.map