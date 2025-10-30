(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/nodebase-main/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Controller",
    ()=>Controller,
    "Form",
    ()=>Form,
    "FormProvider",
    ()=>FormProvider,
    "Watch",
    ()=>Watch,
    "appendErrors",
    ()=>appendErrors,
    "createFormControl",
    ()=>createFormControl,
    "get",
    ()=>get,
    "set",
    ()=>set,
    "useController",
    ()=>useController,
    "useFieldArray",
    ()=>useFieldArray,
    "useForm",
    ()=>useForm,
    "useFormContext",
    ()=>useFormContext,
    "useFormState",
    ()=>useFormState,
    "useWatch",
    ()=>useWatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var isCheckBoxInput = (element)=>element.type === 'checkbox';
var isDateObject = (value1)=>value1 instanceof Date;
var isNullOrUndefined = (value1)=>value1 == null;
const isObjectType = (value1)=>typeof value1 === 'object';
var isObject = (value1)=>!isNullOrUndefined(value1) && !Array.isArray(value1) && isObjectType(value1) && !isDateObject(value1);
var getEventValue = (event)=>isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name)=>names.has(getNodeParentName(name));
var isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject(data))) {
        copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        } else {
            for(const key in data){
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    } else {
        return data;
    }
    return copy;
}
var isKey = (value1)=>/^\w*$/.test(value1);
var isUndefined = (val)=>val === undefined;
var compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var stringToPath = (input)=>compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
var get = (object, path, defaultValue)=>{
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [
        path
    ] : stringToPath(path)).reduce((result, key)=>isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value1)=>typeof value1 === 'boolean';
var set = (object, path, value1)=>{
    let index = -1;
    const tempPath = isKey(path) ? [
        path
    ] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};
const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change'
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
};
const HookFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const useFormContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const FormProvider = (props)=>{
    const { children, ...data } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(HookFormContext.Provider, {
        value: data
    }, children);
};
var getProxyFormState = function(formState, control, localProxyFormState) {
    let isRoot = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState){
        Object.defineProperty(result, key, {
            get: ()=>{
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            }
        });
    }
    return result;
};
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(control._formState);
    const _localProxyFormState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    useIsomorphicLayoutEffect({
        "useFormState.useIsomorphicLayoutEffect": ()=>control._subscribe({
                name,
                formState: _localProxyFormState.current,
                exact,
                callback: {
                    "useFormState.useIsomorphicLayoutEffect": (formState)=>{
                        !disabled && updateFormState({
                            ...control._formState,
                            ...formState
                        });
                    }
                }["useFormState.useIsomorphicLayoutEffect"]
            })
    }["useFormState.useIsomorphicLayoutEffect"], [
        name,
        disabled,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFormState.useEffect": ()=>{
            _localProxyFormState.current.isValid && control._setValid(true);
        }
    }["useFormState.useEffect"], [
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useFormState.useMemo": ()=>getProxyFormState(formState, control, _localProxyFormState.current, false)
    }["useFormState.useMemo"], [
        formState,
        control
    ]);
}
var isString = (value1)=>typeof value1 === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var isPrimitive = (value1)=>isNullOrUndefined(value1) || !isObjectType(value1);
function deepEqual(object1, object2) {
    let _internal_visited = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new WeakSet();
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, compute } = props || {};
    const _defaultValue = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(defaultValue);
    const _compute = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(compute);
    const _computeFormValues = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    _compute.current = compute;
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useWatch.useMemo[defaultValueMemo]": ()=>control._getWatch(name, _defaultValue.current)
    }["useWatch.useMemo[defaultValueMemo]"], [
        control,
        name
    ]);
    const [value1, updateValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(_compute.current ? _compute.current(defaultValueMemo) : defaultValueMemo);
    useIsomorphicLayoutEffect({
        "useWatch.useIsomorphicLayoutEffect": ()=>control._subscribe({
                name,
                formState: {
                    values: true
                },
                exact,
                callback: {
                    "useWatch.useIsomorphicLayoutEffect": (formState)=>{
                        if (!disabled) {
                            const formValues = generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current);
                            if (_compute.current) {
                                const computedFormValues = _compute.current(formValues);
                                if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                                    updateValue(computedFormValues);
                                    _computeFormValues.current = computedFormValues;
                                }
                            } else {
                                updateValue(formValues);
                            }
                        }
                    }
                }["useWatch.useIsomorphicLayoutEffect"]
            })
    }["useWatch.useIsomorphicLayoutEffect"], [
        control,
        disabled,
        name,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useWatch.useEffect": ()=>control._removeUnmounted()
    }["useWatch.useEffect"]);
    return value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister, defaultValue } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[defaultValueMemo]": ()=>get(control._formValues, name, get(control._defaultValues, name, defaultValue))
    }["useController.useMemo[defaultValueMemo]"], [
        control,
        name,
        defaultValue
    ]);
    const value1 = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact: true
    });
    const formState = useFormState({
        control,
        name,
        exact: true
    });
    const _props = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(props);
    const _previousNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _registerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control.register(name, {
        ...props.rules,
        value: value1,
        ...isBoolean(props.disabled) ? {
            disabled: props.disabled
        } : {}
    }));
    _props.current = props;
    const fieldState = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[fieldState]": ()=>Object.defineProperties({}, {
                invalid: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.errors, name)
                    }["useController.useMemo[fieldState]"]
                },
                isDirty: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.dirtyFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                isTouched: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.touchedFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                isValidating: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.validatingFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                error: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>get(formState.errors, name)
                    }["useController.useMemo[fieldState]"]
                }
            })
    }["useController.useMemo[fieldState]"], [
        formState,
        name
    ]);
    const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[onChange]": (event)=>_registerProps.current.onChange({
                target: {
                    value: getEventValue(event),
                    name: name
                },
                type: EVENTS.CHANGE
            })
    }["useController.useCallback[onChange]"], [
        name
    ]);
    const onBlur = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[onBlur]": ()=>_registerProps.current.onBlur({
                target: {
                    value: get(control._formValues, name),
                    name: name
                },
                type: EVENTS.BLUR
            })
    }["useController.useCallback[onBlur]"], [
        name,
        control._formValues
    ]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[ref]": (elm)=>{
            const field = get(control._fields, name);
            if (field && elm) {
                field._f.ref = {
                    focus: ({
                        "useController.useCallback[ref]": ()=>elm.focus && elm.focus()
                    })["useController.useCallback[ref]"],
                    select: ({
                        "useController.useCallback[ref]": ()=>elm.select && elm.select()
                    })["useController.useCallback[ref]"],
                    setCustomValidity: ({
                        "useController.useCallback[ref]": (message)=>elm.setCustomValidity(message)
                    })["useController.useCallback[ref]"],
                    reportValidity: ({
                        "useController.useCallback[ref]": ()=>elm.reportValidity()
                    })["useController.useCallback[ref]"]
                };
            }
        }
    }["useController.useCallback[ref]"], [
        control._fields,
        name
    ]);
    const field = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[field]": ()=>({
                name,
                value: value1,
                ...isBoolean(disabled) || formState.disabled ? {
                    disabled: formState.disabled || disabled
                } : {},
                onChange,
                onBlur,
                ref
            })
    }["useController.useMemo[field]"], [
        name,
        disabled,
        formState.disabled,
        onChange,
        onBlur,
        ref,
        value1
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useController.useEffect": ()=>{
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            const previousName = _previousNameRef.current;
            if (previousName && previousName !== name && !isArrayField) {
                control.unregister(previousName);
            }
            control.register(name, {
                ..._props.current.rules,
                ...isBoolean(_props.current.disabled) ? {
                    disabled: _props.current.disabled
                } : {}
            });
            const updateMounted = {
                "useController.useEffect.updateMounted": (name, value1)=>{
                    const field = get(control._fields, name);
                    if (field && field._f) {
                        field._f.mount = value1;
                    }
                }
            }["useController.useEffect.updateMounted"];
            updateMounted(name, true);
            if (_shouldUnregisterField) {
                const value1 = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
                set(control._defaultValues, name, value1);
                if (isUndefined(get(control._formValues, name))) {
                    set(control._formValues, name, value1);
                }
            }
            !isArrayField && control.register(name);
            _previousNameRef.current = name;
            return ({
                "useController.useEffect": ()=>{
                    (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
                }
            })["useController.useEffect"];
        }
    }["useController.useEffect"], [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useController.useEffect": ()=>{
            control._setDisabledField({
                disabled,
                name
            });
        }
    }["useController.useEffect"], [
        disabled,
        name,
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo": ()=>({
                field,
                formState,
                fieldState
            })
    }["useController.useMemo"], [
        field,
        formState,
        fieldState
    ]);
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const Controller = (props)=>props.render(useController(props));
const flatten = (obj)=>{
    const output = {};
    for (const key of Object.keys(obj)){
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)){
                output["".concat(key, ".").concat(nestedKey)] = nested[nestedKey];
            }
        } else {
            output[key] = obj[key];
        }
    }
    return output;
};
const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */ function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event)=>{
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data)=>{
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            } catch (_a) {}
            const flattenFormValues = flatten(control._formValues);
            for(const key in flattenFormValues){
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType
                    ].some((value1)=>value1 && value1.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...encType && encType !== 'multipart/form-data' ? {
                                'Content-Type': encType
                            } : {}
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData
                    });
                    if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({
                            response
                        });
                        type = String(response.status);
                    } else {
                        onSuccess && onSuccess({
                            response
                        });
                    }
                } catch (error) {
                    hasError = true;
                    onError && onError({
                        error
                    });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false
            });
            props.control.setError('root.server', {
                type
            });
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Form.useEffect": ()=>{
            setMounted(true);
        }
    }["Form.useEffect"], []);
    return render ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, render({
        submit
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        noValidate: mounted,
        action: action,
        method: method,
        encType: encType,
        onSubmit: submit,
        ...rest
    }, children);
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers){
            observer.next && observer.next(value1);
        }
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe
    };
};
function extractFormValues(fieldsState, formValues) {
    const values = {};
    for(const key in fieldsState){
        if (fieldsState.hasOwnProperty(key)) {
            const fieldState = fieldsState[key];
            const fieldValue = formValues[key];
            if (fieldState && isObject(fieldState) && fieldValue) {
                const nestedFieldsState = extractFormValues(fieldState, fieldValue);
                if (isObject(nestedFieldsState)) {
                    values[key] = nestedFieldsState;
                }
            } else if (fieldsState[key]) {
                values[key] = fieldValue;
            }
        }
    }
    return values;
}
var isEmptyObject = (value1)=>isObject(value1) && !Object.keys(value1).length;
var isFileInput = (element)=>element.type === 'file';
var isFunction = (value1)=>typeof value1 === 'function';
var isHTMLElement = (value1)=>{
    if (!isWeb) {
        return false;
    }
    const owner = value1 ? value1.ownerDocument : 0;
    return value1 instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element)=>element.type === "select-multiple";
var isRadioInput = (element)=>element.type === 'radio';
var isRadioOrCheckbox = (ref)=>isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref)=>isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length){
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path) ? path : isKey(path) ? [
        path
    ] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}
