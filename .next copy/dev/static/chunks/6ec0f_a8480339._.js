;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="ab7f5a09-8332-f99d-c55a-746b8a7e5849")}catch(e){}}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>PanelLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ]
];
const PanelLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("panel-left", __iconNode);
;
 //# sourceMappingURL=panel-left.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeftIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelLeftIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CreditCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
];
const CreditCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("credit-card", __iconNode);
;
 //# sourceMappingURL=credit-card.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCardIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreditCardIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/joystick.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Joystick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
            key: "jg2n2t"
        }
    ],
    [
        "path",
        {
            d: "M6 15v-2",
            key: "gd6mvg"
        }
    ],
    [
        "path",
        {
            d: "M12 15V9",
            key: "8c7uyn"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "6",
            r: "3",
            key: "1gm2ql"
        }
    ]
];
const Joystick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("joystick", __iconNode);
;
 //# sourceMappingURL=joystick.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/joystick.js [app-client] (ecmascript) <export default as JoystickIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JoystickIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$joystick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$joystick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/joystick.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Key
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
            key: "g0fldk"
        }
    ],
    [
        "path",
        {
            d: "m21 2-9.6 9.6",
            key: "1j0ho8"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "15.5",
            r: "5.5",
            key: "yqb3hr"
        }
    ]
];
const Key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("key", __iconNode);
;
 //# sourceMappingURL=key.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as KeyIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }
    ],
    [
        "path",
        {
            d: "M21 12H9",
            key: "dn1m92"
        }
    ],
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ]
];
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("log-out", __iconNode);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOutIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOutIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as StarIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FolderOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
            key: "usdka0"
        }
    ]
];
const FolderOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("folder-open", __iconNode);
;
 //# sourceMappingURL=folder-open.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpenIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderOpenIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/separator.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root = Separator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/create-context.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/use-layout-effect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/id/src/id.tsx
__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useId ".trim().toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useId.useLayoutEffect": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect"]);
        }
    }["useId.useLayoutEffect"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/use-effect-event.tsx
__turbopack_context__.s([
    "useEffectEvent",
    ()=>useEffectEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var useReactEffectEvent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
    if (typeof useReactEffectEvent === "function") {
        return useReactEffectEvent(callback);
    }
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        "useEffectEvent.useRef[ref]": ()=>{
            throw new Error("Cannot call an event handler while rendering.");
        }
    }["useEffectEvent.useRef[ref]"]);
    if (typeof useReactInsertionEffect === "function") {
        useReactInsertionEffect({
            "useEffectEvent.useReactInsertionEffect": ()=>{
                ref.current = callback;
            }
        }["useEffectEvent.useReactInsertionEffect"]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
            "useEffectEvent.useLayoutEffect": ()=>{
                ref.current = callback;
            }
        }["useEffectEvent.useLayoutEffect"]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useEffectEvent.useMemo": ()=>({
                "useEffectEvent.useMemo": (...args)=>ref.current?.(...args)
            })["useEffectEvent.useMemo"]
    }["useEffectEvent.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/use-controllable-state.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState,
    "useControllableStateReducer",
    ()=>useControllableStateReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)");
