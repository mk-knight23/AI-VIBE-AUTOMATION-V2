import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/trpc/init";
import { appRouter } from "@/trpc/routers/_app";
import { NextResponse } from "next/server";
import {
  rateLimit,
  getClientIdentifier,
  RateLimitPresets,
} from "@/lib/rate-limit";

async function handler(req: Request) {
  // Apply rate limiting for write operations (POST, PUT, DELETE, PATCH)
  if (req.method !== "GET" && req.method !== "HEAD") {
    const identifier = getClientIdentifier(req);
    const rateLimitResult = await rateLimit({
      ...RateLimitPresets.STANDARD,
      identifier: `trpc:${req.method}:${identifier}`,
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: "Too many requests. Please try again later.",
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
            "Retry-After": Math.ceil(
              (rateLimitResult.reset - Date.now()) / 1000,
            ).toString(),
          },
        },
      );
    }
  }

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
}

export { handler as GET, handler as POST };