var objectHasFunction = (data)=>{
    for(const key in data){
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};
function isTraversable(value1) {
    return Array.isArray(value1) || isObject(value1) && !objectHasFunction(value1);
}
function markFieldsDirty(data) {
    let fields = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for(const key in data){
        if (isTraversable(data[key])) {
            fields[key] = Array.isArray(data[key]) ? [] : {};
            markFieldsDirty(data[key], fields[key]);
        } else if (!isUndefined(data[key])) {
            fields[key] = true;
        }
    }
    return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
    if (!dirtyFieldsFromValues) {
        dirtyFieldsFromValues = markFieldsDirty(formValues);
    }
    for(const key in data){
        if (isTraversable(data[key])) {
            if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                dirtyFieldsFromValues[key] = markFieldsDirty(data[key], Array.isArray(data[key]) ? [] : {});
            } else {
                getDirtyFields(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
            }
        } else {
            dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
        }
    }
    return dirtyFieldsFromValues;
}
const defaultResult = {
    value: false,
    isValid: false
};
const validResult = {
    value: true,
    isValid: true
};
var getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
            value: options[0].value,
            isValid: true
        } : validResult : defaultResult;
    }
    return defaultResult;
};
var getFieldValueAs = (value1, param)=>{
    let { valueAsNumber, valueAsDate, setValueAs } = param;
    return isUndefined(value1) ? value1 : valueAsNumber ? value1 === '' ? NaN : value1 ? +value1 : value1 : valueAsDate && isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
};
const defaultReturn = {
    isValid: false,
    value: null
};
var getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [
            ...ref.selectedOptions
        ].map((param)=>{
            let { value: value1 } = param;
            return value1;
        });
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields,
        shouldUseNativeValidation
    };
};
var isRegex = (value1)=>value1 instanceof RegExp;
var getRuleValue = (rule)=>isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched
    });
const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference)=>!!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction)=>validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                } else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            } else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};
function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name
        };
    }
    const names = name.split('.');
    while(names.length){
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return {
                name
            };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: "".concat(fieldName, ".root"),
                error: foundError.root
            };
        }
        names.pop();
    }
    return {
        name
    };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact)=>!name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName)=>currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) {
        return false;
    } else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};
var unsetEmptyArray = (ref, name)=>!compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};
function getValidateError(result, ref) {
    let type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'validate';
    if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
        return {
            type,
            message: isString(result) ? result : '',
            ref
        };
    }
}
var getValueAndMessage = (validationData)=>isObject(validationData) && !isRegex(validationData) ? validationData : {
        value: validationData,
        message: ''
    };
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = function(exceedMax, maxLengthMessage, minLengthMessage) {
        let maxType = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : INPUT_VALIDATION_RULES.maxLength, minType = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : INPUT_VALIDATION_RULES.minLength;
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
        const { value: value1, message } = isString(required) ? {
            value: !!required,
            message: required
        } : getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if (isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};
const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function createFormControl() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let _options = {
        ...defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject()
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _setValid = async (shouldUpdateValid)=>{
        if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
            const isValid = _options.resolver ? isEmptyObject((await _runSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating)=>{
        if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name)=>{
                if (name) {
                    isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields)
            });
        }
    };
    const _setFieldArray = function(name) {
        let values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], method = arguments.length > 2 ? arguments[2] : void 0, args = arguments.length > 3 ? arguments[3] : void 0, shouldSetValues = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, shouldUpdateFieldsAndState = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error)=>{
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value1) ? get(_defaultValues, name) : value1);
            isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && isBoolean(isValid) ? {
                    isValid
                } : {},
                errors: _formState.errors,
                name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name)=>{
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names){
                const error = get(errors, name);
                error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
            }
        } else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async function(fields, shouldOnlyCheckValid) {
        let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            valid: true
        };
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = get(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!live(ref)) : !live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>!_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = function(name, value1) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const field = get(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value1, fieldReference));
                fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value1) ? '' : value1;
                if (isMultipleSelect(fieldReference.ref)) {
                    [
                        ...fieldReference.ref.options
                    ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                } else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef)=>{
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data)=>data === checkboxRef.value);
                                } else {
                                    checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    } else {
                        fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                    }
                } else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                } else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues)
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            if (!value1.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value1[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = get(_fields, fieldName);
            (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = function(name, value1) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value1);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues)
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else {
            field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({
            ..._formState,
            name
        });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues)
        });
    };
    const onChange = async (event)=>{
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                if (!target || !target.readOnly) {
                    field._f.onBlur && field._f.onBlur(event);
                    delayErrorCallback && delayErrorCallback(0);
                }
            } else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.state.next({
                name,
                type: event.type,
                values: cloneObject(_formValues)
            });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    } else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return shouldRender && _subjects.state.next({
                    name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            if (_options.resolver) {
                const { errors } = await _runSchema([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            } else {
                _updateIsValidating([
                    name
                ], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async function(name) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>get(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        } else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : {
                name
            },
            ..._options.resolver || !name ? {
                isValid
            } : {},
            errors: _formState.errors
        });
        options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames, config)=>{
        let values = {
            ..._state.mount ? _formValues : _defaultValues
        };
        if (config) {
            values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
        }
        return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name)=>get(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            error: get((formState || _formState).errors, name),
            isValidating: !!get(_formState.validatingFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name)
        });
    const clearErrors = (name)=>{
        name && convertToArrayPayload(name).forEach((inputName)=>unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = (get(_fields, name, {
            _f: {}
        })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>isFunction(name) ? _subjects.state.subscribe({
            next: (payload)=>'values' in payload && name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const _subscribe = (props)=>_subjects.state.subscribe({
            next: (formState)=>{
                if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                    props.callback({
                        values: {
                            ..._formValues
                        },
                        ..._formState,
                        ...formState,
                        defaultValues: _defaultValues
                    });
                }
            }
        }).unsubscribe;
    const subscribe = (props)=>{
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState
        });
    };
    const unregister = function(name) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues)
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = (param)=>{
        let { disabled, name } = param;
        if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = function(name) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name
                    }
                },
                name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
                name
            });
        } else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled || _options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern)
            } : {},
            name,
            onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter(live),
                                    fieldRef,
                                    ...Array.isArray(get(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if (isBoolean(disabled)) {
            _subjects.state.next({
                disabled
            });
            iterateFieldsByAction(_fields, (ref, name)=>{
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef)=>{
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors, values } = await _runSchema();
                _formState.errors = errors;
                fieldValues = cloneObject(values);
            } else {
                await executeBuiltInValidation(_fields);
            }
            if (_names.disabled.size) {
                for (const name of _names.disabled){
                    unset(fieldValues, name);
                }
            }
            unset(_formState.errors, 'root');
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) {
                    await onInvalid({
                        ..._formState.errors
                    }, e);
                }
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) {
                throw onValidError;
            }
        };
    const resetField = function(name) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            } else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = function(formValues) {
        let keepStateOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues))
                ]);
                for (const fieldName of Array.from(fieldsToCheck)){
                    get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
                }
            } else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount){
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount){
                        setValue(fieldName, get(values, fieldName));
                    }
                } else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.state.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ''
        };
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false,
            defaultValues: _defaultValues
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = function(name) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState
    };
    return {
        ...methods,
        formControl: methods
    };
}
var generateId = ()=>{
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
var getFocusFieldName = function(name, index) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || "".concat(name, ".").concat(isUndefined(options.focusIndex) ? index : options.focusIndex, ".") : '';
};
var appendAt = (data, value1)=>[
        ...data,
        ...convertToArrayPayload(value1)
    ];
var fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var prependAt = (data, value1)=>[
        ...convertToArrayPayload(value1),
        ...convertToArrayPayload(data)
    ];
