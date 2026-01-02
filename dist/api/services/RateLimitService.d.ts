export declare class RateLimitService {
    private rateLimits;
    canProcessWords(tokenId: string, additionalWords: number): {
        allowed: boolean;
        remaining: number;
        resetAt: Date;
    };
    incrementWordCount(tokenId: string, wordCount: number): void;
    getUsage(tokenId: string): {
        used: number;
        remaining: number;
        limit: number;
        resetAt: Date;
        percentage: number;
    };
    resetToken(tokenId: string): void;
    cleanupOldEntries(): number;
    getStats(): {
        totalTrackedTokens: number;
        activeToday: number;
        totalWordsToday: number;
    };
    private getTodayKey;
    private formatDateKey;
    private getNextResetTime;
}
export declare const rateLimitService: RateLimitService;
//# sourceMappingURL=RateLimitService.d.ts.map