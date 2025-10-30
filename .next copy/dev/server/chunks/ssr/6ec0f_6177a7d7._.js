;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="47ce3af2-656a-e075-09ea-0159f3a7daaa")}catch(e){}}();
module.exports = [
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/timeoutManager.ts
__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var TimeoutManager = class {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    #provider = defaultTimeoutProvider;
    #providerCalled = false;
    setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.#providerCalled && provider !== this.#provider) {
                console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
                    previous: this.#provider,
                    provider
                });
            }
        }
        this.#provider = provider;
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = false;
        }
    }
    setTimeout(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        this.#provider.clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        this.#provider.clearInterval(intervalId);
    }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
 //# sourceMappingURL=timeoutManager.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)");
;
var isServer = ("TURBOPACK compile-time value", "undefined") === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/thenable.ts
__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    let data;
    promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"])?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/hydration.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hydration.ts
__turbopack_context__.s([
    "defaultShouldDehydrateMutation",
    ()=>defaultShouldDehydrateMutation,
    "defaultShouldDehydrateQuery",
    ()=>defaultShouldDehydrateQuery,
    "dehydrate",
    ()=>dehydrate,
    "hydrate",
    ()=>hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
function defaultTransformerFn(data) {
    return data;
}
function dehydrateMutation(mutation) {
    return {
        mutationKey: mutation.options.mutationKey,
        state: mutation.state,
        ...mutation.options.scope && {
            scope: mutation.options.scope
        },
        ...mutation.meta && {
            meta: mutation.meta
        }
    };
}
function dehydrateQuery(query, serializeData, shouldRedactErrors) {
    const promise = query.promise?.then(serializeData).catch((error)=>{
        if (!shouldRedactErrors(error)) {
            return Promise.reject(error);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            console.error(`A query that was dehydrated as pending ended up rejecting. [${query.queryHash}]: ${error}; The error will be redacted in production builds`);
        }
        return Promise.reject(new Error("redacted"));
    });
    promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    return {
        dehydratedAt: Date.now(),
        state: {
            ...query.state,
            ...query.state.data !== void 0 && {
                data: serializeData(query.state.data)
            }
        },
        queryKey: query.queryKey,
        queryHash: query.queryHash,
        ...query.state.status === "pending" && {
            promise
        },
        ...query.meta && {
            meta: query.meta
        }
    };
}
function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
    return query.state.status === "success";
}
function defaultShouldRedactErrors(_) {
    return true;
}
function dehydrate(client, options = {}) {
    const filterMutation = options.shouldDehydrateMutation ?? client.getDefaultOptions().dehydrate?.shouldDehydrateMutation ?? defaultShouldDehydrateMutation;
    const mutations = client.getMutationCache().getAll().flatMap((mutation)=>filterMutation(mutation) ? [
            dehydrateMutation(mutation)
        ] : []);
    const filterQuery = options.shouldDehydrateQuery ?? client.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? defaultShouldDehydrateQuery;
    const shouldRedactErrors = options.shouldRedactErrors ?? client.getDefaultOptions().dehydrate?.shouldRedactErrors ?? defaultShouldRedactErrors;
    const serializeData = options.serializeData ?? client.getDefaultOptions().dehydrate?.serializeData ?? defaultTransformerFn;
    const queries = client.getQueryCache().getAll().flatMap((query)=>filterQuery(query) ? [
            dehydrateQuery(query, serializeData, shouldRedactErrors)
        ] : []);
    return {
        mutations,
        queries
    };
}
function hydrate(client, dehydratedState, options) {
    if (typeof dehydratedState !== "object" || dehydratedState === null) {
        return;
    }
    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache();
    const deserializeData = options?.defaultOptions?.deserializeData ?? client.getDefaultOptions().hydrate?.deserializeData ?? defaultTransformerFn;
    const mutations = dehydratedState.mutations || [];
    const queries = dehydratedState.queries || [];
    mutations.forEach(({ state, ...mutationOptions })=>{
        mutationCache.build(client, {
            ...client.getDefaultOptions().hydrate?.mutations,
            ...options?.defaultOptions?.mutations,
            ...mutationOptions
        }, state);
    });
    queries.forEach(({ queryKey, state, queryHash, meta, promise, dehydratedAt })=>{
        const syncData = promise ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tryResolveSync"])(promise) : void 0;
        const rawData = state.data === void 0 ? syncData?.data : state.data;
        const data = rawData === void 0 ? rawData : deserializeData(rawData);
        let query = queryCache.get(queryHash);
        const existingQueryIsPending = query?.state.status === "pending";
        const existingQueryIsFetching = query?.state.fetchStatus === "fetching";
        if (query) {
            const hasNewerSyncData = syncData && // We only need this undefined check to handle older dehydration
            // payloads that might not have dehydratedAt
            dehydratedAt !== void 0 && dehydratedAt > query.state.dataUpdatedAt;
            if (state.dataUpdatedAt > query.state.dataUpdatedAt || hasNewerSyncData) {
                const { fetchStatus: _ignored, ...serializedState } = state;
                query.setState({
                    ...serializedState,
                    data
                });
            }
        } else {
            query = queryCache.build(client, {
                ...client.getDefaultOptions().hydrate?.queries,
                ...options?.defaultOptions?.queries,
                queryKey,
                queryHash,
                meta
            }, // Reset fetch status to idle to avoid
            // query being stuck in fetching state upon hydration
            {
                ...state,
                data,
                fetchStatus: "idle",
                status: data !== void 0 ? "success" : state.status
            });
        }
        if (promise && !existingQueryIsPending && !existingQueryIsFetching && // Only hydrate if dehydration is newer than any existing data,
        // this is always true for new queries
        (dehydratedAt === void 0 || dehydratedAt > query.state.dataUpdatedAt)) {
            query.fetch(void 0, {
                // RSC transformed promises are not thenable
                initialPromise: Promise.resolve(promise).then(deserializeData)
            }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
        }
    });
}
;
 //# sourceMappingURL=hydration.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/notifyManager.ts
__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)");
;
var defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/subscribable.ts
__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/focusManager.ts
__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/onlineManager.ts
__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/retryer.ts
__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            config.onCancel?.(error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved()) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/removable.ts
__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/query.ts
__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)");
;
;
;
;
var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Removable"] {
    #initialState;
    #revertState;
    #cache;
    #client;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#client = config.client;
        this.#cache = this.#client.getQueryCache();
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#retryer?.promise;
    }
    setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setData(defaultState.data, {
                    updatedAt: defaultState.dataUpdatedAt,
                    manual: true
                });
                this.#initialState = defaultState;
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            this.#cache.remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        this.#dispatch({
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState(this.#initialState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    onOnline() {
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed) {
                        this.#retryer.cancel({
                            revert: true
                        });
                    } else {
                        this.#retryer.cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            this.#dispatch({
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        this.#retryer?.status() !== "rejected") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                    silent: true
                });
            } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: this.#client,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            this.#abortSignalConsumed = false;
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#client,
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        this.options.behavior?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
            this.#dispatch({
                type: "fetch",
                meta: context.fetchOptions?.meta
            });
        }
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) {
                    this.setState({
                        ...this.#revertState,
                        fetchStatus: "idle"
                    });
                }
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        try {
            const data = await this.#retryer.start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                }
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            this.#cache.config.onSuccess?.(data, this);
            this.#cache.config.onSettled?.(data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return this.#retryer.promise;
                } else if (error.revert) {
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            this.#dispatch({
                type: "error",
                error
            });
            this.#cache.config.onError?.(error, this);
            this.#cache.config.onSettled?.(this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    const newState = {
                        ...state,
                        data: action.data,
                        dataUpdateCount: state.dataUpdateCount + 1,
                        dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: false,
                        status: "success",
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    this.#revertState = action.manual ? newState : void 0;
                    return newState;
                case "error":
                    const error = action.error;
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
 //# sourceMappingURL=query.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryCache.ts
__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
;
;
;
var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#queries = /* @__PURE__ */ new Map();
    }
    #queries;
    build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!this.#queries.has(query.queryHash)) {
            this.#queries.set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = this.#queries.get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                this.#queries.delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return this.#queries.get(queryHash);
    }
    getAll() {
        return [
            ...this.#queries.values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
;
 //# sourceMappingURL=queryCache.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutation.ts
__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Removable"] {
    #client;
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.#client = config.client;
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            this.#dispatch({
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: this.#client,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (restored) {
                onContinue();
            } else {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                await this.#mutationCache.config.onMutate?.(variables, this, mutationFnContext);
                const context = await this.options.onMutate?.(variables, mutationFnContext);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
            await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
            await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
                await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
                await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
                throw error;
            } finally{
                this.#dispatch({
                    type: "error",
                    error
                });
            }
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationCache.ts
__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
;
;
;
var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#mutations = /* @__PURE__ */ new Set();
        this.#scopes = /* @__PURE__ */ new Map();
        this.#mutationId = 0;
    }
    #mutations;
    #scopes;
    #mutationId;
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Mutation"]({
            client,
            mutationCache: this,
            mutationId: ++this.#mutationId,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        this.#mutations.add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = this.#scopes.get(scope);
            if (scopedMutations) {
                scopedMutations.push(mutation);
            } else {
                this.#scopes.set(scope, [
                    mutation
                ]);
            }
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if (this.#mutations.delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = this.#scopes.get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) {
                            scopedMutations.splice(index, 1);
                        }
                    } else if (scopedMutations[0] === mutation) {
                        this.#scopes.delete(scope);
                    }
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = this.#scopes.get(scope);
            const firstPendingMutation = mutationsWithSameScope?.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else {
            return true;
        }
    }
    runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const foundMutation = this.#scopes.get(scope)?.find((m)=>m !== mutation && m.state.isPaused);
            return foundMutation?.continue() ?? Promise.resolve();
        } else {
            return Promise.resolve();
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#mutations.forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            this.#mutations.clear();
            this.#scopes.clear();
        });
    }
    getAll() {
        return Array.from(this.#mutations);
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]))));
    }
};
function scopeFor(mutation) {
    return mutation.options.scope?.id;
}
;
 //# sourceMappingURL=mutationCache.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryBehavior.ts
__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    return context.options.persister?.(fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryClient.ts
__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
var QueryClient = class {
    #queryCache;
    #mutationCache;
    #defaultOptions;
    #queryDefaults;
    #mutationDefaults;
    #mountCount;
    #unsubscribeFocus;
    #unsubscribeOnline;
    constructor(config = {}){
        this.#queryCache = config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryCache"]();
        this.#mutationCache = config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MutationCache"]();
        this.#defaultOptions = config.defaultOptions || {};
        this.#queryDefaults = /* @__PURE__ */ new Map();
        this.#mutationDefaults = /* @__PURE__ */ new Map();
        this.#mountCount = 0;
    }
    mount() {
        this.#mountCount++;
        if (this.#mountCount !== 1) return;
        this.#unsubscribeFocus = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                this.#queryCache.onFocus();
            }
        });
        this.#unsubscribeOnline = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                this.#queryCache.onOnline();
            }
        });
    }
    unmount() {
        this.#mountCount--;
        if (this.#mountCount !== 0) return;
        this.#unsubscribeFocus?.();
        this.#unsubscribeFocus = void 0;
        this.#unsubscribeOnline?.();
        this.#unsubscribeOnline = void 0;
    }
    isFetching(filters) {
        return this.#queryCache.findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return this.#mutationCache.findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = this.#queryCache.build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) {
            return this.fetchQuery(options);
        }
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
            void this.prefetchQuery(defaultedOptions);
        }
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return this.#queryCache.findAll(filters).map(({ queryKey, state })=>{
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = this.#queryCache.get(defaultedOptions.queryHash);
        const prevData = query?.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return this.#queryCache.build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    getQueryState(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state;
    }
    removeQueries(filters) {
        const queryCache = this.#queryCache;
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = this.#queryCache;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters, options = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#queryCache.findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if (filters?.refetchType === "none") {
                return Promise.resolve();
            }
            return this.refetchQueries({
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? "active"
            }, options);
        });
    }
    refetchQueries(filters, options = {}) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options.cancelRefetch ?? true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = this.#queryCache.build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return this.#mutationCache.resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return this.#queryCache;
    }
    getMutationCache() {
        return this.#mutationCache;
    }
    getDefaultOptions() {
        return this.#defaultOptions;
    }
    setDefaultOptions(options) {
        this.#defaultOptions = options;
    }
    setQueryDefaults(queryKey, options) {
        this.#queryDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...this.#queryDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        this.#mutationDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...this.#mutationDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...this.#defaultOptions.queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options?._defaulted) {
            return options;
        }
        return {
            ...this.#defaultOptions.mutations,
            ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        this.#queryCache.clear();
        this.#mutationCache.clear();
    }
};
;
 //# sourceMappingURL=queryClient.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryOptions.ts
__turbopack_context__.s([
    "infiniteQueryOptions",
    ()=>infiniteQueryOptions
]);
function infiniteQueryOptions(options) {
    return options;
}
;
 //# sourceMappingURL=infiniteQueryOptions.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/queryOptions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryOptions.ts
__turbopack_context__.s([
    "queryOptions",
    ()=>queryOptions
]);
function queryOptions(options) {
    return options;
}
;
 //# sourceMappingURL=queryOptions.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HydrationBoundary",
    ()=>HydrationBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HydrationBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HydrationBoundary() from the server but HydrationBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js <module evaluation>", "HydrationBoundary");
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HydrationBoundary",
    ()=>HydrationBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HydrationBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HydrationBoundary() from the server but HydrationBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js", "HydrationBoundary");
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Downloads/nodebase-main/node_modules/@trpc/tanstack-react-query/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTRPCContext",
    ()=>createTRPCContext,
    "createTRPCOptionsProxy",
    ()=>createTRPCOptionsProxy,
    "useSubscription",
    ()=>useSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/client/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__callProcedure__as__callTRPCProcedure$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-rsc] (ecmascript) <export callProcedure as callTRPCProcedure>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__createRecursiveProxy__as__createTRPCRecursiveProxy$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/server/dist/getErrorShape-BH60iMC2.mjs [app-rsc] (ecmascript) <export createRecursiveProxy as createTRPCRecursiveProxy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$infiniteQueryOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$queryOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/queryOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/server/dist/utils-CLZnJdb_.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod)=>function() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") for(var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++){
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ((k)=>from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js
var require_typeof = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js" (exports, module) {
        function _typeof$2(o) {
            "@babel/helpers - typeof";
            return module.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
                return typeof o$1;
            } : function(o$1) {
                return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
            }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof$2(o);
        }
        module.exports = _typeof$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js" (exports, module) {
        var _typeof$1 = require_typeof()["default"];
        function toPrimitive$1(t, r) {
            if ("object" != _typeof$1(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != _typeof$1(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        module.exports = toPrimitive$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js" (exports, module) {
        var _typeof = require_typeof()["default"];
        var toPrimitive = require_toPrimitive();
        function toPropertyKey$1(t) {
            var i = toPrimitive(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }
        module.exports = toPropertyKey$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js
var require_defineProperty = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js" (exports, module) {
        var toPropertyKey = require_toPropertyKey();
        function _defineProperty(e, r, t) {
            return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js" (exports, module) {
        var defineProperty = require_defineProperty();
        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter(function(r$1) {
                    return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }
        function _objectSpread2(e) {
            for(var r = 1; r < arguments.length; r++){
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
                    defineProperty(e, r$1, t[r$1]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
                    Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
                });
            }
            return e;
        }
        module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js
var require_asyncIterator = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js" (exports, module) {
        function _asyncIterator$1(r) {
            var n, t, o, e = 2;
            for("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;){
                if (t && null != (n = r[t])) return n.call(r);
                if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
                t = "@@asyncIterator", o = "@@iterator";
            }
            throw new TypeError("Object is not async iterable");
        }
        function AsyncFromSyncIterator(r) {
            function AsyncFromSyncIteratorContinuation(r$1) {
                if (Object(r$1) !== r$1) return Promise.reject(new TypeError(r$1 + " is not an object."));
                var n = r$1.done;
                return Promise.resolve(r$1.value).then(function(r$2) {
                    return {
                        value: r$2,
                        done: n
                    };
                });
            }
            return AsyncFromSyncIterator = function AsyncFromSyncIterator$1(r$1) {
                this.s = r$1, this.n = r$1.next;
            }, AsyncFromSyncIterator.prototype = {
                s: null,
                n: null,
                next: function next() {
                    return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
                },
                "return": function _return(r$1) {
                    var n = this.s["return"];
                    return void 0 === n ? Promise.resolve({
                        value: r$1,
                        done: !0
                    }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
                },
                "throw": function _throw(r$1) {
                    var n = this.s["return"];
                    return void 0 === n ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
                }
            }, new AsyncFromSyncIterator(r);
        }
        module.exports = _asyncIterator$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js" (exports, module) {
        function _objectWithoutPropertiesLoose(r, e) {
            if (null == r) return {};
            var t = {};
            for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
                if (e.includes(n)) continue;
                t[n] = r[n];
            }
            return t;
        }
        module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js" (exports, module) {
        var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
        function _objectWithoutProperties$1(e, t) {
            if (null == e) return {};
            var o, r, i = objectWithoutPropertiesLoose(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
            }
            return i;
        }
        module.exports = _objectWithoutProperties$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
});
//#endregion
//#region src/internals/utils.ts
var import_objectSpread2$5 = __toESM(require_objectSpread2(), 1);
var import_asyncIterator = __toESM(require_asyncIterator(), 1);
var import_objectWithoutProperties = __toESM(require_objectWithoutProperties(), 1);
const _excluded = [
    "cursor",
    "direction"
];
/**
* @internal
*/ function createTRPCOptionsResult(value) {
    const path = value.path.join(".");
    return {
        path
    };
}
function isPrefixedQueryKey(queryKey) {
    return queryKey.length >= 3;
}
function readQueryKey(queryKey) {
    if (isPrefixedQueryKey(queryKey)) return {
        type: "prefixed",
        prefix: queryKey[0],
        path: queryKey[1],
        args: queryKey[2]
    };
    else return {
        type: "unprefixed",
        prefix: void 0,
        path: queryKey[0],
        args: queryKey[1]
    };
}
/**
* @internal
*/ function getClientArgs(queryKey, opts, infiniteParams) {
    var _queryKeyData$args;
    const queryKeyData = readQueryKey(queryKey);
    let input = (_queryKeyData$args = queryKeyData.args) === null || _queryKeyData$args === void 0 ? void 0 : _queryKeyData$args.input;
    if (infiniteParams) {
        var _queryKeyData$args$in, _queryKeyData$args2;
        input = (0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)({}, (_queryKeyData$args$in = (_queryKeyData$args2 = queryKeyData.args) === null || _queryKeyData$args2 === void 0 ? void 0 : _queryKeyData$args2.input) !== null && _queryKeyData$args$in !== void 0 ? _queryKeyData$args$in : {}), infiniteParams.pageParam !== void 0 ? {
            cursor: infiniteParams.pageParam
        } : {}), {}, {
            direction: infiniteParams.direction
        });
    }
    return [
        queryKeyData.path.join("."),
        input,
        opts === null || opts === void 0 ? void 0 : opts.trpc
    ];
}
/**
* @internal
*/ async function buildQueryFromAsyncIterable(asyncIterable, queryClient, queryKey) {
    const queryCache = queryClient.getQueryCache();
    const query = queryCache.build(queryClient, {
        queryKey
    });
    query.setState({
        data: [],
        status: "success"
    });
    const aggregate = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
        for(var _iterator = (0, import_asyncIterator.default)(asyncIterable), _step; _iteratorAbruptCompletion = !(_step = await _iterator.next()).done; _iteratorAbruptCompletion = false){
            const value = _step.value;
            {
                aggregate.push(value);
                query.setState({
                    data: [
                        ...aggregate
                    ]
                });
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (_iteratorAbruptCompletion && _iterator.return != null) await _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return aggregate;
}
/**
* To allow easy interactions with groups of related queries, such as
* invalidating all queries of a router, we use an array as the path when
* storing in tanstack query.
*
* @internal
*/ function getQueryKeyInternal(opts) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["run"])(()=>{
        const { input, type } = opts;
        const splitPath = opts.path.flatMap((part)=>part.split("."));
        if (!input && type === "any") return splitPath.length ? [
            splitPath
        ] : [];
        if (type === "infinite" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(input) && ("direction" in input || "cursor" in input)) {
            const { cursor: _, direction: __ } = input, inputWithoutCursorAndDirection = (0, import_objectWithoutProperties.default)(input, _excluded);
            return [
                splitPath,
                {
                    input: inputWithoutCursorAndDirection,
                    type: "infinite"
                }
            ];
        }
        return [
            splitPath,
            (0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)({}, typeof input !== "undefined" && input !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] && {
                input
            }), type && type !== "any" && {
                type
            })
        ];
    });
    if (opts.prefix) key.unshift([
        opts.prefix
    ]);
    return key;
}
/**
* @internal
*/ function getMutationKeyInternal(opts) {
    const key = [
        opts.path.flatMap((part)=>part.split("."))
    ];
    if (opts.prefix) key.unshift([
        opts.prefix
    ]);
    return key;
}
/**
* @internal
*/ function unwrapLazyArg(valueOrLazy) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFunction"])(valueOrLazy) ? valueOrLazy() : valueOrLazy;
}
//#endregion
//#region src/internals/infiniteQueryOptions.ts
var import_objectSpread2$4 = __toESM(require_objectSpread2());
function trpcInfiniteQueryOptions(args) {
    var _opts$initialCursor;
    const { input, query, path, queryKey, opts } = args;
    const inputIsSkipToken = input === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"];
    const queryFn = async (queryFnContext)=>{
        var _opts$trpc;
        const actualOpts = (0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts), {}, {
            trpc: (0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts === null || opts === void 0 ? void 0 : opts.trpc), (opts === null || opts === void 0 || (_opts$trpc = opts.trpc) === null || _opts$trpc === void 0 ? void 0 : _opts$trpc.abortOnUnmount) ? {
                signal: queryFnContext.signal
            } : {
                signal: null
            })
        });
        const result = await query(...getClientArgs(queryKey, actualOpts, {
            direction: queryFnContext.direction,
            pageParam: queryFnContext.pageParam
        }));
        return result;
    };
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$infiniteQueryOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteQueryOptions"])((0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts !== null && opts !== void 0 ? opts : {}), {}, {
        queryKey,
        queryFn: inputIsSkipToken ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] : queryFn,
        initialPageParam: (_opts$initialCursor = opts === null || opts === void 0 ? void 0 : opts.initialCursor) !== null && _opts$initialCursor !== void 0 ? _opts$initialCursor : input === null || input === void 0 ? void 0 : input.cursor
    })), {
        trpc: createTRPCOptionsResult({
            path
        })
    });
}
//#endregion
//#region src/internals/mutationOptions.ts
var import_objectSpread2$3 = __toESM(require_objectSpread2());
/**
* @internal
*/ function trpcMutationOptions(args) {
    var _overrides$onSuccess;
    const { mutate, path, opts, overrides } = args;
    const queryClient = unwrapLazyArg(args.queryClient);
    const mutationKey = getMutationKeyInternal({
        path,
        prefix: opts === null || opts === void 0 ? void 0 : opts.keyPrefix
    });
    const defaultOpts = queryClient.defaultMutationOptions(queryClient.getMutationDefaults(mutationKey));
    const mutationSuccessOverride = (_overrides$onSuccess = overrides === null || overrides === void 0 ? void 0 : overrides.onSuccess) !== null && _overrides$onSuccess !== void 0 ? _overrides$onSuccess : (options)=>options.originalFn();
    const mutationFn = async (input)=>{
        const result = await mutate(...getClientArgs([
            ...mutationKey,
            {
                input
            }
        ], opts));
        return result;
    };
    return (0, import_objectSpread2$3.default)((0, import_objectSpread2$3.default)({}, opts), {}, {
        mutationKey,
        mutationFn,
        onSuccess (...args$1) {
            var _ref, _opts$meta;
            const originalFn = ()=>{
                var _opts$onSuccess, _opts$onSuccess2, _defaultOpts$onSucces;
                return (_opts$onSuccess = opts === null || opts === void 0 || (_opts$onSuccess2 = opts.onSuccess) === null || _opts$onSuccess2 === void 0 ? void 0 : _opts$onSuccess2.call(opts, ...args$1)) !== null && _opts$onSuccess !== void 0 ? _opts$onSuccess : defaultOpts === null || defaultOpts === void 0 || (_defaultOpts$onSucces = defaultOpts.onSuccess) === null || _defaultOpts$onSucces === void 0 ? void 0 : _defaultOpts$onSucces.call(defaultOpts, ...args$1);
            };
            return mutationSuccessOverride({
                originalFn,
                queryClient,
                meta: (_ref = (_opts$meta = opts === null || opts === void 0 ? void 0 : opts.meta) !== null && _opts$meta !== void 0 ? _opts$meta : defaultOpts === null || defaultOpts === void 0 ? void 0 : defaultOpts.meta) !== null && _ref !== void 0 ? _ref : {}
            });
        },
        trpc: createTRPCOptionsResult({
            path
        })
    });
}
//#endregion
//#region src/internals/queryOptions.ts
var import_objectSpread2$2 = __toESM(require_objectSpread2());
/**
* @internal
*/ function trpcQueryOptions(args) {
    const { input, query, path, queryKey, opts } = args;
    const queryClient = unwrapLazyArg(args.queryClient);
    const inputIsSkipToken = input === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"];
    const queryFn = async (queryFnContext)=>{
        var _opts$trpc;
        const actualOpts = (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts), {}, {
            trpc: (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts === null || opts === void 0 ? void 0 : opts.trpc), (opts === null || opts === void 0 || (_opts$trpc = opts.trpc) === null || _opts$trpc === void 0 ? void 0 : _opts$trpc.abortOnUnmount) ? {
                signal: queryFnContext.signal
            } : {
                signal: null
            })
        });
        const queryKey$1 = queryFnContext.queryKey;
        const result = await query(...getClientArgs(queryKey$1, actualOpts));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result)) return buildQueryFromAsyncIterable(result, queryClient, queryKey$1);
        return result;
    };
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$queryOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryOptions"])((0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts), {}, {
        queryKey,
        queryFn: inputIsSkipToken ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] : queryFn
    })), {
        trpc: createTRPCOptionsResult({
            path
        })
    });
}
//#endregion
//#region src/internals/subscriptionOptions.ts
var import_objectSpread2$1 = __toESM(require_objectSpread2(), 1);
/**
* @internal
*/ const trpcSubscriptionOptions = (args)=>{
    var _readQueryKey;
    const { subscribe, path, queryKey, opts = {} } = args;
    const input = (_readQueryKey = readQueryKey(queryKey)) === null || _readQueryKey === void 0 || (_readQueryKey = _readQueryKey.args) === null || _readQueryKey === void 0 ? void 0 : _readQueryKey.input;
    const enabled = "enabled" in opts ? !!opts.enabled : input !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"];
    const _subscribe = (innerOpts)=>{
        return subscribe(path.join("."), input !== null && input !== void 0 ? input : void 0, innerOpts);
    };
    return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, {
        enabled,
        subscribe: _subscribe,
        queryKey,
        trpc: createTRPCOptionsResult({
            path
        })
    });
};
function useSubscription(opts) {
    const optsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"](opts);
    optsRef.current = opts;
    const trackedProps = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"](new Set([]));
    const addTrackedProp = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"]((key)=>{
        trackedProps.current.add(key);
    }, []);
    const currentSubscriptionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"](()=>{});
    const reset = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        var _currentSubscriptionR;
        (_currentSubscriptionR = currentSubscriptionRef.current) === null || _currentSubscriptionR === void 0 || _currentSubscriptionR.call(currentSubscriptionRef);
        updateState(getInitialState);
        if (!opts.enabled) return;
        const subscription = opts.subscribe({
            onStarted: ()=>{
                var _optsRef$current$onSt, _optsRef$current;
                (_optsRef$current$onSt = (_optsRef$current = optsRef.current).onStarted) === null || _optsRef$current$onSt === void 0 || _optsRef$current$onSt.call(_optsRef$current);
                updateState((prev)=>(0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                        status: "pending",
                        error: null
                    }));
            },
            onData: (data)=>{
                var _optsRef$current$onDa, _optsRef$current2;
                (_optsRef$current$onDa = (_optsRef$current2 = optsRef.current).onData) === null || _optsRef$current$onDa === void 0 || _optsRef$current$onDa.call(_optsRef$current2, data);
                updateState((prev)=>(0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                        status: "pending",
                        data,
                        error: null
                    }));
            },
            onError: (error)=>{
                var _optsRef$current$onEr, _optsRef$current3;
                (_optsRef$current$onEr = (_optsRef$current3 = optsRef.current).onError) === null || _optsRef$current$onEr === void 0 || _optsRef$current$onEr.call(_optsRef$current3, error);
                updateState((prev)=>(0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                        status: "error",
                        error
                    }));
            },
            onConnectionStateChange: (result)=>{
                var _optsRef$current$onCo, _optsRef$current4;
                (_optsRef$current$onCo = (_optsRef$current4 = optsRef.current).onConnectionStateChange) === null || _optsRef$current$onCo === void 0 || _optsRef$current$onCo.call(_optsRef$current4, result);
                updateState((prev)=>{
                    switch(result.state){
                        case "connecting":
                            return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                                status: "connecting",
                                error: result.error
                            });
                        case "pending":
                            return prev;
                        case "idle":
                            return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                                status: "idle",
                                data: void 0,
                                error: null
                            });
                    }
                });
            }
        });
        currentSubscriptionRef.current = ()=>{
            subscription.unsubscribe();
        };
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(opts.queryKey),
        opts.enabled
    ]);
    const getInitialState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        return opts.enabled ? {
            data: void 0,
            error: null,
            status: "connecting",
            reset
        } : {
            data: void 0,
            error: null,
            status: "idle",
            reset
        };
    }, [
        opts.enabled,
        reset
    ]);
    const resultRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"](getInitialState());
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"](trackResult(resultRef.current, addTrackedProp));
    state.reset = reset;
    const updateState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"]((callback)=>{
        const prev = resultRef.current;
        const next = resultRef.current = callback(prev);
        let shouldUpdate = false;
        for (const key of trackedProps.current)if (prev[key] !== next[key]) {
            shouldUpdate = true;
            break;
        }
        if (shouldUpdate) setState(trackResult(next, addTrackedProp));
    }, [
        addTrackedProp
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!opts.enabled) return;
        reset();
        return ()=>{
            var _currentSubscriptionR2;
            (_currentSubscriptionR2 = currentSubscriptionRef.current) === null || _currentSubscriptionR2 === void 0 || _currentSubscriptionR2.call(currentSubscriptionRef);
        };
    }, [
        reset,
        opts.enabled
    ]);
    return state;
}
function trackResult(result, onTrackResult) {
    const trackedResult = new Proxy(result, {
        get (target, prop) {
            onTrackResult(prop);
            return target[prop];
        }
    });
    return trackedResult;
}
//#endregion
//#region src/internals/createOptionsProxy.ts
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
/**
* Create a typed proxy from your router types. Can also be used on the server.
*
* @see https://trpc.io/docs/client/tanstack-react-query/setup#3b-setup-without-react-context
* @see https://trpc.io/docs/client/tanstack-react-query/server-components#5-create-a-trpc-caller-for-server-components
*/ function createTRPCOptionsProxy(opts) {
    const prefix = opts.keyPrefix;
    const callIt = (type)=>{
        return (path, input, trpcOpts)=>{
            if ("router" in opts) return Promise.resolve(unwrapLazyArg(opts.ctx)).then((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__callProcedure__as__callTRPCProcedure$3e$__["callTRPCProcedure"])({
                    router: opts.router,
                    path,
                    getRawInput: async ()=>input,
                    ctx,
                    type,
                    signal: void 0
                }));
            const untypedClient = opts.client instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TRPCUntypedClient"] ? opts.client : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUntypedClient"])(opts.client);
            return untypedClient[type](path, input, trpcOpts);
        };
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__createRecursiveProxy__as__createTRPCRecursiveProxy$3e$__["createTRPCRecursiveProxy"])(({ args, path: _path })=>{
        const path = [
            ..._path
        ];
        const utilName = path.pop();
        const [arg1, arg2] = args;
        const contextMap = {
            "~types": void 0,
            pathKey: ()=>{
                return getQueryKeyInternal({
                    path,
                    type: "any",
                    prefix
                });
            },
            pathFilter: ()=>{
                return (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, arg1), {}, {
                    queryKey: getQueryKeyInternal({
                        path,
                        type: "any",
                        prefix
                    })
                });
            },
            queryOptions: ()=>{
                return trpcQueryOptions({
                    input: arg1,
                    opts: arg2,
                    path,
                    queryClient: opts.queryClient,
                    queryKey: getQueryKeyInternal({
                        path,
                        input: arg1,
                        type: "query",
                        prefix
                    }),
                    query: callIt("query")
                });
            },
            queryKey: ()=>{
                return getQueryKeyInternal({
                    path,
                    input: arg1,
                    type: "query",
                    prefix
                });
            },
            queryFilter: ()=>{
                return (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, arg2), {}, {
                    queryKey: getQueryKeyInternal({
                        path,
                        input: arg1,
                        type: "query",
                        prefix
                    })
                });
            },
            infiniteQueryOptions: ()=>{
                return trpcInfiniteQueryOptions({
                    input: arg1,
                    opts: arg2,
                    path,
                    queryClient: opts.queryClient,
                    queryKey: getQueryKeyInternal({
                        path,
                        input: arg1,
                        type: "infinite",
                        prefix
                    }),
                    query: callIt("query")
                });
            },
            infiniteQueryKey: ()=>{
                return getQueryKeyInternal({
                    path,
                    input: arg1,
                    type: "infinite",
                    prefix
                });
            },
            infiniteQueryFilter: ()=>{
                return (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, arg2), {}, {
                    queryKey: getQueryKeyInternal({
                        path,
                        input: arg1,
                        type: "infinite",
                        prefix
                    })
                });
            },
            mutationOptions: ()=>{
                var _opts$overrides;
                return trpcMutationOptions({
                    opts: arg1,
                    path,
                    queryClient: opts.queryClient,
                    mutate: callIt("mutation"),
                    overrides: (_opts$overrides = opts.overrides) === null || _opts$overrides === void 0 ? void 0 : _opts$overrides.mutations
                });
            },
            mutationKey: ()=>{
                return getMutationKeyInternal({
                    path,
                    prefix
                });
            },
            subscriptionOptions: ()=>{
                return trpcSubscriptionOptions({
                    opts: arg2,
                    path,
                    queryKey: getQueryKeyInternal({
                        path,
                        input: arg1,
                        type: "any",
                        prefix
                    }),
                    subscribe: callIt("subscription")
                });
            }
        };
        return contextMap[utilName]();
    });
}
//#endregion
//#region src/internals/Context.tsx
/**
* Create a set of type-safe provider-consumers
*
* @see https://trpc.io/docs/client/tanstack-react-query/setup#3a-setup-the-trpc-context-provider
*/ function createTRPCContext() {
    const TRPCClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"](null);
    const TRPCContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"](null);
    const TRPCProvider = (props)=>{
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"](()=>createTRPCOptionsProxy({
                client: props.trpcClient,
                queryClient: props.queryClient,
                keyPrefix: props.keyPrefix
            }), [
            props.trpcClient,
            props.queryClient,
            props.keyPrefix
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(TRPCClientContext.Provider, {
            value: props.trpcClient,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(TRPCContext.Provider, {
                value,
                children: props.children
            })
        });
    };
    TRPCProvider.displayName = "TRPCProvider";
    function useTRPC() {
        const utils = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"](TRPCContext);
        if (!utils) throw new Error("useTRPC() can only be used inside of a <TRPCProvider>");
        return utils;
    }
    function useTRPCClient() {
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"](TRPCClientContext);
        if (!client) throw new Error("useTRPCClient() can only be used inside of a <TRPCProvider>");
        return client;
    }
    return {
        TRPCProvider,
        useTRPC,
        useTRPCClient
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base64",
    ()=>base64,
    "base64Url",
    ()=>base64Url
]);
function getAlphabet(urlSafe) {
    return urlSafe ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
}
function base64Encode(data, alphabet, padding) {
    let result = "";
    let buffer = 0;
    let shift = 0;
    for (const byte of data){
        buffer = buffer << 8 | byte;
        shift += 8;
        while(shift >= 6){
            shift -= 6;
            result += alphabet[buffer >> shift & 63];
        }
    }
    if (shift > 0) {
        result += alphabet[buffer << 6 - shift & 63];
    }
    if (padding) {
        const padCount = (4 - result.length % 4) % 4;
        result += "=".repeat(padCount);
    }
    return result;
}
function base64Decode(data, alphabet) {
    const decodeMap = /* @__PURE__ */ new Map();
    for(let i = 0; i < alphabet.length; i++){
        decodeMap.set(alphabet[i], i);
    }
    const result = [];
    let buffer = 0;
    let bitsCollected = 0;
    for (const char of data){
        if (char === "=") break;
        const value = decodeMap.get(char);
        if (value === void 0) {
            throw new Error(`Invalid Base64 character: ${char}`);
        }
        buffer = buffer << 6 | value;
        bitsCollected += 6;
        if (bitsCollected >= 8) {
            bitsCollected -= 8;
            result.push(buffer >> bitsCollected & 255);
        }
    }
    return Uint8Array.from(result);
}
const base64 = {
    encode (data, options = {}) {
        const alphabet = getAlphabet(false);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base64Encode(buffer, alphabet, options.padding ?? true);
    },
    decode (data) {
        if (typeof data !== "string") {
            data = new TextDecoder().decode(data);
        }
        const urlSafe = data.includes("-") || data.includes("_");
        const alphabet = getAlphabet(urlSafe);
        return base64Decode(data, alphabet);
    }
};
const base64Url = {
    encode (data, options = {}) {
        const alphabet = getAlphabet(true);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base64Encode(buffer, alphabet, options.padding ?? true);
    },
    decode (data) {
        const urlSafe = data.includes("-") || data.includes("_");
        const alphabet = getAlphabet(urlSafe);
        return base64Decode(data, alphabet);
    }
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWebcryptoSubtle",
    ()=>getWebcryptoSubtle
]);
function getWebcryptoSubtle() {
    const cr = typeof globalThis !== "undefined" && globalThis.crypto;
    if (cr && typeof cr.subtle === "object" && cr.subtle != null) return cr.subtle;
    throw new Error("crypto.subtle must be defined");
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hex",
    ()=>hex
]);
const hexadecimal = "0123456789abcdef";
const hex = {
    encode: (data)=>{
        if (typeof data === "string") {
            data = new TextEncoder().encode(data);
        }
        if (data.byteLength === 0) {
            return "";
        }
        const buffer = new Uint8Array(data);
        let result = "";
        for (const byte of buffer){
            result += byte.toString(16).padStart(2, "0");
        }
        return result;
    },
    decode: (data)=>{
        if (!data) {
            return "";
        }
        if (typeof data === "string") {
            if (data.length % 2 !== 0) {
                throw new Error("Invalid hexadecimal string");
            }
            if (!new RegExp(`^[${hexadecimal}]+$`).test(data)) {
                throw new Error("Invalid hexadecimal string");
            }
            const result = new Uint8Array(data.length / 2);
            for(let i = 0; i < data.length; i += 2){
                result[i / 2] = parseInt(data.slice(i, i + 2), 16);
            }
            return new TextDecoder().decode(result);
        }
        return new TextDecoder().decode(data);
    }
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hmac.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHMAC",
    ()=>createHMAC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
const createHMAC = (algorithm = "SHA-256", encoding = "none")=>{
    const hmac = {
        importKey: async (key, keyUsage)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", typeof key === "string" ? new TextEncoder().encode(key) : key, {
                name: "HMAC",
                hash: {
                    name: algorithm
                }
            }, false, [
                keyUsage
            ]);
        },
        sign: async (hmacKey, data)=>{
            if (typeof hmacKey === "string") {
                hmacKey = await hmac.importKey(hmacKey, "sign");
            }
            const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign("HMAC", hmacKey, typeof data === "string" ? new TextEncoder().encode(data) : data);
            if (encoding === "hex") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hex"].encode(signature);
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64Url"].encode(signature, {
                    padding: encoding !== "base64urlnopad"
                });
            }
            return signature;
        },
        verify: async (hmacKey, data, signature)=>{
            if (typeof hmacKey === "string") {
                hmacKey = await hmac.importKey(hmacKey, "verify");
            }
            if (encoding === "hex") {
                signature = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hex"].decode(signature);
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                signature = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].decode(signature);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().verify("HMAC", hmacKey, typeof signature === "string" ? new TextEncoder().encode(signature) : signature, typeof data === "string" ? new TextEncoder().encode(data) : data);
        }
    };
    return hmac;
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/binary.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "binary",
    ()=>binary
]);
const decoders = /* @__PURE__ */ new Map();
const encoder = new TextEncoder();
const binary = {
    decode: (data, encoding = "utf-8")=>{
        if (!decoders.has(encoding)) {
            decoders.set(encoding, new TextDecoder(encoding));
        }
        const decoder = decoders.get(encoding);
        return decoder.decode(data);
    },
    encode: encoder.encode
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRandomStringGenerator",
    ()=>createRandomStringGenerator
]);
function expandAlphabet(alphabet) {
    switch(alphabet){
        case "a-z":
            return "abcdefghijklmnopqrstuvwxyz";
        case "A-Z":
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        case "0-9":
            return "0123456789";
        case "-_":
            return "-_";
        default:
            throw new Error(`Unsupported alphabet: ${alphabet}`);
    }
}
function createRandomStringGenerator(...baseAlphabets) {
    const baseCharSet = baseAlphabets.map(expandAlphabet).join("");
    if (baseCharSet.length === 0) {
        throw new Error("No valid characters provided for random string generation.");
    }
    const baseCharSetLength = baseCharSet.length;
    return (length, ...alphabets)=>{
        if (length <= 0) {
            throw new Error("Length must be a positive integer.");
        }
        let charSet = baseCharSet;
        let charSetLength = baseCharSetLength;
        if (alphabets.length > 0) {
            charSet = alphabets.map(expandAlphabet).join("");
            charSetLength = charSet.length;
        }
        const maxValid = Math.floor(256 / charSetLength) * charSetLength;
        const buf = new Uint8Array(length * 2);
        const bufLength = buf.length;
        let result = "";
        let bufIndex = bufLength;
        let rand;
        while(result.length < length){
            if (bufIndex >= bufLength) {
                crypto.getRandomValues(buf);
                bufIndex = 0;
            }
            rand = buf[bufIndex++];
            if (rand < maxValid) {
                result += charSet[rand % charSetLength];
            }
        }
        return result;
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHash",
    ()=>createHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-rsc] (ecmascript)");
;
;
function createHash(algorithm, encoding) {
    return {
        digest: async (input)=>{
            const encoder = new TextEncoder();
            const data = typeof input === "string" ? encoder.encode(input) : input;
            const hashBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().digest(algorithm, data);
            if (encoding === "hex") {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
                return hashHex;
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                if (encoding.includes("url")) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64Url"].encode(hashBuffer, {
                        padding: encoding !== "base64urlnopad"
                    });
                }
                const hashBase64 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].encode(hashBuffer);
                return hashBase64;
            }
            return hashBuffer;
        }
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base32.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base32",
    ()=>base32,
    "base32hex",
    ()=>base32hex
]);
function getAlphabet(hex) {
    return hex ? "0123456789ABCDEFGHIJKLMNOPQRSTUV" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
}
function createDecodeMap(alphabet) {
    const decodeMap = /* @__PURE__ */ new Map();
    for(let i = 0; i < alphabet.length; i++){
        decodeMap.set(alphabet[i], i);
    }
    return decodeMap;
}
function base32Encode(data, alphabet, padding) {
    let result = "";
    let buffer = 0;
    let shift = 0;
    for (const byte of data){
        buffer = buffer << 8 | byte;
        shift += 8;
        while(shift >= 5){
            shift -= 5;
            result += alphabet[buffer >> shift & 31];
        }
    }
    if (shift > 0) {
        result += alphabet[buffer << 5 - shift & 31];
    }
    if (padding) {
        const padCount = (8 - result.length % 8) % 8;
        result += "=".repeat(padCount);
    }
    return result;
}
function base32Decode(data, alphabet) {
    const decodeMap = createDecodeMap(alphabet);
    const result = [];
    let buffer = 0;
    let bitsCollected = 0;
    for (const char of data){
        if (char === "=") break;
        const value = decodeMap.get(char);
        if (value === void 0) {
            throw new Error(`Invalid Base32 character: ${char}`);
        }
        buffer = buffer << 5 | value;
        bitsCollected += 5;
        while(bitsCollected >= 8){
            bitsCollected -= 8;
            result.push(buffer >> bitsCollected & 255);
        }
    }
    return Uint8Array.from(result);
}
const base32 = {
    /**
   * Encodes data into a Base32 string.
   * @param data - The data to encode (ArrayBuffer, TypedArray, or string).
   * @param options - Encoding options.
   * @returns The Base32 encoded string.
   */ encode (data, options = {}) {
        const alphabet = getAlphabet(false);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base32Encode(buffer, alphabet, options.padding ?? true);
    },
    /**
   * Decodes a Base32 string into a Uint8Array.
   * @param data - The Base32 encoded string or ArrayBuffer/TypedArray.
   * @returns The decoded Uint8Array.
   */ decode (data) {
        if (typeof data !== "string") {
            data = new TextDecoder().decode(data);
        }
        const alphabet = getAlphabet(false);
        return base32Decode(data, alphabet);
    }
};
const base32hex = {
    /**
   * Encodes data into a Base32hex string.
   * @param data - The data to encode (ArrayBuffer, TypedArray, or string).
   * @param options - Encoding options.
   * @returns The Base32hex encoded string.
   */ encode (data, options = {}) {
        const alphabet = getAlphabet(true);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        return base32Encode(buffer, alphabet, options.padding ?? true);
    },
    /**
   * Decodes a Base32hex string into a Uint8Array.
   * @param data - The Base32hex encoded string.
   * @returns The decoded Uint8Array.
   */ decode (data) {
        const alphabet = getAlphabet(true);
        return base32Decode(data, alphabet);
    }
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/otp.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOTP",
    ()=>createOTP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base32.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hmac.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
const defaultPeriod = 30;
const defaultDigits = 6;
async function generateHOTP(secret, { counter, digits, hash = "SHA-1" }) {
    const _digits = digits ?? defaultDigits;
    if (_digits < 1 || _digits > 8) {
        throw new TypeError("Digits must be between 1 and 8");
    }
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setBigUint64(0, BigInt(counter), false);
    const bytes = new Uint8Array(buffer);
    const hmacResult = new Uint8Array(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHMAC"])(hash).sign(secret, bytes));
    const offset = hmacResult[hmacResult.length - 1] & 15;
    const truncated = (hmacResult[offset] & 127) << 24 | (hmacResult[offset + 1] & 255) << 16 | (hmacResult[offset + 2] & 255) << 8 | hmacResult[offset + 3] & 255;
    const otp = truncated % 10 ** _digits;
    return otp.toString().padStart(_digits, "0");
}
async function generateTOTP(secret, options) {
    const digits = options?.digits ?? defaultDigits;
    const period = options?.period ?? defaultPeriod;
    const milliseconds = period * 1e3;
    const counter = Math.floor(Date.now() / milliseconds);
    return await generateHOTP(secret, {
        counter,
        digits,
        hash: options?.hash
    });
}
async function verifyTOTP(otp, { window = 1, digits = defaultDigits, secret, period = defaultPeriod }) {
    const milliseconds = period * 1e3;
    const counter = Math.floor(Date.now() / milliseconds);
    for(let i = -window; i <= window; i++){
        const generatedOTP = await generateHOTP(secret, {
            counter: counter + i,
            digits
        });
        if (otp === generatedOTP) {
            return true;
        }
    }
    return false;
}
function generateQRCode({ issuer, account, secret, digits = defaultDigits, period = defaultPeriod }) {
    const encodedIssuer = encodeURIComponent(issuer);
    const encodedAccountName = encodeURIComponent(account);
    const baseURI = `otpauth://totp/${encodedIssuer}:${encodedAccountName}`;
    const params = new URLSearchParams({
        secret: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base32"].encode(secret, {
            padding: false
        }),
        issuer
    });
    if (digits !== void 0) {
        params.set("digits", digits.toString());
    }
    if (period !== void 0) {
        params.set("period", period.toString());
    }
    return `${baseURI}?${params.toString()}`;
}
const createOTP = (secret, opts)=>{
    const digits = opts?.digits ?? defaultDigits;
    const period = opts?.period ?? defaultPeriod;
    return {
        hotp: (counter)=>generateHOTP(secret, {
                counter,
                digits
            }),
        totp: ()=>generateTOTP(secret, {
                digits,
                period
            }),
        verify: (otp, options)=>verifyTOTP(otp, {
                secret,
                digits,
                period,
                ...options
            }),
        url: (issuer, account)=>generateQRCode({
                issuer,
                account,
                secret,
                digits,
                period
            })
    };
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-fetch/fetch/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BetterFetchError",
    ()=>BetterFetchError,
    "ValidationError",
    ()=>ValidationError,
    "applySchemaPlugin",
    ()=>applySchemaPlugin,
    "betterFetch",
    ()=>betterFetch,
    "bodyParser",
    ()=>bodyParser,
    "createFetch",
    ()=>createFetch,
    "createRetryStrategy",
    ()=>createRetryStrategy,
    "createSchema",
    ()=>createSchema,
    "detectContentType",
    ()=>detectContentType,
    "detectResponseType",
    ()=>detectResponseType,
    "getBody",
    ()=>getBody,
    "getFetch",
    ()=>getFetch,
    "getHeaders",
    ()=>getHeaders,
    "getMethod",
    ()=>getMethod,
    "getTimeout",
    ()=>getTimeout,
    "getURL",
    ()=>getURL,
    "initializePlugins",
    ()=>initializePlugins,
    "isFunction",
    ()=>isFunction,
    "isJSONParsable",
    ()=>isJSONParsable,
    "isJSONSerializable",
    ()=>isJSONSerializable,
    "isPayloadMethod",
    ()=>isPayloadMethod,
    "isRouteMethod",
    ()=>isRouteMethod,
    "jsonParse",
    ()=>jsonParse,
    "methods",
    ()=>methods,
    "parseStandardSchema",
    ()=>parseStandardSchema
]);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
// src/error.ts
var BetterFetchError = class extends Error {
    constructor(status, statusText, error){
        super(statusText || status.toString(), {
            cause: error
        });
        this.status = status;
        this.statusText = statusText;
        this.error = error;
    }
};
// src/plugins.ts
var initializePlugins = async (url, options)=>{
    var _a, _b, _c, _d, _e, _f;
    let opts = options || {};
    const hooks = {
        onRequest: [
            options == null ? void 0 : options.onRequest
        ],
        onResponse: [
            options == null ? void 0 : options.onResponse
        ],
        onSuccess: [
            options == null ? void 0 : options.onSuccess
        ],
        onError: [
            options == null ? void 0 : options.onError
        ],
        onRetry: [
            options == null ? void 0 : options.onRetry
        ]
    };
    if (!options || !(options == null ? void 0 : options.plugins)) {
        return {
            url,
            options: opts,
            hooks
        };
    }
    for (const plugin of (options == null ? void 0 : options.plugins) || []){
        if (plugin.init) {
            const pluginRes = await ((_a = plugin.init) == null ? void 0 : _a.call(plugin, url.toString(), options));
            opts = pluginRes.options || opts;
            url = pluginRes.url;
        }
        hooks.onRequest.push((_b = plugin.hooks) == null ? void 0 : _b.onRequest);
        hooks.onResponse.push((_c = plugin.hooks) == null ? void 0 : _c.onResponse);
        hooks.onSuccess.push((_d = plugin.hooks) == null ? void 0 : _d.onSuccess);
        hooks.onError.push((_e = plugin.hooks) == null ? void 0 : _e.onError);
        hooks.onRetry.push((_f = plugin.hooks) == null ? void 0 : _f.onRetry);
    }
    return {
        url,
        options: opts,
        hooks
    };
};
// src/retry.ts
var LinearRetryStrategy = class {
    constructor(options){
        this.options = options;
    }
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay() {
        return this.options.delay;
    }
};
var ExponentialRetryStrategy = class {
    constructor(options){
        this.options = options;
    }
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay(attempt) {
        const delay = Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** attempt);
        return delay;
    }
};
function createRetryStrategy(options) {
    if (typeof options === "number") {
        return new LinearRetryStrategy({
            type: "linear",
            attempts: options,
            delay: 1e3
        });
    }
    switch(options.type){
        case "linear":
            return new LinearRetryStrategy(options);
        case "exponential":
            return new ExponentialRetryStrategy(options);
        default:
            throw new Error("Invalid retry strategy");
    }
}
// src/auth.ts
var getAuthHeader = async (options)=>{
    const headers = {};
    const getValue = async (value)=>typeof value === "function" ? await value() : value;
    if (options == null ? void 0 : options.auth) {
        if (options.auth.type === "Bearer") {
            const token = await getValue(options.auth.token);
            if (!token) {
                return headers;
            }
            headers["authorization"] = `Bearer ${token}`;
        } else if (options.auth.type === "Basic") {
            const username = getValue(options.auth.username);
            const password = getValue(options.auth.password);
            if (!username || !password) {
                return headers;
            }
            headers["authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
        } else if (options.auth.type === "Custom") {
            const value = getValue(options.auth.value);
            if (!value) {
                return headers;
            }
            headers["authorization"] = `${getValue(options.auth.prefix)} ${value}`;
        }
    }
    return headers;
};
// src/utils.ts
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(request) {
    const _contentType = request.headers.get("content-type");
    const textTypes = /* @__PURE__ */ new Set([
        "image/svg",
        "application/xml",
        "application/xhtml",
        "application/html"
    ]);
    if (!_contentType) {
        return "json";
    }
    const contentType = _contentType.split(";").shift() || "";
    if (JSON_RE.test(contentType)) {
        return "json";
    }
    if (textTypes.has(contentType) || contentType.startsWith("text/")) {
        return "text";
    }
    return "blob";
}
function isJSONParsable(value) {
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
}
function isJSONSerializable(value) {
    if (value === void 0) {
        return false;
    }
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean" || t === null) {
        return true;
    }
    if (t !== "object") {
        return false;
    }
    if (Array.isArray(value)) {
        return true;
    }
    if (value.buffer) {
        return false;
    }
    return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function jsonParse(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return text;
    }
}
function isFunction(value) {
    return typeof value === "function";
}
function getFetch(options) {
    if (options == null ? void 0 : options.customFetchImpl) {
        return options.customFetchImpl;
    }
    if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) {
        return globalThis.fetch;
    }
    if (("TURBOPACK compile-time value", "undefined") !== "undefined" && isFunction(window.fetch)) //TURBOPACK unreachable
    ;
    throw new Error("No fetch implementation found");
}
function isPayloadMethod(method) {
    if (!method) {
        return false;
    }
    const payloadMethod = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    return payloadMethod.includes(method.toUpperCase());
}
function isRouteMethod(method) {
    const routeMethod = [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    if (!method) {
        return false;
    }
    return routeMethod.includes(method.toUpperCase());
}
async function getHeaders(opts) {
    const headers = new Headers(opts == null ? void 0 : opts.headers);
    const authHeader = await getAuthHeader(opts);
    for (const [key, value] of Object.entries(authHeader || {})){
        headers.set(key, value);
    }
    if (!headers.has("content-type")) {
        const t = detectContentType(opts == null ? void 0 : opts.body);
        if (t) {
            headers.set("content-type", t);
        }
    }
    return headers;
}
function getURL(url, options) {
    if (url.startsWith("@")) {
        const m = url.toString().split("@")[1].split("/")[0];
        if (methods.includes(m)) {
            url = url.replace(`@${m}/`, "/");
        }
    }
    let _url;
    try {
        if (url.startsWith("http")) {
            _url = url;
        } else {
            let baseURL = options == null ? void 0 : options.baseURL;
            if (baseURL && !(baseURL == null ? void 0 : baseURL.endsWith("/"))) {
                baseURL = baseURL + "/";
            }
            if (url.startsWith("/")) {
                _url = new URL(url.substring(1), baseURL);
            } else {
                _url = new URL(url, options == null ? void 0 : options.baseURL);
            }
        }
    } catch (e) {
        if (e instanceof TypeError) {
            if (!(options == null ? void 0 : options.baseURL)) {
                throw TypeError(`Invalid URL ${url}. Are you passing in a relative url but not setting the baseURL?`);
            }
            throw TypeError(`Invalid URL ${url}. Please validate that you are passing the correct input.`);
        }
        throw e;
    }
    if (options == null ? void 0 : options.params) {
        if (Array.isArray(options == null ? void 0 : options.params)) {
            const params = (options == null ? void 0 : options.params) ? Array.isArray(options.params) ? `/${options.params.join("/")}` : `/${Object.values(options.params).join("/")}` : "";
            _url = _url.toString().split("/:")[0];
            _url = `${_url.toString()}${params}`;
        } else {
            for (const [key, value] of Object.entries(options == null ? void 0 : options.params)){
                _url = _url.toString().replace(`:${key}`, String(value));
            }
        }
    }
    const __url = new URL(_url);
    const queryParams = options == null ? void 0 : options.query;
    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)){
            __url.searchParams.append(key, String(value));
        }
    }
    return __url;
}
function detectContentType(body) {
    if (isJSONSerializable(body)) {
        return "application/json";
    }
    return null;
}
function getBody(options) {
    if (!(options == null ? void 0 : options.body)) {
        return null;
    }
    const headers = new Headers(options == null ? void 0 : options.headers);
    if (isJSONSerializable(options.body) && !headers.has("content-type")) {
        for (const [key, value] of Object.entries(options == null ? void 0 : options.body)){
            if (value instanceof Date) {
                options.body[key] = value.toISOString();
            }
        }
        return JSON.stringify(options.body);
    }
    return options.body;
}
function getMethod(url, options) {
    var _a;
    if (options == null ? void 0 : options.method) {
        return options.method.toUpperCase();
    }
    if (url.startsWith("@")) {
        const pMethod = (_a = url.split("@")[1]) == null ? void 0 : _a.split("/")[0];
        if (!methods.includes(pMethod)) {
            return (options == null ? void 0 : options.body) ? "POST" : "GET";
        }
        return pMethod.toUpperCase();
    }
    return (options == null ? void 0 : options.body) ? "POST" : "GET";
}
function getTimeout(options, controller) {
    let abortTimeout;
    if (!(options == null ? void 0 : options.signal) && (options == null ? void 0 : options.timeout)) {
        abortTimeout = setTimeout(()=>controller == null ? void 0 : controller.abort(), options == null ? void 0 : options.timeout);
    }
    return {
        abortTimeout,
        clearTimeout: ()=>{
            if (abortTimeout) {
                clearTimeout(abortTimeout);
            }
        }
    };
}
function bodyParser(data, responseType) {
    if (responseType === "json") {
        return JSON.parse(data);
    }
    return data;
}
var ValidationError = class _ValidationError extends Error {
    constructor(issues, message){
        super(message || JSON.stringify(issues, null, 2));
        this.issues = issues;
        Object.setPrototypeOf(this, _ValidationError.prototype);
    }
};
async function parseStandardSchema(schema, input) {
    let result = await schema["~standard"].validate(input);
    if (result.issues) {
        throw new ValidationError(result.issues);
    }
    return result.value;
}
// src/create-fetch/schema.ts
var methods = [
    "get",
    "post",
    "put",
    "patch",
    "delete"
];
var createSchema = (schema, config)=>{
    return {
        schema,
        config
    };
};
// src/create-fetch/index.ts
var applySchemaPlugin = (config)=>({
        id: "apply-schema",
        name: "Apply Schema",
        version: "1.0.0",
        async init (url, options) {
            var _a, _b, _c, _d;
            const schema = ((_b = (_a = config.plugins) == null ? void 0 : _a.find((plugin)=>{
                var _a2;
                return ((_a2 = plugin.schema) == null ? void 0 : _a2.config) ? url.startsWith(plugin.schema.config.baseURL || "") || url.startsWith(plugin.schema.config.prefix || "") : false;
            })) == null ? void 0 : _b.schema) || config.schema;
            if (schema) {
                let urlKey = url;
                if ((_c = schema.config) == null ? void 0 : _c.prefix) {
                    if (urlKey.startsWith(schema.config.prefix)) {
                        urlKey = urlKey.replace(schema.config.prefix, "");
                        if (schema.config.baseURL) {
                            url = url.replace(schema.config.prefix, schema.config.baseURL);
                        }
                    }
                }
                if ((_d = schema.config) == null ? void 0 : _d.baseURL) {
                    if (urlKey.startsWith(schema.config.baseURL)) {
                        urlKey = urlKey.replace(schema.config.baseURL, "");
                    }
                }
                const keySchema = schema.schema[urlKey];
                if (keySchema) {
                    let opts = __spreadProps(__spreadValues({}, options), {
                        method: keySchema.method,
                        output: keySchema.output
                    });
                    if (!(options == null ? void 0 : options.disableValidation)) {
                        opts = __spreadProps(__spreadValues({}, opts), {
                            body: keySchema.input ? await parseStandardSchema(keySchema.input, options == null ? void 0 : options.body) : options == null ? void 0 : options.body,
                            params: keySchema.params ? await parseStandardSchema(keySchema.params, options == null ? void 0 : options.params) : options == null ? void 0 : options.params,
                            query: keySchema.query ? await parseStandardSchema(keySchema.query, options == null ? void 0 : options.query) : options == null ? void 0 : options.query
                        });
                    }
                    return {
                        url,
                        options: opts
                    };
                }
            }
            return {
                url,
                options
            };
        }
    });
var createFetch = (config)=>{
    async function $fetch(url, options) {
        const opts = __spreadProps(__spreadValues(__spreadValues({}, config), options), {
            plugins: [
                ...(config == null ? void 0 : config.plugins) || [],
                applySchemaPlugin(config || {})
            ]
        });
        if (config == null ? void 0 : config.catchAllError) {
            try {
                return await betterFetch(url, opts);
            } catch (error) {
                return {
                    data: null,
                    error: {
                        status: 500,
                        statusText: "Fetch Error",
                        message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
                        error
                    }
                };
            }
        }
        return await betterFetch(url, opts);
    }
    return $fetch;
};
// src/url.ts
function getURL2(url, option) {
    let { baseURL, params, query } = option || {
        query: {},
        params: {},
        baseURL: ""
    };
    let basePath = url.startsWith("http") ? url.split("/").slice(0, 3).join("/") : baseURL || "";
    if (url.startsWith("@")) {
        const m = url.toString().split("@")[1].split("/")[0];
        if (methods.includes(m)) {
            url = url.replace(`@${m}/`, "/");
        }
    }
    if (!basePath.endsWith("/")) basePath += "/";
    let [path, urlQuery] = url.replace(basePath, "").split("?");
    const queryParams = new URLSearchParams(urlQuery);
    for (const [key, value] of Object.entries(query || {})){
        if (value == null) continue;
        queryParams.set(key, String(value));
    }
    if (params) {
        if (Array.isArray(params)) {
            const paramPaths = path.split("/").filter((p)=>p.startsWith(":"));
            for (const [index, key] of paramPaths.entries()){
                const value = params[index];
                path = path.replace(key, value);
            }
        } else {
            for (const [key, value] of Object.entries(params)){
                path = path.replace(`:${key}`, String(value));
            }
        }
    }
    path = path.split("/").map(encodeURIComponent).join("/");
    if (path.startsWith("/")) path = path.slice(1);
    let queryParamString = queryParams.toString();
    queryParamString = queryParamString.length > 0 ? `?${queryParamString}`.replace(/\+/g, "%20") : "";
    if (!basePath.startsWith("http")) {
        return `${basePath}${path}${queryParamString}`;
    }
    const _url = new URL(`${path}${queryParamString}`, basePath);
    return _url;
}
// src/fetch.ts
var betterFetch = async (url, options)=>{
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { hooks, url: __url, options: opts } = await initializePlugins(url, options);
    const fetch = getFetch(opts);
    const controller = new AbortController();
    const signal = (_a = opts.signal) != null ? _a : controller.signal;
    const _url = getURL2(__url, opts);
    const body = getBody(opts);
    const headers = await getHeaders(opts);
    const method = getMethod(__url, opts);
    let context = __spreadProps(__spreadValues({}, opts), {
        url: _url,
        headers,
        body,
        method,
        signal
    });
    for (const onRequest of hooks.onRequest){
        if (onRequest) {
            const res = await onRequest(context);
            if (res instanceof Object) {
                context = res;
            }
        }
    }
    if ("pipeTo" in context && typeof context.pipeTo === "function" || typeof ((_b = options == null ? void 0 : options.body) == null ? void 0 : _b.pipe) === "function") {
        if (!("duplex" in context)) {
            context.duplex = "half";
        }
    }
    const { clearTimeout: clearTimeout2 } = getTimeout(opts, controller);
    let response = await fetch(context.url, context);
    clearTimeout2();
    const responseContext = {
        response,
        request: context
    };
    for (const onResponse of hooks.onResponse){
        if (onResponse) {
            const r = await onResponse(__spreadProps(__spreadValues({}, responseContext), {
                response: ((_c = options == null ? void 0 : options.hookOptions) == null ? void 0 : _c.cloneResponse) ? response.clone() : response
            }));
            if (r instanceof Response) {
                response = r;
            } else if (r instanceof Object) {
                response = r.response;
            }
        }
    }
    if (response.ok) {
        const hasBody = context.method !== "HEAD";
        if (!hasBody) {
            return {
                data: "",
                error: null
            };
        }
        const responseType = detectResponseType(response);
        const successContext = {
            data: "",
            response,
            request: context
        };
        if (responseType === "json" || responseType === "text") {
            const text = await response.text();
            const parser2 = (_d = context.jsonParser) != null ? _d : jsonParse;
            const data = await parser2(text);
            successContext.data = data;
        } else {
            successContext.data = await response[responseType]();
        }
        if (context == null ? void 0 : context.output) {
            if (context.output && !context.disableValidation) {
                successContext.data = await parseStandardSchema(context.output, successContext.data);
            }
        }
        for (const onSuccess of hooks.onSuccess){
            if (onSuccess) {
                await onSuccess(__spreadProps(__spreadValues({}, successContext), {
                    response: ((_e = options == null ? void 0 : options.hookOptions) == null ? void 0 : _e.cloneResponse) ? response.clone() : response
                }));
            }
        }
        if (options == null ? void 0 : options.throw) {
            return successContext.data;
        }
        return {
            data: successContext.data,
            error: null
        };
    }
    const parser = (_f = options == null ? void 0 : options.jsonParser) != null ? _f : jsonParse;
    const responseText = await response.text();
    const isJSONResponse = isJSONParsable(responseText);
    const errorObject = isJSONResponse ? await parser(responseText) : null;
    const errorContext = {
        response,
        responseText,
        request: context,
        error: __spreadProps(__spreadValues({}, errorObject), {
            status: response.status,
            statusText: response.statusText
        })
    };
    for (const onError of hooks.onError){
        if (onError) {
            await onError(__spreadProps(__spreadValues({}, errorContext), {
                response: ((_g = options == null ? void 0 : options.hookOptions) == null ? void 0 : _g.cloneResponse) ? response.clone() : response
            }));
        }
    }
    if (options == null ? void 0 : options.retry) {
        const retryStrategy = createRetryStrategy(options.retry);
        const _retryAttempt = (_h = options.retryAttempt) != null ? _h : 0;
        if (await retryStrategy.shouldAttemptRetry(_retryAttempt, response)) {
            for (const onRetry of hooks.onRetry){
                if (onRetry) {
                    await onRetry(responseContext);
                }
            }
            const delay = retryStrategy.getDelay(_retryAttempt);
            await new Promise((resolve)=>setTimeout(resolve, delay));
            return await betterFetch(url, __spreadProps(__spreadValues({}, options), {
                retryAttempt: _retryAttempt + 1
            }));
        }
    }
    if (options == null ? void 0 : options.throw) {
        throw new BetterFetchError(response.status, response.statusText, isJSONResponse ? errorObject : responseText);
    }
    return {
        data: null,
        error: __spreadProps(__spreadValues({}, errorObject), {
            status: response.status,
            statusText: response.statusText
        })
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/rou3/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addRoute",
    ()=>addRoute,
    "createRouter",
    ()=>createRouter,
    "findAllRoutes",
    ()=>findAllRoutes,
    "findRoute",
    ()=>findRoute,
    "removeRoute",
    ()=>removeRoute
]);
const EmptyObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = /* @__PURE__ */ Object.create(null);
    return C;
})();
function createRouter() {
    const ctx = {
        root: {
            key: ""
        },
        static: new EmptyObject()
    };
    return ctx;
}
function splitPath(path) {
    return path.split("/").filter(Boolean);
}
function getMatchParams(segments, paramsMap) {
    const params = new EmptyObject();
    for (const [index, name] of paramsMap){
        const segment = index < 0 ? segments.slice(-1 * index).join("/") : segments[index];
        if (typeof name === "string") {
            params[name] = segment;
        } else {
            const match = segment.match(name);
            if (match) {
                for(const key in match.groups){
                    params[key] = match.groups[key];
                }
            }
        }
    }
    return params;
}
function addRoute(ctx, method = "", path, data) {
    const segments = splitPath(path);
    let node = ctx.root;
    let _unnamedParamIndex = 0;
    const paramsMap = [];
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        if (segment.startsWith("**")) {
            if (!node.wildcard) {
                node.wildcard = {
                    key: "**"
                };
            }
            node = node.wildcard;
            paramsMap.push([
                -i,
                segment.split(":")[1] || "_",
                segment.length === 2
            ]);
            break;
        }
        if (segment === "*" || segment.includes(":")) {
            if (!node.param) {
                node.param = {
                    key: "*"
                };
            }
            node = node.param;
            const isOptional = segment === "*";
            paramsMap.push([
                i,
                isOptional ? `_${_unnamedParamIndex++}` : _getParamMatcher(segment),
                isOptional
            ]);
            continue;
        }
        const child = node.static?.[segment];
        if (child) {
            node = child;
        } else {
            const staticNode = {
                key: segment
            };
            if (!node.static) {
                node.static = new EmptyObject();
            }
            node.static[segment] = staticNode;
            node = staticNode;
        }
    }
    const hasParams = paramsMap.length > 0;
    if (!node.methods) {
        node.methods = new EmptyObject();
    }
    if (!node.methods[method]) {
        node.methods[method] = [];
    }
    node.methods[method].push({
        data: data || null,
        paramsMap: hasParams ? paramsMap : void 0
    });
    if (!hasParams) {
        ctx.static[path] = node;
    }
}
function _getParamMatcher(segment) {
    if (!segment.includes(":", 1)) {
        return segment.slice(1);
    }
    const regex = segment.replace(/:(\w+)/g, (_, id)=>`(?<${id}>\\w+)`);
    return new RegExp(`^${regex}$`);
}
function findRoute(ctx, method = "", path, opts) {
    if (path[path.length - 1] === "/") {
        path = path.slice(0, -1);
    }
    const staticNode = ctx.static[path];
    if (staticNode && staticNode.methods) {
        const staticMatch = staticNode.methods[method] || staticNode.methods[""];
        if (staticMatch !== void 0) {
            return staticMatch[0];
        }
    }
    const segments = splitPath(path);
    const match = _lookupTree(ctx, ctx.root, method, segments, 0)?.[0];
    if (match === void 0) {
        return;
    }
    if (opts?.params === false) {
        return match;
    }
    return {
        data: match.data,
        params: match.paramsMap ? getMatchParams(segments, match.paramsMap) : void 0
    };
}
function _lookupTree(ctx, node, method, segments, index) {
    if (index === segments.length) {
        if (node.methods) {
            const match = node.methods[method] || node.methods[""];
            if (match) {
                return match;
            }
        }
        if (node.param && node.param.methods) {
            const match = node.param.methods[method] || node.param.methods[""];
            if (match) {
                const pMap = match[0].paramsMap;
                if (pMap?.[pMap?.length - 1]?.[2]) {
                    return match;
                }
            }
        }
        if (node.wildcard && node.wildcard.methods) {
            const match = node.wildcard.methods[method] || node.wildcard.methods[""];
            if (match) {
                const pMap = match[0].paramsMap;
                if (pMap?.[pMap?.length - 1]?.[2]) {
                    return match;
                }
            }
        }
        return void 0;
    }
    const segment = segments[index];
    if (node.static) {
        const staticChild = node.static[segment];
        if (staticChild) {
            const match = _lookupTree(ctx, staticChild, method, segments, index + 1);
            if (match) {
                return match;
            }
        }
    }
    if (node.param) {
        const match = _lookupTree(ctx, node.param, method, segments, index + 1);
        if (match) {
            return match;
        }
    }
    if (node.wildcard && node.wildcard.methods) {
        return node.wildcard.methods[method] || node.wildcard.methods[""];
    }
    return;
}
function removeRoute(ctx, method, path) {
    const segments = splitPath(path);
    return _remove(ctx.root, method || "", segments, 0);
}
function _remove(node, method, segments, index) {
    if (index === segments.length) {
        if (node.methods && method in node.methods) {
            delete node.methods[method];
            if (Object.keys(node.methods).length === 0) {
                node.methods = void 0;
            }
        }
        return;
    }
    const segment = segments[index];
    if (segment === "*") {
        if (node.param) {
            _remove(node.param, method, segments, index + 1);
            if (_isEmptyNode(node.param)) {
                node.param = void 0;
            }
        }
        return;
    }
    if (segment === "**") {
        if (node.wildcard) {
            _remove(node.wildcard, method, segments, index + 1);
            if (_isEmptyNode(node.wildcard)) {
                node.wildcard = void 0;
            }
        }
        return;
    }
    const childNode = node.static?.[segment];
    if (childNode) {
        _remove(childNode, method, segments, index + 1);
        if (_isEmptyNode(childNode)) {
            delete node.static[segment];
            if (Object.keys(node.static).length === 0) {
                node.static = void 0;
            }
        }
    }
}
function _isEmptyNode(node) {
    return node.methods === void 0 && node.static === void 0 && node.param === void 0 && node.wildcard === void 0;
}
function findAllRoutes(ctx, method = "", path, opts) {
    if (path[path.length - 1] === "/") {
        path = path.slice(0, -1);
    }
    const segments = splitPath(path);
    const matches = _findAll(ctx, ctx.root, method, segments, 0);
    if (opts?.params === false) {
        return matches;
    }
    return matches.map((m)=>{
        return {
            data: m.data,
            params: m.paramsMap ? getMatchParams(segments, m.paramsMap) : void 0
        };
    });
}
function _findAll(ctx, node, method, segments, index, matches = []) {
    const segment = segments[index];
    if (node.wildcard && node.wildcard.methods) {
        const match = node.wildcard.methods[method] || node.wildcard.methods[""];
        if (match) {
            matches.push(...match);
        }
    }
    if (node.param) {
        _findAll(ctx, node.param, method, segments, index + 1, matches);
        if (index === segments.length && node.param.methods) {
            const match = node.param.methods[method] || node.param.methods[""];
            if (match) {
                matches.push(...match);
            }
        }
    }
    const staticChild = node.static?.[segment];
    if (staticChild) {
        _findAll(ctx, staticChild, method, segments, index + 1, matches);
    }
    if (index === segments.length && node.methods) {
        const match = node.methods[method] || node.methods[""];
        if (match) {
            matches.push(...match);
        }
    }
    return matches;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIError",
    ()=>APIError,
    "_statusCode",
    ()=>_statusCode,
    "createEndpoint",
    ()=>createEndpoint2,
    "createInternalContext",
    ()=>createInternalContext,
    "createMiddleware",
    ()=>createMiddleware,
    "createRouter",
    ()=>createRouter,
    "generator",
    ()=>generator,
    "getCookieKey",
    ()=>getCookieKey,
    "getHTML",
    ()=>getHTML,
    "hideInternalStackFrames",
    ()=>hideInternalStackFrames,
    "makeErrorForHideStackFrame",
    ()=>makeErrorForHideStackFrame,
    "parseCookies",
    ()=>parseCookies,
    "serializeCookie",
    ()=>serializeCookie,
    "serializeSignedCookie",
    ()=>serializeSignedCookie,
    "toResponse",
    ()=>toResponse
]);
// src/crypto.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-rsc] (ecmascript)");
// src/router.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/rou3/dist/index.mjs [app-rsc] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// src/error.ts
function isErrorStackTraceLimitWritable() {
    const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
    if (desc === void 0) {
        return Object.isExtensible(Error);
    }
    return Object.prototype.hasOwnProperty.call(desc, "writable") ? desc.writable : desc.set !== void 0;
}
function hideInternalStackFrames(stack) {
    const lines = stack.split("\n    at ");
    if (lines.length <= 1) {
        return stack;
    }
    lines.splice(1, 1);
    return lines.join("\n    at ");
}
function makeErrorForHideStackFrame(Base, clazz) {
    class HideStackFramesError extends Base {
        #hiddenStack;
        constructor(...args){
            if (isErrorStackTraceLimitWritable()) {
                const limit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                super(...args);
                Error.stackTraceLimit = limit;
            } else {
                super(...args);
            }
            const stack = new Error().stack;
            if (stack) {
                this.#hiddenStack = hideInternalStackFrames(stack.replace(/^Error/, this.name));
            }
        }
        // use `getter` here to avoid the stack trace being captured by loggers
        get errorStack() {
            return this.#hiddenStack;
        }
    }
    Object.defineProperty(HideStackFramesError.prototype, "constructor", {
        get () {
            return clazz;
        },
        enumerable: false,
        configurable: true
    });
    return HideStackFramesError;
}
var _statusCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    "I'M_A_TEAPOT": 418,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
var InternalAPIError = class extends Error {
    constructor(status = "INTERNAL_SERVER_ERROR", body = void 0, headers = {}, statusCode = typeof status === "number" ? status : _statusCode[status]){
        super(body?.message, body?.cause ? {
            cause: body.cause
        } : void 0);
        this.status = status;
        this.body = body;
        this.headers = headers;
        this.statusCode = statusCode;
        this.name = "APIError";
        this.status = status;
        this.headers = headers;
        this.statusCode = statusCode;
        this.body = body ? {
            code: body?.message?.toUpperCase().replace(/ /g, "_").replace(/[^A-Z0-9_]/g, ""),
            ...body
        } : void 0;
    }
};
var APIError = makeErrorForHideStackFrame(InternalAPIError, Error);
// src/utils.ts
async function getBody(request) {
    const contentType = request.headers.get("content-type") || "";
    if (!request.body) {
        return void 0;
    }
    if (contentType.includes("application/json")) {
        return await request.json();
    }
    if (contentType.includes("application/x-www-form-urlencoded")) {
        const formData = await request.formData();
        const result = {};
        formData.forEach((value, key)=>{
            result[key] = value.toString();
        });
        return result;
    }
    if (contentType.includes("multipart/form-data")) {
        const formData = await request.formData();
        const result = {};
        formData.forEach((value, key)=>{
            result[key] = value;
        });
        return result;
    }
    if (contentType.includes("text/plain")) {
        return await request.text();
    }
    if (contentType.includes("application/octet-stream")) {
        return await request.arrayBuffer();
    }
    if (contentType.includes("application/pdf") || contentType.includes("image/") || contentType.includes("video/")) {
        const blob = await request.blob();
        return blob;
    }
    if (contentType.includes("application/stream") || request.body instanceof ReadableStream) {
        return request.body;
    }
    return await request.text();
}
function isAPIError(error) {
    return error instanceof APIError || error?.name === "APIError";
}
function tryDecode(str) {
    try {
        return str.includes("%") ? decodeURIComponent(str) : str;
    } catch  {
        return str;
    }
}
// src/to-response.ts
function isJSONSerializable(value) {
    if (value === void 0) {
        return false;
    }
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean" || t === null) {
        return true;
    }
    if (t !== "object") {
        return false;
    }
    if (Array.isArray(value)) {
        return true;
    }
    if (value.buffer) {
        return false;
    }
    return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function safeStringify(obj, replacer, space) {
    let id = 0;
    const seen = /* @__PURE__ */ new WeakMap();
    const safeReplacer = (key, value)=>{
        if (typeof value === "bigint") {
            return value.toString();
        }
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return `[Circular ref-${seen.get(value)}]`;
            }
            seen.set(value, id++);
        }
        if (replacer) {
            return replacer(key, value);
        }
        return value;
    };
    return JSON.stringify(obj, safeReplacer, space);
}
function isJSONResponse(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    return "_flag" in value && value._flag === "json";
}
function toResponse(data, init) {
    if (data instanceof Response) {
        if (init?.headers instanceof Headers) {
            init.headers.forEach((value, key)=>{
                data.headers.set(key, value);
            });
        }
        return data;
    }
    const isJSON = isJSONResponse(data);
    if (isJSON) {
        const body2 = data.body;
        const routerResponse = data.routerResponse;
        if (routerResponse instanceof Response) {
            return routerResponse;
        }
        const headers2 = new Headers({
            ...routerResponse?.headers,
            ...data.headers,
            ...init?.headers,
            "Content-Type": "application/json"
        });
        return new Response(JSON.stringify(body2), {
            ...routerResponse,
            headers: headers2,
            status: data.status ?? init?.status ?? routerResponse?.status,
            statusText: init?.statusText ?? routerResponse?.statusText
        });
    }
    if (isAPIError(data)) {
        return toResponse(data.body, {
            status: init?.status ?? data.statusCode,
            statusText: data.status.toString(),
            headers: init?.headers || data.headers
        });
    }
    let body = data;
    let headers = new Headers(init?.headers);
    if (!data) {
        if (data === null) {
            body = JSON.stringify(null);
        }
        headers.set("content-type", "application/json");
    } else if (typeof data === "string") {
        body = data;
        headers.set("Content-Type", "text/plain");
    } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        body = data;
        headers.set("Content-Type", "application/octet-stream");
    } else if (data instanceof Blob) {
        body = data;
        headers.set("Content-Type", data.type || "application/octet-stream");
    } else if (data instanceof FormData) {
        body = data;
    } else if (data instanceof URLSearchParams) {
        body = data;
        headers.set("Content-Type", "application/x-www-form-urlencoded");
    } else if (data instanceof ReadableStream) {
        body = data;
        headers.set("Content-Type", "application/octet-stream");
    } else if (isJSONSerializable(data)) {
        body = safeStringify(data);
        headers.set("Content-Type", "application/json");
    }
    return new Response(body, {
        ...init,
        headers
    });
}
// src/validator.ts
async function runValidation(options, context = {}) {
    let request = {
        body: context.body,
        query: context.query
    };
    if (options.body) {
        const result = await options.body["~standard"].validate(context.body);
        if (result.issues) {
            return {
                data: null,
                error: fromError(result.issues, "body")
            };
        }
        request.body = result.value;
    }
    if (options.query) {
        const result = await options.query["~standard"].validate(context.query);
        if (result.issues) {
            return {
                data: null,
                error: fromError(result.issues, "query")
            };
        }
        request.query = result.value;
    }
    if (options.requireHeaders && !context.headers) {
        return {
            data: null,
            error: {
                message: "Headers is required"
            }
        };
    }
    if (options.requireRequest && !context.request) {
        return {
            data: null,
            error: {
                message: "Request is required"
            }
        };
    }
    return {
        data: request,
        error: null
    };
}
function fromError(error, validating) {
    const errorMessages = [];
    for (const issue2 of error){
        const message = issue2.message;
        errorMessages.push(message);
    }
    return {
        message: `Invalid ${validating} parameters`
    };
}
;
var algorithm = {
    name: "HMAC",
    hash: "SHA-256"
};
var getCryptoKey = async (secret)=>{
    const secretBuf = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", secretBuf, algorithm, false, [
        "sign",
        "verify"
    ]);
};
var verifySignature = async (base64Signature, value, secret)=>{
    try {
        const signatureBinStr = atob(base64Signature);
        const signature = new Uint8Array(signatureBinStr.length);
        for(let i = 0, len = signatureBinStr.length; i < len; i++){
            signature[i] = signatureBinStr.charCodeAt(i);
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().verify(algorithm, secret, signature, new TextEncoder().encode(value));
    } catch (e) {
        return false;
    }
};
var makeSignature = async (value, secret)=>{
    const key = await getCryptoKey(secret);
    const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign(algorithm.name, key, new TextEncoder().encode(value));
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
};
var signCookieValue = async (value, secret)=>{
    const signature = await makeSignature(value, secret);
    value = `${value}.${signature}`;
    value = encodeURIComponent(value);
    return value;
};
// src/cookies.ts
var getCookieKey = (key, prefix)=>{
    let finalKey = key;
    if (prefix) {
        if (prefix === "secure") {
            finalKey = "__Secure-" + key;
        } else if (prefix === "host") {
            finalKey = "__Host-" + key;
        } else {
            return void 0;
        }
    }
    return finalKey;
};
function parseCookies(str) {
    if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
    }
    const cookies = /* @__PURE__ */ new Map();
    let index = 0;
    while(index < str.length){
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
            break;
        }
        let endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
            endIdx = str.length;
        } else if (endIdx < eqIdx) {
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const key = str.slice(index, eqIdx).trim();
        if (!cookies.has(key)) {
            let val = str.slice(eqIdx + 1, endIdx).trim();
            if (val.codePointAt(0) === 34) {
                val = val.slice(1, -1);
            }
            cookies.set(key, tryDecode(val));
        }
        index = endIdx + 1;
    }
    return cookies;
}
var _serialize = (key, value, opt = {})=>{
    let cookie;
    if (opt?.prefix === "secure") {
        cookie = `${`__Secure-${key}`}=${value}`;
    } else if (opt?.prefix === "host") {
        cookie = `${`__Host-${key}`}=${value}`;
    } else {
        cookie = `${key}=${value}`;
    }
    if (key.startsWith("__Secure-") && !opt.secure) {
        opt.secure = true;
    }
    if (key.startsWith("__Host-")) {
        if (!opt.secure) {
            opt.secure = true;
        }
        if (opt.path !== "/") {
            opt.path = "/";
        }
        if (opt.domain) {
            opt.domain = void 0;
        }
    }
    if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
        if (opt.maxAge > 3456e4) {
            throw new Error("Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.");
        }
        cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
    }
    if (opt.domain && opt.prefix !== "host") {
        cookie += `; Domain=${opt.domain}`;
    }
    if (opt.path) {
        cookie += `; Path=${opt.path}`;
    }
    if (opt.expires) {
        if (opt.expires.getTime() - Date.now() > 3456e7) {
            throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");
        }
        cookie += `; Expires=${opt.expires.toUTCString()}`;
    }
    if (opt.httpOnly) {
        cookie += "; HttpOnly";
    }
    if (opt.secure) {
        cookie += "; Secure";
    }
    if (opt.sameSite) {
        cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
    }
    if (opt.partitioned) {
        if (!opt.secure) {
            opt.secure = true;
        }
        cookie += "; Partitioned";
    }
    return cookie;
};
var serializeCookie = (key, value, opt)=>{
    value = encodeURIComponent(value);
    return _serialize(key, value, opt);
};
var serializeSignedCookie = async (key, value, secret, opt)=>{
    value = await signCookieValue(value, secret);
    return _serialize(key, value, opt);
};
// src/context.ts
var createInternalContext = async (context, { options, path })=>{
    const headers = new Headers();
    const { data, error } = await runValidation(options, context);
    if (error) {
        throw new APIError(400, {
            message: error.message,
            code: "VALIDATION_ERROR"
        });
    }
    const requestHeaders = "headers" in context ? context.headers instanceof Headers ? context.headers : new Headers(context.headers) : "request" in context && context.request instanceof Request ? context.request.headers : null;
    const requestCookies = requestHeaders?.get("cookie");
    const parsedCookies = requestCookies ? parseCookies(requestCookies) : void 0;
    const internalContext = {
        ...context,
        body: data.body,
        query: data.query,
        path: context.path || path,
        context: "context" in context && context.context ? context.context : {},
        returned: void 0,
        headers: context?.headers,
        request: context?.request,
        params: "params" in context ? context.params : void 0,
        method: context.method,
        setHeader: (key, value)=>{
            headers.set(key, value);
        },
        getHeader: (key)=>{
            if (!requestHeaders) return null;
            return requestHeaders.get(key);
        },
        getCookie: (key, prefix)=>{
            const finalKey = getCookieKey(key, prefix);
            if (!finalKey) {
                return null;
            }
            return parsedCookies?.get(finalKey) || null;
        },
        getSignedCookie: async (key, secret, prefix)=>{
            const finalKey = getCookieKey(key, prefix);
            if (!finalKey) {
                return null;
            }
            const value = parsedCookies?.get(finalKey);
            if (!value) {
                return null;
            }
            const signatureStartPos = value.lastIndexOf(".");
            if (signatureStartPos < 1) {
                return null;
            }
            const signedValue = value.substring(0, signatureStartPos);
            const signature = value.substring(signatureStartPos + 1);
            if (signature.length !== 44 || !signature.endsWith("=")) {
                return null;
            }
            const secretKey = await getCryptoKey(secret);
            const isVerified = await verifySignature(signature, signedValue, secretKey);
            return isVerified ? signedValue : false;
        },
        setCookie: (key, value, options2)=>{
            const cookie = serializeCookie(key, value, options2);
            headers.append("set-cookie", cookie);
            return cookie;
        },
        setSignedCookie: async (key, value, secret, options2)=>{
            const cookie = await serializeSignedCookie(key, value, secret, options2);
            headers.append("set-cookie", cookie);
            return cookie;
        },
        redirect: (url)=>{
            headers.set("location", url);
            return new APIError("FOUND", void 0, headers);
        },
        error: (status, body, headers2)=>{
            return new APIError(status, body, headers2);
        },
        json: (json, routerResponse)=>{
            if (!context.asResponse) {
                return json;
            }
            return {
                body: routerResponse?.body || json,
                routerResponse,
                _flag: "json"
            };
        },
        responseHeaders: headers
    };
    for (const middleware of options.use || []){
        const response = await middleware({
            ...internalContext,
            returnHeaders: true,
            asResponse: false
        });
        if (response.response) {
            Object.assign(internalContext.context, response.response);
        }
        if (response.headers) {
            response.headers.forEach((value, key)=>{
                internalContext.responseHeaders.set(key, value);
            });
        }
    }
    return internalContext;
};
// src/middleware.ts
function createMiddleware(optionsOrHandler, handler) {
    const internalHandler = async (inputCtx)=>{
        const context = inputCtx;
        const _handler = typeof optionsOrHandler === "function" ? optionsOrHandler : handler;
        const options = typeof optionsOrHandler === "function" ? {} : optionsOrHandler;
        const internalContext = await createInternalContext(context, {
            options,
            path: "/"
        });
        if (!_handler) {
            throw new Error("handler must be defined");
        }
        const response = await _handler(internalContext);
        const headers = internalContext.responseHeaders;
        return context.returnHeaders ? {
            headers,
            response
        } : response;
    };
    internalHandler.options = typeof optionsOrHandler === "function" ? {} : optionsOrHandler;
    return internalHandler;
}
createMiddleware.create = (opts)=>{
    function fn(optionsOrHandler, handler) {
        if (typeof optionsOrHandler === "function") {
            return createMiddleware({
                use: opts?.use
            }, optionsOrHandler);
        }
        if (!handler) {
            throw new Error("Middleware handler is required");
        }
        const middleware = createMiddleware({
            ...optionsOrHandler,
            method: "*",
            use: [
                ...opts?.use || [],
                ...optionsOrHandler.use || []
            ]
        }, handler);
        return middleware;
    }
    return fn;
};
// src/endpoint.ts
var createEndpoint2 = (path, options, handler)=>{
    const internalHandler = async (...inputCtx)=>{
        const context = inputCtx[0] || {};
        const internalContext = await createInternalContext(context, {
            options,
            path
        });
        const response = await handler(internalContext).catch(async (e)=>{
            if (isAPIError(e)) {
                const onAPIError = options.onAPIError;
                if (onAPIError) {
                    await onAPIError(e);
                }
                if (context.asResponse) {
                    return e;
                }
            }
            throw e;
        });
        const headers = internalContext.responseHeaders;
        return context.asResponse ? toResponse(response, {
            headers
        }) : context.returnHeaders ? {
            headers,
            response
        } : response;
    };
    internalHandler.options = options;
    internalHandler.path = path;
    return internalHandler;
};
createEndpoint2.create = (opts)=>{
    return (path, options, handler)=>{
        return createEndpoint2(path, {
            ...options,
            use: [
                ...options?.use || [],
                ...opts?.use || []
            ]
        }, handler);
    };
};
;
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
    status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
    function init(inst, def) {
        var _a;
        Object.defineProperty(inst, "_zod", {
            value: inst._zod ?? {},
            enumerable: false
        });
        (_a = inst._zod).traits ?? (_a.traits = /* @__PURE__ */ new Set());
        inst._zod.traits.add(name);
        initializer3(inst, def);
        for(const k in _.prototype){
            if (!(k in inst)) Object.defineProperty(inst, k, {
                value: _.prototype[k].bind(inst)
            });
        }
        inst._zod.constr = _;
        inst._zod.def = def;
    }
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name
    });
    function _(def) {
        var _a;
        const inst = params?.Parent ? new Definition() : this;
        init(inst, def);
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        for (const fn of inst._zod.deferred){
            fn();
        }
        return inst;
    }
    Object.defineProperty(_, "init", {
        value: init
    });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst)=>{
            if (params?.Parent && inst instanceof params.Parent) return true;
            return inst?._zod?.traits?.has(name);
        }
    });
    Object.defineProperty(_, "name", {
        value: name
    });
    return _;
}
var $brand = Symbol("zod_brand");
var $ZodAsyncError = class extends Error {
    constructor(){
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
};
var globalConfig = {};
function config(newConfig) {
    if (newConfig) Object.assign(globalConfig, newConfig);
    return globalConfig;
}
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
    BIGINT_FORMAT_RANGES: ()=>BIGINT_FORMAT_RANGES,
    Class: ()=>Class,
    NUMBER_FORMAT_RANGES: ()=>NUMBER_FORMAT_RANGES,
    aborted: ()=>aborted,
    allowsEval: ()=>allowsEval,
    assert: ()=>assert,
    assertEqual: ()=>assertEqual,
    assertIs: ()=>assertIs,
    assertNever: ()=>assertNever,
    assertNotEqual: ()=>assertNotEqual,
    assignProp: ()=>assignProp,
    cached: ()=>cached,
    captureStackTrace: ()=>captureStackTrace,
    cleanEnum: ()=>cleanEnum,
    cleanRegex: ()=>cleanRegex,
    clone: ()=>clone,
    createTransparentProxy: ()=>createTransparentProxy,
    defineLazy: ()=>defineLazy,
    esc: ()=>esc,
    escapeRegex: ()=>escapeRegex,
    extend: ()=>extend,
    finalizeIssue: ()=>finalizeIssue,
    floatSafeRemainder: ()=>floatSafeRemainder,
    getElementAtPath: ()=>getElementAtPath,
    getEnumValues: ()=>getEnumValues,
    getLengthableOrigin: ()=>getLengthableOrigin,
    getParsedType: ()=>getParsedType,
    getSizableOrigin: ()=>getSizableOrigin,
    isObject: ()=>isObject,
    isPlainObject: ()=>isPlainObject,
    issue: ()=>issue,
    joinValues: ()=>joinValues,
    jsonStringifyReplacer: ()=>jsonStringifyReplacer,
    merge: ()=>merge,
    normalizeParams: ()=>normalizeParams,
    nullish: ()=>nullish,
    numKeys: ()=>numKeys,
    omit: ()=>omit,
    optionalKeys: ()=>optionalKeys,
    partial: ()=>partial,
    pick: ()=>pick,
    prefixIssues: ()=>prefixIssues,
    primitiveTypes: ()=>primitiveTypes,
    promiseAllObject: ()=>promiseAllObject,
    propertyKeyTypes: ()=>propertyKeyTypes,
    randomString: ()=>randomString,
    required: ()=>required,
    stringifyPrimitive: ()=>stringifyPrimitive,
    unwrapMessage: ()=>unwrapMessage
});
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
    throw new Error();
}
function assert(_) {}
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v)=>typeof v === "number");
    const values = Object.entries(entries).filter(([k, _])=>numericValues.indexOf(+k) === -1).map(([_, v])=>v);
    return values;
}
function joinValues(array2, separator = "|") {
    return array2.map((val)=>stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                Object.defineProperty(this, "value", {
                    value
                });
                return value;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
function nullish(input) {
    return input === null || input === void 0;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
function defineLazy(object, key, getter) {
    const set = false;
    Object.defineProperty(object, key, {
        get () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                object[key] = value;
                return value;
            }
            //TURBOPACK unreachable
            ;
        },
        set (v) {
            Object.defineProperty(object, key, {
                value: v
            });
        },
        configurable: true
    });
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function getElementAtPath(obj, path) {
    if (!path) return obj;
    return path.reduce((acc, key)=>acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for(let i = 0; i < length; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args)=>{};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(()=>{
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    } catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false) return false;
    const ctor = o.constructor;
    if (ctor === void 0) return true;
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
var getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
var propertyKeyTypes = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
]);
var primitiveTypes = /* @__PURE__ */ new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if (params?.message !== void 0) {
        if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return `"${value}"`;
    return `${value}`;
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k)=>{
        return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
}
var NUMBER_FORMAT_RANGES = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -34028234663852886e22,
        34028234663852886e22
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};
var BIGINT_FORMAT_RANGES = {
    int64: [
        /* @__PURE__ */ BigInt("-9223372036854775808"),
        /* @__PURE__ */ BigInt("9223372036854775807")
    ],
    uint64: [
        /* @__PURE__ */ BigInt(0),
        /* @__PURE__ */ BigInt("18446744073709551615")
    ]
};
function pick(schema, mask) {
    const newShape = {};
    const currDef = schema._zod.def;
    for(const key in mask){
        if (!(key in currDef.shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key]) continue;
        newShape[key] = currDef.shape[key];
    }
    return clone(schema, {
        ...schema._zod.def,
        shape: newShape,
        checks: []
    });
}
function omit(schema, mask) {
    const newShape = {
        ...schema._zod.def.shape
    };
    const currDef = schema._zod.def;
    for(const key in mask){
        if (!(key in currDef.shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key]) continue;
        delete newShape[key];
    }
    return clone(schema, {
        ...schema._zod.def,
        shape: newShape,
        checks: []
    });
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const def = {
        ...schema._zod.def,
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape);
            return _shape;
        },
        checks: []
    };
    return clone(schema, def);
}
function merge(a, b) {
    return clone(a, {
        ...a._zod.def,
        get shape () {
            const _shape = {
                ...a._zod.def.shape,
                ...b._zod.def.shape
            };
            assignProp(this, "shape", _shape);
            return _shape;
        },
        catchall: b._zod.def.catchall,
        checks: []
    });
}
function partial(Class2, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = {
        ...oldShape
    };
    if (mask) {
        for(const key in mask){
            if (!(key in oldShape)) {
                throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key]) continue;
            shape[key] = Class2 ? new Class2({
                type: "optional",
                innerType: oldShape[key]
            }) : oldShape[key];
        }
    } else {
        for(const key in oldShape){
            shape[key] = Class2 ? new Class2({
                type: "optional",
                innerType: oldShape[key]
            }) : oldShape[key];
        }
    }
    return clone(schema, {
        ...schema._zod.def,
        shape,
        checks: []
    });
}
function required(Class2, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = {
        ...oldShape
    };
    if (mask) {
        for(const key in mask){
            if (!(key in shape)) {
                throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key]) continue;
            shape[key] = new Class2({
                type: "nonoptional",
                innerType: oldShape[key]
            });
        }
    } else {
        for(const key in oldShape){
            shape[key] = new Class2({
                type: "nonoptional",
                innerType: oldShape[key]
            });
        }
    }
    return clone(schema, {
        ...schema._zod.def,
        shape,
        // optional: [],
        checks: []
    });
}
function aborted(x, startIndex = 0) {
    for(let i = startIndex; i < x.issues.length; i++){
        if (x.issues[i]?.continue !== true) return true;
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
    const full = {
        ...iss,
        path: iss.path ?? []
    };
    if (!iss.message) {
        const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
        full.message = message;
    }
    delete full.inst;
    delete full.continue;
    if (!ctx?.reportInput) {
        delete full.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    if (input instanceof File) return "file";
    return "unknown";
}
function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
function cleanEnum(obj) {
    return Object.entries(obj).filter(([k, _])=>{
        return Number.isNaN(Number.parseInt(k, 10));
    }).map((el)=>el[1]);
}
var Class = class {
    constructor(..._args){}
};
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/errors.js
var initializer = (inst, def)=>{
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false
    });
    Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false
    });
    Object.defineProperty(inst, "message", {
        get () {
            return JSON.stringify(def, jsonStringifyReplacer, 2);
        },
        enumerable: true
    });
    Object.defineProperty(inst, "toString", {
        value: ()=>inst.message,
        enumerable: false
    });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, {
    Parent: Error
});
function flattenError(error, mapper = (issue2)=>issue2.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues){
        if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
            formErrors.push(mapper(sub));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
function formatError(error, _mapper) {
    const mapper = _mapper || function(issue2) {
        return issue2.message;
    };
    const fieldErrors = {
        _errors: []
    };
    const processError = (error2)=>{
        for (const issue2 of error2.issues){
            if (issue2.code === "invalid_union" && issue2.errors.length) {
                issue2.errors.map((issues)=>processError({
                        issues
                    }));
            } else if (issue2.code === "invalid_key") {
                processError({
                    issues: issue2.issues
                });
            } else if (issue2.code === "invalid_element") {
                processError({
                    issues: issue2.issues
                });
            } else if (issue2.path.length === 0) {
                fieldErrors._errors.push(mapper(issue2));
            } else {
                let curr = fieldErrors;
                let i = 0;
                while(i < issue2.path.length){
                    const el = issue2.path[i];
                    const terminal = i === issue2.path.length - 1;
                    if (!terminal) {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                    } else {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                        curr[el]._errors.push(mapper(issue2));
                    }
                    curr = curr[el];
                    i++;
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/parse.js
var _parse = (_Err)=>(schema, value, _ctx, _params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: false
        }) : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new $ZodAsyncError();
        }
        if (result.issues.length) {
            const e = new (_params?.Err ?? _Err)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, _params?.callee);
            throw e;
        }
        return result.value;
    };
var _parseAsync = (_Err)=>async (schema, value, _ctx, params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        if (result.issues.length) {
            const e = new (params?.Err ?? _Err)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, params?.callee);
            throw e;
        }
        return result.value;
    };
var _safeParse = (_Err)=>(schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: false
        } : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new $ZodAsyncError();
        }
        return result.issues.length ? {
            success: false,
            error: new (_Err ?? $ZodError)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
        } : {
            success: true,
            data: result.value
        };
    };
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err)=>async (schema, value, _ctx)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        return result.issues.length ? {
            success: false,
            error: new _Err(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
        } : {
            success: true,
            data: result.value
        };
    };
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def)=>{
    var _a;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a = inst._zod).onattach ?? (_a.onattach = []);
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2)=>{
        const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (def.maximum < curr) inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum) return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2)=>{
        const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (def.minimum > curr) inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum) return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length === def.length) return;
        const origin = getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...tooBig ? {
                code: "too_big",
                maximum: def.length
            } : {
                code: "too_small",
                minimum: def.length
            },
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload)=>{
        payload.value = def.tx(payload.value);
    };
});
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/doc.js
var Doc = class {
    constructor(args = []){
        this.content = [];
        this.indent = 0;
        if (this) this.args = args;
    }
    indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, {
                execution: "sync"
            });
            arg(this, {
                execution: "async"
            });
            return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x)=>x);
        const minIndent = Math.min(...lines.map((x)=>x.length - x.trimStart().length));
        const dedented = lines.map((x)=>x.slice(minIndent)).map((x)=>" ".repeat(this.indent * 2) + x);
        for (const line of dedented){
            this.content.push(line);
        }
    }
    compile() {
        const F = Function;
        const args = this?.args;
        const content = this?.content ?? [
            ``
        ];
        const lines = [
            ...content.map((x)=>`  ${x}`)
        ];
        return new F(...args, lines.join("\n"));
    }
};
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/versions.js
var version = {
    major: 4,
    minor: 0,
    patch: 0
};
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def)=>{
    var _a;
    inst ?? (inst = {});
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version;
    const checks = [
        ...inst._zod.def.checks ?? []
    ];
    if (inst._zod.traits.has("$ZodCheck")) {
        checks.unshift(inst);
    }
    for (const ch of checks){
        for (const fn of ch._zod.onattach){
            fn(inst);
        }
    }
    if (checks.length === 0) {
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred?.push(()=>{
            inst._zod.run = inst._zod.parse;
        });
    } else {
        const runChecks = (payload, checks2, ctx)=>{
            let isAborted = aborted(payload);
            let asyncResult;
            for (const ch of checks2){
                if (ch._zod.def.when) {
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun) continue;
                } else if (isAborted) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _ = ch._zod.check(payload);
                if (_ instanceof Promise && ctx?.async === false) {
                    throw new $ZodAsyncError();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult ?? Promise.resolve()).then(async ()=>{
                        await _;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen) return;
                        if (!isAborted) isAborted = aborted(payload, currLen);
                    });
                } else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen) continue;
                    if (!isAborted) isAborted = aborted(payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(()=>{
                    return payload;
                });
            }
            return payload;
        };
        inst._zod.run = (payload, ctx)=>{
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false) throw new $ZodAsyncError();
                return result.then((result2)=>runChecks(result2, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
    inst["~standard"] = {
        validate: (value)=>{
            try {
                const r = safeParse(inst, value);
                return r.success ? {
                    value: r.data
                } : {
                    issues: r.error?.issues
                };
            } catch (_) {
                return safeParseAsync(inst, value).then((r)=>r.success ? {
                        value: r.data
                    } : {
                        issues: r.error?.issues
                    });
            }
        },
        vendor: "zod",
        version: 1
    };
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for(let i = 0; i < input.length; i++){
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result2)=>handleArrayResult(result2, payload, i)));
            } else {
                handleArrayResult(result, payload, i);
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload;
    };
});
function handleObjectResult(result, final, key) {
    if (result.issues.length) {
        final.issues.push(...prefixIssues(key, result.issues));
    }
    final.value[key] = result.value;
}
function handleOptionalObjectResult(result, final, key, input) {
    if (result.issues.length) {
        if (input[key] === void 0) {
            if (key in input) {
                final.value[key] = void 0;
            } else {
                final.value[key] = result.value;
            }
        } else {
            final.issues.push(...prefixIssues(key, result.issues));
        }
    } else if (result.value === void 0) {
        if (key in input) final.value[key] = void 0;
    } else {
        final.value[key] = result.value;
    }
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def)=>{
    $ZodType.init(inst, def);
    const _normalized = cached(()=>{
        const keys = Object.keys(def.shape);
        for (const k of keys){
            if (!(def.shape[k] instanceof $ZodType)) {
                throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
            }
        }
        const okeys = optionalKeys(def.shape);
        return {
            shape: def.shape,
            keys,
            keySet: new Set(keys),
            numKeys: keys.length,
            optionalKeys: new Set(okeys)
        };
    });
    defineLazy(inst._zod, "propValues", ()=>{
        const shape = def.shape;
        const propValues = {};
        for(const key in shape){
            const field = shape[key]._zod;
            if (field.values) {
                propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
                for (const v of field.values)propValues[key].add(v);
            }
        }
        return propValues;
    });
    const generateFastpass = (shape)=>{
        const doc = new Doc([
            "shape",
            "payload",
            "ctx"
        ]);
        const normalized = _normalized.value;
        const parseStr = (key)=>{
            const k = esc(key);
            return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        };
        doc.write(`const input = payload.value;`);
        const ids = /* @__PURE__ */ Object.create(null);
        let counter = 0;
        for (const key of normalized.keys){
            ids[key] = `key_${counter++}`;
        }
        doc.write(`const newResult = {}`);
        for (const key of normalized.keys){
            if (normalized.optionalKeys.has(key)) {
                const id = ids[key];
                doc.write(`const ${id} = ${parseStr(key)};`);
                const k = esc(key);
                doc.write(`
        if (${id}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${id}.value;
        }
        `);
            } else {
                const id = ids[key];
                doc.write(`const ${id} = ${parseStr(key)};`);
                doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc(key)}, ...iss.path] : [${esc(key)}]
          })));`);
                doc.write(`newResult[${esc(key)}] = ${id}.value`);
            }
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        const fn = doc.compile();
        return (payload, ctx)=>fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject2 = isObject;
    const jit = !globalConfig.jitless;
    const allowsEval2 = allowsEval;
    const fastEnabled = jit && allowsEval2.value;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx)=>{
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject2(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
            if (!fastpass) fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
        } else {
            payload.value = {};
            const shape = value.shape;
            for (const key of value.keys){
                const el = shape[key];
                const r = el._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
                if (r instanceof Promise) {
                    proms.push(r.then((r2)=>isOptional ? handleOptionalObjectResult(r2, payload, key, input) : handleObjectResult(r2, payload, key)));
                } else if (isOptional) {
                    handleOptionalObjectResult(r, payload, key, input);
                } else {
                    handleObjectResult(r, payload, key);
                }
            }
        }
        if (!catchall) {
            return proms.length ? Promise.all(proms).then(()=>payload) : payload;
        }
        const unrecognized = [];
        const keySet = value.keySet;
        const _catchall = catchall._zod;
        const t = _catchall.def.type;
        for (const key of Object.keys(input)){
            if (keySet.has(key)) continue;
            if (t === "never") {
                unrecognized.push(key);
                continue;
            }
            const r = _catchall.run({
                value: input[key],
                issues: []
            }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r2)=>handleObjectResult(r2, payload, key)));
            } else {
                handleObjectResult(r, payload, key);
            }
        }
        if (unrecognized.length) {
            payload.issues.push({
                code: "unrecognized_keys",
                keys: unrecognized,
                input,
                inst
            });
        }
        if (!proms.length) return payload;
        return Promise.all(proms).then(()=>{
            return payload;
        });
    };
});
function handleUnionResults(results, final, inst, ctx) {
    for (const result of results){
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result)=>result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
    });
    return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", ()=>def.options.some((o)=>o._zod.optin === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "optout", ()=>def.options.some((o)=>o._zod.optout === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "values", ()=>{
        if (def.options.every((o)=>o._zod.values)) {
            return new Set(def.options.flatMap((option)=>Array.from(option._zod.values)));
        }
        return void 0;
    });
    defineLazy(inst._zod, "pattern", ()=>{
        if (def.options.every((o)=>o._zod.pattern)) {
            const patterns = def.options.map((o)=>o._zod.pattern);
            return new RegExp(`^(${patterns.map((p)=>cleanRegex(p.source)).join("|")})$`);
        }
        return void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        let async = false;
        const results = [];
        for (const option of def.options){
            const result = option._zod.run({
                value: payload.value,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            } else {
                if (result.issues.length === 0) return result;
                results.push(result);
            }
        }
        if (!async) return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results2)=>{
            return handleUnionResults(results2, payload, inst, ctx);
        });
    };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        const left = def.left._zod.run({
            value: input,
            issues: []
        }, ctx);
        const right = def.right._zod.run({
            value: input,
            issues: []
        }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([
                left,
                right
            ]).then(([left2, right2])=>{
                return handleIntersectionResults(payload, left2, right2);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
function mergeValues(a, b) {
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    }
    if (isPlainObject(a) && isPlainObject(b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        key,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return {
                valid: false,
                mergeErrorPath: []
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        index,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    }
    return {
        valid: false,
        mergeErrorPath: []
    };
}
function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
        result.issues.push(...left.issues);
    }
    if (right.issues.length) {
        result.issues.push(...right.issues);
    }
    if (aborted(result)) return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
        throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def)=>{
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    inst._zod.values = new Set(values);
    inst._zod.pattern = new RegExp(`^(${values.filter((k)=>propertyKeyTypes.has(typeof k)).map((o)=>typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst
        });
        return payload;
    };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const _out = def.transform(payload.value, payload);
        if (_ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output2)=>{
                payload.value = output2;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new $ZodAsyncError();
        }
        payload.value = _out;
        return payload;
    };
});
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", ()=>{
        return def.innerType._zod.values ? /* @__PURE__ */ new Set([
            ...def.innerType._zod.values,
            void 0
        ]) : void 0;
    });
    defineLazy(inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (def.innerType._zod.optin === "optional") {
            return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === void 0) {
            return payload;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", ()=>def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", ()=>def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
    });
    defineLazy(inst._zod, "values", ()=>{
        return def.innerType._zod.values ? /* @__PURE__ */ new Set([
            ...def.innerType._zod.values,
            null
        ]) : void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === null) return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === void 0) {
            payload.value = def.defaultValue;
            return payload;
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result2)=>handleDefaultResult(result2, def));
        }
        return handleDefaultResult(result, def);
    };
});
function handleDefaultResult(payload, def) {
    if (payload.value === void 0) {
        payload.value = def.defaultValue;
    }
    return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === void 0) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", ()=>{
        const v = def.innerType._zod.values;
        return v ? new Set([
            ...v
        ].filter((x)=>x !== void 0)) : void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result2)=>handleNonOptionalResult(result2, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === void 0) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst
        });
    }
    return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "optout", ()=>def.innerType._zod.optout);
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result2)=>{
                payload.value = result2.value;
                if (result2.issues.length) {
                    payload.value = def.catchValue({
                        ...payload,
                        error: {
                            issues: result2.issues.map((iss)=>finalizeIssue(iss, ctx, config()))
                        },
                        input: payload.value
                    });
                    payload.issues = [];
                }
                return payload;
            });
        }
        payload.value = result.value;
        if (result.issues.length) {
            payload.value = def.catchValue({
                ...payload,
                error: {
                    issues: result.issues.map((iss)=>finalizeIssue(iss, ctx, config()))
                },
                input: payload.value
            });
            payload.issues = [];
        }
        return payload;
    };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", ()=>def.in._zod.values);
    defineLazy(inst._zod, "optin", ()=>def.in._zod.optin);
    defineLazy(inst._zod, "optout", ()=>def.out._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left2)=>handlePipeResult(left2, def, ctx));
        }
        return handlePipeResult(left, def, ctx);
    };
});
function handlePipeResult(left, def, ctx) {
    if (aborted(left)) {
        return left;
    }
    return def.out._zod.run({
        value: left.value,
        issues: left.issues
    }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", ()=>def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    defineLazy(inst._zod, "optin", ()=>def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", ()=>def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
}
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def)=>{
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _)=>{
        return payload;
    };
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r2)=>handleRefineResult(r2, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});
function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        const _iss = {
            code: "custom",
            input,
            inst,
            // incorporates params.error into issue reporting
            path: [
                ...inst._zod.def.path ?? []
            ],
            // incorporates params.error into issue reporting
            continue: !inst._zod.def.abort
        };
        if (inst._zod.def.params) _iss.params = inst._zod.def.params;
        payload.issues.push(issue(_iss));
    }
}
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/registries.js
var $output = Symbol("ZodOutput");
var $input = Symbol("ZodInput");
var $ZodRegistry = class {
    constructor(){
        this._map = /* @__PURE__ */ new Map();
        this._idmap = /* @__PURE__ */ new Map();
    }
    add(schema, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            if (this._idmap.has(meta.id)) {
                throw new Error(`ID ${meta.id} already exists in the registry`);
            }
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = /* @__PURE__ */ new Map();
        this._idmap = /* @__PURE__ */ new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        const p = schema._zod.parent;
        if (p) {
            const pm = {
                ...this.get(p) ?? {}
            };
            delete pm.id;
            return {
                ...pm,
                ...this._map.get(schema)
            };
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
};
function registry() {
    return new $ZodRegistry();
}
var globalRegistry = /* @__PURE__ */ registry();
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/core/api.js
function _unknown(Class2) {
    return new Class2({
        type: "unknown"
    });
}
function _never(Class2, params) {
    return new Class2({
        type: "never",
        ...normalizeParams(params)
    });
}
function _maxLength(maximum, params) {
    const ch = new $ZodCheckMaxLength({
        check: "max_length",
        ...normalizeParams(params),
        maximum
    });
    return ch;
}
function _minLength(minimum, params) {
    return new $ZodCheckMinLength({
        check: "min_length",
        ...normalizeParams(params),
        minimum
    });
}
function _length(length, params) {
    return new $ZodCheckLengthEquals({
        check: "length_equals",
        ...normalizeParams(params),
        length
    });
}
function _overwrite(tx) {
    return new $ZodCheckOverwrite({
        check: "overwrite",
        tx
    });
}
function _array(Class2, element, params) {
    return new Class2({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...normalizeParams(params)
    });
}
function _refine(Class2, fn, _params) {
    const schema = new Class2({
        type: "custom",
        check: "custom",
        fn,
        ...normalizeParams(_params)
    });
    return schema;
}
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues)=>{
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
        format: {
            value: (mapper)=>formatError(inst, mapper)
        },
        flatten: {
            value: (mapper)=>flattenError(inst, mapper)
        },
        addIssue: {
            value: (issue2)=>inst.issues.push(issue2)
        },
        addIssues: {
            value: (issues2)=>inst.issues.push(...issues2)
        },
        isEmpty: {
            get () {
                return inst.issues.length === 0;
            }
        }
    });
};
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
    Parent: Error
});
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
// node_modules/.pnpm/zod@4.0.1/node_modules/zod/v4/classic/schemas.js
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def)=>{
    $ZodType.init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", {
        value: def
    });
    inst.check = (...checks)=>{
        return inst.clone({
            ...def,
            checks: [
                ...def.checks ?? [],
                ...checks.map((ch)=>typeof ch === "function" ? {
                        _zod: {
                            check: ch,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : ch)
            ]
        });
    };
    inst.clone = (def2, params)=>clone(inst, def2, params);
    inst.brand = ()=>inst;
    inst.register = (reg, meta)=>{
        reg.add(inst, meta);
        return inst;
    };
    inst.parse = (data, params)=>parse(inst, data, params, {
            callee: inst.parse
        });
    inst.safeParse = (data, params)=>safeParse2(inst, data, params);
    inst.parseAsync = async (data, params)=>parseAsync(inst, data, params, {
            callee: inst.parseAsync
        });
    inst.safeParseAsync = async (data, params)=>safeParseAsync2(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.refine = (check2, params)=>inst.check(refine(check2, params));
    inst.superRefine = (refinement)=>inst.check(superRefine(refinement));
    inst.overwrite = (fn)=>inst.check(_overwrite(fn));
    inst.optional = ()=>optional(inst);
    inst.nullable = ()=>nullable(inst);
    inst.nullish = ()=>optional(nullable(inst));
    inst.nonoptional = (params)=>nonoptional(inst, params);
    inst.array = ()=>array(inst);
    inst.or = (arg)=>union([
            inst,
            arg
        ]);
    inst.and = (arg)=>intersection(inst, arg);
    inst.transform = (tx)=>pipe(inst, transform(tx));
    inst.default = (def2)=>_default(inst, def2);
    inst.prefault = (def2)=>prefault(inst, def2);
    inst.catch = (params)=>_catch(inst, params);
    inst.pipe = (target)=>pipe(inst, target);
    inst.readonly = ()=>readonly(inst);
    inst.describe = (description)=>{
        const cl = inst.clone();
        globalRegistry.add(cl, {
            description
        });
        return cl;
    };
    Object.defineProperty(inst, "description", {
        get () {
            return globalRegistry.get(inst)?.description;
        },
        configurable: true
    });
    inst.meta = (...args)=>{
        if (args.length === 0) {
            return globalRegistry.get(inst);
        }
        const cl = inst.clone();
        globalRegistry.add(cl, args[0]);
        return cl;
    };
    inst.isOptional = ()=>inst.safeParse(void 0).success;
    inst.isNullable = ()=>inst.safeParse(null).success;
    return inst;
});
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def)=>{
    $ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
});
function unknown() {
    return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def)=>{
    $ZodNever.init(inst, def);
    ZodType.init(inst, def);
});
function never(params) {
    return _never(ZodNever, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def)=>{
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params)=>inst.check(_minLength(minLength, params));
    inst.nonempty = (params)=>inst.check(_minLength(1, params));
    inst.max = (maxLength, params)=>inst.check(_maxLength(maxLength, params));
    inst.length = (len, params)=>inst.check(_length(len, params));
    inst.unwrap = ()=>inst.element;
});
function array(element, params) {
    return _array(ZodArray, element, params);
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def)=>{
    $ZodObject.init(inst, def);
    ZodType.init(inst, def);
    util_exports.defineLazy(inst, "shape", ()=>def.shape);
    inst.keyof = ()=>_enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall)=>inst.clone({
            ...inst._zod.def,
            catchall
        });
    inst.passthrough = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.loose = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.strict = ()=>inst.clone({
            ...inst._zod.def,
            catchall: never()
        });
    inst.strip = ()=>inst.clone({
            ...inst._zod.def,
            catchall: void 0
        });
    inst.extend = (incoming)=>{
        return util_exports.extend(inst, incoming);
    };
    inst.merge = (other)=>util_exports.merge(inst, other);
    inst.pick = (mask)=>util_exports.pick(inst, mask);
    inst.omit = (mask)=>util_exports.omit(inst, mask);
    inst.partial = (...args)=>util_exports.partial(ZodOptional, inst, args[0]);
    inst.required = (...args)=>util_exports.required(ZodNonOptional, inst, args[0]);
});
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def)=>{
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst.options = def.options;
});
function union(options, params) {
    return new ZodUnion({
        type: "union",
        options,
        ...util_exports.normalizeParams(params)
    });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def)=>{
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
});
function intersection(left, right) {
    return new ZodIntersection({
        type: "intersection",
        left,
        right
    });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def)=>{
    $ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params)=>{
        const newEntries = {};
        for (const value of values){
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            } else throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...util_exports.normalizeParams(params),
            entries: newEntries
        });
    };
    inst.exclude = (values, params)=>{
        const newEntries = {
            ...def.entries
        };
        for (const value of values){
            if (keys.has(value)) {
                delete newEntries[value];
            } else throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...util_exports.normalizeParams(params),
            entries: newEntries
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v)=>[
            v,
            v
        ])) : values;
    return new ZodEnum({
        type: "enum",
        entries,
        ...util_exports.normalizeParams(params)
    });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def)=>{
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.addIssue = (issue2)=>{
            if (typeof issue2 === "string") {
                payload.issues.push(util_exports.issue(issue2, payload.value, def));
            } else {
                const _issue = issue2;
                if (_issue.fatal) _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = inst);
                _issue.continue ?? (_issue.continue = true);
                payload.issues.push(util_exports.issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output2)=>{
                payload.value = output2;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn
    });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def)=>{
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function optional(innerType) {
    return new ZodOptional({
        type: "optional",
        innerType
    });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def)=>{
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function nullable(innerType) {
    return new ZodNullable({
        type: "nullable",
        innerType
    });
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def)=>{
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
    return new ZodDefault({
        type: "default",
        innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def)=>{
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def)=>{
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType,
        ...util_exports.normalizeParams(params)
    });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def)=>{
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new ZodCatch({
        type: "catch",
        innerType,
        catchValue: typeof catchValue === "function" ? catchValue : ()=>catchValue
    });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def)=>{
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out
    });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def)=>{
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
});
function readonly(innerType) {
    return new ZodReadonly({
        type: "readonly",
        innerType
    });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def)=>{
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
});
function check(fn) {
    const ch = new $ZodCheck({
        check: "custom"
    });
    ch._zod.check = fn;
    return ch;
}
function refine(fn, _params = {}) {
    return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
    const ch = check((payload)=>{
        payload.addIssue = (issue2)=>{
            if (typeof issue2 === "string") {
                payload.issues.push(util_exports.issue(issue2, payload.value, ch._zod.def));
            } else {
                const _issue = issue2;
                if (_issue.fatal) _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = ch);
                _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
                payload.issues.push(util_exports.issue(_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
// src/openapi.ts
var paths = {};
function getTypeFromZodType(zodType) {
    switch(zodType.constructor.name){
        case "ZodString":
            return "string";
        case "ZodNumber":
            return "number";
        case "ZodBoolean":
            return "boolean";
        case "ZodObject":
            return "object";
        case "ZodArray":
            return "array";
        default:
            return "string";
    }
}
function getParameters(options) {
    const parameters = [];
    if (options.metadata?.openapi?.parameters) {
        parameters.push(...options.metadata.openapi.parameters);
        return parameters;
    }
    if (options.query instanceof ZodObject) {
        Object.entries(options.query.shape).forEach(([key, value])=>{
            if (value instanceof ZodObject) {
                parameters.push({
                    name: key,
                    in: "query",
                    schema: {
                        type: getTypeFromZodType(value),
                        ..."minLength" in value && value.minLength ? {
                            minLength: value.minLength
                        } : {},
                        description: value.description
                    }
                });
            }
        });
    }
    return parameters;
}
function getRequestBody(options) {
    if (options.metadata?.openapi?.requestBody) {
        return options.metadata.openapi.requestBody;
    }
    if (!options.body) return void 0;
    if (options.body instanceof ZodObject || options.body instanceof ZodOptional) {
        const shape = options.body.shape;
        if (!shape) return void 0;
        const properties = {};
        const required2 = [];
        Object.entries(shape).forEach(([key, value])=>{
            if (value instanceof ZodObject) {
                properties[key] = {
                    type: getTypeFromZodType(value),
                    description: value.description
                };
                if (!(value instanceof ZodOptional)) {
                    required2.push(key);
                }
            }
        });
        return {
            required: options.body instanceof ZodOptional ? false : options.body ? true : false,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties,
                        required: required2
                    }
                }
            }
        };
    }
    return void 0;
}
function getResponse(responses) {
    return {
        "400": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        },
                        required: [
                            "message"
                        ]
                    }
                }
            },
            description: "Bad Request. Usually due to missing parameters, or invalid parameters."
        },
        "401": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        },
                        required: [
                            "message"
                        ]
                    }
                }
            },
            description: "Unauthorized. Due to missing or invalid authentication."
        },
        "403": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Forbidden. You do not have permission to access this resource or to perform this action."
        },
        "404": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Not Found. The requested resource was not found."
        },
        "429": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Too Many Requests. You have exceeded the rate limit. Try again later."
        },
        "500": {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            description: "Internal Server Error. This is a problem with the server that you cannot fix."
        },
        ...responses
    };
}
async function generator(endpoints, config2) {
    const components = {
        schemas: {}
    };
    Object.entries(endpoints).forEach(([_, value])=>{
        const options = value.options;
        if (options.metadata?.SERVER_ONLY) return;
        if (options.method === "GET") {
            paths[value.path] = {
                get: {
                    tags: [
                        "Default",
                        ...options.metadata?.openapi?.tags || []
                    ],
                    description: options.metadata?.openapi?.description,
                    operationId: options.metadata?.openapi?.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options),
                    responses: getResponse(options.metadata?.openapi?.responses)
                }
            };
        }
        if (options.method === "POST") {
            const body = getRequestBody(options);
            paths[value.path] = {
                post: {
                    tags: [
                        "Default",
                        ...options.metadata?.openapi?.tags || []
                    ],
                    description: options.metadata?.openapi?.description,
                    operationId: options.metadata?.openapi?.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options),
                    ...body ? {
                        requestBody: body
                    } : {
                        requestBody: {
                            //set body none
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {}
                                    }
                                }
                            }
                        }
                    },
                    responses: getResponse(options.metadata?.openapi?.responses)
                }
            };
        }
    });
    const res = {
        openapi: "3.1.1",
        info: {
            title: "Better Auth",
            description: "API Reference for your Better Auth Instance",
            version: "1.1.0"
        },
        components,
        security: [
            {
                apiKeyCookie: []
            }
        ],
        servers: [
            {
                url: config2?.url
            }
        ],
        tags: [
            {
                name: "Default",
                description: "Default endpoints that are included with Better Auth by default. These endpoints are not part of any plugin."
            }
        ],
        paths
    };
    return res;
}
var getHTML = (apiReference, config2)=>`<!doctype html>
<html>
  <head>
    <title>Scalar API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <script
      id="api-reference"
      type="application/json">
    ${JSON.stringify(apiReference)}
    </script>
	 <script>
      var configuration = {
	  	favicon: ${config2?.logo ? `data:image/svg+xml;utf8,${encodeURIComponent(config2.logo)}` : void 0} ,
	   	theme: ${config2?.theme || "saturn"},
        metaData: {
			title: ${config2?.title || "Open API Reference"},
			description: ${config2?.description || "Better Call Open API"},
		}
      }
      document.getElementById('api-reference').dataset.configuration =
        JSON.stringify(configuration)
    </script>
	  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
  </body>
</html>`;
// src/router.ts
var createRouter = (endpoints, config2)=>{
    if (!config2?.openapi?.disabled) {
        const openapi = {
            path: "/api/reference",
            ...config2?.openapi
        };
        endpoints["openapi"] = createEndpoint2(openapi.path, {
            method: "GET"
        }, async (c)=>{
            const schema = await generator(endpoints);
            return new Response(getHTML(schema, openapi.scalar), {
                headers: {
                    "Content-Type": "text/html"
                }
            });
        });
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRouter"])();
    const middlewareRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRouter"])();
    for (const endpoint of Object.values(endpoints)){
        if (!endpoint.options) {
            continue;
        }
        if (endpoint.options?.metadata?.SERVER_ONLY) continue;
        const methods = Array.isArray(endpoint.options?.method) ? endpoint.options.method : [
            endpoint.options?.method
        ];
        for (const method of methods){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRoute"])(router, method, endpoint.path, endpoint);
        }
    }
    if (config2?.routerMiddleware?.length) {
        for (const { path, middleware } of config2.routerMiddleware){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRoute"])(middlewareRouter, "*", path, middleware);
        }
    }
    const processRequest = async (request)=>{
        const url = new URL(request.url);
        const path = config2?.basePath ? url.pathname.split(config2.basePath).reduce((acc, curr, index)=>{
            if (index !== 0) {
                if (index > 1) {
                    acc.push(`${config2.basePath}${curr}`);
                } else {
                    acc.push(curr);
                }
            }
            return acc;
        }, []).join("") : url.pathname;
        if (!path?.length) {
            return new Response(null, {
                status: 404,
                statusText: "Not Found"
            });
        }
        const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findRoute"])(router, request.method, path);
        if (!route?.data) {
            return new Response(null, {
                status: 404,
                statusText: "Not Found"
            });
        }
        const query = {};
        url.searchParams.forEach((value, key)=>{
            if (key in query) {
                if (Array.isArray(query[key])) {
                    query[key].push(value);
                } else {
                    query[key] = [
                        query[key],
                        value
                    ];
                }
            } else {
                query[key] = value;
            }
        });
        const handler = route.data;
        const context = {
            path,
            method: request.method,
            headers: request.headers,
            params: route.params ? JSON.parse(JSON.stringify(route.params)) : {},
            request,
            body: handler.options.disableBody ? void 0 : await getBody(handler.options.cloneRequest ? request.clone() : request),
            query,
            _flag: "router",
            asResponse: true,
            context: config2?.routerContext
        };
        try {
            const middlewareRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findAllRoutes"])(middlewareRouter, "*", path);
            if (middlewareRoutes?.length) {
                for (const { data: middleware, params } of middlewareRoutes){
                    const res = await middleware({
                        ...context,
                        params,
                        asResponse: false
                    });
                    if (res instanceof Response) return res;
                }
            }
            const response = await handler(context);
            return response;
        } catch (error) {
            if (config2?.onError) {
                try {
                    const errorResponse = await config2.onError(error);
                    if (errorResponse instanceof Response) {
                        return toResponse(errorResponse);
                    }
                } catch (error2) {
                    if (isAPIError(error2)) {
                        return toResponse(error2);
                    }
                    throw error2;
                }
            }
            if (config2?.throwError) {
                throw error;
            }
            if (isAPIError(error)) {
                return toResponse(error);
            }
            console.error(`# SERVER_ERROR: `, error);
            return new Response(null, {
                status: 500,
                statusText: "Internal Server Error"
            });
        }
    };
    return {
        handler: async (request)=>{
            const onReq = await config2?.onRequest?.(request);
            if (onReq instanceof Response) {
                return onReq;
            }
            const req = onReq instanceof Request ? onReq : request;
            const res = await processRequest(req);
            const onRes = await config2?.onResponse?.(res);
            if (onRes instanceof Response) {
                return onRes;
            }
            return res;
        },
        endpoints
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/defu/dist/defu.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefu",
    ()=>createDefu,
    "default",
    ()=>defu,
    "defu",
    ()=>defu,
    "defuArrayFn",
    ()=>defuArrayFn,
    "defuFn",
    ()=>defuFn
]);
function isPlainObject(value) {
    if (value === null || typeof value !== "object") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
        return false;
    }
    if (Symbol.iterator in value) {
        return false;
    }
    if (Symbol.toStringTag in value) {
        return Object.prototype.toString.call(value) === "[object Module]";
    }
    return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
    if (!isPlainObject(defaults)) {
        return _defu(baseObject, {}, namespace, merger);
    }
    const object = Object.assign({}, defaults);
    for(const key in baseObject){
        if (key === "__proto__" || key === "constructor") {
            continue;
        }
        const value = baseObject[key];
        if (value === null || value === void 0) {
            continue;
        }
        if (merger && merger(object, key, value, namespace)) {
            continue;
        }
        if (Array.isArray(value) && Array.isArray(object[key])) {
            object[key] = [
                ...value,
                ...object[key]
            ];
        } else if (isPlainObject(value) && isPlainObject(object[key])) {
            object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
        } else {
            object[key] = value;
        }
    }
    return object;
}
function createDefu(merger) {
    return (...arguments_)=>// eslint-disable-next-line unicorn/no-array-reduce
        arguments_.reduce((p, c)=>_defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue)=>{
    if (object[key] !== void 0 && typeof currentValue === "function") {
        object[key] = currentValue(object[key]);
        return true;
    }
});
const defuArrayFn = createDefu((object, key, currentValue)=>{
    if (Array.isArray(object[key]) && typeof currentValue === "function") {
        object[key] = currentValue(object[key]);
        return true;
    }
});
;
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */ /** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */ __turbopack_context__.s([
    "abool",
    ()=>abool,
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "bytesToHex",
    ()=>bytesToHex,
    "bytesToNumberBE",
    ()=>bytesToNumberBE,
    "bytesToUtf8",
    ()=>bytesToUtf8,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "complexOverlapBytes",
    ()=>complexOverlapBytes,
    "concatBytes",
    ()=>concatBytes,
    "copyBytes",
    ()=>copyBytes,
    "createView",
    ()=>createView,
    "equalBytes",
    ()=>equalBytes,
    "getOutput",
    ()=>getOutput,
    "hexToBytes",
    ()=>hexToBytes,
    "hexToNumber",
    ()=>hexToNumber,
    "isAligned32",
    ()=>isAligned32,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "managedNonce",
    ()=>managedNonce,
    "numberToBytesBE",
    ()=>numberToBytesBE,
    "overlapBytes",
    ()=>overlapBytes,
    "randomBytes",
    ()=>randomBytes,
    "u32",
    ()=>u32,
    "u64Lengths",
    ()=>u64Lengths,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "wrapCipher",
    ()=>wrapCipher
]);
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function abool(b) {
    if (typeof b !== 'boolean') throw new Error(`boolean expected, not ${b}`);
}
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function abytes(value, length, title = '') {
    const bytes = isBytes(value);
    const len = value?.length;
    const needsLen = length !== undefined;
    if (!bytes || needsLen && len !== length) {
        const prefix = title && `"${title}" `;
        const ofLen = needsLen ? ` of length ${length}` : '';
        const got = bytes ? `length=${len}` : `type=${typeof value}`;
        throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
    }
    return value;
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'output');
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    return BigInt(hex === '' ? '0' : '0x' + hex); // Big Endian
}
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
function overlapBytes(a, b) {
    return a.buffer === b.buffer && // best we can do, may fail with an obscure Proxy
    a.byteOffset < b.byteOffset + b.byteLength && // a starts before b end
    b.byteOffset < a.byteOffset + a.byteLength // b starts before a end
    ;
}
function complexOverlapBytes(input, output) {
    // This is very cursed. It works somehow, but I'm completely unsure,
    // reasoning about overlapping aligned windows is very hard.
    if (overlapBytes(input, output) && input.byteOffset < output.byteOffset) throw new Error('complex overlap of input and output is not supported');
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts == null || typeof opts !== 'object') throw new Error('options must be defined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function equalBytes(a, b) {
    if (a.length !== b.length) return false;
    let diff = 0;
    for(let i = 0; i < a.length; i++)diff |= a[i] ^ b[i];
    return diff === 0;
}
const wrapCipher = (params, constructor)=>{
    function wrappedCipher(key, ...args) {
        // Validate key
        abytes(key, undefined, 'key');
        // Big-Endian hardware is rare. Just in case someone still decides to run ciphers:
        if (!isLE) throw new Error('Non little-endian hardware is not yet supported');
        // Validate nonce if nonceLength is present
        if (params.nonceLength !== undefined) {
            const nonce = args[0];
            abytes(nonce, params.varSizeNonce ? undefined : params.nonceLength, 'nonce');
        }
        // Validate AAD if tagLength present
        const tagl = params.tagLength;
        if (tagl && args[1] !== undefined) abytes(args[1], undefined, 'AAD');
        const cipher = constructor(key, ...args);
        const checkOutput = (fnLength, output)=>{
            if (output !== undefined) {
                if (fnLength !== 2) throw new Error('cipher output not supported');
                abytes(output, undefined, 'output');
            }
        };
        // Create wrapped cipher with validation and single-use encryption
        let called = false;
        const wrCipher = {
            encrypt (data, output) {
                if (called) throw new Error('cannot encrypt() twice with same key + nonce');
                called = true;
                abytes(data);
                checkOutput(cipher.encrypt.length, output);
                return cipher.encrypt(data, output);
            },
            decrypt (data, output) {
                abytes(data);
                if (tagl && data.length < tagl) throw new Error('"ciphertext" expected length bigger than tagLength=' + tagl);
                checkOutput(cipher.decrypt.length, output);
                return cipher.decrypt(data, output);
            }
        };
        return wrCipher;
    }
    Object.assign(wrappedCipher, params);
    return wrappedCipher;
};
function getOutput(expectedLength, out, onlyAligned = true) {
    if (out === undefined) return new Uint8Array(expectedLength);
    if (out.length !== expectedLength) throw new Error('"output" expected Uint8Array of length ' + expectedLength + ', got: ' + out.length);
    if (onlyAligned && !isAligned32(out)) throw new Error('invalid output, must be aligned');
    return out;
}
function u64Lengths(dataLength, aadLength, isLE) {
    abool(isLE);
    const num = new Uint8Array(16);
    const view = createView(num);
    view.setBigUint64(0, BigInt(aadLength), isLE);
    view.setBigUint64(8, BigInt(dataLength), isLE);
    return num;
}
function isAligned32(bytes) {
    return bytes.byteOffset % 4 === 0;
}
function copyBytes(bytes) {
    return Uint8Array.from(bytes);
}
function randomBytes(bytesLength = 32) {
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
function managedNonce(fn, randomBytes_ = randomBytes) {
    const { nonceLength } = fn;
    anumber(nonceLength);
    const addNonce = (nonce, ciphertext)=>{
        const out = concatBytes(nonce, ciphertext);
        ciphertext.fill(0);
        return out;
    };
    // NOTE: we cannot support DST here, it would be mistake:
    // - we don't know how much dst length cipher requires
    // - nonce may unalign dst and break everything
    // - we create new u8a anyway (concatBytes)
    // - previously we passed all args to cipher, but that was mistake!
    return (key, ...args)=>({
            encrypt (plaintext) {
                abytes(plaintext);
                const nonce = randomBytes_(nonceLength);
                const encrypted = fn(key, nonce, ...args).encrypt(plaintext);
                // @ts-ignore
                if (encrypted instanceof Promise) return encrypted.then((ct)=>addNonce(nonce, ct));
                return addNonce(nonce, encrypted);
            },
            decrypt (ciphertext) {
                abytes(ciphertext);
                const nonce = ciphertext.subarray(0, nonceLength);
                const decrypted = ciphertext.subarray(nonceLength);
                return fn(key, nonce, ...args).decrypt(decrypted);
            }
        });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_arx.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Basic utils for ARX (add-rotate-xor) salsa and chacha ciphers.

RFC8439 requires multi-step cipher stream, where
authKey starts with counter: 0, actual msg with counter: 1.

For this, we need a way to re-use nonce / counter:

    const counter = new Uint8Array(4);
    chacha(..., counter, ...); // counter is now 1
    chacha(..., counter, ...); // counter is now 2

This is complicated:

- 32-bit counters are enough, no need for 64-bit: max ArrayBuffer size in JS is 4GB
- Original papers don't allow mutating counters
- Counter overflow is undefined [^1]
- Idea A: allow providing (nonce | counter) instead of just nonce, re-use it
- Caveat: Cannot be re-used through all cases:
- * chacha has (counter | nonce)
- * xchacha has (nonce16 | counter | nonce16)
- Idea B: separate nonce / counter and provide separate API for counter re-use
- Caveat: there are different counter sizes depending on an algorithm.
- salsa & chacha also differ in structures of key & sigma:
  salsa20:      s[0] | k(4) | s[1] | nonce(2) | cnt(2) | s[2] | k(4) | s[3]
  chacha:       s(4) | k(8) | cnt(1) | nonce(3)
  chacha20orig: s(4) | k(8) | cnt(2) | nonce(2)
- Idea C: helper method such as `setSalsaState(key, nonce, sigma, data)`
- Caveat: we can't re-use counter array

xchacha [^2] uses the subkey and remaining 8 byte nonce with ChaCha20 as normal
(prefixed by 4 NUL bytes, since [RFC8439] specifies a 12-byte nonce).

[^1]: https://mailarchive.ietf.org/arch/msg/cfrg/gsOnTJzcbgG6OqD8Sc0GO5aR_tU/
[^2]: https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha#appendix-A.2

 * @module
 */ __turbopack_context__.s([
    "_XorStreamPRG",
    ()=>_XorStreamPRG,
    "createCipher",
    ()=>createCipher,
    "createPRG",
    ()=>createPRG,
    "rotl",
    ()=>rotl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-rsc] (ecmascript)");
;
// Replaces `TextEncoder`, which is not available in all environments
const encodeStr = (str)=>Uint8Array.from(str.split(''), (c)=>c.charCodeAt(0));
const sigma16 = encodeStr('expand 16-byte k');
const sigma32 = encodeStr('expand 32-byte k');
const sigma16_32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(sigma16);
const sigma32_32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(sigma32);
function rotl(a, b) {
    return a << b | a >>> 32 - b;
}
// Is byte array aligned to 4 byte offset (u32)?
function isAligned32(b) {
    return b.byteOffset % 4 === 0;
}
// Salsa and Chacha block length is always 512-bit
const BLOCK_LEN = 64;
const BLOCK_LEN32 = 16;
// new Uint32Array([2**32])   // => Uint32Array(1) [ 0 ]
// new Uint32Array([2**32-1]) // => Uint32Array(1) [ 4294967295 ]
const MAX_COUNTER = 2 ** 32 - 1;
const U32_EMPTY = Uint32Array.of();
function runCipher(core, sigma, key, nonce, data, output, counter, rounds) {
    const len = data.length;
    const block = new Uint8Array(BLOCK_LEN);
    const b32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(block);
    // Make sure that buffers aligned to 4 bytes
    const isAligned = isAligned32(data) && isAligned32(output);
    const d32 = isAligned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(data) : U32_EMPTY;
    const o32 = isAligned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(output) : U32_EMPTY;
    for(let pos = 0; pos < len; counter++){
        core(sigma, key, nonce, b32, counter, rounds);
        if (counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        const take = Math.min(BLOCK_LEN, len - pos);
        // aligned to 4 bytes
        if (isAligned && take === BLOCK_LEN) {
            const pos32 = pos / 4;
            if (pos % 4 !== 0) throw new Error('arx: invalid block position');
            for(let j = 0, posj; j < BLOCK_LEN32; j++){
                posj = pos32 + j;
                o32[posj] = d32[posj] ^ b32[j];
            }
            pos += BLOCK_LEN;
            continue;
        }
        for(let j = 0, posj; j < take; j++){
            posj = pos + j;
            output[posj] = data[posj] ^ block[j];
        }
        pos += take;
    }
}
function createCipher(core, opts) {
    const { allowShortKeys, extendNonceFn, counterLength, counterRight, rounds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkOpts"])({
        allowShortKeys: false,
        counterLength: 8,
        counterRight: false,
        rounds: 20
    }, opts);
    if (typeof core !== 'function') throw new Error('core must be a function');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(counterLength);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(rounds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abool"])(counterRight);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abool"])(allowShortKeys);
    return (key, nonce, data, output, counter = 0)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(nonce, undefined, 'nonce');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(data, undefined, 'data');
        const len = data.length;
        if (output === undefined) output = new Uint8Array(len);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(output, undefined, 'output');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(counter);
        if (counter < 0 || counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        if (output.length < len) throw new Error(`arx: output (${output.length}) is shorter than data (${len})`);
        const toClean = [];
        // Key & sigma
        // key=16 -> sigma16, k=key|key
        // key=32 -> sigma32, k=key
        let l = key.length;
        let k;
        let sigma;
        if (l === 32) {
            toClean.push(k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyBytes"])(key));
            sigma = sigma32_32;
        } else if (l === 16 && allowShortKeys) {
            k = new Uint8Array(32);
            k.set(key);
            k.set(key, 16);
            sigma = sigma16_32;
            toClean.push(k);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'arx key');
            throw new Error('invalid key size');
        // throw new Error(`"arx key" expected Uint8Array of length 32, got length=${l}`);
        }
        // Nonce
        // salsa20:      8   (8-byte counter)
        // chacha20orig: 8   (8-byte counter)
        // chacha20:     12  (4-byte counter)
        // xsalsa20:     24  (16 -> hsalsa,  8 -> old nonce)
        // xchacha20:    24  (16 -> hchacha, 8 -> old nonce)
        // Align nonce to 4 bytes
        if (!isAligned32(nonce)) toClean.push(nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyBytes"])(nonce));
        const k32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(k);
        // hsalsa & hchacha: handle extended nonce
        if (extendNonceFn) {
            if (nonce.length !== 24) throw new Error(`arx: extended nonce must be 24 bytes`);
            extendNonceFn(sigma, k32, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(nonce.subarray(0, 16)), k32);
            nonce = nonce.subarray(16);
        }
        // Handle nonce counter
        const nonceNcLen = 16 - counterLength;
        if (nonceNcLen !== nonce.length) throw new Error(`arx: nonce must be ${nonceNcLen} or 16 bytes`);
        // Pad counter when nonce is 64 bit
        if (nonceNcLen !== 12) {
            const nc = new Uint8Array(12);
            nc.set(nonce, counterRight ? 0 : 12 - nonce.length);
            nonce = nc;
            toClean.push(nonce);
        }
        const n32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(nonce);
        runCipher(core, sigma, k32, n32, data, output, counter, rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(...toClean);
        return output;
    };
}
class _XorStreamPRG {
    blockLen;
    keyLen;
    nonceLen;
    state;
    buf;
    key;
    nonce;
    pos;
    ctr;
    cipher;
    constructor(cipher, blockLen, keyLen, nonceLen, seed){
        this.cipher = cipher;
        this.blockLen = blockLen;
        this.keyLen = keyLen;
        this.nonceLen = nonceLen;
        this.state = new Uint8Array(this.keyLen + this.nonceLen);
        this.reseed(seed);
        this.ctr = 0;
        this.pos = this.blockLen;
        this.buf = new Uint8Array(this.blockLen);
        this.key = this.state.subarray(0, this.keyLen);
        this.nonce = this.state.subarray(this.keyLen);
    }
    reseed(seed) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(seed);
        if (!seed || seed.length === 0) throw new Error('entropy required');
        for(let i = 0; i < seed.length; i++)this.state[i % this.state.length] ^= seed[i];
        this.ctr = 0;
        this.pos = this.blockLen;
    }
    addEntropy(seed) {
        this.state.set(this.randomBytes(this.state.length));
        this.reseed(seed);
    }
    randomBytes(len) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(len);
        if (len === 0) return new Uint8Array(0);
        const out = new Uint8Array(len);
        let outPos = 0;
        // Leftovers
        if (this.pos < this.blockLen) {
            const take = Math.min(len, this.blockLen - this.pos);
            out.set(this.buf.subarray(this.pos, this.pos + take), 0);
            this.pos += take;
            outPos += take;
            if (outPos === len) return out; // fast path
        }
        // Full blocks directly to out
        const blocks = Math.floor((len - outPos) / this.blockLen);
        if (blocks > 0) {
            const blockBytes = blocks * this.blockLen;
            const b = out.subarray(outPos, outPos + blockBytes);
            this.cipher(this.key, this.nonce, b, b, this.ctr);
            this.ctr += blocks;
            outPos += blockBytes;
        }
        // Save leftovers
        const left = len - outPos;
        if (left > 0) {
            this.buf.fill(0);
            // NOTE: cipher will handle overflow
            this.cipher(this.key, this.nonce, this.buf, this.buf, this.ctr++);
            out.set(this.buf.subarray(0, left), outPos);
            this.pos = left;
        }
        return out;
    }
    clone() {
        return new _XorStreamPRG(this.cipher, this.blockLen, this.keyLen, this.nonceLen, this.randomBytes(this.state.length));
    }
    clean() {
        this.pos = 0;
        this.ctr = 0;
        this.buf.fill(0);
        this.state.fill(0);
    }
}
const createPRG = (cipher, blockLen, keyLen, nonceLen)=>{
    return (seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomBytes"])(32))=>new _XorStreamPRG(cipher, blockLen, keyLen, nonceLen, seed);
}; //# sourceMappingURL=_arx.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_poly1305.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Poly1305 ([PDF](https://cr.yp.to/mac/poly1305-20050329.pdf),
 * [wiki](https://en.wikipedia.org/wiki/Poly1305))
 * is a fast and parallel secret-key message-authentication code suitable for
 * a wide variety of applications. It was standardized in
 * [RFC 8439](https://www.rfc-editor.org/rfc/rfc8439) and is now used in TLS 1.3.
 *
 * Polynomial MACs are not perfect for every situation:
 * they lack Random Key Robustness: the MAC can be forged, and can't be used in PAKE schemes.
 * See [invisible salamanders attack](https://keymaterial.net/2020/09/07/invisible-salamanders-in-aes-gcm-siv/).
 * To combat invisible salamanders, `hash(key)` can be included in ciphertext,
 * however, this would violate ciphertext indistinguishability:
 * an attacker would know which key was used - so `HKDF(key, i)`
 * could be used instead.
 *
 * Check out [original website](https://cr.yp.to/mac.html).
 * Based on Public Domain [poly1305-donna](https://github.com/floodyberry/poly1305-donna).
 * @module
 */ // prettier-ignore
__turbopack_context__.s([
    "Poly1305",
    ()=>Poly1305,
    "poly1305",
    ()=>poly1305,
    "wrapConstructorWithKey",
    ()=>wrapConstructorWithKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-rsc] (ecmascript)");
;
function u8to16(a, i) {
    return a[i++] & 0xff | (a[i++] & 0xff) << 8;
}
function bytesToNumberLE(bytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(Uint8Array.from(bytes).reverse()));
}
/** Small version of `poly1305` without loop unrolling. Unused, provided for auditability. */ function poly1305_small(msg, key) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(msg);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'key');
    const POW_2_130_5 = BigInt(2) ** BigInt(130) - BigInt(5); // 2^130-5
    const POW_2_128_1 = BigInt(2) ** BigInt(128) - BigInt(1); // 2^128-1
    const CLAMP_R = BigInt('0x0ffffffc0ffffffc0ffffffc0fffffff');
    const r = bytesToNumberLE(key.subarray(0, 16)) & CLAMP_R;
    const s = bytesToNumberLE(key.subarray(16));
    // Process by 16 byte chunks
    let acc = BigInt(0);
    for(let i = 0; i < msg.length; i += 16){
        const m = msg.subarray(i, i + 16);
        const n = bytesToNumberLE(m) | BigInt(1) << BigInt(8 * m.length);
        acc = (acc + n) * r % POW_2_130_5;
    }
    const res = acc + s & POW_2_128_1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToBytesBE"])(res, 16).reverse(); // LE
}
// Can be used to replace `computeTag` in chacha.ts. Unused, provided for auditability.
// @ts-expect-error
function poly1305_computeTag_small(authKey, lengths, ciphertext, AAD) {
    const res = [];
    const updatePadded2 = (msg)=>{
        res.push(msg);
        const leftover = msg.length % 16;
        if (leftover) res.push(new Uint8Array(16).slice(leftover));
    };
    if (AAD) updatePadded2(AAD);
    updatePadded2(ciphertext);
    res.push(lengths);
    return poly1305_small((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concatBytes"])(...res), authKey);
}
class Poly1305 {
    blockLen = 16;
    outputLen = 16;
    buffer = new Uint8Array(16);
    r = new Uint16Array(10);
    h = new Uint16Array(10);
    pad = new Uint16Array(8);
    pos = 0;
    finished = false;
    // Can be speed-up using BigUint64Array, at the cost of complexity
    constructor(key){
        key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'key'));
        const t0 = u8to16(key, 0);
        const t1 = u8to16(key, 2);
        const t2 = u8to16(key, 4);
        const t3 = u8to16(key, 6);
        const t4 = u8to16(key, 8);
        const t5 = u8to16(key, 10);
        const t6 = u8to16(key, 12);
        const t7 = u8to16(key, 14);
        // https://github.com/floodyberry/poly1305-donna/blob/e6ad6e091d30d7f4ec2d4f978be1fcfcbce72781/poly1305-donna-16.h#L47
        this.r[0] = t0 & 0x1fff;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this.r[5] = t4 >>> 1 & 0x1ffe;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this.r[9] = t7 >>> 5 & 0x007f;
        for(let i = 0; i < 8; i++)this.pad[i] = u8to16(key, 16 + 2 * i);
    }
    process(data, offset, isLast = false) {
        const hibit = isLast ? 0 : 1 << 11;
        const { h, r } = this;
        const r0 = r[0];
        const r1 = r[1];
        const r2 = r[2];
        const r3 = r[3];
        const r4 = r[4];
        const r5 = r[5];
        const r6 = r[6];
        const r7 = r[7];
        const r8 = r[8];
        const r9 = r[9];
        const t0 = u8to16(data, offset + 0);
        const t1 = u8to16(data, offset + 2);
        const t2 = u8to16(data, offset + 4);
        const t3 = u8to16(data, offset + 6);
        const t4 = u8to16(data, offset + 8);
        const t5 = u8to16(data, offset + 10);
        const t6 = u8to16(data, offset + 12);
        const t7 = u8to16(data, offset + 14);
        let h0 = h[0] + (t0 & 0x1fff);
        let h1 = h[1] + ((t0 >>> 13 | t1 << 3) & 0x1fff);
        let h2 = h[2] + ((t1 >>> 10 | t2 << 6) & 0x1fff);
        let h3 = h[3] + ((t2 >>> 7 | t3 << 9) & 0x1fff);
        let h4 = h[4] + ((t3 >>> 4 | t4 << 12) & 0x1fff);
        let h5 = h[5] + (t4 >>> 1 & 0x1fff);
        let h6 = h[6] + ((t4 >>> 14 | t5 << 2) & 0x1fff);
        let h7 = h[7] + ((t5 >>> 11 | t6 << 5) & 0x1fff);
        let h8 = h[8] + ((t6 >>> 8 | t7 << 8) & 0x1fff);
        let h9 = h[9] + (t7 >>> 5 | hibit);
        let c = 0;
        let d0 = c + h0 * r0 + h1 * (5 * r9) + h2 * (5 * r8) + h3 * (5 * r7) + h4 * (5 * r6);
        c = d0 >>> 13;
        d0 &= 0x1fff;
        d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r2) + h9 * (5 * r1);
        c += d0 >>> 13;
        d0 &= 0x1fff;
        let d1 = c + h0 * r1 + h1 * r0 + h2 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
        c = d1 >>> 13;
        d1 &= 0x1fff;
        d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r2);
        c += d1 >>> 13;
        d1 &= 0x1fff;
        let d2 = c + h0 * r2 + h1 * r1 + h2 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
        c = d2 >>> 13;
        d2 &= 0x1fff;
        d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
        c += d2 >>> 13;
        d2 &= 0x1fff;
        let d3 = c + h0 * r3 + h1 * r2 + h2 * r1 + h3 * r0 + h4 * (5 * r9);
        c = d3 >>> 13;
        d3 &= 0x1fff;
        d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
        c += d3 >>> 13;
        d3 &= 0x1fff;
        let d4 = c + h0 * r4 + h1 * r3 + h2 * r2 + h3 * r1 + h4 * r0;
        c = d4 >>> 13;
        d4 &= 0x1fff;
        d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
        c += d4 >>> 13;
        d4 &= 0x1fff;
        let d5 = c + h0 * r5 + h1 * r4 + h2 * r3 + h3 * r2 + h4 * r1;
        c = d5 >>> 13;
        d5 &= 0x1fff;
        d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
        c += d5 >>> 13;
        d5 &= 0x1fff;
        let d6 = c + h0 * r6 + h1 * r5 + h2 * r4 + h3 * r3 + h4 * r2;
        c = d6 >>> 13;
        d6 &= 0x1fff;
        d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
        c += d6 >>> 13;
        d6 &= 0x1fff;
        let d7 = c + h0 * r7 + h1 * r6 + h2 * r5 + h3 * r4 + h4 * r3;
        c = d7 >>> 13;
        d7 &= 0x1fff;
        d7 += h5 * r2 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
        c += d7 >>> 13;
        d7 &= 0x1fff;
        let d8 = c + h0 * r8 + h1 * r7 + h2 * r6 + h3 * r5 + h4 * r4;
        c = d8 >>> 13;
        d8 &= 0x1fff;
        d8 += h5 * r3 + h6 * r2 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
        c += d8 >>> 13;
        d8 &= 0x1fff;
        let d9 = c + h0 * r9 + h1 * r8 + h2 * r7 + h3 * r6 + h4 * r5;
        c = d9 >>> 13;
        d9 &= 0x1fff;
        d9 += h5 * r4 + h6 * r3 + h7 * r2 + h8 * r1 + h9 * r0;
        c += d9 >>> 13;
        d9 &= 0x1fff;
        c = (c << 2) + c | 0;
        c = c + d0 | 0;
        d0 = c & 0x1fff;
        c = c >>> 13;
        d1 += c;
        h[0] = d0;
        h[1] = d1;
        h[2] = d2;
        h[3] = d3;
        h[4] = d4;
        h[5] = d5;
        h[6] = d6;
        h[7] = d7;
        h[8] = d8;
        h[9] = d9;
    }
    finalize() {
        const { h, pad } = this;
        const g = new Uint16Array(10);
        let c = h[1] >>> 13;
        h[1] &= 0x1fff;
        for(let i = 2; i < 10; i++){
            h[i] += c;
            c = h[i] >>> 13;
            h[i] &= 0x1fff;
        }
        h[0] += c * 5;
        c = h[0] >>> 13;
        h[0] &= 0x1fff;
        h[1] += c;
        c = h[1] >>> 13;
        h[1] &= 0x1fff;
        h[2] += c;
        g[0] = h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(let i = 1; i < 10; i++){
            g[i] = h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 1 << 13;
        let mask = (c ^ 1) - 1;
        for(let i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(let i = 0; i < 10; i++)h[i] = h[i] & mask | g[i];
        h[0] = (h[0] | h[1] << 13) & 0xffff;
        h[1] = (h[1] >>> 3 | h[2] << 10) & 0xffff;
        h[2] = (h[2] >>> 6 | h[3] << 7) & 0xffff;
        h[3] = (h[3] >>> 9 | h[4] << 4) & 0xffff;
        h[4] = (h[4] >>> 12 | h[5] << 1 | h[6] << 14) & 0xffff;
        h[5] = (h[6] >>> 2 | h[7] << 11) & 0xffff;
        h[6] = (h[7] >>> 5 | h[8] << 8) & 0xffff;
        h[7] = (h[8] >>> 8 | h[9] << 5) & 0xffff;
        let f = h[0] + pad[0];
        h[0] = f & 0xffff;
        for(let i = 1; i < 8; i++){
            f = (h[i] + pad[i] | 0) + (f >>> 16) | 0;
            h[i] = f & 0xffff;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(g);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(data);
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyBytes"])(data);
        const { buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input
            if (take === blockLen) {
                for(; blockLen <= len - pos; pos += blockLen)this.process(data, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(buffer, 0, false);
                this.pos = 0;
            }
        }
        return this;
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        const { buffer, h } = this;
        let { pos } = this;
        if (pos) {
            buffer[pos++] = 1;
            for(; pos < 16; pos++)buffer[pos] = 0;
            this.process(buffer, 0, true);
        }
        this.finalize();
        let opos = 0;
        for(let i = 0; i < 8; i++){
            out[opos++] = h[i] >>> 0;
            out[opos++] = h[i] >>> 8;
        }
        return out;
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
}
function wrapConstructorWithKey(hashCons) {
    const hashC = (msg, key)=>hashCons(key).update(msg).digest();
    const tmp = hashCons(new Uint8Array(32)); // tmp array, used just once below
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (key)=>hashCons(key);
    return hashC;
}
const poly1305 = /** @__PURE__ */ (()=>wrapConstructorWithKey((key)=>new Poly1305(key)))(); //# sourceMappingURL=_poly1305.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/chacha.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ChaCha stream cipher, released
 * in 2008. Developed after Salsa20, ChaCha aims to increase diffusion per round.
 * It was standardized in [RFC 8439](https://www.rfc-editor.org/rfc/rfc8439) and
 * is now used in TLS 1.3.
 *
 * [XChaCha20](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha)
 * extended-nonce variant is also provided. Similar to XSalsa, it's safe to use with
 * randomly-generated nonces.
 *
 * Check out [PDF](http://cr.yp.to/chacha/chacha-20080128.pdf) and
 * [wiki](https://en.wikipedia.org/wiki/Salsa20) and
 * [website](https://cr.yp.to/chacha.html).
 *
 * @module
 */ __turbopack_context__.s([
    "_poly1305_aead",
    ()=>_poly1305_aead,
    "chacha12",
    ()=>chacha12,
    "chacha20",
    ()=>chacha20,
    "chacha20orig",
    ()=>chacha20orig,
    "chacha20poly1305",
    ()=>chacha20poly1305,
    "chacha8",
    ()=>chacha8,
    "hchacha",
    ()=>hchacha,
    "rngChacha20",
    ()=>rngChacha20,
    "rngChacha8",
    ()=>rngChacha8,
    "xchacha20",
    ()=>xchacha20,
    "xchacha20poly1305",
    ()=>xchacha20poly1305
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_arx.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_poly1305$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_poly1305.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-rsc] (ecmascript)");
;
;
;
/**
 * ChaCha core function. It is implemented twice:
 * 1. Simple loop (chachaCore_small, hchacha_small)
 * 2. Unrolled loop (chachaCore, hchacha) - 4x faster, but larger & harder to read
 * The specific implementation is selected in `createCipher` below.
 */ /** quarter-round */ // prettier-ignore
function chachaQR(x, a, b, c, d) {
    x[a] = x[a] + x[b] | 0;
    x[d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x[d] ^ x[a], 16);
    x[c] = x[c] + x[d] | 0;
    x[b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x[b] ^ x[c], 12);
    x[a] = x[a] + x[b] | 0;
    x[d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x[d] ^ x[a], 8);
    x[c] = x[c] + x[d] | 0;
    x[b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x[b] ^ x[c], 7);
}
/** single round */ function chachaRound(x, rounds = 20) {
    for(let r = 0; r < rounds; r += 2){
        chachaQR(x, 0, 4, 8, 12);
        chachaQR(x, 1, 5, 9, 13);
        chachaQR(x, 2, 6, 10, 14);
        chachaQR(x, 3, 7, 11, 15);
        chachaQR(x, 0, 5, 10, 15);
        chachaQR(x, 1, 6, 11, 12);
        chachaQR(x, 2, 7, 8, 13);
        chachaQR(x, 3, 4, 9, 14);
    }
}
const ctmp = /* @__PURE__ */ new Uint32Array(16);
/** Small version of chacha without loop unrolling. Unused, provided for auditability. */ // prettier-ignore
function chacha(s, k, i, out, isHChacha = true, rounds = 20) {
    // Create initial array using common pattern
    const y = Uint32Array.from([
        s[0],
        s[1],
        s[2],
        s[3],
        k[0],
        k[1],
        k[2],
        k[3],
        k[4],
        k[5],
        k[6],
        k[7],
        i[0],
        i[1],
        i[2],
        i[3]
    ]);
    const x = ctmp;
    x.set(y);
    chachaRound(x, rounds);
    // hchacha extracts 8 specific bytes, chacha adds orig to result
    if (isHChacha) {
        const xindexes = [
            0,
            1,
            2,
            3,
            12,
            13,
            14,
            15
        ];
        for(let i = 0; i < 8; i++)out[i] = x[xindexes[i]];
    } else {
        for(let i = 0; i < 16; i++)out[i] = y[i] + x[i] | 0;
    }
}
/** Identical to `chachaCore`. Unused. */ // @ts-ignore
const chachaCore_small = (s, k, n, out, cnt, rounds)=>chacha(s, k, Uint32Array.from([
        n[0],
        n[1],
        cnt,
        0
    ]), out, false, rounds);
/** Identical to `hchacha`. Unused. */ // @ts-ignore
const hchacha_small = chacha;
/** Identical to `chachaCore_small`. Unused. */ // prettier-ignore
function chachaCore(s, k, n, out, cnt, rounds = 20) {
    let y00 = s[0], y01 = s[1], y02 = s[2], y03 = s[3], y04 = k[0], y05 = k[1], y06 = k[2], y07 = k[3], y08 = k[4], y09 = k[5], y10 = k[6], y11 = k[7], y12 = cnt, y13 = n[0], y14 = n[1], y15 = n[2]; // Counter  Counter	Nonce   Nonce
    // Save state to temporary variables
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    for(let r = 0; r < rounds; r += 2){
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 7);
    }
    // Write output
    let oi = 0;
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
function hchacha(s, k, i, out) {
    let x00 = s[0], x01 = s[1], x02 = s[2], x03 = s[3], x04 = k[0], x05 = k[1], x06 = k[2], x07 = k[3], x08 = k[4], x09 = k[5], x10 = k[6], x11 = k[7], x12 = i[0], x13 = i[1], x14 = i[2], x15 = i[3];
    for(let r = 0; r < 20; r += 2){
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 7);
    }
    let oi = 0;
    out[oi++] = x00;
    out[oi++] = x01;
    out[oi++] = x02;
    out[oi++] = x03;
    out[oi++] = x12;
    out[oi++] = x13;
    out[oi++] = x14;
    out[oi++] = x15;
}
const chacha20orig = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 8,
    allowShortKeys: true
});
const chacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
});
const xchacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 8,
    extendNonceFn: hchacha,
    allowShortKeys: false
});
const chacha8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 8
});
const chacha12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 12
});
const ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
// Pad to digest size with zeros
const updatePadded = (h, msg)=>{
    h.update(msg);
    const leftover = msg.length % 16;
    if (leftover) h.update(ZEROS16.subarray(leftover));
};
const ZEROS32 = /* @__PURE__ */ new Uint8Array(32);
function computeTag(fn, key, nonce, ciphertext, AAD) {
    if (AAD !== undefined) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(AAD, undefined, 'AAD');
    const authKey = fn(key, nonce, ZEROS32);
    const lengths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u64Lengths"])(ciphertext.length, AAD ? AAD.length : 0, true);
    // Methods below can be replaced with
    // return poly1305_computeTag_small(authKey, lengths, ciphertext, AAD)
    const h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_poly1305$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poly1305"].create(authKey);
    if (AAD) updatePadded(h, AAD);
    updatePadded(h, ciphertext);
    h.update(lengths);
    const res = h.digest();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(authKey, lengths);
    return res;
}
const _poly1305_aead = (xorStream)=>(key, nonce, AAD)=>{
        const tagLength = 16;
        return {
            encrypt (plaintext, output) {
                const plength = plaintext.length;
                output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOutput"])(plength + tagLength, output, false);
                output.set(plaintext);
                const oPlain = output.subarray(0, -tagLength);
                // Actual encryption
                xorStream(key, nonce, oPlain, oPlain, 1);
                const tag = computeTag(xorStream, key, nonce, oPlain, AAD);
                output.set(tag, plength); // append tag
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(tag);
                return output;
            },
            decrypt (ciphertext, output) {
                output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOutput"])(ciphertext.length - tagLength, output, false);
                const data = ciphertext.subarray(0, -tagLength);
                const passedTag = ciphertext.subarray(-tagLength);
                const tag = computeTag(xorStream, key, nonce, data, AAD);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["equalBytes"])(passedTag, tag)) throw new Error('invalid tag');
                output.set(ciphertext.subarray(0, -tagLength));
                // Actual decryption
                xorStream(key, nonce, output, output, 1); // start stream with i=1
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(tag);
                return output;
            }
        };
    };
const chacha20poly1305 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapCipher"])({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, _poly1305_aead(chacha20));
const xchacha20poly1305 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapCipher"])({
    blockSize: 64,
    nonceLength: 24,
    tagLength: 16
}, _poly1305_aead(xchacha20));
const rngChacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPRG"])(chacha20orig, 64, 32, 8);
const rngChacha8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPRG"])(chacha8, 64, 32, 12); //# sourceMappingURL=chacha.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ /** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */ __turbopack_context__.s([
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "concatBytes",
    ()=>concatBytes,
    "createHasher",
    ()=>createHasher,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "kdfInputToBytes",
    ()=>kdfInputToBytes,
    "nextTick",
    ()=>nextTick,
    "oidNist",
    ()=>oidNist,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "swap32IfBE",
    ()=>swap32IfBE,
    "swap8IfBE",
    ()=>swap8IfBE,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes
]);
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function anumber(n, title = '') {
    if (!Number.isSafeInteger(n) || n < 0) {
        const prefix = title && `"${title}" `;
        throw new Error(`${prefix}expected integer >= 0, got ${n}`);
    }
}
function abytes(value, length, title = '') {
    const bytes = isBytes(value);
    const len = value?.length;
    const needsLen = length !== undefined;
    if (!bytes || needsLen && len !== length) {
        const prefix = title && `"${title}" `;
        const ofLen = needsLen ? ` of length ${length}` : '';
        const got = bytes ? `length=${len}` : `type=${typeof value}`;
        throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
    }
    return value;
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash must wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'digestInto() output');
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('"digestInto() output" expected to be of length >=' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function kdfInputToBytes(data, errorTitle = '') {
    if (typeof data === 'string') return utf8ToBytes(data);
    return abytes(data, undefined, errorTitle);
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('options must be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function createHasher(hashCons, info = {}) {
    const hashC = (msg, opts)=>hashCons(opts).update(msg).digest();
    const tmp = hashCons(undefined);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
}
function randomBytes(bytesLength = 32) {
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
const oidNist = (suffix)=>({
        oid: Uint8Array.from([
            0x06,
            0x09,
            0x60,
            0x86,
            0x48,
            0x01,
            0x65,
            0x03,
            0x04,
            0x02,
            suffix
        ])
    }); //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/hmac.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HMAC: RFC2104 message authentication code.
 * @module
 */ __turbopack_context__.s([
    "_HMAC",
    ()=>_HMAC,
    "hmac",
    ()=>hmac
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
class _HMAC {
    oHash;
    iHash;
    blockLen;
    outputLen;
    finished = false;
    destroyed = false;
    constructor(hash, key){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ahash"])(hash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(pad);
    }
    update(buf) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(out, this.outputLen, 'output');
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to ||= Object.create(Object.getPrototypeOf(this), {});
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
const hmac = (hash, key, message)=>new _HMAC(hash, key).update(message).digest();
hmac.create = (hash, key)=>new _HMAC(hash, key); //# sourceMappingURL=hmac.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/pbkdf2.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PBKDF (RFC 2898). Can be used to create a key from password and salt.
 * @module
 */ __turbopack_context__.s([
    "pbkdf2",
    ()=>pbkdf2,
    "pbkdf2Async",
    ()=>pbkdf2Async
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/hmac.js [app-rsc] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
;
// Common start and end for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ahash"])(hash);
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10
    }, _opts);
    const { c, dkLen, asyncTick } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(c, 'c');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(dkLen, 'dkLen');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(asyncTick, 'asyncTick');
    if (c < 1) throw new Error('iterations (c) must be >= 1');
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["kdfInputToBytes"])(_password, 'password');
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["kdfInputToBytes"])(_salt, 'salt');
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hmac"].create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return {
        c,
        dkLen,
        asyncTick,
        DK,
        PRF,
        PRFSalt
    };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW) prfW.destroy();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(u);
    return DK;
}
function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for(let ui = 1; ui < c; ui++){
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
async function pbkdf2Async(hash, password, salt, opts) {
    const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asyncLoop"])(c - 1, asyncTick, ()=>{
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
} //# sourceMappingURL=pbkdf2.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_md.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ __turbopack_context__.s([
    "Chi",
    ()=>Chi,
    "HashMD",
    ()=>HashMD,
    "Maj",
    ()=>Maj,
    "SHA224_IV",
    ()=>SHA224_IV,
    "SHA256_IV",
    ()=>SHA256_IV,
    "SHA384_IV",
    ()=>SHA384_IV,
    "SHA512_IV",
    ()=>SHA512_IV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
class HashMD {
    blockLen;
    outputLen;
    padOffset;
    isLE;
    // For partial updates less than block size
    buffer;
    view;
    finished = false;
    length = 0;
    pos = 0;
    destroyed = false;
    constructor(blockLen, outputLen, padOffset, isLE){
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        view.setBigUint64(blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which must be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen must be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to ||= new this.constructor();
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
const SHA224_IV = /* @__PURE__ */ Uint32Array.from([
    0xc1059ed8,
    0x367cd507,
    0x3070dd17,
    0xf70e5939,
    0xffc00b31,
    0x68581511,
    0x64f98fa7,
    0xbefa4fa4
]);
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    0xcbbb9d5d,
    0xc1059ed8,
    0x629a292a,
    0x367cd507,
    0x9159015a,
    0x3070dd17,
    0x152fecd8,
    0xf70e5939,
    0x67332667,
    0xffc00b31,
    0x8eb44a87,
    0x68581511,
    0xdb0c2e0d,
    0x64f98fa7,
    0x47b5481d,
    0xbefa4fa4
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]); //# sourceMappingURL=_md.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_u64.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ __turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromBig",
    ()=>fromBig,
    "rotlBH",
    ()=>rotlBH,
    "rotlBL",
    ()=>rotlBL,
    "rotlSH",
    ()=>rotlSH,
    "rotlSL",
    ()=>rotlSL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/sha2.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://www.rfc-editor.org/rfc/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */ __turbopack_context__.s([
    "_SHA224",
    ()=>_SHA224,
    "_SHA256",
    ()=>_SHA256,
    "_SHA384",
    ()=>_SHA384,
    "_SHA512",
    ()=>_SHA512,
    "_SHA512_224",
    ()=>_SHA512_224,
    "_SHA512_256",
    ()=>_SHA512_256,
    "sha224",
    ()=>sha224,
    "sha256",
    ()=>sha256,
    "sha384",
    ()=>sha384,
    "sha512",
    ()=>sha512,
    "sha512_224",
    ()=>sha512_224,
    "sha512_256",
    ()=>sha512_256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_md.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_u64.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
/** Internal 32-byte base SHA2 hash class. */ class SHA2_32B extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen){
        super(64, outputLen, 8, false);
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
class _SHA256 extends SHA2_32B {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    A = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][0] | 0;
    B = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][1] | 0;
    C = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][2] | 0;
    D = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][3] | 0;
    E = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][4] | 0;
    F = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][5] | 0;
    G = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][6] | 0;
    H = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_IV"][7] | 0;
    constructor(){
        super(32);
    }
}
class _SHA224 extends SHA2_32B {
    A = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][0] | 0;
    B = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][1] | 0;
    C = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][2] | 0;
    D = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][3] | 0;
    E = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][4] | 0;
    F = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][5] | 0;
    G = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][6] | 0;
    H = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA224_IV"][7] | 0;
    constructor(){
        super(28);
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["split"]([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (()=>K512[0])();
const SHA512_Kl = /* @__PURE__ */ (()=>K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
/** Internal 64-byte base SHA2 hash class. */ class SHA2_64B extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen){
        super(128, outputLen, 16, false);
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shrSH"](W15h, W15l, 7);
            const s0l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shrSL"](W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSH"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBH"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shrSH"](W2h, W2l, 6);
            const s1l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSL"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBL"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shrSL"](W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add4L"](s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add4H"](SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBH"](Eh, El, 41);
            const sigma1l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBL"](Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add5L"](Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add5H"](T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSH"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 39);
            const sigma0l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrSL"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add3L"](T1l, sigma0l, MAJl);
            Ah = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add3H"](All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"](this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class _SHA512 extends SHA2_64B {
    Ah = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][0] | 0;
    Al = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][1] | 0;
    Bh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][2] | 0;
    Bl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][3] | 0;
    Ch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][4] | 0;
    Cl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][5] | 0;
    Dh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][6] | 0;
    Dl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][7] | 0;
    Eh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][8] | 0;
    El = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][9] | 0;
    Fh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][10] | 0;
    Fl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][11] | 0;
    Gh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][12] | 0;
    Gl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][13] | 0;
    Hh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][14] | 0;
    Hl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA512_IV"][15] | 0;
    constructor(){
        super(64);
    }
}
class _SHA384 extends SHA2_64B {
    Ah = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][0] | 0;
    Al = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][1] | 0;
    Bh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][2] | 0;
    Bl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][3] | 0;
    Ch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][4] | 0;
    Cl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][5] | 0;
    Dh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][6] | 0;
    Dl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][7] | 0;
    Eh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][8] | 0;
    El = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][9] | 0;
    Fh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][10] | 0;
    Fl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][11] | 0;
    Gh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][12] | 0;
    Gl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][13] | 0;
    Hh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][14] | 0;
    Hl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA384_IV"][15] | 0;
    constructor(){
        super(48);
    }
}
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */ /** SHA512/224 IV */ const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8,
    0x19544da2,
    0x73e19966,
    0x89dcd4d6,
    0x1dfab7ae,
    0x32ff9c82,
    0x679dd514,
    0x582f9fcf,
    0x0f6d2b69,
    0x7bd44da8,
    0x77e36f73,
    0x04c48942,
    0x3f9d85a8,
    0x6a1d36c8,
    0x1112e6ad,
    0x91d692a1
]);
/** SHA512/256 IV */ const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194,
    0xfc2bf72c,
    0x9f555fa3,
    0xc84c64c2,
    0x2393b86b,
    0x6f53b151,
    0x96387719,
    0x5940eabd,
    0x96283ee2,
    0xa88effe3,
    0xbe5e1e25,
    0x53863992,
    0x2b0199fc,
    0x2c85b8aa,
    0x0eb72ddc,
    0x81c52ca2
]);
class _SHA512_224 extends SHA2_64B {
    Ah = T224_IV[0] | 0;
    Al = T224_IV[1] | 0;
    Bh = T224_IV[2] | 0;
    Bl = T224_IV[3] | 0;
    Ch = T224_IV[4] | 0;
    Cl = T224_IV[5] | 0;
    Dh = T224_IV[6] | 0;
    Dl = T224_IV[7] | 0;
    Eh = T224_IV[8] | 0;
    El = T224_IV[9] | 0;
    Fh = T224_IV[10] | 0;
    Fl = T224_IV[11] | 0;
    Gh = T224_IV[12] | 0;
    Gl = T224_IV[13] | 0;
    Hh = T224_IV[14] | 0;
    Hl = T224_IV[15] | 0;
    constructor(){
        super(28);
    }
}
class _SHA512_256 extends SHA2_64B {
    Ah = T256_IV[0] | 0;
    Al = T256_IV[1] | 0;
    Bh = T256_IV[2] | 0;
    Bl = T256_IV[3] | 0;
    Ch = T256_IV[4] | 0;
    Cl = T256_IV[5] | 0;
    Dh = T256_IV[6] | 0;
    Dl = T256_IV[7] | 0;
    Eh = T256_IV[8] | 0;
    El = T256_IV[9] | 0;
    Fh = T256_IV[10] | 0;
    Fl = T256_IV[11] | 0;
    Gh = T256_IV[12] | 0;
    Gl = T256_IV[13] | 0;
    Hh = T256_IV[14] | 0;
    Hl = T256_IV[15] | 0;
    constructor(){
        super(32);
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x01));
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x04));
const sha512 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x03));
const sha384 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA384(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x02));
const sha512_256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x06));
const sha512_224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x05)); //# sourceMappingURL=sha2.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/scrypt.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * RFC 7914 Scrypt KDF. Can be used to create a key from password and salt.
 * @module
 */ __turbopack_context__.s([
    "scrypt",
    ()=>scrypt,
    "scryptAsync",
    ()=>scryptAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/pbkdf2.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/sha2.js [app-rsc] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
;
;
// The main Scrypt loop: uses Salsa extensively.
// Six versions of the function were tried, this is the fastest one.
// prettier-ignore
function XorAndSalsa(prev, pi, input, ii, out, oi) {
    // Based on https://cr.yp.to/salsa20.html
    // Xor blocks
    let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
    let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
    let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
    let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
    let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
    let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
    let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
    let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
    // Save state to temporary variables (salsa)
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    // Main loop (salsa)
    for(let i = 0; i < 8; i += 2){
        x04 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x00 + x12 | 0, 7);
        x08 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 + x00 | 0, 9);
        x12 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x08 + x04 | 0, 13);
        x00 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 + x08 | 0, 18);
        x09 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 + x01 | 0, 7);
        x13 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x09 + x05 | 0, 9);
        x01 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 + x09 | 0, 13);
        x05 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x01 + x13 | 0, 18);
        x14 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x10 + x06 | 0, 7);
        x02 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 + x10 | 0, 9);
        x06 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x02 + x14 | 0, 13);
        x10 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 + x02 | 0, 18);
        x03 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 + x11 | 0, 7);
        x07 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x03 + x15 | 0, 9);
        x11 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 + x03 | 0, 13);
        x15 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x11 + x07 | 0, 18);
        x01 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x00 + x03 | 0, 7);
        x02 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x01 + x00 | 0, 9);
        x03 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x02 + x01 | 0, 13);
        x00 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x03 + x02 | 0, 18);
        x06 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x05 + x04 | 0, 7);
        x07 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x06 + x05 | 0, 9);
        x04 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x07 + x06 | 0, 13);
        x05 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x04 + x07 | 0, 18);
        x11 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x10 + x09 | 0, 7);
        x08 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x11 + x10 | 0, 9);
        x09 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x08 + x11 | 0, 13);
        x10 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x09 + x08 | 0, 18);
        x12 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x15 + x14 | 0, 7);
        x13 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x12 + x15 | 0, 9);
        x14 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x13 + x12 | 0, 13);
        x15 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotl"])(x14 + x13 | 0, 18);
    }
    // Write output (salsa)
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r) {
    // The block B is r 128-byte chunks (which is equivalent of 2r 64-byte chunks)
    let head = oi + 0;
    let tail = oi + 16 * r;
    for(let i = 0; i < 16; i++)out[tail + i] = input[ii + (2 * r - 1) * 16 + i]; // X ← B[2r−1]
    for(let i = 0; i < r; i++, head += 16, ii += 16){
        // We write odd & even Yi at same time. Even: 0bXXXXX0 Odd:  0bXXXXX1
        XorAndSalsa(out, tail, input, ii, out, head); // head[i] = Salsa(blockIn[2*i] ^ tail[i-1])
        if (i > 0) tail += 16; // First iteration overwrites tmp value in tail
        XorAndSalsa(out, head, input, ii += 16, out, tail); // tail[i] = Salsa(blockIn[2*i+1] ^ head[i])
    }
}
// Common prologue and epilogue for sync/async functions
function scryptInit(password, salt, _opts) {
    // Maxmem - 1GB+1KB by default
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10,
        maxmem: 1024 ** 3 + 1024
    }, _opts);
    const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(N, 'N');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(r, 'r');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(p, 'p');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(dkLen, 'dkLen');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(asyncTick, 'asyncTick');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(maxmem, 'maxmem');
    if (onProgress !== undefined && typeof onProgress !== 'function') throw new Error('progressCb must be a function');
    const blockSize = 128 * r;
    const blockSize32 = blockSize / 4;
    // Max N is 2^32 (Integrify is 32-bit).
    // Real limit can be 2^22: some JS engines limit Uint8Array to 4GB.
    // Spec check `N >= 2^(blockSize / 8)` is not done for compat with popular libs,
    // which used incorrect r: 1, p: 8. Also, the check seems to be a spec error:
    // https://www.rfc-editor.org/errata_search.php?rfc=7914
    const pow32 = Math.pow(2, 32);
    if (N <= 1 || (N & N - 1) !== 0 || N > pow32) throw new Error('"N" expected a power of 2, and 2^1 <= N <= 2^32');
    if (p < 1 || p > (pow32 - 1) * 32 / blockSize) throw new Error('"p" expected integer 1..((2^32 - 1) * 32) / (128 * r)');
    if (dkLen < 1 || dkLen > (pow32 - 1) * 32) throw new Error('"dkLen" expected integer 1..(2^32 - 1) * 32');
    const memUsed = blockSize * (N + p);
    if (memUsed > maxmem) throw new Error('"maxmem" limit was hit, expected 128*r*(N+p) <= "maxmem"=' + maxmem);
    // [B0...Bp−1] ← PBKDF2HMAC-SHA256(Passphrase, Salt, 1, blockSize*ParallelizationFactor)
    // Since it has only one iteration there is no reason to use async variant
    const B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"], password, salt, {
        c: 1,
        dkLen: blockSize * p
    });
    const B32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(B);
    // Re-used between parallel iterations. Array(iterations) of B
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize * N));
    const tmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize));
    let blockMixCb = ()=>{};
    if (onProgress) {
        const totalBlockMix = 2 * N * p;
        // Invoke callback if progress changes from 10.01 to 10.02
        // Allows to draw smooth progress bar on up to 8K screen
        const callbackPer = Math.max(Math.floor(totalBlockMix / 10000), 1);
        let blockMixCnt = 0;
        blockMixCb = ()=>{
            blockMixCnt++;
            if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix)) onProgress(blockMixCnt / totalBlockMix);
        };
    }
    return {
        N,
        r,
        p,
        dkLen,
        blockSize32,
        V,
        B32,
        B,
        tmp,
        blockMixCb,
        asyncTick
    };
}
function scryptOutput(password, dkLen, B, V, tmp) {
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"], password, B, {
        c: 1,
        dkLen
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(B, V, tmp);
    return res;
}
function scrypt(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        for(let i = 0, pos = 0; i < N - 1; i++){
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        }
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        for(let i = 0; i < N; i++){
            // First u32 of the last 64-byte block (u32 is LE)
            // & (N - 1) is % N as N is a power of 2, N & (N - 1) = 0 is checked above; >>> 0 for unsigned, input fits in u32
            const j = (B32[Pi + blockSize32 - 16] & N - 1) >>> 0; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    return scryptOutput(password, dkLen, B, V, tmp);
}
async function scryptAsync(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        let pos = 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asyncLoop"])(N - 1, asyncTick, ()=>{
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        });
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asyncLoop"])(N, asyncTick, ()=>{
            // First u32 of the last 64-byte block (u32 is LE)
            // & (N - 1) is % N as N is a power of 2, N & (N - 1) = 0 is checked above; >>> 0 for unsigned, input fits in u32
            const j = (B32[Pi + blockSize32 - 16] & N - 1) >>> 0; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    return scryptOutput(password, dkLen, B, V, tmp);
} //# sourceMappingURL=scrypt.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/sha3.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ __turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake128_32",
    ()=>shake128_32,
    "shake256",
    ()=>shake256,
    "shake256_64",
    ()=>shake256_64
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_u64.js [app-rsc] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
;
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = []; // no pure annotation: var is always used
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(B);
}
class Keccak {
    state;
    pos = 0;
    posOut = 0;
    finished = false;
    state32;
    destroyed = false;
    blockLen;
    suffix;
    outputLen;
    enableXOF = false;
    rounds;
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(outputLen, 'outputLen');
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (!(0 < blockLen && blockLen < 200)) throw new Error('only keccak-f1600 function is supported');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        keccakP(this.state32, this.rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { blockLen, state } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to ||= new Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const genKeccak = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new Keccak(blockLen, suffix, outputLen), info);
const sha3_224 = /* @__PURE__ */ genKeccak(0x06, 144, 28, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x07));
const sha3_256 = /* @__PURE__ */ genKeccak(0x06, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x08));
const sha3_384 = /* @__PURE__ */ genKeccak(0x06, 104, 48, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x09));
const sha3_512 = /* @__PURE__ */ genKeccak(0x06, 72, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0a));
const keccak_224 = /* @__PURE__ */ genKeccak(0x01, 144, 28);
const keccak_256 = /* @__PURE__ */ genKeccak(0x01, 136, 32);
const keccak_384 = /* @__PURE__ */ genKeccak(0x01, 104, 48);
const keccak_512 = /* @__PURE__ */ genKeccak(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true), info);
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 16, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
const shake128_32 = /* @__PURE__ */ genShake(0x1f, 168, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256_64 = /* @__PURE__ */ genShake(0x1f, 136, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0c)); //# sourceMappingURL=sha3.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/telemetry/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTelemetry",
    ()=>createTelemetry,
    "getTelemetryAuthConfig",
    ()=>getTelemetryAuthConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-fetch/fetch/dist/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
const generateId = (size)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "A-Z", "0-9")(size);
};
async function hashToBase64(data) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(data);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].encode(buffer);
}
let packageJSONCache;
async function readRootPackageJson() {
    if (packageJSONCache) return packageJSONCache;
    try {
        const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "";
        if (!cwd) return void 0;
        const importRuntime = (m)=>Function("mm", "return import(mm)")(m);
        const [{ default: fs }, { default: path }] = await Promise.all([
            importRuntime("fs/promises"),
            importRuntime("path")
        ]);
        const raw = await fs.readFile(path.join(cwd, "package.json"), "utf-8");
        packageJSONCache = JSON.parse(raw);
        return packageJSONCache;
    } catch  {}
    return void 0;
}
async function getPackageVersion(pkg) {
    if (packageJSONCache) {
        return packageJSONCache.dependencies?.[pkg] || packageJSONCache.devDependencies?.[pkg] || packageJSONCache.peerDependencies?.[pkg];
    }
    try {
        const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "";
        if (!cwd) throw new Error("no-cwd");
        const importRuntime = (m)=>Function("mm", "return import(mm)")(m);
        const [{ default: fs }, { default: path }] = await Promise.all([
            importRuntime("fs/promises"),
            importRuntime("path")
        ]);
        const pkgJsonPath = path.join(cwd, "node_modules", pkg, "package.json");
        const raw = await fs.readFile(pkgJsonPath, "utf-8");
        const json = JSON.parse(raw);
        const resolved = json.version || await getVersionFromLocalPackageJson(pkg) || void 0;
        return resolved;
    } catch  {}
    const fromRoot = await getVersionFromLocalPackageJson(pkg);
    return fromRoot;
}
async function getVersionFromLocalPackageJson(pkg) {
    const json = await readRootPackageJson();
    if (!json) return void 0;
    const allDeps = {
        ...json.dependencies,
        ...json.devDependencies,
        ...json.peerDependencies
    };
    return allDeps[pkg];
}
async function getNameFromLocalPackageJson() {
    const json = await readRootPackageJson();
    return json?.name;
}
let projectIdCached = null;
async function getProjectId(baseUrl) {
    if (projectIdCached) return projectIdCached;
    const projectName = await getNameFromLocalPackageJson();
    if (projectName) {
        projectIdCached = await hashToBase64(baseUrl ? baseUrl + projectName : projectName);
        return projectIdCached;
    }
    if (baseUrl) {
        projectIdCached = await hashToBase64(baseUrl);
        return projectIdCached;
    }
    projectIdCached = generateId(32);
    return projectIdCached;
}
const importRuntime = (m)=>{
    return Function("mm", "return import(mm)")(m);
};
function getVendor() {
    const hasAny = (...keys)=>keys.some((k)=>Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"][k]));
    if (hasAny("CF_PAGES", "CF_PAGES_URL", "CF_ACCOUNT_ID") || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") {
        return "cloudflare";
    }
    if (hasAny("VERCEL", "VERCEL_URL", "VERCEL_ENV")) return "vercel";
    if (hasAny("NETLIFY", "NETLIFY_URL")) return "netlify";
    if (hasAny("RENDER", "RENDER_URL", "RENDER_INTERNAL_HOSTNAME", "RENDER_SERVICE_ID")) {
        return "render";
    }
    if (hasAny("AWS_LAMBDA_FUNCTION_NAME", "AWS_EXECUTION_ENV", "LAMBDA_TASK_ROOT")) {
        return "aws";
    }
    if (hasAny("GOOGLE_CLOUD_FUNCTION_NAME", "GOOGLE_CLOUD_PROJECT", "GCP_PROJECT", "K_SERVICE")) {
        return "gcp";
    }
    if (hasAny("AZURE_FUNCTION_NAME", "FUNCTIONS_WORKER_RUNTIME", "WEBSITE_INSTANCE_ID", "WEBSITE_SITE_NAME")) {
        return "azure";
    }
    if (hasAny("DENO_DEPLOYMENT_ID", "DENO_REGION")) return "deno-deploy";
    if (hasAny("FLY_APP_NAME", "FLY_REGION", "FLY_ALLOC_ID")) return "fly-io";
    if (hasAny("RAILWAY_STATIC_URL", "RAILWAY_ENVIRONMENT_NAME")) return "railway";
    if (hasAny("DYNO", "HEROKU_APP_NAME")) return "heroku";
    if (hasAny("DO_DEPLOYMENT_ID", "DO_APP_NAME", "DIGITALOCEAN")) return "digitalocean";
    if (hasAny("KOYEB", "KOYEB_DEPLOYMENT_ID", "KOYEB_APP_NAME")) return "koyeb";
    return null;
}
async function detectSystemInfo() {
    try {
        if (getVendor() === "cloudflare") return "cloudflare";
        const os = await importRuntime("os");
        const cpus = os.cpus();
        return {
            deploymentVendor: getVendor(),
            systemPlatform: os.platform(),
            systemRelease: os.release(),
            systemArchitecture: os.arch(),
            cpuCount: cpus.length,
            cpuModel: cpus.length ? cpus[0].model : null,
            cpuSpeed: cpus.length ? cpus[0].speed : null,
            memory: os.totalmem(),
            isWSL: await isWsl(),
            isDocker: await isDocker(),
            isTTY: typeof process !== "undefined" && process.stdout ? process.stdout.isTTY : null
        };
    } catch (e) {
        return {
            systemPlatform: null,
            systemRelease: null,
            systemArchitecture: null,
            cpuCount: null,
            cpuModel: null,
            cpuSpeed: null,
            memory: null,
            isWSL: null,
            isDocker: null,
            isTTY: null
        };
    }
}
let isDockerCached;
async function hasDockerEnv() {
    if (getVendor() === "cloudflare") return false;
    try {
        const fs = await importRuntime("fs");
        fs.statSync("/.dockerenv");
        return true;
    } catch  {
        return false;
    }
}
async function hasDockerCGroup() {
    if (getVendor() === "cloudflare") return false;
    try {
        const fs = await importRuntime("fs");
        return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
    } catch  {
        return false;
    }
}
async function isDocker() {
    if (getVendor() === "cloudflare") return false;
    if (isDockerCached === void 0) {
        isDockerCached = await hasDockerEnv() || await hasDockerCGroup();
    }
    return isDockerCached;
}
async function isWsl() {
    try {
        if (getVendor() === "cloudflare") return false;
        if (typeof process === "undefined" || process?.platform !== "linux") {
            return false;
        }
        const fs = await importRuntime("fs");
        const os = await importRuntime("os");
        if (os.release().toLowerCase().includes("microsoft")) {
            if (await isInsideContainer()) {
                return false;
            }
            return true;
        }
        return fs.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !await isInsideContainer() : false;
    } catch  {
        return false;
    }
}
let isInsideContainerCached;
const hasContainerEnv = async ()=>{
    if (getVendor() === "cloudflare") return false;
    try {
        const fs = await importRuntime("fs");
        fs.statSync("/run/.containerenv");
        return true;
    } catch  {
        return false;
    }
};
async function isInsideContainer() {
    if (isInsideContainerCached === void 0) {
        isInsideContainerCached = await hasContainerEnv() || await isDocker();
    }
    return isInsideContainerCached;
}
function isCI() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CI !== "false" && ("BUILD_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Jenkins, Cloudbees
    "BUILD_NUMBER" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Jenkins, TeamCity (fixed typo: extra space removed)
    "CI" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari, Cloudflare
    "CI_APP_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Appflow
    "CI_BUILD_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Appflow
    "CI_BUILD_NUMBER" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Appflow
    "CI_NAME" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Codeship and others
    "CONTINUOUS_INTEGRATION" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"] || // Travis CI, Cirrus CI
    "RUN_ID" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"]);
}
function detectRuntime() {
    if (typeof Deno !== "undefined") {
        const denoVersion = Deno?.version?.deno ?? null;
        return {
            name: "deno",
            version: denoVersion
        };
    }
    if (typeof Bun !== "undefined") {
        const bunVersion = Bun?.version ?? null;
        return {
            name: "bun",
            version: bunVersion
        };
    }
    if (typeof process !== "undefined" && process?.versions?.node) {
        return {
            name: "node",
            version: process.versions.node ?? null
        };
    }
    return {
        name: "edge",
        version: null
    };
}
function detectEnvironment() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvVar"])("NODE_ENV") === "production" ? "production" : isCI() ? "ci" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTest"])() ? "test" : "development";
}
const DATABASES = {
    pg: "postgresql",
    mysql: "mysql",
    mariadb: "mariadb",
    sqlite3: "sqlite",
    "better-sqlite3": "sqlite",
    "@prisma/client": "prisma",
    mongoose: "mongodb",
    mongodb: "mongodb",
    "drizzle-orm": "drizzle"
};
async function detectDatabase() {
    for (const [pkg, name] of Object.entries(DATABASES)){
        const version = await getPackageVersion(pkg);
        if (version) return {
            name,
            version
        };
    }
    return void 0;
}
const FRAMEWORKS = {
    next: "next",
    nuxt: "nuxt",
    "@remix-run/server-runtime": "remix",
    astro: "astro",
    "@sveltejs/kit": "sveltekit",
    "solid-start": "solid-start",
    "tanstack-start": "tanstack-start",
    hono: "hono",
    express: "express",
    elysia: "elysia",
    expo: "expo"
};
async function detectFramework() {
    for (const [pkg, name] of Object.entries(FRAMEWORKS)){
        const version = await getPackageVersion(pkg);
        if (version) return {
            name,
            version
        };
    }
    return void 0;
}
function detectPackageManager() {
    const userAgent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].npm_config_user_agent;
    if (!userAgent) {
        return void 0;
    }
    const pmSpec = userAgent.split(" ")[0];
    const separatorPos = pmSpec.lastIndexOf("/");
    const name = pmSpec.substring(0, separatorPos);
    return {
        name: name === "npminstall" ? "cnpm" : name,
        version: pmSpec.substring(separatorPos + 1)
    };
}
function getTelemetryAuthConfig(options, context) {
    return {
        database: context?.database,
        adapter: context?.adapter,
        emailVerification: {
            sendVerificationEmail: !!options.emailVerification?.sendVerificationEmail,
            sendOnSignUp: !!options.emailVerification?.sendOnSignUp,
            sendOnSignIn: !!options.emailVerification?.sendOnSignIn,
            autoSignInAfterVerification: !!options.emailVerification?.autoSignInAfterVerification,
            expiresIn: options.emailVerification?.expiresIn,
            onEmailVerification: !!options.emailVerification?.onEmailVerification,
            afterEmailVerification: !!options.emailVerification?.afterEmailVerification
        },
        emailAndPassword: {
            enabled: !!options.emailAndPassword?.enabled,
            disableSignUp: !!options.emailAndPassword?.disableSignUp,
            requireEmailVerification: !!options.emailAndPassword?.requireEmailVerification,
            maxPasswordLength: options.emailAndPassword?.maxPasswordLength,
            minPasswordLength: options.emailAndPassword?.minPasswordLength,
            sendResetPassword: !!options.emailAndPassword?.sendResetPassword,
            resetPasswordTokenExpiresIn: options.emailAndPassword?.resetPasswordTokenExpiresIn,
            onPasswordReset: !!options.emailAndPassword?.onPasswordReset,
            password: {
                hash: !!options.emailAndPassword?.password?.hash,
                verify: !!options.emailAndPassword?.password?.verify
            },
            autoSignIn: !!options.emailAndPassword?.autoSignIn,
            revokeSessionsOnPasswordReset: !!options.emailAndPassword?.revokeSessionsOnPasswordReset
        },
        socialProviders: Object.keys(options.socialProviders || {}).map((p)=>{
            const provider = options.socialProviders?.[p];
            if (!provider) return {};
            return {
                id: p,
                mapProfileToUser: !!provider.mapProfileToUser,
                disableDefaultScope: !!provider.disableDefaultScope,
                disableIdTokenSignIn: !!provider.disableIdTokenSignIn,
                disableImplicitSignUp: provider.disableImplicitSignUp,
                disableSignUp: provider.disableSignUp,
                getUserInfo: !!provider.getUserInfo,
                overrideUserInfoOnSignIn: !!provider.overrideUserInfoOnSignIn,
                prompt: provider.prompt,
                verifyIdToken: !!provider.verifyIdToken,
                scope: provider.scope,
                refreshAccessToken: !!provider.refreshAccessToken
            };
        }),
        plugins: options.plugins?.map((p)=>p.id.toString()),
        user: {
            modelName: options.user?.modelName,
            fields: options.user?.fields,
            additionalFields: options.user?.additionalFields,
            changeEmail: {
                enabled: options.user?.changeEmail?.enabled,
                sendChangeEmailVerification: !!options.user?.changeEmail?.sendChangeEmailVerification
            }
        },
        verification: {
            modelName: options.verification?.modelName,
            disableCleanup: options.verification?.disableCleanup,
            fields: options.verification?.fields
        },
        session: {
            modelName: options.session?.modelName,
            additionalFields: options.session?.additionalFields,
            cookieCache: {
                enabled: options.session?.cookieCache?.enabled,
                maxAge: options.session?.cookieCache?.maxAge
            },
            disableSessionRefresh: options.session?.disableSessionRefresh,
            expiresIn: options.session?.expiresIn,
            fields: options.session?.fields,
            freshAge: options.session?.freshAge,
            preserveSessionInDatabase: options.session?.preserveSessionInDatabase,
            storeSessionInDatabase: options.session?.storeSessionInDatabase,
            updateAge: options.session?.updateAge
        },
        account: {
            modelName: options.account?.modelName,
            fields: options.account?.fields,
            encryptOAuthTokens: options.account?.encryptOAuthTokens,
            updateAccountOnSignIn: options.account?.updateAccountOnSignIn,
            accountLinking: {
                enabled: options.account?.accountLinking?.enabled,
                trustedProviders: options.account?.accountLinking?.trustedProviders,
                updateUserInfoOnLink: options.account?.accountLinking?.updateUserInfoOnLink,
                allowUnlinkingAll: options.account?.accountLinking?.allowUnlinkingAll
            }
        },
        hooks: {
            after: !!options.hooks?.after,
            before: !!options.hooks?.before
        },
        secondaryStorage: !!options.secondaryStorage,
        advanced: {
            cookiePrefix: !!options.advanced?.cookiePrefix,
            //this shouldn't be tracked
            cookies: !!options.advanced?.cookies,
            crossSubDomainCookies: {
                domain: !!options.advanced?.crossSubDomainCookies?.domain,
                enabled: options.advanced?.crossSubDomainCookies?.enabled,
                additionalCookies: options.advanced?.crossSubDomainCookies?.additionalCookies
            },
            database: {
                useNumberId: !!options.advanced?.database?.useNumberId,
                generateId: options.advanced?.database?.generateId,
                defaultFindManyLimit: options.advanced?.database?.defaultFindManyLimit
            },
            useSecureCookies: options.advanced?.useSecureCookies,
            ipAddress: {
                disableIpTracking: options.advanced?.ipAddress?.disableIpTracking,
                ipAddressHeaders: options.advanced?.ipAddress?.ipAddressHeaders
            },
            disableCSRFCheck: options.advanced?.disableCSRFCheck,
            cookieAttributes: {
                expires: options.advanced?.defaultCookieAttributes?.expires,
                secure: options.advanced?.defaultCookieAttributes?.secure,
                sameSite: options.advanced?.defaultCookieAttributes?.sameSite,
                domain: !!options.advanced?.defaultCookieAttributes?.domain,
                path: options.advanced?.defaultCookieAttributes?.path,
                httpOnly: options.advanced?.defaultCookieAttributes?.httpOnly
            }
        },
        trustedOrigins: options.trustedOrigins?.length,
        rateLimit: {
            storage: options.rateLimit?.storage,
            modelName: options.rateLimit?.modelName,
            window: options.rateLimit?.window,
            customStorage: !!options.rateLimit?.customStorage,
            enabled: options.rateLimit?.enabled,
            max: options.rateLimit?.max
        },
        onAPIError: {
            errorURL: options.onAPIError?.errorURL,
            onError: !!options.onAPIError?.onError,
            throw: options.onAPIError?.throw
        },
        logger: {
            disabled: options.logger?.disabled,
            level: options.logger?.level,
            log: !!options.logger?.log
        },
        databaseHooks: {
            user: {
                create: {
                    after: !!options.databaseHooks?.user?.create?.after,
                    before: !!options.databaseHooks?.user?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.user?.update?.after,
                    before: !!options.databaseHooks?.user?.update?.before
                }
            },
            session: {
                create: {
                    after: !!options.databaseHooks?.session?.create?.after,
                    before: !!options.databaseHooks?.session?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.session?.update?.after,
                    before: !!options.databaseHooks?.session?.update?.before
                }
            },
            account: {
                create: {
                    after: !!options.databaseHooks?.account?.create?.after,
                    before: !!options.databaseHooks?.account?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.account?.update?.after,
                    before: !!options.databaseHooks?.account?.update?.before
                }
            },
            verification: {
                create: {
                    after: !!options.databaseHooks?.verification?.create?.after,
                    before: !!options.databaseHooks?.verification?.create?.before
                },
                update: {
                    after: !!options.databaseHooks?.verification?.update?.after,
                    before: !!options.databaseHooks?.verification?.update?.before
                }
            }
        }
    };
}
async function createTelemetry(options, context) {
    const debugEnabled = options.telemetry?.debug || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBooleanEnvVar"])("BETTER_AUTH_TELEMETRY_DEBUG", false);
    const TELEMETRY_ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENV"].BETTER_AUTH_TELEMETRY_ENDPOINT;
    const track = async (event)=>{
        try {
            if (context?.customTrack) {
                await context.customTrack(event);
            } else {
                if (debugEnabled) {
                    await Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("telemetry event", JSON.stringify(event, null, 2)));
                } else {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["betterFetch"])(TELEMETRY_ENDPOINT, {
                        method: "POST",
                        body: event
                    });
                }
            }
        } catch  {}
    };
    const isEnabled = async ()=>{
        const telemetryEnabled = options.telemetry?.enabled !== void 0 ? options.telemetry.enabled : false;
        const envEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBooleanEnvVar"])("BETTER_AUTH_TELEMETRY", false);
        return (envEnabled || telemetryEnabled) && (context?.skipTestCheck || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTest"])());
    };
    const enabled = await isEnabled();
    let anonymousId;
    if (enabled) {
        anonymousId = await getProjectId(options.baseURL);
        const payload = {
            config: getTelemetryAuthConfig(options),
            runtime: detectRuntime(),
            database: await detectDatabase(),
            framework: await detectFramework(),
            environment: detectEnvironment(),
            systemInfo: await detectSystemInfo(),
            packageManager: detectPackageManager()
        };
        void track({
            type: "init",
            payload,
            anonymousId
        });
    }
    return {
        publish: async (event)=>{
            if (!enabled) return;
            if (!anonymousId) {
                anonymousId = await getProjectId(options.baseURL);
            }
            await track({
                type: event.type,
                payload: event.payload,
                anonymousId
            });
        }
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@polar-sh/checkout/dist/embed.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarEmbedCheckout",
    ()=>t
]);
var e = "POLAR_CHECKOUT", t = class t {
    iframe;
    loader;
    loaded;
    closable;
    eventTarget;
    constructor(e, t){
        this.iframe = e, this.loader = t, this.loaded = !1, this.closable = !0, this.eventTarget = new EventTarget, this.initWindowListener(), this.addEventListener("loaded", this.loadedListener.bind(this)), this.addEventListener("close", this.closeListener.bind(this)), this.addEventListener("confirmed", this.confirmedListener.bind(this)), this.addEventListener("success", this.successListener.bind(this));
    }
    static postMessage(t, n) {
        window.parent.postMessage({
            ...t,
            type: e
        }, n);
    }
    static async create(e, n) {
        const s = document.createElement("style");
        s.innerText = `\n      .polar-loader-spinner {\n        width: 20px;\n        aspect-ratio: 1;\n        border-radius: 50%;\n        background: ${"dark" === n ? "#000" : "#fff"};\n        box-shadow: 0 0 0 0 ${"dark" === n ? "#fff" : "#000"};\n        animation: polar-loader-spinner-animation 1s infinite;\n      }\n      @keyframes polar-loader-spinner-animation {\n        100% {box-shadow: 0 0 0 30px #0000}\n      }\n      body.polar-no-scroll {\n        overflow: hidden;\n      }\n    `, document.head.appendChild(s);
        const o = document.createElement("div");
        o.style.position = "absolute", o.style.top = "50%", o.style.left = "50%", o.style.transform = "translate(-50%, -50%)", o.style.zIndex = "2147483647", o.style.colorScheme = "auto";
        const a = document.createElement("div");
        a.className = "polar-loader-spinner", o.appendChild(a), document.body.classList.add("polar-no-scroll"), document.body.appendChild(o);
        const i = new URL(e);
        i.searchParams.set("embed", "true"), i.searchParams.set("embed_origin", window.location.origin), n && i.searchParams.set("theme", n);
        const r = i.toString(), d = document.createElement("iframe");
        d.src = r, d.style.position = "fixed", d.style.top = "0", d.style.left = "0", d.style.width = "100%", d.style.height = "100%", d.style.border = "none", d.style.zIndex = "2147483647", d.style.backgroundColor = "rgba(0, 0, 0, 0.5)", d.style.colorScheme = "auto";
        const l = "https://polar.sh,https://sandbox.polar.sh".split(",").join(" ");
        d.allow = `payment 'self' ${l}; publickey-credentials-get 'self' ${l};`, document.body.appendChild(d);
        const c = new t(d, o);
        return new Promise((e)=>{
            c.addEventListener("loaded", ()=>e(c), {
                once: !0
            });
        });
    }
    static init() {
        document.querySelectorAll("[data-polar-checkout]").forEach((e)=>{
            e.removeEventListener("click", t.checkoutElementClickHandler), e.addEventListener("click", t.checkoutElementClickHandler);
        });
    }
    close() {
        document.body.contains(this.iframe) && document.body.removeChild(this.iframe), document.body.classList.remove("polar-no-scroll");
    }
    addEventListener(e, t, n) {
        this.eventTarget.addEventListener(e, t, n);
    }
    removeEventListener(e, t) {
        this.eventTarget.removeEventListener(e, t);
    }
    static async checkoutElementClickHandler(e) {
        e.preventDefault();
        let n = e.target;
        for(; !n.hasAttribute("data-polar-checkout");){
            if (!n.parentElement) return;
            n = n.parentElement;
        }
        const s = n.getAttribute("href") || n.getAttribute("data-polar-checkout"), o = n.getAttribute("data-polar-checkout-theme");
        t.create(s, o);
    }
    loadedListener(e) {
        e.defaultPrevented || this.loaded || (document.body.removeChild(this.loader), this.loaded = !0);
    }
    closeListener(e) {
        e.defaultPrevented || this.closable && this.close();
    }
    confirmedListener(e) {
        e.defaultPrevented || (this.closable = !1);
    }
    successListener(e) {
        e.defaultPrevented || (this.closable = !0, e.detail.redirect && (window.location.href = e.detail.successURL));
    }
    initWindowListener() {
        window.addEventListener("message", ({ data: t, origin: n })=>{
            "https://polar.sh,https://sandbox.polar.sh".split(",").includes(n) && t.type === e && this.eventTarget.dispatchEvent(new CustomEvent(t.event, {
                detail: t,
                cancelable: !0
            }));
        });
    }
};
if ("undefined" != ("TURBOPACK compile-time value", "undefined") && (window.Polar = {
    EmbedCheckout: t
}), "undefined" != typeof document) {
    const e = document.currentScript;
    e && e.hasAttribute("data-auto-init") && document.addEventListener("DOMContentLoaded", async ()=>{
        t.init();
    });
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/standardwebhooks/dist/timing_safe_equal.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timingSafeEqual = void 0;
function assert(expr, msg = "") {
    if (!expr) {
        throw new Error(msg);
    }
}
function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    if (!(a instanceof DataView)) {
        a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
        b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    assert(a instanceof DataView);
    assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while(++i < length){
        out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
}
exports.timingSafeEqual = timingSafeEqual; //# sourceMappingURL=timing_safe_equal.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/standardwebhooks/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Webhook = exports.WebhookVerificationError = void 0;
const timing_safe_equal_1 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/standardwebhooks/dist/timing_safe_equal.js [app-rsc] (ecmascript)");
const base64 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/@stablelib/base64/lib/base64.js [app-rsc] (ecmascript)");
const sha256 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/fast-sha256/sha256.js [app-rsc] (ecmascript)");
const WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60;
class ExtendableError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ExtendableError.prototype);
        this.name = "ExtendableError";
        this.stack = new Error(message).stack;
    }
}
class WebhookVerificationError extends ExtendableError {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, WebhookVerificationError.prototype);
        this.name = "WebhookVerificationError";
    }
}
exports.WebhookVerificationError = WebhookVerificationError;
class Webhook {
    constructor(secret, options){
        if (!secret) {
            throw new Error("Secret can't be empty.");
        }
        if ((options === null || options === void 0 ? void 0 : options.format) === "raw") {
            if (secret instanceof Uint8Array) {
                this.key = secret;
            } else {
                this.key = Uint8Array.from(secret, (c)=>c.charCodeAt(0));
            }
        } else {
            if (typeof secret !== "string") {
                throw new Error("Expected secret to be of type string");
            }
            if (secret.startsWith(Webhook.prefix)) {
                secret = secret.substring(Webhook.prefix.length);
            }
            this.key = base64.decode(secret);
        }
    }
    verify(payload, headers_) {
        const headers = {};
        for (const key of Object.keys(headers_)){
            headers[key.toLowerCase()] = headers_[key];
        }
        const msgId = headers["webhook-id"];
        const msgSignature = headers["webhook-signature"];
        const msgTimestamp = headers["webhook-timestamp"];
        if (!msgSignature || !msgId || !msgTimestamp) {
            throw new WebhookVerificationError("Missing required headers");
        }
        const timestamp = this.verifyTimestamp(msgTimestamp);
        const computedSignature = this.sign(msgId, timestamp, payload);
        const expectedSignature = computedSignature.split(",")[1];
        const passedSignatures = msgSignature.split(" ");
        const encoder = new globalThis.TextEncoder();
        for (const versionedSignature of passedSignatures){
            const [version, signature] = versionedSignature.split(",");
            if (version !== "v1") {
                continue;
            }
            if ((0, timing_safe_equal_1.timingSafeEqual)(encoder.encode(signature), encoder.encode(expectedSignature))) {
                return JSON.parse(payload.toString());
            }
        }
        throw new WebhookVerificationError("No matching signature found");
    }
    sign(msgId, timestamp, payload) {
        if (typeof payload === "string") {} else if (payload.constructor.name === "Buffer") {
            payload = payload.toString();
        } else {
            throw new Error("Expected payload to be of type string or Buffer.");
        }
        const encoder = new TextEncoder();
        const timestampNumber = Math.floor(timestamp.getTime() / 1000);
        const toSign = encoder.encode(`${msgId}.${timestampNumber}.${payload}`);
        const expectedSignature = base64.encode(sha256.hmac(this.key, toSign));
        return `v1,${expectedSignature}`;
    }
    verifyTimestamp(timestampHeader) {
        const now = Math.floor(Date.now() / 1000);
        const timestamp = parseInt(timestampHeader, 10);
        if (isNaN(timestamp)) {
            throw new WebhookVerificationError("Invalid Signature Headers");
        }
        if (now - timestamp > WEBHOOK_TOLERANCE_IN_SECONDS) {
            throw new WebhookVerificationError("Message timestamp too old");
        }
        if (timestamp > now + WEBHOOK_TOLERANCE_IN_SECONDS) {
            throw new WebhookVerificationError("Message timestamp too new");
        }
        return new Date(timestamp * 1000);
    }
}
exports.Webhook = Webhook;
Webhook.prefix = "whsec_"; //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@stablelib/base64/lib/base64.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package base64 implements Base64 encoding and decoding.
 */ // Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */ var Coder = function() {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) {
            _paddingCharacter = "=";
        }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function(length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function(data) {
        var out = "";
        var i = 0;
        for(; i < data.length - 2; i += 3){
            var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            out += this._encodeByte(c >>> 1 * 6 & 63);
            out += this._encodeByte(c >>> 0 * 6 & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            if (left === 2) {
                out += this._encodeByte(c >>> 1 * 6 & 63);
            } else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function(length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function(s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function(s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for(; i < length - 4; i += 4){
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v0 << 2 | v1 >>> 4;
            out[op++] = v1 << 4 | v2 >>> 2;
            out[op++] = v2 << 6 | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = v0 << 2 | v1 >>> 4;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = v1 << 4 | v2 >>> 2;
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v2 << 6 | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function(b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
        // b > 51
        result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
        // b > 61
        result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
        // b > 62
        result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function(c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
        // c == 47 (c > 46 and c < 48)
        result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
        // c > 47 and c < 58
        result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
        // c > 64 and c < 91
        result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
        // c > 96 and c < 123
        result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
        return result;
    };
    Coder.prototype._getPaddingLength = function(s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for(var i = s.length - 1; i >= 0; i--){
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}();
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */ var URLSafeCoder = function(_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function(b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
        // b > 51
        result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
        // b > 61
        result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
        // b > 62
        result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function(c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
        // c == 95 (c > 94 and c < 96)
        result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
        // c > 47 and c < 58
        result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
        // c > 64 and c < 91
        result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
        // c > 96 and c < 123
        result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
        return result;
    };
    return URLSafeCoder;
}(Coder);
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function(length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function(length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function(s) {
    return stdCoder.decodedLength(s);
}; //# sourceMappingURL=base64.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/fast-sha256/sha256.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(root, factory) {
    // Hack to make all exports of this module sha256 function object properties.
    var exports = {};
    factory(exports);
    var sha256 = exports["default"];
    for(var k in exports){
        sha256[k] = exports[k];
    }
    if (("TURBOPACK compile-time value", "object") === 'object' && typeof module.exports === 'object') {
        module.exports = sha256;
    } else if (typeof define === 'function' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return sha256;
        }(__turbopack_context__.r, exports, module));
    } else {
        root.sha256 = sha256;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(exports) {
    "use strict";
    exports.__esModule = true;
    // SHA-256 (+ HMAC and PBKDF2) for JavaScript.
    //
    // Written in 2014-2016 by Dmitry Chestnykh.
    // Public domain, no warranty.
    //
    // Functions (accept and return Uint8Arrays):
    //
    //   sha256(message) -> hash
    //   sha256.hmac(key, message) -> mac
    //   sha256.pbkdf2(password, salt, rounds, dkLen) -> dk
    //
    //  Classes:
    //
    //   new sha256.Hash()
    //   new sha256.HMAC(key)
    //
    exports.digestLength = 32;
    exports.blockSize = 64;
    // SHA-256 constants
    var K = new Uint32Array([
        0x428a2f98,
        0x71374491,
        0xb5c0fbcf,
        0xe9b5dba5,
        0x3956c25b,
        0x59f111f1,
        0x923f82a4,
        0xab1c5ed5,
        0xd807aa98,
        0x12835b01,
        0x243185be,
        0x550c7dc3,
        0x72be5d74,
        0x80deb1fe,
        0x9bdc06a7,
        0xc19bf174,
        0xe49b69c1,
        0xefbe4786,
        0x0fc19dc6,
        0x240ca1cc,
        0x2de92c6f,
        0x4a7484aa,
        0x5cb0a9dc,
        0x76f988da,
        0x983e5152,
        0xa831c66d,
        0xb00327c8,
        0xbf597fc7,
        0xc6e00bf3,
        0xd5a79147,
        0x06ca6351,
        0x14292967,
        0x27b70a85,
        0x2e1b2138,
        0x4d2c6dfc,
        0x53380d13,
        0x650a7354,
        0x766a0abb,
        0x81c2c92e,
        0x92722c85,
        0xa2bfe8a1,
        0xa81a664b,
        0xc24b8b70,
        0xc76c51a3,
        0xd192e819,
        0xd6990624,
        0xf40e3585,
        0x106aa070,
        0x19a4c116,
        0x1e376c08,
        0x2748774c,
        0x34b0bcb5,
        0x391c0cb3,
        0x4ed8aa4a,
        0x5b9cca4f,
        0x682e6ff3,
        0x748f82ee,
        0x78a5636f,
        0x84c87814,
        0x8cc70208,
        0x90befffa,
        0xa4506ceb,
        0xbef9a3f7,
        0xc67178f2
    ]);
    function hashBlocks(w, v, p, pos, len) {
        var a, b, c, d, e, f, g, h, u, i, j, t1, t2;
        while(len >= 64){
            a = v[0];
            b = v[1];
            c = v[2];
            d = v[3];
            e = v[4];
            f = v[5];
            g = v[6];
            h = v[7];
            for(i = 0; i < 16; i++){
                j = pos + i * 4;
                w[i] = (p[j] & 0xff) << 24 | (p[j + 1] & 0xff) << 16 | (p[j + 2] & 0xff) << 8 | p[j + 3] & 0xff;
            }
            for(i = 16; i < 64; i++){
                u = w[i - 2];
                t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
                u = w[i - 15];
                t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
                w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
            }
            for(i = 0; i < 64; i++){
                t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
                t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
                h = g;
                g = f;
                f = e;
                e = d + t1 | 0;
                d = c;
                c = b;
                b = a;
                a = t1 + t2 | 0;
            }
            v[0] += a;
            v[1] += b;
            v[2] += c;
            v[3] += d;
            v[4] += e;
            v[5] += f;
            v[6] += g;
            v[7] += h;
            pos += 64;
            len -= 64;
        }
        return pos;
    }
    // Hash implements SHA256 hash algorithm.
    var Hash = function() {
        function Hash() {
            this.digestLength = exports.digestLength;
            this.blockSize = exports.blockSize;
            // Note: Int32Array is used instead of Uint32Array for performance reasons.
            this.state = new Int32Array(8); // hash state
            this.temp = new Int32Array(64); // temporary state
            this.buffer = new Uint8Array(128); // buffer for data to hash
            this.bufferLength = 0; // number of bytes in buffer
            this.bytesHashed = 0; // number of total bytes hashed
            this.finished = false; // indicates whether the hash was finalized
            this.reset();
        }
        // Resets hash state making it possible
        // to re-use this instance to hash other data.
        Hash.prototype.reset = function() {
            this.state[0] = 0x6a09e667;
            this.state[1] = 0xbb67ae85;
            this.state[2] = 0x3c6ef372;
            this.state[3] = 0xa54ff53a;
            this.state[4] = 0x510e527f;
            this.state[5] = 0x9b05688c;
            this.state[6] = 0x1f83d9ab;
            this.state[7] = 0x5be0cd19;
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            return this;
        };
        // Cleans internal buffers and re-initializes hash state.
        Hash.prototype.clean = function() {
            for(var i = 0; i < this.buffer.length; i++){
                this.buffer[i] = 0;
            }
            for(var i = 0; i < this.temp.length; i++){
                this.temp[i] = 0;
            }
            this.reset();
        };
        // Updates hash state with the given data.
        //
        // Optionally, length of the data can be specified to hash
        // fewer bytes than data.length.
        //
        // Throws error when trying to update already finalized hash:
        // instance must be reset to use it again.
        Hash.prototype.update = function(data, dataLength) {
            if (dataLength === void 0) {
                dataLength = data.length;
            }
            if (this.finished) {
                throw new Error("SHA256: can't update because hash was finished.");
            }
            var dataPos = 0;
            this.bytesHashed += dataLength;
            if (this.bufferLength > 0) {
                while(this.bufferLength < 64 && dataLength > 0){
                    this.buffer[this.bufferLength++] = data[dataPos++];
                    dataLength--;
                }
                if (this.bufferLength === 64) {
                    hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                    this.bufferLength = 0;
                }
            }
            if (dataLength >= 64) {
                dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
                dataLength %= 64;
            }
            while(dataLength > 0){
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
            }
            return this;
        };
        // Finalizes hash state and puts hash into out.
        //
        // If hash was already finalized, puts the same value.
        Hash.prototype.finish = function(out) {
            if (!this.finished) {
                var bytesHashed = this.bytesHashed;
                var left = this.bufferLength;
                var bitLenHi = bytesHashed / 0x20000000 | 0;
                var bitLenLo = bytesHashed << 3;
                var padLength = bytesHashed % 64 < 56 ? 64 : 128;
                this.buffer[left] = 0x80;
                for(var i = left + 1; i < padLength - 8; i++){
                    this.buffer[i] = 0;
                }
                this.buffer[padLength - 8] = bitLenHi >>> 24 & 0xff;
                this.buffer[padLength - 7] = bitLenHi >>> 16 & 0xff;
                this.buffer[padLength - 6] = bitLenHi >>> 8 & 0xff;
                this.buffer[padLength - 5] = bitLenHi >>> 0 & 0xff;
                this.buffer[padLength - 4] = bitLenLo >>> 24 & 0xff;
                this.buffer[padLength - 3] = bitLenLo >>> 16 & 0xff;
                this.buffer[padLength - 2] = bitLenLo >>> 8 & 0xff;
                this.buffer[padLength - 1] = bitLenLo >>> 0 & 0xff;
                hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
                this.finished = true;
            }
            for(var i = 0; i < 8; i++){
                out[i * 4 + 0] = this.state[i] >>> 24 & 0xff;
                out[i * 4 + 1] = this.state[i] >>> 16 & 0xff;
                out[i * 4 + 2] = this.state[i] >>> 8 & 0xff;
                out[i * 4 + 3] = this.state[i] >>> 0 & 0xff;
            }
            return this;
        };
        // Returns the final hash digest.
        Hash.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
        };
        // Internal function for use in HMAC for optimization.
        Hash.prototype._saveState = function(out) {
            for(var i = 0; i < this.state.length; i++){
                out[i] = this.state[i];
            }
        };
        // Internal function for use in HMAC for optimization.
        Hash.prototype._restoreState = function(from, bytesHashed) {
            for(var i = 0; i < this.state.length; i++){
                this.state[i] = from[i];
            }
            this.bytesHashed = bytesHashed;
            this.finished = false;
            this.bufferLength = 0;
        };
        return Hash;
    }();
    exports.Hash = Hash;
    // HMAC implements HMAC-SHA256 message authentication algorithm.
    var HMAC = function() {
        function HMAC(key) {
            this.inner = new Hash();
            this.outer = new Hash();
            this.blockSize = this.inner.blockSize;
            this.digestLength = this.inner.digestLength;
            var pad = new Uint8Array(this.blockSize);
            if (key.length > this.blockSize) {
                new Hash().update(key).finish(pad).clean();
            } else {
                for(var i = 0; i < key.length; i++){
                    pad[i] = key[i];
                }
            }
            for(var i = 0; i < pad.length; i++){
                pad[i] ^= 0x36;
            }
            this.inner.update(pad);
            for(var i = 0; i < pad.length; i++){
                pad[i] ^= 0x36 ^ 0x5c;
            }
            this.outer.update(pad);
            this.istate = new Uint32Array(8);
            this.ostate = new Uint32Array(8);
            this.inner._saveState(this.istate);
            this.outer._saveState(this.ostate);
            for(var i = 0; i < pad.length; i++){
                pad[i] = 0;
            }
        }
        // Returns HMAC state to the state initialized with key
        // to make it possible to run HMAC over the other data with the same
        // key without creating a new instance.
        HMAC.prototype.reset = function() {
            this.inner._restoreState(this.istate, this.inner.blockSize);
            this.outer._restoreState(this.ostate, this.outer.blockSize);
            return this;
        };
        // Cleans HMAC state.
        HMAC.prototype.clean = function() {
            for(var i = 0; i < this.istate.length; i++){
                this.ostate[i] = this.istate[i] = 0;
            }
            this.inner.clean();
            this.outer.clean();
        };
        // Updates state with provided data.
        HMAC.prototype.update = function(data) {
            this.inner.update(data);
            return this;
        };
        // Finalizes HMAC and puts the result in out.
        HMAC.prototype.finish = function(out) {
            if (this.outer.finished) {
                this.outer.finish(out);
            } else {
                this.inner.finish(out);
                this.outer.update(out, this.digestLength).finish(out);
            }
            return this;
        };
        // Returns message authentication code.
        HMAC.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
        };
        return HMAC;
    }();
    exports.HMAC = HMAC;
    // Returns SHA256 hash of data.
    function hash(data) {
        var h = new Hash().update(data);
        var digest = h.digest();
        h.clean();
        return digest;
    }
    exports.hash = hash;
    // Function hash is both available as module.hash and as default export.
    exports["default"] = hash;
    // Returns HMAC-SHA256 of data under the key.
    function hmac(key, data) {
        var h = new HMAC(key).update(data);
        var digest = h.digest();
        h.clean();
        return digest;
    }
    exports.hmac = hmac;
    // Fills hkdf buffer like this:
    // T(1) = HMAC-Hash(PRK, T(0) | info | 0x01)
    function fillBuffer(buffer, hmac, info, counter) {
        // Counter is a byte value: check if it overflowed.
        var num = counter[0];
        if (num === 0) {
            throw new Error("hkdf: cannot expand more");
        }
        // Prepare HMAC instance for new data with old key.
        hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (num > 1) {
            hmac.update(buffer);
        }
        // Hash in info if it exists.
        if (info) {
            hmac.update(info);
        }
        // Hash in the counter.
        hmac.update(counter);
        // Output result to buffer and clean HMAC instance.
        hmac.finish(buffer);
        // Increment counter inside typed array, this works properly.
        counter[0]++;
    }
    var hkdfSalt = new Uint8Array(exports.digestLength); // Filled with zeroes.
    function hkdf(key, salt, info, length) {
        if (salt === void 0) {
            salt = hkdfSalt;
        }
        if (length === void 0) {
            length = 32;
        }
        var counter = new Uint8Array([
            1
        ]);
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac(salt, key);
        // Initialize HMAC for expanding with extracted key.
        // Ensure no collisions with `hmac` function.
        var hmac_ = new HMAC(okm);
        // Allocate buffer.
        var buffer = new Uint8Array(hmac_.digestLength);
        var bufpos = buffer.length;
        var out = new Uint8Array(length);
        for(var i = 0; i < length; i++){
            if (bufpos === buffer.length) {
                fillBuffer(buffer, hmac_, info, counter);
                bufpos = 0;
            }
            out[i] = buffer[bufpos++];
        }
        hmac_.clean();
        buffer.fill(0);
        counter.fill(0);
        return out;
    }
    exports.hkdf = hkdf;
    // Derives a key from password and salt using PBKDF2-HMAC-SHA256
    // with the given number of iterations.
    //
    // The number of bytes returned is equal to dkLen.
    //
    // (For better security, avoid dkLen greater than hash length - 32 bytes).
    function pbkdf2(password, salt, iterations, dkLen) {
        var prf = new HMAC(password);
        var len = prf.digestLength;
        var ctr = new Uint8Array(4);
        var t = new Uint8Array(len);
        var u = new Uint8Array(len);
        var dk = new Uint8Array(dkLen);
        for(var i = 0; i * len < dkLen; i++){
            var c = i + 1;
            ctr[0] = c >>> 24 & 0xff;
            ctr[1] = c >>> 16 & 0xff;
            ctr[2] = c >>> 8 & 0xff;
            ctr[3] = c >>> 0 & 0xff;
            prf.reset();
            prf.update(salt);
            prf.update(ctr);
            prf.finish(u);
            for(var j = 0; j < len; j++){
                t[j] = u[j];
            }
            for(var j = 2; j <= iterations; j++){
                prf.reset();
                prf.update(u).finish(u);
                for(var k = 0; k < len; k++){
                    t[k] ^= u[k];
                }
            }
            for(var j = 0; j < len && i * len + j < dkLen; j++){
                dk[i * len + j] = t[j];
            }
        }
        for(var i = 0; i < len; i++){
            t[i] = u[i] = 0;
        }
        for(var i = 0; i < 4; i++){
            ctr[i] = 0;
        }
        prf.clean();
        return dk;
    }
    exports.pbkdf2 = pbkdf2;
});
}),
"[project]/Downloads/nodebase-main/node_modules/@polar-sh/better-auth/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/customer.ts
__turbopack_context__.s([
    "CheckoutParams",
    ()=>CheckoutParams,
    "checkout",
    ()=>checkout,
    "polar",
    ()=>polar,
    "polarClient",
    ()=>polarClient,
    "portal",
    ()=>portal,
    "usage",
    ()=>usage,
    "webhooks",
    ()=>webhooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/api/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
// src/client.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$checkout$2f$dist$2f$embed$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@polar-sh/checkout/dist/embed.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/shared/better-auth.DEBtROF9.mjs [app-rsc] (ecmascript) <export s as sessionMiddleware>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/plugins/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/core/dist/middleware/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
// src/plugins/checkout.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__getSessionFromCtx$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/shared/better-auth.DEBtROF9.mjs [app-rsc] (ecmascript) <export g as getSessionFromCtx>");
// src/plugins/webhooks.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$sdk$2f$dist$2f$esm$2f$webhooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@polar-sh/sdk/dist/esm/webhooks.js [app-rsc] (ecmascript)");
;
var onBeforeUserCreate = (options)=>async (user, context)=>{
        if (context && options.createCustomerOnSignUp) {
            try {
                const params = options.getCustomerCreateParams ? await options.getCustomerCreateParams({
                    user
                }) : {};
                if (!user.email) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "An associated email is required"
                    });
                }
                await options.client.customers.create({
                    ...params,
                    email: user.email,
                    name: user.name
                });
            } catch (e) {
                if (e instanceof Error) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: `Polar customer creation failed. Error: ${e.message}`
                    });
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: `Polar customer creation failed. Error: ${e}`
                });
            }
        }
    };
var onAfterUserCreate = (options)=>async (user, context)=>{
        if (context && options.createCustomerOnSignUp) {
            try {
                const { result: existingCustomers } = await options.client.customers.list({
                    email: user.email
                });
                const existingCustomer = existingCustomers.items[0];
                if (existingCustomer) {
                    if (existingCustomer.externalId !== user.id) {
                        await options.client.customers.update({
                            id: existingCustomer.id,
                            customerUpdate: {
                                externalId: user.id
                            }
                        });
                    }
                }
            } catch (e) {
                if (e instanceof Error) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: `Polar customer creation failed. Error: ${e.message}`
                    });
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: `Polar customer creation failed. Error: ${e}`
                });
            }
        }
    };
var onUserUpdate = (options)=>async (user, context)=>{
        if (context && options.createCustomerOnSignUp) {
            try {
                await options.client.customers.updateExternal({
                    externalId: user.id,
                    customerUpdateExternalID: {
                        email: user.email,
                        name: user.name
                    }
                });
            } catch (e) {
                if (e instanceof Error) {
                    context.context.logger.error(`Polar customer update failed. Error: ${e.message}`);
                } else {
                    context.context.logger.error(`Polar customer update failed. Error: ${e}`);
                }
            }
        }
    };
;
var polarClient = ()=>{
    return {
        id: "polar-client",
        $InferServerPlugin: {},
        getActions: ($fetch)=>{
            return {
                checkoutEmbed: async (data, fetchOptions)=>{
                    const res = await $fetch("/checkout", {
                        method: "POST",
                        body: {
                            ...data,
                            redirect: false,
                            embedOrigin: window.location.origin
                        },
                        ...fetchOptions
                    });
                    if (res.error) {
                        throw new Error(res.error.message);
                    }
                    const checkout2 = res.data;
                    const theme = new URL(checkout2.url).searchParams.get("theme") ?? "light";
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$checkout$2f$dist$2f$embed$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PolarEmbedCheckout"].create(checkout2.url, theme);
                }
            };
        }
    };
};
;
;
;
;
var portal = ({ returnUrl } = {})=>(polar2)=>{
        const retUrl = returnUrl ? new URL(returnUrl) : void 0;
        return {
            portal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/portal", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session?.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                console.log(retUrl ? decodeURI(retUrl.toString()) : void 0);
                try {
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: ctx.context.session?.user.id,
                        returnUrl: retUrl ? decodeURI(retUrl.toString()) : void 0
                    });
                    return ctx.json({
                        url: customerSession.customerPortalUrl,
                        redirect: true
                    });
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar customer portal creation failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Customer portal creation failed"
                    });
                }
            }),
            state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/state", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                try {
                    const state = await polar2.customers.getStateExternal({
                        externalId: ctx.context.session?.user.id
                    });
                    return ctx.json(state);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar subscriptions list failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Subscriptions list failed"
                    });
                }
            }),
            benefits: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/benefits/list", {
                method: "GET",
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional()
                }).optional(),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                try {
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: ctx.context.session?.user.id
                    });
                    const benefits = await polar2.customerPortal.benefitGrants.list({
                        customerSession: customerSession.token
                    }, {
                        page: ctx.query?.page,
                        limit: ctx.query?.limit
                    });
                    return ctx.json(benefits);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar benefits list failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Benefits list failed"
                    });
                }
            }),
            subscriptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/subscriptions/list", {
                method: "GET",
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    referenceId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    active: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional()
                }).optional(),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                if (ctx.query?.referenceId) {
                    try {
                        const subscriptions = await polar2.subscriptions.list({
                            page: ctx.query?.page,
                            limit: ctx.query?.limit,
                            active: ctx.query?.active,
                            metadata: {
                                referenceId: ctx.query?.referenceId
                            }
                        });
                        return ctx.json(subscriptions);
                    } catch (e) {
                        console.log(e);
                        if (e instanceof Error) {
                            ctx.context.logger.error(`Polar subscriptions list with referenceId failed. Error: ${e.message}`);
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                            message: "Subscriptions list with referenceId failed"
                        });
                    }
                }
                try {
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: ctx.context.session?.user.id
                    });
                    const subscriptions = await polar2.customerPortal.subscriptions.list({
                        customerSession: customerSession.token
                    }, {
                        page: ctx.query?.page,
                        limit: ctx.query?.limit,
                        active: ctx.query?.active
                    });
                    return ctx.json(subscriptions);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar subscriptions list failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Polar subscriptions list failed"
                    });
                }
            }),
            orders: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/orders/list", {
                method: "GET",
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    productBillingType: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                        "recurring",
                        "one_time"
                    ]).optional()
                }).optional(),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                try {
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: ctx.context.session?.user.id
                    });
                    const orders = await polar2.customerPortal.orders.list({
                        customerSession: customerSession.token
                    }, {
                        page: ctx.query?.page,
                        limit: ctx.query?.limit,
                        productBillingType: ctx.query?.productBillingType
                    });
                    return ctx.json(orders);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar orders list failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Orders list failed"
                    });
                }
            })
        };
    };
;
;
;
var CheckoutParams = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    products: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]).optional(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    referenceId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    customFieldData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])).optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])).optional(),
    allowDiscountCodes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional(),
    discountId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    redirect: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional(),
    embedOrigin: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
});
var checkout = (checkoutOptions = {})=>(polar2)=>{
        return {
            checkout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/checkout", {
                method: "POST",
                body: CheckoutParams
            }, async (ctx)=>{
                const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__getSessionFromCtx$3e$__["getSessionFromCtx"])(ctx);
                let productIds = [];
                if (ctx.body.slug) {
                    const resolvedProducts = await (typeof checkoutOptions.products === "function" ? checkoutOptions.products() : checkoutOptions.products);
                    const productId = resolvedProducts?.find((product)=>product.slug === ctx.body.slug)?.productId;
                    if (!productId) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: "Product not found"
                        });
                    }
                    productIds = [
                        productId
                    ];
                } else {
                    productIds = Array.isArray(ctx.body.products) ? ctx.body.products.filter((id)=>id !== void 0) : [
                        ctx.body.products
                    ].filter((id)=>id !== void 0);
                }
                if (checkoutOptions.authenticatedUsersOnly && !session?.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: "You must be logged in to checkout"
                    });
                }
                try {
                    const checkout2 = await polar2.checkouts.create({
                        externalCustomerId: session?.user.id,
                        products: productIds,
                        successUrl: checkoutOptions.successUrl ? new URL(checkoutOptions.successUrl, ctx.request?.url ?? ctx.context.baseURL).toString() : void 0,
                        metadata: ctx.body.referenceId ? {
                            referenceId: ctx.body.referenceId,
                            ...ctx.body.metadata
                        } : ctx.body.metadata,
                        customFieldData: ctx.body.customFieldData,
                        allowDiscountCodes: ctx.body.allowDiscountCodes ?? true,
                        discountId: ctx.body.discountId,
                        embedOrigin: ctx.body.embedOrigin,
                        returnUrl: checkoutOptions.returnUrl ? new URL(checkoutOptions.returnUrl, ctx.request?.url ?? ctx.context.baseURL).toString() : void 0
                    });
                    const redirectUrl = new URL(checkout2.url);
                    if (checkoutOptions.theme) {
                        redirectUrl.searchParams.set("theme", checkoutOptions.theme);
                    }
                    return ctx.json({
                        url: redirectUrl.toString(),
                        redirect: ctx.body.redirect ?? true
                    });
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar checkout creation failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Checkout creation failed"
                    });
                }
            })
        };
    };
;
;
var usage = (_usageOptions)=>(polar2)=>{
        return {
            meters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/usage/meters/list", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ],
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional()
                })
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                try {
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: ctx.context.session.user.id
                    });
                    const customerMeters = await polar2.customerPortal.customerMeters.list({
                        customerSession: customerSession.token
                    }, {
                        page: ctx.query?.page,
                        limit: ctx.query?.limit
                    });
                    return ctx.json(customerMeters);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar meters list failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Meters list failed"
                    });
                }
            }),
            ingestion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/usage/ingest", {
                method: "POST",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    event: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
                    ]))
                }),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                try {
                    const ingestion = await polar2.events.ingest({
                        events: [
                            {
                                name: ctx.body.event,
                                metadata: ctx.body.metadata,
                                externalCustomerId: ctx.context.session.user.id
                            }
                        ]
                    });
                    return ctx.json(ingestion);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar ingestion failed. Error: ${e.message}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Ingestion failed"
                    });
                }
            })
        };
    };
// ../adapter-utils/dist/index.js
var handleWebhookPayload = async (payload, { webhookSecret, entitlements, onPayload, ...eventHandlers })=>{
    const promises = [];
    if (onPayload) {
        promises.push(onPayload(payload));
    }
    switch(payload.type){
        case "checkout.created":
            if (eventHandlers.onCheckoutCreated) {
                promises.push(eventHandlers.onCheckoutCreated(payload));
            }
            break;
        case "checkout.updated":
            if (eventHandlers.onCheckoutUpdated) {
                promises.push(eventHandlers.onCheckoutUpdated(payload));
            }
            break;
        case "order.created":
            if (eventHandlers.onOrderCreated) {
                promises.push(eventHandlers.onOrderCreated(payload));
            }
            break;
        case "order.updated":
            if (eventHandlers.onOrderUpdated) {
                promises.push(eventHandlers.onOrderUpdated(payload));
            }
            break;
        case "order.paid":
            if (eventHandlers.onOrderPaid) {
                promises.push(eventHandlers.onOrderPaid(payload));
            }
            break;
        case "subscription.created":
            if (eventHandlers.onSubscriptionCreated) {
                promises.push(eventHandlers.onSubscriptionCreated(payload));
            }
            break;
        case "subscription.updated":
            if (eventHandlers.onSubscriptionUpdated) {
                promises.push(eventHandlers.onSubscriptionUpdated(payload));
            }
            break;
        case "subscription.active":
            if (eventHandlers.onSubscriptionActive) {
                promises.push(eventHandlers.onSubscriptionActive(payload));
            }
            break;
        case "subscription.canceled":
            if (eventHandlers.onSubscriptionCanceled) {
                promises.push(eventHandlers.onSubscriptionCanceled(payload));
            }
            break;
        case "subscription.uncanceled":
            if (eventHandlers.onSubscriptionUncanceled) {
                promises.push(eventHandlers.onSubscriptionUncanceled(payload));
            }
            break;
        case "subscription.revoked":
            if (eventHandlers.onSubscriptionRevoked) {
                promises.push(eventHandlers.onSubscriptionRevoked(payload));
            }
            break;
        case "product.created":
            if (eventHandlers.onProductCreated) {
                promises.push(eventHandlers.onProductCreated(payload));
            }
            break;
        case "product.updated":
            if (eventHandlers.onProductUpdated) {
                promises.push(eventHandlers.onProductUpdated(payload));
            }
            break;
        case "organization.updated":
            if (eventHandlers.onOrganizationUpdated) {
                promises.push(eventHandlers.onOrganizationUpdated(payload));
            }
            break;
        case "benefit.created":
            if (eventHandlers.onBenefitCreated) {
                promises.push(eventHandlers.onBenefitCreated(payload));
            }
            break;
        case "benefit.updated":
            if (eventHandlers.onBenefitUpdated) {
                promises.push(eventHandlers.onBenefitUpdated(payload));
            }
            break;
        case "benefit_grant.created":
            if (eventHandlers.onBenefitGrantCreated) {
                promises.push(eventHandlers.onBenefitGrantCreated(payload));
            }
            break;
        case "benefit_grant.updated":
            if (eventHandlers.onBenefitGrantUpdated) {
                promises.push(eventHandlers.onBenefitGrantUpdated(payload));
            }
            break;
        case "benefit_grant.revoked":
            if (eventHandlers.onBenefitGrantRevoked) {
                promises.push(eventHandlers.onBenefitGrantRevoked(payload));
            }
            break;
        case "customer.created":
            if (eventHandlers.onCustomerCreated) {
                promises.push(eventHandlers.onCustomerCreated(payload));
            }
            break;
        case "customer.updated":
            if (eventHandlers.onCustomerUpdated) {
                promises.push(eventHandlers.onCustomerUpdated(payload));
            }
            break;
        case "customer.deleted":
            if (eventHandlers.onCustomerDeleted) {
                promises.push(eventHandlers.onCustomerDeleted(payload));
            }
            break;
        case "customer.state_changed":
            if (eventHandlers.onCustomerStateChanged) {
                promises.push(eventHandlers.onCustomerStateChanged(payload));
            }
            break;
        case "order.refunded":
            if (eventHandlers.onOrderRefunded) {
                promises.push(eventHandlers.onOrderRefunded(payload));
            }
            break;
        case "refund.created":
            if (eventHandlers.onRefundCreated) {
                promises.push(eventHandlers.onRefundCreated(payload));
            }
            break;
        case "refund.updated":
            if (eventHandlers.onRefundUpdated) {
                promises.push(eventHandlers.onRefundUpdated(payload));
            }
            break;
    }
    switch(payload.type){
        case "benefit_grant.created":
        case "benefit_grant.revoked":
            if (entitlements) {
                for (const handler of entitlements.handlers){
                    promises.push(handler(payload));
                }
            }
    }
    return Promise.all(promises);
};
;
;
var webhooks = (options)=>(_polar)=>{
        return {
            polarWebhooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/polar/webhooks", {
                method: "POST",
                metadata: {
                    isAction: false
                },
                cloneRequest: true
            }, async (ctx)=>{
                const { secret, ...eventHandlers } = options;
                if (!ctx.request?.body) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR");
                }
                const buf = await ctx.request.text();
                let event;
                try {
                    if (!secret) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                            message: "Polar webhook secret not found"
                        });
                    }
                    const headers = {
                        "webhook-id": ctx.request.headers.get("webhook-id"),
                        "webhook-timestamp": ctx.request.headers.get("webhook-timestamp"),
                        "webhook-signature": ctx.request.headers.get("webhook-signature")
                    };
                    event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$sdk$2f$dist$2f$esm$2f$webhooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateEvent"])(buf, headers, secret);
                } catch (err) {
                    if (err instanceof Error) {
                        ctx.context.logger.error(`${err.message}`);
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: `Webhook Error: ${err.message}`
                        });
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: `Webhook Error: ${err}`
                    });
                }
                try {
                    await handleWebhookPayload(event, {
                        webhookSecret: secret,
                        ...eventHandlers
                    });
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error(`Polar webhook failed. Error: ${e.message}`);
                    } else {
                        ctx.context.logger.error(`Polar webhook failed. Error: ${e}`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "Webhook error: See server logs for more information."
                    });
                }
                return ctx.json({
                    received: true
                });
            })
        };
    };
// src/index.ts
var polar = (options)=>{
    const plugins = options.use.map((use)=>use(options.client)).reduce((acc, plugin)=>{
        Object.assign(acc, plugin);
        return acc;
    }, {});
    return {
        id: "polar",
        endpoints: {
            ...plugins
        },
        init () {
            return {
                options: {
                    databaseHooks: {
                        user: {
                            create: {
                                before: onBeforeUserCreate(options),
                                after: onAfterUserCreate(options)
                            },
                            update: {
                                after: onUserUpdate(options)
                            }
                        }
                    }
                }
            };
        }
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/double-indexed-kv.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoubleIndexedKV",
    ()=>DoubleIndexedKV
]);
class DoubleIndexedKV {
    constructor(){
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
} //# sourceMappingURL=double-indexed-kv.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/registry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Registry",
    ()=>Registry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/double-indexed-kv.js [app-rsc] (ecmascript)");
;
class Registry {
    constructor(generateIdentifier){
        this.generateIdentifier = generateIdentifier;
        this.kv = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DoubleIndexedKV"]();
    }
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
} //# sourceMappingURL=registry.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/class-registry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassRegistry",
    ()=>ClassRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/registry.js [app-rsc] (ecmascript)");
;
class ClassRegistry extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Registry"] {
    constructor(){
        super((c)=>c.name);
        this.classToAllowedProps = new Map();
    }
    register(value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        } else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
} //# sourceMappingURL=class-registry.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "find",
    ()=>find,
    "findArr",
    ()=>findArr,
    "forEach",
    ()=>forEach,
    "includes",
    ()=>includes
]);
function valuesOfObj(record) {
    if ('values' in Object) {
        // eslint-disable-next-line es5/no-es6-methods
        return Object.values(record);
    }
    const values = [];
    // eslint-disable-next-line no-restricted-syntax
    for(const key in record){
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ('find' in values) {
        // eslint-disable-next-line es5/no-es6-methods
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for(let i = 0; i < valuesNotNever.length; i++){
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
function forEach(record, run) {
    Object.entries(record).forEach(([key, value])=>run(value, key));
}
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
    for(let i = 0; i < record.length; i++){
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
} //# sourceMappingURL=util.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/custom-transformer-registry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomTransformerRegistry",
    ()=>CustomTransformerRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
;
class CustomTransformerRegistry {
    constructor(){
        this.transfomers = {};
    }
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["find"])(this.transfomers, (transformer)=>transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
} //# sourceMappingURL=custom-transformer-registry.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArray",
    ()=>isArray,
    "isBigint",
    ()=>isBigint,
    "isBoolean",
    ()=>isBoolean,
    "isDate",
    ()=>isDate,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isError",
    ()=>isError,
    "isInfinite",
    ()=>isInfinite,
    "isMap",
    ()=>isMap,
    "isNaNValue",
    ()=>isNaNValue,
    "isNull",
    ()=>isNull,
    "isNumber",
    ()=>isNumber,
    "isPlainObject",
    ()=>isPlainObject,
    "isPrimitive",
    ()=>isPrimitive,
    "isRegExp",
    ()=>isRegExp,
    "isSet",
    ()=>isSet,
    "isString",
    ()=>isString,
    "isSymbol",
    ()=>isSymbol,
    "isTypedArray",
    ()=>isTypedArray,
    "isURL",
    ()=>isURL,
    "isUndefined",
    ()=>isUndefined
]);
const getType = (payload)=>Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload)=>typeof payload === 'undefined';
const isNull = (payload)=>payload === null;
const isPlainObject = (payload)=>{
    if (typeof payload !== 'object' || payload === null) return false;
    if (payload === Object.prototype) return false;
    if (Object.getPrototypeOf(payload) === null) return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload)=>isPlainObject(payload) && Object.keys(payload).length === 0;
const isArray = (payload)=>Array.isArray(payload);
const isString = (payload)=>typeof payload === 'string';
const isNumber = (payload)=>typeof payload === 'number' && !isNaN(payload);
const isBoolean = (payload)=>typeof payload === 'boolean';
const isRegExp = (payload)=>payload instanceof RegExp;
const isMap = (payload)=>payload instanceof Map;
const isSet = (payload)=>payload instanceof Set;
const isSymbol = (payload)=>getType(payload) === 'Symbol';
const isDate = (payload)=>payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload)=>payload instanceof Error;
const isNaNValue = (payload)=>typeof payload === 'number' && isNaN(payload);
const isPrimitive = (payload)=>isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
const isBigint = (payload)=>typeof payload === 'bigint';
const isInfinite = (payload)=>payload === Infinity || payload === -Infinity;
const isTypedArray = (payload)=>ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload)=>payload instanceof URL; //# sourceMappingURL=is.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/pathstringifier.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeKey",
    ()=>escapeKey,
    "parsePath",
    ()=>parsePath,
    "stringifyPath",
    ()=>stringifyPath
]);
const escapeKey = (key)=>key.replace(/\\/g, '\\\\').replace(/\./g, '\\.');
const stringifyPath = (path)=>path.map(String).map(escapeKey).join('.');
const parsePath = (string, legacyPaths)=>{
    const result = [];
    let segment = '';
    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i);
        if (!legacyPaths && char === '\\') {
            const escaped = string.charAt(i + 1);
            if (escaped === '\\') {
                segment += '\\';
                i++;
                continue;
            } else if (escaped !== '.') {
                throw Error('invalid path');
            }
        }
        const isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i++;
            continue;
        }
        const isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
}; //# sourceMappingURL=pathstringifier.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/transformer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInstanceOfRegisteredClass",
    ()=>isInstanceOfRegisteredClass,
    "transformValue",
    ()=>transformValue,
    "untransformValue",
    ()=>untransformValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
;
;
function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const simpleRules = [
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"], 'undefined', ()=>null, ()=>undefined),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBigint"], 'bigint', (v)=>v.toString(), (v)=>{
        if (typeof BigInt !== 'undefined') {
            return BigInt(v);
        }
        console.error('Please add a BigInt polyfill.');
        return v;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDate"], 'Date', (v)=>v.toISOString(), (v)=>new Date(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isError"], 'Error', (v, superJson)=>{
        const baseError = {
            name: v.name,
            message: v.message
        };
        if ('cause' in v) {
            baseError.cause = v.cause;
        }
        superJson.allowedErrorProps.forEach((prop)=>{
            baseError[prop] = v[prop];
        });
        return baseError;
    }, (v, superJson)=>{
        const e = new Error(v.message, {
            cause: v.cause
        });
        e.name = v.name;
        e.stack = v.stack;
        superJson.allowedErrorProps.forEach((prop)=>{
            e[prop] = v[prop];
        });
        return e;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRegExp"], 'regexp', (v)=>'' + v, (regex)=>{
        const body = regex.slice(1, regex.lastIndexOf('/'));
        const flags = regex.slice(regex.lastIndexOf('/') + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"], 'set', // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v)=>[
            ...v.values()
        ], (v)=>new Set(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"], 'map', (v)=>[
            ...v.entries()
        ], (v)=>new Map(v)),
    simpleTransformation((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNaNValue"])(v) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInfinite"])(v), 'number', (v)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNaNValue"])(v)) {
            return 'NaN';
        }
        if (v > 0) {
            return 'Infinity';
        } else {
            return '-Infinity';
        }
    }, Number),
    simpleTransformation((v)=>v === 0 && 1 / v === -Infinity, 'number', ()=>{
        return '-0';
    }, Number),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isURL"], 'URL', (v)=>v.toString(), (v)=>new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const symbolRule = compositeTransformation((s, superJson)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSymbol"])(s)) {
        const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
        return isRegistered;
    }
    return false;
}, (s, superJson)=>{
    const identifier = superJson.symbolRegistry.getIdentifier(s);
    return [
        'symbol',
        identifier
    ];
}, (v)=>v.description, (_, a, superJson)=>{
    const value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
        throw new Error('Trying to deserialize unknown symbol');
    }
    return value;
});
const constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
].reduce((obj, ctor)=>{
    obj[ctor.name] = ctor;
    return obj;
}, {});
const typedArrayRule = compositeTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTypedArray"], (v)=>[
        'typed-array',
        v.constructor.name
    ], (v)=>[
        ...v
    ], (v, a)=>{
    const ctor = constructorToName[a[1]];
    if (!ctor) {
        throw new Error('Trying to deserialize unknown typed array');
    }
    return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass?.constructor) {
        const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson)=>{
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return [
        'class',
        identifier
    ];
}, (clazz, superJson)=>{
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
        return {
            ...clazz
        };
    }
    const result = {};
    allowedProps.forEach((prop)=>{
        result[prop] = clazz[prop];
    });
    return result;
}, (v, a, superJson)=>{
    const clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
        throw new Error(`Trying to deserialize unknown class '${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
    }
    return Object.assign(Object.create(clazz.prototype), v);
});
const customRule = compositeTransformation((value, superJson)=>{
    return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return [
        'custom',
        transformer.name
    ];
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
}, (v, a, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
        throw new Error('Trying to deserialize unknown custom value');
    }
    return transformer.deserialize(v);
});
const compositeRules = [
    classRule,
    symbolRule,
    customRule,
    typedArrayRule
];
const transformValue = (value, superJson)=>{
    const applicableCompositeRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findArr"])(compositeRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson)
        };
    }
    const applicableSimpleRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findArr"])(simpleRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation
        };
    }
    return undefined;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach((rule)=>{
    simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(type)) {
        switch(type[0]){
            case 'symbol':
                return symbolRule.untransform(json, type, superJson);
            case 'class':
                return classRule.untransform(json, type, superJson);
            case 'custom':
                return customRule.untransform(json, type, superJson);
            case 'typed-array':
                return typedArrayRule.untransform(json, type, superJson);
            default:
                throw new Error('Unknown transformation: ' + type);
        }
    } else {
        const transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error('Unknown transformation: ' + type);
        }
        return transformation.untransform(json, superJson);
    }
}; //# sourceMappingURL=transformer.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/accessDeep.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDeep",
    ()=>getDeep,
    "setDeep",
    ()=>setDeep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
;
;
const getNthKey = (value, n)=>{
    if (n > value.size) throw new Error('index out of bounds');
    const keys = value.keys();
    while(n > 0){
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path)=>{
    validatePath(path);
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(object)) {
            object = getNthKey(object, +key);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(object, row);
            switch(type){
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        } else {
            object = object[key];
        }
    }
    return object;
};
const setDeep = (object, path, mapper)=>{
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for(let i = 0; i < path.length - 1; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
            const index = +key;
            parent = parent[index];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
            parent = parent[key];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(parent, row);
            switch(type){
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? 'key' : 'value';
        switch(type){
            case 'key':
                {
                    const newKey = mapper(keyToRow);
                    parent.set(newKey, parent.get(keyToRow));
                    if (newKey !== keyToRow) {
                        parent.delete(keyToRow);
                    }
                    break;
                }
            case 'value':
                {
                    parent.set(keyToRow, mapper(parent.get(keyToRow)));
                    break;
                }
        }
    }
    return object;
}; //# sourceMappingURL=accessDeep.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/plainer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyReferentialEqualityAnnotations",
    ()=>applyReferentialEqualityAnnotations,
    "applyValueAnnotations",
    ()=>applyValueAnnotations,
    "generateReferentialEqualityAnnotations",
    ()=>generateReferentialEqualityAnnotations,
    "walker",
    ()=>walker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/pathstringifier.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/transformer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/accessDeep.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const enableLegacyPaths = (version)=>version < 1;
function traverse(tree, walker, version, origin = []) {
    if (!tree) {
        return;
    }
    const legacyPaths = enableLegacyPaths(version);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(tree)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(tree, (subtree, key)=>traverse(subtree, walker, version, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(key, legacyPaths)
            ]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(children, (child, key)=>{
            traverse(child, walker, version, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(key, legacyPaths)
            ]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, version, superJson) {
    traverse(annotations, (type, path)=>{
        plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDeep"])(plain, path, (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["untransformValue"])(v, type, superJson));
    }, version);
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations, version) {
    const legacyPaths = enableLegacyPaths(version);
    function apply(identicalPaths, path) {
        const object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path, legacyPaths));
        identicalPaths.map((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path, legacyPaths)).forEach((identicalObjectPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDeep"])(plain, identicalObjectPath, ()=>object);
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(annotations)) {
        const [root, other] = annotations;
        root.forEach((identicalPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(identicalPath, legacyPaths), ()=>plain);
        });
        if (other) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(other, apply);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(annotations, apply);
    }
    return plain;
}
const isDeep = (object, superJson)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isError"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInstanceOfRegisteredClass"])(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    } else {
        identities.set(object, [
            path
        ]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = undefined;
    identitites.forEach((paths)=>{
        if (paths.length <= 1) {
            return;
        }
        // if we're not deduping, all of these objects continue existing.
        // putting the shortest path first makes it easier to parse for humans
        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
        if (!dedupe) {
            paths = paths.map((path)=>path.map(String)).sort((a, b)=>a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyPath"]);
        } else {
            result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyPath"])(representativePath)] = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyPath"]);
        }
    });
    if (rootEqualityPaths) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEmptyObject"])(result)) {
            return [
                rootEqualityPaths
            ];
        } else {
            return [
                rootEqualityPaths,
                result
            ];
        }
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEmptyObject"])(result) ? undefined : result;
    }
}
const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = new Map())=>{
    const primitive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrimitive"])(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            // short-circuit result if we've seen this object before
            return dedupe ? {
                transformedValue: null
            } : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
        const result = transformed ? {
            transformedValue: transformed.value,
            annotations: [
                transformed.type
            ]
        } : {
            transformedValue: object
        };
        if (!primitive) {
            seenObjects.set(object, result);
        }
        return result;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null
        };
    }
    const transformationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
    const transformed = transformationResult?.value ?? object;
    const transformedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(transformed) ? [] : {};
    const innerAnnotations = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(transformed, (value, index)=>{
        if (index === '__proto__' || index === 'constructor' || index === 'prototype') {
            throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [
            ...path,
            index
        ], [
            ...objectsInThisPath,
            object
        ], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(recursiveResult.annotations)) {
            innerAnnotations[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeKey"])(index)] = recursiveResult.annotations;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(recursiveResult.annotations)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(recursiveResult.annotations, (tree, key)=>{
                innerAnnotations[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeKey"])(index) + '.' + key] = tree;
            });
        }
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEmptyObject"])(innerAnnotations) ? {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type
        ] : undefined
    } : {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type,
            innerAnnotations
        ] : innerAnnotations
    };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
}; //# sourceMappingURL=plainer.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuperJSON",
    ()=>SuperJSON,
    "allowErrorProps",
    ()=>allowErrorProps,
    "default",
    ()=>SuperJSON,
    "deserialize",
    ()=>deserialize,
    "parse",
    ()=>parse,
    "registerClass",
    ()=>registerClass,
    "registerCustom",
    ()=>registerCustom,
    "registerSymbol",
    ()=>registerSymbol,
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/class-registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/custom-transformer-registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/plainer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/copy-anything/dist/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
class SuperJSON {
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */ constructor({ dedupe = false } = {}){
        this.classRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClassRegistry"]();
        this.symbolRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Registry"]((s)=>s.description ?? '');
        this.customTransformerRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomTransformerRegistry"]();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
    serialize(object) {
        const identities = new Map();
        const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["walker"])(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations
            };
        }
        const equalityAnnotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateReferentialEqualityAnnotations"])(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations
            };
        }
        if (res.meta) res.meta.v = 1;
        return res;
    }
    deserialize(payload, options) {
        const { json, meta } = payload;
        let result = options?.inPlace ? json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copy"])(json);
        if (meta?.values) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyValueAnnotations"])(result, meta.values, meta.v ?? 0, this);
        }
        if (meta?.referentialEqualities) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyReferentialEqualityAnnotations"])(result, meta.referentialEqualities, meta.v ?? 0);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string), {
            inPlace: true
        });
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer
        });
    }
    allowErrorProps(...props) {
        this.allowedErrorProps.push(...props);
    }
}
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
;
const serialize = SuperJSON.serialize;
const deserialize = SuperJSON.deserialize;
const stringify = SuperJSON.stringify;
const parse = SuperJSON.parse;
const registerClass = SuperJSON.registerClass;
const registerCustom = SuperJSON.registerCustom;
const registerSymbol = SuperJSON.registerSymbol;
const allowErrorProps = SuperJSON.allowErrorProps; //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/is-what/dist/getType.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Returns the object type of the given payload */ __turbopack_context__.s([
    "getType",
    ()=>getType
]);
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
}),
"[project]/Downloads/nodebase-main/node_modules/is-what/dist/isArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArray",
    ()=>isArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/getType.js [app-rsc] (ecmascript)");
;
function isArray(payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getType"])(payload) === 'Array';
}
}),
"[project]/Downloads/nodebase-main/node_modules/is-what/dist/isPlainObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/getType.js [app-rsc] (ecmascript)");
;
function isPlainObject(payload) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getType"])(payload) !== 'Object') return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
}),
"[project]/Downloads/nodebase-main/node_modules/copy-anything/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copy",
    ()=>copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/isArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/isPlainObject.js [app-rsc] (ecmascript)");
;
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = ({}).propertyIsEnumerable.call(originalObject, key) ? 'enumerable' : 'nonenumerable';
    if (propType === 'enumerable') carry[key] = newVal;
    if (includeNonenumerable && propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function copy(target, options = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(target)) {
        return target.map((item)=>copy(item, options));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(target)) {
        return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [
        ...props,
        ...symbols
    ].reduce((carry, key)=>{
        // Skip __proto__ properties to prevent prototype pollution
        if (key === '__proto__') return carry;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(options.props) && !options.props.includes(key)) {
            return carry;
        }
        const val = target[key];
        const newVal = copy(val, options);
        assignProp(carry, key, newVal, target, options.nonenumerable);
        return carry;
    }, {});
}
}),
"[project]/Downloads/nodebase-main/node_modules/random-word-slugs/dist/words.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __values = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWordsByCategory = exports.wordList = void 0;
exports.wordList = {
    noun: [
        {
            word: "accountant",
            categories: [
                "profession"
            ]
        },
        {
            word: "ability",
            categories: [
                "thing"
            ]
        },
        {
            word: "accident",
            categories: [
                "thing"
            ]
        },
        {
            word: "account",
            categories: [
                "thing"
            ]
        },
        {
            word: "action",
            categories: [
                "thing"
            ]
        },
        {
            word: "activity",
            categories: [
                "thing"
            ]
        },
        {
            word: "actor",
            categories: [
                "profession"
            ]
        },
        {
            word: "ad",
            categories: [
                "media"
            ]
        },
        {
            word: "addition",
            categories: [
                "thing"
            ]
        },
        {
            word: "address",
            categories: [
                "thing"
            ]
        },
        {
            word: "adult",
            categories: [
                "people"
            ]
        },
        {
            word: "advantage",
            categories: [
                "thing"
            ]
        },
        {
            word: "advertisement",
            categories: [
                "media"
            ]
        },
        {
            word: "afternoon",
            categories: [
                "time"
            ]
        },
        {
            word: "agency",
            categories: [
                "thing"
            ]
        },
        {
            word: "agent",
            categories: [
                "people"
            ]
        },
        {
            word: "air",
            categories: [
                "thing"
            ]
        },
        {
            word: "airline",
            categories: [
                "transportation"
            ]
        },
        {
            word: "airplane",
            categories: [
                "transportation"
            ]
        },
        {
            word: "airport",
            categories: [
                "transportation",
                "place"
            ]
        },
        {
            word: "alarm",
            categories: [
                "thing"
            ]
        },
        {
            word: "alligator",
            categories: [
                "animals"
            ]
        },
        {
            word: "ambulance",
            categories: [
                "health"
            ]
        },
        {
            word: "analyst",
            categories: [
                "profession"
            ]
        },
        {
            word: "angle",
            categories: [
                "thing"
            ]
        },
        {
            word: "animal",
            categories: [
                "animals"
            ]
        },
        {
            word: "answer",
            categories: [
                "thing"
            ]
        },
        {
            word: "apartment",
            categories: [
                "place"
            ]
        },
        {
            word: "apple",
            categories: [
                "food"
            ]
        },
        {
            word: "application",
            categories: [
                "thing"
            ]
        },
        {
            word: "appointment",
            categories: [
                "thing"
            ]
        },
        {
            word: "architect",
            categories: [
                "profession"
            ]
        },
        {
            word: "argument",
            categories: [
                "thing"
            ]
        },
        {
            word: "area",
            categories: [
                "thing"
            ]
        },
        {
            word: "arm",
            categories: [
                "thing"
            ]
        },
        {
            word: "army",
            categories: [
                "thing"
            ]
        },
        {
            word: "art",
            categories: [
                "thing"
            ]
        },
        {
            word: "article",
            categories: [
                "thing"
            ]
        },
        {
            word: "artist",
            categories: [
                "profession"
            ]
        },
        {
            word: "australia",
            categories: [
                "place"
            ]
        },
        {
            word: "author",
            categories: [
                "profession"
            ]
        },
        {
            word: "autumn",
            categories: [
                "time"
            ]
        },
        {
            word: "baby",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "baker",
            categories: [
                "profession"
            ]
        },
        {
            word: "balloon",
            categories: [
                "thing"
            ]
        },
        {
            word: "banana",
            categories: [
                "food"
            ]
        },
        {
            word: "barista",
            categories: [
                "profession"
            ]
        },
        {
            word: "battery",
            categories: [
                "thing"
            ]
        },
        {
            word: "beach",
            categories: [
                "place"
            ]
        },
        {
            word: "bear",
            categories: [
                "animals"
            ]
        },
        {
            word: "beard",
            categories: [
                "thing"
            ]
        },
        {
            word: "bed",
            categories: [
                "thing"
            ]
        },
        {
            word: "belgium",
            categories: [
                "place"
            ]
        },
        {
            word: "bird",
            categories: [
                "animals"
            ]
        },
        {
            word: "bit",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "book",
            categories: [
                "thing",
                "education"
            ]
        },
        {
            word: "boots",
            categories: [
                "thing"
            ]
        },
        {
            word: "boy",
            categories: [
                "people"
            ]
        },
        {
            word: "branch",
            categories: [
                "thing"
            ]
        },
        {
            word: "breakfast",
            categories: [
                "thing"
            ]
        },
        {
            word: "brother",
            categories: [
                "family"
            ]
        },
        {
            word: "businessperson",
            categories: [
                "people",
                "business"
            ]
        },
        {
            word: "butcher",
            categories: [
                "profession"
            ]
        },
        {
            word: "byte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "camera",
            categories: [
                "thing"
            ]
        },
        {
            word: "candle",
            categories: [
                "thing"
            ]
        },
        {
            word: "car",
            categories: [
                "transportation"
            ]
        },
        {
            word: "caravan",
            categories: [
                "transportation"
            ]
        },
        {
            word: "carpenter",
            categories: [
                "profession"
            ]
        },
        {
            word: "carpet",
            categories: [
                "thing"
            ]
        },
        {
            word: "cartoon",
            categories: [
                "media"
            ]
        },
        {
            word: "cat",
            categories: [
                "animals"
            ]
        },
        {
            word: "chef",
            categories: [
                "profession"
            ]
        },
        {
            word: "child",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "china",
            categories: [
                "place"
            ]
        },
        {
            word: "church",
            categories: [
                "religion"
            ]
        },
        {
            word: "city",
            categories: [
                "place"
            ]
        },
        {
            word: "coat",
            categories: [
                "thing"
            ]
        },
        {
            word: "coffeeshop",
            categories: [
                "place"
            ]
        },
        {
            word: "computer",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "continent",
            categories: [
                "place"
            ]
        },
        {
            word: "controller",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "country",
            categories: [
                "place"
            ]
        },
        {
            word: "cpu",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "crayon",
            categories: [
                "thing"
            ]
        },
        {
            word: "cricket",
            categories: [
                "animals"
            ]
        },
        {
            word: "crowd",
            categories: [
                "people"
            ]
        },
        {
            word: "daughter",
            categories: [
                "family"
            ]
        },
        {
            word: "dawn",
            categories: [
                "time"
            ]
        },
        {
            word: "daybreak",
            categories: [
                "time"
            ]
        },
        {
            word: "death",
            categories: [
                "thing"
            ]
        },
        {
            word: "denmark",
            categories: [
                "place"
            ]
        },
        {
            word: "dentist",
            categories: [
                "profession"
            ]
        },
        {
            word: "diamond",
            categories: [
                "thing"
            ]
        },
        {
            word: "dinner",
            categories: [
                "food"
            ]
        },
        {
            word: "disease",
            categories: [
                "thing"
            ]
        },
        {
            word: "doctor",
            categories: [
                "profession"
            ]
        },
        {
            word: "dog",
            categories: [
                "animals"
            ]
        },
        {
            word: "dream",
            categories: [
                "thing"
            ]
        },
        {
            word: "dress",
            categories: [
                "thing"
            ]
        },
        {
            word: "dusk",
            categories: [
                "time"
            ]
        },
        {
            word: "easter",
            categories: [
                "religion"
            ]
        },
        {
            word: "egg",
            categories: [
                "food"
            ]
        },
        {
            word: "eggplant",
            categories: [
                "food"
            ]
        },
        {
            word: "egypt",
            categories: [
                "place"
            ]
        },
        {
            word: "electrician",
            categories: [
                "profession"
            ]
        },
        {
            word: "elephant",
            categories: [
                "animals"
            ]
        },
        {
            word: "energy",
            categories: [
                "thing"
            ]
        },
        {
            word: "engine",
            categories: [
                "transportation"
            ]
        },
        {
            word: "engineer",
            categories: [
                "profession"
            ]
        },
        {
            word: "england",
            categories: [
                "place"
            ]
        },
        {
            word: "eve",
            categories: [
                "time"
            ]
        },
        {
            word: "evening",
            categories: [
                "time"
            ]
        },
        {
            word: "eventide",
            categories: [
                "time"
            ]
        },
        {
            word: "exabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "eye",
            categories: [
                "thing"
            ]
        },
        {
            word: "fall",
            categories: [
                "time"
            ]
        },
        {
            word: "family",
            categories: [
                "family"
            ]
        },
        {
            word: "farmer",
            categories: [
                "profession"
            ]
        },
        {
            word: "father",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "finland",
            categories: [
                "place"
            ]
        },
        {
            word: "fireman",
            categories: [
                "profession"
            ]
        },
        {
            word: "fish",
            categories: [
                "animals"
            ]
        },
        {
            word: "flag",
            categories: [
                "thing"
            ]
        },
        {
            word: "florist",
            categories: [
                "profession"
            ]
        },
        {
            word: "flower",
            categories: [
                "thing"
            ]
        },
        {
            word: "football",
            categories: [
                "sports"
            ]
        },
        {
            word: "forest",
            categories: [
                "place"
            ]
        },
        {
            word: "fountain",
            categories: [
                "thing"
            ]
        },
        {
            word: "france",
            categories: [
                "place"
            ]
        },
        {
            word: "furniture",
            categories: [
                "thing"
            ]
        },
        {
            word: "garage",
            categories: [
                "place"
            ]
        },
        {
            word: "garden",
            categories: [
                "food"
            ]
        },
        {
            word: "gas",
            categories: [
                "transportation"
            ]
        },
        {
            word: "ghost",
            categories: [
                "thing"
            ]
        },
        {
            word: "gigabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "girl",
            categories: [
                "people"
            ]
        },
        {
            word: "glass",
            categories: [
                "thing"
            ]
        },
        {
            word: "gold",
            categories: [
                "thing"
            ]
        },
        {
            word: "gpu",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "grandmother",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "grass",
            categories: [
                "thing"
            ]
        },
        {
            word: "greece",
            categories: [
                "place"
            ]
        },
        {
            word: "guitar",
            categories: [
                "thing"
            ]
        },
        {
            word: "hair",
            categories: [
                "thing"
            ]
        },
        {
            word: "hairdresser",
            categories: [
                "profession"
            ]
        },
        {
            word: "hamburger",
            categories: [
                "food"
            ]
        },
        {
            word: "helicopter",
            categories: [
                "transportation"
            ]
        },
        {
            word: "helmet",
            categories: [
                "thing"
            ]
        },
        {
            word: "holiday",
            categories: [
                "thing"
            ]
        },
        {
            word: "honey",
            categories: [
                "food"
            ]
        },
        {
            word: "horse",
            categories: [
                "animals"
            ]
        },
        {
            word: "hospital",
            categories: [
                "place"
            ]
        },
        {
            word: "house",
            categories: [
                "place"
            ]
        },
        {
            word: "hydrogen",
            categories: [
                "science"
            ]
        },
        {
            word: "ice",
            categories: [
                "science"
            ]
        },
        {
            word: "insect",
            categories: [
                "animals"
            ]
        },
        {
            word: "insurance",
            categories: [
                "thing"
            ]
        },
        {
            word: "intern",
            categories: [
                "profession"
            ]
        },
        {
            word: "iron",
            categories: [
                "science"
            ]
        },
        {
            word: "island",
            categories: [
                "place"
            ]
        },
        {
            word: "jackal",
            categories: [
                "animals"
            ]
        },
        {
            word: "jelly",
            categories: [
                "food"
            ]
        },
        {
            word: "jewellery",
            categories: [
                "thing"
            ]
        },
        {
            word: "jordan",
            categories: [
                "place"
            ]
        },
        {
            word: "journalist",
            categories: [
                "profession"
            ]
        },
        {
            word: "joystick",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "judge",
            categories: [
                "profession"
            ]
        },
        {
            word: "juice",
            categories: [
                "food"
            ]
        },
        {
            word: "kangaroo",
            categories: [
                "animals"
            ]
        },
        {
            word: "keyboard",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "kilobyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "king",
            categories: [
                "people"
            ]
        },
        {
            word: "kitchen",
            categories: [
                "place"
            ]
        },
        {
            word: "kite",
            categories: [
                "thing"
            ]
        },
        {
            word: "knife",
            categories: [
                "thing"
            ]
        },
        {
            word: "lamp",
            categories: [
                "thing"
            ]
        },
        {
            word: "laptop",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "lawyer",
            categories: [
                "profession"
            ]
        },
        {
            word: "leather",
            categories: [
                "thing"
            ]
        },
        {
            word: "librarian",
            categories: [
                "profession"
            ]
        },
        {
            word: "library",
            categories: [
                "place"
            ]
        },
        {
            word: "lifeguard",
            categories: [
                "profession"
            ]
        },
        {
            word: "lighter",
            categories: [
                "thing"
            ]
        },
        {
            word: "lion",
            categories: [
                "animals"
            ]
        },
        {
            word: "lizard",
            categories: [
                "animals"
            ]
        },
        {
            word: "lock",
            categories: [
                "thing"
            ]
        },
        {
            word: "london",
            categories: [
                "place"
            ]
        },
        {
            word: "lunch",
            categories: [
                "food"
            ]
        },
        {
            word: "machine",
            categories: [
                "science"
            ]
        },
        {
            word: "magazine",
            categories: [
                "media"
            ]
        },
        {
            word: "magician",
            categories: [
                "people"
            ]
        },
        {
            word: "man",
            categories: [
                "people"
            ]
        },
        {
            word: "manchester",
            categories: [
                "place"
            ]
        },
        {
            word: "market",
            categories: [
                "place"
            ]
        },
        {
            word: "match",
            categories: [
                "thing"
            ]
        },
        {
            word: "mechanic",
            categories: [
                "profession"
            ]
        },
        {
            word: "megabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "memory",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "microphone",
            categories: [
                "thing"
            ]
        },
        {
            word: "midnight",
            categories: [
                "time"
            ]
        },
        {
            word: "minister",
            categories: [
                "people",
                "religion"
            ]
        },
        {
            word: "monitor",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "monkey",
            categories: [
                "animals"
            ]
        },
        {
            word: "morn",
            categories: [
                "time"
            ]
        },
        {
            word: "morning",
            categories: [
                "time"
            ]
        },
        {
            word: "mother",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "motherboard",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "motorcycle",
            categories: [
                "transportation"
            ]
        },
        {
            word: "mouse",
            categories: [
                "thing",
                "technology",
                "animals"
            ]
        },
        {
            word: "musician",
            categories: [
                "profession"
            ]
        },
        {
            word: "nail",
            categories: [
                "thing"
            ]
        },
        {
            word: "napkin",
            categories: [
                "thing"
            ]
        },
        {
            word: "needle",
            categories: [
                "thing"
            ]
        },
        {
            word: "nest",
            categories: [
                "thing"
            ]
        },
        {
            word: "nigeria",
            categories: [
                "place"
            ]
        },
        {
            word: "night",
            categories: [
                "time"
            ]
        },
        {
            word: "nightfall",
            categories: [
                "time"
            ]
        },
        {
            word: "noon",
            categories: [
                "time"
            ]
        },
        {
            word: "notebook",
            categories: [
                "thing"
            ]
        },
        {
            word: "nurse",
            categories: [
                "profession"
            ]
        },
        {
            word: "ocean",
            categories: [
                "place"
            ]
        },
        {
            word: "oil",
            categories: [
                "thing"
            ]
        },
        {
            word: "optician",
            categories: [
                "profession"
            ]
        },
        {
            word: "orange",
            categories: [
                "food"
            ]
        },
        {
            word: "oxygen",
            categories: [
                "science"
            ]
        },
        {
            word: "oyster",
            categories: [
                "animals"
            ]
        },
        {
            word: "pager",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "painter",
            categories: [
                "profession"
            ]
        },
        {
            word: "painting",
            categories: [
                "media"
            ]
        },
        {
            word: "park",
            categories: [
                "place"
            ]
        },
        {
            word: "parrot",
            categories: [
                "animals"
            ]
        },
        {
            word: "pencil",
            categories: [
                "thing",
                "education"
            ]
        },
        {
            word: "petabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "pharmacist",
            categories: [
                "profession"
            ]
        },
        {
            word: "photographer",
            categories: [
                "profession"
            ]
        },
        {
            word: "piano",
            categories: [
                "thing"
            ]
        },
        {
            word: "pillow",
            categories: [
                "thing"
            ]
        },
        {
            word: "pilot",
            categories: [
                "profession"
            ]
        },
        {
            word: "pizza",
            categories: [
                "food"
            ]
        },
        {
            word: "planet",
            categories: [
                "science"
            ]
        },
        {
            word: "plastic",
            categories: [
                "thing"
            ]
        },
        {
            word: "plumber",
            categories: [
                "profession"
            ]
        },
        {
            word: "policeman",
            categories: [
                "profession"
            ]
        },
        {
            word: "portugal",
            categories: [
                "place"
            ]
        },
        {
            word: "postman",
            categories: [
                "profession"
            ]
        },
        {
            word: "potato",
            categories: [
                "food"
            ]
        },
        {
            word: "printer",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "processor",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "psychiatrist",
            categories: [
                "profession"
            ]
        },
        {
            word: "queen",
            categories: [
                "people"
            ]
        },
        {
            word: "quill",
            categories: [
                "thing"
            ]
        },
        {
            word: "rain",
            categories: [
                "thing"
            ]
        },
        {
            word: "rainbow",
            categories: [
                "science"
            ]
        },
        {
            word: "raincoat",
            categories: [
                "thing"
            ]
        },
        {
            word: "ram",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "receptionist",
            categories: [
                "profession"
            ]
        },
        {
            word: "refrigerator",
            categories: [
                "food"
            ]
        },
        {
            word: "restaurant",
            categories: [
                "place"
            ]
        },
        {
            word: "river",
            categories: [
                "thing"
            ]
        },
        {
            word: "rocket",
            categories: [
                "science"
            ]
        },
        {
            word: "room",
            categories: [
                "place"
            ]
        },
        {
            word: "rose",
            categories: [
                "thing"
            ]
        },
        {
            word: "russia",
            categories: [
                "place"
            ]
        },
        {
            word: "salesclerk",
            categories: [
                "people",
                "business"
            ]
        },
        {
            word: "salesmen",
            categories: [
                "profession"
            ]
        },
        {
            word: "sandwich",
            categories: [
                "food"
            ]
        },
        {
            word: "school",
            categories: [
                "education"
            ]
        },
        {
            word: "scientist",
            categories: [
                "profession"
            ]
        },
        {
            word: "scooter",
            categories: [
                "transportation"
            ]
        },
        {
            word: "secretary",
            categories: [
                "profession"
            ]
        },
        {
            word: "shampoo",
            categories: [
                "thing"
            ]
        },
        {
            word: "shoe",
            categories: [
                "thing"
            ]
        },
        {
            word: "smartphone",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "soccer",
            categories: [
                "sports"
            ]
        },
        {
            word: "solstice",
            categories: [
                "time"
            ]
        },
        {
            word: "spoon",
            categories: [
                "thing"
            ]
        },
        {
            word: "spring",
            categories: [
                "time"
            ]
        },
        {
            word: "state",
            categories: [
                "place"
            ]
        },
        {
            word: "stone",
            categories: [
                "thing"
            ]
        },
        {
            word: "student",
            categories: [
                "people",
                "education"
            ]
        },
        {
            word: "sugar",
            categories: [
                "food"
            ]
        },
        {
            word: "summer",
            categories: [
                "time"
            ]
        },
        {
            word: "sundown",
            categories: [
                "time"
            ]
        },
        {
            word: "sunset",
            categories: [
                "time"
            ]
        },
        {
            word: "sweden",
            categories: [
                "place"
            ]
        },
        {
            word: "table",
            categories: [
                "thing"
            ]
        },
        {
            word: "tailor",
            categories: [
                "profession"
            ]
        },
        {
            word: "teacher",
            categories: [
                "people",
                "education",
                "profession"
            ]
        },
        {
            word: "teenager",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "telephone",
            categories: [
                "thing"
            ]
        },
        {
            word: "television",
            categories: [
                "media"
            ]
        },
        {
            word: "tent",
            categories: [
                "thing"
            ]
        },
        {
            word: "terabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "thailand",
            categories: [
                "place"
            ]
        },
        {
            word: "tiger",
            categories: [
                "animals"
            ]
        },
        {
            word: "toddler",
            categories: [
                "people",
                "family"
            ]
        },
        {
            word: "tomato",
            categories: [
                "food"
            ]
        },
        {
            word: "toothbrush",
            categories: [
                "thing"
            ]
        },
        {
            word: "traffic",
            categories: [
                "thing"
            ]
        },
        {
            word: "train",
            categories: [
                "transportation"
            ]
        },
        {
            word: "translator",
            categories: [
                "profession"
            ]
        },
        {
            word: "truck",
            categories: [
                "thing",
                "transportation"
            ]
        },
        {
            word: "twilight",
            categories: [
                "time"
            ]
        },
        {
            word: "uganda",
            categories: [
                "place"
            ]
        },
        {
            word: "umbrella",
            categories: [
                "thing"
            ]
        },
        {
            word: "van",
            categories: [
                "transportation"
            ]
        },
        {
            word: "vase",
            categories: [
                "thing"
            ]
        },
        {
            word: "vegetable",
            categories: [
                "food"
            ]
        },
        {
            word: "vr",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "vulture",
            categories: [
                "animals"
            ]
        },
        {
            word: "waiter",
            categories: [
                "profession"
            ]
        },
        {
            word: "waitress",
            categories: [
                "profession"
            ]
        },
        {
            word: "wall",
            categories: [
                "thing"
            ]
        },
        {
            word: "whale",
            categories: [
                "animals"
            ]
        },
        {
            word: "window",
            categories: [
                "thing"
            ]
        },
        {
            word: "winter",
            categories: [
                "time"
            ]
        },
        {
            word: "wire",
            categories: [
                "thing"
            ]
        },
        {
            word: "wolf",
            categories: [
                "animals"
            ]
        },
        {
            word: "woman",
            categories: [
                "people"
            ]
        },
        {
            word: "xylophone",
            categories: [
                "thing"
            ]
        },
        {
            word: "yacht",
            categories: [
                "transportation"
            ]
        },
        {
            word: "yak",
            categories: [
                "animals"
            ]
        },
        {
            word: "yottabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "zebra",
            categories: [
                "animals"
            ]
        },
        {
            word: "zettabyte",
            categories: [
                "thing",
                "technology"
            ]
        },
        {
            word: "zoo",
            categories: [
                "animals"
            ]
        }
    ],
    adjective: [
        {
            word: "abandoned",
            categories: [
                "condition"
            ]
        },
        {
            word: "abiding",
            categories: [
                "personality"
            ]
        },
        {
            word: "able",
            categories: [
                "condition"
            ]
        },
        {
            word: "abrasive",
            categories: [
                "condition",
                "personality"
            ]
        },
        {
            word: "abnormal",
            categories: [
                "condition"
            ]
        },
        {
            word: "absurd",
            categories: [
                "condition"
            ]
        },
        {
            word: "abundant",
            categories: [
                "quantity"
            ]
        },
        {
            word: "acceptable",
            categories: [
                "condition"
            ]
        },
        {
            word: "acidic",
            categories: [
                "taste"
            ]
        },
        {
            word: "acoustic",
            categories: [
                "sounds"
            ]
        },
        {
            word: "acrid",
            categories: [
                "condition"
            ]
        },
        {
            word: "adamant",
            categories: [
                "personality"
            ]
        },
        {
            word: "adorable",
            categories: [
                "personality"
            ]
        },
        {
            word: "adventurous",
            categories: [
                "personality"
            ]
        },
        {
            word: "aggressive",
            categories: [
                "personality"
            ]
        },
        {
            word: "agitated",
            categories: [
                "personality"
            ]
        },
        {
            word: "agreeable",
            categories: [
                "personality"
            ]
        },
        {
            word: "alert",
            categories: [
                "condition"
            ]
        },
        {
            word: "alive",
            categories: [
                "condition"
            ]
        },
        {
            word: "aloof",
            categories: [
                "personality"
            ]
        },
        {
            word: "ambitious",
            categories: [
                "personality"
            ]
        },
        {
            word: "ancient",
            categories: [
                "time"
            ]
        },
        {
            word: "angry",
            categories: [
                "personality"
            ]
        },
        {
            word: "annoyed",
            categories: [
                "personality"
            ]
        },
        {
            word: "antsy",
            categories: [
                "personality"
            ]
        },
        {
            word: "anxious",
            categories: [
                "personality"
            ]
        },
        {
            word: "appalling",
            categories: [
                "personality"
            ]
        },
        {
            word: "appetizing",
            categories: [
                "taste"
            ]
        },
        {
            word: "apprehensive",
            categories: [
                "personality"
            ]
        },
        {
            word: "arrogant",
            categories: [
                "personality"
            ]
        },
        {
            word: "ashamed",
            categories: [
                "personality"
            ]
        },
        {
            word: "astonishing",
            categories: [
                "personality"
            ]
        },
        {
            word: "attractive",
            categories: [
                "appearance"
            ]
        },
        {
            word: "average",
            categories: [
                "appearance"
            ]
        },
        {
            word: "bad",
            categories: [
                "condition"
            ]
        },
        {
            word: "bald",
            categories: [
                "appearance"
            ]
        },
        {
            word: "bashful",
            categories: [
                "personality"
            ]
        },
        {
            word: "beautiful",
            categories: [
                "appearance"
            ]
        },
        {
            word: "beefy",
            categories: [
                "appearance"
            ]
        },
        {
            word: "belligerent",
            categories: [
                "personality"
            ]
        },
        {
            word: "bent",
            categories: [
                "condition"
            ]
        },
        {
            word: "best",
            categories: [
                "condition"
            ]
        },
        {
            word: "better",
            categories: [
                "condition"
            ]
        },
        {
            word: "bewildered",
            categories: [
                "personality"
            ]
        },
        {
            word: "big",
            categories: [
                "size"
            ]
        },
        {
            word: "billions",
            categories: [
                "quantity"
            ]
        },
        {
            word: "billowy",
            categories: [
                "appearance"
            ]
        },
        {
            word: "bitter",
            categories: [
                "taste"
            ]
        },
        {
            word: "black",
            categories: [
                "color"
            ]
        },
        {
            word: "bland",
            categories: [
                "taste"
            ]
        },
        {
            word: "blue",
            categories: [
                "color"
            ]
        },
        {
            word: "blushing",
            categories: [
                "appearance"
            ]
        },
        {
            word: "bored",
            categories: [
                "personality"
            ]
        },
        {
            word: "boring",
            categories: [
                "personality"
            ]
        },
        {
            word: "boundless",
            categories: [
                "personality"
            ]
        },
        {
            word: "brainy",
            categories: [
                "personality"
            ]
        },
        {
            word: "brash",
            categories: [
                "personality"
            ]
        },
        {
            word: "brave",
            categories: [
                "personality"
            ]
        },
        {
            word: "breezy",
            categories: [
                "touch"
            ]
        },
        {
            word: "brief",
            categories: [
                "time"
            ]
        },
        {
            word: "bright",
            categories: [
                "appearance"
            ]
        },
        {
            word: "broad",
            categories: [
                "shapes"
            ]
        },
        {
            word: "broken",
            categories: [
                "condition"
            ]
        },
        {
            word: "brown",
            categories: [
                "color"
            ]
        },
        {
            word: "bulky",
            categories: [
                "appearance"
            ]
        },
        {
            word: "bumpy",
            categories: [
                "touch"
            ]
        },
        {
            word: "burly",
            categories: [
                "appearance"
            ]
        },
        {
            word: "busy",
            categories: [
                "personality"
            ]
        },
        {
            word: "cagey",
            categories: [
                "personality"
            ]
        },
        {
            word: "calm",
            categories: [
                "personality"
            ]
        },
        {
            word: "callous",
            categories: [
                "personality"
            ]
        },
        {
            word: "careful",
            categories: [
                "condition"
            ]
        },
        {
            word: "chilly",
            categories: [
                "touch"
            ]
        },
        {
            word: "chubby",
            categories: [
                "appearance"
            ]
        },
        {
            word: "clean",
            categories: [
                "appearance"
            ]
        },
        {
            word: "clever",
            categories: [
                "condition"
            ]
        },
        {
            word: "clumsy",
            categories: [
                "personality"
            ]
        },
        {
            word: "cold",
            categories: [
                "touch"
            ]
        },
        {
            word: "colossal",
            categories: [
                "size"
            ]
        },
        {
            word: "cool",
            categories: [
                "touch"
            ]
        },
        {
            word: "crashing",
            categories: [
                "sounds"
            ]
        },
        {
            word: "creamy",
            categories: [
                "taste"
            ]
        },
        {
            word: "crooked",
            categories: [
                "shapes"
            ]
        },
        {
            word: "cuddly",
            categories: [
                "touch"
            ]
        },
        {
            word: "curved",
            categories: [
                "shapes"
            ]
        },
        {
            word: "damaged",
            categories: [
                "touch"
            ]
        },
        {
            word: "damp",
            categories: [
                "touch"
            ]
        },
        {
            word: "dazzling",
            categories: [
                "appearance"
            ]
        },
        {
            word: "dead",
            categories: [
                "condition"
            ]
        },
        {
            word: "deafening",
            categories: [
                "sounds"
            ]
        },
        {
            word: "deep",
            categories: [
                "shapes"
            ]
        },
        {
            word: "defeated",
            categories: [
                "personality"
            ]
        },
        {
            word: "delicious",
            categories: [
                "taste"
            ]
        },
        {
            word: "delightful",
            categories: [
                "personality"
            ]
        },
        {
            word: "dirty",
            categories: [
                "touch"
            ]
        },
        {
            word: "disgusting",
            categories: [
                "taste"
            ]
        },
        {
            word: "drab",
            categories: [
                "appearance"
            ]
        },
        {
            word: "dry",
            categories: [
                "touch"
            ]
        },
        {
            word: "eager",
            categories: [
                "personality"
            ]
        },
        {
            word: "early",
            categories: [
                "time"
            ]
        },
        {
            word: "easy",
            categories: [
                "condition"
            ]
        },
        {
            word: "echoing",
            categories: [
                "sounds"
            ]
        },
        {
            word: "elegant",
            categories: [
                "appearance"
            ]
        },
        {
            word: "embarrassed",
            categories: [
                "personality"
            ]
        },
        {
            word: "enough",
            categories: [
                "quantity"
            ]
        },
        {
            word: "faint",
            categories: [
                "sounds"
            ]
        },
        {
            word: "faithful",
            categories: [
                "personality"
            ]
        },
        {
            word: "famous",
            categories: [
                "condition"
            ]
        },
        {
            word: "fancy",
            categories: [
                "appearance"
            ]
        },
        {
            word: "fast",
            categories: [
                "time"
            ]
        },
        {
            word: "fat",
            categories: [
                "size"
            ]
        },
        {
            word: "few",
            categories: [
                "quantity"
            ]
        },
        {
            word: "fierce",
            categories: [
                "personality"
            ]
        },
        {
            word: "fit",
            categories: [
                "appearance"
            ]
        },
        {
            word: "flabby",
            categories: [
                "appearance"
            ]
        },
        {
            word: "flaky",
            categories: [
                "touch"
            ]
        },
        {
            word: "flat",
            categories: [
                "shapes"
            ]
        },
        {
            word: "fluffy",
            categories: [
                "touch"
            ]
        },
        {
            word: "freezing",
            categories: [
                "touch"
            ]
        },
        {
            word: "fresh",
            categories: [
                "taste"
            ]
        },
        {
            word: "full",
            categories: [
                "quantity"
            ]
        },
        {
            word: "future",
            categories: [
                "time"
            ]
        },
        {
            word: "gentle",
            categories: [
                "personality"
            ]
        },
        {
            word: "gifted",
            categories: [
                "condition"
            ]
        },
        {
            word: "gigantic",
            categories: [
                "size"
            ]
        },
        {
            word: "glamorous",
            categories: [
                "appearance"
            ]
        },
        {
            word: "gorgeous",
            categories: [
                "appearance"
            ]
        },
        {
            word: "gray",
            categories: [
                "color"
            ]
        },
        {
            word: "greasy",
            categories: [
                "touch",
                "taste"
            ]
        },
        {
            word: "great",
            categories: [
                "size"
            ]
        },
        {
            word: "green",
            categories: [
                "color"
            ]
        },
        {
            word: "grumpy",
            categories: [
                "personality"
            ]
        },
        {
            word: "hallowed",
            categories: [
                "condition"
            ]
        },
        {
            word: "handsome",
            categories: [
                "appearance"
            ]
        },
        {
            word: "happy",
            categories: [
                "personality"
            ]
        },
        {
            word: "harsh",
            categories: [
                "sounds"
            ]
        },
        {
            word: "helpful",
            categories: [
                "condition"
            ]
        },
        {
            word: "helpless",
            categories: [
                "personality"
            ]
        },
        {
            word: "high",
            categories: [
                "shapes"
            ]
        },
        {
            word: "hissing",
            categories: [
                "sounds"
            ]
        },
        {
            word: "hollow",
            categories: [
                "shapes"
            ]
        },
        {
            word: "hot",
            categories: [
                "touch",
                "taste"
            ]
        },
        {
            word: "howling",
            categories: [
                "sounds"
            ]
        },
        {
            word: "huge",
            categories: [
                "size"
            ]
        },
        {
            word: "hundreds",
            categories: [
                "quantity"
            ]
        },
        {
            word: "icy",
            categories: [
                "touch"
            ]
        },
        {
            word: "immense",
            categories: [
                "size"
            ]
        },
        {
            word: "important",
            categories: [
                "condition"
            ]
        },
        {
            word: "incalculable",
            categories: [
                "quantity"
            ]
        },
        {
            word: "inexpensive",
            categories: [
                "condition"
            ]
        },
        {
            word: "itchy",
            categories: [
                "personality"
            ]
        },
        {
            word: "jealous",
            categories: [
                "personality"
            ]
        },
        {
            word: "jolly",
            categories: [
                "personality"
            ]
        },
        {
            word: "juicy",
            categories: [
                "taste"
            ]
        },
        {
            word: "kind",
            categories: [
                "personality"
            ]
        },
        {
            word: "large",
            categories: [
                "size"
            ]
        },
        {
            word: "late",
            categories: [
                "time"
            ]
        },
        {
            word: "lazy",
            categories: [
                "personality"
            ]
        },
        {
            word: "lemon",
            categories: [
                "color"
            ]
        },
        {
            word: "limited",
            categories: [
                "quantity"
            ]
        },
        {
            word: "little",
            categories: [
                "size",
                "quantity"
            ]
        },
        {
            word: "lively",
            categories: [
                "personality"
            ]
        },
        {
            word: "long",
            categories: [
                "time",
                "appearance"
            ]
        },
        {
            word: "loose",
            categories: [
                "touch"
            ]
        },
        {
            word: "loud",
            categories: [
                "sounds"
            ]
        },
        {
            word: "low",
            categories: [
                "shapes"
            ]
        },
        {
            word: "magnificent",
            categories: [
                "appearance"
            ]
        },
        {
            word: "mammoth",
            categories: [
                "size"
            ]
        },
        {
            word: "mango",
            categories: [
                "color"
            ]
        },
        {
            word: "many",
            categories: [
                "quantity"
            ]
        },
        {
            word: "massive",
            categories: [
                "size"
            ]
        },
        {
            word: "mealy",
            categories: [
                "condition"
            ]
        },
        {
            word: "melodic",
            categories: [
                "sounds"
            ]
        },
        {
            word: "melted",
            categories: [
                "touch"
            ]
        },
        {
            word: "microscopic",
            categories: [
                "size"
            ]
        },
        {
            word: "millions",
            categories: [
                "quantity"
            ]
        },
        {
            word: "miniature",
            categories: [
                "size"
            ]
        },
        {
            word: "modern",
            categories: [
                "time"
            ]
        },
        {
            word: "moldy",
            categories: [
                "taste"
            ]
        },
        {
            word: "most",
            categories: [
                "quantity"
            ]
        },
        {
            word: "muscular",
            categories: [
                "appearance"
            ]
        },
        {
            word: "mushy",
            categories: [
                "condition"
            ]
        },
        {
            word: "mysterious",
            categories: [
                "personality"
            ]
        },
        {
            word: "narrow",
            categories: [
                "shapes"
            ]
        },
        {
            word: "nervous",
            categories: [
                "personality"
            ]
        },
        {
            word: "nice",
            categories: [
                "personality"
            ]
        },
        {
            word: "noisy",
            categories: [
                "sounds"
            ]
        },
        {
            word: "numerous",
            categories: [
                "quantity"
            ]
        },
        {
            word: "nutritious",
            categories: [
                "taste"
            ]
        },
        {
            word: "nutty",
            categories: [
                "taste"
            ]
        },
        {
            word: "obedient",
            categories: [
                "personality"
            ]
        },
        {
            word: "obnoxious",
            categories: [
                "personality"
            ]
        },
        {
            word: "odd",
            categories: [
                "condition"
            ]
        },
        {
            word: "old",
            categories: [
                "time"
            ]
        },
        {
            word: "orange",
            categories: [
                "color"
            ]
        },
        {
            word: "panicky",
            categories: [
                "personality"
            ]
        },
        {
            word: "petite",
            categories: [
                "size"
            ]
        },
        {
            word: "pitiful",
            categories: [
                "personality"
            ]
        },
        {
            word: "plain",
            categories: [
                "appearance"
            ]
        },
        {
            word: "plump",
            categories: [
                "appearance"
            ]
        },
        {
            word: "polite",
            categories: [
                "personality"
            ]
        },
        {
            word: "poor",
            categories: [
                "condition"
            ]
        },
        {
            word: "powerful",
            categories: [
                "condition"
            ]
        },
        {
            word: "prehistoric",
            categories: [
                "time"
            ]
        },
        {
            word: "prickly",
            categories: [
                "touch"
            ]
        },
        {
            word: "proud",
            categories: [
                "personality"
            ]
        },
        {
            word: "puny",
            categories: [
                "size"
            ]
        },
        {
            word: "purple",
            categories: [
                "color"
            ]
        },
        {
            word: "purring",
            categories: [
                "sounds"
            ]
        },
        {
            word: "putrid",
            categories: [
                "taste"
            ]
        },
        {
            word: "quaint",
            categories: [
                "appearance"
            ]
        },
        {
            word: "quick",
            categories: [
                "time"
            ]
        },
        {
            word: "quiet",
            categories: [
                "sounds"
            ]
        },
        {
            word: "rancid",
            categories: [
                "taste"
            ]
        },
        {
            word: "rapid",
            categories: [
                "time"
            ]
        },
        {
            word: "rapping",
            categories: [
                "sounds"
            ]
        },
        {
            word: "raspy",
            categories: [
                "sounds"
            ]
        },
        {
            word: "red",
            categories: [
                "color"
            ]
        },
        {
            word: "refined",
            categories: [
                "shapes"
            ]
        },
        {
            word: "repulsive",
            categories: [
                "personality"
            ]
        },
        {
            word: "rhythmic",
            categories: [
                "sounds"
            ]
        },
        {
            word: "rich",
            categories: [
                "condition"
            ]
        },
        {
            word: "ripe",
            categories: [
                "taste"
            ]
        },
        {
            word: "rotten",
            categories: [
                "taste"
            ]
        },
        {
            word: "rough",
            categories: [
                "touch"
            ]
        },
        {
            word: "round",
            categories: [
                "shapes"
            ]
        },
        {
            word: "salmon",
            categories: [
                "color"
            ]
        },
        {
            word: "salty",
            categories: [
                "taste"
            ]
        },
        {
            word: "savory",
            categories: [
                "taste"
            ]
        },
        {
            word: "scarce",
            categories: [
                "quantity"
            ]
        },
        {
            word: "scary",
            categories: [
                "personality"
            ]
        },
        {
            word: "scrawny",
            categories: [
                "size"
            ]
        },
        {
            word: "screeching",
            categories: [
                "sounds"
            ]
        },
        {
            word: "scruffy",
            categories: [
                "appearance"
            ]
        },
        {
            word: "shaggy",
            categories: [
                "touch"
            ]
        },
        {
            word: "shallow",
            categories: [
                "shapes"
            ]
        },
        {
            word: "shapely",
            categories: [
                "appearance"
            ]
        },
        {
            word: "sharp",
            categories: [
                "touch"
            ]
        },
        {
            word: "short",
            categories: [
                "size",
                "appearance",
                "time"
            ]
        },
        {
            word: "shrilling",
            categories: [
                "sounds"
            ]
        },
        {
            word: "shy",
            categories: [
                "condition"
            ]
        },
        {
            word: "silly",
            categories: [
                "personality"
            ]
        },
        {
            word: "skinny",
            categories: [
                "appearance",
                "shapes"
            ]
        },
        {
            word: "slimy",
            categories: [
                "touch"
            ]
        },
        {
            word: "slow",
            categories: [
                "time"
            ]
        },
        {
            word: "small",
            categories: [
                "size"
            ]
        },
        {
            word: "some",
            categories: [
                "quantity"
            ]
        },
        {
            word: "sour",
            categories: [
                "taste"
            ]
        },
        {
            word: "sparse",
            categories: [
                "quantity"
            ]
        },
        {
            word: "spicy",
            categories: [
                "taste"
            ]
        },
        {
            word: "spoiled",
            categories: [
                "taste"
            ]
        },
        {
            word: "square",
            categories: [
                "shapes"
            ]
        },
        {
            word: "squeaking",
            categories: [
                "sounds"
            ]
        },
        {
            word: "stale",
            categories: [
                "taste"
            ]
        },
        {
            word: "steep",
            categories: [
                "shapes"
            ]
        },
        {
            word: "sticky",
            categories: [
                "touch"
            ]
        },
        {
            word: "stocky",
            categories: [
                "appearance"
            ]
        },
        {
            word: "straight",
            categories: [
                "shapes"
            ]
        },
        {
            word: "strong",
            categories: [
                "touch"
            ]
        },
        {
            word: "substantial",
            categories: [
                "quantity"
            ]
        },
        {
            word: "sweet",
            categories: [
                "taste"
            ]
        },
        {
            word: "swift",
            categories: [
                "time"
            ]
        },
        {
            word: "tall",
            categories: [
                "size"
            ]
        },
        {
            word: "tangy",
            categories: [
                "taste"
            ]
        },
        {
            word: "tart",
            categories: [
                "taste"
            ]
        },
        {
            word: "tasteless",
            categories: [
                "taste"
            ]
        },
        {
            word: "tasty",
            categories: [
                "taste"
            ]
        },
        {
            word: "teeny",
            categories: [
                "size"
            ]
        },
        {
            word: "tender",
            categories: [
                "condition"
            ]
        },
        {
            word: "thankful",
            categories: [
                "personality"
            ]
        },
        {
            word: "thoughtless",
            categories: [
                "personality"
            ]
        },
        {
            word: "thousands",
            categories: [
                "quantity"
            ]
        },
        {
            word: "thundering",
            categories: [
                "sounds"
            ]
        },
        {
            word: "tight",
            categories: [
                "touch"
            ]
        },
        {
            word: "tinkling",
            categories: [
                "sounds"
            ]
        },
        {
            word: "tiny",
            categories: [
                "size"
            ]
        },
        {
            word: "ugly",
            categories: [
                "appearance"
            ]
        },
        {
            word: "uneven",
            categories: [
                "touch"
            ]
        },
        {
            word: "unimportant",
            categories: [
                "condition"
            ]
        },
        {
            word: "uninterested",
            categories: [
                "condition"
            ]
        },
        {
            word: "unkempt",
            categories: [
                "appearance"
            ]
        },
        {
            word: "unsightly",
            categories: [
                "appearance"
            ]
        },
        {
            word: "uptight",
            categories: [
                "personality"
            ]
        },
        {
            word: "vast",
            categories: [
                "condition"
            ]
        },
        {
            word: "victorious",
            categories: [
                "personality"
            ]
        },
        {
            word: "wailing",
            categories: [
                "sounds"
            ]
        },
        {
            word: "warm",
            categories: [
                "touch"
            ]
        },
        {
            word: "weak",
            categories: [
                "touch"
            ]
        },
        {
            word: "wet",
            categories: [
                "touch"
            ]
        },
        {
            word: "whining",
            categories: [
                "sounds"
            ]
        },
        {
            word: "whispering",
            categories: [
                "sounds"
            ]
        },
        {
            word: "white",
            categories: [
                "color"
            ]
        },
        {
            word: "wide",
            categories: [
                "shapes"
            ]
        },
        {
            word: "witty",
            categories: [
                "personality"
            ]
        },
        {
            word: "wonderful",
            categories: [
                "personality"
            ]
        },
        {
            word: "wooden",
            categories: [
                "touch"
            ]
        },
        {
            word: "worried",
            categories: [
                "personality"
            ]
        },
        {
            word: "wrong",
            categories: [
                "condition"
            ]
        },
        {
            word: "yellow",
            categories: [
                "color"
            ]
        },
        {
            word: "young",
            categories: [
                "time"
            ]
        },
        {
            word: "yummy",
            categories: [
                "taste"
            ]
        },
        {
            word: "zealous",
            categories: [
                "personality"
            ]
        }
    ]
};
function getWordsByCategory(partOfSpeech, categories) {
    var e_1, _a;
    if (categories === void 0) {
        categories = [];
    }
    var selectedCategoried = new Set(categories);
    var selectedWords = [];
    try {
        for(var _b = __values(exports.wordList[partOfSpeech]), _c = _b.next(); !_c.done; _c = _b.next()){
            var word = _c.value;
            if (categories.length === 0 || word.categories.some(function(cat) {
                return selectedCategoried.has(cat);
            })) {
                selectedWords.push(word.word);
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return selectedWords;
}
exports.getWordsByCategory = getWordsByCategory;
}),
"[project]/Downloads/nodebase-main/node_modules/random-word-slugs/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __assign = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.totalUniqueSlugs = exports.generateSlug = void 0;
var words_1 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/random-word-slugs/dist/words.js [app-rsc] (ecmascript)");
var DEFAULT_NUMBER_OF_WORDS = 3;
function generateSlug(numberOfWords, options) {
    var numWords = numberOfWords || DEFAULT_NUMBER_OF_WORDS;
    var defaultOptions = {
        partsOfSpeech: getDefaultPartsOfSpeech(numWords),
        categories: {},
        format: "kebab"
    };
    var opts = __assign(__assign({}, defaultOptions), options);
    var words = [];
    for(var i = 0; i < numWords; i++){
        var partOfSpeech = opts.partsOfSpeech[i];
        var candidates = words_1.getWordsByCategory(opts.partsOfSpeech[i], opts.categories[partOfSpeech]);
        var rand = candidates[Math.floor(Math.random() * candidates.length)];
        words.push(rand);
    }
    return formatter(words, opts.format);
}
exports.generateSlug = generateSlug;
function getDefaultPartsOfSpeech(length) {
    var partsOfSpeech = [];
    for(var i = 0; i < length - 1; i++){
        partsOfSpeech.push("adjective");
    }
    partsOfSpeech.push("noun");
    return partsOfSpeech;
}
function formatter(arr, format) {
    if (format === "kebab") {
        return arr.join("-").toLowerCase();
    }
    if (format === "camel") {
        return arr.map(function(el, i) {
            if (i === 0) return el.toLowerCase();
            return el[0].toUpperCase() + el.slice(1).toLowerCase();
        }).join("");
    }
    if (format === "lower") {
        return arr.join(" ").toLowerCase();
    }
    if (format === "sentence") {
        return arr.map(function(el, i) {
            if (i === 0) {
                return el[0].toUpperCase() + el.slice(1).toLowerCase();
            }
            return el;
        }).join(" ");
    }
    return arr.map(function(el) {
        return el[0].toUpperCase() + el.slice(1).toLowerCase();
    }).join(" ");
}
function totalUniqueSlugs(numberOfWords, options) {
    var _a, _b;
    var numAdjectives = words_1.getWordsByCategory("adjective", (_a = options === null || options === void 0 ? void 0 : options.categories) === null || _a === void 0 ? void 0 : _a.adjective).length;
    var numNouns = words_1.getWordsByCategory("noun", (_b = options === null || options === void 0 ? void 0 : options.categories) === null || _b === void 0 ? void 0 : _b.noun).length;
    var nums = {
        adjective: numAdjectives,
        noun: numNouns
    };
    var numWords = numberOfWords || DEFAULT_NUMBER_OF_WORDS;
    var partsOfSpeech = (options === null || options === void 0 ? void 0 : options.partsOfSpeech) || getDefaultPartsOfSpeech(numWords);
    var combos = 1;
    for(var i = 0; i < numWords; i++){
        combos *= nums[partsOfSpeech[i]];
    }
    return combos;
}
exports.totalUniqueSlugs = totalUniqueSlugs;
}),
"[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "ErrorBoundaryContext",
    ()=>ErrorBoundaryContext,
    "useErrorBoundary",
    ()=>useErrorBoundary,
    "withErrorBoundary",
    ()=>withErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ErrorBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorBoundary() from the server but ErrorBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js <module evaluation>", "ErrorBoundary");
const ErrorBoundaryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorBoundaryContext() from the server but ErrorBoundaryContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js <module evaluation>", "ErrorBoundaryContext");
const useErrorBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useErrorBoundary() from the server but useErrorBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js <module evaluation>", "useErrorBoundary");
const withErrorBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call withErrorBoundary() from the server but withErrorBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js <module evaluation>", "withErrorBoundary");
}),
"[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "ErrorBoundaryContext",
    ()=>ErrorBoundaryContext,
    "useErrorBoundary",
    ()=>useErrorBoundary,
    "withErrorBoundary",
    ()=>withErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ErrorBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorBoundary() from the server but ErrorBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js", "ErrorBoundary");
const ErrorBoundaryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorBoundaryContext() from the server but ErrorBoundaryContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js", "ErrorBoundaryContext");
const useErrorBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useErrorBoundary() from the server but useErrorBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js", "useErrorBoundary");
const withErrorBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call withErrorBoundary() from the server but withErrorBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js", "withErrorBoundary");
}),
"[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/server.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLoader",
    ()=>createLoader,
    "createMultiParser",
    ()=>createMultiParser,
    "createParser",
    ()=>createParser,
    "createSearchParamsCache",
    ()=>createSearchParamsCache,
    "createSerializer",
    ()=>createSerializer,
    "createStandardSchemaV1",
    ()=>createStandardSchemaV1,
    "debounce",
    ()=>debounce,
    "defaultRateLimit",
    ()=>defaultRateLimit,
    "parseAsArrayOf",
    ()=>parseAsArrayOf,
    "parseAsBoolean",
    ()=>parseAsBoolean,
    "parseAsFloat",
    ()=>parseAsFloat,
    "parseAsHex",
    ()=>parseAsHex,
    "parseAsIndex",
    ()=>parseAsIndex,
    "parseAsInteger",
    ()=>parseAsInteger,
    "parseAsIsoDate",
    ()=>parseAsIsoDate,
    "parseAsIsoDateTime",
    ()=>parseAsIsoDateTime,
    "parseAsJson",
    ()=>parseAsJson,
    "parseAsNativeArrayOf",
    ()=>parseAsNativeArrayOf,
    "parseAsNumberLiteral",
    ()=>parseAsNumberLiteral,
    "parseAsString",
    ()=>parseAsString,
    "parseAsStringEnum",
    ()=>parseAsStringEnum,
    "parseAsStringLiteral",
    ()=>parseAsStringLiteral,
    "parseAsTimestamp",
    ()=>parseAsTimestamp,
    "throttle",
    ()=>throttle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
//#region src/lib/errors.ts
const errors = {
    303: "Multiple adapter contexts detected. This might happen in monorepos.",
    404: "nuqs requires an adapter to work with your framework.",
    409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.",
    414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
    422: "Invalid options combination: `limitUrlUpdates: debounce` should be used in SSR scenarios, with `shallow: false`",
    429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
    500: "Empty search params cache. Search params can't be accessed in Layouts.",
    501: "Search params cache already populated. Have you called `parse` twice?"
};
function error(code) {
    return `[nuqs] ${errors[code]}
  See https://nuqs.dev/NUQS-${code}`;
}
//#endregion
//#region src/lib/search-params.ts
function isAbsentFromUrl(query) {
    return query === null || Array.isArray(query) && query.length === 0;
}
function write(serialized, key, searchParams) {
    if (typeof serialized === "string") searchParams.set(key, serialized);
    else {
        searchParams.delete(key);
        for (const v of serialized)searchParams.append(key, v);
        if (!searchParams.has(key)) searchParams.set(key, "");
    }
    return searchParams;
}
//#endregion
//#region src/loader.ts
function createLoader(parsers, { urlKeys = {} } = {}) {
    function loadSearchParams(input, { strict = false } = {}) {
        if (input instanceof Promise) return input.then((i)=>loadSearchParams(i, {
                strict
            }));
        const searchParams = extractSearchParams(input);
        const result = {};
        for (const [key, parser] of Object.entries(parsers)){
            const urlKey = urlKeys[key] ?? key;
            const query = parser.type === "multi" ? searchParams.getAll(urlKey) : searchParams.get(urlKey);
            if (isAbsentFromUrl(query)) {
                result[key] = parser.defaultValue ?? null;
                continue;
            }
            let parsedValue;
            try {
                parsedValue = parser.parse(query);
            } catch (error$1) {
                if (strict) throw new Error(`[nuqs] Error while parsing query \`${query}\` for key \`${key}\`: ${error$1}`);
                parsedValue = null;
            }
            if (strict && query && parsedValue === null) throw new Error(`[nuqs] Failed to parse query \`${query}\` for key \`${key}\` (got null)`);
            result[key] = parsedValue ?? parser.defaultValue ?? null;
        }
        return result;
    }
    return loadSearchParams;
}
function extractSearchParams(input) {
    try {
        if (input instanceof Request) return input.url ? new URL(input.url).searchParams : new URLSearchParams();
        if (input instanceof URL) return input.searchParams;
        if (input instanceof URLSearchParams) return input;
        if (typeof input === "object") {
            const searchParams = new URLSearchParams();
            for (const [key, value] of Object.entries(input))if (Array.isArray(value)) for (const v of value)searchParams.append(key, v);
            else if (value !== void 0) searchParams.set(key, value);
            return searchParams;
        }
        if (typeof input === "string") {
            if (URL.hasOwnProperty("canParse") && URL.canParse(input)) return new URL(input).searchParams;
            return new URLSearchParams(input);
        }
    } catch  {}
    return new URLSearchParams();
}
//#endregion
//#region src/cache.ts
const $input = Symbol("Input");
function createSearchParamsCache(parsers, { urlKeys = {} } = {}) {
    const load = createLoader(parsers, {
        urlKeys
    });
    const getCache = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"](()=>({
            searchParams: {}
        }));
    function parseSync(searchParams, loaderOptions) {
        const c = getCache();
        if (Object.isFrozen(c.searchParams)) {
            if (c[$input] && compareSearchParams(searchParams, c[$input])) return all();
            throw new Error(error(501));
        }
        c.searchParams = load(searchParams, loaderOptions);
        c[$input] = searchParams;
        return Object.freeze(c.searchParams);
    }
    function parse(searchParams, loaderOptions = {}) {
        if (searchParams instanceof Promise) return searchParams.then((searchParams$1)=>parseSync(searchParams$1, loaderOptions));
        return parseSync(searchParams, loaderOptions);
    }
    function all() {
        const { searchParams } = getCache();
        if (Object.keys(searchParams).length === 0) throw new Error(error(500));
        return searchParams;
    }
    function get(key) {
        const { searchParams } = getCache();
        const entry = searchParams[key];
        if (typeof entry === "undefined") throw new Error(error(500) + `
  in get(${String(key)})`);
        return entry;
    }
    return {
        parse,
        get,
        all
    };
}
function compareSearchParams(a, b) {
    if (a === b) return true;
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for(const key in a)if (a[key] !== b[key]) return false;
    return true;
}
//#endregion
//#region src/lib/queues/rate-limiting.ts
function getDefaultThrottle() {
    if ("TURBOPACK compile-time truthy", 1) return 50;
    //TURBOPACK unreachable
    ;
}
function throttle(timeMs) {
    return {
        method: "throttle",
        timeMs
    };
}
function debounce(timeMs) {
    return {
        method: "debounce",
        timeMs
    };
}
const defaultRateLimit = throttle(getDefaultThrottle());
//#endregion
//#region src/lib/debug.ts
const debugEnabled = isDebugEnabled();
function warn(message, ...args) {
    if (!debugEnabled) return;
    console.warn(message, ...args);
}
function isDebugEnabled() {
    try {
        const test = "nuqs-localStorage-test";
        if (typeof localStorage === "undefined") return false;
        localStorage.setItem(test, test);
        const isStorageAvailable = localStorage.getItem(test) === test;
        localStorage.removeItem(test);
        return isStorageAvailable && (localStorage.getItem("debug") || "").includes("nuqs");
    } catch  {
        return false;
    }
}
//#endregion
//#region src/lib/safe-parse.ts
function safeParse(parser, value, key) {
    try {
        return parser(value);
    } catch (error$1) {
        warn("[nuqs] Error while parsing value `%s`: %O" + (key ? " (for key `%s`)" : ""), value, error$1, key);
        return null;
    }
}
//#endregion
//#region src/parsers.ts
/**
* Wrap a set of parse/serialize functions into a builder pattern parser
* you can pass to one of the hooks, making its default value type safe.
*/ function createParser(parser) {
    function parseServerSideNullable(value) {
        if (typeof value === "undefined") return null;
        let str = "";
        if (Array.isArray(value)) {
            if (value[0] === void 0) return null;
            str = value[0];
        }
        if (typeof value === "string") str = value;
        return safeParse(parser.parse, str);
    }
    return {
        type: "single",
        eq: (a, b)=>a === b,
        ...parser,
        parseServerSide: parseServerSideNullable,
        withDefault (defaultValue) {
            return {
                ...this,
                defaultValue,
                parseServerSide (value) {
                    return parseServerSideNullable(value) ?? defaultValue;
                }
            };
        },
        withOptions (options) {
            return {
                ...this,
                ...options
            };
        }
    };
}
function createMultiParser(parser) {
    function parseServerSideNullable(value) {
        if (typeof value === "undefined") return null;
        return safeParse(parser.parse, Array.isArray(value) ? value : [
            value
        ]);
    }
    return {
        type: "multi",
        eq: (a, b)=>a === b,
        ...parser,
        parseServerSide: parseServerSideNullable,
        withDefault (defaultValue) {
            return {
                ...this,
                defaultValue,
                parseServerSide (value) {
                    return parseServerSideNullable(value) ?? defaultValue;
                }
            };
        },
        withOptions (options) {
            return {
                ...this,
                ...options
            };
        }
    };
}
const parseAsString = createParser({
    parse: (v)=>v,
    serialize: String
});
const parseAsInteger = createParser({
    parse: (v)=>{
        const int = parseInt(v);
        return int == int ? int : null;
    },
    serialize: (v)=>"" + Math.round(v)
});
const parseAsIndex = createParser({
    parse: (v)=>{
        const int = parseInt(v);
        return int == int ? int - 1 : null;
    },
    serialize: (v)=>"" + Math.round(v + 1)
});
const parseAsHex = createParser({
    parse: (v)=>{
        const int = parseInt(v, 16);
        return int == int ? int : null;
    },
    serialize: (v)=>{
        const hex = Math.round(v).toString(16);
        return (hex.length & 1 ? "0" : "") + hex;
    }
});
const parseAsFloat = createParser({
    parse: (v)=>{
        const float = parseFloat(v);
        return float == float ? float : null;
    },
    serialize: String
});
const parseAsBoolean = createParser({
    parse: (v)=>v === "true",
    serialize: String
});
function compareDates(a, b) {
    return a.valueOf() === b.valueOf();
}
/**
* Querystring encoded as the number of milliseconds since epoch,
* and returned as a Date object.
*/ const parseAsTimestamp = createParser({
    parse: (v)=>{
        const ms = parseInt(v);
        return ms == ms ? new Date(ms) : null;
    },
    serialize: (v)=>"" + v.valueOf(),
    eq: compareDates
});
/**
* Querystring encoded as an ISO-8601 string (UTC),
* and returned as a Date object.
*/ const parseAsIsoDateTime = createParser({
    parse: (v)=>{
        const date = new Date(v);
        return date.valueOf() == date.valueOf() ? date : null;
    },
    serialize: (v)=>v.toISOString(),
    eq: compareDates
});
/**
* Querystring encoded as an ISO-8601 string (UTC)
* without the time zone offset, and returned as
* a Date object.
*
* The Date is parsed without the time zone offset,
* making it at 00:00:00 UTC.
*/ const parseAsIsoDate = createParser({
    parse: (v)=>{
        const date = new Date(v.slice(0, 10));
        return date.valueOf() == date.valueOf() ? date : null;
    },
    serialize: (v)=>v.toISOString().slice(0, 10),
    eq: compareDates
});
/**
* String-based enums provide better type-safety for known sets of values.
* You will need to pass the parseAsStringEnum function a list of your enum values
* in order to validate the query string. Anything else will return `null`,
* or your default value if specified.
*
* Example:
* ```ts
* enum Direction {
*   up = 'UP',
*   down = 'DOWN',
*   left = 'LEFT',
*   right = 'RIGHT'
* }
*
* const [direction, setDirection] = useQueryState(
*   'direction',
*    parseAsStringEnum<Direction>(Object.values(Direction)) // pass a list of allowed values
*      .withDefault(Direction.up)
* )
* ```
*
* Note: the query string value will be the value of the enum, not its name
* (example above: `direction=UP`).
*
* @param validValues The values you want to accept
*/ function parseAsStringEnum(validValues) {
    return parseAsStringLiteral(validValues);
}
/**
* String-based literals provide better type-safety for known sets of values.
* You will need to pass the parseAsStringLiteral function a list of your string values
* in order to validate the query string. Anything else will return `null`,
* or your default value if specified.
*
* Example:
* ```ts
* const colors = ["red", "green", "blue"] as const
*
* const [color, setColor] = useQueryState(
*   'color',
*    parseAsStringLiteral(colors) // pass a readonly list of allowed values
*      .withDefault("red")
* )
* ```
*
* @param validValues The values you want to accept
*/ function parseAsStringLiteral(validValues) {
    return createParser({
        parse: (query)=>{
            const asConst = query;
            return validValues.includes(asConst) ? asConst : null;
        },
        serialize: String
    });
}
/**
* Number-based literals provide better type-safety for known sets of values.
* You will need to pass the parseAsNumberLiteral function a list of your number values
* in order to validate the query string. Anything else will return `null`,
* or your default value if specified.
*
* Example:
* ```ts
* const diceSides = [1, 2, 3, 4, 5, 6] as const
*
* const [side, setSide] = useQueryState(
*   'side',
*    parseAsNumberLiteral(diceSides) // pass a readonly list of allowed values
*      .withDefault(4)
* )
* ```
*
* @param validValues The values you want to accept
*/ function parseAsNumberLiteral(validValues) {
    return createParser({
        parse: (query)=>{
            const asConst = parseFloat(query);
            if (validValues.includes(asConst)) return asConst;
            return null;
        },
        serialize: String
    });
}
/**
* Encode any object shape into the querystring value as JSON.
* Note: you may want to use `useQueryStates` for finer control over
* multiple related query keys.
*
* @param runtimeParser Runtime parser (eg: Zod schema or Standard Schema) to validate after JSON.parse
*/ function parseAsJson(validator) {
    return createParser({
        parse: (query)=>{
            try {
                const obj = JSON.parse(query);
                if ("~standard" in validator) {
                    const result = validator["~standard"].validate(obj);
                    if (result instanceof Promise) throw new Error("[nuqs] Only synchronous Standard Schemas are supported in parseAsJson.");
                    return result.issues ? null : result.value;
                }
                return validator(obj);
            } catch  {
                return null;
            }
        },
        serialize: (value)=>JSON.stringify(value),
        eq (a, b) {
            return a === b || JSON.stringify(a) === JSON.stringify(b);
        }
    });
}
/**
* A comma-separated list of items.
* Items are URI-encoded for safety, so they may not look nice in the URL.
*
* @param itemParser Parser for each individual item in the array
* @param separator The character to use to separate items (default ',')
*/ function parseAsArrayOf(itemParser, separator = ",") {
    const itemEq = itemParser.eq ?? ((a, b)=>a === b);
    const encodedSeparator = encodeURIComponent(separator);
    return createParser({
        parse: (query)=>{
            if (query === "") return [];
            return query.split(separator).map((item, index)=>safeParse(itemParser.parse, item.replaceAll(encodedSeparator, separator), `[${index}]`)).filter((value)=>value !== null && value !== void 0);
        },
        serialize: (values)=>values.map((value)=>{
                return (itemParser.serialize ? itemParser.serialize(value) : String(value)).replaceAll(separator, encodedSeparator);
            }).join(separator),
        eq (a, b) {
            if (a === b) return true;
            if (a.length !== b.length) return false;
            return a.every((value, index)=>itemEq(value, b[index]));
        }
    });
}
function parseAsNativeArrayOf(itemParser) {
    const itemEq = itemParser.eq ?? ((a, b)=>a === b);
    return createMultiParser({
        parse: (query)=>{
            const parsed = query.map((item, index)=>safeParse(itemParser.parse, item, `[${index}]`)).filter((value)=>value !== null && value !== void 0);
            return parsed.length === 0 ? null : parsed;
        },
        serialize: (values)=>{
            return (Array.isArray(values) ? values : [
                values
            ]).flatMap((value)=>{
                const serialized = itemParser.serialize?.(value) ?? String(value);
                return typeof serialized === "string" ? [
                    serialized
                ] : [
                    ...serialized
                ];
            });
        },
        eq (a, b) {
            if (a === b) return true;
            if (a.length !== b.length) return false;
            return a.every((value, index)=>itemEq(value, b[index]));
        }
    }).withDefault([]);
}
//#endregion
//#region src/lib/url-encoding.ts
function renderQueryString(search) {
    if (search.size === 0) return "";
    const query = [];
    for (const [key, value] of search.entries()){
        const safeKey = key.replace(/#/g, "%23").replace(/&/g, "%26").replace(/\+/g, "%2B").replace(/=/g, "%3D").replace(/\?/g, "%3F");
        query.push(`${safeKey}=${encodeQueryValue(value)}`);
    }
    const queryString = "?" + query.join("&");
    warnIfURLIsTooLong(queryString);
    return queryString;
}
function encodeQueryValue(input) {
    return input.replace(/%/g, "%25").replace(/\+/g, "%2B").replace(/ /g, "+").replace(/#/g, "%23").replace(/&/g, "%26").replace(/"/g, "%22").replace(/'/g, "%27").replace(/`/g, "%60").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/[\x00-\x1F]/g, (char)=>encodeURIComponent(char));
}
const URL_MAX_LENGTH = 2e3;
function warnIfURLIsTooLong(queryString) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof location === "undefined") return;
    const url = new URL(location.href);
    url.search = queryString;
    if (url.href.length > URL_MAX_LENGTH) console.warn(error(414));
}
//#endregion
//#region src/serializer.ts
function createSerializer(parsers, { clearOnDefault = true, urlKeys = {}, processUrlSearchParams } = {}) {
    function serialize(arg1BaseOrValues, arg2values = {}) {
        let [base, search] = isBase(arg1BaseOrValues) ? splitBase(arg1BaseOrValues) : [
            "",
            new URLSearchParams()
        ];
        const values = isBase(arg1BaseOrValues) ? arg2values : arg1BaseOrValues;
        if (values === null) {
            for(const key in parsers){
                const urlKey = urlKeys[key] ?? key;
                search.delete(urlKey);
            }
            if (processUrlSearchParams) search = processUrlSearchParams(search);
            return base + renderQueryString(search);
        }
        for(const key in parsers){
            const parser = parsers[key];
            const value = values[key];
            if (!parser || value === void 0) continue;
            const urlKey = urlKeys[key] ?? key;
            const isMatchingDefault = parser.defaultValue !== void 0 && (parser.eq ?? ((a, b)=>a === b))(value, parser.defaultValue);
            if (value === null || (parser.clearOnDefault ?? clearOnDefault ?? true) && isMatchingDefault) search.delete(urlKey);
            else {
                const serialized = parser.serialize(value);
                search = write(serialized, urlKey, search);
            }
        }
        if (processUrlSearchParams) search = processUrlSearchParams(search);
        return base + renderQueryString(search);
    }
    return serialize;
}
function isBase(base) {
    return typeof base === "string" || base instanceof URLSearchParams || base instanceof URL;
}
function splitBase(base) {
    if (typeof base === "string") {
        const [path = "", ...search] = base.split("?");
        return [
            path,
            new URLSearchParams(search.join("?"))
        ];
    } else if (base instanceof URLSearchParams) return [
        "",
        new URLSearchParams(base)
    ];
    else return [
        base.origin + base.pathname,
        new URLSearchParams(base.searchParams)
    ];
}
//#endregion
//#region src/standard-schema.ts
function createStandardSchemaV1(parsers, { urlKeys, partialOutput = false } = {}) {
    const serialize = createSerializer(parsers, {
        urlKeys
    });
    const load = createLoader(parsers, {
        urlKeys
    });
    return {
        "~standard": {
            version: 1,
            vendor: "nuqs",
            validate (input) {
                try {
                    const url = serialize(input);
                    const value = load(url, {
                        strict: true
                    });
                    if (partialOutput) {
                        for(const key in value)if (!(key in input)) delete value[key];
                    }
                    return {
                        value
                    };
                } catch (error$1) {
                    return {
                        issues: [
                            {
                                message: error$1 instanceof Error ? error$1.message : String(error$1)
                            }
                        ]
                    };
                }
            }
        }
    };
}
;
 //# sourceMappingURL=server.js.map
}),
];

//# debugId=47ce3af2-656a-e075-09ea-0159f3a7daaa
//# sourceMappingURL=6ec0f_6177a7d7._.js.map