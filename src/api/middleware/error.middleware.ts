/**
 * Global Error Handling Middleware
 * 
 * Catches all unhandled errors and returns consistent error responses.
 */

import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../types';
import { logger } from '../../utils/logger';
import { CONFIG } from '../../config/constants';

export const errorHandler = (
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Log the error
  logger.error('Unhandled error', {
    error: error.message,
    stack: CONFIG.IS_PRODUCTION ? undefined : error.stack,
    path: req.path,
    method: req.method,
    ip: req.ip,
    timestamp: new Date().toISOString(),
  });
  
  // Handle known application errors
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message,
        details: error.details,
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }
  
  // Handle validation errors (Joi, etc.)
  if (error.name === 'ValidationError') {
    res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: error.message,
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }
  
  // Handle syntax errors (malformed JSON, etc.)
  if (error instanceof SyntaxError) {
    res.status(400).json({
      error: {
        code: 'INVALID_REQUEST',
        message: 'Malformed request',
        timestamp: new Date().toISOString(),
      },
    });
    return;
  }
  
  // Default 500 error for unknown errors
  // In production, don't expose internal error details
  const message = CONFIG.IS_PRODUCTION
    ? 'Internal server error'
    : error.message;
  
  res.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message,
      timestamp: new Date().toISOString(),
      ...(CONFIG.IS_PRODUCTION ? {} : { stack: error.stack }),
    },
  });
};

/**
 * 404 Not Found middleware
 */
export const notFoundHandler = (req: Request, res: Response): void => {
  logger.warn('Route not found', {
    path: req.path,
    method: req.method,
    ip: req.ip,
  });
  
  res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message: `Cannot ${req.method} ${req.path}`,
      timestamp: new Date().toISOString(),
    },
  });
};

/**
 * Async error wrapper for route handlers
 * Prevents unhandled promise rejections in async routes
 */
export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};