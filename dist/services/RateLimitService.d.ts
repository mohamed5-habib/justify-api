/**
 * Rate Limiting Service
 *
 * Tracks word usage per token with daily reset.
 * Uses in-memory storage with date-based reset.
 */
export declare class RateLimitService {
    private rateLimits;
    /**
     * Check if a token can process additional words
     */
    canProcessWords(tokenId: string, additionalWords: number): {
        allowed: boolean;
        remaining: number;
        resetAt: Date;
    };
    /**
     * Increment word count for a token
     */
    incrementWordCount(tokenId: string, wordCount: number): void;
    /**
     * Get current usage for a token
     */
    getUsage(tokenId: string): {
        used: number;
        remaining: number;
        limit: number;
        resetAt: Date;
        percentage: number;
    };
    /**
     * Reset rate limits (primarily for testing)
     */
    resetToken(tokenId: string): void;
    /**
     * Clean up old rate limit entries (older than 2 days)
     */
    cleanupOldEntries(): number;
    /**
     * Get stats about rate limiting
     */
    getStats(): {
        totalTrackedTokens: number;
        activeToday: number;
        totalWordsToday: number;
    };
    /**
     * Get today's date as YYYY-MM-DD string
     */
    private getTodayKey;
    /**
     * Format date as YYYY-MM-DD
     */
    private formatDateKey;
    /**
     * Calculate next reset time (midnight of next day)
     */
    private getNextResetTime;
}
export declare const rateLimitService: RateLimitService;
//# sourceMappingURL=RateLimitService.d.ts.map