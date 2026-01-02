import { Request, Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
export declare function rateLimitMiddleware(req: AuthRequest, res: Response, next: NextFunction): void;
export declare function updateWordCount(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=rateLimit.middleware.d.ts.map