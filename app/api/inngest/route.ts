import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { execute } from "@/inngest/functions";

// Create an API that serves Inngest functions
// Note: Inngest has built-in signature verification for webhooks
// Additional rate limiting can be added at the Inngest platform level
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    execute, // <-- This is where you'll always add all your functions
  ],
});