;
;
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()] || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function useControllableState({ prop, defaultProp, onChange = ()=>{}, caller }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(prop !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "useControllableState.useEffect": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        }["useControllableState.useEffect"], [
            isControlled,
            caller
        ]);
    }
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
                if (value2 !== prop) {
                    onChangeRef.current?.(value2);
                }
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        onChangeRef
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(defaultProp);
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(value);
    const onChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(onChange);
    useInsertionEffect({
        "useUncontrolledState.useInsertionEffect": ()=>{
            onChangeRef.current = onChange;
        }
    }["useUncontrolledState.useInsertionEffect"], [
        onChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                onChangeRef.current?.(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef
    ]);
    return [
        value,
        setValue,
        onChangeRef
    ];
}
function isFunction(value) {
    return typeof value === "function";
}
;
;
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
    const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
    const isControlled = controlledState !== void 0;
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(onChangeProp);
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(controlledState !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "useControllableStateReducer.useEffect": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        }["useControllableStateReducer.useEffect"], [
            isControlled,
            caller
        ]);
    }
    const args = [
        {
            ...initialArg,
            state: defaultProp
        }
    ];
    if (init) {
        args.push(init);
    }
    const [internalState, dispatch] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer({
        "useControllableStateReducer.useReducer": (state2, action)=>{
            if (action.type === SYNC_STATE) {
                return {
                    ...state2,
                    state: action.state
                };
            }
            const next = reducer(state2, action);
            if (isControlled && !Object.is(next.state, state2.state)) {
                onChange(next.state);
            }
            return next;
        }
    }["useControllableStateReducer.useReducer"], ...args);
    const uncontrolledState = internalState.state;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(uncontrolledState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useControllableStateReducer.useEffect": ()=>{
            if (prevValueRef.current !== uncontrolledState) {
                prevValueRef.current = uncontrolledState;
                if (!isControlled) {
                    onChange(uncontrolledState);
                }
            }
        }
    }["useControllableStateReducer.useEffect"], [
        onChange,
        uncontrolledState,
        prevValueRef,
        isControlled
    ]);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useControllableStateReducer.useMemo[state]": ()=>{
            const isControlled2 = controlledState !== void 0;
            if (isControlled2) {
                return {
                    ...internalState,
                    state: controlledState
                };
            }
            return internalState;
        }
    }["useControllableStateReducer.useMemo[state]"], [
        internalState,
        controlledState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useControllableStateReducer.useEffect": ()=>{
            if (isControlled && !Object.is(controlledState, internalState.state)) {
                dispatch({
                    type: SYNC_STATE,
                    state: controlledState
                });
            }
        }
    }["useControllableStateReducer.useEffect"], [
        controlledState,
        internalState.state,
        isControlled
    ]);
    return [
        state,
        dispatch
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/use-callback-ref.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-escape-keydown/src/use-escape-keydown.tsx
__turbopack_context__.s([
    "useEscapeKeydown",
    ()=>useEscapeKeydown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEscapeKeydown.useEffect": ()=>{
            const handleKeyDown = {
                "useEscapeKeydown.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onEscapeKeyDown(event);
                    }
                }
            }["useEscapeKeydown.useEffect.handleKeyDown"];
            ownerDocument.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "useEscapeKeydown.useEffect": ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    })
            })["useEscapeKeydown.useEffect"];
        }
    }["useEscapeKeydown.useEffect"], [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// src/dismissable-layer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "DismissableLayer.useComposedRefs[composedRefs]": (node2)=>setNode(node2)
    }["DismissableLayer.useComposedRefs[composedRefs]"]);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside({
        "DismissableLayer.usePointerDownOutside[pointerDownOutside]": (event)=>{
            const target = event.target;
            const isPointerDownOnBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch"]);
            if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
            onPointerDownOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.usePointerDownOutside[pointerDownOutside]"], ownerDocument);
    const focusOutside = useFocusOutside({
        "DismissableLayer.useFocusOutside[focusOutside]": (event)=>{
            const target = event.target;
            const isFocusInBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch"]);
            if (isFocusInBranch) return;
            onFocusOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.useFocusOutside[focusOutside]"], ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeKeydown"])({
        "DismissableLayer.useEscapeKeydown": (event)=>{
            const isHighestLayer = index === context.layers.size - 1;
            if (!isHighestLayer) return;
            onEscapeKeyDown?.(event);
            if (!event.defaultPrevented && onDismiss) {
                event.preventDefault();
                onDismiss();
            }
        }
    }["DismissableLayer.useEscapeKeydown"], ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            if (!node) return;
            if (disableOutsidePointerEvents) {
                if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                    originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                    ownerDocument.body.style.pointerEvents = "none";
                }
                context.layersWithOutsidePointerEventsDisabled.add(node);
            }
            context.layers.add(node);
            dispatchUpdate();
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
                    }
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (!node) return;
                    context.layers.delete(node);
                    context.layersWithOutsidePointerEventsDisabled.delete(node);
                    dispatchUpdate();
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            const handleUpdate = {
                "DismissableLayer.useEffect.handleUpdate": ()=>force({})
            }["DismissableLayer.useEffect.handleUpdate"];
            document.addEventListener(CONTEXT_UPDATE, handleUpdate);
            return ({
                "DismissableLayer.useEffect": ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate)
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayerBranch.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                context.branches.add(node);
                return ({
                    "DismissableLayerBranch.useEffect": ()=>{
                        context.branches.delete(node);
                    }
                })["DismissableLayerBranch.useEffect"];
            }
        }
    }["DismissableLayerBranch.useEffect"], [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "usePointerDownOutside.useRef[handleClickRef]": ()=>{}
    }["usePointerDownOutside.useRef[handleClickRef]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointerDownOutside.useEffect": ()=>{
            const handlePointerDown = {
                "usePointerDownOutside.useEffect.handlePointerDown": (event)=>{
                    if (event.target && !isPointerInsideReactTreeRef.current) {
                        let handleAndDispatchPointerDownOutsideEvent2 = {
                            "usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2": function() {
                                handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                                    discrete: true
                                });
                            }
                        }["usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2"];
                        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                        const eventDetail = {
                            originalEvent: event
                        };
                        if (event.pointerType === "touch") {
                            ownerDocument.removeEventListener("click", handleClickRef.current);
                            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                            ownerDocument.addEventListener("click", handleClickRef.current, {
                                once: true
                            });
                        } else {
                            handleAndDispatchPointerDownOutsideEvent2();
                        }
                    } else {
                        ownerDocument.removeEventListener("click", handleClickRef.current);
                    }
                    isPointerInsideReactTreeRef.current = false;
                }
            }["usePointerDownOutside.useEffect.handlePointerDown"];
            const timerId = window.setTimeout({
                "usePointerDownOutside.useEffect.timerId": ()=>{
                    ownerDocument.addEventListener("pointerdown", handlePointerDown);
                }
            }["usePointerDownOutside.useEffect.timerId"], 0);
            return ({
                "usePointerDownOutside.useEffect": ()=>{
                    window.clearTimeout(timerId);
                    ownerDocument.removeEventListener("pointerdown", handlePointerDown);
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                }
            })["usePointerDownOutside.useEffect"];
        }
    }["usePointerDownOutside.useEffect"], [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusOutside.useEffect": ()=>{
            const handleFocus = {
                "useFocusOutside.useEffect.handleFocus": (event)=>{
                    if (event.target && !isFocusInsideReactTreeRef.current) {
                        const eventDetail = {
                            originalEvent: event
                        };
                        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                            discrete: false
                        });
                    }
                }
            }["useFocusOutside.useEffect.handleFocus"];
            ownerDocument.addEventListener("focusin", handleFocus);
            return ({
                "useFocusOutside.useEffect": ()=>ownerDocument.removeEventListener("focusin", handleFocus)
            })["useFocusOutside.useEffect"];
        }
    }["useFocusOutside.useEffect"], [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// src/focus-scope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "FocusScope.useComposedRefs[composedRefs]": (node)=>setContainer(node)
    }["FocusScope.useComposedRefs[composedRefs]"]);
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (trapped) {
                let handleFocusIn2 = {
                    "FocusScope.useEffect.handleFocusIn2": function(event) {
                        if (focusScope.paused || !container) return;
                        const target = event.target;
                        if (container.contains(target)) {
                            lastFocusedElementRef.current = target;
                        } else {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusIn2"], handleFocusOut2 = {
                    "FocusScope.useEffect.handleFocusOut2": function(event) {
                        if (focusScope.paused || !container) return;
                        const relatedTarget = event.relatedTarget;
                        if (relatedTarget === null) return;
                        if (!container.contains(relatedTarget)) {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusOut2"], handleMutations2 = {
                    "FocusScope.useEffect.handleMutations2": function(mutations) {
                        const focusedElement = document.activeElement;
                        if (focusedElement !== document.body) return;
                        for (const mutation of mutations){
                            if (mutation.removedNodes.length > 0) focus(container);
                        }
                    }
                }["FocusScope.useEffect.handleMutations2"];
                var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
                document.addEventListener("focusin", handleFocusIn2);
                document.addEventListener("focusout", handleFocusOut2);
                const mutationObserver = new MutationObserver(handleMutations2);
                if (container) mutationObserver.observe(container, {
                    childList: true,
                    subtree: true
                });
                return ({
                    "FocusScope.useEffect": ()=>{
                        document.removeEventListener("focusin", handleFocusIn2);
                        document.removeEventListener("focusout", handleFocusOut2);
                        mutationObserver.disconnect();
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (container) {
                focusScopesStack.add(focusScope);
                const previouslyFocusedElement = document.activeElement;
                const hasFocusedCandidate = container.contains(previouslyFocusedElement);
                if (!hasFocusedCandidate) {
                    const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                    container.dispatchEvent(mountEvent);
                    if (!mountEvent.defaultPrevented) {
                        focusFirst(removeLinks(getTabbableCandidates(container)), {
                            select: true
                        });
                        if (document.activeElement === previouslyFocusedElement) {
                            focus(container);
                        }
                    }
                }
                return ({
                    "FocusScope.useEffect": ()=>{
                        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                        setTimeout({
                            "FocusScope.useEffect": ()=>{
                                const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                                container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                container.dispatchEvent(unmountEvent);
                                if (!unmountEvent.defaultPrevented) {
                                    focus(previouslyFocusedElement ?? document.body, {
                                        select: true
                                    });
                                }
                                container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                focusScopesStack.remove(focusScope);
                            }
                        }["FocusScope.useEffect"], 0);
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FocusScope.useCallback[handleKeyDown]": (event)=>{
            if (!loop && !trapped) return;
            if (focusScope.paused) return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
                const container2 = event.currentTarget;
                const [first, last] = getTabbableEdges(container2);
                const hasTabbableElementsInside = first && last;
                if (!hasTabbableElementsInside) {
                    if (focusedElement === container2) event.preventDefault();
                } else {
                    if (!event.shiftKey && focusedElement === last) {
                        event.preventDefault();
                        if (loop) focus(first, {
                            select: true
                        });
                    } else if (event.shiftKey && focusedElement === first) {
                        event.preventDefault();
                        if (loop) focus(last, {
                            select: true
                        });
                    }
                }
            }
        }
    }["FocusScope.useCallback[handleKeyDown]"], [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
// src/portal.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Portal.useLayoutEffect": ()=>setMounted(true)
    }["Portal.useLayoutEffect"], []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence,
    "Root",
    ()=>Root
]);
// src/presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useStateMachine.useReducer": (state, event)=>{
            const nextState = machine[state][event];
            return nextState ?? state;
        }
    }["useStateMachine.useReducer"], initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePresence.useEffect": ()=>{
            const currentAnimationName = getAnimationName(stylesRef.current);
            prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
        }
    }["usePresence.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            const styles = stylesRef.current;
            const wasPresent = prevPresentRef.current;
            const hasPresentChanged = wasPresent !== present;
            if (hasPresentChanged) {
                const prevAnimationName = prevAnimationNameRef.current;
                const currentAnimationName = getAnimationName(styles);
                if (present) {
                    send("MOUNT");
                } else if (currentAnimationName === "none" || styles?.display === "none") {
                    send("UNMOUNT");
                } else {
                    const isAnimating = prevAnimationName !== currentAnimationName;
                    if (wasPresent && isAnimating) {
                        send("ANIMATION_OUT");
                    } else {
                        send("UNMOUNT");
                    }
                }
                prevPresentRef.current = present;
            }
        }
    }["usePresence.useLayoutEffect"], [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            if (node) {
                let timeoutId;
                const ownerWindow = node.ownerDocument.defaultView ?? window;
                const handleAnimationEnd = {
                    "usePresence.useLayoutEffect.handleAnimationEnd": (event)=>{
                        const currentAnimationName = getAnimationName(stylesRef.current);
                        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                        if (event.target === node && isCurrentAnimation) {
                            send("ANIMATION_END");
                            if (!prevPresentRef.current) {
                                const currentFillMode = node.style.animationFillMode;
                                node.style.animationFillMode = "forwards";
                                timeoutId = ownerWindow.setTimeout({
                                    "usePresence.useLayoutEffect.handleAnimationEnd": ()=>{
                                        if (node.style.animationFillMode === "forwards") {
                                            node.style.animationFillMode = currentFillMode;
                                        }
                                    }
                                }["usePresence.useLayoutEffect.handleAnimationEnd"]);
                            }
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationEnd"];
                const handleAnimationStart = {
                    "usePresence.useLayoutEffect.handleAnimationStart": (event)=>{
                        if (event.target === node) {
                            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationStart"];
                node.addEventListener("animationstart", handleAnimationStart);
                node.addEventListener("animationcancel", handleAnimationEnd);
                node.addEventListener("animationend", handleAnimationEnd);
                return ({
                    "usePresence.useLayoutEffect": ()=>{
                        ownerWindow.clearTimeout(timeoutId);
                        node.removeEventListener("animationstart", handleAnimationStart);
                        node.removeEventListener("animationcancel", handleAnimationEnd);
                        node.removeEventListener("animationend", handleAnimationEnd);
                    }
                })["usePresence.useLayoutEffect"];
            } else {
                send("ANIMATION_END");
            }
        }
    }["usePresence.useLayoutEffect"], [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "usePresence.useCallback": (node2)=>{
                stylesRef.current = node2 ? getComputedStyle(node2) : null;
                setNode(node2);
            }
        }["usePresence.useCallback"], [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Presence;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>FocusGuards,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// src/focus-guards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusGuards.useEffect": ()=>{
            const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
            document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
            document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
            count++;
            return ({
                "useFocusGuards.useEffect": ()=>{
                    if (count === 1) {
                        document.querySelectorAll("[data-radix-focus-guard]").forEach({
                            "useFocusGuards.useEffect": (node)=>node.remove()
                        }["useFocusGuards.useEffect"]);
                    }
                    count--;
                }
            })["useFocusGuards.useEffect"];
        }
    }["useFocusGuards.useEffect"], []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
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
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLockAttribute.useEffect": function() {
            document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
            return ({
                "useLockAttribute.useEffect": function() {
                    var newCounter = getCurrentUseCounter() - 1;
                    if (newCounter <= 0) {
                        document.body.removeAttribute(lockAttribute);
                    } else {
                        document.body.setAttribute(lockAttribute, newCounter.toString());
                    }
                }
            })["useLockAttribute.useEffect"];
        }
    }["useLockAttribute.useEffect"], []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RemoveScrollBar.useMemo[gap]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
        }
    }["RemoveScrollBar.useMemo[gap]"], [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/Downloads/nodebase-main/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/Downloads/nodebase-main/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCallbackRef.useState": function() {
            return {
                // value
                value: initialValue,
                // last callback
                callback: callback,
                // "memoized" public interface
                facade: {
                    get current () {
                        return ref.value;
                    },
                    set current (value){
                        var last = ref.value;
                        if (last !== value) {
                            ref.value = value;
                            ref.callback(value, last);
                        }
                    }
                }
            };
        }
    }["useCallbackRef.useState"])[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/Downloads/nodebase-main/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, {
        "useMergeRefs.useCallbackRef[callbackRef]": function(newValue) {
            return refs.forEach({
                "useMergeRefs.useCallbackRef[callbackRef]": function(ref) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
                }
            }["useMergeRefs.useCallbackRef[callbackRef]"]);
        }
    }["useMergeRefs.useCallbackRef[callbackRef]"]);
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect({
        "useMergeRefs.useIsomorphicLayoutEffect": function() {
            var oldValue = currentValues.get(callbackRef);
            if (oldValue) {
                var prevRefs_1 = new Set(oldValue);
                var nextRefs_1 = new Set(refs);
                var current_1 = callbackRef.current;
                prevRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!nextRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
                nextRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!prevRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
            }
            currentValues.set(callbackRef, refs);
        }
    }["useMergeRefs.useIsomorphicLayoutEffect"], [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/Downloads/nodebase-main/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/Downloads/nodebase-main/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lastProps.current = props;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    props.lockRef.current
                ], (props.shards || []).map(extractRef), true).filter(Boolean);
                allow_1.forEach({
                    "RemoveScrollSideCar.useEffect": function(el) {
                        return el.classList.add("allow-interactivity-".concat(id));
                    }
                }["RemoveScrollSideCar.useEffect"]);
                return ({
                    "RemoveScrollSideCar.useEffect": function() {
                        document.body.classList.remove("block-interactivity-".concat(id));
                        allow_1.forEach({
                            "RemoveScrollSideCar.useEffect": function(el) {
                                return el.classList.remove("allow-interactivity-".concat(id));
                            }
                        }["RemoveScrollSideCar.useEffect"]);
                    }
                })["RemoveScrollSideCar.useEffect"];
            }
            return;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancelEvent]": function(event, parent) {
            if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
                return !lastProps.current.allowPinchZoom;
            }
            var touch = getTouchXY(event);
            var touchStart = touchStartRef.current;
            var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
            var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
            var currentAxis;
            var target = event.target;
            var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
            // allow horizontal touch move on Range inputs. They will not cause any scroll
            if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
                return false;
            }
            var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            if (!canBeScrolledInMainDirection) {
                return true;
            }
            if (canBeScrolledInMainDirection) {
                currentAxis = moveDirection;
            } else {
                currentAxis = moveDirection === 'v' ? 'h' : 'v';
                canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
            }
            if (!canBeScrolledInMainDirection) {
                return false;
            }
            if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
                activeAxis.current = currentAxis;
            }
            if (!currentAxis) {
                return true;
            }
            var cancelingAxis = activeAxis.current || currentAxis;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancelEvent]"], []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldPrevent]": function(_event) {
            var event = _event;
            if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
                // not the last active
                return;
            }
            var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
            var sourceEvent = shouldPreventQueue.current.filter({
                "RemoveScrollSideCar.useCallback[shouldPrevent]": function(e) {
                    return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
                }
            }["RemoveScrollSideCar.useCallback[shouldPrevent]"])[0];
            // self event, and should be canceled
            if (sourceEvent && sourceEvent.should) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            // outside or shard event
            if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter({
                    "RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes": function(node) {
                        return node.contains(event.target);
                    }
                }["RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes"]);
                var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
                if (shouldStop) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                }
            }
        }
    }["RemoveScrollSideCar.useCallback[shouldPrevent]"], []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancel]": function(name, delta, target, should) {
            var event = {
                name: name,
                delta: delta,
                target: target,
                should: should,
                shadowParent: getOutermostShadowParent(target)
            };
            shouldPreventQueue.current.push(event);
            setTimeout({
                "RemoveScrollSideCar.useCallback[shouldCancel]": function() {
                    shouldPreventQueue.current = shouldPreventQueue.current.filter({
                        "RemoveScrollSideCar.useCallback[shouldCancel]": function(e) {
                            return e !== event;
                        }
                    }["RemoveScrollSideCar.useCallback[shouldCancel]"]);
                }
            }["RemoveScrollSideCar.useCallback[shouldCancel]"], 1);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancel]"], []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchStart]": function(event) {
            touchStartRef.current = getTouchXY(event);
            activeAxis.current = undefined;
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchStart]"], []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollWheel]": function(event) {
            shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollWheel]"], []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchMove]": function(event) {
            shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchMove]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lockStack.push(Style);
            props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove
            });
            document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            return ({
                "RemoveScrollSideCar.useEffect": function() {
                    lockStack = lockStack.filter({
                        "RemoveScrollSideCar.useEffect": function(inst) {
                            return inst !== Style;
                        }
                    }["RemoveScrollSideCar.useEffect"]);
                    document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                }
            })["RemoveScrollSideCar.useEffect"];
        }
    }["RemoveScrollSideCar.useEffect"], []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "styleHookSingleton.useEffect": function() {
                sheet.add(styles);
                return ({
                    "styleHookSingleton.useEffect": function() {
                        sheet.remove();
                    }
                })["styleHookSingleton.useEffect"];
            }
        }["styleHookSingleton.useEffect"], [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/Downloads/nodebase-main/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>Close,
    "Content",
    ()=>Content,
    "Description",
    ()=>Description,
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root,
    "Title",
    ()=>Title,
    "Trigger",
    ()=>Trigger,
    "WarningProvider",
    ()=>WarningProvider,
    "createDialogScope",
    ()=>createDialogScope
]);
// src/dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        titleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        descriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "Dialog.useCallback": ()=>setOpen({
                    "Dialog.useCallback": (prevOpen)=>!prevOpen
                }["Dialog.useCallback"])
        }["Dialog.useCallback"], [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DialogContentModal.useEffect": ()=>{
            const content = contentRef.current;
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["DialogContentModal.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TitleWarning.useEffect": ()=>{
            if (titleId) {
                const hasTitle = document.getElementById(titleId);
                if (!hasTitle) console.error(MESSAGE);
            }
        }
    }["TitleWarning.useEffect"], [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DescriptionWarning.useEffect": ()=>{
            const describedById = contentRef.current?.getAttribute("aria-describedby");
            if (descriptionId && describedById) {
                const hasDescription = document.getElementById(descriptionId);
                if (!hasDescription) console.warn(MESSAGE);
            }
        }
    }["DescriptionWarning.useEffect"], [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ __turbopack_context__.s([
    "alignments",
    ()=>alignments,
    "clamp",
    ()=>clamp,
    "createCoords",
    ()=>createCoords,
    "evaluate",
    ()=>evaluate,
    "expandPaddingObject",
    ()=>expandPaddingObject,
    "floor",
    ()=>floor,
    "getAlignment",
    ()=>getAlignment,
    "getAlignmentAxis",
    ()=>getAlignmentAxis,
    "getAlignmentSides",
    ()=>getAlignmentSides,
    "getAxisLength",
    ()=>getAxisLength,
    "getExpandedPlacements",
    ()=>getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    ()=>getOppositeAlignmentPlacement,
    "getOppositeAxis",
    ()=>getOppositeAxis,
    "getOppositeAxisPlacements",
    ()=>getOppositeAxisPlacements,
    "getOppositePlacement",
    ()=>getOppositePlacement,
    "getPaddingObject",
    ()=>getPaddingObject,
    "getSide",
    ()=>getSide,
    "getSideAxis",
    ()=>getSideAxis,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "placements",
    ()=>placements,
    "rectToClientRect",
    ()=>rectToClientRect,
    "round",
    ()=>round,
    "sides",
    ()=>sides
]);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "autoUpdate",
    ()=>autoUpdate,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "platform",
    ()=>platform,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(referenceEl) : [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"];
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"];
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"];
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"];
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"];
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"];
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"];
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"];
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"];
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"];
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size,
    "useFloating",
    ()=>useFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setReference]": (node)=>{
            if (node !== referenceRef.current) {
                referenceRef.current = node;
                _setReference(node);
            }
        }
    }["useFloating.useCallback[setReference]"], []);
    const setFloating = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setFloating]": (node)=>{
            if (node !== floatingRef.current) {
                floatingRef.current = node;
                _setFloating(node);
            }
        }
    }["useFloating.useCallback[setFloating]"], []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[update]": ()=>{
            if (!referenceRef.current || !floatingRef.current) {
                return;
            }
            const config = {
                placement,
                strategy,
                middleware: latestMiddleware
            };
            if (platformRef.current) {
                config.platform = platformRef.current;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(referenceRef.current, floatingRef.current, config).then({
                "useFloating.useCallback[update]": (data)=>{
                    const fullData = {
                        ...data,
                        // The floating element's position may be recomputed while it's closed
                        // but still mounted (such as when transitioning out). To ensure
                        // `isPositioned` will be `false` initially on the next open, avoid
                        // setting it to `true` when `open === false` (must be specified).
                        isPositioned: openRef.current !== false
                    };
                    if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                        dataRef.current = fullData;
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useFloating.useCallback[update]": ()=>{
                                setData(fullData);
                            }
                        }["useFloating.useCallback[update]"]);
                    }
                }
            }["useFloating.useCallback[update]"]);
        }
    }["useFloating.useCallback[update]"], [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[refs]": ()=>({
                reference: referenceRef,
                floating: floatingRef,
                setReference,
                setFloating
            })
    }["useFloating.useMemo[refs]"], [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[elements]": ()=>({
                reference: referenceEl,
                floating: floatingEl
            })
    }["useFloating.useMemo[elements]"], [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[floatingStyles]": ()=>{
            const initialStyles = {
                position: strategy,
                left: 0,
                top: 0
            };
            if (!elements.floating) {
                return initialStyles;
            }
            const x = roundByDPR(elements.floating, data.x);
            const y = roundByDPR(elements.floating, data.y);
            if (transform) {
                return {
                    ...initialStyles,
                    transform: "translate(" + x + "px, " + y + "px)",
                    ...getDPR(elements.floating) >= 1.5 && {
                        willChange: 'transform'
                    }
                };
            }
            return {
                position: strategy,
                left: x,
                top: y
            };
        }
    }["useFloating.useMemo[floatingStyles]"], [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo": ()=>({
                ...data,
                update,
                refs,
                elements,
                floatingStyles
            })
    }["useFloating.useMemo"], [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options, deps)=>({
        ...arrow$1(options),
        options: [
            options,
            deps
        ]
    });
