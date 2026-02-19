/**
 * Signup API route tests
 * Tests for user signup endpoint with rate limiting and CSRF protection
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { POST } from '@/app/api/auth/signup/route';
import { NextRequest } from 'next/server';

// Mock dependencies
vi.mock('@/lib/auth', () => ({
  auth: {
    api: {
      signInEmail: vi.fn(),
    },
  },
}));

vi.mock('@/lib/polar-sync', () => ({
  polarSync: {
    customerExists: vi.fn(),
    handleExistingCustomer: vi.fn(),
  },
}));

vi.mock('@/lib/db', () => ({
  default: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  },
}));

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(),
  getClientIdentifier: vi.fn(() => 'test-ip'),
  RateLimitPresets: {
    STRICT: { limit: 10, window: 60000 },
  },
}));

vi.mock('@/lib/csrf', () => ({
  requireCSRF: vi.fn(),
}));

describe('POST /api/auth/signup', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('rate limiting', () => {
    it('should return 429 when rate limit is exceeded', async () => {
      const { rateLimit } = await import('@/lib/rate-limit');
      vi.mocked(rateLimit).mockResolvedValue({
        success: false,
        limit: 10,
        remaining: 0,
        reset: Date.now() + 60000,
      });

      const request = new NextRequest('https://example.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'Test1234',
          name: 'Test User',
        }),
      });

      const response = await POST(request);
      expect(response.status).toBe(429);

      const data = await response.json();
      expect(data.error).toBe('Too many signup attempts');
    });

    it('should include rate limit headers when limit exceeded', async () => {
      const { rateLimit } = await import('@/lib/rate-limit');
      const resetTime = Date.now() + 60000;

      vi.mocked(rateLimit).mockResolvedValue({
        success: false,
        limit: 10,
        remaining: 0,
        reset: resetTime,
      });

      const request = new NextRequest('https://example.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'Test1234',
        }),
      });

      const response = await POST(request);

      expect(response.headers.get('X-RateLimit-Limit')).toBe('10');
      expect(response.headers.get('X-RateLimit-Remaining')).toBe('0');
      expect(response.headers.get('X-RateLimit-Reset')).toBe(resetTime.toString());
      expect(response.headers.get('Retry-After')).toBeDefined();
    });
  });

  describe('CSRF protection', () => {
    it('should return 403 when CSRF token is invalid', async () => {
      const { rateLimit } = await import('@/lib/rate-limit');
      const { requireCSRF } = await import('@/lib/csrf');

      vi.mocked(rateLimit).mockResolvedValue({
        success: true,
        limit: 10,
        remaining: 9,
        reset: Date.now() + 60000,
      });

      vi.mocked(requireCSRF).mockRejectedValue(new Error('Invalid CSRF token'));

      const request = new NextRequest('https://example.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'Test1234',
        }),
      });

      const response = await POST(request);
      expect(response.status).toBe(403);

      const data = await response.json();
      expect(data.error).toBe('Invalid CSRF token');
    });
  });

  describe('input validation', () => {
    it('should return 400 for invalid email', async () => {
      const { rateLimit } = await import('@/lib/rate-limit');
      const { requireCSRF } = await import('@/lib/csrf');

      vi.mocked(rateLimit).mockResolvedValue({
        success: true,
        limit: 10,
        remaining: 9,
        reset: Date.now() + 60000,
      });

      vi.mocked(requireCSRF).mockResolvedValue(undefined);

      const request = new NextRequest('https://example.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: 'invalid-email',
          password: 'Test1234',
        }),
      });

      const response = await POST(request);
      expect(response.status).toBe(400);

      const data = await response.json();
      expect(data.error).toBe('Invalid input data');
    });

    it('should return 400 for weak password', async () => {
      const { rateLimit } = await import('@/lib/rate-limit');
      const { requireCSRF } = await import('@/lib/csrf');

      vi.mocked(rateLimit).mockResolvedValue({
        success: true,
        limit: 10,
        remaining: 9,
        reset: Date.now() + 60000,
      });

      vi.mocked(requireCSRF).mockResolvedValue(undefined);

      const request = new NextRequest('https://example.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'weak',
        }),
      });

      const response = await POST(request);
      expect(response.status).toBe(400);

      const data = await response.json();
      expect(data.error).toBe('Invalid input data');
    });
  });

  describe('user creation', () => {
    it('should return 400 when user already exists', async () => {
      const { rateLimit } = await import('@/lib/rate-limit');
      const { requireCSRF } = await import('@/lib/csrf');
      const prisma = await import('@/lib/db');
      const { polarSync } = await import('@/lib/polar-sync');

      vi.mocked(rateLimit).mockResolvedValue({
        success: true,
        limit: 10,
        remaining: 9,
        reset: Date.now() + 60000,
      });

      vi.mocked(requireCSRF).mockResolvedValue(undefined);

      vi.mocked(polarSync.customerExists).mockResolvedValue(false);
      vi.mocked(prisma.user.findUnique).mockResolvedValue({
        id: '123',
        email: 'test@example.com',
        name: 'Test User',
      });

      const request = new NextRequest('https://example.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'Test1234',
          name: 'Test User',
        }),
      });

      const response = await POST(request);
      expect(response.status).toBe(400);

      const data = await response.json();
      expect(data.error).toBe('User with this email already exists');
    });
  });
});
