"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.text({ type: 'text/plain' }));
const tokens = new Map();
const rateLimits = new Map();
// Fonctions utilitaires
function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}
function getNextMidnight() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
}
function countWords(text) {
    if (!text || typeof text !== 'string')
        return 0;
    const trimmed = text.trim();
    if (trimmed.length === 0)
        return 0;
    return trimmed.split(/\s+/).filter(word => word.length > 0).length;
}
function justifyText(text) {
    const MAX_LINE_LENGTH = 80;
    if (!text || typeof text !== 'string') {
        throw new Error('Text is required');
    }
    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
        return '';
    }
    const words = trimmedText.split(/\s+/);
    // Valider les mots
    for (const word of words) {
        if (word.length > MAX_LINE_LENGTH) {
            throw new Error(`Word exceeds maximum line length: "${word.substring(0, 20)}..."`);
        }
    }
    const lines = [];
    let currentLine = [];
    let currentLineLength = 0;
    for (const word of words) {
        const wordLength = word.length;
        const spaceCount = currentLine.length > 0 ? 1 : 0;
        const newLineLength = currentLineLength + spaceCount + wordLength;
        if (newLineLength > MAX_LINE_LENGTH) {
            if (currentLine.length > 0) {
                const justifiedLine = justifyLine(currentLine, currentLineLength);
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
        lines.push(currentLine.join(' '));
    }
    return lines.join('\n');
    function justifyLine(words, currentLength) {
        const MAX_LINE_LENGTH = 80;
        if (words.length === 1) {
            return words[0] + ' '.repeat(MAX_LINE_LENGTH - words[0].length);
        }
        const totalSpacesNeeded = MAX_LINE_LENGTH - currentLength;
        const gaps = words.length - 1;
        const baseSpacesPerGap = Math.floor(totalSpacesNeeded / gaps);
        const extraSpaces = totalSpacesNeeded % gaps;
        let justifiedLine = '';
        for (let i = 0; i < words.length; i++) {
            justifiedLine += words[i];
            if (i < words.length - 1) {
                const spacesInThisGap = 1 + baseSpacesPerGap + (i < extraSpaces ? 1 : 0);
                justifiedLine += ' '.repeat(spacesInThisGap);
            }
        }
        return justifiedLine;
    }
}
// 1. Route pour générer un token
app.post('/api/token', (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email requis' });
        }
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Email invalide' });
        }
        const token = (0, uuid_1.v4)();
        const today = getTodayKey();
        tokens.set(token, {
            id: token,
            email: email.toLowerCase().trim(),
            createdAt: new Date(),
            lastUsed: new Date()
        });
        rateLimits.set(`${token}:${today}`, {
            tokenId: token,
            wordCount: 0,
            date: today,
            lastReset: new Date()
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
        console.error('Erreur génération token:', error);
        res.status(500).json({ error: 'Erreur interne' });
    }
});
// 2. Route pour justifier
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
        // Vérifier la limite
        const today = getTodayKey();
        const limitKey = `${token}:${today}`;
        let limit = rateLimits.get(limitKey);
        if (!limit) {
            limit = {
                tokenId: token,
                wordCount: 0,
                date: today,
                lastReset: new Date()
            };
            rateLimits.set(limitKey, limit);
        }
        // Compter les mots
        const text = req.body;
        if (typeof text !== 'string' || !text.trim()) {
            return res.status(400).json({ error: 'Texte vide' });
        }
        const wordCount = countWords(text);
        // Vérifier la limite quotidienne
        if (limit.wordCount + wordCount > 80000) {
            return res.status(402).json({
                error: 'Payment Required',
                message: 'Limite quotidienne de 80,000 mots atteinte',
                limit: 80000,
                used: limit.wordCount,
                remaining: 0,
                resetAt: getNextMidnight().toISOString()
            });
        }
        // Mettre à jour le compteur
        limit.wordCount += wordCount;
        rateLimits.set(limitKey, limit);
        // Justifier le texte
        const justifiedText = justifyText(text);
        // Headers
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('X-Word-Count', wordCount.toString());
        res.setHeader('X-Line-Length', '80');
        res.setHeader('X-RateLimit-Remaining', (80000 - limit.wordCount).toString());
        res.setHeader('X-RateLimit-Limit', '80000');
        res.setHeader('X-RateLimit-Reset', getNextMidnight().toISOString());
        res.send(justifiedText);
    }
    catch (error) {
        console.error('Erreur justification:', error);
        if (error.message.includes('exceeds maximum line length')) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Erreur interne' });
        }
    }
});
// 3. Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        tokens: tokens.size,
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});
// 4. Page d'accueil avec design moderne
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Text Justify API - Tictactrip</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Inter', sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                color: #333;
                line-height: 1.6;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 40px 20px;
            }
            .header {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 40px;
                margin-bottom: 30px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            }
            .logo {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 20px;
            }
            .logo h1 {
                font-size: 2.5rem;
                background: linear-gradient(135deg, #4361ee, #3a0ca3);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .stat-card {
                background: white;
                border-radius: 12px;
                padding: 25px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease;
            }
            .stat-card:hover {
                transform: translateY(-5px);
            }
            .docs {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 30px;
                margin: 40px 0;
            }
            .endpoint {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            }
            .endpoint-header {
                background: linear-gradient(135deg, #4361ee, #3a0ca3);
                color: white;
                padding: 20px;
                font-weight: 600;
            }
            .endpoint-body {
                padding: 25px;
            }
            .code {
                background: #1e293b;
                color: #e2e8f0;
                padding: 20px;
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                margin: 15px 0;
                overflow-x: auto;
            }
            .btn {
                display: inline-block;
                background: linear-gradient(135deg, #4361ee, #3a0ca3);
                color: white;
                padding: 12px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 20px;
                transition: transform 0.3s ease;
            }
            .btn:hover {
                transform: translateY(-2px);
            }
            @media (max-width: 768px) {
                .container { padding: 20px; }
                .header { padding: 25px; }
                .logo h1 { font-size: 2rem; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <h1>📝 Text Justify API</h1>
                </div>
                <p>API professionnelle de justification de texte avec authentification et rate limiting</p>
                
                <div class="stats">
                    <div class="stat-card">
                        <div style="font-size: 2rem; color: #4361ee; margin-bottom: 10px;">${tokens.size}</div>
                        <div style="color: #666;">Tokens générés</div>
                    </div>
                    <div class="stat-card">
                        <div style="font-size: 2rem; color: #3a0ca3; margin-bottom: 10px;">80,000</div>
                        <div style="color: #666;">Mots/jour/token</div>
                    </div>
                    <div class="stat-card">
                        <div style="font-size: 2rem; color: #7209b7; margin-bottom: 10px;">80</div>
                        <div style="color: #666;">Caractères/ligne</div>
                    </div>
                </div>
            </div>
            
            <div class="docs">
                <div class="endpoint">
                    <div class="endpoint-header">POST /api/token</div>
                    <div class="endpoint-body">
                        <h3>Générer un token</h3>
                        <div class="code">
{
  "email": "votre@email.com"
}
                        </div>
                        <a href="#test-token" class="btn">Tester</a>
                    </div>
                </div>
                
                <div class="endpoint">
                    <div class="endpoint-header">POST /api/justify</div>
                    <div class="endpoint-body">
                        <h3>Justifier du texte</h3>
                        <div class="code">
Authorization: Bearer VOTRE_TOKEN
Content-Type: text/plain

Votre texte à justifier...
                        </div>
                        <a href="#test-justify" class="btn">Tester</a>
                    </div>
                </div>
                
                <div class="endpoint">
                    <div class="endpoint-header">GET /api/health</div>
                    <div class="endpoint-body">
                        <h3>Vérifier l'état</h3>
                        <div class="code">
{
  "status": "healthy",
  "tokens": ${tokens.size},
  "timestamp": "${new Date().toISOString()}"
}
                        </div>
                        <a href="/api/health" class="btn" target="_blank">Vérifier</a>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; color: white; margin-top: 40px; padding: 20px;">
                <p>API développée pour le test technique Tictactrip</p>
                <p style="opacity: 0.8;">TypeScript • Express • UUID • Rate Limiting</p>
            </div>
        </div>
    </body>
    </html>
  `);
});
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(` Serveur démarré sur http://localhost:${PORT}`);
    console.log(` Documentation sur http://localhost:${PORT}`);
});
