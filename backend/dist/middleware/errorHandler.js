"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("./logger");
const errorHandler = (error, request, response) => {
    (0, logger_1.logEvents)(`${error.name}: ${error.message}\t${request.method}\t${request.url}\t${request.headers.origin}`, "errorLog.log");
    console.log(error.stack);
    const status = response.statusCode ? response.statusCode : 500; // Server Error Code
    response.status(status);
    response.json({ message: error.message });
};
exports.errorHandler = errorHandler;
