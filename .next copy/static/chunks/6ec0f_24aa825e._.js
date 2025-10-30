(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Downloads/nodebase-main/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = (param)=>{
    let { client, children } = param;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "QueryClientProvider.useEffect": ()=>{
            client.mount();
            return ({
                "QueryClientProvider.useEffect": ()=>{
                    client.unmount();
                }
            })["QueryClientProvider.useEffect"];
        }
    }["QueryClientProvider.useEffect"], [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/queryOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_get
]);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_extract_field_descriptor
]);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_check_private_redeclaration
]);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_field_init(obj, privateMap, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateMap);
    privateMap.set(obj, value);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_set
]);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_update
]);
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_update(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "update");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_get
]);
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_method_init(obj, privateSet) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateSet);
    privateSet.add(obj);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@trpc/tanstack-react-query/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTRPCContext",
    ()=>createTRPCContext,
    "createTRPCOptionsProxy",
    ()=>createTRPCOptionsProxy,
    "useSubscription",
    ()=>useSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/client/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__callProcedure__as__callTRPCProcedure$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-client] (ecmascript) <export callProcedure as callTRPCProcedure>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__createRecursiveProxy__as__createTRPCRecursiveProxy$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/server/dist/getErrorShape-BH60iMC2.mjs [app-client] (ecmascript) <export createRecursiveProxy as createTRPCRecursiveProxy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$infiniteQueryOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$queryOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/queryOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@trpc/server/dist/utils-CLZnJdb_.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["run"])(()=>{
        const { input, type } = opts;
        const splitPath = opts.path.flatMap((part)=>part.split("."));
        if (!input && type === "any") return splitPath.length ? [
            splitPath
        ] : [];
        if (type === "infinite" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(input) && ("direction" in input || "cursor" in input)) {
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
            (0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)({}, typeof input !== "undefined" && input !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] && {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(valueOrLazy) ? valueOrLazy() : valueOrLazy;
}
//#endregion
//#region src/internals/infiniteQueryOptions.ts
var import_objectSpread2$4 = __toESM(require_objectSpread2());
function trpcInfiniteQueryOptions(args) {
    var _opts$initialCursor;
    const { input, query, path, queryKey, opts } = args;
    const inputIsSkipToken = input === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"];
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
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$infiniteQueryOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryOptions"])((0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts !== null && opts !== void 0 ? opts : {}), {}, {
        queryKey,
        queryFn: inputIsSkipToken ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] : queryFn,
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
        onSuccess () {
            for(var _len = arguments.length, args$1 = new Array(_len), _key = 0; _key < _len; _key++){
                args$1[_key] = arguments[_key];
            }
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
    const inputIsSkipToken = input === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"];
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$utils$2d$CLZnJdb_$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result)) return buildQueryFromAsyncIterable(result, queryClient, queryKey$1);
        return result;
    };
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$queryOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryOptions"])((0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts), {}, {
        queryKey,
        queryFn: inputIsSkipToken ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] : queryFn
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
    const enabled = "enabled" in opts ? !!opts.enabled : input !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"];
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
    const optsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](opts);
    optsRef.current = opts;
    const trackedProps = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](new Set([]));
    const addTrackedProp = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useSubscription.useCallback[addTrackedProp]": (key)=>{
            trackedProps.current.add(key);
        }
    }["useSubscription.useCallback[addTrackedProp]"], []);
    const currentSubscriptionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "useSubscription.useRef[currentSubscriptionRef]": ()=>{}
    }["useSubscription.useRef[currentSubscriptionRef]"]);
    const reset = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useSubscription.useCallback[reset]": ()=>{
            var _currentSubscriptionR;
            (_currentSubscriptionR = currentSubscriptionRef.current) === null || _currentSubscriptionR === void 0 || _currentSubscriptionR.call(currentSubscriptionRef);
            updateState(getInitialState);
            if (!opts.enabled) return;
            const subscription = opts.subscribe({
                onStarted: {
                    "useSubscription.useCallback[reset].subscription": ()=>{
                        var _optsRef$current$onSt, _optsRef$current;
                        (_optsRef$current$onSt = (_optsRef$current = optsRef.current).onStarted) === null || _optsRef$current$onSt === void 0 || _optsRef$current$onSt.call(_optsRef$current);
                        updateState({
                            "useSubscription.useCallback[reset].subscription": (prev)=>(0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                                    status: "pending",
                                    error: null
                                })
                        }["useSubscription.useCallback[reset].subscription"]);
                    }
                }["useSubscription.useCallback[reset].subscription"],
                onData: {
                    "useSubscription.useCallback[reset].subscription": (data)=>{
                        var _optsRef$current$onDa, _optsRef$current2;
                        (_optsRef$current$onDa = (_optsRef$current2 = optsRef.current).onData) === null || _optsRef$current$onDa === void 0 || _optsRef$current$onDa.call(_optsRef$current2, data);
                        updateState({
                            "useSubscription.useCallback[reset].subscription": (prev)=>(0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                                    status: "pending",
                                    data,
                                    error: null
                                })
                        }["useSubscription.useCallback[reset].subscription"]);
                    }
                }["useSubscription.useCallback[reset].subscription"],
                onError: {
                    "useSubscription.useCallback[reset].subscription": (error)=>{
                        var _optsRef$current$onEr, _optsRef$current3;
                        (_optsRef$current$onEr = (_optsRef$current3 = optsRef.current).onError) === null || _optsRef$current$onEr === void 0 || _optsRef$current$onEr.call(_optsRef$current3, error);
                        updateState({
                            "useSubscription.useCallback[reset].subscription": (prev)=>(0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, prev), {}, {
                                    status: "error",
                                    error
                                })
                        }["useSubscription.useCallback[reset].subscription"]);
                    }
                }["useSubscription.useCallback[reset].subscription"],
                onConnectionStateChange: {
                    "useSubscription.useCallback[reset].subscription": (result)=>{
                        var _optsRef$current$onCo, _optsRef$current4;
                        (_optsRef$current$onCo = (_optsRef$current4 = optsRef.current).onConnectionStateChange) === null || _optsRef$current$onCo === void 0 || _optsRef$current$onCo.call(_optsRef$current4, result);
                        updateState({
                            "useSubscription.useCallback[reset].subscription": (prev)=>{
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
                            }
                        }["useSubscription.useCallback[reset].subscription"]);
                    }
                }["useSubscription.useCallback[reset].subscription"]
            });
            currentSubscriptionRef.current = ({
                "useSubscription.useCallback[reset]": ()=>{
                    subscription.unsubscribe();
                }
            })["useSubscription.useCallback[reset]"];
        }
    }["useSubscription.useCallback[reset]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(opts.queryKey),
        opts.enabled
    ]);
    const getInitialState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useSubscription.useCallback[getInitialState]": ()=>{
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
        }
    }["useSubscription.useCallback[getInitialState]"], [
        opts.enabled,
        reset
    ]);
    const resultRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](getInitialState());
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](trackResult(resultRef.current, addTrackedProp));
    state.reset = reset;
    const updateState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useSubscription.useCallback[updateState]": (callback)=>{
            const prev = resultRef.current;
            const next = resultRef.current = callback(prev);
            let shouldUpdate = false;
            for (const key of trackedProps.current)if (prev[key] !== next[key]) {
                shouldUpdate = true;
                break;
            }
            if (shouldUpdate) setState(trackResult(next, addTrackedProp));
        }
    }["useSubscription.useCallback[updateState]"], [
        addTrackedProp
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useSubscription.useEffect": ()=>{
            if (!opts.enabled) return;
            reset();
            return ({
                "useSubscription.useEffect": ()=>{
                    var _currentSubscriptionR2;
                    (_currentSubscriptionR2 = currentSubscriptionRef.current) === null || _currentSubscriptionR2 === void 0 || _currentSubscriptionR2.call(currentSubscriptionRef);
                }
            })["useSubscription.useEffect"];
        }
    }["useSubscription.useEffect"], [
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
            if ("router" in opts) return Promise.resolve(unwrapLazyArg(opts.ctx)).then((ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__callProcedure__as__callTRPCProcedure$3e$__["callTRPCProcedure"])({
                    router: opts.router,
                    path,
                    getRawInput: async ()=>input,
                    ctx,
                    type,
                    signal: void 0
                }));
            const untypedClient = opts.client instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TRPCUntypedClient"] ? opts.client : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUntypedClient"])(opts.client);
            return untypedClient[type](path, input, trpcOpts);
        };
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$getErrorShape$2d$BH60iMC2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__createRecursiveProxy__as__createTRPCRecursiveProxy$3e$__["createTRPCRecursiveProxy"])((param)=>{
        let { args, path: _path } = param;
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
    const TRPCClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
    const TRPCContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
    const TRPCProvider = (props)=>{
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createTRPCContext.TRPCProvider.useMemo[value]": ()=>createTRPCOptionsProxy({
                    client: props.trpcClient,
                    queryClient: props.queryClient,
                    keyPrefix: props.keyPrefix
                })
        }["createTRPCContext.TRPCProvider.useMemo[value]"], [
            props.trpcClient,
            props.queryClient,
            props.keyPrefix
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TRPCClientContext.Provider, {
            value: props.trpcClient,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TRPCContext.Provider, {
                value,
                children: props.children
            })
        });
    };
    TRPCProvider.displayName = "TRPCProvider";
    function useTRPC() {
        const utils = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TRPCContext);
        if (!utils) throw new Error("useTRPC() can only be used inside of a <TRPCProvider>");
        return utils;
    }
    function useTRPCClient() {
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TRPCClientContext);
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/double-indexed-kv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoubleIndexedKV",
    ()=>DoubleIndexedKV
]);
class DoubleIndexedKV {
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
    constructor(){
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
} //# sourceMappingURL=double-indexed-kv.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Registry",
    ()=>Registry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/double-indexed-kv.js [app-client] (ecmascript)");
;
class Registry {
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
    constructor(generateIdentifier){
        this.generateIdentifier = generateIdentifier;
        this.kv = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleIndexedKV"]();
    }
} //# sourceMappingURL=registry.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/class-registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassRegistry",
    ()=>ClassRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/registry.js [app-client] (ecmascript)");
;
class ClassRegistry extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"] {
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
    constructor(){
        super((c)=>c.name);
        this.classToAllowedProps = new Map();
    }
} //# sourceMappingURL=class-registry.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    Object.entries(record).forEach((param)=>{
        let [key, value] = param;
        return run(value, key);
    });
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/custom-transformer-registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomTransformerRegistry",
    ()=>CustomTransformerRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
