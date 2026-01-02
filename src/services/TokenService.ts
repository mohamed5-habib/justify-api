/**
 * Token Management Service
 * 
 * Handles token generation, validation, and storage.
 * Uses in-memory storage for simplicity (as per exercise constraints).
 * In production, this would use Redis or a database.
 */

import { v4 as uuidv4 } from 'uuid';
import { Token, ValidationError } from '../types';
import { logger } from '../utils/logger';
import { CONFIG } from '../config/constants';

export class TokenService {
  private tokens: Map<string, Token> = new Map();
  
  /**
   * Generate a new API token for an email address
   */
  generateToken(email: string): string {
    logger.debug('Generating new token', { email });
    
    // Validate email format
    if (!this.isValidEmail(email)) {
      throw new ValidationError('Invalid email format');
    }
    
    // Generate unique token
    const tokenId = uuidv4();
    const now = new Date();
    
    const token: Token = {
      id: tokenId,
      email: email.toLowerCase().trim(),
      createdAt: now,
      lastUsed: now,
    };
    
    // Store token (in-memory for this exercise)
    this.tokens.set(tokenId, token);
    
    logger.info('Token generated successfully', {
      tokenId: tokenId.substring(0, 8) + '...',
      email: token.email,
    });
    
    return tokenId;
  }
  
  /**
   * Validate and retrieve a token
   */
  validateToken(tokenId: string): Token | null {
    if (!tokenId || typeof tokenId !== 'string') {
      return null;
    }
    
    const token = this.tokens.get(tokenId);
    
    if (token) {
      // Update last used timestamp
      token.lastUsed = new Date();
      this.tokens.set(tokenId, token);
      
      logger.debug('Token validated', {
        tokenId: tokenId.substring(0, 8) + '...',
        email: token.email,
      });
    } else {
      logger.warn('Invalid token attempt', {
        tokenId: tokenId.substring(0, 8) + '...',
      });
    }
    
    return token || null;
  }
  
  /**
   * Get token by ID (without updating lastUsed)
   */
  getToken(tokenId: string): Token | null {
    return this.tokens.get(tokenId) || null;
  }
  
  /**
   * Revoke a token (not required by spec, but good practice)
   */
  revokeToken(tokenId: string): boolean {
    return this.tokens.delete(tokenId);
  }
  
  /**
   * Clean up expired tokens
   */
  cleanupExpiredTokens(): number {
    const now = new Date();
    const expiryDate = new Date(
      now.getTime() - CONFIG.TOKEN.EXPIRY_DAYS * 24 * 60 * 60 * 1000
    );
    
    let removedCount = 0;
    
    for (const [tokenId, token] of this.tokens.entries()) {
      if (token.createdAt < expiryDate) {
        this.tokens.delete(tokenId);
        removedCount++;
      }
    }
    
    if (removedCount > 0) {
      logger.info('Cleaned up expired tokens', { count: removedCount });
    }
    
    return removedCount;
  }
  
  /**
   * Email validation using RFC 5322 compliant regex
   */
  private isValidEmail(email: string): boolean {
    if (!email || typeof email !== 'string') {
      return false;
    }
    
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email.trim());
  }
  
  /**
   * Get statistics about token usage
   */
  getStats(): {
    totalTokens: number;
    activeTokens: number;
    oldestToken: Date | null;
    newestToken: Date | null;
  } {
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
    
    const activeTokens = tokens.filter(
      token => token.lastUsed && token.lastUsed > activeThreshold
    ).length;
    
    const sortedByCreation = tokens.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    );
    
    return {
      totalTokens: tokens.length,
      activeTokens,
      oldestToken: sortedByCreation[0].createdAt,
      newestToken: sortedByCreation[sortedByCreation.length - 1].createdAt,
    };
  }
}

// Export singleton instance
export const tokenService = new TokenService();