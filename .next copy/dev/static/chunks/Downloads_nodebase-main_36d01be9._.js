;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="6c1c5534-1496-40e6-4cec-1c00dec46054")}catch(e){}}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/nodebase-main/trpc/query-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeQueryClient",
    ()=>makeQueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/index.js [app-client] (ecmascript)");
;
;
function makeQueryClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                staleTime: 30 * 1000
            },
            dehydrate: {
                serializeData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].serialize,
                shouldDehydrateQuery: (query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultShouldDehydrateQuery"])(query) || query.state.status === "pending"
            },
            hydrate: {
                deserializeData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deserialize
            }
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nodebase-main/trpc/client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRPCProvider",
    ()=>TRPCProvider,
    "TRPCReactProvider",
    ()=>TRPCReactProvider,
    "useTRPC",
    ()=>useTRPC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/client/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$httpBatchLink$2d$BOe5aCcR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/client/dist/httpBatchLink-BOe5aCcR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$tanstack$2d$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/tanstack-react-query/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/trpc/query-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const { TRPCProvider, useTRPC } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$tanstack$2d$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTRPCContext"])();
let browserQueryClient;
function getQueryClient() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeQueryClient"])();
    return browserQueryClient;
}
function getUrl() {
    const base = (()=>{
        if ("TURBOPACK compile-time truthy", 1) return '';
        //TURBOPACK unreachable
        ;
    })();
    return `${base}/api/trpc`;
}
function TRPCReactProvider(props) {
    _s();
    // NOTE: Avoid useState when initializing the query client if you don't
    //       have a suspense boundary between this and the code that may
    //       suspend because React will throw away the client on the initial
    //       render if it suspends and there is no boundary
    const queryClient = getQueryClient();
    const [trpcClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TRPCReactProvider.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTRPCClient"])({
                links: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$httpBatchLink$2d$BOe5aCcR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpBatchLink"])({
                        transformer: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        url: getUrl()
                    })
                ]
            })
    }["TRPCReactProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TRPCProvider, {
            trpcClient: trpcClient,
            queryClient: queryClient,
            children: props.children
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/trpc/client.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/trpc/client.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(TRPCReactProvider, "f/dMvi7sgZeESOg4nZd+ORpE9eI=");
_c = TRPCReactProvider;
var _c;
__turbopack_context__.k.register(_c, "TRPCReactProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nodebase-main/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/nodebase-main/components/ui/light-rays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightRays",
    ()=>LightRays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const createRays = (count, cycle)=>{
    if (count <= 0) return [];
    return Array.from({
        length: count
    }, (_, index)=>{
        const left = 8 + Math.random() * 84;
        const rotate = -28 + Math.random() * 56;
        const width = 160 + Math.random() * 160;
        const swing = 0.8 + Math.random() * 1.8;
        const delay = Math.random() * cycle;
        const duration = cycle * (0.75 + Math.random() * 0.5);
        const intensity = 0.6 + Math.random() * 0.5;
        return {
            id: `${index}-${Math.round(left * 10)}`,
            left,
            rotate,
            width,
            swing,
            delay,
            duration,
            intensity
        };
    });
};
const Ray = ({ left, rotate, width, swing, delay, duration, intensity })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-[var(--light-rays-blur)]",
        style: {
            "--ray-left": `${left}%`,
            "--ray-width": `${width}px`
        },
        initial: {
            rotate: rotate
        },
        animate: {
            opacity: [
                0,
                intensity,
                0
            ],
            rotate: [
                rotate - swing,
                rotate + swing,
                rotate - swing
            ]
        },
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
            repeatDelay: duration * 0.1
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/light-rays.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Ray;
function LightRays({ className, style, count = 7, color = "rgba(160, 210, 255, 0.2)", blur = 36, speed = 14, length = "70vh", ref, ...props }) {
    _s();
    const [rays, setRays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const cycleDuration = Math.max(speed, 0.1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRays.useEffect": ()=>{
            setRays(createRays(count, cycleDuration));
        }
    }["LightRays.useEffect"], [
        count,
        cycleDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]", className),
        style: {
            "--light-rays-color": color,
            "--light-rays-blur": `${blur}px`,
            "--light-rays-length": length,
            ...style
        },
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute inset-0 opacity-60",
                    style: {
                        background: "radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/light-rays.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute inset-0 opacity-60",
                    style: {
                        background: "radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/light-rays.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                rays.map((ray)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ray, {
                        ...ray
                    }, ray.id, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/ui/light-rays.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/light-rays.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/light-rays.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(LightRays, "HwkYtKQBNX31zHxVXuXe5v0lGJg=");
_c1 = LightRays;
var _c, _c1;
__turbopack_context__.k.register(_c, "Ray");
__turbopack_context__.k.register(_c1, "LightRays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# debugId=6c1c5534-1496-40e6-4cec-1c00dec46054
//# sourceMappingURL=Downloads_nodebase-main_36d01be9._.js.map