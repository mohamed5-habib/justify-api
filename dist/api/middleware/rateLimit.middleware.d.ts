/**
 * Rate Limiting Middleware
 *
 * Enforces daily word limit per token.
 * Returns 402 Payment Required when limit exceeded.
 */
import { Request, Response, NextFunction } from 'express';
export declare const rateLimitMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Middleware to increment word count after successful processing
 * Should be placed after the justify route handler
 */
export declare const incrementWordCount: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=rateLimit.middleware.d.ts.map