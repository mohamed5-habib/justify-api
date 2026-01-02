"use strict";
/**
 * Type definitions for the Text Justification API
 *
 * Keeping all types in one place ensures consistency
 * and makes refactoring easier.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitError = exports.AuthenticationError = exports.ValidationError = exports.AppError = void 0;
// Custom error types for better error handling
class AppError extends Error {
    constructor(statusCode, code, message, details) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.name = 'AppError';
        // Maintains proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AppError);
        }
    }
}
exports.AppError = AppError;
class ValidationError extends AppError {
    constructor(message, details) {
        super(400, 'VALIDATION_ERROR', message, details);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
class AuthenticationError extends AppError {
    constructor(message = 'Authentication required') {
        super(401, 'AUTHENTICATION_ERROR', message);
        this.name = 'AuthenticationError';
    }
}
exports.AuthenticationError = AuthenticationError;
class RateLimitError extends AppError {
    constructor(limit, used, resetTime) {
        super(402, 'RATE_LIMIT_EXCEEDED', 'Daily word limit exceeded', {
            limit,
            used,
            remaining: 0,
            resetAt: resetTime.toISOString()
        });
        this.name = 'RateLimitError';
    }
}
exports.RateLimitError = RateLimitError;
