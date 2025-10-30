;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="06a3b4fd-56a9-ade5-3df2-ee7d44f67d26")}catch(e){}}();
module.exports = [
"[project]/Downloads/nodebase-main/config/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAGINATION",
    ()=>PAGINATION
]);
const PAGINATION = {
    DEFAULT_PAGE_SIZE: 5,
    MAX_PAGE_SIZE: 100,
    MIN_PAGE_SIZE: 1,
    DEFAULT_PAGE: 1
};
}),
"[project]/Downloads/nodebase-main/features/workflows/params.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "workflowsParams",
    ()=>workflowsParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/server.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/config/constants.ts [app-ssr] (ecmascript)");
;
;
const workflowsParams = {
    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAsInteger"].withDefault(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGINATION"].DEFAULT_PAGE).withOptions({
        clearOnDefault: true
    }),
    pageSize: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAsInteger"].withDefault(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$config$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGINATION"].DEFAULT_PAGE_SIZE).withOptions({
        clearOnDefault: true
    }),
    search: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAsString"].withDefault("").withOptions({
        clearOnDefault: true
    })
};
}),
"[project]/Downloads/nodebase-main/features/workflows/hooks/use-workflow-params.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWorkflowParams",
    ()=>useWorkflowParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$params$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/workflows/params.ts [app-ssr] (ecmascript)");
;
;
const useWorkflowParams = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryStates"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$params$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["workflowsParams"]);
};
}),
"[project]/Downloads/nodebase-main/features/workflows/hooks/use-workflows.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateWorkflow",
    ()=>useCreateWorkflow,
    "useRemoveWorkflow",
    ()=>useRemoveWorkflow,
    "useSuspenseWorkflow",
    ()=>useSuspenseWorkflow,
    "useSuspenseWorkflows",
    ()=>useSuspenseWorkflows,
    "useUpdateWorkflow",
    ()=>useUpdateWorkflow,
    "useUpdateWorkflowName",
    ()=>useUpdateWorkflowName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/trpc/client.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflow$2d$params$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/workflows/hooks/use-workflow-params.ts [app-ssr] (ecmascript)");
