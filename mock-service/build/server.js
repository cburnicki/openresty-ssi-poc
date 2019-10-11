"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_logging_1 = require("./middleware/request-logging");
const json_handler_1 = require("./middleware/json-handler");
const error_response_handler_1 = require("./middleware/error-response-handler");
const bodyParser = require("body-parser");
const express = require('express');
const SERVER_PORT = process.env.MOCK_PORT || 8000;
const STATIC_DIR = process.env.STATIC_DIR || 'static';
class Server {
    constructor() {
    }
    async run() {
        return this.startHttpServer();
    }
    async stop() {
        await this.stopHttpServer();
    }
    startHttpServer() {
        return new Promise((resolve, reject) => {
            this.app = express();
            this.app.use(bodyParser.json());
            this.app.use(request_logging_1.requestLogging);
            this.app.use(json_handler_1.jsonHandler);
            this.app.use(error_response_handler_1.errorResponseHandler);
            this.app.use('/static', express.static(STATIC_DIR));
            this.server = this.app.listen(SERVER_PORT, () => {
                console.log('server running on *:' + SERVER_PORT);
                resolve(this.app);
            });
        });
    }
    stopHttpServer() {
        return new Promise((resolve, rej) => {
            this.server.close((err) => {
                if (err) {
                    rej(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map