;
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/arrow.tsx
__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Arrow";
var Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].svg, {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("polygon", {
            points: "0,0 30,0 15,10"
        })
    });
});
Arrow.displayName = NAME;
var Root = Arrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-size/src/use-size.tsx
__turbopack_context__.s([
    "useSize",
    ()=>useSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
function useSize(element) {
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useSize.useLayoutEffect": ()=>{
            if (element) {
                setSize({
                    width: element.offsetWidth,
                    height: element.offsetHeight
                });
                const resizeObserver = new ResizeObserver({
                    "useSize.useLayoutEffect": (entries)=>{
                        if (!Array.isArray(entries)) {
                            return;
                        }
                        if (!entries.length) {
                            return;
                        }
                        const entry = entries[0];
                        let width;
                        let height;
                        if ("borderBoxSize" in entry) {
                            const borderSizeEntry = entry["borderBoxSize"];
                            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                            width = borderSize["inlineSize"];
                            height = borderSize["blockSize"];
                        } else {
                            width = element.offsetWidth;
                            height = element.offsetHeight;
                        }
                        setSize({
                            width,
                            height
                        });
                    }
                }["useSize.useLayoutEffect"]);
                resizeObserver.observe(element, {
                    box: "border-box"
                });
                return ({
                    "useSize.useLayoutEffect": ()=>resizeObserver.unobserve(element)
                })["useSize.useLayoutEffect"];
            } else {
                setSize(void 0);
            }
        }
    }["useSize.useLayoutEffect"], [
        element
    ]);
    return size;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALIGN_OPTIONS",
    ()=>ALIGN_OPTIONS,
    "Anchor",
    ()=>Anchor,
    "Arrow",
    ()=>Arrow,
    "Content",
    ()=>Content,
    "Popper",
    ()=>Popper,
    "PopperAnchor",
    ()=>PopperAnchor,
    "PopperArrow",
    ()=>PopperArrow,
    "PopperContent",
    ()=>PopperContent,
    "Root",
    ()=>Root2,
    "SIDE_OPTIONS",
    ()=>SIDE_OPTIONS,
    "createPopperScope",
    ()=>createPopperScope
]);
// src/popper.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
var SIDE_OPTIONS = [
    "top",
    "right",
    "bottom",
    "left"
];
var ALIGN_OPTIONS = [
    "start",
    "center",
    "end"
];
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props)=>{
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopperProvider, {
        scope: __scopePopper,
        anchor,
        onAnchorChange: setAnchor,
        children
    });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const anchorRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopperAnchor.useEffect": ()=>{
            const previousAnchor = anchorRef.current;
            anchorRef.current = virtualRef?.current || ref.current;
            if (previousAnchor !== anchorRef.current) {
                context.onAnchorChange(anchorRef.current);
            }
        }
    }["PopperAnchor.useEffect"]);
    return virtualRef ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...anchorProps,
        ref: composedRefs
    });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "PopperContent.useComposedRefs[composedRefs]": (node)=>setContent(node)
    }["PopperContent.useComposedRefs[composedRefs]"]);
    const [arrow, setArrow] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const arrowSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"])(arrow);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter(isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: {
            "PopperContent.useFloating": (...args)=>{
                const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"])(...args, {
                    animationFrame: updatePositionStrategy === "always"
                });
                return cleanup;
            }
        }["PopperContent.useFloating"],
        elements: {
            reference: context.anchor
        },
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === "partial" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])() : void 0,
                ...detectOverflowOptions
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                ...detectOverflowOptions
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
                ...detectOverflowOptions,
                apply: {
                    "PopperContent.useFloating": ({ elements, rects, availableWidth, availableHeight })=>{
                        const { width: anchorWidth, height: anchorHeight } = rects.reference;
                        const contentStyle = elements.floating.style;
                        contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                        contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                        contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                        contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
                    }
                }["PopperContent.useFloating"]
            }),
            arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrow,
                padding: arrowPadding
            }),
            transformOrigin({
                arrowWidth,
                arrowHeight
            }),
            hideWhenDetached && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])({
                strategy: "referenceHidden",
                ...detectOverflowOptions
            })
        ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPlaced);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopperContent.useLayoutEffect": ()=>{
            if (isPositioned) {
                handlePlaced?.();
            }
        }
    }["PopperContent.useLayoutEffect"], [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopperContent.useLayoutEffect": ()=>{
            if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
        }
    }["PopperContent.useLayoutEffect"], [
        content
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
            // keep off the page when measuring
            minWidth: "max-content",
            zIndex: contentZIndex,
            ["--radix-popper-transform-origin"]: [
                middlewareData.transformOrigin?.x,
                middlewareData.transformOrigin?.y
            ].join(" "),
            // hide the content if using the hide middleware and should be hidden
            // set visibility to hidden and disable pointer events so the UI behaves
            // as if the PopperContent isn't there at all
            ...middlewareData.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopperContentProvider, {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                    ...contentProps.style,
                    // if the PopperContent hasn't been placed yet (not all measurements done)
                    // we prevent animations so that users's animation don't kick in too early referring wrong sides
                    animation: !isPositioned ? "none" : void 0
                }
            })
        })
    });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
var PopperArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return(// we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[contentContext.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: `rotate(180deg)`,
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            ...arrowProps,
            ref: forwardedRef,
            style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
            }
        })
    }));
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
    return value !== null;
}
var transformOrigin = (options)=>({
        name: "transformOrigin",
        options,
        fn (data) {
            const { placement, rects, middlewareData } = data;
            const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[placedAlign];
            const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
            const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
            let x = "";
            let y = "";
            if (placedSide === "bottom") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === "top") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === "right") {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === "left") {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x,
                    y
                }
            };
        }
    });
function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
        side,
        align
    ];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/visually-hidden.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "VISUALLY_HIDDEN_STYLES",
    ()=>VISUALLY_HIDDEN_STYLES,
    "VisuallyHidden",
    ()=>VisuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var VISUALLY_HIDDEN_STYLES = Object.freeze({
    // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
});
var NAME = "VisuallyHidden";
var VisuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...props,
        ref: forwardedRef,
        style: {
            ...VISUALLY_HIDDEN_STYLES,
            ...props.style
        }
    });
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "Portal",
    ()=>Portal,
    "Provider",
    ()=>Provider,
    "Root",
    ()=>Root3,
    "Tooltip",
    ()=>Tooltip,
    "TooltipArrow",
    ()=>TooltipArrow,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipPortal",
    ()=>TooltipPortal,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger,
    "Trigger",
    ()=>Trigger,
    "createTooltipScope",
    ()=>createTooltipScope
]);
// src/tooltip.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
var [createTooltipContext, createTooltipScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])("Tooltip", [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"])();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props)=>{
    const { __scopeTooltip, delayDuration = DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
    const isOpenDelayedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
    const isPointerInTransitRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const skipDelayTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipProvider.useEffect": ()=>{
            const skipDelayTimer = skipDelayTimerRef.current;
            return ({
                "TooltipProvider.useEffect": ()=>window.clearTimeout(skipDelayTimer)
            })["TooltipProvider.useEffect"];
        }
    }["TooltipProvider.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipProviderContextProvider, {
        scope: __scopeTooltip,
        isOpenDelayedRef,
        delayDuration,
        onOpen: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "TooltipProvider.useCallback": ()=>{
                window.clearTimeout(skipDelayTimerRef.current);
                isOpenDelayedRef.current = false;
            }
        }["TooltipProvider.useCallback"], []),
        onClose: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "TooltipProvider.useCallback": ()=>{
                window.clearTimeout(skipDelayTimerRef.current);
                skipDelayTimerRef.current = window.setTimeout({
                    "TooltipProvider.useCallback": ()=>isOpenDelayedRef.current = true
                }["TooltipProvider.useCallback"], skipDelayDuration);
            }
        }["TooltipProvider.useCallback"], [
            skipDelayDuration
        ]),
        isPointerInTransitRef,
        onPointerInTransitChange: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "TooltipProvider.useCallback": (inTransit)=>{
                isPointerInTransitRef.current = inTransit;
            }
        }["TooltipProvider.useCallback"], []),
        disableHoverableContent,
        children
    });
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props)=>{
    const { __scopeTooltip, children, open: openProp, defaultOpen, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
    const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const contentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
    const delayDuration = delayDurationProp ?? providerContext.delayDuration;
    const wasOpenDelayedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: {
            "Tooltip.useControllableState": (open2)=>{
                if (open2) {
                    providerContext.onOpen();
                    document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
                } else {
                    providerContext.onClose();
                }
                onOpenChange?.(open2);
            }
        }["Tooltip.useControllableState"],
        caller: TOOLTIP_NAME
    });
    const stateAttribute = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Tooltip.useMemo[stateAttribute]": ()=>{
            return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
        }
    }["Tooltip.useMemo[stateAttribute]"], [
        open
    ]);
    const handleOpen = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Tooltip.useCallback[handleOpen]": ()=>{
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = 0;
            wasOpenDelayedRef.current = false;
            setOpen(true);
        }
    }["Tooltip.useCallback[handleOpen]"], [
        setOpen
    ]);
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Tooltip.useCallback[handleClose]": ()=>{
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = 0;
            setOpen(false);
        }
    }["Tooltip.useCallback[handleClose]"], [
        setOpen
    ]);
    const handleDelayedOpen = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Tooltip.useCallback[handleDelayedOpen]": ()=>{
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = window.setTimeout({
                "Tooltip.useCallback[handleDelayedOpen]": ()=>{
                    wasOpenDelayedRef.current = true;
                    setOpen(true);
                    openTimerRef.current = 0;
                }
            }["Tooltip.useCallback[handleDelayedOpen]"], delayDuration);
        }
    }["Tooltip.useCallback[handleDelayedOpen]"], [
        delayDuration,
        setOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Tooltip.useEffect": ()=>{
            return ({
                "Tooltip.useEffect": ()=>{
                    if (openTimerRef.current) {
                        window.clearTimeout(openTimerRef.current);
                        openTimerRef.current = 0;
                    }
                }
            })["Tooltip.useEffect"];
        }
    }["Tooltip.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContextProvider, {
            scope: __scopeTooltip,
            contentId,
            open,
            stateAttribute,
            trigger,
            onTriggerChange: setTrigger,
            onTriggerEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Tooltip.useCallback": ()=>{
                    if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
                    else handleOpen();
                }
            }["Tooltip.useCallback"], [
                providerContext.isOpenDelayedRef,
                handleDelayedOpen,
                handleOpen
            ]),
            onTriggerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Tooltip.useCallback": ()=>{
                    if (disableHoverableContent) {
                        handleClose();
                    } else {
                        window.clearTimeout(openTimerRef.current);
                        openTimerRef.current = 0;
                    }
                }
            }["Tooltip.useCallback"], [
                handleClose,
                disableHoverableContent
            ]),
            onOpen: handleOpen,
            onClose: handleClose,
            disableHoverableContent,
            children
        })
    });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerMoveOpenedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handlePointerUp = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipTrigger.useCallback[handlePointerUp]": ()=>isPointerDownRef.current = false
    }["TooltipTrigger.useCallback[handlePointerUp]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipTrigger.useEffect": ()=>{
            return ({
                "TooltipTrigger.useEffect": ()=>document.removeEventListener("pointerup", handlePointerUp)
            })["TooltipTrigger.useEffect"];
        }
    }["TooltipTrigger.useEffect"], [
        handlePointerUp
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
            "aria-describedby": context.open ? context.contentId : void 0,
            "data-state": context.stateAttribute,
            ...triggerProps,
            ref: composedRefs,
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, (event)=>{
                if (event.pointerType === "touch") return;
                if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
                    context.onTriggerEnter();
                    hasPointerMoveOpenedRef.current = true;
                }
            }),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>{
                context.onTriggerLeave();
                hasPointerMoveOpenedRef.current = false;
            }),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, ()=>{
                if (context.open) {
                    context.onClose();
                }
                isPointerDownRef.current = true;
                document.addEventListener("pointerup", handlePointerUp, {
                    once: true
                });
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                if (!isPointerDownRef.current) context.onOpen();
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, context.onClose),
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onClose)
        })
    });
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, {
    forceMount: void 0
});
var TooltipPortal = (props)=>{
    const { __scopeTooltip, forceMount, children, container } = props;
    const context = useTooltipContext(PORTAL_NAME, __scopeTooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeTooltip,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent";
var TooltipContent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.disableHoverableContent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentImpl, {
            side,
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentHoverable, {
            side,
            ...contentProps,
            ref: forwardedRef
        })
    });
});
var TooltipContentHoverable = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [pointerGraceArea, setPointerGraceArea] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const { trigger, onClose } = context;
    const content = ref.current;
    const { onPointerInTransitChange } = providerContext;
    const handleRemoveGraceArea = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipContentHoverable.useCallback[handleRemoveGraceArea]": ()=>{
            setPointerGraceArea(null);
            onPointerInTransitChange(false);
        }
    }["TooltipContentHoverable.useCallback[handleRemoveGraceArea]"], [
        onPointerInTransitChange
    ]);
    const handleCreateGraceArea = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipContentHoverable.useCallback[handleCreateGraceArea]": (event, hoverTarget)=>{
            const currentTarget = event.currentTarget;
            const exitPoint = {
                x: event.clientX,
                y: event.clientY
            };
            const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
            const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
            const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
            const graceArea = getHull([
                ...paddedExitPoints,
                ...hoverTargetPoints
            ]);
            setPointerGraceArea(graceArea);
            onPointerInTransitChange(true);
        }
    }["TooltipContentHoverable.useCallback[handleCreateGraceArea]"], [
        onPointerInTransitChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentHoverable.useEffect": ()=>{
            return ({
                "TooltipContentHoverable.useEffect": ()=>handleRemoveGraceArea()
            })["TooltipContentHoverable.useEffect"];
        }
    }["TooltipContentHoverable.useEffect"], [
        handleRemoveGraceArea
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentHoverable.useEffect": ()=>{
            if (trigger && content) {
                const handleTriggerLeave = {
                    "TooltipContentHoverable.useEffect.handleTriggerLeave": (event)=>handleCreateGraceArea(event, content)
                }["TooltipContentHoverable.useEffect.handleTriggerLeave"];
                const handleContentLeave = {
                    "TooltipContentHoverable.useEffect.handleContentLeave": (event)=>handleCreateGraceArea(event, trigger)
                }["TooltipContentHoverable.useEffect.handleContentLeave"];
                trigger.addEventListener("pointerleave", handleTriggerLeave);
                content.addEventListener("pointerleave", handleContentLeave);
                return ({
                    "TooltipContentHoverable.useEffect": ()=>{
                        trigger.removeEventListener("pointerleave", handleTriggerLeave);
                        content.removeEventListener("pointerleave", handleContentLeave);
                    }
                })["TooltipContentHoverable.useEffect"];
            }
        }
    }["TooltipContentHoverable.useEffect"], [
        trigger,
        content,
        handleCreateGraceArea,
        handleRemoveGraceArea
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentHoverable.useEffect": ()=>{
            if (pointerGraceArea) {
                const handleTrackPointerGrace = {
                    "TooltipContentHoverable.useEffect.handleTrackPointerGrace": (event)=>{
                        const target = event.target;
                        const pointerPosition = {
                            x: event.clientX,
                            y: event.clientY
                        };
                        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
                        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
                        if (hasEnteredTarget) {
                            handleRemoveGraceArea();
                        } else if (isPointerOutsideGraceArea) {
                            handleRemoveGraceArea();
                            onClose();
                        }
                    }
                }["TooltipContentHoverable.useEffect.handleTrackPointerGrace"];
                document.addEventListener("pointermove", handleTrackPointerGrace);
                return ({
                    "TooltipContentHoverable.useEffect": ()=>document.removeEventListener("pointermove", handleTrackPointerGrace)
                })["TooltipContentHoverable.useEffect"];
            }
        }
    }["TooltipContentHoverable.useEffect"], [
        trigger,
        content,
        pointerGraceArea,
        onClose,
        handleRemoveGraceArea
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentImpl, {
        ...props,
        ref: composedRefs
    });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, {
    isInside: false
});
var Slottable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlottable"])("TooltipContent");
var TooltipContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentImpl.useEffect": ()=>{
            document.addEventListener(TOOLTIP_OPEN, onClose);
            return ({
                "TooltipContentImpl.useEffect": ()=>document.removeEventListener(TOOLTIP_OPEN, onClose)
            })["TooltipContentImpl.useEffect"];
        }
    }["TooltipContentImpl.useEffect"], [
        onClose
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentImpl.useEffect": ()=>{
            if (context.trigger) {
                const handleScroll = {
                    "TooltipContentImpl.useEffect.handleScroll": (event)=>{
                        const target = event.target;
                        if (target?.contains(context.trigger)) onClose();
                    }
                }["TooltipContentImpl.useEffect.handleScroll"];
                window.addEventListener("scroll", handleScroll, {
                    capture: true
                });
                return ({
                    "TooltipContentImpl.useEffect": ()=>window.removeEventListener("scroll", handleScroll, {
                            capture: true
                        })
                })["TooltipContentImpl.useEffect"];
            }
        }
    }["TooltipContentImpl.useEffect"], [
        context.trigger,
        onClose
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event)=>event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
                ...contentProps.style,
                // re-namespace exposed content custom properties
                ...{
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                }
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Slottable, {
                    children
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VisuallyHiddenContentContextProvider, {
                    scope: __scopeTooltip,
                    isInside: true,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                        id: context.contentId,
                        role: "tooltip",
                        children: ariaLabel || children
                    })
                })
            ]
        })
    });
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow";
var TooltipArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(ARROW_NAME, __scopeTooltip);
    return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(point, rect) {
    const top = Math.abs(rect.top - point.y);
    const bottom = Math.abs(rect.bottom - point.y);
    const right = Math.abs(rect.right - point.x);
    const left = Math.abs(rect.left - point.x);
    switch(Math.min(top, bottom, right, left)){
        case left:
            return "left";
        case right:
            return "right";
        case top:
            return "top";
        case bottom:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
    const paddedExitPoints = [];
    switch(exitSide){
        case "top":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case "bottom":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            });
            break;
        case "left":
            paddedExitPoints.push({
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case "right":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            });
            break;
    }
    return paddedExitPoints;
}
function getPointsFromRect(rect) {
    const { top, right, bottom, left } = rect;
    return [
        {
            x: left,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        }
    ];
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const ii = polygon[i];
        const jj = polygon[j];
        const xi = ii.x;
        const yi = ii.y;
        const xj = jj.x;
        const yj = jj.y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function getHull(points) {
    const newPoints = points.slice();
    newPoints.sort((a, b)=>{
        if (a.x < b.x) return -1;
        else if (a.x > b.x) return 1;
        else if (a.y < b.y) return -1;
        else if (a.y > b.y) return 1;
        else return 0;
    });
    return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
    if (points.length <= 1) return points.slice();
    const upperHull = [];
    for(let i = 0; i < points.length; i++){
        const p = points[i];
        while(upperHull.length >= 2){
            const q = upperHull[upperHull.length - 1];
            const r = upperHull[upperHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
            else break;
        }
        upperHull.push(p);
    }
    upperHull.pop();
    const lowerHull = [];
    for(let i = points.length - 1; i >= 0; i--){
        const p = points[i];
        while(lowerHull.length >= 2){
            const q = lowerHull[lowerHull.length - 1];
            const r = lowerHull[lowerHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
            else break;
        }
        lowerHull.push(p);
    }
    lowerHull.pop();
    if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
        return upperHull;
    } else {
        return upperHull.concat(lowerHull);
    }
}
var Provider = TooltipProvider;
var Root3 = Tooltip;
var Trigger = TooltipTrigger;
var Portal = TooltipPortal;
var Content2 = TooltipContent;
var Arrow2 = TooltipArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hmac.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHMAC",
    ()=>createHMAC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-client] (ecmascript)");
;
;
;
const createHMAC = (algorithm = "SHA-256", encoding = "none")=>{
    const hmac = {
        importKey: async (key, keyUsage)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", typeof key === "string" ? new TextEncoder().encode(key) : key, {
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
            const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign("HMAC", hmacKey, typeof data === "string" ? new TextEncoder().encode(data) : data);
            if (encoding === "hex") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"].encode(signature);
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64Url"].encode(signature, {
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
                signature = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"].decode(signature);
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                signature = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64"].decode(signature);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().verify("HMAC", hmacKey, typeof signature === "string" ? new TextEncoder().encode(signature) : signature, typeof data === "string" ? new TextEncoder().encode(data) : data);
        }
    };
    return hmac;
};
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/binary.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/random.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hash.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHash",
    ()=>createHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-client] (ecmascript)");
