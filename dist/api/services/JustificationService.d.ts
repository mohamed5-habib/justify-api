export declare class JustificationService {
    private static readonly MAX_LINE_LENGTH;
    private static readonly SPACE;
    private static readonly NEWLINE;
    static countWords(text: string): number;
    static justify(text: string): string;
    private static justifyLine;
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