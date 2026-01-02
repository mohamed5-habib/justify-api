/**
 * Rate Limiting Service
 * 
 * Tracks word usage per token with daily reset.
 * Uses in-memory storage with date-based reset.
 */

import { RateLimit, RateLimitError } from '../types';
import { logger } from '../utils/logger';
import { CONFIG } from '../config/constants';

export class RateLimitService {
  private rateLimits: Map<string, RateLimit> = new Map();
  
  /**
   * Check if a token can process additional words
   */
  canProcessWords(tokenId: string, additionalWords: number): {
    allowed: boolean;
    remaining: number;
    resetAt: Date;
  } {
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
    const allowed = newWordCount <= CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT;
    const remaining = Math.max(0, CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT - rateLimit.wordCount);
    
    // Calculate reset time (next midnight)
    const resetAt = this.getNextResetTime();
    
    return { allowed, remaining, resetAt };
  }
  
  /**
   * Increment word count for a token
   */
  incrementWordCount(tokenId: string, wordCount: number): void {
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
    
    logger.debug('Word count incremented', {
      tokenId: tokenId.substring(0, 8) + '...',
      wordCount,
      newTotal: rateLimit.wordCount,
      limit: CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT,
    });
  }
  
  /**
   * Get current usage for a token
   */
  getUsage(tokenId: string): {
    used: number;
    remaining: number;
    limit: number;
    resetAt: Date;
    percentage: number;
  } {
    const today = this.getTodayKey();
    const limitKey = `${tokenId}:${today}`;
    
    const rateLimit = this.rateLimits.get(limitKey);
    const used = rateLimit?.date === today ? rateLimit.wordCount : 0;
    const remaining = Math.max(0, CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT - used);
    const percentage = Math.round((used / CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT) * 100);
    
    return {
      used,
      remaining,
      limit: CONFIG.RATE_LIMIT.DAILY_WORD_LIMIT,
      resetAt: this.getNextResetTime(),
      percentage,
    };
  }
  
  /**
   * Reset rate limits (primarily for testing)
   */
  resetToken(tokenId: string): void {
    const today = this.getTodayKey();
    const limitKey = `${tokenId}:${today}`;
    this.rateLimits.delete(limitKey);
    
    logger.debug('Rate limit reset for token', {
      tokenId: tokenId.substring(0, 8) + '...',
    });
  }
  
  /**
   * Clean up old rate limit entries (older than 2 days)
   */
  cleanupOldEntries(): number {
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
      logger.info('Cleaned up old rate limit entries', { count: removedCount });
    }
    
    return removedCount;
  }
  
  /**
   * Get stats about rate limiting
   */
  getStats(): {
    totalTrackedTokens: number;
    activeToday: number;
    totalWordsToday: number;
  } {
    const today = this.getTodayKey();
    const todayEntries = Array.from(this.rateLimits.values())
      .filter(entry => entry.date === today);
    
    const totalWordsToday = todayEntries.reduce(
      (sum, entry) => sum + entry.wordCount,
      0
    );
    
    return {
      totalTrackedTokens: this.rateLimits.size,
      activeToday: todayEntries.length,
      totalWordsToday,
    };
  }
  
  /**
   * Get today's date as YYYY-MM-DD string
   */
  private getTodayKey(): string {
    return this.formatDateKey(new Date());
  }
  
  /**
   * Format date as YYYY-MM-DD
   */
  private formatDateKey(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  /**
   * Calculate next reset time (midnight of next day)
   */
  private getNextResetTime(): Date {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  }
}

// Export singleton instance
export const rateLimitService = new RateLimitService();