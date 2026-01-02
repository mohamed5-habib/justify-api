import { Token } from '../types';
export declare class TokenService {
    private tokens;
    generateToken(email: string): string;
    validateToken(tokenId: string): Token | null;
    getToken(tokenId: string): Token | null;
    revokeToken(tokenId: string): boolean;
    cleanupExpiredTokens(): number;
    private isValidEmail;
    getStats(): {
        totalTokens: number;
        activeTokens: number;
        oldestToken: Date | null;
        newestToken: Date | null;
    };
}
export declare const tokenService: TokenService;
//# sourceMappingURL=TokenService.d.ts.map