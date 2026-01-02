"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRoutes = void 0;
const express_1 = require("express");
const token_manager_1 = require("../utils/token.manager");
// Créer un routeur
exports.tokenRoutes = (0, express_1.Router)();
/**
 * Route pour générer un nouveau token
 * POST /api/token
 */
exports.tokenRoutes.post('/token', (req, res) => {
    console.log('🎫 Demande de génération de token');
    try {
        // 1. Vérifier le corps de la requête
        const { email } = req.body;
        if (!email) {
            console.log('❌ Email manquant');
            return res.status(400).json({
                error: 'Email requis',
                message: 'Fournissez un email au format JSON: {"email": "votre@email.com"}'
            });
        }
        // 2. Générer le token
        const token = token_manager_1.tokenManager.generateToken(email);
        // 3. Réponse
        console.log(`✅ Token généré pour: ${email}`);
        res.status(201).json({
            success: true,
            token: token,
            email: email,
            createdAt: new Date().toISOString(),
            rateLimit: {
                dailyLimit: 80000,
                remaining: 80000,
                reset: 'Réinitialisation quotidienne à minuit'
            },
            usage: `Utilisez ce token dans l'en-tête: Authorization: Bearer ${token}`
        });
    }
    catch (error) {
        console.error('❌ Erreur:', error.message);
        if (error.message === 'Format d\'email invalide') {
            res.status(400).json({
                error: 'Email invalide',
                message: 'Fournissez un email valide (ex: utilisateur@domaine.com)'
            });
        }
        else {
            res.status(500).json({
                error: 'Erreur interne',
                message: 'Impossible de générer le token'
            });
        }
    }
});
/**
 * Route pour vérifier un token (optionnel)
 * GET /api/token/verify
 */
exports.tokenRoutes.get('/token/verify', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ valid: false, error: 'Token manquant' });
    }
    const token = authHeader.replace('Bearer ', '');
    const tokenData = token_manager_1.tokenManager.validateToken(token);
    if (tokenData) {
        res.json({
            valid: true,
            email: tokenData.email,
            createdAt: tokenData.createdAt
        });
    }
    else {
        res.status(403).json({ valid: false, error: 'Token invalide' });
    }
});
//# sourceMappingURL=token.routes.js.map