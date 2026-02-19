// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Only initialize Sentry if DSN is provided
const SENTRY_DSN = process.env.SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1,

    // Enable logs to be sent to Sentry
    enableLogs: process.env.NODE_ENV === "production",

    // Disable sending user PII in production (security best practice)
    sendDefaultPii: false,

    // Filter sensitive data
    beforeSend(event, hint) {
      // Remove potential sensitive data from headers
      if (event.request?.headers) {
        delete event.request.headers["authorization"];
        delete event.request.headers["cookie"];
        delete event.request.headers["x-api-key"];
      }
      return event;
    },
  });
} else if (process.env.NODE_ENV === "production") {
  console.warn("SENTRY_DSN not configured - error tracking disabled");
}
