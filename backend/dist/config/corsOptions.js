"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const allowedOrigins_1 = require("./allowedOrigins");
const customOrigin = (requestOrigin, callback) => {
    if (allowedOrigins_1.allowedOrigins.indexOf(requestOrigin) !== -1 || !origin) {
        callback(null, requestOrigin);
    }
    else {
        callback(new Error("Not allowed by CORS"), requestOrigin);
    }
};
exports.corsOptions = {
    origin: customOrigin,
    credentials: true,
    optionsSuccessStatus: 200
};
