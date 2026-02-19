/**
 * CSRF Protection utilities
 * Provides double-submit cookie pattern for CSRF protection
 */

import { cookies } from 'next/headers';

const CSRF_COOKIE_NAME = 'csrf_token';
const CSRF_HEADER_NAME = 'x-csrf-token';
const TOKEN_LENGTH = 32;

/**
 * Generate a cryptographically random CSRF token
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(TOKEN_LENGTH);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Set CSRF token in an HTTP-only cookie
 */
export async function setCSRFCookie(): Promise<string> {
  const token = generateCSRFToken();
  const cookieStore = await cookies();

  cookieStore.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return token;
}

/**
 * Get CSRF token from cookie
 */
export async function getCSRFCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(CSRF_COOKIE_NAME)?.value;
}

/**
 * Validate CSRF token from request headers against cookie
 * @param request - Next.js request object
 * @returns true if token is valid, false otherwise
 */
export async function validateCSRFToken(request: Request): Promise<boolean> {
  const cookieToken = await getCSRFCookie();
  const headerToken = request.headers.get(CSRF_HEADER_NAME);

  // For GET requests, skip CSRF validation
  if (request.method === 'GET' || request.method === 'HEAD') {
    return true;
  }

  // For state-changing methods, require CSRF token
  if (!cookieToken || !headerToken) {
    return false;
  }

  // Use constant-time comparison to prevent timing attacks
  return crypto.subtle.timingSafeEqual(
    new TextEncoder().encode(cookieToken),
    new TextEncoder().encode(headerToken)
  ).catch(() => false);
}

/**
 * Create a response with CSRF token included
 * @param response - Next.js response object
 * @returns Response with CSRF token in headers
 */
export async function withCSRFToken<T>(response: Response): Promise<Response> {
  const token = await setCSRFCookie();
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('X-CSRF-Token', token);
  return newResponse;
}

/**
 * Middleware to require CSRF token for state-changing operations
 * @param request - Next.js request object
 * @throws Error if CSRF validation fails
 */
export async function requireCSRF(request: Request): Promise<void> {
  const isValid = await validateCSRFToken(request);

  if (!isValid) {
    throw new Error('CSRF token validation failed');
  }
}

/**
 * Get CSRF token name for client-side usage
 */
export function getCSRFHeaderName(): string {
  return CSRF_HEADER_NAME;
}
