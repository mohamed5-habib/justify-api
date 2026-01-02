/**
 * Token Management Service
 *
 * Handles token generation, validation, and storage.
 * Uses in-memory storage for simplicity (as per exercise constraints).
 * In production, this would use Redis or a database.
 */
import { Token } from '../types';
export declare class TokenService {
    private tokens;
    /**
     * Generate a new API token for an email address
     */
    generateToken(email: string): string;
    /**
     * Validate and retrieve a token
     */
    validateToken(tokenId: string): Token | null;
    /**
     * Get token by ID (without updating lastUsed)
     */
    getToken(tokenId: string): Token | null;
    /**
     * Revoke a token (not required by spec, but good practice)
     */
    revokeToken(tokenId: string): boolean;
    /**
     * Clean up expired tokens
     */
    cleanupExpiredTokens(): number;
    /**
     * Email validation using RFC 5322 compliant regex
     */
    private isValidEmail;
    /**
     * Get statistics about token usage
     */
    getStats(): {
        totalTokens: number;
        activeTokens: number;
        oldestToken: Date | null;
        newestToken: Date | null;
    };
}
export declare const tokenService: TokenService;
//# sourceMappingURL=TokenService.d.ts.map