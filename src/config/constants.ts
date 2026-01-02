// src/config/constants.ts
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const CONFIG = {
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
} as const;

// Validation
if (CONFIG.DAILY_WORD_LIMIT <= 0) {
    throw new Error('DAILY_WORD_LIMIT must be positive');
}

export default CONFIG;