;
;
;
;
const useSuspenseWorkflows = ()=>{
    const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTRPC"])();
    const [params] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflow$2d$params$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWorkflowParams"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSuspenseQuery"])(trpc.workflows.getMany.queryOptions(params));
};
const useCreateWorkflow = ()=>{
    const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTRPC"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(trpc.workflows.create.mutationOptions({
        onSuccess: (data)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Workflow ${data.name} created`);
            queryClient.invalidateQueries(trpc.workflows.getMany.queryOptions({}));
            return data;
        },
        onError: (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Failed to create workflow: ${error.message}`);
        }
    }));
};
const useRemoveWorkflow = (id)=>{
    const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTRPC"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(trpc.workflows.remove.mutationOptions({
        onSuccess: (data)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Workflow ${data.name} removed`);
            queryClient.invalidateQueries(trpc.workflows.getMany.queryOptions({}));
            queryClient.invalidateQueries(trpc.workflows.getOne.queryFilter({
                id: data.id
            }));
        },
        onError: (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Failed to remove workflow: ${error.message}`);
        }
    }));
};
const useSuspenseWorkflow = (id)=>{
    const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTRPC"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSuspenseQuery"])(trpc.workflows.getOne.queryOptions({
        id
    }));
};
const useUpdateWorkflowName = ()=>{
    const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTRPC"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(trpc.workflows.updateName.mutationOptions({
        onSuccess: (data)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Workflow ${data.name} updated`);
            queryClient.invalidateQueries(trpc.workflows.getMany.queryOptions({}));
            queryClient.invalidateQueries(trpc.workflows.getOne.queryOptions({
                id: data.id
            }));
        },
        onError: (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Failed to update workflow: ${error.message}`);
        }
    }));
};
const useUpdateWorkflow = ()=>{
    const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$trpc$2f$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTRPC"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(trpc.workflows.update.mutationOptions({
        onSuccess: (data)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Workflow ${data.name} saved`);
            queryClient.invalidateQueries(trpc.workflows.getMany.queryOptions({}));
            queryClient.invalidateQueries(trpc.workflows.getOne.queryOptions({
                id: data.id
            }));
        },
        onError: (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Failed to save workflow: ${error.message}`);
        }
    }));
};
}),
"[project]/Downloads/nodebase-main/components/ui/empty.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Empty",
    ()=>Empty,
    "EmptyContent",
    ()=>EmptyContent,
    "EmptyDescription",
    ()=>EmptyDescription,
    "EmptyHeader",
    ()=>EmptyHeader,
    "EmptyMedia",
    ()=>EmptyMedia,
    "EmptyTitle",
    ()=>EmptyTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Empty({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "empty",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/empty.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function EmptyHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "empty-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex max-w-sm flex-col items-center gap-2 text-center", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/empty.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
const emptyMediaVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-transparent",
            icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function EmptyMedia({ className, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "empty-icon",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(emptyMediaVariants({
            variant,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/empty.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function EmptyTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "empty-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/empty.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
function EmptyDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "empty-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/empty.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function EmptyContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "empty-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/empty.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/entity-components.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyView",
    ()=>EmptyView,
    "EntityContainer",
    ()=>EntityContainer,
    "EntityHeader",
    ()=>EntityHeader,
    "EntityItem",
    ()=>EntityItem,
    "EntityList",
    ()=>EntityList,
    "EntityPagination",
    ()=>EntityPagination,
    "EntitySearch",
    ()=>EntitySearch,
    "ErrorView",
    ()=>ErrorView,
    "LoadingView",
    ()=>LoadingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangleIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVerticalIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVerticalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageOpenIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/package-open.js [app-ssr] (ecmascript) <export default as PackageOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2Icon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/empty.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const EntityHeader = ({ title, description, newButtonLabel, disabled, isCreating, onNew, newButtonHref })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center justify-between gap-x-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold md:text-xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs md:text-sm text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            onNew && !newButtonHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                disabled: isCreating || disabled,
                size: "sm",
                onClick: onNew,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    newButtonLabel
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            newButtonHref && !onNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: newButtonHref,
                    prefetch: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        newButtonLabel
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EntityContainer = ({ children, header, search, pagination })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full mx-auto max-w-screen-xl gap-y-6 lg:gap-y-8 h-full",
            children: [
                header,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-y-4 h-full",
                    children: [
                        search,
                        children,
                        pagination
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EntitySearch = ({ placeholder = "Search", value, onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative ml-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"], {
                className: "size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                type: "text",
                placeholder: placeholder,
                value: value,
                onChange: (e)=>onChange?.(e.target.value),
                className: "max-w-[200px] bg-background shadow-none border-border pl-8"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EntityPagination = ({ page, totalPages, onPageChange, disabled })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-x-2 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-sm text-muted-foreground",
                children: [
                    "Page ",
                    page,
                    " of ",
                    totalPages || 1
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end space-x-2 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: page === 1 || disabled,
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>onPageChange?.(Math.max(1, page - 1)),
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: page === totalPages || totalPages === 0 || disabled,
                        onClick: ()=>onPageChange?.(Math.min(totalPages, page + 1)),
                        size: "sm",
                        variant: "outline",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const LoadingView = ({ message })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-full flex-1 flex-col gap-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
                className: "size-6 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !!message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: message
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 194,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ErrorView = ({ message })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-full flex-1 flex-col gap-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangleIcon$3e$__["AlertTriangleIcon"], {
                className: "size-6 text-primary"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !!message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: message
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 207,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EmptyView = ({ message, onNew })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
        className: "border border-dashed",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyMedia"], {
                    variant: "icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageOpenIcon$3e$__["PackageOpenIcon"], {}, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyTitle"], {
                children: "No items"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !!message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyDescription"], {
                children: message
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 225,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            !!onNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onNew,
                    children: "Add item"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EntityList = ({ items, renderItem, getKey, emptyView, className })=>{
    if (items.length === 0 && emptyView) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-sm mx-auto",
                children: emptyView
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1", className),
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: renderItem(item, index)
            }, getKey ? getKey(item, index) : index, false, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EntityItem = ({ href, title, subtitle, image, actions, onRemove, isRemoving, className })=>{
    const handleRemove = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (isRemoving) {
            return;
        }
        if (onRemove) {
            await onRemove();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href || "#",
        prefetch: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full p-4 sm:p-6 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-200 border-border/50", isRemoving && "opacity-50 cursor-not-allowed"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex flex-col h-full p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4 flex-1",
                        children: [
                            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: image
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base font-semibold leading-tight mb-2",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !!subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        className: "text-sm text-muted-foreground leading-relaxed",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    (actions || onRemove) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end",
                        children: [
                            actions,
                            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            disabled: isRemoving,
                                            onClick: (e)=>e.stopPropagation(),
                                            className: "h-8 w-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVerticalIcon$3e$__["MoreVerticalIcon"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                                lineNumber: 345,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                        lineNumber: 337,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: handleRemove,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2Icon$3e$__["Trash2Icon"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Delete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                            lineNumber: 352,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                                lineNumber: 336,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                        lineNumber: 333,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
                lineNumber: 314,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
            lineNumber: 308,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/entity-components.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNode",
    ()=>BaseNode,
    "BaseNodeContent",
    ()=>BaseNodeContent,
    "BaseNodeFooter",
    ()=>BaseNodeFooter,
    "BaseNodeHeader",
    ()=>BaseNodeHeader,
    "BaseNodeHeaderTitle",
    ()=>BaseNodeHeaderTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2Icon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircleIcon>");
;
;
;
;
const BaseNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, status, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative rounded-sm border border-muted-foreground bg-card text-card-foreground hover:bg-accent", "hover:ring-1", className),
        tabIndex: 0,
        ...props,
        children: [
            props.children,
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__["XCircleIcon"], {
                className: "absolute bottom-0.5 right-0.5 size-2 text-red-700 stroke-3"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2Icon$3e$__["CheckCircle2Icon"], {
                className: "absolute bottom-0.5 right-0.5 size-2 text-green-700 stroke-3"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
                className: "absolute -bottom-0.5 -right-0.5 size-2 text-blue-700 stroke-3 animate-spin"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BaseNode.displayName = "BaseNode";
const BaseNodeHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-0 my-0 -mb-1 flex flex-row items-center justify-between gap-2 px-3 py-2", // Remove or modify these classes if you modify the padding in the
        // `<BaseNode />` component.
        className)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BaseNodeHeader.displayName = "BaseNodeHeader";
const BaseNodeHeaderTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        "data-slot": "base-node-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("user-select-none flex-1 font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BaseNodeHeaderTitle.displayName = "BaseNodeHeaderTitle";
const BaseNodeContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-slot": "base-node-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-y-2 p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BaseNodeContent.displayName = "BaseNodeContent";
const BaseNodeFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-slot": "base-node-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-y-2 border-t px-3 pb-3 pt-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BaseNodeFooter.displayName = "BaseNodeFooter";
}),
"[project]/Downloads/nodebase-main/components/react-flow/placeholder-node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaceholderNode",
    ()=>PlaceholderNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const PlaceholderNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, onClick }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseNode"], {
        ref: ref,
        className: "w-auto h-auto border-dashed border-gray-400 bg-card p-4 text-center text-gray-400 shadow-none cursor-pointer hover:border-gray-500 hover:bg-gray-50",
        onClick: onClick,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                style: {
                    visibility: "hidden"
                },
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Top,
                isConnectable: false
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/placeholder-node.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                style: {
                    visibility: "hidden"
                },
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Bottom,
                isConnectable: false
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/placeholder-node.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/placeholder-node.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
PlaceholderNode.displayName = "PlaceholderNode";
}),
"[project]/Downloads/nodebase-main/components/workflow-node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowNode",
    ()=>WorkflowNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as SettingsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as TrashIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WorkflowNode({ children, showToolbar = true, onDelete, onSettings, name, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showToolbar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NodeToolbar"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "secondary",
                        onClick: onSettings,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__["SettingsIcon"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "destructive",
                        onClick: onDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this),
            children,
            name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NodeToolbar"], {
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Bottom,
                isVisible: true,
                className: "max-w-[200px] text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-sm text-foreground",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground truncate",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                        lineNumber: 45,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/workflow-node.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:tty [external] (node:tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tty", () => require("node:tty"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[project]/Downloads/nodebase-main/lib/generated/prisma/runtime/library.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */ var yu = Object.create;
var jt = Object.defineProperty;
var bu = Object.getOwnPropertyDescriptor;
var Eu = Object.getOwnPropertyNames;
var wu = Object.getPrototypeOf, xu = Object.prototype.hasOwnProperty;
var Do = (e, r)=>()=>(e && (r = e(e = 0)), r);
var ue = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), tr = (e, r)=>{
    for(var t in r)jt(e, t, {
        get: r[t],
        enumerable: !0
    });
}, Oo = (e, r, t, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let i of Eu(r))!xu.call(e, i) && i !== t && jt(e, i, {
        get: ()=>r[i],
        enumerable: !(n = bu(r, i)) || n.enumerable
    });
    return e;
};
var O = (e, r, t)=>(t = e != null ? yu(wu(e)) : {}, Oo(r || !e || !e.__esModule ? jt(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e)), vu = (e)=>Oo(jt({}, "__esModule", {
        value: !0
    }), e);
var hi = ue((_g, is)=>{
    "use strict";
    is.exports = (e, r = process.argv)=>{
        let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = r.indexOf(t + e), i = r.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
    };
});
var as = ue((Ng, ss)=>{
    "use strict";
    var Fc = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)"), os = __turbopack_context__.r("[externals]/node:tty [external] (node:tty, cjs)"), de = hi(), { env: G } = process, Qe;
    de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
    "FORCE_COLOR" in G && (G.FORCE_COLOR === "true" ? Qe = 1 : G.FORCE_COLOR === "false" ? Qe = 0 : Qe = G.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(G.FORCE_COLOR, 10), 3));
    function yi(e) {
        return e === 0 ? !1 : {
            level: e,
            hasBasic: !0,
            has256: e >= 2,
            has16m: e >= 3
        };
    }
    function bi(e, r) {
        if (Qe === 0) return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor")) return 3;
        if (de("color=256")) return 2;
        if (e && !r && Qe === void 0) return 0;
        let t = Qe || 0;
        if (G.TERM === "dumb") return t;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("CI" in G) return [
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE"
        ].some((n)=>n in G) || G.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in G) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION) ? 1 : 0;
        if (G.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in G) {
            let n = parseInt((G.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch(G.TERM_PROGRAM){
                case "iTerm.app":
                    return n >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2;
            }
        }
        return /-256(color)?$/i.test(G.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(G.TERM) || "COLORTERM" in G ? 1 : t;
    }
    function Mc(e) {
        let r = bi(e, e && e.isTTY);
        return yi(r);
    }
    ss.exports = {
        supportsColor: Mc,
        stdout: yi(bi(!0, os.isatty(1))),
        stderr: yi(bi(!0, os.isatty(2)))
    };
});
var cs = ue((Lg, us)=>{
    "use strict";
    var $c = as(), br = hi();
    function ls(e) {
        if (/^\d{3,4}$/.test(e)) {
            let t = /(\d{1,2})(\d{2})/.exec(e) || [];
            return {
                major: 0,
                minor: parseInt(t[1], 10),
                patch: parseInt(t[2], 10)
            };
        }
        let r = (e || "").split(".").map((t)=>parseInt(t, 10));
        return {
            major: r[0],
            minor: r[1],
            patch: r[2]
        };
    }
    function Ei(e) {
        let { CI: r, FORCE_HYPERLINK: t, NETLIFY: n, TEAMCITY_VERSION: i, TERM_PROGRAM: o, TERM_PROGRAM_VERSION: s, VTE_VERSION: a, TERM: l } = process.env;
        if (t) return !(t.length > 0 && parseInt(t, 10) === 0);
        if (br("no-hyperlink") || br("no-hyperlinks") || br("hyperlink=false") || br("hyperlink=never")) return !1;
        if (br("hyperlink=true") || br("hyperlink=always") || n) return !0;
        if (!$c.supportsColor(e) || e && !e.isTTY) return !1;
        if ("WT_SESSION" in process.env) return !0;
        if (process.platform === "win32" || r || i) return !1;
        if (o) {
            let u = ls(s || "");
            switch(o){
                case "iTerm.app":
                    return u.major === 3 ? u.minor >= 1 : u.major > 3;
                case "WezTerm":
                    return u.major >= 20200620;
                case "vscode":
                    return u.major > 1 || u.major === 1 && u.minor >= 72;
                case "ghostty":
                    return !0;
            }
        }
        if (a) {
            if (a === "0.50.0") return !1;
            let u = ls(a);
            return u.major > 0 || u.minor >= 50;
        }
        switch(l){
            case "alacritty":
                return !0;
        }
        return !1;
    }
    us.exports = {
        supportsHyperlink: Ei,
        stdout: Ei(process.stdout),
        stderr: Ei(process.stderr)
    };
});
var ps = ue((Kg, qc)=>{
    qc.exports = {
        name: "@prisma/internals",
        version: "6.18.0",
        description: "This package is intended for Prisma's internal use",
        main: "dist/index.js",
        types: "dist/index.d.ts",
        repository: {
            type: "git",
            url: "https://github.com/prisma/prisma.git",
            directory: "packages/internals"
        },
        homepage: "https://www.prisma.io",
        author: "Tim Suchanek <suchanek@prisma.io>",
        bugs: "https://github.com/prisma/prisma/issues",
        license: "Apache-2.0",
        scripts: {
            dev: "DEV=true tsx helpers/build.ts",
            build: "tsx helpers/build.ts",
            test: "dotenv -e ../../.db.env -- jest --silent",
            prepublishOnly: "pnpm run build"
        },
        files: [
            "README.md",
            "dist",
            "!**/libquery_engine*",
            "!dist/get-generators/engines/*",
            "scripts"
        ],
        devDependencies: {
            "@babel/helper-validator-identifier": "7.25.9",
            "@opentelemetry/api": "1.9.0",
            "@swc/core": "1.11.5",
            "@swc/jest": "0.2.37",
            "@types/babel__helper-validator-identifier": "7.15.2",
            "@types/jest": "29.5.14",
            "@types/node": "18.19.76",
            "@types/resolve": "1.20.6",
            archiver: "6.0.2",
            "checkpoint-client": "1.1.33",
            "cli-truncate": "4.0.0",
            dotenv: "16.5.0",
            empathic: "2.0.0",
            "escape-string-regexp": "5.0.0",
            execa: "8.0.1",
            "fast-glob": "3.3.3",
            "find-up": "7.0.0",
            "fp-ts": "2.16.9",
            "fs-extra": "11.3.0",
            "global-directory": "4.0.0",
            globby: "11.1.0",
            "identifier-regex": "1.0.0",
            "indent-string": "4.0.0",
            "is-windows": "1.0.2",
            "is-wsl": "3.1.0",
            jest: "29.7.0",
            "jest-junit": "16.0.0",
            kleur: "4.1.5",
            "mock-stdin": "1.0.0",
            "new-github-issue-url": "0.2.1",
            "node-fetch": "3.3.2",
            "npm-packlist": "5.1.3",
            open: "7.4.2",
            "p-map": "4.0.0",
            resolve: "1.22.10",
            "string-width": "7.2.0",
            "strip-indent": "4.0.0",
            "temp-dir": "2.0.0",
            tempy: "1.0.1",
            "terminal-link": "4.0.0",
            tmp: "0.2.3",
            "ts-pattern": "5.6.2",
            "ts-toolbelt": "9.6.0",
            typescript: "5.4.5",
            yarn: "1.22.22"
        },
        dependencies: {
            "@prisma/config": "workspace:*",
            "@prisma/debug": "workspace:*",
            "@prisma/dmmf": "workspace:*",
            "@prisma/driver-adapter-utils": "workspace:*",
            "@prisma/engines": "workspace:*",
            "@prisma/fetch-engine": "workspace:*",
            "@prisma/generator": "workspace:*",
            "@prisma/generator-helper": "workspace:*",
            "@prisma/get-platform": "workspace:*",
            "@prisma/prisma-schema-wasm": "6.18.0-8.34b5a692b7bd79939a9a2c3ef97d816e749cda2f",
            "@prisma/schema-engine-wasm": "6.18.0-8.34b5a692b7bd79939a9a2c3ef97d816e749cda2f",
            "@prisma/schema-files-loader": "workspace:*",
            arg: "5.0.2",
            prompts: "2.4.2"
        },
        peerDependencies: {
            typescript: ">=5.1.0"
        },
        peerDependenciesMeta: {
            typescript: {
                optional: !0
            }
        },
        sideEffects: !1
    };
});
var Ti = ue((gh, Qc)=>{
    Qc.exports = {
        name: "@prisma/engines-version",
        version: "6.18.0-8.34b5a692b7bd79939a9a2c3ef97d816e749cda2f",
        main: "index.js",
        types: "index.d.ts",
        license: "Apache-2.0",
        author: "Tim Suchanek <suchanek@prisma.io>",
        prisma: {
            enginesVersion: "34b5a692b7bd79939a9a2c3ef97d816e749cda2f"
        },
        repository: {
            type: "git",
            url: "https://github.com/prisma/engines-wrapper.git",
            directory: "packages/engines-version"
        },
        devDependencies: {
            "@types/node": "18.19.76",
            typescript: "4.9.5"
        },
        files: [
            "index.js",
            "index.d.ts"
        ],
        scripts: {
            build: "tsc -d"
        }
    };
});
var on = ue((nn)=>{
    "use strict";
    Object.defineProperty(nn, "__esModule", {
        value: !0
    });
    nn.enginesVersion = void 0;
    nn.enginesVersion = Ti().prisma.enginesVersion;
});
var hs = ue((Ih, gs)=>{
    "use strict";
    gs.exports = (e)=>{
        let r = e.match(/^[ \t]*(?=\S)/gm);
        return r ? r.reduce((t, n)=>Math.min(t, n.length), 1 / 0) : 0;
    };
});
var Di = ue((kh, Es)=>{
    "use strict";
    Es.exports = (e, r = 1, t)=>{
        if (t = {
            indent: " ",
            includeEmptyLines: !1,
            ...t
        }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
        if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
        if (r === 0) return e;
        let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, t.indent.repeat(r));
    };
});
var vs = ue((jh, tp)=>{
    tp.exports = {
        name: "dotenv",
        version: "16.5.0",
        description: "Loads environment variables from .env file",
        main: "lib/main.js",
        types: "lib/main.d.ts",
        exports: {
            ".": {
                types: "./lib/main.d.ts",
                require: "./lib/main.js",
                default: "./lib/main.js"
            },
            "./config": "./config.js",
            "./config.js": "./config.js",
            "./lib/env-options": "./lib/env-options.js",
            "./lib/env-options.js": "./lib/env-options.js",
            "./lib/cli-options": "./lib/cli-options.js",
            "./lib/cli-options.js": "./lib/cli-options.js",
            "./package.json": "./package.json"
        },
        scripts: {
            "dts-check": "tsc --project tests/types/tsconfig.json",
            lint: "standard",
            pretest: "npm run lint && npm run dts-check",
            test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000",
            "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov",
            prerelease: "npm test",
            release: "standard-version"
        },
        repository: {
            type: "git",
            url: "git://github.com/motdotla/dotenv.git"
        },
        homepage: "https://github.com/motdotla/dotenv#readme",
        funding: "https://dotenvx.com",
        keywords: [
            "dotenv",
            "env",
            ".env",
            "environment",
            "variables",
            "config",
            "settings"
        ],
        readmeFilename: "README.md",
        license: "BSD-2-Clause",
        devDependencies: {
            "@types/node": "^18.11.3",
            decache: "^4.6.2",
            sinon: "^14.0.1",
            standard: "^17.0.0",
            "standard-version": "^9.5.0",
            tap: "^19.2.0",
            typescript: "^4.8.4"
        },
        engines: {
            node: ">=12"
        },
        browser: {
            fs: !1
        }
    };
});
var As = ue((Bh, _e)=>{
    "use strict";
    var Fi = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"), Mi = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"), np = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)"), ip = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)"), op = vs(), Ts = op.version, sp = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function ap(e) {
        let r = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let n;
        for(; (n = sp.exec(t)) != null;){
            let i = n[1], o = n[2] || "";
            o = o.trim();
            let s = o[0];
            o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
        }
        return r;
    }
    function lp(e) {
        let r = Rs(e), t = B.configDotenv({
            path: r
        });
        if (!t.parsed) {
            let s = new Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);
            throw s.code = "MISSING_DATA", s;
        }
        let n = Ss(e).split(","), i = n.length, o;
        for(let s = 0; s < i; s++)try {
            let a = n[s].trim(), l = cp(t, a);
            o = B.decrypt(l.ciphertext, l.key);
            break;
        } catch (a) {
            if (s + 1 >= i) throw a;
        }
        return B.parse(o);
    }
    function up(e) {
        console.log(`[dotenv@${Ts}][WARN] ${e}`);
    }
    function ot(e) {
        console.log(`[dotenv@${Ts}][DEBUG] ${e}`);
    }
    function Ss(e) {
        return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
    }
    function cp(e, r) {
        let t;
        try {
            t = new URL(r);
        } catch (a) {
            if (a.code === "ERR_INVALID_URL") {
                let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
                throw l.code = "INVALID_DOTENV_KEY", l;
            }
            throw a;
        }
        let n = t.password;
        if (!n) {
            let a = new Error("INVALID_DOTENV_KEY: Missing key part");
            throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let i = t.searchParams.get("environment");
        if (!i) {
            let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
            throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e.parsed[o];
        if (!s) {
            let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
            throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
        }
        return {
            ciphertext: s,
            key: n
        };
    }
    function Rs(e) {
        let r = null;
        if (e && e.path && e.path.length > 0) if (Array.isArray(e.path)) for (let t of e.path)Fi.existsSync(t) && (r = t.endsWith(".vault") ? t : `${t}.vault`);
        else r = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
        else r = Mi.resolve(process.cwd(), ".env.vault");
        return Fi.existsSync(r) ? r : null;
    }
    function Ps(e) {
        return e[0] === "~" ? Mi.join(np.homedir(), e.slice(1)) : e;
    }
    function pp(e) {
        !!(e && e.debug) && ot("Loading env from encrypted .env.vault");
        let t = B._parseVault(e), n = process.env;
        return e && e.processEnv != null && (n = e.processEnv), B.populate(n, t, e), {
            parsed: t
        };
    }
    function dp(e) {
        let r = Mi.resolve(process.cwd(), ".env"), t = "utf8", n = !!(e && e.debug);
        e && e.encoding ? t = e.encoding : n && ot("No encoding is specified. UTF-8 is used by default");
        let i = [
            r
        ];
        if (e && e.path) if (!Array.isArray(e.path)) i = [
            Ps(e.path)
        ];
        else {
            i = [];
            for (let l of e.path)i.push(Ps(l));
        }
        let o, s = {};
        for (let l of i)try {
            let u = B.parse(Fi.readFileSync(l, {
                encoding: t
            }));
            B.populate(s, u, e);
        } catch (u) {
            n && ot(`Failed to load ${l} ${u.message}`), o = u;
        }
        let a = process.env;
        return e && e.processEnv != null && (a = e.processEnv), B.populate(a, s, e), o ? {
            parsed: s,
            error: o
        } : {
            parsed: s
        };
    }
    function mp(e) {
        if (Ss(e).length === 0) return B.configDotenv(e);
        let r = Rs(e);
        return r ? B._configVault(e) : (up(`You set DOTENV_KEY but you are missing a .env.vault file at ${r}. Did you forget to build it?`), B.configDotenv(e));
    }
    function fp(e, r) {
        let t = Buffer.from(r.slice(-64), "hex"), n = Buffer.from(e, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
        n = n.subarray(12, -16);
        try {
            let s = ip.createDecipheriv("aes-256-gcm", t, i);
            return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
        } catch (s) {
            let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
            if (a || l) {
                let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
                throw c.code = "INVALID_DOTENV_KEY", c;
            } else if (u) {
                let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
                throw c.code = "DECRYPTION_FAILED", c;
            } else throw s;
        }
    }
    function gp(e, r, t = {}) {
        let n = !!(t && t.debug), i = !!(t && t.override);
        if (typeof r != "object") {
            let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
            throw o.code = "OBJECT_REQUIRED", o;
        }
        for (let o of Object.keys(r))Object.prototype.hasOwnProperty.call(e, o) ? (i === !0 && (e[o] = r[o]), n && ot(i === !0 ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = r[o];
    }
    var B = {
        configDotenv: dp,
        _configVault: pp,
        _parseVault: lp,
        config: mp,
        decrypt: fp,
        parse: ap,
        populate: gp
    };
    _e.exports.configDotenv = B.configDotenv;
    _e.exports._configVault = B._configVault;
    _e.exports._parseVault = B._parseVault;
    _e.exports.config = B.config;
    _e.exports.decrypt = B.decrypt;
    _e.exports.parse = B.parse;
    _e.exports.populate = B.populate;
    _e.exports = B;
});
var Os = ue((Kh, cn)=>{
    "use strict";
    cn.exports = (e = {})=>{
        let r;
        if (e.repoUrl) r = e.repoUrl;
        else if (e.user && e.repo) r = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let t = new URL(`${r}/issues/new`), n = [
            "body",
            "title",
            "labels",
            "template",
            "milestone",
            "assignee",
            "projects"
        ];
        for (let i of n){
            let o = e[i];
            if (o !== void 0) {
                if (i === "labels" || i === "projects") {
                    if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
                    o = o.join(",");
                }
                t.searchParams.set(i, o);
            }
        }
        return t.toString();
    };
    cn.exports.default = cn.exports;
});
var Ki = ue((vb, ea)=>{
    "use strict";
    ea.exports = function() {
        function e(r, t, n, i, o) {
            return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
        }
        return function(r, t) {
            if (r === t) return 0;
            if (r.length > t.length) {
                var n = r;
                r = t, t = n;
            }
            for(var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1);)i--, o--;
            for(var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s);)s++;
            if (i -= s, o -= s, i === 0 || o < 3) return o;
            var a = 0, l, u, c, p, d, f, h, g, I, T, S, b, D = [];
            for(l = 0; l < i; l++)D.push(l + 1), D.push(r.charCodeAt(s + l));
            for(var me = D.length - 1; a < o - 3;)for(I = t.charCodeAt(s + (u = a)), T = t.charCodeAt(s + (c = a + 1)), S = t.charCodeAt(s + (p = a + 2)), b = t.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2)h = D[l], g = D[l + 1], u = e(h, u, c, I, g), c = e(u, c, p, T, g), p = e(c, p, d, S, g), f = e(p, d, f, b, g), D[l] = f, d = p, p = c, c = u, u = h;
            for(; a < o;)for(I = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2)h = D[l], D[l] = f = e(h, u, f, I, D[l + 1]), u = h;
            return f;
        };
    }();
});
var oa = Do(()=>{
    "use strict";
});
var sa = Do(()=>{
    "use strict";
});
var jf = {};
tr(jf, {
    DMMF: ()=>ct,
    Debug: ()=>N,
    Decimal: ()=>Fe,
    Extensions: ()=>ni,
    MetricsClient: ()=>Lr,
    PrismaClientInitializationError: ()=>P,
    PrismaClientKnownRequestError: ()=>z,
    PrismaClientRustPanicError: ()=>ae,
    PrismaClientUnknownRequestError: ()=>V,
    PrismaClientValidationError: ()=>Z,
    Public: ()=>ii,
    Sql: ()=>ie,
    createParam: ()=>va,
    defineDmmfProperty: ()=>Ca,
    deserializeJsonResponse: ()=>Vr,
    deserializeRawResult: ()=>Xn,
    dmmfToRuntimeDataModel: ()=>Ns,
    empty: ()=>Oa,
    getPrismaClient: ()=>fu,
    getRuntime: ()=>Kn,
    join: ()=>Da,
    makeStrictEnum: ()=>gu,
    makeTypedQueryFactory: ()=>Ia,
    objectEnumValues: ()=>On,
    raw: ()=>no,
    serializeJsonQuery: ()=>$n,
    skip: ()=>Mn,
    sqltag: ()=>io,
    warnEnvConflicts: ()=>hu,
    warnOnce: ()=>at
});
module.exports = vu(jf);
var ni = {};
tr(ni, {
    defineExtension: ()=>ko,
    getExtensionContext: ()=>_o
});
function ko(e) {
    return typeof e == "function" ? e : (r)=>r.$extends(e);
}
function _o(e) {
    return e;
}
var ii = {};
tr(ii, {
    validator: ()=>No
});
function No(...e) {
    return (r)=>r;
}
var Bt = {};
tr(Bt, {
    $: ()=>qo,
    bgBlack: ()=>ku,
    bgBlue: ()=>Fu,
    bgCyan: ()=>$u,
    bgGreen: ()=>Nu,
    bgMagenta: ()=>Mu,
    bgRed: ()=>_u,
    bgWhite: ()=>qu,
    bgYellow: ()=>Lu,
    black: ()=>Cu,
    blue: ()=>nr,
    bold: ()=>W,
    cyan: ()=>De,
    dim: ()=>Ce,
    gray: ()=>Hr,
    green: ()=>qe,
    grey: ()=>Ou,
    hidden: ()=>Ru,
    inverse: ()=>Su,
    italic: ()=>Tu,
    magenta: ()=>Iu,
    red: ()=>ce,
    reset: ()=>Pu,
    strikethrough: ()=>Au,
    underline: ()=>Y,
    white: ()=>Du,
    yellow: ()=>Ie
});
var oi, Lo, Fo, Mo, $o = !0;
typeof process < "u" && ({ FORCE_COLOR: oi, NODE_DISABLE_COLORS: Lo, NO_COLOR: Fo, TERM: Mo } = process.env || {}, $o = process.stdout && process.stdout.isTTY);
var qo = {
    enabled: !Lo && Fo == null && Mo !== "dumb" && (oi != null && oi !== "0" || $o)
};
function F(e, r) {
    let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${r}m`;
    return function(o) {
        return !qo.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
    };
}
var Pu = F(0, 0), W = F(1, 22), Ce = F(2, 22), Tu = F(3, 23), Y = F(4, 24), Su = F(7, 27), Ru = F(8, 28), Au = F(9, 29), Cu = F(30, 39), ce = F(31, 39), qe = F(32, 39), Ie = F(33, 39), nr = F(34, 39), Iu = F(35, 39), De = F(36, 39), Du = F(37, 39), Hr = F(90, 39), Ou = F(90, 39), ku = F(40, 49), _u = F(41, 49), Nu = F(42, 49), Lu = F(43, 49), Fu = F(44, 49), Mu = F(45, 49), $u = F(46, 49), qu = F(47, 49);
var Vu = 100, Vo = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
], Yr = [], jo = Date.now(), ju = 0, si = typeof process < "u" ? process.env : {};
globalThis.DEBUG ??= si.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= si.DEBUG_COLORS ? si.DEBUG_COLORS === "true" : !0;
var zr = {
    enable (e) {
        typeof e == "string" && (globalThis.DEBUG = e);
    },
    disable () {
        let e = globalThis.DEBUG;
        return globalThis.DEBUG = "", e;
    },
    enabled (e) {
        let r = globalThis.DEBUG.split(",").map((i)=>i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i)=>i === "" || i[0] === "-" ? !1 : e.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i)=>i === "" || i[0] !== "-" ? !1 : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
        return t && !n;
    },
    log: (...e)=>{
        let [r, t, ...n] = e;
        (console.warn ?? console.log)(`${r} ${t}`, ...n);
    },
    formatters: {}
};
function Bu(e) {
    let r = {
        color: Vo[ju++ % Vo.length],
        enabled: zr.enabled(e),
        namespace: e,
        log: zr.log,
        extend: ()=>{}
    }, t = (...n)=>{
        let { enabled: i, namespace: o, color: s, log: a } = r;
        if (n.length !== 0 && Yr.push([
            o,
            ...n
        ]), Yr.length > Vu && Yr.shift(), zr.enabled(o) || i) {
            let l = n.map((c)=>typeof c == "string" ? c : Uu(c)), u = `+${Date.now() - jo}ms`;
            jo = Date.now(), globalThis.DEBUG_COLORS ? a(Bt[s](W(o)), ...l, Bt[s](u)) : a(o, ...l, u);
        }
    };
    return new Proxy(t, {
        get: (n, i)=>r[i],
        set: (n, i, o)=>r[i] = o
    });
}
var N = new Proxy(Bu, {
    get: (e, r)=>zr[r],
    set: (e, r, t)=>zr[r] = t
});
function Uu(e, r = 2) {
    let t = new Set;
    return JSON.stringify(e, (n, i)=>{
        if (typeof i == "object" && i !== null) {
            if (t.has(i)) return "[Circular *]";
            t.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
    }, r);
}
function Bo(e = 7500) {
    let r = Yr.map(([t, ...n])=>`${t} ${n.map((i)=>typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
    return r.length < e ? r : r.slice(-e);
}
function Uo() {
    Yr.length = 0;
}
var gr = N;
var Go = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"));
function ai() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && Go.default.existsSync(e)) && process.arch === "ia32") //TURBOPACK unreachable
    ;
}
var li = [
    "darwin",
    "darwin-arm64",
    "debian-openssl-1.0.x",
    "debian-openssl-1.1.x",
    "debian-openssl-3.0.x",
    "rhel-openssl-1.0.x",
    "rhel-openssl-1.1.x",
    "rhel-openssl-3.0.x",
    "linux-arm64-openssl-1.1.x",
    "linux-arm64-openssl-1.0.x",
    "linux-arm64-openssl-3.0.x",
    "linux-arm-openssl-1.1.x",
    "linux-arm-openssl-1.0.x",
    "linux-arm-openssl-3.0.x",
    "linux-musl",
    "linux-musl-openssl-3.0.x",
    "linux-musl-arm64-openssl-1.1.x",
    "linux-musl-arm64-openssl-3.0.x",
    "linux-nixos",
    "linux-static-x64",
    "linux-static-arm64",
    "windows",
    "freebsd11",
    "freebsd12",
    "freebsd13",
    "freebsd14",
    "freebsd15",
    "openbsd",
    "netbsd",
    "arm"
];
var Ut = "libquery_engine";
function Gt(e, r) {
    let t = r === "url";
    return e.includes("windows") ? t ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? t ? `${Ut}.dylib.node` : `${Ut}-${e}.dylib.node` : t ? `${Ut}.so.node` : `${Ut}-${e}.so.node`;
}
var Ko = O(__turbopack_context__.r("[externals]/node:child_process [external] (node:child_process, cjs)")), mi = O(__turbopack_context__.r("[externals]/node:fs/promises [external] (node:fs/promises, cjs)")), Ht = O(__turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)"));
var Oe = Symbol.for("@ts-pattern/matcher"), Gu = Symbol.for("@ts-pattern/isVariadic"), Wt = "@ts-pattern/anonymous-select-key", ui = (e)=>!!(e && typeof e == "object"), Qt = (e)=>e && !!e[Oe], Ee = (e, r, t)=>{
    if (Qt(e)) {
        let n = e[Oe](), { matched: i, selections: o } = n.match(r);
        return i && o && Object.keys(o).forEach((s)=>t(s, o[s])), i;
    }
    if (ui(e)) {
        if (!ui(r)) return !1;
        if (Array.isArray(e)) {
            if (!Array.isArray(r)) return !1;
            let n = [], i = [], o = [];
            for (let s of e.keys()){
                let a = e[s];
                Qt(a) && a[Gu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
            }
            if (o.length) {
                if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                if (r.length < n.length + i.length) return !1;
                let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
                return n.every((u, c)=>Ee(u, s[c], t)) && i.every((u, c)=>Ee(u, a[c], t)) && (o.length === 0 || Ee(o[0], l, t));
            }
            return e.length === r.length && e.every((s, a)=>Ee(s, r[a], t));
        }
        return Reflect.ownKeys(e).every((n)=>{
            let i = e[n];
            return (n in r || Qt(o = i) && o[Oe]().matcherType === "optional") && Ee(i, r[n], t);
            //TURBOPACK unreachable
            ;
            var o;
        });
    }
    return Object.is(r, e);
}, Ge = (e)=>{
    var r, t, n;
    return ui(e) ? Qt(e) ? (r = (t = (n = e[Oe]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e) ? Zr(e, Ge) : Zr(Object.values(e), Ge) : [];
}, Zr = (e, r)=>e.reduce((t, n)=>t.concat(r(n)), []);
function pe(e) {
    return Object.assign(e, {
        optional: ()=>Qu(e),
        and: (r)=>q(e, r),
        or: (r)=>Wu(e, r),
        select: (r)=>r === void 0 ? Qo(e) : Qo(r, e)
    });
}
function Qu(e) {
    return pe({
        [Oe]: ()=>({
                match: (r)=>{
                    let t = {}, n = (i, o)=>{
                        t[i] = o;
                    };
                    return r === void 0 ? (Ge(e).forEach((i)=>n(i, void 0)), {
                        matched: !0,
                        selections: t
                    }) : {
                        matched: Ee(e, r, n),
                        selections: t
                    };
                },
                getSelectionKeys: ()=>Ge(e),
                matcherType: "optional"
            })
    });
}
function q(...e) {
    return pe({
        [Oe]: ()=>({
                match: (r)=>{
                    let t = {}, n = (i, o)=>{
                        t[i] = o;
                    };
                    return {
                        matched: e.every((i)=>Ee(i, r, n)),
                        selections: t
                    };
                },
                getSelectionKeys: ()=>Zr(e, Ge),
                matcherType: "and"
            })
    });
}
function Wu(...e) {
    return pe({
        [Oe]: ()=>({
                match: (r)=>{
                    let t = {}, n = (i, o)=>{
                        t[i] = o;
                    };
                    return Zr(e, Ge).forEach((i)=>n(i, void 0)), {
                        matched: e.some((i)=>Ee(i, r, n)),
                        selections: t
                    };
                },
                getSelectionKeys: ()=>Zr(e, Ge),
                matcherType: "or"
            })
    });
}
function A(e) {
    return {
        [Oe]: ()=>({
                match: (r)=>({
                        matched: !!e(r)
                    })
            })
    };
}
function Qo(...e) {
    let r = typeof e[0] == "string" ? e[0] : void 0, t = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
    return pe({
        [Oe]: ()=>({
                match: (n)=>{
                    let i = {
                        [r ?? Wt]: n
                    };
                    return {
                        matched: t === void 0 || Ee(t, n, (o, s)=>{
                            i[o] = s;
                        }),
                        selections: i
                    };
                },
                getSelectionKeys: ()=>[
                        r ?? Wt
                    ].concat(t === void 0 ? [] : Ge(t))
            })
    });
}
function ye(e) {
    return typeof e == "number";
}
function Ve(e) {
    return typeof e == "string";
}
function je(e) {
    return typeof e == "bigint";
}
var eg = pe(A(function(e) {
    return !0;
}));
var Be = (e)=>Object.assign(pe(e), {
        startsWith: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && n.startsWith(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        },
        endsWith: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && n.endsWith(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        },
        minLength: (r)=>Be(q(e, ((t)=>A((n)=>Ve(n) && n.length >= t))(r))),
        length: (r)=>Be(q(e, ((t)=>A((n)=>Ve(n) && n.length === t))(r))),
        maxLength: (r)=>Be(q(e, ((t)=>A((n)=>Ve(n) && n.length <= t))(r))),
        includes: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && n.includes(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        },
        regex: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && !!n.match(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        }
    }), rg = Be(A(Ve)), be = (e)=>Object.assign(pe(e), {
        between: (r, t)=>be(q(e, ((n, i)=>A((o)=>ye(o) && n <= o && i >= o))(r, t))),
        lt: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n < t))(r))),
        gt: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n > t))(r))),
        lte: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n <= t))(r))),
        gte: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n >= t))(r))),
        int: ()=>be(q(e, A((r)=>ye(r) && Number.isInteger(r)))),
        finite: ()=>be(q(e, A((r)=>ye(r) && Number.isFinite(r)))),
        positive: ()=>be(q(e, A((r)=>ye(r) && r > 0))),
        negative: ()=>be(q(e, A((r)=>ye(r) && r < 0)))
    }), tg = be(A(ye)), Ue = (e)=>Object.assign(pe(e), {
        between: (r, t)=>Ue(q(e, ((n, i)=>A((o)=>je(o) && n <= o && i >= o))(r, t))),
        lt: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n < t))(r))),
        gt: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n > t))(r))),
        lte: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n <= t))(r))),
        gte: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n >= t))(r))),
        positive: ()=>Ue(q(e, A((r)=>je(r) && r > 0))),
        negative: ()=>Ue(q(e, A((r)=>je(r) && r < 0)))
    }), ng = Ue(A(je)), ig = pe(A(function(e) {
    return typeof e == "boolean";
})), og = pe(A(function(e) {
    return typeof e == "symbol";
})), sg = pe(A(function(e) {
    return e == null;
})), ag = pe(A(function(e) {
    return e != null;
}));
var ci = class extends Error {
    constructor(r){
        let t;
        try {
            t = JSON.stringify(r);
        } catch  {
            t = r;
        }
        super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = r;
    }
}, pi = {
    matched: !1,
    value: void 0
};
function hr(e) {
    return new di(e, pi);
}
var di = class e {
    constructor(r, t){
        this.input = void 0, this.state = void 0, this.input = r, this.state = t;
    }
    with(...r) {
        if (this.state.matched) return this;
        let t = r[r.length - 1], n = [
            r[0]
        ], i;
        r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
        let o = !1, s = {}, a = (u, c)=>{
            o = !0, s[u] = c;
        }, l = !n.some((u)=>Ee(u, this.input, a)) || i && !i(this.input) ? pi : {
            matched: !0,
            value: t(o ? Wt in s ? s[Wt] : s : this.input, this.input)
        };
        return new e(this.input, l);
    }
    when(r, t) {
        if (this.state.matched) return this;
        let n = !!r(this.input);
        return new e(this.input, n ? {
            matched: !0,
            value: t(this.input, this.input)
        } : pi);
    }
    otherwise(r) {
        return this.state.matched ? this.state.value : r(this.input);
    }
    exhaustive() {
        if (this.state.matched) return this.state.value;
        throw new ci(this.input);
    }
    run() {
        return this.exhaustive();
    }
    returnType() {
        return this;
    }
};
var Ho = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
var Ju = {
    warn: Ie("prisma:warn")
}, Ku = {
    warn: ()=>!process.env.PRISMA_DISABLE_WARNINGS
};
function Jt(e, ...r) {
    Ku.warn() && console.warn(`${Ju.warn} ${e}`, ...r);
}
var Hu = (0, Ho.promisify)(Ko.default.exec), ee = gr("prisma:get-platform"), Yu = [
    "1.0.x",
    "1.1.x",
    "3.0.x"
];
async function Yo() {
    let e = Ht.default.platform(), r = process.arch;
    if (e === "freebsd") {
        let s = await Yt("freebsd-version");
        if (s && s.trim().length > 0) {
            let l = /^(\d+)\.?/.exec(s);
            if (l) return {
                platform: "freebsd",
                targetDistro: `freebsd${l[1]}`,
                arch: r
            };
        }
    }
    if (e !== "linux") return {
        platform: e,
        arch: r
    };
    let t = await Zu(), n = await sc(), i = ec({
        arch: r,
        archFromUname: n,
        familyDistro: t.familyDistro
    }), { libssl: o } = await rc(i);
    return {
        platform: "linux",
        libssl: o,
        arch: r,
        archFromUname: n,
        ...t
    };
}
function zu(e) {
    let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = hr({
        id: i,
        idLike: s
    }).with({
        id: "alpine"
    }, ({ id: l })=>({
            targetDistro: "musl",
            familyDistro: l,
            originalDistro: l
        })).with({
        id: "raspbian"
    }, ({ id: l })=>({
            targetDistro: "arm",
            familyDistro: "debian",
            originalDistro: l
        })).with({
        id: "nixos"
    }, ({ id: l })=>({
            targetDistro: "nixos",
            originalDistro: l,
            familyDistro: "nixos"
        })).with({
        id: "debian"
    }, {
        id: "ubuntu"
    }, ({ id: l })=>({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l
        })).with({
        id: "rhel"
    }, {
        id: "centos"
    }, {
        id: "fedora"
    }, ({ id: l })=>({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l
        })).when(({ idLike: l })=>l.includes("debian") || l.includes("ubuntu"), ({ id: l })=>({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l
        })).when(({ idLike: l })=>i === "arch" || l.includes("arch"), ({ id: l })=>({
            targetDistro: "debian",
            familyDistro: "arch",
            originalDistro: l
        })).when(({ idLike: l })=>l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l })=>({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l
        })).otherwise(({ id: l })=>({
            targetDistro: void 0,
            familyDistro: void 0,
            originalDistro: l
        }));
    return ee(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
}
async function Zu() {
    let e = "/etc/os-release";
    try {
        let r = await mi.default.readFile(e, {
            encoding: "utf-8"
        });
        return zu(r);
    } catch  {
        return {
            targetDistro: void 0,
            familyDistro: void 0,
            originalDistro: void 0
        };
    }
}
function Xu(e) {
    let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (r) {
        let t = `${r[1]}.x`;
        return zo(t);
    }
}
function Wo(e) {
    let r = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (r) {
        let t = `${r[1]}${r[2] ?? ".0"}.x`;
        return zo(t);
    }
}
function zo(e) {
    let r = (()=>{
        if (Xo(e)) return e;
        let t = e.split(".");
        return t[1] = "0", t.join(".");
    })();
    if (Yu.includes(r)) return r;
}
function ec(e) {
    return hr(e).with({
        familyDistro: "musl"
    }, ()=>(ee('Trying platform-specific paths for "alpine"'), [
            "/lib",
            "/usr/lib"
        ])).with({
        familyDistro: "debian"
    }, ({ archFromUname: r })=>(ee('Trying platform-specific paths for "debian" (and "ubuntu")'), [
            `/usr/lib/${r}-linux-gnu`,
            `/lib/${r}-linux-gnu`
        ])).with({
        familyDistro: "rhel"
    }, ()=>(ee('Trying platform-specific paths for "rhel"'), [
            "/lib64",
            "/usr/lib64"
        ])).otherwise(({ familyDistro: r, arch: t, archFromUname: n })=>(ee(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
}
async function rc(e) {
    let r = 'grep -v "libssl.so.0"', t = await Jo(e);
    if (t) {
        ee(`Found libssl.so file using platform-specific paths: ${t}`);
        let o = Wo(t);
        if (ee(`The parsed libssl version is: ${o}`), o) return {
            libssl: o,
            strategy: "libssl-specific-path"
        };
    }
    ee('Falling back to "ldconfig" and other generic paths');
    let n = await Yt(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
    if (n || (n = await Jo([
        "/lib64",
        "/usr/lib64",
        "/lib",
        "/usr/lib"
    ])), n) {
        ee(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = Wo(n);
        if (ee(`The parsed libssl version is: ${o}`), o) return {
            libssl: o,
            strategy: "ldconfig"
        };
    }
    let i = await Yt("openssl version -v");
    if (i) {
        ee(`Found openssl binary with version: ${i}`);
        let o = Xu(i);
        if (ee(`The parsed openssl version is: ${o}`), o) return {
            libssl: o,
            strategy: "openssl-binary"
        };
    }
    return ee("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function Jo(e) {
    for (let r of e){
        let t = await tc(r);
        if (t) return t;
    }
}
async function tc(e) {
    try {
        return (await mi.default.readdir(e)).find((t)=>t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
    } catch (r) {
        if (r.code === "ENOENT") return;
        throw r;
    }
}
async function ir() {
    let { binaryTarget: e } = await Zo();
    return e;
}
function nc(e) {
    return e.binaryTarget !== void 0;
}
async function fi() {
    let { memoized: e, ...r } = await Zo();
    return r;
}
var Kt = {};
async function Zo() {
    if (nc(Kt)) return Promise.resolve({
        ...Kt,
        memoized: !0
    });
    let e = await Yo(), r = ic(e);
    return Kt = {
        ...e,
        binaryTarget: r
    }, {
        ...Kt,
        memoized: !1
    };
}
function ic(e) {
    let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    r === "linux" && ![
        "x64",
        "arm64"
    ].includes(t) && Jt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (r === "linux" && i === void 0) {
        let c = hr({
            familyDistro: s
        }).with({
            familyDistro: "debian"
        }, ()=>"Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(()=>"Please manually install OpenSSL and try installing Prisma again.");
        Jt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (r === "linux" && o === void 0 && ee(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
    if (r === "darwin") return "darwin";
    if (r === "win32") return "windows";
    if (r === "freebsd") return o;
    if (r === "openbsd") return "openbsd";
    if (r === "netbsd") return "netbsd";
    if (r === "linux" && o === "nixos") return "linux-nixos";
    if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
    if (r === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Xo(i) ? c : `${c}-openssl-${i}`;
    }
    return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && Jt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function oc(e) {
    try {
        return await e();
    } catch  {
        return;
    }
}
function Yt(e) {
    return oc(async ()=>{
        let r = await Hu(e);
        return ee(`Command "${e}" successfully returned "${r.stdout}"`), r.stdout;
    });
}
async function sc() {
    return typeof Ht.default.machine == "function" ? Ht.default.machine() : (await Yt("uname -m"))?.trim();
}
function Xo(e) {
    return e.startsWith("1.");
}
var Xt = {};
tr(Xt, {
    beep: ()=>kc,
    clearScreen: ()=>Cc,
    clearTerminal: ()=>Ic,
    cursorBackward: ()=>mc,
    cursorDown: ()=>pc,
    cursorForward: ()=>dc,
    cursorGetPosition: ()=>hc,
    cursorHide: ()=>Ec,
    cursorLeft: ()=>ts,
    cursorMove: ()=>cc,
    cursorNextLine: ()=>yc,
    cursorPrevLine: ()=>bc,
    cursorRestorePosition: ()=>gc,
    cursorSavePosition: ()=>fc,
    cursorShow: ()=>wc,
    cursorTo: ()=>uc,
    cursorUp: ()=>rs,
    enterAlternativeScreen: ()=>Dc,
    eraseDown: ()=>Tc,
    eraseEndLine: ()=>vc,
    eraseLine: ()=>ns,
    eraseLines: ()=>xc,
    eraseScreen: ()=>gi,
    eraseStartLine: ()=>Pc,
    eraseUp: ()=>Sc,
    exitAlternativeScreen: ()=>Oc,
    iTerm: ()=>Lc,
    image: ()=>Nc,
    link: ()=>_c,
    scrollDown: ()=>Ac,
    scrollUp: ()=>Rc
});
var Zt = O(__turbopack_context__.r("[externals]/node:process [external] (node:process, cjs)"), 1);
var zt = globalThis.window?.document !== void 0, gg = globalThis.process?.versions?.node !== void 0, hg = globalThis.process?.versions?.bun !== void 0, yg = globalThis.Deno?.version?.deno !== void 0, bg = globalThis.process?.versions?.electron !== void 0, Eg = globalThis.navigator?.userAgent?.includes("jsdom") === !0, wg = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, xg = typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope, vg = typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope, Pg = typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope, Xr = globalThis.navigator?.userAgentData?.platform, Tg = Xr === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === !0 || globalThis.process?.platform === "darwin", Sg = Xr === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32", Rg = Xr === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === !0 || globalThis.navigator?.userAgent?.includes(" Linux ") === !0 || globalThis.process?.platform === "linux", Ag = Xr === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform), Cg = Xr === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === !0 || globalThis.process?.platform === "android";
var C = "\x1B[", rt = "\x1B]", yr = "\x07", et = ";", es = !zt && Zt.default.env.TERM_PROGRAM === "Apple_Terminal", ac = !zt && Zt.default.platform === "win32", lc = zt ? ()=>{
    throw new Error("`process.cwd()` only works in Node.js, not the browser.");
} : Zt.default.cwd, uc = (e, r)=>{
    if (typeof e != "number") throw new TypeError("The `x` argument is required");
    return typeof r != "number" ? C + (e + 1) + "G" : C + (r + 1) + et + (e + 1) + "H";
}, cc = (e, r)=>{
    if (typeof e != "number") throw new TypeError("The `x` argument is required");
    let t = "";
    return e < 0 ? t += C + -e + "D" : e > 0 && (t += C + e + "C"), r < 0 ? t += C + -r + "A" : r > 0 && (t += C + r + "B"), t;
}, rs = (e = 1)=>C + e + "A", pc = (e = 1)=>C + e + "B", dc = (e = 1)=>C + e + "C", mc = (e = 1)=>C + e + "D", ts = C + "G", fc = es ? "\x1B7" : C + "s", gc = es ? "\x1B8" : C + "u", hc = C + "6n", yc = C + "E", bc = C + "F", Ec = C + "?25l", wc = C + "?25h", xc = (e)=>{
    let r = "";
    for(let t = 0; t < e; t++)r += ns + (t < e - 1 ? rs() : "");
    return e && (r += ts), r;
}, vc = C + "K", Pc = C + "1K", ns = C + "2K", Tc = C + "J", Sc = C + "1J", gi = C + "2J", Rc = C + "S", Ac = C + "T", Cc = "\x1Bc", Ic = ac ? `${gi}${C}0f` : `${gi}${C}3J${C}H`, Dc = C + "?1049h", Oc = C + "?1049l", kc = yr, _c = (e, r)=>[
        rt,
        "8",
        et,
        et,
        r,
        yr,
        e,
        rt,
        "8",
        et,
        et,
        yr
    ].join(""), Nc = (e, r = {})=>{
    let t = `${rt}1337;File=inline=1`;
    return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === !1 && (t += ";preserveAspectRatio=0"), t + ":" + Buffer.from(e).toString("base64") + yr;
}, Lc = {
    setCwd: (e = lc())=>`${rt}50;CurrentDir=${e}${yr}`,
    annotation (e, r = {}) {
        let t = `${rt}1337;`, n = r.x !== void 0, i = r.y !== void 0;
        if ((n || i) && !(n && i && r.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replaceAll("|", ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [
            e,
            r.length,
            r.x,
            r.y
        ] : [
            r.length,
            e
        ]).join("|") : t += e, t + yr;
    }
};
var en = O(cs(), 1);
function or(e, r, { target: t = "stdout", ...n } = {}) {
    return en.default[t] ? Xt.link(e, r) : n.fallback === !1 ? e : typeof n.fallback == "function" ? n.fallback(e, r) : `${e} (\u200B${r}\u200B)`;
}
or.isSupported = en.default.stdout;
or.stderr = (e, r, t = {})=>or(e, r, {
        target: "stderr",
        ...t
    });
or.stderr.isSupported = en.default.stderr;
function wi(e) {
    return or(e, e, {
        fallback: Y
    });
}
var Vc = ps(), xi = Vc.version;
function Er(e) {
    let r = jc();
    return r || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "client" ? "client" : Bc());
}
function jc() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
}
function Bc() {
    return "library";
}
function vi(e) {
    return e.name === "DriverAdapterError" && typeof e.cause == "object";
}
function rn(e) {
    return {
        ok: !0,
        value: e,
        map (r) {
            return rn(r(e));
        },
        flatMap (r) {
            return r(e);
        }
    };
}
function sr(e) {
    return {
        ok: !1,
        error: e,
        map () {
            return sr(e);
        },
        flatMap () {
            return sr(e);
        }
    };
}
var ds = N("driver-adapter-utils"), Pi = class {
    registeredErrors = [];
    consumeError(r) {
        return this.registeredErrors[r];
    }
    registerNewError(r) {
        let t = 0;
        for(; this.registeredErrors[t] !== void 0;)t++;
        return this.registeredErrors[t] = {
            error: r
        }, t;
    }
};
var tn = (e, r = new Pi)=>{
    let t = {
        adapterName: e.adapterName,
        errorRegistry: r,
        queryRaw: ke(r, e.queryRaw.bind(e)),
        executeRaw: ke(r, e.executeRaw.bind(e)),
        executeScript: ke(r, e.executeScript.bind(e)),
        dispose: ke(r, e.dispose.bind(e)),
        provider: e.provider,
        startTransaction: async (...n)=>(await ke(r, e.startTransaction.bind(e))(...n)).map((o)=>Uc(r, o))
    };
    return e.getConnectionInfo && (t.getConnectionInfo = Gc(r, e.getConnectionInfo.bind(e))), t;
}, Uc = (e, r)=>({
        adapterName: r.adapterName,
        provider: r.provider,
        options: r.options,
        queryRaw: ke(e, r.queryRaw.bind(r)),
        executeRaw: ke(e, r.executeRaw.bind(r)),
        commit: ke(e, r.commit.bind(r)),
        rollback: ke(e, r.rollback.bind(r))
    });
function ke(e, r) {
    return async (...t)=>{
        try {
            return rn(await r(...t));
        } catch (n) {
            if (ds("[error@wrapAsync]", n), vi(n)) return sr(n.cause);
            let i = e.registerNewError(n);
            return sr({
                kind: "GenericJs",
                id: i
            });
        }
    };
}
function Gc(e, r) {
    return (...t)=>{
        try {
            return rn(r(...t));
        } catch (n) {
            if (ds("[error@wrapSync]", n), vi(n)) return sr(n.cause);
            let i = e.registerNewError(n);
            return sr({
                kind: "GenericJs",
                id: i
            });
        }
    };
}
var Wc = O(on());
var M = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)")), Jc = O(on()), wh = N("prisma:engines");
function ms() {
    return M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../");
}
var xh = "libquery-engine";
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-darwin");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-darwin-arm64");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-debian-openssl-1.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-debian-openssl-1.1.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-debian-openssl-3.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-linux-static-x64");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-linux-static-arm64");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-rhel-openssl-1.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-rhel-openssl-1.1.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query-engine-rhel-openssl-3.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-darwin.dylib.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-darwin-arm64.dylib.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-debian-openssl-1.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-debian-openssl-1.1.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-debian-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-linux-musl.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-rhel-openssl-1.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-rhel-openssl-1.1.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../libquery_engine-rhel-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../query_engine-windows.dll.node");
var Si = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)")), fs = gr("chmodPlusX");
function Ri(e) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let r = Si.default.statSync(e), t = r.mode | 64 | 8 | 1;
    if (r.mode === t) {
        fs(`Execution permissions of ${e} are fine`);
        return;
    }
    let n = t.toString(8).slice(-3);
    fs(`Have to call chmodPlusX on ${e}`), Si.default.chmodSync(e, n);
}
function Ai(e) {
    let r = e.e, t = (a)=>`Prisma cannot find the required \`${a}\` system library in your system`, n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${wi("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ce(e.id)}\`).`, s = hr({
        message: r.message,
        code: r.code
    }).with({
        code: "ENOENT"
    }, ()=>"File does not exist.").when(({ message: a })=>n && a.includes("libz"), ()=>`${t("libz")}. Please install it and try again.`).when(({ message: a })=>n && a.includes("libgcc_s"), ()=>`${t("libgcc_s")}. Please install it and try again.`).when(({ message: a })=>n && a.includes("libssl"), ()=>{
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${t("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a })=>a.includes("GLIBC"), ()=>`Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a })=>e.platformInfo.platform === "linux" && a.includes("symbol not found"), ()=>`The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(()=>`The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${r.message}`;
}
var ys = O(hs(), 1);
function Ci(e) {
    let r = (0, ys.default)(e);
    if (r === 0) return e;
    let t = new RegExp(`^[ \\t]{${r}}`, "gm");
    return e.replace(t, "");
}
var bs = "prisma+postgres", sn = `${bs}:`;
function an(e) {
    return e?.toString().startsWith(`${sn}//`) ?? !1;
}
function Ii(e) {
    if (!an(e)) return !1;
    let { host: r } = new URL(e);
    return r.includes("localhost") || r.includes("127.0.0.1") || r.includes("[::1]");
}
var ws = O(Di());
function ki(e) {
    return String(new Oi(e));
}
var Oi = class {
    constructor(r){
        this.config = r;
    }
    toString() {
        let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({
            provider: t,
            binaryTargets: Kc(r.binaryTargets)
        }));
        return `generator ${r.name} {
${(0, ws.default)(Hc(n), 2)}
}`;
    }
};
function Kc(e) {
    let r;
    if (e.length > 0) {
        let t = e.find((n)=>n.fromEnvVar !== null);
        t ? r = `env("${t.fromEnvVar}")` : r = e.map((n)=>n.native ? "native" : n.value);
    } else r = void 0;
    return r;
}
function Hc(e) {
    let r = Object.keys(e).reduce((t, n)=>Math.max(t, n.length), 0);
    return Object.entries(e).map(([t, n])=>`${t.padEnd(r)} = ${Yc(n)}`).join(`
`);
}
function Yc(e) {
    return JSON.parse(JSON.stringify(e, (r, t)=>Array.isArray(t) ? `[${t.map((n)=>JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
}
var nt = {};
tr(nt, {
    error: ()=>Xc,
    info: ()=>Zc,
    log: ()=>zc,
    query: ()=>ep,
    should: ()=>xs,
    tags: ()=>tt,
    warn: ()=>_i
});
var tt = {
    error: ce("prisma:error"),
    warn: Ie("prisma:warn"),
    info: De("prisma:info"),
    query: nr("prisma:query")
}, xs = {
    warn: ()=>!process.env.PRISMA_DISABLE_WARNINGS
};
function zc(...e) {
    console.log(...e);
}
function _i(e, ...r) {
    xs.warn() && console.warn(`${tt.warn} ${e}`, ...r);
}
function Zc(e, ...r) {
    console.info(`${tt.info} ${e}`, ...r);
}
function Xc(e, ...r) {
    console.error(`${tt.error} ${e}`, ...r);
}
function ep(e, ...r) {
    console.log(`${tt.query} ${e}`, ...r);
}
function ln(e, r) {
    if (!e) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
}
function ar(e, r) {
    throw new Error(r);
}
function Ni({ onlyFirst: e = !1 } = {}) {
    let t = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
}
var rp = Ni();
function wr(e) {
    if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
    return e.replace(rp, "");
}
var it = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
function Li(e) {
    return it.default.sep === it.default.posix.sep ? e : e.split(it.default.sep).join(it.default.posix.sep);
}
var qi = O(As()), un = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"));
var xr = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
function Cs(e) {
    let r = e.ignoreProcessEnv ? {} : process.env, t = (n)=>n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
            let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
            if (!a) return o;
            let l = a[1], u, c;
            if (l === "\\") c = a[0], u = c.replace("\\$", "$");
            else {
                let p = a[2];
                c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e.parsed[p] || "", u = t(u);
            }
            return o.replace(c, u);
        }, n) ?? n;
    for(let n in e.parsed){
        let i = Object.hasOwnProperty.call(r, n) ? r[n] : e.parsed[n];
        e.parsed[n] = t(i);
    }
    for(let n in e.parsed)r[n] = e.parsed[n];
    return e;
}
var $i = gr("prisma:tryLoadEnv");
function st({ rootEnvPath: e, schemaEnvPath: r }, t = {
    conflictCheck: "none"
}) {
    let n = Is(e);
    t.conflictCheck !== "none" && hp(n, r, t.conflictCheck);
    let i = null;
    return Ds(n?.path, r) || (i = Is(r)), !n && !i && $i("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(W("Schema Env Error: ")) + i.dotenvResult.error) : {
        message: [
            n?.message,
            i?.message
        ].filter(Boolean).join(`
`),
        parsed: {
            ...n?.dotenvResult?.parsed,
            ...i?.dotenvResult?.parsed
        }
    };
}
function hp(e, r, t) {
    let n = e?.dotenvResult.parsed, i = !Ds(e?.path, r);
    if (n && r && i && un.default.existsSync(r)) {
        let o = qi.default.parse(un.default.readFileSync(r)), s = [];
        for(let a in o)n[a] === o[a] && s.push(a);
        if (s.length > 0) {
            let a = xr.default.relative(process.cwd(), e.path), l = xr.default.relative(process.cwd(), r);
            if (t === "error") {
                let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${Y(a)} and ${Y(l)}
Conflicting env vars:
${s.map((c)=>`  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${Y(l)} to ${Y(a)} to consolidate your env vars.
`;
                throw new Error(u);
            } else if (t === "warn") {
                let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c)=>W(c)).join(", ")} in ${Y(a)} and ${Y(l)}
Env vars from ${Y(l)} overwrite the ones from ${Y(a)}
      `;
                console.warn(`${Ie("warn(prisma)")} ${u}`);
            }
        }
    }
}
function Is(e) {
    if (yp(e)) {
        $i(`Environment variables loaded from ${e}`);
        let r = qi.default.config({
            path: e,
            debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0
        });
        return {
            dotenvResult: Cs(r),
            message: Ce(`Environment variables loaded from ${xr.default.relative(process.cwd(), e)}`),
            path: e
        };
    } else $i(`Environment variables not found at ${e}`);
    return null;
}
function Ds(e, r) {
    return e && r && xr.default.resolve(e) === xr.default.resolve(r);
}
function yp(e) {
    return !!(e && un.default.existsSync(e));
}
function Vi(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
}
function pn(e, r) {
    let t = {};
    for (let n of Object.keys(e))t[n] = r(e[n], n);
    return t;
}
function ji(e, r) {
    if (e.length === 0) return;
    let t = e[0];
    for(let n = 1; n < e.length; n++)r(t, e[n]) < 0 && (t = e[n]);
    return t;
}
function x(e, r) {
    Object.defineProperty(e, "name", {
        value: r,
        configurable: !0
    });
}
var ks = new Set, at = (e, r, ...t)=>{
    ks.has(e) || (ks.add(e), _i(r, ...t));
};
var P = class e extends Error {
    clientVersion;
    errorCode;
    retryable;
    constructor(r, t, n){
        super(r), this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
    }
};
x(P, "PrismaClientInitializationError");
var z = class extends Error {
    code;
    meta;
    clientVersion;
    batchRequestIdx;
    constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }){
        super(r), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", {
            value: o,
            enumerable: !1,
            writable: !0
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
    }
};
x(z, "PrismaClientKnownRequestError");
var ae = class extends Error {
    clientVersion;
    constructor(r, t){
        super(r), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
    }
};
x(ae, "PrismaClientRustPanicError");
var V = class extends Error {
    clientVersion;
    batchRequestIdx;
    constructor(r, { clientVersion: t, batchRequestIdx: n }){
        super(r), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", {
            value: n,
            writable: !0,
            enumerable: !1
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
    }
};
x(V, "PrismaClientUnknownRequestError");
var Z = class extends Error {
    name = "PrismaClientValidationError";
    clientVersion;
    constructor(r, { clientVersion: t }){
        super(r), this.clientVersion = t;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
    }
};
x(Z, "PrismaClientValidationError");
var we = class {
    _map = new Map;
    get(r) {
        return this._map.get(r)?.value;
    }
    set(r, t) {
        this._map.set(r, {
            value: t
        });
    }
    getOrCreate(r, t) {
        let n = this._map.get(r);
        if (n) return n.value;
        let i = t();
        return this.set(r, i), i;
    }
};
function We(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function _s(e, r) {
    let t = {};
    for (let n of e){
        let i = n[r];
        t[i] = n;
    }
    return t;
}
function lt(e) {
    let r;
    return {
        get () {
            return r || (r = {
                value: e()
            }), r.value;
        }
    };
}
function Ns(e) {
    return {
        models: Bi(e.models),
        enums: Bi(e.enums),
        types: Bi(e.types)
    };
}
function Bi(e) {
    let r = {};
    for (let { name: t, ...n } of e)r[t] = n;
    return r;
}
function vr(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function mn(e) {
    return e.toString() !== "Invalid Date";
}
var Pr = 9e15, Ye = 1e9, Ui = "0123456789abcdef", hn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", yn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Gi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Pr,
    maxE: Pr,
    crypto: !1
}, $s, Ne, w = !0, En = "[DecimalError] ", He = En + "Invalid argument: ", qs = En + "Precision limit exceeded", Vs = En + "crypto unavailable", js = "[object Decimal]", X = Math.floor, U = Math.pow, bp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ep = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, wp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Bs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, fe = 1e7, E = 7, xp = 9007199254740991, vp = hn.length - 1, Qi = yn.length - 1, m = {
    toStringTag: js
};
m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), y(e);
};
m.ceil = function() {
    return y(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function(e, r) {
    var t, n = this, i = n.constructor;
    if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
    if (e.gt(r)) throw Error(He + r);
    return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
m.comparedTo = m.cmp = function(e) {
    var r, t, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
    if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
    if (l !== u) return l;
    if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
    for(n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r)if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
m.cosine = m.cos = function() {
    var e, r, t = this, n = t.constructor;
    return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Pp(n, Js(n, t)), n.precision = e, n.rounding = r, y(Ne == 2 || Ne == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
m.cubeRoot = m.cbrt = function() {
    var e, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
    if (!c.isFinite() || c.isZero()) return new p(c);
    for(w = !1, o = c.s * U(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = J(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = U(t, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;;)if (a = n, l = a.times(a).times(a), u = l.plus(c), n = L(u.plus(c).times(a), u.plus(l), s + 2, 1), J(a.d).slice(0, s) === (t = J(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
        }
        s += 4, i = 1;
    } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
    }
    return w = !0, y(n, e, p.rounding, r);
};
m.decimalPlaces = m.dp = function() {
    var e, r = this.d, t = NaN;
    if (r) {
        if (e = r.length - 1, t = (e - X(this.e / E)) * E, e = r[e], e) for(; e % 10 == 0; e /= 10)t--;
        t < 0 && (t = 0);
    }
    return t;
};
m.dividedBy = m.div = function(e) {
    return L(this, new this.constructor(e));
};
m.dividedToIntegerBy = m.divToInt = function(e) {
    var r = this, t = r.constructor;
    return y(L(r, new t(e), 0, 1, 1), t.precision, t.rounding);
};
m.equals = m.eq = function(e) {
    return this.cmp(e) === 0;
};
m.floor = function() {
    return y(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0;
};
m.greaterThanOrEqualTo = m.gte = function(e) {
    var r = this.cmp(e);
    return r == 1 || r === 0;
};
m.hyperbolicCosine = m.cosh = function() {
    var e, r, t, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero()) return a;
    t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / xn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Tr(s, 1, o.times(r), new s(1), !0);
    for(var l, u = e, c = new s(8); u--;)l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
    return y(o, s.precision = t, s.rounding = n, !0);
};
m.hyperbolicSine = m.sinh = function() {
    var e, r, t, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero()) return new o(i);
    if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Tr(o, 2, i, i, !0);
    else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / xn(5, e)), i = Tr(o, 2, i, i, !0);
        for(var s, a = new o(5), l = new o(16), u = new o(20); e--;)s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o.precision = r, o.rounding = t, y(i, r, t, !0);
};
m.hyperbolicTangent = m.tanh = function() {
    var e, r, t = this, n = t.constructor;
    return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, L(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
m.inverseCosine = m.acos = function() {
    var e = this, r = e.constructor, t = e.abs().cmp(1), n = r.precision, i = r.rounding;
    return t !== -1 ? t === 0 ? e.isNeg() ? xe(r, n, i) : new r(0) : new r(NaN) : e.isZero() ? xe(r, n + 4, i).times(.5) : (r.precision = n + 6, r.rounding = 1, e = new r(1).minus(e).div(e.plus(1)).sqrt().atan(), r.precision = n, r.rounding = i, e.times(2));
};
m.inverseHyperbolicCosine = m.acosh = function() {
    var e, r, t = this, n = t.constructor;
    return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, w = !1, t = t.times(t).minus(1).sqrt().plus(t), w = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
m.inverseHyperbolicSine = m.asinh = function() {
    var e, r, t = this, n = t.constructor;
    return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, w = !1, t = t.times(t).plus(1).sqrt().plus(t), w = !0, n.precision = e, n.rounding = r, t.ln());
};
m.inverseHyperbolicTangent = m.atanh = function() {
    var e, r, t, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, r, !0) : (o.precision = t = n - i.e, i = L(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(.5))) : new o(NaN);
};
m.inverseSine = m.asin = function() {
    var e, r, t, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = xe(o, t + 4, n).times(.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
m.inverseTangent = m.atan = function() {
    var e, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
    if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Qi) return s = xe(c, p + 4, d).times(.25), s.s = u.s, s;
    } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Qi) return s = xe(c, p + 4, d).times(.5), s.s = u.s, s;
    }
    for(c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / E + 2 | 0), e = t; e; --e)u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for(w = !1, r = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1;)if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for(e = r; s.d[e] === o.d[e] && e--;);
    return t && (s = s.times(2 << t - 1)), w = !0, y(s, c.precision = p, c.rounding = d, !0);
};
m.isFinite = function() {
    return !!this.d;
};
m.isInteger = m.isInt = function() {
    return !!this.d && X(this.e / E) > this.d.length - 2;
};
m.isNaN = function() {
    return !this.s;
};
m.isNegative = m.isNeg = function() {
    return this.s < 0;
};
m.isPositive = m.isPos = function() {
    return this.s > 0;
};
m.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function(e) {
    return this.cmp(e) < 0;
};
m.lessThanOrEqualTo = m.lte = function(e) {
    return this.cmp(e) < 1;
};
m.logarithm = m.log = function(e) {
    var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
    if (e == null) e = new c(10), r = !0;
    else {
        if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1)) return new c(NaN);
        r = e.eq(10);
    }
    if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
    if (r) if (t.length > 1) o = !0;
    else {
        for(i = t[0]; i % 10 === 0;)i /= 10;
        o = i !== 1;
    }
    if (w = !1, a = p + f, s = Ke(u, a), n = r ? bn(c, a + 10) : Ke(e, a), l = L(s, n, a, 1), ut(l.d, i = p, d)) do if (a += 10, s = Ke(u, a), n = r ? bn(c, a + 10) : Ke(e, a), l = L(s, n, a, 1), !o) {
        +J(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
        break;
    }
    while (ut(l.d, i += 10, d))
    return w = !0, y(l, p, d);
};
m.minus = m.sub = function(e) {
    var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.constructor;
    if (e = new h(e), !f.d || !e.d) return !f.s || !e.s ? e = new h(NaN) : f.d ? e.s = -e.s : e = new h(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s) return e.s = -e.s, f.plus(e);
    if (u = f.d, d = e.d, a = h.precision, l = h.rounding, !u[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (u[0]) e = new h(f);
        else return new h(l === 3 ? -0 : 0);
        return w ? y(e, a, l) : e;
    }
    if (t = X(e.e / E), c = X(f.e / E), u = u.slice(), o = c - t, o) {
        for(p = o < 0, p ? (r = u, o = -o, s = d.length) : (r = d, t = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--;)r.push(0);
        r.reverse();
    } else {
        for(n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
        }
        o = 0;
    }
    for(p && (r = u, u = d, d = r, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)u[s++] = 0;
    for(n = d.length; n > o;){
        if (u[--n] < d[n]) {
            for(i = n; i && u[--i] === 0;)u[i] = fe - 1;
            --u[i], u[n] += fe;
        }
        u[n] -= d[n];
    }
    for(; u[--s] === 0;)u.pop();
    for(; u[0] === 0; u.shift())--t;
    return u[0] ? (e.d = u, e.e = wn(u, t), w ? y(e, a, l) : e) : new h(l === 3 ? -0 : 0);
};
m.modulo = m.mod = function(e) {
    var r, t = this, n = t.constructor;
    return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (w = !1, n.modulo == 9 ? (r = L(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = L(t, e, 0, n.modulo, 1), r = r.times(e), w = !0, t.minus(r));
};
m.naturalExponential = m.exp = function() {
    return Wi(this);
};
m.naturalLogarithm = m.ln = function() {
    return Ke(this);
};
m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, y(e);
};
m.plus = m.add = function(e) {
    var r, t, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
    if (e = new d(e), !p.d || !e.d) return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
    if (p.s != e.s) return e.s = -e.s, p.minus(e);
    if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e = new d(p)), w ? y(e, a, l) : e;
    if (o = X(p.e / E), n = X(e.e / E), u = u.slice(), i = o - n, i) {
        for(i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--;)t.push(0);
        t.reverse();
    }
    for(s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i;)r = (u[--i] = u[i] + c[i] + r) / fe | 0, u[i] %= fe;
    for(r && (u.unshift(r), ++n), s = u.length; u[--s] == 0;)u.pop();
    return e.d = u, e.e = wn(u, n), w ? y(e, a, l) : e;
};
m.precision = m.sd = function(e) {
    var r, t = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(He + e);
    return t.d ? (r = Us(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
m.round = function() {
    var e = this, r = e.constructor;
    return y(new r(e), e.e + 1, r.rounding);
};
m.sine = m.sin = function() {
    var e, r, t = this, n = t.constructor;
    return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Sp(n, Js(n, t)), n.precision = e, n.rounding = r, y(Ne > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
m.squareRoot = m.sqrt = function() {
    var e, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
    if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for(w = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = J(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = X((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3;;)if (o = n, n = o.plus(L(s, o, t + 2, 1)).times(.5), J(o.d).slice(0, t) === (r = J(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
        }
        t += 4, i = 1;
    } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
    }
    return w = !0, y(n, l, c.rounding, e);
};
m.tangent = m.tan = function() {
    var e, r, t = this, n = t.constructor;
    return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = L(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, y(Ne == 2 || Ne == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
m.times = m.mul = function(e) {
    var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
    if (e.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
    for(t = X(c.e / E) + X(e.e / E), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--;)o.push(0);
    for(n = u; --n >= 0;){
        for(r = 0, i = l + n; i > n;)a = o[i] + f[n] * d[i - n - 1] + r, o[i--] = a % fe | 0, r = a / fe | 0;
        o[i] = (o[i] + r) % fe | 0;
    }
    for(; !o[--s];)o.pop();
    return r ? ++t : o.shift(), e.d = o, e.e = wn(o, t), w ? y(e, p.precision, p.rounding) : e;
};
m.toBinary = function(e, r) {
    return Ji(this, 2, e, r);
};
m.toDecimalPlaces = m.toDP = function(e, r) {
    var t = this, n = t.constructor;
    return t = new n(t), e === void 0 ? t : (ne(e, 0, Ye), r === void 0 ? r = n.rounding : ne(r, 0, 8), y(t, e + t.e + 1, r));
};
m.toExponential = function(e, r) {
    var t, n = this, i = n.constructor;
    return e === void 0 ? t = ve(n, !0) : (ne(e, 0, Ye), r === void 0 ? r = i.rounding : ne(r, 0, 8), n = y(new i(n), e + 1, r), t = ve(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
m.toFixed = function(e, r) {
    var t, n, i = this, o = i.constructor;
    return e === void 0 ? t = ve(i) : (ne(e, 0, Ye), r === void 0 ? r = o.rounding : ne(r, 0, 8), n = y(new o(i), e + i.e + 1, r), t = ve(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
m.toFraction = function(e) {
    var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.d, g = f.constructor;
    if (!h) return new g(f);
    if (u = t = new g(1), n = l = new g(0), r = new g(n), o = r.e = Us(h) - f.e - 1, s = o % E, r.d[0] = U(10, s < 0 ? E + s : s), e == null) e = o > 0 ? r : u;
    else {
        if (a = new g(e), !a.isInt() || a.lt(u)) throw Error(He + a);
        e = a.gt(r) ? o > 0 ? r : u : a;
    }
    for(w = !1, a = new g(J(h)), c = g.precision, g.precision = o = h.length * E * 2; p = L(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e) != 1;)t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
    return i = L(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, d = L(u, n, o, 1).minus(f).abs().cmp(L(l, t, o, 1).minus(f).abs()) < 1 ? [
        u,
        n
    ] : [
        l,
        t
    ], g.precision = c, w = !0, d;
};
m.toHexadecimal = m.toHex = function(e, r) {
    return Ji(this, 16, e, r);
};
m.toNearest = function(e, r) {
    var t = this, n = t.constructor;
    if (t = new n(t), e == null) {
        if (!t.d) return t;
        e = new n(1), r = n.rounding;
    } else {
        if (e = new n(e), r === void 0 ? r = n.rounding : ne(r, 0, 8), !t.d) return e.s ? t : e;
        if (!e.d) return e.s && (e.s = t.s), e;
    }
    return e.d[0] ? (w = !1, t = L(t, e, 0, r, 1).times(e), w = !0, y(t)) : (e.s = t.s, t = e), t;
};
m.toNumber = function() {
    return +this;
};
m.toOctal = function(e, r) {
    return Ji(this, 8, e, r);
};
m.toPower = m.pow = function(e) {
    var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(U(+a, u));
    if (a = new l(a), a.eq(1)) return a;
    if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
    if (r = X(e.e / E), r >= e.d.length - 1 && (t = u < 0 ? -u : u) <= xp) return i = Gs(l, a, t, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
    if (s = a.s, s < 0) {
        if (r < e.d.length - 1) return new l(NaN);
        if ((e.d[r] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
    }
    return t = U(+a, u), r = t == 0 || !isFinite(t) ? X(u * (Math.log("0." + J(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (w = !1, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = Wi(e.times(Ke(a, n + t)), n), i.d && (i = y(i, n + 5, 1), ut(i.d, n, o) && (r = n + 10, i = y(Wi(e.times(Ke(a, r + t)), r), r + 5, 1), +J(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, w = !0, l.rounding = o, y(i, n, o));
};
m.toPrecision = function(e, r) {
    var t, n = this, i = n.constructor;
    return e === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ne(e, 1, Ye), r === void 0 ? r = i.rounding : ne(r, 0, 8), n = y(new i(n), e, r), t = ve(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
m.toSignificantDigits = m.toSD = function(e, r) {
    var t = this, n = t.constructor;
    return e === void 0 ? (e = n.precision, r = n.rounding) : (ne(e, 1, Ye), r === void 0 ? r = n.rounding : ne(r, 0, 8)), y(new n(t), e, r);
};
m.toString = function() {
    var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + t : t;
};
m.truncated = m.trunc = function() {
    return y(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function() {
    var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
    return e.isNeg() ? "-" + t : t;
};
function J(e) {
    var r, t, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
        for(o += s, r = 1; r < i; r++)n = e[r] + "", t = E - n.length, t && (o += Je(t)), o += n;
        s = e[r], n = s + "", t = E - n.length, t && (o += Je(t));
    } else if (s === 0) return "0";
    for(; s % 10 === 0;)s /= 10;
    return o + s;
}
function ne(e, r, t) {
    if (e !== ~~e || e < r || e > t) throw Error(He + e);
}
function ut(e, r, t, n) {
    var i, o, s, a;
    for(o = e[0]; o >= 10; o /= 10)--r;
    return --r < 0 ? (r += E, i = 0) : (i = Math.ceil((r + 1) / E), r %= E), o = U(10, E - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == U(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == U(10, r - 3) - 1, s;
}
function fn(e, r, t) {
    for(var n, i = [
        0
    ], o, s = 0, a = e.length; s < a;){
        for(o = i.length; o--;)i[o] *= r;
        for(i[0] += Ui.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
    }
    return i.reverse();
}
function Pp(e, r) {
    var t, n, i;
    if (r.isZero()) return r;
    n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / xn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Tr(e, 1, r.times(i), new e(1));
    for(var o = t; o--;){
        var s = r.times(r);
        r = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= t, r;
}
var L = function() {
    function e(n, i, o) {
        var s, a = 0, l = n.length;
        for(n = n.slice(); l--;)s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
    }
    function r(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for(a = l = 0; a < o; a++)if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
        }
        return l;
    }
    function t(n, i, o, s) {
        for(var a = 0; o--;)n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for(; !n[0] && n.length > 1;)n.shift();
    }
    return function(n, i, o, s, a, l) {
        var u, c, p, d, f, h, g, I, T, S, b, D, me, se, Kr, j, te, Ae, K, fr, Vt = n.constructor, ti = n.s == i.s ? 1 : -1, H = n.d, k = i.d;
        if (!H || !H[0] || !k || !k[0]) return new Vt(!n.s || !i.s || (H ? k && H[0] == k[0] : !k) ? NaN : H && H[0] == 0 || !k ? ti * 0 : ti / 0);
        for(l ? (f = 1, c = n.e - i.e) : (l = fe, f = E, c = X(n.e / f) - X(i.e / f)), K = k.length, te = H.length, T = new Vt(ti), S = T.d = [], p = 0; k[p] == (H[p] || 0); p++);
        if (k[p] > (H[p] || 0) && c--, o == null ? (se = o = Vt.precision, s = Vt.rounding) : a ? se = o + (n.e - i.e) + 1 : se = o, se < 0) S.push(1), h = !0;
        else {
            if (se = se / f + 2 | 0, p = 0, K == 1) {
                for(d = 0, k = k[0], se++; (p < te || d) && se--; p++)Kr = d * l + (H[p] || 0), S[p] = Kr / k | 0, d = Kr % k | 0;
                h = d || p < te;
            } else {
                for(d = l / (k[0] + 1) | 0, d > 1 && (k = e(k, d, l), H = e(H, d, l), K = k.length, te = H.length), j = K, b = H.slice(0, K), D = b.length; D < K;)b[D++] = 0;
                fr = k.slice(), fr.unshift(0), Ae = k[0], k[1] >= l / 2 && ++Ae;
                do d = 0, u = r(k, b, K, D), u < 0 ? (me = b[0], K != D && (me = me * l + (b[1] || 0)), d = me / Ae | 0, d > 1 ? (d >= l && (d = l - 1), g = e(k, d, l), I = g.length, D = b.length, u = r(g, b, I, D), u == 1 && (d--, t(g, K < I ? fr : k, I, l))) : (d == 0 && (u = d = 1), g = k.slice()), I = g.length, I < D && g.unshift(0), t(b, g, D, l), u == -1 && (D = b.length, u = r(k, b, K, D), u < 1 && (d++, t(b, K < D ? fr : k, D, l))), D = b.length) : u === 0 && (d++, b = [
                    0
                ]), S[p++] = d, u && b[0] ? b[D++] = H[j] || 0 : (b = [
                    H[j]
                ], D = 1);
                while ((j++ < te || b[0] !== void 0) && se--)
                h = b[0] !== void 0;
            }
            S[0] || S.shift();
        }
        if (f == 1) T.e = c, $s = h;
        else {
            for(p = 1, d = S[0]; d >= 10; d /= 10)p++;
            T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, h);
        }
        return T;
    };
}();
function y(e, r, t, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor;
    e: if (r != null) {
        if (p = e.d, !p) return e;
        for(i = 1, a = p[0]; a >= 10; a /= 10)i++;
        if (o = r - i, o < 0) o += E, s = r, c = p[d = 0], l = c / U(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / E), a = p.length, d >= a) if (n) {
            for(; a++ <= d;)p.push(0);
            c = l = 0, i = 1, o %= E, s = o - E + 1;
        } else break e;
        else {
            for(c = a = p[d], i = 1; a >= 10; a /= 10)i++;
            o %= E, s = o - E + i, l = s < 0 ? 0 : c / U(10, i - s - 1) % 10 | 0;
        }
        if (n = n || r < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % U(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / U(10, i - s) : 0 : p[d - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e.e + 1, p[0] = U(10, (E - r % E) % E), e.e = -r || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = U(10, E - o), p[d] = s > 0 ? (c / U(10, i - s) % U(10, s) | 0) * a : 0), u) for(;;)if (d == 0) {
            for(o = 1, s = p[0]; s >= 10; s /= 10)o++;
            for(s = p[0] += a, a = 1; s >= 10; s /= 10)a++;
            o != a && (e.e++, p[0] == fe && (p[0] = 1));
            break;
        } else {
            if (p[d] += a, p[d] != fe) break;
            p[d--] = 0, a = 1;
        }
        for(o = p.length; p[--o] === 0;)p.pop();
    }
    return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [
        0
    ])), e;
}
function ve(e, r, t) {
    if (!e.isFinite()) return Ws(e);
    var n, i = e.e, o = J(e.d), s = o.length;
    return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Je(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Je(-i - 1) + o, t && (n = t - s) > 0 && (o += Je(n))) : i >= s ? (o += Je(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + Je(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += Je(n))), o;
}
function wn(e, r) {
    var t = e[0];
    for(r *= E; t >= 10; t /= 10)r++;
    return r;
}
function bn(e, r, t) {
    if (r > vp) throw w = !0, t && (e.precision = t), Error(qs);
    return y(new e(hn), r, 1, !0);
}
function xe(e, r, t) {
    if (r > Qi) throw Error(qs);
    return y(new e(yn), r, t, !0);
}
function Us(e) {
    var r = e.length - 1, t = r * E + 1;
    if (r = e[r], r) {
        for(; r % 10 == 0; r /= 10)t--;
        for(r = e[0]; r >= 10; r /= 10)t++;
    }
    return t;
}
function Je(e) {
    for(var r = ""; e--;)r += "0";
    return r;
}
function Gs(e, r, t, n) {
    var i, o = new e(1), s = Math.ceil(n / E + 4);
    for(w = !1;;){
        if (t % 2 && (o = o.times(r), Fs(o.d, s) && (i = !0)), t = X(t / 2), t === 0) {
            t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
            break;
        }
        r = r.times(r), Fs(r.d, s);
    }
    return w = !0, o;
}
function Ls(e) {
    return e.d[e.d.length - 1] & 1;
}
function Qs(e, r, t) {
    for(var n, i, o = new e(r[0]), s = 0; ++s < r.length;){
        if (i = new e(r[s]), !i.s) {
            o = i;
            break;
        }
        n = o.cmp(i), (n === t || n === 0 && o.s === t) && (o = i);
    }
    return o;
}
function Wi(e, r) {
    var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, h = d.precision;
    if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for(r == null ? (w = !1, l = h) : l = r, a = new d(.03125); e.e > -2;)e = e.times(a), p += 5;
    for(n = Math.log(U(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new d(1), d.precision = l;;){
        if (o = y(o.times(e), l, 1), t = t.times(++c), a = s.plus(L(o, t, l, 1)), J(a.d).slice(0, l) === J(s.d).slice(0, l)) {
            for(i = p; i--;)s = y(s.times(s), l, 1);
            if (r == null) if (u < 3 && ut(s.d, l - n, f, u)) d.precision = l += 10, t = o = a = new d(1), c = 0, u++;
            else return y(s, d.precision = h, f, w = !0);
            else return d.precision = h, s;
        }
        s = a;
    }
}
function Ke(e, r) {
    var t, n, i, o, s, a, l, u, c, p, d, f = 1, h = 10, g = e, I = g.d, T = g.constructor, S = T.rounding, b = T.precision;
    if (g.s < 0 || !I || !I[0] || !g.e && I[0] == 1 && I.length == 1) return new T(I && !I[0] ? -1 / 0 : g.s != 1 ? NaN : I ? 0 : g);
    if (r == null ? (w = !1, c = b) : c = r, T.precision = c += h, t = J(I), n = t.charAt(0), Math.abs(o = g.e) < 15e14) {
        for(; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3;)g = g.times(e), t = J(g.d), n = t.charAt(0), f++;
        o = g.e, n > 1 ? (g = new T("0." + t), o++) : g = new T(n + "." + t.slice(1));
    } else return u = bn(T, c + 2, b).times(o + ""), g = Ke(new T(n + "." + t.slice(1)), c - h).plus(u), T.precision = b, r == null ? y(g, b, S, w = !0) : g;
    for(p = g, l = s = g = L(g.minus(1), g.plus(1), c, 1), d = y(g.times(g), c, 1), i = 3;;){
        if (s = y(s.times(d), c, 1), u = l.plus(L(s, new T(i), c, 1)), J(u.d).slice(0, c) === J(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(bn(T, c + 2, b).times(o + ""))), l = L(l, new T(f), c, 1), r == null) if (ut(l.d, c - h, S, a)) T.precision = c += h, u = s = g = L(p.minus(1), p.plus(1), c, 1), d = y(g.times(g), c, 1), i = a = 1;
        else return y(l, T.precision = b, S, w = !0);
        else return T.precision = b, l;
        l = u, i += 2;
    }
}
function Ws(e) {
    return String(e.s * e.s / 0);
}
function gn(e, r) {
    var t, n, i;
    for((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++);
    for(i = r.length; r.charCodeAt(i - 1) === 48; --i);
    if (r = r.slice(n, i), r) {
        if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % E, t < 0 && (n += E), n < i) {
            for(n && e.d.push(+r.slice(0, n)), i -= E; n < i;)e.d.push(+r.slice(n, n += E));
            r = r.slice(n), n = E - r.length;
        } else n -= i;
        for(; n--;)r += "0";
        e.d.push(+r), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [
            0
        ]));
    } else e.e = 0, e.d = [
        0
    ];
    return e;
}
function Tp(e, r) {
    var t, n, i, o, s, a, l, u, c;
    if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Bs.test(r)) return gn(e, r);
    } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (Ep.test(r)) t = 16, r = r.toLowerCase();
    else if (bp.test(r)) t = 2;
    else if (wp.test(r)) t = 8;
    else throw Error(He + r);
    for(o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = Gs(n, new n(t), o, o * 2)), u = fn(r, t, fe), c = u.length - 1, o = c; u[o] === 0; --o)u.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = wn(u, c), e.d = u, w = !1, s && (e = L(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? U(2, l) : Le.pow(2, l))), w = !0, e);
}
function Sp(e, r) {
    var t, n = r.d.length;
    if (n < 3) return r.isZero() ? r : Tr(e, 2, r, r);
    t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / xn(5, t)), r = Tr(e, 2, r, r);
    for(var i, o = new e(5), s = new e(16), a = new e(20); t--;)i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
    return r;
}
function Tr(e, r, t, n, i) {
    var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / E);
    for(w = !1, l = t.times(t), a = new e(n);;){
        if (s = L(a.times(l), new e(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = L(s.times(l), new e(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
            for(o = p; s.d[o] === a.d[o] && o--;);
            if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
    }
    return w = !0, s.d.length = p + 1, s;
}
function xn(e, r) {
    for(var t = e; --r;)t *= e;
    return t;
}
function Js(e, r) {
    var t, n = r.s < 0, i = xe(e, e.precision, 1), o = i.times(.5);
    if (r = r.abs(), r.lte(o)) return Ne = n ? 4 : 1, r;
    if (t = r.divToInt(i), t.isZero()) Ne = n ? 3 : 2;
    else {
        if (r = r.minus(t.times(i)), r.lte(o)) return Ne = Ls(t) ? n ? 2 : 3 : n ? 4 : 1, r;
        Ne = Ls(t) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return r.minus(i).abs();
}
function Ji(e, r, t, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor, h = t !== void 0;
    if (h ? (ne(t, 1, Ye), n === void 0 ? n = f.rounding : ne(n, 0, 8)) : (t = f.precision, n = f.rounding), !e.isFinite()) c = Ws(e);
    else {
        for(c = ve(e), s = c.indexOf("."), h ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = fn(ve(d), 10, i), d.e = d.d.length), p = fn(c, 10, i), o = l = p.length; p[--l] == 0;)p.pop();
        if (!p[0]) c = h ? "0p+0" : "0";
        else {
            if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = L(e, d, t, n, 0, i), p = e.d, o = e.e, u = $s), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = t, u) for(; ++p[--t] > i - 1;)p[t] = 0, t || (++o, p.unshift(1));
            for(l = p.length; !p[l - 1]; --l);
            for(s = 0, c = ""; s < l; s++)c += Ui.charAt(p[s]);
            if (h) {
                if (l > 1) if (r == 16 || r == 8) {
                    for(s = r == 16 ? 4 : 3, --l; l % s; l++)c += "0";
                    for(p = fn(c, i, r), l = p.length; !p[l - 1]; --l);
                    for(s = 1, c = "1."; s < l; s++)c += Ui.charAt(p[s]);
                } else c = c.charAt(0) + "." + c.slice(1);
                c = c + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for(; ++o;)c = "0" + c;
                c = "0." + c;
            } else if (++o > l) for(o -= l; o--;)c += "0";
            else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
}
function Fs(e, r) {
    if (e.length > r) return e.length = r, !0;
}
function Rp(e) {
    return new this(e).abs();
}
function Ap(e) {
    return new this(e).acos();
}
function Cp(e) {
    return new this(e).acosh();
}
function Ip(e, r) {
    return new this(e).plus(r);
}
function Dp(e) {
    return new this(e).asin();
}
function Op(e) {
    return new this(e).asinh();
}
function kp(e) {
    return new this(e).atan();
}
function _p(e) {
    return new this(e).atanh();
}
function Np(e, r) {
    e = new this(e), r = new this(r);
    var t, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = xe(this, o, 1).times(r.s > 0 ? .25 : .75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? xe(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = xe(this, o, 1).times(.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(L(e, r, o, 1)), r = xe(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(L(e, r, o, 1)), t;
}
function Lp(e) {
    return new this(e).cbrt();
}
function Fp(e) {
    return y(e = new this(e), e.e + 1, 2);
}
function Mp(e, r, t) {
    return new this(e).clamp(r, t);
}
function $p(e) {
    if (!e || typeof e != "object") throw Error(En + "Object expected");
    var r, t, n, i = e.defaults === !0, o = [
        "precision",
        1,
        Ye,
        "rounding",
        0,
        8,
        "toExpNeg",
        -Pr,
        0,
        "toExpPos",
        0,
        Pr,
        "maxE",
        0,
        Pr,
        "minE",
        -Pr,
        0,
        "modulo",
        0,
        9
    ];
    for(r = 0; r < o.length; r += 3)if (t = o[r], i && (this[t] = Gi[t]), (n = e[t]) !== void 0) if (X(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
    else throw Error(He + t + ": " + n);
    if (t = "crypto", i && (this[t] = Gi[t]), (n = e[t]) !== void 0) if (n === !0 || n === !1 || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = !0;
    else throw Error(Vs);
    else this[t] = !1;
    else throw Error(He + t + ": " + n);
    return this;
}
function qp(e) {
    return new this(e).cos();
}
function Vp(e) {
    return new this(e).cosh();
}
function Ks(e) {
    var r, t, n;
    function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, Ms(o)) {
            u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [
                0
            ]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
            return;
        }
        if (l = typeof o, l === "number") {
            if (o === 0) {
                u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [
                    0
                ];
                return;
            }
            if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
                for(s = 0, a = o; a >= 10; a /= 10)s++;
                w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [
                    0
                ]) : (u.e = s, u.d = [
                    o
                ]) : (u.e = s, u.d = [
                    o
                ]);
                return;
            }
            if (o * 0 !== 0) {
                o || (u.s = NaN), u.e = NaN, u.d = null;
                return;
            }
            return gn(u, o.toString());
        }
        if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Bs.test(o) ? gn(u, o) : Tp(u, o);
        if (l === "bigint") return o < 0 ? (o = -o, u.s = -1) : u.s = 1, gn(u, o.toString());
        throw Error(He + o);
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = $p, i.clone = Ks, i.isDecimal = Ms, i.abs = Rp, i.acos = Ap, i.acosh = Cp, i.add = Ip, i.asin = Dp, i.asinh = Op, i.atan = kp, i.atanh = _p, i.atan2 = Np, i.cbrt = Lp, i.ceil = Fp, i.clamp = Mp, i.cos = qp, i.cosh = Vp, i.div = jp, i.exp = Bp, i.floor = Up, i.hypot = Gp, i.ln = Qp, i.log = Wp, i.log10 = Kp, i.log2 = Jp, i.max = Hp, i.min = Yp, i.mod = zp, i.mul = Zp, i.pow = Xp, i.random = ed, i.round = rd, i.sign = td, i.sin = nd, i.sinh = id, i.sqrt = od, i.sub = sd, i.sum = ad, i.tan = ld, i.tanh = ud, i.trunc = cd, e === void 0 && (e = {}), e && e.defaults !== !0) for(n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto"
    ], r = 0; r < n.length;)e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
    return i.config(e), i;
}
function jp(e, r) {
    return new this(e).div(r);
}
function Bp(e) {
    return new this(e).exp();
}
function Up(e) {
    return y(e = new this(e), e.e + 1, 3);
}
function Gp() {
    var e, r, t = new this(0);
    for(w = !1, e = 0; e < arguments.length;)if (r = new this(arguments[e++]), r.d) t.d && (t = t.plus(r.times(r)));
    else {
        if (r.s) return w = !0, new this(1 / 0);
        t = r;
    }
    return w = !0, t.sqrt();
}
function Ms(e) {
    return e instanceof Le || e && e.toStringTag === js || !1;
}
function Qp(e) {
    return new this(e).ln();
}
function Wp(e, r) {
    return new this(e).log(r);
}
function Jp(e) {
    return new this(e).log(2);
}
function Kp(e) {
    return new this(e).log(10);
}
function Hp() {
    return Qs(this, arguments, -1);
}
function Yp() {
    return Qs(this, arguments, 1);
}
function zp(e, r) {
    return new this(e).mod(r);
}
function Zp(e, r) {
    return new this(e).mul(r);
}
function Xp(e, r) {
    return new this(e).pow(r);
}
function ed(e) {
    var r, t, n, i, o = 0, s = new this(1), a = [];
    if (e === void 0 ? e = this.precision : ne(e, 1, Ye), n = Math.ceil(e / E), this.crypto) if (crypto.getRandomValues) for(r = crypto.getRandomValues(new Uint32Array(n)); o < n;)i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
    else if (crypto.randomBytes) {
        for(r = crypto.randomBytes(n *= 4); o < n;)i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
    } else throw Error(Vs);
    else for(; o < n;)a[o++] = Math.random() * 1e7 | 0;
    for(n = a[--o], e %= E, n && e && (i = U(10, E - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)a.pop();
    if (o < 0) t = 0, a = [
        0
    ];
    else {
        for(t = -1; a[0] === 0; t -= E)a.shift();
        for(n = 1, i = a[0]; i >= 10; i /= 10)n++;
        n < E && (t -= E - n);
    }
    return s.e = t, s.d = a, s;
}
function rd(e) {
    return y(e = new this(e), e.e + 1, this.rounding);
}
function td(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function nd(e) {
    return new this(e).sin();
}
function id(e) {
    return new this(e).sinh();
}
function od(e) {
    return new this(e).sqrt();
}
function sd(e, r) {
    return new this(e).sub(r);
}
function ad() {
    var e = 0, r = arguments, t = new this(r[e]);
    for(w = !1; t.s && ++e < r.length;)t = t.plus(r[e]);
    return w = !0, y(t, this.precision, this.rounding);
}
function ld(e) {
    return new this(e).tan();
}
function ud(e) {
    return new this(e).tanh();
}
function cd(e) {
    return y(e = new this(e), e.e + 1, 1);
}
m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
m[Symbol.toStringTag] = "Decimal";
var Le = m.constructor = Ks(Gi);
hn = new Le(hn);
yn = new Le(yn);
var Fe = Le;
function Sr(e) {
    return Le.isDecimal(e) ? !0 : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
var ct = {};
tr(ct, {
    ModelAction: ()=>Rr,
    datamodelEnumToSchemaEnum: ()=>pd
});
function pd(e) {
    return {
        name: e.name,
        values: e.values.map((r)=>r.name)
    };
}
var Rr = ((b)=>(b.findUnique = "findUnique", b.findUniqueOrThrow = "findUniqueOrThrow", b.findFirst = "findFirst", b.findFirstOrThrow = "findFirstOrThrow", b.findMany = "findMany", b.create = "create", b.createMany = "createMany", b.createManyAndReturn = "createManyAndReturn", b.update = "update", b.updateMany = "updateMany", b.updateManyAndReturn = "updateManyAndReturn", b.upsert = "upsert", b.delete = "delete", b.deleteMany = "deleteMany", b.groupBy = "groupBy", b.count = "count", b.aggregate = "aggregate", b.findRaw = "findRaw", b.aggregateRaw = "aggregateRaw", b))(Rr || {});
var Xs = O(Di());
var Zs = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"));
var Hs = {
    keyword: De,
    entity: De,
    value: (e)=>W(nr(e)),
    punctuation: nr,
    directive: De,
    function: De,
    variable: (e)=>W(nr(e)),
    string: (e)=>W(qe(e)),
    boolean: Ie,
    number: De,
    comment: Hr
};
var dd = (e)=>e, vn = {}, md = 0, v = {
    manual: vn.Prism && vn.Prism.manual,
    disableWorkerMessageHandler: vn.Prism && vn.Prism.disableWorkerMessageHandler,
    util: {
        encode: function(e) {
            if (e instanceof ge) {
                let r = e;
                return new ge(r.type, v.util.encode(r.content), r.alias);
            } else return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        type: function(e) {
            return Object.prototype.toString.call(e).slice(8, -1);
        },
        objId: function(e) {
            return e.__id || Object.defineProperty(e, "__id", {
                value: ++md
            }), e.__id;
        },
        clone: function e(r, t) {
            let n, i, o = v.util.type(r);
            switch(t = t || {}, o){
                case "Object":
                    if (i = v.util.objId(r), t[i]) return t[i];
                    n = {}, t[i] = n;
                    for(let s in r)r.hasOwnProperty(s) && (n[s] = e(r[s], t));
                    return n;
                case "Array":
                    return i = v.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
                        n[a] = e(s, t);
                    }), n);
                default:
                    return r;
            }
        }
    },
    languages: {
        extend: function(e, r) {
            let t = v.util.clone(v.languages[e]);
            for(let n in r)t[n] = r[n];
            return t;
        },
        insertBefore: function(e, r, t, n) {
            n = n || v.languages;
            let i = n[e], o = {};
            for(let a in i)if (i.hasOwnProperty(a)) {
                if (a == r) for(let l in t)t.hasOwnProperty(l) && (o[l] = t[l]);
                t.hasOwnProperty(a) || (o[a] = i[a]);
            }
            let s = n[e];
            return n[e] = o, v.languages.DFS(v.languages, function(a, l) {
                l === s && a != e && (this[a] = o);
            }), o;
        },
        DFS: function e(r, t, n, i) {
            i = i || {};
            let o = v.util.objId;
            for(let s in r)if (r.hasOwnProperty(s)) {
                t.call(r, s, r[s], n || s);
                let a = r[s], l = v.util.type(a);
                l === "Object" && !i[o(a)] ? (i[o(a)] = !0, e(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = !0, e(a, t, s, i));
            }
        }
    },
    plugins: {},
    highlight: function(e, r, t) {
        let n = {
            code: e,
            grammar: r,
            language: t
        };
        return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ge.stringify(v.util.encode(n.tokens), n.language);
    },
    matchGrammar: function(e, r, t, n, i, o, s) {
        for(let g in t){
            if (!t.hasOwnProperty(g) || !t[g]) continue;
            if (g == s) return;
            let I = t[g];
            I = v.util.type(I) === "Array" ? I : [
                I
            ];
            for(let T = 0; T < I.length; ++T){
                let S = I[T], b = S.inside, D = !!S.lookbehind, me = !!S.greedy, se = 0, Kr = S.alias;
                if (me && !S.pattern.global) {
                    let j = S.pattern.toString().match(/[imuy]*$/)[0];
                    S.pattern = RegExp(S.pattern.source, j + "g");
                }
                S = S.pattern || S;
                for(let j = n, te = i; j < r.length; te += r[j].length, ++j){
                    let Ae = r[j];
                    if (r.length > e.length) return;
                    if (Ae instanceof ge) continue;
                    if (me && j != r.length - 1) {
                        S.lastIndex = te;
                        var p = S.exec(e);
                        if (!p) break;
                        var c = p.index + (D ? p[1].length : 0), d = p.index + p[0].length, a = j, l = te;
                        for(let k = r.length; a < k && (l < d || !r[a].type && !r[a - 1].greedy); ++a)l += r[a].length, c >= l && (++j, te = l);
                        if (r[j] instanceof ge) continue;
                        u = a - j, Ae = e.slice(te, l), p.index -= te;
                    } else {
                        S.lastIndex = 0;
                        var p = S.exec(Ae), u = 1;
                    }
                    if (!p) {
                        if (o) break;
                        continue;
                    }
                    D && (se = p[1] ? p[1].length : 0);
                    var c = p.index + se, p = p[0].slice(se), d = c + p.length, f = Ae.slice(0, c), h = Ae.slice(d);
                    let K = [
                        j,
                        u
                    ];
                    f && (++j, te += f.length, K.push(f));
                    let fr = new ge(g, b ? v.tokenize(p, b) : p, Kr, p, me);
                    if (K.push(fr), h && K.push(h), Array.prototype.splice.apply(r, K), u != 1 && v.matchGrammar(e, r, t, j, te, !0, g), o) break;
                }
            }
        }
    },
    tokenize: function(e, r) {
        let t = [
            e
        ], n = r.rest;
        if (n) {
            for(let i in n)r[i] = n[i];
            delete r.rest;
        }
        return v.matchGrammar(e, t, r, 0, 0, !1), t;
    },
    hooks: {
        all: {},
        add: function(e, r) {
            let t = v.hooks.all;
            t[e] = t[e] || [], t[e].push(r);
        },
        run: function(e, r) {
            let t = v.hooks.all[e];
            if (!(!t || !t.length)) for(var n = 0, i; i = t[n++];)i(r);
        }
    },
    Token: ge
};
v.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
v.languages.javascript = v.languages.extend("clike", {
    "class-name": [
        v.languages.clike["class-name"],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }
    ],
    keyword: [
        {
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
v.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [
        {
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: v.languages.javascript
        },
        {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: v.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: v.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: v.languages.javascript
        }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
v.languages.js = v.languages.javascript;
v.languages.typescript = v.languages.extend("javascript", {
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
v.languages.ts = v.languages.typescript;
function ge(e, r, t, n, i) {
    this.type = e, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
}
ge.stringify = function(e, r) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(t) {
        return ge.stringify(t, r);
    }).join("") : fd(e.type)(e.content);
};
function fd(e) {
    return Hs[e] || dd;
}
function Ys(e) {
    return gd(e, v.languages.javascript);
}
function gd(e, r) {
    return v.tokenize(e, r).map((n)=>ge.stringify(n)).join("");
}
function zs(e) {
    return Ci(e);
}
var Pn = class e {
    firstLineNumber;
    lines;
    static read(r) {
        let t;
        try {
            t = Zs.default.readFileSync(r, "utf-8");
        } catch  {
            return null;
        }
        return e.fromContent(t);
    }
    static fromContent(r) {
        let t = r.split(/\r?\n/);
        return new e(1, t);
    }
    constructor(r, t){
        this.firstLineNumber = r, this.lines = t;
    }
    get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(r, t) {
        if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
        let n = r - this.firstLineNumber, i = [
            ...this.lines
        ];
        return i[n] = t(i[n]), new e(this.firstLineNumber, i);
    }
    mapLines(r) {
        return new e(this.firstLineNumber, this.lines.map((t, n)=>r(t, this.firstLineNumber + n)));
    }
    lineAt(r) {
        return this.lines[r - this.firstLineNumber];
    }
    prependSymbolAt(r, t) {
        return this.mapLines((n, i)=>i === r ? `${t} ${n}` : `  ${n}`);
    }
    slice(r, t) {
        let n = this.lines.slice(r - 1, t).join(`
`);
        return new e(r, zs(n).split(`
`));
    }
    highlight() {
        let r = Ys(this.toString());
        return new e(this.firstLineNumber, r.split(`
`));
    }
    toString() {
        return this.lines.join(`
`);
    }
};
var hd = {
    red: ce,
    gray: Hr,
    dim: Ce,
    bold: W,
    underline: Y,
    highlightSource: (e)=>e.highlight()
}, yd = {
    red: (e)=>e,
    gray: (e)=>e,
    dim: (e)=>e,
    bold: (e)=>e,
    underline: (e)=>e,
    highlightSource: (e)=>e
};
function bd({ message: e, originalMethod: r, isPanic: t, callArguments: n }) {
    return {
        functionName: `prisma.${r}()`,
        message: e,
        isPanic: t ?? !1,
        callArguments: n
    };
}
function Ed({ callsite: e, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
    let s = bd({
        message: r,
        originalMethod: t,
        isPanic: n,
        callArguments: i
    });
    if (!e || ("TURBOPACK compile-time value", "undefined") < "u" || ("TURBOPACK compile-time value", "development") === "production") return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber) return s;
    let l = Math.max(1, a.lineNumber - 3), u = Pn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
    if (u && c) {
        let p = xd(c), d = wd(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (h)=>h.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((h, g)=>o.gray(String(g).padStart(f)) + " " + h).mapLines((h)=>o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
            let h = p + f + 1;
            h += 2, s.callArguments = (0, Xs.default)(i, h).slice(h);
        }
    }
    return s;
}
function wd(e) {
    let r = Object.keys(Rr).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e);
    if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return {
            code: e.slice(o, i),
            openingBraceIndex: i
        };
    }
    return null;
}
function xd(e) {
    let r = 0;
    for(let t = 0; t < e.length; t++){
        if (e.charAt(t) !== " ") return r;
        r++;
    }
    return r;
}
function vd({ functionName: e, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [
        ""
    ], l = r ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), r && a.push(s.underline(Pd(r))), i) {
        a.push("");
        let u = [
            i.toString()
        ];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else a.push(""), o && a.push(o), a.push("");
    return a.push(t), a.join(`
`);
}
function Pd(e) {
    let r = [
        e.fileName
    ];
    return e.lineNumber && r.push(String(e.lineNumber)), e.columnNumber && r.push(String(e.columnNumber)), r.join(":");
}
function Tn(e) {
    let r = e.showColors ? hd : yd, t;
    return t = Ed(e, r), vd(t, r);
}
var la = O(Ki());
function na(e, r, t) {
    let n = ia(e), i = Td(n), o = Rd(i);
    o ? Sn(o, r, t) : r.addErrorMessage(()=>"Unknown error");
}
function ia(e) {
    return e.errors.flatMap((r)=>r.kind === "Union" ? ia(r) : [
            r
        ]);
}
function Td(e) {
    let r = new Map, t = [];
    for (let n of e){
        if (n.kind !== "InvalidArgumentType") {
            t.push(n);
            continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
        o ? r.set(i, {
            ...n,
            argument: {
                ...n.argument,
                typeNames: Sd(o.argument.typeNames, n.argument.typeNames)
            }
        }) : r.set(i, n);
    }
    return t.push(...r.values()), t;
}
function Sd(e, r) {
    return [
        ...new Set(e.concat(r))
    ];
}
function Rd(e) {
    return ji(e, (r, t)=>{
        let n = ra(r), i = ra(t);
        return n !== i ? n - i : ta(r) - ta(t);
    });
}
function ra(e) {
    let r = 0;
    return Array.isArray(e.selectionPath) && (r += e.selectionPath.length), Array.isArray(e.argumentPath) && (r += e.argumentPath.length), r;
}
function ta(e) {
    switch(e.kind){
        case "InvalidArgumentValue":
        case "ValueTooLarge":
            return 20;
        case "InvalidArgumentType":
            return 10;
        case "RequiredArgumentMissing":
            return -10;
        default:
            return 0;
    }
}
var le = class {
    constructor(r, t){
        this.name = r;
        this.value = t;
    }
    isRequired = !1;
    makeRequired() {
        return this.isRequired = !0, this;
    }
    write(r) {
        let { colors: { green: t } } = r.context;
        r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
    }
};
sa();
var Ar = class {
    constructor(r = 0, t){
        this.context = t;
        this.currentIndent = r;
    }
    lines = [];
    currentLine = "";
    currentIndent = 0;
    marginSymbol;
    afterNextNewLineCallback;
    write(r) {
        return typeof r == "string" ? this.currentLine += r : r.write(this), this;
    }
    writeJoined(r, t, n = (i, o)=>o.write(i)) {
        let i = t.length - 1;
        for(let o = 0; o < t.length; o++)n(t[o], this), o !== i && this.write(r);
        return this;
    }
    writeLine(r) {
        return this.write(r).newLine();
    }
    newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let r = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, r?.(), this;
    }
    withIndent(r) {
        return this.indent(), r(this), this.unindent(), this;
    }
    afterNextNewline(r) {
        return this.afterNextNewLineCallback = r, this;
    }
    indent() {
        return this.currentIndent++, this;
    }
    unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(r) {
        return this.marginSymbol = r, this;
    }
    toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
        return this.currentLine.length;
    }
    indentedCurrentLine() {
        let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
    }
};
oa();
var Rn = class {
    constructor(r){
        this.value = r;
    }
    write(r) {
        r.write(this.value);
    }
    markAsError() {
        this.value.markAsError();
    }
};
var An = (e)=>e, Cn = {
    bold: An,
    red: An,
    green: An,
    dim: An,
    enabled: !1
}, aa = {
    bold: W,
    red: ce,
    green: qe,
    dim: Ce,
    enabled: !0
}, Cr = {
    write (e) {
        e.writeLine(",");
    }
};
var Pe = class {
    constructor(r){
        this.contents = r;
    }
    isUnderlined = !1;
    color = (r)=>r;
    underline() {
        return this.isUnderlined = !0, this;
    }
    setColor(r) {
        return this.color = r, this;
    }
    write(r) {
        let t = r.getCurrentLineLength();
        r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(()=>{
            r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
        });
    }
};
var ze = class {
    hasError = !1;
    markAsError() {
        return this.hasError = !0, this;
    }
};
var Ir = class extends ze {
    items = [];
    addItem(r) {
        return this.items.push(new Rn(r)), this;
    }
    getField(r) {
        return this.items[r];
    }
    getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((t)=>t.value.getPrintWidth())) + 2;
    }
    write(r) {
        if (this.items.length === 0) {
            this.writeEmpty(r);
            return;
        }
        this.writeWithItems(r);
    }
    writeEmpty(r) {
        let t = new Pe("[]");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
    }
    writeWithItems(r) {
        let { colors: t } = r.context;
        r.writeLine("[").withIndent(()=>r.writeJoined(Cr, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(()=>{
            r.writeLine(t.red("~".repeat(this.getPrintWidth())));
        });
    }
    asObject() {}
};
var Dr = class e extends ze {
    fields = {};
    suggestions = [];
    addField(r) {
        this.fields[r.name] = r;
    }
    addSuggestion(r) {
        this.suggestions.push(r);
    }
    getField(r) {
        return this.fields[r];
    }
    getDeepField(r) {
        let [t, ...n] = r, i = this.getField(t);
        if (!i) return;
        let o = i;
        for (let s of n){
            let a;
            if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof Ir && (a = o.value.getField(Number(s))), !a) return;
            o = a;
        }
        return o;
    }
    getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
        return !!this.getField(r);
    }
    removeAllFields() {
        this.fields = {};
    }
    removeField(r) {
        delete this.fields[r];
    }
    getFields() {
        return this.fields;
    }
    isEmpty() {
        return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
        return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
        let t = this;
        for (let n of r){
            if (!(t instanceof e)) return;
            let i = t.getSubSelectionValue(n);
            if (!i) return;
            t = i;
        }
        return t;
    }
    getDeepSelectionParent(r) {
        let t = this.getSelectionParent();
        if (!t) return;
        let n = t;
        for (let i of r){
            let o = n.value.getFieldValue(i);
            if (!o || !(o instanceof e)) return;
            let s = o.getSelectionParent();
            if (!s) return;
            n = s;
        }
        return n;
    }
    getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r) return {
            kind: "select",
            value: r
        };
        let t = this.getField("include")?.value.asObject();
        if (t) return {
            kind: "include",
            value: t
        };
    }
    getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((n)=>n.getPrintWidth())) + 2;
    }
    write(r) {
        let t = Object.values(this.fields);
        if (t.length === 0 && this.suggestions.length === 0) {
            this.writeEmpty(r);
            return;
        }
        this.writeWithContents(r, t);
    }
    asObject() {
        return this;
    }
    writeEmpty(r) {
        let t = new Pe("{}");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
    }
    writeWithContents(r, t) {
        r.writeLine("{").withIndent(()=>{
            r.writeJoined(Cr, [
                ...t,
                ...this.suggestions
            ]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(()=>{
            r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
    }
};
var Q = class extends ze {
    constructor(t){
        super();
        this.text = t;
    }
    getPrintWidth() {
        return this.text.length;
    }
    write(t) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
    }
    asObject() {}
};
var pt = class {
    fields = [];
    addField(r, t) {
        return this.fields.push({
            write (n) {
                let { green: i, dim: o } = n.context.colors;
                n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
            }
        }), this;
    }
    write(r) {
        let { colors: { green: t } } = r.context;
        r.writeLine(t("{")).withIndent(()=>{
            r.writeJoined(Cr, this.fields).newLine();
        }).write(t("}")).addMarginSymbol(t("+"));
    }
};
function Sn(e, r, t) {
    switch(e.kind){
        case "MutuallyExclusiveFields":
            Ad(e, r);
            break;
        case "IncludeOnScalar":
            Cd(e, r);
            break;
        case "EmptySelection":
            Id(e, r, t);
            break;
        case "UnknownSelectionField":
            _d(e, r);
            break;
        case "InvalidSelectionValue":
            Nd(e, r);
            break;
        case "UnknownArgument":
            Ld(e, r);
            break;
        case "UnknownInputField":
            Fd(e, r);
            break;
        case "RequiredArgumentMissing":
            Md(e, r);
            break;
        case "InvalidArgumentType":
            $d(e, r);
            break;
        case "InvalidArgumentValue":
            qd(e, r);
            break;
        case "ValueTooLarge":
            Vd(e, r);
            break;
        case "SomeFieldsMissing":
            jd(e, r);
            break;
        case "TooManyFieldsGiven":
            Bd(e, r);
            break;
        case "Union":
            na(e, r, t);
            break;
        default:
            throw new Error("not implemented: " + e.kind);
    }
}
function Ad(e, r) {
    let t = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    t && (t.getField(e.firstField)?.markAsError(), t.getField(e.secondField)?.markAsError()), r.addErrorMessage((n)=>`Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
}
function Cd(e, r) {
    let [t, n] = Or(e.selectionPath), i = e.outputType, o = r.arguments.getDeepSelectionParent(t)?.value;
    if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields)s.isRelation && o.addSuggestion(new le(s.name, "true"));
    r.addErrorMessage((s)=>{
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${dt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
}
function Id(e, r, t) {
    let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
            Dd(e, r, i);
            return;
        }
        if (n.hasField("select")) {
            Od(e, r);
            return;
        }
    }
    if (t?.[We(e.outputType.name)]) {
        kd(e, r);
        return;
    }
    r.addErrorMessage(()=>`Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function Dd(e, r, t) {
    t.removeAllFields();
    for (let n of e.outputType.fields)t.addSuggestion(new le(n.name, "false"));
    r.addErrorMessage((n)=>`The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Od(e, r) {
    let t = e.outputType, n = r.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? !1;
    n && (n.removeAllFields(), pa(n, t)), r.addErrorMessage((o)=>i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${dt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
}
function kd(e, r) {
    let t = new pt;
    for (let i of e.outputType.fields)i.isRelation || t.addField(i.name, "false");
    let n = new le("omit", t).makeRequired();
    if (e.selectionPath.length === 0) r.arguments.addSuggestion(n);
    else {
        let [i, o] = Or(e.selectionPath), a = r.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
            let l = a?.value.asObject() ?? new Dr;
            l.addSuggestion(n), a.value = l;
        }
    }
    r.addErrorMessage((i)=>`The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function _d(e, r) {
    let t = da(e.selectionPath, r);
    if (t.parentKind !== "unknown") {
        t.field.markAsError();
        let n = t.parent;
        switch(t.parentKind){
            case "select":
                pa(n, e.outputType);
                break;
            case "include":
                Ud(n, e.outputType);
                break;
            case "omit":
                Gd(n, e.outputType);
                break;
        }
    }
    r.addErrorMessage((n)=>{
        let i = [
            `Unknown field ${n.red(`\`${t.fieldName}\``)}`
        ];
        return t.parentKind !== "unknown" && i.push(`for ${n.bold(t.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(dt(n)), i.join(" ");
    });
}
function Nd(e, r) {
    let t = da(e.selectionPath, r);
    t.parentKind !== "unknown" && t.field.value.markAsError(), r.addErrorMessage((n)=>`Invalid value for selection field \`${n.red(t.fieldName)}\`: ${e.underlyingError}`);
}
function Ld(e, r) {
    let t = e.argumentPath[0], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && (n.getField(t)?.markAsError(), Qd(n, e.arguments)), r.addErrorMessage((i)=>ua(i, t, e.arguments.map((o)=>o.name)));
}
function Fd(e, r) {
    let [t, n] = Or(e.argumentPath), i = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(t)?.asObject();
        o && ma(o, e.inputType);
    }
    r.addErrorMessage((o)=>ua(o, n, e.inputType.fields.map((s)=>s.name)));
}
function ua(e, r, t) {
    let n = [
        `Unknown argument \`${e.red(r)}\`.`
    ], i = Jd(r, t);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), t.length > 0 && n.push(dt(e)), n.join(" ");
}
function Md(e, r) {
    let t;
    r.addErrorMessage((l)=>t?.value instanceof Q && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n) return;
    let [i, o] = Or(e.argumentPath), s = new pt, a = n.getDeepFieldValue(i)?.asObject();
    if (a) {
        if (t = a.getField(o), t && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
            for (let l of e.inputTypes[0].fields)s.addField(l.name, l.typeNames.join(" | "));
            a.addSuggestion(new le(o, s).makeRequired());
        } else {
            let l = e.inputTypes.map(ca).join(" | ");
            a.addSuggestion(new le(o, l).makeRequired());
        }
        if (e.dependentArgumentPath) {
            n.getDeepField(e.dependentArgumentPath)?.markAsError();
            let [, l] = Or(e.dependentArgumentPath);
            r.addErrorMessage((u)=>`Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`);
        }
    }
}
function ca(e) {
    return e.kind === "list" ? `${ca(e.elementType)}[]` : e.name;
}
function $d(e, r) {
    let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i)=>{
        let o = In("or", e.argument.typeNames.map((s)=>i.green(s)));
        return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function qd(e, r) {
    let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i)=>{
        let o = [
            `Invalid value for argument \`${i.bold(t)}\``
        ];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
            let s = In("or", e.argument.typeNames.map((a)=>i.green(a)));
            o.push(` Expected ${s}.`);
        }
        return o.join("");
    });
}
function Vd(e, r) {
    let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
    if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof Q && (i = s.text);
    }
    r.addErrorMessage((o)=>{
        let s = [
            "Unable to fit value"
        ];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
    });
}
function jd(e, r) {
    let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && ma(i, e.inputType);
    }
    r.addErrorMessage((i)=>{
        let o = [
            `Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`
        ];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${In("or", e.constraints.requiredFields.map((s)=>`\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(dt(i)), o.join(" ");
    });
}
function Bd(e, r) {
    let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
    if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    r.addErrorMessage((o)=>{
        let s = [
            `Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`
        ];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${In("and", i.map((a)=>o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
}
function pa(e, r) {
    for (let t of r.fields)e.hasField(t.name) || e.addSuggestion(new le(t.name, "true"));
}
function Ud(e, r) {
    for (let t of r.fields)t.isRelation && !e.hasField(t.name) && e.addSuggestion(new le(t.name, "true"));
}
function Gd(e, r) {
    for (let t of r.fields)!e.hasField(t.name) && !t.isRelation && e.addSuggestion(new le(t.name, "true"));
}
function Qd(e, r) {
    for (let t of r)e.hasField(t.name) || e.addSuggestion(new le(t.name, t.typeNames.join(" | ")));
}
function da(e, r) {
    let [t, n] = Or(e), i = r.arguments.getDeepSubSelectionValue(t)?.asObject();
    if (!i) return {
        parentKind: "unknown",
        fieldName: n
    };
    let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
    return o && l ? {
        parentKind: "select",
        parent: o,
        field: l,
        fieldName: n
    } : (l = s?.getField(n), s && l ? {
        parentKind: "include",
        field: l,
        parent: s,
        fieldName: n
    } : (l = a?.getField(n), a && l ? {
        parentKind: "omit",
        field: l,
        parent: a,
        fieldName: n
    } : {
        parentKind: "unknown",
        fieldName: n
    }));
}
function ma(e, r) {
    if (r.kind === "object") for (let t of r.fields)e.hasField(t.name) || e.addSuggestion(new le(t.name, t.typeNames.join(" | ")));
}
function Or(e) {
    let r = [
        ...e
    ], t = r.pop();
    if (!t) throw new Error("unexpected empty path");
    return [
        r,
        t
    ];
}
function dt({ green: e, enabled: r }) {
    return "Available options are " + (r ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function In(e, r) {
    if (r.length === 1) return r[0];
    let t = [
        ...r
    ], n = t.pop();
    return `${t.join(", ")} ${e} ${n}`;
}
var Wd = 3;
function Jd(e, r) {
    let t = 1 / 0, n;
    for (let i of r){
        let o = (0, la.default)(e, i);
        o > Wd || o < t && (t = o, n = i);
    }
    return n;
}
var mt = class {
    modelName;
    name;
    typeName;
    isList;
    isEnum;
    constructor(r, t, n, i, o){
        this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
        let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
        return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
};
function kr(e) {
    return e instanceof mt;
}
var Dn = Symbol(), Yi = new WeakMap, Me = class {
    constructor(r){
        r === Dn ? Yi.set(this, `Prisma.${this._getName()}`) : Yi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
        return this.constructor.name;
    }
    toString() {
        return Yi.get(this);
    }
}, ft = class extends Me {
    _getNamespace() {
        return "NullTypes";
    }
}, gt = class extends ft {
    #e;
};
zi(gt, "DbNull");
var ht = class extends ft {
    #e;
};
zi(ht, "JsonNull");
var yt = class extends ft {
    #e;
};
zi(yt, "AnyNull");
var On = {
    classes: {
        DbNull: gt,
        JsonNull: ht,
        AnyNull: yt
    },
    instances: {
        DbNull: new gt(Dn),
        JsonNull: new ht(Dn),
        AnyNull: new yt(Dn)
    }
};
function zi(e, r) {
    Object.defineProperty(e, "name", {
        value: r,
        configurable: !0
    });
}
var fa = ": ", kn = class {
    constructor(r, t){
        this.name = r;
        this.value = t;
    }
    hasError = !1;
    markAsError() {
        this.hasError = !0;
    }
    getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + fa.length;
    }
    write(r) {
        let t = new Pe(this.name);
        this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(fa).write(this.value);
    }
};
var Zi = class {
    arguments;
    errorMessages = [];
    constructor(r){
        this.arguments = r;
    }
    write(r) {
        r.write(this.arguments);
    }
    addErrorMessage(r) {
        this.errorMessages.push(r);
    }
    renderAllMessages(r) {
        return this.errorMessages.map((t)=>t(r)).join(`
`);
    }
};
function _r(e) {
    return new Zi(ga(e));
}
function ga(e) {
    let r = new Dr;
    for (let [t, n] of Object.entries(e)){
        let i = new kn(t, ha(n));
        r.addField(i);
    }
    return r;
}
function ha(e) {
    if (typeof e == "string") return new Q(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean") return new Q(String(e));
    if (typeof e == "bigint") return new Q(`${e}n`);
    if (e === null) return new Q("null");
    if (e === void 0) return new Q("undefined");
    if (Sr(e)) return new Q(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new Q(`Buffer.alloc(${e.byteLength})`) : new Q(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
        let r = mn(e) ? e.toISOString() : "Invalid Date";
        return new Q(`new Date("${r}")`);
    }
    return e instanceof Me ? new Q(`Prisma.${e._getName()}`) : kr(e) ? new Q(`prisma.${We(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Kd(e) : typeof e == "object" ? ga(e) : new Q(Object.prototype.toString.call(e));
}
function Kd(e) {
    let r = new Ir;
    for (let t of e)r.addItem(ha(t));
    return r;
}
function _n(e, r) {
    let t = r === "pretty" ? aa : Cn, n = e.renderAllMessages(t), i = new Ar(0, {
        colors: t
    }).write(e).toString();
    return {
        message: n,
        args: i
    };
}
function Nn({ args: e, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
    let a = _r(e);
    for (let p of r)Sn(p, a, s);
    let { message: l, args: u } = _n(a, t), c = Tn({
        message: l,
        callsite: n,
        originalMethod: i,
        showColors: t === "pretty",
        callArguments: u
    });
    throw new Z(c, {
        clientVersion: o
    });
}
function Te(e) {
    return e.replace(/^./, (r)=>r.toLowerCase());
}
function ba(e, r, t) {
    let n = Te(t);
    return !r.result || !(r.result.$allModels || r.result[n]) ? e : Hd({
        ...e,
        ...ya(r.name, e, r.result.$allModels),
        ...ya(r.name, e, r.result[n])
    });
}
function Hd(e) {
    let r = new we, t = (n, i)=>r.getOrCreate(n, ()=>i.has(n) ? [
                n
            ] : (i.add(n), e[n] ? e[n].needs.flatMap((o)=>t(o, i)) : [
                n
            ]));
    return pn(e, (n)=>({
            ...n,
            needs: t(n.name, new Set)
        }));
}
function ya(e, r, t) {
    return t ? pn(t, ({ needs: n, compute: i }, o)=>({
            name: o,
            needs: n ? Object.keys(n).filter((s)=>n[s]) : [],
            compute: Yd(r, o, i)
        })) : {};
}
function Yd(e, r, t) {
    let n = e?.[r]?.compute;
    return n ? (i)=>t({
            ...i,
            [r]: n(i)
        }) : t;
}
function Ea(e, r) {
    if (!r) return e;
    let t = {
        ...e
    };
    for (let n of Object.values(r))if (e[n.name]) for (let i of n.needs)t[i] = !0;
    return t;
}
function wa(e, r) {
    if (!r) return e;
    let t = {
        ...e
    };
    for (let n of Object.values(r))if (!e[n.name]) for (let i of n.needs)delete t[i];
    return t;
}
var Ln = class {
    constructor(r, t){
        this.extension = r;
        this.previous = t;
    }
    computedFieldsCache = new we;
    modelExtensionsCache = new we;
    queryCallbacksCache = new we;
    clientExtensions = lt(()=>this.extension.client ? {
            ...this.previous?.getAllClientExtensions(),
            ...this.extension.client
        } : this.previous?.getAllClientExtensions());
    batchCallbacks = lt(()=>{
        let r = this.previous?.getAllBatchQueryCallbacks() ?? [], t = this.extension.query?.$__internalBatch;
        return t ? r.concat(t) : r;
    });
    getAllComputedFields(r) {
        return this.computedFieldsCache.getOrCreate(r, ()=>ba(this.previous?.getAllComputedFields(r), this.extension, r));
    }
    getAllClientExtensions() {
        return this.clientExtensions.get();
    }
    getAllModelExtensions(r) {
        return this.modelExtensionsCache.getOrCreate(r, ()=>{
            let t = Te(r);
            return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(r) : {
                ...this.previous?.getAllModelExtensions(r),
                ...this.extension.model.$allModels,
                ...this.extension.model[t]
            };
        });
    }
    getAllQueryCallbacks(r, t) {
        return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, ()=>{
            let n = this.previous?.getAllQueryCallbacks(r, t) ?? [], i = [], o = this.extension.query;
            return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
    }
    getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
    }
}, Nr = class e {
    constructor(r){
        this.head = r;
    }
    static empty() {
        return new e;
    }
    static single(r) {
        return new e(new Ln(r));
    }
    isEmpty() {
        return this.head === void 0;
    }
    append(r) {
        return new e(new Ln(r, this.head));
    }
    getAllComputedFields(r) {
        return this.head?.getAllComputedFields(r);
    }
    getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(r) {
        return this.head?.getAllModelExtensions(r);
    }
    getAllQueryCallbacks(r, t) {
        return this.head?.getAllQueryCallbacks(r, t) ?? [];
    }
    getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
};
var Fn = class {
    constructor(r){
        this.name = r;
    }
};
function xa(e) {
    return e instanceof Fn;
}
function va(e) {
    return new Fn(e);
}
var Pa = Symbol(), bt = class {
    constructor(r){
        if (r !== Pa) throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(r) {
        return r === void 0 ? Mn : r;
    }
}, Mn = new bt(Pa);
function Se(e) {
    return e instanceof bt;
}
var zd = {
    findUnique: "findUnique",
    findUniqueOrThrow: "findUniqueOrThrow",
    findFirst: "findFirst",
    findFirstOrThrow: "findFirstOrThrow",
    findMany: "findMany",
    count: "aggregate",
    create: "createOne",
    createMany: "createMany",
    createManyAndReturn: "createManyAndReturn",
    update: "updateOne",
    updateMany: "updateMany",
    updateManyAndReturn: "updateManyAndReturn",
    upsert: "upsertOne",
    delete: "deleteOne",
    deleteMany: "deleteMany",
    executeRaw: "executeRaw",
    queryRaw: "queryRaw",
    aggregate: "aggregate",
    groupBy: "groupBy",
    runCommandRaw: "runCommandRaw",
    findRaw: "findRaw",
    aggregateRaw: "aggregateRaw"
}, Ta = "explicitly `undefined` values are not allowed";
function $n({ modelName: e, action: r, args: t, runtimeDataModel: n, extensions: i = Nr.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
    let p = new Xi({
        runtimeDataModel: n,
        modelName: e,
        action: r,
        rootArgs: t,
        callsite: o,
        extensions: i,
        selectionPath: [],
        argumentPath: [],
        originalMethod: s,
        errorFormat: a,
        clientVersion: l,
        previewFeatures: u,
        globalOmit: c
    });
    return {
        modelName: e,
        action: zd[r],
        query: Et(t, p)
    };
}
function Et({ select: e, include: r, ...t } = {}, n) {
    let i = t.omit;
    return delete t.omit, {
        arguments: Ra(t, n),
        selection: Zd(e, r, i, n)
    };
}
function Zd(e, r, t, n) {
    return e ? (r ? n.throwValidationError({
        kind: "MutuallyExclusiveFields",
        firstField: "include",
        secondField: "select",
        selectionPath: n.getSelectionPath()
    }) : t && n.throwValidationError({
        kind: "MutuallyExclusiveFields",
        firstField: "omit",
        secondField: "select",
        selectionPath: n.getSelectionPath()
    }), tm(e, n)) : Xd(n, r, t);
}
function Xd(e, r, t) {
    let n = {};
    return e.modelOrType && !e.isRawAction() && (n.$composites = !0, n.$scalars = !0), r && em(n, r, e), rm(n, t, e), n;
}
function em(e, r, t) {
    for (let [n, i] of Object.entries(r)){
        if (Se(i)) continue;
        let o = t.nestSelection(n);
        if (eo(i, o), i === !1 || i === void 0) {
            e[n] = !1;
            continue;
        }
        let s = t.findField(n);
        if (s && s.kind !== "object" && t.throwValidationError({
            kind: "IncludeOnScalar",
            selectionPath: t.getSelectionPath().concat(n),
            outputType: t.getOutputTypeDescription()
        }), s) {
            e[n] = Et(i === !0 ? {} : i, o);
            continue;
        }
        if (i === !0) {
            e[n] = !0;
            continue;
        }
        e[n] = Et(i, o);
    }
}
function rm(e, r, t) {
    let n = t.getComputedFields(), i = {
        ...t.getGlobalOmit(),
        ...r
    }, o = wa(i, n);
    for (let [s, a] of Object.entries(o)){
        if (Se(a)) continue;
        eo(a, t.nestSelection(s));
        let l = t.findField(s);
        n?.[s] && !l || (e[s] = !a);
    }
}
function tm(e, r) {
    let t = {}, n = r.getComputedFields(), i = Ea(e, n);
    for (let [o, s] of Object.entries(i)){
        if (Se(s)) continue;
        let a = r.nestSelection(o);
        eo(s, a);
        let l = r.findField(o);
        if (!(n?.[o] && !l)) {
            if (s === !1 || s === void 0 || Se(s)) {
                t[o] = !1;
                continue;
            }
            if (s === !0) {
                l?.kind === "object" ? t[o] = Et({}, a) : t[o] = !0;
                continue;
            }
            t[o] = Et(s, a);
        }
    }
    return t;
}
function Sa(e, r) {
    if (e === null) return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "bigint") return {
        $type: "BigInt",
        value: String(e)
    };
    if (vr(e)) {
        if (mn(e)) return {
            $type: "DateTime",
            value: e.toISOString()
        };
        r.throwValidationError({
            kind: "InvalidArgumentValue",
            selectionPath: r.getSelectionPath(),
            argumentPath: r.getArgumentPath(),
            argument: {
                name: r.getArgumentName(),
                typeNames: [
                    "Date"
                ]
            },
            underlyingError: "Provided Date object is invalid"
        });
    }
    if (xa(e)) return {
        $type: "Param",
        value: e.name
    };
    if (kr(e)) return {
        $type: "FieldRef",
        value: {
            _ref: e.name,
            _container: e.modelName
        }
    };
    if (Array.isArray(e)) return nm(e, r);
    if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return {
            $type: "Bytes",
            value: Buffer.from(t, n, i).toString("base64")
        };
    }
    if (im(e)) return e.values;
    if (Sr(e)) return {
        $type: "Decimal",
        value: e.toFixed()
    };
    if (e instanceof Me) {
        if (e !== On.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return {
            $type: "Enum",
            value: e._getName()
        };
    }
    if (om(e)) return e.toJSON();
    if (typeof e == "object") return Ra(e, r);
    r.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: r.getSelectionPath(),
        argumentPath: r.getArgumentPath(),
        argument: {
            name: r.getArgumentName(),
            typeNames: []
        },
        underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`
    });
}
function Ra(e, r) {
    if (e.$type) return {
        $type: "Raw",
        value: e
    };
    let t = {};
    for(let n in e){
        let i = e[n], o = r.nestArgument(n);
        Se(i) || (i !== void 0 ? t[n] = Sa(i, o) : r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({
            kind: "InvalidArgumentValue",
            argumentPath: o.getArgumentPath(),
            selectionPath: r.getSelectionPath(),
            argument: {
                name: r.getArgumentName(),
                typeNames: []
            },
            underlyingError: Ta
        }));
    }
    return t;
}
function nm(e, r) {
    let t = [];
    for(let n = 0; n < e.length; n++){
        let i = r.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Se(o)) {
            let s = o === void 0 ? "undefined" : "Prisma.skip";
            r.throwValidationError({
                kind: "InvalidArgumentValue",
                selectionPath: i.getSelectionPath(),
                argumentPath: i.getArgumentPath(),
                argument: {
                    name: `${r.getArgumentName()}[${n}]`,
                    typeNames: []
                },
                underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`
            });
        }
        t.push(Sa(o, i));
    }
    return t;
}
function im(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function om(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
function eo(e, r) {
    e === void 0 && r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({
        kind: "InvalidSelectionValue",
        selectionPath: r.getSelectionPath(),
        underlyingError: Ta
    });
}
var Xi = class e {
    constructor(r){
        this.params = r;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    modelOrType;
    throwValidationError(r) {
        Nn({
            errors: [
                r
            ],
            originalMethod: this.params.originalMethod,
            args: this.params.rootArgs ?? {},
            callsite: this.params.callsite,
            errorFormat: this.params.errorFormat,
            clientVersion: this.params.clientVersion,
            globalOmit: this.params.globalOmit
        });
    }
    getSelectionPath() {
        return this.params.selectionPath;
    }
    getArgumentPath() {
        return this.params.argumentPath;
    }
    getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return {
            name: this.params.modelName,
            fields: this.modelOrType.fields.map((r)=>({
                    name: r.name,
                    typeName: "boolean",
                    isRelation: r.kind === "object"
                }))
        };
    }
    isRawAction() {
        return [
            "executeRaw",
            "queryRaw",
            "runCommandRaw",
            "findRaw",
            "aggregateRaw"
        ].includes(this.params.action);
    }
    isPreviewFeatureOn(r) {
        return this.params.previewFeatures.includes(r);
    }
    getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(r) {
        return this.modelOrType?.fields.find((t)=>t.name === r);
    }
    nestSelection(r) {
        let t = this.findField(r), n = t?.kind === "object" ? t.type : void 0;
        return new e({
            ...this.params,
            modelName: n,
            selectionPath: this.params.selectionPath.concat(r)
        });
    }
    getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[We(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
        switch(this.params.action){
            case "findFirst":
            case "findFirstOrThrow":
            case "findUniqueOrThrow":
            case "findMany":
            case "upsert":
            case "findUnique":
            case "createManyAndReturn":
            case "create":
            case "update":
            case "updateManyAndReturn":
            case "delete":
                return !0;
            case "executeRaw":
            case "aggregateRaw":
            case "runCommandRaw":
            case "findRaw":
            case "createMany":
            case "deleteMany":
            case "groupBy":
            case "updateMany":
            case "count":
            case "aggregate":
            case "queryRaw":
                return !1;
            default:
                ar(this.params.action, "Unknown action");
        }
    }
    nestArgument(r) {
        return new e({
            ...this.params,
            argumentPath: this.params.argumentPath.concat(r)
        });
    }
};
function Aa(e) {
    if (!e._hasPreviewFlag("metrics")) throw new Z("`metrics` preview feature must be enabled in order to access metrics API", {
        clientVersion: e._clientVersion
    });
}
var Lr = class {
    _client;
    constructor(r){
        this._client = r;
    }
    prometheus(r) {
        return Aa(this._client), this._client._engine.metrics({
            format: "prometheus",
            ...r
        });
    }
    json(r) {
        return Aa(this._client), this._client._engine.metrics({
            format: "json",
            ...r
        });
    }
};
function Ca(e, r) {
    let t = lt(()=>sm(r));
    Object.defineProperty(e, "dmmf", {
        get: ()=>t.get()
    });
}
function sm(e) {
    return {
        datamodel: {
            models: ro(e.models),
            enums: ro(e.enums),
            types: ro(e.types)
        }
    };
}
function ro(e) {
    return Object.entries(e).map(([r, t])=>({
            name: r,
            ...t
        }));
}
var to = new WeakMap, qn = "$$PrismaTypedSql", wt = class {
    constructor(r, t){
        to.set(this, {
            sql: r,
            values: t
        }), Object.defineProperty(this, qn, {
            value: qn
        });
    }
    get sql() {
        return to.get(this).sql;
    }
    get values() {
        return to.get(this).values;
    }
};
function Ia(e) {
    return (...r)=>new wt(e, r);
}
function Vn(e) {
    return e != null && e[qn] === qn;
}
var cu = O(Ti());
var pu = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)"), du = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)"), mu = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)")), ri = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
var ie = class e {
    constructor(r, t){
        if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
        let n = t.reduce((s, a)=>s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
        let i = 0, o = 0;
        for(; i < t.length;){
            let s = t[i++], a = r[i];
            if (s instanceof e) {
                this.strings[o] += s.strings[0];
                let l = 0;
                for(; l < s.values.length;)this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
                this.strings[o] += a;
            } else this.values[o++] = s, this.strings[o] = a;
        }
    }
    get sql() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for(; t < r;)n += `?${this.strings[t++]}`;
        return n;
    }
    get statement() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for(; t < r;)n += `:${t}${this.strings[t++]}`;
        return n;
    }
    get text() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for(; t < r;)n += `$${t}${this.strings[t++]}`;
        return n;
    }
    inspect() {
        return {
            sql: this.sql,
            statement: this.statement,
            text: this.text,
            values: this.values
        };
    }
};
function Da(e, r = ",", t = "", n = "") {
    if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new ie([
        t,
        ...Array(e.length - 1).fill(r),
        n
    ], e);
}
function no(e) {
    return new ie([
        e
    ], []);
}
var Oa = no("");
function io(e, ...r) {
    return new ie(e, r);
}
function xt(e) {
    return {
        getKeys () {
            return Object.keys(e);
        },
        getPropertyValue (r) {
            return e[r];
        }
    };
}
function re(e, r) {
    return {
        getKeys () {
            return [
                e
            ];
        },
        getPropertyValue () {
            return r();
        }
    };
}
function lr(e) {
    let r = new we;
    return {
        getKeys () {
            return e.getKeys();
        },
        getPropertyValue (t) {
            return r.getOrCreate(t, ()=>e.getPropertyValue(t));
        },
        getPropertyDescriptor (t) {
            return e.getPropertyDescriptor?.(t);
        }
    };
}
var jn = {
    enumerable: !0,
    configurable: !0,
    writable: !0
};
function Bn(e) {
    let r = new Set(e);
    return {
        getPrototypeOf: ()=>Object.prototype,
        getOwnPropertyDescriptor: ()=>jn,
        has: (t, n)=>r.has(n),
        set: (t, n, i)=>r.add(n) && Reflect.set(t, n, i),
        ownKeys: ()=>[
                ...r
            ]
    };
}
var ka = Symbol.for("nodejs.util.inspect.custom");
function he(e, r) {
    let t = am(r), n = new Set, i = new Proxy(e, {
        get (o, s) {
            if (n.has(s)) return o[s];
            let a = t.get(s);
            return a ? a.getPropertyValue(s) : o[s];
        },
        has (o, s) {
            if (n.has(s)) return !0;
            let a = t.get(s);
            return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
        },
        ownKeys (o) {
            let s = _a(Reflect.ownKeys(o), t), a = _a(Array.from(t.keys()), t);
            return [
                ...new Set([
                    ...s,
                    ...a,
                    ...n
                ])
            ];
        },
        set (o, s, a) {
            return t.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a));
        },
        getOwnPropertyDescriptor (o, s) {
            let a = Reflect.getOwnPropertyDescriptor(o, s);
            if (a && !a.configurable) return a;
            let l = t.get(s);
            return l ? l.getPropertyDescriptor ? {
                ...jn,
                ...l?.getPropertyDescriptor(s)
            } : jn : a;
        },
        defineProperty (o, s, a) {
            return n.add(s), Reflect.defineProperty(o, s, a);
        },
        getPrototypeOf: ()=>Object.prototype
    });
    return i[ka] = function() {
        let o = {
            ...this
        };
        return delete o[ka], o;
    }, i;
}
function am(e) {
    let r = new Map;
    for (let t of e){
        let n = t.getKeys();
        for (let i of n)r.set(i, t);
    }
    return r;
}
function _a(e, r) {
    return e.filter((t)=>r.get(t)?.has?.(t) ?? !0);
}
function Fr(e) {
    return {
        getKeys () {
            return e;
        },
        has () {
            return !1;
        },
        getPropertyValue () {}
    };
}
function Mr(e, r) {
    return {
        batch: e,
        transaction: r?.kind === "batch" ? {
            isolationLevel: r.options.isolationLevel
        } : void 0
    };
}
function Na(e) {
    if (e === void 0) return "";
    let r = _r(e);
    return new Ar(0, {
        colors: Cn
    }).write(r).toString();
}
var lm = "P2037";
function $r({ error: e, user_facing_error: r }, t, n) {
    return r.error_code ? new z(um(r, n), {
        code: r.error_code,
        clientVersion: t,
        meta: r.meta,
        batchRequestIdx: r.batch_request_idx
    }) : new V(e, {
        clientVersion: t,
        batchRequestIdx: r.batch_request_idx
    });
}
function um(e, r) {
    let t = e.message;
    return (r === "postgresql" || r === "postgres" || r === "mysql") && e.error_code === lm && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
}
var vt = "<unknown>";
function La(e) {
    var r = e.split(`
`);
    return r.reduce(function(t, n) {
        var i = dm(n) || fm(n) || ym(n) || xm(n) || Em(n);
        return i && t.push(i), t;
    }, []);
}
var cm = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, pm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function dm(e) {
    var r = cm.exec(e);
    if (!r) return null;
    var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = pm.exec(r[2]);
    return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), {
        file: t ? null : r[2],
        methodName: r[1] || vt,
        arguments: t ? [
            r[2]
        ] : [],
        lineNumber: r[3] ? +r[3] : null,
        column: r[4] ? +r[4] : null
    };
}
var mm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function fm(e) {
    var r = mm.exec(e);
    return r ? {
        file: r[2],
        methodName: r[1] || vt,
        arguments: [],
        lineNumber: +r[3],
        column: r[4] ? +r[4] : null
    } : null;
}
var gm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, hm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function ym(e) {
    var r = gm.exec(e);
    if (!r) return null;
    var t = r[3] && r[3].indexOf(" > eval") > -1, n = hm.exec(r[3]);
    return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), {
        file: r[3],
        methodName: r[1] || vt,
        arguments: r[2] ? r[2].split(",") : [],
        lineNumber: r[4] ? +r[4] : null,
        column: r[5] ? +r[5] : null
    };
}
var bm = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Em(e) {
    var r = bm.exec(e);
    return r ? {
        file: r[3],
        methodName: r[1] || vt,
        arguments: [],
        lineNumber: +r[4],
        column: r[5] ? +r[5] : null
    } : null;
}
var wm = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function xm(e) {
    var r = wm.exec(e);
    return r ? {
        file: r[2],
        methodName: r[1] || vt,
        arguments: [],
        lineNumber: +r[3],
        column: r[4] ? +r[4] : null
    } : null;
}
var oo = class {
    getLocation() {
        return null;
    }
}, so = class {
    _error;
    constructor(){
        this._error = new Error;
    }
    getLocation() {
        let r = this._error.stack;
        if (!r) return null;
        let n = La(r).find((i)=>{
            if (!i.file) return !1;
            let o = Li(i.file);
            return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column
        };
    }
};
function Ze(e) {
    return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new oo : new so;
}
var Fa = {
    _avg: !0,
    _count: !0,
    _sum: !0,
    _min: !0,
    _max: !0
};
function qr(e = {}) {
    let r = Pm(e);
    return Object.entries(r).reduce((n, [i, o])=>(Fa[i] !== void 0 ? n.select[i] = {
            select: o
        } : n[i] = o, n), {
        select: {}
    });
}
function Pm(e = {}) {
    return typeof e._count == "boolean" ? {
        ...e,
        _count: {
            _all: e._count
        }
    } : e;
}
function Un(e = {}) {
    return (r)=>(typeof e._count == "boolean" && (r._count = r._count._all), r);
}
function Ma(e, r) {
    let t = Un(e);
    return r({
        action: "aggregate",
        unpacker: t,
        argsMapper: qr
    })(e);
}
function Tm(e = {}) {
    let { select: r, ...t } = e;
    return typeof r == "object" ? qr({
        ...t,
        _count: r
    }) : qr({
        ...t,
        _count: {
            _all: !0
        }
    });
}
function Sm(e = {}) {
    return typeof e.select == "object" ? (r)=>Un(e)(r)._count : (r)=>Un(e)(r)._count._all;
}
function $a(e, r) {
    return r({
        action: "count",
        unpacker: Sm(e),
        argsMapper: Tm
    })(e);
}
function Rm(e = {}) {
    let r = qr(e);
    if (Array.isArray(r.by)) for (let t of r.by)typeof t == "string" && (r.select[t] = !0);
    else typeof r.by == "string" && (r.select[r.by] = !0);
    return r;
}
function Am(e = {}) {
    return (r)=>(typeof e?._count == "boolean" && r.forEach((t)=>{
            t._count = t._count._all;
        }), r);
}
function qa(e, r) {
    return r({
        action: "groupBy",
        unpacker: Am(e),
        argsMapper: Rm
    })(e);
}
function Va(e, r, t) {
    if (r === "aggregate") return (n)=>Ma(n, t);
    if (r === "count") return (n)=>$a(n, t);
    if (r === "groupBy") return (n)=>qa(n, t);
}
function ja(e, r) {
    let t = r.fields.filter((i)=>!i.relationName), n = _s(t, "name");
    return new Proxy({}, {
        get (i, o) {
            if (o in i || typeof o == "symbol") return i[o];
            let s = n[o];
            if (s) return new mt(e, o, s.type, s.isList, s.kind === "enum");
        },
        ...Bn(Object.keys(n))
    });
}
var Ba = (e)=>Array.isArray(e) ? e : e.split("."), ao = (e, r)=>Ba(r).reduce((t, n)=>t && t[n], e), Ua = (e, r, t)=>Ba(r).reduceRight((n, i, o, s)=>Object.assign({}, ao(e, s.slice(0, o)), {
            [i]: n
        }), t);
function Cm(e, r) {
    return e === void 0 || r === void 0 ? [] : [
        ...r,
        "select",
        e
    ];
}
function Im(e, r, t) {
    return r === void 0 ? e ?? {} : Ua(r, t, e || !0);
}
function lo(e, r, t, n, i, o) {
    let a = e._runtimeDataModel.models[r].fields.reduce((l, u)=>({
            ...l,
            [u.name]: u
        }), {});
    return (l)=>{
        let u = Ze(e._errorFormat), c = Cm(n, i), p = Im(l, o, c), d = t({
            dataPath: c,
            callsite: u
        })(p), f = Dm(e, r);
        return new Proxy(d, {
            get (h, g) {
                if (!f.includes(g)) return h[g];
                let T = [
                    a[g].type,
                    t,
                    g
                ], S = [
                    c,
                    p
                ];
                return lo(e, ...T, ...S);
            },
            ...Bn([
                ...f,
                ...Object.getOwnPropertyNames(d)
            ])
        });
    };
}
function Dm(e, r) {
    return e._runtimeDataModel.models[r].fields.filter((t)=>t.kind === "object").map((t)=>t.name);
}
var Om = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete"
], km = [
    "aggregate",
    "count",
    "groupBy"
];
function uo(e, r) {
    let t = e._extensions.getAllModelExtensions(r) ?? {}, n = [
        _m(e, r),
        Lm(e, r),
        xt(t),
        re("name", ()=>r),
        re("$name", ()=>r),
        re("$parent", ()=>e._appliedParent)
    ];
    return he({}, n);
}
function _m(e, r) {
    let t = Te(r), n = Object.keys(Rr).concat("count");
    return {
        getKeys () {
            return n;
        },
        getPropertyValue (i) {
            let o = i, s = (a)=>(l)=>{
                    let u = Ze(e._errorFormat);
                    return e._createPrismaPromise((c)=>{
                        let p = {
                            args: l,
                            dataPath: [],
                            action: o,
                            model: r,
                            clientMethod: `${t}.${i}`,
                            jsModelName: t,
                            transaction: c,
                            callsite: u
                        };
                        return e._request({
                            ...p,
                            ...a
                        });
                    }, {
                        action: o,
                        args: l,
                        model: r
                    });
                };
            return Om.includes(o) ? lo(e, r, s) : Nm(i) ? Va(e, i, s) : s({});
        }
    };
}
function Nm(e) {
    return km.includes(e);
}
function Lm(e, r) {
    return lr(re("fields", ()=>{
        let t = e._runtimeDataModel.models[r];
        return ja(r, t);
    }));
}
function Ga(e) {
    return e.replace(/^./, (r)=>r.toUpperCase());
}
var co = Symbol();
function Pt(e) {
    let r = [
        Fm(e),
        Mm(e),
        re(co, ()=>e),
        re("$parent", ()=>e._appliedParent)
    ], t = e._extensions.getAllClientExtensions();
    return t && r.push(xt(t)), he(e, r);
}
function Fm(e) {
    let r = Object.getPrototypeOf(e._originalClient), t = [
        ...new Set(Object.getOwnPropertyNames(r))
    ];
    return {
        getKeys () {
            return t;
        },
        getPropertyValue (n) {
            return e[n];
        }
    };
}
function Mm(e) {
    let r = Object.keys(e._runtimeDataModel.models), t = r.map(Te), n = [
        ...new Set(r.concat(t))
    ];
    return lr({
        getKeys () {
            return n;
        },
        getPropertyValue (i) {
            let o = Ga(i);
            if (e._runtimeDataModel.models[o] !== void 0) return uo(e, o);
            if (e._runtimeDataModel.models[i] !== void 0) return uo(e, i);
        },
        getPropertyDescriptor (i) {
            if (!t.includes(i)) return {
                enumerable: !1
            };
        }
    });
}
function Qa(e) {
    return e[co] ? e[co] : e;
}
function Wa(e) {
    if (typeof e == "function") return e(this);
    if (e.client?.__AccelerateEngine) {
        let t = e.client.__AccelerateEngine;
        this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
    }
    let r = Object.create(this._originalClient, {
        _extensions: {
            value: this._extensions.append(e)
        },
        _appliedParent: {
            value: this,
            configurable: !0
        },
        $on: {
            value: void 0
        }
    });
    return Pt(r);
}
function Ja({ result: e, modelName: r, select: t, omit: n, extensions: i }) {
    let o = i.getAllComputedFields(r);
    if (!o) return e;
    let s = [], a = [];
    for (let l of Object.values(o)){
        if (n) {
            if (n[l.name]) continue;
            let u = l.needs.filter((c)=>n[c]);
            u.length > 0 && a.push(Fr(u));
        } else if (t) {
            if (!t[l.name]) continue;
            let u = l.needs.filter((c)=>!t[c]);
            u.length > 0 && a.push(Fr(u));
        }
        $m(e, l.needs) && s.push(qm(l, he(e, s)));
    }
    return s.length > 0 || a.length > 0 ? he(e, [
        ...s,
        ...a
    ]) : e;
}
function $m(e, r) {
    return r.every((t)=>Vi(e, t));
}
function qm(e, r) {
    return lr(re(e.name, ()=>e.compute(r)));
}
function Gn({ visitor: e, result: r, args: t, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(r)) {
        for(let s = 0; s < r.length; s++)r[s] = Gn({
            result: r[s],
            args: t,
            modelName: i,
            runtimeDataModel: n,
            visitor: e
        });
        return r;
    }
    let o = e(r, i, t) ?? r;
    return t.include && Ka({
        includeOrSelect: t.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e
    }), t.select && Ka({
        includeOrSelect: t.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e
    }), o;
}
function Ka({ includeOrSelect: e, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)){
        if (!s || r[o] == null || Se(s)) continue;
        let l = n.models[t].fields.find((c)=>c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        r[o] = Gn({
            visitor: i,
            result: r[o],
            args: u,
            modelName: l.type,
            runtimeDataModel: n
        });
    }
}
function Ha({ result: e, modelName: r, args: t, extensions: n, runtimeDataModel: i, globalOmit: o }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[r] ? e : Gn({
        result: e,
        args: t ?? {},
        modelName: r,
        runtimeDataModel: i,
        visitor: (a, l, u)=>{
            let c = Te(l);
            return Ja({
                result: a,
                modelName: c,
                select: u.select,
                omit: u.select ? void 0 : {
                    ...o?.[c],
                    ...u.omit
                },
                extensions: n
            });
        }
    });
}
var Vm = [
    "$connect",
    "$disconnect",
    "$on",
    "$transaction",
    "$extends"
], Ya = Vm;
function za(e) {
    if (e instanceof ie) return jm(e);
    if (Vn(e)) return Bm(e);
    if (Array.isArray(e)) {
        let t = [
            e[0]
        ];
        for(let n = 1; n < e.length; n++)t[n] = Tt(e[n]);
        return t;
    }
    let r = {};
    for(let t in e)r[t] = Tt(e[t]);
    return r;
}
function jm(e) {
    return new ie(e.strings, e.values);
}
function Bm(e) {
    return new wt(e.sql, e.values);
}
function Tt(e) {
    if (typeof e != "object" || e == null || e instanceof Me || kr(e)) return e;
    if (Sr(e)) return new Fe(e.toFixed());
    if (vr(e)) return new Date(+e);
    if (ArrayBuffer.isView(e)) return e.slice(0);
    if (Array.isArray(e)) {
        let r = e.length, t;
        for(t = Array(r); r--;)t[r] = Tt(e[r]);
        return t;
    }
    if (typeof e == "object") {
        let r = {};
        for(let t in e)t === "__proto__" ? Object.defineProperty(r, t, {
            value: Tt(e[t]),
            configurable: !0,
            enumerable: !0,
            writable: !0
        }) : r[t] = Tt(e[t]);
        return r;
    }
    ar(e, "Unknown value");
}
function Xa(e, r, t, n = 0) {
    return e._createPrismaPromise((i)=>{
        let o = r.customDataProxyFetch;
        return "transaction" in r && i !== void 0 && (r.transaction?.kind === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e._executeRequest(r) : t[n]({
            model: r.model,
            operation: r.model ? r.action : r.clientMethod,
            args: za(r.args ?? {}),
            __internalParams: r,
            query: (s, a = r)=>{
                let l = a.customDataProxyFetch;
                return a.customDataProxyFetch = nl(o, l), a.args = s, Xa(e, a, t, n + 1);
            }
        });
    });
}
function el(e, r) {
    let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
    if (e._extensions.isEmpty()) return e._executeRequest(r);
    let s = e._extensions.getAllQueryCallbacks(t ?? "$none", o);
    return Xa(e, r, s);
}
function rl(e) {
    return (r)=>{
        let t = {
            requests: r
        }, n = r[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? tl(t, n, 0, e) : e(t);
    };
}
function tl(e, r, t, n) {
    if (t === r.length) return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return r[t]({
        args: {
            queries: e.requests.map((s)=>({
                    model: s.modelName,
                    operation: s.action,
                    args: s.args
                })),
            transaction: o ? {
                isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0
            } : void 0
        },
        __internalParams: e,
        query (s, a = e) {
            let l = a.customDataProxyFetch;
            return a.customDataProxyFetch = nl(i, l), tl(a, r, t + 1, n);
        }
    });
}
var Za = (e)=>e;
function nl(e = Za, r = Za) {
    return (t)=>e(r(t));
}
var il = N("prisma:client"), ol = {
    Vercel: "vercel",
    "Netlify CI": "netlify"
};
function sl({ postinstall: e, ciName: r, clientVersion: t, generator: n }) {
    if (il("checkPlatformCaching:postinstall", e), il("checkPlatformCaching:ciName", r), e === !0 && !(n?.output && typeof (n.output.fromEnvVar ?? n.output.value) == "string") && r && r in ol) {
        let i = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ol[r]}-build`;
        throw console.error(i), new P(i, t);
    }
}
function al(e, r) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? {
        [r[0]]: {
            url: e.datasourceUrl
        }
    } : {} : {};
}
var dl = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)")), St = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
function Qn(e) {
    let { runtimeBinaryTarget: r } = e;
    return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Um(e)}`;
}
function Um(e) {
    let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e, i = {
        fromEnvVar: null,
        value: n
    }, o = [
        ...t,
        i
    ];
    return ki({
        ...r,
        binaryTargets: o
    });
}
function Xe(e) {
    let { runtimeBinaryTarget: r } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
}
function er(e) {
    let { searchedLocations: r } = e;
    return `The following locations have been searched:
${[
        ...new Set(r)
    ].map((i)=>`  ${i}`).join(`
`)}`;
}
function ll(e) {
    let { runtimeBinaryTarget: r } = e;
    return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${Qn(e)}

${er(e)}`;
}
function Wn(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function Jn(e) {
    let { errorStack: r } = e;
    return r?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
}
function ul(e) {
    let { queryEngineName: r } = e;
    return `${Xe(e)}${Jn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${Wn("engine-not-found-bundler-investigation")}

${er(e)}`;
}
function cl(e) {
    let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e, n = t.find((i)=>i.native);
    return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${r}".
${Qn(e)}

${er(e)}`;
}
function pl(e) {
    let { queryEngineName: r } = e;
    return `${Xe(e)}${Jn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${Wn("engine-not-found-tooling-investigation")}

${er(e)}`;
}
var Gm = N("prisma:client:engines:resolveEnginePath"), Qm = ()=>new RegExp("runtime[\\\\/]library\\.m?js$");
async function ml(e, r) {
    let t = {
        binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
        library: process.env.PRISMA_QUERY_ENGINE_LIBRARY
    }[e] ?? r.prismaPath;
    if (t !== void 0) return t;
    let { enginePath: n, searchedLocations: i } = await Wm(e, r);
    if (Gm("enginePath", n), n !== void 0 && e === "binary" && Ri(n), n !== void 0) return r.prismaPath = n;
    let o = await ir(), s = r.generator?.binaryTargets ?? [], a = s.some((d)=>d.native), l = !s.some((d)=>d.value === o), u = ("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime/library.js").match(Qm()) === null, c = {
        searchedLocations: i,
        generatorBinaryTargets: s,
        generator: r.generator,
        runtimeBinaryTarget: o,
        queryEngineName: fl(e, o),
        expectedLocation: St.default.relative(process.cwd(), r.dirname),
        errorStack: new Error().stack
    }, p;
    throw a && l ? p = cl(c) : l ? p = ll(c) : u ? p = ul(c) : p = pl(c), new P(p, r.clientVersion);
}
async function Wm(e, r) {
    let t = await ir(), n = [], i = [
        r.dirname,
        St.default.resolve(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), ".."),
        r.generator?.output?.value ?? ("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"),
        St.default.resolve(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime"), "../../../.prisma/client"),
        "/tmp/prisma-engines",
        r.cwd
    ];
    ("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma/runtime/library.js").includes("resolveEnginePath") && i.push(ms());
    for (let o of i){
        let s = fl(e, t), a = St.default.join(o, s);
        if (n.push(o), dl.default.existsSync(a)) return {
            enginePath: a,
            searchedLocations: n
        };
    }
    return {
        enginePath: void 0,
        searchedLocations: n
    };
}
function fl(e, r) {
    return e === "library" ? Gt(r, "fs") : `query-engine-${r}${r === "windows" ? ".exe" : ""}`;
}
function gl(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r)=>`${r[0]}5`) : "";
}
function hl(e) {
    return e.split(`
`).map((r)=>r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var yl = O(Os());
function bl({ title: e, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
    return (0, yl.default)({
        user: r,
        repo: t,
        template: n,
        title: e,
        body: i
    });
}
function El({ version: e, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
    let a = Bo(6e3 - (s?.length ?? 0)), l = hl(wr(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = wr(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${r?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? gl(s) : ""}
\`\`\`
`), p = bl({
        title: t,
        body: c
    });
    return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Y(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function wl(e, r) {
    throw new Error(r);
}
function Jm(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function Km(e, r) {
    let t = {};
    for (let n of Object.keys(e))t[n] = r(e[n], n);
    return t;
}
function Vr(e) {
    return e === null ? e : Array.isArray(e) ? e.map(Vr) : typeof e == "object" ? Jm(e) ? Hm(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Km(e, Vr) : e;
}
function Hm({ $type: e, value: r }) {
    switch(e){
        case "BigInt":
            return BigInt(r);
        case "Bytes":
            {
                let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
                return new Uint8Array(t, n, i);
            }
        case "DateTime":
            return new Date(r);
        case "Decimal":
            return new Le(r);
        case "Json":
            return JSON.parse(r);
        default:
            wl(r, "Unknown tagged value");
    }
}
var xl = "6.18.0";
var zm = ()=>globalThis.process?.release?.name === "node", Zm = ()=>!!globalThis.Bun || !!globalThis.process?.versions?.bun, Xm = ()=>!!globalThis.Deno, ef = ()=>typeof globalThis.Netlify == "object", rf = ()=>typeof globalThis.EdgeRuntime == "object", tf = ()=>globalThis.navigator?.userAgent === "Cloudflare-Workers";
function nf() {
    return [
        [
            ef,
            "netlify"
        ],
        [
            rf,
            "edge-light"
        ],
        [
            tf,
            "workerd"
        ],
        [
            Xm,
            "deno"
        ],
        [
            Zm,
            "bun"
        ],
        [
            zm,
            "node"
        ]
    ].flatMap((t)=>t[0]() ? [
            t[1]
        ] : []).at(0) ?? "";
}
var of = {
    node: "Node.js",
    workerd: "Cloudflare Workers",
    deno: "Deno and Deno Deploy",
    netlify: "Netlify Edge Functions",
    "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
};
function Kn() {
    let e = nf();
    return {
        id: e,
        prettyName: of[e] || e,
        isEdge: [
            "workerd",
            "deno",
            "netlify",
            "edge-light"
        ].includes(e)
    };
}
function jr({ inlineDatasources: e, overrideDatasources: r, env: t, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = r[o]?.url;
    if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = t[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw new P(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === void 0) throw new P("error: Missing URL environment variable, value, or override.", n);
    return i;
}
var Hn = class extends Error {
    clientVersion;
    cause;
    constructor(r, t){
        super(r), this.clientVersion = t.clientVersion, this.cause = t.cause;
    }
    get [Symbol.toStringTag]() {
        return this.name;
    }
};
var oe = class extends Hn {
    isRetryable;
    constructor(r, t){
        super(r, t), this.isRetryable = t.isRetryable ?? !0;
    }
};
function R(e, r) {
    return {
        ...e,
        isRetryable: r
    };
}
var ur = class extends oe {
    name = "InvalidDatasourceError";
    code = "P6001";
    constructor(r, t){
        super(r, R(t, !1));
    }
};
x(ur, "InvalidDatasourceError");
function vl(e) {
    let r = {
        clientVersion: e.clientVersion
    }, t = Object.keys(e.inlineDatasources)[0], n = jr({
        inlineDatasources: e.inlineDatasources,
        overrideDatasources: e.overrideDatasources,
        clientVersion: e.clientVersion,
        env: {
            ...e.env,
            ...typeof process < "u" ? process.env : {}
        }
    }), i;
    try {
        i = new URL(n);
    } catch  {
        throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
    }
    let { protocol: o, searchParams: s } = i;
    if (o !== "prisma:" && o !== sn) throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, r);
    let a = s.get("api_key");
    if (a === null || a.length < 1) throw new ur(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
    let l = Ii(i) ? "http:" : "https:";
    process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (l = "http:");
    let u = new URL(i.href.replace(o, l));
    return {
        apiKey: a,
        url: u
    };
}
var Pl = O(on()), Yn = class {
    apiKey;
    tracingHelper;
    logLevel;
    logQueries;
    engineHash;
    constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }){
        this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: r, transactionId: t } = {}) {
        let n = {
            Accept: "application/json",
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            "Prisma-Engine-Hash": this.engineHash,
            "Prisma-Engine-Version": Pl.enginesVersion
        };
        this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-Transaction-Id"] = t);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
    }
    #e() {
        let r = [];
        return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
    }
};
function sf(e) {
    return e[0] * 1e3 + e[1] / 1e6;
}
function po(e) {
    return new Date(sf(e));
}
var Br = class extends oe {
    name = "ForcedRetryError";
    code = "P5001";
    constructor(r){
        super("This request must be retried", R(r, !0));
    }
};
x(Br, "ForcedRetryError");
var cr = class extends oe {
    name = "NotImplementedYetError";
    code = "P5004";
    constructor(r, t){
        super(r, R(t, !1));
    }
};
x(cr, "NotImplementedYetError");
var $ = class extends oe {
    response;
    constructor(r, t){
        super(r, t), this.response = t.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
            let i = `(The request id was: ${n})`;
            this.message = this.message + " " + i;
        }
    }
};
var pr = class extends $ {
    name = "SchemaMissingError";
    code = "P5005";
    constructor(r){
        super("Schema needs to be uploaded", R(r, !0));
    }
};
x(pr, "SchemaMissingError");
var mo = "This request could not be understood by the server", Rt = class extends $ {
    name = "BadRequestError";
    code = "P5000";
    constructor(r, t, n){
        super(t || mo, R(r, !1)), n && (this.code = n);
    }
};
x(Rt, "BadRequestError");
var At = class extends $ {
    name = "HealthcheckTimeoutError";
    code = "P5013";
    logs;
    constructor(r, t){
        super("Engine not started: healthcheck timeout", R(r, !0)), this.logs = t;
    }
};
x(At, "HealthcheckTimeoutError");
var Ct = class extends $ {
    name = "EngineStartupError";
    code = "P5014";
    logs;
    constructor(r, t, n){
        super(t, R(r, !0)), this.logs = n;
    }
};
x(Ct, "EngineStartupError");
var It = class extends $ {
    name = "EngineVersionNotSupportedError";
    code = "P5012";
    constructor(r){
        super("Engine version is not supported", R(r, !1));
    }
};
x(It, "EngineVersionNotSupportedError");
var fo = "Request timed out", Dt = class extends $ {
    name = "GatewayTimeoutError";
    code = "P5009";
    constructor(r, t = fo){
        super(t, R(r, !1));
    }
};
x(Dt, "GatewayTimeoutError");
var af = "Interactive transaction error", Ot = class extends $ {
    name = "InteractiveTransactionError";
    code = "P5015";
    constructor(r, t = af){
        super(t, R(r, !1));
    }
};
x(Ot, "InteractiveTransactionError");
var lf = "Request parameters are invalid", kt = class extends $ {
    name = "InvalidRequestError";
    code = "P5011";
    constructor(r, t = lf){
        super(t, R(r, !1));
    }
};
x(kt, "InvalidRequestError");
var go = "Requested resource does not exist", _t = class extends $ {
    name = "NotFoundError";
    code = "P5003";
    constructor(r, t = go){
        super(t, R(r, !1));
    }
};
x(_t, "NotFoundError");
var ho = "Unknown server error", Ur = class extends $ {
    name = "ServerError";
    code = "P5006";
    logs;
    constructor(r, t, n){
        super(t || ho, R(r, !0)), this.logs = n;
    }
};
x(Ur, "ServerError");
var yo = "Unauthorized, check your connection string", Nt = class extends $ {
    name = "UnauthorizedError";
    code = "P5007";
    constructor(r, t = yo){
        super(t, R(r, !1));
    }
};
x(Nt, "UnauthorizedError");
var bo = "Usage exceeded, retry again later", Lt = class extends $ {
    name = "UsageExceededError";
    code = "P5008";
    constructor(r, t = bo){
        super(t, R(r, !0));
    }
};
x(Lt, "UsageExceededError");
async function uf(e) {
    let r;
    try {
        r = await e.text();
    } catch  {
        return {
            type: "EmptyError"
        };
    }
    try {
        let t = JSON.parse(r);
        if (typeof t == "string") switch(t){
            case "InternalDataProxyError":
                return {
                    type: "DataProxyError",
                    body: t
                };
            default:
                return {
                    type: "UnknownTextError",
                    body: t
                };
        }
        if (typeof t == "object" && t !== null) {
            if ("is_panic" in t && "message" in t && "error_code" in t) return {
                type: "QueryEngineError",
                body: t
            };
            if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
                let n = Object.values(t)[0].reason;
                return typeof n == "string" && ![
                    "SchemaMissing",
                    "EngineVersionNotSupported"
                ].includes(n) ? {
                    type: "UnknownJsonError",
                    body: t
                } : {
                    type: "DataProxyError",
                    body: t
                };
            }
        }
        return {
            type: "UnknownJsonError",
            body: t
        };
    } catch  {
        return r === "" ? {
            type: "EmptyError"
        } : {
            type: "UnknownTextError",
            body: r
        };
    }
}
async function Ft(e, r) {
    if (e.ok) return;
    let t = {
        clientVersion: r,
        response: e
    }, n = await uf(e);
    if (n.type === "QueryEngineError") throw new z(n.body.message, {
        code: n.body.error_code,
        clientVersion: r
    });
    if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new Ur(t, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
            if (n.body.EngineNotStarted.reason === "SchemaMissing") return new pr(t);
            if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new It(t);
            if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
                let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
                throw new Ct(t, i, o);
            }
            if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
                let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
                throw new P(i, r, o);
            }
            if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
                let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
                throw new At(t, i);
            }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
            let i = {
                IDParseError: "Could not parse interactive transaction ID",
                NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID",
                TransactionStartError: "Could not start interactive transaction"
            };
            throw new Ot(t, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new kt(t, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403) throw new Nt(t, Gr(yo, n));
    if (e.status === 404) return new _t(t, Gr(go, n));
    if (e.status === 429) throw new Lt(t, Gr(bo, n));
    if (e.status === 504) throw new Dt(t, Gr(fo, n));
    if (e.status >= 500) throw new Ur(t, Gr(ho, n));
    if (e.status >= 400) throw new Rt(t, Gr(mo, n));
}
function Gr(e, r) {
    return r.type === "EmptyError" ? e : `${e}: ${JSON.stringify(r)}`;
}
function Tl(e) {
    let r = Math.pow(2, e) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
    return new Promise((i)=>setTimeout(()=>i(n), n));
}
var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Sl(e) {
    let r = new TextEncoder().encode(e), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
    for(let p = 0; p < o; p = p + 3)c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += $e[s] + $e[a] + $e[l] + $e[u];
    return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += $e[s] + $e[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += $e[s] + $e[a] + $e[l] + "="), t;
}
function Rl(e) {
    if (!!e.generator?.previewFeatures.some((t)=>t.toLowerCase().includes("metrics"))) throw new P("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
}
var Al = {
    "@prisma/debug": "workspace:*",
    "@prisma/engines-version": "6.18.0-8.34b5a692b7bd79939a9a2c3ef97d816e749cda2f",
    "@prisma/fetch-engine": "workspace:*",
    "@prisma/get-platform": "workspace:*"
};
var Mt = class extends oe {
    name = "RequestError";
    code = "P5010";
    constructor(r, t){
        super(`Cannot fetch data from service:
${r}`, R(t, !0));
    }
};
x(Mt, "RequestError");
async function dr(e, r, t = (n)=>n) {
    let { clientVersion: n, ...i } = r, o = t(fetch);
    try {
        return await o(e, i);
    } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new Mt(a, {
            clientVersion: n,
            cause: s
        });
    }
}
var pf = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, Cl = N("prisma:client:dataproxyEngine");
async function df(e, r) {
    let t = Al["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === void 0 && pf.test(i)) return i;
    if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = mf(`<=${a}.${l}.${u}`), p = await dr(c, {
            clientVersion: n
        });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        Cl("length of body fetched from unpkg.com", d.length);
        let f;
        try {
            f = JSON.parse(d);
        } catch (h) {
            throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), h;
        }
        return f.version;
    }
    throw new cr("Only `major.minor.patch` versions are supported by Accelerate.", {
        clientVersion: n
    });
}
async function Il(e, r) {
    let t = await df(e, r);
    return Cl("version", t), t;
}
function mf(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Dl = 3, $t = N("prisma:client:dataproxyEngine"), qt = class {
    name = "DataProxyEngine";
    inlineSchema;
    inlineSchemaHash;
    inlineDatasources;
    config;
    logEmitter;
    env;
    clientVersion;
    engineHash;
    tracingHelper;
    remoteClientVersion;
    host;
    headerBuilder;
    startPromise;
    protocol;
    constructor(r){
        Rl(r), this.config = r, this.env = r.env, this.inlineSchema = Sl(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
    }
    apiKey() {
        return this.headerBuilder.apiKey;
    }
    version() {
        return this.engineHash;
    }
    async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async ()=>{
            let { apiKey: r, url: t } = this.getURLAndAPIKey();
            this.host = t.host, this.protocol = t.protocol, this.headerBuilder = new Yn({
                apiKey: r,
                tracingHelper: this.tracingHelper,
                logLevel: this.config.logLevel ?? "error",
                logQueries: this.config.logQueries,
                engineHash: this.engineHash
            }), this.remoteClientVersion = await Il(this.host, this.config), $t("host", this.host), $t("protocol", this.protocol);
        })(), await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((t)=>{
            switch(t.level){
                case "debug":
                case "trace":
                    $t(t);
                    break;
                case "error":
                case "warn":
                case "info":
                    {
                        this.logEmitter.emit(t.level, {
                            timestamp: po(t.timestamp),
                            message: t.attributes.message ?? "",
                            target: t.target ?? "BinaryEngine"
                        });
                        break;
                    }
                case "query":
                    {
                        this.logEmitter.emit("query", {
                            query: t.attributes.query ?? "",
                            timestamp: po(t.timestamp),
                            duration: t.attributes.duration_ms ?? 0,
                            params: t.attributes.params ?? "",
                            target: t.target ?? "BinaryEngine"
                        });
                        break;
                    }
                default:
                    t.level;
            }
        }), r?.traces?.length && this.tracingHelper.dispatchEngineSpans(r.traces);
    }
    onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(r) {
        return await this.start(), `${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
    }
    async uploadSchema() {
        let r = {
            name: "schemaUpload",
            internal: !0
        };
        return this.tracingHelper.runInChildSpan(r, async ()=>{
            let t = await dr(await this.url("schema"), {
                method: "PUT",
                headers: this.headerBuilder.build(),
                body: this.inlineSchema,
                clientVersion: this.clientVersion
            });
            t.ok || $t("schema response status", t.status);
            let n = await Ft(t, this.clientVersion);
            if (n) throw this.logEmitter.emit("warn", {
                message: `Error while uploading schema: ${n.message}`,
                timestamp: new Date,
                target: ""
            }), n;
            this.logEmitter.emit("info", {
                message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
                timestamp: new Date,
                target: ""
            });
        });
    }
    request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({
            body: r,
            traceparent: t,
            interactiveTransaction: n,
            customDataProxyFetch: i
        });
    }
    async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Mr(r, n);
        return (await this.requestInternal({
            body: s,
            customDataProxyFetch: i,
            interactiveTransaction: o,
            traceparent: t
        })).map((l)=>(l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
    }
    requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({
            actionGerund: "querying",
            callback: async ({ logHttpCall: o })=>{
                let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
                o(s);
                let a = await dr(s, {
                    method: "POST",
                    headers: this.headerBuilder.build({
                        traceparent: t,
                        transactionId: i?.id
                    }),
                    body: JSON.stringify(r),
                    clientVersion: this.clientVersion
                }, n);
                a.ok || $t("graphql response status", a.status), await this.handleError(await Ft(a, this.clientVersion));
                let l = await a.json();
                if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
                return "batchResult" in l ? l.batchResult : l;
            }
        });
    }
    async transaction(r, t, n) {
        let i = {
            start: "starting",
            commit: "committing",
            rollback: "rolling back"
        };
        return this.withRetry({
            actionGerund: `${i[r]} transaction`,
            callback: async ({ logHttpCall: o })=>{
                if (r === "start") {
                    let s = JSON.stringify({
                        max_wait: n.maxWait,
                        timeout: n.timeout,
                        isolation_level: n.isolationLevel
                    }), a = await this.url("transaction/start");
                    o(a);
                    let l = await dr(a, {
                        method: "POST",
                        headers: this.headerBuilder.build({
                            traceparent: t.traceparent
                        }),
                        body: s,
                        clientVersion: this.clientVersion
                    });
                    await this.handleError(await Ft(l, this.clientVersion));
                    let u = await l.json(), { extensions: c } = u;
                    c && this.propagateResponseExtensions(c);
                    let p = u.id, d = u["data-proxy"].endpoint;
                    return {
                        id: p,
                        payload: {
                            endpoint: d
                        }
                    };
                } else {
                    let s = `${n.payload.endpoint}/${r}`;
                    o(s);
                    let a = await dr(s, {
                        method: "POST",
                        headers: this.headerBuilder.build({
                            traceparent: t.traceparent
                        }),
                        clientVersion: this.clientVersion
                    });
                    await this.handleError(await Ft(a, this.clientVersion));
                    let l = await a.json(), { extensions: u } = l;
                    u && this.propagateResponseExtensions(u);
                    return;
                }
            }
        });
    }
    getURLAndAPIKey() {
        return vl({
            clientVersion: this.clientVersion,
            env: this.env,
            inlineDatasources: this.inlineDatasources,
            overrideDatasources: this.config.overrideDatasources
        });
    }
    metrics() {
        throw new cr("Metrics are not yet supported for Accelerate", {
            clientVersion: this.clientVersion
        });
    }
    async withRetry(r) {
        for(let t = 0;; t++){
            let n = (i)=>{
                this.logEmitter.emit("info", {
                    message: `Calling ${i} (n=${t})`,
                    timestamp: new Date,
                    target: ""
                });
            };
            try {
                return await r.callback({
                    logHttpCall: n
                });
            } catch (i) {
                if (!(i instanceof oe) || !i.isRetryable) throw i;
                if (t >= Dl) throw i instanceof Br ? i.cause : i;
                this.logEmitter.emit("warn", {
                    message: `Attempt ${t + 1}/${Dl} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`,
                    timestamp: new Date,
                    target: ""
                });
                let o = await Tl(t);
                this.logEmitter.emit("warn", {
                    message: `Retrying after ${o}ms`,
                    timestamp: new Date,
                    target: ""
                });
            }
        }
    }
    async handleError(r) {
        if (r instanceof pr) throw await this.uploadSchema(), new Br({
            clientVersion: this.clientVersion,
            cause: r
        });
        if (r) throw r;
    }
    convertProtocolErrorsToClientError(r) {
        return r.length === 1 ? $r(r[0], this.config.clientVersion, this.config.activeProvider) : new V(JSON.stringify(r), {
            clientVersion: this.config.clientVersion
        });
    }
    applyPendingMigrations() {
        throw new Error("Method not implemented.");
    }
};
function Ol(e) {
    if (e?.kind === "itx") return e.options.id;
}
var wo = O(__turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)")), kl = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
var Eo = Symbol("PrismaLibraryEngineCache");
function ff() {
    let e = globalThis;
    return e[Eo] === void 0 && (e[Eo] = {}), e[Eo];
}
function gf(e) {
    let r = ff();
    if (r[e] !== void 0) return r[e];
    let t = kl.default.toNamespacedPath(e), n = {
        exports: {}
    }, i = 0;
    return process.platform !== "win32" && (i = wo.default.constants.dlopen.RTLD_LAZY | wo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, t, i), r[e] = n.exports, n.exports;
}
var _l = {
    async loadLibrary (e) {
        let r = await fi(), t = await ml("library", e);
        try {
            return e.tracingHelper.runInChildSpan({
                name: "loadLibrary",
                internal: !0
            }, ()=>gf(t));
        } catch (n) {
            let i = Ai({
                e: n,
                platformInfo: r,
                id: t
            });
            throw new P(i, e.clientVersion);
        }
    }
};
var xo, Nl = {
    async loadLibrary (e) {
        let { clientVersion: r, adapter: t, engineWasm: n } = e;
        if (t === void 0) throw new P(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Kn().prettyName})`, r);
        if (n === void 0) throw new P("WASM engine was unexpectedly `undefined`", r);
        xo === void 0 && (xo = (async ()=>{
            let o = await n.getRuntime(), s = await n.getQueryEngineWasmModule();
            if (s == null) throw new P("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
            let a = {
                "./query_engine_bg.js": o
            }, l = new WebAssembly.Instance(s, a), u = l.exports.__wbindgen_start;
            return o.__wbg_set_wasm(l.exports), u(), o.QueryEngine;
        })());
        let i = await xo;
        return {
            debugPanic () {
                return Promise.reject("{}");
            },
            dmmf () {
                return Promise.resolve("{}");
            },
            version () {
                return {
                    commit: "unknown",
                    version: "unknown"
                };
            },
            QueryEngine: i
        };
    }
};
var hf = "P2036", Re = N("prisma:client:libraryEngine");
function yf(e) {
    return e.item_type === "query" && "query" in e;
}
function bf(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var Ll = [
    ...li,
    "native"
], Ef = 0xffffffffffffffffn, vo = 1n;
function wf() {
    let e = vo++;
    return vo > Ef && (vo = 1n), e;
}
var Qr = class {
    name = "LibraryEngine";
    engine;
    libraryInstantiationPromise;
    libraryStartingPromise;
    libraryStoppingPromise;
    libraryStarted;
    executingQueryPromise;
    config;
    QueryEngineConstructor;
    libraryLoader;
    library;
    logEmitter;
    libQueryEnginePath;
    binaryTarget;
    datasourceOverrides;
    datamodel;
    logQueries;
    logLevel;
    lastQuery;
    loggerRustPanic;
    tracingHelper;
    adapterPromise;
    versionInfo;
    constructor(r, t){
        this.libraryLoader = t ?? _l, r.engineWasm !== void 0 && (this.libraryLoader = t ?? Nl), this.config = r, this.libraryStarted = !1, this.logQueries = r.logQueries ?? !1, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, this.tracingHelper = r.tracingHelper, r.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(r.overrideDatasources)[0], i = r.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = {
            [n]: i
        }), this.libraryInstantiationPromise = this.instantiateLibrary();
    }
    wrapEngine(r) {
        return {
            applyPendingMigrations: r.applyPendingMigrations?.bind(r),
            commitTransaction: this.withRequestId(r.commitTransaction.bind(r)),
            connect: this.withRequestId(r.connect.bind(r)),
            disconnect: this.withRequestId(r.disconnect.bind(r)),
            metrics: r.metrics?.bind(r),
            query: this.withRequestId(r.query.bind(r)),
            rollbackTransaction: this.withRequestId(r.rollbackTransaction.bind(r)),
            sdlSchema: r.sdlSchema?.bind(r),
            startTransaction: this.withRequestId(r.startTransaction.bind(r)),
            trace: r.trace.bind(r),
            free: r.free?.bind(r)
        };
    }
    withRequestId(r) {
        return async (...t)=>{
            let n = wf().toString();
            try {
                return await r(...t, n);
            } finally{
                if (this.tracingHelper.isEnabled()) {
                    let i = await this.engine?.trace(n);
                    if (i) {
                        let o = JSON.parse(i);
                        this.tracingHelper.dispatchEngineSpans(o.spans);
                    }
                }
            }
        };
    }
    async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
    }
    async transaction(r, t, n) {
        await this.start();
        let i = await this.adapterPromise, o = JSON.stringify(t), s;
        if (r === "start") {
            let l = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel
            });
            s = await this.engine?.startTransaction(l, o);
        } else r === "commit" ? s = await this.engine?.commitTransaction(n.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(n.id, o));
        let a = this.parseEngineResponse(s);
        if (xf(a)) {
            let l = this.getExternalAdapterError(a, i?.errorRegistry);
            throw l ? l.error : new z(a.message, {
                code: a.error_code,
                clientVersion: this.config.clientVersion,
                meta: a.meta
            });
        } else if (typeof a.message == "string") throw new V(a.message, {
            clientVersion: this.config.clientVersion
        });
        return a;
    }
    async instantiateLibrary() {
        if (Re("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        ai(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", ()=>this.loadEngine()), this.version();
    }
    async getCurrentBinaryTarget() {
        {
            if (this.binaryTarget) return this.binaryTarget;
            let r = await this.tracingHelper.runInChildSpan("detect_platform", ()=>ir());
            if (!Ll.includes(r)) throw new P(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(W(r))}. Possible binaryTargets: ${qe(Ll.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
            return r;
        }
    }
    parseEngineResponse(r) {
        if (!r) throw new V("Response from the Engine was empty", {
            clientVersion: this.config.clientVersion
        });
        try {
            return JSON.parse(r);
        } catch  {
            throw new V("Unable to JSON.parse response from engine", {
                clientVersion: this.config.clientVersion
            });
        }
    }
    async loadEngine() {
        if (!this.engine) {
            this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
                let r = new WeakRef(this);
                this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(tn));
                let t = await this.adapterPromise;
                t && Re("Using driver adapter: %O", t), this.engine = this.wrapEngine(new this.QueryEngineConstructor({
                    datamodel: this.datamodel,
                    env: process.env,
                    logQueries: this.config.logQueries ?? !1,
                    ignoreEnvVarErrors: !0,
                    datasourceOverrides: this.datasourceOverrides ?? {},
                    logLevel: this.logLevel,
                    configDir: this.config.cwd,
                    engineProtocol: "json",
                    enableTracing: this.tracingHelper.isEnabled()
                }, (n)=>{
                    r.deref()?.logger(n);
                }, t));
            } catch (r) {
                let t = r, n = this.parseInitError(t.message);
                throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
            }
        }
    }
    logger(r) {
        let t = this.parseEngineResponse(r);
        t && (t.level = t?.level.toLowerCase() ?? "unknown", yf(t) ? this.logEmitter.emit("query", {
            timestamp: new Date,
            query: t.query,
            params: t.params,
            duration: Number(t.duration_ms),
            target: t.module_path
        }) : bf(t) ? this.loggerRustPanic = new ae(Po(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, {
            timestamp: new Date,
            message: t.message,
            target: t.module_path
        }));
    }
    parseInitError(r) {
        try {
            return JSON.parse(r);
        } catch  {}
        return r;
    }
    parseRequestError(r) {
        try {
            return JSON.parse(r);
        } catch  {}
        return r;
    }
    onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
        if (this.libraryInstantiationPromise || (this.libraryInstantiationPromise = this.instantiateLibrary()), await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Re(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r = async ()=>{
            Re("library starting");
            try {
                let t = {
                    traceparent: this.tracingHelper.getTraceParent()
                };
                await this.engine?.connect(JSON.stringify(t)), this.libraryStarted = !0, this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(tn)), await this.adapterPromise, Re("library started");
            } catch (t) {
                let n = this.parseInitError(t.message);
                throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
            } finally{
                this.libraryStartingPromise = void 0;
            }
        };
        return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
    }
    async stop() {
        if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Re("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) {
            await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0;
            return;
        }
        let r = async ()=>{
            await new Promise((n)=>setImmediate(n)), Re("library stopping");
            let t = {
                traceparent: this.tracingHelper.getTraceParent()
            };
            await this.engine?.disconnect(JSON.stringify(t)), this.engine?.free && this.engine.free(), this.engine = void 0, this.libraryStarted = !1, this.libraryStoppingPromise = void 0, this.libraryInstantiationPromise = void 0, await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0, Re("library stopped");
        };
        return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
    }
    version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(r) {
        return this.library?.debugPanic(r);
    }
    async request(r, { traceparent: t, interactiveTransaction: n }) {
        Re(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({
            traceparent: t
        }), o = JSON.stringify(r);
        try {
            await this.start();
            let s = await this.adapterPromise;
            this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
            let a = this.parseEngineResponse(await this.executingQueryPromise);
            if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], s?.errorRegistry) : new V(JSON.stringify(a.errors), {
                clientVersion: this.config.clientVersion
            });
            if (this.loggerRustPanic) throw this.loggerRustPanic;
            return {
                data: a
            };
        } catch (s) {
            if (s instanceof P) throw s;
            if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:")) throw new ae(Po(this, s.message), this.config.clientVersion);
            let a = this.parseRequestError(s.message);
            throw typeof a == "string" ? s : new V(`${a.message}
${a.backtrace}`, {
                clientVersion: this.config.clientVersion
            });
        }
    }
    async requestBatch(r, { transaction: t, traceparent: n }) {
        Re("requestBatch");
        let i = Mr(r, t);
        await this.start();
        let o = await this.adapterPromise;
        this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine?.query(this.lastQuery, JSON.stringify({
            traceparent: n
        }), Ol(t));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], o?.errorRegistry) : new V(JSON.stringify(a.errors), {
            clientVersion: this.config.clientVersion
        });
        let { batchResult: l, errors: u } = a;
        if (Array.isArray(l)) return l.map((c)=>c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], o?.errorRegistry) : {
                data: c
            });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
    }
    buildQueryError(r, t) {
        if (r.user_facing_error.is_panic) return new ae(Po(this, r.user_facing_error.message), this.config.clientVersion);
        let n = this.getExternalAdapterError(r.user_facing_error, t);
        return n ? n.error : $r(r, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(r, t) {
        if (r.error_code === hf && t) {
            let n = r.meta?.id;
            ln(typeof n == "number", "Malformed external JS error received from the engine");
            let i = t.consumeError(n);
            return ln(i, "External error with reported id was not registered"), i;
        }
    }
    async metrics(r) {
        await this.start();
        let t = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? t : this.parseEngineResponse(t);
    }
};
function xf(e) {
    return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function Po(e, r) {
    return El({
        binaryTarget: e.binaryTarget,
        title: r,
        version: e.config.clientVersion,
        engineVersion: e.versionInfo?.commit,
        database: e.config.activeProvider,
        query: e.lastQuery
    });
}
function Fl({ url: e, adapter: r, copyEngine: t, targetBuildType: n }) {
    let i = [], o = [], s = (g)=>{
        i.push({
            _tag: "warning",
            value: g
        });
    }, a = (g)=>{
        let I = g.join(`
`);
        o.push({
            _tag: "error",
            value: I
        });
    }, l = !!e?.startsWith("prisma://"), u = an(e), c = !!r, p = l || u;
    !c && t && p && n !== "client" && n !== "wasm-compiler-edge" && s([
        "recommend--no-engine",
        "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"
    ]);
    let d = p || !t;
    c && (d || n === "edge") && (n === "edge" ? a([
        "Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.",
        "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."
    ]) : p ? a([
        "You've provided both a driver adapter and an Accelerate database URL. Driver adapters currently cannot connect to Accelerate.",
        "Please provide either a driver adapter with a direct database URL or an Accelerate URL and no driver adapter."
    ]) : t || a([
        "Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.",
        "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."
    ]));
    let f = {
        accelerate: d,
        ppg: u,
        driverAdapters: c
    };
    function h(g) {
        return g.length > 0;
    }
    return h(o) ? {
        ok: !1,
        diagnostics: {
            warnings: i,
            errors: o
        },
        isUsing: f
    } : {
        ok: !0,
        diagnostics: {
            warnings: i
        },
        isUsing: f
    };
}
function Ml({ copyEngine: e = !0 }, r) {
    let t;
    try {
        t = jr({
            inlineDatasources: r.inlineDatasources,
            overrideDatasources: r.overrideDatasources,
            env: {
                ...r.env,
                ...process.env
            },
            clientVersion: r.clientVersion
        });
    } catch  {}
    let { ok: n, isUsing: i, diagnostics: o } = Fl({
        url: t,
        adapter: r.adapter,
        copyEngine: e,
        targetBuildType: "library"
    });
    for (let p of o.warnings)at(...p.value);
    if (!n) {
        let p = o.errors[0];
        throw new Z(p.value, {
            clientVersion: r.clientVersion
        });
    }
    let s = Er(r.generator), a = s === "library", l = s === "binary", u = s === "client", c = (i.accelerate || i.ppg) && !i.driverAdapters;
    return i.accelerate ? new qt(r) : (i.driverAdapters, a ? new Qr(r) : (i.accelerate, new Qr(r)));
}
function $l({ generator: e }) {
    return e?.previewFeatures ?? [];
}
var ql = (e)=>({
        command: e
    });
var Vl = (e)=>e.strings.reduce((r, t, n)=>`${r}@P${n}${t}`);
function Wr(e) {
    try {
        return jl(e, "fast");
    } catch  {
        return jl(e, "slow");
    }
}
function jl(e, r) {
    return JSON.stringify(e.map((t)=>Ul(t, r)));
}
function Ul(e, r) {
    if (Array.isArray(e)) return e.map((t)=>Ul(t, r));
    if (typeof e == "bigint") return {
        prisma__type: "bigint",
        prisma__value: e.toString()
    };
    if (vr(e)) return {
        prisma__type: "date",
        prisma__value: e.toJSON()
    };
    if (Fe.isDecimal(e)) return {
        prisma__type: "decimal",
        prisma__value: e.toJSON()
    };
    if (Buffer.isBuffer(e)) return {
        prisma__type: "bytes",
        prisma__value: e.toString("base64")
    };
    if (vf(e)) return {
        prisma__type: "bytes",
        prisma__value: Buffer.from(e).toString("base64")
    };
    if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return {
            prisma__type: "bytes",
            prisma__value: Buffer.from(t, n, i).toString("base64")
        };
    }
    return typeof e == "object" && r === "slow" ? Gl(e) : e;
}
function vf(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : !1;
}
function Gl(e) {
    if (typeof e != "object" || e === null) return e;
    if (typeof e.toJSON == "function") return e.toJSON();
    if (Array.isArray(e)) return e.map(Bl);
    let r = {};
    for (let t of Object.keys(e))r[t] = Bl(e[t]);
    return r;
}
function Bl(e) {
    return typeof e == "bigint" ? e.toString() : Gl(e);
}
var Pf = /^(\s*alter\s)/i, Ql = N("prisma:client");
function To(e, r, t, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && t.length > 0 && Pf.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var So = ({ clientMethod: e, activeProvider: r })=>(t)=>{
        let n = "", i;
        if (Vn(t)) n = t.sql, i = {
            values: Wr(t.values),
            __prismaRawParameters__: !0
        };
        else if (Array.isArray(t)) {
            let [o, ...s] = t;
            n = o, i = {
                values: Wr(s || []),
                __prismaRawParameters__: !0
            };
        } else switch(r){
            case "sqlite":
            case "mysql":
                {
                    n = t.sql, i = {
                        values: Wr(t.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            case "cockroachdb":
            case "postgresql":
            case "postgres":
                {
                    n = t.text, i = {
                        values: Wr(t.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            case "sqlserver":
                {
                    n = Vl(t), i = {
                        values: Wr(t.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            default:
                throw new Error(`The ${r} provider does not support ${e}`);
        }
        return i?.values ? Ql(`prisma.${e}(${n}, ${i.values})`) : Ql(`prisma.${e}(${n})`), {
            query: n,
            parameters: i
        };
    }, Wl = {
    requestArgsToMiddlewareArgs (e) {
        return [
            e.strings,
            ...e.values
        ];
    },
    middlewareArgsToRequestArgs (e) {
        let [r, ...t] = e;
        return new ie(r, t);
    }
}, Jl = {
    requestArgsToMiddlewareArgs (e) {
        return [
            e
        ];
    },
    middlewareArgsToRequestArgs (e) {
        return e[0];
    }
};
function Ro(e) {
    return function(t, n) {
        let i, o = (s = e)=>{
            try {
                return s === void 0 || s?.kind === "itx" ? i ??= Kl(t(s)) : Kl(t(s));
            } catch (a) {
                return Promise.reject(a);
            }
        };
        return {
            get spec () {
                return n;
            },
            then (s, a) {
                return o().then(s, a);
            },
            catch (s) {
                return o().catch(s);
            },
            finally (s) {
                return o().finally(s);
            },
            requestTransaction (s) {
                let a = o(s);
                return a.requestTransaction ? a.requestTransaction(s) : a;
            },
            [Symbol.toStringTag]: "PrismaPromise"
        };
    };
}
function Kl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
}
var Tf = xi.split(".")[0], Sf = {
    isEnabled () {
        return !1;
    },
    getTraceParent () {
        return "00-10-10-00";
    },
    dispatchEngineSpans () {},
    getActiveContext () {},
    runInChildSpan (e, r) {
        return r();
    }
}, Ao = class {
    isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(r) {
        return this.getGlobalTracingHelper().getTraceParent(r);
    }
    dispatchEngineSpans(r) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(r);
    }
    getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(r, t) {
        return this.getGlobalTracingHelper().runInChildSpan(r, t);
    }
    getGlobalTracingHelper() {
        let r = globalThis[`V${Tf}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
        return r?.helper ?? t?.helper ?? Sf;
    }
};
function Hl() {
    return new Ao;
}
function Yl(e, r = ()=>{}) {
    let t, n = new Promise((i)=>t = i);
    return {
        then (i) {
            return --e === 0 && t(r()), i?.(n);
        }
    };
}
function zl(e) {
    return typeof e == "string" ? e : e.reduce((r, t)=>{
        let n = typeof t == "string" ? t : t.level;
        return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
    }, void 0);
}
function zn(e) {
    return typeof e.batchRequestIdx == "number";
}
function Zl(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
    let r = [];
    return e.modelName && r.push(e.modelName), e.query.arguments && r.push(Co(e.query.arguments)), r.push(Co(e.query.selection)), r.join("");
}
function Co(e) {
    return `(${Object.keys(e).sort().map((t)=>{
        let n = e[t];
        return typeof n == "object" && n !== null ? `(${t} ${Co(n)})` : t;
    }).join(" ")})`;
}
var Rf = {
    aggregate: !1,
    aggregateRaw: !1,
    createMany: !0,
    createManyAndReturn: !0,
    createOne: !0,
    deleteMany: !0,
    deleteOne: !0,
    executeRaw: !0,
    findFirst: !1,
    findFirstOrThrow: !1,
    findMany: !1,
    findRaw: !1,
    findUnique: !1,
    findUniqueOrThrow: !1,
    groupBy: !1,
    queryRaw: !1,
    runCommandRaw: !0,
    updateMany: !0,
    updateManyAndReturn: !0,
    updateOne: !0,
    upsertOne: !0
};
function Io(e) {
    return Rf[e];
}
var Zn = class {
    constructor(r){
        this.options = r;
        this.batches = {};
    }
    batches;
    tickActive = !1;
    request(r) {
        let t = this.options.batchBy(r);
        return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = !0, process.nextTick(()=>{
            this.dispatchBatches(), this.tickActive = !1;
        }))), new Promise((n, i)=>{
            this.batches[t].push({
                request: r,
                resolve: n,
                reject: i
            });
        })) : this.options.singleLoader(r);
    }
    dispatchBatches() {
        for(let r in this.batches){
            let t = this.batches[r];
            delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n)=>{
                n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
            }).catch((n)=>{
                t[0].reject(n);
            }) : (t.sort((n, i)=>this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n)=>n.request)).then((n)=>{
                if (n instanceof Error) for(let i = 0; i < t.length; i++)t[i].reject(n);
                else for(let i = 0; i < t.length; i++){
                    let o = n[i];
                    o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
                }
            }).catch((n)=>{
                for(let i = 0; i < t.length; i++)t[i].reject(n);
            }));
        }
    }
    get [Symbol.toStringTag]() {
        return "DataLoader";
    }
};
function mr(e, r) {
    if (r === null) return r;
    switch(e){
        case "bigint":
            return BigInt(r);
        case "bytes":
            {
                let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
                return new Uint8Array(t, n, i);
            }
        case "decimal":
            return new Fe(r);
        case "datetime":
        case "date":
            return new Date(r);
        case "time":
            return new Date(`1970-01-01T${r}Z`);
        case "bigint-array":
            return r.map((t)=>mr("bigint", t));
        case "bytes-array":
            return r.map((t)=>mr("bytes", t));
        case "decimal-array":
            return r.map((t)=>mr("decimal", t));
        case "datetime-array":
            return r.map((t)=>mr("datetime", t));
        case "date-array":
            return r.map((t)=>mr("date", t));
        case "time-array":
            return r.map((t)=>mr("time", t));
        default:
            return r;
    }
}
function Xn(e) {
    let r = [], t = Af(e);
    for(let n = 0; n < e.rows.length; n++){
        let i = e.rows[n], o = {
            ...t
        };
        for(let s = 0; s < i.length; s++)o[e.columns[s]] = mr(e.types[s], i[s]);
        r.push(o);
    }
    return r;
}
function Af(e) {
    let r = {};
    for(let t = 0; t < e.columns.length; t++)r[e.columns[t]] = null;
    return r;
}
var Cf = N("prisma:client:request_handler"), ei = class {
    client;
    dataloader;
    logEmitter;
    constructor(r, t){
        this.logEmitter = t, this.client = r, this.dataloader = new Zn({
            batchLoader: rl(async ({ requests: n, customDataProxyFetch: i })=>{
                let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p)=>p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p)=>Io(p.protocolQuery.action));
                return (await this.client._engine.requestBatch(a, {
                    traceparent: l,
                    transaction: If(o),
                    containsWrite: u,
                    customDataProxyFetch: i
                })).map((p, d)=>{
                    if (p instanceof Error) return p;
                    try {
                        return this.mapQueryEngineResult(n[d], p);
                    } catch (f) {
                        return f;
                    }
                });
            }),
            singleLoader: async (n)=>{
                let i = n.transaction?.kind === "itx" ? Xl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, {
                    traceparent: this.client._tracingHelper.getTraceParent(),
                    interactiveTransaction: i,
                    isWrite: Io(n.protocolQuery.action),
                    customDataProxyFetch: n.customDataProxyFetch
                });
                return this.mapQueryEngineResult(n, o);
            },
            batchBy: (n)=>n.transaction?.id ? `transaction-${n.transaction.id}` : Zl(n.protocolQuery),
            batchOrder (n, i) {
                return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
            }
        });
    }
    async request(r) {
        try {
            return await this.dataloader.request(r);
        } catch (t) {
            let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
            this.handleAndLogRequestError({
                error: t,
                clientMethod: n,
                callsite: i,
                transaction: o,
                args: s,
                modelName: a,
                globalOmit: r.globalOmit
            });
        }
    }
    mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
        let i = n?.data, o = this.unpack(i, r, t);
        return process.env.PRISMA_CLIENT_GET_TIME ? {
            data: o
        } : o;
    }
    handleAndLogRequestError(r) {
        try {
            this.handleRequestError(r);
        } catch (t) {
            throw this.logEmitter && this.logEmitter.emit("error", {
                message: t.message,
                target: r.clientMethod,
                timestamp: new Date
            }), t;
        }
    }
    handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Cf(r), Df(r, i)) throw r;
        if (r instanceof z && Of(r)) {
            let u = eu(r.meta);
            Nn({
                args: o,
                errors: [
                    u
                ],
                callsite: n,
                errorFormat: this.client._errorFormat,
                originalMethod: t,
                clientVersion: this.client._clientVersion,
                globalOmit: a
            });
        }
        let l = r.message;
        if (n && (l = Tn({
            callsite: n,
            originalMethod: t,
            isPanic: r.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: l
        })), l = this.sanitizeMessage(l), r.code) {
            let u = s ? {
                modelName: s,
                ...r.meta
            } : r.meta;
            throw new z(l, {
                code: r.code,
                clientVersion: this.client._clientVersion,
                meta: u,
                batchRequestIdx: r.batchRequestIdx
            });
        } else {
            if (r.isPanic) throw new ae(l, this.client._clientVersion);
            if (r instanceof V) throw new V(l, {
                clientVersion: this.client._clientVersion,
                batchRequestIdx: r.batchRequestIdx
            });
            if (r instanceof P) throw new P(l, this.client._clientVersion);
            if (r instanceof ae) throw new ae(l, this.client._clientVersion);
        }
        throw r.clientVersion = this.client._clientVersion, r;
    }
    sanitizeMessage(r) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? wr(r) : r;
    }
    unpack(r, t, n) {
        if (!r || (r.data && (r = r.data), !r)) return r;
        let i = Object.keys(r)[0], o = Object.values(r)[0], s = t.filter((u)=>u !== "select" && u !== "include"), a = ao(o, s), l = i === "queryRaw" ? Xn(a) : Vr(a);
        return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
        return "RequestHandler";
    }
};
function If(e) {
    if (e) {
        if (e.kind === "batch") return {
            kind: "batch",
            options: {
                isolationLevel: e.isolationLevel
            }
        };
        if (e.kind === "itx") return {
            kind: "itx",
            options: Xl(e)
        };
        ar(e, "Unknown transaction kind");
    }
}
function Xl(e) {
    return {
        id: e.id,
        payload: e.payload
    };
}
function Df(e, r) {
    return zn(e) && r?.kind === "batch" && e.batchRequestIdx !== r.index;
}
function Of(e) {
    return e.code === "P2009" || e.code === "P2012";
}
function eu(e) {
    if (e.kind === "Union") return {
        kind: "Union",
        errors: e.errors.map(eu)
    };
    if (Array.isArray(e.selectionPath)) {
        let [, ...r] = e.selectionPath;
        return {
            ...e,
            selectionPath: r
        };
    }
    return e;
}
var ru = xl;
var su = O(Ki());
var _ = class extends Error {
    constructor(r){
        super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
    }
};
x(_, "PrismaClientConstructorValidationError");
var tu = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "omit",
    "__internal"
], nu = [
    "pretty",
    "colorless",
    "minimal"
], iu = [
    "info",
    "query",
    "warn",
    "error"
], kf = {
    datasources: (e, { datasourceNames: r })=>{
        if (e) {
            if (typeof e != "object" || Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
            for (let [t, n] of Object.entries(e)){
                if (!r.includes(t)) {
                    let i = Jr(t, r) || ` Available datasources: ${r.join(", ")}`;
                    throw new _(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
                }
                if (typeof n != "object" || Array.isArray(n)) throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                if (n && typeof n == "object") for (let [i, o] of Object.entries(n)){
                    if (i !== "url") throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                    if (typeof o != "string") throw new _(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                }
            }
        }
    },
    adapter: (e, r)=>{
        if (!e && Er(r.generator) === "client") throw new _('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
        if (e !== null) {
            if (e === void 0) throw new _('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
            if (Er(r.generator) === "binary") throw new _('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
        }
    },
    datasourceUrl: (e)=>{
        if (typeof e < "u" && typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e)=>{
        if (e) {
            if (typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
            if (!nu.includes(e)) {
                let r = Jr(e, nu);
                throw new _(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`);
            }
        }
    },
    log: (e)=>{
        if (!e) return;
        if (!Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
        function r(t) {
            if (typeof t == "string" && !iu.includes(t)) {
                let n = Jr(t, iu);
                throw new _(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
            }
        }
        for (let t of e){
            r(t);
            let n = {
                level: r,
                emit: (i)=>{
                    let o = [
                        "stdout",
                        "event"
                    ];
                    if (!o.includes(i)) {
                        let s = Jr(i, o);
                        throw new _(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
                    }
                }
            };
            if (t && typeof t == "object") for (let [i, o] of Object.entries(t))if (n[i]) n[i](o);
            else throw new _(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
        }
    },
    transactionOptions: (e)=>{
        if (!e) return;
        let r = e.maxWait;
        if (r != null && r <= 0) throw new _(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
        let t = e.timeout;
        if (t != null && t <= 0) throw new _(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    },
    omit: (e, r)=>{
        if (typeof e != "object") throw new _('"omit" option is expected to be an object.');
        if (e === null) throw new _('"omit" option can not be `null`');
        let t = [];
        for (let [n, i] of Object.entries(e)){
            let o = Nf(n, r.runtimeDataModel);
            if (!o) {
                t.push({
                    kind: "UnknownModel",
                    modelKey: n
                });
                continue;
            }
            for (let [s, a] of Object.entries(i)){
                let l = o.fields.find((u)=>u.name === s);
                if (!l) {
                    t.push({
                        kind: "UnknownField",
                        modelKey: n,
                        fieldName: s
                    });
                    continue;
                }
                if (l.relationName) {
                    t.push({
                        kind: "RelationInOmit",
                        modelKey: n,
                        fieldName: s
                    });
                    continue;
                }
                typeof a != "boolean" && t.push({
                    kind: "InvalidFieldValue",
                    modelKey: n,
                    fieldName: s
                });
            }
        }
        if (t.length > 0) throw new _(Lf(e, t));
    },
    __internal: (e)=>{
        if (!e) return;
        let r = [
            "debug",
            "engine",
            "configOverride"
        ];
        if (typeof e != "object") throw new _(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
        for (let [t] of Object.entries(e))if (!r.includes(t)) {
            let n = Jr(t, r);
            throw new _(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    }
};
function au(e, r) {
    for (let [t, n] of Object.entries(e)){
        if (!tu.includes(t)) {
            let i = Jr(t, tu);
            throw new _(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
        }
        kf[t](n, r);
    }
    if (e.datasourceUrl && e.datasources) throw new _('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function Jr(e, r) {
    if (r.length === 0 || typeof e != "string") return "";
    let t = _f(e, r);
    return t ? ` Did you mean "${t}"?` : "";
}
function _f(e, r) {
    if (r.length === 0) return null;
    let t = r.map((i)=>({
            value: i,
            distance: (0, su.default)(e, i)
        }));
    t.sort((i, o)=>i.distance < o.distance ? -1 : 1);
    let n = t[0];
    return n.distance < 3 ? n.value : null;
}
function Nf(e, r) {
    return ou(r.models, e) ?? ou(r.types, e);
}
function ou(e, r) {
    let t = Object.keys(e).find((n)=>We(n) === r);
    if (t) return e[t];
}
function Lf(e, r) {
    let t = _r(e);
    for (let o of r)switch(o.kind){
        case "UnknownModel":
            t.arguments.getField(o.modelKey)?.markAsError(), t.addErrorMessage(()=>`Unknown model name: ${o.modelKey}.`);
            break;
        case "UnknownField":
            t.arguments.getDeepField([
                o.modelKey,
                o.fieldName
            ])?.markAsError(), t.addErrorMessage(()=>`Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
            break;
        case "RelationInOmit":
            t.arguments.getDeepField([
                o.modelKey,
                o.fieldName
            ])?.markAsError(), t.addErrorMessage(()=>'Relations are already excluded by default and can not be specified in "omit".');
            break;
        case "InvalidFieldValue":
            t.arguments.getDeepFieldValue([
                o.modelKey,
                o.fieldName
            ])?.markAsError(), t.addErrorMessage(()=>"Omit field option value must be a boolean.");
            break;
    }
    let { message: n, args: i } = _n(t, "colorless");
    return `Error validating "omit" option:

${i}

${n}`;
}
function lu(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((r, t)=>{
        let n = new Array(e.length), i = null, o = !1, s = 0, a = ()=>{
            o || (s++, s === e.length && (o = !0, i ? t(i) : r(n)));
        }, l = (u)=>{
            o || (o = !0, t(u));
        };
        for(let u = 0; u < e.length; u++)e[u].then((c)=>{
            n[u] = c, a();
        }, (c)=>{
            if (!zn(c)) {
                l(c);
                return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
    });
}
var rr = N("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Ff = {
    requestArgsToMiddlewareArgs: (e)=>e,
    middlewareArgsToRequestArgs: (e)=>e
}, Mf = Symbol.for("prisma.client.transaction.id"), $f = {
    id: 0,
    nextId () {
        return ++this.id;
    }
};
function fu(e) {
    class r {
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = Ro();
        constructor(n){
            e = n?.__internal?.configOverride?.(e) ?? e, sl(e), n && au(n, e);
            let i = new du.EventEmitter().on("error", ()=>{});
            this._extensions = Nr.empty(), this._previewFeatures = $l(e), this._clientVersion = e.clientVersion ?? ru, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Hl();
            let o = e.relativeEnvPaths && {
                rootEnvPath: e.relativeEnvPaths.rootEnvPath && ri.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
                schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && ri.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath)
            }, s;
            if (n?.adapter) {
                s = n.adapter;
                let l = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
                if (s.provider !== l) throw new P(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
                if (n.datasources || n.datasourceUrl !== void 0) throw new P("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
            }
            let a = !s && o && st(o, {
                conflictCheck: "none"
            }) || e.injectableEdgeEnv?.();
            try {
                let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === !0;
                c && N.enable("prisma:client");
                let p = ri.default.resolve(e.dirname, e.relativePath);
                mu.default.existsSync(p) || (p = e.dirname), rr("dirname", e.dirname), rr("relativePath", e.relativePath), rr("cwd", p);
                let d = u.engine || {};
                if (l.errorFormat ? this._errorFormat = l.errorFormat : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = {
                    cwd: p,
                    dirname: e.dirname,
                    enableDebugLogs: c,
                    allowTriggerPanic: d.allowTriggerPanic,
                    prismaPath: d.binaryPath ?? void 0,
                    engineEndpoint: d.endpoint,
                    generator: e.generator,
                    showColors: this._errorFormat === "pretty",
                    logLevel: l.log && zl(l.log),
                    logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f)=>typeof f == "string" ? f === "query" : f.level === "query")),
                    env: a?.parsed ?? {},
                    flags: [],
                    engineWasm: e.engineWasm,
                    compilerWasm: e.compilerWasm,
                    clientVersion: e.clientVersion,
                    engineVersion: e.engineVersion,
                    previewFeatures: this._previewFeatures,
                    activeProvider: e.activeProvider,
                    inlineSchema: e.inlineSchema,
                    overrideDatasources: al(l, e.datasourceNames),
                    inlineDatasources: e.inlineDatasources,
                    inlineSchemaHash: e.inlineSchemaHash,
                    tracingHelper: this._tracingHelper,
                    transactionOptions: {
                        maxWait: l.transactionOptions?.maxWait ?? 2e3,
                        timeout: l.transactionOptions?.timeout ?? 5e3,
                        isolationLevel: l.transactionOptions?.isolationLevel
                    },
                    logEmitter: i,
                    isBundled: e.isBundled,
                    adapter: s
                }, this._accelerateEngineConfig = {
                    ...this._engineConfig,
                    accelerateUtils: {
                        resolveDatasourceUrl: jr,
                        getBatchRequestPayload: Mr,
                        prismaGraphQLToJSError: $r,
                        PrismaClientUnknownRequestError: V,
                        PrismaClientInitializationError: P,
                        PrismaClientKnownRequestError: z,
                        debug: N("prisma:client:accelerateEngine"),
                        engineVersion: cu.version,
                        clientVersion: e.clientVersion
                    }
                }, rr("clientVersion", e.clientVersion), this._engine = Ml(e, this._engineConfig), this._requestHandler = new ei(this, i), l.log) for (let f of l.log){
                    let h = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                    h && this.$on(h, (g)=>{
                        nt.log(`${nt.tags[h] ?? ""}`, g.message || g.query);
                    });
                }
            } catch (l) {
                throw l.clientVersion = this._clientVersion, l;
            }
            return this._appliedParent = Pt(this);
        }
        get [Symbol.toStringTag]() {
            return "PrismaClient";
        }
        $on(n, i) {
            return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
            try {
                return this._engine.start();
            } catch (n) {
                throw n.clientVersion = this._clientVersion, n;
            }
        }
        async $disconnect() {
            try {
                await this._engine.stop();
            } catch (n) {
                throw n.clientVersion = this._clientVersion, n;
            } finally{
                Uo();
            }
        }
        $executeRawInternal(n, i, o, s) {
            let a = this._activeProvider;
            return this._request({
                action: "executeRaw",
                args: o,
                transaction: n,
                clientMethod: i,
                argsMapper: So({
                    clientMethod: i,
                    activeProvider: a
                }),
                callsite: Ze(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s
            });
        }
        $executeRaw(n, ...i) {
            return this._createPrismaPromise((o)=>{
                if (n.raw !== void 0 || n.sql !== void 0) {
                    let [s, a] = uu(n, i);
                    return To(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
                }
                throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", {
                    clientVersion: this._clientVersion
                });
            });
        }
        $executeRawUnsafe(n, ...i) {
            return this._createPrismaPromise((o)=>(To(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [
                    n,
                    ...i
                ])));
        }
        $runCommandRaw(n) {
            if (e.activeProvider !== "mongodb") throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, {
                clientVersion: this._clientVersion
            });
            return this._createPrismaPromise((i)=>this._request({
                    args: n,
                    clientMethod: "$runCommandRaw",
                    dataPath: [],
                    action: "runCommandRaw",
                    argsMapper: ql,
                    callsite: Ze(this._errorFormat),
                    transaction: i
                }));
        }
        async $queryRawInternal(n, i, o, s) {
            let a = this._activeProvider;
            return this._request({
                action: "queryRaw",
                args: o,
                transaction: n,
                clientMethod: i,
                argsMapper: So({
                    clientMethod: i,
                    activeProvider: a
                }),
                callsite: Ze(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s
            });
        }
        $queryRaw(n, ...i) {
            return this._createPrismaPromise((o)=>{
                if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...uu(n, i));
                throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", {
                    clientVersion: this._clientVersion
                });
            });
        }
        $queryRawTyped(n) {
            return this._createPrismaPromise((i)=>{
                if (!this._hasPreviewFlag("typedSql")) throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", {
                    clientVersion: this._clientVersion
                });
                return this.$queryRawInternal(i, "$queryRawTyped", n);
            });
        }
        $queryRawUnsafe(n, ...i) {
            return this._createPrismaPromise((o)=>this.$queryRawInternal(o, "$queryRawUnsafe", [
                    n,
                    ...i
                ]));
        }
        _transactionWithArray({ promises: n, options: i }) {
            let o = $f.nextId(), s = Yl(n.length), a = n.map((l, u)=>{
                if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
                let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = {
                    kind: "batch",
                    id: o,
                    index: u,
                    isolationLevel: c,
                    lock: s
                };
                return l.requestTransaction?.(p) ?? l;
            });
            return lu(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
            let o = {
                traceparent: this._tracingHelper.getTraceParent()
            }, s = {
                maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
                timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
                isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel
            }, a = await this._engine.transaction("start", o, s), l;
            try {
                let u = {
                    kind: "itx",
                    ...a
                };
                l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
            } catch (u) {
                throw await this._engine.transaction("rollback", o, a).catch(()=>{}), u;
            }
            return l;
        }
        _createItxClient(n) {
            return he(Pt(he(Qa(this), [
                re("_appliedParent", ()=>this._appliedParent._createItxClient(n)),
                re("_createPrismaPromise", ()=>Ro(n)),
                re(Mf, ()=>n.id)
            ])), [
                Fr(Ya)
            ]);
        }
        $transaction(n, i) {
            let o;
            typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = ()=>{
                throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
            } : o = ()=>this._transactionWithCallback({
                    callback: n,
                    options: i
                }) : o = ()=>this._transactionWithArray({
                    promises: n,
                    options: i
                });
            let s = {
                name: "transaction",
                attributes: {
                    method: "$transaction"
                }
            };
            return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
            n.otelParentCtx = this._tracingHelper.getActiveContext();
            let i = n.middlewareArgsMapper ?? Ff, o = {
                args: i.requestArgsToMiddlewareArgs(n.args),
                dataPath: n.dataPath,
                runInTransaction: !!n.transaction,
                action: n.action,
                model: n.model
            }, s = {
                operation: {
                    name: "operation",
                    attributes: {
                        method: o.action,
                        model: o.model,
                        name: o.model ? `${o.model}.${o.action}` : o.action
                    }
                }
            }, a = async (l)=>{
                let { runInTransaction: u, args: c, ...p } = l, d = {
                    ...n,
                    ...p
                };
                c && (d.args = i.middlewareArgsToRequestArgs(c)), n.transaction !== void 0 && u === !1 && delete d.transaction;
                let f = await el(this, d);
                return d.model ? Ha({
                    result: f,
                    modelName: d.model,
                    args: d.args,
                    extensions: this._extensions,
                    runtimeDataModel: this._runtimeDataModel,
                    globalOmit: this._globalOmit
                }) : f;
            };
            return this._tracingHelper.runInChildSpan(s.operation, ()=>new pu.AsyncResource("prisma-client-request").runInAsyncScope(()=>a(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
            try {
                n = u ? u(n) : n;
                let h = {
                    name: "serialize"
                }, g = this._tracingHelper.runInChildSpan(h, ()=>$n({
                        modelName: l,
                        runtimeDataModel: this._runtimeDataModel,
                        action: a,
                        args: n,
                        clientMethod: i,
                        callsite: s,
                        extensions: this._extensions,
                        errorFormat: this._errorFormat,
                        clientVersion: this._clientVersion,
                        previewFeatures: this._previewFeatures,
                        globalOmit: this._globalOmit
                    }));
                return N.enabled("prisma:client") && (rr("Prisma Client call:"), rr(`prisma.${i}(${Na(n)})`), rr("Generated request:"), rr(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({
                    protocolQuery: g,
                    modelName: l,
                    action: a,
                    clientMethod: i,
                    dataPath: o,
                    callsite: s,
                    args: n,
                    extensions: this._extensions,
                    transaction: c,
                    unpacker: p,
                    otelParentCtx: d,
                    otelChildCtx: this._tracingHelper.getActiveContext(),
                    globalOmit: this._globalOmit,
                    customDataProxyFetch: f
                });
            } catch (h) {
                throw h.clientVersion = this._clientVersion, h;
            }
        }
        $metrics = new Lr(this);
        _hasPreviewFlag(n) {
            return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
            return this._engine.applyPendingMigrations();
        }
        $extends = Wa;
    }
    return r;
}
function uu(e, r) {
    return qf(e) ? [
        new ie(e, r),
        Wl
    ] : [
        e,
        Jl
    ];
}
function qf(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
}
var Vf = new Set([
    "toJSON",
    "$$typeof",
    "asymmetricMatch",
    Symbol.iterator,
    Symbol.toStringTag,
    Symbol.isConcatSpreadable,
    Symbol.toPrimitive
]);
function gu(e) {
    return new Proxy(e, {
        get (r, t) {
            if (t in r) return r[t];
            if (!Vf.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
        }
    });
}
function hu(e) {
    st(e, {
        conflictCheck: "warn"
    });
}
0 && (module.exports = {
    DMMF,
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    createParam,
    defineDmmfProperty,
    deserializeJsonResponse,
    deserializeRawResult,
    dmmfToRuntimeDataModel,
    empty,
    getPrismaClient,
    getRuntime,
    join,
    makeStrictEnum,
    makeTypedQueryFactory,
    objectEnumValues,
    raw,
    serializeJsonQuery,
    skip,
    sqltag,
    warnEnvConflicts,
    warnOnce
}); /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/  //# sourceMappingURL=library.js.map
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/Downloads/nodebase-main/lib/generated/prisma/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */ Object.defineProperty(exports, "__esModule", {
    value: true
});
const { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, getPrismaClient, sqltag, empty, join, raw, skip, Decimal, Debug, objectEnumValues, makeStrictEnum, Extensions, warnOnce, defineDmmfProperty, Public, getRuntime, createParam } = __turbopack_context__.r("[project]/Downloads/nodebase-main/lib/generated/prisma/runtime/library.js [app-ssr] (ecmascript)");
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 6.18.0
 * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
 */ Prisma.prismaVersion = {
    client: "6.18.0",
    engine: "34b5a692b7bd79939a9a2c3ef97d816e749cda2f"
};
Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */ Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;
/**
* Extensions
*/ Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;
/**
 * Shorthand utilities for JSON filtering
 */ Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;
Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull
};
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
/**
 * Enums
 */ exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Prisma.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    polarCustomerId: 'polarCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.SessionScalarFieldEnum = {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
};
exports.Prisma.AccountScalarFieldEnum = {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.VerificationScalarFieldEnum = {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.WorkflowScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
};
exports.Prisma.NodeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    position: 'position',
    data: 'data',
    workflowId: 'workflowId'
};
exports.Prisma.ConnectionScalarFieldEnum = {
    id: 'id',
    workflow: 'workflow',
    fromNodeId: 'fromNodeId',
    toNodeId: 'toNodeId',
    fromOutput: 'fromOutput',
    toInput: 'toInput',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.Prisma.JsonNullValueInput = {
    JsonNull: Prisma.JsonNull
};
exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.Prisma.JsonNullValueFilter = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull,
    AnyNull: Prisma.AnyNull
};
exports.NodeType = exports.$Enums.NodeType = {
    INITIAL: 'INITIAL',
    MANUAL_TRIGGER: 'MANUAL_TRIGGER',
    HTTP_REQUEST: 'HTTP_REQUEST'
};
exports.Prisma.ModelName = {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Workflow: 'Workflow',
    Node: 'Node',
    Connection: 'Connection'
};
/**
 * Create the Client
 */ const config = {
    "generator": {
        "name": "client",
        "provider": {
            "fromEnvVar": null,
            "value": "prisma-client-js"
        },
        "output": {
            "value": "/Users/mkazi/Downloads/nodebase-main/lib/generated/prisma",
            "fromEnvVar": null
        },
        "config": {
            "engineType": "library"
        },
        "binaryTargets": [
            {
                "fromEnvVar": null,
                "value": "darwin-arm64",
                "native": true
            }
        ],
        "previewFeatures": [],
        "sourceFilePath": "/Users/mkazi/Downloads/nodebase-main/prisma/schema.prisma",
        "isCustomOutput": true
    },
    "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
    },
    "relativePath": "../../../prisma",
    "clientVersion": "6.18.0",
    "engineVersion": "34b5a692b7bd79939a9a2c3ef97d816e749cda2f",
    "datasourceNames": [
        "db"
    ],
    "activeProvider": "postgresql",
    "postinstall": false,
    "inlineDatasources": {
        "db": {
            "url": {
                "fromEnvVar": "DATABASE_URL",
                "value": null
            }
        }
    },
    "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../lib/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id              String     @id\n  name            String\n  email           String     @unique\n  emailVerified   Boolean    @default(false)\n  image           String?\n  polarCustomerId String? // Add this field\n  createdAt       DateTime   @default(now())\n  updatedAt       DateTime   @default(now()) @updatedAt\n  workflows       Workflow[]\n  accounts        Account[]\n  sessions        Session[]\n\n  @@map(\"user\")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String   @unique\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"session\")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"account\")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @default(now()) @updatedAt\n\n  @@map(\"verification\")\n}\n\nmodel Workflow {\n  id          String       @id @default(cuid())\n  name        String\n  createdAt   DateTime     @default(now())\n  updatedAt   DateTime     @updatedAt\n  userId      String\n  connections Connection[]\n  nodes       Node[]\n  user        User         @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel Node {\n  id                String       @id @default(cuid())\n  name              String\n  createdAt         DateTime     @default(now())\n  updatedAt         DateTime     @updatedAt\n  type              NodeType\n  position          Json\n  data              Json         @default(\"{}\")\n  workflowId        String\n  outputConnections Connection[] @relation(\"FromNode\")\n  inputConnections  Connection[] @relation(\"ToNode\")\n  workflow          Workflow     @relation(fields: [workflowId], references: [id], onDelete: Cascade)\n}\n\nmodel Connection {\n  id         String   @id @default(cuid())\n  workflow   String\n  fromNodeId String\n  toNodeId   String\n  fromOutput String   @default(\"main\")\n  toInput    String   @default(\"main\")\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @default(now()) @updatedAt\n  fromNode   Node     @relation(\"FromNode\", fields: [fromNodeId], references: [id], onDelete: Cascade)\n  toNode     Node     @relation(\"ToNode\", fields: [toNodeId], references: [id], onDelete: Cascade)\n  Workflow   Workflow @relation(fields: [workflow], references: [id], onDelete: Cascade)\n\n  @@unique([fromNodeId, fromOutput, toNodeId, toInput])\n}\n\nenum NodeType {\n  INITIAL\n  MANUAL_TRIGGER\n  HTTP_REQUEST\n}\n",
    "inlineSchemaHash": "bcae6a51c63733f549909c2ece6b1b8912c6415b005e2b9d15745c6ae6451eee",
    "copyEngine": true
};
const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
config.dirname = ("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma");
if (!fs.existsSync(path.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma"), 'schema.prisma'))) {
    const alternativePaths = [
        "lib/generated/prisma",
        "generated/prisma"
    ];
    const alternativePath = alternativePaths.find((altPath)=>{
        return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'));
    }) ?? alternativePaths[0];
    config.dirname = path.join(process.cwd(), alternativePath);
    config.isBundled = true;
}
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"user\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"polarCustomerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"workflows\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workflow\",\"nativeType\":null,\"relationName\":\"UserToWorkflow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"nativeType\":null,\"relationName\":\"AccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"nativeType\":null,\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":\"session\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Account\":{\"dbName\":\"account\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessTokenExpiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshTokenExpiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"AccountToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Verification\":{\"dbName\":\"verification\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Workflow\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Connection\",\"nativeType\":null,\"relationName\":\"ConnectionToWorkflow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nodes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Node\",\"nativeType\":null,\"relationName\":\"NodeToWorkflow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToWorkflow\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Node\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NodeType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"nativeType\":null,\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflowId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outputConnections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Connection\",\"nativeType\":null,\"relationName\":\"FromNode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inputConnections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Connection\",\"nativeType\":null,\"relationName\":\"ToNode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workflow\",\"nativeType\":null,\"relationName\":\"NodeToWorkflow\",\"relationFromFields\":[\"workflowId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Connection\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromNodeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toNodeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromOutput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"main\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toInput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"main\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"fromNode\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Node\",\"nativeType\":null,\"relationName\":\"FromNode\",\"relationFromFields\":[\"fromNodeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toNode\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Node\",\"nativeType\":null,\"relationName\":\"ToNode\",\"relationFromFields\":[\"toNodeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Workflow\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workflow\",\"nativeType\":null,\"relationName\":\"ConnectionToWorkflow\",\"relationFromFields\":[\"workflow\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"fromNodeId\",\"fromOutput\",\"toNodeId\",\"toInput\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"fromNodeId\",\"fromOutput\",\"toNodeId\",\"toInput\"]}],\"isGenerated\":false}},\"enums\":{\"NodeType\":{\"values\":[{\"name\":\"INITIAL\",\"dbName\":null},{\"name\":\"MANUAL_TRIGGER\",\"dbName\":null},{\"name\":\"HTTP_REQUEST\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}");
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;
config.compilerWasm = undefined;
const { warnEnvConflicts } = __turbopack_context__.r("[project]/Downloads/nodebase-main/lib/generated/prisma/runtime/library.js [app-ssr] (ecmascript)");
warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
});
const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
// file annotations for bundling tools to include these files
path.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma"), "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "lib/generated/prisma/libquery_engine-darwin-arm64.dylib.node");
// file annotations for bundling tools to include these files
path.join(("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/lib/generated/prisma"), "schema.prisma");
path.join(process.cwd(), "lib/generated/prisma/schema.prisma");
}),
"[project]/Downloads/nodebase-main/components/node-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeSelector",
    ()=>NodeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$paralleldrive$2f$cuid2$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@paralleldrive/cuid2/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$paralleldrive$2f$cuid2$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@paralleldrive/cuid2/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/mouse-pointer.js [app-ssr] (ecmascript) <export default as MousePointerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/generated/prisma/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/separator.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const triggerNodes = [
    {
        label: "Trigger manually",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerIcon$3e$__["MousePointerIcon"],
        description: "Runs the flow manually",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].MANUAL_TRIGGER
    }
];
const executionNodes = [
    {
        label: "HTTP Request",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__["GlobeIcon"],
        description: "Makes an HTTP request",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].HTTP_REQUEST
    }
];
function NodeSelector({ open, onOpenChange, children }) {
    const { setNodes, getNodes, screenToFlowPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const handleNodeSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nodeType)=>{
        if (nodeType.type === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].MANUAL_TRIGGER) {
            const nodes = getNodes();
            const hasManualTrigger = nodes.some((node)=>node.type === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].MANUAL_TRIGGER);
            if (hasManualTrigger) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("You can only have one manual trigger");
                return;
            }
        }
        setNodes((nodes)=>{
            const hasInitialTrigger = nodes.some((node)=>node.type === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].INITIAL);
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const flowPosition = screenToFlowPosition({
                x: centerX + (Math.random() - 0.5) * 200,
                y: centerY + (Math.random() - 0.5) * 200
            });
            const newNode = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$paralleldrive$2f$cuid2$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createId"])(),
                data: {},
                type: nodeType.type,
                position: flowPosition
            };
            if (hasInitialTrigger) {
                return [
                    newNode
                ];
            }
            return [
                ...nodes,
                newNode
            ];
        });
        onOpenChange(false);
    }, [
        setNodes,
        getNodes,
        screenToFlowPosition,
        onOpenChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
        open: open,
        onOpenChange: onOpenChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                side: "right",
                className: "w-full sm:max-w-md overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "What triggers this workflow?"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                children: "A trigger is a step that starts the workflow."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: triggerNodes.map((node)=>{
                            const Icon = node.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full justify-start h-auto py-5 px-4 rounded-none cursor-pointer border-l-2 border-transparent hover:border-l-primary",
                                onClick: ()=>handleNodeSelect(node),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 w-full overflow-hidden",
                                    children: [
                                        typeof Icon === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: Icon,
                                            alt: node.label,
                                            className: "size-5 object-contain rounded-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: node.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: node.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            }, node.type, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: executionNodes.map((node)=>{
                            const Icon = node.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full justify-start h-auto py-5 px-4 rounded-none cursor-pointer border-l-2 border-transparent hover:border-l-primary",
                                onClick: ()=>handleNodeSelect(node),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 w-full overflow-hidden",
                                    children: [
                                        typeof Icon === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: Icon,
                                            alt: node.label,
                                            className: "size-5 object-contain rounded-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                            lineNumber: 154,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                            lineNumber: 160,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: node.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: node.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            }, node.type, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/node-selector.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/nodebase-main/components/initial-node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InitialNode",
    ()=>InitialNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$placeholder$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/placeholder-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$workflow$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/workflow-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$node$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/node-selector.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const InitialNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((props)=>{
    const [selectorOpen, setSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$node$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeSelector"], {
        open: selectorOpen,
        onOpenChange: setSelectorOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$workflow$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkflowNode"], {
            showToolbar: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$placeholder$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaceholderNode"], {
                ...props,
                onClick: ()=>{
                    setSelectorOpen(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-4 cursor-pointer items-center justify-center flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/initial-node.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/initial-node.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/initial-node.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/initial-node.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/initial-node.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
}),
"[project]/Downloads/nodebase-main/components/react-flow/base-handle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseHandle",
    ()=>BaseHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const BaseHandle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition dark:border-secondary dark:bg-secondary", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/base-handle.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
BaseHandle.displayName = "BaseHandle";
}),
"[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BorderLoadingIndicator",
    ()=>BorderLoadingIndicator,
    "NodeStatusIndicator",
    ()=>NodeStatusIndicator,
    "SpinnerLoadingIndicator",
    ()=>SpinnerLoadingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const SpinnerLoadingIndicator = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBorder, {
                className: "border-blue-700/40",
                children: children
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-50 rounded-[7px] bg-background/50 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-[calc(50%-1.25rem)] top-[calc(50%-1.25rem)] inline-block h-10 w-10 animate-ping rounded-full bg-blue-700/20"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                        className: "absolute left-[calc(50%-0.75rem)] top-[calc(50%-0.75rem)] size-6 animate-spin text-blue-700"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const BorderLoadingIndicator = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-[2px] -top-[2px] h-[calc(100%+4px)] w-[calc(100%+4px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .spinner {
          animation: spin 2s linear infinite;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 140%;
          aspect-ratio: 1;
          transform-origin: center;
        }
      `
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 overflow-hidden rounded-sm", className),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,_orange_0deg,_rgba(255,255,255,0.2)_360deg)]"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true);
};
const StatusBorder = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute -left-[2px] -top-[2px] h-[calc(100%+4px)] w-[calc(100%+4px)] rounded-md border-3", className)
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true);
};
const NodeStatusIndicator = ({ status, variant = "border", children, className })=>{
    switch(status){
        case "loading":
            switch(variant){
                case "overlay":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerLoadingIndicator, {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                        lineNumber: 102,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                case "border":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BorderLoadingIndicator, {
                        className: className,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                        lineNumber: 104,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                default:
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: children
                    }, void 0, false);
            }
        case "success":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBorder, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-green-700/50", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "error":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBorder, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-red-700/50", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx",
                lineNumber: 113,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false);
    }
};
}),
"[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseExecutionNode",
    ()=>BaseExecutionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/base-handle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$workflow$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/workflow-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$node$2d$status$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const BaseExecutionNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ id, icon: Icon, name, description, children, status = "initial", onSettings, onDoubleClick })=>{
    const { setNodes, setEdges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const handleDelete = ()=>{
        setNodes((currentNodes)=>currentNodes.filter((node)=>node.id !== id));
        setEdges((currentEdges)=>currentEdges.filter((edge)=>edge.source !== id && edge.target !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$workflow$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkflowNode"], {
        name: name,
        description: description,
        onDelete: handleDelete,
        onSettings: onSettings,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$node$2d$status$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeStatusIndicator"], {
            status: status,
            variant: "border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseNode"], {
                onDoubleClick: onDoubleClick,
                status: status,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseNodeContent"], {
                    children: [
                        typeof Icon === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: Icon,
                            alt: name,
                            width: 16,
                            height: 16
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "size-4 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
                            lineNumber: 60,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseHandle"], {
                            id: "target-1",
                            type: "target",
                            position: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Left
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseHandle"], {
                            id: "source-1",
                            type: "source",
                            position: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Right
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
            lineNumber: 46,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx",
        lineNumber: 40,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
BaseExecutionNode.displayName = "BaseExecutionNode";
}),
"[project]/Downloads/nodebase-main/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFormField = ()=>{
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const formState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormState"])({
        name: fieldContext.name
    });
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
function FormItem({ className, ...props }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "form-item",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
function FormLabel({ className, ...props }) {
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "form-label",
        "data-error": !!error,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[error=true]:text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
function FormControl({ ...props }) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
        "data-slot": "form-control",
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function FormDescription({ className, ...props }) {
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "form-description",
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
function FormMessage({ className, ...props }) {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : props.children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "form-message",
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-destructive text-sm", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/form.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "popper", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/select.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpRequestDialog",
    ()=>HttpRequestDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].url({
        message: "Please enter a valid URL"
    }),
    method: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ]),
    body: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const HttpRequestDialog = ({ open, onOpenChange, onSubmit, defaultEndpoint = "", defaultMethod = "GET", defaultBody = "" })=>{
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
        defaultValues: {
            endpoint: defaultEndpoint,
            method: defaultMethod,
            body: defaultBody
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            form.reset({
                endpoint: defaultEndpoint,
                method: defaultMethod,
                body: defaultBody
            });
        }
    }, [
        defaultEndpoint,
        defaultMethod,
        defaultBody,
        open,
        form
    ]);
    const watchMethod = form.watch("method");
    const showBodyField = [
        "POST",
        "PUT",
        "PATCH"
    ].includes(watchMethod);
    const handleSubmit = (values)=>{
        onSubmit(values);
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "HTTP Request"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Trigger the workflow manually"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    ...form,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: form.handleSubmit(handleSubmit),
                        className: "space-y-6 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                control: form.control,
                                name: "endpoint",
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                children: "Endpoint"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "https://api.example.com/endpoint",
                                                    ...field
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormDescription"], {
                                                children: [
                                                    "Static URL or use ",
                                                    "{{variables}}",
                                                    " for simple values or ",
                                                    "{{json variable}}",
                                                    " to stringify objects"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                control: form.control,
                                name: "method",
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                children: "Method"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                onValueChange: field.onChange,
                                                defaultValue: field.value,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "w-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Select a method"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "GET",
                                                                children: "GET"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "POST",
                                                                children: "POST"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "PUT",
                                                                children: "PUT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "PATCH",
                                                                children: "PATCH"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "DELETE",
                                                                children: "DELETE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormDescription"], {
                                                children: "The HTTP method to use"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showBodyField && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                control: form.control,
                                name: "body",
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                children: "Request Body"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    placeholder: `Enter JSON request body:\n {\n \"userId\": \"{{httpResponse.data.id}}\",\n \"name\": \"{{httpResponse.data.name}}\",\n \"items\": \"{{json httpResponse.data.items}}\"\n}`,
                                                    className: "min-h-[100px] p-2 text-sm font-mono",
                                                    ...field
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormDescription"], {
                                                children: [
                                                    "JSON with template variables. Use ",
                                                    "{{Variables}}",
                                                    " for simple values or ",
                                                    "{{json variable}}",
                                                    " to stringify objects"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                                        className: "mr-2 bg-accent p-2 rounded-md",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-primary p-2 rounded-md",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Downloads/nodebase-main/features/executions/components/http-request/node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpRequestNode",
    ()=>HttpRequestNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$executions$2f$components$2f$http$2d$request$2f$base$2d$execution$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/executions/components/http-request/base-execution-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$executions$2f$components$2f$http$2d$request$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/executions/components/http-request/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
const HttpRequestNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((props)=>{
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setNodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const nodeStatus = "initial";
    const handleOpenSettings = ()=>{
        setDialogOpen(true);
    };
    const handleSubmit = (values)=>{
        setNodes((nodes)=>nodes.map((node)=>{
                if (node.id === props.id) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            endpoint: values.endpoint,
                            method: values.method,
                            body: values.body
                        }
                    };
                }
                return node;
            }));
        setDialogOpen(false);
    };
    const nodeData = props.data;
    const description = nodeData?.endpoint ? `${nodeData.method || "GET"} ${nodeData.endpoint}` : "Not Configured";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$executions$2f$components$2f$http$2d$request$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestDialog"], {
                open: dialogOpen,
                onOpenChange: setDialogOpen,
                onSubmit: handleSubmit,
                defaultEndpoint: nodeData.endpoint,
                defaultMethod: nodeData.method,
                defaultBody: nodeData.body
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/node.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$executions$2f$components$2f$http$2d$request$2f$base$2d$execution$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseExecutionNode"], {
                ...props,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__["GlobeIcon"],
                name: "HTTP Request",
                description: description,
                status: nodeStatus,
                onSettings: handleOpenSettings,
                onDoubleClick: handleOpenSettings
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/executions/components/http-request/node.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
HttpRequestNode.displayName = "HttpRequestNode";
}),
"[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTriggerNode",
    ()=>BaseTriggerNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/base-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/base-handle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$workflow$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/workflow-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$node$2d$status$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/react-flow/node-status-indicator.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const BaseTriggerNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ id, icon: Icon, name, description, children, status = "initial", onSettings, onDoubleClick })=>{
    const { setNodes, setEdges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const handleDelete = ()=>{
        setNodes((currentNodes)=>{
            const updatedNodes = currentNodes.filter((node)=>node.id !== id);
            return updatedNodes;
        });
        setEdges((currentEdges)=>{
            const updatedEdges = currentEdges.filter((edge)=>edge.source !== id && edge.target !== id);
            return updatedEdges;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$workflow$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkflowNode"], {
        name: name,
        description: description,
        onDelete: handleDelete,
        onSettings: onSettings,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$node$2d$status$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeStatusIndicator"], {
            status: status,
            variant: "border",
            className: "rounded-l-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseNode"], {
                onDoubleClick: onDoubleClick,
                className: "rounded-l-2xl relative group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseNodeContent"], {
                    children: [
                        typeof Icon === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: Icon,
                            alt: name,
                            width: 16,
                            height: 16
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
                            lineNumber: 64,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "size-4 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
                            lineNumber: 66,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$react$2d$flow$2f$base$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseHandle"], {
                            id: "source-1",
                            type: "source",
                            position: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].Right
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
                    lineNumber: 62,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
            lineNumber: 57,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
BaseTriggerNode.displayName = "BaseTriggerNode";
}),
"[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualTriggerDialog",
    ()=>ManualTriggerDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/dialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const ManualTriggerDialog = ({ open, onOpenChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Manual Trigger"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Trigger the workflow manually"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Used to trigger the workflow manually, no configuration necessary."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualTriggerNode",
    ()=>ManualTriggerNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$triggers$2f$components$2f$base$2d$trigger$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/triggers/components/base-trigger-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/mouse-pointer.js [app-ssr] (ecmascript) <export default as MousePointerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$triggers$2f$components$2f$manual$2d$trigger$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/dialog.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const ManualTriggerNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((props)=>{
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const nodeStatus = "loading";
    const handleOpenSettings = ()=>{
        setDialogOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$triggers$2f$components$2f$base$2d$trigger$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTriggerNode"], {
                ...props,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerIcon$3e$__["MousePointerIcon"],
                name: "When clicking 'Execute Workflow'",
                status: nodeStatus,
                onSettings: handleOpenSettings,
                onDoubleClick: handleOpenSettings
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/node.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$triggers$2f$components$2f$manual$2d$trigger$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManualTriggerDialog"], {
                open: dialogOpen,
                onOpenChange: setDialogOpen
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/node.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
}),
"[project]/Downloads/nodebase-main/config/node-components.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeComponents",
    ()=>nodeComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$initial$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/initial-node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/generated/prisma/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$executions$2f$components$2f$http$2d$request$2f$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/executions/components/http-request/node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$triggers$2f$components$2f$manual$2d$trigger$2f$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/triggers/components/manual-trigger/node.tsx [app-ssr] (ecmascript)");
;
;
;
;
const nodeComponents = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].INITIAL]: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$initial$2d$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitialNode"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].HTTP_REQUEST]: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$executions$2f$components$2f$http$2d$request$2f$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestNode"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeType"].MANUAL_TRIGGER]: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$triggers$2f$components$2f$manual$2d$trigger$2f$node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManualTriggerNode"]
};
}),
"[project]/Downloads/nodebase-main/features/editor/components/add-node-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddNodeButton",
    ()=>AddNodeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$node$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/node-selector.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AddNodeButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>{
    const [selectOpen, setSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$node$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeSelector"], {
        open: selectOpen,
        onOpenChange: setSelectorOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            onClick: ()=>{},
            size: "icon",
            variant: "outline",
            className: "bg-gray-200 hover:bg-primary hover:text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/editor/components/add-node-button.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/features/editor/components/add-node-button.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/add-node-button.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
AddNodeButton.displayName = "AddNodeButton";
}),
"[project]/Downloads/nodebase-main/features/editor/store/atoms.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "editorAtom",
    ()=>editorAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
const editorAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])(null);
}),
"[project]/Downloads/nodebase-main/features/editor/components/editor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Editor",
    ()=>Editor,
    "EditorError",
    ()=>EditorError,
    "EditorLoading",
    ()=>EditorLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/workflows/hooks/use-workflows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$entity$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/entity-components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/react/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@xyflow/system/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$config$2f$node$2d$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/config/node-components.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$editor$2f$components$2f$add$2d$node$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/editor/components/add-node-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/jotai/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$editor$2f$store$2f$atoms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/editor/store/atoms.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const EditorLoading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$entity$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingView"], {
        message: "Loading editor..."
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const EditorError = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$entity$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorView"], {
        message: "Error loading editor"
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const Editor = ({ workflowId })=>{
    const workflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSuspenseWorkflow"])(workflowId);
    const setEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$editor$2f$store$2f$atoms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorAtom"]);
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(workflow.data.nodes);
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(workflow.data.edges);
    const onNodesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((changes)=>setNodes((nodesSnapshot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, nodesSnapshot)), []);
    const onEdgesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((changes)=>setEdges((edgesSnapshot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, edgesSnapshot)), []);
    const onConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((params)=>setEdges((edgesSnapshot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEdge"])(params, edgesSnapshot)), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "size-full text-blue-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
            nodes: nodes,
            edges: edges,
            onNodesChange: onNodesChange,
            onEdgesChange: onEdgesChange,
            onConnect: onConnect,
            fitView: true,
            nodeTypes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$config$2f$node$2d$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeComponents"],
            proOptions: {
                hideAttribution: true
            },
            onInit: setEditor,
            snapGrid: [
                5,
                5
            ],
            snapToGrid: true,
            selectionOnDrag: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {}, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {}, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {}, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Panel"], {
                    position: "top-right",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$editor$2f$components$2f$add$2d$node$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddNodeButton"], {}, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb,
    "BreadcrumbEllipsis",
    ()=>BreadcrumbEllipsis,
    "BreadcrumbItem",
    ()=>BreadcrumbItem,
    "BreadcrumbLink",
    ()=>BreadcrumbLink,
    "BreadcrumbList",
    ()=>BreadcrumbList,
    "BreadcrumbPage",
    ()=>BreadcrumbPage,
    "BreadcrumbSeparator",
    ()=>BreadcrumbSeparator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function Breadcrumb({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
function BreadcrumbList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        "data-slot": "breadcrumb-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function BreadcrumbItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function BreadcrumbLink({ asChild, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "breadcrumb-link",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:text-foreground transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function BreadcrumbPage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-normal", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function BreadcrumbSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&>svg]:size-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
            lineNumber: 78,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function BreadcrumbEllipsis({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex size-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "More"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/nodebase-main/components/ui/animated-theme-toggler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedThemeToggler",
    ()=>AnimatedThemeToggler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AnimatedThemeToggler = ({ className, duration = 400, ...props })=>{
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTheme = ()=>{
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!buttonRef.current) return;
        await document.startViewTransition(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                const newTheme = !isDark;
                setIsDark(newTheme);
                document.documentElement.classList.toggle("dark");
                localStorage.setItem("theme", newTheme ? "dark" : "light");
            });
        }).ready;
        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(Math.max(left, window.innerWidth - left), Math.max(top, window.innerHeight - top));
        document.documentElement.animate({
            clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`
            ]
        }, {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)"
        });
    }, [
        isDark,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: buttonRef,
        onClick: toggleTheme,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer", className),
        ...props,
        children: [
            isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/animated-theme-toggler.tsx",
                lineNumber: 81,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/animated-theme-toggler.tsx",
                lineNumber: 81,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/components/ui/animated-theme-toggler.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/components/ui/animated-theme-toggler.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorBreadcrumbs",
    ()=>EditorBreadcrumbs,
    "EditorHeader",
    ()=>EditorHeader,
    "EditorNameInput",
    ()=>EditorNameInput,
    "EditorSaveButton",
    ()=>EditorSaveButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SaveIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as SaveIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/workflows/hooks/use-workflows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/components/ui/animated-theme-toggler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/jotai/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$editor$2f$store$2f$atoms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/features/editor/store/atoms.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const EditorSaveButton = ({ workflowId })=>{
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$editor$2f$store$2f$atoms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorAtom"]);
    const saveWorkflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUpdateWorkflow"])();
    const handleSave = ()=>{
        if (!editor) {
            return;
        }
        const nodes = editor.getNodes();
        const edges = editor.getEdges();
        saveWorkflow.mutateAsync({
            id: workflowId,
            nodes,
            edges
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ml-auto flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: handleSave,
                disabled: saveWorkflow.isPending,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SaveIcon$3e$__["SaveIcon"], {
                        className: "size-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Save"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedThemeToggler"], {}, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EditorNameInput = ({ workflowId })=>{
    const { data: workflow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSuspenseWorkflow"])(workflowId);
    const updateWorkflowName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$features$2f$workflows$2f$hooks$2f$use$2d$workflows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUpdateWorkflowName"])();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(workflow.name);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (workflow.name) {
            setName(workflow.name);
        }
    }, [
        workflow.name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [
        isEditing
    ]);
    const handleSave = async ()=>{
        if (name === workflow.name) {
            setIsEditing(false);
            return;
        }
        try {
            await updateWorkflowName.mutateAsync({
                id: workflowId,
                name
            });
        } catch (error) {
            setName(workflow.name);
        } finally{
            setIsEditing(false);
        }
    };
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            handleSave();
        } else if (event.key === "Escape") {
            setName(workflow.name);
            setIsEditing(false);
        }
    };
    if (!isEditing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
            disabled: updateWorkflowName.isPending,
            ref: inputRef,
            value: name,
            onKeyDown: handleKeyDown,
            onChange: (e)=>setName(e.target.value),
            onBlur: handleSave,
            readOnly: true,
            className: "h-7 w-auto min-w-[100px] px-2"
        }, void 0, false, {
            fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
        onClick: ()=>setIsEditing(true),
        className: "cursor-pointer hover:text-foreground transition-colors",
        children: workflow.name
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EditorBreadcrumbs = ({ workflowId })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Breadcrumb"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbList"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbLink"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            prefetch: true,
                            href: "/workflows",
                            children: "Workflows"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbSeparator"], {}, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorNameInput, {
                    workflowId: workflowId
                }, void 0, false, {
                    fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EditorHeader = ({ workflowId })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarTrigger"], {}, void 0, false, {
                fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-x-4 w-full items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorBreadcrumbs, {
                        workflowId: workflowId
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSaveButton, {
                        workflowId: workflowId
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nodebase-main/features/editor/components/editor-header.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# debugId=06a3b4fd-56a9-ade5-3df2-ee7d44f67d26
//# sourceMappingURL=%5Broot-of-the-server%5D__67450272._.js.map