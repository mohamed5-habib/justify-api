"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
const token_manager_1 = require("../utils/token.manager");
function authenticateToken(req, res, next) {
    console.log('🔐 Vérification de l\'authentification');
    // 1. Récupérer le token depuis l'en-tête
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        console.log('❌ Aucun en-tête Authorization');
        res.status(401).json({
            error: 'Token manquant',
            message: 'Ajoutez l\'en-tête: Authorization: Bearer VOTRE_TOKEN'
        });
        return;
    }
    // 2. Extraire le token (format: Bearer TOKEN)
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        console.log('❌ Format de token invalide');
        res.status(401).json({
            error: 'Format de token invalide',
            message: 'Format attendu: Bearer VOTRE_TOKEN'
        });
        return;
    }
    const token = tokenParts[1];
    // 3. Valider le token
    const tokenData = token_manager_1.tokenManager.validateToken(token);
    if (!tokenData) {
        console.log('❌ Token invalide');
        res.status(403).json({
            error: 'Token invalide',
            message: 'Générez un nouveau token avec /api/token'
        });
        return;
    }
    console.log(`✅ Token valide pour: ${tokenData.email}`);
    // 4. Ajouter les informations du token à la requête
    req.token = tokenData;
    next();
}
//# sourceMappingURL=auth.middleware.js.map