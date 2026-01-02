/**
 * Rate Limiting Middleware
 * 
 * Enforces daily word limit per token.
 * Returns 402 Payment Required when limit exceeded.
 */

import { Request, Response, NextFunction } from 'express';
import { RateLimitError, ValidationError } from '../../types';
import { rateLimitService } from '../../services/RateLimitService';
import { JustificationService } from '../../services/JustificationService';
import { logger } from '../../utils/logger';

export const rateLimitMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Ensure token is attached (should come after auth middleware)
    if (!req.token) {
      throw new ValidationError('Token not found in request');
    }
    
    // Validate request body
    const text = req.body;
    
    if (typeof text !== 'string') {
      throw new ValidationError(
        'Request body must be text/plain content type'
      );
    }
    
    if (!text.trim()) {
      throw new ValidationError('Text cannot be empty');
    }
    
    // Count words in the request
    const wordCount = JustificationService.countWords(text);
    
    if (wordCount === 0) {
      throw new ValidationError('Text contains no words');
    }
    
    // Check rate limit
    const { allowed, remaining, resetAt } = rateLimitService.canProcessWords(
      req.token.id,
      wordCount
    );
    
    if (!allowed) {
      throw new RateLimitError(
        80000,
        80000 - remaining,
        resetAt
      );
    }
    
    // Attach word count to request for later use
    req.body = text; // Keep original text
    (req as any)._wordCount = wordCount; // Store word count
    (req as any)._tokenId = req.token.id; // Store token ID
    
    logger.debug('Rate limit check passed', {
      tokenId: req.token.id.substring(0, 8) + '...',
      wordCount,
      remaining,
      email: req.token.email,
    });
    
    next();
  } catch (error) {
    if (error instanceof RateLimitError) {
      logger.warn('Rate limit exceeded', {
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
    } else if (error instanceof ValidationError) {
      res.status(error.statusCode).json({
        error: {
          code: error.code,
          message: error.message,
        },
      });
    } else {
      logger.error('Unexpected error in rate limit middleware', { error });
      res.status(500).json({
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Internal server error',
        },
      });
    }
  }
};

/**
 * Middleware to increment word count after successful processing
 * Should be placed after the justify route handler
 */
export const incrementWordCount = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const tokenId = (req as any)._tokenId;
    const wordCount = (req as any)._wordCount;
    
    if (tokenId && wordCount) {
      rateLimitService.incrementWordCount(tokenId, wordCount);
      
      // Add rate limit headers to response
      const usage = rateLimitService.getUsage(tokenId);
      
      res.setHeader('X-RateLimit-Limit', usage.limit.toString());
      res.setHeader('X-RateLimit-Remaining', usage.remaining.toString());
      res.setHeader('X-RateLimit-Reset', usage.resetAt.toISOString());
    }
    
    next();
  } catch (error) {
    // Don't fail the request if we can't update rate limit
    // Just log the error and continue
    logger.error('Failed to increment word count', { error });
    next();
  }
};