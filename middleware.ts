/**
 * Next.js Middleware for Security Headers
 * Provides comprehensive security headers for all routes
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Content Security Policy configuration
 * Adjust the directives based on your application's needs
 */
const CSP_DIRECTIVES = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://*.polar.sh https://*.ingest.us.sentry.io",
  "frame-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

/**
 * Security headers to apply to all responses
 */
const SECURITY_HEADERS = {
  'Content-Security-Policy': CSP_DIRECTIVES,
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-XSS-Protection': '1; mode=block',
} as const;

/**
 * Paths that should be excluded from security headers
 * Useful for webhooks or API endpoints that need different headers
 */
const EXCLUDED_PATHS = [
  '/api/inngest',
  '/api/webhook',
];

/**
 * Middleware function to add security headers to all responses
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Skip security headers for excluded paths
  const isExcluded = EXCLUDED_PATHS.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isExcluded) {
    Object.entries(SECURITY_HEADERS).forEach(([header, value]) => {
      response.headers.set(header, value);
    });
  }

  // Add X-Robots-Tag to prevent indexing
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');

  return response;
}

/**
 * Configure which routes the middleware should run on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
