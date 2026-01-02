/**
 * Integration tests for token endpoints
 */

import request from 'supertest';
import { app } from '../../src/app';

describe('Token API Integration Tests', () => {
  describe('POST /api/token', () => {
    it('should generate token for valid email', async () => {
      const response = await request(app)
        .post('/api/token')
        .send({ email: 'test@example.com' })
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body.data).toBeDefined();
      expect(response.body.data.token).toBeDefined();
      expect(response.body.data.email).toBe('test@example.com');
      expect(response.body.data.rateLimit).toBeDefined();
      expect(response.body.data.rateLimit.dailyLimit).toBe(80000);
    });

    it('should return 400 for invalid email', async () => {
      const response = await request(app)
        .post('/api/token')
        .send({ email: 'invalid-email' })
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.error).toBeDefined();
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should return 400 for missing email', async () => {
      const response = await request(app)
        .post('/api/token')
        .send({})
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.error).toBeDefined();
    });

    it('should return 400 for empty email', async () => {
      const response = await request(app)
        .post('/api/token')
        .send({ email: '' })
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body.error).toBeDefined();
    });
  });

  describe('GET /api/token/verify', () => {
    let testToken: string;

    beforeEach(async () => {
      // Generate a test token
      const response = await request(app)
        .post('/api/token')
        .send({ email: 'verify-test@example.com' });
      
      testToken = response.body.data.token;
    });

    it('should verify valid token', async () => {
      const response = await request(app)
        .get('/api/token/verify')
        .set('Authorization', `Bearer ${testToken}`)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.data.valid).toBe(true);
      expect(response.body.data.email).toBe('verify-test@example.com');
      expect(response.body.data.rateLimit).toBeDefined();
    });

    it('should return 401 for missing authorization header', async () => {
      const response = await request(app)
        .get('/api/token/verify')
        .expect('Content-Type', /json/)
        .expect(401);

      expect(response.body.error.code).toBe('AUTHENTICATION_ERROR');
    });

    it('should return 401 for invalid token format', async () => {
      const response = await request(app)
        .get('/api/token/verify')
        .set('Authorization', 'InvalidFormat')
        .expect('Content-Type', /json/)
        .expect(401);

      expect(response.body.error.code).toBe('AUTHENTICATION_ERROR');
    });

    it('should return 404 for invalid token', async () => {
      const response = await request(app)
        .get('/api/token/verify')
        .set('Authorization', 'Bearer invalid-token-123')
        .expect('Content-Type', /json/)
        .expect(404);

      expect(response.body.error.code).toBe('TOKEN_NOT_FOUND');
    });
  });
});