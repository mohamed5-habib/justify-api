/**
 * Global Error Handling Middleware
 *
 * Catches all unhandled errors and returns consistent error responses.
 */
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../types';
export declare const errorHandler: (error: Error | AppError, req: Request, res: Response, next: NextFunction) => void;
/**
 * 404 Not Found middleware
 */
export declare const notFoundHandler: (req: Request, res: Response) => void;
/**
 * Async error wrapper for route handlers
 * Prevents unhandled promise rejections in async routes
 */
export declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error.middleware.d.ts.map