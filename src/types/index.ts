/**
 * Type definitions for the Text Justification API
 * 
 * Keeping all types in one place ensures consistency
 * and makes refactoring easier.
 */

export interface Token {
  id: string;
  email: string;
  createdAt: Date;
  lastUsed?: Date;
}

export interface RateLimit {
  tokenId: string;
  wordCount: number;
  date: string; // YYYY-MM-DD format
  lastReset: Date;
}

export interface JustifyRequest {
  text: string;
  tokenId: string;
}

export interface TokenRequest {
  email: string;
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
}

export interface SuccessResponse<T> {
  data: T;
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}

// Custom error types for better error handling
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
    
    // Maintains proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: Record<string, any>) {
    super(400, 'VALIDATION_ERROR', message, details);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(401, 'AUTHENTICATION_ERROR', message);
    this.name = 'AuthenticationError';
  }
}

export class RateLimitError extends AppError {
  constructor(limit: number, used: number, resetTime: Date) {
    super(402, 'RATE_LIMIT_EXCEEDED', 'Daily word limit exceeded', {
      limit,
      used,
      remaining: 0,
      resetAt: resetTime.toISOString()
    });
    this.name = 'RateLimitError';
  }
}