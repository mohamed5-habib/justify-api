"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
// src/server.ts
const app_1 = require("./app");
const constants_1 = require("./config/constants");
const logger_1 = require("./utils/logger");
const TokenService_1 = require("./services/TokenService");
const RateLimitService_1 = require("./services/RateLimitService");
// Create HTTP server
const server = app_1.app.listen(constants_1.CONFIG.PORT, () => {
    logger_1.logger.info(`🚀 Server running on port ${constants_1.CONFIG.PORT}`);
    logger_1.logger.info(`📊 Environment: ${constants_1.CONFIG.NODE_ENV}`);
    logger_1.logger.info(`🌐 URL: http://localhost:${constants_1.CONFIG.PORT}`);
    logger_1.logger.info(`📚 API Docs: http://localhost:${constants_1.CONFIG.PORT}/api/docs`);
    logger_1.logger.info(`⚡ Health Check: http://localhost:${constants_1.CONFIG.PORT}/api/health`);
});
exports.server = server;
// Graceful shutdown
const gracefulShutdown = async (signal) => {
    logger_1.logger.info(`🛑 Received ${signal}. Starting graceful shutdown...`);
    server.close(async () => {
        logger_1.logger.info('✅ HTTP server closed');
        // Cleanup services
        const tokensCleaned = TokenService_1.tokenService.cleanupExpiredTokens();
        const rateLimitsCleaned = RateLimitService_1.rateLimitService.cleanupOldEntries();
        logger_1.logger.info('🧹 Cleanup completed', {
            expiredTokens: tokensCleaned,
            oldRateLimits: rateLimitsCleaned
        });
        logger_1.logger.info('👋 Graceful shutdown completed');
        process.exit(0);
    });
    // Force shutdown after 10 seconds
    setTimeout(() => {
        logger_1.logger.error('⏰ Graceful shutdown timeout, forcing exit');
        process.exit(1);
    }, 10000);
};
// Handle signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
// Handle uncaught errors
process.on('uncaughtException', (error) => {
    logger_1.logger.error('💥 Uncaught Exception:', error);
    gracefulShutdown('UNCAUGHT_EXCEPTION');
});
process.on('unhandledRejection', (reason, promise) => {
    logger_1.logger.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
});
