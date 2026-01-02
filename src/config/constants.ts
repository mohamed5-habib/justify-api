// src/config/constants.ts
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const CONFIG = {
  // Server
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',

  // API
  API_PREFIX: '/api',
  API_VERSION: '1.0.0',

  // Security
  SECURITY: {
    CORS_ORIGINS: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
  },

  // Rate limiting
  RATE_LIMIT: {
    DAILY_WORD_LIMIT: Number(process.env.DAILY_WORD_LIMIT) || 80000,
    WINDOW_MS: 24 * 60 * 60 * 1000,
    MAX_REQUESTS: 100,
  },

  // Text justification
  JUSTIFICATION: {
    MAX_LINE_LENGTH: Number(process.env.MAX_LINE_LENGTH) || 80,
    MAX_INPUT_SIZE: 10 * 1024 * 1024, // 10MB
  },

  // Tokens
  TOKEN: {
    EXPIRY_DAYS: Number(process.env.TOKEN_EXPIRY_DAYS) || 30,
  },

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_DIR: process.env.LOG_DIR || 'logs',

  // Monitoring
  ENABLE_METRICS: process.env.ENABLE_METRICS === 'true',

  // Redis (optional)
  REDIS_URL: process.env.REDIS_URL,

  // Features
  ENABLE_SWAGGER: process.env.ENABLE_SWAGGER === 'true',
  ENABLE_GRAPHIQL: process.env.ENABLE_GRAPHIQL === 'true',
} as const;

/* ---------- Validation ---------- */
if (CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT <= 0) {
  throw new Error('DAILY_WORD_LIMIT must be positive');
}

export default CONFIG;
