"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitMiddleware = rateLimitMiddleware;
exports.updateWordCount = updateWordCount;
const token_manager_1 = require("../utils/token.manager");
const justify_text_1 = require("../utils/justify.text");
function rateLimitMiddleware(req, res, next) {
    console.log('⚖️ Vérification du rate limiting');
    if (!req.token) {
        res.status(401).json({ error: 'Non authentifié' });
        return;
    }
    // 1. Vérifier que le corps de la requête est du texte
    if (typeof req.body !== 'string') {
        res.status(400).json({
            error: 'Type de contenu invalide',
            message: 'Le corps doit être du texte brut (text/plain)'
        });
        return;
    }
    // 2. Compter les mots
    const wordCount = justify_text_1.TextJustifier.countWords(req.body);
    console.log(`📊 Nombre de mots: ${wordCount}`);
    // 3. Vérifier la limite
    if (!token_manager_1.tokenManager.checkRateLimit(req.token.id, wordCount)) {
        const remaining = token_manager_1.tokenManager.getRemainingWords(req.token.id);
        console.log('❌ Limite quotidienne atteinte');
        res.status(402).json({
            error: 'Payment Required',
            message: 'Limite quotidienne de 80,000 mots atteinte',
            limit: 80000,
            used: 80000 - remaining,
            remaining: 0,
            reset: 'Réinitialisation à minuit'
        });
        return;
    }
    // 4. Ajouter les informations pour plus tard
    res.locals = {
        ...res.locals,
        tokenId: req.token.id,
        wordCount: wordCount
    };
    console.log('✅ Rate limit OK');
    next();
}
// Middleware pour mettre à jour le compteur après le succès
function updateWordCount(req, res, next) {
    const tokenId = res.locals.tokenId;
    const wordCount = res.locals.wordCount;
    if (tokenId && wordCount) {
        token_manager_1.tokenManager.updateWordCount(tokenId, wordCount);
    }
    next();
}
//# sourceMappingURL=rateLimit.middleware.js.map