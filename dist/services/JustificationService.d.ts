/**
 * Text Justification Service
 *
 * Implements the justification algorithm without external libraries.
 * Follows typographic rules for text justification.
 */
export declare class JustificationService {
    private static readonly MAX_LINE_LENGTH;
    private static readonly SPACE;
    private static readonly NEWLINE;
    /**
     * Count words in a text string
     * Words are defined as sequences of non-whitespace characters
     */
    static countWords(text: string): number;
    /**
     * Main justification function
     * Transforms input text into justified text with lines of exactly MAX_LINE_LENGTH
     * (except for the last line and lines with a single word)
     */
    static justify(text: string): string;
    /**
     * Justifies a single line to exactly MAX_LINE_LENGTH
     * Handles the distribution of spaces between words
     */
    private static justifyLine;
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
    };
}
//# sourceMappingURL=JustificationService.d.ts.map