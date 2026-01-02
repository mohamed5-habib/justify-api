"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.CONFIG = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    REDIS: {
        HOST: process.env.REDIS_HOST || 'localhost',
        PORT: parseInt(process.env.REDIS_PORT || '6379', 10),
        PASSWORD: process.env.REDIS_PASSWORD,
        TTL: 24 * 60 * 60,
    },
    RATE_LIMIT: {
        DAILY_WORD_LIMIT: parseInt(process.env.DAILY_WORD_LIMIT || '80000', 10),
        RESET_TIME: '00:00',
    },
    JUSTIFICATION: {
        MAX_LINE_LENGTH: parseInt(process.env.MAX_LINE_LENGTH || '80', 10),
        MAX_INPUT_LENGTH: 100000,
    },
    TOKEN: {
        EXPIRY_DAYS: parseInt(process.env.TOKEN_EXPIRY_DAYS || '30', 10),
        EXPIRY_SECONDS: 30 * 24 * 60 * 60,
    },
    SECURITY: {
        CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
        HELMET_ENABLED: process.env.HELMET_ENABLED !== 'false',
    },
    LOGGING: {
        LEVEL: process.env.LOG_LEVEL || 'info',
        DIR: process.env.LOG_DIR || 'logs',
    },
};
if (exports.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT <= 0) {
    throw new Error('DAILY_WORD_LIMIT must be positive');
}
if (exports.CONFIG.JUSTIFICATION.MAX_LINE_LENGTH <= 0) {
    throw new Error('MAX_LINE_LENGTH must be positive');
}
//# sourceMappingURL=constants.js.map