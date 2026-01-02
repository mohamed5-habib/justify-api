/**
 * Justification Controller
 *
 * Handles text justification requests.
 */
import { Request, Response } from 'express';
export declare class JustifyController {
    /**
     * Justify text endpoint
     */
    static justifyText: (req: Request, res: Response, next: import("express").NextFunction) => void;
    /**
     * Health check endpoint (optional)
     */
    static healthCheck: (req: Request, res: Response, next: import("express").NextFunction) => void;
}
//# sourceMappingURL=justify.controller.d.ts.map