"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextJustifier = void 0;
class TextJustifier {
    /**
     * Compte le nombre de mots dans un texte
     */
    static countWords(text) {
        if (!text || text.trim().length === 0) {
            return 0;
        }
        // Diviser par les espaces et compter les mots non vides
        const words = text.trim().split(/\s+/);
        return words.length;
    }
    /**
     * Justifie un texte complet
     */
    static justify(text) {
        console.log('🔄 Début de la justification du texte');
        // Vérifier si le texte est vide
        if (!text || text.trim().length === 0) {
            return '';
        }
        // 1. Diviser le texte en mots
        const words = text.trim().split(/\s+/);
        // 2. Préparer les lignes
        const lines = [];
        let currentLine = [];
        let currentLength = 0;
        // 3. Construire les lignes
        for (const word of words) {
            const wordLength = word.length;
            // Vérifier si le mot dépasse la limite de ligne
            if (wordLength > this.LINE_LENGTH) {
                throw new Error(`Le mot "${word}" dépasse ${this.LINE_LENGTH} caractères`);
            }
            // Calculer la longueur avec espaces
            const newLength = currentLength +
                (currentLine.length > 0 ? 1 : 0) + // Espace entre mots
                wordLength;
            // Si la ligne est trop longue, justifier la ligne courante
            if (newLength > this.LINE_LENGTH) {
                const justifiedLine = this.justifyLine(currentLine, currentLength);
                lines.push(justifiedLine);
                // Commencer une nouvelle ligne avec le mot courant
                currentLine = [word];
                currentLength = wordLength;
            }
            else {
                // Ajouter le mot à la ligne courante
                if (currentLine.length > 0) {
                    currentLength += 1; // Ajouter un espace
                }
                currentLine.push(word);
                currentLength += wordLength;
            }
        }
        // 4. Traiter la dernière ligne (ne pas justifier)
        if (currentLine.length > 0) {
            const lastLine = currentLine.join(' ');
            lines.push(lastLine);
        }
        console.log(`✅ Texte justifié en ${lines.length} lignes`);
        return lines.join('\n');
    }
    /**
     * Justifie une ligne de mots pour atteindre exactement 80 caractères
     */
    static justifyLine(words, currentLength) {
        // Cas spécial : une ligne avec un seul mot
        if (words.length === 1) {
            return words[0];
        }
        // Nombre d'espaces à ajouter
        const spacesNeeded = this.LINE_LENGTH - currentLength;
        const gaps = words.length - 1;
        // Espaces de base entre chaque mot
        const baseSpaces = Math.floor(spacesNeeded / gaps);
        const extraSpaces = spacesNeeded % gaps;
        let result = '';
        for (let i = 0; i < words.length; i++) {
            result += words[i];
            // Ajouter des espaces entre les mots (sauf après le dernier)
            if (i < words.length - 1) {
                // Ajouter les espaces de base
                result += ' '.repeat(1 + baseSpaces);
                // Ajouter un espace supplémentaire si nécessaire
                if (i < extraSpaces) {
                    result += ' ';
                }
            }
        }
        return result;
    }
}
exports.TextJustifier = TextJustifier;
// Longueur maximale d'une ligne
TextJustifier.LINE_LENGTH = 80;
//# sourceMappingURL=justify.text.js.map