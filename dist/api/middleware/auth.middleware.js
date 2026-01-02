"use strict";
/**
 * Authentication Middleware
 *
 * Validates Bearer tokens and attaches token data to the request.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const types_1 = require("../../types");
const TokenService_1 = require("../../services/TokenService");
const logger_1 = require("../../utils/logger");
const authenticateToken = (req, res, next) => {
    try {
        // Get Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new types_1.AuthenticationError('Authorization header is required');
        }
        // Check Bearer format
        const [scheme, token] = authHeader.split(' ');
        if (scheme !== 'Bearer' || !token) {
            throw new types_1.AuthenticationError('Invalid authorization format. Expected: Bearer <token>');
        }
        // Validate token
        const tokenData = TokenService_1.tokenService.validateToken(token);
        if (!tokenData) {
            throw new types_1.AuthenticationError('Invalid or expired token');
        }
        // Attach token info to request
        req.token = {
            id: tokenData.id,
            email: tokenData.email,
        };
        // Log successful authentication
        logger_1.logger.debug('Request authenticated', {
            email: tokenData.email,
            method: req.method,
            path: req.path,
        });
        next();
    }
    catch (error) {
        if (error instanceof types_1.AuthenticationError) {
            logger_1.logger.warn('Authentication failed', {
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
        }
        else {
            logger_1.logger.error('Unexpected authentication error', { error });
            res.status(500).json({
                error: {
                    code: 'INTERNAL_ERROR',
                    message: 'Internal server error during authentication',
                },
            });
        }
    }
};
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=auth.middleware.js.map