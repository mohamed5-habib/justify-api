"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = exports.logger = void 0;
// src/utils/logger.ts
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("../config/constants");
const logDir = path_1.default.join(__dirname, '../../logs');
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
winston_1.default.addColors(colors);
const format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const transports = [
    new winston_1.default.transports.Console(),
    new winston_1.default.transports.File({
        filename: path_1.default.join(logDir, 'error.log'),
        level: 'error',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
    new winston_1.default.transports.File({
        filename: path_1.default.join(logDir, 'combined.log'),
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
];
exports.logger = winston_1.default.createLogger({
    level: constants_1.CONFIG.LOG_LEVEL,
    levels,
    format,
    transports,
});
// Request logger middleware
const requestLogger = (req, res, next) => {
    const start = Date.now();
    const { method, originalUrl, ip } = req;
    res.on('finish', () => {
        const duration = Date.now() - start;
        const { statusCode } = res;
        exports.logger.http(`${method} ${originalUrl} ${statusCode} ${duration}ms - ${ip}`);
    });
    next();
};
exports.requestLogger = requestLogger;
