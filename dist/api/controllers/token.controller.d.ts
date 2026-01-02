/**
 * Token Controller
 *
 * Handles token generation and related operations.
 */
import { Request, Response } from 'express';
export declare class TokenController {
    /**
     * Generate a new API token
     */
    static generateToken: (req: Request, res: Response, next: import("express").NextFunction) => void;
    /**
     * Verify a token (optional endpoint)
     */
    static verifyToken: (req: Request, res: Response, next: import("express").NextFunction) => void;
}
//# sourceMappingURL=token.controller.d.ts.map