;
class CustomTransformerRegistry {
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(this.transfomers, (transformer)=>transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
    constructor(){
        this.transfomers = {};
    }
} //# sourceMappingURL=custom-transformer-registry.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/pathstringifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInstanceOfRegisteredClass",
    ()=>isInstanceOfRegisteredClass,
    "transformValue",
    ()=>transformValue,
    "untransformValue",
    ()=>untransformValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
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
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"], 'undefined', ()=>null, ()=>undefined),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBigint"], 'bigint', (v)=>v.toString(), (v)=>{
        if (typeof BigInt !== 'undefined') {
            return BigInt(v);
        }
        console.error('Please add a BigInt polyfill.');
        return v;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"], 'Date', (v)=>v.toISOString(), (v)=>new Date(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"], 'Error', (v, superJson)=>{
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
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"], 'regexp', (v)=>'' + v, (regex)=>{
        const body = regex.slice(1, regex.lastIndexOf('/'));
        const flags = regex.slice(regex.lastIndexOf('/') + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"], 'set', // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v)=>[
            ...v.values()
        ], (v)=>new Set(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"], 'map', (v)=>[
            ...v.entries()
        ], (v)=>new Map(v)),
    simpleTransformation((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNaNValue"])(v) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInfinite"])(v), 'number', (v)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNaNValue"])(v)) {
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
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isURL"], 'URL', (v)=>v.toString(), (v)=>new URL(v))
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"])(s)) {
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
const typedArrayRule = compositeTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypedArray"], (v)=>[
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
    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
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
        throw new Error("Trying to deserialize unknown class '".concat(a[1], "' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"));
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
    const applicableCompositeRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findArr"])(compositeRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson)
        };
    }
    const applicableSimpleRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findArr"])(simpleRules, (rule)=>rule.isApplicable(value, superJson));
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(type)) {
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/accessDeep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDeep",
    ()=>getDeep,
    "setDeep",
    ()=>setDeep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path)=>{
    validatePath(path);
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(object)) {
            object = getNthKey(object, +key);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(object)) {
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
            const index = +key;
            parent = parent[index];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
            parent = parent[key];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/plainer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/pathstringifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/accessDeep.js [app-client] (ecmascript)");
;
;
;
;
;
;
const enableLegacyPaths = (version)=>version < 1;
function traverse(tree, walker, version) {
    let origin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    if (!tree) {
        return;
    }
    const legacyPaths = enableLegacyPaths(version);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(tree)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(tree, (subtree, key)=>traverse(subtree, walker, version, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(key, legacyPaths)
            ]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(children, (child, key)=>{
            traverse(child, walker, version, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(key, legacyPaths)
            ]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, version, superJson) {
    traverse(annotations, (type, path)=>{
        plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDeep"])(plain, path, (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untransformValue"])(v, type, superJson));
    }, version);
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations, version) {
    const legacyPaths = enableLegacyPaths(version);
    function apply(identicalPaths, path) {
        const object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(path, legacyPaths));
        identicalPaths.map((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(path, legacyPaths)).forEach((identicalObjectPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDeep"])(plain, identicalObjectPath, ()=>object);
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(annotations)) {
        const [root, other] = annotations;
        root.forEach((identicalPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(identicalPath, legacyPaths), ()=>plain);
        });
        if (other) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(other, apply);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(annotations, apply);
    }
    return plain;
}
const isDeep = (object, superJson)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfRegisteredClass"])(object, superJson);
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
            rootEqualityPaths = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPath"]);
        } else {
            result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPath"])(representativePath)] = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPath"]);
        }
    });
    if (rootEqualityPaths) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(result)) {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(result) ? undefined : result;
    }
}
const walker = function(object, identities, superJson, dedupe) {
    let path = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], objectsInThisPath = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], seenObjects = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : new Map();
    const primitive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(object);
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
        const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null
        };
    }
    const transformationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
    var _transformationResult_value;
    const transformed = (_transformationResult_value = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _transformationResult_value !== void 0 ? _transformationResult_value : object;
    const transformedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(transformed) ? [] : {};
    const innerAnnotations = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(transformed, (value, index)=>{
        if (index === '__proto__' || index === 'constructor' || index === 'prototype') {
            throw new Error("Detected property ".concat(index, ". This is a prototype pollution risk, please remove it from your object."));
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [
            ...path,
            index
        ], [
            ...objectsInThisPath,
            object
        ], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(recursiveResult.annotations)) {
            innerAnnotations[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeKey"])(index)] = recursiveResult.annotations;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(recursiveResult.annotations)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(recursiveResult.annotations, (tree, key)=>{
                innerAnnotations[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeKey"])(index) + '.' + key] = tree;
            });
        }
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(innerAnnotations) ? {
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
"[project]/Downloads/nodebase-main/node_modules/superjson/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/class-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/custom-transformer-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/superjson/dist/plainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/copy-anything/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
class SuperJSON {
    serialize(object) {
        const identities = new Map();
        const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walker"])(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations
            };
        }
        const equalityAnnotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateReferentialEqualityAnnotations"])(identities, this.dedupe);
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
        let result = (options === null || options === void 0 ? void 0 : options.inPlace) ? json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(json);
        if (meta === null || meta === void 0 ? void 0 : meta.values) {
            var _meta_v;
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyValueAnnotations"])(result, meta.values, (_meta_v = meta.v) !== null && _meta_v !== void 0 ? _meta_v : 0, this);
        }
        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
            var _meta_v1;
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReferentialEqualityAnnotations"])(result, meta.referentialEqualities, (_meta_v1 = meta.v) !== null && _meta_v1 !== void 0 ? _meta_v1 : 0);
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
    allowErrorProps() {
        for(var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++){
            props[_key] = arguments[_key];
        }
        this.allowedErrorProps.push(...props);
    }
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */ constructor({ dedupe = false } = {}){
        this.classRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClassRegistry"]();
        this.symbolRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"]((s)=>{
            var _s_description;
            return (_s_description = s.description) !== null && _s_description !== void 0 ? _s_description : '';
        });
        this.customTransformerRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomTransformerRegistry"]();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
}
;
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
"[project]/Downloads/nodebase-main/node_modules/is-what/dist/getType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Returns the object type of the given payload */ __turbopack_context__.s([
    "getType",
    ()=>getType
]);
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
}),
"[project]/Downloads/nodebase-main/node_modules/is-what/dist/isArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArray",
    ()=>isArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/getType.js [app-client] (ecmascript)");
