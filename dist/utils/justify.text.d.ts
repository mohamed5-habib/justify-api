export declare class TextJustifier {
    private static readonly LINE_LENGTH;
    /**
     * Compte le nombre de mots dans un texte
     */
    static countWords(text: string): number;
    /**
     * Justifie un texte complet
     */
    static justify(text: string): string;
    /**
     * Justifie une ligne de mots pour atteindre exactement 80 caractères
     */
    private static justifyLine;
}
//# sourceMappingURL=justify.text.d.ts.map