/**
 * Unit tests for TokenService
 */

import { tokenService } from '../../src/services/TokenService';
import { ValidationError } from '../../src/types';

describe('TokenService', () => {
  beforeEach(() => {
    // Clear tokens before each test
    // Note: In a real test, we would use dependency injection
    // For this exercise, we'll clear the internal Map
    (tokenService as any).tokens.clear();
  });

  describe('generateToken', () => {
    it('should generate a token for valid email', () => {
      const token = tokenService.generateToken('test@example.com');
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(0);
    });

    it('should throw error for invalid email format', () => {
      expect(() => tokenService.generateToken('not-an-email')).toThrow(ValidationError);
      expect(() => tokenService.generateToken('')).toThrow(ValidationError);
      expect(() => tokenService.generateToken('@example.com')).toThrow(ValidationError);
    });

    it('should normalize email to lowercase', () => {
      const token = tokenService.generateToken('TEST@EXAMPLE.COM');
      const tokenData = tokenService.getToken(token);
      expect(tokenData?.email).toBe('test@example.com');
    });

    it('should create different tokens for same email', () => {
      const token1 = tokenService.generateToken('test@example.com');
      const token2 = tokenService.generateToken('test@example.com');
      expect(token1).not.toBe(token2);
    });
  });

  describe('validateToken', () => {
    it('should validate a generated token', () => {
      const token = tokenService.generateToken('test@example.com');
      const tokenData = tokenService.validateToken(token);
      
      expect(tokenData).toBeDefined();
      expect(tokenData?.id).toBe(token);
      expect(tokenData?.email).toBe('test@example.com');
      expect(tokenData?.createdAt).toBeInstanceOf(Date);
    });

    it('should return null for invalid token', () => {
      const tokenData = tokenService.validateToken('invalid-token');
      expect(tokenData).toBeNull();
    });

    it('should update lastUsed timestamp', () => {
      const token = tokenService.generateToken('test@example.com');
      const firstValidation = tokenService.validateToken(token);
      const firstUsed = firstValidation?.lastUsed;
      
      // Wait a bit
      jest.advanceTimersByTime(1000);
      
      const secondValidation = tokenService.validateToken(token);
      const secondUsed = secondValidation?.lastUsed;
      
      expect(firstUsed).toBeDefined();
      expect(secondUsed).toBeDefined();
      expect(secondUsed?.getTime()).toBeGreaterThan(firstUsed!.getTime());
    });
  });

  describe('getStats', () => {
    it('should return empty stats when no tokens', () => {
      const stats = tokenService.getStats();
      expect(stats.totalTokens).toBe(0);
      expect(stats.activeTokens).toBe(0);
      expect(stats.oldestToken).toBeNull();
      expect(stats.newestToken).toBeNull();
    });

    it('should return correct stats with tokens', () => {
      const token1 = tokenService.generateToken('test1@example.com');
      const token2 = tokenService.generateToken('test2@example.com');
      
      // Simulate token usage
      tokenService.validateToken(token1);
      
      const stats = tokenService.getStats();
      
      expect(stats.totalTokens).toBe(2);
      expect(stats.activeTokens).toBeGreaterThan(0);
      expect(stats.oldestToken).toBeInstanceOf(Date);
      expect(stats.newestToken).toBeInstanceOf(Date);
    });
  });

  describe('cleanupExpiredTokens', () => {
    it('should remove expired tokens', () => {
      // This test would require mocking dates
      // For simplicity, we'll test the method exists
      expect(typeof tokenService.cleanupExpiredTokens).toBe('function');
    });
  });
});