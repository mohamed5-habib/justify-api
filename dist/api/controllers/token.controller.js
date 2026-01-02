"use strict";
/**
 * Token Controller
 *
 * Handles token generation and related operations.
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = void 0;
const TokenService_1 = require("../../services/TokenService");
const RateLimitService_1 = require("../../services/RateLimitService");
const types_1 = require("../../types");
const logger_1 = require("../../utils/logger");
const error_middleware_1 = require("../middleware/error.middleware");
class TokenController {
}
exports.TokenController = TokenController;
_a = TokenController;
/**
 * Generate a new API token
 */
TokenController.generateToken = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const { email } = req.body;
    // Validate request body
    if (!email || typeof email !== 'string') {
        throw new types_1.ValidationError('Email is required and must be a string');
    }
    // Generate token
    const token = TokenService_1.tokenService.generateToken(email);
    const usage = RateLimitService_1.rateLimitService.getUsage(token);
    logger_1.logger.info('New token generated', {
        email: email.substring(0, 3) + '...',
        tokenId: token.substring(0, 8) + '...',
    });
    // Return response
    res.status(201).json({
        data: {
            token,
            email,
            createdAt: new Date().toISOString(),
            rateLimit: {
                dailyLimit: usage.limit,
                remaining: usage.remaining,
                resetAt: usage.resetAt.toISOString(),
            },
        },
        meta: {
            timestamp: new Date().toISOString(),
            instructions: 'Use this token in the Authorization header: Bearer <token>',
        },
    });
});
/**
 * Verify a token (optional endpoint)
 */
TokenController.verifyToken = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new types_1.ValidationError('Authorization header is required');
    }
    const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
        throw new types_1.ValidationError('Invalid authorization format');
    }
    const tokenData = TokenService_1.tokenService.getToken(token);
    if (!tokenData) {
        res.status(404).json({
            error: {
                code: 'TOKEN_NOT_FOUND',
                message: 'Token not found or expired',
            },
        });
        return;
    }
    const usage = RateLimitService_1.rateLimitService.getUsage(token);
    res.json({
        data: {
            valid: true,
            email: tokenData.email,
            createdAt: tokenData.createdAt.toISOString(),
            lastUsed: tokenData.lastUsed?.toISOString(),
            rateLimit: {
                used: usage.used,
                remaining: usage.remaining,
                limit: usage.limit,
                percentage: usage.percentage,
                resetAt: usage.resetAt.toISOString(),
            },
        },
    });
});
