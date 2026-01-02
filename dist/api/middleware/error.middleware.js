"use strict";
/**
 * Global Error Handling Middleware
 *
 * Catches all unhandled errors and returns consistent error responses.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = exports.notFoundHandler = exports.errorHandler = void 0;
const types_1 = require("../../types");
const logger_1 = require("../../utils/logger");
const constants_1 = require("../../config/constants");
const errorHandler = (error, req, res, next) => {
    // Log the error
    logger_1.logger.error('Unhandled error', {
        error: error.message,
        stack: constants_1.CONFIG.IS_PRODUCTION ? undefined : error.stack,
        path: req.path,
        method: req.method,
        ip: req.ip,
        timestamp: new Date().toISOString(),
    });
    // Handle known application errors
    if (error instanceof types_1.AppError) {
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
    const message = constants_1.CONFIG.IS_PRODUCTION
        ? 'Internal server error'
        : error.message;
    res.status(500).json({
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message,
            timestamp: new Date().toISOString(),
            ...(constants_1.CONFIG.IS_PRODUCTION ? {} : { stack: error.stack }),
        },
    });
};
exports.errorHandler = errorHandler;
/**
 * 404 Not Found middleware
 */
const notFoundHandler = (req, res) => {
    logger_1.logger.warn('Route not found', {
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
exports.notFoundHandler = notFoundHandler;
/**
 * Async error wrapper for route handlers
 * Prevents unhandled promise rejections in async routes
 */
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
