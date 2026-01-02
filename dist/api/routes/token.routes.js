"use strict";
/**
 * Token Routes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_controller_1 = require("../controllers/token.controller");
const router = (0, express_1.Router)();
/**
 * @route   POST /api/token
 * @desc    Generate a new API token
 * @access  Public
 * @body    { email: string }
 * @returns { token: string, email: string, rateLimit: object }
 */
router.post('/token', token_controller_1.TokenController.generateToken);
/**
 * @route   GET /api/token/verify
 * @desc    Verify a token and get usage info
 * @access  Private (requires token)
 * @header  Authorization: Bearer <token>
 * @returns { valid: boolean, email: string, rateLimit: object }
 */
router.get('/token/verify', token_controller_1.TokenController.verifyToken);
exports.default = router;
