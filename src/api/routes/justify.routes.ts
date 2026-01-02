/**
 * Justify Routes
 */

import { Router } from 'express';
import { JustifyController } from '../controllers/justify.controller';
import { authenticateToken } from '../middleware/auth.middleware';
import { rateLimitMiddleware, incrementWordCount } from '../middleware/rateLimit.middleware';

const router = Router();

/**
 * @route   POST /api/justify
 * @desc    Justify text to 80 characters per line
 * @access  Private (requires token)
 * @header  Authorization: Bearer <token>
 * @header  Content-Type: text/plain
 * @body    Raw text to justify
 * @returns Justified text (text/plain)
 */
router.post(
  '/justify',
  authenticateToken,
  rateLimitMiddleware,
  JustifyController.justifyText,
  incrementWordCount // Update rate limit after successful processing
);

/**
 * @route   GET /api/health
 * @desc    Health check endpoint
 * @access  Public
 * @returns API status and statistics
 */
router.get('/health', JustifyController.healthCheck);

export default router;