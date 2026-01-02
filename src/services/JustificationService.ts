/**
 * Text Justification Service
 * 
 * Implements the justification algorithm without external libraries.
 * Follows typographic rules for text justification.
 */

import { CONFIG } from '../config/constants';
import { ValidationError } from '../types';
import { logger } from '../utils/logger';

export class JustificationService {
  private static readonly MAX_LINE_LENGTH = CONFIG.JUSTIFICATION.MAX_LINE_LENGTH;
  private static readonly SPACE = ' ';
  private static readonly NEWLINE = '\n';

  /**
   * Count words in a text string
   * Words are defined as sequences of non-whitespace characters
   */
  static countWords(text: string): number {
    if (!text || typeof text !== 'string') {
      return 0;
    }
    
    const trimmed = text.trim();
    if (trimmed.length === 0) {
      return 0;
    }
    
    // Split by whitespace and filter out empty strings
    return trimmed.split(/\s+/).filter(word => word.length > 0).length;
  }

  /**
   * Main justification function
   * Transforms input text into justified text with lines of exactly MAX_LINE_LENGTH
   * (except for the last line and lines with a single word)
   */
  static justify(text: string): string {
    logger.debug('Starting text justification', {
      inputLength: text?.length || 0,
      wordCount: this.countWords(text),
    });

    // Validate input
    if (!text || typeof text !== 'string') {
      throw new ValidationError('Text is required and must be a string');
    }

    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
      return '';
    }

    // Split into words
    const words = trimmedText.split(/\s+/);
    
    // Validate individual words
    for (const word of words) {
      if (word.length > this.MAX_LINE_LENGTH) {
        throw new ValidationError(
          `Word exceeds maximum line length: "${word.substring(0, 20)}..."`,
          { wordLength: word.length, maxLength: this.MAX_LINE_LENGTH }
        );
      }
    }

    // Build justified lines
    const lines: string[] = [];
    let currentLine: string[] = [];
    let currentLineLength = 0;

    for (const word of words) {
      const wordLength = word.length;
      
      // Calculate what the line length would be if we add this word
      const spaceCount = currentLine.length > 0 ? 1 : 0;
      const newLineLength = currentLineLength + spaceCount + wordLength;

      if (newLineLength > this.MAX_LINE_LENGTH) {
        // Current line is full, justify it and start a new one
        if (currentLine.length > 0) {
          const justifiedLine = this.justifyLine(currentLine, currentLineLength);
          lines.push(justifiedLine);
        }
        
        // Start new line with current word
        currentLine = [word];
        currentLineLength = wordLength;
      } else {
        // Add word to current line
        if (currentLine.length > 0) {
          currentLineLength += 1; // Account for space
        }
        currentLine.push(word);
        currentLineLength += wordLength;
      }
    }

    // Handle the last line (no justification)
    if (currentLine.length > 0) {
      const lastLine = currentLine.join(this.SPACE);
      lines.push(lastLine);
    }

    const result = lines.join(this.NEWLINE);
    
    logger.debug('Text justification completed', {
      lineCount: lines.length,
      outputLength: result.length,
    });

    return result;
  }

  /**
   * Justifies a single line to exactly MAX_LINE_LENGTH
   * Handles the distribution of spaces between words
   */
  private static justifyLine(words: string[], currentLength: number): string {
    if (words.length === 0) {
      return '';
    }

    // Single word: pad with spaces to reach MAX_LINE_LENGTH
    if (words.length === 1) {
      const padding = this.SPACE.repeat(this.MAX_LINE_LENGTH - words[0].length);
      return words[0] + padding;
    }

    // Calculate space distribution
    const totalSpacesNeeded = this.MAX_LINE_LENGTH - currentLength;
    const gaps = words.length - 1;
    
    const baseSpacesPerGap = Math.floor(totalSpacesNeeded / gaps);
    const extraSpaces = totalSpacesNeeded % gaps;

    let justifiedLine = '';
    
    for (let i = 0; i < words.length; i++) {
      justifiedLine += words[i];
      
      // Add spaces between words (not after the last word)
      if (i < words.length - 1) {
        // Normal space + extra distributed spaces
        const spacesInThisGap = 1 + baseSpacesPerGap + (i < extraSpaces ? 1 : 0);
        justifiedLine += this.SPACE.repeat(spacesInThisGap);
      }
    }

    // Verify the result (sanity check)
    if (justifiedLine.length !== this.MAX_LINE_LENGTH) {
      logger.warn('Line justification length mismatch', {
        expected: this.MAX_LINE_LENGTH,
        actual: justifiedLine.length,
        words: words.length,
      });
    }

    return justifiedLine;
  }

  /**
   * Validates that a justified text conforms to the rules
   * Used primarily for testing
   */
  static validateJustification(justifiedText: string): {
    isValid: boolean;
    errors: string[];
    stats: {
      lineCount: number;
      maxLength: number;
      minLength: number;
    };
  } {
    const errors: string[] = [];
    const lines = justifiedText.split(this.NEWLINE);
    
    let maxLength = 0;
    let minLength = Infinity;

    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const length = line.length;
      
      // Update stats
      maxLength = Math.max(maxLength, length);
      if (length > 0) {
        minLength = Math.min(minLength, length);
      }

      // Check rules
      if (length > this.MAX_LINE_LENGTH) {
        errors.push(`Line ${lineNumber}: length ${length} exceeds max ${this.MAX_LINE_LENGTH}`);
      }
      
      // For all lines except the last, they should be exactly MAX_LINE_LENGTH
      // (or contain only one word, which is padded)
      if (index < lines.length - 1) {
        if (length !== this.MAX_LINE_LENGTH) {
          const words = line.trim().split(/\s+/);
          if (words.length > 1) {
            errors.push(`Line ${lineNumber}: length ${length}, expected ${this.MAX_LINE_LENGTH}`);
          }
        }
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      stats: {
        lineCount: lines.length,
        maxLength,
        minLength: minLength === Infinity ? 0 : minLength,
      },
    };
  }
}