/**
 * Justification Controller
 * 
 * Handles text justification requests.
 */

import { Request, Response } from 'express';
import { JustificationService } from '../../services/JustificationService';
import { tokenService } from '../../services/TokenService'; // IMPORT AJOUTÉ
import { rateLimitService } from '../../services/RateLimitService'; // IMPORT AJOUTÉ
import { logger } from '../../utils/logger';
import { asyncHandler } from '../middleware/error.middleware';

export class JustifyController {
  /**
   * Justify text endpoint
   */
  static justifyText = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const text = req.body;
    const tokenId = (req as any)._tokenId;
    const wordCount = (req as any)._wordCount;
    
    // This should already be validated by middleware, but double-check
    if (typeof text !== 'string' || !text.trim()) {
      throw new Error('Invalid text input');
    }
    
    logger.info('Processing justification request', {
      tokenId: tokenId?.substring(0, 8) + '...',
      wordCount,
      textLength: text.length,
    });
    
    // Perform justification
    const justifiedText = JustificationService.justify(text);
    
    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Word-Count', wordCount.toString());
    res.setHeader('X-Line-Length', '80');
    res.setHeader('X-Justified-Lines', justifiedText.split('\n').length.toString());
    
    // Send response
    res.send(justifiedText);
    
    logger.info('Justification completed successfully', {
      tokenId: tokenId?.substring(0, 8) + '...',
      wordCount,
      outputLength: justifiedText.length,
      lineCount: justifiedText.split('\n').length,
    });
  });
  
  /**
   * Health check endpoint (optional)
   */
  static healthCheck = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const tokenStats = tokenService.getStats();
    const rateLimitStats = rateLimitService.getStats();
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      stats: {
        tokens: tokenStats,
        rateLimits: rateLimitStats,
      },
    });
  });
}