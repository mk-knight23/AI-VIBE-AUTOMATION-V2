module.exports = [
"[project]/Downloads/nodebase-main/sentry.server.config.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@sentry/nextjs/build/cjs/index.server.js [instrumentation] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["init"]({
    dsn: "https://45b55ae4728cd8321ab3a3f9bed15718@o4508871019659264.ingest.us.sentry.io/4510189628227584",
    integrations: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["vercelAIIntegration"]({
            recordInputs: true,
            recordOutputs: true
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["consoleLoggingIntegration"]({
            levels: [
                "log",
                "warn",
                "error"
            ]
        })
    ],
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Enable logs to be sent to Sentry
    enableLogs: true,
    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true
});
}),
];

//# sourceMappingURL=Downloads_nodebase-main_sentry_server_config_ts_2f1be20b._.js.map