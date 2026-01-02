"use strict";
/**
 * Rate Limiting Service
 *
 * Tracks word usage per token with daily reset.
 * Uses in-memory storage with date-based reset.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitService = exports.RateLimitService = void 0;
const logger_1 = require("../utils/logger");
const constants_1 = require("../config/constants");
class RateLimitService {
    constructor() {
        this.rateLimits = new Map();
    }
    /**
     * Check if a token can process additional words
     */
    canProcessWords(tokenId, additionalWords) {
        const today = this.getTodayKey();
        const limitKey = `${tokenId}:${today}`;
        let rateLimit = this.rateLimits.get(limitKey);
        // Initialize if first request today or token doesn't exist
        if (!rateLimit || rateLimit.date !== today) {
            rateLimit = {
                tokenId,
                wordCount: 0,
                date: today,
                lastReset: new Date(),
            };
            this.rateLimits.set(limitKey, rateLimit);
        }
        const newWordCount = rateLimit.wordCount + additionalWords;
        const allowed = newWordCount <= constants_1.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT;
        const remaining = Math.max(0, constants_1.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT - rateLimit.wordCount);
        // Calculate reset time (next midnight)
        const resetAt = this.getNextResetTime();
        return { allowed, remaining, resetAt };
    }
    /**
     * Increment word count for a token
     */
    incrementWordCount(tokenId, wordCount) {
        const today = this.getTodayKey();
        const limitKey = `${tokenId}:${today}`;
        let rateLimit = this.rateLimits.get(limitKey);
        if (!rateLimit || rateLimit.date !== today) {
            rateLimit = {
                tokenId,
                wordCount: 0,
                date: today,
                lastReset: new Date(),
            };
        }
        rateLimit.wordCount += wordCount;
        this.rateLimits.set(limitKey, rateLimit);
        logger_1.logger.debug('Word count incremented', {
            tokenId: tokenId.substring(0, 8) + '...',
            wordCount,
            newTotal: rateLimit.wordCount,
            limit: constants_1.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT,
        });
    }
    /**
     * Get current usage for a token
     */
    getUsage(tokenId) {
        const today = this.getTodayKey();
        const limitKey = `${tokenId}:${today}`;
        const rateLimit = this.rateLimits.get(limitKey);
        const used = rateLimit?.date === today ? rateLimit.wordCount : 0;
        const remaining = Math.max(0, constants_1.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT - used);
        const percentage = Math.round((used / constants_1.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT) * 100);
        return {
            used,
            remaining,
            limit: constants_1.CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT,
            resetAt: this.getNextResetTime(),
            percentage,
        };
    }
    /**
     * Reset rate limits (primarily for testing)
     */
    resetToken(tokenId) {
        const today = this.getTodayKey();
        const limitKey = `${tokenId}:${today}`;
        this.rateLimits.delete(limitKey);
        logger_1.logger.debug('Rate limit reset for token', {
            tokenId: tokenId.substring(0, 8) + '...',
        });
    }
    /**
     * Clean up old rate limit entries (older than 2 days)
     */
    cleanupOldEntries() {
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        const twoDaysAgoKey = this.formatDateKey(twoDaysAgo);
        let removedCount = 0;
        for (const [key, rateLimit] of this.rateLimits.entries()) {
            if (rateLimit.date < twoDaysAgoKey) {
                this.rateLimits.delete(key);
                removedCount++;
            }
        }
        if (removedCount > 0) {
            logger_1.logger.info('Cleaned up old rate limit entries', { count: removedCount });
        }
        return removedCount;
    }
    /**
     * Get stats about rate limiting
     */
    getStats() {
        const today = this.getTodayKey();
        const todayEntries = Array.from(this.rateLimits.values())
            .filter(entry => entry.date === today);
        const totalWordsToday = todayEntries.reduce((sum, entry) => sum + entry.wordCount, 0);
        return {
            totalTrackedTokens: this.rateLimits.size,
            activeToday: todayEntries.length,
            totalWordsToday,
        };
    }
    /**
     * Get today's date as YYYY-MM-DD string
     */
    getTodayKey() {
        return this.formatDateKey(new Date());
    }
    /**
     * Format date as YYYY-MM-DD
     */
    formatDateKey(date) {
        return date.toISOString().split('T')[0];
    }
    /**
     * Calculate next reset time (midnight of next day)
     */
    getNextResetTime() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        return tomorrow;
    }
}
exports.RateLimitService = RateLimitService;
// Export singleton instance
exports.rateLimitService = new RateLimitService();
//# sourceMappingURL=RateLimitService.js.map