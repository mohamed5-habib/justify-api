"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/app.ts
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = require("express-rate-limit");
// Import des routes
const token_routes_1 = __importDefault(require("./api/routes/token.routes"));
const justify_routes_1 = __importDefault(require("./api/routes/justify.routes"));
const error_middleware_1 = require("./api/middleware/error.middleware");
const logger_1 = require("./utils/logger");
const constants_1 = require("./config/constants");
const app = (0, express_1.default)();
exports.app = app;
// Security middleware
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://fonts.googleapis.com"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
}));
// CORS
app.use((0, cors_1.default)({
    origin: constants_1.CONFIG.SECURITY.CORS_ORIGINS,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
// Logging
app.use((0, morgan_1.default)('combined', { stream: { write: (message) => logger_1.logger.http(message.trim()) } }));
// Rate limiting global
const globalLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(globalLimiter);
// Body parsing
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.text({ type: 'text/plain', limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Serve static files from public directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
        else if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
        }
    }
}));
// API Routes
app.use('/api/token', token_routes_1.default);
app.use('/api/justify', justify_routes_1.default);
// API Documentation JSON
app.get('/api/docs', (req, res) => {
    res.json({
        name: 'Text Justification API',
        version: '1.0.0',
        description: 'Professional API for text justification with rate limiting and authentication',
        endpoints: [
            {
                path: '/api/token',
                method: 'POST',
                description: 'Generate authentication token',
                body: { email: 'string (valid email address)' }
            },
            {
                path: '/api/justify',
                method: 'POST',
                description: 'Justify text to 80 characters per line',
                headers: {
                    'Authorization': 'Bearer <token>',
                    'Content-Type': 'text/plain'
                },
                body: 'Plain text to justify'
            },
            {
                path: '/api/health',
                method: 'GET',
                description: 'Check API health and statistics'
            }
        ],
        rateLimits: {
            dailyWords: 80000,
            resetTime: 'Daily at midnight UTC'
        }
    });
});
// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Error handling
app.use(error_middleware_1.errorHandler);
