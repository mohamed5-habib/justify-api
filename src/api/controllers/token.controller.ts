/**
 * Token Controller
 * 
 * Handles token generation and related operations.
 */

import { Request, Response } from 'express';
import { tokenService } from '../../services/TokenService';
import { rateLimitService } from '../../services/RateLimitService';
import { ValidationError } from '../../types';
import { logger } from '../../utils/logger';
import { asyncHandler } from '../middleware/error.middleware';

export class TokenController {
  /**
   * Generate a new API token
   */
  static generateToken = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;
    
    // Validate request body
    if (!email || typeof email !== 'string') {
      throw new ValidationError('Email is required and must be a string');
    }
    
    // Generate token
    const token = tokenService.generateToken(email);
    const usage = rateLimitService.getUsage(token);
    
    logger.info('New token generated', {
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
  static verifyToken = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      throw new ValidationError('Authorization header is required');
    }
    
    const [scheme, token] = authHeader.split(' ');
    
    if (scheme !== 'Bearer' || !token) {
      throw new ValidationError('Invalid authorization format');
    }
    
    const tokenData = tokenService.getToken(token);
    
    if (!tokenData) {
      res.status(404).json({
        error: {
          code: 'TOKEN_NOT_FOUND',
          message: 'Token not found or expired',
        },
      });
      return;
    }
    
    const usage = rateLimitService.getUsage(token);
    
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
}