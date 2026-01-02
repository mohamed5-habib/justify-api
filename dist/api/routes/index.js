"use strict";
/**
 * Main router combining all API routes
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_routes_1 = __importDefault(require("./token.routes"));
const justify_routes_1 = __importDefault(require("./justify.routes"));
const router = (0, express_1.Router)();
// API routes
router.use(token_routes_1.default);
router.use(justify_routes_1.default);
// Root endpoint with documentation
router.get('/', (req, res) => {
    res.json({
        service: 'Text Justification API',
        version: '1.0.0',
        documentation: {
            endpoints: [
                {
                    method: 'POST',
                    path: '/api/token',
                    description: 'Generate API token',
                    body: { email: 'string' },
                },
                {
                    method: 'POST',
                    path: '/api/justify',
                    description: 'Justify text',
                    headers: {
                        Authorization: 'Bearer <token>',
                        'Content-Type': 'text/plain',
                    },
                    body: 'Raw text to justify',
                },
            ],
            limits: {
                dailyWordLimit: 80000,
                lineLength: 80,
                rateLimitReset: 'Daily at midnight UTC',
            },
        },
    });
});
exports.default = router;