;
;
function createHash(algorithm, encoding) {
    return {
        digest: async (input)=>{
            const encoder = new TextEncoder();
            const data = typeof input === "string" ? encoder.encode(input) : input;
            const hashBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().digest(algorithm, data);
            if (encoding === "hex") {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
                return hashHex;
            }
            if (encoding === "base64" || encoding === "base64url" || encoding === "base64urlnopad") {
                if (encoding.includes("url")) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64Url"].encode(hashBuffer, {
                        padding: encoding !== "base64urlnopad"
                    });
                }
                const hashBase64 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64"].encode(hashBuffer);
                return hashBase64;
            }
            return hashBuffer;
        }
    };
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base32.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/otp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOTP",
    ()=>createOTP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base32$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base32.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hmac.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/hex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/base64.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-client] (ecmascript)");
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
    const hmacResult = new Uint8Array(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHMAC"])(hash).sign(secret, bytes));
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
        secret: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base32$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base32"].encode(secret, {
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
"[project]/Downloads/nodebase-main/node_modules/rou3/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/better-call/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-client] (ecmascript)");
// src/router.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/rou3/dist/index.mjs [app-client] (ecmascript)");
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
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", secretBuf, algorithm, false, [
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().verify(algorithm, secret, signature, new TextEncoder().encode(value));
    } catch (e) {
        return false;
    }
};
var makeSignature = async (value, secret)=>{
    const key = await getCryptoKey(secret);
    const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign(algorithm.name, key, new TextEncoder().encode(value));
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRouter"])();
    const middlewareRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRouter"])();
    for (const endpoint of Object.values(endpoints)){
        if (!endpoint.options) {
            continue;
        }
        if (endpoint.options?.metadata?.SERVER_ONLY) continue;
        const methods = Array.isArray(endpoint.options?.method) ? endpoint.options.method : [
            endpoint.options?.method
        ];
        for (const method of methods){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRoute"])(router, method, endpoint.path, endpoint);
        }
    }
    if (config2?.routerMiddleware?.length) {
        for (const { path, middleware } of config2.routerMiddleware){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRoute"])(middlewareRouter, "*", path, middleware);
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
        const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findRoute"])(router, request.method, path);
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
            const middlewareRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllRoutes"])(middlewareRouter, "*", path);
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
"[project]/Downloads/nodebase-main/node_modules/@better-fetch/fetch/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if (typeof window !== "undefined" && isFunction(window.fetch)) {
        return window.fetch;
    }
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
"[project]/Downloads/nodebase-main/node_modules/defu/dist/defu.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_arx.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-client] (ecmascript)");
;
// Replaces `TextEncoder`, which is not available in all environments
const encodeStr = (str)=>Uint8Array.from(str.split(''), (c)=>c.charCodeAt(0));
const sigma16 = encodeStr('expand 16-byte k');
const sigma32 = encodeStr('expand 32-byte k');
const sigma16_32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(sigma16);
const sigma32_32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(sigma32);
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
    const b32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(block);
    // Make sure that buffers aligned to 4 bytes
    const isAligned = isAligned32(data) && isAligned32(output);
    const d32 = isAligned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(data) : U32_EMPTY;
    const o32 = isAligned ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(output) : U32_EMPTY;
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
    const { allowShortKeys, extendNonceFn, counterLength, counterRight, rounds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOpts"])({
        allowShortKeys: false,
        counterLength: 8,
        counterRight: false,
        rounds: 20
    }, opts);
    if (typeof core !== 'function') throw new Error('core must be a function');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(counterLength);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(rounds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abool"])(counterRight);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abool"])(allowShortKeys);
    return (key, nonce, data, output, counter = 0)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(nonce, undefined, 'nonce');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data, undefined, 'data');
        const len = data.length;
        if (output === undefined) output = new Uint8Array(len);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(output, undefined, 'output');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(counter);
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
            toClean.push(k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBytes"])(key));
            sigma = sigma32_32;
        } else if (l === 16 && allowShortKeys) {
            k = new Uint8Array(32);
            k.set(key);
            k.set(key, 16);
            sigma = sigma16_32;
            toClean.push(k);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'arx key');
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
        if (!isAligned32(nonce)) toClean.push(nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBytes"])(nonce));
        const k32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(k);
        // hsalsa & hchacha: handle extended nonce
        if (extendNonceFn) {
            if (nonce.length !== 24) throw new Error(`arx: extended nonce must be 24 bytes`);
            extendNonceFn(sigma, k32, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(nonce.subarray(0, 16)), k32);
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
        const n32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(nonce);
        runCipher(core, sigma, k32, n32, data, output, counter, rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(...toClean);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(seed);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(len);
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
    return (seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(32))=>new _XorStreamPRG(cipher, blockLen, keyLen, nonceLen, seed);
}; //# sourceMappingURL=_arx.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_poly1305.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-client] (ecmascript)");
;
function u8to16(a, i) {
    return a[i++] & 0xff | (a[i++] & 0xff) << 8;
}
function bytesToNumberLE(bytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(Uint8Array.from(bytes).reverse()));
}
/** Small version of `poly1305` without loop unrolling. Unused, provided for auditability. */ function poly1305_small(msg, key) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(msg);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'key');
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesBE"])(res, 16).reverse(); // LE
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
    return poly1305_small((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(...res), authKey);
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
        key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(key, 32, 'key'));
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(g);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data);
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBytes"])(data);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
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
"[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/chacha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_arx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/_poly1305.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-client] (ecmascript)");
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
    x[d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x[d] ^ x[a], 16);
    x[c] = x[c] + x[d] | 0;
    x[b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x[b] ^ x[c], 12);
    x[a] = x[a] + x[b] | 0;
    x[d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x[d] ^ x[a], 8);
    x[c] = x[c] + x[d] | 0;
    x[b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x[b] ^ x[c], 7);
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
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 7);
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
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 ^ x09, 7);
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
const chacha20orig = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 8,
    allowShortKeys: true
});
const chacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
});
const xchacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 8,
    extendNonceFn: hchacha,
    allowShortKeys: false
});
const chacha8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 8
});
const chacha12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCipher"])(chachaCore, {
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
    if (AAD !== undefined) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(AAD, undefined, 'AAD');
    const authKey = fn(key, nonce, ZEROS32);
    const lengths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u64Lengths"])(ciphertext.length, AAD ? AAD.length : 0, true);
    // Methods below can be replaced with
    // return poly1305_computeTag_small(authKey, lengths, ciphertext, AAD)
    const h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poly1305"].create(authKey);
    if (AAD) updatePadded(h, AAD);
    updatePadded(h, ciphertext);
    h.update(lengths);
    const res = h.digest();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(authKey, lengths);
    return res;
}
const _poly1305_aead = (xorStream)=>(key, nonce, AAD)=>{
        const tagLength = 16;
        return {
            encrypt (plaintext, output) {
                const plength = plaintext.length;
                output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOutput"])(plength + tagLength, output, false);
                output.set(plaintext);
                const oPlain = output.subarray(0, -tagLength);
                // Actual encryption
                xorStream(key, nonce, oPlain, oPlain, 1);
                const tag = computeTag(xorStream, key, nonce, oPlain, AAD);
                output.set(tag, plength); // append tag
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(tag);
                return output;
            },
            decrypt (ciphertext, output) {
                output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOutput"])(ciphertext.length - tagLength, output, false);
                const data = ciphertext.subarray(0, -tagLength);
                const passedTag = ciphertext.subarray(-tagLength);
                const tag = computeTag(xorStream, key, nonce, data, AAD);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equalBytes"])(passedTag, tag)) throw new Error('invalid tag');
                output.set(ciphertext.subarray(0, -tagLength));
                // Actual decryption
                xorStream(key, nonce, output, output, 1); // start stream with i=1
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(tag);
                return output;
            }
        };
    };
