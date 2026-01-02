"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = exports.TokenService = void 0;
const uuid_1 = require("uuid");
const types_1 = require("../types");
const logger_1 = require("../utils/logger");
const constants_1 = require("../config/constants");
class TokenService {
    tokens = new Map();
    generateToken(email) {
        logger_1.logger.debug('Generating new token', { email });
        if (!this.isValidEmail(email)) {
            throw new types_1.ValidationError('Invalid email format');
        }
        const tokenId = (0, uuid_1.v4)();
        const now = new Date();
        const token = {
            id: tokenId,
            email: email.toLowerCase().trim(),
            createdAt: now,
            lastUsed: now,
        };
        this.tokens.set(tokenId, token);
        logger_1.logger.info('Token generated successfully', {
            tokenId: tokenId.substring(0, 8) + '...',
            email: token.email,
        });
        return tokenId;
    }
    validateToken(tokenId) {
        if (!tokenId || typeof tokenId !== 'string') {
            return null;
        }
        const token = this.tokens.get(tokenId);
        if (token) {
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
    getToken(tokenId) {
        return this.tokens.get(tokenId) || null;
    }
    revokeToken(tokenId) {
        return this.tokens.delete(tokenId);
    }
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
    isValidEmail(email) {
        if (!email || typeof email !== 'string') {
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email.trim());
    }
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
        const activeThreshold = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
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
exports.tokenService = new TokenService();
//# sourceMappingURL=TokenService.js.map