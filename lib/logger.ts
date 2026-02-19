/**
 * Production-safe logger
 * Uses appropriate logging based on environment
 */

import * as Sentry from "@sentry/nextjs";

type LogLevel = "info" | "warn" | "error";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

/**
 * Sanitize sensitive data from logs
 */
function sanitizeData(data: any): any {
  if (!data || typeof data !== "object") {
    return data;
  }

  const sensitiveKeys = [
    "password",
    "token",
    "secret",
    "apiKey",
    "api_key",
    "authorization",
    "cookie",
    "session",
    "credit",
    "ssn",
  ];

  const sanitized = { ...data };

  for (const key of Object.keys(sanitized)) {
    const lowerKey = key.toLowerCase();
    if (sensitiveKeys.some((sensitive) => lowerKey.includes(sensitive))) {
      sanitized[key] = "[REDACTED]";
    } else if (typeof sanitized[key] === "object" && sanitized[key] !== null) {
      sanitized[key] = sanitizeData(sanitized[key]);
    }
  }

  return sanitized;
}

export class Logger {
  static log(level: LogLevel, message: string, data?: any) {
    const sanitizedData = data ? sanitizeData(data) : undefined;
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data: sanitizedData,
    };

    // In production, send to Sentry only
    if (isProduction) {
      if (level === "error") {
        Sentry.captureException(new Error(message), {
          level: "error",
          extra: sanitizedData,
        });
      } else if (level === "warn") {
        Sentry.captureMessage(message, {
          level: "warning",
          extra: sanitizedData,
        });
      }
      // Don't log info to Sentry in production to reduce noise
      return;
    }

    // In development, log to console
    if (isDevelopment) {
      console[level](JSON.stringify(logEntry, null, 2));
    }

    // In test, suppress console output
    // Logs are handled by test framework
  }

  static info(message: string, data?: any) {
    this.log("info", message, data);
  }

  static warn(message: string, data?: any) {
    this.log("warn", message, data);
  }

  static error(message: string, data?: any) {
    this.log("error", message, data);
  }
}
