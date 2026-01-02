"use strict";
/**
 * Token Management Service
 *
 * Handles token generation, validation, and storage.
 * Uses in-memory storage for simplicity (as per exercise constraints).
 * In production, this would use Redis or a database.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = exports.TokenService = void 0;
const uuid_1 = require("uuid");
const types_1 = require("../types");
const logger_1 = require("../utils/logger");
const constants_1 = require("../config/constants");
class TokenService {
    constructor() {
        this.tokens = new Map();
    }
    /**
     * Generate a new API token for an email address
     */
    generateToken(email) {
        logger_1.logger.debug('Generating new token', { email });
        // Validate email format
        if (!this.isValidEmail(email)) {
            throw new types_1.ValidationError('Invalid email format');
        }
        // Generate unique token
        const tokenId = (0, uuid_1.v4)();
        const now = new Date();
        const token = {
            id: tokenId,
            email: email.toLowerCase().trim(),
            createdAt: now,
            lastUsed: now,
        };
        // Store token (in-memory for this exercise)
        this.tokens.set(tokenId, token);
        logger_1.logger.info('Token generated successfully', {
            tokenId: tokenId.substring(0, 8) + '...',
            email: token.email,
        });
        return tokenId;
    }
    /**
     * Validate and retrieve a token
     */
    validateToken(tokenId) {
        if (!tokenId || typeof tokenId !== 'string') {
            return null;
        }
        const token = this.tokens.get(tokenId);
        if (token) {
            // Update last used timestamp
            token.lastUsed = new Date();
            this.tokens.set(tokenId, token);
            logger_1.logger.debug('Token validated', {
                tokenId: tokenId.substring(0, 8) + '...',
                email: token.email,
            });
        }
        else {
            logger_1.logger.warn('Invalid token attempt', {
                tokenId: tokenId.substring(0, 8) + '...',
            });
        }
        return token || null;
    }
    /**
     * Get token by ID (without updating lastUsed)
     */
    getToken(tokenId) {
        return this.tokens.get(tokenId) || null;
    }
    /**
     * Revoke a token (not required by spec, but good practice)
     */
    revokeToken(tokenId) {
        return this.tokens.delete(tokenId);
    }
    /**
     * Clean up expired tokens
     */
    cleanupExpiredTokens() {
        const now = new Date();
        const expiryDate = new Date(now.getTime() - constants_1.CONFIG.TOKEN.EXPIRY_DAYS * 24 * 60 * 60 * 1000);
        let removedCount = 0;
        for (const [tokenId, token] of this.tokens.entries()) {
            if (token.createdAt < expiryDate) {
                this.tokens.delete(tokenId);
                removedCount++;
            }
        }
        if (removedCount > 0) {
            logger_1.logger.info('Cleaned up expired tokens', { count: removedCount });
        }
        return removedCount;
    }
    /**
     * Email validation using RFC 5322 compliant regex
     */
    isValidEmail(email) {
        if (!email || typeof email !== 'string') {
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email.trim());
    }
    /**
     * Get statistics about token usage
     */
    getStats() {
        const tokens = Array.from(this.tokens.values());
        if (tokens.length === 0) {
            return {
                totalTokens: 0,
                activeTokens: 0,
                oldestToken: null,
                newestToken: null,
            };
        }
        const now = new Date();
        const activeThreshold = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days
        const activeTokens = tokens.filter(token => token.lastUsed && token.lastUsed > activeThreshold).length;
        const sortedByCreation = tokens.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        return {
            totalTokens: tokens.length,
            activeTokens,
            oldestToken: sortedByCreation[0].createdAt,
            newestToken: sortedByCreation[sortedByCreation.length - 1].createdAt,
        };
    }
}
exports.TokenService = TokenService;
// Export singleton instance
exports.tokenService = new TokenService();
