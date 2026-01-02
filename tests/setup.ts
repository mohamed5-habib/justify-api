/**
 * Jest setup file
 */

import dotenv from 'dotenv';

// Load test environment variables
dotenv.config({ path: '.env.test' });

// Mock console methods during tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Set test timeout
jest.setTimeout(10000);

// Clean up after tests
afterAll(async () => {
  // Add any global cleanup here
});

// Reset mocks between tests
afterEach(() => {
  jest.clearAllMocks();
});