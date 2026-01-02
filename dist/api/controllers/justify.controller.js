"use strict";
/**
 * Justification Controller
 *
 * Handles text justification requests.
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JustifyController = void 0;
const JustificationService_1 = require("../../services/JustificationService");
const TokenService_1 = require("../../services/TokenService"); // IMPORT AJOUTÉ
const RateLimitService_1 = require("../../services/RateLimitService"); // IMPORT AJOUTÉ
const logger_1 = require("../../utils/logger");
const error_middleware_1 = require("../middleware/error.middleware");
class JustifyController {
}
exports.JustifyController = JustifyController;
_a = JustifyController;
/**
 * Justify text endpoint
 */
JustifyController.justifyText = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const text = req.body;
    const tokenId = req._tokenId;
    const wordCount = req._wordCount;
    // This should already be validated by middleware, but double-check
    if (typeof text !== 'string' || !text.trim()) {
        throw new Error('Invalid text input');
    }
    logger_1.logger.info('Processing justification request', {
        tokenId: tokenId?.substring(0, 8) + '...',
        wordCount,
        textLength: text.length,
    });
    // Perform justification
    const justifiedText = JustificationService_1.JustificationService.justify(text);
    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Word-Count', wordCount.toString());
    res.setHeader('X-Line-Length', '80');
    res.setHeader('X-Justified-Lines', justifiedText.split('\n').length.toString());
    // Send response
    res.send(justifiedText);
    logger_1.logger.info('Justification completed successfully', {
        tokenId: tokenId?.substring(0, 8) + '...',
        wordCount,
        outputLength: justifiedText.length,
        lineCount: justifiedText.split('\n').length,
    });
});
/**
 * Health check endpoint (optional)
 */
JustifyController.healthCheck = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const tokenStats = TokenService_1.tokenService.getStats();
    const rateLimitStats = RateLimitService_1.rateLimitService.getStats();
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        stats: {
            tokens: tokenStats,
            rateLimits: rateLimitStats,
        },
    });
});