function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index)=>isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b)=>a - b));
var swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
var updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, rules } = props;
    const [fields, setFields] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(control._getFieldArray(name));
    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control._getFieldArray(name).map(generateId));
    const _actioned = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    control._names.array.add(name);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useFieldArray.useMemo": ()=>rules && fields.length >= 0 && control.register(name, rules)
    }["useFieldArray.useMemo"], [
        control,
        name,
        fields.length,
        rules
    ]);
    useIsomorphicLayoutEffect({
        "useFieldArray.useIsomorphicLayoutEffect": ()=>control._subjects.array.subscribe({
                next: {
                    "useFieldArray.useIsomorphicLayoutEffect": (param)=>{
                        let { values, name: fieldArrayName } = param;
                        if (fieldArrayName === name || !fieldArrayName) {
                            const fieldValues = get(values, name);
                            if (Array.isArray(fieldValues)) {
                                setFields(fieldValues);
                                ids.current = fieldValues.map(generateId);
                            }
                        }
                    }
                }["useFieldArray.useIsomorphicLayoutEffect"]
            }).unsubscribe
    }["useFieldArray.useIsomorphicLayoutEffect"], [
        control,
        name
    ]);
    const updateValues = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useFieldArray.useCallback[updateValues]": (updatedFieldArrayValues)=>{
            _actioned.current = true;
            control._setFieldArray(name, updatedFieldArrayValues);
        }
    }["useFieldArray.useCallback[updateValues]"], [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(get(control._fields, name)) && set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = cloneObject(value1);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value1));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFieldArray.useEffect": ()=>{
            control._state.action = false;
            isWatched(name, control._names) && control._subjects.state.next({
                ...control._formState
            });
            if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted) && !getValidationModes(control._options.reValidateMode).isOnSubmit) {
                if (control._options.resolver) {
                    control._runSchema([
                        name
                    ]).then({
                        "useFieldArray.useEffect": (result)=>{
                            const error = get(result.errors, name);
                            const existingError = get(control._formState.errors, name);
                            if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                                error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
                                control._subjects.state.next({
                                    errors: control._formState.errors
                                });
                            }
                        }
                    }["useFieldArray.useEffect"]);
                } else {
                    const field = get(control._fields, name);
                    if (field && field._f && !(getValidationModes(control._options.reValidateMode).isOnSubmit && getValidationModes(control._options.mode).isOnSubmit)) {
                        validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then({
                            "useFieldArray.useEffect": (error)=>!isEmptyObject(error) && control._subjects.state.next({
                                    errors: updateFieldArrayRootError(control._formState.errors, error, name)
                                })
                        }["useFieldArray.useEffect"]);
                    }
                }
            }
            control._subjects.state.next({
                name,
                values: cloneObject(control._formValues)
            });
            control._names.focus && iterateFieldsByAction(control._fields, {
                "useFieldArray.useEffect": (ref, key)=>{
                    if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                        ref.focus();
                        return 1;
                    }
                    return;
                }
            }["useFieldArray.useEffect"]);
            control._names.focus = '';
            control._setValid();
            _actioned.current = false;
        }
    }["useFieldArray.useEffect"], [
        fields,
        name,
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFieldArray.useEffect": ()=>{
            !get(control._formValues, name) && control._setFieldArray(name);
            return ({
                "useFieldArray.useEffect": ()=>{
                    const updateMounted = {
                        "useFieldArray.useEffect.updateMounted": (name, value1)=>{
                            const field = get(control._fields, name);
                            if (field && field._f) {
                                field._f.mount = value1;
                            }
                        }
                    }["useFieldArray.useEffect.updateMounted"];
                    control._options.shouldUnregister || shouldUnregister ? control.unregister(name) : updateMounted(name, false);
                }
            })["useFieldArray.useEffect"];
        }
    }["useFieldArray.useEffect"], [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "useFieldArray.useMemo": ()=>fields.map({
                    "useFieldArray.useMemo": (field, index)=>({
                            ...field,
                            [keyName]: ids.current[index] || generateId()
                        })
                }["useFieldArray.useMemo"])
        }["useFieldArray.useMemo"], [
            fields,
            keyName
        ])
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function useForm() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const _formControl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        } else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect({
        "useForm.useIsomorphicLayoutEffect": ()=>{
            const sub = control._subscribe({
                formState: control._proxyFormState,
                callback: {
                    "useForm.useIsomorphicLayoutEffect.sub": ()=>updateFormState({
                            ...control._formState
                        })
                }["useForm.useIsomorphicLayoutEffect.sub"],
                reRenderRoot: true
            });
            updateFormState({
                "useForm.useIsomorphicLayoutEffect": (data)=>({
                        ...data,
                        isReady: true
                    })
            }["useForm.useIsomorphicLayoutEffect"]);
            control._formState.isReady = true;
            return sub;
        }
    }["useForm.useIsomorphicLayoutEffect"], [
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>control._disableForm(props.disabled)
    }["useForm.useEffect"], [
        control,
        props.disabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.mode) {
                control._options.mode = props.mode;
            }
            if (props.reValidateMode) {
                control._options.reValidateMode = props.reValidateMode;
            }
        }
    }["useForm.useEffect"], [
        control,
        props.mode,
        props.reValidateMode
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.errors) {
                control._setErrors(props.errors);
                control._focusError();
            }
        }
    }["useForm.useEffect"], [
        control,
        props.errors
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            props.shouldUnregister && control._subjects.state.next({
                values: control._getWatch()
            });
        }
    }["useForm.useEffect"], [
        control,
        props.shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (control._proxyFormState.isDirty) {
                const isDirty = control._getDirty();
                if (isDirty !== formState.isDirty) {
                    control._subjects.state.next({
                        isDirty
                    });
                }
            }
        }
    }["useForm.useEffect"], [
        control,
        formState.isDirty
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.values && !deepEqual(props.values, _values.current)) {
                control._reset(props.values, {
                    keepFieldsRef: true,
                    ...control._options.resetOptions
                });
                _values.current = props.values;
                updateFormState({
                    "useForm.useEffect": (state)=>({
                            ...state
                        })
                }["useForm.useEffect"]);
            } else {
                control._resetDefaultValues();
            }
        }
    }["useForm.useEffect"], [
        control,
        props.values
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (!control._state.mount) {
                control._setValid();
                control._state.mount = true;
            }
            if (control._state.watch) {
                control._state.watch = false;
                control._subjects.state.next({
                    ...control._formState
                });
            }
            control._removeUnmounted();
        }
    }["useForm.useEffect"]);
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}
/**
 * Watch component that subscribes to form field changes and re-renders when watched fields update.
 *
 * @param control - The form control object from useForm
 * @param names - Array of field names to watch for changes
 * @param render - The function that receives watched values and returns ReactNode
 * @returns The result of calling render function with watched values
 *
 * @example
 * The `Watch` component only re-render when the values of `foo`, `bar`, and `baz.qux` change.
 * The types of `foo`, `bar`, and `baz.qux` are precisely inferred.
 *
 * ```tsx
 * const { control } = useForm();
 *
 * <Watch
 *   control={control}
 *   names={['foo', 'bar', 'baz.qux']}
 *   render={([foo, bar, baz_qux]) => <div>{foo}{bar}{baz_qux}</div>}
 * />
 * ```
 */ const Watch = (param)=>{
    let { control, names, render } = param;
    return render(useWatch({
        control,
        name: names
    }));
};
;
 //# sourceMappingURL=index.esm.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNestErrors",
    ()=>s,
    "validateFieldsNatively",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
