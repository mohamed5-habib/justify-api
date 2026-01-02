// src/app.ts
import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';

// Import des routes
import tokenRoutes from './api/routes/token.routes';
import justifyRoutes from './api/routes/justify.routes';
import { errorHandler } from './api/middleware/error.middleware';
import { logger } from './utils/logger';
import { CONFIG } from './config/constants';

const app = express();

// Security middleware
app.use(helmet({
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
app.use(cors({
    origin: CONFIG.SECURITY.CORS_ORIGINS,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Logging
app.use(morgan('combined', { stream: { write: (message) => logger.http(message.trim()) } }));

// Rate limiting global
const globalLimiter = rateLimit({
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
app.use(express.json({ limit: '10mb' }));
app.use(express.text({ type: 'text/plain', limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        } else if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
        }
    }
}));

// API Routes
app.use('/api/token', tokenRoutes);
app.use('/api/justify', justifyRoutes);

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
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use(errorHandler);

export { app };