const chacha20poly1305 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapCipher"])({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, _poly1305_aead(chacha20));
const xchacha20poly1305 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapCipher"])({
    blockSize: 64,
    nonceLength: 24,
    tagLength: 16
}, _poly1305_aead(xchacha20));
const rngChacha20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPRG"])(chacha20orig, 64, 32, 8);
const rngChacha8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$_arx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPRG"])(chacha8, 64, 32, 12); //# sourceMappingURL=chacha.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/hmac.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
;
class _HMAC {
    oHash;
    iHash;
    blockLen;
    outputLen;
    finished = false;
    destroyed = false;
    constructor(hash, key){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ahash"])(hash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(pad);
    }
    update(buf) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(out, this.outputLen, 'output');
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
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/pbkdf2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/hmac.js [app-client] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
;
;
// Common start and end for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ahash"])(hash);
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10
    }, _opts);
    const { c, dkLen, asyncTick } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(c, 'c');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(dkLen, 'dkLen');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(asyncTick, 'asyncTick');
    if (c < 1) throw new Error('iterations (c) must be >= 1');
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdfInputToBytes"])(_password, 'password');
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kdfInputToBytes"])(_salt, 'salt');
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmac"].create(hash, password);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(u);
    return DK;
}
function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(arr);
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
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(arr);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncLoop"])(c - 1, asyncTick, ()=>{
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
} //# sourceMappingURL=pbkdf2.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_md.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
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
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(data);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.buffer.subarray(pos));
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
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createView"])(out);
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
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_u64.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/sha2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_md.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_u64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
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
/** Internal 32-byte base SHA2 hash class. */ class SHA2_32B extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HashMD"] {
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
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
class _SHA256 extends SHA2_32B {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    A = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][0] | 0;
    B = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][1] | 0;
    C = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][2] | 0;
    D = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][3] | 0;
    E = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][4] | 0;
    F = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][5] | 0;
    G = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][6] | 0;
    H = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256_IV"][7] | 0;
    constructor(){
        super(32);
    }
}
class _SHA224 extends SHA2_32B {
    A = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][0] | 0;
    B = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][1] | 0;
    C = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][2] | 0;
    D = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][3] | 0;
    E = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][4] | 0;
    F = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][5] | 0;
    G = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][6] | 0;
    H = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA224_IV"][7] | 0;
    constructor(){
        super(28);
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"]([
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
/** Internal 64-byte base SHA2 hash class. */ class SHA2_64B extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HashMD"] {
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
            const s0h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shrSH"](W15h, W15l, 7);
            const s0l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shrSL"](W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSH"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBH"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shrSH"](W2h, W2l, 6);
            const s1l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSL"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBL"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shrSL"](W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add4L"](s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add4H"](SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBH"](Eh, El, 41);
            const sigma1l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBL"](Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add5L"](Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add5H"](T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSH"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 39);
            const sigma0l = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrSL"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add3L"](T1l, sigma0l, MAJl);
            Ah = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add3H"](All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class _SHA512 extends SHA2_64B {
    Ah = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][0] | 0;
    Al = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][1] | 0;
    Bh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][2] | 0;
    Bl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][3] | 0;
    Ch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][4] | 0;
    Cl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][5] | 0;
    Dh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][6] | 0;
    Dl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][7] | 0;
    Eh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][8] | 0;
    El = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][9] | 0;
    Fh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][10] | 0;
    Fl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][11] | 0;
    Gh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][12] | 0;
    Gl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][13] | 0;
    Hh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][14] | 0;
    Hl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA512_IV"][15] | 0;
    constructor(){
        super(64);
    }
}
class _SHA384 extends SHA2_64B {
    Ah = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][0] | 0;
    Al = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][1] | 0;
    Bh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][2] | 0;
    Bl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][3] | 0;
    Ch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][4] | 0;
    Cl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][5] | 0;
    Dh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][6] | 0;
    Dl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][7] | 0;
    Eh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][8] | 0;
    El = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][9] | 0;
    Fh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][10] | 0;
    Fl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][11] | 0;
    Gh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][12] | 0;
    Gl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][13] | 0;
    Hh = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][14] | 0;
    Hl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA384_IV"][15] | 0;
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
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x01));
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x04));
const sha512 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x03));
const sha384 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA384(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x02));
const sha512_256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x06));
const sha512_224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x05)); //# sourceMappingURL=sha2.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/scrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/sha2.js [app-client] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
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
        x04 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x00 + x12 | 0, 7);
        x08 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 + x00 | 0, 9);
        x12 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x08 + x04 | 0, 13);
        x00 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 + x08 | 0, 18);
        x09 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 + x01 | 0, 7);
        x13 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x09 + x05 | 0, 9);
        x01 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 + x09 | 0, 13);
        x05 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x01 + x13 | 0, 18);
        x14 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x10 + x06 | 0, 7);
        x02 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 + x10 | 0, 9);
        x06 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x02 + x14 | 0, 13);
        x10 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 + x02 | 0, 18);
        x03 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 + x11 | 0, 7);
        x07 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x03 + x15 | 0, 9);
        x11 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 + x03 | 0, 13);
        x15 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x11 + x07 | 0, 18);
        x01 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x00 + x03 | 0, 7);
        x02 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x01 + x00 | 0, 9);
        x03 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x02 + x01 | 0, 13);
        x00 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x03 + x02 | 0, 18);
        x06 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x05 + x04 | 0, 7);
        x07 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x06 + x05 | 0, 9);
        x04 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x07 + x06 | 0, 13);
        x05 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x04 + x07 | 0, 18);
        x11 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x10 + x09 | 0, 7);
        x08 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x11 + x10 | 0, 9);
        x09 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x08 + x11 | 0, 13);
        x10 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x09 + x08 | 0, 18);
        x12 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x15 + x14 | 0, 7);
        x13 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x12 + x15 | 0, 9);
        x14 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x13 + x12 | 0, 13);
        x15 ^= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotl"])(x14 + x13 | 0, 18);
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
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10,
        maxmem: 1024 ** 3 + 1024
    }, _opts);
    const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(N, 'N');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(r, 'r');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(p, 'p');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(dkLen, 'dkLen');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(asyncTick, 'asyncTick');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(maxmem, 'maxmem');
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
    const B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"], password, salt, {
        c: 1,
        dkLen: blockSize * p
    });
    const B32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(B);
    // Re-used between parallel iterations. Array(iterations) of B
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize * N));
    const tmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize));
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
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"], password, B, {
        c: 1,
        dkLen
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(B, V, tmp);
    return res;
}
function scrypt(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    return scryptOutput(password, dkLen, B, V, tmp);
}
async function scryptAsync(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        let pos = 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncLoop"])(N - 1, asyncTick, ()=>{
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        });
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncLoop"])(N, asyncTick, ()=>{
            // First u32 of the last 64-byte block (u32 is LE)
            // & (N - 1) is % N as N is a power of 2, N & (N - 1) = 0 is checked above; >>> 0 for unsigned, input fits in u32
            const j = (B32[Pi + blockSize32 - 16] & N - 1) >>> 0; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(B32);
    return scryptOutput(password, dkLen, B, V, tmp);
} //# sourceMappingURL=scrypt.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@noble/hashes/sha3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/_u64.js [app-client] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/hashes/utils.js [app-client] (ecmascript)");
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
const IOTAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(B);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(outputLen, 'outputLen');
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (!(0 < blockLen && blockLen < 200)) throw new Error('only keccak-f1600 function is supported');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        keccakP(this.state32, this.rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(out);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"])(this.state);
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
const genKeccak = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(()=>new Keccak(blockLen, suffix, outputLen), info);
const sha3_224 = /* @__PURE__ */ genKeccak(0x06, 144, 28, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x07));
const sha3_256 = /* @__PURE__ */ genKeccak(0x06, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x08));
const sha3_384 = /* @__PURE__ */ genKeccak(0x06, 104, 48, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x09));
const sha3_512 = /* @__PURE__ */ genKeccak(0x06, 72, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x0a));
const keccak_224 = /* @__PURE__ */ genKeccak(0x01, 144, 28);
const keccak_256 = /* @__PURE__ */ genKeccak(0x01, 136, 32);
const keccak_384 = /* @__PURE__ */ genKeccak(0x01, 104, 48);
const keccak_512 = /* @__PURE__ */ genKeccak(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true), info);
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 16, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
const shake128_32 = /* @__PURE__ */ genShake(0x1f, 168, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256_64 = /* @__PURE__ */ genShake(0x1f, 136, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oidNist"])(0x0c)); //# sourceMappingURL=sha3.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@polar-sh/checkout/dist/embed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if ("undefined" != typeof window && (window.Polar = {
    EmbedCheckout: t
}), "undefined" != typeof document) {
    const e = document.currentScript;
    e && e.hasAttribute("data-auto-init") && document.addEventListener("DOMContentLoaded", async ()=>{
        t.init();
    });
}
;
}),
"[project]/Downloads/nodebase-main/node_modules/standardwebhooks/dist/timing_safe_equal.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/nodebase-main/node_modules/standardwebhooks/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Webhook = exports.WebhookVerificationError = void 0;
const timing_safe_equal_1 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/standardwebhooks/dist/timing_safe_equal.js [app-client] (ecmascript)");
const base64 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/@stablelib/base64/lib/base64.js [app-client] (ecmascript)");
const sha256 = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/fast-sha256/sha256.js [app-client] (ecmascript)");
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
"[project]/Downloads/nodebase-main/node_modules/@stablelib/base64/lib/base64.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/nodebase-main/node_modules/fast-sha256/sha256.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Downloads/nodebase-main/node_modules/@polar-sh/better-auth/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/api/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-call/dist/index.js [app-client] (ecmascript)");
// src/client.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$checkout$2f$dist$2f$embed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@polar-sh/checkout/dist/embed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/shared/better-auth.DEBtROF9.mjs [app-client] (ecmascript) <export s as sessionMiddleware>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/plugins/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/core/dist/middleware/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
// src/plugins/checkout.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__getSessionFromCtx$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/better-auth/dist/shared/better-auth.DEBtROF9.mjs [app-client] (ecmascript) <export g as getSessionFromCtx>");
// src/plugins/webhooks.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$sdk$2f$dist$2f$esm$2f$webhooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@polar-sh/sdk/dist/esm/webhooks.js [app-client] (ecmascript)");
;
var onBeforeUserCreate = (options)=>async (user, context)=>{
        if (context && options.createCustomerOnSignUp) {
            try {
                const params = options.getCustomerCreateParams ? await options.getCustomerCreateParams({
                    user
                }) : {};
                if (!user.email) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: `Polar customer creation failed. Error: ${e.message}`
                    });
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: `Polar customer creation failed. Error: ${e.message}`
                    });
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
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
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$checkout$2f$dist$2f$embed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarEmbedCheckout"].create(checkout2.url, theme);
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
            portal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/portal", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session?.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Customer portal creation failed"
                    });
                }
            }),
            state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/state", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Subscriptions list failed"
                    });
                }
            }),
            benefits: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/benefits/list", {
                method: "GET",
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional()
                }).optional(),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Benefits list failed"
                    });
                }
            }),
            subscriptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/subscriptions/list", {
                method: "GET",
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    referenceId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    active: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional()
                }).optional(),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Polar subscriptions list failed"
                    });
                }
            }),
            orders: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/orders/list", {
                method: "GET",
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    productBillingType: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                        "recurring",
                        "one_time"
                    ]).optional()
                }).optional(),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Orders list failed"
                    });
                }
            })
        };
    };
