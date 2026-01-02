/**
 * Authentication Middleware
 *
 * Validates Bearer tokens and attaches token data to the request.
 */
import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            token?: {
                id: string;
                email: string;
            };
        }
    }
}
export declare const authenticateToken: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map