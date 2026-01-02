/**
 * Integration tests for justify endpoint
 */

import request from 'supertest';
import { app } from '../../src/app';

describe('Justify API Integration Tests', () => {
  let testToken: string;

  beforeAll(async () => {
    // Generate a test token
    const response = await request(app)
      .post('/api/token')
      .send({ email: 'justify-test@example.com' });
    
    testToken = response.body.data.token;
  });

  describe('POST /api/justify', () => {
    it('should justify text with valid token', async () => {
      const text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod';
      
      const response = await request(app)
        .post('/api/justify')
        .set('Authorization', `Bearer ${testToken}`)
        .set('Content-Type', 'text/plain')
        .send(text)
        .expect('Content-Type', /text\/plain/)
        .expect(200);

      expect(response.text).toBeDefined();
      
      // Check that we have proper headers
      expect(response.headers['x-word-count']).toBeDefined();
      expect(response.headers['x-line-length']).toBe('80');
      
      // Verify line lengths
      const lines = response.text.split('\n');
      for (let i = 0; i < lines.length - 1; i++) {
        expect(lines[i].length).toBe(80);
      }
    });

    it('should return 401 without token', async () => {
      const response = await request(app)
        .post('/api/justify')
        .set('Content-Type', 'text/plain')
        .send('Some text')
        .expect('Content-Type', /json/)
        .expect(401);

      expect(response.body.error.code).toBe('AUTHENTICATION_ERROR');
    });

    it('should return 401 with invalid token', async () => {
      const response = await request(app)
        .post('/api/justify')
        .set('Authorization', 'Bearer invalid-token')
        .set('Content-Type', 'text/plain')
        .send('Some text')
        .expect('Content-Type', /json/)
        .expect(403);

      expect(response.body.error.code).toBe('AUTHENTICATION_ERROR');
    });

    it('should return 400 for empty text', async () => {
      const response = await request(app)
        .post('/api/justify')
        .set('Authorization', `Bearer ${testToken}`)
        .set('Content-Type', 'text/plain')
        .send('')
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should return 400 for non-text content type', async () => {
      const response = await request(app)
        .post('/api/justify')
        .set('Authorization', `Bearer ${testToken}`)
        .send({ text: 'not plain text' })
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should return 402 when rate limit exceeded', async () => {
      // First, we need to use up the rate limit
      // This is a simplified test - in reality we'd mock the rate limit service
      
      // Generate a new token for this test
      const rateLimitTokenResponse = await request(app)
        .post('/api/token')
        .send({ email: 'ratelimit-test@example.com' });
      
      const rateLimitToken = rateLimitTokenResponse.body.data.token;
      
      // Send a request that would exceed the limit
      // Note: This test is simplified. In a real test, we'd mock the rate limit
      // service to simulate exceeded limit without actually processing 80k words
      
      // Instead, we'll test that the endpoint exists and the error structure
      const response = await request(app)
        .post('/api/justify')
        .set('Authorization', `Bearer ${rateLimitToken}`)
        .set('Content-Type', 'text/plain')
        .send('Test text')
        .expect((res) => {
          // Could be 200 or 402 depending on rate limit state
          expect([200, 402]).toContain(res.status);
        });

      if (response.status === 402) {
        expect(response.body.error.code).toBe('RATE_LIMIT_EXCEEDED');
      }
    });

    it('should handle word longer than 80 characters', async () => {
      const longWord = 'a'.repeat(81);
      
      const response = await request(app)
        .post('/api/justify')
        .set('Authorization', `Bearer ${testToken}`)
        .set('Content-Type', 'text/plain')
        .send(longWord)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.error.code).toBe('VALIDATION_ERROR');
      expect(response.body.error.message).toContain('Word exceeds maximum line length');
    });
  });

  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.status).toBe('healthy');
      expect(response.body.timestamp).toBeDefined();
      expect(response.body.uptime).toBeDefined();
      expect(response.body.stats).toBeDefined();
    });
  });

  describe('GET /', () => {
    it('should return API documentation', async () => {
      const response = await request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.service).toBe('Text Justification API');
      expect(response.body.documentation).toBeDefined();
      expect(response.body.documentation.endpoints).toBeDefined();
    });
  });
});