/**
 * Rate limiting utilities for API routes
 * Uses in-memory storage for development. For production, consider using Redis or Upstash.
 */

interface RateLimitStore {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitStore>();

/**
 * Clean up expired entries from the rate limit store
 */
function cleanupStore() {
  const now = Date.now();
  for (const [key, value] of store.entries()) {
    if (now > value.resetTime) {
      store.delete(key);
    }
  }
}

/**
 * Rate limit options
 */
export interface RateLimitOptions {
  /** Maximum number of requests allowed in the window */
  limit: number;
  /** Time window in milliseconds */
  window: number;
  /** Custom identifier generator (defaults to IP address) */
  identifier?: string;
}

/**
 * Rate limit result
 */
export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Check if a request should be rate limited
 * @param options - Rate limit configuration options
 * @returns Rate limit result
 */
export async function rateLimit(options: RateLimitOptions): Promise<RateLimitResult> {
  const { limit, window, identifier } = options;
  const key = identifier || 'default';
  const now = Date.now();

  // Clean up expired entries periodically
  if (store.size > 1000) {
    cleanupStore();
  }

  const entry = store.get(key);

  // If no entry exists or window has expired, create a new entry
  if (!entry || now > entry.resetTime) {
    const resetTime = now + window;
    store.set(key, { count: 1, resetTime });

    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: resetTime,
    };
  }

  // Increment the counter
  entry.count++;

  // Check if limit exceeded
  if (entry.count > limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: entry.resetTime,
    };
  }

  return {
    success: true,
    limit,
    remaining: limit - entry.count,
    reset: entry.resetTime,
  };
}

/**
 * Extract client identifier from request
 * @param request - Next.js request object
 * @returns Client identifier string
 */
export function getClientIdentifier(request: Request): string {
  // Try to get IP address from headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  // Fallback to a unique identifier based on user agent
  const userAgent = request.headers.get('user-agent') || 'unknown';
  return `ua:${userAgent}`;
}

/**
 * Rate limit configuration presets
 */
export const RateLimitPresets = {
  /** Strict rate limit for sensitive endpoints (10 req/min) */
  STRICT: { limit: 10, window: 60 * 1000 },
  /** Standard rate limit for general API endpoints (60 req/min) */
  STANDARD: { limit: 60, window: 60 * 1000 },
  /** Relaxed rate limit for read-only endpoints (120 req/min) */
  RELAXED: { limit: 120, window: 60 * 1000 },
  /** Burst rate limit for webhooks (300 req/min) */
  BURST: { limit: 300, window: 60 * 1000 },
} as const;