;
function isArray(payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getType"])(payload) === 'Array';
}
}),
"[project]/Downloads/nodebase-main/node_modules/is-what/dist/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/getType.js [app-client] (ecmascript)");
;
function isPlainObject(payload) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$getType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getType"])(payload) !== 'Object') return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
}),
"[project]/Downloads/nodebase-main/node_modules/copy-anything/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copy",
    ()=>copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/isArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/is-what/dist/isPlainObject.js [app-client] (ecmascript)");
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
function copy(target) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(target)) {
        return target.map((item)=>copy(item, options));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(target)) {
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$is$2d$what$2f$dist$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(options.props) && !options.props.includes(key)) {
            return carry;
        }
        const val = target[key];
        const newVal = copy(val, options);
        assignProp(carry, key, newVal, target, options.nonenumerable);
        return carry;
    }, {});
}
}),
"[project]/Downloads/nodebase-main/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = (param)=>{
    let { forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R } = param;
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>H(m, l)
    }["V.useState"]), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>c === "system" ? E() : c
    }["V.useState"]), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[S]": (o)=>{
            let r = o;
            if (!r) return;
            o === "system" && s && (r = E());
            let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = {
                "V.useCallback[S].L": (g)=>{
                    g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
                }
            }["V.useCallback[S].L"];
            if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
                let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
                P.style.colorScheme = D;
            }
            C == null || C();
        }
    }["V.useCallback[S]"], [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[f]": (o)=>{
            let r = typeof o == "function" ? o(c) : o;
            n(r);
            try {
                localStorage.setItem(m, r);
            } catch (v) {}
        }
    }["V.useCallback[f]"], [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[A]": (o)=>{
            let r = E(o);
            y(r), c === "system" && s && !e && S("system");
        }
    }["V.useCallback[A]"], [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = window.matchMedia(I);
            return o.addListener(A), A(o), ({
                "V.useEffect": ()=>o.removeListener(A)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = {
                "V.useEffect.o": (r)=>{
                    r.key === m && (r.newValue ? n(r.newValue) : f(l));
                }
            }["V.useEffect.o"];
            return window.addEventListener("storage", o), ({
                "V.useEffect": ()=>window.removeEventListener("storage", o)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            S(e != null ? e : c);
        }
    }["V.useEffect"], [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "V.useMemo[Q]": ()=>({
                theme: c,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: c === "system" ? T : c,
                themes: s ? [
                    ...a,
                    "system"
                ] : a,
                systemTheme: s ? T : void 0
            })
    }["V.useMemo[Q]"], [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"]((param)=>{
    let { forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w } = param;
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: typeof window == "undefined" ? d : "",
        dangerouslySetInnerHTML: {
            __html: "(".concat(M.toString(), ")(").concat(p, ")")
        }
    });
}), H = (e, i)=>{
    if (O) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || i;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? "".concat(message, ". For more information and steps for solving, visit https://motion.dev/troubleshooting/").concat(errorCode) : message;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem(param, fromIndex, toIndex) {
    let [...arr] = param;
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
    constructor(){
        this.subscriptions = [];
    }
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = function() {
    for(var _len = arguments.length, transformers = new Array(_len), _key = 0; _key < _len; _key++){
        transformers[_key] = arguments[_key];
    }
    return transformers.reduce(combineFunctions);
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, "Invalid easing type '".concat(definition, "'"), "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Downloads/nodebase-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster,
    "toast",
    ()=>toast,
    "useSonner",
    ()=>useSonner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
'use client';
function __insertCSS(code) {
    if (!code || typeof document == 'undefined') return;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
;
;
const getAsset = (type)=>{
    switch(type){
        case 'success':
            return SuccessIcon;
        case 'info':
            return InfoIcon;
        case 'warning':
            return WarningIcon;
        case 'error':
            return ErrorIcon;
        default:
            return null;
    }
};
const bars = Array(12).fill(0);
const Loader = (param)=>{
    let { visible, className } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            'sonner-loading-wrapper',
            className
        ].filter(Boolean).join(' '),
        "data-visible": visible
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, bars.map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: "spinner-bar-".concat(i)
        }))));
};
const SuccessIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}));
const WarningIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}));
const InfoIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}));
const ErrorIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}));
const CloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
const useIsDocumentHidden = ()=>{
    const [isDocumentHidden, setIsDocumentHidden] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useIsDocumentHidden.useEffect": ()=>{
            const callback = {
                "useIsDocumentHidden.useEffect.callback": ()=>{
                    setIsDocumentHidden(document.hidden);
                }
            }["useIsDocumentHidden.useEffect.callback"];
            document.addEventListener('visibilitychange', callback);
            return ({
                "useIsDocumentHidden.useEffect": ()=>window.removeEventListener('visibilitychange', callback)
            })["useIsDocumentHidden.useEffect"];
        }
    }["useIsDocumentHidden.useEffect"], []);
    return isDocumentHidden;
};
let toastsCounter = 1;
class Observer {
    constructor(){
        // We use arrow functions to maintain the correct `this` reference
        this.subscribe = (subscriber)=>{
            this.subscribers.push(subscriber);
            return ()=>{
                const index = this.subscribers.indexOf(subscriber);
                this.subscribers.splice(index, 1);
            };
        };
        this.publish = (data)=>{
            this.subscribers.forEach((subscriber)=>subscriber(data));
        };
        this.addToast = (data)=>{
            this.publish(data);
            this.toasts = [
                ...this.toasts,
                data
            ];
        };
        this.create = (data)=>{
            var _data_id;
            const { message, ...rest } = data;
            const id = typeof (data == null ? void 0 : data.id) === 'number' || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
            const alreadyExists = this.toasts.find((toast)=>{
                return toast.id === id;
            });
            const dismissible = data.dismissible === undefined ? true : data.dismissible;
            if (this.dismissedToasts.has(id)) {
                this.dismissedToasts.delete(id);
            }
            if (alreadyExists) {
                this.toasts = this.toasts.map((toast)=>{
                    if (toast.id === id) {
                        this.publish({
                            ...toast,
                            ...data,
                            id,
                            title: message
                        });
                        return {
                            ...toast,
                            ...data,
                            id,
                            dismissible,
                            title: message
                        };
                    }
                    return toast;
                });
            } else {
                this.addToast({
                    title: message,
                    ...rest,
                    dismissible,
                    id
                });
            }
            return id;
        };
        this.dismiss = (id)=>{
            if (id) {
                this.dismissedToasts.add(id);
                requestAnimationFrame(()=>this.subscribers.forEach((subscriber)=>subscriber({
                            id,
                            dismiss: true
                        })));
            } else {
                this.toasts.forEach((toast)=>{
                    this.subscribers.forEach((subscriber)=>subscriber({
                            id: toast.id,
                            dismiss: true
                        }));
                });
            }
            return id;
        };
        this.message = (message, data)=>{
            return this.create({
                ...data,
                message
            });
        };
        this.error = (message, data)=>{
            return this.create({
                ...data,
                message,
                type: 'error'
            });
        };
        this.success = (message, data)=>{
            return this.create({
                ...data,
                type: 'success',
                message
            });
        };
        this.info = (message, data)=>{
            return this.create({
                ...data,
                type: 'info',
                message
            });
        };
        this.warning = (message, data)=>{
            return this.create({
                ...data,
                type: 'warning',
                message
            });
        };
        this.loading = (message, data)=>{
            return this.create({
                ...data,
                type: 'loading',
                message
            });
        };
        this.promise = (promise, data)=>{
            if (!data) {
                // Nothing to show
                return;
            }
            let id = undefined;
            if (data.loading !== undefined) {
                id = this.create({
                    ...data,
                    promise,
                    type: 'loading',
                    message: data.loading,
                    description: typeof data.description !== 'function' ? data.description : undefined
                });
            }
            const p = Promise.resolve(promise instanceof Function ? promise() : promise);
            let shouldDismiss = id !== undefined;
            let result;
            const originalPromise = p.then(async (response)=>{
                result = [
                    'resolve',
                    response
                ];
                const isReactElementResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(response);
                if (isReactElementResponse) {
                    shouldDismiss = false;
                    this.create({
                        id,
                        type: 'default',
                        message: response
                    });
                } else if (isHttpResponse(response) && !response.ok) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error("HTTP error! status: ".concat(response.status)) : data.error;
                    const description = typeof data.description === 'function' ? await data.description("HTTP error! status: ".concat(response.status)) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (response instanceof Error) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(response) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (data.success !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.success === 'function' ? await data.success(response) : data.success;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'success',
                        description,
                        ...toastSettings
                    });
                }
            }).catch(async (error)=>{
                result = [
                    'reject',
                    error
                ];
                if (data.error !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(error) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(error) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                }
            }).finally(()=>{
                if (shouldDismiss) {
                    // Toast is still in load state (and will be indefinitely — dismiss it)
                    this.dismiss(id);
                    id = undefined;
                }
                data.finally == null ? void 0 : data.finally.call(data);
            });
            const unwrap = ()=>new Promise((resolve, reject)=>originalPromise.then(()=>result[0] === 'reject' ? reject(result[1]) : resolve(result[1])).catch(reject));
            if (typeof id !== 'string' && typeof id !== 'number') {
                // cannot Object.assign on undefined
                return {
                    unwrap
                };
            } else {
                return Object.assign(id, {
                    unwrap
                });
            }
        };
        this.custom = (jsx, data)=>{
            const id = (data == null ? void 0 : data.id) || toastsCounter++;
            this.create({
                jsx: jsx(id),
                id,
                ...data
            });
            return id;
        };
        this.getActiveToasts = ()=>{
            return this.toasts.filter((toast)=>!this.dismissedToasts.has(toast.id));
        };
        this.subscribers = [];
        this.toasts = [];
        this.dismissedToasts = new Set();
    }
}
const ToastState = new Observer();
// bind this to the toast function
const toastFunction = (message, data)=>{
    const id = (data == null ? void 0 : data.id) || toastsCounter++;
    ToastState.addToast({
        title: message,
        ...data,
        id
    });
    return id;
};
const isHttpResponse = (data)=>{
    return data && typeof data === 'object' && 'ok' in data && typeof data.ok === 'boolean' && 'status' in data && typeof data.status === 'number';
};
const basicToast = toastFunction;
const getHistory = ()=>ToastState.toasts;
const getToasts = ()=>ToastState.getActiveToasts();
// We use `Object.assign` to maintain the correct types as we would lose them otherwise
const toast = Object.assign(basicToast, {
    success: ToastState.success,
    info: ToastState.info,
    warning: ToastState.warning,
    error: ToastState.error,
    custom: ToastState.custom,
    message: ToastState.message,
    promise: ToastState.promise,
    dismiss: ToastState.dismiss,
    loading: ToastState.loading
}, {
    getHistory,
    getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
    return action.label !== undefined;
}
// Visible toasts amount
const VISIBLE_TOASTS_AMOUNT = 3;
// Viewport padding
const VIEWPORT_OFFSET = '24px';
// Mobile viewport padding
const MOBILE_VIEWPORT_OFFSET = '16px';
// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000;
// Default toast width
const TOAST_WIDTH = 356;
// Default gap between toasts
const GAP = 14;
// Threshold to dismiss a toast
const SWIPE_THRESHOLD = 45;
// Equal to exit animation duration
const TIME_BEFORE_UNMOUNT = 200;
function cn() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(' ');
}
function getDefaultSwipeDirections(position) {
    const [y, x] = position.split('-');
    const directions = [];
    if (y) {
        directions.push(y);
    }
    if (x) {
        directions.push(x);
    }
    return directions;
}
const Toast = (props)=>{
    var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
    const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = '', descriptionClassName = '', duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = 'Close toast' } = props;
    const [swipeDirection, setSwipeDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [swipeOutDirection, setSwipeOutDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [removed, setRemoved] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swiping, setSwiping] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swipeOut, setSwipeOut] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isSwiped, setIsSwiped] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [offsetBeforeRemove, setOffsetBeforeRemove] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [initialHeight, setInitialHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const remainingTime = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
    const dragStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const toastRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFront = index === 0;
    const isVisible = index + 1 <= visibleToasts;
    const toastType = toast.type;
    const dismissible = toast.dismissible !== false;
    const toastClassname = toast.className || '';
    const toastDescriptionClassname = toast.descriptionClassName || '';
    // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
    const heightIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[heightIndex]": ()=>heights.findIndex({
                "Toast.useMemo[heightIndex]": (height)=>height.toastId === toast.id
            }["Toast.useMemo[heightIndex]"]) || 0
    }["Toast.useMemo[heightIndex]"], [
        heights,
        toast.id
    ]);
    const closeButton = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[closeButton]": ()=>{
            var _toast_closeButton;
            return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
        }
    }["Toast.useMemo[closeButton]"], [
        toast.closeButton,
        closeButtonFromToaster
    ]);
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[duration]": ()=>toast.duration || durationFromToaster || TOAST_LIFETIME
    }["Toast.useMemo[duration]"], [
        toast.duration,
        durationFromToaster
    ]);
    const closeTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const lastCloseTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const pointerStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [y, x] = position.split('-');
    const toastsHeightBefore = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[toastsHeightBefore]": ()=>{
            return heights.reduce({
                "Toast.useMemo[toastsHeightBefore]": (prev, curr, reducerIndex)=>{
                    // Calculate offset up until current toast
                    if (reducerIndex >= heightIndex) {
                        return prev;
                    }
                    return prev + curr.height;
                }
            }["Toast.useMemo[toastsHeightBefore]"], 0);
        }
    }["Toast.useMemo[toastsHeightBefore]"], [
        heights,
        heightIndex
    ]);
    const isDocumentHidden = useIsDocumentHidden();
    const invert = toast.invert || ToasterInvert;
    const disabled = toastType === 'loading';
    offset.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo": ()=>heightIndex * gap + toastsHeightBefore
    }["Toast.useMemo"], [
        heightIndex,
        toastsHeightBefore
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            remainingTime.current = duration;
        }
    }["Toast.useEffect"], [
        duration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            // Trigger enter animation without using CSS animation
            setMounted(true);
        }
    }["Toast.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            const toastNode = toastRef.current;
            if (toastNode) {
                const height = toastNode.getBoundingClientRect().height;
                // Add toast height to heights array after the toast is mounted
                setInitialHeight(height);
                setHeights({
                    "Toast.useEffect": (h)=>[
                            {
                                toastId: toast.id,
                                height,
                                position: toast.position
                            },
                            ...h
                        ]
                }["Toast.useEffect"]);
                return ({
                    "Toast.useEffect": ()=>setHeights({
                            "Toast.useEffect": (h)=>h.filter({
                                    "Toast.useEffect": (height)=>height.toastId !== toast.id
                                }["Toast.useEffect"])
                        }["Toast.useEffect"])
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        setHeights,
        toast.id
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
        "Toast.useLayoutEffect": ()=>{
            // Keep height up to date with the content in case it updates
            if (!mounted) return;
            const toastNode = toastRef.current;
            const originalHeight = toastNode.style.height;
            toastNode.style.height = 'auto';
            const newHeight = toastNode.getBoundingClientRect().height;
            toastNode.style.height = originalHeight;
            setInitialHeight(newHeight);
            setHeights({
                "Toast.useLayoutEffect": (heights)=>{
                    const alreadyExists = heights.find({
                        "Toast.useLayoutEffect.alreadyExists": (height)=>height.toastId === toast.id
                    }["Toast.useLayoutEffect.alreadyExists"]);
                    if (!alreadyExists) {
                        return [
                            {
                                toastId: toast.id,
                                height: newHeight,
                                position: toast.position
                            },
                            ...heights
                        ];
                    } else {
                        return heights.map({
                            "Toast.useLayoutEffect": (height)=>height.toastId === toast.id ? {
                                    ...height,
                                    height: newHeight
                                } : height
                        }["Toast.useLayoutEffect"]);
                    }
                }
            }["Toast.useLayoutEffect"]);
        }
    }["Toast.useLayoutEffect"], [
        mounted,
        toast.title,
        toast.description,
        setHeights,
        toast.id,
        toast.jsx,
        toast.action,
        toast.cancel
    ]);
    const deleteToast = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toast.useCallback[deleteToast]": ()=>{
            // Save the offset for the exit swipe animation
            setRemoved(true);
            setOffsetBeforeRemove(offset.current);
            setHeights({
                "Toast.useCallback[deleteToast]": (h)=>h.filter({
                        "Toast.useCallback[deleteToast]": (height)=>height.toastId !== toast.id
                    }["Toast.useCallback[deleteToast]"])
            }["Toast.useCallback[deleteToast]"]);
            setTimeout({
                "Toast.useCallback[deleteToast]": ()=>{
                    removeToast(toast);
                }
            }["Toast.useCallback[deleteToast]"], TIME_BEFORE_UNMOUNT);
        }
    }["Toast.useCallback[deleteToast]"], [
        toast,
        removeToast,
        setHeights,
        offset
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.promise && toastType === 'loading' || toast.duration === Infinity || toast.type === 'loading') return;
            let timeoutId;
            // Pause the timer on each hover
            const pauseTimer = {
                "Toast.useEffect.pauseTimer": ()=>{
                    if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
                        // Get the elapsed time since the timer started
                        const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
                        remainingTime.current = remainingTime.current - elapsedTime;
                    }
                    lastCloseTimerStartTimeRef.current = new Date().getTime();
                }
            }["Toast.useEffect.pauseTimer"];
            const startTimer = {
                "Toast.useEffect.startTimer": ()=>{
                    // setTimeout(, Infinity) behaves as if the delay is 0.
                    // As a result, the toast would be closed immediately, giving the appearance that it was never rendered.
                    // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
                    if (remainingTime.current === Infinity) return;
                    closeTimerStartTimeRef.current = new Date().getTime();
                    // Let the toast know it has started
                    timeoutId = setTimeout({
                        "Toast.useEffect.startTimer": ()=>{
                            toast.onAutoClose == null ? void 0 : toast.onAutoClose.call(toast, toast);
                            deleteToast();
                        }
                    }["Toast.useEffect.startTimer"], remainingTime.current);
                }
            }["Toast.useEffect.startTimer"];
            if (expanded || interacting || isDocumentHidden) {
                pauseTimer();
            } else {
                startTimer();
            }
            return ({
                "Toast.useEffect": ()=>clearTimeout(timeoutId)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        expanded,
        interacting,
        toast,
        toastType,
        isDocumentHidden,
        deleteToast
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.delete) {
                deleteToast();
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
            }
        }
    }["Toast.useEffect"], [
        deleteToast,
        toast.delete
    ]);
    function getLoadingIcon() {
        var _toast_classNames;
        if (icons == null ? void 0 : icons.loading) {
            var _toast_classNames1;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, 'sonner-loader'),
                "data-visible": toastType === 'loading'
            }, icons.loading);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Loader, {
            className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
            visible: toastType === 'loading'
        });
    }
    const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
    var _toast_richColors, _icons_close;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: toastRef,
        className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastType]),
        "data-sonner-toast": "",
        "data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
        "data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
        "data-mounted": mounted,
        "data-promise": Boolean(toast.promise),
        "data-swiped": isSwiped,
        "data-removed": removed,
        "data-visible": isVisible,
        "data-y-position": y,
        "data-x-position": x,
        "data-index": index,
        "data-front": isFront,
        "data-swiping": swiping,
        "data-dismissible": dismissible,
        "data-type": toastType,
        "data-invert": invert,
        "data-swipe-out": swipeOut,
        "data-swipe-direction": swipeOutDirection,
        "data-expanded": Boolean(expanded || expandByDefault && mounted),
        "data-testid": toast.testId,
        style: {
            '--index': index,
            '--toasts-before': index,
            '--z-index': toasts.length - index,
            '--offset': "".concat(removed ? offsetBeforeRemove : offset.current, "px"),
            '--initial-height': expandByDefault ? 'auto' : "".concat(initialHeight, "px"),
            ...style,
            ...toast.style
        },
        onDragEnd: ()=>{
            setSwiping(false);
            setSwipeDirection(null);
            pointerStartRef.current = null;
        },
        onPointerDown: (event)=>{
            if (event.button === 2) return; // Return early on right click
            if (disabled || !dismissible) return;
            dragStartTime.current = new Date();
            setOffsetBeforeRemove(offset.current);
            // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
            event.target.setPointerCapture(event.pointerId);
            if (event.target.tagName === 'BUTTON') return;
            setSwiping(true);
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        },
        onPointerUp: ()=>{
            var _toastRef_current, _toastRef_current1, _dragStartTime_current;
            if (swipeOut || !dismissible) return;
            pointerStartRef.current = null;
            const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0);
            const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0);
            const timeTaken = new Date().getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / timeTaken;
            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
                setOffsetBeforeRemove(offset.current);
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX > 0 ? 'right' : 'left');
                } else {
                    setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
                }
                deleteToast();
                setSwipeOut(true);
                return;
            } else {
                var _toastRef_current2, _toastRef_current3;
                (_toastRef_current2 = toastRef.current) == null ? void 0 : _toastRef_current2.style.setProperty('--swipe-amount-x', "0px");
                (_toastRef_current3 = toastRef.current) == null ? void 0 : _toastRef_current3.style.setProperty('--swipe-amount-y', "0px");
            }
            setIsSwiped(false);
            setSwiping(false);
            setSwipeDirection(null);
        },
        onPointerMove: (event)=>{
            var _window_getSelection, _toastRef_current, _toastRef_current1;
            if (!pointerStartRef.current || !dismissible) return;
            const isHighlighted = ((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0;
            if (isHighlighted) return;
            const yDelta = event.clientY - pointerStartRef.current.y;
            const xDelta = event.clientX - pointerStartRef.current.x;
            var _props_swipeDirections;
            const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
            // Determine swipe direction if not already locked
            if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
                setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
            }
            let swipeAmount = {
                x: 0,
                y: 0
            };
            const getDampening = (delta)=>{
                const factor = Math.abs(delta) / 20;
                return 1 / (1.5 + factor);
            };
            // Only apply swipe in the locked direction
            if (swipeDirection === 'y') {
                // Handle vertical swipes
                if (swipeDirections.includes('top') || swipeDirections.includes('bottom')) {
                    if (swipeDirections.includes('top') && yDelta < 0 || swipeDirections.includes('bottom') && yDelta > 0) {
                        swipeAmount.y = yDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = yDelta * getDampening(yDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
                    }
                }
            } else if (swipeDirection === 'x') {
                // Handle horizontal swipes
                if (swipeDirections.includes('left') || swipeDirections.includes('right')) {
                    if (swipeDirections.includes('left') && xDelta < 0 || swipeDirections.includes('right') && xDelta > 0) {
                        swipeAmount.x = xDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = xDelta * getDampening(xDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
                    }
                }
            }
            if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
                setIsSwiped(true);
            }
            (_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.setProperty('--swipe-amount-x', "".concat(swipeAmount.x, "px"));
            (_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.setProperty('--swipe-amount-y', "".concat(swipeAmount.y, "px"));
        }
    }, closeButton && !toast.jsx && toastType !== 'loading' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": closeButtonAriaLabel,
        "data-disabled": disabled,
        "data-close-button": true,
        onClick: disabled || !dismissible ? ()=>{} : ()=>{
            deleteToast();
            toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
        },
        className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
    }, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
    }, toast.promise || toast.type === 'loading' && !toast.icon ? toast.icon || getLoadingIcon() : null, toast.type !== 'loading' ? icon : null) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
    }, toast.jsx ? toast.jsx : typeof toast.title === 'function' ? toast.title() : toast.title), toast.description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
    }, typeof toast.description === 'function' ? toast.description() : toast.description) : null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-cancel": true,
        style: toast.cancelButtonStyle || cancelButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.cancel)) return;
            if (!dismissible) return;
            toast.cancel.onClick == null ? void 0 : toast.cancel.onClick.call(toast.cancel, event);
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
    }, toast.cancel.label) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-action": true,
        style: toast.actionButtonStyle || actionButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.action)) return;
            toast.action.onClick == null ? void 0 : toast.action.onClick.call(toast.action, event);
            if (event.defaultPrevented) return;
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
    }, toast.action.label) : null);
};
function getDocumentDirection() {
    if (typeof window === 'undefined') return 'ltr';
    if (typeof document === 'undefined') return 'ltr'; // For Fresh purpose
    const dirAttribute = document.documentElement.getAttribute('dir');
    if (dirAttribute === 'auto' || !dirAttribute) {
        return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
    const styles = {};
    [
        defaultOffset,
        mobileOffset
    ].forEach((offset, index)=>{
        const isMobile = index === 1;
        const prefix = isMobile ? '--mobile-offset' : '--offset';
        const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
        function assignAll(offset) {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                styles["".concat(prefix, "-").concat(key)] = typeof offset === 'number' ? "".concat(offset, "px") : offset;
            });
        }
        if (typeof offset === 'number' || typeof offset === 'string') {
            assignAll(offset);
        } else if (typeof offset === 'object') {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                if (offset[key] === undefined) {
                    styles["".concat(prefix, "-").concat(key)] = defaultValue;
                } else {
                    styles["".concat(prefix, "-").concat(key)] = typeof offset[key] === 'number' ? "".concat(offset[key], "px") : offset[key];
                }
            });
        } else {
            assignAll(defaultValue);
        }
    });
    return styles;
}
function useSonner() {
    const [activeToasts, setActiveToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSonner.useEffect": ()=>{
            return ToastState.subscribe({
                "useSonner.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        setTimeout({
                            "useSonner.useEffect": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                    "useSonner.useEffect": ()=>{
                                        setActiveToasts({
                                            "useSonner.useEffect": (toasts)=>toasts.filter({
                                                    "useSonner.useEffect": (t)=>t.id !== toast.id
                                                }["useSonner.useEffect"])
                                        }["useSonner.useEffect"]);
                                    }
                                }["useSonner.useEffect"]);
                            }
                        }["useSonner.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "useSonner.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "useSonner.useEffect": ()=>{
                                    setActiveToasts({
                                        "useSonner.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "useSonner.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["useSonner.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["useSonner.useEffect"]);
                                }
                            }["useSonner.useEffect"]);
                        }
                    }["useSonner.useEffect"]);
                }
            }["useSonner.useEffect"]);
        }
    }["useSonner.useEffect"], []);
    return {
        toasts: activeToasts
    };
}
const Toaster = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function Toaster(props, ref) {
    const { id, invert, position = 'bottom-right', hotkey = [
        'altKey',
        'KeyT'
    ], expand, closeButton, className, offset, mobileOffset, theme = 'light', richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = 'Notifications' } = props;
    const [toasts, setToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const filteredToasts = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[filteredToasts]": ()=>{
            if (id) {
                return toasts.filter({
                    "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>toast.toasterId === id
                }["Toaster.Toaster.useMemo[filteredToasts]"]);
            }
            return toasts.filter({
                "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>!toast.toasterId
            }["Toaster.Toaster.useMemo[filteredToasts]"]);
        }
    }["Toaster.Toaster.useMemo[filteredToasts]"], [
        toasts,
        id
    ]);
    const possiblePositions = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[possiblePositions]": ()=>{
            return Array.from(new Set([
                position
            ].concat(filteredToasts.filter({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]).map({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]))));
        }
    }["Toaster.Toaster.useMemo[possiblePositions]"], [
        filteredToasts,
        position
    ]);
    const [heights, setHeights] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [interacting, setInteracting] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [actualTheme, setActualTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(theme !== 'system' ? theme : typeof window !== 'undefined' ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFocusWithinRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const removeToast = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toaster.Toaster.useCallback[removeToast]": (toastToRemove)=>{
            setToasts({
                "Toaster.Toaster.useCallback[removeToast]": (toasts)=>{
                    var _toasts_find;
                    if (!((_toasts_find = toasts.find({
                        "Toaster.Toaster.useCallback[removeToast]": (toast)=>toast.id === toastToRemove.id
                    }["Toaster.Toaster.useCallback[removeToast]"])) == null ? void 0 : _toasts_find.delete)) {
                        ToastState.dismiss(toastToRemove.id);
                    }
                    return toasts.filter({
                        "Toaster.Toaster.useCallback[removeToast]": (param)=>{
                            let { id } = param;
                            return id !== toastToRemove.id;
                        }
                    }["Toaster.Toaster.useCallback[removeToast]"]);
                }
            }["Toaster.Toaster.useCallback[removeToast]"]);
        }
    }["Toaster.Toaster.useCallback[removeToast]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            return ToastState.subscribe({
                "Toaster.Toaster.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        // Prevent batching of other state updates
                        requestAnimationFrame({
                            "Toaster.Toaster.useEffect": ()=>{
                                setToasts({
                                    "Toaster.Toaster.useEffect": (toasts)=>toasts.map({
                                            "Toaster.Toaster.useEffect": (t)=>t.id === toast.id ? {
                                                    ...t,
                                                    delete: true
                                                } : t
                                        }["Toaster.Toaster.useEffect"])
                                }["Toaster.Toaster.useEffect"]);
                            }
                        }["Toaster.Toaster.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "Toaster.Toaster.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "Toaster.Toaster.useEffect": ()=>{
                                    setToasts({
                                        "Toaster.Toaster.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "Toaster.Toaster.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["Toaster.Toaster.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["Toaster.Toaster.useEffect"]);
                                }
                            }["Toaster.Toaster.useEffect"]);
                        }
                    }["Toaster.Toaster.useEffect"]);
                }
            }["Toaster.Toaster.useEffect"]);
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (theme !== 'system') {
                setActualTheme(theme);
                return;
            }
            if (theme === 'system') {
                // check if current preference is dark
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // it's currently dark
                    setActualTheme('dark');
                } else {
                    // it's not dark
                    setActualTheme('light');
                }
            }
            if (typeof window === 'undefined') return;
            const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            try {
                // Chrome & Firefox
                darkMediaQuery.addEventListener('change', {
                    "Toaster.Toaster.useEffect": (param)=>{
                        let { matches } = param;
                        if (matches) {
                            setActualTheme('dark');
                        } else {
                            setActualTheme('light');
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            } catch (error) {
                // Safari < 14
                darkMediaQuery.addListener({
                    "Toaster.Toaster.useEffect": (param)=>{
                        let { matches } = param;
                        try {
                            if (matches) {
                                setActualTheme('dark');
                            } else {
                                setActualTheme('light');
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        theme
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            // Ensure expanded is always false when no toasts are present / only one left
            if (toasts.length <= 1) {
                setExpanded(false);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            const handleKeyDown = {
                "Toaster.Toaster.useEffect.handleKeyDown": (event)=>{
                    var _listRef_current;
                    const isHotkeyPressed = hotkey.every({
                        "Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed": (key)=>event[key] || event.code === key
                    }["Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed"]);
                    if (isHotkeyPressed) {
                        var _listRef_current1;
                        setExpanded(true);
                        (_listRef_current1 = listRef.current) == null ? void 0 : _listRef_current1.focus();
                    }
                    if (event.code === 'Escape' && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) {
                        setExpanded(false);
                    }
                }
            }["Toaster.Toaster.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "Toaster.Toaster.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["Toaster.Toaster.useEffect"];
        }
    }["Toaster.Toaster.useEffect"], [
        hotkey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (listRef.current) {
                return ({
                    "Toaster.Toaster.useEffect": ()=>{
                        if (lastFocusedElementRef.current) {
                            lastFocusedElementRef.current.focus({
                                preventScroll: true
                            });
                            lastFocusedElementRef.current = null;
                            isFocusWithinRef.current = false;
                        }
                    }
                })["Toaster.Toaster.useEffect"];
            }
        }
    }["Toaster.Toaster.useEffect"], [
        listRef.current
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: ref,
        "aria-label": "".concat(containerAriaLabel, " ").concat(hotkeyLabel),
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: true
    }, possiblePositions.map((position, index)=>{
        var _heights_;
        const [y, x] = position.split('-');
        if (!filteredToasts.length) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: position,
            dir: dir === 'auto' ? getDocumentDirection() : dir,
            tabIndex: -1,
            ref: listRef,
            className: className,
            "data-sonner-toaster": true,
            "data-sonner-theme": actualTheme,
            "data-y-position": y,
            "data-x-position": x,
            style: {
                '--front-toast-height': "".concat(((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0, "px"),
                '--width': "".concat(TOAST_WIDTH, "px"),
                '--gap': "".concat(gap, "px"),
                ...style,
                ...assignOffset(offset, mobileOffset)
            },
            onBlur: (event)=>{
                if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
                    isFocusWithinRef.current = false;
                    if (lastFocusedElementRef.current) {
                        lastFocusedElementRef.current.focus({
                            preventScroll: true
                        });
                        lastFocusedElementRef.current = null;
                    }
                }
            },
            onFocus: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                if (!isFocusWithinRef.current) {
                    isFocusWithinRef.current = true;
                    lastFocusedElementRef.current = event.relatedTarget;
                }
            },
            onMouseEnter: ()=>setExpanded(true),
            onMouseMove: ()=>setExpanded(true),
            onMouseLeave: ()=>{
                // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                if (!interacting) {
                    setExpanded(false);
                }
            },
            onDragEnd: ()=>setExpanded(false),
            onPointerDown: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                setInteracting(true);
            },
            onPointerUp: ()=>setInteracting(false)
        }, filteredToasts.filter((toast)=>!toast.position && index === 0 || toast.position === position).map((toast, index)=>{
            var _toastOptions_duration, _toastOptions_closeButton;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Toast, {
                key: toast.id,
                icons: icons,
                index: index,
                toast: toast,
                defaultRichColors: richColors,
                duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
                className: toastOptions == null ? void 0 : toastOptions.className,
                descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
                invert: invert,
                visibleToasts: visibleToasts,
                closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
                interacting: interacting,
                position: position,
                style: toastOptions == null ? void 0 : toastOptions.style,
                unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
                classNames: toastOptions == null ? void 0 : toastOptions.classNames,
                cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
                actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
                closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
                removeToast: removeToast,
                toasts: filteredToasts.filter((t)=>t.position == toast.position),
                heights: heights.filter((h)=>h.position == toast.position),
                setHeights: setHeights,
                expandByDefault: expand,
                gap: gap,
                expanded: expanded,
                swipeDirections: props.swipeDirections
            });
        }));
    }));
});
;
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/context-B9lexhKS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "context",
    ()=>context,
    "createAdapterProvider",
    ()=>createAdapterProvider,
    "debug",
    ()=>debug,
    "error",
    ()=>error,
    "renderQueryString",
    ()=>renderQueryString,
    "useAdapter",
    ()=>useAdapter,
    "useAdapterDefaultOptions",
    ()=>useAdapterDefaultOptions,
    "useAdapterProcessUrlSearchParams",
    ()=>useAdapterProcessUrlSearchParams,
    "warn",
    ()=>warn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
//#region src/lib/debug.ts
const debugEnabled = isDebugEnabled();
function debug(message) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (!debugEnabled) return;
    const msg = sprintf(message, ...args);
    performance.mark(msg);
    try {
        console.log(message, ...args);
    } catch (e) {
        console.log(msg);
    }
}
function warn(message) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (!debugEnabled) return;
    console.warn(message, ...args);
}
function sprintf(base) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    return base.replace(/%[sfdO]/g, (match)=>{
        const arg = args.shift();
        return match === "%O" && arg ? JSON.stringify(arg).replace(/"([^"]+)":/g, "$1:") : String(arg);
    });
}
function isDebugEnabled() {
    try {
        const test = "nuqs-localStorage-test";
        if (typeof localStorage === "undefined") return false;
        localStorage.setItem(test, test);
        const isStorageAvailable = localStorage.getItem(test) === test;
        localStorage.removeItem(test);
        return isStorageAvailable && (localStorage.getItem("debug") || "").includes("nuqs");
    } catch (e) {
        return false;
    }
}
//#endregion
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
    return "[nuqs] ".concat(errors[code], "\n  See https://nuqs.dev/NUQS-").concat(code);
}
//#endregion
//#region src/lib/url-encoding.ts
function renderQueryString(search) {
    if (search.size === 0) return "";
    const query = [];
    for (const [key, value] of search.entries()){
        const safeKey = key.replace(/#/g, "%23").replace(/&/g, "%26").replace(/\+/g, "%2B").replace(/=/g, "%3D").replace(/\?/g, "%3F");
        query.push("".concat(safeKey, "=").concat(encodeQueryValue(value)));
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
//#region src/adapters/lib/context.ts
const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    useAdapter () {
        throw new Error(error(404));
    }
});
context.displayName = "NuqsAdapterContext";
if (debugEnabled && typeof window !== "undefined") {
    if (window.__NuqsAdapterContext && window.__NuqsAdapterContext !== context) console.error(error(303));
    window.__NuqsAdapterContext = context;
}
/**
* Create a custom adapter (context provider) for nuqs to work with your framework / router.
*
* Adapters are based on React Context,
*
* @param useAdapter
* @returns
*/ function createAdapterProvider(useAdapter$1) {
    return (param)=>{
        let { children, defaultOptions, processUrlSearchParams, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(context.Provider, {
            ...props,
            value: {
                useAdapter: useAdapter$1,
                defaultOptions,
                processUrlSearchParams
            }
        }, children);
    };
}
function useAdapter(watchKeys) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context);
    if (!("useAdapter" in value)) throw new Error(error(404));
    return value.useAdapter(watchKeys);
}
const useAdapterDefaultOptions = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context).defaultOptions;
const useAdapterProcessUrlSearchParams = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context).processUrlSearchParams;
;
 //# sourceMappingURL=context-B9lexhKS.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/debounce-F8USatWE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEmitter",
    ()=>createEmitter,
    "debounce",
    ()=>debounce,
    "debounceController",
    ()=>debounceController,
    "defaultRateLimit",
    ()=>defaultRateLimit,
    "globalThrottleQueue",
    ()=>globalThrottleQueue,
    "isAbsentFromUrl",
    ()=>isAbsentFromUrl,
    "throttle",
    ()=>throttle,
    "write",
    ()=>write
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/context-B9lexhKS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
//#region src/lib/queues/rate-limiting.ts
function getDefaultThrottle() {
    if (typeof window === "undefined") return 50;
    if (!Boolean(window.GestureEvent)) return 50;
    try {
        var _navigator_userAgent;
        const match = (_navigator_userAgent = navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : _navigator_userAgent.match(/version\/([\d\.]+) safari/i);
        return parseFloat(match[1]) >= 17 ? 120 : 320;
    } catch (e) {
        return 320;
    }
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
//#region src/lib/emitter.ts
function createEmitter() {
    const all = /* @__PURE__ */ new Map();
    return {
        on (type, handler) {
            const handlers = all.get(type) || [];
            handlers.push(handler);
            all.set(type, handlers);
            return ()=>this.off(type, handler);
        },
        off (type, handler) {
            const handlers = all.get(type);
            if (handlers) all.set(type, handlers.filter((h)=>h !== handler));
        },
        emit (type, event) {
            var _all_get;
            (_all_get = all.get(type)) === null || _all_get === void 0 ? void 0 : _all_get.forEach((handler)=>handler(event));
        }
    };
}
//#endregion
//#region src/lib/timeout.ts
function timeout(callback, ms, signal) {
    function onTick() {
        callback();
        signal.removeEventListener("abort", onAbort);
    }
    const id = setTimeout(onTick, ms);
    function onAbort() {
        clearTimeout(id);
        signal.removeEventListener("abort", onAbort);
    }
    signal.addEventListener("abort", onAbort);
}
//#endregion
//#region src/lib/with-resolvers.ts
function withResolvers() {
    const P = Promise;
    if (Promise.hasOwnProperty("withResolvers")) return Promise.withResolvers();
    let resolve = ()=>{};
    let reject = ()=>{};
    return {
        promise: new P((res, rej)=>{
            resolve = res;
            reject = rej;
        }),
        resolve,
        reject
    };
}
//#endregion
//#region src/lib/compose.ts
function compose(fns, final) {
    let next = final;
    for(let i = fns.length - 1; i >= 0; i--){
        const fn = fns[i];
        if (!fn) continue;
        const prev = next;
        next = ()=>fn(prev);
    }
    next();
}
//#endregion
//#region src/lib/queues/throttle.ts
function getSearchParamsSnapshotFromLocation() {
    return new URLSearchParams(location.search);
}
var ThrottledQueue = class {
    push(param) {
        let { key, query, options } = param, timeMs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultRateLimit.timeMs;
        if (this.resetQueueOnNextPush) {
            this.reset();
            this.resetQueueOnNextPush = false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs gtq] Enqueueing %s=%s %O", key, query, options);
        this.updateMap.set(key, query);
        if (options.history === "push") this.options.history = "push";
        if (options.scroll) this.options.scroll = true;
        if (options.shallow === false) this.options.shallow = false;
        if (options.startTransition) this.transitions.add(options.startTransition);
        if (!Number.isFinite(this.timeMs) || timeMs > this.timeMs) this.timeMs = timeMs;
    }
    getQueuedQuery(key) {
        return this.updateMap.get(key);
    }
    getPendingPromise(param) {
        let { getSearchParamsSnapshot = getSearchParamsSnapshotFromLocation } = param;
        var _this_resolvers;
        var _this_resolvers_promise;
        return (_this_resolvers_promise = (_this_resolvers = this.resolvers) === null || _this_resolvers === void 0 ? void 0 : _this_resolvers.promise) !== null && _this_resolvers_promise !== void 0 ? _this_resolvers_promise : Promise.resolve(getSearchParamsSnapshot());
    }
    flush(param, processUrlSearchParams) {
        let { getSearchParamsSnapshot = getSearchParamsSnapshotFromLocation, rateLimitFactor = 1, ...adapter } = param;
        var _this_controller;
        (_this_controller = this.controller) !== null && _this_controller !== void 0 ? _this_controller : this.controller = new AbortController();
        if (!Number.isFinite(this.timeMs)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs gtq] Skipping flush due to throttleMs=Infinity");
            return Promise.resolve(getSearchParamsSnapshot());
        }
        if (this.resolvers) return this.resolvers.promise;
        this.resolvers = withResolvers();
        const flushNow = ()=>{
            this.lastFlushedAt = performance.now();
            var _adapter_autoResetQueueOnUpdate;
            const [search, error$1] = this.applyPendingUpdates({
                ...adapter,
                autoResetQueueOnUpdate: (_adapter_autoResetQueueOnUpdate = adapter.autoResetQueueOnUpdate) !== null && _adapter_autoResetQueueOnUpdate !== void 0 ? _adapter_autoResetQueueOnUpdate : true,
                getSearchParamsSnapshot
            }, processUrlSearchParams);
            if (error$1 === null) {
                this.resolvers.resolve(search);
                this.resetQueueOnNextPush = true;
            } else this.resolvers.reject(search);
            this.resolvers = null;
        };
        const runOnNextTick = ()=>{
            const timeSinceLastFlush = performance.now() - this.lastFlushedAt;
            const timeMs = this.timeMs;
            const flushInMs = rateLimitFactor * Math.max(0, timeMs - timeSinceLastFlush);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)", flushInMs, timeMs, rateLimitFactor);
            if (flushInMs === 0) flushNow();
            else timeout(flushNow, flushInMs, this.controller.signal);
        };
        timeout(runOnNextTick, 0, this.controller.signal);
        return this.resolvers.promise;
    }
    abort() {
        var _this_controller, _this_resolvers;
        (_this_controller = this.controller) === null || _this_controller === void 0 ? void 0 : _this_controller.abort();
        this.controller = new AbortController();
        (_this_resolvers = this.resolvers) === null || _this_resolvers === void 0 ? void 0 : _this_resolvers.resolve(new URLSearchParams());
        this.resolvers = null;
        return this.reset();
    }
    reset() {
        const queuedKeys = Array.from(this.updateMap.keys());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs gtq] Resetting queue %s", JSON.stringify(Object.fromEntries(this.updateMap)));
        this.updateMap.clear();
        this.transitions.clear();
        this.options = {
            history: "replace",
            scroll: false,
            shallow: true
        };
        this.timeMs = defaultRateLimit.timeMs;
        return queuedKeys;
    }
    applyPendingUpdates(adapter, processUrlSearchParams) {
        const { updateUrl, getSearchParamsSnapshot } = adapter;
        let search = getSearchParamsSnapshot();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs gtq] Applying %d pending update(s) on top of %s", this.updateMap.size, search.toString());
        if (this.updateMap.size === 0) return [
            search,
            null
        ];
        const items = Array.from(this.updateMap.entries());
        const options = {
            ...this.options
        };
        const transitions = Array.from(this.transitions);
        if (adapter.autoResetQueueOnUpdate) this.reset();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs gtq] Flushing queue %O with options %O", items, options);
        for (const [key, value] of items)if (value === null) search.delete(key);
        else search = write(value, key, search);
        if (processUrlSearchParams) search = processUrlSearchParams(search);
        try {
            compose(transitions, ()=>{
                updateUrl(search, options);
            });
            return [
                search,
                null
            ];
        } catch (err) {
            console.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(429), items.map((param)=>{
                let [key] = param;
                return key;
            }).join(), err);
            return [
                search,
                err
            ];
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "updateMap", /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "options", {
            history: "replace",
            scroll: false,
            shallow: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "timeMs", defaultRateLimit.timeMs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "transitions", /* @__PURE__ */ new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resolvers", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "controller", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastFlushedAt", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resetQueueOnNextPush", false);
    }
};
const globalThrottleQueue = new ThrottledQueue();
//#endregion
//#region src/lib/queues/useSyncExternalStores.ts
/**
* Like `useSyncExternalStore`, but for subscribing to multiple keys.
*
* Each key becomes the key of the returned object,
* and the value is the result of calling `getKeySnapshot` with that key.
*
* @param keys - A list of keys to subscribe to.
* @param subscribeKey - A function that takes a key and a callback,
* subscribes to an external store using that key (calling the callback when
* state changes occur), and returns a function to unsubscribe from that key.
* @param getKeySnapshot - A function that takes a key and returns the snapshot for that key.
* It will be called on the server and on the client, so it needs to handle both
* environments.
*/ function useSyncExternalStores(keys, subscribeKey, getKeySnapshot) {
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSyncExternalStores.useCallback[snapshot]": ()=>{
            const record = Object.fromEntries(keys.map({
                "useSyncExternalStores.useCallback[snapshot].record": (key)=>[
                        key,
                        getKeySnapshot(key)
                    ]
            }["useSyncExternalStores.useCallback[snapshot].record"]));
            return [
                JSON.stringify(record),
                record
            ];
        }
    }["useSyncExternalStores.useCallback[snapshot]"], [
        keys.join(","),
        getKeySnapshot
    ]);
    const cacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (cacheRef.current === null) cacheRef.current = snapshot();
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSyncExternalStores.useCallback[subscribe]": (callback)=>{
            const off = keys.map({
                "useSyncExternalStores.useCallback[subscribe].off": (key)=>subscribeKey(key, callback)
            }["useSyncExternalStores.useCallback[subscribe].off"]);
            return ({
                "useSyncExternalStores.useCallback[subscribe]": ()=>off.forEach({
                        "useSyncExternalStores.useCallback[subscribe]": (unsubscribe)=>unsubscribe()
                    }["useSyncExternalStores.useCallback[subscribe]"])
            })["useSyncExternalStores.useCallback[subscribe]"];
        }
    }["useSyncExternalStores.useCallback[subscribe]"], [
        keys.join(","),
        subscribeKey
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useSyncExternalStores.useSyncExternalStore": ()=>{
            const [cacheKey, record] = snapshot();
            if (cacheRef.current[0] === cacheKey) return cacheRef.current[1];
            cacheRef.current = [
                cacheKey,
                record
            ];
            return record;
        }
    }["useSyncExternalStores.useSyncExternalStore"], {
        "useSyncExternalStores.useSyncExternalStore": ()=>cacheRef.current[1]
    }["useSyncExternalStores.useSyncExternalStore"]);
}
//#endregion
//#region src/lib/queues/debounce.ts
var DebouncedPromiseQueue = class {
    abort() {
        this.controller.abort();
        this.queuedValue = void 0;
    }
    push(value, timeMs) {
        this.queuedValue = value;
        this.controller.abort();
        this.controller = new AbortController();
        timeout(()=>{
            const outputResolvers = this.resolvers;
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dq] Flushing debounce queue", value);
                const callbackPromise = this.callback(value);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dq] Reset debounce queue %O", this.queuedValue);
                this.queuedValue = void 0;
                this.resolvers = withResolvers();
                callbackPromise.then((output)=>outputResolvers.resolve(output)).catch((error$1)=>outputResolvers.reject(error$1));
            } catch (error$1) {
                this.queuedValue = void 0;
                outputResolvers.reject(error$1);
            }
        }, timeMs, this.controller.signal);
        return this.resolvers.promise;
    }
    constructor(callback){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "callback", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resolvers", withResolvers());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "controller", new AbortController());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "queuedValue", void 0);
        this.callback = callback;
    }
};
var DebounceController = class {
    useQueuedQueries(keys) {
        return useSyncExternalStores(keys, (key, callback)=>this.queuedQuerySync.on(key, callback), (key)=>this.getQueuedQuery(key));
    }
    push(update, timeMs, adapter) {
        if (!Number.isFinite(timeMs)) {
            var _adapter_getSearchParamsSnapshot;
            const getSnapshot = (_adapter_getSearchParamsSnapshot = adapter.getSearchParamsSnapshot) !== null && _adapter_getSearchParamsSnapshot !== void 0 ? _adapter_getSearchParamsSnapshot : getSearchParamsSnapshotFromLocation;
            return Promise.resolve(getSnapshot());
        }
        const key = update.key;
        if (!this.queues.has(key)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dqc] Creating debounce queue for `%s`", key);
            const queue = new DebouncedPromiseQueue((update$1)=>{
                this.throttleQueue.push(update$1);
                return this.throttleQueue.flush(adapter).finally(()=>{
                    var _this_queues_get;
                    if (((_this_queues_get = this.queues.get(update$1.key)) === null || _this_queues_get === void 0 ? void 0 : _this_queues_get.queuedValue) === void 0) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dqc] Cleaning up empty queue for `%s`", update$1.key);
                        this.queues.delete(update$1.key);
                    }
                    this.queuedQuerySync.emit(update$1.key);
                });
            });
            this.queues.set(key, queue);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dqc] Enqueueing debounce update %O", update);
        const promise = this.queues.get(key).push(update, timeMs);
        this.queuedQuerySync.emit(key);
        return promise;
    }
    abort(key) {
        var _queue_queuedValue;
        const queue = this.queues.get(key);
        if (!queue) return (passThrough)=>passThrough;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dqc] Aborting debounce queue %s=%s", key, (_queue_queuedValue = queue.queuedValue) === null || _queue_queuedValue === void 0 ? void 0 : _queue_queuedValue.query);
        this.queues.delete(key);
        queue.abort();
        this.queuedQuerySync.emit(key);
        return (promise)=>{
            promise.then(queue.resolvers.resolve, queue.resolvers.reject);
            return promise;
        };
    }
    abortAll() {
        for (const [key, queue] of this.queues.entries()){
            var _queue_queuedValue;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs dqc] Aborting debounce queue %s=%s", key, (_queue_queuedValue = queue.queuedValue) === null || _queue_queuedValue === void 0 ? void 0 : _queue_queuedValue.query);
            queue.abort();
            queue.resolvers.resolve(new URLSearchParams());
            this.queuedQuerySync.emit(key);
        }
        this.queues.clear();
    }
    getQueuedQuery(key) {
        var _this_queues_get_queuedValue, _this_queues_get;
        const debouncedQueued = (_this_queues_get = this.queues.get(key)) === null || _this_queues_get === void 0 ? void 0 : (_this_queues_get_queuedValue = _this_queues_get.queuedValue) === null || _this_queues_get_queuedValue === void 0 ? void 0 : _this_queues_get_queuedValue.query;
        if (debouncedQueued !== void 0) return debouncedQueued;
        return this.throttleQueue.getQueuedQuery(key);
    }
    constructor(throttleQueue = new ThrottledQueue()){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "throttleQueue", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "queues", /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "queuedQuerySync", createEmitter());
        this.throttleQueue = throttleQueue;
    }
};
const debounceController = new DebounceController(globalThrottleQueue);
;
 //# sourceMappingURL=debounce-F8USatWE.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/reset-CvWA16Vh.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resetQueues",
    ()=>resetQueues,
    "setQueueResetMutex",
    ()=>setQueueResetMutex,
    "spinQueueResetMutex",
    ()=>spinQueueResetMutex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$F8USatWE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/debounce-F8USatWE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/context-B9lexhKS.js [app-client] (ecmascript)");
