"use strict";
/**
 * Justify Routes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const justify_controller_1 = require("../controllers/justify.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const rateLimit_middleware_1 = require("../middleware/rateLimit.middleware");
const router = (0, express_1.Router)();
/**
 * @route   POST /api/justify
 * @desc    Justify text to 80 characters per line
 * @access  Private (requires token)
 * @header  Authorization: Bearer <token>
 * @header  Content-Type: text/plain
 * @body    Raw text to justify
 * @returns Justified text (text/plain)
 */
router.post('/justify', auth_middleware_1.authenticateToken, rateLimit_middleware_1.rateLimitMiddleware, justify_controller_1.JustifyController.justifyText, rateLimit_middleware_1.incrementWordCount // Update rate limit after successful processing
);
/**
 * @route   GET /api/health
 * @desc    Health check endpoint
 * @access  Public
 * @returns API status and statistics
 */
router.get('/health', justify_controller_1.JustifyController.healthCheck);
exports.default = router;
