"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JustificationService = void 0;
const constants_1 = require("../config/constants");
const types_1 = require("../types");
const logger_1 = require("../utils/logger");
class JustificationService {
    static MAX_LINE_LENGTH = constants_1.CONFIG.JUSTIFICATION.MAX_LINE_LENGTH;
    static SPACE = ' ';
    static NEWLINE = '\n';
    static countWords(text) {
        if (!text || typeof text !== 'string') {
            return 0;
        }
        const trimmed = text.trim();
        if (trimmed.length === 0) {
            return 0;
        }
        return trimmed.split(/\s+/).filter(word => word.length > 0).length;
    }
    static justify(text) {
        logger_1.logger.debug('Starting text justification', {
            inputLength: text?.length || 0,
            wordCount: this.countWords(text),
        });
        if (!text || typeof text !== 'string') {
            throw new types_1.ValidationError('Text is required and must be a string');
        }
        const trimmedText = text.trim();
        if (trimmedText.length === 0) {
            return '';
        }
        const words = trimmedText.split(/\s+/);
        for (const word of words) {
            if (word.length > this.MAX_LINE_LENGTH) {
                throw new types_1.ValidationError(`Word exceeds maximum line length: "${word.substring(0, 20)}..."`, { wordLength: word.length, maxLength: this.MAX_LINE_LENGTH });
            }
        }
        const lines = [];
        let currentLine = [];
        let currentLineLength = 0;
        for (const word of words) {
            const wordLength = word.length;
            const spaceCount = currentLine.length > 0 ? 1 : 0;
            const newLineLength = currentLineLength + spaceCount + wordLength;
            if (newLineLength > this.MAX_LINE_LENGTH) {
                if (currentLine.length > 0) {
                    const justifiedLine = this.justifyLine(currentLine, currentLineLength);
                    lines.push(justifiedLine);
                }
                currentLine = [word];
                currentLineLength = wordLength;
            }
            else {
                if (currentLine.length > 0) {
                    currentLineLength += 1;
                }
                currentLine.push(word);
                currentLineLength += wordLength;
            }
        }
        if (currentLine.length > 0) {
            const lastLine = currentLine.join(this.SPACE);
            lines.push(lastLine);
        }
        const result = lines.join(this.NEWLINE);
        logger_1.logger.debug('Text justification completed', {
            lineCount: lines.length,
            outputLength: result.length,
        });
        return result;
    }
    static justifyLine(words, currentLength) {
        if (words.length === 0) {
            return '';
        }
        if (words.length === 1) {
            const padding = this.SPACE.repeat(this.MAX_LINE_LENGTH - words[0].length);
            return words[0] + padding;
        }
        const totalSpacesNeeded = this.MAX_LINE_LENGTH - currentLength;
        const gaps = words.length - 1;
        const baseSpacesPerGap = Math.floor(totalSpacesNeeded / gaps);
        const extraSpaces = totalSpacesNeeded % gaps;
        let justifiedLine = '';
        for (let i = 0; i < words.length; i++) {
            justifiedLine += words[i];
            if (i < words.length - 1) {
                const spacesInThisGap = 1 + baseSpacesPerGap + (i < extraSpaces ? 1 : 0);
                justifiedLine += this.SPACE.repeat(spacesInThisGap);
            }
        }
        if (justifiedLine.length !== this.MAX_LINE_LENGTH) {
            logger_1.logger.warn('Line justification length mismatch', {
                expected: this.MAX_LINE_LENGTH,
                actual: justifiedLine.length,
                words: words.length,
            });
        }
        return justifiedLine;
    }
    static validateJustification(justifiedText) {
        const errors = [];
        const lines = justifiedText.split(this.NEWLINE);
        let maxLength = 0;
        let minLength = Infinity;
        lines.forEach((line, index) => {
            const lineNumber = index + 1;
            const length = line.length;
            maxLength = Math.max(maxLength, length);
            if (length > 0) {
                minLength = Math.min(minLength, length);
            }
            if (length > this.MAX_LINE_LENGTH) {
                errors.push(`Line ${lineNumber}: length ${length} exceeds max ${this.MAX_LINE_LENGTH}`);
            }
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
exports.JustificationService = JustificationService;
//# sourceMappingURL=JustificationService.js.map