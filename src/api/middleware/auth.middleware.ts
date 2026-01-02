/**
 * Authentication Middleware
 * 
 * Validates Bearer tokens and attaches token data to the request.
 */

import { Request, Response, NextFunction } from 'express';
import { AuthenticationError } from '../../types';
import { tokenService } from '../../services/TokenService';
import { logger } from '../../utils/logger';

// Extend Express Request type to include token
declare global {
  namespace Express {
    interface Request {
      token?: {
        id: string;
        email: string;
      };
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      throw new AuthenticationError('Authorization header is required');
    }
    
    // Check Bearer format
    const [scheme, token] = authHeader.split(' ');
    
    if (scheme !== 'Bearer' || !token) {
      throw new AuthenticationError(
        'Invalid authorization format. Expected: Bearer <token>'
      );
    }
    
    // Validate token
    const tokenData = tokenService.validateToken(token);
    
    if (!tokenData) {
      throw new AuthenticationError('Invalid or expired token');
    }
    
    // Attach token info to request
    req.token = {
      id: tokenData.id,
      email: tokenData.email,
    };
    
    // Log successful authentication
    logger.debug('Request authenticated', {
      email: tokenData.email,
      method: req.method,
      path: req.path,
    });
    
    next();
  } catch (error) {
    if (error instanceof AuthenticationError) {
      logger.warn('Authentication failed', {
        error: error.message,
        ip: req.ip,
        path: req.path,
      });
      
      res.status(error.statusCode).json({
        error: {
          code: error.code,
          message: error.message,
        },
      });
    } else {
      logger.error('Unexpected authentication error', { error });
      res.status(500).json({
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Internal server error during authentication',
        },
      });
    }
  }
};