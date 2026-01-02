// src/utils/logger.ts
import winston from 'winston';
import path from 'path';
import { CONFIG } from '../config/constants';

const logDir = path.join(__dirname, '../../logs');

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

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: path.join(logDir, 'error.log'),
        level: 'error',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
    new winston.transports.File({
        filename: path.join(logDir, 'combined.log'),
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
];

export const logger = winston.createLogger({
    level: CONFIG.LOG_LEVEL,
    levels,
    format,
    transports,
});

// Request logger middleware
export const requestLogger = (req: any, res: any, next: any) => {
    const start = Date.now();
    const { method, originalUrl, ip } = req;

    res.on('finish', () => {
        const duration = Date.now() - start;
        const { statusCode } = res;
        
        logger.http(`${method} ${originalUrl} ${statusCode} ${duration}ms - ${ip}`);
    });

    next();
};