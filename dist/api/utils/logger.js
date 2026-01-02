"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const constants_1 = require("../config/constants");
const { combine, timestamp, printf, colorize, json } = winston_1.default.format;
const consoleFormat = printf(({ level, message, timestamp, ...meta }) => {
    const metaString = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    return `${timestamp} [${level}]: ${message}${metaString}`;
});
exports.logger = winston_1.default.createLogger({
    level: constants_1.CONFIG.LOGGING.LEVEL,
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), json()),
    defaultMeta: { service: 'justify-api' },
    transports: [
        new winston_1.default.transports.Console({
            format: combine(colorize(), timestamp({ format: 'HH:mm:ss' }), consoleFormat),
            silent: constants_1.CONFIG.IS_PRODUCTION,
        }),
        new winston_1.default.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            maxsize: 5242880,
            maxFiles: 5,
        }),
        new winston_1.default.transports.File({
            filename: 'logs/combined.log',
            maxsize: 5242880,
            maxFiles: 5,
        }),
    ],
    exceptionHandlers: [
        new winston_1.default.transports.File({ filename: 'logs/exceptions.log' }),
    ],
    rejectionHandlers: [
        new winston_1.default.transports.File({ filename: 'logs/rejections.log' }),
    ],
});
const requestLogger = (req, res, next) => {
    const startTime = Date.now();
    exports.logger.info('Incoming request', {
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('user-agent'),
    });
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        exports.logger.info('Request completed', {
            method: req.method,
            url: req.url,
            status: res.statusCode,
            duration: `${duration}ms`,
        });
    });
    next();
};
exports.requestLogger = requestLogger;
//# sourceMappingURL=logger.js.map