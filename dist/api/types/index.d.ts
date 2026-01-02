export interface Token {
    id: string;
    email: string;
    createdAt: Date;
    lastUsed?: Date;
}
export interface RateLimit {
    tokenId: string;
    wordCount: number;
    date: string;
    lastReset: Date;
}
export interface JustifyRequest {
    text: string;
    tokenId: string;
}
export interface TokenRequest {
    email: string;
}
export interface ErrorResponse {
    error: {
        code: string;
        message: string;
        details?: Record<string, any>;
    };
}
export interface SuccessResponse<T> {
    data: T;
    meta?: {
        timestamp: string;
        requestId?: string;
    };
}
export declare class AppError extends Error {
    statusCode: number;
    code: string;
    details?: Record<string, any> | undefined;
    constructor(statusCode: number, code: string, message: string, details?: Record<string, any> | undefined);
}
export declare class ValidationError extends AppError {
    constructor(message: string, details?: Record<string, any>);
}
export declare class AuthenticationError extends AppError {
    constructor(message?: string);
}
export declare class RateLimitError extends AppError {
    constructor(limit: number, used: number, resetTime: Date);
}
//# sourceMappingURL=index.d.ts.map