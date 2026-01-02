/**
 * Main router combining all API routes
 */

import { Router } from 'express';
import tokenRoutes from './token.routes';
import justifyRoutes from './justify.routes';

const router = Router();

// API routes
router.use(tokenRoutes);
router.use(justifyRoutes);

// Root endpoint with documentation
router.get('/', (req, res) => {
  res.json({
    service: 'Text Justification API',
    version: '1.0.0',
    documentation: {
      endpoints: [
        {
          method: 'POST',
          path: '/api/token',
          description: 'Generate API token',
          body: { email: 'string' },
        },
        {
          method: 'POST',
          path: '/api/justify',
          description: 'Justify text',
          headers: {
            Authorization: 'Bearer <token>',
            'Content-Type': 'text/plain',
          },
          body: 'Raw text to justify',
        },
      ],
      limits: {
        dailyWordLimit: 80000,
        lineLength: 80,
        rateLimitReset: 'Daily at midnight UTC',
      },
    },
  });
});

export default router;