;
;
//#region src/lib/queues/reset.ts
let mutex = 0;
function setQueueResetMutex() {
    let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    mutex = value;
}
function spinQueueResetMutex() {
    mutex = Math.max(0, mutex - 1);
    if (mutex > 0) return;
    resetQueues();
}
function resetQueues() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs] Aborting queues");
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$F8USatWE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounceController"].abortAll();
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$F8USatWE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThrottleQueue"].abort().forEach((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$debounce$2d$F8USatWE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounceController"].queuedQuerySync.emit(key));
}
;
 //# sourceMappingURL=reset-CvWA16Vh.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/patch-history-D_NXxM--.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "historyUpdateMarker",
    ()=>historyUpdateMarker,
    "markHistoryAsPatched",
    ()=>markHistoryAsPatched,
    "patchHistory",
    ()=>patchHistory,
    "shouldPatchHistory",
    ()=>shouldPatchHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/context-B9lexhKS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CvWA16Vh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/reset-CvWA16Vh.js [app-client] (ecmascript)");
;
;
//#region src/adapters/lib/patch-history.ts
const historyUpdateMarker = "__nuqs__";
function getSearchParams(url) {
    if (url instanceof URL) return url.searchParams;
    if (url.startsWith("?")) return new URLSearchParams(url);
    try {
        return new URL(url, location.origin).searchParams;
    } catch (e) {
        return new URLSearchParams(url);
    }
}
function shouldPatchHistory(adapter) {
    var _history_nuqs, _history_nuqs_adapters, _history_nuqs1;
    if (typeof history === "undefined") return false;
    if (((_history_nuqs = history.nuqs) === null || _history_nuqs === void 0 ? void 0 : _history_nuqs.version) && history.nuqs.version !== "0.0.0-inject-version-here") {
        console.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(409), history.nuqs.version, "0.0.0-inject-version-here", adapter);
        return false;
    }
    if ((_history_nuqs1 = history.nuqs) === null || _history_nuqs1 === void 0 ? void 0 : (_history_nuqs_adapters = _history_nuqs1.adapters) === null || _history_nuqs_adapters === void 0 ? void 0 : _history_nuqs_adapters.includes(adapter)) return false;
    return true;
}
function markHistoryAsPatched(adapter) {
    var _history_nuqs;
    history.nuqs = (_history_nuqs = history.nuqs) !== null && _history_nuqs !== void 0 ? _history_nuqs : {
        version: "0.0.0-inject-version-here",
        adapters: []
    };
    history.nuqs.adapters.push(adapter);
}
function patchHistory(emitter, adapter) {
    if (!shouldPatchHistory(adapter)) return;
    let lastSearchSeen = typeof location === "object" ? location.search : "";
    emitter.on("update", (search)=>{
        const searchString = search.toString();
        lastSearchSeen = searchString.length ? "?" + searchString : "";
    });
    window.addEventListener("popstate", ()=>{
        lastSearchSeen = location.search;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CvWA16Vh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetQueues"])();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs %s] Patching history (%s adapter)", "0.0.0-inject-version-here", adapter);
    function sync(url) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CvWA16Vh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinQueueResetMutex"])();
        try {
            if (new URL(url, location.origin).search === lastSearchSeen) return;
        } catch (e) {}
        try {
            emitter.emit("update", getSearchParams(url));
        } catch (e) {
            console.error(e);
        }
    }
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    history.pushState = function nuqs_pushState(state, marker, url) {
        originalPushState.call(history, state, "", url);
        if (url && marker !== historyUpdateMarker) sync(url);
    };
    history.replaceState = function nuqs_replaceState(state, marker, url) {
        originalReplaceState.call(history, state, "", url);
        if (url && marker !== historyUpdateMarker) sync(url);
    };
    markHistoryAsPatched(adapter);
}
;
 //# sourceMappingURL=patch-history-D_NXxM--.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/impl.app-DmCqg7o4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationSpy",
    ()=>NavigationSpy,
    "useNuqsNextAppRouterAdapter",
    ()=>useNuqsNextAppRouterAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/context-B9lexhKS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CvWA16Vh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/reset-CvWA16Vh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$patch$2d$history$2d$D_NXxM$2d2d2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/patch-history-D_NXxM--.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
