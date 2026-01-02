/**
 * Unit tests for JustificationService
 */

import { JustificationService } from '../../src/services/JustificationService';

describe('JustificationService', () => {
  describe('countWords', () => {
    it('should return 0 for empty string', () => {
      expect(JustificationService.countWords('')).toBe(0);
    });

    it('should return 0 for whitespace-only string', () => {
      expect(JustificationService.countWords('   \n\t  ')).toBe(0);
    });

    it('should count single word', () => {
      expect(JustificationService.countWords('Hello')).toBe(1);
    });

    it('should count multiple words', () => {
      expect(JustificationService.countWords('Hello world')).toBe(2);
    });

    it('should handle multiple spaces between words', () => {
      expect(JustificationService.countWords('Hello   world   from   tests')).toBe(4);
    });

    it('should handle newlines and tabs', () => {
      expect(JustificationService.countWords('Hello\nworld\tfrom\rtests')).toBe(4);
    });
  });

  describe('justify', () => {
    it('should return empty string for empty input', () => {
      expect(JustificationService.justify('')).toBe('');
    });

    it('should return empty string for whitespace-only input', () => {
      expect(JustificationService.justify('   \n\t  ')).toBe('');
    });

    it('should handle single word shorter than line length', () => {
      const result = JustificationService.justify('Hello');
      expect(result.length).toBe(80);
      expect(result.startsWith('Hello')).toBe(true);
    });

    it('should handle single word exactly line length', () => {
      const word = 'a'.repeat(80);
      const result = JustificationService.justify(word);
      expect(result).toBe(word);
      expect(result.length).toBe(80);
    });

    it('should throw error for word longer than line length', () => {
      const word = 'a'.repeat(81);
      expect(() => JustificationService.justify(word)).toThrow('Word exceeds maximum line length');
    });

    it('should justify simple sentence', () => {
      const text = 'Hello world from tests';
      const result = JustificationService.justify(text);
      
      const lines = result.split('\n');
      expect(lines.length).toBe(1);
      expect(lines[0].length).toBe(80);
    });

    it('should split long text into multiple lines', () => {
      const text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
      const result = JustificationService.justify(text);
      
      const lines = result.split('\n');
      expect(lines.length).toBeGreaterThan(1);
      
      // Check all lines except last are 80 characters
      for (let i = 0; i < lines.length - 1; i++) {
        expect(lines[i].length).toBe(80);
      }
      
      // Last line should not be justified
      const lastLineWords = lines[lines.length - 1].trim().split(/\s+/);
      if (lastLineWords.length > 1) {
        expect(lines[lines.length - 1].includes('  ')).toBe(false);
      }
    });

    it('should distribute spaces evenly', () => {
      const text = 'Short test';
      const result = JustificationService.justify(text);
      
      // Count spaces between words
      const spaceCount = (result.match(/ /g) || []).length;
      const expectedSpaces = 80 - text.length + 1; // Original space becomes multiple
      expect(spaceCount).toBe(expectedSpaces);
    });

    it('should handle text with varying word lengths', () => {
      const text = 'a bb ccc dddd eeeee ffffff';
      const result = JustificationService.justify(text);
      
      const validation = JustificationService.validateJustification(result);
      expect(validation.isValid).toBe(true);
    });
  });

  describe('validateJustification', () => {
    it('should validate correctly justified text', () => {
      const text = 'a'.repeat(80);
      const validation = JustificationService.validateJustification(text);
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('should detect lines that are too long', () => {
      const text = 'a'.repeat(81);
      const validation = JustificationService.validateJustification(text);
      expect(validation.isValid).toBe(false);
      expect(validation.errors[0]).toContain('exceeds max');
    });

    it('should provide statistics', () => {
      const text = 'Hello world\n'.repeat(3);
      const validation = JustificationService.validateJustification(text);
      expect(validation.stats.lineCount).toBe(3);
      expect(validation.stats.maxLength).toBeDefined();
      expect(validation.stats.minLength).toBeDefined();
    });
  });
});