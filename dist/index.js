"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = 3000;
// Stockage en mémoire
const tokens = new Map();
const rateLimits = new Map();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.text({ type: 'text/plain' }));
// 1. Endpoint pour obtenir un token
app.post('/api/token', (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email requis' });
        }
        // Validation email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Email invalide' });
        }
        // Générer token
        const token = (0, uuid_1.v4)();
        const today = new Date().toISOString().split('T')[0];
        // Stocker
        tokens.set(token, {
            email,
            createdAt: new Date()
        });
        rateLimits.set(`${token}:${today}`, {
            count: 0,
            date: today
        });
        res.status(201).json({
            token,
            email,
            createdAt: new Date().toISOString(),
            rateLimit: {
                dailyLimit: 80000,
                remaining: 80000,
                resetAt: getNextMidnight().toISOString()
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur interne' });
    }
});
// 2. Endpoint pour justifier
app.post('/api/justify', (req, res) => {
    try {
        // Vérifier le token
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Token manquant' });
        }
        const token = authHeader.substring(7);
        const tokenData = tokens.get(token);
        if (!tokenData) {
            return res.status(401).json({ error: 'Token invalide' });
        }
        // Vérifier la limite de mots
        const today = new Date().toISOString().split('T')[0];
        const limitKey = `${token}:${today}`;
        let limit = rateLimits.get(limitKey);
        if (!limit) {
            limit = { count: 0, date: today };
            rateLimits.set(limitKey, limit);
        }
        // Compter les mots
        const text = req.body;
        if (typeof text !== 'string' || !text.trim()) {
            return res.status(400).json({ error: 'Texte vide' });
        }
        const words = text.trim().split(/\s+/);
        const wordCount = words.length;
        // Vérifier la limite quotidienne
        if (limit.count + wordCount > 80000) {
            return res.status(402).json({
                error: 'Payment Required',
                message: 'Limite quotidienne de 80,000 mots atteinte',
                limit: 80000,
                used: limit.count,
                remaining: 0
            });
        }
        // Mettre à jour le compteur
        limit.count += wordCount;
        rateLimits.set(limitKey, limit);
        // Justifier le texte
        const justifiedText = justifyText(text);
        // Headers
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('X-Word-Count', wordCount.toString());
        res.setHeader('X-Line-Length', '80');
        res.setHeader('X-RateLimit-Remaining', (80000 - limit.count).toString());
        res.send(justifiedText);
    }
    catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur interne' });
    }
});
// 3. Health check
app.get('/health', (_req, res) => {
    res.json({
        status: 'OK',
        tokens: tokens.size,
        timestamp: new Date().toISOString()
    });
});
// 4. Documentation
app.get('/', (_req, res) => {
    res.send(`
    <h1>API de Justification de Texte</h1>
    <h2>Comment utiliser :</h2>
    
    <h3>1. Obtenir un token</h3>
    <pre>
POST /api/token
Content-Type: application/json

{
  "email": "votre@email.com"
}
    </pre>
    
    <h3>2. Justifier un texte</h3>
    <pre>
POST /api/justify
Authorization: Bearer VOTRE_TOKEN
Content-Type: text/plain

Votre texte à justifier ici...
    </pre>
    
    <h3>Limites :</h3>
    <ul>
      <li>80 000 mots par jour maximum</li>
      <li>Lignes de 80 caractères maximum</li>
    </ul>
    
    <p><a href="/health">Vérifier l'état de l'API</a></p>
  `);
});
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    console.log(`📚 Documentation sur http://localhost:${PORT}`);
});
// Fonction utilitaire pour obtenir minuit prochain
function getNextMidnight() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
}
// Fonction de justification
function justifyText(text) {
    const MAX_LENGTH = 80;
    const words = text.trim().split(/\s+/);
    const lines = [];
    let currentLine = [];
    let currentLength = 0;
    for (const word of words) {
        if (word.length > MAX_LENGTH) {
            throw new Error(`Mot trop long: "${word}"`);
        }
        const space = currentLine.length > 0 ? 1 : 0;
        const newLength = currentLength + space + word.length;
        if (newLength > MAX_LENGTH && currentLine.length > 0) {
            // Justifier la ligne courante
            const justifiedLine = justifyLine(currentLine, currentLength);
            lines.push(justifiedLine);
            // Recommencer avec le mot actuel
            currentLine = [word];
            currentLength = word.length;
        }
        else {
            if (currentLine.length > 0) {
                currentLength += 1; // Espace
            }
            currentLine.push(word);
            currentLength += word.length;
        }
    }
    // Dernière ligne (non justifiée)
    if (currentLine.length > 0) {
        lines.push(currentLine.join(' '));
    }
    return lines.join('\n');
}
// Justifier une ligne spécifique
function justifyLine(words, currentLength) {
    const MAX_LENGTH = 80;
    if (words.length === 1) {
        // Un seul mot : padding à droite
        return words[0] + ' '.repeat(MAX_LENGTH - words[0].length);
    }
    const spacesNeeded = MAX_LENGTH - currentLength;
    const gaps = words.length - 1;
    const baseSpaces = Math.floor(spacesNeeded / gaps);
    const extraSpaces = spacesNeeded % gaps;
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if (i < words.length - 1) {
            // Espace normal + espace de justification
            const spaces = 1 + baseSpaces + (i < extraSpaces ? 1 : 0);
            result += ' '.repeat(spaces);
        }
    }
    return result;
}
//# sourceMappingURL=index.js.map