;
;
;
;
//#region src/adapters/next/impl.app.ts
const NUM_HISTORY_CALLS_PER_UPDATE = 3;
let mutex = 0;
function onPopState() {
    mutex = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CvWA16Vh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetQueues"])();
}
function onHistoryStateUpdate() {
    mutex--;
    if (mutex <= 0) {
        mutex = 0;
        queueMicrotask(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$reset$2d$CvWA16Vh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetQueues"]);
    }
}
function patchHistory() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$patch$2d$history$2d$D_NXxM$2d2d2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPatchHistory"])("next/app")) return;
    const originalReplaceState = history.replaceState;
    const originalPushState = history.pushState;
    history.replaceState = function nuqs_replaceState(state, title, url) {
        onHistoryStateUpdate();
        return originalReplaceState.call(history, state, title, url);
    };
    history.pushState = function nuqs_pushState(state, title, url) {
        onHistoryStateUpdate();
        return originalPushState.call(history, state, title, url);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$patch$2d$history$2d$D_NXxM$2d2d2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markHistoryAsPatched"])("next/app");
}
function NavigationSpy() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationSpy.useEffect": ()=>{
            patchHistory();
            window.addEventListener("popstate", onPopState);
            return ({
                "NavigationSpy.useEffect": ()=>window.removeEventListener("popstate", onPopState)
            })["NavigationSpy.useEffect"];
        }
    }["NavigationSpy.useEffect"], []);
    return null;
}
function useNuqsNextAppRouterAdapter() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [optimisticSearchParams, setOptimisticSearchParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(searchParams);
    const updateUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNuqsNextAppRouterAdapter.useCallback[updateUrl]": (search, options)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                "useNuqsNextAppRouterAdapter.useCallback[updateUrl]": ()=>{
                    if (!options.shallow) setOptimisticSearchParams(search);
                    const url = renderURL(search);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs next/app] Updating url: %s", url);
                    const updateMethod = options.history === "push" ? history.pushState : history.replaceState;
                    mutex = NUM_HISTORY_CALLS_PER_UPDATE;
                    updateMethod.call(history, null, "", url);
                    if (options.scroll) window.scrollTo(0, 0);
                    if (!options.shallow) router.replace(url, {
                        scroll: false
                    });
                }
            }["useNuqsNextAppRouterAdapter.useCallback[updateUrl]"]);
        }
    }["useNuqsNextAppRouterAdapter.useCallback[updateUrl]"], []);
    return {
        searchParams: optimisticSearchParams,
        updateUrl,
        rateLimitFactor: NUM_HISTORY_CALLS_PER_UPDATE,
        autoResetQueueOnUpdate: false
    };
}
function renderURL(search) {
    const { origin, pathname, hash } = location;
    return origin + pathname + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderQueryString"])(search) + hash;
}
;
 //# sourceMappingURL=impl.app-DmCqg7o4.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/nuqs/dist/adapters/next/app.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NuqsAdapter",
    ()=>NuqsAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/context-B9lexhKS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$impl$2e$app$2d$DmCqg7o4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nuqs/dist/impl.app-DmCqg7o4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
