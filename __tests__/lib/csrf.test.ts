/**
 * CSRF protection tests
 * Tests for CSRF token generation and validation
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { generateCSRFToken, setCSRFCookie, getCSRFCookie, validateCSRFToken } from '@/lib/csrf';

// Mock the cookies module
vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

describe('CSRF Protection', () => {
  let mockCookieStore: Map<string, string>;
  let mockCookies: any;

  beforeEach(() => {
    mockCookieStore = new Map();
    mockCookies = {
      get: vi.fn((name: string) => {
        const value = mockCookieStore.get(name);
        return value ? { value } : undefined;
      }),
      set: vi.fn((name: string, value: string, options: any) => {
        mockCookieStore.set(name, value);
      }),
    };

    vi.clearAllMocks();
  });

  describe('generateCSRFToken', () => {
    it('should generate a token of correct length', () => {
      const token = generateCSRFToken();
      expect(token).toHaveLength(64); // 32 bytes * 2 (hex encoding)
    });

    it('should generate unique tokens', () => {
      const token1 = generateCSRFToken();
      const token2 = generateCSRFToken();
      expect(token1).not.toBe(token2);
    });

    it('should generate valid hex strings', () => {
      const token = generateCSRFToken();
      expect(token).toMatch(/^[a-f0-9]{64}$/);
    });
  });

  describe('setCSRFCookie', () => {
    it('should set a CSRF cookie with correct options', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      const token = await setCSRFCookie();

      expect(mockCookies.set).toHaveBeenCalledWith(
        'csrf_token',
        expect.any(String),
        expect.objectContaining({
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24,
        })
      );

      expect(token).toHaveLength(64);
    });

    it('should set secure flag in production', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      await setCSRFCookie();

      expect(mockCookies.set).toHaveBeenCalledWith(
        'csrf_token',
        expect.any(String),
        expect.objectContaining({
          secure: true,
        })
      );

      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('getCSRFCookie', () => {
    it('should return the CSRF token from cookie', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      mockCookieStore.set('csrf_token', 'test-token-123');

      const token = await getCSRFCookie();
      expect(token).toBe('test-token-123');
    });

    it('should return undefined when no cookie exists', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      const token = await getCSRFCookie();
      expect(token).toBeUndefined();
    });
  });

  describe('validateCSRFToken', () => {
    it('should always allow GET requests', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      const getRequest = new Request('https://example.com/api/test', {
        method: 'GET',
      });

      const isValid = await validateCSRFToken(getRequest);
      expect(isValid).toBe(true);
    });

    it('should always allow HEAD requests', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      const headRequest = new Request('https://example.com/api/test', {
        method: 'HEAD',
      });

      const isValid = await validateCSRFToken(headRequest);
      expect(isValid).toBe(true);
    });

    it('should validate POST requests with matching tokens', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      const token = 'a'.repeat(64);
      mockCookieStore.set('csrf_token', token);

      const postRequest = new Request('https://example.com/api/test', {
        method: 'POST',
        headers: { 'x-csrf-token': token },
      });

      const isValid = await validateCSRFToken(postRequest);
      expect(isValid).toBe(true);
    });

    it('should reject POST requests without cookie token', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      const postRequest = new Request('https://example.com/api/test', {
        method: 'POST',
        headers: { 'x-csrf-token': 'some-token' },
      });

      const isValid = await validateCSRFToken(postRequest);
      expect(isValid).toBe(false);
    });

    it('should reject POST requests without header token', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      mockCookieStore.set('csrf_token', 'cookie-token');

      const postRequest = new Request('https://example.com/api/test', {
        method: 'POST',
      });

      const isValid = await validateCSRFToken(postRequest);
      expect(isValid).toBe(false);
    });

    it('should reject POST requests with mismatched tokens', async () => {
      const { cookies } = await import('next/headers');
      vi.mocked(cookies).mockReturnValue(mockCookies);

      mockCookieStore.set('csrf_token', 'cookie-token');
      const postRequest = new Request('https://example.com/api/test', {
        method: 'POST',
        headers: { 'x-csrf-token': 'different-token' },
      });

      const isValid = await validateCSRFToken(postRequest);
      expect(isValid).toBe(false);
    });
  });
});
