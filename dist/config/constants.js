"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
// src/config/constants.ts
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../../.env') });
exports.CONFIG = {
    // Server
    PORT: parseInt(process.env.PORT || '3000'),
    NODE_ENV: process.env.NODE_ENV || 'development',
    // API
    API_PREFIX: '/api',
    API_VERSION: '1.0.0',
    // Rate limiting
    DAILY_WORD_LIMIT: parseInt(process.env.DAILY_WORD_LIMIT || '80000'),
    RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    RATE_LIMIT_MAX_REQUESTS: 100,
    // Text justification
    MAX_LINE_LENGTH: 80,
    MAX_INPUT_SIZE: 10 * 1024 * 1024, // 10MB
    // Tokens
    TOKEN_EXPIRY_DAYS: 30,
    // Security
    CORS_ORIGINS: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
    // Logging
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    LOG_DIR: process.env.LOG_DIR || 'logs',
    // Monitoring
    ENABLE_METRICS: process.env.ENABLE_METRICS === 'true',
    // Redis (optionnel pour plus tard)
    REDIS_URL: process.env.REDIS_URL,
    // Features
    ENABLE_SWAGGER: process.env.ENABLE_SWAGGER === 'true',
    ENABLE_GRAPHIQL: process.env.ENABLE_GRAPHIQL === 'true',
};
// Validation
if (exports.CONFIG.DAILY_WORD_LIMIT <= 0) {
    throw new Error('DAILY_WORD_LIMIT must be positive');
}
exports.default = exports.CONFIG;
//# sourceMappingURL=constants.js.map