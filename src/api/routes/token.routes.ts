/**
 * Token Routes
 */

import { Router } from 'express';
import { TokenController } from '../controllers/token.controller';

const router = Router();

/**
 * @route   POST /api/token
 * @desc    Generate a new API token
 * @access  Public
 * @body    { email: string }
 * @returns { token: string, email: string, rateLimit: object }
 */
router.post('/token', TokenController.generateToken);

/**
 * @route   GET /api/token/verify
 * @desc    Verify a token and get usage info
 * @access  Private (requires token)
 * @header  Authorization: Bearer <token>
 * @returns { valid: boolean, email: string, rateLimit: object }
 */
router.get('/token/verify', TokenController.verifyToken);

export default router;