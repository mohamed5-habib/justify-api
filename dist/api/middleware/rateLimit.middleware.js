"use strict";
/**
 * Rate Limiting Middleware
 *
 * Enforces daily word limit per token.
 * Returns 402 Payment Required when limit exceeded.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementWordCount = exports.rateLimitMiddleware = void 0;
const types_1 = require("../../types");
const RateLimitService_1 = require("../../services/RateLimitService");
const JustificationService_1 = require("../../services/JustificationService");
const logger_1 = require("../../utils/logger");
const rateLimitMiddleware = async (req, res, next) => {
    try {
        // Ensure token is attached (should come after auth middleware)
        if (!req.token) {
            throw new types_1.ValidationError('Token not found in request');
        }
        // Validate request body
        const text = req.body;
        if (typeof text !== 'string') {
            throw new types_1.ValidationError('Request body must be text/plain content type');
        }
        if (!text.trim()) {
            throw new types_1.ValidationError('Text cannot be empty');
        }
        // Count words in the request
        const wordCount = JustificationService_1.JustificationService.countWords(text);
        if (wordCount === 0) {
            throw new types_1.ValidationError('Text contains no words');
        }
        // Check rate limit
        const { allowed, remaining, resetAt } = RateLimitService_1.rateLimitService.canProcessWords(req.token.id, wordCount);
        if (!allowed) {
            throw new types_1.RateLimitError(80000, 80000 - remaining, resetAt);
        }
        // Attach word count to request for later use
        req.body = text; // Keep original text
        req._wordCount = wordCount; // Store word count
        req._tokenId = req.token.id; // Store token ID
        logger_1.logger.debug('Rate limit check passed', {
            tokenId: req.token.id.substring(0, 8) + '...',
            wordCount,
            remaining,
            email: req.token.email,
        });
        next();
    }
    catch (error) {
        if (error instanceof types_1.RateLimitError) {
            logger_1.logger.warn('Rate limit exceeded', {
                tokenId: req.token?.id?.substring(0, 8) + '...' || 'unknown',
                limit: 80000,
                method: req.method,
                path: req.path,
            });
            res.status(402).json({
                error: {
                    code: error.code,
                    message: error.message,
                    details: error.details,
                },
            });
        }
        else if (error instanceof types_1.ValidationError) {
            res.status(error.statusCode).json({
                error: {
                    code: error.code,
                    message: error.message,
                },
            });
        }
        else {
            logger_1.logger.error('Unexpected error in rate limit middleware', { error });
            res.status(500).json({
                error: {
                    code: 'INTERNAL_ERROR',
                    message: 'Internal server error',
                },
            });
        }
    }
};
exports.rateLimitMiddleware = rateLimitMiddleware;
/**
 * Middleware to increment word count after successful processing
 * Should be placed after the justify route handler
 */
const incrementWordCount = (req, res, next) => {
    try {
        const tokenId = req._tokenId;
        const wordCount = req._wordCount;
        if (tokenId && wordCount) {
            RateLimitService_1.rateLimitService.incrementWordCount(tokenId, wordCount);
            // Add rate limit headers to response
            const usage = RateLimitService_1.rateLimitService.getUsage(tokenId);
            res.setHeader('X-RateLimit-Limit', usage.limit.toString());
            res.setHeader('X-RateLimit-Remaining', usage.remaining.toString());
            res.setHeader('X-RateLimit-Reset', usage.resetAt.toISOString());
        }
        next();
    }
    catch (error) {
        // Don't fail the request if we can't update rate limit
        // Just log the error and continue
        logger_1.logger.error('Failed to increment word count', { error });
        next();
    }
};
exports.incrementWordCount = incrementWordCount;
//# sourceMappingURL=rateLimit.middleware.js.map