const r = (t, r, o)=>{
    if (t && "reportValidity" in t) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(o, r);
        t.setCustomValidity(s && s.message || ""), t.reportValidity();
    }
}, o = (e, t)=>{
    for(const o in t.fields){
        const s = t.fields[o];
        s && s.ref && "reportValidity" in s.ref ? r(s.ref, o, e) : s && s.refs && s.refs.forEach((t)=>r(t, o, e));
    }
}, s = (r, s)=>{
    s.shouldUseNativeValidation && o(r, s);
    const n = {};
    for(const o in r){
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(s.fields, o), c = Object.assign(r[o] || {}, {
            ref: f && f.ref
        });
        if (i(s.names || Object.keys(r), o)) {
            const r = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(n, o));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(r, "root", c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(n, o, r);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(n, o, c);
    }
    return n;
}, i = (e, t)=>{
    const r = n(t);
    return e.some((e)=>n(e).match("^".concat(r, "\\.\\d+")));
};
function n(e) {
    return e.replace(/\]|\[/g, "");
}
;
 //# sourceMappingURL=resolvers.mjs.map
}),
"[project]/Downloads/nodebase-main/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zodResolver",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/zod/v4/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
;
;
;
function t(r, e) {
    try {
        var o = r();
    } catch (r) {
        return e(r);
    }
    return o && o.then ? o.then(void 0, e) : o;
}
function s(r, e) {
    for(var n = {}; r.length;){
        var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
        if (!n[a]) if ("unionErrors" in t) {
            var u = t.unionErrors[0].errors[0];
            n[a] = {
                message: u.message,
                type: u.code
            };
        } else n[a] = {
            message: i,
            type: s
        };
        if ("unionErrors" in t && t.unionErrors.forEach(function(e) {
            return e.errors.forEach(function(e) {
                return r.push(e);
            });
        }), e) {
            var c = n[a].types, f = c && c[t.code];
            n[a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrors"])(a, e, n, s, f ? [].concat(f, t.message) : t.message);
        }
        r.shift();
    }
    return n;
}
function i(r, e) {
    for(var n = {}; r.length;){
        var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
        if (!n[a]) if ("invalid_union" === t.code && t.errors.length > 0) {
            var u = t.errors[0][0];
            n[a] = {
                message: u.message,
                type: u.code
            };
        } else n[a] = {
            message: i,
            type: s
        };
        if ("invalid_union" === t.code && t.errors.forEach(function(e) {
            return e.forEach(function(e) {
                return r.push(e);
            });
        }), e) {
            var c = n[a].types, f = c && c[t.code];
            n[a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrors"])(a, e, n, s, f ? [].concat(f, t.message) : t.message);
        }
        r.shift();
    }
    return n;
}
function a(o, a, u) {
    if (void 0 === u && (u = {}), function(r) {
        return "_def" in r && "object" == typeof r._def && "typeName" in r._def;
    }(o)) return function(n, i, c) {
        try {
            return Promise.resolve(t(function() {
                return Promise.resolve(o["sync" === u.mode ? "parse" : "parseAsync"](n, a)).then(function(e) {
                    return c.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, c), {
                        errors: {},
                        values: u.raw ? Object.assign({}, n) : e
                    };
                });
            }, function(r) {
                if (function(r) {
                    return Array.isArray(null == r ? void 0 : r.issues);
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNestErrors"])(s(r.errors, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
    if (function(r) {
        return "_zod" in r && "object" == typeof r._zod;
    }(o)) return function(s, c, f) {
        try {
            return Promise.resolve(t(function() {
                return Promise.resolve(("sync" === u.mode ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"])(o, s, a)).then(function(e) {
                    return f.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, f), {
                        errors: {},
                        values: u.raw ? Object.assign({}, s) : e
                    };
                });
            }, function(r) {
                if (function(r) {
                    return r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodError"];
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNestErrors"])(i(r.issues, !f.shouldUseNativeValidation && "all" === f.criteriaMode), f)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
    throw new Error("Invalid input: not a Zod schema");
}
;
 //# sourceMappingURL=zod.module.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 16),
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Downloads/nodebase-main/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/nodebase-main/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
"[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Downloads/nodebase-main/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
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
function composeRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
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
function useComposedRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
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
    Slot2.displayName = "".concat(ownerName, ".Slot");
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
    SlotClone.displayName = "".concat(ownerName, ".SlotClone");
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = (param)=>{
        let { children } = param;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = "".concat(ownerName, ".Slottable");
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
                overrideProps[propName] = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
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
    var _Object_getOwnPropertyDescriptor, _Object_getOwnPropertyDescriptor1;
    let getter = (_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(element.props, "ref")) === null || _Object_getOwnPropertyDescriptor === void 0 ? void 0 : _Object_getOwnPropertyDescriptor.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = (_Object_getOwnPropertyDescriptor1 = Object.getOwnPropertyDescriptor(element, "ref")) === null || _Object_getOwnPropertyDescriptor1 === void 0 ? void 0 : _Object_getOwnPropertyDescriptor1.get;
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
const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
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
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])("Primitive.".concat(node));
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
    Node.displayName = "Primitive.".concat(node);
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
"[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "Root",
    ()=>Root
]);
// src/label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            var _props_onMouseDown;
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            (_props_onMouseDown = props.onMouseDown) === null || _props_onMouseDown === void 0 ? void 0 : _props_onMouseDown.call(props, event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
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
            throw new Error("Invalid Base64 character: ".concat(char));
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
    encode (data) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const alphabet = getAlphabet(false);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        var _options_padding;
        return base64Encode(buffer, alphabet, (_options_padding = options.padding) !== null && _options_padding !== void 0 ? _options_padding : true);
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
    encode (data) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const alphabet = getAlphabet(true);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        var _options_padding;
        return base64Encode(buffer, alphabet, (_options_padding = options.padding) !== null && _options_padding !== void 0 ? _options_padding : true);
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
            if (!new RegExp("^[".concat(hexadecimal, "]+$")).test(data)) {
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
const createHMAC = function() {
    let algorithm = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "SHA-256", encoding = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
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
    decode: function(data) {
        let encoding = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "utf-8";
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
            throw new Error("Unsupported alphabet: ".concat(alphabet));
    }
}
function createRandomStringGenerator() {
    for(var _len = arguments.length, baseAlphabets = new Array(_len), _key = 0; _key < _len; _key++){
        baseAlphabets[_key] = arguments[_key];
    }
    const baseCharSet = baseAlphabets.map(expandAlphabet).join("");
    if (baseCharSet.length === 0) {
        throw new Error("No valid characters provided for random string generation.");
    }
    const baseCharSetLength = baseCharSet.length;
    return function(length) {
        for(var _len = arguments.length, alphabets = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            alphabets[_key - 1] = arguments[_key];
        }
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
            throw new Error("Invalid Base32 character: ".concat(char));
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
   */ encode (data) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const alphabet = getAlphabet(false);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        var _options_padding;
        return base32Encode(buffer, alphabet, (_options_padding = options.padding) !== null && _options_padding !== void 0 ? _options_padding : true);
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
   */ encode (data) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const alphabet = getAlphabet(true);
        const buffer = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
        var _options_padding;
        return base32Encode(buffer, alphabet, (_options_padding = options.padding) !== null && _options_padding !== void 0 ? _options_padding : true);
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
async function generateHOTP(secret, param) {
    let { counter, digits, hash = "SHA-1" } = param;
    const _digits = digits !== null && digits !== void 0 ? digits : defaultDigits;
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
    var _options_digits;
    const digits = (_options_digits = options === null || options === void 0 ? void 0 : options.digits) !== null && _options_digits !== void 0 ? _options_digits : defaultDigits;
    var _options_period;
    const period = (_options_period = options === null || options === void 0 ? void 0 : options.period) !== null && _options_period !== void 0 ? _options_period : defaultPeriod;
    const milliseconds = period * 1e3;
    const counter = Math.floor(Date.now() / milliseconds);
    return await generateHOTP(secret, {
        counter,
        digits,
        hash: options === null || options === void 0 ? void 0 : options.hash
    });
}
async function verifyTOTP(otp, param) {
    let { window = 1, digits = defaultDigits, secret, period = defaultPeriod } = param;
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
function generateQRCode(param) {
    let { issuer, account, secret, digits = defaultDigits, period = defaultPeriod } = param;
    const encodedIssuer = encodeURIComponent(issuer);
    const encodedAccountName = encodeURIComponent(account);
    const baseURI = "otpauth://totp/".concat(encodedIssuer, ":").concat(encodedAccountName);
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
    return "".concat(baseURI, "?").concat(params.toString());
}
const createOTP = (secret, opts)=>{
    var _opts_digits;
    const digits = (_opts_digits = opts === null || opts === void 0 ? void 0 : opts.digits) !== null && _opts_digits !== void 0 ? _opts_digits : defaultDigits;
    var _opts_period;
    const period = (_opts_period = opts === null || opts === void 0 ? void 0 : opts.period) !== null && _opts_period !== void 0 ? _opts_period : defaultPeriod;
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
function addRoute(ctx) {
    let method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", path = arguments.length > 2 ? arguments[2] : void 0, data = arguments.length > 3 ? arguments[3] : void 0;
    const segments = splitPath(path);
    let node = ctx.root;
    let _unnamedParamIndex = 0;
    const paramsMap = [];
    for(let i = 0; i < segments.length; i++){
        var _node_static;
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
                isOptional ? "_".concat(_unnamedParamIndex++) : _getParamMatcher(segment),
                isOptional
            ]);
            continue;
        }
        const child = (_node_static = node.static) === null || _node_static === void 0 ? void 0 : _node_static[segment];
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
    const regex = segment.replace(/:(\w+)/g, (_, id)=>"(?<".concat(id, ">\\w+)"));
    return new RegExp("^".concat(regex, "$"));
}
function findRoute(ctx) {
    let method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", path = arguments.length > 2 ? arguments[2] : void 0, opts = arguments.length > 3 ? arguments[3] : void 0;
    var _lookupTree1;
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
    const match = (_lookupTree1 = _lookupTree(ctx, ctx.root, method, segments, 0)) === null || _lookupTree1 === void 0 ? void 0 : _lookupTree1[0];
    if (match === void 0) {
        return;
    }
    if ((opts === null || opts === void 0 ? void 0 : opts.params) === false) {
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
                var _pMap_;
                const pMap = match[0].paramsMap;
                if (pMap === null || pMap === void 0 ? void 0 : (_pMap_ = pMap[(pMap === null || pMap === void 0 ? void 0 : pMap.length) - 1]) === null || _pMap_ === void 0 ? void 0 : _pMap_[2]) {
                    return match;
                }
            }
        }
        if (node.wildcard && node.wildcard.methods) {
            const match = node.wildcard.methods[method] || node.wildcard.methods[""];
            if (match) {
                var _pMap_1;
                const pMap = match[0].paramsMap;
                if (pMap === null || pMap === void 0 ? void 0 : (_pMap_1 = pMap[(pMap === null || pMap === void 0 ? void 0 : pMap.length) - 1]) === null || _pMap_1 === void 0 ? void 0 : _pMap_1[2]) {
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
    var _node_static;
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
    const childNode = (_node_static = node.static) === null || _node_static === void 0 ? void 0 : _node_static[segment];
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
function findAllRoutes(ctx) {
    let method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", path = arguments.length > 2 ? arguments[2] : void 0, opts = arguments.length > 3 ? arguments[3] : void 0;
    if (path[path.length - 1] === "/") {
        path = path.slice(0, -1);
    }
    const segments = splitPath(path);
    const matches = _findAll(ctx, ctx.root, method, segments, 0);
    if ((opts === null || opts === void 0 ? void 0 : opts.params) === false) {
        return matches;
    }
    return matches.map((m)=>{
        return {
            data: m.data,
            params: m.paramsMap ? getMatchParams(segments, m.paramsMap) : void 0
        };
    });
}
function _findAll(ctx, node, method, segments, index) {
    let matches = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [];
    var _node_static;
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
    const staticChild = (_node_static = node.static) === null || _node_static === void 0 ? void 0 : _node_static[segment];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
// src/crypto.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@better-auth/utils/dist/index.mjs [app-client] (ecmascript)");
// src/router.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/rou3/dist/index.mjs [app-client] (ecmascript)");
;
;
;
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
    var _hiddenStack = /*#__PURE__*/ new WeakMap();
    class HideStackFramesError extends Base {
        // use `getter` here to avoid the stack trace being captured by loggers
        get errorStack() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hiddenStack);
        }
        constructor(...args){
            if (isErrorStackTraceLimitWritable()) {
                const limit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hiddenStack, {
                    writable: true,
                    value: void 0
                });
                Error.stackTraceLimit = limit;
            } else {
                super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hiddenStack, {
                    writable: true,
                    value: void 0
                });
            }
            const stack = new Error().stack;
            if (stack) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hiddenStack, hideInternalStackFrames(stack.replace(/^Error/, this.name)));
            }
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
        var _body_message;
        super(body === null || body === void 0 ? void 0 : body.message, (body === null || body === void 0 ? void 0 : body.cause) ? {
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
            code: body === null || body === void 0 ? void 0 : (_body_message = body.message) === null || _body_message === void 0 ? void 0 : _body_message.toUpperCase().replace(/ /g, "_").replace(/[^A-Z0-9_]/g, ""),
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
    return error instanceof APIError || (error === null || error === void 0 ? void 0 : error.name) === "APIError";
}
function tryDecode(str) {
    try {
        return str.includes("%") ? decodeURIComponent(str) : str;
    } catch (e) {
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
                return "[Circular ref-".concat(seen.get(value), "]");
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
        if ((init === null || init === void 0 ? void 0 : init.headers) instanceof Headers) {
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
            ...routerResponse === null || routerResponse === void 0 ? void 0 : routerResponse.headers,
            ...data.headers,
            ...init === null || init === void 0 ? void 0 : init.headers,
            "Content-Type": "application/json"
        });
        var _data_status, _ref, _init_statusText;
        return new Response(JSON.stringify(body2), {
            ...routerResponse,
            headers: headers2,
            status: (_ref = (_data_status = data.status) !== null && _data_status !== void 0 ? _data_status : init === null || init === void 0 ? void 0 : init.status) !== null && _ref !== void 0 ? _ref : routerResponse === null || routerResponse === void 0 ? void 0 : routerResponse.status,
            statusText: (_init_statusText = init === null || init === void 0 ? void 0 : init.statusText) !== null && _init_statusText !== void 0 ? _init_statusText : routerResponse === null || routerResponse === void 0 ? void 0 : routerResponse.statusText
        });
    }
    if (isAPIError(data)) {
        var _init_status;
        return toResponse(data.body, {
            status: (_init_status = init === null || init === void 0 ? void 0 : init.status) !== null && _init_status !== void 0 ? _init_status : data.statusCode,
            statusText: data.status.toString(),
            headers: (init === null || init === void 0 ? void 0 : init.headers) || data.headers
        });
    }
    let body = data;
    let headers = new Headers(init === null || init === void 0 ? void 0 : init.headers);
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
async function runValidation(options) {
    let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
        message: "Invalid ".concat(validating, " parameters")
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
    value = "".concat(value, ".").concat(signature);
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
var _serialize = function(key, value) {
    let opt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let cookie;
    if ((opt === null || opt === void 0 ? void 0 : opt.prefix) === "secure") {
        cookie = "".concat("__Secure-".concat(key), "=").concat(value);
    } else if ((opt === null || opt === void 0 ? void 0 : opt.prefix) === "host") {
        cookie = "".concat("__Host-".concat(key), "=").concat(value);
    } else {
        cookie = "".concat(key, "=").concat(value);
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
        cookie += "; Max-Age=".concat(Math.floor(opt.maxAge));
    }
    if (opt.domain && opt.prefix !== "host") {
        cookie += "; Domain=".concat(opt.domain);
    }
    if (opt.path) {
        cookie += "; Path=".concat(opt.path);
    }
    if (opt.expires) {
        if (opt.expires.getTime() - Date.now() > 3456e7) {
            throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");
        }
        cookie += "; Expires=".concat(opt.expires.toUTCString());
    }
    if (opt.httpOnly) {
        cookie += "; HttpOnly";
    }
    if (opt.secure) {
        cookie += "; Secure";
    }
    if (opt.sameSite) {
        cookie += "; SameSite=".concat(opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1));
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
var createInternalContext = async (context, param)=>{
    let { options, path } = param;
    const headers = new Headers();
    const { data, error } = await runValidation(options, context);
    if (error) {
        throw new APIError(400, {
            message: error.message,
            code: "VALIDATION_ERROR"
        });
    }
    const requestHeaders = "headers" in context ? context.headers instanceof Headers ? context.headers : new Headers(context.headers) : "request" in context && context.request instanceof Request ? context.request.headers : null;
    const requestCookies = requestHeaders === null || requestHeaders === void 0 ? void 0 : requestHeaders.get("cookie");
    const parsedCookies = requestCookies ? parseCookies(requestCookies) : void 0;
    const internalContext = {
        ...context,
        body: data.body,
        query: data.query,
        path: context.path || path,
        context: "context" in context && context.context ? context.context : {},
        returned: void 0,
        headers: context === null || context === void 0 ? void 0 : context.headers,
        request: context === null || context === void 0 ? void 0 : context.request,
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
            return (parsedCookies === null || parsedCookies === void 0 ? void 0 : parsedCookies.get(finalKey)) || null;
        },
        getSignedCookie: async (key, secret, prefix)=>{
            const finalKey = getCookieKey(key, prefix);
            if (!finalKey) {
                return null;
            }
            const value = parsedCookies === null || parsedCookies === void 0 ? void 0 : parsedCookies.get(finalKey);
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
                body: (routerResponse === null || routerResponse === void 0 ? void 0 : routerResponse.body) || json,
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
                use: opts === null || opts === void 0 ? void 0 : opts.use
            }, optionsOrHandler);
        }
        if (!handler) {
            throw new Error("Middleware handler is required");
        }
        const middleware = createMiddleware({
            ...optionsOrHandler,
            method: "*",
            use: [
                ...(opts === null || opts === void 0 ? void 0 : opts.use) || [],
                ...optionsOrHandler.use || []
            ]
        }, handler);
        return middleware;
    }
    return fn;
};
// src/endpoint.ts
var createEndpoint2 = (path, options, handler)=>{
    const internalHandler = async function() {
        for(var _len = arguments.length, inputCtx = new Array(_len), _key = 0; _key < _len; _key++){
            inputCtx[_key] = arguments[_key];
        }
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
                ...(options === null || options === void 0 ? void 0 : options.use) || [],
                ...(opts === null || opts === void 0 ? void 0 : opts.use) || []
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
        var _inst__zod;
        Object.defineProperty(inst, "_zod", {
            value: (_inst__zod = inst._zod) !== null && _inst__zod !== void 0 ? _inst__zod : {},
            enumerable: false
        });
        var _traits;
        (_traits = (_a = inst._zod).traits) !== null && _traits !== void 0 ? _traits : _a.traits = /* @__PURE__ */ new Set();
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
    var _params_Parent;
    const Parent = (_params_Parent = params === null || params === void 0 ? void 0 : params.Parent) !== null && _params_Parent !== void 0 ? _params_Parent : Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name
    });
    function _(def) {
        var _a;
        const inst = (params === null || params === void 0 ? void 0 : params.Parent) ? new Definition() : this;
        init(inst, def);
        var _deferred;
        (_deferred = (_a = inst._zod).deferred) !== null && _deferred !== void 0 ? _deferred : _a.deferred = [];
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
            var _inst__zod_traits, _inst__zod;
            if ((params === null || params === void 0 ? void 0 : params.Parent) && inst instanceof params.Parent) return true;
            return inst === null || inst === void 0 ? void 0 : (_inst__zod = inst._zod) === null || _inst__zod === void 0 ? void 0 : (_inst__zod_traits = _inst__zod.traits) === null || _inst__zod_traits === void 0 ? void 0 : _inst__zod_traits.has(name);
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
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
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
    const values = Object.entries(entries).filter((param)=>{
        let [k, _] = param;
        return numericValues.indexOf(+k) === -1;
    }).map((param)=>{
        let [_, v] = param;
        return v;
    });
    return values;
}
function joinValues(array2) {
    let separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "|";
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
    return path.reduce((acc, key)=>acc === null || acc === void 0 ? void 0 : acc[key], obj);
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
function randomString() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
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
var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : function() {
    for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
        _args[_key] = arguments[_key];
    }
};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(()=>{
    var _navigator_userAgent, _navigator;
    if (typeof navigator !== "undefined" && ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_userAgent = _navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : _navigator_userAgent.includes("Cloudflare"))) {
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
            throw new Error("Unknown data type: ".concat(t));
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
    const cl = new inst._zod.constr(def !== null && def !== void 0 ? def : inst._zod.def);
    if (!def || (params === null || params === void 0 ? void 0 : params.parent)) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if ((params === null || params === void 0 ? void 0 : params.message) !== void 0) {
        if ((params === null || params === void 0 ? void 0 : params.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
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
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return '"'.concat(value, '"');
    return "".concat(value);
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
            throw new Error('Unrecognized key: "'.concat(key, '"'));
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
            throw new Error('Unrecognized key: "'.concat(key, '"'));
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
                throw new Error('Unrecognized key: "'.concat(key, '"'));
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
                throw new Error('Unrecognized key: "'.concat(key, '"'));
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
function aborted(x) {
    let startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    for(let i = startIndex; i < x.issues.length; i++){
        var _x_issues_i;
        if (((_x_issues_i = x.issues[i]) === null || _x_issues_i === void 0 ? void 0 : _x_issues_i.continue) !== true) return true;
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        var _path;
        (_path = (_a = iss).path) !== null && _path !== void 0 ? _path : _a.path = [];
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
}
function finalizeIssue(iss, ctx, config2) {
    var _iss_path;
    const full = {
        ...iss,
        path: (_iss_path = iss.path) !== null && _iss_path !== void 0 ? _iss_path : []
    };
    if (!iss.message) {
        var _iss_inst__zod_def_error, _iss_inst__zod_def, _iss_inst, _ctx_error, _config2_customError, _config2_localeError;
        var _unwrapMessage, _ref, _ref1, _ref2;
        const message = (_ref2 = (_ref1 = (_ref = (_unwrapMessage = unwrapMessage((_iss_inst = iss.inst) === null || _iss_inst === void 0 ? void 0 : (_iss_inst__zod_def = _iss_inst._zod.def) === null || _iss_inst__zod_def === void 0 ? void 0 : (_iss_inst__zod_def_error = _iss_inst__zod_def.error) === null || _iss_inst__zod_def_error === void 0 ? void 0 : _iss_inst__zod_def_error.call(_iss_inst__zod_def, iss))) !== null && _unwrapMessage !== void 0 ? _unwrapMessage : unwrapMessage(ctx === null || ctx === void 0 ? void 0 : (_ctx_error = ctx.error) === null || _ctx_error === void 0 ? void 0 : _ctx_error.call(ctx, iss))) !== null && _ref !== void 0 ? _ref : unwrapMessage((_config2_customError = config2.customError) === null || _config2_customError === void 0 ? void 0 : _config2_customError.call(config2, iss))) !== null && _ref1 !== void 0 ? _ref1 : unwrapMessage((_config2_localeError = config2.localeError) === null || _config2_localeError === void 0 ? void 0 : _config2_localeError.call(config2, iss))) !== null && _ref2 !== void 0 ? _ref2 : "Invalid input";
        full.message = message;
    }
    delete full.inst;
    delete full.continue;
    if (!(ctx === null || ctx === void 0 ? void 0 : ctx.reportInput)) {
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
function issue() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
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
    return Object.entries(obj).filter((param)=>{
        let [k, _] = param;
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
function flattenError(error) {
    let mapper = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (issue2)=>issue2.message;
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
            var _params_Err;
            const e = new ((_params_Err = _params === null || _params === void 0 ? void 0 : _params.Err) !== null && _params_Err !== void 0 ? _params_Err : _Err)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, _params === null || _params === void 0 ? void 0 : _params.callee);
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
            var _params_Err;
            const e = new ((_params_Err = params === null || params === void 0 ? void 0 : params.Err) !== null && _params_Err !== void 0 ? _params_Err : _Err)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())));
            captureStackTrace(e, params === null || params === void 0 ? void 0 : params.callee);
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
            error: new (_Err !== null && _Err !== void 0 ? _Err : $ZodError)(result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
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
    var _inst__zod;
    (_inst__zod = inst._zod) !== null && _inst__zod !== void 0 ? _inst__zod : inst._zod = {};
    inst._zod.def = def;
    var _onattach;
    (_onattach = (_a = inst._zod).onattach) !== null && _onattach !== void 0 ? _onattach : _a.onattach = [];
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    };
    inst._zod.onattach.push((inst2)=>{
        var _inst2__zod_bag_maximum;
        const curr = (_inst2__zod_bag_maximum = inst2._zod.bag.maximum) !== null && _inst2__zod_bag_maximum !== void 0 ? _inst2__zod_bag_maximum : Number.POSITIVE_INFINITY;
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
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    };
    inst._zod.onattach.push((inst2)=>{
        var _inst2__zod_bag_minimum;
        const curr = (_inst2__zod_bag_minimum = inst2._zod.bag.minimum) !== null && _inst2__zod_bag_minimum !== void 0 ? _inst2__zod_bag_minimum : Number.NEGATIVE_INFINITY;
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
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    };
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
        var _this, _this1;
        const F = Function;
        const args = (_this = this) === null || _this === void 0 ? void 0 : _this.args;
        var _this_content;
        const content = (_this_content = (_this1 = this) === null || _this1 === void 0 ? void 0 : _this1.content) !== null && _this_content !== void 0 ? _this_content : [
            ""
        ];
        const lines = [
            ...content.map((x)=>"  ".concat(x))
        ];
        return new F(...args, lines.join("\n"));
    }
    constructor(args = []){
        this.content = [];
        this.indent = 0;
        if (this) this.args = args;
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
    inst !== null && inst !== void 0 ? inst : inst = {};
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version;
    var _inst__zod_def_checks;
    const checks = [
        ...(_inst__zod_def_checks = inst._zod.def.checks) !== null && _inst__zod_def_checks !== void 0 ? _inst__zod_def_checks : []
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
        var _inst__zod_deferred;
        var _deferred;
        (_deferred = (_a = inst._zod).deferred) !== null && _deferred !== void 0 ? _deferred : _a.deferred = [];
        (_inst__zod_deferred = inst._zod.deferred) === null || _inst__zod_deferred === void 0 ? void 0 : _inst__zod_deferred.push(()=>{
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
                if (_ instanceof Promise && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false) {
                    throw new $ZodAsyncError();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult !== null && asyncResult !== void 0 ? asyncResult : Promise.resolve()).then(async ()=>{
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
                var _r_error;
                const r = safeParse(inst, value);
                return r.success ? {
                    value: r.data
                } : {
                    issues: (_r_error = r.error) === null || _r_error === void 0 ? void 0 : _r_error.issues
                };
            } catch (_) {
                return safeParseAsync(inst, value).then((r)=>{
                    var _r_error;
                    return r.success ? {
                        value: r.data
                    } : {
                        issues: (_r_error = r.error) === null || _r_error === void 0 ? void 0 : _r_error.issues
                    };
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
                throw new Error('Invalid element at key "'.concat(k, '": expected a Zod schema'));
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
                var _propValues_key;
                (_propValues_key = propValues[key]) !== null && _propValues_key !== void 0 ? _propValues_key : propValues[key] = /* @__PURE__ */ new Set();
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
            return "shape[".concat(k, "]._zod.run({ value: input[").concat(k, "], issues: [] }, ctx)");
        };
        doc.write("const input = payload.value;");
        const ids = /* @__PURE__ */ Object.create(null);
        let counter = 0;
        for (const key of normalized.keys){
            ids[key] = "key_".concat(counter++);
        }
        doc.write("const newResult = {}");
        for (const key of normalized.keys){
            if (normalized.optionalKeys.has(key)) {
                const id = ids[key];
                doc.write("const ".concat(id, " = ").concat(parseStr(key), ";"));
                const k = esc(key);
                doc.write("\n        if (".concat(id, ".issues.length) {\n          if (input[").concat(k, "] === undefined) {\n            if (").concat(k, " in input) {\n              newResult[").concat(k, "] = undefined;\n            }\n          } else {\n            payload.issues = payload.issues.concat(\n              ").concat(id, ".issues.map((iss) => ({\n                ...iss,\n                path: iss.path ? [").concat(k, ", ...iss.path] : [").concat(k, "],\n              }))\n            );\n          }\n        } else if (").concat(id, ".value === undefined) {\n          if (").concat(k, " in input) newResult[").concat(k, "] = undefined;\n        } else {\n          newResult[").concat(k, "] = ").concat(id, ".value;\n        }\n        "));
            } else {
                const id = ids[key];
                doc.write("const ".concat(id, " = ").concat(parseStr(key), ";"));
                doc.write("\n          if (".concat(id, ".issues.length) payload.issues = payload.issues.concat(").concat(id, ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [").concat(esc(key), ", ...iss.path] : [").concat(esc(key), "]\n          })));"));
                doc.write("newResult[".concat(esc(key), "] = ").concat(id, ".value"));
            }
        }
        doc.write("payload.value = newResult;");
        doc.write("return payload;");
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
        value !== null && value !== void 0 ? value : value = _normalized.value;
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
        if (jit && fastEnabled && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false && ctx.jitless !== true) {
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
            return new RegExp("^(".concat(patterns.map((p)=>cleanRegex(p.source)).join("|"), ")$"));
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
            ]).then((param)=>{
                let [left2, right2] = param;
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
        throw new Error("Unmergable intersection. Error path: ".concat(JSON.stringify(merged.mergeErrorPath)));
    }
    result.value = merged.data;
    return result;
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def)=>{
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    inst._zod.values = new Set(values);
    inst._zod.pattern = new RegExp("^(".concat(values.filter((k)=>propertyKeyTypes.has(typeof k)).map((o)=>typeof o === "string" ? escapeRegex(o) : o.toString()).join("|"), ")$"));
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
        return pattern ? new RegExp("^(".concat(cleanRegex(pattern.source), ")?$")) : void 0;
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
        return pattern ? new RegExp("^(".concat(cleanRegex(pattern.source), "|null)$")) : void 0;
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
        var _inst__zod_def_path;
        const _iss = {
            code: "custom",
            input,
            inst,
            // incorporates params.error into issue reporting
            path: [
                ...(_inst__zod_def_path = inst._zod.def.path) !== null && _inst__zod_def_path !== void 0 ? _inst__zod_def_path : []
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
    add(schema) {
        for(var _len = arguments.length, _meta = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            _meta[_key - 1] = arguments[_key];
        }
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            if (this._idmap.has(meta.id)) {
                throw new Error("ID ".concat(meta.id, " already exists in the registry"));
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
            var _this_get;
            const pm = {
                ...(_this_get = this.get(p)) !== null && _this_get !== void 0 ? _this_get : {}
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
    constructor(){
        this._map = /* @__PURE__ */ new Map();
        this._idmap = /* @__PURE__ */ new Map();
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
    inst.check = function() {
        for(var _len = arguments.length, checks = new Array(_len), _key = 0; _key < _len; _key++){
            checks[_key] = arguments[_key];
        }
        var _def_checks;
        return inst.clone({
            ...def,
            checks: [
                ...(_def_checks = def.checks) !== null && _def_checks !== void 0 ? _def_checks : [],
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
            var _globalRegistry_get;
            return (_globalRegistry_get = globalRegistry.get(inst)) === null || _globalRegistry_get === void 0 ? void 0 : _globalRegistry_get.description;
        },
        configurable: true
    });
    inst.meta = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
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
    inst.partial = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return util_exports.partial(ZodOptional, inst, args[0]);
    };
    inst.required = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return util_exports.required(ZodNonOptional, inst, args[0]);
    };
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
            } else throw new Error("Key ".concat(value, " not found in enum"));
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
            } else throw new Error("Key ".concat(value, " not found in enum"));
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
                var _issue_code;
                (_issue_code = _issue.code) !== null && _issue_code !== void 0 ? _issue_code : _issue.code = "custom";
                var _issue_input;
                (_issue_input = _issue.input) !== null && _issue_input !== void 0 ? _issue_input : _issue.input = payload.value;
                var _issue_inst;
                (_issue_inst = _issue.inst) !== null && _issue_inst !== void 0 ? _issue_inst : _issue.inst = inst;
                var _issue_continue;
                (_issue_continue = _issue.continue) !== null && _issue_continue !== void 0 ? _issue_continue : _issue.continue = true;
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
function refine(fn) {
    let _params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
                var _issue_code;
                (_issue_code = _issue.code) !== null && _issue_code !== void 0 ? _issue_code : _issue.code = "custom";
                var _issue_input;
                (_issue_input = _issue.input) !== null && _issue_input !== void 0 ? _issue_input : _issue.input = payload.value;
                var _issue_inst;
                (_issue_inst = _issue.inst) !== null && _issue_inst !== void 0 ? _issue_inst : _issue.inst = ch;
                var _issue_continue;
                (_issue_continue = _issue.continue) !== null && _issue_continue !== void 0 ? _issue_continue : _issue.continue = !ch._zod.def.abort;
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
    var _options_metadata_openapi, _options_metadata;
    const parameters = [];
    if ((_options_metadata = options.metadata) === null || _options_metadata === void 0 ? void 0 : (_options_metadata_openapi = _options_metadata.openapi) === null || _options_metadata_openapi === void 0 ? void 0 : _options_metadata_openapi.parameters) {
        parameters.push(...options.metadata.openapi.parameters);
        return parameters;
    }
    if (options.query instanceof ZodObject) {
        Object.entries(options.query.shape).forEach((param)=>{
            let [key, value] = param;
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
    var _options_metadata_openapi, _options_metadata;
    if ((_options_metadata = options.metadata) === null || _options_metadata === void 0 ? void 0 : (_options_metadata_openapi = _options_metadata.openapi) === null || _options_metadata_openapi === void 0 ? void 0 : _options_metadata_openapi.requestBody) {
        return options.metadata.openapi.requestBody;
    }
    if (!options.body) return void 0;
    if (options.body instanceof ZodObject || options.body instanceof ZodOptional) {
        const shape = options.body.shape;
        if (!shape) return void 0;
        const properties = {};
        const required2 = [];
        Object.entries(shape).forEach((param)=>{
            let [key, value] = param;
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
    Object.entries(endpoints).forEach((param)=>{
        let [_, value] = param;
        var _options_metadata;
        const options = value.options;
        if ((_options_metadata = options.metadata) === null || _options_metadata === void 0 ? void 0 : _options_metadata.SERVER_ONLY) return;
        if (options.method === "GET") {
            var _options_metadata_openapi, _options_metadata1, _options_metadata_openapi1, _options_metadata2, _options_metadata_openapi2, _options_metadata3, _options_metadata_openapi3, _options_metadata4;
            paths[value.path] = {
                get: {
                    tags: [
                        "Default",
                        ...((_options_metadata1 = options.metadata) === null || _options_metadata1 === void 0 ? void 0 : (_options_metadata_openapi = _options_metadata1.openapi) === null || _options_metadata_openapi === void 0 ? void 0 : _options_metadata_openapi.tags) || []
                    ],
                    description: (_options_metadata2 = options.metadata) === null || _options_metadata2 === void 0 ? void 0 : (_options_metadata_openapi1 = _options_metadata2.openapi) === null || _options_metadata_openapi1 === void 0 ? void 0 : _options_metadata_openapi1.description,
                    operationId: (_options_metadata3 = options.metadata) === null || _options_metadata3 === void 0 ? void 0 : (_options_metadata_openapi2 = _options_metadata3.openapi) === null || _options_metadata_openapi2 === void 0 ? void 0 : _options_metadata_openapi2.operationId,
                    security: [
                        {
                            bearerAuth: []
                        }
                    ],
                    parameters: getParameters(options),
                    responses: getResponse((_options_metadata4 = options.metadata) === null || _options_metadata4 === void 0 ? void 0 : (_options_metadata_openapi3 = _options_metadata4.openapi) === null || _options_metadata_openapi3 === void 0 ? void 0 : _options_metadata_openapi3.responses)
                }
            };
        }
        if (options.method === "POST") {
            var _options_metadata_openapi4, _options_metadata5, _options_metadata_openapi5, _options_metadata6, _options_metadata_openapi6, _options_metadata7, _options_metadata_openapi7, _options_metadata8;
            const body = getRequestBody(options);
            paths[value.path] = {
                post: {
                    tags: [
                        "Default",
                        ...((_options_metadata5 = options.metadata) === null || _options_metadata5 === void 0 ? void 0 : (_options_metadata_openapi4 = _options_metadata5.openapi) === null || _options_metadata_openapi4 === void 0 ? void 0 : _options_metadata_openapi4.tags) || []
                    ],
                    description: (_options_metadata6 = options.metadata) === null || _options_metadata6 === void 0 ? void 0 : (_options_metadata_openapi5 = _options_metadata6.openapi) === null || _options_metadata_openapi5 === void 0 ? void 0 : _options_metadata_openapi5.description,
                    operationId: (_options_metadata7 = options.metadata) === null || _options_metadata7 === void 0 ? void 0 : (_options_metadata_openapi6 = _options_metadata7.openapi) === null || _options_metadata_openapi6 === void 0 ? void 0 : _options_metadata_openapi6.operationId,
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
                    responses: getResponse((_options_metadata8 = options.metadata) === null || _options_metadata8 === void 0 ? void 0 : (_options_metadata_openapi7 = _options_metadata8.openapi) === null || _options_metadata_openapi7 === void 0 ? void 0 : _options_metadata_openapi7.responses)
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
                url: config2 === null || config2 === void 0 ? void 0 : config2.url
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
var getHTML = (apiReference, config2)=>'<!doctype html>\n<html>\n  <head>\n    <title>Scalar API Reference</title>\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1" />\n  </head>\n  <body>\n    <script\n      id="api-reference"\n      type="application/json">\n    '.concat(JSON.stringify(apiReference), "\n    </script>\n	 <script>\n      var configuration = {\n	  	favicon: ").concat((config2 === null || config2 === void 0 ? void 0 : config2.logo) ? "data:image/svg+xml;utf8,".concat(encodeURIComponent(config2.logo)) : void 0, " ,\n	   	theme: ").concat((config2 === null || config2 === void 0 ? void 0 : config2.theme) || "saturn", ",\n        metaData: {\n			title: ").concat((config2 === null || config2 === void 0 ? void 0 : config2.title) || "Open API Reference", ",\n			description: ").concat((config2 === null || config2 === void 0 ? void 0 : config2.description) || "Better Call Open API", ",\n		}\n      }\n      document.getElementById('api-reference').dataset.configuration =\n        JSON.stringify(configuration)\n    </script>\n	  <script src=\"https://cdn.jsdelivr.net/npm/@scalar/api-reference\"></script>\n  </body>\n</html>");
// src/router.ts
var createRouter = (endpoints, config2)=>{
    var _config2_openapi, _config2_routerMiddleware;
    if (!(config2 === null || config2 === void 0 ? void 0 : (_config2_openapi = config2.openapi) === null || _config2_openapi === void 0 ? void 0 : _config2_openapi.disabled)) {
        const openapi = {
            path: "/api/reference",
            ...config2 === null || config2 === void 0 ? void 0 : config2.openapi
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
        var _endpoint_options_metadata, _endpoint_options, _endpoint_options1, _endpoint_options2;
        if (!endpoint.options) {
            continue;
        }
        if ((_endpoint_options = endpoint.options) === null || _endpoint_options === void 0 ? void 0 : (_endpoint_options_metadata = _endpoint_options.metadata) === null || _endpoint_options_metadata === void 0 ? void 0 : _endpoint_options_metadata.SERVER_ONLY) continue;
        const methods = Array.isArray((_endpoint_options1 = endpoint.options) === null || _endpoint_options1 === void 0 ? void 0 : _endpoint_options1.method) ? endpoint.options.method : [
            (_endpoint_options2 = endpoint.options) === null || _endpoint_options2 === void 0 ? void 0 : _endpoint_options2.method
        ];
        for (const method of methods){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRoute"])(router, method, endpoint.path, endpoint);
        }
    }
    if (config2 === null || config2 === void 0 ? void 0 : (_config2_routerMiddleware = config2.routerMiddleware) === null || _config2_routerMiddleware === void 0 ? void 0 : _config2_routerMiddleware.length) {
        for (const { path, middleware } of config2.routerMiddleware){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRoute"])(middlewareRouter, "*", path, middleware);
        }
    }
    const processRequest = async (request)=>{
        const url = new URL(request.url);
        const path = (config2 === null || config2 === void 0 ? void 0 : config2.basePath) ? url.pathname.split(config2.basePath).reduce((acc, curr, index)=>{
            if (index !== 0) {
                if (index > 1) {
                    acc.push("".concat(config2.basePath).concat(curr));
                } else {
                    acc.push(curr);
                }
            }
            return acc;
        }, []).join("") : url.pathname;
        if (!(path === null || path === void 0 ? void 0 : path.length)) {
            return new Response(null, {
                status: 404,
                statusText: "Not Found"
            });
        }
        const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findRoute"])(router, request.method, path);
        if (!(route === null || route === void 0 ? void 0 : route.data)) {
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
            context: config2 === null || config2 === void 0 ? void 0 : config2.routerContext
        };
        try {
            const middlewareRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$rou3$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllRoutes"])(middlewareRouter, "*", path);
            if (middlewareRoutes === null || middlewareRoutes === void 0 ? void 0 : middlewareRoutes.length) {
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
            if (config2 === null || config2 === void 0 ? void 0 : config2.onError) {
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
            if (config2 === null || config2 === void 0 ? void 0 : config2.throwError) {
                throw error;
            }
            if (isAPIError(error)) {
                return toResponse(error);
            }
            console.error("# SERVER_ERROR: ", error);
            return new Response(null, {
                status: 500,
                statusText: "Internal Server Error"
            });
        }
    };
    return {
        handler: async (request)=>{
            var _config2_onRequest, _config2_onResponse;
            const onReq = await (config2 === null || config2 === void 0 ? void 0 : (_config2_onRequest = config2.onRequest) === null || _config2_onRequest === void 0 ? void 0 : _config2_onRequest.call(config2, request));
            if (onReq instanceof Response) {
                return onReq;
            }
            const req = onReq instanceof Request ? onReq : request;
            const res = await processRequest(req);
            const onRes = await (config2 === null || config2 === void 0 ? void 0 : (_config2_onResponse = config2.onResponse) === null || _config2_onResponse === void 0 ? void 0 : _config2_onResponse.call(config2, res));
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
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay() {
        return this.options.delay;
    }
    constructor(options){
        this.options = options;
    }
};
var ExponentialRetryStrategy = class {
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
    constructor(options){
        this.options = options;
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
            headers["authorization"] = "Bearer ".concat(token);
        } else if (options.auth.type === "Basic") {
            const username = getValue(options.auth.username);
            const password = getValue(options.auth.password);
            if (!username || !password) {
                return headers;
            }
            headers["authorization"] = "Basic ".concat(btoa("".concat(username, ":").concat(password)));
        } else if (options.auth.type === "Custom") {
            const value = getValue(options.auth.value);
            if (!value) {
                return headers;
            }
            headers["authorization"] = "".concat(getValue(options.auth.prefix), " ").concat(value);
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
            url = url.replace("@".concat(m, "/"), "/");
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
                throw TypeError("Invalid URL ".concat(url, ". Are you passing in a relative url but not setting the baseURL?"));
            }
            throw TypeError("Invalid URL ".concat(url, ". Please validate that you are passing the correct input."));
        }
        throw e;
    }
    if (options == null ? void 0 : options.params) {
        if (Array.isArray(options == null ? void 0 : options.params)) {
            const params = (options == null ? void 0 : options.params) ? Array.isArray(options.params) ? "/".concat(options.params.join("/")) : "/".concat(Object.values(options.params).join("/")) : "";
            _url = _url.toString().split("/:")[0];
            _url = "".concat(_url.toString()).concat(params);
        } else {
            for (const [key, value] of Object.entries(options == null ? void 0 : options.params)){
                _url = _url.toString().replace(":".concat(key), String(value));
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
            url = url.replace("@".concat(m, "/"), "/");
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
                path = path.replace(":".concat(key), String(value));
            }
        }
    }
    path = path.split("/").map(encodeURIComponent).join("/");
    if (path.startsWith("/")) path = path.slice(1);
    let queryParamString = queryParams.toString();
    queryParamString = queryParamString.length > 0 ? "?".concat(queryParamString).replace(/\+/g, "%20") : "";
    if (!basePath.startsWith("http")) {
        return "".concat(basePath).concat(path).concat(queryParamString);
    }
    const _url = new URL("".concat(path).concat(queryParamString), basePath);
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
function _defu(baseObject, defaults) {
    let namespace = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".", merger = arguments.length > 3 ? arguments[3] : void 0;
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
            object[key] = _defu(value, object[key], (namespace ? "".concat(namespace, ".") : "") + key.toString(), merger);
        } else {
            object[key] = value;
        }
    }
    return object;
}
function createDefu(merger) {
    return function() {
        for(var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++){
            arguments_[_key] = arguments[_key];
        }
        return(// eslint-disable-next-line unicorn/no-array-reduce
        arguments_.reduce((p, c)=>_defu(p, c, "", merger), {}));
    };
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
    if (typeof b !== 'boolean') throw new Error("boolean expected, not ".concat(b));
}
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function abytes(value, length) {
    let title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
    const bytes = isBytes(value);
    const len = value === null || value === void 0 ? void 0 : value.length;
    const needsLen = length !== undefined;
    if (!bytes || needsLen && len !== length) {
        const prefix = title && '"'.concat(title, '" ');
        const ofLen = needsLen ? " of length ".concat(length) : '';
        const got = bytes ? "length=".concat(len) : "type=".concat(typeof value);
        throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
    }
    return value;
}
function aexists(instance) {
    let checkFinished = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
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
function clean() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
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
function concatBytes() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
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
    function wrappedCipher(key) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
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
function getOutput(expectedLength, out) {
    let onlyAligned = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
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
function randomBytes() {
    let bytesLength = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof (cr === null || cr === void 0 ? void 0 : cr.getRandomValues) !== 'function') throw new Error('crypto.getRandomValues must be defined');
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
function managedNonce(fn) {
    let randomBytes_ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : randomBytes;
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
    return function(key) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return {
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
        };
    };
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-client] (ecmascript)");
;
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
    return function(key, nonce, data, output) {
        let counter = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(key, undefined, 'key');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(nonce, undefined, 'nonce');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(data, undefined, 'data');
        const len = data.length;
        if (output === undefined) output = new Uint8Array(len);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abytes"])(output, undefined, 'output');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anumber"])(counter);
        if (counter < 0 || counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        if (output.length < len) throw new Error("arx: output (".concat(output.length, ") is shorter than data (").concat(len, ")"));
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
            if (nonce.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
            extendNonceFn(sigma, k32, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(nonce.subarray(0, 16)), k32);
            nonce = nonce.subarray(16);
        }
        // Handle nonce counter
        const nonceNcLen = 16 - counterLength;
        if (nonceNcLen !== nonce.length) throw new Error("arx: nonce must be ".concat(nonceNcLen, " or 16 bytes"));
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
    constructor(cipher, blockLen, keyLen, nonceLen, seed){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockLen", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "keyLen", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "nonceLen", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "state", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "buf", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "key", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "nonce", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pos", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "ctr", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cipher", void 0);
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
}
const createPRG = (cipher, blockLen, keyLen, nonceLen)=>{
    return function() {
        let seed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(32);
        return new _XorStreamPRG(cipher, blockLen, keyLen, nonceLen, seed);
    };
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@noble/ciphers/utils.js [app-client] (ecmascript)");
;
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
    process(data, offset) {
        let isLast = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
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
    // Can be speed-up using BigUint64Array, at the cost of complexity
    constructor(key){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockLen", 16);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputLen", 16);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "buffer", new Uint8Array(16));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "r", new Uint16Array(10)); // Allocating 1 array with .subarray() here is slower than 3
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "h", new Uint16Array(10));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pad", new Uint16Array(8));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pos", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "finished", false);
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
/** single round */ function chachaRound(x) {
    let rounds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20;
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
function chacha(s, k, i, out) {
    let isHChacha = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, rounds = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 20;
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
function chachaCore(s, k, n, out, cnt) {
    let rounds = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 20;
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
"[project]/Downloads/nodebase-main/node_modules/@polar-sh/checkout/dist/embed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarEmbedCheckout",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nodebase-main/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
var e = "POLAR_CHECKOUT", t = class t {
    static postMessage(t, n) {
        window.parent.postMessage({
            ...t,
            type: e
        }, n);
    }
    static async create(e, n) {
        const s = document.createElement("style");
        s.innerText = "\n      .polar-loader-spinner {\n        width: 20px;\n        aspect-ratio: 1;\n        border-radius: 50%;\n        background: ".concat("dark" === n ? "#000" : "#fff", ";\n        box-shadow: 0 0 0 0 ").concat("dark" === n ? "#fff" : "#000", ";\n        animation: polar-loader-spinner-animation 1s infinite;\n      }\n      @keyframes polar-loader-spinner-animation {\n        100% {box-shadow: 0 0 0 30px #0000}\n      }\n      body.polar-no-scroll {\n        overflow: hidden;\n      }\n    "), document.head.appendChild(s);
        const o = document.createElement("div");
        o.style.position = "absolute", o.style.top = "50%", o.style.left = "50%", o.style.transform = "translate(-50%, -50%)", o.style.zIndex = "2147483647", o.style.colorScheme = "auto";
        const a = document.createElement("div");
        a.className = "polar-loader-spinner", o.appendChild(a), document.body.classList.add("polar-no-scroll"), document.body.appendChild(o);
        const i = new URL(e);
        i.searchParams.set("embed", "true"), i.searchParams.set("embed_origin", window.location.origin), n && i.searchParams.set("theme", n);
        const r = i.toString(), d = document.createElement("iframe");
        d.src = r, d.style.position = "fixed", d.style.top = "0", d.style.left = "0", d.style.width = "100%", d.style.height = "100%", d.style.border = "none", d.style.zIndex = "2147483647", d.style.backgroundColor = "rgba(0, 0, 0, 0.5)", d.style.colorScheme = "auto";
        const l = "https://polar.sh,https://sandbox.polar.sh".split(",").join(" ");
        d.allow = "payment 'self' ".concat(l, "; publickey-credentials-get 'self' ").concat(l, ";"), document.body.appendChild(d);
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
        window.addEventListener("message", (param)=>{
            let { data: t, origin: n } = param;
            "https://polar.sh,https://sandbox.polar.sh".split(",").includes(n) && t.type === e && this.eventTarget.dispatchEvent(new CustomEvent(t.event, {
                detail: t,
                cancelable: !0
            }));
        });
    }
    constructor(e, t){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "iframe", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "loader", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "loaded", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "closable", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "eventTarget", void 0);
        this.iframe = e, this.loader = t, this.loaded = !1, this.closable = !0, this.eventTarget = new EventTarget, this.initWindowListener(), this.addEventListener("loaded", this.loadedListener.bind(this)), this.addEventListener("close", this.closeListener.bind(this)), this.addEventListener("confirmed", this.confirmedListener.bind(this)), this.addEventListener("success", this.successListener.bind(this));
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
function assert(expr) {
    let msg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
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
        const toSign = encoder.encode("".concat(msgId, ".").concat(timestampNumber, ".").concat(payload));
        const expectedSignature = base64.encode(sha256.hmac(this.key, toSign));
        return "v1,".concat(expectedSignature);
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
                        message: "Polar customer creation failed. Error: ".concat(e.message)
                    });
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: "Polar customer creation failed. Error: ".concat(e)
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
                        message: "Polar customer creation failed. Error: ".concat(e.message)
                    });
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: "Polar customer creation failed. Error: ".concat(e)
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
                    context.context.logger.error("Polar customer update failed. Error: ".concat(e.message));
                } else {
                    context.context.logger.error("Polar customer update failed. Error: ".concat(e));
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
                    var _searchParams_get;
                    const theme = (_searchParams_get = new URL(checkout2.url).searchParams.get("theme")) !== null && _searchParams_get !== void 0 ? _searchParams_get : "light";
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
var portal = function() {
    let { returnUrl } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (polar2)=>{
        const retUrl = returnUrl ? new URL(returnUrl) : void 0;
        return {
            portal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/customer/portal", {
                method: "GET",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sessionMiddleware$3e$__["sessionMiddleware"]
                ]
            }, async (ctx)=>{
                var _ctx_context_session;
                if (!((_ctx_context_session = ctx.context.session) === null || _ctx_context_session === void 0 ? void 0 : _ctx_context_session.user.id)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                console.log(retUrl ? decodeURI(retUrl.toString()) : void 0);
                try {
                    var _ctx_context_session1;
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: (_ctx_context_session1 = ctx.context.session) === null || _ctx_context_session1 === void 0 ? void 0 : _ctx_context_session1.user.id,
                        returnUrl: retUrl ? decodeURI(retUrl.toString()) : void 0
                    });
                    return ctx.json({
                        url: customerSession.customerPortalUrl,
                        redirect: true
                    });
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar customer portal creation failed. Error: ".concat(e.message));
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
                    var _ctx_context_session;
                    const state = await polar2.customers.getStateExternal({
                        externalId: (_ctx_context_session = ctx.context.session) === null || _ctx_context_session === void 0 ? void 0 : _ctx_context_session.user.id
                    });
                    return ctx.json(state);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar subscriptions list failed. Error: ".concat(e.message));
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
                    var _ctx_context_session, _ctx_query, _ctx_query1;
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: (_ctx_context_session = ctx.context.session) === null || _ctx_context_session === void 0 ? void 0 : _ctx_context_session.user.id
                    });
                    const benefits = await polar2.customerPortal.benefitGrants.list({
                        customerSession: customerSession.token
                    }, {
                        page: (_ctx_query = ctx.query) === null || _ctx_query === void 0 ? void 0 : _ctx_query.page,
                        limit: (_ctx_query1 = ctx.query) === null || _ctx_query1 === void 0 ? void 0 : _ctx_query1.limit
                    });
                    return ctx.json(benefits);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar benefits list failed. Error: ".concat(e.message));
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
                var _ctx_query;
                if (!ctx.context.session.user.id) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "User not found"
                    });
                }
                if ((_ctx_query = ctx.query) === null || _ctx_query === void 0 ? void 0 : _ctx_query.referenceId) {
                    try {
                        var _ctx_query1, _ctx_query2, _ctx_query3, _ctx_query4;
                        const subscriptions = await polar2.subscriptions.list({
                            page: (_ctx_query1 = ctx.query) === null || _ctx_query1 === void 0 ? void 0 : _ctx_query1.page,
                            limit: (_ctx_query2 = ctx.query) === null || _ctx_query2 === void 0 ? void 0 : _ctx_query2.limit,
                            active: (_ctx_query3 = ctx.query) === null || _ctx_query3 === void 0 ? void 0 : _ctx_query3.active,
                            metadata: {
                                referenceId: (_ctx_query4 = ctx.query) === null || _ctx_query4 === void 0 ? void 0 : _ctx_query4.referenceId
                            }
                        });
                        return ctx.json(subscriptions);
                    } catch (e) {
                        console.log(e);
                        if (e instanceof Error) {
                            ctx.context.logger.error("Polar subscriptions list with referenceId failed. Error: ".concat(e.message));
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                            message: "Subscriptions list with referenceId failed"
                        });
                    }
                }
                try {
                    var _ctx_context_session, _ctx_query5, _ctx_query6, _ctx_query7;
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: (_ctx_context_session = ctx.context.session) === null || _ctx_context_session === void 0 ? void 0 : _ctx_context_session.user.id
                    });
                    const subscriptions = await polar2.customerPortal.subscriptions.list({
                        customerSession: customerSession.token
                    }, {
                        page: (_ctx_query5 = ctx.query) === null || _ctx_query5 === void 0 ? void 0 : _ctx_query5.page,
                        limit: (_ctx_query6 = ctx.query) === null || _ctx_query6 === void 0 ? void 0 : _ctx_query6.limit,
                        active: (_ctx_query7 = ctx.query) === null || _ctx_query7 === void 0 ? void 0 : _ctx_query7.active
                    });
                    return ctx.json(subscriptions);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar subscriptions list failed. Error: ".concat(e.message));
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
                    var _ctx_context_session, _ctx_query, _ctx_query1, _ctx_query2;
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: (_ctx_context_session = ctx.context.session) === null || _ctx_context_session === void 0 ? void 0 : _ctx_context_session.user.id
                    });
                    const orders = await polar2.customerPortal.orders.list({
                        customerSession: customerSession.token
                    }, {
                        page: (_ctx_query = ctx.query) === null || _ctx_query === void 0 ? void 0 : _ctx_query.page,
                        limit: (_ctx_query1 = ctx.query) === null || _ctx_query1 === void 0 ? void 0 : _ctx_query1.limit,
                        productBillingType: (_ctx_query2 = ctx.query) === null || _ctx_query2 === void 0 ? void 0 : _ctx_query2.productBillingType
                    });
                    return ctx.json(orders);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar orders list failed. Error: ".concat(e.message));
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Orders list failed"
                    });
                }
            })
        };
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
var checkout = function() {
    let checkoutOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (polar2)=>{
        return {
            checkout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/checkout", {
                method: "POST",
                body: CheckoutParams
            }, async (ctx)=>{
                const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DEBtROF9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__getSessionFromCtx$3e$__["getSessionFromCtx"])(ctx);
                let productIds = [];
                if (ctx.body.slug) {
                    var _resolvedProducts_find;
                    const resolvedProducts = await (typeof checkoutOptions.products === "function" ? checkoutOptions.products() : checkoutOptions.products);
                    const productId = resolvedProducts === null || resolvedProducts === void 0 ? void 0 : (_resolvedProducts_find = resolvedProducts.find((product)=>product.slug === ctx.body.slug)) === null || _resolvedProducts_find === void 0 ? void 0 : _resolvedProducts_find.productId;
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
                if (checkoutOptions.authenticatedUsersOnly && !(session === null || session === void 0 ? void 0 : session.user.id)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                        message: "You must be logged in to checkout"
                    });
                }
                try {
                    var _ctx_request, _ctx_request1;
                    var _ctx_request_url, _ctx_body_allowDiscountCodes, _ctx_request_url1;
                    const checkout2 = await polar2.checkouts.create({
                        externalCustomerId: session === null || session === void 0 ? void 0 : session.user.id,
                        products: productIds,
                        successUrl: checkoutOptions.successUrl ? new URL(checkoutOptions.successUrl, (_ctx_request_url = (_ctx_request = ctx.request) === null || _ctx_request === void 0 ? void 0 : _ctx_request.url) !== null && _ctx_request_url !== void 0 ? _ctx_request_url : ctx.context.baseURL).toString() : void 0,
                        metadata: ctx.body.referenceId ? {
                            referenceId: ctx.body.referenceId,
                            ...ctx.body.metadata
                        } : ctx.body.metadata,
                        customFieldData: ctx.body.customFieldData,
                        allowDiscountCodes: (_ctx_body_allowDiscountCodes = ctx.body.allowDiscountCodes) !== null && _ctx_body_allowDiscountCodes !== void 0 ? _ctx_body_allowDiscountCodes : true,
                        discountId: ctx.body.discountId,
                        embedOrigin: ctx.body.embedOrigin,
                        returnUrl: checkoutOptions.returnUrl ? new URL(checkoutOptions.returnUrl, (_ctx_request_url1 = (_ctx_request1 = ctx.request) === null || _ctx_request1 === void 0 ? void 0 : _ctx_request1.url) !== null && _ctx_request_url1 !== void 0 ? _ctx_request_url1 : ctx.context.baseURL).toString() : void 0
                    });
                    const redirectUrl = new URL(checkout2.url);
                    if (checkoutOptions.theme) {
                        redirectUrl.searchParams.set("theme", checkoutOptions.theme);
                    }
                    var _ctx_body_redirect;
                    return ctx.json({
                        url: redirectUrl.toString(),
                        redirect: (_ctx_body_redirect = ctx.body.redirect) !== null && _ctx_body_redirect !== void 0 ? _ctx_body_redirect : true
                    });
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar checkout creation failed. Error: ".concat(e.message));
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Checkout creation failed"
                    });
                }
            })
        };
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
                    var _ctx_query, _ctx_query1;
                    const customerSession = await polar2.customerSessions.create({
                        externalCustomerId: ctx.context.session.user.id
                    });
                    const customerMeters = await polar2.customerPortal.customerMeters.list({
                        customerSession: customerSession.token
                    }, {
                        page: (_ctx_query = ctx.query) === null || _ctx_query === void 0 ? void 0 : _ctx_query.page,
                        limit: (_ctx_query1 = ctx.query) === null || _ctx_query1 === void 0 ? void 0 : _ctx_query1.limit
                    });
                    return ctx.json(customerMeters);
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar meters list failed. Error: ".concat(e.message));
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
                        ctx.context.logger.error("Polar ingestion failed. Error: ".concat(e.message));
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                        message: "Ingestion failed"
                    });
                }
            })
        };
    };
// ../adapter-utils/dist/index.js
var handleWebhookPayload = async (payload, param)=>{
    let { webhookSecret, entitlements, onPayload, ...eventHandlers } = param;
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
                var _ctx_request;
                const { secret, ...eventHandlers } = options;
                if (!((_ctx_request = ctx.request) === null || _ctx_request === void 0 ? void 0 : _ctx_request.body)) {
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
                        ctx.context.logger.error("".concat(err.message));
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: "Webhook Error: ".concat(err.message)
                        });
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nodebase$2d$main$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "Webhook Error: ".concat(err)
                    });
                }
                try {
                    await handleWebhookPayload(event, {
                        webhookSecret: secret,
                        ...eventHandlers
                    });
                } catch (e) {
                    if (e instanceof Error) {
                        ctx.context.logger.error("Polar webhook failed. Error: ".concat(e.message));
                    } else {
                        ctx.context.logger.error("Polar webhook failed. Error: ".concat(e));
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
let cleanStores = function() {
    for(var _len = arguments.length, stores = new Array(_len), _key = 0; _key < _len; _key++){
        stores[_key] = arguments[_key];
    }
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
        $store.listen = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
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
]);

//# sourceMappingURL=6ec0f_a79ed1b4._.js.map