;
;
;
var CheckoutParams = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    products: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]).optional(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    referenceId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    customFieldData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])).optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])).optional(),
    allowDiscountCodes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional(),
    discountId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    redirect: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional(),
    embedOrigin: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
});
var checkout = (checkoutOptions = {})=>(polar2)=>{
        return {
            checkout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/checkout", {
                method: "POST",
                body: CheckoutParams
            }, async (ctx)=>{
                const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__getSessionFromCtx$3e$__["getSessionFromCtx"])(ctx);
                let productIds = [];
                if (ctx.body.slug) {
                    const resolvedProducts = await (typeof checkoutOptions.products === "function" ? checkoutOptions.products() : checkoutOptions.products);
                    const productId = resolvedProducts?.find((product)=>product.slug === ctx.body.slug)?.productId;
                    if (!productId) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
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
            meters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/usage/meters/list", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ],
                query: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    page: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
                    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional()
                })
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Meters list failed"
                    });
                }
            }),
            ingestion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/usage/ingest", {
                method: "POST",
                body: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    event: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
                    ]))
                }),
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
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
            polarWebhooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/polar/webhooks", {
                method: "POST",
                metadata: {
                    isAction: false
                },
                cloneRequest: true
            }, async (ctx)=>{
                const { secret, ...eventHandlers } = options;
                if (!ctx.request?.body) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR");
                }
                const buf = await ctx.request.text();
                let event;
                try {
                    if (!secret) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                            message: "Polar webhook secret not found"
                        });
                    }
                    const headers = {
                        "webhook-id": ctx.request.headers.get("webhook-id"),
                        "webhook-timestamp": ctx.request.headers.get("webhook-timestamp"),
                        "webhook-signature": ctx.request.headers.get("webhook-signature")
                    };
                    event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$polar$2d$sh$2f$sdk$2f$dist$2f$esm$2f$webhooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEvent"])(buf, headers, secret);
                } catch (err) {
                    if (err instanceof Error) {
                        ctx.context.logger.error(`${err.message}`);
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: `Webhook Error: ${err.message}`
                        });
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
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
"[project]/Downloads/nodebase-main/node_modules/nanostores/task/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allTasks",
    ()=>allTasks,
    "cleanTasks",
    ()=>cleanTasks,
    "startTask",
    ()=>startTask,
    "task",
    ()=>task
]);
let tasks = 0;
let resolves = [];
function startTask() {
    tasks += 1;
    return ()=>{
        tasks -= 1;
        if (tasks === 0) {
            let prevResolves = resolves;
            resolves = [];
            for (let i of prevResolves)i();
        }
    };
}
function task(cb) {
    let endTask = startTask();
    let promise = cb().finally(endTask);
    promise.t = true;
    return promise;
}
function allTasks() {
    if (tasks === 0) {
        return Promise.resolve();
    } else {
        return new Promise((resolve)=>{
            resolves.push(resolve);
        });
    }
}
function cleanTasks() {
    tasks = 0;
}
}),
"[project]/Downloads/nodebase-main/node_modules/nanostores/clean-stores/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clean",
    ()=>clean,
    "cleanStores",
    ()=>cleanStores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$task$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nanostores/task/index.js [app-client] (ecmascript)");
