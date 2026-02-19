/**
 * Vitest setup file
 * Global test configuration and mocks
 */

import { vi } from 'vitest';

// Mock environment variables
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';
process.env.BETTER_AUTH_SECRET = 'test-secret-for-testing-only';
process.env.BETTER_AUTH_URL = 'http://localhost:3000';
process.env.NEXT_PUBLIC_BETTER_AUTH_URL = 'http://localhost:3000';
process.env.POLAR_ACCESS_TOKEN = 'polar_test_token';
process.env.POLAR_PRODUCT_ID = 'test-product-id';

// Mock Next.js headers
vi.mock('next/headers', () => ({
  headers: vi.fn(() => new Headers()),
  cookies: vi.fn(() => ({
    get: vi.fn(),
    set: vi.fn(),
  })),
}));

// Suppress console output during tests
global.console = {
  ...console,
  error: vi.fn(),
  warn: vi.fn(),
  log: vi.fn(),
};