//#region src/adapters/next/app.ts
const Provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$context$2d$B9lexhKS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAdapterProvider"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$impl$2e$app$2d$DmCqg7o4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNuqsNextAppRouterAdapter"]);
function NuqsAdapter(param) {
    let { children, ...adapterProps } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Provider, {
        ...adapterProps,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                key: "nuqs-adapter-suspense-navspy",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nuqs$2f$dist$2f$impl$2e$app$2d$DmCqg7o4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationSpy"])
            }),
            children
        ]
    });
}
;
 //# sourceMappingURL=app.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_abortPromise",
    ()=>abortPromise,
    "INTERNAL_addPendingPromiseToDependency",
    ()=>addPendingPromiseToDependency,
    "INTERNAL_buildStoreRev2",
    ()=>buildStore,
    "INTERNAL_getBuildingBlocksRev2",
    ()=>getBuildingBlocks,
    "INTERNAL_getMountedOrPendingDependents",
    ()=>getMountedOrPendingDependents,
    "INTERNAL_hasInitialValue",
    ()=>hasInitialValue,
    "INTERNAL_initializeStoreHooksRev2",
    ()=>initializeStoreHooks,
    "INTERNAL_isActuallyWritableAtom",
    ()=>isActuallyWritableAtom,
    "INTERNAL_isAtomStateInitialized",
    ()=>isAtomStateInitialized,
    "INTERNAL_isPendingPromise",
    ()=>isPendingPromise,
    "INTERNAL_isPromiseLike",
    ()=>isPromiseLike,
    "INTERNAL_promiseStateMap",
    ()=>promiseStateMap,
    "INTERNAL_registerAbortHandler",
    ()=>registerAbortHandler,
    "INTERNAL_returnAtomValue",
    ()=>returnAtomValue
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Downloads/nodebase-main/node_modules/jotai/esm/vanilla/internals.mjs")}`;
    }
};
function hasInitialValue(atom) {
    return "init" in atom;
}
function isActuallyWritableAtom(atom) {
    return !!atom.write;
}
function isAtomStateInitialized(atomState) {
    return "v" in atomState || "e" in atomState;
}
function returnAtomValue(atomState) {
    if ("e" in atomState) {
        throw atomState.e;
    }
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("v" in atomState)) {
        throw new Error("[Bug] atom state is not initialized");
    }
    return atomState.v;
}
const promiseStateMap = /* @__PURE__ */ new WeakMap();
function isPendingPromise(value) {
    var _a;
    return isPromiseLike(value) && !!((_a = promiseStateMap.get(value)) == null ? void 0 : _a[0]);
}
function abortPromise(promise) {
    const promiseState = promiseStateMap.get(promise);
    if (promiseState == null ? void 0 : promiseState[0]) {
        promiseState[0] = false;
        promiseState[1].forEach((fn)=>fn());
    }
}
function registerAbortHandler(promise, abortHandler) {
    let promiseState = promiseStateMap.get(promise);
    if (!promiseState) {
        promiseState = [
            true,
            /* @__PURE__ */ new Set()
        ];
        promiseStateMap.set(promise, promiseState);
        const settle = ()=>{
            promiseState[0] = false;
        };
        promise.then(settle, settle);
    }
    promiseState[1].add(abortHandler);
}
function isPromiseLike(p) {
    return typeof (p == null ? void 0 : p.then) === "function";
}
function addPendingPromiseToDependency(atom, promise, dependencyAtomState) {
    if (!dependencyAtomState.p.has(atom)) {
        dependencyAtomState.p.add(atom);
        const cleanup = ()=>dependencyAtomState.p.delete(atom);
        promise.then(cleanup, cleanup);
    }
}
function getMountedOrPendingDependents(atom, atomState, mountedMap) {
    var _a;
    const dependents = /* @__PURE__ */ new Set();
    for (const a of ((_a = mountedMap.get(atom)) == null ? void 0 : _a.t) || []){
        if (mountedMap.has(a)) {
            dependents.add(a);
        }
    }
    for (const atomWithPendingPromise of atomState.p){
        dependents.add(atomWithPendingPromise);
    }
    return dependents;
}
const createStoreHook = ()=>{
    const callbacks = /* @__PURE__ */ new Set();
    const notify = ()=>callbacks.forEach((fn)=>fn());
    notify.add = (fn)=>{
        callbacks.add(fn);
        return ()=>callbacks.delete(fn);
    };
    return notify;
};
const createStoreHookForAtoms = ()=>{
    const all = {};
    const callbacks = /* @__PURE__ */ new WeakMap();
    const notify = (atom)=>{
        var _a, _b;
        (_a = callbacks.get(all)) == null ? void 0 : _a.forEach((fn)=>fn(atom));
        (_b = callbacks.get(atom)) == null ? void 0 : _b.forEach((fn)=>fn());
    };
    notify.add = (atom, fn)=>{
        const key = atom || all;
        const fns = (callbacks.has(key) ? callbacks : callbacks.set(key, /* @__PURE__ */ new Set())).get(key);
        fns.add(fn);
        return ()=>{
            fns == null ? void 0 : fns.delete(fn);
            if (!fns.size) {
                callbacks.delete(key);
            }
        };
    };
    return notify;
};
function initializeStoreHooks(storeHooks) {
    storeHooks.r || (storeHooks.r = createStoreHookForAtoms());
    storeHooks.c || (storeHooks.c = createStoreHookForAtoms());
    storeHooks.m || (storeHooks.m = createStoreHookForAtoms());
    storeHooks.u || (storeHooks.u = createStoreHookForAtoms());
    storeHooks.f || (storeHooks.f = createStoreHook());
    return storeHooks;
}
const atomRead = function(_store, atom) {
    for(var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        params[_key - 2] = arguments[_key];
    }
    return atom.read(...params);
};
const atomWrite = function(_store, atom) {
    for(var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        params[_key - 2] = arguments[_key];
    }
    return atom.write(...params);
};
const atomOnInit = (store, atom)=>{
    var _a;
    return (_a = atom.unstable_onInit) == null ? void 0 : _a.call(atom, store);
};
const atomOnMount = (_store, atom, setAtom)=>{
    var _a;
    return (_a = atom.onMount) == null ? void 0 : _a.call(atom, setAtom);
};
const ensureAtomState = (store, atom)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const atomStateMap = buildingBlocks[0];
    const atomOnInit2 = buildingBlocks[9];
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !atom) {
        throw new Error("Atom is undefined or null");
    }
    let atomState = atomStateMap.get(atom);
    if (!atomState) {
        atomState = {
            d: /* @__PURE__ */ new Map(),
            p: /* @__PURE__ */ new Set(),
            n: 0
        };
        atomStateMap.set(atom, atomState);
        atomOnInit2 == null ? void 0 : atomOnInit2(store, atom);
    }
    return atomState;
};
const flushCallbacks = (store)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const changedAtoms = buildingBlocks[3];
    const mountCallbacks = buildingBlocks[4];
    const unmountCallbacks = buildingBlocks[5];
    const storeHooks = buildingBlocks[6];
    const recomputeInvalidatedAtoms2 = buildingBlocks[13];
    const errors = [];
    const call = (fn)=>{
        try {
            fn();
        } catch (e) {
            errors.push(e);
        }
    };
    do {
        if (storeHooks.f) {
            call(storeHooks.f);
        }
        const callbacks = /* @__PURE__ */ new Set();
        const add = callbacks.add.bind(callbacks);
        changedAtoms.forEach((atom)=>{
            var _a;
            return (_a = mountedMap.get(atom)) == null ? void 0 : _a.l.forEach(add);
        });
        changedAtoms.clear();
        unmountCallbacks.forEach(add);
        unmountCallbacks.clear();
        mountCallbacks.forEach(add);
        mountCallbacks.clear();
        callbacks.forEach(call);
        if (changedAtoms.size) {
            recomputeInvalidatedAtoms2(store);
        }
    }while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size)
    if (errors.length) {
        throw new AggregateError(errors);
    }
};
const recomputeInvalidatedAtoms = (store)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const changedAtoms = buildingBlocks[3];
    const ensureAtomState2 = buildingBlocks[11];
    const readAtomState2 = buildingBlocks[14];
    const mountDependencies2 = buildingBlocks[17];
    const topSortedReversed = [];
    const visiting = /* @__PURE__ */ new WeakSet();
    const visited = /* @__PURE__ */ new WeakSet();
    const stack = Array.from(changedAtoms);
    while(stack.length){
        const a = stack[stack.length - 1];
        const aState = ensureAtomState2(store, a);
        if (visited.has(a)) {
            stack.pop();
            continue;
        }
        if (visiting.has(a)) {
            if (invalidatedAtoms.get(a) === aState.n) {
                topSortedReversed.push([
                    a,
                    aState
                ]);
            } else if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && invalidatedAtoms.has(a)) {
                throw new Error("[Bug] invalidated atom exists");
            }
            visited.add(a);
            stack.pop();
            continue;
        }
        visiting.add(a);
        for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
            if (!visiting.has(d)) {
                stack.push(d);
            }
        }
    }
    for(let i = topSortedReversed.length - 1; i >= 0; --i){
        const [a, aState] = topSortedReversed[i];
        let hasChangedDeps = false;
        for (const dep of aState.d.keys()){
            if (dep !== a && changedAtoms.has(dep)) {
                hasChangedDeps = true;
                break;
            }
        }
        if (hasChangedDeps) {
            readAtomState2(store, a);
            mountDependencies2(store, a);
        }
        invalidatedAtoms.delete(a);
    }
};
const readAtomState = (store, atom)=>{
    var _a, _b;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const atomRead2 = buildingBlocks[7];
    const ensureAtomState2 = buildingBlocks[11];
    const flushCallbacks2 = buildingBlocks[12];
    const recomputeInvalidatedAtoms2 = buildingBlocks[13];
    const readAtomState2 = buildingBlocks[14];
    const writeAtomState2 = buildingBlocks[16];
    const mountDependencies2 = buildingBlocks[17];
    const atomState = ensureAtomState2(store, atom);
    if (isAtomStateInitialized(atomState)) {
        if (mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n) {
            return atomState;
        }
        if (Array.from(atomState.d).every((param)=>{
            let [a, n] = param;
            return(// Recursively, read the atom state of the dependency, and
            // check if the atom epoch number is unchanged
            readAtomState2(store, a).n === n);
        })) {
            return atomState;
        }
    }
    atomState.d.clear();
    let isSync = true;
    function mountDependenciesIfAsync() {
        if (mountedMap.has(atom)) {
            mountDependencies2(store, atom);
            recomputeInvalidatedAtoms2(store);
            flushCallbacks2(store);
        }
    }
    function getter(a) {
        var _a2;
        if (a === atom) {
            const aState2 = ensureAtomState2(store, a);
            if (!isAtomStateInitialized(aState2)) {
                if (hasInitialValue(a)) {
                    setAtomStateValueOrPromise(store, a, a.init);
                } else {
                    throw new Error("no atom init");
                }
            }
            return returnAtomValue(aState2);
        }
        const aState = readAtomState2(store, a);
        try {
            return returnAtomValue(aState);
        } finally{
            atomState.d.set(a, aState.n);
            if (isPendingPromise(atomState.v)) {
                addPendingPromiseToDependency(atom, atomState.v, aState);
            }
            (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t.add(atom);
            if (!isSync) {
                mountDependenciesIfAsync();
            }
        }
    }
    let controller;
    let setSelf;
    const options = {
        get signal () {
            if (!controller) {
                controller = new AbortController();
            }
            return controller.signal;
        },
        get setSelf () {
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom)) {
                console.warn("setSelf function cannot be used with read-only atom");
            }
            if (!setSelf && isActuallyWritableAtom(atom)) {
                setSelf = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && isSync) {
                        console.warn("setSelf function cannot be called in sync");
                    }
                    if (!isSync) {
                        try {
                            return writeAtomState2(store, atom, ...args);
                        } finally{
                            recomputeInvalidatedAtoms2(store);
                            flushCallbacks2(store);
                        }
                    }
                };
            }
            return setSelf;
        }
    };
    const prevEpochNumber = atomState.n;
    try {
        const valueOrPromise = atomRead2(store, atom, getter, options);
        setAtomStateValueOrPromise(store, atom, valueOrPromise);
        if (isPromiseLike(valueOrPromise)) {
            registerAbortHandler(valueOrPromise, ()=>controller == null ? void 0 : controller.abort());
            valueOrPromise.then(mountDependenciesIfAsync, mountDependenciesIfAsync);
        }
        (_a = storeHooks.r) == null ? void 0 : _a.call(storeHooks, atom);
        return atomState;
    } catch (error) {
        delete atomState.v;
        atomState.e = error;
        ++atomState.n;
        return atomState;
    } finally{
        isSync = false;
        if (prevEpochNumber !== atomState.n && invalidatedAtoms.get(atom) === prevEpochNumber) {
            invalidatedAtoms.set(atom, atomState.n);
            changedAtoms.add(atom);
            (_b = storeHooks.c) == null ? void 0 : _b.call(storeHooks, atom);
        }
    }
};
const invalidateDependents = (store, atom)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const ensureAtomState2 = buildingBlocks[11];
    const stack = [
        atom
    ];
    while(stack.length){
        const a = stack.pop();
        const aState = ensureAtomState2(store, a);
        for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
            const dState = ensureAtomState2(store, d);
            invalidatedAtoms.set(d, dState.n);
            stack.push(d);
        }
    }
};
const writeAtomState = function(store, atom) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    const buildingBlocks = getInternalBuildingBlocks(store);
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const atomWrite2 = buildingBlocks[8];
    const ensureAtomState2 = buildingBlocks[11];
    const flushCallbacks2 = buildingBlocks[12];
    const recomputeInvalidatedAtoms2 = buildingBlocks[13];
    const readAtomState2 = buildingBlocks[14];
    const invalidateDependents2 = buildingBlocks[15];
    const mountDependencies2 = buildingBlocks[17];
    let isSync = true;
    const getter = (a)=>returnAtomValue(readAtomState2(store, a));
    const setter = function(a) {
        for(var _len = arguments.length, args2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args2[_key - 1] = arguments[_key];
        }
        var _a;
        const aState = ensureAtomState2(store, a);
        try {
            if (a === atom) {
                if (!hasInitialValue(a)) {
                    throw new Error("atom not writable");
                }
                const prevEpochNumber = aState.n;
                const v = args2[0];
                setAtomStateValueOrPromise(store, a, v);
                mountDependencies2(store, a);
                if (prevEpochNumber !== aState.n) {
                    changedAtoms.add(a);
                    (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                    invalidateDependents2(store, a);
                }
                return void 0;
            } else {
                return writeAtomState(store, a, ...args2);
            }
        } finally{
            if (!isSync) {
                recomputeInvalidatedAtoms2(store);
                flushCallbacks2(store);
            }
        }
    };
    try {
        return atomWrite2(store, atom, getter, setter, ...args);
    } finally{
        isSync = false;
    }
};
const mountDependencies = (store, atom)=>{
    var _a;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const ensureAtomState2 = buildingBlocks[11];
    const invalidateDependents2 = buildingBlocks[15];
    const mountAtom2 = buildingBlocks[18];
    const unmountAtom2 = buildingBlocks[19];
    const atomState = ensureAtomState2(store, atom);
    const mounted = mountedMap.get(atom);
    if (mounted && !isPendingPromise(atomState.v)) {
        for (const [a, n] of atomState.d){
            if (!mounted.d.has(a)) {
                const aState = ensureAtomState2(store, a);
                const aMounted = mountAtom2(store, a);
                aMounted.t.add(atom);
                mounted.d.add(a);
                if (n !== aState.n) {
                    changedAtoms.add(a);
                    (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                    invalidateDependents2(store, a);
                }
            }
        }
        for (const a of mounted.d || []){
            if (!atomState.d.has(a)) {
                mounted.d.delete(a);
                const aMounted = unmountAtom2(store, a);
                aMounted == null ? void 0 : aMounted.t.delete(atom);
            }
        }
    }
};
const mountAtom = (store, atom)=>{
    var _a;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const mountCallbacks = buildingBlocks[4];
    const storeHooks = buildingBlocks[6];
    const atomOnMount2 = buildingBlocks[10];
    const ensureAtomState2 = buildingBlocks[11];
    const flushCallbacks2 = buildingBlocks[12];
    const recomputeInvalidatedAtoms2 = buildingBlocks[13];
    const readAtomState2 = buildingBlocks[14];
    const writeAtomState2 = buildingBlocks[16];
    const atomState = ensureAtomState2(store, atom);
    let mounted = mountedMap.get(atom);
    if (!mounted) {
        readAtomState2(store, atom);
        for (const a of atomState.d.keys()){
            const aMounted = mountAtom(store, a);
            aMounted.t.add(atom);
        }
        mounted = {
            l: /* @__PURE__ */ new Set(),
            d: new Set(atomState.d.keys()),
            t: /* @__PURE__ */ new Set()
        };
        mountedMap.set(atom, mounted);
        (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom);
        if (isActuallyWritableAtom(atom)) {
            const processOnMount = ()=>{
                let isSync = true;
                const setAtom = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    try {
                        return writeAtomState2(store, atom, ...args);
                    } finally{
                        if (!isSync) {
                            recomputeInvalidatedAtoms2(store);
                            flushCallbacks2(store);
                        }
                    }
                };
                try {
                    const onUnmount = atomOnMount2(store, atom, setAtom);
                    if (onUnmount) {
                        mounted.u = ()=>{
                            isSync = true;
                            try {
                                onUnmount();
                            } finally{
                                isSync = false;
                            }
                        };
                    }
                } finally{
                    isSync = false;
                }
            };
            mountCallbacks.add(processOnMount);
        }
    }
    return mounted;
};
const unmountAtom = (store, atom)=>{
    var _a;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const unmountCallbacks = buildingBlocks[5];
    const storeHooks = buildingBlocks[6];
    const ensureAtomState2 = buildingBlocks[11];
    const unmountAtom2 = buildingBlocks[19];
    const atomState = ensureAtomState2(store, atom);
    let mounted = mountedMap.get(atom);
    if (mounted && !mounted.l.size && !Array.from(mounted.t).some((a)=>{
        var _a2;
        return (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.d.has(atom);
    })) {
        if (mounted.u) {
            unmountCallbacks.add(mounted.u);
        }
        mounted = void 0;
        mountedMap.delete(atom);
        (_a = storeHooks.u) == null ? void 0 : _a.call(storeHooks, atom);
        for (const a of atomState.d.keys()){
            const aMounted = unmountAtom2(store, a);
            aMounted == null ? void 0 : aMounted.t.delete(atom);
        }
        return void 0;
    }
    return mounted;
};
const setAtomStateValueOrPromise = (store, atom, valueOrPromise)=>{
    const ensureAtomState2 = getInternalBuildingBlocks(store)[11];
    const atomState = ensureAtomState2(store, atom);
    const hasPrevValue = "v" in atomState;
    const prevValue = atomState.v;
    if (isPromiseLike(valueOrPromise)) {
        for (const a of atomState.d.keys()){
            addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState2(store, a));
        }
    }
    atomState.v = valueOrPromise;
    delete atomState.e;
    if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
        ++atomState.n;
        if (isPromiseLike(prevValue)) {
            abortPromise(prevValue);
        }
    }
};
const storeGet = (store, atom)=>{
    const readAtomState2 = getInternalBuildingBlocks(store)[14];
    return returnAtomValue(readAtomState2(store, atom));
};
const storeSet = function(store, atom) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    const buildingBlocks = getInternalBuildingBlocks(store);
    const flushCallbacks2 = buildingBlocks[12];
    const recomputeInvalidatedAtoms2 = buildingBlocks[13];
    const writeAtomState2 = buildingBlocks[16];
    try {
        return writeAtomState2(store, atom, ...args);
    } finally{
        recomputeInvalidatedAtoms2(store);
        flushCallbacks2(store);
    }
};
const storeSub = (store, atom, listener)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const flushCallbacks2 = buildingBlocks[12];
    const mountAtom2 = buildingBlocks[18];
    const unmountAtom2 = buildingBlocks[19];
    const mounted = mountAtom2(store, atom);
    const listeners = mounted.l;
    listeners.add(listener);
    flushCallbacks2(store);
    return ()=>{
        listeners.delete(listener);
        unmountAtom2(store, atom);
        flushCallbacks2(store);
    };
};
const buildingBlockMap = /* @__PURE__ */ new WeakMap();
const getInternalBuildingBlocks = (store)=>{
    const buildingBlocks = buildingBlockMap.get(store);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !buildingBlocks) {
        throw new Error("Store must be created by buildStore to read its building blocks");
    }
    return buildingBlocks;
};
function getBuildingBlocks(store) {
    const buildingBlocks = getInternalBuildingBlocks(store);
    const enhanceBuildingBlocks = buildingBlocks[24];
    if (enhanceBuildingBlocks) {
        return enhanceBuildingBlocks(buildingBlocks);
    }
    return buildingBlocks;
}
function buildStore() {
    for(var _len = arguments.length, buildArgs = new Array(_len), _key = 0; _key < _len; _key++){
        buildArgs[_key] = arguments[_key];
    }
    const store = {
        get (atom) {
            const storeGet2 = getInternalBuildingBlocks(store)[21];
            return storeGet2(store, atom);
        },
        set (atom) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            const storeSet2 = getInternalBuildingBlocks(store)[22];
            return storeSet2(store, atom, ...args);
        },
        sub (atom, listener) {
            const storeSub2 = getInternalBuildingBlocks(store)[23];
            return storeSub2(store, atom, listener);
        }
    };
    const buildingBlocks = [
        // store state
        /* @__PURE__ */ new WeakMap(),
        // atomStateMap
        /* @__PURE__ */ new WeakMap(),
        // mountedMap
        /* @__PURE__ */ new WeakMap(),
        // invalidatedAtoms
        /* @__PURE__ */ new Set(),
        // changedAtoms
        /* @__PURE__ */ new Set(),
        // mountCallbacks
        /* @__PURE__ */ new Set(),
        // unmountCallbacks
        {},
        // storeHooks
        // atom interceptors
        atomRead,
        atomWrite,
        atomOnInit,
        atomOnMount,
        // building-block functions
        ensureAtomState,
        flushCallbacks,
        recomputeInvalidatedAtoms,
        readAtomState,
        invalidateDependents,
        writeAtomState,
        mountDependencies,
        mountAtom,
        unmountAtom,
        setAtomStateValueOrPromise,
        storeGet,
        storeSet,
        storeSub,
        void 0
    ].map((fn, i)=>buildArgs[i] || fn);
    buildingBlockMap.set(store, Object.freeze(buildingBlocks));
    return store;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_overrideCreateStore",
    ()=>INTERNAL_overrideCreateStore,
    "atom",
    ()=>atom,
    "createStore",
    ()=>createStore,
    "getDefaultStore",
    ()=>getDefaultStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Downloads/nodebase-main/node_modules/jotai/esm/vanilla.mjs")}`;
    }
};
;
let keyCount = 0;
function atom(read, write) {
    const key = "atom".concat(++keyCount);
    const config = {
        toString () {
            return (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
        }
    };
    if (typeof read === "function") {
        config.read = read;
    } else {
        config.init = read;
        config.read = defaultRead;
        config.write = defaultWrite;
    }
    if (write) {
        config.write = write;
    }
    return config;
}
function defaultRead(get) {
    return get(this);
}
function defaultWrite(get, set, arg) {
    return set(this, typeof arg === "function" ? arg(get(this)) : arg);
}
let overiddenCreateStore;
function INTERNAL_overrideCreateStore(fn) {
    overiddenCreateStore = fn(overiddenCreateStore);
}
function createStore() {
    if (overiddenCreateStore) {
        return overiddenCreateStore();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_buildStoreRev2"])();
}
let defaultStore;
function getDefaultStore() {
    if (!defaultStore) {
        defaultStore = createStore();
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
            if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
                console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044");
            }
        }
    }
    return defaultStore;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider,
    "useAtom",
    ()=>useAtom,
    "useAtomValue",
    ()=>useAtomValue,
    "useSetAtom",
    ()=>useSetAtom,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Downloads/nodebase-main/node_modules/jotai/esm/react.mjs")}`;
    }
};
'use client';
;
;
;
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useStore(options) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    return (options == null ? void 0 : options.store) || store || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultStore"])();
}
function Provider(param) {
    let { children, store } = param;
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    if (!store && !storeRef.current) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
        value: store || storeRef.current
    }, children);
}
const isPromiseLike = (x)=>typeof (x == null ? void 0 : x.then) === "function";
const attachPromiseStatus = (promise)=>{
    if (!promise.status) {
        promise.status = "pending";
        promise.then((v)=>{
            promise.status = "fulfilled";
            promise.value = v;
        }, (e)=>{
            promise.status = "rejected";
            promise.reason = e;
        });
    }
};
const use = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use || // A shim for older React versions
((promise)=>{
    if (promise.status === "pending") {
        throw promise;
    } else if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else {
        attachPromiseStatus(promise);
        throw promise;
    }
});
const continuablePromiseMap = /* @__PURE__ */ new WeakMap();
const createContinuablePromise = (promise, getValue)=>{
    let continuablePromise = continuablePromiseMap.get(promise);
    if (!continuablePromise) {
        continuablePromise = new Promise((resolve, reject)=>{
            let curr = promise;
            const onFulfilled = (me)=>(v)=>{
                    if (curr === me) {
                        resolve(v);
                    }
                };
            const onRejected = (me)=>(e)=>{
                    if (curr === me) {
                        reject(e);
                    }
                };
            const onAbort = ()=>{
                try {
                    const nextValue = getValue();
                    if (isPromiseLike(nextValue)) {
                        continuablePromiseMap.set(nextValue, continuablePromise);
                        curr = nextValue;
                        nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(nextValue, onAbort);
                    } else {
                        resolve(nextValue);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(promise, onAbort);
        });
        continuablePromiseMap.set(promise, continuablePromise);
    }
    return continuablePromise;
};
function useAtomValue(atom, options) {
    const { delay, unstable_promiseStatus: promiseStatus = !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use } = options || {};
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useAtomValue.useReducer": (prev)=>{
            const nextValue = store.get(atom);
            if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
                return prev;
            }
            return [
                nextValue,
                store,
                atom
            ];
        }
    }["useAtomValue.useReducer"], void 0, {
        "useAtomValue.useReducer": ()=>[
                store.get(atom),
                store,
                atom
            ]
    }["useAtomValue.useReducer"]);
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom) {
        rerender();
        value = store.get(atom);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAtomValue.useEffect": ()=>{
            const unsub = store.sub(atom, {
                "useAtomValue.useEffect.unsub": ()=>{
                    if (promiseStatus) {
                        try {
                            const value2 = store.get(atom);
                            if (isPromiseLike(value2)) {
                                attachPromiseStatus(createContinuablePromise(value2, {
                                    "useAtomValue.useEffect.unsub": ()=>store.get(atom)
                                }["useAtomValue.useEffect.unsub"]));
                            }
                        } catch (e) {}
                    }
                    if (typeof delay === "number") {
                        setTimeout(rerender, delay);
                        return;
                    }
                    rerender();
                }
            }["useAtomValue.useEffect.unsub"]);
            rerender();
            return unsub;
        }
    }["useAtomValue.useEffect"], [
        store,
        atom,
        delay,
        promiseStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(value);
    if (isPromiseLike(value)) {
        const promise = createContinuablePromise(value, ()=>store.get(atom));
        if (promiseStatus) {
            attachPromiseStatus(promise);
        }
        return use(promise);
    }
    return value;
}
function useSetAtom(atom, options) {
    const store = useStore(options);
    const setAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSetAtom.useCallback[setAtom]": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("write" in atom)) {
                throw new Error("not writable atom");
            }
            return store.set(atom, ...args);
        }
    }["useSetAtom.useCallback[setAtom]"], [
        store,
        atom
    ]);
    return setAtom;
}
function useAtom(atom, options) {
    return [
        useAtomValue(atom, options),
        // We do wrong type assertion here, which results in throwing an error.
        useSetAtom(atom, options)
    ];
}
;
}),
]);

//# sourceMappingURL=6ec0f_24aa825e._.js.map