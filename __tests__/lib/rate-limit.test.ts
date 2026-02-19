/**
 * Rate limiting tests
 * Tests for in-memory rate limiting implementation
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { rateLimit, getClientIdentifier, RateLimitPresets } from '@/lib/rate-limit';

describe('rateLimit', () => {
  beforeEach(() => {
    // Clear the rate limit store before each test
    vi.clearAllMocks();
  });

  describe('rateLimit function', () => {
    it('should allow requests within the limit', async () => {
      const result = await rateLimit({
        limit: 5,
        window: 60000,
        identifier: 'test-user-1',
      });

      expect(result.success).toBe(true);
      expect(result.remaining).toBe(4);
      expect(result.limit).toBe(5);
    });

    it('should decrement remaining requests', async () => {
      const identifier = 'test-user-2';
      const limit = 3;

      const result1 = await rateLimit({ limit, window: 60000, identifier });
      expect(result1.success).toBe(true);
      expect(result1.remaining).toBe(2);

      const result2 = await rateLimit({ limit, window: 60000, identifier });
      expect(result2.success).toBe(true);
      expect(result2.remaining).toBe(1);

      const result3 = await rateLimit({ limit, window: 60000, identifier });
      expect(result3.success).toBe(true);
      expect(result3.remaining).toBe(0);
    });

    it('should block requests exceeding the limit', async () => {
      const identifier = 'test-user-3';
      const limit = 2;

      // First two requests should succeed
      await rateLimit({ limit, window: 60000, identifier });
      await rateLimit({ limit, window: 60000, identifier });

      // Third request should fail
      const result = await rateLimit({ limit, window: 60000, identifier });
      expect(result.success).toBe(false);
      expect(result.remaining).toBe(0);
    });

    it('should reset the counter after the window expires', async () => {
      const identifier = 'test-user-4';
      const window = 100; // 100ms for testing

      const result1 = await rateLimit({ limit: 1, window, identifier });
      expect(result1.success).toBe(true);

      const result2 = await rateLimit({ limit: 1, window, identifier });
      expect(result2.success).toBe(false);

      // Wait for window to expire
      await new Promise(resolve => setTimeout(resolve, 150));

      const result3 = await rateLimit({ limit: 1, window, identifier });
      expect(result3.success).toBe(true);
    });

    it('should handle different identifiers independently', async () => {
      const limit = 1;

      const result1 = await rateLimit({ limit, window: 60000, identifier: 'user-a' });
      expect(result1.success).toBe(true);

      const result2 = await rateLimit({ limit, window: 60000, identifier: 'user-a' });
      expect(result2.success).toBe(false);

      const result3 = await rateLimit({ limit, window: 60000, identifier: 'user-b' });
      expect(result3.success).toBe(true);
    });
  });

  describe('RateLimitPresets', () => {
    it('should provide STRICT preset (10 req/min)', () => {
      expect(RateLimitPresets.STRICT.limit).toBe(10);
      expect(RateLimitPresets.STRICT.window).toBe(60 * 1000);
    });

    it('should provide STANDARD preset (60 req/min)', () => {
      expect(RateLimitPresets.STANDARD.limit).toBe(60);
      expect(RateLimitPresets.STANDARD.window).toBe(60 * 1000);
    });

    it('should provide RELAXED preset (120 req/min)', () => {
      expect(RateLimitPresets.RELAXED.limit).toBe(120);
      expect(RateLimitPresets.RELAXED.window).toBe(60 * 1000);
    });

    it('should provide BURST preset (300 req/min)', () => {
      expect(RateLimitPresets.BURST.limit).toBe(300);
      expect(RateLimitPresets.BURST.window).toBe(60 * 1000);
    });
  });

  describe('getClientIdentifier', () => {
    it('should extract IP from x-forwarded-for header', () => {
      const request = new Request('https://example.com', {
        headers: { 'x-forwarded-for': '192.168.1.1, 10.0.0.1' },
      });

      const identifier = getClientIdentifier(request);
      expect(identifier).toBe('192.168.1.1');
    });

    it('should extract IP from x-real-ip header', () => {
      const request = new Request('https://example.com', {
        headers: { 'x-real-ip': '192.168.1.2' },
      });

      const identifier = getClientIdentifier(request);
      expect(identifier).toBe('192.168.1.2');
    });

    it('should fallback to user agent when no IP headers present', () => {
      const request = new Request('https://example.com', {
        headers: { 'user-agent': 'Mozilla/5.0' },
      });

      const identifier = getClientIdentifier(request);
      expect(identifier).toBe('ua:Mozilla/5.0');
    });
  });
});
