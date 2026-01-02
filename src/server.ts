// src/server.ts
import { app } from './app';
import { CONFIG } from './config/constants';
import { logger } from './utils/logger';
import { tokenService } from './services/TokenService';
import { rateLimitService } from './services/RateLimitService';

// Create HTTP server
const server = app.listen(CONFIG.PORT, () => {
    logger.info(`🚀 Server running on port ${CONFIG.PORT}`);
    logger.info(`📊 Environment: ${CONFIG.NODE_ENV}`);
    logger.info(`🌐 URL: http://localhost:${CONFIG.PORT}`);
    logger.info(`📚 API Docs: http://localhost:${CONFIG.PORT}/api/docs`);
    logger.info(`⚡ Health Check: http://localhost:${CONFIG.PORT}/api/health`);
});

// Graceful shutdown
const gracefulShutdown = async (signal: string) => {
    logger.info(`🛑 Received ${signal}. Starting graceful shutdown...`);
    
    server.close(async () => {
        logger.info('✅ HTTP server closed');
        
        // Cleanup services
        const tokensCleaned = tokenService.cleanupExpiredTokens();
        const rateLimitsCleaned = rateLimitService.cleanupOldEntries();
        
        logger.info('🧹 Cleanup completed', {
            expiredTokens: tokensCleaned,
            oldRateLimits: rateLimitsCleaned
        });
        
        logger.info('👋 Graceful shutdown completed');
        process.exit(0);
    });
    
    // Force shutdown after 10 seconds
    setTimeout(() => {
        logger.error('⏰ Graceful shutdown timeout, forcing exit');
        process.exit(1);
    }, 10000);
};

// Handle signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught errors
process.on('uncaughtException', (error) => {
    logger.error('💥 Uncaught Exception:', error);
    gracefulShutdown('UNCAUGHT_EXCEPTION');
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
});

// Export for testing
export { server };