;
let clean = Symbol('clean');
let cleanStores = (...stores)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$task$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanTasks"])();
    for (let $store of stores){
        if ($store) {
            if ($store.mocked) delete $store.mocked;
            if ($store[clean]) $store[clean]();
        }
    }
};
}),
"[project]/Downloads/nodebase-main/node_modules/nanostores/atom/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "atom",
    ()=>atom,
    "epoch",
    ()=>epoch,
    "readonlyType",
    ()=>readonlyType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nanostores/clean-stores/index.js [app-client] (ecmascript)");
;
let listenerQueue = [];
let lqIndex = 0;
const QUEUE_ITEMS_PER_LISTENER = 4;
let epoch = 0;
let atom = (initialValue)=>{
    let listeners = [];
    let $atom = {
        get () {
            if (!$atom.lc) {
                $atom.listen(()=>{})();
            }
            return $atom.value;
        },
        lc: 0,
        listen (listener) {
            $atom.lc = listeners.push(listener);
            return ()=>{
                for(let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length;){
                    if (listenerQueue[i] === listener) {
                        listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
                    } else {
                        i += QUEUE_ITEMS_PER_LISTENER;
                    }
                }
                let index = listeners.indexOf(listener);
                if (~index) {
                    listeners.splice(index, 1);
                    if (!--$atom.lc) $atom.off();
                }
            };
        },
        notify (oldValue, changedKey) {
            epoch++;
            let runListenerQueue = !listenerQueue.length;
            for (let listener of listeners){
                listenerQueue.push(listener, $atom.value, oldValue, changedKey);
            }
            if (runListenerQueue) {
                for(lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER){
                    listenerQueue[lqIndex](listenerQueue[lqIndex + 1], listenerQueue[lqIndex + 2], listenerQueue[lqIndex + 3]);
                }
                listenerQueue.length = 0;
            }
        },
        /* It will be called on last listener unsubscribing.
       We will redefine it in onMount and onStop. */ off () {},
        set (newValue) {
            let oldValue = $atom.value;
            if (oldValue !== newValue) {
                $atom.value = newValue;
                $atom.notify(oldValue);
            }
        },
        subscribe (listener) {
            let unbind = $atom.listen(listener);
            listener($atom.value);
            return unbind;
        },
        value: initialValue
    };
    if ("TURBOPACK compile-time truthy", 1) {
        $atom[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"]] = ()=>{
            listeners = [];
            $atom.lc = 0;
            $atom.off();
        };
    }
    return $atom;
};
const readonlyType = (store)=>store;
}),
"[project]/Downloads/nodebase-main/node_modules/nanostores/lifecycle/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORE_UNMOUNT_DELAY",
    ()=>STORE_UNMOUNT_DELAY,
    "on",
    ()=>on,
    "onMount",
    ()=>onMount,
    "onNotify",
    ()=>onNotify,
    "onSet",
    ()=>onSet,
    "onStart",
    ()=>onStart,
    "onStop",
    ()=>onStop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/nanostores/clean-stores/index.js [app-client] (ecmascript)");
;
const START = 0;
const STOP = 1;
const SET = 2;
const NOTIFY = 3;
const MOUNT = 5;
const UNMOUNT = 6;
const REVERT_MUTATION = 10;
let on = (object, listener, eventKey, mutateStore)=>{
    object.events = object.events || {};
    if (!object.events[eventKey + REVERT_MUTATION]) {
        object.events[eventKey + REVERT_MUTATION] = mutateStore((eventProps)=>{
            // eslint-disable-next-line no-sequences
            object.events[eventKey].reduceRight((event, l)=>(l(event), event), {
                shared: {},
                ...eventProps
            });
        });
    }
    object.events[eventKey] = object.events[eventKey] || [];
    object.events[eventKey].push(listener);
    return ()=>{
        let currentListeners = object.events[eventKey];
        let index = currentListeners.indexOf(listener);
        currentListeners.splice(index, 1);
        if (!currentListeners.length) {
            delete object.events[eventKey];
            object.events[eventKey + REVERT_MUTATION]();
            delete object.events[eventKey + REVERT_MUTATION];
        }
    };
};
let onStart = ($store, listener)=>on($store, listener, START, (runListeners)=>{
        let originListen = $store.listen;
        $store.listen = (arg)=>{
            if (!$store.lc && !$store.starting) {
                $store.starting = true;
                runListeners();
                delete $store.starting;
            }
            return originListen(arg);
        };
        return ()=>{
            $store.listen = originListen;
        };
    });
let onStop = ($store, listener)=>on($store, listener, STOP, (runListeners)=>{
        let originOff = $store.off;
        $store.off = ()=>{
            runListeners();
            originOff();
        };
        return ()=>{
            $store.off = originOff;
        };
    });
let onSet = ($store, listener)=>on($store, listener, SET, (runListeners)=>{
        let originSet = $store.set;
        let originSetKey = $store.setKey;
        if ($store.setKey) {
            $store.setKey = (changed, changedValue)=>{
                let isAborted;
                let abort = ()=>{
                    isAborted = true;
                };
                runListeners({
                    abort,
                    changed,
                    newValue: {
                        ...$store.value,
                        [changed]: changedValue
                    }
                });
                if (!isAborted) return originSetKey(changed, changedValue);
            };
        }
        $store.set = (newValue)=>{
            let isAborted;
            let abort = ()=>{
                isAborted = true;
            };
            runListeners({
                abort,
                newValue
            });
            if (!isAborted) return originSet(newValue);
        };
        return ()=>{
            $store.set = originSet;
            $store.setKey = originSetKey;
        };
    });
let onNotify = ($store, listener)=>on($store, listener, NOTIFY, (runListeners)=>{
        let originNotify = $store.notify;
        $store.notify = (oldValue, changed)=>{
            let isAborted;
            let abort = ()=>{
                isAborted = true;
            };
            runListeners({
                abort,
                changed,
                oldValue
            });
            if (!isAborted) return originNotify(oldValue, changed);
        };
        return ()=>{
            $store.notify = originNotify;
        };
    });
let STORE_UNMOUNT_DELAY = 1000;
let onMount = ($store, initialize)=>{
    let listener = (payload)=>{
        let destroy = initialize(payload);
        if (destroy) $store.events[UNMOUNT].push(destroy);
    };
    return on($store, listener, MOUNT, (runListeners)=>{
        let originListen = $store.listen;
        $store.listen = (...args)=>{
            if (!$store.lc && !$store.active) {
                $store.active = true;
                runListeners();
            }
            return originListen(...args);
        };
        let originOff = $store.off;
        $store.events[UNMOUNT] = [];
        $store.off = ()=>{
            originOff();
            setTimeout(()=>{
                if ($store.active && !$store.lc) {
                    $store.active = false;
                    for (let destroy of $store.events[UNMOUNT])destroy();
                    $store.events[UNMOUNT] = [];
                }
            }, STORE_UNMOUNT_DELAY);
        };
        if ("TURBOPACK compile-time truthy", 1) {
            let originClean = $store[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"]];
            $store[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"]] = ()=>{
                for (let destroy of $store.events[UNMOUNT])destroy();
                $store.events[UNMOUNT] = [];
                $store.active = false;
                originClean();
            };
        }
        return ()=>{
            $store.listen = originListen;
            $store.off = originOff;
        };
    });
};
}),
"[project]/Downloads/nodebase-main/node_modules/nanostores/listen-keys/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listenKeys",
    ()=>listenKeys,
    "subscribeKeys",
    ()=>subscribeKeys
]);
function listenKeys($store, keys, listener) {
    let keysSet = new Set(keys).add(undefined);
    return $store.listen((value, oldValue, changed)=>{
        if (keysSet.has(changed)) {
            listener(value, oldValue, changed);
        }
    });
}
function subscribeKeys($store, keys, listener) {
    let unbind = listenKeys($store, keys, listener);
    listener($store.value);
    return unbind;
}
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryObserver.ts
__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const finalizeThenableIfPossible = (thenable)=>{
                if (nextResult.status === "error") {
                    thenable.reject(nextResult.error);
                } else if (nextResult.data !== void 0) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
]);

//# debugId=ab7f5a09-8332-f99d-c55a-746b8a7e5849
//# sourceMappingURL=6ec0f_a8480339._.js.map