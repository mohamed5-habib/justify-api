"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyRoutes = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const rateLimit_middleware_1 = require("../middleware/rateLimit.middleware");
const justify_text_1 = require("../utils/justify.text");
// Créer un routeur
exports.justifyRoutes = (0, express_1.Router)();
/**
 * Route principale pour justifier du texte
 * POST /api/justify
 */
exports.justifyRoutes.post('/justify', auth_middleware_1.authenticateToken, // 1. Vérifier l'authentification
rateLimit_middleware_1.rateLimitMiddleware, // 2. Vérifier la limite de mots
(req, res) => {
    try {
        console.log('📝 Début du traitement de justification');
        // 1. Récupérer le texte
        const text = req.body;
        if (!text || text.trim().length === 0) {
            return res.status(400).json({
                error: 'Texte vide',
                message: 'Le corps de la requête doit contenir du texte'
            });
        }
        // 2. Justifier le texte
        const justifiedText = justify_text_1.TextJustifier.justify(text);
        // 3. Compter les mots (déjà fait dans le middleware)
        const wordCount = justify_text_1.TextJustifier.countWords(text);
        // 4. Préparer la réponse
        console.log('✅ Texte justifié avec succès');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('X-Word-Count', wordCount.toString());
        res.setHeader('X-Line-Length', '80');
        res.send(justifiedText);
    }
    catch (error) {
        console.error('❌ Erreur de justification:', error.message);
        if (error.message.includes('dépasse 80 caractères')) {
            res.status(400).json({
                error: 'Mot trop long',
                message: error.message
            });
        }
        else {
            res.status(500).json({
                error: 'Erreur de traitement',
                message: 'Impossible de justifier le texte'
            });
        }
    }
}, rateLimit_middleware_1.updateWordCount // 4. Mettre à jour le compteur après succès
);
/**
 * Route pour vérifier le quota restant
 * GET /api/quota
 */
exports.justifyRoutes.get('/quota', auth_middleware_1.authenticateToken, (req, res) => {
    const tokenData = req.token;
    if (!tokenData) {
        return res.status(401).json({ error: 'Non authentifié' });
    }
    const remaining = tokenManager.getRemainingWords(tokenData.id);
    const used = 80000 - remaining;
    res.json({
        email: tokenData.email,
        quota: {
            dailyLimit: 80000,
            used: used,
            remaining: remaining,
            percentage: Math.round((used / 80000) * 100)
        },
        reset: 'Réinitialisation quotidienne à minuit',
        timestamp: new Date().toISOString()
    });
});
/**
 * Route pour tester la justification (sans authentification)
 * POST /api/justify/test
 */
exports.justifyRoutes.post('/justify/test', (req, res) => {
    try {
        const text = req.body;
        if (!text || text.trim().length === 0) {
            return res.status(400).json({ error: 'Texte vide' });
        }
        const justifiedText = justify_text_1.TextJustifier.justify(text);
        res.setHeader('Content-Type', 'text/plain');
        res.send(justifiedText);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
//# sourceMappingURL=justify.routes.js.map