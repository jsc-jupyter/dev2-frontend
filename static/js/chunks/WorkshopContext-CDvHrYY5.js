import { a as require_react, i as require_react_dom, n as require_compiler_runtime, o as __commonJSMin, s as __toESM, t as require_jsx_runtime } from "./jsx-runtime-Ci6bW1BI.js";
import { A as createContextScope, C as useDirection, D as composeEventHandlers, E as useControllableState, F as useComposedRefs, N as createSlot, O as createCollection, P as createSlottable, S as useCallbackRef, T as Presence, _ as FocusScopeBranchProvider, a as createRovingFocusGroupScope, b as DismissableLayer, c as PopperArrow, f as hideOthers, g as FocusScope, h as Portal, i as RovingFocusGroupItem, j as Primitive, k as useLayoutEffect2, l as PopperContent, m as useFocusGuards, n as getAuthState, o as Popper, p as ReactRemoveScroll, r as RovingFocusGroup, s as PopperAnchor, t as Button, u as createPopperScope, v as useFocusScopeBranch, w as useId, x as useDismissableLayerSurface, y as useFocusScopeBranchRegistry } from "./main-CXKyoRHG.js";
import { _ as TrashIcon, a as ChevronDownIcon, c as EyeClosedIcon, d as Link2Icon, f as Pencil2Icon, g as Share1Icon, h as ResetIcon, i as CheckIcon, l as EyeOpenIcon, m as PlusIcon, o as ChevronUpIcon, p as PersonIcon, s as CopyIcon, t as create, u as InfoCircledIcon, v as TriangleRightIcon } from "./react-p3UJvfrU.js";
// node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.13_@types+react-dom@19.3.0_@types+react@19.3.0__@ty_703f89cfbdd73455c4bf03a3c2fc4305/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
var VISUALLY_HIDDEN_STYLES = Object.freeze({
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
var VisuallyHidden = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$10(function VisuallyHidden2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...props,
		ref: forwardedRef,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		}
	});
}, "VisuallyHidden"));
// node_modules/.pnpm/@radix-ui+react-collapsible@1.2.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_f8634540a4e1e40b51592c3777d0d653/node_modules/@radix-ui/react-collapsible/dist/index.mjs
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function Collapsible2(props, forwardedRef) {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$1(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
}, "Collapsible"));
var TRIGGER_NAME$3 = "CollapsibleTrigger";
var CollapsibleTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function CollapsibleTrigger2(props, forwardedRef) {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$3, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.open ? context.contentId : void 0,
		"aria-expanded": context.open || false,
		"data-state": getState$1(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "CollapsibleTrigger"));
var CONTENT_NAME$4 = "CollapsibleContent";
var CollapsibleContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function CollapsibleContent2(props, forwardedRef) {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$4, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
}, "CollapsibleContent"));
var CollapsibleContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function CollapsibleContentImpl2(props, forwardedRef) {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$4, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState$1(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
}, "CollapsibleContentImpl"));
function getState$1(open) {
	return open ? "open" : "closed";
}
__name$9(getState$1, "getState");
// node_modules/.pnpm/@radix-ui+react-dialog@1.3.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_4dc34b117641e6b0d7103bbf4056ed99/node_modules/@radix-ui/react-dialog/dist/index.mjs
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = /* @__PURE__ */ __name$8((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		branchNodes,
		branchRegistry,
		children
	});
}, "Dialog");
var TRIGGER_NAME$2 = "DialogTrigger";
var DialogTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogTrigger2(props, forwardedRef) {
	const { __scopeDialog, ...triggerProps } = props;
	const context = useDialogContext(TRIGGER_NAME$2, __scopeDialog);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.open ? context.contentId : void 0,
		"data-state": getState(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "DialogTrigger"));
var PORTAL_NAME$1 = "DialogPortal";
var [PortalProvider$2, usePortalContext$2] = createDialogContext(PORTAL_NAME$1, { forceMount: void 0 });
var DialogPortal = /* @__PURE__ */ __name$8((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$2, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext$2(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot$1 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const registerDismissableSurface = useDismissableLayerSurface();
	const composedRefs = useComposedRefs(forwardedRef, registerDismissableSurface);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot$1,
		allowPinchZoom: true,
		shards: import_react.useMemo(() => [context.contentRef, ...context.branchNodes.map((node) => ({ current: node }))], [context.contentRef, context.branchNodes]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME$3 = "DialogContent";
var DialogContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext$2(CONTENT_NAME$3, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$3, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$3, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$3, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, "aria-describedby": ariaDescribedby, children, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$3, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScopeBranchProvider, {
		registry: context.branchRegistry,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
			asChild: true,
			loop: true,
			trapped: trapFocus,
			branches: context.branchNodes,
			onMountAutoFocus: onOpenAutoFocus,
			onUnmountAutoFocus: onCloseAutoFocus,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
				role: "dialog",
				id: context.contentId,
				"aria-labelledby": context.titlePresent ? context.titleId : void 0,
				"aria-describedby": context.descriptionPresent ? concatAriaDescribedby$1(ariaDescribedby, context.descriptionId) : ariaDescribedby,
				"data-state": getState(context.open),
				...contentProps,
				ref: forwardedRef,
				deferPointerDownOutside: true,
				onDismiss: () => context.onOpenChange(false),
				children
			})
		})
	});
}, "DialogContentImpl"));
var DialogTitle = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext("DialogTitle", __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DialogDescription = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext("DialogDescription", __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function concatAriaDescribedby$1(...values) {
	const ids = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (typeof value !== "string") continue;
		for (const id of String(value).trim().split(/\s+/)) if (id) ids.add(id);
	}
	return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name$8(concatAriaDescribedby$1, "concatAriaDescribedby");
function getState(open) {
	return open ? "open" : "closed";
}
__name$8(getState, "getState");
// node_modules/.pnpm/@radix-ui+react-alert-dialog@1.2.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_9fb8ed36b898ecb69373e4d64f11612c/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
var [createAlertDialogContext, createAlertDialogScope] = createContextScope("AlertDialog", [createDialogScope]);
var useDialogScope = createDialogScope();
var AlertDialog = /* @__PURE__ */ __name$7((props) => {
	const { __scopeAlertDialog, ...alertDialogProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...dialogScope,
		...alertDialogProps,
		modal: true
	});
}, "AlertDialog");
import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogTrigger2(props, forwardedRef) {
	const { __scopeAlertDialog, ...triggerProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
		...dialogScope,
		...triggerProps,
		ref: forwardedRef
	});
}, "AlertDialogTrigger"));
var AlertDialogPortal = /* @__PURE__ */ __name$7((props) => {
	const { __scopeAlertDialog, ...portalProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
		...dialogScope,
		...portalProps
	});
}, "AlertDialogPortal");
var AlertDialogOverlay = import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogOverlay2(props, forwardedRef) {
	const { __scopeAlertDialog, ...overlayProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		...dialogScope,
		...overlayProps,
		ref: forwardedRef
	});
}, "AlertDialogOverlay"));
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext("AlertDialogContent");
var AlertDialogContent = import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogContent2(props, forwardedRef) {
	const { __scopeAlertDialog, children, ...contentProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const cancelRef = import_react.useRef(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
		scope: __scopeAlertDialog,
		cancelRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			role: "alertdialog",
			...dialogScope,
			...contentProps,
			ref: composedRefs,
			onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
				event.preventDefault();
				cancelRef.current?.focus({ preventScroll: true });
			}),
			onPointerDownOutside: (event) => event.preventDefault(),
			onInteractOutside: (event) => event.preventDefault(),
			children
		})
	});
}, "AlertDialogContent"));
var AlertDialogTitle = import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogTitle2(props, forwardedRef) {
	const { __scopeAlertDialog, ...titleProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		...dialogScope,
		...titleProps,
		ref: forwardedRef
	});
}, "AlertDialogTitle"));
var AlertDialogDescription = import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogDescription2(props, forwardedRef) {
	const { __scopeAlertDialog, ...descriptionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		...dialogScope,
		...descriptionProps,
		ref: forwardedRef
	});
}, "AlertDialogDescription"));
var AlertDialogAction = import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogAction2(props, forwardedRef) {
	const { __scopeAlertDialog, ...actionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		...dialogScope,
		...actionProps,
		ref: forwardedRef
	});
}, "AlertDialogAction"));
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = import_react.forwardRef(/* @__PURE__ */ __name$7(function AlertDialogCancel2(props, forwardedRef) {
	const { __scopeAlertDialog, ...cancelProps } = props;
	const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const ref = useComposedRefs(forwardedRef, cancelRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		...dialogScope,
		...cancelProps,
		ref
	});
}, "AlertDialogCancel"));
// node_modules/.pnpm/@radix-ui+react-label@2.1.17_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_eb0a38c33d4564f6f3168e806730df70/node_modules/@radix-ui/react-label/dist/index.mjs
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
var Label = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function Label2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.label, {
		...props,
		ref: forwardedRef,
		onMouseDown: (event) => {
			if (event.target.closest("button, input, select, textarea")) return;
			props.onMouseDown?.(event);
			if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		}
	});
}, "Label"));
// node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
__name$5(clamp, "clamp");
// node_modules/.pnpm/@radix-ui+react-scroll-area@1.4.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_c71009d6a4948c5f397c5b9e212ddcbc/node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$4(useStateMachine, "useStateMachine");
var ScrollAreaType = {
	Auto: "auto",
	Always: "always",
	Scroll: "scroll",
	Hover: "hover"
};
var Orientation = {
	Vertical: "vertical",
	Horizontal: "horizontal"
};
var Direction$1 = {
	LTR: "ltr",
	RTL: "rtl"
};
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollArea2(props, forwardedRef) {
	const { __scopeScrollArea, type = ScrollAreaType.Hover, dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
	const [scrollArea, setScrollArea] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const [scrollbarX, setScrollbarX] = import_react.useState(null);
	const [scrollbarY, setScrollbarY] = import_react.useState(null);
	const [cornerWidth, setCornerWidth] = import_react.useState(0);
	const [cornerHeight, setCornerHeight] = import_react.useState(0);
	const [scrollbarXEnabled, setScrollbarXEnabled] = import_react.useState(false);
	const [scrollbarYEnabled, setScrollbarYEnabled] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, setScrollArea);
	const direction = useDirection(dir);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaProvider, {
		scope: __scopeScrollArea,
		type,
		dir: direction,
		scrollHideDelay,
		scrollArea,
		viewport,
		onViewportChange: setViewport,
		content,
		onContentChange: setContent,
		scrollbarX,
		onScrollbarXChange: setScrollbarX,
		scrollbarXEnabled,
		onScrollbarXEnabledChange: setScrollbarXEnabled,
		scrollbarY,
		onScrollbarYChange: setScrollbarY,
		scrollbarYEnabled,
		onScrollbarYEnabledChange: setScrollbarYEnabled,
		onCornerWidthChange: setCornerWidth,
		onCornerHeightChange: setCornerHeight,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			...scrollAreaProps,
			ref: composedRefs,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": cornerWidth + "px",
				"--radix-scroll-area-corner-height": cornerHeight + "px",
				...props.style
			}
		})
	});
}, "ScrollArea"));
var VIEWPORT_NAME$1 = "ScrollAreaViewport";
var Slottable$1 = createSlottable(VIEWPORT_NAME$1);
var ScrollAreaViewport = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaViewport2(props, forwardedRef) {
	const { __scopeScrollArea, children, nonce, disableImplicitContentElement, ...viewportProps } = props;
	const context = useScrollAreaContext(VIEWPORT_NAME$1, __scopeScrollArea);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
	const canSlotOntoChildren = import_react.isValidElement(children);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaViewportStyle, { nonce }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...viewportProps,
		ref: composedRefs,
		style: {
			/**
			* We don't support `visible` because the intention is to have at least one scrollbar
			* if this component is used and `visible` will behave like `auto` in that case
			* https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
			*
			* We don't handle `auto` because the intention is for the native implementation
			* to be hidden if using this component. We just want to ensure the node is scrollable
			* so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
			* the browser from having to work out whether to render native scrollbars or not,
			* we tell it to with the intention of hiding them in CSS.
			*/
			overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
			...props.style
		},
		children: disableImplicitContentElement ? children : canSlotOntoChildren ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable$1, {
			child: children,
			children: (slottable) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaContent, {
				__scopeScrollArea,
				children: slottable
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaContent, {
			__scopeScrollArea,
			children
		}) })
	})] });
}, "ScrollAreaViewport"));
var ScrollAreaViewportStyle = /* @__PURE__ */ import_react.memo(/* @__PURE__ */ __name$4(function ScrollAreaViewportStyle2({ nonce }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	});
}, "ScrollAreaViewportStyle"), (prevProps, nextProps) => prevProps.nonce === nextProps.nonce);
var CONTENT_NAME$2 = "ScrollAreaContent";
var ScrollAreaContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaContent2(props, forwardedRef) {
	const { __scopeScrollArea, children, ...contentProps } = props;
	const context = useScrollAreaContext(CONTENT_NAME$2, __scopeScrollArea);
	const composedRefs = useComposedRefs(forwardedRef, context.onContentChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...contentProps,
		ref: composedRefs,
		style: {
			minWidth: "100%",
			display: "table",
			...props.style
		},
		children
	});
}, "ScrollAreaContent"));
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbar2(props, forwardedRef) {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
	const isHorizontal = props.orientation === Orientation.Horizontal;
	import_react.useEffect(() => {
		isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
		return () => {
			isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
		};
	}, [
		isHorizontal,
		onScrollbarXEnabledChange,
		onScrollbarYEnabledChange
	]);
	return context.type === ScrollAreaType.Hover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === ScrollAreaType.Scroll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === ScrollAreaType.Auto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === ScrollAreaType.Always ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
		...scrollbarProps,
		ref: forwardedRef,
		"data-state": "visible"
	}) : null;
}, "ScrollAreaScrollbar"));
var ScrollAreaScrollbarHover = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarHover2(props, forwardedRef) {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [visible, setVisible] = import_react.useState(false);
	import_react.useEffect(() => {
		const scrollArea = context.scrollArea;
		let hideTimer = 0;
		if (scrollArea) {
			const handlePointerEnter = /* @__PURE__ */ __name$4(() => {
				window.clearTimeout(hideTimer);
				setVisible(true);
			}, "handlePointerEnter");
			const handlePointerLeave = /* @__PURE__ */ __name$4(() => {
				hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
			}, "handlePointerLeave");
			scrollArea.addEventListener("pointerenter", handlePointerEnter);
			scrollArea.addEventListener("pointerleave", handlePointerLeave);
			return () => {
				window.clearTimeout(hideTimer);
				scrollArea.removeEventListener("pointerenter", handlePointerEnter);
				scrollArea.removeEventListener("pointerleave", handlePointerLeave);
			};
		}
	}, [context.scrollArea, context.scrollHideDelay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
}, "ScrollAreaScrollbarHover"));
var ScrollAreaScrollbarScroll = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarScroll2(props, forwardedRef) {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const isHorizontal = props.orientation === Orientation.Horizontal;
	const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
	const [state, send] = useStateMachine("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	import_react.useEffect(() => {
		if (state === "idle") {
			const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
			return () => window.clearTimeout(hideTimer);
		}
	}, [
		state,
		context.scrollHideDelay,
		send
	]);
	import_react.useEffect(() => {
		const viewport = context.viewport;
		const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
		if (viewport) {
			let prevScrollPos = viewport[scrollDirection];
			const handleScroll = /* @__PURE__ */ __name$4(() => {
				const scrollPos = viewport[scrollDirection];
				if (prevScrollPos !== scrollPos) {
					send("SCROLL");
					debounceScrollEnd();
				}
				prevScrollPos = scrollPos;
			}, "handleScroll");
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		context.viewport,
		isHorizontal,
		send,
		debounceScrollEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || state !== "hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": state === "hidden" ? "hidden" : "visible",
			...scrollbarProps,
			ref: forwardedRef,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
		})
	});
}, "ScrollAreaScrollbarScroll"));
var ScrollAreaScrollbarAuto = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarAuto2(props, forwardedRef) {
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { forceMount, ...scrollbarProps } = props;
	const [visible, setVisible] = import_react.useState(false);
	const isHorizontal = props.orientation === Orientation.Horizontal;
	const handleResize = useDebounceCallback(() => {
		if (context.viewport) {
			const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
			const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
			setVisible(isHorizontal ? isOverflowX : isOverflowY);
		}
	}, 10);
	useResizeObserver(context.viewport, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
}, "ScrollAreaScrollbarAuto"));
var ScrollAreaScrollbarVisible = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarVisible2(props, forwardedRef) {
	const { orientation = Orientation.Vertical, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const thumbRef = import_react.useRef(null);
	const pointerOffsetRef = import_react.useRef(0);
	const [sizes, setSizes] = import_react.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	});
	const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
	const commonProps = {
		...scrollbarProps,
		sizes,
		onSizesChange: setSizes,
		hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
		onThumbChange: /* @__PURE__ */ __name$4((thumb) => thumbRef.current = thumb, "onThumbChange"),
		onThumbPointerUp: /* @__PURE__ */ __name$4(() => pointerOffsetRef.current = 0, "onThumbPointerUp"),
		onThumbPointerDown: /* @__PURE__ */ __name$4((pointerPos) => pointerOffsetRef.current = pointerPos, "onThumbPointerDown")
	};
	function getScrollPosition(pointerPos, dir) {
		return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
	}
	__name$4(getScrollPosition, "getScrollPosition");
	if (orientation === Orientation.Horizontal) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarX, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollLeft;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
				thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollLeft = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
		}
	});
	if (orientation === Orientation.Vertical) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarY, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollTop;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes);
				thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollTop = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
		}
	});
	return null;
}, "ScrollAreaScrollbarVisible"));
var ScrollAreaScrollbarX = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarX2(props, forwardedRef) {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			bottom: 0,
			left: context.dir === Direction$1.RTL ? "var(--radix-scroll-area-corner-width)" : 0,
			right: context.dir === Direction$1.LTR ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollLeft + event.deltaX;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollWidth,
				viewport: context.viewport.offsetWidth,
				scrollbar: {
					size: ref.current.clientWidth,
					paddingStart: toInt(computedStyle.paddingLeft),
					paddingEnd: toInt(computedStyle.paddingRight)
				}
			});
		}
	});
}, "ScrollAreaScrollbarX"));
var ScrollAreaScrollbarY = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarY2(props, forwardedRef) {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			top: 0,
			right: context.dir === Direction$1.LTR ? 0 : void 0,
			left: context.dir === Direction$1.RTL ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollTop + event.deltaY;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollHeight,
				viewport: context.viewport.offsetHeight,
				scrollbar: {
					size: ref.current.clientHeight,
					paddingStart: toInt(computedStyle.paddingTop),
					paddingEnd: toInt(computedStyle.paddingBottom)
				}
			});
		}
	});
}, "ScrollAreaScrollbarY"));
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaScrollbarImpl2(props, forwardedRef) {
	const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
	const [scrollbar, setScrollbar] = import_react.useState(null);
	const composeRefs = useComposedRefs(forwardedRef, setScrollbar);
	const rectRef = import_react.useRef(null);
	const prevWebkitUserSelectRef = import_react.useRef("");
	const viewport = context.viewport;
	const maxScrollPos = sizes.content - sizes.viewport;
	const handleWheelScroll = useCallbackRef(onWheelScroll);
	const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
	const handleResize = useDebounceCallback(onResize, 10);
	function handleDragScroll(event) {
		if (rectRef.current) {
			const x = event.clientX - rectRef.current.left;
			const y = event.clientY - rectRef.current.top;
			onDragScroll({
				x,
				y
			});
		}
	}
	__name$4(handleDragScroll, "handleDragScroll");
	import_react.useEffect(() => {
		const handleWheel = /* @__PURE__ */ __name$4((event) => {
			const element = event.target;
			if (scrollbar?.contains(element)) handleWheelScroll(event, maxScrollPos);
		}, "handleWheel");
		document.addEventListener("wheel", handleWheel, { passive: false });
		return () => document.removeEventListener("wheel", handleWheel, { passive: false });
	}, [
		viewport,
		scrollbar,
		maxScrollPos,
		handleWheelScroll
	]);
	import_react.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
	useResizeObserver(scrollbar, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollbarProvider, {
		scope: __scopeScrollArea,
		scrollbar,
		hasThumb,
		onThumbChange: useCallbackRef(onThumbChange),
		onThumbPointerUp: useCallbackRef(onThumbPointerUp),
		onThumbPositionChange: handleThumbPositionChange,
		onThumbPointerDown: useCallbackRef(onThumbPointerDown),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...scrollbarProps,
			ref: composeRefs,
			style: {
				position: "absolute",
				...scrollbarProps.style
			},
			onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
				if (event.button === 0) {
					event.target.setPointerCapture(event.pointerId);
					rectRef.current = scrollbar.getBoundingClientRect();
					prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
					document.body.style.webkitUserSelect = "none";
					if (context.viewport) context.viewport.style.scrollBehavior = "auto";
					handleDragScroll(event);
				}
			}),
			onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
			onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
				const element = event.target;
				if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
				document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
				if (context.viewport) context.viewport.style.scrollBehavior = "";
				rectRef.current = null;
			})
		})
	});
}, "ScrollAreaScrollbarImpl"));
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaThumb2(props, forwardedRef) {
	const { forceMount, ...thumbProps } = props;
	const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || scrollbarContext.hasThumb,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumbImpl, {
			ref: forwardedRef,
			...thumbProps
		})
	});
}, "ScrollAreaThumb"));
var ScrollAreaThumbImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function ScrollAreaThumbImpl2(props, forwardedRef) {
	const { __scopeScrollArea, style, ...thumbProps } = props;
	const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
	const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
	const { onThumbPositionChange } = scrollbarContext;
	const composedRef = useComposedRefs(forwardedRef, scrollbarContext.onThumbChange);
	const removeUnlinkedScrollListenerRef = import_react.useRef(void 0);
	const debounceScrollEnd = useDebounceCallback(() => {
		if (removeUnlinkedScrollListenerRef.current) {
			removeUnlinkedScrollListenerRef.current();
			removeUnlinkedScrollListenerRef.current = void 0;
		}
	}, 100);
	import_react.useEffect(() => {
		const viewport = scrollAreaContext.viewport;
		if (viewport) {
			const handleScroll = /* @__PURE__ */ __name$4(() => {
				debounceScrollEnd();
				if (!removeUnlinkedScrollListenerRef.current) {
					const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
					removeUnlinkedScrollListenerRef.current = listener;
					onThumbPositionChange();
				}
			}, "handleScroll");
			onThumbPositionChange();
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		scrollAreaContext.viewport,
		debounceScrollEnd,
		onThumbPositionChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
		...thumbProps,
		ref: composedRef,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...style
		},
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
			const thumbRect = event.target.getBoundingClientRect();
			const x = event.clientX - thumbRect.left;
			const y = event.clientY - thumbRect.top;
			scrollbarContext.onThumbPointerDown({
				x,
				y
			});
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
	});
}, "ScrollAreaThumbImpl"));
function toInt(value) {
	return value ? parseInt(value, 10) : 0;
}
__name$4(toInt, "toInt");
function getThumbRatio(viewportSize, contentSize) {
	const ratio = viewportSize / contentSize;
	return isNaN(ratio) ? 0 : ratio;
}
__name$4(getThumbRatio, "getThumbRatio");
function getThumbSize(sizes) {
	const ratio = getThumbRatio(sizes.viewport, sizes.content);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
	return Math.max(thumbSize, 18);
}
__name$4(getThumbSize, "getThumbSize");
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = Direction$1.LTR) {
	const thumbSizePx = getThumbSize(sizes);
	const thumbCenter = thumbSizePx / 2;
	const offset = pointerOffset || thumbCenter;
	const thumbOffsetFromEnd = thumbSizePx - offset;
	const minPointerPos = sizes.scrollbar.paddingStart + offset;
	const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
	const maxScrollPos = sizes.content - sizes.viewport;
	const scrollRange = dir === Direction$1.LTR ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	return linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
__name$4(getScrollPositionFromPointer, "getScrollPositionFromPointer");
function getThumbOffsetFromScroll(scrollPos, sizes, dir = Direction$1.LTR) {
	const thumbSizePx = getThumbSize(sizes);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const scrollbar = sizes.scrollbar.size - scrollbarPadding;
	const maxScrollPos = sizes.content - sizes.viewport;
	const maxThumbPos = scrollbar - thumbSizePx;
	const scrollWithoutMomentum = clamp(scrollPos, dir === Direction$1.LTR ? [0, maxScrollPos] : [maxScrollPos * -1, 0]);
	return linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
__name$4(getThumbOffsetFromScroll, "getThumbOffsetFromScroll");
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
__name$4(linearScale, "linearScale");
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
	return scrollPos > 0 && scrollPos < maxScrollPos;
}
__name$4(isScrollingWithinScrollbarBounds, "isScrollingWithinScrollbarBounds");
var addUnlinkedScrollListener = /* @__PURE__ */ __name$4((node, handler = () => {}) => {
	let prevPosition = {
		left: node.scrollLeft,
		top: node.scrollTop
	};
	let rAF = 0;
	function loop() {
		const position = {
			left: node.scrollLeft,
			top: node.scrollTop
		};
		const isHorizontalScroll = prevPosition.left !== position.left;
		const isVerticalScroll = prevPosition.top !== position.top;
		if (isHorizontalScroll || isVerticalScroll) handler();
		prevPosition = position;
		rAF = window.requestAnimationFrame(loop);
	}
	__name$4(loop, "loop");
	loop();
	return () => window.cancelAnimationFrame(rAF);
}, "addUnlinkedScrollListener");
function useDebounceCallback(callback, delay) {
	const handleCallback = useCallbackRef(callback);
	const debounceTimerRef = import_react.useRef(0);
	import_react.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
	return import_react.useCallback(() => {
		window.clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = window.setTimeout(handleCallback, delay);
	}, [handleCallback, delay]);
}
__name$4(useDebounceCallback, "useDebounceCallback");
function useResizeObserver(element, onResize) {
	const handleResize = useCallbackRef(onResize);
	useLayoutEffect2(() => {
		let rAF = 0;
		if (element) {
			const resizeObserver = new ResizeObserver(() => {
				cancelAnimationFrame(rAF);
				rAF = window.requestAnimationFrame(handleResize);
			});
			resizeObserver.observe(element);
			return () => {
				window.cancelAnimationFrame(rAF);
				resizeObserver.unobserve(element);
			};
		}
	}, [element, handleResize]);
}
__name$4(useResizeObserver, "useResizeObserver");
// node_modules/.pnpm/@radix-ui+react-select@2.4.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_e8fd14f43f640bf7754c8314026f8b0b/node_modules/@radix-ui/react-select/dist/index.mjs
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
var Position = {
	ItemAligned: "item-aligned",
	Popper: "popper"
};
var Direction = {
	LTR: "ltr",
	RTL: "rtl"
};
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]);
var usePopperScope$1 = createPopperScope();
var [SelectProviderImpl, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
function SelectProvider(props) {
	const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form, internal_do_not_use_render } = props;
	const popperScope = usePopperScope$1(__scopeSelect);
	const [trigger, setTrigger] = import_react.useState(null);
	const [valueNode, setValueNode] = import_react.useState(null);
	const [valueNodeHasChildren, setValueNodeHasChildren] = import_react.useState(false);
	const direction = useDirection(dir);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: SELECT_NAME
	});
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange,
		caller: SELECT_NAME
	});
	const triggerPointerDownPosRef = import_react.useRef(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userSelection, setUserSelection] = import_react.useState(null);
	const handleUserSelect = /* @__PURE__ */ __name$3((nextValue) => {
		setUserSelection({
			value: nextValue,
			hasConsumerStoppedPropagation: hasConsumerStoppedPropagationRef.current
		});
		setValue(nextValue);
	}, "handleUserSelect");
	const initialValueRef = import_react.useRef(value);
	import_react.useEffect(() => {
		const associatedForm = form ? trigger?.ownerDocument.getElementById(form) : trigger?.form;
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$3(() => setValue(initialValueRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		form,
		trigger,
		setValue
	]);
	const isFormControl = trigger ? !!form || !!trigger.closest("form") : true;
	const [nativeOptionsSet, setNativeOptionsSet] = import_react.useState(/* @__PURE__ */ new Set());
	const contentId = useId();
	const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
	const handleNativeOptionAdd = import_react.useCallback((option) => {
		setNativeOptionsSet((prev) => new Set(prev).add(option));
	}, []);
	const handleNativeOptionRemove = import_react.useCallback((option) => {
		setNativeOptionsSet((prev) => {
			const optionsSet = new Set(prev);
			optionsSet.delete(option);
			return optionsSet;
		});
	}, []);
	const context = {
		required,
		trigger,
		onTriggerChange: setTrigger,
		valueNode,
		onValueNodeChange: setValueNode,
		valueNodeHasChildren,
		onValueNodeHasChildrenChange: setValueNodeHasChildren,
		contentId,
		value,
		onValueChange: setValue,
		hasConsumerStoppedPropagationRef,
		userSelection,
		onUserSelect: handleUserSelect,
		open,
		onOpenChange: setOpen,
		dir: direction,
		triggerPointerDownPosRef,
		disabled,
		name,
		autoComplete,
		form,
		nativeOptions: nativeOptionsSet,
		nativeSelectKey,
		isFormControl
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProviderImpl, {
			scope: __scopeSelect,
			...context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
				scope: __scopeSelect,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
					scope: __scopeSelect,
					onNativeOptionAdd: handleNativeOptionAdd,
					onNativeOptionRemove: handleNativeOptionRemove,
					children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
				})
			})
		})
	});
}
__name$3(SelectProvider, "SelectProvider");
var Select = /* @__PURE__ */ __name$3((props) => {
	const { __scopeSelect, children, ...providerProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProvider, {
		__scopeSelect,
		...providerProps,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectBubbleInput, { __scopeSelect }) : null] })
	});
}, "Select");
var TRIGGER_NAME$1 = "SelectTrigger";
var SelectTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectTrigger2(props, forwardedRef) {
	const { __scopeSelect, disabled = false, ...triggerProps } = props;
	const popperScope = usePopperScope$1(__scopeSelect);
	const context = useSelectContext(TRIGGER_NAME$1, __scopeSelect);
	const isDisabled = context.disabled || disabled;
	const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
	const getItems = useCollection(__scopeSelect);
	const pointerTypeRef = import_react.useRef("touch");
	const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.value === context.value));
		if (nextItem !== void 0) context.onUserSelect(nextItem.value);
	});
	const handleOpen = /* @__PURE__ */ __name$3((pointerEvent) => {
		if (!isDisabled) {
			context.onOpenChange(true);
			resetTypeahead();
		}
		if (pointerEvent) context.triggerPointerDownPosRef.current = {
			x: Math.round(pointerEvent.pageX),
			y: Math.round(pointerEvent.pageY)
		};
	}, "handleOpen");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": context.open ? context.contentId : void 0,
			"aria-expanded": context.open,
			"aria-required": context.required,
			"aria-autocomplete": "none",
			dir: context.dir,
			"data-state": context.open ? "open" : "closed",
			disabled: isDisabled,
			"data-disabled": isDisabled ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
			...triggerProps,
			ref: composedRefs,
			onClick: composeEventHandlers(triggerProps.onClick, (event) => {
				event.currentTarget.focus();
				if (pointerTypeRef.current !== "mouse") handleOpen(event);
			}),
			onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
				pointerTypeRef.current = event.pointerType;
				const target = event.target;
				if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
				if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
					handleOpen(event);
					event.preventDefault();
				}
			}),
			onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
				const isTypingAhead = searchRef.current !== "";
				if (!(event.ctrlKey || event.altKey || event.metaKey) && event.key.length === 1) {
					context.hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					handleTypeaheadSearch(event.key);
				}
				if (isTypingAhead && event.key === " ") return;
				if (OPEN_KEYS.includes(event.key)) {
					handleOpen();
					event.preventDefault();
				}
			})
		})
	});
}, "SelectTrigger"));
var VALUE_NAME = "SelectValue";
var SelectValue = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectValue2(props, forwardedRef) {
	const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
	const context = useSelectContext(VALUE_NAME, __scopeSelect);
	const { onValueNodeHasChildrenChange } = context;
	const hasChildren = children !== void 0;
	const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
	useLayoutEffect2(() => {
		onValueNodeHasChildrenChange(hasChildren);
	}, [onValueNodeHasChildrenChange, hasChildren]);
	const showPlaceholder = shouldShowPlaceholder(context.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...valueProps,
		asChild: showPlaceholder ? false : valueProps.asChild,
		ref: composedRefs,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: showPlaceholder ? placeholder : children }, showPlaceholder ? "placeholder" : "value")
	});
}, "SelectValue"));
var SelectIcon = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectIcon2(props, forwardedRef) {
	const { __scopeSelect, children, ...iconProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...iconProps,
		ref: forwardedRef,
		children: children || "▼"
	});
}, "SelectIcon"));
var [PortalProvider$1, usePortalContext$1] = createSelectContext("SelectPortal", { forceMount: void 0 });
var SelectPortal = /* @__PURE__ */ __name$3((props) => {
	const { __scopeSelect, forceMount, ...portalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$1, {
		scope: props.__scopeSelect,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
			asChild: true,
			...portalProps
		})
	});
}, "SelectPortal");
var CONTENT_NAME$1 = "SelectContent";
var SelectContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectContent2(props, forwardedRef) {
	const portalContext = usePortalContext$1(CONTENT_NAME$1, props.__scopeSelect);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME$1, props.__scopeSelect);
	const [fragment, setFragment] = import_react.useState();
	useLayoutEffect2(() => {
		setFragment(new DocumentFragment());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => present ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentImpl, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentFragment, {
			...contentProps,
			fragment
		})
	});
}, "SelectContent"));
var SelectContentFragment = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectContentFragment2(props, forwardedRef) {
	const { __scopeSelect, children, fragment } = props;
	if (!fragment) return null;
	return import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: __scopeSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: __scopeSelect,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: forwardedRef,
				children
			})
		})
	}), fragment);
}, "SelectContentFragment"));
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$1);
var Slot = createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectContentImpl2(props, forwardedRef) {
	const { __scopeSelect } = props;
	const { position = Position.ItemAligned, onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME$1, __scopeSelect);
	const [content, setContent] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContent);
	const [selectedItem, setSelectedItem] = import_react.useState(null);
	const [selectedItemText, setSelectedItemText] = import_react.useState(null);
	const getItems = useCollection(__scopeSelect);
	const [isPositioned, setIsPositioned] = import_react.useState(false);
	const firstValidItemFoundRef = import_react.useRef(false);
	const firstItemFoundRef = import_react.useRef(false);
	const firstItemTextFoundRef = import_react.useRef(false);
	import_react.useEffect(() => {
		if (content) return hideOthers(content);
	}, [content]);
	useFocusGuards();
	const focusFirst = import_react.useCallback((candidates) => {
		const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
		const [lastItem] = restItems.slice(-1);
		const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
		for (const candidate of candidates) {
			if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
			candidate?.scrollIntoView({ block: "nearest" });
			if (candidate === firstItem && viewport) viewport.scrollTop = 0;
			if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
			candidate?.focus();
			if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
		}
	}, [getItems, viewport]);
	const focusSelectedItem = import_react.useCallback(() => focusFirst([selectedItem, content]), [
		focusFirst,
		selectedItem,
		content
	]);
	import_react.useEffect(() => {
		if (isPositioned) focusSelectedItem();
	}, [isPositioned, focusSelectedItem]);
	const { onOpenChange, triggerPointerDownPosRef } = context;
	import_react.useEffect(() => {
		if (content) {
			let pointerMoveDelta = {
				x: 0,
				y: 0
			};
			const handlePointerMove = /* @__PURE__ */ __name$3((event) => {
				pointerMoveDelta = {
					x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
					y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
				};
			}, "handlePointerMove");
			const handlePointerUp = /* @__PURE__ */ __name$3((event) => {
				if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
				else if (!event.composedPath().includes(content)) onOpenChange(false);
				document.removeEventListener("pointermove", handlePointerMove);
				triggerPointerDownPosRef.current = null;
			}, "handlePointerUp");
			if (triggerPointerDownPosRef.current !== null) {
				document.addEventListener("pointermove", handlePointerMove);
				document.addEventListener("pointerup", handlePointerUp, {
					capture: true,
					once: true
				});
			}
			return () => {
				document.removeEventListener("pointermove", handlePointerMove);
				document.removeEventListener("pointerup", handlePointerUp, { capture: true });
			};
		}
	}, [
		content,
		onOpenChange,
		triggerPointerDownPosRef
	]);
	import_react.useEffect(() => {
		const close = /* @__PURE__ */ __name$3(() => onOpenChange(false), "close");
		window.addEventListener("blur", close);
		window.addEventListener("resize", close);
		return () => {
			window.removeEventListener("blur", close);
			window.removeEventListener("resize", close);
		};
	}, [onOpenChange]);
	const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.ref.current === document.activeElement));
		if (nextItem) setTimeout(() => nextItem.ref.current?.focus());
	});
	const itemRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstItem = !firstItemFoundRef.current;
		if (isFirstItem) firstItemFoundRef.current = true;
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) {
			setSelectedItem(node);
			if (isFirstValidItem) firstValidItemFoundRef.current = true;
		} else if (isFirstItem) setSelectedItem(node);
	}, [context.value]);
	const handleItemLeave = import_react.useCallback(() => content?.focus(), [content]);
	const itemTextRefCallback = import_react.useCallback((node, value, disabled) => {
		if (!node) return;
		const isFirstItem = !firstItemTextFoundRef.current;
		if (isFirstItem) firstItemTextFoundRef.current = true;
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) setSelectedItemText(node);
		else if (isFirstItem) setSelectedItemText(node);
	}, [context.value]);
	const SelectPosition = position === Position.Popper ? SelectPopperPosition : SelectItemAlignedPosition;
	const popperContentProps = SelectPosition === SelectPopperPosition ? {
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		avoidCollisions
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: __scopeSelect,
		content,
		viewport,
		onViewportChange: setViewport,
		itemRefCallback,
		selectedItem,
		onItemLeave: handleItemLeave,
		itemTextRefCallback,
		focusSelectedItem,
		selectedItemText,
		position,
		isPositioned,
		searchRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
			as: Slot,
			allowPinchZoom: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
				asChild: true,
				trapped: context.open,
				onMountAutoFocus: (event) => {
					event.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
					context.trigger?.focus({ preventScroll: true });
					event.preventDefault();
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
					asChild: true,
					disableOutsidePointerEvents: true,
					onEscapeKeyDown,
					onPointerDownOutside,
					onFocusOutside: (event) => event.preventDefault(),
					onDismiss: () => context.onOpenChange(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPosition, {
						role: "listbox",
						id: context.contentId,
						"data-state": context.open ? "open" : "closed",
						dir: context.dir,
						onContextMenu: (event) => event.preventDefault(),
						...contentProps,
						...popperContentProps,
						onPlaced: () => setIsPositioned(true),
						ref: composedRefs,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...contentProps.style
						},
						onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
							const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
							if (event.key === "Tab") event.preventDefault();
							if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
							if ([
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(event.key)) {
								let candidateNodes = getItems().filter((item) => !item.disabled).map((item) => item.ref.current);
								if (["ArrowUp", "End"].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
								if (["ArrowUp", "ArrowDown"].includes(event.key)) {
									const currentElement = event.target;
									const currentIndex = candidateNodes.indexOf(currentElement);
									candidateNodes = candidateNodes.slice(currentIndex + 1);
								}
								setTimeout(() => focusFirst(candidateNodes));
								event.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl"));
var SelectItemAlignedPosition = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectItemAlignedPosition2(props, forwardedRef) {
	const { __scopeSelect, onPlaced, ...popperProps } = props;
	const context = useSelectContext(CONTENT_NAME$1, __scopeSelect);
	const contentContext = useSelectContentContext(CONTENT_NAME$1, __scopeSelect);
	const [contentWrapper, setContentWrapper] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContent);
	const getItems = useCollection(__scopeSelect);
	const shouldExpandOnScrollRef = import_react.useRef(false);
	const shouldRepositionRef = import_react.useRef(true);
	const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
	const position = import_react.useCallback(() => {
		if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
			const triggerRect = context.trigger.getBoundingClientRect();
			const contentRect = content.getBoundingClientRect();
			const valueNodeRect = context.valueNode.getBoundingClientRect();
			const itemTextRect = selectedItemText.getBoundingClientRect();
			if (context.dir !== Direction.RTL) {
				const itemTextOffset = itemTextRect.left - contentRect.left;
				const left = valueNodeRect.left - itemTextOffset;
				const leftDelta = triggerRect.left - left;
				const minContentWidth = triggerRect.width + leftDelta;
				const contentWidth = Math.max(minContentWidth, contentRect.width);
				const rightEdge = window.innerWidth - CONTENT_MARGIN;
				const clampedLeft = clamp(left, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, rightEdge - contentWidth)]);
				contentWrapper.style.minWidth = minContentWidth + "px";
				contentWrapper.style.left = clampedLeft + "px";
			} else {
				const itemTextOffset = contentRect.right - itemTextRect.right;
				const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
				const rightDelta = window.innerWidth - triggerRect.right - right;
				const minContentWidth = triggerRect.width + rightDelta;
				const contentWidth = Math.max(minContentWidth, contentRect.width);
				const leftEdge = window.innerWidth - CONTENT_MARGIN;
				const clampedRight = clamp(right, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, leftEdge - contentWidth)]);
				contentWrapper.style.minWidth = minContentWidth + "px";
				contentWrapper.style.right = clampedRight + "px";
			}
			const items = getItems();
			const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
			const itemsHeight = viewport.scrollHeight;
			const contentStyles = window.getComputedStyle(content);
			const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
			const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
			const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
			const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
			const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
			const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
			const viewportStyles = window.getComputedStyle(viewport);
			const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
			const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
			const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
			const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
			const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
			const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
			const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
			const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
			if (contentTopToItemMiddle <= topEdgeToTriggerMiddle) {
				const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
				contentWrapper.style.bottom = "0px";
				const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
				const height = contentTopToItemMiddle + Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
				contentWrapper.style.height = height + "px";
			} else {
				const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
				contentWrapper.style.top = "0px";
				const height = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight) + itemMiddleToContentBottom;
				contentWrapper.style.height = height + "px";
				viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
			}
			contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
			contentWrapper.style.minHeight = minContentHeight + "px";
			contentWrapper.style.maxHeight = availableHeight + "px";
			onPlaced?.();
			requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
		}
	}, [
		getItems,
		context.trigger,
		context.valueNode,
		contentWrapper,
		content,
		viewport,
		selectedItem,
		selectedItemText,
		context.dir,
		onPlaced
	]);
	useLayoutEffect2(() => position(), [position]);
	const [contentZIndex, setContentZIndex] = import_react.useState();
	useLayoutEffect2(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	const handleScrollButtonChange = import_react.useCallback((node) => {
		if (node && shouldRepositionRef.current === true) {
			position();
			focusSelectedItem?.();
			shouldRepositionRef.current = false;
		}
	}, [position, focusSelectedItem]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportProvider, {
		scope: __scopeSelect,
		contentWrapper,
		shouldExpandOnScrollRef,
		onScrollButtonChange: handleScrollButtonChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: setContentWrapper,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: contentZIndex
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...popperProps,
				ref: composedRefs,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...popperProps.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition"));
var SelectPopperPosition = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectPopperPosition2(props, forwardedRef) {
	const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
	const popperScope = usePopperScope$1(__scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContent, {
		...popperScope,
		...popperProps,
		ref: forwardedRef,
		align,
		collisionPadding,
		style: {
			boxSizing: "border-box",
			...popperProps.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition"));
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$1, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectViewport2(props, forwardedRef) {
	const { __scopeSelect, nonce, ...viewportProps } = props;
	const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
	const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
	const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
	const prevScrollTopRef = import_react.useRef(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
		scope: __scopeSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...viewportProps,
			ref: composedRefs,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...viewportProps.style
			},
			onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
				const viewport = event.currentTarget;
				const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
				if (shouldExpandOnScrollRef?.current && contentWrapper) {
					const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
					if (scrolledBy > 0) {
						const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
						const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
						const cssHeight = parseFloat(contentWrapper.style.height);
						const prevHeight = Math.max(cssMinHeight, cssHeight);
						if (prevHeight < availableHeight) {
							const nextHeight = prevHeight + scrolledBy;
							const clampedNextHeight = Math.min(availableHeight, nextHeight);
							const heightDiff = nextHeight - clampedNextHeight;
							contentWrapper.style.height = clampedNextHeight + "px";
							if (contentWrapper.style.bottom === "0px") {
								viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
								contentWrapper.style.justifyContent = "flex-end";
							}
						}
					}
				}
				prevScrollTopRef.current = viewport.scrollTop;
			})
		})
	})] });
}, "SelectViewport"));
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext("SelectGroup");
var SelectGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectGroup2(props, forwardedRef) {
	const { __scopeSelect, ...groupProps } = props;
	const groupId = useId();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
		scope: __scopeSelect,
		id: groupId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "group",
			"aria-labelledby": groupId,
			...groupProps,
			ref: forwardedRef
		})
	});
}, "SelectGroup"));
var LABEL_NAME = "SelectLabel";
var SelectLabel = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectLabel2(props, forwardedRef) {
	const { __scopeSelect, ...labelProps } = props;
	const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		id: groupContext.id,
		...labelProps,
		ref: forwardedRef
	});
}, "SelectLabel"));
var ITEM_NAME$1 = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME$1);
var SelectItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectItem2(props, forwardedRef) {
	const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
	const context = useSelectContext(ITEM_NAME$1, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_NAME$1, __scopeSelect);
	const isSelected = context.value === value;
	const [textValue, setTextValue] = import_react.useState(textValueProp ?? "");
	const [isFocused, setIsFocused] = import_react.useState(false);
	const handleItemRefCallback = useCallbackRef((node) => contentContext.itemRefCallback?.(node, value, disabled));
	const composedRefs = useComposedRefs(forwardedRef, handleItemRefCallback);
	const textId = useId();
	const pointerTypeRef = import_react.useRef("touch");
	function handleSelect(event) {
		context.hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
		context.onUserSelect(value);
		context.onOpenChange(false);
	}
	__name$3(handleSelect, "handleSelect");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
		scope: __scopeSelect,
		value,
		disabled,
		textId,
		isSelected,
		onItemTextChange: import_react.useCallback((node) => {
			setTextValue((prevTextValue) => prevTextValue || (node?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: __scopeSelect,
			value,
			disabled,
			textValue,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "option",
				"aria-labelledby": textId,
				"data-highlighted": isFocused ? "" : void 0,
				"aria-selected": isSelected && isFocused,
				"data-state": isSelected ? "checked" : "unchecked",
				"aria-disabled": disabled || void 0,
				"data-disabled": disabled ? "" : void 0,
				tabIndex: disabled ? void 0 : -1,
				...itemProps,
				ref: composedRefs,
				onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
				onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
				onClick: composeEventHandlers(itemProps.onClick, (event) => {
					if (disabled) return;
					if (pointerTypeRef.current !== "mouse") handleSelect(event);
				}),
				onPointerUp: composeEventHandlers(itemProps.onPointerUp, (event) => {
					if (disabled) return;
					if (pointerTypeRef.current === "mouse") handleSelect(event);
				}),
				onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
					pointerTypeRef.current = event.pointerType;
				}),
				onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
					pointerTypeRef.current = event.pointerType;
					if (disabled) contentContext.onItemLeave?.();
					else if (pointerTypeRef.current === "mouse") event.currentTarget.focus({ preventScroll: true });
				}),
				onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
					if (event.currentTarget === document.activeElement) contentContext.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
					if (disabled || event.target !== event.currentTarget) return;
					if (contentContext.searchRef?.current !== "" && event.key === " ") return;
					if (SELECTION_KEYS.includes(event.key)) handleSelect(event);
					if (event.key === " ") event.preventDefault();
				})
			})
		})
	});
}, "SelectItem"));
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectItemText2(props, forwardedRef) {
	const { __scopeSelect, className, style, ...itemTextProps } = props;
	const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
	const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
	const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
	const [itemTextNode, setItemTextNode] = import_react.useState(null);
	const handleItemTextRefCallback = useCallbackRef((node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
	const composedRefs = useComposedRefs(forwardedRef, setItemTextNode, itemContext.onItemTextChange, handleItemTextRefCallback);
	const textContent = itemTextNode?.textContent;
	const nativeOption = import_react.useMemo(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
		value: itemContext.value,
		disabled: itemContext.disabled,
		children: textContent
	}, itemContext.value), [
		itemContext.disabled,
		itemContext.value,
		textContent
	]);
	const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
	useLayoutEffect2(() => {
		onNativeOptionAdd(nativeOption);
		return () => onNativeOptionRemove(nativeOption);
	}, [
		onNativeOptionAdd,
		onNativeOptionRemove,
		nativeOption
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		id: itemContext.textId,
		...itemTextProps,
		ref: composedRefs
	}), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren && !shouldShowPlaceholder(context.value) ? import_react_dom.createPortal(itemTextProps.children, context.valueNode) : null] });
}, "SelectItemText"));
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectItemIndicator2(props, forwardedRef) {
	const { __scopeSelect, ...itemIndicatorProps } = props;
	return useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect).isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...itemIndicatorProps,
		ref: forwardedRef
	}) : null;
}, "SelectItemIndicator"));
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectScrollUpButton2(props, forwardedRef) {
	const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const [canScrollUp, setCanScrollUp] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				const canScrollUp2 = viewport.scrollTop > 0;
				setCanScrollUp(canScrollUp2);
			};
			__name$3(handleScroll2, "handleScroll");
			const viewport = contentContext.viewport;
			handleScroll2();
			viewport.addEventListener("scroll", handleScroll2);
			return () => viewport.removeEventListener("scroll", handleScroll2);
		}
	}, [contentContext.viewport, contentContext.isPositioned]);
	return canScrollUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...props,
		ref: composedRefs,
		onAutoScroll: () => {
			const { viewport, selectedItem } = contentContext;
			if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
		}
	}) : null;
}, "SelectScrollUpButton"));
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectScrollDownButton2(props, forwardedRef) {
	const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const [canScrollDown, setCanScrollDown] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				const maxScroll = viewport.scrollHeight - viewport.clientHeight;
				const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
				setCanScrollDown(canScrollDown2);
			};
			__name$3(handleScroll2, "handleScroll");
			const viewport = contentContext.viewport;
			handleScroll2();
			viewport.addEventListener("scroll", handleScroll2);
			return () => viewport.removeEventListener("scroll", handleScroll2);
		}
	}, [contentContext.viewport, contentContext.isPositioned]);
	return canScrollDown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...props,
		ref: composedRefs,
		onAutoScroll: () => {
			const { viewport, selectedItem } = contentContext;
			if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
		}
	}) : null;
}, "SelectScrollDownButton"));
var SelectScrollButtonImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectScrollButtonImpl2(props, forwardedRef) {
	const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
	const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
	const autoScrollTimerRef = import_react.useRef(null);
	const getItems = useCollection(__scopeSelect);
	const clearAutoScrollTimer = import_react.useCallback(() => {
		if (autoScrollTimerRef.current !== null) {
			window.clearInterval(autoScrollTimerRef.current);
			autoScrollTimerRef.current = null;
		}
	}, []);
	import_react.useEffect(() => {
		return () => clearAutoScrollTimer();
	}, [clearAutoScrollTimer]);
	useLayoutEffect2(() => {
		getItems().find((item) => item.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [getItems]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": true,
		...scrollIndicatorProps,
		ref: forwardedRef,
		style: {
			flexShrink: 0,
			...scrollIndicatorProps.style
		},
		onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
			if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
		}),
		onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
			contentContext.onItemLeave?.();
			if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
		}),
		onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
			clearAutoScrollTimer();
		})
	});
}, "SelectScrollButtonImpl"));
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function SelectBubbleInput2({ __scopeSelect, ...props }, forwardedRef) {
	const context = useSelectContext(BUBBLE_INPUT_NAME, __scopeSelect);
	const { value, onValueChange, required, disabled, name, autoComplete, form, userSelection } = context;
	const { nativeOptions, nativeSelectKey } = context;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const selectValue = value ?? "";
	const prevValueRef = import_react.useRef(selectValue);
	const handledUserSelectionRef = import_react.useRef(userSelection);
	const isDispatchingUserSelectionRef = import_react.useRef(false);
	const hasEmptyValueOption = Array.from(nativeOptions).some((option) => (option.props.value ?? "") === "");
	import_react.useEffect(() => {
		const select = ref.current;
		if (!select) return;
		const selectProto = window.HTMLSelectElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(selectProto, "value").set;
		const isNewUserSelection = userSelection !== null && userSelection !== handledUserSelectionRef.current;
		handledUserSelectionRef.current = userSelection;
		const valueChanged = prevValueRef.current !== selectValue;
		prevValueRef.current = selectValue;
		const isUserInteraction = isNewUserSelection && valueChanged;
		if (isNewUserSelection && !valueChanged && userSelection.value !== selectValue && !userSelection.hasConsumerStoppedPropagation && setValue) {
			isDispatchingUserSelectionRef.current = true;
			try {
				setValue.call(select, userSelection.value);
				select.dispatchEvent(new Event("change", { bubbles: true }));
			} finally {
				isDispatchingUserSelectionRef.current = false;
				setValue.call(select, selectValue);
			}
			return;
		}
		const bubbles = isUserInteraction && !userSelection.hasConsumerStoppedPropagation;
		if (valueChanged && setValue) {
			const event = new Event("change", { bubbles });
			setValue.call(select, selectValue);
			select.dispatchEvent(event);
		}
	}, [selectValue, userSelection]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Primitive.select, {
		"aria-hidden": true,
		required,
		tabIndex: -1,
		name,
		autoComplete,
		disabled,
		form,
		onChange: (event) => {
			if (!isDispatchingUserSelectionRef.current) onValueChange(event.target.value);
		},
		...props,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		},
		ref: composedRefs,
		defaultValue: selectValue,
		children: [shouldShowPlaceholder(value) && !hasEmptyValueOption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }) : null, Array.from(nativeOptions)]
	}, nativeSelectKey);
}, "SelectBubbleInput"));
function isFunction(value) {
	return typeof value === "function";
}
__name$3(isFunction, "isFunction");
function shouldShowPlaceholder(value) {
	return value === "" || value === void 0;
}
__name$3(shouldShowPlaceholder, "shouldShowPlaceholder");
function useTypeaheadSearch(onSearchChange) {
	const handleSearchChange = useCallbackRef(onSearchChange);
	const searchRef = import_react.useRef("");
	const timerRef = import_react.useRef(0);
	const handleTypeaheadSearch = import_react.useCallback((key) => {
		const search = searchRef.current + key;
		handleSearchChange(search);
		function updateSearch(value) {
			searchRef.current = value;
			window.clearTimeout(timerRef.current);
			if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
		}
		__name$3(updateSearch, "updateSearch");
		updateSearch(search);
	}, [handleSearchChange]);
	const resetTypeahead = import_react.useCallback(() => {
		searchRef.current = "";
		window.clearTimeout(timerRef.current);
	}, []);
	import_react.useEffect(() => {
		return () => window.clearTimeout(timerRef.current);
	}, []);
	return [
		searchRef,
		handleTypeaheadSearch,
		resetTypeahead
	];
}
__name$3(useTypeaheadSearch, "useTypeaheadSearch");
function findNextItem(items, search, currentItem) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
	let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
	if (normalizedSearch.length === 1) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
	const nextItem = wrappedItems.find((item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextItem !== currentItem ? nextItem : void 0;
}
__name$3(findNextItem, "findNextItem");
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name$3(wrapArray, "wrapArray");
// node_modules/.pnpm/@radix-ui+react-toggle@1.2.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_de7c9f81d6808adaa4fa45c6bd828d6f/node_modules/@radix-ui/react-toggle/dist/index.mjs
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var NAME = "Toggle";
var Toggle = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function Toggle2(props, forwardedRef) {
	const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
	const [pressed, setPressed] = useControllableState({
		prop: pressedProp,
		onChange: onPressedChange,
		defaultProp: defaultPressed ?? false,
		caller: NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-pressed": pressed,
		"data-state": pressed ? "on" : "off",
		"data-disabled": props.disabled ? "" : void 0,
		...buttonProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => {
			if (!props.disabled) setPressed(!pressed);
		})
	});
}, "Toggle"));
// node_modules/.pnpm/@radix-ui+react-toggle-group@1.2.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_708bc0e1d21164fdee5bfe89ab2f4b8c/node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var TOGGLE_GROUP_NAME = "ToggleGroup";
var ToggleGroupType = {
	Single: "single",
	Multiple: "multiple"
};
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var ToggleGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToggleGroup2(props, forwardedRef) {
	const { type, ...toggleGroupProps } = props;
	if (type === ToggleGroupType.Single) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImplSingle, {
		role: "radiogroup",
		...toggleGroupProps,
		ref: forwardedRef
	});
	if (type === ToggleGroupType.Multiple) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImplMultiple, {
		role: "toolbar",
		...toggleGroupProps,
		ref: forwardedRef
	});
	throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
}, "ToggleGroup"));
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToggleGroupImplSingle2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name$1(() => {}, "onValueChange"), ...toggleGroupSingleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange,
		caller: TOGGLE_GROUP_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
		scope: props.__scopeToggleGroup,
		type: ToggleGroupType.Single,
		value: import_react.useMemo(() => value ? [value] : [], [value]),
		onItemActivate: setValue,
		onItemDeactivate: import_react.useCallback(() => setValue(""), [setValue]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
			...toggleGroupSingleProps,
			ref: forwardedRef
		})
	});
}, "ToggleGroupImplSingle"));
var ToggleGroupImplMultiple = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToggleGroupImplMultiple2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name$1(() => {}, "onValueChange"), ...toggleGroupMultipleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? [],
		onChange: onValueChange,
		caller: TOGGLE_GROUP_NAME
	});
	const handleButtonActivate = import_react.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
	const handleButtonDeactivate = import_react.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
		scope: props.__scopeToggleGroup,
		type: ToggleGroupType.Multiple,
		value,
		onItemActivate: handleButtonActivate,
		onItemDeactivate: handleButtonDeactivate,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
			...toggleGroupMultipleProps,
			ref: forwardedRef
		})
	});
}, "ToggleGroupImplMultiple"));
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToggleGroupImpl2(props, forwardedRef) {
	const { __scopeToggleGroup, disabled = false, rovingFocus = true, orientation, dir, loop = true, ...toggleGroupProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
	const direction = useDirection(dir);
	const commonProps = {
		dir: direction,
		...toggleGroupProps
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupContext, {
		scope: __scopeToggleGroup,
		rovingFocus,
		disabled,
		children: rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroup, {
			asChild: true,
			...rovingFocusGroupScope,
			orientation,
			dir: direction,
			loop,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...commonProps,
				ref: forwardedRef
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...commonProps,
			ref: forwardedRef
		})
	});
}, "ToggleGroupImpl"));
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToggleGroupItem2(props, forwardedRef) {
	const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
	const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
	const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
	const pressed = valueContext.value.includes(props.value);
	const disabled = context.disabled || props.disabled;
	const commonProps = {
		...props,
		pressed,
		disabled
	};
	const ref = import_react.useRef(null);
	return context.rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupItem, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: pressed,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
			...commonProps,
			ref: forwardedRef
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
		...commonProps,
		ref: forwardedRef
	});
}, "ToggleGroupItem"));
var ToggleGroupItemImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToggleGroupItemImpl2(props, forwardedRef) {
	const { __scopeToggleGroup, value, ...itemProps } = props;
	const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
	const singleProps = {
		role: "radio",
		"aria-checked": props.pressed,
		"aria-pressed": void 0
	};
	const typeProps = valueContext.type === ToggleGroupType.Single ? singleProps : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
		...typeProps,
		...itemProps,
		ref: forwardedRef,
		onPressedChange: (pressed) => {
			if (pressed) valueContext.onItemActivate(value);
			else valueContext.onItemDeactivate(value);
		}
	});
}, "ToggleGroupItemImpl"));
// node_modules/.pnpm/@radix-ui+react-tooltip@1.4.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_29b7207499ca9b573eabeaa0eb3894bd/node_modules/@radix-ui/react-tooltip/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = /* @__PURE__ */ __name((props) => {
	const { __scopeTooltip, delayDuration = DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
	const isOpenDelayedRef = import_react.useRef(true);
	const isPointerInTransitRef = import_react.useRef(false);
	const skipDelayTimerRef = import_react.useRef(0);
	import_react.useEffect(() => {
		const skipDelayTimer = skipDelayTimerRef.current;
		return () => window.clearTimeout(skipDelayTimer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProviderContextProvider, {
		scope: __scopeTooltip,
		isOpenDelayedRef,
		delayDuration,
		onOpen: import_react.useCallback(() => {
			if (skipDelayDuration <= 0) return;
			window.clearTimeout(skipDelayTimerRef.current);
			isOpenDelayedRef.current = false;
		}, [skipDelayDuration]),
		onClose: import_react.useCallback(() => {
			if (skipDelayDuration <= 0) return;
			window.clearTimeout(skipDelayTimerRef.current);
			skipDelayTimerRef.current = window.setTimeout(() => isOpenDelayedRef.current = true, skipDelayDuration);
		}, [skipDelayDuration]),
		isPointerInTransitRef,
		onPointerInTransitChange: import_react.useCallback((inTransit) => {
			isPointerInTransitRef.current = inTransit;
		}, []),
		disableHoverableContent,
		children
	});
}, "TooltipProvider");
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = /* @__PURE__ */ __name((props) => {
	const { __scopeTooltip, children, open: openProp, defaultOpen, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
	const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
	const popperScope = usePopperScope(__scopeTooltip);
	const [trigger, setTrigger] = import_react.useState(null);
	const [contentIdState, setContentId] = import_react.useState(void 0);
	const generatedContentId = useId();
	const openTimerRef = import_react.useRef(0);
	const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
	const delayDuration = delayDurationProp ?? providerContext.delayDuration;
	const wasOpenDelayedRef = import_react.useRef(false);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: /* @__PURE__ */ __name((open2) => {
			if (open2) {
				providerContext.onOpen();
				document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
			} else providerContext.onClose();
			onOpenChange?.(open2);
		}, "onChange"),
		caller: TOOLTIP_NAME
	});
	const stateAttribute = import_react.useMemo(() => {
		return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
	}, [open]);
	const handleOpen = import_react.useCallback(() => {
		window.clearTimeout(openTimerRef.current);
		openTimerRef.current = 0;
		wasOpenDelayedRef.current = false;
		setOpen(true);
	}, [setOpen]);
	const handleClose = import_react.useCallback(() => {
		window.clearTimeout(openTimerRef.current);
		openTimerRef.current = 0;
		setOpen(false);
	}, [setOpen]);
	const handleDelayedOpen = import_react.useCallback(() => {
		window.clearTimeout(openTimerRef.current);
		openTimerRef.current = window.setTimeout(() => {
			wasOpenDelayedRef.current = true;
			setOpen(true);
			openTimerRef.current = 0;
		}, delayDuration);
	}, [delayDuration, setOpen]);
	import_react.useEffect(() => {
		return () => {
			if (openTimerRef.current) {
				window.clearTimeout(openTimerRef.current);
				openTimerRef.current = 0;
			}
		};
	}, []);
	const contentId = contentIdState ?? generatedContentId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContextProvider, {
			scope: __scopeTooltip,
			contentId,
			setContentId,
			open,
			stateAttribute,
			trigger,
			onTriggerChange: setTrigger,
			onTriggerEnter: import_react.useCallback(() => {
				if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
				else handleOpen();
			}, [
				providerContext.isOpenDelayedRef,
				handleDelayedOpen,
				handleOpen
			]),
			onTriggerLeave: import_react.useCallback(() => {
				if (disableHoverableContent) handleClose();
				else {
					window.clearTimeout(openTimerRef.current);
					openTimerRef.current = 0;
				}
			}, [handleClose, disableHoverableContent]),
			onOpen: handleOpen,
			onClose: handleClose,
			disableHoverableContent,
			children
		})
	});
}, "Tooltip");
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TooltipTrigger2(props, forwardedRef) {
	const { __scopeTooltip, "aria-describedby": ariaDescribedby, ...triggerProps } = props;
	const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
	const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
	const popperScope = usePopperScope(__scopeTooltip);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
	const isPointerDownRef = import_react.useRef(false);
	const hasPointerMoveOpenedRef = import_react.useRef(false);
	const handlePointerUp = import_react.useCallback(() => isPointerDownRef.current = false, []);
	import_react.useEffect(() => {
		return () => document.removeEventListener("pointerup", handlePointerUp);
	}, [handlePointerUp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			"aria-describedby": context.open ? concatAriaDescribedby(ariaDescribedby, context.contentId) : ariaDescribedby,
			"data-state": context.stateAttribute,
			...triggerProps,
			ref: composedRefs,
			onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
				if (event.pointerType === "touch") return;
				if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
					context.onTriggerEnter();
					hasPointerMoveOpenedRef.current = true;
				}
			}),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
				context.onTriggerLeave();
				hasPointerMoveOpenedRef.current = false;
			}),
			onPointerDown: composeEventHandlers(props.onPointerDown, () => {
				if (context.open) context.onClose();
				isPointerDownRef.current = true;
				document.addEventListener("pointerup", handlePointerUp, { once: true });
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				if (!isPointerDownRef.current) context.onOpen();
			}),
			onBlur: composeEventHandlers(props.onBlur, context.onClose),
			onClick: composeEventHandlers(props.onClick, context.onClose)
		})
	});
}, "TooltipTrigger"));
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 });
var TooltipPortal = /* @__PURE__ */ __name((props) => {
	const { __scopeTooltip, forceMount, children, container } = props;
	const context = useTooltipContext(PORTAL_NAME, __scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeTooltip,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children
			})
		})
	});
}, "TooltipPortal");
var CONTENT_NAME = "TooltipContent";
var TooltipContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TooltipContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
	const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
	const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.disableHoverableContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentImpl, {
			side,
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentHoverable, {
			side,
			...contentProps,
			ref: forwardedRef
		})
	});
}, "TooltipContent"));
var TooltipContentHoverable = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TooltipContentHoverable2(props, forwardedRef) {
	const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
	const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [pointerGraceArea, setPointerGraceArea] = import_react.useState(null);
	const { trigger, onClose } = context;
	const content = ref.current;
	const { onPointerInTransitChange } = providerContext;
	const handleRemoveGraceArea = import_react.useCallback(() => {
		setPointerGraceArea(null);
		onPointerInTransitChange(false);
	}, [onPointerInTransitChange]);
	const handleCreateGraceArea = import_react.useCallback((event, hoverTarget) => {
		const currentTarget = event.currentTarget;
		const exitPoint = {
			x: event.clientX,
			y: event.clientY
		};
		const paddedExitPoints = getPaddedExitPoints(exitPoint, getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect()));
		const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
		const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
		setPointerGraceArea(graceArea);
		onPointerInTransitChange(true);
	}, [onPointerInTransitChange]);
	import_react.useEffect(() => {
		return () => handleRemoveGraceArea();
	}, [handleRemoveGraceArea]);
	import_react.useEffect(() => {
		if (trigger && content) {
			const handleTriggerLeave = /* @__PURE__ */ __name((event) => handleCreateGraceArea(event, content), "handleTriggerLeave");
			const handleContentLeave = /* @__PURE__ */ __name((event) => handleCreateGraceArea(event, trigger), "handleContentLeave");
			trigger.addEventListener("pointerleave", handleTriggerLeave);
			content.addEventListener("pointerleave", handleContentLeave);
			return () => {
				trigger.removeEventListener("pointerleave", handleTriggerLeave);
				content.removeEventListener("pointerleave", handleContentLeave);
			};
		}
	}, [
		trigger,
		content,
		handleCreateGraceArea,
		handleRemoveGraceArea
	]);
	import_react.useEffect(() => {
		if (pointerGraceArea) {
			const handleTrackPointerGrace = /* @__PURE__ */ __name((event) => {
				const target = event.target;
				const pointerPosition = {
					x: event.clientX,
					y: event.clientY
				};
				const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
				const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
				if (hasEnteredTarget) handleRemoveGraceArea();
				else if (isPointerOutsideGraceArea) {
					handleRemoveGraceArea();
					onClose();
				}
			}, "handleTrackPointerGrace");
			document.addEventListener("pointermove", handleTrackPointerGrace);
			return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
		}
	}, [
		trigger,
		content,
		pointerGraceArea,
		onClose,
		handleRemoveGraceArea
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentImpl, {
		...props,
		ref: composedRefs
	});
}, "TooltipContentHoverable"));
var Slottable = createSlottable("TooltipContent");
var TooltipContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TooltipContentImpl2(props, forwardedRef) {
	const { __scopeTooltip, children, "aria-label": ariaLabel, id: idProp, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
	const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
	const popperScope = usePopperScope(__scopeTooltip);
	const { onClose } = context;
	const [contentNode, setContentNode] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContentNode);
	useFocusScopeBranch(contentNode);
	import_react.useEffect(() => {
		document.addEventListener(TOOLTIP_OPEN, onClose);
		return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
	}, [onClose]);
	import_react.useEffect(() => {
		if (context.trigger) {
			const handleScroll = /* @__PURE__ */ __name((event) => {
				if (event.target instanceof Node && event.target.contains(context.trigger)) onClose();
			}, "handleScroll");
			window.addEventListener("scroll", handleScroll, { capture: true });
			return () => window.removeEventListener("scroll", handleScroll, { capture: true });
		}
	}, [context.trigger, onClose]);
	const { setContentId } = context;
	useLayoutEffect2(() => {
		setContentId(idProp);
		return () => {
			setContentId(void 0);
		};
	}, [idProp, setContentId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: true,
		disableOutsidePointerEvents: false,
		onEscapeKeyDown,
		onPointerDownOutside,
		onFocusOutside: (event) => event.preventDefault(),
		onDismiss: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopperContent, {
			"data-state": context.stateAttribute,
			role: ariaLabel ? void 0 : "tooltip",
			id: ariaLabel ? void 0 : context.contentId,
			...popperScope,
			...contentProps,
			ref: composedRefs,
			style: {
				...contentProps.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable, { children }), ariaLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden, {
				id: context.contentId,
				role: "tooltip",
				children: ariaLabel
			}) : null]
		})
	});
}, "TooltipContentImpl"));
var TooltipArrow = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TooltipArrow2(props, forwardedRef) {
	const { __scopeTooltip, ...arrowProps } = props;
	const popperScope = usePopperScope(__scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperArrow, {
		...popperScope,
		...arrowProps,
		ref: forwardedRef
	});
}, "TooltipArrow"));
function getExitSideFromRect(point, rect) {
	const top = Math.abs(rect.top - point.y);
	const bottom = Math.abs(rect.bottom - point.y);
	const right = Math.abs(rect.right - point.x);
	const left = Math.abs(rect.left - point.x);
	switch (Math.min(top, bottom, right, left)) {
		case left: return "left";
		case right: return "right";
		case top: return "top";
		case bottom: return "bottom";
		default: throw new Error("unreachable");
	}
}
__name(getExitSideFromRect, "getExitSideFromRect");
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
	const paddedExitPoints = [];
	switch (exitSide) {
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
		case "right": paddedExitPoints.push({
			x: exitPoint.x - padding,
			y: exitPoint.y - padding
		}, {
			x: exitPoint.x - padding,
			y: exitPoint.y + padding
		});
	}
	return paddedExitPoints;
}
__name(getPaddedExitPoints, "getPaddedExitPoints");
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
__name(getPointsFromRect, "getPointsFromRect");
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const ii = polygon[i];
		const jj = polygon[j];
		const xi = ii.x;
		const yi = ii.y;
		const xj = jj.x;
		const yj = jj.y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
__name(isPointInPolygon, "isPointInPolygon");
function getHull(points) {
	const newPoints = points.slice();
	newPoints.sort((a, b) => {
		if (a.x < b.x) return -1;
		else if (a.x > b.x) return 1;
		else if (a.y < b.y) return -1;
		else if (a.y > b.y) return 1;
		else return 0;
	});
	return getHullPresorted(newPoints);
}
__name(getHull, "getHull");
function getHullPresorted(points) {
	if (points.length <= 1) return points.slice();
	const upperHull = [];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		while (upperHull.length >= 2) {
			const q = upperHull[upperHull.length - 1];
			const r = upperHull[upperHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
			else break;
		}
		upperHull.push(p);
	}
	upperHull.pop();
	const lowerHull = [];
	for (let i = points.length - 1; i >= 0; i--) {
		const p = points[i];
		while (lowerHull.length >= 2) {
			const q = lowerHull[lowerHull.length - 1];
			const r = lowerHull[lowerHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
			else break;
		}
		lowerHull.push(p);
	}
	lowerHull.pop();
	if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
	else return upperHull.concat(lowerHull);
}
__name(getHullPresorted, "getHullPresorted");
function concatAriaDescribedby(...values) {
	const ids = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (typeof value !== "string") continue;
		for (const id of String(value).trim().split(/\s+/)) if (id) ids.add(id);
	}
	return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name(concatAriaDescribedby, "concatAriaDescribedby");
// src/utils/frontendConfigHelper.ts
var getFrontendConfig = () => {
	return window.getFrontendConfig();
};
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function joinValues(array, separator = "|") {
	return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
var Cached = class {
	constructor(getter) {
		this._getter = getter;
		this._value = void 0;
	}
	get value() {
		const getter = this._getter;
		if (getter !== void 0) {
			this._value = getter();
			this._getter = void 0;
		}
		return this._value;
	}
};
function cached(getter) {
	return new Cached(getter);
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
	const ratio = val / step;
	const roundedRatio = Math.round(ratio);
	const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
	if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
	return ratio - roundedRatio;
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
/**
* Whichever object a def's `shape` currently answers from: the one the caller passed until the first read, the frozen copy after it.
*
* Its keys and descriptors read without invoking anything, which is what lets a discriminated union check its discriminator, and the cycle walk read a shape, without resolving a getter that references the schema being constructed. A def that answers `shape` from an accessor of its own has none.
*/
function rawShape(def) {
	const desc = Object.getOwnPropertyDescriptor(def, "shape");
	return desc?.get ? desc.get.raw : desc?.value;
}
function sourceShape(schema) {
	return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key, getter) {
	Object.defineProperty(target, key, {
		get() {
			const value = getter();
			assignProp(this, key, value);
			return value;
		},
		enumerable: true,
		configurable: true
	});
}
function putProp(target, key, value) {
	if (key in target) assignProp(target, key, value);
	else target[key] = value;
}
/**
* Copies `keys` of `source`'s shape onto `target`, each value passed through `wrap`.
*
* A key the source has resolved is copied through now, so the derived shape states it outright and nothing has to resolve it to learn what it holds. A key the source still defers stays deferred, and reads back through the source's own `shape`, so it resolves once and both shapes get that one schema.
*/
function mirrorShape(target, source, keys, wrap) {
	const raw = sourceShape(source);
	for (const key of keys) {
		const desc = Object.getOwnPropertyDescriptor(raw, key);
		if (!desc.enumerable) continue;
		if (desc.get) deferProp(target, key, () => {
			const value = source._zod.def.shape[key];
			return wrap ? wrap(value, key) : value;
		});
		else putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
	}
}
function mirrorProps(target, source) {
	for (const key of Reflect.ownKeys(source)) {
		const desc = Object.getOwnPropertyDescriptor(source, key);
		if (!desc.enumerable) continue;
		if (desc.get) deferProp(target, key, () => source[key]);
		else putProp(target, key, desc.value);
	}
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) {
		const descriptors = Object.getOwnPropertyDescriptors(def);
		Object.assign(mergedDescriptors, descriptors);
	}
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__*/ cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
var propertyKeyTypes = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
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
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function stringifyPrimitive(value) {
	if (typeof value === "bigint") return value.toString() + "n";
	if (typeof value === "string") return `"${value}"`;
	return `${value}`;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional";
	});
}
var NUMBER_FORMAT_RANGES = /*@__PURE__*/ (() => ({
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
var BIGINT_FORMAT_RANGES = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	const newShape = {};
	mirrorShape(newShape, schema, maskedKeys(schema, mask));
	return clone(schema, mergeDefs(currDef, {
		shape: newShape,
		checks: []
	}));
}
function maskedKeys(schema, mask) {
	const raw = sourceShape(schema);
	const keys = [];
	for (const key of Reflect.ownKeys(mask)) {
		if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) throw new Error(`Unrecognized key: "${String(key)}"`);
		if (mask[key]) keys.push(key);
	}
	return keys;
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	const omitted = new Set(maskedKeys(schema, mask));
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key)));
	return clone(schema, mergeDefs(currDef, {
		shape: newShape,
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = sourceShape(schema);
		for (const key of Reflect.ownKeys(shape)) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
	mirrorProps(newShape, shape);
	return newShape;
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
	if (!b?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	const newShape = {};
	mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
	mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
	return clone(a, mergeDefs(a._zod.def, {
		shape: newShape,
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema, mask, name = "partial") {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
	const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class && ((value, key) => selected && !selected.has(key) ? value : new Class({
		type: "optional",
		innerType: value
	})));
	return clone(schema, mergeDefs(schema._zod.def, {
		shape: newShape,
		checks: []
	}));
}
function required$1(Class, schema, mask) {
	const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => selected && !selected.has(key) ? value : new Class({
		type: "nonoptional",
		innerType: value
	}));
	return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a;
		(_a = iss).path ?? (_a.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
/** The leading size checks of `defChecks` that set an upper bound, each paired with it. */
function sizeCaps(defChecks) {
	const caps = [];
	for (const ch of defChecks ?? []) {
		const d = ch._zod.def;
		if (!/_(length|size)$|_equals$/.test(d.check)) break;
		const max = d.maximum ?? d.length ?? d.size;
		if (max >= 0) caps.push([max, ch]);
	}
	return caps;
}
function attachSchema(issues, start, inst) {
	var _a;
	for (let i = start; i < issues.length; i++) (_a = issues[i]).schema ?? (_a.schema = inst);
}
function finalizeIssue(iss, ctx, config) {
	var _a;
	const traits = iss.inst?._zod?.traits;
	if (traits?.has("$ZodType")) {
		if (traits.has("$ZodCheck")) (_a = iss).schema ?? (_a.schema = iss.inst);
		else iss.schema = iss.inst;
	}
	const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0;
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
	const full = {};
	for (const k of Object.keys(iss)) {
		if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__") continue;
		full[k] = iss[k];
	}
	full.path ?? (full.path = []);
	full.message = message;
	if (ctx?.reportInput) full.input = iss.input;
	return full;
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
	const units = str.length;
	if (!highSurrogate.test(str)) return units;
	let count = units;
	for (let i = 0; i < units - 1; i++) if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
		count--;
		i++;
	}
	return count;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function parsedType(data) {
	const t = typeof data;
	switch (t) {
		case "number": return Number.isNaN(data) ? "nan" : "number";
		case "object": {
			if (data === null) return "null";
			if (Array.isArray(data)) return "array";
			const obj = data;
			if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) return obj.constructor.name;
		}
	}
	return t;
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
/**
* Installs a trait's members on its prototype. Each value builds that member for the instance on first read; the built value shadows the accessor as an own property, so a detached `const { parse } = schema` keeps working.
*
* Call this from a `proto` initializer, which runs once per prototype — never per instance.
*/
function members(proto, table) {
	for (const key in table) {
		const desc = Object.getOwnPropertyDescriptor(table, key);
		if (desc.get) Object.defineProperty(proto, key, {
			...desc,
			enumerable: false
		});
		else defineBound(proto, key, desc.value);
	}
}
/** Shadows a prototype member with an own value, so a getter that builds from the instance runs once. */
function own(inst, key, value, enumerable = true) {
	Object.defineProperty(inst, key, {
		configurable: true,
		writable: true,
		enumerable,
		value
	});
	return value;
}
/** Like {@link own}, for a member that was never an own data property and has to stay out of `Object.keys`. */
function hide(inst, key, value) {
	return own(inst, key, value, false);
}
/** Adds members a table derives from the instance: each builds on first read and shadows as own data, and assignment shadows the same way, as when these were own properties. */
/* @__NO_SIDE_EFFECTS__ */
function derived(computes, table) {
	for (const key in computes) {
		const compute = computes[key];
		Object.defineProperty(table, key, {
			configurable: true,
			enumerable: true,
			get() {
				return own(this, key, compute(this));
			},
			set(value) {
				own(this, key, value);
			}
		});
	}
	return table;
}
function defineBound(proto, key, fn) {
	Object.defineProperty(proto, key, {
		configurable: true,
		get() {
			return this == null ? fn : own(this, key, fn.bind(this));
		},
		set(value) {
			own(this, key, value);
		}
	});
}
/** Returns the prototype to install on, or `undefined` if this group is already installed on it. */
function claim(inst, sentinel) {
	const proto = Object.getPrototypeOf(inst);
	return sentinel in proto ? void 0 : proto;
}
var installing;
var broke = false;
var breaker = {
	configurable: true,
	get() {
		broke = true;
	}
};
/**
* Installs a lazily-derived internal on the `_zod` prototype of `inst`'s
* constructor, computed from the internals object itself and cached there on
* first read. One accessor per constructor rather than one per instance.
*/
function defineLazyInternal(inst, key, compute) {
	const proto = Object.getPrototypeOf(inst._zod);
	if (key in proto && installing !== inst._zod) {
		installing = void 0;
		return;
	}
	installing = inst._zod;
	Object.defineProperty(proto, key, {
		configurable: true,
		get() {
			Object.defineProperty(this, key, breaker);
			const outer = broke;
			broke = false;
			try {
				const value = compute(this);
				if (broke) delete this[key];
				else Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					value
				});
				broke = broke || outer;
				return value;
			} catch (err) {
				delete this[key];
				broke = broke || outer;
				throw err;
			}
		},
		set(value) {
			Object.defineProperty(this, key, {
				configurable: true,
				writable: true,
				value
			});
		}
	});
}
/**
* Installs `key` on `inst`'s prototype, computed by `make` on first read and cached there as an own
* data property. One accessor per constructor rather than one per instance, because an own accessor
* puts every instance after the first into v8 dictionary mode. The key doubles as the sentinel.
*/
function installLazyProp(inst, key, make, enumerable) {
	const proto = claim(inst, key);
	if (!proto) return;
	Object.defineProperty(proto, key, {
		configurable: true,
		get() {
			const desc = {
				configurable: true,
				writable: true,
				enumerable,
				value: void 0
			};
			Object.defineProperty(this, key, desc);
			desc.value = make(this);
			Object.defineProperty(this, key, desc);
			return desc.value;
		},
		set(value) {
			Object.defineProperty(this, key, {
				configurable: true,
				writable: true,
				enumerable,
				value
			});
		}
	});
}
/** Marks the thunk `_catch` synthesises for a constant catch value. `Function.length` cannot tell that thunk from a user callback — rest and defaulted parameters both report arity 0 — and a user callback reads `ctx.error`, whose issues only finalize correctly against the caller's per-parse error map. Provenance can say what arity cannot. A plain string key rather than `Symbol.for`, whose call at module scope no bundler can prove pure — the same shape that anchored `urlCanParse` into every build. */
var CONSTANT_CATCH = "~constantCatch";
/** Wraps a constant catch value in a thunk tagged with {@link CONSTANT_CATCH}. */
function constantCatch(value) {
	const fn = () => value;
	fn[CONSTANT_CATCH] = true;
	return fn;
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/core.js
var _a$1;
var _zodDesc = {
	value: void 0,
	enumerable: false
};
var _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
	const E = _E;
	if (E) {
		const saved = E.stackTraceLimit;
		if (typeof saved === "number") {
			try {
				E.stackTraceLimit = 0;
			} catch {
				_E = null;
				return new Definition();
			}
			try {
				return new Definition();
			} finally {
				E.stackTraceLimit = saved;
			}
		}
	}
	return new Definition();
}
/* @__NO_SIDE_EFFECTS__ */
function $constructor(name, initializer, proto, params) {
	const zodProto = {};
	function Internals(def) {
		this.def = def;
		this.constr = _;
		this.traits = /* @__PURE__ */ new Set();
	}
	Internals.prototype = zodProto;
	const protoMembers = proto;
	const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
	function init(inst, def) {
		if (!inst._zod) {
			_zodDesc.value = new Internals(def);
			try {
				Object.defineProperty(inst, "_zod", _zodDesc);
			} finally {
				_zodDesc.value = void 0;
			}
		} else if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer(inst, def);
		if (initialized) {
			const own = Object.getPrototypeOf(inst);
			const ctorProto = inst._zod.constr.prototype;
			let up = own;
			while (up && up !== ctorProto) up = Object.getPrototypeOf(up);
			const target = up ?? own;
			if (!initialized.has(target)) {
				initialized.add(target);
				members(target, protoMembers);
			}
		}
		const proto = _.prototype;
		for (const k in proto) {
			if (!Object.prototype.hasOwnProperty.call(proto, k)) continue;
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		const inst = params?.Parent ? newError(Definition) : this;
		init(inst, def);
		const deferred = inst._zod.deferred;
		if (deferred) {
			for (const fn of deferred) fn();
			inst._zod.deferred = void 0;
		}
		const pp = globalThis.__zod_globalConfig?.postProcessor;
		if (pp) pp(inst);
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/errors.js
function _getMessage() {
	const internals = this._zod;
	internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
	return internals.message;
}
function _setMessage(value) {
	this._zod.message = value;
}
var _messageDesc = {
	get: _getMessage,
	set: _setMessage,
	enumerable: true,
	configurable: true
};
var _issuesDesc = {
	value: void 0,
	enumerable: false
};
var _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
var initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	_issuesDesc.value = def;
	Object.defineProperty(inst, "issues", _issuesDesc);
	_issuesDesc.value = void 0;
	Object.defineProperty(inst, "message", _messageDesc);
	const proto = Object.getPrototypeOf(inst);
	if (!_installedToString.has(proto)) {
		_installedToString.add(proto);
		Object.defineProperty(proto, "toString", {
			configurable: true,
			enumerable: false,
			get() {
				const value = () => this.message;
				Object.defineProperty(this, "toString", {
					value,
					configurable: true,
					writable: true
				});
				return value;
			},
			set(value) {
				Object.defineProperty(this, "toString", {
					value,
					configurable: true,
					writable: true
				});
			}
		});
	}
};
var $ZodError = /* @__PURE__ */ $constructor("$ZodError", initializer$1);
/** Get-or-create `obj[key]` as an own data property. A path segment naming an inherited member
* ("toString", "constructor") would otherwise read through to the prototype, and assigning
* "__proto__" would hit the setter instead of creating a key. */
function node(obj, key, make) {
	if (!Object.prototype.hasOwnProperty.call(obj, key)) {
		if (key === "__proto__") Object.defineProperty(obj, key, {
			value: make(),
			writable: true,
			enumerable: true,
			configurable: true
		});
		else obj[key] = make();
	}
	return obj[key];
}
function flattenError(error, mapper = (issue) => issue.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
	else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue) => issue.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error, path = []) => {
		for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
		else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else {
			const fullpath = [...path, ...issue.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					const terminal = i === fullpath.length - 1;
					if (el === "_errors") {
						if (terminal) curr._errors.push(mapper(issue));
						i++;
						continue;
					}
					if (!Object.prototype.hasOwnProperty.call(curr, el)) Object.defineProperty(curr, el, {
						value: { _errors: [] },
						enumerable: true,
						writable: true,
						configurable: true
					});
					const node = curr[el];
					if (terminal) node._errors.push(mapper(issue));
					curr = node;
					i++;
				}
			}
		}
	};
	processError(error);
	return fieldErrors;
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
	return {
		callee: params?.callee ?? callee,
		Err: params?.Err
	};
}
var _parse = (_Err) => {
	const fn = (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			async: false
		} : { async: false };
		const result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) throw new $ZodAsyncError();
		if (result.issues.length) {
			const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, _params?.callee ?? fn);
			throw e;
		}
		return result.value;
	};
	return fn;
};
var _parseAsync = (_Err) => {
	const fn = async (schema, value, _ctx, params) => {
		const ctx = _ctx ? {
			..._ctx,
			async: true
		} : { async: true };
		let result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) result = await result;
		if (result.issues.length) {
			const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, params?.callee ?? fn);
			throw e;
		}
		return result.value;
	};
	return fn;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? failure(_Err, result.issues, ctx) : {
		success: true,
		data: result.value
	};
};
function failure(Err, issues, ctx) {
	let error;
	return {
		success: false,
		get error() {
			if (!error) {
				error = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
				issues = void 0;
				ctx = void 0;
			}
			return error;
		},
		set error(e) {
			error = e;
			issues = void 0;
			ctx = void 0;
		}
	};
}
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? failure(_Err, result.issues, ctx) : {
		success: true,
		data: result.value
	};
};
var COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
var COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
var validate = ((schema, value, _ctx) => {
	const validator = schema._zod.bag.validator;
	if (validator !== void 0) {
		if (validator(value) !== COMPILE_INVALID) return true;
		if (validator.definite === true && _ctx === void 0) return false;
	}
	return validateFallback(schema, value, _ctx);
});
function validateFallback(schema, value, _ctx) {
	const ctx = _ctx ? {
		..._ctx,
		async: false,
		abortEarly: true
	} : {
		async: false,
		abortEarly: true
	};
	const fallbackRun = schema._zod.bag.fallbackRun;
	let result;
	if (fallbackRun) {
		ctx[COMPILE_FALLBACK] = true;
		result = fallbackRun({
			value,
			issues: []
		}, ctx);
	} else result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length === 0;
}
var validateAsync$1 = async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true,
		abortEarly: true
	} : {
		async: true,
		abortEarly: true
	};
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length === 0;
};
var _encode = (_Err) => {
	const parse = _parse(_Err);
	const fn = (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			direction: "backward"
		} : { direction: "backward" };
		return parse(schema, value, ctx, finalizeParams(fn, _params));
	};
	return fn;
};
var _decode = (_Err) => {
	const parse = _parse(_Err);
	const fn = (schema, value, _ctx, _params) => {
		return parse(schema, value, _ctx, finalizeParams(fn, _params));
	};
	return fn;
};
var _encodeAsync = (_Err) => {
	const parseAsync = _parseAsync(_Err);
	const fn = async (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			direction: "backward"
		} : { direction: "backward" };
		return await parseAsync(schema, value, ctx, finalizeParams(fn, _params));
	};
	return fn;
};
var _decodeAsync = (_Err) => {
	const parseAsync = _parseAsync(_Err);
	const fn = async (schema, value, _ctx, _params) => {
		return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
	};
	return fn;
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/regexes.js
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
	return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
var uuid$1 = (version) => {
	if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
/** Practical email validation */
var email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
/** Anchors a pattern source. The interpolation lives here rather than at the call site because
* esbuild will not drop a `@__PURE__` call whose own argument interpolates a variable, but it
* will drop `anchor(dateSource)`. Keeping it inline pinned `date` into every bundle. */
function anchor(source) {
	return new RegExp(`^${source}$`);
}
var date = /*@__PURE__*/ anchor(dateSource);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time(args) {
	return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
	const opts = ["Z"];
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const qualified = `${timeSource({
		precision: args.precision,
		seconds: true
	})}(?:${opts.join("|")})`;
	const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
	return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var anyString = /^[\s\S]{0,}$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean$1 = /^(?:true|false)$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/checks.js
var $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
/** Default `when` for length-based checks: run only on non-nullish values with a `length`. */
var _whenHasLength = (payload) => {
	const val = payload.value;
	return !nullish(val) && val.length !== void 0;
};
var numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
var $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin: numericOriginMap[typeof payload.value] ?? origin,
			code: "too_big",
			maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin: numericOriginMap[typeof payload.value] ?? origin,
			code: "too_small",
			minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? def.value !== BigInt(0) && payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					continue: false,
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		if ((typeof input === "string" && units > def.maximum ? codePointLength(input) : units) <= def.maximum) return;
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
var $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		if ((typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units) >= def.minimum) return;
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
var $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
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
var $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a, _b;
	$ZodCheck.init(inst, def);
	if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	def.pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = [], closed = {}) {
		this.content = [];
		this.indent = 0;
		this.args = args;
		this.closed = closed;
	}
	indented(fn) {
		this.indent += 1;
		try {
			fn(this);
		} finally {
			this.indent -= 1;
		}
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const content = this?.content ?? [``];
		return new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${content.join("\n")}\n};`)(...Object.values(this.closed));
	}
};
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/versions.js
var version = {
	major: 4,
	minor: 6,
	patch: 7
};
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/schemas.js
var $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const defChecks = inst._zod.def.checks;
	const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			if (payload.memo) return payload;
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					attachSchema(payload.issues, currLen, inst);
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					attachSchema(payload.issues, currLen, inst);
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary) => {
					return handleCanaryResult(canary, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
}, {
	get "~standard"() {
		return hide(this, "~standard", standardProps(this));
	},
	set "~standard"(value) {
		own(this, "~standard", value);
	}
});
/** The Standard Schema surface for `inst`. Shared so wrappers can extend it without forcing it. */
var toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync(inst, value) {
	const ctx = { async: true };
	return toStandardResult(await inst._zod.run({
		value,
		issues: []
	}, ctx), ctx);
}
function standardProps(inst) {
	return {
		validate: (value) => {
			const ctx = { async: false };
			try {
				const r = inst._zod.run({
					value,
					issues: []
				}, ctx);
				if (!(r instanceof Promise)) return toStandardResult(r, ctx);
			} catch (_) {}
			return validateAsync(inst, value);
		},
		vendor: "zod",
		version: 1
	};
}
var $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = def.pattern ?? anyString;
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
var $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
var $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid$1(v));
	} else def.pattern ?? (def.pattern = uuid$1());
	$ZodStringFormat.init(inst, def);
});
var $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
function canParseURL(input) {
	try {
		if (typeof URL !== "undefined" && typeof URL.canParse === "function") return URL.canParse(input);
		new URL(input);
		return true;
	} catch {
		return false;
	}
}
function validateURL(trimmed, def) {
	if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) return canParseURL(trimmed) || 2;
	return parseURLObject(trimmed, def);
}
/** Parses a URL while preserving the non-normalizing HTTP guard. */
function parseURLObject(trimmed, def) {
	if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) return 1;
	try {
		if (typeof URL !== "undefined") {
			const URLStatic = URL;
			if (typeof URLStatic.parse === "function") return URLStatic.parse(trimmed) ?? 2;
		}
		return new URL(trimmed);
	} catch {
		return 2;
	}
}
var asciiTabOrNewline = /[\t\n\r]/g;
/** The URL parser deletes every ASCII tab, LF and CR from its input before it parses, so `new URL("https://exa\nmple.com")` reports on `example.com`. Applying the same deletion to the returned value closes the half of that divergence which can move the host; the parser's other rewrite, stripping C0 controls at the edges, cannot. */
function stripTabAndNewline(value) {
	return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
	hostname.lastIndex = 0;
	return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
	protocol.lastIndex = 0;
	return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
var $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			const url = validateURL(trimmed, def);
			if (url === 1) {
				payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: payload.value,
					inst,
					continue: !def.abort
				});
				return;
			}
			if (url === 2) {
				payload.issues.push({
					code: "invalid_format",
					format: "url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
				return;
			}
			if (url === true) {
				payload.value = stripTabAndNewline(trimmed);
				return;
			}
			if (def.hostname && !urlHostnameOk(url, def.hostname)) payload.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: def.hostname.source,
				input: payload.value,
				inst,
				continue: !def.abort
			});
			if (def.protocol && !urlProtocolOk(url, def.protocol)) payload.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: def.protocol.source,
				input: payload.value,
				inst,
				continue: !def.abort
			});
			payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
	if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1)) throw new Error(`Invalid nanoid length: ${def.length}`);
	def.pattern ?? (def.pattern = def.length === void 0 ? nanoid : nanoidOfLength(def.length));
	$ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
var $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
var $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date);
	$ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration);
	$ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
});
/** An IPv6 address is written with hex digits, colons and dots, and nothing else. The guard is what makes the check below an IPv6 check: `new URL("http://[...]")` parses an authority, not an address, so `@` and `\` re-delimit it and `"::@1\\"` validates against the host `0.0.0.1`. The URL parser also deletes ASCII tab, LF and CR rather than failing, which is how `"::1\n"` validated as `::1`. */
var ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
	if (!ipv6Alphabet.test(value)) return false;
	return canParseURL(`http://[${value}]`);
}
var $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (!isValidIPv6(payload.value)) payload.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
	const parts = value.split("/");
	if (parts.length !== 2) return false;
	const [address, prefix] = parts;
	if (!prefix) return false;
	const prefixNum = Number(prefix);
	if (`${prefixNum}` !== prefix) return false;
	if (prefixNum < 0 || prefixNum > 128) return false;
	return isValidIPv6(address);
}
var $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (!isValidCIDRv6(payload.value)) payload.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (/\s/.test(data)) return false;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
var base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
var $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64Charset);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
	if (!base64urlCharset.test(data)) return false;
	const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}
var $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64urlCharset);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
var $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = number;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
var $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
var $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function capSize(inst, size) {
	const caps = sizeCaps(inst._zod.def.checks);
	if (!caps.length) return;
	const cap = Math.min(...caps.map((c) => c[0]));
	const parse = inst._zod.parse;
	inst._zod.parse = (payload, ctx) => {
		const n = size(payload.value);
		if (n > cap && !ctx?.skipChecks && ctx?.direction !== "backward") {
			for (const [max, ch] of sizeCaps(inst._zod.def.checks)) if (n > max && ch._zod.def.when(payload)) {
				const start = payload.issues.length;
				ch._zod.check(payload);
				payload.issues[start].continue = false;
				attachSchema(payload.issues, start, inst);
				return payload;
			}
		}
		return parse(payload, ctx);
	};
}
var arraySize = (input) => Array.isArray(input) ? input.length : -1;
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	const memo = globalConfig.memoizer;
	memo?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
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
		payload.value = memo ? memo.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
		const proms = [];
		const abortEarly = ctx?.abortEarly;
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else {
				handleArrayResult(result, payload, i);
				if (abortEarly && result.issues.length !== 0 && aborted(result)) break;
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
	capSize(inst, arraySize);
});
function handlePropertyResult(result, final, key, input, optin, optout) {
	const isPresent = key in input;
	const isOptionalOut = optout === "optional";
	if (!isPresent && isOptionalOut && optin === "optional") return;
	if (result.issues.length) {
		if (optin !== void 0 && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (!isPresent && optin === void 0) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent || optin === "defaulted" && !isOptionalOut) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	const ownSymbols = Object.getOwnPropertySymbols(def.shape);
	const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
	const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
	for (const k of allKeys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		allKeys,
		symbolKeys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const optin = _catchall.optin;
	const optout = _catchall.optout;
	let seen = 0;
	for (const key in input) {
		if (abortEarly && payload.issues.length !== seen) {
			if (aborted(payload, seen)) break;
			seen = payload.issues.length;
		}
		if (keySet.has(key)) continue;
		if (key === "__proto__") {
			if (t === "never") unrecognized.push(key);
			continue;
		}
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
		else handlePropertyResult(r, payload, key, input, optin, optout);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst,
		continue: true
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
var $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	const desc = Object.getOwnPropertyDescriptor(def, "shape");
	const sh = desc?.get ? desc.get.raw : def.shape ?? {};
	if (sh) {
		const get = () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			get.raw = newSh;
			return newSh;
		};
		get.raw = sh;
		Object.defineProperty(def, "shape", { get });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazyInternal(inst, "propValues", (zod) => {
		const shape = zod.def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				if (!Object.prototype.hasOwnProperty.call(propValues, key)) assignProp(propValues, key, /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
				if (field.optin !== void 0) propValues[key].add(void 0);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
	const memo = globalConfig.memoizer;
	memo?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
		const proms = [];
		const shape = value.shape;
		const abortEarly = ctx?.abortEarly;
		let seen = payload.issues.length;
		for (const key of value.allKeys) {
			if (abortEarly && payload.issues.length !== seen) {
				if (aborted(payload, seen)) break;
				seen = payload.issues.length;
			}
			if (key === "__proto__") continue;
			const el = shape[key];
			const optin = el._zod.optin;
			const optout = el._zod.optout;
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
			else handlePropertyResult(r, payload, key, input, optin, optout);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
	};
});
var $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const memo = globalConfig.memoizer;
	const generateFastpass = (shape) => {
		const normalized = _normalized.value;
		const syms = normalized.symbolKeys;
		const doc = new Doc(["payload", "ctx"], {
			shape,
			inst,
			memo,
			syms
		});
		const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		const prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.allKeys) ids[key] = `key_${counter++}`;
		doc.write(memo ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
		for (const key of normalized.allKeys) {
			if (key === "__proto__") continue;
			const id = ids[key];
			const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
			const isPresent = `${k} in input`;
			const schema = shape[key];
			const optin = schema?._zod?.optin;
			const isOptionalIn = optin !== void 0;
			const isOptionalOut = schema?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(k)};`);
			if (isOptionalIn && isOptionalOut) {
				const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
				doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			} else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
			else {
				doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `);
				if (optin === "defaulted") doc.write(`newResult[${k}] = ${id}.value;`);
				else doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `);
			}
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		return doc.compile();
	};
	let fastpass;
	const isObject$2 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$2(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === true);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
var $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
	defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazyInternal(inst, "values", (zod) => {
		if (zod.def.options.every((o) => o._zod.values)) return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazyInternal(inst, "pattern", (zod) => {
		if (zod.def.options.every((o) => o._zod.pattern)) {
			const patterns = zod.def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
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
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
function discriminatorMap(def) {
	const map = /* @__PURE__ */ new Map();
	for (const option of def.options) {
		const values = option._zod.propValues?.[def.discriminator];
		if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
		for (const value of values) if (map.has(value)) {
			if (value !== void 0) throw new Error(`Duplicate discriminator value "${String(value)}"`);
			map.set(value, null);
		} else map.set(value, option);
	}
	return map;
}
var $ZodDiscriminatedUnion = /*@__PURE__*/ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
	def.inclusive = false;
	$ZodUnion.init(inst, def);
	const _super = inst._zod.parse;
	defineLazyInternal(inst, "propValues", (zod) => {
		const propValues = {};
		let undefinedCount = 0;
		for (const option of zod.def.options) {
			const pv = option._zod.propValues;
			if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
			if (pv[zod.def.discriminator]?.has(void 0)) undefinedCount++;
			for (const [k, v] of Object.entries(pv)) {
				if (!Object.prototype.hasOwnProperty.call(propValues, k)) assignProp(propValues, k, /* @__PURE__ */ new Set());
				for (const val of v) propValues[k].add(val);
			}
		}
		if (!zod.def.unionFallback && undefinedCount > 1) propValues[zod.def.discriminator]?.delete(void 0);
		return propValues;
	});
	def.options.forEach((option, i) => {
		const propShape = rawShape(option._zod.def);
		if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator)) throw new Error(`Invalid discriminated union option at index "${i}"`);
	});
	const disc = cached(() => discriminatorMap(def));
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isObject(input)) {
			payload.issues.push({
				code: "invalid_type",
				expected: "object",
				input,
				inst
			});
			return payload;
		}
		const value = input?.[def.discriminator];
		const opt = disc.value.get(value);
		if (opt && (value !== void 0 || ctx.direction !== "backward")) return opt._zod.run(payload, ctx);
		if (def.unionFallback || ctx.direction === "backward") return _super(payload, ctx);
		payload.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: def.discriminator,
			options: Array.from(disc.value.keys()).filter((value) => disc.value.get(value) !== null),
			input,
			path: [def.discriminator],
			inst
		});
		return payload;
	};
});
var $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		if (Object.prototype.hasOwnProperty.call(newObj, "__proto__")) delete newObj.__proto__;
		for (const key of sharedKeys) {
			if (key === "__proto__") continue;
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
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
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	const keyIssues = /* @__PURE__ */ new Map();
	const collect = (iss, side) => {
		let keys;
		if (iss.code === "unrecognized_keys" && !iss.path?.length) {
			unrecIssue ?? (unrecIssue = iss);
			keys = iss.keys;
		} else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
			const k = String(iss.path[0]);
			if (!keyIssues.has(k)) keyIssues.set(k, iss);
			keys = [k];
		} else return false;
		for (const k of keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k)[side] = true;
		}
		return true;
	};
	for (const iss of left.issues) if (!collect(iss, "l")) result.issues.push(iss);
	for (const iss of right.issues) if (!collect(iss, "r")) result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length) {
		const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
		if (aggregated.length) result.issues.push({
			...unrecIssue,
			keys: aggregated
		});
		for (const k of bothKeys) if (!aggregated.includes(k) && keyIssues.has(k)) result.issues.push(keyIssues.get(k));
	}
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) {
		if (aborted(result)) return result;
		throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	}
	result.value = merged.data;
	return result;
}
var $ZodRecord = /*@__PURE__*/ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
	const memo = globalConfig.memoizer;
	memo?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isPlainObject(input)) {
			payload.issues.push({
				expected: "record",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		const values = def.keyType._zod.values;
		if (values && !def.partial) {
			payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
			const recordKeys = /* @__PURE__ */ new Set();
			for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
				recordKeys.add(typeof key === "number" ? key.toString() : key);
				if (key === "__proto__") continue;
				const keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (keyResult.issues.length) {
					payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const outKey = keyResult.value;
				if (outKey === "__proto__") continue;
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}
			}
			let unrecognized;
			for (const key in input) if (!recordKeys.has(key)) {
				if (def.mode === "loose") {
					if (key === "__proto__") continue;
					payload.value[key] = input[key];
				} else {
					unrecognized = unrecognized ?? [];
					unrecognized.push(key);
				}
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized,
				continue: true
			});
		} else {
			payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
			let unrecognized;
			for (const key of Reflect.ownKeys(input)) {
				if (key === "__proto__") continue;
				if (!Object.prototype.propertyIsEnumerable.call(input, key)) continue;
				let keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (typeof key === "string" && number.test(key) && keyResult.issues.length) {
					const retryResult = def.keyType._zod.run({
						value: Number(key),
						issues: []
					}, ctx);
					if (retryResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (retryResult.issues.length === 0) keyResult = retryResult;
				}
				if (keyResult.issues.length) {
					if (def.mode === "loose") payload.value[key] = input[key];
					else if (values) {
						unrecognized = unrecognized ?? [];
						unrecognized.push(key);
					} else payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const outKey = keyResult.value;
				if (outKey === "__proto__") continue;
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized,
				continue: true
			});
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
var $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	defineLazyInternal(inst, "pattern", (zod) => {
		const patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
		return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
	});
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodLiteral = /*@__PURE__*/ $constructor("$ZodLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	const values = new Set(def.values);
	inst._zod.values = values;
	defineLazyInternal(inst, "pattern", (zod) => {
		const vals = zod.def.values;
		return new RegExp(vals.length ? `^(${vals.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$");
	});
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (values.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values: def.values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	globalConfig.memoizer?.guard(inst);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		return payload;
	};
});
function handleOptionalResult(payload, result) {
	payload.value = result.issues.length ? void 0 : result.value;
	return payload;
}
var $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
	inst._zod.optout = "optional";
	defineLazyInternal(inst, "values", (zod) => {
		const values = zod.def.innerType._zod.values;
		return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
	});
	defineLazyInternal(inst, "pattern", (zod) => {
		const pattern = zod.def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === void 0) {
			if (def.innerType._zod.optin !== "defaulted") return payload;
			const result = def.innerType._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) return result.then((result) => handleOptionalResult(payload, result));
			return handleOptionalResult(payload, result);
		}
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
	defineLazyInternal(inst, "pattern", (zod) => {
		const pattern = zod.def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazyInternal(inst, "values", (zod) => {
		return zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "defaulted";
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
var $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "defaulted";
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => {
		const v = zod.def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
function handleCatchResult(payload, result, def, ctx) {
	if (!result.issues.length) {
		payload.value = result.value;
		if (result.memo) payload.memo = true;
		return payload;
	}
	payload.value = def.catchValue({
		...result,
		value: payload.value,
		error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
		input: payload.value
	});
	return payload;
}
var $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run({
			value: payload.value,
			issues: []
		}, ctx);
		if (result instanceof Promise) return result.then((result) => handleCatchResult(payload, result, def, ctx));
		return handleCatchResult(payload, result, def, ctx);
	};
});
var $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
	defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
	defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues
	}, ctx);
}
var $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	if (!payload.memo) payload.value = Object.freeze(payload.value);
	return payload;
}
var $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/memoizer.js
var $ZodCyclicError = class extends Error {
	constructor() {
		super(`Cannot parse a reference cycle that closes through a transform`);
		this.name = "ZodCyclicError";
	}
};
/** Keyed off the context object every schema in one parse call already shares. */
var STATE = "~memo";
var NO_ISSUES = [];
function isRef(value) {
	return value !== null && typeof value === "object";
}
function cloneIssues(issues) {
	return issues.map((iss) => iss.path ? {
		...iss,
		path: iss.path.slice()
	} : { ...iss });
}
var recursive = /*@__PURE__*/ new WeakMap();
/** What the walk established, in order of certainty: ordered so the strongest answer among children wins. */
var NONE = 0;
var ASSUMED = 1;
var PROVEN = 2;
/** Whether this schema's subtree contains a cycle, so one parse can re-enter it. */
function isRecursive(inst, stack, resolve) {
	const cached = recursive.get(inst);
	if (cached !== void 0) return cached ? PROVEN : NONE;
	if (stack.has(inst)) return PROVEN;
	stack.add(inst);
	let result = NONE;
	const check = (child) => {
		if (result !== PROVEN && child?._zod) {
			const answer = isRecursive(child, stack, resolve);
			if (answer > result) result = answer;
		}
	};
	const shape = (sh, spread) => {
		let answer = NONE;
		for (const key of Reflect.ownKeys(sh)) {
			const desc = Object.getOwnPropertyDescriptor(sh, key);
			if (spread && !desc.enumerable) continue;
			const child = desc.get ? ASSUMED : desc.value?._zod ? isRecursive(desc.value, stack, resolve) : NONE;
			if (child > answer) answer = child;
		}
		return answer;
	};
	const merge = (answer) => {
		if (answer > result) result = answer;
	};
	const def = inst._zod.def;
	switch (def.type) {
		case "object": {
			const raw = rawShape(def);
			merge(raw ? shape(raw, true) : ASSUMED);
			check(def.catchall);
			break;
		}
		case "array":
			check(def.element);
			break;
		case "tuple":
			for (const el of def.items) check(el);
			check(def.rest);
			break;
		case "record":
		case "map":
			check(def.keyType);
			check(def.valueType);
			break;
		case "set":
			check(def.valueType);
			break;
		case "union":
			for (const el of def.options) check(el);
			break;
		case "intersection":
			check(def.left);
			check(def.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			check(def.innerType);
			break;
		case "pipe":
			check(def.in);
			check(def.out);
			break;
		case "function":
			check(def.input);
			check(def.output);
			break;
		case "lazy": {
			const inner = def._cachedInner ?? (resolve ? inst._zod.innerType : void 0);
			merge(inner ? isRecursive(inner, stack, false) : ASSUMED);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (const key in def) {
			const desc = Object.getOwnPropertyDescriptor(def, key);
			if (!desc || desc.get) continue;
			const value = desc.value;
			if (!value || typeof value !== "object") continue;
			if (value._zod) check(value);
			else if (Array.isArray(value)) for (const el of value) check(el);
		}
	}
	stack.delete(inst);
	return settle(inst, result);
}
/** An assumed answer must not outlive the resolution that settles it, so only a certain one is cached. */
function settle(inst, answer) {
	if (answer !== ASSUMED) recursive.set(inst, answer === PROVEN);
	return answer;
}
function bucketFor(state, inst) {
	let bucket = state.buckets.get(inst);
	if (!bucket) {
		bucket = /* @__PURE__ */ new WeakMap();
		state.buckets.set(inst, bucket);
	}
	return bucket;
}
var handoff;
var open = [];
var memo = {
	alloc(_inst, payload, empty) {
		const bucket = handoff;
		if (!bucket) return empty;
		handoff = void 0;
		const entry = {
			value: empty,
			issues: null
		};
		bucket.set(payload.value, entry);
		open.push(entry);
		return empty;
	},
	guard(inst) {
		var _a;
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred.push(() => {
			const base = inst._zod.parse;
			const wrapped = (payload, ctx) => {
				if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value)) throw new $ZodCyclicError();
				return base(payload, ctx);
			};
			inst._zod.parse = wrapped;
			if (inst._zod.run === base) inst._zod.run = wrapped;
		});
	},
	attach(inst) {
		var _a;
		let isRecursiveInst;
		let rechecked = false;
		let lastCtx;
		let lastBucket;
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred.push(() => {
			const base = inst._zod.parse;
			const wrapped = (payload, ctx) => {
				if (isRecursiveInst === void 0) {
					const walked = isRecursive(inst, /* @__PURE__ */ new Set(), false);
					if (walked === NONE) {
						inst._zod.parse = base;
						if (inst._zod.run === wrapped) inst._zod.run = base;
						return base(payload, ctx);
					}
					if (walked === PROVEN || rechecked) isRecursiveInst = true;
					else rechecked = true;
				}
				const input = payload.value;
				if (!isRef(input)) return base(payload, ctx);
				let state = ctx[STATE];
				if (!state) {
					state = {
						buckets: /* @__PURE__ */ new WeakMap(),
						backEdges: void 0
					};
					ctx[STATE] = state;
				}
				let bucket;
				if (lastCtx === ctx) bucket = lastBucket;
				else {
					bucket = bucketFor(state, inst);
					lastCtx = ctx;
					lastBucket = bucket;
				}
				const hit = bucket.get(input);
				if (hit) {
					payload.value = hit.value;
					if (hit.issues) {
						if (hit.issues.length) payload.issues.push(...cloneIssues(hit.issues));
					} else {
						payload.memo = true;
						state.backEdges ?? (state.backEdges = /* @__PURE__ */ new WeakSet());
						state.backEdges.add(hit.value);
					}
					return payload;
				}
				handoff = bucket;
				const depth = open.length;
				const result = base(payload, ctx);
				handoff = void 0;
				const entry = open.length > depth ? open.pop() : void 0;
				if (result instanceof Promise) return result.then((r) => {
					if (entry) entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
					return r;
				});
				if (entry) entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
				return result;
			};
			inst._zod.parse = wrapped;
			if (inst._zod.run === base) inst._zod.run = wrapped;
		});
	}
};
/** The memoizer that gives containers cycle support. `zod` installs it by default; `zod/mini` opts in with `config({ memoizer: memoizer() })`. */
function memoizer() {
	return memo;
}
/** Whether this value is a node a back-edge resolved to before it finished. */
function isBackEdge(ctx, value) {
	const backEdges = ctx[STATE]?.backEdges;
	return backEdges !== void 0 && isRef(value) && backEdges.has(value);
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/locales/en.js
var error = () => {
	const Sizable = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function getSizing(origin) {
		return Sizable[origin] ?? null;
	}
	const FormatDictionary = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	};
	const TypeDictionary = { nan: "NaN" };
	function getTypeName(type, input) {
		if (type === "number" && typeof input === "number" && !Number.isFinite(input)) return String(input);
		return TypeDictionary[type] ?? type;
	}
	return (issue) => {
		switch (issue.code) {
			case "invalid_type": return `Invalid input: expected ${getTypeName(issue.expected)}, received ${getTypeName(parsedType(issue.input), issue.input)}`;
			case "invalid_value":
				if (issue.values.length === 1) return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
				return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
			case "too_big": {
				const adj = issue.exact ? "exactly " : issue.inclusive ? "<=" : "<";
				const sizing = getSizing(issue.origin);
				if (sizing) return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
				return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
			}
			case "too_small": {
				const adj = issue.exact ? "exactly " : issue.inclusive ? ">=" : ">";
				const sizing = getSizing(issue.origin);
				if (sizing) return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
				return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
			}
			case "invalid_format": {
				const _issue = issue;
				if (_issue.format === "starts_with") return `Invalid string: must start with "${_issue.prefix}"`;
				if (_issue.format === "ends_with") return `Invalid string: must end with "${_issue.suffix}"`;
				if (_issue.format === "includes") return `Invalid string: must include "${_issue.includes}"`;
				if (_issue.format === "regex") return `Invalid string: must match pattern ${_issue.pattern}`;
				return `Invalid ${FormatDictionary[_issue.format] ?? issue.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${issue.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${issue.origin}`;
			case "invalid_union":
				if (issue.options && Array.isArray(issue.options) && issue.options.length > 0) return `Invalid discriminator value. Expected ${issue.options.map((o) => `'${o}'`).join(" | ")}`;
				if (issue.inclusive === false) return "Invalid input: more than one option matched";
				return "Invalid input";
			case "invalid_element": return `Invalid value in ${issue.origin}`;
			default: return `Invalid input`;
		}
	};
};
function en_default() {
	return { localeError: error() };
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/registries.js
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta = _meta[0];
		this._map.set(schema, meta);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta = this._map.get(schema);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
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
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/api.js
function snapshotChecks(def) {
	if (def.checks) def.checks = [...def.checks];
	return def;
}
// @__NO_SIDE_EFFECTS__
function _string(Class, params) {
	return new Class(snapshotChecks({
		type: "string",
		...normalizeParams(params)
	}));
}
// @__NO_SIDE_EFFECTS__
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link _cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
// @__NO_SIDE_EFFECTS__
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				if (!("input" in _issue)) _issue.input = payload.value;
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	}, params);
	return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/to-json-schema.js
function assignProps(target, ...sources) {
	for (const source of sources) for (const key of Reflect.ownKeys(source)) if (Object.prototype.propertyIsEnumerable.call(source, key)) assignProp(target, key, source[key]);
	return target;
}
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: params?.external ?? void 0
	};
}
/**
* Applies the `unrepresentable` setting at a site that has no JSON Schema equivalent. Throws
* `message` unless the setting (or the handler's return value) says otherwise. Returns `true` if a
* custom JSON Schema was written into `json`, in which case the caller must not write its own.
*/
function handleUnrepresentable(schema, ctx, json, params, message) {
	const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({
		zodSchema: schema,
		path: params.path,
		message
	}) : ctx.unrepresentable;
	if (result === "any") return false;
	if (result === void 0 || result === "throw") throw new Error(message);
	Object.assign(json, result);
	return true;
}
function processSchema(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	ctx.sharedDefsExtractedFor = void 0;
	ctx.sharedEmitDoneFor = void 0;
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent = schema._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			processSchema(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta = ctx.metadataRegistry.get(schema);
	if (meta) assignProps(result.schema, meta);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function encodeJSONPointerSegment(segment) {
	return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external) return;
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id) => id);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}`
			};
		}
		const uriPrefix = `#`;
		const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
		if (entry[1] === root && !entry[1].schema.id) return { ref: uriPrefix };
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + encodeJSONPointerSegment(defId)
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema = seen.schema;
		for (const key in schema) delete schema[key];
		schema.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") extractToDef(entry);
		}
	}
	if (ctx.external) ctx.sharedDefsExtractedFor = ctx.external;
}
/** Rewrites `anyOf: [{type: "a"}, {type: "b"}]` to `type: ["a", "b"]`, which every JSON Schema draft treats as equivalent and most consumers render far better for the nullable case. Only branches that are a bare type assertion qualify — anything carrying a constraint, `$ref`, `const` or metadata is left alone. Runs after `flattenRef`, so a branch an override decorated or `$defs` extraction turned into a `$ref` is no longer bare and correctly stays in `anyOf`. `oneOf` is excluded: `integer` and `number` overlap, so "exactly one" and "at least one" are not the same there. OpenAPI 3.0 is excluded: its `type` must be a single string. */
function compactTypeUnion(schema) {
	const options = schema.anyOf;
	if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0) return;
	const types = [];
	for (const option of options) {
		if (!option || typeof option !== "object") return;
		compactTypeUnion(option);
		const keys = Object.keys(option);
		if (keys.length !== 1 || keys[0] !== "type") return;
		const type = option.type;
		for (const member of Array.isArray(type) ? type : [type]) {
			if (typeof member !== "string") return;
			if (!types.includes(member)) types.push(member);
		}
	}
	delete schema.anyOf;
	schema.type = types.length === 1 ? types[0] : types;
}
/** Keywords `foldIntersection` knows how to combine. Anything else — `$ref`, `patternProperties`,
* an annotation like `description` — makes a member unfoldable, so a constraint this does not
* understand leaves the `allOf` alone instead of being silently dropped or misattributed. */
var FOLDABLE_KEYS = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]);
var UNION_KEYS = ["oneOf", "anyOf"];
/** A member's constraint on a key it does not declare itself. A `catchall` states one; `false`, an absent `additionalProperties`, and the empty schema a loose object emits state nothing. */
function undeclaredConstraint(member) {
	const extra = member.additionalProperties;
	if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null) return null;
	return Object.keys(extra).length ? extra : null;
}
/** Combines object members into the single object they describe together, or returns `null` if any of them carries a keyword outside {@link FOLDABLE_KEYS}. */
function foldObjects(members) {
	const objects = [];
	for (const member of members) {
		if (typeof member !== "object" || member.type !== "object") return null;
		for (const key in member) if (!FOLDABLE_KEYS.has(key)) return null;
		objects.push(member);
	}
	const properties = {};
	const required = /* @__PURE__ */ new Set();
	for (const object of objects) {
		for (const key in object.properties) {
			if (Object.prototype.hasOwnProperty.call(properties, key)) continue;
			const parts = [];
			for (const other of objects) {
				const part = other.properties?.[key] ?? undeclaredConstraint(other);
				if (part === null || part === void 0) continue;
				if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part))) parts.push(part);
			}
			assignProp(properties, key, parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts });
		}
		for (const key of object.required ?? []) required.add(key);
	}
	const folded = {
		type: "object",
		properties
	};
	if (required.size) folded.required = [...required];
	if (objects.every((object) => object.additionalProperties === false)) folded.additionalProperties = false;
	else {
		const constraints = [];
		for (const object of objects) {
			const constraint = undeclaredConstraint(object);
			if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint))) constraints.push(constraint);
		}
		if (constraints.length === 1) folded.additionalProperties = constraints[0];
		else if (constraints.length > 1) folded.additionalProperties = { allOf: constraints };
	}
	return folded;
}
/** `additionalProperties` in an `allOf` member sees only that member's own `properties`, so two
* closed object members reject each other's keys and the schema validates nothing. Zod's parser
* pools the key sets instead — `handleIntersectionResults` reports a key as unrecognized only when
* *every* side rejects it — so the emitted schema has to pool them too, and folding the members
* into one object is the encoding that says so on every target.
*
* This runs from `finalize`, after `extractDefs`, which is what keeps it clear of the `$ref`
* machinery: a member extracted into `$defs` is already a `$ref` by now and declines to fold, so it
* keeps its reference and its own closedness rather than being inlined as a stale copy. */
function foldIntersection(json) {
	const allOf = json.allOf;
	if (!Array.isArray(allOf) || allOf.length < 2) return;
	for (const key of FOLDABLE_KEYS) if (key in json) return;
	const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
	let folded = null;
	if (!unions.length) folded = foldObjects(allOf);
	else {
		const union = unions[0];
		const keyword = UNION_KEYS.find((k) => Array.isArray(union[k]));
		if (Object.keys(union).length !== 1) return;
		const rest = allOf.filter((m) => m !== union);
		const branches = union[keyword].map((branch) => foldObjects([...rest, branch]));
		if (branches.some((b) => !b)) return;
		folded = { [keyword]: branches };
	}
	if (!folded) return;
	delete json.allOf;
	assignProps(json, folded);
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema = seen.def ?? seen.schema;
		const _cached = { ...schema };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema.allOf = schema.allOf ?? [];
				schema.allOf.push(refSchema);
			} else assignProps(schema, refSchema);
			assignProps(schema, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema,
			path: seen.path ?? []
		});
	};
	if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
		for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
		if (ctx.target !== "openapi-3.0") for (const entry of ctx.seen.entries()) compactTypeUnion(entry[1].def ?? entry[1].schema);
		for (const rewrite of ctx.deferred) rewrite();
		if (ctx.intersections.length) {
			const carriers = /* @__PURE__ */ new Map();
			for (const seen of ctx.seen.values()) for (const json of [seen.schema, seen.def]) {
				const allOf = json?.allOf;
				if (!Array.isArray(allOf)) continue;
				const existing = carriers.get(allOf);
				if (existing) existing.push(json);
				else carriers.set(allOf, [json]);
			}
			for (const allOf of ctx.intersections) for (const json of carriers.get(allOf) ?? []) foldIntersection(json);
		}
	}
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			assignProp(defs, seen.defId, seen.def);
		}
	}
	if (ctx.external) ctx.sharedEmitDoneFor = ctx.external;
	if (ctx.external) {} else if (Object.keys(defs).length > 0) {
		if (ctx.target === "draft-2020-12") result.$defs = defs;
		else result.definitions = defs;
	}
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	processSchema(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	processSchema(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/core/json-schema-processors.js
var narrowMin = (agg, key, value) => {
	if (agg[key] === void 0 || value > agg[key]) agg[key] = value;
};
var narrowMax = (agg, key, value) => {
	if (agg[key] === void 0 || value < agg[key]) agg[key] = value;
};
var narrowBoth = (agg, value) => {
	narrowMin(agg, "minimum", value);
	narrowMax(agg, "maximum", value);
};
var addDivisor = (agg, value) => {
	agg.multipleOf ?? (agg.multipleOf = []);
	if (!agg.multipleOf.includes(value)) agg.multipleOf.push(value);
};
var addPattern = (agg, pattern) => {
	agg.patterns ?? (agg.patterns = /* @__PURE__ */ new Set());
	agg.patterns.add(pattern);
};
var intersectMime = (agg, mime) => {
	agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
var setFormat = (agg, format) => {
	agg.format = format;
	if (format.includes("int")) agg.isInt = true;
};
var minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
var maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
var formatContributor = (ranges) => (agg, def) => {
	setFormat(agg, def.format);
	const [minimum, maximum] = ranges[def.format];
	narrowMin(agg, "minimum", minimum);
	narrowMax(agg, "maximum", maximum);
};
var contributors = {
	greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
	less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
	multiple_of: (agg, def) => addDivisor(agg, def.value),
	number_format: formatContributor(NUMBER_FORMAT_RANGES),
	bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
	min_length: minContributor,
	max_length: maxContributor,
	length_equals: (agg, def) => narrowBoth(agg, def.length),
	min_size: minContributor,
	max_size: maxContributor,
	size_equals: (agg, def) => narrowBoth(agg, def.size),
	string_format: (agg, def) => {
		setFormat(agg, def.format);
		if (def.pattern) addPattern(agg, def.pattern);
		if (def.format === "base64" || def.format === "base64url") agg.contentEncoding = def.format;
		if (def.local || def.precision === -1) agg.laxFormat = true;
	},
	mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
	const agg = {};
	const def = schema._zod.def;
	const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
	for (const ch of list) contributors[ch._zod.def.check]?.(agg, ch._zod.def);
	const bag = schema._zod.bag;
	if (bag.minimum !== void 0) narrowMin(agg, "minimum", bag.minimum);
	if (bag.exclusiveMinimum !== void 0) narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
	if (bag.maximum !== void 0) narrowMax(agg, "maximum", bag.maximum);
	if (bag.exclusiveMaximum !== void 0) narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
	if (bag.multipleOf !== void 0) addDivisor(agg, bag.multipleOf);
	if (bag.format !== void 0) {
		agg.format ?? (agg.format = bag.format);
		if (bag.format.includes("int")) agg.isInt = true;
	}
	if (bag.mime) intersectMime(agg, bag.mime);
	for (const pattern of bag.patterns ?? []) addPattern(agg, pattern);
	return agg;
}
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
var exactPatterns = /* @__PURE__ */ new Map([[base64Charset, base64], [base64urlCharset, base64url]]);
var exactPattern = (p) => exactPatterns.get(p) ?? p;
var stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time" || laxFormat) delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const patternList = [...patterns].map(exactPattern);
		if (patternList.length === 1) json.pattern = patternList[0].source;
		else if (patternList.length > 1) json.allOf = [...patternList.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
var numberProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
	json.type = isInt ? "integer" : "number";
	const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
	const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
	const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
	if (exMin) {
		if (legacy) {
			json.minimum = exclusiveMinimum;
			json.exclusiveMinimum = true;
		} else json.exclusiveMinimum = exclusiveMinimum;
	} else if (typeof minimum === "number") json.minimum = minimum;
	if (exMax) {
		if (legacy) {
			json.maximum = exclusiveMaximum;
			json.exclusiveMaximum = true;
		} else json.exclusiveMaximum = exclusiveMaximum;
	} else if (typeof maximum === "number") json.maximum = maximum;
	if (multipleOf) {
		const divisors = /* @__PURE__ */ new Set();
		for (const divisor of multipleOf) if (Number.isFinite(divisor) && divisor !== 0) divisors.add(Math.abs(divisor));
		else handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
		const [first, ...rest] = divisors;
		if (first !== void 0) json.multipleOf = first;
		if (rest.length) json.allOf = [...json.allOf ?? [], ...rest.map((m) => ({ multipleOf: m }))];
	}
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
var enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.length === 0) {
		json.not = {};
		return;
	}
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
var literalProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	if (def.values.length === 0) {
		json.not = {};
		return;
	}
	const vals = [];
	for (const val of def.values) if (val === void 0) {
		if (handleUnrepresentable(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema")) return;
	} else if (typeof val === "bigint") {
		if (handleUnrepresentable(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema")) return;
		vals.push(Number(val));
	} else vals.push(val);
	if (vals.length === 0) {} else if (vals.length === 1) {
		const val = vals[0];
		json.type = val === null ? "null" : typeof val;
		if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
		else json.const = val;
	} else {
		if (vals.every((v) => typeof v === "number")) json.type = "number";
		if (vals.every((v) => typeof v === "string")) json.type = "string";
		if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
		if (vals.every((v) => v === null)) json.type = "null";
		json.enum = vals;
	}
};
var customProcessor = (schema, ctx, json, params) => {
	handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
var transformProcessor = (schema, ctx, json, params) => {
	handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = aggregateChecks(schema);
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = processSchema(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
function inputOptin(schema) {
	const def = schema._zod.def;
	if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) return inputOptin(def.out);
	if (def.type === "catch") return inputOptin(def.innerType);
	return schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const shape = def.shape;
	if (Object.getOwnPropertySymbols(shape).length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) return;
	json.type = "object";
	json.properties = {};
	for (const key in shape) assignProp(json.properties, key, processSchema(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	}));
	const requiredKeys = [];
	for (const key of Object.keys(shape)) {
		const field = def.shape[key];
		if (ctx.io === "input" ? inputOptin(field) === void 0 : field._zod.optout === void 0) requiredKeys.push(key);
	}
	if (requiredKeys.length > 0) json.required = requiredKeys;
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = processSchema(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
var unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => processSchema(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
var intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = processSchema(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = processSchema(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	const allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
	json.allOf = allOf;
	ctx.intersections.push(allOf);
};
/** JSON object keys are always strings, so a numeric record key schema is re-expressed over the
* numeric-string form the record parser matches. Deferred to `finalize`, after the flatten: a key
* behind a wrapper only carries its own `type` before then, and a union key only has its branches.
*
* A numeric bound cannot apply to a property name, so `minimum` and its siblings are dropped rather
* than carried over: keeping them beside `type: "string"` reproduces the match-nothing schema this
* exists to fix. A key that carries one therefore emits wider than the record parses — `z.record(z.number().min(5), V)`
* accepts `"3"` — which is the deliberate trade, since throwing on it would reject an ordinary schema
* outright. */
function stringifyKeyNames(bySchema, json, visited) {
	if (json.$ref) {
		if (visited.has(json)) return json;
		visited.add(json);
		const def = bySchema.get(json)?.def;
		if (!def) return json;
		const inlined = stringifyKeyNames(bySchema, def, visited);
		return inlined === def ? json : inlined;
	}
	for (const keyword of ["anyOf", "oneOf"]) {
		const branches = json[keyword];
		if (!Array.isArray(branches)) continue;
		const mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
		if (mapped.some((branch, i) => branch !== branches[i])) json = {
			...json,
			[keyword]: mapped
		};
	}
	const types = Array.isArray(json.type) ? json.type : [json.type];
	const numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer");
	const values = json.enum ?? (json.const !== void 0 ? [json.const] : void 0);
	if (!numericType && !values?.some((v) => typeof v === "number")) return json;
	const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = json;
	if (rest.enum) rest.enum = rest.enum.map((v) => typeof v === "number" ? String(v) : v);
	else if (typeof rest.const === "number") rest.const = String(rest.const);
	if (!numericType) return rest;
	rest.type = "string";
	if (!values) rest.pattern = (types.includes("number") ? number : integer).source;
	return rest;
}
/** Every record of one conversion, so the carriers are found in a single pass rather than once per record. */
var pendingRecords = /* @__PURE__ */ new WeakMap();
function rewriteKeyNames(ctx) {
	const bySchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.values()) if (entry.def && !bySchema.has(entry.schema)) bySchema.set(entry.schema, entry);
	const rewrites = /* @__PURE__ */ new Map();
	for (const record of pendingRecords.get(ctx) ?? []) {
		const seen = ctx.seen.get(record);
		const names = (seen?.def ?? seen?.schema)?.propertyNames;
		if (!names || names === true || rewrites.has(names)) continue;
		const rewritten = stringifyKeyNames(bySchema, names, /* @__PURE__ */ new Set());
		if (rewritten !== names) rewrites.set(names, rewritten);
	}
	if (!rewrites.size) return;
	for (const entry of ctx.seen.values()) for (const carrier of [entry.schema, entry.def]) {
		const rewritten = carrier && rewrites.get(carrier.propertyNames);
		if (rewritten) carrier.propertyNames = rewritten;
	}
}
var recordProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	const keyType = def.keyType;
	const patterns = aggregateChecks(keyType).patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = processSchema(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json.patternProperties = {};
		for (const pattern of patterns) assignProp(json.patternProperties, exactPattern(pattern).source, valueSchema);
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
			json.propertyNames = processSchema(def.keyType, ctx, {
				...params,
				path: [...params.path, "propertyNames"]
			});
			let pending = pendingRecords.get(ctx);
			if (!pending) {
				pending = [];
				pendingRecords.set(ctx, pending);
				ctx.deferred.push(() => rewriteKeyNames(ctx));
			}
			pending.push(schema);
		}
		json.additionalProperties = processSchema(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== void 0;
	if (keyValues && !def.partial && !omittableOnInput) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json.required = validKeyValues.map(String);
	}
};
var nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
/** Round-trips a default value through JSON so the emitted schema is guaranteed to be valid JSON.
* A BigInt has no reliable encoding, so it goes through `unrepresentable` like any other
* unrepresentable value. Returns a sentinel when the caller must not write a default of its own. */
var UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
	let unrepresentable = false;
	const serialized = JSON.stringify(value, (_, val) => {
		if (typeof val !== "bigint") return val;
		unrepresentable = true;
		return null;
	});
	if (!unrepresentable) return JSON.parse(serialized);
	handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
	return UNREPRESENTABLE_DEFAULT;
}
var defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
	if (value !== UNREPRESENTABLE_DEFAULT) json.default = value;
};
var prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io !== "input") return;
	const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
	if (value !== UNREPRESENTABLE_DEFAULT) json._prefault = value;
};
var catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	processSchema(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
var optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/errors.js
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
	Object.defineProperty(proto, key, {
		configurable: true,
		enumerable: false,
		get() {
			const value = make(this);
			Object.defineProperty(this, key, {
				value,
				configurable: true,
				writable: true
			});
			return value;
		},
		set(value) {
			Object.defineProperty(this, key, {
				value,
				configurable: true,
				writable: true
			});
		}
	});
}
var initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	const proto = Object.getPrototypeOf(inst);
	if (_installedErrorProtos.has(proto)) return;
	_installedErrorProtos.add(proto);
	_lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
	_lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
	_lazyMethod(proto, "addIssue", (self) => (issue) => {
		self.issues.push(issue);
		self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
	});
	_lazyMethod(proto, "addIssues", (self) => (issues) => {
		self.issues.push(...issues);
		self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
	});
	Object.defineProperty(proto, "isEmpty", {
		configurable: true,
		enumerable: false,
		get() {
			return this.issues.length === 0;
		}
	});
};
var ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, void 0, { Parent: Error });
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
// node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
	if (!globalConfig.localeError) config(en_default());
}
function _ensureDefaultMemoizer() {
	if (!globalConfig.memoizer) config({ memoizer: memoizer() });
}
var ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
	_ensureDefaultLocale();
	$ZodType.init(inst, def);
	inst.def = def;
	inst.type = def.type;
	return inst;
}, {
	check(...chks) {
		const def = this.def;
		return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
			check: ch,
			def: { check: "custom" },
			onattach: []
		} } : ch)] }), { parent: true });
	},
	with(...chks) {
		return this.check(...chks);
	},
	clone(def, params) {
		return clone(this, def, params);
	},
	brand() {
		return this;
	},
	register(reg, meta) {
		reg.add(this, meta);
		return this;
	},
	refine(check, params) {
		return this.check(refine(check, params));
	},
	superRefine(refinement, params) {
		return this.check(superRefine(refinement, params));
	},
	overwrite(fn) {
		return this.check(/* @__PURE__ */ _overwrite(fn));
	},
	optional() {
		return optional(this);
	},
	exactOptional() {
		return exactOptional(this);
	},
	nullable() {
		return nullable(this);
	},
	nullish() {
		return optional(nullable(this));
	},
	nonoptional(params) {
		return nonoptional(this, params);
	},
	array() {
		return array(this);
	},
	or(arg) {
		return union([this, arg]);
	},
	and(arg) {
		return intersection(this, arg);
	},
	transform(tx) {
		return pipe(this, transform(tx));
	},
	default(d) {
		return _default(this, d);
	},
	prefault(d) {
		return prefault(this, d);
	},
	catch(params) {
		return _catch(this, params);
	},
	pipe(target) {
		return pipe(this, target);
	},
	readonly() {
		return readonly(this);
	},
	describe(description) {
		const cl = this.clone();
		globalRegistry.add(cl, { description });
		return cl;
	},
	meta(...args) {
		if (args.length === 0) return globalRegistry.get(this);
		const cl = this.clone();
		globalRegistry.add(cl, args[0]);
		return cl;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(fn, ...args) {
		return args.length === 0 ? fn(this) : fn(this, ...args);
	},
	get "~standard"() {
		return hide(this, "~standard", {
			...standardProps(this),
			jsonSchema: {
				input: createStandardJSONSchemaMethod(this, "input"),
				output: createStandardJSONSchemaMethod(this, "output")
			}
		});
	},
	set "~standard"(value) {
		own(this, "~standard", value);
	},
	parse: function _parse(data, params) {
		return parse(this, data, params, { callee: _parse });
	},
	parseAsync: async function _parseAsync(data, params) {
		return await parseAsync(this, data, params, { callee: _parseAsync });
	},
	safeParse(data, params) {
		return safeParse(this, data, params);
	},
	async safeParseAsync(data, params) {
		return safeParseAsync(this, data, params);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(value) {
		own(this, "spa", value);
	},
	validate(data, params) {
		return validate(this, data, params);
	},
	validateAsync(data, params) {
		return validateAsync$1(this, data, params);
	},
	encode: function _encode(data, params) {
		return encode(this, data, params, { callee: _encode });
	},
	decode: function _decode(data, params) {
		return decode(this, data, params, { callee: _decode });
	},
	encodeAsync: async function _encodeAsync(data, params) {
		return await encodeAsync(this, data, params, { callee: _encodeAsync });
	},
	decodeAsync: async function _decodeAsync(data, params) {
		return await decodeAsync(this, data, params, { callee: _decodeAsync });
	},
	safeEncode(data, params) {
		return safeEncode(this, data, params);
	},
	safeDecode(data, params) {
		return safeDecode(this, data, params);
	},
	async safeEncodeAsync(data, params) {
		return safeEncodeAsync(this, data, params);
	},
	async safeDecodeAsync(data, params) {
		return safeDecodeAsync(this, data, params);
	},
	toJSONSchema(params) {
		return createToJSONSchemaMethod(this, {})(params);
	},
	get description() {
		return globalRegistry.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
});
/** @internal */
var _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
}, /*@__PURE__*/ derived({
	format: (inst) => aggregateChecks(inst).format ?? null,
	minLength: (inst) => aggregateChecks(inst).minimum ?? null,
	maxLength: (inst) => aggregateChecks(inst).maximum ?? null
}, {
	regex(...args) {
		return this.check(/* @__PURE__ */ _regex(...args));
	},
	includes(...args) {
		return this.check(/* @__PURE__ */ _includes(...args));
	},
	startsWith(...args) {
		return this.check(/* @__PURE__ */ _startsWith(...args));
	},
	endsWith(...args) {
		return this.check(/* @__PURE__ */ _endsWith(...args));
	},
	min(...args) {
		return this.check(/* @__PURE__ */ _minLength(...args));
	},
	max(...args) {
		return this.check(/* @__PURE__ */ _maxLength(...args));
	},
	length(...args) {
		return this.check(/* @__PURE__ */ _length(...args));
	},
	nonempty(...args) {
		return this.check(/* @__PURE__ */ _minLength(1, ...args));
	},
	lowercase(params) {
		return this.check(/* @__PURE__ */ _lowercase(params));
	},
	uppercase(params) {
		return this.check(/* @__PURE__ */ _uppercase(params));
	},
	trim() {
		return this.check(/* @__PURE__ */ _trim());
	},
	normalize(...args) {
		return this.check(/* @__PURE__ */ _normalize(...args));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ _toLowerCase());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ _toUpperCase());
	},
	slugify() {
		return this.check(/* @__PURE__ */ _slugify());
	}
}));
var ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
}, {
	email(params) {
		return this.check(/* @__PURE__ */ _email(ZodEmail, params));
	},
	url(params) {
		return this.check(/* @__PURE__ */ _url(ZodURL, params));
	},
	jwt(params) {
		return this.check(/* @__PURE__ */ _jwt(ZodJWT, params));
	},
	emoji(params) {
		return this.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
	},
	guid(params) {
		return this.check(/* @__PURE__ */ _guid(ZodGUID, params));
	},
	uuid(params) {
		return this.check(/* @__PURE__ */ _uuid(ZodUUID, params));
	},
	uuidv4(params) {
		return this.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
	},
	uuidv6(params) {
		return this.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
	},
	uuidv7(params) {
		return this.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
	},
	nanoid(params) {
		return this.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
	},
	cuid(params) {
		return this.check(/* @__PURE__ */ _cuid(ZodCUID, params));
	},
	cuid2(params) {
		return this.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
	},
	ulid(params) {
		return this.check(/* @__PURE__ */ _ulid(ZodULID, params));
	},
	base64(params) {
		return this.check(/* @__PURE__ */ _base64(ZodBase64, params));
	},
	base64url(params) {
		return this.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
	},
	xid(params) {
		return this.check(/* @__PURE__ */ _xid(ZodXID, params));
	},
	ksuid(params) {
		return this.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
	},
	ipv4(params) {
		return this.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
	},
	ipv6(params) {
		return this.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
	},
	cidrv4(params) {
		return this.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
	},
	cidrv6(params) {
		return this.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
	},
	e164(params) {
		return this.check(/* @__PURE__ */ _e164(ZodE164, params));
	},
	datetime(params) {
		return this.check(/* @__PURE__ */ _isoDateTime(ZodISODateTime, params));
	},
	date(params) {
		return this.check(/* @__PURE__ */ _isoDate(ZodISODate, params));
	},
	time(params) {
		return this.check(/* @__PURE__ */ _isoTime(ZodISOTime, params));
	},
	duration(params) {
		return this.check(/* @__PURE__ */ _isoDuration(ZodISODuration, params));
	}
});
function string(params) {
	return /* @__PURE__ */ _string(ZodString, params);
}
var ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
var ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
	inst.isFinite = true;
}, /*@__PURE__*/ derived({
	minValue: (inst) => {
		const { minimum, exclusiveMinimum } = aggregateChecks(inst);
		return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
	},
	maxValue: (inst) => {
		const { maximum, exclusiveMaximum } = aggregateChecks(inst);
		return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
	},
	isInt: (inst) => {
		const { isInt, multipleOf } = aggregateChecks(inst);
		return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
	},
	format: (inst) => aggregateChecks(inst).format ?? null
}, {
	gt(value, params) {
		return this.check(/* @__PURE__ */ _gt(value, params));
	},
	gte(value, params) {
		return this.check(/* @__PURE__ */ _gte(value, params));
	},
	min(value, params) {
		return this.check(/* @__PURE__ */ _gte(value, params));
	},
	lt(value, params) {
		return this.check(/* @__PURE__ */ _lt(value, params));
	},
	lte(value, params) {
		return this.check(/* @__PURE__ */ _lte(value, params));
	},
	max(value, params) {
		return this.check(/* @__PURE__ */ _lte(value, params));
	},
	int(params) {
		return this.check(int(params));
	},
	safe(params) {
		return this.check(int(params));
	},
	positive(params) {
		return this.check(/* @__PURE__ */ _gt(0, params));
	},
	nonnegative(params) {
		return this.check(/* @__PURE__ */ _gte(0, params));
	},
	negative(params) {
		return this.check(/* @__PURE__ */ _lt(0, params));
	},
	nonpositive(params) {
		return this.check(/* @__PURE__ */ _lte(0, params));
	},
	multipleOf(value, params) {
		return this.check(/* @__PURE__ */ _multipleOf(value, params));
	},
	step(value, params) {
		return this.check(/* @__PURE__ */ _multipleOf(value, params));
	},
	finite() {
		return this;
	}
}));
var ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber.init(inst, def);
});
function int(params) {
	return /* @__PURE__ */ _int(ZodNumberFormat, params);
}
var ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
	return /* @__PURE__ */ _boolean(ZodBoolean, params);
}
var ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => void 0;
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown);
}
var ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return /* @__PURE__ */ _never(ZodNever, params);
}
var ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
}, {
	min(n, params) {
		return this.check(/* @__PURE__ */ _minLength(n, params));
	},
	nonempty(params) {
		return this.check(/* @__PURE__ */ _minLength(1, params));
	},
	max(n, params) {
		return this.check(/* @__PURE__ */ _maxLength(n, params));
	},
	length(n, params) {
		return this.check(/* @__PURE__ */ _length(n, params));
	},
	unwrap() {
		return this.element;
	}
});
function array(element, params) {
	return /* @__PURE__ */ _array(ZodArray, element, params);
}
var ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
	keyof() {
		return _enum(Object.keys(this._zod.def.shape));
	},
	catchall(catchall) {
		return this.clone(mergeDefs(this._zod.def, { catchall }));
	},
	passthrough() {
		return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
	},
	loose() {
		return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
	},
	strict() {
		return this.clone(mergeDefs(this._zod.def, { catchall: never() }));
	},
	strip() {
		return this.clone(mergeDefs(this._zod.def, { catchall: void 0 }));
	},
	extend(incoming) {
		return extend(this, incoming);
	},
	safeExtend(incoming) {
		return safeExtend(this, incoming);
	},
	merge(other) {
		return merge(this, other);
	},
	pick(mask) {
		return pick(this, mask);
	},
	omit(mask) {
		return omit(this, mask);
	},
	partial(...args) {
		return partial(ZodOptional, this, args[0]);
	},
	exactPartial(...args) {
		return partial(ZodExactOptional, this, args[0], "exactPartial");
	},
	required(...args) {
		return required$1(ZodNonOptional, this, args[0]);
	}
});
function object(shape, params) {
	return new ZodObject({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
var ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodDiscriminatedUnion = /*@__PURE__*/ $constructor("ZodDiscriminatedUnion", (inst, def) => {
	ZodUnion.init(inst, def);
	$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
	return new ZodDiscriminatedUnion({
		type: "union",
		options,
		discriminator,
		...normalizeParams(params)
	});
}
var ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
var ZodRecord = /*@__PURE__*/ $constructor("ZodRecord", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodRecord.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
	if (!valueType || !valueType._zod) return new ZodRecord({
		type: "record",
		keyType: string(),
		valueType: keyType,
		...normalizeParams(valueType)
	});
	return new ZodRecord({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
var ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = [...inst._zod.values];
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
var ZodLiteral = /*@__PURE__*/ $constructor("ZodLiteral", (inst, def) => {
	$ZodLiteral.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
	inst.values = new Set(def.values);
	Object.defineProperty(inst, "value", { get() {
		if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return def.values[0];
	} });
});
function literal(value, params) {
	return new ZodLiteral({
		type: "literal",
		values: Array.isArray(value) ? value : [value],
		...normalizeParams(params)
	});
}
var ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				if (!("input" in _issue)) _issue.input = payload.value;
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			return payload;
		});
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
var ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
var ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
var ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
var ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
var ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : constantCatch(catchValue)
	});
}
var ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
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
var ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
var ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
	return /* @__PURE__ */ _superRefine(fn, params);
}
// src/components/form/shared/schema.ts
var REPOTYPE = [
	{
		value: "gh",
		label: "GitHub"
	},
	{
		value: "git",
		label: "Git repository"
	},
	{
		value: "gl",
		label: "GitLab"
	},
	{
		value: "gist",
		label: "GitHub Gist"
	},
	{
		value: "zenodo",
		label: "Zenodo DOI"
	},
	{
		value: "figshare",
		label: "FigShare DOI"
	},
	{
		value: "hydroshare",
		label: "Hydroshare resource"
	},
	{
		value: "dataverse",
		label: "Dataverse DOI"
	},
	{
		value: "ckan",
		label: "CKAN dataset"
	}
];
var REPOPATHTYPE = [{
	value: "file",
	label: "File"
}, {
	value: "url",
	label: "URL"
}];
var repo2dockerSchema = optional(object({
	repotype: _enum(REPOTYPE.map((r) => r.value)).default(REPOTYPE[0].value),
	repourl: string().trim().default(""),
	reporef: optional(string().trim()),
	repopath: optional(string().trim()),
	repopathtype: _enum(REPOPATHTYPE.map((r) => r.value)).default(REPOPATHTYPE[0].value),
	image: optional(string().trim())
}));
var baseCustomSchema = object({
	customimage: string().trim().default("jupyter/datascience-notebook"),
	privaterepo: optional(string().trim()),
	privaterepousername: optional(string().trim())
});
var baseHpcSchema = object({
	partition: optional(string().trim()),
	project: optional(string().trim()),
	reservation: optional(string().trim())
});
var resourcesSchema = optional(object({
	nodes: optional(string().trim()),
	runtime: optional(string().trim()),
	gpus: optional(string().trim()),
	xserver: optional(string().trim())
}));
var envVariableSchema = record(string(), string().trim());
var modulesSchema = optional(record(string(), array(string().trim())));
var modulesVersionsSchema = optional(record(string(), array(string().trim())));
// src/components/form/config/schema.ts
var TemplateOptions = [
	{
		value: "b2drop",
		label: "B2Drop"
	},
	{
		value: "aws",
		label: "AWS"
	},
	{
		value: "s3",
		label: "S3 Compliant Storage Provider"
	},
	{
		value: "webdav",
		label: "Webdav"
	}
];
var REGION = [
	{
		value: "eu-north-1",
		label: "EU (Stockholm) (eu-north-1)"
	},
	{
		value: "eu-central-1",
		label: "EU (Frankfurt) (eu-central-1)"
	},
	{
		value: "eu-west-1",
		label: "EU (Ireland) (eu-west-1)"
	},
	{
		value: "eu-west-2",
		label: "EU (London) (eu-west-2)"
	},
	{
		value: "ca-central-1",
		label: "Canada (Central) (ca-central-1)"
	},
	{
		value: "us-east-1",
		label: "US East (Northern Virginia) (us-east-1)"
	},
	{
		value: "us-east-2",
		label: "US East (Ohio) (us-east-2)"
	},
	{
		value: "us-west-1",
		label: "US West (Northern California) (us-west-1)"
	},
	{
		value: "us-west-2",
		label: "US West (Oregon) (us-west-2)"
	},
	{
		value: "ap-southeast-1",
		label: "Asia Pacific (Singapore) (ap-southeast-1)"
	},
	{
		value: "ap-southeast-2",
		label: "Asia Pacific (Sydney) (ap-southeast-2)"
	},
	{
		value: "ap-northeast-1",
		label: "Asia Pacific (Tokyo) (ap-northeast-1)"
	},
	{
		value: "ap-northeast-2",
		label: "Asia Pacific (Seoul) (ap-northeast-2)"
	},
	{
		value: "ap-south-1",
		label: "Asia Pacific (Mumbai) (ap-south-1)"
	},
	{
		value: "sa-east-1",
		label: "South America (Sao Paulo) (sa-east-1)"
	}
];
var PROVIDER = [
	{
		value: "aws",
		label: "Amazon Web Services (AWS) S3"
	},
	{
		value: "alibaba",
		label: "Alibaba Cloud Object Storage System (OSS) formerly Aliyun"
	},
	{
		value: "ceph",
		label: "Ceph Object Storage"
	},
	{
		value: "digitalocean",
		label: "Digital Ocean Spaces"
	},
	{
		value: "dreamhost",
		label: "Dreamhost DreamObjects"
	},
	{
		value: "ibmcos",
		label: "IBM COS S3"
	},
	{
		value: "minio",
		label: "Minio Object Storage"
	},
	{
		value: "netease",
		label: "Netease Object Storage (NOS)"
	},
	{
		value: "wasabi",
		label: "Wasabi Object Storage"
	},
	{
		value: "other",
		label: "Any other S3 compatible provider"
	}
];
var VendorOptions = [
	{
		value: "nextcloud",
		label: "Nextcloud"
	},
	{
		value: "owncloud",
		label: "Owncloud"
	},
	{
		value: "sharepoint",
		label: "Sharepoint"
	},
	{
		value: "other",
		label: "Other site/service or software"
	}
];
var StorageBaseSchema = object({
	relativemountpath: string().trim(),
	readonly: boolean().default(false)
});
var StorageSchema = discriminatedUnion("template", [
	StorageBaseSchema.extend({
		template: literal("b2drop"),
		user: optional(string().trim()),
		obscure_pass: optional(string().trim()),
		path: optional(string().trim())
	}),
	StorageBaseSchema.extend({
		template: literal("aws"),
		access_key_id: optional(string().trim()),
		secret_access_key: optional(string().trim()),
		remotepath: optional(string().trim()),
		region: string().trim().default(REGION[0].value)
	}),
	StorageBaseSchema.extend({
		template: literal("s3"),
		access_key_id: optional(string().trim()),
		secret_access_key: optional(string().trim()),
		provider: string().trim().default(PROVIDER[0].value),
		remotepath: string().trim().default("bucketname"),
		endpoint: optional(string().trim()),
		region: optional(string().trim())
	}),
	StorageBaseSchema.extend({
		template: literal("webdav"),
		user: optional(string().trim()),
		obscure_pass: optional(string().trim()),
		path: string().trim().default("/"),
		url: string().trim().default("https://b2drop.eudat.eu/remote.php/webdav/"),
		vendor: string().trim().default(VendorOptions[0].value),
		bearer_token: optional(string().trim())
	})
]);
var customSchema = optional(object({
	privaterepopassword: optional(string().trim()),
	...baseCustomSchema.shape
}));
var hpcSchema = optional(object({
	...baseHpcSchema.shape,
	account: optional(string().trim())
}));
var formSchema = object({
	name: string().trim().min(1, "Name is required"),
	service: optional(string().trim()),
	option: string().trim(),
	profile: string().trim(),
	system: string().trim(),
	flavor: optional(string().trim()),
	modules: modulesSchema,
	modules_versions: modulesVersionsSchema,
	envvariables: optional(array(envVariableSchema)),
	workshop_id: optional(boolean()),
	secret_keys: array(string().trim()).default([]),
	share_id: optional(string().trim()),
	resources: resourcesSchema,
	storage: object({
		mounts: array(StorageSchema),
		localstoragepath: optional(string().trim()).prefault("/home/jovyan/work")
	}),
	repo2dockerdirectlink: optional(string().trim()),
	repo2docker: repo2dockerSchema,
	custom: customSchema,
	hpc: hpcSchema
});
var defaultFormValues = {
	name: "Unnamed Jupyterlab",
	service: "jupyterlab",
	option: "4.3",
	profile: "4.3",
	system: "JUWELS",
	flavor: "",
	modules: {
		kernels: [],
		proxies: [],
		communities: [],
		extensions: []
	},
	custom: {
		customimage: "jupyter/datascience-notebook",
		privaterepo: "",
		privaterepousername: "",
		privaterepopassword: ""
	},
	repo2docker: {
		repopath: "",
		reporef: "",
		repourl: "",
		repotype: "gh",
		repopathtype: "file"
	},
	hpc: {
		account: "",
		partition: "",
		project: "",
		reservation: ""
	},
	repo2dockerdirectlink: "",
	resources: {
		nodes: "",
		runtime: "",
		gpus: "",
		xserver: ""
	},
	share_id: void 0,
	storage: {
		mounts: [],
		localstoragepath: "/home/jovyan/work"
	},
	workshop_id: false,
	modules_versions: {},
	envvariables: [],
	secret_keys: []
};
// src/utils/frontendCollectionHelper.ts
var getFrontendCollection = () => {
	return window.getFrontendCollection();
};
var getUserOptions = () => {
	return getFrontendCollection().decrypted_user_options;
};
var getUserOption = (configId) => {
	if (configId === "") {
		const frontendConfig = getFrontendConfig();
		const ret = {};
		for (const defaultValue in frontendConfig.services.options[frontendConfig.services.default].default.options) ret[defaultValue] = frontendConfig.services.options[frontendConfig.services.default].default.options[defaultValue];
		ret.profile = ret.option;
		return ret;
	}
	const userOptions = getFrontendCollection().decrypted_user_options;
	return userOptions ? userOptions[configId] : {};
};
var getTransformedUserOption = (configId) => {
	const userOptions = getUserOption(configId);
	let envArray = [];
	envArray = Object.entries(userOptions?.envvariables ?? {}).map(([name, value]) => ({
		name,
		value
	}));
	const storageArray = Object.entries(userOptions ?? {}).filter(([key, _]) => key.startsWith("datamount-")).map(([_, value]) => ({
		...value,
		vendor: value.element_id,
		relativemountpath: value.path,
		readonly: value.readonly === "readonly" || value.readonly === true
	}));
	return {
		...defaultFormValues,
		...userOptions,
		envvariables: envArray,
		storage: {
			mounts: storageArray,
			localstorage: userOptions.storage?.localstoragepath ?? ""
		}
	};
};
var getServiceConfig = () => {
	return getFrontendCollection().serviceConfig;
};
var getResourcesConfig = () => {
	return getFrontendCollection().resourcesConfig;
};
var getSystemConfig = () => {
	return getFrontendCollection().systemConfig;
};
var getBackendServices = () => {
	return getFrontendCollection().backendServices;
};
var getModulesConfig = () => {
	return getFrontendCollection().userModules;
};
var getReservations = () => {
	return getFrontendCollection().reservations;
};
var getMapSystems = () => {
	return getFrontendCollection().mapSystems;
};
var getMapPartitions = () => {
	return getFrontendCollection().mapPartitions;
};
var getDefaultPartitions = () => {
	return getFrontendCollection().defaultPartitions;
};
// src/utils/kubeHelper.ts
var systemConfig$2 = getSystemConfig();
var backendServicesConfig$1 = getBackendServices();
var kubeOutpostFlavors = window.getAuthState()?.outpost_flavors || true;
function _getKubeSystems() {
	return Object.keys(systemConfig$2).filter((system) => {
		return backendServicesConfig$1[systemConfig$2[system].backendService]?.type === "kube";
	});
}
var kubeSystems = _getKubeSystems();
function _getKubeFlavorSystems() {
	return Object.keys(systemConfig$2).filter((system) => {
		return backendServicesConfig$1[systemConfig$2[system].backendService]?.flavorsRequired;
	});
}
var kubeFlavorSystems = _getKubeFlavorSystems();
function getAvailableKubeFlavorsS(systems) {
	const ret = [];
	systems.forEach((system) => {
		const allFlavors = kubeOutpostFlavors[system];
		if (allFlavors) ret.push(...Object.keys(allFlavors).filter((key) => allFlavors[key].max != 0).filter((key) => allFlavors[key].current < allFlavors[key].max || allFlavors[key].max == -1).sort((a, b) => allFlavors[b].weight - allFlavors[a].weight).map((key) => [key, allFlavors[key].display_name]));
	});
	return ret;
}
function getUnavailableKubeFlavorsS(systems) {
	const ret = [];
	systems.forEach((system) => {
		const allFlavors = kubeOutpostFlavors[system];
		if (allFlavors) ret.push(...Object.keys(allFlavors).filter((key) => allFlavors[key].max != 0).filter((key) => allFlavors[key].current >= allFlavors[key].max && allFlavors[key].max != -1).sort((a, b) => allFlavors[b].weight - allFlavors[a].weight).map((key) => [key, allFlavors[key].display_name]));
	});
	return ret;
}
// src/utils/unicoreHelper.ts
var resourcesConfig = getResourcesConfig();
var resPattern = /^urn:(?<namespace>.+?(?=:res:)):res:(?<systempartition>[^:]+):(?<project>[^:]+):act:(?<account>[^:]+):(?<accounttype>[^:]+)$/;
var prefered_username = window.getAuthState().preferred_username || "none";
var entitlements = Array.isArray(window.getAuthState().oauth_user.entitlements) ? window.getAuthState().oauth_user.entitlements : [window.getAuthState().oauth_user.entitlements];
var reservations = getReservations();
var mapSystems = getMapSystems();
var mapPartitions = getMapPartitions();
var defaultPartitions = getDefaultPartitions();
var systemConfig$1 = getSystemConfig();
var extractEntitlementsInfo = (entitlement) => {
	const match = resPattern.exec(entitlement);
	if (match && match.groups) {
		const system_ = mapSystems[match.groups.systempartition.toLowerCase()];
		const partition_ = mapPartitions[match.groups.systempartition.toLowerCase()];
		if (Object.keys(resourcesConfig[system_] ?? {}).includes(partition_)) return {
			systempartition: match.groups.systempartition,
			project: match.groups.project,
			account: match.groups.account,
			accounttype: match.groups.accounttype
		};
	}
	return null;
};
var _getUnicoreAccountType = () => {
	for (const entitlement of entitlements) {
		const entitlementInfo = extractEntitlementsInfo(entitlement);
		if (entitlementInfo && entitlementInfo.account === prefered_username) return entitlementInfo.accounttype;
	}
	return null;
};
var accountType = _getUnicoreAccountType();
function _getUnicoreSystemPartitions() {
	const systemPartitions = entitlements.map(extractEntitlementsInfo).filter(Boolean).map((tmp) => tmp.systempartition);
	if (accountType === "normal") return [...new Set(systemPartitions)];
	if (accountType === "secondary") return [...new Set(systemPartitions.filter((systempartition) => {
		return entitlements.map(extractEntitlementsInfo).filter(Boolean).some((tmp) => tmp.systempartition === systempartition && tmp.account === prefered_username);
	}))];
	return [];
}
var unicoreSystemPartitions = _getUnicoreSystemPartitions();
function _getUnicoreSystems() {
	const systems = unicoreSystemPartitions.map((key) => mapSystems[key.toLowerCase()]).filter((system) => system);
	if (accountType === "normal") return [...new Set(systems)];
	if (accountType === "secondary") return [...new Set(systems.filter((system) => {
		return entitlements.map(extractEntitlementsInfo).filter(Boolean).some((tmp) => tmp.systempartition && mapSystems[tmp.systempartition.toLowerCase()] === system && tmp.account === prefered_username);
	}))];
	return [];
}
function getUnicoreAccountsS(systems) {
	const accounts = /* @__PURE__ */ new Set();
	systems.forEach((system) => {
		entitlements.forEach(function(entitlement) {
			const entitlementInfo = extractEntitlementsInfo(entitlement);
			if (entitlementInfo && mapSystems[entitlementInfo.systempartition.toLowerCase()] === system) {
				if (accountType === "normal") accounts.add(entitlementInfo.account);
				else if (accountType === "secondary") {
					if (entitlementInfo.account === prefered_username) accounts.add(entitlementInfo.account);
				}
			}
		});
	});
	return [...accounts];
}
function getUnicoreProjectsSA(systems, accounts) {
	const projects = [];
	systems.forEach((system) => {
		accounts.forEach((account) => {
			entitlements.forEach(function(entitlement) {
				const entitlementInfo = extractEntitlementsInfo(entitlement);
				if (entitlementInfo) {
					if (mapSystems[entitlementInfo.systempartition.toLowerCase()] === system) {
						if (accountType === "normal") {
							if (entitlementInfo.account === account) projects.push(entitlementInfo.project);
						} else if (accountType === "secondary") {
							if (entitlementInfo.account === prefered_username) {
								if (entitlementInfo.account === account) projects.push(entitlementInfo.project);
							}
						}
					}
				}
			});
		});
	});
	return [...new Set(projects)];
}
function getUnicoreProjectsS(systems) {
	const projects = [];
	systems.forEach((system) => {
		entitlements.forEach(function(entitlement) {
			const entitlementInfo = extractEntitlementsInfo(entitlement);
			if (entitlementInfo) {
				if (mapSystems[entitlementInfo.systempartition.toLowerCase()] === system) projects.push(entitlementInfo.project);
			}
		});
	});
	return [...new Set(projects)];
}
function getUnicorePartitionsSAP(systems, accounts = [], projects = []) {
	let interactivePartitions = [];
	let allPartitions = [];
	systems.forEach((system) => {
		accounts.forEach((account) => {
			projects.forEach((project) => {
				const allPartitions_ = /* @__PURE__ */ new Set();
				let interactiveAdded = false;
				entitlements.forEach(function(entitlement) {
					const entitlementInfo = extractEntitlementsInfo(entitlement);
					if (entitlementInfo && mapSystems[entitlementInfo.systempartition.toLowerCase()] === system && (entitlementInfo.project === project || project === "_all_")) {
						if (accountType === "normal" || account === "_all_") {
							if (!interactiveAdded) {
								interactiveAdded = true;
								const interactivePartitions_ = systemConfig$1[system]?.interactivePartitions || [];
								interactivePartitions = [.../* @__PURE__ */ new Set([...interactivePartitions, ...interactivePartitions_])];
							}
							if (entitlementInfo.account === account || account === "_all_") allPartitions_.add(mapPartitions[entitlementInfo.systempartition.toLowerCase()]);
						} else if (accountType === "secondary") {
							if (!interactiveAdded) {
								interactiveAdded = true;
								const interactivePartitions_ = systemConfig$1[system]?.interactivePartitions || [];
								interactivePartitions = [.../* @__PURE__ */ new Set([...interactivePartitions, ...interactivePartitions_])];
							}
							if (entitlementInfo.account === prefered_username && entitlementInfo.account === account) allPartitions_.add(mapPartitions[entitlementInfo.systempartition.toLowerCase()]);
						}
					}
					allPartitions = [.../* @__PURE__ */ new Set([...allPartitions, ...allPartitions_])];
				});
				Object.keys(defaultPartitions).forEach(function(systempartition) {
					if (mapSystems[systempartition] === system) {
						if (defaultPartitions[systempartition]) {
							if (allPartitions.includes(mapPartitions[systempartition])) defaultPartitions[systempartition].forEach(function(defaultPartition) {
								allPartitions.push(mapPartitions[defaultPartition.toLowerCase()]);
							});
						}
					}
				});
			});
		});
	});
	return [.../* @__PURE__ */ new Set([...interactivePartitions, ...allPartitions])];
}
function getUnicoreReservationsSAPP(systems, accounts, projects, partitions) {
	const localreservations = [];
	systems.forEach((system) => {
		accounts.forEach((account) => {
			projects.forEach((project) => {
				partitions.forEach((partition) => {
					if (!reservations[system]) return;
					if (systemConfig$1[system] && systemConfig$1[system].interactivePartitions.includes(partition)) return;
					localreservations.push(...reservations[system].filter((reservation) => {
						const partitionMatches = reservation.PartitionName === "" || reservation.PartitionName === partition || partition === "_all_";
						const usersMatch = reservation.Users === "" || reservation.Users.split(",").includes(account) || account === "_all_";
						const accountsMatch = reservation.Accounts === "" || reservation.Accounts === project || project === "_all_";
						return partitionMatches && usersMatch && accountsMatch;
					}));
				});
			});
		});
	});
	return [...new Set(localreservations)];
}
function getAccountOptions(system) {
	const accounts = getUnicoreAccountsS(Array.isArray(system) ? system : [system]);
	if (accounts.includes(prefered_username)) accounts.sort((account) => account === prefered_username ? -1 : 1);
	return accounts.map((item) => [item, item]);
}
function getProjectOptions(system, account) {
	const systems = Array.isArray(system) ? system : [system];
	let projects = [];
	if (account) projects = getUnicoreProjectsSA(systems, Array.isArray(account) ? account : [account]);
	else projects = getUnicoreProjectsS(systems);
	return projects.map((item) => [item, item]);
}
function getPartitionOptions(system, account = "_all_", project = "_all_") {
	return getUnicorePartitionsSAP(Array.isArray(system) ? system : [system], Array.isArray(account) ? account : [account], Array.isArray(project) ? project : [project]).map((item) => [item, item]);
}
function getPartitionAndInteractivePartition(system, account = "_all_", project = "_all_") {
	const systems = Array.isArray(system) ? system : [system];
	let partitions = getPartitionOptions(system, account, project);
	let interactivePartitionsLength = 0;
	const interactivePartitionAdded = [];
	partitions.forEach((partition) => {
		const partition_ = partition[0];
		systems.forEach((system) => {
			if ((systemConfig$1[system]?.interactivePartitions || []).includes(partition_)) {
				if (!interactivePartitionAdded.includes(partition_)) {
					interactivePartitionsLength += 1;
					interactivePartitionAdded.push(partition_);
				}
			}
		});
	});
	return [partitions, interactivePartitionsLength];
}
// src/utils/sharedHelper.ts
var serviceConfig = getServiceConfig();
var systemConfig = getSystemConfig();
var globalMaintenanceSystems = [];
var getAllSystems = () => {
	const kubeSystemss = kubeSystems;
	const unicoreSystems = _getUnicoreSystems();
	return [.../* @__PURE__ */ new Set([...kubeSystemss, ...unicoreSystems])];
};
var getAvailableSystems = (serviceId, options) => {
	const ret = [];
	options.forEach((option) => {
		if (serviceConfig["JupyterLab"]?.options && Object.keys(serviceConfig["JupyterLab"]?.options).includes(option)) {
			const subSystems1 = serviceConfig["JupyterLab"].options[option].allowedLists.systems;
			ret.push(...getAllSystems().filter((system) => subSystems1.includes(system)));
		} else ret.push(...getAllSystems());
	});
	let uniqueSystems = [...new Set(ret)];
	uniqueSystems.sort((a, b) => (systemConfig[a].weight || 0) - (systemConfig[b].weight || 0));
	uniqueSystems = uniqueSystems.filter((system) => !globalMaintenanceSystems.includes(system));
	return uniqueSystems.map((item) => [item, item]);
};
var getMissingSystemOptions = (serviceId, options) => {
	const availableSystems = getAvailableSystems(serviceId, options);
	/**
	if (pageType(null) == pageType("workshop")) {
	const allowedSystems = getSpawnerUserOptions()?.workshop?.system || false;
	if (allowedSystems) {
	missingSystems = missingSystems.filter((system) =>
	allowedSystems.includes(system),
	);
	}
	} */
	return getAllSystems().filter((system) => !availableSystems.map(([key, value]) => key).includes(system)).map((item) => [item, item]);
};
var backendServicesConfig = getBackendServices();
function fillMappingDict() {
	const mappingDict = {};
	Object.entries(serviceConfig).forEach(([key, value]) => {
		const serviceId = value.serviceId ?? key;
		if (!Object.keys(mappingDict).includes(serviceId)) mappingDict[serviceId] = {
			serviceKey: key,
			system: {},
			option: {}
		};
		Object.entries(value.options).forEach(([optionKey, optionValue]) => {
			mappingDict[serviceId]["option"][optionKey] = optionValue.mapping ?? optionKey;
		});
		getAllSystems().forEach((system) => {
			const systemType = backendServicesConfig[systemConfig[system].backendService]?.mapping ?? system;
			if (!Object.keys(mappingDict[serviceId]["system"]).includes(systemType)) mappingDict[serviceId]["system"][system] = systemType;
		});
	});
	return mappingDict;
}
// src/components/form/dataFunctions.tsx
var homeTriggerOption = () => {
	const ret = { options: {} };
	let values = getServiceConfig().JupyterLab.options;
	console.log("homeTriggerOption values ", values);
	const allSystems = getAllSystems();
	window.getWorkshopOptions();
	let allowedSystems = allSystems;
	if (!Array.isArray(allowedSystems)) allowedSystems = [allowedSystems];
	const allowedOptions = {};
	for (const [key, valueInformation] of Object.entries(values)) allowedSystems.forEach((system) => {
		if ((getServiceConfig().JupyterLab?.options?.[key]?.allowedLists?.systems ?? []).includes(system) && !Object.prototype.hasOwnProperty.call(allowedOptions, key)) allowedOptions[key] = valueInformation;
	});
	values = allowedOptions;
	let _values = Object.entries(values).map(([key, value]) => [key, value.name]);
	if (_values.length == 0) _values = [["none", "No Option available. Please contact support"]];
	ret.options = Object.fromEntries(_values);
	return ret;
};
var homeTriggerSystem = (option, serviceId) => {
	const ret = { options: {} };
	const options = Array.isArray(option) ? option : [option];
	const serviceConfig = getServiceConfig();
	let inactiveText = "N/A";
	const displayNames = Array();
	options.forEach((option) => {
		if (serviceConfig["JupyterLab"]?.options && Object.keys(serviceConfig["JupyterLab"]?.options).includes(option)) displayNames.push(serviceConfig["JupyterLab"].options[option].name);
	});
	inactiveText = `N/A for ${displayNames.join(", ")}`;
	const values = getAvailableSystems(serviceId, options);
	const inactiveValues = getMissingSystemOptions(serviceId, options);
	ret.options = Object.fromEntries(values);
	ret.inactiveOptions = Object.fromEntries(inactiveValues);
	ret.inactiveText = inactiveText;
	return ret;
};
var homeTriggerAccount = (system, configId, serviceId) => {
	const ret = { options: {} };
	ret.options = Object.fromEntries(getAccountOptions(system));
	return ret;
};
var homeTriggerProject = (system, account, configId, serviceId) => {
	const ret = { options: {} };
	if (!system) return ret;
	const values = getProjectOptions(system, account);
	ret.options = Object.fromEntries(values);
	return ret;
};
var homeTriggerPartition = (system, account, project, configId, serviceId) => {
	const ret = { options: {} };
	if (!system) return ret;
	const [partitions, interactivePartitionsLength] = getPartitionAndInteractivePartition(system, account, project);
	ret.options = Object.fromEntries(partitions);
	ret.groups = {
		"Login Nodes": interactivePartitionsLength,
		"Compute Nodes": partitions.length - interactivePartitionsLength
	};
	console.log("homeTriggerPartition partitions ", ret);
	return ret;
};
var homeTriggerReservation = (system, account, project, partition) => {
	const ret = { options: {} };
	console.log("homeTriggerReservation system, account, project, partition ", {
		system,
		account,
		project,
		partition
	});
	const reservations = getUnicoreReservationsSAPP([system], [account], [project], [partition]);
	console.log("homeTriggerReservation reservations ", reservations);
	const workshopValues = window.getWorkshopOptions();
	if (system) {
		const activeReservationNames = reservations.filter((item) => item.State === "ACTIVE").map((item) => [item.ReservationName, item.ReservationName]);
		const inactiveReservationNames = reservations.filter((item) => item.State === "INACTIVE").map((item) => [item.ReservationName, item.ReservationName]);
		const groups = {};
		workshopValues?.resources?.reservation;
		[...activeReservationNames, ...inactiveReservationNames];
		groups["No reservation"] = 1;
		if (activeReservationNames.length > 0) groups["Active"] = activeReservationNames.length;
		if (inactiveReservationNames.length > 0) groups["Inactive"] = inactiveReservationNames.length;
		console.log("homeTriggerReservation inActive ", inactiveReservationNames);
		console.log("homeTriggerReservation active ", activeReservationNames);
		ret.emptyOpt = "None";
		ret.inactiveOptions = Object.fromEntries(inactiveReservationNames);
		ret.options = Object.fromEntries(activeReservationNames);
	}
	return ret;
};
var homeTriggerFlavor = (system) => {
	const ret = { options: {} };
	if (system && kubeFlavorSystems.includes(system)) {
		let availableFlavors = getAvailableKubeFlavorsS([system]);
		const unavailableFlavors = getUnavailableKubeFlavorsS([system]);
		if (availableFlavors.length == 0) availableFlavors = [["_undefined", "Couldn't receive flavors. Please re-login to use this system"]];
		ret.options = Object.fromEntries(availableFlavors);
		if (unavailableFlavors.length > 0) {
			ret.inactiveOptions = Object.fromEntries(unavailableFlavors);
			ret.inactiveText = "maximum reached";
		}
		return ret;
	}
	return ret;
};
var getModuleValues = (options, systems, serviceId, name, setName) => {
	console.log("getModuleValues", {
		options,
		systems,
		serviceId,
		name,
		setName
	});
	const values = [];
	const serviceConfig = getServiceConfig();
	console.log("getModuleValues serviceConfig", { serviceConfig });
	const userModulesConfig = getModulesConfig();
	console.log("getModuleValues userModulesConfig", { userModulesConfig });
	const keys = /* @__PURE__ */ new Set();
	for (const system of systems) for (const option of options) if (serviceConfig?.[serviceId]?.options?.[option]?.[setName]) {
		const nameSet = serviceConfig[serviceId].options[option][setName];
		Object.entries(userModulesConfig[name]).filter(([key, value]) => value.sets && value.sets.includes(nameSet) && (!value.allowed_systems || value.allowed_systems.includes(system))).forEach(([key, value]) => {
			if (!keys.has(key)) {
				keys.add(key);
				values.push({
					id: key,
					displayname: value.displayName,
					default: typeof value.default === "object" && value.default !== null ? value.default.default : value.default,
					link: value.href,
					weight: value.weight ?? 10,
					versions: value.options || false
				});
			}
		});
	}
	return values.sort((a, b) => b.weight - a.weight);
};
// node_modules/.pnpm/@tanstack+store@0.11.2/node_modules/@tanstack/store/dist/alien.js
/* @__NO_SIDE_EFFECTS__ */
function createReactiveSystem({ update, notify, unwatched }) {
	return {
		link,
		unlink,
		propagate,
		checkDirty,
		shallowPropagate
	};
	function link(dep, sub, version) {
		const prevDep = sub.depsTail;
		if (prevDep !== void 0 && prevDep.dep === dep) return;
		const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub.deps;
		if (nextDep !== void 0 && nextDep.dep === dep) {
			nextDep.version = version;
			sub.depsTail = nextDep;
			return;
		}
		const prevSub = dep.subsTail;
		if (prevSub !== void 0 && prevSub.version === version && prevSub.sub === sub) return;
		const newLink = sub.depsTail = dep.subsTail = {
			version,
			dep,
			sub,
			prevDep,
			nextDep,
			prevSub,
			nextSub: void 0
		};
		if (nextDep !== void 0) nextDep.prevDep = newLink;
		if (prevDep !== void 0) prevDep.nextDep = newLink;
		else sub.deps = newLink;
		if (prevSub !== void 0) prevSub.nextSub = newLink;
		else dep.subs = newLink;
	}
	function unlink(link, sub = link.sub) {
		const dep = link.dep;
		const prevDep = link.prevDep;
		const nextDep = link.nextDep;
		const nextSub = link.nextSub;
		const prevSub = link.prevSub;
		if (nextDep !== void 0) nextDep.prevDep = prevDep;
		else sub.depsTail = prevDep;
		if (prevDep !== void 0) prevDep.nextDep = nextDep;
		else sub.deps = nextDep;
		if (nextSub !== void 0) nextSub.prevSub = prevSub;
		else dep.subsTail = prevSub;
		if (prevSub !== void 0) prevSub.nextSub = nextSub;
		else if ((dep.subs = nextSub) === void 0) unwatched(dep);
		return nextDep;
	}
	function propagate(link) {
		let next = link.nextSub;
		let stack;
		top: do {
			const sub = link.sub;
			let flags = sub.flags;
			if (!(flags & 60)) sub.flags = flags | 32;
			else if (!(flags & 12)) flags = 0;
			else if (!(flags & 4)) sub.flags = flags & -9 | 32;
			else if (!(flags & 48) && isValidLink(link, sub)) {
				sub.flags = flags | 40;
				flags &= 1;
			} else flags = 0;
			if (flags & 2) notify(sub);
			if (flags & 1) {
				const subSubs = sub.subs;
				if (subSubs !== void 0) {
					const nextSub = (link = subSubs).nextSub;
					if (nextSub !== void 0) {
						stack = {
							value: next,
							prev: stack
						};
						next = nextSub;
					}
					continue;
				}
			}
			if ((link = next) !== void 0) {
				next = link.nextSub;
				continue;
			}
			while (stack !== void 0) {
				link = stack.value;
				stack = stack.prev;
				if (link !== void 0) {
					next = link.nextSub;
					continue top;
				}
			}
			break;
		} while (true);
	}
	function checkDirty(link, sub) {
		let stack;
		let checkDepth = 0;
		let dirty = false;
		top: do {
			const dep = link.dep;
			const flags = dep.flags;
			if (sub.flags & 16) dirty = true;
			else if ((flags & 17) === 17) {
				if (update(dep)) {
					const subs = dep.subs;
					if (subs.nextSub !== void 0) shallowPropagate(subs);
					dirty = true;
				}
			} else if ((flags & 33) === 33) {
				if (link.nextSub !== void 0 || link.prevSub !== void 0) stack = {
					value: link,
					prev: stack
				};
				link = dep.deps;
				sub = dep;
				++checkDepth;
				continue;
			}
			if (!dirty) {
				const nextDep = link.nextDep;
				if (nextDep !== void 0) {
					link = nextDep;
					continue;
				}
			}
			while (checkDepth--) {
				const firstSub = sub.subs;
				const hasMultipleSubs = firstSub.nextSub !== void 0;
				if (hasMultipleSubs) {
					link = stack.value;
					stack = stack.prev;
				} else link = firstSub;
				if (dirty) {
					if (update(sub)) {
						if (hasMultipleSubs) shallowPropagate(firstSub);
						sub = link.sub;
						continue;
					}
					dirty = false;
				} else sub.flags &= -33;
				sub = link.sub;
				const nextDep = link.nextDep;
				if (nextDep !== void 0) {
					link = nextDep;
					continue top;
				}
			}
			return dirty;
		} while (true);
	}
	function shallowPropagate(link) {
		do {
			const sub = link.sub;
			const flags = sub.flags;
			if ((flags & 48) === 32) {
				sub.flags = flags | 16;
				if ((flags & 6) === 2) notify(sub);
			}
		} while ((link = link.nextSub) !== void 0);
	}
	function isValidLink(checkLink, sub) {
		let link = sub.depsTail;
		while (link !== void 0) {
			if (link === checkLink) return true;
			link = link.prevDep;
		}
		return false;
	}
}
// node_modules/.pnpm/@tanstack+store@0.11.2/node_modules/@tanstack/store/dist/atom.js
function toObserver(nextHandler, errorHandler, completionHandler) {
	const isObserver = typeof nextHandler === "object";
	const self = isObserver ? nextHandler : void 0;
	return {
		next: (isObserver ? nextHandler.next : nextHandler)?.bind(self),
		error: (isObserver ? nextHandler.error : errorHandler)?.bind(self),
		complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self)
	};
}
var queuedEffects = [];
var cycle = 0;
var { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
	update(atom) {
		return atom._update();
	},
	notify(effect) {
		queuedEffects[queuedEffectsLength++] = effect;
		effect.flags &= -3;
	},
	unwatched(atom) {
		if (atom.depsTail !== void 0) {
			atom.depsTail = void 0;
			atom.flags = 17;
			purgeDeps(atom);
		}
	}
});
var notifyIndex = 0;
var queuedEffectsLength = 0;
var activeSub;
var batchDepth = 0;
function batch(fn) {
	try {
		++batchDepth;
		fn();
	} finally {
		if (!--batchDepth) flush();
	}
}
function purgeDeps(sub) {
	const depsTail = sub.depsTail;
	let dep = depsTail !== void 0 ? depsTail.nextDep : sub.deps;
	while (dep !== void 0) dep = unlink(dep, sub);
}
function flush() {
	if (batchDepth > 0) return;
	while (notifyIndex < queuedEffectsLength) {
		const effect = queuedEffects[notifyIndex];
		queuedEffects[notifyIndex++] = void 0;
		effect.notify();
	}
	notifyIndex = 0;
	queuedEffectsLength = 0;
}
function createAtom(valueOrFn, options) {
	const isComputed = typeof valueOrFn === "function";
	const getter = valueOrFn;
	const atom = {
		_snapshot: isComputed ? void 0 : valueOrFn,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: isComputed ? 0 : 1,
		get() {
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		},
		subscribe(observerOrFn) {
			const obs = toObserver(observerOrFn);
			const observed = { current: false };
			const e = effect(() => {
				atom.get();
				if (!observed.current) observed.current = true;
				else {
					activeSub = void 0;
					obs.next?.(atom._snapshot);
				}
			});
			return { unsubscribe: () => {
				e.stop();
			} };
		},
		_update(getValue) {
			const prevSub = activeSub;
			const compare = options?.compare ?? Object.is;
			if (isComputed) {
				activeSub = atom;
				++cycle;
				atom.depsTail = void 0;
			} else if (getValue === void 0) return false;
			if (isComputed) atom.flags = 5;
			try {
				const oldValue = atom._snapshot;
				const newValue = typeof getValue === "function" ? getValue(oldValue) : getValue === void 0 && isComputed ? getter(oldValue) : getValue;
				if (oldValue === void 0 || !compare(oldValue, newValue)) {
					atom._snapshot = newValue;
					return true;
				}
				return false;
			} finally {
				activeSub = prevSub;
				if (isComputed) atom.flags &= -5;
				purgeDeps(atom);
			}
		}
	};
	if (isComputed) {
		atom.flags = 17;
		atom.get = function() {
			const flags = atom.flags;
			if (flags & 16 || flags & 32 && checkDirty(atom.deps, atom)) {
				if (atom._update()) {
					const subs = atom.subs;
					if (subs !== void 0) shallowPropagate(subs);
				}
			} else if (flags & 32) atom.flags = flags & -33;
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		};
	} else atom.set = function(valueOrFn) {
		if (atom._update(valueOrFn)) {
			const subs = atom.subs;
			if (subs !== void 0) {
				propagate(subs);
				shallowPropagate(subs);
				flush();
			}
		}
	};
	return atom;
}
function effect(fn) {
	const run = () => {
		const prevSub = activeSub;
		activeSub = effectObj;
		++cycle;
		effectObj.depsTail = void 0;
		effectObj.flags = 6;
		try {
			return fn();
		} finally {
			activeSub = prevSub;
			effectObj.flags &= -5;
			purgeDeps(effectObj);
		}
	};
	const effectObj = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: 6,
		notify() {
			const flags = this.flags;
			if (flags & 16 || flags & 32 && checkDirty(this.deps, this)) run();
			else this.flags = 2;
		},
		stop() {
			this.flags = 0;
			this.depsTail = void 0;
			purgeDeps(this);
		}
	};
	run();
	return effectObj;
}
// node_modules/.pnpm/@tanstack+store@0.11.2/node_modules/@tanstack/store/dist/store.js
var Store = class {
	constructor(valueOrFn, actionsFactory) {
		this.atom = createAtom(valueOrFn);
		this.get = this.get.bind(this);
		this.setState = this.setState.bind(this);
		this.subscribe = this.subscribe.bind(this);
		if (actionsFactory) this.actions = actionsFactory(this);
	}
	setState(updater) {
		this.atom.set(updater);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(observerOrFn) {
		return this.atom.subscribe(toObserver(observerOrFn));
	}
};
var ReadonlyStore = class {
	constructor(valueOrFn) {
		this.atom = createAtom(valueOrFn);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(observerOrFn) {
		return this.atom.subscribe(toObserver(observerOrFn));
	}
};
function createStore(valueOrFn, actions) {
	if (typeof valueOrFn === "function") return new ReadonlyStore(valueOrFn);
	if (actions) return new Store(valueOrFn, actions);
	return new Store(valueOrFn);
}
// node_modules/.pnpm/@tanstack+pacer-lite@0.1.1/node_modules/@tanstack/pacer-lite/dist/lite-throttler.js
/**
* A lightweight class that creates a throttled function.
*
* This is an alternative to the Throttler in the core @tanstack/pacer package, but is more
* suitable for libraries and npm packages that need minimal overhead. Unlike the core Throttler,
* this version does not use TanStack Store for state management, has no devtools integration,
* and provides only essential throttling functionality.
*
* Throttling ensures a function is called at most once within a specified time window.
* Unlike debouncing which waits for a pause in calls, throttling guarantees consistent
* execution timing regardless of call frequency.
*
* Supports both leading and trailing edge execution:
* - Leading: Execute immediately on first call (default: true)
* - Trailing: Execute after wait period if called during throttle (default: true)
*
* Features:
* - Zero dependencies - no external libraries required
* - Minimal API surface - only essential methods (maybeExecute, flush, cancel)
* - Simple state management - uses basic private properties instead of reactive stores
* - Callback support for monitoring execution events
* - Lightweight - designed for use in npm packages where bundle size matters
*
* @example
* ```ts
* const throttler = new LiteThrottler((scrollY: number) => {
*   updateScrollPosition(scrollY);
* }, {
*   wait: 100,
*   onExecute: (args, throttler) => {
*     console.log('Updated scroll position:', args[0]);
*   }
* });
*
* // Will execute at most once per 100ms
* window.addEventListener('scroll', () => {
*   throttler.maybeExecute(window.scrollY);
* });
* ```
*/
var LiteThrottler = class {
	constructor(fn, options) {
		this.fn = fn;
		this.options = options;
		this.lastExecutionTime = 0;
		this.isPending = false;
		this.maybeExecute = (...args) => {
			const timeSinceLastExecution = Date.now() - this.lastExecutionTime;
			if (this.options.leading && timeSinceLastExecution >= this.options.wait) this.execute(...args);
			else {
				this.lastArgs = args;
				if (!this.timeoutId && this.options.trailing) {
					const timeoutDuration = this.options.wait - timeSinceLastExecution;
					this.isPending = true;
					this.timeoutId = setTimeout(() => {
						if (this.lastArgs !== void 0) this.execute(...this.lastArgs);
					}, timeoutDuration);
				}
			}
		};
		this.execute = (...args) => {
			this.fn(...args);
			this.options.onExecute?.(args, this);
			this.lastExecutionTime = Date.now();
			this.clearTimeout();
			this.lastArgs = void 0;
			this.isPending = false;
		};
		this.flush = () => {
			if (this.isPending && this.lastArgs) this.execute(...this.lastArgs);
		};
		this.cancel = () => {
			this.clearTimeout();
			this.lastArgs = void 0;
			this.isPending = false;
		};
		this.clearTimeout = () => {
			if (this.timeoutId) {
				clearTimeout(this.timeoutId);
				this.timeoutId = void 0;
			}
		};
		if (this.options.leading === void 0 && this.options.trailing === void 0) {
			this.options.leading = true;
			this.options.trailing = true;
		}
	}
};
/**
* Creates a lightweight throttled function that limits how often the provided function can execute.
*
* This is an alternative to the throttle function in the core @tanstack/pacer package, but is more
* suitable for libraries and npm packages that need minimal overhead. Unlike the core version,
* this function creates a throttler with no external dependencies, devtools integration, or reactive state.
*
* Throttling ensures a function executes at most once within a specified time window,
* regardless of how many times it is called. This is useful for rate-limiting
* expensive operations or UI updates.
*
* @example
* ```ts
* const throttledScroll = liteThrottle(() => {
*   updateScrollIndicator();
* }, { wait: 100 });
*
* // Will execute at most once per 100ms
* window.addEventListener('scroll', throttledScroll);
* ```
*
* @example
* ```ts
* // Leading edge execution - fires immediately then throttles
* const throttledResize = liteThrottle(() => {
*   recalculateLayout();
* }, { wait: 250, leading: true, trailing: false });
* ```
*/
function liteThrottle(fn, options) {
	return new LiteThrottler(fn, options).maybeExecute;
}
// node_modules/.pnpm/@tanstack+devtools-event-client@0.4.4/node_modules/@tanstack/devtools-event-client/dist/esm/plugin.js
var EventClient = class {
	#enabled = true;
	#pluginId;
	#eventTarget;
	#debug;
	#queuedEvents;
	#connected;
	#connectIntervalId;
	#connectEveryMs;
	#retryCount = 0;
	#maxRetries = 5;
	#connecting = false;
	#failedToConnect = false;
	#internalEventTarget = null;
	#onConnected = () => {
		this.debugLog("Connected to event bus");
		this.#connected = true;
		this.#connecting = false;
		this.debugLog("Emitting queued events", this.#queuedEvents);
		this.#queuedEvents.forEach((event) => this.emitEventToBus(event));
		this.#queuedEvents = [];
		this.stopConnectLoop();
		this.#eventTarget().removeEventListener("tanstack-connect-success", this.#onConnected);
	};
	#retryConnection = () => {
		if (this.#retryCount < this.#maxRetries) {
			this.#retryCount++;
			this.dispatchCustomEvent("tanstack-connect", {});
			return;
		}
		this.#eventTarget().removeEventListener("tanstack-connect", this.#retryConnection);
		this.#failedToConnect = true;
		this.debugLog("Max retries reached, giving up on connection");
		this.stopConnectLoop();
	};
	#connectFunction = () => {
		if (this.#connecting) return;
		this.#connecting = true;
		this.#eventTarget().addEventListener("tanstack-connect-success", this.#onConnected);
		this.#retryConnection();
	};
	constructor({ pluginId, debug = false, enabled = true, reconnectEveryMs = 300 }) {
		this.#pluginId = pluginId;
		this.#enabled = enabled;
		this.#eventTarget = this.getGlobalTarget;
		this.#debug = debug;
		this.debugLog(" Initializing event subscription for plugin", this.#pluginId);
		this.#queuedEvents = [];
		this.#connected = false;
		this.#failedToConnect = false;
		this.#connectIntervalId = null;
		this.#connectEveryMs = reconnectEveryMs;
	}
	startConnectLoop() {
		if (this.#connectIntervalId !== null || this.#connected) return;
		this.debugLog(`Starting connect loop (every ${this.#connectEveryMs}ms)`);
		this.#connectIntervalId = setInterval(this.#retryConnection, this.#connectEveryMs);
	}
	stopConnectLoop() {
		this.#connecting = false;
		if (this.#connectIntervalId === null) return;
		clearInterval(this.#connectIntervalId);
		this.#connectIntervalId = null;
		this.#queuedEvents = [];
		this.debugLog("Stopped connect loop");
	}
	debugLog(...args) {
		if (this.#debug) console.log(`🌴 [tanstack-devtools:${this.#pluginId}-plugin]`, ...args);
	}
	getGlobalTarget() {
		if (typeof globalThis !== "undefined" && globalThis.__TANSTACK_EVENT_TARGET__) {
			this.debugLog("Using global event target");
			return globalThis.__TANSTACK_EVENT_TARGET__;
		}
		if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
			this.debugLog("Using window as event target");
			return window;
		}
		const eventTarget = typeof EventTarget !== "undefined" ? new EventTarget() : void 0;
		if (typeof eventTarget === "undefined" || typeof eventTarget.addEventListener === "undefined") {
			this.debugLog("No event mechanism available, running in non-web environment");
			return {
				addEventListener: () => {},
				removeEventListener: () => {},
				dispatchEvent: () => false
			};
		}
		this.debugLog("Using new EventTarget as fallback");
		return eventTarget;
	}
	getPluginId() {
		return this.#pluginId;
	}
	dispatchCustomEventShim(eventName, detail) {
		try {
			const event = new Event(eventName, { detail });
			this.#eventTarget().dispatchEvent(event);
		} catch (e) {
			this.debugLog("Failed to dispatch shim event");
		}
	}
	dispatchCustomEvent(eventName, detail) {
		try {
			this.#eventTarget().dispatchEvent(new CustomEvent(eventName, { detail }));
		} catch (e) {
			this.dispatchCustomEventShim(eventName, detail);
		}
	}
	emitEventToBus(event) {
		this.debugLog("Emitting event to client bus", event);
		this.dispatchCustomEvent("tanstack-dispatch-event", event);
	}
	createEventPayload(eventSuffix, payload) {
		return {
			type: `${this.#pluginId}:${eventSuffix}`,
			payload,
			pluginId: this.#pluginId
		};
	}
	emit(eventSuffix, payload) {
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not emitting event", eventSuffix, payload);
			return;
		}
		if (this.#internalEventTarget) {
			this.debugLog("Emitting event to internal event target", eventSuffix, payload);
			this.#internalEventTarget.dispatchEvent(new CustomEvent(`${this.#pluginId}:${eventSuffix}`, { detail: this.createEventPayload(eventSuffix, payload) }));
		}
		if (this.#failedToConnect) {
			this.debugLog("Previously failed to connect, not emitting to bus");
			return;
		}
		if (!this.#connected) {
			this.debugLog("Bus not available, will be pushed as soon as connected");
			this.#queuedEvents.push(this.createEventPayload(eventSuffix, payload));
			if (typeof CustomEvent !== "undefined" && !this.#connecting) {
				this.#connectFunction();
				this.startConnectLoop();
			}
			return;
		}
		return this.emitEventToBus(this.createEventPayload(eventSuffix, payload));
	}
	on(eventSuffix, cb, options) {
		const withEventTarget = options?.withEventTarget ?? false;
		const eventName = `${this.#pluginId}:${eventSuffix}`;
		if (withEventTarget) {
			if (!this.#internalEventTarget) this.#internalEventTarget = new EventTarget();
			this.#internalEventTarget.addEventListener(eventName, (e) => {
				cb(e.detail);
			});
		}
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not registering event", eventName);
			return () => {};
		}
		const handler = (e) => {
			this.debugLog("Received event from bus", e.detail);
			cb(e.detail);
		};
		this.#eventTarget().addEventListener(eventName, handler);
		this.debugLog("Registered event to bus", eventName);
		return () => {
			if (withEventTarget) this.#internalEventTarget?.removeEventListener(eventName, handler);
			this.#eventTarget().removeEventListener(eventName, handler);
		};
	}
	onAll(cb) {
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not registering event");
			return () => {};
		}
		const handler = (e) => {
			const event = e.detail;
			cb(event);
		};
		this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
		return () => this.#eventTarget().removeEventListener("tanstack-devtools-global", handler);
	}
	onAllPluginEvents(cb) {
		if (!this.#enabled) {
			this.debugLog("Event bus client is disabled, not registering event");
			return () => {};
		}
		const handler = (e) => {
			const event = e.detail;
			if (this.#pluginId && event.pluginId !== this.#pluginId) return;
			cb(event);
		};
		this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
		return () => this.#eventTarget().removeEventListener("tanstack-devtools-global", handler);
	}
};
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/EventClient.js
var FormEventClient = class extends EventClient {
	constructor() {
		super({
			pluginId: "form-devtools",
			reconnectEveryMs: 1e3
		});
	}
};
var formEventClient = new FormEventClient();
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/utils.js
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function getBy(obj, path) {
	return makePathArray(path).reduce((current, pathPart) => {
		if (current === null) return null;
		if (typeof current !== "undefined") return current[pathPart];
	}, obj);
}
function setBy(obj, _path, updater) {
	const path = makePathArray(_path);
	function doSet(parent) {
		if (!path.length) return functionalUpdate(updater, parent);
		const key = path.shift();
		if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
			if (typeof parent === "object") {
				if (parent === null) parent = {};
				return {
					...parent,
					[key]: doSet(parent[key])
				};
			}
			return { [key]: doSet() };
		}
		if (Array.isArray(parent) && typeof key === "number") {
			const prefix = parent.slice(0, key);
			return [
				...prefix.length ? prefix : new Array(key),
				doSet(parent[key]),
				...parent.slice(key + 1)
			];
		}
		return [...new Array(key), doSet()];
	}
	return doSet(obj);
}
function deleteBy(obj, _path) {
	const path = makePathArray(_path);
	function doDelete(parent) {
		if (!parent) return;
		if (path.length === 1) {
			const finalPath = path[0];
			if (Array.isArray(parent) && typeof finalPath === "number") return parent.filter((_, i) => i !== finalPath);
			const { [finalPath]: remove, ...rest } = parent;
			return rest;
		}
		const key = path.shift();
		if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
			if (typeof parent === "object") return {
				...parent,
				[key]: doDelete(parent[key])
			};
		}
		if (typeof key === "number") {
			if (Array.isArray(parent)) {
				if (key >= parent.length) return parent;
				const prefix = parent.slice(0, key);
				return [
					...prefix.length ? prefix : new Array(key),
					doDelete(parent[key]),
					...parent.slice(key + 1)
				];
			}
		}
		throw new Error("It seems we have created an infinite loop in deleteBy. ");
	}
	return doDelete(obj);
}
var CC_DOT = 46;
var CC_OPEN = 91;
var CC_CLOSE = 93;
var CC_ZERO = 48;
var CC_NINE = 57;
function makePathArray(str) {
	if (Array.isArray(str)) return [...str];
	if (typeof str !== "string") throw new Error("Path must be a string.");
	const len = str.length;
	const result = [];
	let segStart = len > 0 && str.charCodeAt(0) === CC_OPEN ? 1 : 0;
	let allDigits = true;
	let prev = -1;
	for (let i = segStart; i <= len; i++) {
		const char = i < len ? str.charCodeAt(i) : -1;
		if (i === len || char === CC_DOT || char === CC_OPEN || char === CC_CLOSE) {
			const segLen = i - segStart;
			if (segLen > 0) {
				const treatAsNumber = allDigits && (segLen === 1 || str.charCodeAt(segStart) !== CC_ZERO);
				const seg = str.slice(segStart, i);
				if (treatAsNumber) {
					const num = parseInt(seg, 10);
					if (segLen <= 15 || String(num) === seg) result.push(num);
					else result.push(seg);
				} else result.push(seg);
			} else if (prev !== CC_CLOSE && !(prev === -1 && char === CC_CLOSE) && !(prev === char && (char === CC_DOT || char === CC_OPEN))) result.push("");
			segStart = i + 1;
			allDigits = true;
		} else if (char < CC_ZERO || char > CC_NINE) allDigits = false;
		prev = char;
	}
	if (!result.length) result.push("");
	return result;
}
function concatenatePaths(path1, path2) {
	if (path1.length === 0) return path2;
	if (path2.length === 0) return path1;
	if (path2.startsWith("[")) return path1 + path2;
	if (path2.startsWith(".")) return path1 + path2;
	return `${path1}.${path2}`;
}
function isNonEmptyArray(obj) {
	return !(Array.isArray(obj) && obj.length === 0);
}
function getSyncValidatorArray(cause, options) {
	const runValidation = (props) => {
		return props.validators.filter(Boolean).map((validator) => {
			return {
				cause: validator.cause,
				validate: validator.fn
			};
		});
	};
	return options.validationLogic({
		form: options.form,
		group: options.group,
		validators: options.validators,
		event: {
			type: cause,
			fieldName: options.fieldName,
			async: false
		},
		runValidation
	});
}
function getAsyncValidatorArray(cause, options) {
	const { asyncDebounceMs } = options;
	const { onBlurAsyncDebounceMs, onChangeAsyncDebounceMs, onDynamicAsyncDebounceMs } = options.validators || {};
	const defaultDebounceMs = asyncDebounceMs ?? 0;
	const runValidation = (props) => {
		return props.validators.filter(Boolean).map((validator) => {
			const validatorCause = validator?.cause || cause;
			let debounceMs = defaultDebounceMs;
			switch (validatorCause) {
				case "change":
					debounceMs = onChangeAsyncDebounceMs ?? defaultDebounceMs;
					break;
				case "blur":
					debounceMs = onBlurAsyncDebounceMs ?? defaultDebounceMs;
					break;
				case "dynamic":
					debounceMs = onDynamicAsyncDebounceMs ?? defaultDebounceMs;
					break;
				case "submit": debounceMs = 0;
			}
			if (cause === "submit") debounceMs = 0;
			return {
				cause: validatorCause,
				validate: validator.fn,
				debounceMs
			};
		});
	};
	return options.validationLogic({
		form: options.form,
		group: options.group,
		validators: options.validators,
		event: {
			type: cause,
			fieldName: options.fieldName,
			async: true
		},
		runValidation
	});
}
var isGlobalFormValidationError = (error) => {
	return !!error && typeof error === "object" && "fields" in error;
};
function evaluate(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	if (objA instanceof Date && objB instanceof Date) return objA.getTime() === objB.getTime();
	if (objA instanceof Map && objB instanceof Map) {
		if (objA.size !== objB.size) return false;
		for (const [k, v] of objA) if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
		return true;
	}
	if (objA instanceof Set && objB instanceof Set) {
		if (objA.size !== objB.size) return false;
		for (const v of objA) if (!objB.has(v)) return false;
		return true;
	}
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;
	if (keysA.length === 0 && !Array.isArray(objA) && !Array.isArray(objB) && (Object.getPrototypeOf(objA) !== Object.prototype || Object.getPrototypeOf(objB) !== Object.prototype)) return false;
	for (const key of keysA) if (!keysB.includes(key) || !evaluate(objA[key], objB[key])) return false;
	return true;
}
var determineFormLevelErrorSourceAndValue = ({ newFormValidatorError, isPreviousErrorFromFormValidator, previousErrorValue }) => {
	if (newFormValidatorError) return {
		newErrorValue: newFormValidatorError,
		newSource: "form"
	};
	if (isPreviousErrorFromFormValidator) return {
		newErrorValue: void 0,
		newSource: void 0
	};
	if (previousErrorValue) return {
		newErrorValue: previousErrorValue,
		newSource: "field"
	};
	return {
		newErrorValue: void 0,
		newSource: void 0
	};
};
var determineFieldLevelErrorSourceAndValue = ({ formLevelError, fieldLevelError }) => {
	if (fieldLevelError) return {
		newErrorValue: fieldLevelError,
		newSource: "field"
	};
	if (formLevelError) return {
		newErrorValue: formLevelError,
		newSource: "form"
	};
	return {
		newErrorValue: void 0,
		newSource: void 0
	};
};
function mergeOpts(originalOpts, overrides) {
	if (originalOpts === void 0 || originalOpts === null) return overrides;
	return {
		...originalOpts,
		...overrides
	};
}
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);
function uuid() {
	let i = 0;
	let num;
	let out = "";
	if (!BUFFER || IDX + 16 > 256) {
		BUFFER = new Array(256);
		i = 256;
		while (i--) BUFFER[i] = 256 * Math.random() | 0;
		i = 0;
		IDX = 0;
	}
	for (; i < 16; i++) {
		num = BUFFER[IDX + i];
		if (i === 6) out += HEX[num & 15 | 64];
		else if (i === 8) out += HEX[num & 63 | 128];
		else out += HEX[num];
		if (i & 1 && i > 1 && i < 11) out += "-";
	}
	IDX++;
	return out;
}
var throttleFormState = liteThrottle((form) => formEventClient.emit("form-state", {
	id: form.formId,
	state: form.store.state
}), { wait: 300 });
function deepCopy(obj) {
	if (obj === null || typeof obj !== "object") return obj;
	if (obj instanceof Date) return new Date(obj.getTime());
	if (Array.isArray(obj)) {
		const arrCopy = [];
		for (let i = 0; i < obj.length; i++) arrCopy[i] = deepCopy(obj[i]);
		return arrCopy;
	}
	if (obj instanceof Map) {
		const mapCopy = /* @__PURE__ */ new Map();
		obj.forEach((value, key) => {
			mapCopy.set(key, deepCopy(value));
		});
		return mapCopy;
	}
	if (obj instanceof Set) {
		const setCopy = /* @__PURE__ */ new Set();
		obj.forEach((value) => {
			setCopy.add(deepCopy(value));
		});
		return setCopy;
	}
	const copy = {};
	for (const key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) copy[key] = deepCopy(obj[key]);
	return copy;
}
function isFieldInGroup(groupName, fieldName) {
	return fieldName === groupName || fieldName.startsWith(`${groupName}.`) || fieldName.startsWith(`${groupName}[`);
}
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/ValidationLogic.js
var defaultValidationLogic = (props) => {
	if (!props.validators) return props.runValidation({
		validators: [],
		form: props.form
	});
	const isAsync = props.event.async;
	const onMountValidator = isAsync ? void 0 : {
		fn: props.validators.onMount,
		cause: "mount"
	};
	const onChangeValidator = {
		fn: isAsync ? props.validators.onChangeAsync : props.validators.onChange,
		cause: "change"
	};
	const onBlurValidator = {
		fn: isAsync ? props.validators.onBlurAsync : props.validators.onBlur,
		cause: "blur"
	};
	const onSubmitValidator = {
		fn: isAsync ? props.validators.onSubmitAsync : props.validators.onSubmit,
		cause: "submit"
	};
	const onServerValidator = isAsync ? void 0 : {
		fn: () => void 0,
		cause: "server"
	};
	switch (props.event.type) {
		case "mount": return props.runValidation({
			validators: [onMountValidator],
			form: props.form
		});
		case "submit": return props.runValidation({
			validators: [
				onChangeValidator,
				onBlurValidator,
				onSubmitValidator,
				onServerValidator
			],
			form: props.form
		});
		case "server": return props.runValidation({
			validators: [],
			form: props.form
		});
		case "blur": return props.runValidation({
			validators: [onBlurValidator, onServerValidator],
			form: props.form
		});
		case "change": return props.runValidation({
			validators: [onChangeValidator, onServerValidator],
			form: props.form
		});
		default: throw new Error(`Unknown validation event type: ${props.event.type}`);
	}
};
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/standardSchemaValidator.js
function prefixSchemaToErrors(issues, formValue) {
	const schema = /* @__PURE__ */ new Map();
	for (const issue of issues) {
		const issuePath = issue.path ?? [];
		let currentFormValue = formValue;
		let path = "";
		for (let i = 0; i < issuePath.length; i++) {
			const pathSegment = issuePath[i];
			if (pathSegment === void 0) continue;
			const segment = typeof pathSegment === "object" ? pathSegment.key : pathSegment;
			const segmentAsNumber = Number(segment);
			if (Array.isArray(currentFormValue) && !Number.isNaN(segmentAsNumber)) path += `[${segmentAsNumber}]`;
			else path += (i > 0 ? "." : "") + String(segment);
			if (typeof currentFormValue === "object" && currentFormValue !== null) currentFormValue = currentFormValue[segment];
			else currentFormValue = void 0;
		}
		schema.set(path, (schema.get(path) ?? []).concat(issue));
	}
	return Object.fromEntries(schema);
}
var transformFormIssues = (issues, formValue) => {
	const schemaErrors = prefixSchemaToErrors(issues, formValue);
	return {
		form: schemaErrors,
		fields: schemaErrors
	};
};
var standardSchemaValidators = {
	validate({ value, validationSource }, schema) {
		const result = schema["~standard"].validate(value);
		if (result instanceof Promise) throw new Error("async function passed to sync validator");
		if (!result.issues) return;
		if (validationSource === "field") return result.issues;
		return transformFormIssues(result.issues, value);
	},
	async validateAsync({ value, validationSource }, schema) {
		const result = await schema["~standard"].validate(value);
		if (!result.issues) return;
		if (validationSource === "field") return result.issues;
		return transformFormIssues(result.issues, value);
	}
};
var isStandardSchemaValidator = (validator) => !!validator && "~standard" in validator;
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/metaHelper.js
var defaultFieldMeta = {
	isValidating: false,
	isTouched: false,
	isBlurred: false,
	isDirty: false,
	isPristine: true,
	isValid: true,
	isDefaultValue: true,
	errors: [],
	errorMap: {},
	errorSourceMap: {},
	_arrayVersion: 0,
	_pendingValidationsCount: 0
};
function metaHelper(formApi) {
	function bumpArrayVersion(field) {
		const currentMeta = formApi.getFieldMeta(field) ?? defaultFieldMeta;
		formApi.setFieldMeta(field, {
			...currentMeta,
			_arrayVersion: (currentMeta._arrayVersion || 0) + 1
		});
	}
	function handleArrayMove(field, fromIndex, toIndex) {
		bumpArrayVersion(field);
		const affectedFields = getAffectedFields(field, fromIndex, "move", toIndex);
		const startIndex = Math.min(fromIndex, toIndex);
		const endIndex = Math.max(fromIndex, toIndex);
		for (let i = startIndex; i <= endIndex; i++) affectedFields.push(getFieldPath(field, i));
		const fromFields = Object.keys(formApi.fieldInfo).reduce((fieldMap, fieldKey) => {
			if (fieldKey.startsWith(getFieldPath(field, fromIndex))) fieldMap.set(fieldKey, formApi.getFieldMeta(fieldKey));
			return fieldMap;
		}, /* @__PURE__ */ new Map());
		shiftMeta(affectedFields, fromIndex < toIndex ? "up" : "down");
		Object.keys(formApi.fieldInfo).filter((fieldKey) => fieldKey.startsWith(getFieldPath(field, toIndex))).forEach((fieldKey) => {
			const fromKey = fieldKey.replace(getFieldPath(field, toIndex), getFieldPath(field, fromIndex));
			const fromMeta = fromFields.get(fromKey);
			if (fromMeta) formApi.setFieldMeta(fieldKey, fromMeta);
		});
	}
	function handleArrayRemove(field, index) {
		bumpArrayVersion(field);
		shiftMeta(getAffectedFields(field, index, "remove"), "up");
	}
	function handleArraySwap(field, index, secondIndex) {
		bumpArrayVersion(field);
		getAffectedFields(field, index, "swap", secondIndex).forEach((fieldKey) => {
			if (!fieldKey.toString().startsWith(getFieldPath(field, index))) return;
			const swappedKey = fieldKey.toString().replace(getFieldPath(field, index), getFieldPath(field, secondIndex));
			const [meta1, meta2] = [formApi.getFieldMeta(fieldKey), formApi.getFieldMeta(swappedKey)];
			if (meta1) formApi.setFieldMeta(swappedKey, meta1);
			if (meta2) formApi.setFieldMeta(fieldKey, meta2);
		});
	}
	function handleArrayInsert(field, insertIndex) {
		bumpArrayVersion(field);
		const affectedFields = getAffectedFields(field, insertIndex, "insert");
		shiftMeta(affectedFields, "down");
		affectedFields.forEach((fieldKey) => {
			if (fieldKey.toString().startsWith(getFieldPath(field, insertIndex))) formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
		});
	}
	function getFieldPath(field, index) {
		return `${field}[${index}]`;
	}
	function getAffectedFields(field, index, mode, secondIndex) {
		const affectedFieldKeys = [getFieldPath(field, index)];
		switch (mode) {
			case "swap":
				affectedFieldKeys.push(getFieldPath(field, secondIndex));
				break;
			case "move": {
				const [startIndex, endIndex] = [Math.min(index, secondIndex), Math.max(index, secondIndex)];
				for (let i = startIndex; i <= endIndex; i++) affectedFieldKeys.push(getFieldPath(field, i));
				break;
			}
			default: {
				const currentValue = formApi.getFieldValue(field);
				const fieldItems = Array.isArray(currentValue) ? currentValue.length : 0;
				for (let i = index + 1; i < fieldItems; i++) affectedFieldKeys.push(getFieldPath(field, i));
				break;
			}
		}
		return Object.keys(formApi.fieldInfo).filter((fieldKey) => affectedFieldKeys.some((key) => fieldKey.startsWith(key)));
	}
	function updateIndex(fieldKey, direction) {
		return fieldKey.replace(/\[(\d+)\]/, (_, num) => {
			const currIndex = parseInt(num, 10);
			return `[${direction === "up" ? currIndex + 1 : Math.max(0, currIndex - 1)}]`;
		});
	}
	function shiftMeta(fields, direction) {
		(direction === "up" ? fields : [...fields].reverse()).forEach((fieldKey) => {
			const nextFieldKey = updateIndex(fieldKey.toString(), direction);
			const nextFieldMeta = formApi.getFieldMeta(nextFieldKey);
			if (nextFieldMeta) formApi.setFieldMeta(fieldKey, nextFieldMeta);
			else formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
		});
	}
	const getEmptyFieldMeta = () => defaultFieldMeta;
	return {
		bumpArrayVersion,
		handleArrayMove,
		handleArrayRemove,
		handleArraySwap,
		handleArrayInsert
	};
}
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/FormApi.js
function getDefaultFormState(defaultState) {
	return {
		values: defaultState.values ?? {},
		errorMap: defaultState.errorMap ?? {},
		fieldMetaBase: defaultState.fieldMetaBase ?? {},
		formGroupStateBase: defaultState.formGroupStateBase ?? {},
		isSubmitted: defaultState.isSubmitted ?? false,
		isSubmitting: defaultState.isSubmitting ?? false,
		isValidating: defaultState.isValidating ?? false,
		submissionAttempts: defaultState.submissionAttempts ?? 0,
		isSubmitSuccessful: defaultState.isSubmitSuccessful ?? false,
		validationMetaMap: defaultState.validationMetaMap ?? {
			onChange: void 0,
			onBlur: void 0,
			onSubmit: void 0,
			onMount: void 0,
			onServer: void 0,
			onDynamic: void 0
		}
	};
}
var FormApi = class {
	/**
	* Constructs a new `FormApi` instance with the given form options.
	*/
	constructor(opts) {
		this.options = {};
		this.fieldInfo = {};
		this.formGroupApis = /* @__PURE__ */ new Set();
		this.mount = () => {
			const cleanupDevtoolBroadcast = this.store.subscribe(() => {
				throttleFormState(this);
			});
			const cleanupFormStateListener = formEventClient.on("request-form-state", (e) => {
				if (e.payload.id === this._formId) formEventClient.emit("form-api", {
					id: this._formId,
					state: this.store.state,
					options: this.options
				});
			});
			const cleanupFormResetListener = formEventClient.on("request-form-reset", (e) => {
				if (e.payload.id === this._formId) this.reset();
			});
			const cleanupFormForceSubmitListener = formEventClient.on("request-form-force-submit", (e) => {
				if (e.payload.id === this._formId) {
					this._devtoolsSubmissionOverride = true;
					this.handleSubmit();
					this._devtoolsSubmissionOverride = false;
				}
			});
			const cleanup = () => {
				cleanupFormForceSubmitListener();
				cleanupFormResetListener();
				cleanupFormStateListener();
				cleanupDevtoolBroadcast.unsubscribe();
				formEventClient.emit("form-unmounted", { id: this._formId });
			};
			this.options.listeners?.onMount?.({ formApi: this });
			const { onMount } = this.options.validators || {};
			formEventClient.emit("form-api", {
				id: this._formId,
				state: this.store.state,
				options: this.options
			});
			if (!onMount) return cleanup;
			this.validateSync("mount");
			return cleanup;
		};
		this.update = (options) => {
			if (!options) return;
			const oldOptions = this.options;
			this.options = options;
			const shouldUpdateValues = options.defaultValues && !evaluate(options.defaultValues, oldOptions.defaultValues) && !this.state.isTouched;
			const shouldUpdateState = !evaluate(options.defaultState, oldOptions.defaultState) && !this.state.isTouched;
			if (!shouldUpdateValues && !shouldUpdateState) return;
			batch(() => {
				this.baseStore.setState(() => getDefaultFormState(Object.assign({}, this.state, shouldUpdateState ? options.defaultState : {}, shouldUpdateValues ? { values: options.defaultValues } : {})));
			});
			if (shouldUpdateValues) {
				const helper = metaHelper(this);
				for (const fieldKey of Object.keys(this.fieldInfo)) if (Array.isArray(this.getFieldValue(fieldKey))) helper.bumpArrayVersion(fieldKey);
			}
			formEventClient.emit("form-api", {
				id: this._formId,
				state: this.store.state,
				options: this.options
			});
		};
		this.reset = (values, opts2) => {
			const { fieldMeta: currentFieldMeta } = this.state;
			const fieldMetaBase = this.resetFieldMeta(currentFieldMeta);
			if (values && !opts2?.keepDefaultValues) this.options = {
				...this.options,
				defaultValues: values
			};
			this.baseStore.setState(() => {
				let nextValues = values ?? this.options.defaultValues ?? this.options.defaultState?.values;
				if (!values) Object.values(this.fieldInfo).forEach((fieldInfo) => {
					if (fieldInfo.instance && fieldInfo.instance.options.defaultValue !== void 0) nextValues = setBy(nextValues, fieldInfo.instance.name, fieldInfo.instance.options.defaultValue);
				});
				return getDefaultFormState({
					...this.options.defaultState,
					values: nextValues,
					fieldMetaBase
				});
			});
		};
		this.validateAllFields = async (cause) => {
			const fieldValidationPromises = [];
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					if (!field.instance) return;
					const fieldInstance = field.instance;
					fieldValidationPromises.push(Promise.resolve().then(() => fieldInstance.validate(cause, {
						skipFormValidation: true,
						skipGroupValidation: true
					})));
					if (!field.instance.store.state.meta.isTouched) field.instance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			return (await Promise.all(fieldValidationPromises)).flat();
		};
		this.validateArrayFieldsStartingFrom = async (field, index, cause) => {
			const currentValue = this.getFieldValue(field);
			const lastIndex = Array.isArray(currentValue) ? Math.max(currentValue.length - 1, 0) : null;
			const fieldKeysToValidate = [`${field}[${index}]`];
			for (let i = index + 1; i <= (lastIndex ?? 0); i++) fieldKeysToValidate.push(`${field}[${i}]`);
			const fieldsToValidate = Object.keys(this.fieldInfo).filter((fieldKey) => fieldKeysToValidate.some((key) => fieldKey.startsWith(key)));
			const fieldValidationPromises = [];
			batch(() => {
				fieldsToValidate.forEach((nestedField) => {
					fieldValidationPromises.push(Promise.resolve().then(() => this.validateField(nestedField, cause)));
				});
			});
			return (await Promise.all(fieldValidationPromises)).flat();
		};
		this.validateField = (field, cause) => {
			const fieldInstance = this.fieldInfo[field]?.instance;
			if (!fieldInstance) {
				const { hasErrored } = this.validateSync(cause);
				if (hasErrored && !this.options.asyncAlways) return this.getFieldMeta(field)?.errors ?? [];
				return this.validateAsync(cause).then(() => {
					return this.getFieldMeta(field)?.errors ?? [];
				});
			}
			if (!fieldInstance.store.state.meta.isTouched) fieldInstance.setMeta((prev) => ({
				...prev,
				isTouched: true
			}));
			return fieldInstance.validate(cause);
		};
		this.validateSync = (cause, validateOpts) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this,
				group: validateOpts?.group,
				validationLogic: this.options.validationLogic || defaultValidationLogic
			});
			let hasErrored = false;
			const currentValidationErrorMap = {};
			batch(() => {
				for (const validateObj of validates) {
					if (!validateObj.validate) continue;
					const { formError, fieldErrors } = normalizeError$2(this.runValidator({
						validate: validateObj.validate,
						value: {
							value: this.state.values,
							formApi: this,
							validationSource: "form"
						},
						type: "validate"
					}));
					const errorMapKey = getErrorMapKey$2(validateObj.cause);
					let allFieldsToProcess = /* @__PURE__ */ new Set([...Object.keys(this.state.fieldMeta), ...Object.keys(fieldErrors || {})]);
					if (validateOpts?.filterFieldNames) allFieldsToProcess = new Set([...allFieldsToProcess].filter(validateOpts.filterFieldNames));
					for (const field of allFieldsToProcess) {
						if (this.baseStore.state.fieldMetaBase[field] === void 0 && !fieldErrors?.[field]) continue;
						const { errorMap: currentErrorMap, errorSourceMap: currentErrorMapSource } = this.getFieldMeta(field) ?? defaultFieldMeta;
						const newFormValidatorError = fieldErrors?.[field];
						const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
							newFormValidatorError,
							isPreviousErrorFromFormValidator: currentErrorMapSource?.[errorMapKey] === "form",
							previousErrorValue: currentErrorMap?.[errorMapKey]
						});
						if (newSource === "form") currentValidationErrorMap[field] = {
							...currentValidationErrorMap[field],
							[errorMapKey]: newFormValidatorError
						};
						if (currentErrorMap?.[errorMapKey] !== newErrorValue) this.setFieldMeta(field, (prev = defaultFieldMeta) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						}));
					}
					if (!validateOpts?.dontUpdateFormErrorMap) {
						if (this.state.errorMap?.[errorMapKey] !== formError) this.baseStore.setState((prev) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: formError
							}
						}));
					}
					if (formError || fieldErrors) hasErrored = true;
				}
				if (validateOpts?.dontUpdateFormErrorMap) return;
				const submitErrKey = getErrorMapKey$2("submit");
				if (this.state.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.baseStore.setState((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[submitErrKey]: void 0
					}
				}));
				const serverErrKey = getErrorMapKey$2("server");
				if (this.state.errorMap?.[serverErrKey] && cause !== "server" && !hasErrored) this.baseStore.setState((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[serverErrKey]: void 0
					}
				}));
			});
			return {
				hasErrored,
				fieldsErrorMap: currentValidationErrorMap
			};
		};
		this.validateAsync = async (cause, validateOpts) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this,
				group: validateOpts?.group,
				validationLogic: this.options.validationLogic || defaultValidationLogic
			});
			if (!this.state.isFormValidating) this.baseStore.setState((prev) => ({
				...prev,
				isFormValidating: true
			}));
			const promises = [];
			let fieldErrorsFromFormValidators;
			for (const validateObj of validates) {
				if (!validateObj.validate) continue;
				const key = getErrorMapKey$2(validateObj.cause);
				this.state.validationMetaMap[key]?.lastAbortController.abort();
				const controller = new AbortController();
				this.state.validationMetaMap[key] = { lastAbortController: controller };
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							setTimeout(async () => {
								if (controller.signal.aborted) return rawResolve(void 0);
								try {
									rawResolve(await this.runValidator({
										validate: validateObj.validate,
										value: {
											value: this.state.values,
											formApi: this,
											validationSource: "form",
											signal: controller.signal
										},
										type: "validateAsync"
									}));
								} catch (e) {
									rawReject(e);
								}
							}, validateObj.debounceMs);
						});
					} catch (e) {
						rawError = e;
					}
					const { formError, fieldErrors: fieldErrorsFromNormalizeError } = normalizeError$2(rawError);
					if (fieldErrorsFromNormalizeError) fieldErrorsFromFormValidators = fieldErrorsFromFormValidators ? {
						...fieldErrorsFromFormValidators,
						...fieldErrorsFromNormalizeError
					} : fieldErrorsFromNormalizeError;
					const errorMapKey = getErrorMapKey$2(validateObj.cause);
					const allFieldsToProcess = /* @__PURE__ */ new Set([...Object.keys(this.state.fieldMeta), ...Object.keys(fieldErrorsFromFormValidators || {})]);
					let fields = Array.from(allFieldsToProcess);
					if (validateOpts?.filterFieldNames) fields = fields.filter(validateOpts.filterFieldNames);
					for (const field of fields) {
						if (this.baseStore.state.fieldMetaBase[field] === void 0 && !fieldErrorsFromFormValidators?.[field]) continue;
						const { errorMap: currentErrorMap, errorSourceMap: currentErrorMapSource } = this.getFieldMeta(field) ?? defaultFieldMeta;
						const newFormValidatorError = fieldErrorsFromFormValidators?.[field];
						const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
							newFormValidatorError,
							isPreviousErrorFromFormValidator: currentErrorMapSource?.[errorMapKey] === "form",
							previousErrorValue: currentErrorMap?.[errorMapKey]
						});
						if (currentErrorMap?.[errorMapKey] !== newErrorValue) this.setFieldMeta(field, (prev = defaultFieldMeta) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						}));
					}
					if (!validateOpts?.dontUpdateFormErrorMap) this.baseStore.setState((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: formError
						}
					}));
					resolve(fieldErrorsFromFormValidators ? {
						fieldErrors: fieldErrorsFromFormValidators,
						errorMapKey
					} : void 0);
				}));
			}
			let results = [];
			const fieldsErrorMap = {};
			if (promises.length) {
				results = await Promise.all(promises);
				for (const fieldValidationResult of results) if (fieldValidationResult?.fieldErrors) {
					const { errorMapKey } = fieldValidationResult;
					for (const [field, fieldError] of Object.entries(fieldValidationResult.fieldErrors)) fieldsErrorMap[field] = {
						...fieldsErrorMap[field] || {},
						[errorMapKey]: fieldError
					};
				}
			}
			this.baseStore.setState((prev) => ({
				...prev,
				isFormValidating: false
			}));
			return fieldsErrorMap;
		};
		this.validate = (cause, validateOpts) => {
			const { hasErrored, fieldsErrorMap } = this.validateSync(cause, validateOpts);
			if (hasErrored && !this.options.asyncAlways) return fieldsErrorMap;
			return this.validateAsync(cause, validateOpts);
		};
		this._handleSubmit = async (submitMeta) => {
			this.baseStore.setState((old) => ({
				...old,
				isSubmitted: false,
				submissionAttempts: old.submissionAttempts + 1,
				isSubmitSuccessful: false
			}));
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					if (!field.instance) return;
					if (!field.instance.store.state.meta.isTouched) field.instance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
			if (!this.state.canSubmit && !this._devtoolsSubmissionOverride) {
				if (this.baseStore.state.submissionAttempts <= 1) {
					this.options.onSubmitInvalid?.({
						value: this.state.values,
						formApi: this,
						meta: submitMetaArg
					});
					return;
				}
			}
			this.baseStore.setState((d) => ({
				...d,
				isSubmitting: true
			}));
			const done = () => {
				this.baseStore.setState((prev) => ({
					...prev,
					isSubmitting: false
				}));
			};
			await this.validateAllFields("submit");
			if (!this.state.isFieldsValid) {
				done();
				this.options.onSubmitInvalid?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				formEventClient.emit("form-submission", {
					id: this._formId,
					submissionAttempt: this.state.submissionAttempts,
					successful: false,
					stage: "validateAllFields",
					errors: Object.values(this.state.fieldMeta).map((meta) => meta.errors).flat()
				});
				return;
			}
			await this.validate("submit");
			if (!this.state.isValid) {
				done();
				this.options.onSubmitInvalid?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				formEventClient.emit("form-submission", {
					id: this._formId,
					submissionAttempt: this.state.submissionAttempts,
					successful: false,
					stage: "validate",
					errors: this.state.errors
				});
				return;
			}
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					field.instance?.triggerOnSubmitListener();
				});
			});
			this.options.listeners?.onSubmit?.({
				formApi: this,
				meta: submitMetaArg
			});
			try {
				await this.options.onSubmit?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				batch(() => {
					this.baseStore.setState((prev) => ({
						...prev,
						isSubmitted: true,
						isSubmitSuccessful: true
					}));
					formEventClient.emit("form-submission", {
						id: this._formId,
						submissionAttempt: this.state.submissionAttempts,
						successful: true
					});
					done();
				});
			} catch (err) {
				this.baseStore.setState((prev) => ({
					...prev,
					isSubmitSuccessful: false
				}));
				formEventClient.emit("form-submission", {
					id: this._formId,
					submissionAttempt: this.state.submissionAttempts,
					successful: false,
					stage: "inflight",
					onError: err
				});
				done();
				throw err;
			}
		};
		this.getFieldValue = (field) => getBy(this.state.values, field);
		this.getFieldMeta = (field) => {
			return this.state.fieldMeta[field];
		};
		this.getFormGroupMeta = (name) => {
			return this.formGroupMetaDerived.state[name];
		};
		this.getFieldInfo = (field) => {
			return this.fieldInfo[field] ||= {
				instance: null,
				validationMetaMap: {
					onChange: void 0,
					onBlur: void 0,
					onSubmit: void 0,
					onMount: void 0,
					onServer: void 0,
					onDynamic: void 0
				}
			};
		};
		this.setFieldMeta = (field, updater) => {
			this.baseStore.setState((prev) => {
				return {
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[field]: functionalUpdate(updater, prev.fieldMetaBase[field])
					}
				};
			});
		};
		this.resetFieldMeta = (fieldMeta) => {
			return Object.keys(fieldMeta).reduce((acc, key) => {
				const fieldKey = key;
				acc[fieldKey] = defaultFieldMeta;
				return acc;
			}, {});
		};
		this.setFieldValue = (field, updater, opts2) => {
			const dontUpdateMeta = opts2?.dontUpdateMeta ?? false;
			const dontRunListeners = opts2?.dontRunListeners ?? false;
			const dontValidate = opts2?.dontValidate ?? false;
			batch(() => {
				if (!dontUpdateMeta) this.setFieldMeta(field, (prev) => ({
					...prev,
					isTouched: true,
					isDirty: true,
					errorMap: {
						...prev?.errorMap,
						onMount: void 0
					}
				}));
				this.baseStore.setState((prev) => {
					return {
						...prev,
						values: setBy(prev.values, field, updater)
					};
				});
			});
			if (!dontRunListeners) this.getFieldInfo(field).instance?.triggerOnChangeListener();
			if (!dontValidate) this.validateField(field, "change");
		};
		this.deleteField = (field) => {
			const fieldsToDelete = [...Object.keys(this.fieldInfo).filter((f) => {
				const fieldStr = field.toString();
				return f.startsWith(`${fieldStr}.`) || f.startsWith(`${fieldStr}[`);
			}), field];
			this.baseStore.setState((prev) => {
				const newState = { ...prev };
				fieldsToDelete.forEach((f) => {
					newState.values = deleteBy(newState.values, f);
					delete this.fieldInfo[f];
					delete newState.fieldMetaBase[f];
				});
				return newState;
			});
		};
		this.pushFieldValue = (field, value, options) => {
			this.setFieldValue(field, (prev) => [...Array.isArray(prev) ? prev : [], value], options);
			metaHelper(this).bumpArrayVersion(field);
		};
		this.insertFieldValue = async (field, index, value, options) => {
			this.setFieldValue(field, (prev) => {
				return [
					...prev.slice(0, index),
					value,
					...prev.slice(index)
				];
			}, mergeOpts(options, { dontValidate: true }));
			const dontValidate = options?.dontValidate ?? false;
			if (!dontValidate) await this.validateField(field, "change");
			metaHelper(this).handleArrayInsert(field, index);
			if (!dontValidate) await this.validateArrayFieldsStartingFrom(field, index, "change");
		};
		this.replaceFieldValue = async (field, index, value, options) => {
			this.setFieldValue(field, (prev) => {
				return prev.map((d, i) => i === index ? value : d);
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).bumpArrayVersion(field);
			if (!(options?.dontValidate ?? false)) {
				await this.validateField(field, "change");
				await this.validateArrayFieldsStartingFrom(field, index, "change");
			}
		};
		this.removeFieldValue = async (field, index, options) => {
			const fieldValue = this.getFieldValue(field);
			const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
			this.setFieldValue(field, (prev) => {
				return prev.filter((_d, i) => i !== index);
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).handleArrayRemove(field, index);
			if (lastIndex !== null) {
				const start = `${field}[${lastIndex}]`;
				this.deleteField(start);
			}
			if (!(options?.dontValidate ?? false)) {
				await this.validateField(field, "change");
				await this.validateArrayFieldsStartingFrom(field, index, "change");
			}
		};
		this.swapFieldValues = (field, index1, index2, options) => {
			this.setFieldValue(field, (prev) => {
				const prev1 = prev[index1];
				const prev2 = prev[index2];
				return setBy(setBy(prev, `${index1}`, prev2), `${index2}`, prev1);
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).handleArraySwap(field, index1, index2);
			if (!(options?.dontValidate ?? false)) {
				this.validateField(field, "change");
				this.validateField(`${field}[${index1}]`, "change");
				this.validateField(`${field}[${index2}]`, "change");
			}
		};
		this.moveFieldValues = (field, index1, index2, options) => {
			this.setFieldValue(field, (prev) => {
				const next = [...prev];
				next.splice(index2, 0, next.splice(index1, 1)[0]);
				return next;
			}, mergeOpts(options, { dontValidate: true }));
			metaHelper(this).handleArrayMove(field, index1, index2);
			if (!(options?.dontValidate ?? false)) {
				this.validateField(field, "change");
				this.validateField(`${field}[${index1}]`, "change");
				this.validateField(`${field}[${index2}]`, "change");
			}
		};
		this.clearFieldValues = (field, options) => {
			const fieldValue = this.getFieldValue(field);
			const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
			this.setFieldValue(field, [], mergeOpts(options, { dontValidate: true }));
			metaHelper(this).bumpArrayVersion(field);
			if (lastIndex !== null) for (let i = 0; i <= lastIndex; i++) {
				const fieldKey = `${field}[${i}]`;
				this.deleteField(fieldKey);
			}
			if (!(options?.dontValidate ?? false)) this.validateField(field, "change");
		};
		this.resetField = (field) => {
			this.baseStore.setState((prev) => {
				const fieldDefault = this.getFieldInfo(field).instance?.options.defaultValue;
				const formDefault = getBy(this.options.defaultValues, field);
				const targetValue = fieldDefault ?? formDefault;
				return {
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[field]: defaultFieldMeta
					},
					values: targetValue !== void 0 ? setBy(prev.values, field, targetValue) : prev.values
				};
			});
		};
		this.setErrorMap = (errorMap) => {
			batch(() => {
				Object.entries(errorMap).forEach(([key, value]) => {
					const errorMapKey = key;
					if (isGlobalFormValidationError(value)) {
						const { formError, fieldErrors } = normalizeError$2(value);
						for (const fieldName of Object.keys(this.fieldInfo)) {
							if (!this.getFieldMeta(fieldName)) continue;
							this.setFieldMeta(fieldName, (prev) => ({
								...prev,
								errorMap: {
									...prev.errorMap,
									[errorMapKey]: fieldErrors?.[fieldName]
								},
								errorSourceMap: {
									...prev.errorSourceMap,
									[errorMapKey]: "form"
								}
							}));
						}
						this.baseStore.setState((prev) => ({
							...prev,
							errorMap: {
								...prev.errorMap,
								[errorMapKey]: formError
							}
						}));
					} else this.baseStore.setState((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: value
						}
					}));
				});
			});
		};
		this.getAllErrors = () => {
			return {
				form: {
					errors: this.state.errors,
					errorMap: this.state.errorMap
				},
				fields: Object.entries(this.state.fieldMeta).reduce((acc, [fieldName, fieldMeta]) => {
					if (Object.keys(fieldMeta).length && fieldMeta.errors.length) acc[fieldName] = {
						errors: fieldMeta.errors,
						errorMap: fieldMeta.errorMap
					};
					return acc;
				}, {})
			};
		};
		this.parseValuesWithSchema = (schema) => {
			return standardSchemaValidators.validate({
				value: this.state.values,
				validationSource: "form"
			}, schema);
		};
		this.parseValuesWithSchemaAsync = (schema) => {
			return standardSchemaValidators.validateAsync({
				value: this.state.values,
				validationSource: "form"
			}, schema);
		};
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this._formId = opts?.formId ?? uuid();
		this._devtoolsSubmissionOverride = false;
		let baseStoreVal = getDefaultFormState({
			...opts?.defaultState,
			values: opts?.defaultValues ?? opts?.defaultState?.values
		});
		if (opts?.transform) {
			baseStoreVal = opts.transform({ state: baseStoreVal }).state;
			for (const errKey of Object.keys(baseStoreVal.errorMap)) {
				const errKeyMap = baseStoreVal.errorMap[errKey];
				if (errKeyMap === void 0 || !isGlobalFormValidationError(errKeyMap)) continue;
				for (const fieldName of Object.keys(errKeyMap.fields)) {
					const fieldErr = errKeyMap.fields[fieldName];
					if (fieldErr === void 0) continue;
					const existingFieldMeta = baseStoreVal.fieldMetaBase[fieldName];
					baseStoreVal.fieldMetaBase[fieldName] = {
						isTouched: false,
						isValidating: false,
						isBlurred: false,
						isDirty: false,
						_arrayVersion: 0,
						_pendingValidationsCount: 0,
						...existingFieldMeta ?? {},
						errorSourceMap: {
							...existingFieldMeta?.["errorSourceMap"] ?? {},
							onChange: "form"
						},
						errorMap: {
							...existingFieldMeta?.["errorMap"] ?? {},
							[errKey]: fieldErr
						}
					};
				}
			}
		}
		this.baseStore = createStore(baseStoreVal);
		let prevBaseStore = void 0;
		this.fieldMetaDerived = createStore((prevVal) => {
			const currBaseStore = this.baseStore.get();
			let originalMetaCount = 0;
			const fieldMeta = {};
			for (const fieldName of Object.keys(currBaseStore.fieldMetaBase)) {
				const currBaseMeta = currBaseStore.fieldMetaBase[fieldName];
				const prevBaseMeta = prevBaseStore?.fieldMetaBase[fieldName];
				const prevFieldInfo = prevVal?.[fieldName];
				const curFieldVal = getBy(currBaseStore.values, fieldName);
				let fieldErrors = prevFieldInfo?.errors;
				if (!prevBaseMeta || currBaseMeta.errorMap !== prevBaseMeta.errorMap) {
					fieldErrors = Object.values(currBaseMeta.errorMap ?? {}).filter((val) => val !== void 0);
					const fieldInstance = this.getFieldInfo(fieldName)?.instance;
					if (!fieldInstance || !fieldInstance.options.disableErrorFlat) fieldErrors = fieldErrors.flat(1);
				}
				const isFieldValid = !isNonEmptyArray(fieldErrors);
				const isFieldPristine = !currBaseMeta.isDirty;
				const isDefaultValue = evaluate(curFieldVal, this.getFieldInfo(fieldName)?.instance?.options.defaultValue ?? getBy(this.options.defaultValues, fieldName));
				if (prevFieldInfo && prevFieldInfo.isPristine === isFieldPristine && prevFieldInfo.isValid === isFieldValid && prevFieldInfo.isDefaultValue === isDefaultValue && prevFieldInfo.errors === fieldErrors && currBaseMeta === prevBaseMeta) {
					fieldMeta[fieldName] = prevFieldInfo;
					originalMetaCount++;
					continue;
				}
				fieldMeta[fieldName] = {
					...currBaseMeta,
					errors: fieldErrors ?? [],
					isPristine: isFieldPristine,
					isValid: isFieldValid,
					isDefaultValue
				};
			}
			if (!Object.keys(currBaseStore.fieldMetaBase).length) return fieldMeta;
			if (prevVal && originalMetaCount === Object.keys(currBaseStore.fieldMetaBase).length) return prevVal;
			prevBaseStore = this.baseStore.get();
			return fieldMeta;
		});
		this.formGroupMetaDerived = createStore((prevVal) => {
			const currBaseStore = this.baseStore.get();
			const currFieldMeta = this.fieldMetaDerived.get();
			const result = {};
			for (const group of this.formGroupApis) {
				const groupName = group.name;
				const lifecycle = currBaseStore.formGroupStateBase[groupName] ?? {
					isSubmitted: false,
					isSubmitting: false,
					isValidating: false,
					submissionAttempts: 0,
					isSubmitSuccessful: false
				};
				const ownFieldMeta = currFieldMeta[groupName];
				let isFieldsValidating = false;
				let isFieldsValid = true;
				let aggIsTouched = false;
				let aggIsBlurred = false;
				let aggIsDefaultValue = true;
				let aggIsDirty = false;
				for (const fieldName in currFieldMeta) {
					if (fieldName === groupName) continue;
					if (!isFieldInGroup(groupName, fieldName)) continue;
					const m = currFieldMeta[fieldName];
					if (!m) continue;
					if (m.isValidating) isFieldsValidating = true;
					if (!m.isValid) isFieldsValid = false;
					if (m.isTouched) aggIsTouched = true;
					if (m.isBlurred) aggIsBlurred = true;
					if (!m.isDefaultValue) aggIsDefaultValue = false;
					if (m.isDirty) aggIsDirty = true;
				}
				const isPristine = !aggIsDirty;
				const isValidating = !!isFieldsValidating || lifecycle.isValidating;
				const errorMap = ownFieldMeta?.errorMap ?? {};
				const errorSourceMap = ownFieldMeta?.errorSourceMap ?? {};
				const hasOnMountError = Boolean(errorMap.onMount || Object.entries(currFieldMeta).some(([fieldName, field]) => field && fieldName !== groupName && isFieldInGroup(groupName, fieldName) && field.errorMap.onMount));
				const prevGroupMeta = prevVal?.[groupName];
				let errors = prevGroupMeta?.errors ?? [];
				if (!prevGroupMeta || prevGroupMeta.__srcErrorMap !== errorMap) errors = Object.values(errorMap).reduce((acc, curr) => {
					if (curr === void 0) return acc;
					if (curr && typeof curr === "object" && "fields" in curr) {
						const groupErr = curr.group;
						if (groupErr !== void 0) acc.push(groupErr);
						return acc;
					}
					acc.push(curr);
					return acc;
				}, []);
				const isGroupValid = errors.length === 0;
				const isValid = isFieldsValid && isGroupValid;
				const submitInvalid = group.options.canSubmitWhenInvalid ?? false;
				const canSubmit = lifecycle.submissionAttempts === 0 && !aggIsTouched && !hasOnMountError || !isValidating && !lifecycle.isSubmitting && isValid || submitInvalid;
				if (prevGroupMeta && prevGroupMeta.errorMap === errorMap && prevGroupMeta.errorSourceMap === errorSourceMap && prevGroupMeta.errors === errors && prevGroupMeta.isFieldsValidating === isFieldsValidating && prevGroupMeta.isFieldsValid === isFieldsValid && prevGroupMeta.isGroupValid === isGroupValid && prevGroupMeta.isValid === isValid && prevGroupMeta.canSubmit === canSubmit && prevGroupMeta.isTouched === aggIsTouched && prevGroupMeta.isBlurred === aggIsBlurred && prevGroupMeta.isPristine === isPristine && prevGroupMeta.isDefaultValue === aggIsDefaultValue && prevGroupMeta.isDirty === aggIsDirty && prevGroupMeta.isValidating === isValidating && prevGroupMeta.isSubmitting === lifecycle.isSubmitting && prevGroupMeta.isSubmitted === lifecycle.isSubmitted && prevGroupMeta.submissionAttempts === lifecycle.submissionAttempts && prevGroupMeta.isSubmitSuccessful === lifecycle.isSubmitSuccessful) {
					result[groupName] = prevGroupMeta;
					continue;
				}
				const meta = {
					...lifecycle,
					errorMap,
					errorSourceMap,
					_arrayVersion: ownFieldMeta?._arrayVersion ?? 0,
					isTouched: aggIsTouched,
					isBlurred: aggIsBlurred,
					isDirty: aggIsDirty,
					isPristine,
					isDefaultValue: aggIsDefaultValue,
					isValid,
					errors,
					isValidating,
					isFieldsValidating,
					isFieldsValid,
					isGroupValid,
					canSubmit
				};
				Object.defineProperty(meta, "__srcErrorMap", {
					value: errorMap,
					enumerable: false,
					configurable: true
				});
				result[groupName] = meta;
			}
			return result;
		});
		let prevBaseStoreForStore = void 0;
		this.store = createStore((prevVal) => {
			const currBaseStore = this.baseStore.get();
			const currFieldMeta = this.fieldMetaDerived.get();
			const fieldMetaValues = Object.values(currFieldMeta).filter(Boolean);
			const isFieldsValidating = fieldMetaValues.some((field) => field.isValidating);
			const isFieldsValid = fieldMetaValues.every((field) => field.isValid);
			const isTouched = fieldMetaValues.some((field) => field.isTouched);
			const isBlurred = fieldMetaValues.some((field) => field.isBlurred);
			const isDefaultValue = fieldMetaValues.every((field) => field.isDefaultValue);
			const shouldInvalidateOnMount = isTouched && currBaseStore.errorMap?.onMount;
			const isDirty = fieldMetaValues.some((field) => field.isDirty);
			const isPristine = !isDirty;
			const hasOnMountError = Boolean(currBaseStore.errorMap?.onMount || fieldMetaValues.some((f) => f?.errorMap?.onMount));
			const isValidating = !!isFieldsValidating;
			let errors = prevVal?.errors ?? [];
			if (!prevBaseStoreForStore || currBaseStore.errorMap !== prevBaseStoreForStore.errorMap) errors = Object.values(currBaseStore.errorMap).reduce((prev, curr) => {
				if (curr === void 0) return prev;
				if (curr && isGlobalFormValidationError(curr)) {
					prev.push(curr.form);
					return prev;
				}
				prev.push(curr);
				return prev;
			}, []);
			const isFormValid = errors.length === 0;
			const isValid = isFieldsValid && isFormValid;
			const submitInvalid = this.options.canSubmitWhenInvalid ?? false;
			const canSubmit = currBaseStore.submissionAttempts === 0 && !isTouched && !hasOnMountError || !isValidating && !currBaseStore.isSubmitting && isValid || submitInvalid;
			let errorMap = currBaseStore.errorMap;
			if (shouldInvalidateOnMount) {
				errors = errors.filter((err) => err !== currBaseStore.errorMap.onMount);
				errorMap = Object.assign(errorMap, { onMount: void 0 });
			}
			if (prevVal && prevBaseStoreForStore && prevVal.errorMap === errorMap && prevVal.fieldMeta === this.fieldMetaDerived.state && prevVal.errors === errors && prevVal.isFieldsValidating === isFieldsValidating && prevVal.isFieldsValid === isFieldsValid && prevVal.isFormValid === isFormValid && prevVal.isValid === isValid && prevVal.canSubmit === canSubmit && prevVal.isTouched === isTouched && prevVal.isBlurred === isBlurred && prevVal.isPristine === isPristine && prevVal.isDefaultValue === isDefaultValue && prevVal.isDirty === isDirty && evaluate(prevBaseStoreForStore, currBaseStore)) return prevVal;
			const state = {
				...currBaseStore,
				errorMap,
				fieldMeta: this.fieldMetaDerived.state,
				errors,
				isFieldsValidating,
				isFieldsValid,
				isFormValid,
				isValid,
				canSubmit,
				isTouched,
				isBlurred,
				isPristine,
				isDefaultValue,
				isDirty
			};
			prevBaseStoreForStore = this.baseStore.get();
			return state;
		});
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update(opts || {});
	}
	get state() {
		return this.store.state;
	}
	get formId() {
		return this._formId;
	}
	/**
	* @private
	*/
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) return standardSchemaValidators[props.type](props.value, props.validate);
		return props.validate(props.value);
	}
	handleSubmit(submitMeta) {
		return this._handleSubmit(submitMeta);
	}
};
function normalizeError$2(rawError) {
	if (rawError) {
		if (isGlobalFormValidationError(rawError)) return {
			formError: normalizeError$2(rawError.form).formError,
			fieldErrors: rawError.fields
		};
		return { formError: rawError };
	}
	return { formError: void 0 };
}
function getErrorMapKey$2(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		default: return "onChange";
	}
}
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/FieldApi.js
var FieldApi = class FieldApi {
	/**
	* Initializes a new `FieldApi` instance.
	*/
	constructor(opts) {
		this.options = {};
		this.mount = () => {
			if (this.options.defaultValue !== void 0 && !this.getMeta().isTouched) this.form.setFieldValue(this.name, this.options.defaultValue, { dontUpdateMeta: true });
			const info = this.getInfo();
			info.instance = this;
			this.update(this.options);
			const { onMount } = this.options.validators || {};
			if (onMount) {
				const error = this.runValidator({
					validate: onMount,
					value: {
						value: this.state.value,
						fieldApi: this,
						validationSource: "field"
					},
					type: "validate"
				});
				if (error) this.setMeta((prev) => ({
					...prev,
					errorMap: {
						...prev?.errorMap,
						onMount: error
					},
					errorSourceMap: {
						...prev?.errorSourceMap,
						onMount: "field"
					}
				}));
			}
			this.options.listeners?.onMount?.({
				value: this.state.value,
				fieldApi: this
			});
			return () => {
				for (const [key, timeout] of Object.entries(this.timeoutIds.validations)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.validations[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.listeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.listeners[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.formListeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.formListeners[key] = null;
				}
				const fieldInfo = this.form.fieldInfo[this.name];
				if (!fieldInfo) return;
				if (fieldInfo.instance !== this) return;
				for (const [key, validationMeta] of Object.entries(fieldInfo.validationMetaMap)) {
					validationMeta?.lastAbortController.abort();
					fieldInfo.validationMetaMap[key] = void 0;
				}
				this.form.baseStore.setState((prev) => ({
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[this.name]: {
							...defaultFieldMeta,
							isTouched: prev.fieldMetaBase[this.name]?.isTouched ?? defaultFieldMeta.isTouched,
							isBlurred: prev.fieldMetaBase[this.name]?.isBlurred ?? defaultFieldMeta.isBlurred,
							isDirty: prev.fieldMetaBase[this.name]?.isDirty ?? defaultFieldMeta.isDirty
						}
					}
				}));
				fieldInfo.instance = null;
				this.options.listeners?.onUnmount?.({
					value: this.state.value,
					fieldApi: this
				});
				this.form.options.listeners?.onFieldUnmount?.({
					formApi: this.form,
					fieldApi: this
				});
			};
		};
		this.update = (opts2) => {
			this.options = opts2;
			this.name = opts2.name;
			if (!this.state.meta.isTouched && this.options.defaultValue !== void 0) {
				if (!evaluate(this.form.getFieldValue(this.name), opts2.defaultValue)) this.form.setFieldValue(this.name, opts2.defaultValue, {
					dontUpdateMeta: true,
					dontValidate: true,
					dontRunListeners: true
				});
			}
			if (!this.form.getFieldMeta(this.name)) this.form.setFieldMeta(this.name, this.state.meta);
		};
		this.getValue = () => {
			return this.form.getFieldValue(this.name);
		};
		this.setValue = (updater, options) => {
			this.form.setFieldValue(this.name, updater, mergeOpts(options, {
				dontRunListeners: true,
				dontValidate: true
			}));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
			if (!options?.dontValidate) this.validate("change");
		};
		this.getMeta = () => this.store.state.meta;
		this.setMeta = (updater) => this.form.setFieldMeta(this.name, updater);
		this.getInfo = () => this.form.getFieldInfo(this.name);
		this.pushValue = (value, options) => {
			this.form.pushFieldValue(this.name, value, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.insertValue = (index, value, options) => {
			this.form.insertFieldValue(this.name, index, value, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.replaceValue = (index, value, options) => {
			this.form.replaceFieldValue(this.name, index, value, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.removeValue = (index, options) => {
			this.form.removeFieldValue(this.name, index, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.swapValues = (aIndex, bIndex, options) => {
			this.form.swapFieldValues(this.name, aIndex, bIndex, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.moveValue = (aIndex, bIndex, options) => {
			this.form.moveFieldValues(this.name, aIndex, bIndex, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.clearValues = (options) => {
			this.form.clearFieldValues(this.name, mergeOpts(options, { dontRunListeners: true }));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
		};
		this.getLinkedFields = (cause) => {
			const fields = Object.values(this.form.fieldInfo);
			const linkedFields = [];
			for (const field of fields) {
				if (!field.instance) continue;
				if (!(field.instance instanceof FieldApi)) continue;
				const { onChangeListenTo, onBlurListenTo } = field.instance.options.validators || {};
				if (cause === "change" && onChangeListenTo?.includes(this.name)) linkedFields.push(field.instance);
				if (cause === "blur" && onBlurListenTo?.includes(this.name)) linkedFields.push(field.instance);
			}
			return linkedFields;
		};
		this.validateSync = (cause, errorFromForm) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				fieldName: this.name,
				validationLogic: this.form.options.validationLogic || defaultValidationLogic
			});
			const linkedFieldValidates = this.getLinkedFields(cause).reduce((acc, field) => {
				const fieldValidates = getSyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					fieldName: field.name,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			let hasErrored = false;
			batch(() => {
				const validateFieldFn = (field, validateObj) => {
					const errorMapKey = getErrorMapKey$1(validateObj.cause);
					const fieldLevelError = validateObj.validate ? normalizeError$1(field.runValidator({
						validate: validateObj.validate,
						value: {
							value: field.store.state.value,
							validationSource: "field",
							fieldApi: field
						},
						type: "validate"
					})) : void 0;
					const formLevelError = errorFromForm[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (field.state.meta.errorMap?.[errorMapKey] !== newErrorValue) field.setMeta((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: newErrorValue
						},
						errorSourceMap: {
							...prev.errorSourceMap,
							[errorMapKey]: newSource
						}
					}));
					if (newErrorValue) hasErrored = true;
				};
				for (const validateObj of validates) validateFieldFn(this, validateObj);
				for (const fieldValitateObj of linkedFieldValidates) {
					if (!fieldValitateObj.validate) continue;
					validateFieldFn(fieldValitateObj.field, fieldValitateObj);
				}
			});
			const submitErrKey = getErrorMapKey$1("submit");
			if (this.state.meta.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.setMeta((prev) => ({
				...prev,
				errorMap: {
					...prev.errorMap,
					[submitErrKey]: void 0
				},
				errorSourceMap: {
					...prev.errorSourceMap,
					[submitErrKey]: void 0
				}
			}));
			return { hasErrored };
		};
		this.validateAsync = async (cause, formValidationResultPromise) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				fieldName: this.name,
				validationLogic: this.form.options.validationLogic || defaultValidationLogic
			});
			const asyncFormValidationResults = await formValidationResultPromise;
			const linkedFieldValidates = this.getLinkedFields(cause).reduce((acc, field) => {
				const fieldValidates = getAsyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					fieldName: field.name,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			const validatesPromises = [];
			const linkedPromises = [];
			const hasAsyncValidators = validates.some((v) => v.validate);
			const linkedFieldsWithAsyncValidators = Array.from(new Set(linkedFieldValidates.filter((v) => v.validate).map((v) => v.field)));
			batch(() => {
				if (hasAsyncValidators) this.startValidation();
				for (const linkedField of linkedFieldsWithAsyncValidators) linkedField.startValidation();
			});
			const validateFieldAsyncFn = (field, validateObj, promises) => {
				const errorMapKey = getErrorMapKey$1(validateObj.cause);
				const fieldInfo = field.getInfo();
				fieldInfo.validationMetaMap[errorMapKey]?.lastAbortController.abort();
				const controller = new AbortController();
				fieldInfo.validationMetaMap[errorMapKey] = { lastAbortController: controller };
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							if (field.timeoutIds.validations[validateObj.cause]) {
								clearTimeout(field.timeoutIds.validations[validateObj.cause]);
								field.endValidation();
							}
							field.timeoutIds.validations[validateObj.cause] = setTimeout(async () => {
								if (controller.signal.aborted) return rawResolve(void 0);
								try {
									rawResolve(await this.runValidator({
										validate: validateObj.validate,
										value: {
											value: field.store.state.value,
											fieldApi: field,
											signal: controller.signal,
											validationSource: "field"
										},
										type: "validateAsync"
									}));
								} catch (e) {
									rawReject(e);
								}
							}, validateObj.debounceMs);
						});
					} catch (e) {
						rawError = e;
					}
					if (controller.signal.aborted) return resolve(void 0);
					const fieldLevelError = normalizeError$1(rawError);
					const formLevelError = asyncFormValidationResults[field.name]?.[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (field.getInfo().instance !== field) return resolve(void 0);
					field.setMeta((prev) => {
						return {
							...prev,
							errorMap: {
								...prev?.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						};
					});
					resolve(newErrorValue);
				}));
			};
			for (const validateObj of validates) {
				if (!validateObj.validate) continue;
				validateFieldAsyncFn(this, validateObj, validatesPromises);
			}
			for (const fieldValitateObj of linkedFieldValidates) {
				if (!fieldValitateObj.validate) continue;
				validateFieldAsyncFn(fieldValitateObj.field, fieldValitateObj, linkedPromises);
			}
			let results = [];
			if (validatesPromises.length || linkedPromises.length) {
				results = await Promise.all(validatesPromises);
				await Promise.all(linkedPromises);
			}
			batch(() => {
				if (hasAsyncValidators) this.endValidation();
				for (const linkedField of linkedFieldsWithAsyncValidators) linkedField.endValidation();
			});
			return results.filter(Boolean);
		};
		this.validate = (cause, opts2) => {
			if (!this.state.meta.isTouched) return [];
			const encompassingGroups = opts2?.skipGroupValidation ? [] : Array.from(this.form.formGroupApis).filter((group) => this.name.startsWith(group.name));
			let fieldsErrorMap = (opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause)).fieldsErrorMap[this.name] ?? {};
			if (!opts2?.skipFormValidation) for (const group of encompassingGroups) {
				if (group.state.meta.submissionAttempts === 0) continue;
				const { fieldsErrorMap: groupFormErrors } = this.form.validateSync(cause, {
					group,
					dontUpdateFormErrorMap: true,
					filterFieldNames: (fieldName) => isFieldInGroup(group.name, fieldName)
				});
				fieldsErrorMap = {
					...fieldsErrorMap,
					...groupFormErrors[this.name] ?? {}
				};
			}
			const { hasErrored } = this.validateSync(cause, fieldsErrorMap);
			const groupHasErroredWeakMap = /* @__PURE__ */ new WeakMap();
			for (const group of encompassingGroups) {
				const { hasErrored: groupHasErrored } = group.validateSync(cause, {}, { skipRelatedFieldValidation: true });
				groupHasErroredWeakMap.set(group, groupHasErrored);
			}
			if (hasErrored && !this.options.asyncAlways) {
				this.getInfo().validationMetaMap[getErrorMapKey$1(cause)]?.lastAbortController.abort();
				const groupErrors = [];
				for (const group of encompassingGroups) {
					group.getInfo().validationMetaMap[getErrorMapKey$1(cause)]?.lastAbortController.abort();
					groupErrors.push(group.state.meta.errors);
				}
				return [...this.state.meta.errors, ...groupErrors.flat()];
			}
			const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause);
			const fieldAsyncResults = this.validateAsync(cause, formValidationResultPromise);
			const groupAsyncResults = [];
			for (const group of encompassingGroups) {
				if (groupHasErroredWeakMap.get(group) && !group.options.asyncAlways) continue;
				groupAsyncResults.push(group.validateAsync(cause, formValidationResultPromise, { skipRelatedFieldValidation: true }));
			}
			if (groupAsyncResults.length === 0) return fieldAsyncResults;
			return Promise.all([fieldAsyncResults, ...groupAsyncResults]).then((results) => results.flat());
		};
		this.handleChange = (updater) => {
			this.setValue(updater);
		};
		this.handleBlur = () => {
			if (!this.state.meta.isTouched) this.setMeta((prev) => ({
				...prev,
				isTouched: true
			}));
			if (!this.state.meta.isBlurred) this.setMeta((prev) => ({
				...prev,
				isBlurred: true
			}));
			this.validate("blur");
			this.triggerOnBlurListener();
		};
		this.setErrorMap = (errorMap) => {
			this.setMeta((prev) => ({
				...prev,
				errorMap: {
					...prev.errorMap,
					...errorMap
				}
			}));
		};
		this.parseValueWithSchema = (schema) => {
			return standardSchemaValidators.validate({
				value: this.state.value,
				validationSource: "field"
			}, schema);
		};
		this.parseValueWithSchemaAsync = (schema) => {
			return standardSchemaValidators.validateAsync({
				value: this.state.value,
				validationSource: "field"
			}, schema);
		};
		this.triggerOnBlurListener = () => {
			const formDebounceMs = this.form.options.listeners?.onBlurDebounceMs;
			if (formDebounceMs && formDebounceMs > 0) {
				if (this.timeoutIds.formListeners.blur) clearTimeout(this.timeoutIds.formListeners.blur);
				this.timeoutIds.formListeners.blur = setTimeout(() => {
					this.form.options.listeners?.onBlur?.({
						formApi: this.form,
						fieldApi: this
					});
				}, formDebounceMs);
			} else this.form.options.listeners?.onBlur?.({
				formApi: this.form,
				fieldApi: this
			});
			const fieldDebounceMs = this.options.listeners?.onBlurDebounceMs;
			if (fieldDebounceMs && fieldDebounceMs > 0) {
				if (this.timeoutIds.listeners.blur) clearTimeout(this.timeoutIds.listeners.blur);
				this.timeoutIds.listeners.blur = setTimeout(() => {
					this.options.listeners?.onBlur?.({
						value: this.state.value,
						fieldApi: this
					});
				}, fieldDebounceMs);
			} else this.options.listeners?.onBlur?.({
				value: this.state.value,
				fieldApi: this
			});
		};
		this.triggerOnChangeListener = () => {
			const formDebounceMs = this.form.options.listeners?.onChangeDebounceMs;
			if (formDebounceMs && formDebounceMs > 0) {
				if (this.timeoutIds.formListeners.change) clearTimeout(this.timeoutIds.formListeners.change);
				this.timeoutIds.formListeners.change = setTimeout(() => {
					this.form.options.listeners?.onChange?.({
						formApi: this.form,
						fieldApi: this
					});
				}, formDebounceMs);
			} else this.form.options.listeners?.onChange?.({
				formApi: this.form,
				fieldApi: this
			});
			const fieldDebounceMs = this.options.listeners?.onChangeDebounceMs;
			if (fieldDebounceMs && fieldDebounceMs > 0) {
				if (this.timeoutIds.listeners.change) clearTimeout(this.timeoutIds.listeners.change);
				this.timeoutIds.listeners.change = setTimeout(() => {
					this.options.listeners?.onChange?.({
						value: this.state.value,
						fieldApi: this
					});
				}, fieldDebounceMs);
			} else this.options.listeners?.onChange?.({
				value: this.state.value,
				fieldApi: this
			});
			for (const group of this.form.formGroupApis) if (isFieldInGroup(group.name, this.name)) group.triggerOnChangeListener();
		};
		this.triggerOnSubmitListener = () => {
			this.options.listeners?.onSubmit?.({
				value: this.state.value,
				fieldApi: this
			});
		};
		this.form = opts.form;
		this.name = opts.name;
		this.options = opts;
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this.store = createStore((prevVal) => {
			this.form.store.get();
			const meta = this.form.getFieldMeta(this.name) ?? {
				...defaultFieldMeta,
				...opts.defaultMeta
			};
			let value = this.form.getFieldValue(this.name);
			if (!meta.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !evaluate(value, this.options.defaultValue)) value = this.options.defaultValue;
			if (prevVal && prevVal.value === value && prevVal.meta === meta) return prevVal;
			return {
				value,
				meta
			};
		});
	}
	/**
	* The current field state.
	*/
	get state() {
		return this.store.state;
	}
	/**
	* @private
	*/
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) return standardSchemaValidators[props.type](props.value, props.validate);
		return props.validate(props.value);
	}
	/**
	* `@private`
	* Starts tracking an async validation, incrementing the counter and setting isValidating if needed.
	*/
	startValidation() {
		this.setMeta((prev) => {
			const newCount = prev._pendingValidationsCount + 1;
			return {
				...prev,
				_pendingValidationsCount: newCount,
				isValidating: newCount > 0 && !prev.isValidating ? true : prev.isValidating
			};
		});
	}
	/**
	* `@private`
	* Ends tracking an async validation, decrementing the counter and clearing isValidating if no validations remain.
	*/
	endValidation() {
		this.setMeta((prev) => {
			const newCount = Math.max(0, prev._pendingValidationsCount - 1);
			return {
				...prev,
				_pendingValidationsCount: newCount,
				isValidating: newCount === 0 && prev.isValidating ? false : prev.isValidating
			};
		});
	}
};
function normalizeError$1(rawError) {
	if (rawError) return rawError;
}
function getErrorMapKey$1(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		default: return "onChange";
	}
}
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/FormGroupApi.js
function getDefaultFormGroupState(defaultState) {
	return {
		isSubmitted: defaultState.isSubmitted ?? false,
		isSubmitting: defaultState.isSubmitting ?? false,
		isValidating: defaultState.isValidating ?? false,
		submissionAttempts: defaultState.submissionAttempts ?? 0,
		isSubmitSuccessful: defaultState.isSubmitSuccessful ?? false
	};
}
function getDefaultFormGroupMeta(defaultMeta) {
	return {
		...defaultFieldMeta,
		...defaultMeta,
		errors: [],
		isPristine: true,
		isValid: true,
		isDefaultValue: true,
		isFieldsValidating: false,
		isFieldsValid: true,
		isGroupValid: true,
		canSubmit: true,
		isSubmitting: false,
		isSubmitted: false,
		isValidating: false,
		submissionAttempts: 0,
		isSubmitSuccessful: false
	};
}
var FormGroupApi = class FormGroupApi {
	constructor(opts) {
		this.options = {};
		this.setFormGroupState = (updater) => {
			this.form.baseStore.setState((prev) => {
				const prevGroupState = prev.formGroupStateBase[this.name] ?? getDefaultFormGroupState({});
				return {
					...prev,
					formGroupStateBase: {
						...prev.formGroupStateBase,
						[this.name]: updater(prevGroupState)
					}
				};
			});
		};
		this._lastDistributedFieldNames = {};
		this.update = (opts2) => {
			this.options = opts2;
			this.name = opts2.name;
			if (!this.state.meta.isTouched && this.options.defaultValue !== void 0) {
				if (!evaluate(this.form.getFieldValue(this.name), opts2.defaultValue)) this.form.setFieldValue(this.name, opts2.defaultValue, {
					dontUpdateMeta: true,
					dontValidate: true,
					dontRunListeners: true
				});
			}
			if (!this.form.getFieldMeta(this.name)) this.form.setFieldMeta(this.name, {
				...defaultFieldMeta,
				...this.options.defaultMeta
			});
		};
		this.mount = () => {
			this.update(this.options);
			this.form.formGroupApis.add(this);
			this.fieldInfo.instance = this;
			this.form.baseStore.setState((prev) => ({
				...prev,
				formGroupStateBase: {
					...prev.formGroupStateBase,
					[this.name]: prev.formGroupStateBase[this.name] ?? getDefaultFormGroupState({ ...this.options.defaultState })
				}
			}));
			const { onMount } = this.options.validators || {};
			if (onMount) {
				const rawError = this.runValidator({
					validate: onMount,
					value: {
						value: this.state.value,
						groupApi: this,
						validationSource: "form"
					},
					type: "validate"
				});
				let groupOwnRawError = rawError;
				let groupFieldErrors = void 0;
				if (isGlobalGroupValidationError(rawError)) {
					groupOwnRawError = rawError.group;
					groupFieldErrors = rawError.fields;
				}
				const error = normalizeError(groupOwnRawError);
				if (error) this.setMeta((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						onMount: error
					},
					errorSourceMap: {
						...prev.errorSourceMap,
						onMount: "field"
					}
				}));
				this.distributeFieldErrors("onMount", groupFieldErrors);
			}
			this.options.listeners?.onMount?.({
				value: this.state.value,
				groupApi: this
			});
			return () => {
				for (const [key, timeout] of Object.entries(this.timeoutIds.validations)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.validations[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.listeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.listeners[key] = null;
				}
				for (const [key, timeout] of Object.entries(this.timeoutIds.formListeners)) if (timeout) {
					clearTimeout(timeout);
					this.timeoutIds.formListeners[key] = null;
				}
				if (this.fieldInfo.instance !== this) return;
				for (const [key, validationMeta] of Object.entries(this.fieldInfo.validationMetaMap)) {
					validationMeta?.lastAbortController.abort();
					this.fieldInfo.validationMetaMap[key] = void 0;
				}
				this.form.formGroupApis.delete(this);
				this.form.baseStore.setState((prev) => ({
					...prev,
					formGroupStateBase: {
						...prev.formGroupStateBase,
						[this.name]: getDefaultFormGroupState({})
					}
				}));
				this.fieldInfo.instance = null;
				this.options.listeners?.onUnmount?.({
					value: this.state.value,
					groupApi: this
				});
			};
		};
		this.setValue = (updater, options) => {
			this.form.setFieldValue(this.name, updater, mergeOpts(options, {
				dontRunListeners: true,
				dontValidate: true
			}));
			if (!options?.dontRunListeners) this.triggerOnChangeListener();
			if (!options?.dontValidate) this.validate("change");
		};
		this.getMeta = () => this.store.state.meta;
		this.setMeta = (updater) => this.form.setFieldMeta(this.name, updater);
		this.getInfo = () => this.fieldInfo;
		this.getRelatedFields = () => {
			const fields = Object.values(this.form.fieldInfo);
			const relatedFields = [];
			for (const field of fields) {
				if (!field.instance) continue;
				if (!(field.instance instanceof FieldApi)) continue;
				if (field.instance.name.startsWith(this.name)) relatedFields.push(field.instance);
			}
			return relatedFields;
		};
		this.getRelatedFieldMetasDerived = () => {
			const fields = Object.entries(this.form.fieldMetaDerived.state);
			const relatedFieldMetas = [];
			for (const [fieldName, fieldMeta] of fields) {
				if (fieldName === this.name) continue;
				if (isFieldInGroup(this.name, fieldName)) relatedFieldMetas.push({
					...fieldMeta,
					name: fieldName
				});
			}
			return relatedFieldMetas;
		};
		this.buildChildFieldName = (relativeName) => {
			if (relativeName === "") return this.name;
			if (relativeName.startsWith("[")) return `${this.name}${relativeName}`;
			return `${this.name}.${relativeName}`;
		};
		this.distributeFieldErrors = (errorMapKey, fieldErrors) => {
			const previousNames = this._lastDistributedFieldNames[errorMapKey] ?? /* @__PURE__ */ new Set();
			const currentNames = /* @__PURE__ */ new Set();
			if (fieldErrors) for (const [relativeName, err] of Object.entries(fieldErrors)) {
				if (err === void 0 || err === null || err === false) continue;
				currentNames.add(this.buildChildFieldName(relativeName));
			}
			const allNames = /* @__PURE__ */ new Set([...previousNames, ...currentNames]);
			let hasErrored = false;
			for (const fullName of allNames) {
				const relativeName = fullName.startsWith(this.name + "[") ? fullName.slice(this.name.length) : fullName.slice(this.name.length + 1);
				const newFormValidatorError = fieldErrors?.[relativeName];
				const fieldMeta = this.form.getFieldMeta(fullName);
				if (!fieldMeta && !newFormValidatorError) continue;
				const previousErrorValue = fieldMeta?.errorMap[errorMapKey];
				const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
					newFormValidatorError,
					isPreviousErrorFromFormValidator: fieldMeta?.errorSourceMap[errorMapKey] === "form",
					previousErrorValue
				});
				if (newErrorValue) hasErrored = true;
				if (previousErrorValue === newErrorValue && fieldMeta?.errorSourceMap[errorMapKey] === newSource) continue;
				this.form.setFieldMeta(fullName, (prev = defaultFieldMeta) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[errorMapKey]: newErrorValue
					},
					errorSourceMap: {
						...prev.errorSourceMap,
						[errorMapKey]: newSource
					}
				}));
			}
			this._lastDistributedFieldNames[errorMapKey] = currentNames;
			return hasErrored;
		};
		this.validateSync = (cause, errorFromForm, opts2 = {}) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				group: this,
				validationLogic: this.options.validationLogic || this.form.options.validationLogic || defaultValidationLogic
			});
			const relatedFieldValidates = (opts2.skipRelatedFieldValidation ? [] : this.getRelatedFields()).reduce((acc, field) => {
				const fieldValidates = getSyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			let hasErrored = false;
			batch(() => {
				const validateFieldOrGroupFn = (fieldOrGroup, validateObj) => {
					const errorMapKey = getErrorMapKey(validateObj.cause);
					const isGroup = fieldOrGroup === this;
					let rawError = void 0;
					if (validateObj.validate) rawError = fieldOrGroup.runValidator({
						validate: validateObj.validate,
						value: {
							value: fieldOrGroup.store.state.value,
							validationSource: isGroup ? "form" : "field",
							...fieldOrGroup instanceof FormGroupApi ? { groupApi: fieldOrGroup } : { fieldApi: fieldOrGroup }
						},
						type: "validate"
					});
					let groupOwnRawError = rawError;
					let groupFieldErrors = void 0;
					if (isGroup && isGlobalGroupValidationError(rawError)) {
						groupOwnRawError = rawError.group;
						groupFieldErrors = rawError.fields;
					}
					const fieldLevelError = normalizeError(groupOwnRawError);
					const formLevelError = errorFromForm[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (fieldOrGroup.state.meta.errorMap?.[errorMapKey] !== newErrorValue) fieldOrGroup.setMeta((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: newErrorValue
						},
						errorSourceMap: {
							...prev.errorSourceMap,
							[errorMapKey]: newSource
						}
					}));
					if (newErrorValue) hasErrored = true;
					if (isGroup) {
						if (this.distributeFieldErrors(errorMapKey, groupFieldErrors)) hasErrored = true;
					}
				};
				for (const validateObj of validates) validateFieldOrGroupFn(this, validateObj);
				for (const fieldValidateObj of relatedFieldValidates) {
					if (!fieldValidateObj.validate) continue;
					validateFieldOrGroupFn(fieldValidateObj.field, fieldValidateObj);
				}
			});
			const submitErrKey = getErrorMapKey("submit");
			if (this.state.meta.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.setMeta((prev) => ({
				...prev,
				errorMap: {
					...prev.errorMap,
					[submitErrKey]: void 0
				},
				errorSourceMap: {
					...prev.errorSourceMap,
					[submitErrKey]: void 0
				}
			}));
			return { hasErrored };
		};
		this.validateAsync = async (cause, formValidationResultPromise, opts2 = {}) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				group: this,
				validationLogic: this.options.validationLogic || this.form.options.validationLogic || defaultValidationLogic
			});
			const asyncFormValidationResults = await formValidationResultPromise;
			const relatedFields = opts2.skipRelatedFieldValidation ? [] : this.getRelatedFields();
			const relatedFieldValidates = relatedFields.reduce((acc, field) => {
				const fieldValidates = getAsyncValidatorArray(cause, {
					...field.options,
					form: field.form,
					validationLogic: field.form.options.validationLogic || defaultValidationLogic
				});
				fieldValidates.forEach((validate) => {
					validate.field = field;
				});
				return acc.concat(fieldValidates);
			}, []);
			const validatesPromises = [];
			const linkedPromises = [];
			const hasAsyncValidators = validates.some((v) => v.validate) || relatedFieldValidates.some((v) => v.validate);
			if (hasAsyncValidators) {
				if (!this.state.meta.isValidating) this.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
				for (const linkedField of relatedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
			}
			const validateFieldOrGroupAsyncFn = (fieldOrGroup, validateObj, promises) => {
				const errorMapKey = getErrorMapKey(validateObj.cause);
				const fieldInfo = fieldOrGroup.getInfo();
				fieldInfo.validationMetaMap[errorMapKey]?.lastAbortController.abort();
				const controller = new AbortController();
				fieldInfo.validationMetaMap[errorMapKey] = { lastAbortController: controller };
				const isGroup = fieldOrGroup === this;
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							if (fieldOrGroup.timeoutIds.validations[validateObj.cause]) clearTimeout(fieldOrGroup.timeoutIds.validations[validateObj.cause]);
							fieldOrGroup.timeoutIds.validations[validateObj.cause] = setTimeout(async () => {
								if (controller.signal.aborted) return rawResolve(void 0);
								try {
									rawResolve(await this.runValidator({
										validate: validateObj.validate,
										value: {
											value: fieldOrGroup.store.state.value,
											signal: controller.signal,
											validationSource: isGroup ? "form" : "field",
											...fieldOrGroup instanceof FormGroupApi ? { groupApi: fieldOrGroup } : { fieldApi: fieldOrGroup }
										},
										type: "validateAsync"
									}));
								} catch (e) {
									rawReject(e);
								}
							}, validateObj.debounceMs);
						});
					} catch (e) {
						rawError = e;
					}
					if (controller.signal.aborted) return resolve(void 0);
					let groupOwnRawError = rawError;
					let groupFieldErrors = void 0;
					if (isGroup && isGlobalGroupValidationError(rawError)) {
						groupOwnRawError = rawError.group;
						groupFieldErrors = rawError.fields;
					}
					const fieldLevelError = normalizeError(groupOwnRawError);
					const formLevelError = asyncFormValidationResults[fieldOrGroup.name]?.[errorMapKey];
					const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
						formLevelError,
						fieldLevelError
					});
					if (fieldOrGroup.getInfo().instance !== fieldOrGroup) return resolve(void 0);
					fieldOrGroup.setMeta((prev) => {
						return {
							...prev,
							errorMap: {
								...prev?.errorMap,
								[errorMapKey]: newErrorValue
							},
							errorSourceMap: {
								...prev.errorSourceMap,
								[errorMapKey]: newSource
							}
						};
					});
					if (isGroup) this.distributeFieldErrors(errorMapKey, groupFieldErrors);
					resolve(newErrorValue);
				}));
			};
			for (const validateObj of validates) {
				if (!validateObj.validate) continue;
				validateFieldOrGroupAsyncFn(this, validateObj, validatesPromises);
			}
			for (const fieldValitateObj of relatedFieldValidates) {
				if (!fieldValitateObj.validate) continue;
				validateFieldOrGroupAsyncFn(fieldValitateObj.field, fieldValitateObj, linkedPromises);
			}
			let results = [];
			if (validatesPromises.length || linkedPromises.length) {
				results = await Promise.all(validatesPromises);
				await Promise.all(linkedPromises);
			}
			if (hasAsyncValidators) {
				this.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
				for (const linkedField of relatedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
			}
			return results.filter(Boolean);
		};
		this.validateAllFields = async (cause) => {
			const fieldValidationPromises = [];
			batch(() => {
				Object.values(this.getRelatedFields()).forEach((fieldInstance) => {
					fieldValidationPromises.push(Promise.resolve().then(() => fieldInstance.validate(cause, {
						skipFormValidation: true,
						skipGroupValidation: true
					})));
					if (!fieldInstance.store.state.meta.isTouched) fieldInstance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			return (await Promise.all(fieldValidationPromises)).flat();
		};
		this.validateArrayFieldsStartingFrom = (field, index, cause) => {
			return this.form.validateArrayFieldsStartingFrom(field, index, cause);
		};
		this.validateField = (field, cause) => {
			return this.form.validateField(field, cause);
		};
		this.getFieldValue = (field) => {
			return this.form.getFieldValue(field);
		};
		this.getFieldMeta = (field) => {
			return this.form.getFieldMeta(field);
		};
		this.setFieldMeta = (field, updater) => {
			return this.form.setFieldMeta(field, updater);
		};
		this.setFieldValue = (field, value) => {
			return this.form.setFieldValue(field, value);
		};
		this.deleteField = (field) => {
			return this.form.deleteField(field);
		};
		this.pushFieldValue = (field, value) => {
			return this.form.pushFieldValue(field, value);
		};
		this.insertFieldValue = (field, index, value) => {
			return this.form.insertFieldValue(field, index, value);
		};
		this.replaceFieldValue = (field, index, value) => {
			return this.form.replaceFieldValue(field, index, value);
		};
		this.swapFieldValues = (field, index1, index2) => {
			return this.form.swapFieldValues(field, index1, index2);
		};
		this.moveFieldValues = (field, fromIndex, toIndex) => {
			return this.form.moveFieldValues(field, fromIndex, toIndex);
		};
		this.clearFieldValues = (field) => {
			return this.form.clearFieldValues(field);
		};
		this.resetField = (field) => {
			return this.form.resetField(field);
		};
		this.removeFieldValue = (field, index) => {
			return this.form.removeFieldValue(field, index);
		};
		this.areRelatedFieldsValid = () => {
			return Object.values(this.getRelatedFields()).every((field) => field.state.meta.isValid);
		};
		this.validate = (cause, opts2) => {
			const { fieldsErrorMap } = opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause, {
				dontUpdateFormErrorMap: true,
				filterFieldNames: (fieldName) => isFieldInGroup(this.name, fieldName)
			});
			const { hasErrored } = this.validateSync(cause, fieldsErrorMap[this.name] ?? {}, { skipRelatedFieldValidation: opts2?.skipRelatedFieldValidation });
			if (hasErrored && !this.options.asyncAlways) {
				this.getInfo().validationMetaMap[getErrorMapKey(cause)]?.lastAbortController.abort();
				return this.state.meta.errors;
			}
			const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause, {
				dontUpdateFormErrorMap: true,
				filterFieldNames: (fieldName) => isFieldInGroup(this.name, fieldName)
			});
			return this.validateAsync(cause, formValidationResultPromise, { skipRelatedFieldValidation: opts2?.skipRelatedFieldValidation });
		};
		this.triggerOnChangeListener = () => {
			const formDebounceMs = this.form.options.listeners?.onChangeGroupDebounceMs;
			if (formDebounceMs && formDebounceMs > 0) {
				if (this.timeoutIds.formListeners.change) clearTimeout(this.timeoutIds.formListeners.change);
				this.timeoutIds.formListeners.change = setTimeout(() => {
					this.form.options.listeners?.onChangeGroup?.({
						formApi: this.form,
						groupApi: this
					});
				}, formDebounceMs);
			} else this.form.options.listeners?.onChangeGroup?.({
				formApi: this.form,
				groupApi: this
			});
			const fieldDebounceMs = this.options.listeners?.onChangeDebounceMs;
			if (fieldDebounceMs && fieldDebounceMs > 0) {
				if (this.timeoutIds.listeners.change) clearTimeout(this.timeoutIds.listeners.change);
				this.timeoutIds.listeners.change = setTimeout(() => {
					this.options.listeners?.onChange?.({
						value: this.state.value,
						groupApi: this
					});
				}, fieldDebounceMs);
			} else this.options.listeners?.onChange?.({
				value: this.state.value,
				groupApi: this
			});
		};
		this.triggerOnSubmitListener = () => {
			this.options.listeners?.onSubmit?.({
				value: this.state.value,
				groupApi: this
			});
		};
		this._handleSubmit = async (submitMeta) => {
			this.setFormGroupState((old) => ({
				...old,
				isSubmitted: false,
				submissionAttempts: old.submissionAttempts + 1,
				isSubmitSuccessful: false
			}));
			batch(() => {
				Object.values(this.getRelatedFields()).forEach((field) => {
					if (!field.state.meta.isTouched) field.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
			this.setFormGroupState((d) => ({
				...d,
				isSubmitting: true
			}));
			const done = () => {
				this.setFormGroupState((prev) => ({
					...prev,
					isSubmitting: false
				}));
			};
			await this.validateAllFields("submit");
			if (!this.areRelatedFieldsValid()) {
				done();
				this.options.onGroupSubmitInvalid?.({
					value: this.state.value,
					groupApi: this,
					meta: submitMetaArg
				});
				return;
			}
			await this.validate("submit", { skipRelatedFieldValidation: true });
			if (!this.areRelatedFieldsValid() || !this.state.meta.isValid) {
				done();
				this.options.onGroupSubmitInvalid?.({
					value: this.state.value,
					groupApi: this,
					meta: submitMetaArg
				});
				return;
			}
			batch(() => {
				Object.values(this.getRelatedFields()).forEach((field) => {
					field.options.listeners?.onGroupSubmit?.({
						value: field.state.value,
						fieldApi: field
					});
				});
			});
			this.options.listeners?.onSubmit?.({
				groupApi: this,
				value: this.state.value
			});
			try {
				await this.options.onGroupSubmit?.({
					value: this.state.value,
					groupApi: this,
					meta: submitMetaArg
				});
				batch(() => {
					this.setFormGroupState((prev) => ({
						...prev,
						isSubmitted: true,
						isSubmitSuccessful: true
					}));
					done();
				});
			} catch (err) {
				this.setFormGroupState((prev) => ({
					...prev,
					isSubmitSuccessful: false
				}));
				done();
				throw err;
			}
		};
		this.form = opts.form;
		this.name = opts.name;
		this.options = opts;
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this.fieldInfo = {
			instance: null,
			validationMetaMap: {
				onChange: void 0,
				onBlur: void 0,
				onSubmit: void 0,
				onMount: void 0,
				onServer: void 0,
				onDynamic: void 0
			}
		};
		this.store = createStore((prevVal) => {
			this.form.formGroupMetaDerived.get();
			this.form.baseStore.get();
			const meta = this.form.getFormGroupMeta(this.name) ?? getDefaultFormGroupMeta(opts.defaultMeta);
			let value = this.form.getFieldValue(this.name);
			if (!meta.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !evaluate(value, this.options.defaultValue)) value = this.options.defaultValue;
			if (prevVal && prevVal.value === value && prevVal.meta === meta) return prevVal;
			return {
				value,
				meta
			};
		});
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	/**
	* The current field state.
	*/
	get state() {
		return this.store.state;
	}
	/**
	* @private
	*/
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) {
			const result = standardSchemaValidators[props.type](props.value, props.validate);
			if (props.type === "validate") return remapStandardSchemaResultForGroup(result);
			return result.then(remapStandardSchemaResultForGroup);
		}
		return props.validate(props.value);
	}
	handleSubmit(submitMeta) {
		return this._handleSubmit(submitMeta);
	}
};
function normalizeError(rawError) {
	if (rawError) return rawError;
}
function isGlobalGroupValidationError(error) {
	return !!error && typeof error === "object" && "fields" in error;
}
function remapStandardSchemaResultForGroup(result) {
	if (!result || typeof result !== "object") return result;
	if (!("form" in result) && !("fields" in result)) return result;
	const { form, fields, ...rest } = result;
	return {
		...rest,
		group: form,
		fields
	};
}
function getErrorMapKey(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		default: return "onChange";
	}
}
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/FieldGroupApi.js
var FieldGroupApi = class FieldGroupApi {
	/**
	* Constructs a new `FieldGroupApi` instance with the given form options.
	*/
	constructor(opts) {
		this.getFormFieldName = (subfield) => {
			if (typeof this.fieldsMap === "string") return concatenatePaths(this.fieldsMap, subfield);
			const firstAccessor = makePathArray(subfield)[0];
			if (typeof firstAccessor !== "string") return "";
			const restOfPath = subfield.slice(firstAccessor.length);
			const formMappedPath = this.fieldsMap[firstAccessor];
			return concatenatePaths(formMappedPath, restOfPath);
		};
		this.getFormFieldOptions = (props) => {
			const newProps = { ...props };
			const validators = newProps.validators;
			newProps.name = this.getFormFieldName(props.name);
			if (validators && (validators.onChangeListenTo || validators.onBlurListenTo)) {
				const newValidators = { ...validators };
				const remapListenTo = (listenTo) => {
					if (!listenTo) return void 0;
					return listenTo.map((localFieldName) => this.getFormFieldName(localFieldName));
				};
				newValidators.onChangeListenTo = remapListenTo(validators.onChangeListenTo);
				newValidators.onBlurListenTo = remapListenTo(validators.onBlurListenTo);
				newProps.validators = newValidators;
			}
			return newProps;
		};
		this.mount = () => {
			return () => {};
		};
		this.validateArrayFieldsStartingFrom = async (field, index, cause) => {
			return this.form.validateArrayFieldsStartingFrom(this.getFormFieldName(field), index, cause);
		};
		this.validateField = (field, cause) => {
			return this.form.validateField(this.getFormFieldName(field), cause);
		};
		this.getFieldValue = (field) => {
			return this.form.getFieldValue(this.getFormFieldName(field));
		};
		this.getFieldMeta = (field) => {
			return this.form.getFieldMeta(this.getFormFieldName(field));
		};
		this.setFieldMeta = (field, updater) => {
			return this.form.setFieldMeta(this.getFormFieldName(field), updater);
		};
		this.setFieldValue = (field, updater, opts2) => {
			return this.form.setFieldValue(this.getFormFieldName(field), updater, opts2);
		};
		this.deleteField = (field) => {
			return this.form.deleteField(this.getFormFieldName(field));
		};
		this.pushFieldValue = (field, value, opts2) => {
			return this.form.pushFieldValue(this.getFormFieldName(field), value, opts2);
		};
		this.insertFieldValue = async (field, index, value, opts2) => {
			return this.form.insertFieldValue(this.getFormFieldName(field), index, value, opts2);
		};
		this.replaceFieldValue = async (field, index, value, opts2) => {
			return this.form.replaceFieldValue(this.getFormFieldName(field), index, value, opts2);
		};
		this.removeFieldValue = async (field, index, opts2) => {
			return this.form.removeFieldValue(this.getFormFieldName(field), index, opts2);
		};
		this.swapFieldValues = (field, index1, index2, opts2) => {
			return this.form.swapFieldValues(this.getFormFieldName(field), index1, index2, opts2);
		};
		this.moveFieldValues = (field, index1, index2, opts2) => {
			return this.form.moveFieldValues(this.getFormFieldName(field), index1, index2, opts2);
		};
		this.clearFieldValues = (field, opts2) => {
			return this.form.clearFieldValues(this.getFormFieldName(field), opts2);
		};
		this.resetField = (field) => {
			return this.form.resetField(this.getFormFieldName(field));
		};
		this.validateAllFields = (cause) => this.form.validateAllFields(cause);
		if (opts.form instanceof FieldGroupApi) {
			const group = opts.form;
			this.form = group.form;
			if (typeof opts.fields === "string") this.fieldsMap = group.getFormFieldName(opts.fields);
			else {
				const fields = { ...opts.fields };
				for (const key in fields) fields[key] = group.getFormFieldName(fields[key]);
				this.fieldsMap = fields;
			}
		} else {
			this.form = opts.form;
			this.fieldsMap = opts.fields;
		}
		this.store = createStore(() => {
			const currFormStore = this.form.store.get();
			let values;
			if (typeof this.fieldsMap === "string") values = getBy(currFormStore.values, this.fieldsMap);
			else {
				values = {};
				const fields = this.fieldsMap;
				for (const key in fields) values[key] = getBy(currFormStore.values, fields[key]);
			}
			return { values };
		});
	}
	get state() {
		return this.store.state;
	}
	async handleSubmit(submitMeta) {
		return this.form.handleSubmit(submitMeta);
	}
};
// node_modules/.pnpm/@tanstack+form-core@1.33.5/node_modules/@tanstack/form-core/dist/esm/transform.js
function mergeAndUpdate(form, fn) {
	if (!fn) return;
	const newObj = Object.assign({}, form, { state: deepCopy(form.state) });
	fn(newObj);
	if (newObj.fieldInfo !== form.fieldInfo) form.fieldInfo = newObj.fieldInfo;
	if (newObj.options !== form.options) form.options = newObj.options;
	const diffedObject = Object.keys({
		values: null,
		validationMetaMap: null,
		fieldMetaBase: null,
		formGroupStateBase: null,
		isSubmitting: null,
		isSubmitted: null,
		isValidating: null,
		submissionAttempts: null,
		isSubmitSuccessful: null,
		_force_re_eval: null
	}).reduce((prev, key) => {
		if (form.state[key] !== newObj.state[key]) prev[key] = newObj.state[key];
		return prev;
	}, {});
	batch(() => {
		if (Object.keys(diffedObject).length) form.baseStore.setState((prev) => ({
			...prev,
			...diffedObject
		}));
		if (newObj.state.errorMap !== form.state.errorMap) form.setErrorMap(newObj.state.errorMap);
	});
	return newObj;
}
// node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useState = React.useState;
	var useEffect = React.useEffect;
	var useLayoutEffect = React.useLayoutEffect;
	var useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
// node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.1/node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
// node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	var shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useSyncExternalStore = shim.useSyncExternalStore;
	var useRef = React.useRef;
	var useEffect = React.useEffect;
	var useMemo = React.useMemo;
	var useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
// node_modules/.pnpm/@tanstack+react-store@0.11.2_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-store/dist/useSelector.js
var import_with_selector = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
})))();
function defaultCompare(a, b) {
	return a === b;
}
/**
* Selects a slice of state from an atom or store and subscribes the component
* to that selection.
*
* This is the primary React read hook for TanStack Store. It works with any
* source that exposes `get()` and `subscribe()`, including atoms, readonly
* atoms, stores, and readonly stores.
*
* Omit the selector to subscribe to the whole value.
*
* @example
* ```tsx
* const count = useSelector(counterStore, (state) => state.count)
* ```
*
* @example
* ```tsx
* const value = useSelector(countAtom)
* ```
*/
function useSelector(source, selector = (s) => s, options) {
	const compare = options?.compare ?? defaultCompare;
	const subscribe = (0, import_react.useCallback)((handleStoreChange) => {
		const { unsubscribe } = source.subscribe(handleStoreChange);
		return unsubscribe;
	}, [source]);
	const getSnapshot = (0, import_react.useCallback)(() => source.get(), [source]);
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getSnapshot, selector, compare);
}
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useField.js
function useField(opts) {
	const [prevOptions, setPrevOptions] = (0, import_react.useState)(() => ({
		form: opts.form,
		name: opts.name
	}));
	const [fieldApiState, setFieldApi] = (0, import_react.useState)(() => {
		return new FieldApi({ ...opts });
	});
	let fieldApi = fieldApiState;
	if (prevOptions.form !== opts.form || prevOptions.name !== opts.name) {
		fieldApi = new FieldApi({ ...opts });
		setFieldApi(fieldApi);
		setPrevOptions({
			form: opts.form,
			name: opts.name
		});
	}
	const reactiveStateValue = useSelector(fieldApi.store, opts.mode === "array" ? (state) => state.meta._arrayVersion || 0 : (state) => state.value);
	const reactiveMetaIsTouched = useSelector(fieldApi.store, (state) => state.meta.isTouched);
	const reactiveMetaIsBlurred = useSelector(fieldApi.store, (state) => state.meta.isBlurred);
	const reactiveMetaIsDirty = useSelector(fieldApi.store, (state) => state.meta.isDirty);
	const reactiveMetaErrorMap = useSelector(fieldApi.store, (state) => state.meta.errorMap);
	const reactiveMetaErrorSourceMap = useSelector(fieldApi.store, (state) => state.meta.errorSourceMap);
	const reactiveMetaIsValidating = useSelector(fieldApi.store, (state) => state.meta.isValidating);
	const extendedFieldApi = (0, import_react.useMemo)(() => {
		return {
			...fieldApi,
			get state() {
				return {
					value: opts.mode === "array" ? fieldApi.state.value : reactiveStateValue,
					get meta() {
						return {
							...fieldApi.state.meta,
							isTouched: reactiveMetaIsTouched,
							isBlurred: reactiveMetaIsBlurred,
							isDirty: reactiveMetaIsDirty,
							errorMap: reactiveMetaErrorMap,
							errorSourceMap: reactiveMetaErrorSourceMap,
							isValidating: reactiveMetaIsValidating
						};
					}
				};
			}
		};
	}, [
		fieldApi,
		opts.mode,
		reactiveStateValue,
		reactiveMetaIsTouched,
		reactiveMetaIsBlurred,
		reactiveMetaIsDirty,
		reactiveMetaErrorMap,
		reactiveMetaErrorSourceMap,
		reactiveMetaIsValidating
	]);
	useIsomorphicLayoutEffect(fieldApi.mount, [fieldApi]);
	useIsomorphicLayoutEffect(() => {
		fieldApi.update(opts);
	});
	return extendedFieldApi;
}
var Field = (({ children, ...fieldOptions }) => {
	const fieldApi = useField(fieldOptions);
	const jsxToDisplay = (0, import_react.useMemo)(() => functionalUpdate(children, fieldApi), [children, fieldApi]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: jsxToDisplay });
});
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useUUID.js
function useUUID() {
	return (0, import_react.useState)(() => uuid())[0];
}
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useFormId.js
var _React = import_react;
var useFormId = "19.3.1".split(".")[0] === "17" ? useUUID : _React.useId;
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useFormGroup.js
function useFormGroup(opts) {
	const [prevOptions, setPrevOptions] = (0, import_react.useState)(() => ({
		form: opts.form,
		name: opts.name
	}));
	const [formGroupApi, setFormGroupApi] = (0, import_react.useState)(() => {
		return new FormGroupApi({ ...opts });
	});
	if (prevOptions.form !== opts.form || prevOptions.name !== opts.name) {
		setFormGroupApi(new FormGroupApi({ ...opts }));
		setPrevOptions({
			form: opts.form,
			name: opts.name
		});
	}
	const reactiveStateValue = useSelector(formGroupApi.store, (state) => state.value);
	const reactiveMetaIsTouched = useSelector(formGroupApi.store, (state) => state.meta.isTouched);
	const reactiveMetaIsBlurred = useSelector(formGroupApi.store, (state) => state.meta.isBlurred);
	const reactiveMetaIsDirty = useSelector(formGroupApi.store, (state) => state.meta.isDirty);
	const reactiveMetaErrorMap = useSelector(formGroupApi.store, (state) => state.meta.errorMap);
	const reactiveMetaErrorSourceMap = useSelector(formGroupApi.store, (state) => state.meta.errorSourceMap);
	const reactiveMetaIsValidating = useSelector(formGroupApi.store, (state) => state.meta.isValidating);
	const reactiveMetaIsSubmitting = useSelector(formGroupApi.store, (state) => state.meta.isSubmitting);
	const reactiveMetaIsSubmitted = useSelector(formGroupApi.store, (state) => state.meta.isSubmitted);
	const reactiveMetaSubmissionAttempts = useSelector(formGroupApi.store, (state) => state.meta.submissionAttempts);
	const reactiveMetaIsSubmitSuccessful = useSelector(formGroupApi.store, (state) => state.meta.isSubmitSuccessful);
	const reactiveMetaCanSubmit = useSelector(formGroupApi.store, (state) => state.meta.canSubmit);
	const reactiveMetaIsValid = useSelector(formGroupApi.store, (state) => state.meta.isValid);
	const reactiveMetaIsFieldsValid = useSelector(formGroupApi.store, (state) => state.meta.isFieldsValid);
	const reactiveMetaIsFieldsValidating = useSelector(formGroupApi.store, (state) => state.meta.isFieldsValidating);
	const reactiveMetaIsGroupValid = useSelector(formGroupApi.store, (state) => state.meta.isGroupValid);
	const extendedFieldApi = (0, import_react.useMemo)(() => {
		return {
			...formGroupApi,
			handleSubmit: ((...props) => {
				return formGroupApi._handleSubmit(...props);
			}),
			get state() {
				return {
					...formGroupApi.state,
					value: reactiveStateValue,
					get meta() {
						return {
							...formGroupApi.state.meta,
							isTouched: reactiveMetaIsTouched,
							isBlurred: reactiveMetaIsBlurred,
							isDirty: reactiveMetaIsDirty,
							errorMap: reactiveMetaErrorMap,
							errorSourceMap: reactiveMetaErrorSourceMap,
							isValidating: reactiveMetaIsValidating,
							isSubmitting: reactiveMetaIsSubmitting,
							isSubmitted: reactiveMetaIsSubmitted,
							submissionAttempts: reactiveMetaSubmissionAttempts,
							isSubmitSuccessful: reactiveMetaIsSubmitSuccessful,
							canSubmit: reactiveMetaCanSubmit,
							isValid: reactiveMetaIsValid,
							isFieldsValid: reactiveMetaIsFieldsValid,
							isFieldsValidating: reactiveMetaIsFieldsValidating,
							isGroupValid: reactiveMetaIsGroupValid
						};
					}
				};
			}
		};
	}, [
		formGroupApi,
		reactiveStateValue,
		reactiveMetaIsTouched,
		reactiveMetaIsBlurred,
		reactiveMetaIsDirty,
		reactiveMetaErrorMap,
		reactiveMetaErrorSourceMap,
		reactiveMetaIsValidating,
		reactiveMetaIsSubmitting,
		reactiveMetaIsSubmitted,
		reactiveMetaSubmissionAttempts,
		reactiveMetaIsSubmitSuccessful,
		reactiveMetaCanSubmit,
		reactiveMetaIsValid,
		reactiveMetaIsFieldsValid,
		reactiveMetaIsFieldsValidating,
		reactiveMetaIsGroupValid
	]);
	useIsomorphicLayoutEffect(formGroupApi.mount, [formGroupApi]);
	useIsomorphicLayoutEffect(() => {
		formGroupApi.update(opts);
	});
	return extendedFieldApi;
}
var FormGroup = (({ children, ...formGroupOptions }) => {
	const formGroupApi = useFormGroup(formGroupOptions);
	const jsxToDisplay = (0, import_react.useMemo)(() => functionalUpdate(children, formGroupApi), [children, formGroupApi]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: jsxToDisplay });
});
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useForm.js
function LocalSubscribe$1({ form, selector = (state) => state, children }) {
	const data = useSelector(form.store, selector);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: functionalUpdate(children, data) });
}
function useForm(opts) {
	const fallbackFormId = useFormId();
	const [prevFormId, setPrevFormId] = (0, import_react.useState)(opts?.formId);
	const [formApi, setFormApi] = (0, import_react.useState)(() => {
		return new FormApi({
			...opts,
			formId: opts?.formId ?? fallbackFormId
		});
	});
	if (prevFormId !== opts?.formId) {
		const formId = opts?.formId ?? fallbackFormId;
		setFormApi(new FormApi({
			...opts,
			formId
		}));
		setPrevFormId(formId);
	}
	const extendedFormApi = (0, import_react.useMemo)(() => {
		const extendedApi = {
			...formApi,
			handleSubmit: ((...props) => {
				return formApi._handleSubmit(...props);
			}),
			get formId() {
				return formApi._formId;
			},
			get state() {
				return formApi.store.state;
			}
		};
		extendedApi.Field = function APIField(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				...props,
				form: formApi
			});
		};
		extendedApi.FormGroup = function APIFormGroup(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormGroup, {
				...props,
				form: formApi
			});
		};
		extendedApi.Subscribe = function Subscribe(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalSubscribe$1, {
				form: formApi,
				selector: props.selector,
				children: props.children
			});
		};
		return extendedApi;
	}, [formApi]);
	useIsomorphicLayoutEffect(formApi.mount, []);
	useIsomorphicLayoutEffect(() => {
		formApi.update(opts);
	});
	const hasRan = (0, import_react.useRef)(false);
	useIsomorphicLayoutEffect(() => {
		if (!hasRan.current) return;
		if (!opts?.transform) return;
		mergeAndUpdate(formApi, opts.transform);
	}, [formApi, opts?.transform]);
	useIsomorphicLayoutEffect(() => {
		hasRan.current = true;
	});
	return extendedFormApi;
}
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/useFieldGroup.js
function LocalSubscribe({ lens, selector = (state) => state, children }) {
	const data = useSelector(lens.store, selector);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: functionalUpdate(children, data) });
}
function useFieldGroup(opts) {
	const [formLensApi] = (0, import_react.useState)(() => {
		const api = new FieldGroupApi(opts);
		const form = opts.form instanceof FieldGroupApi ? opts.form.form : opts.form;
		const extendedApi = api;
		extendedApi.AppForm = function AppForm(appFormProps) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { ...appFormProps });
		};
		extendedApi.AppField = function AppField(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, { ...formLensApi.getFormFieldOptions(props) });
		};
		extendedApi.Field = function Field(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, { ...formLensApi.getFormFieldOptions(props) });
		};
		extendedApi.Subscribe = function Subscribe(props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalSubscribe, {
				lens: formLensApi,
				selector: props.selector,
				children: props.children
			});
		};
		return Object.assign(extendedApi, { ...opts.formComponents });
	});
	useIsomorphicLayoutEffect(formLensApi.mount, [formLensApi]);
	return formLensApi;
}
// node_modules/.pnpm/@tanstack+react-form@1.33.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/@tanstack/react-form/dist/esm/createFormHook.js
var fieldContext$1 = (0, import_react.createContext)(null);
var formContext$1 = (0, import_react.createContext)(null);
function useFormContext$1() {
	const form = (0, import_react.useContext)(formContext$1);
	if (!form) throw new Error("`formContext` only works when within a `formComponent` passed to `createFormHook`");
	return form;
}
function createFormHookContexts() {
	function useFieldContext() {
		const field = (0, import_react.useContext)(fieldContext$1);
		if (!field) throw new Error("`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`");
		return field;
	}
	return {
		fieldContext: fieldContext$1,
		useFieldContext,
		useFormContext: useFormContext$1,
		formContext: formContext$1
	};
}
function createFormHook({ fieldComponents, fieldContext: fieldContext2, formContext: formContext2, formComponents }) {
	function useAppForm(props) {
		const form = useForm(props);
		const AppForm = (0, import_react.useMemo)(() => {
			return ({ children }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(formContext2.Provider, {
					value: form,
					children
				});
			};
		}, [form]);
		const AppField = (0, import_react.useMemo)(() => {
			const AppField2 = (({ children, ...props2 }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					...props2,
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(fieldContext2.Provider, {
						value: field,
						children: children(Object.assign(field, fieldComponents))
					})
				});
			});
			return AppField2;
		}, [form]);
		return (0, import_react.useMemo)(() => {
			return Object.assign(form, {
				AppField,
				AppForm,
				...formComponents
			});
		}, [
			form,
			AppField,
			AppForm
		]);
	}
	function withForm({ render, props }) {
		return function Render(innerProps) {
			return render({
				...props,
				...innerProps
			});
		};
	}
	function withFieldGroup({ render, props, defaultValues }) {
		return function Render(innerProps) {
			const fieldGroupApi = useFieldGroup((0, import_react.useMemo)(() => {
				return {
					form: innerProps.form,
					fields: innerProps.fields,
					defaultValues,
					formComponents
				};
			}, [innerProps.form, innerProps.fields]));
			return render({
				...props,
				...innerProps,
				group: fieldGroupApi
			});
		};
	}
	function useTypedAppFormContext(_props) {
		return useFormContext$1();
	}
	function extendForm(extension) {
		return createFormHook({
			fieldContext: fieldContext2,
			formContext: formContext2,
			fieldComponents: {
				...fieldComponents,
				...extension.fieldComponents
			},
			formComponents: {
				...formComponents,
				...extension.formComponents
			}
		});
	}
	return {
		useAppForm,
		withForm,
		withFieldGroup,
		useTypedAppFormContext,
		extendForm
	};
}
// src/hooks/LockContext.tsx
var LockContext = (0, import_react.createContext)(null);
var useLockContext = () => {
	const ctx = (0, import_react.useContext)(LockContext);
	if (!ctx) throw new Error("useLockContext must be used within LockContext.Provider");
	return ctx;
};
// src/components/form/formFields/LabelField.tsx
var import_compiler_runtime = require_compiler_runtime();
function LabelField(t0) {
	const $ = (0, import_compiler_runtime.c)(34);
	const { label, labelOptions: t1, htmlFor, disabled: t2, checked, onCheckboxChange, hasCheckbox: t3 } = t0;
	let t4;
	if ($[0] !== t1) {
		t4 = t1 === void 0 ? {} : t1;
		$[0] = t1;
		$[1] = t4;
	} else t4 = $[1];
	const labelOptions = t4;
	const hasCheckbox = t3 === void 0 ? false : t3;
	const { type: t5, value: t6, width: t7, icontext: t8 } = labelOptions;
	const labelType = t5 === void 0 ? "" : t5;
	const width = t7 === void 0 ? "4" : t7;
	const icontext = t8 === void 0 ? "" : t8;
	let t9;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t9 = ["texticon", "texticoncheckbox"];
		$[2] = t9;
	} else t9 = $[2];
	const hasTooltipIcon = t9.includes(labelType);
	const hasClickIcon = labelType === "texticonclick";
	if (labelType === "header") {
		const t10 = `${Number(width) / 12 * 100}%`;
		let t11;
		if ($[3] !== t10) {
			t11 = { flexBasis: t10 };
			$[3] = t10;
			$[4] = t11;
		} else t11 = $[4];
		let t12;
		if ($[5] !== label) {
			t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "element-label__header",
				children: label
			});
			$[5] = label;
			$[6] = t12;
		} else t12 = $[6];
		let t13;
		if ($[7] !== t11 || $[8] !== t12) {
			t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: t11,
				children: t12
			});
			$[7] = t11;
			$[8] = t12;
			$[9] = t13;
		} else t13 = $[9];
		return t13;
	}
	let t10;
	if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCircledIcon, {});
		$[10] = t10;
	} else t10 = $[10];
	let t11;
	if ($[11] !== hasClickIcon) {
		t11 = hasClickIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "element-label__click-hint",
			children: "(click me)"
		});
		$[11] = hasClickIcon;
		$[12] = t11;
	} else t11 = $[12];
	let t12;
	if ($[13] !== t11) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "element-label__tooltip-trigger",
				"aria-label": "More information",
				children: [t10, t11]
			})
		});
		$[13] = t11;
		$[14] = t12;
	} else t12 = $[14];
	let t13;
	if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipArrow, { className: "element-label__tooltip-arrow" });
		$[15] = t13;
	} else t13 = $[15];
	let t14;
	if ($[16] !== icontext) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
			className: "element-label__tooltip-content",
			sideOffset: 5,
			side: "right",
			children: [icontext, t13]
		}) });
		$[16] = icontext;
		$[17] = t14;
	} else t14 = $[17];
	let t15;
	if ($[18] !== t12 || $[19] !== t14) {
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
			delayDuration: 200,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [t12, t14] })
		});
		$[18] = t12;
		$[19] = t14;
		$[20] = t15;
	} else t15 = $[20];
	const tooltipContent = t15;
	let t16;
	if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
		t16 = {
			flexBasis: "33.33333333333333%",
			height: "1.5em"
		};
		$[21] = t16;
	} else t16 = $[21];
	const t17 = (hasTooltipIcon || hasClickIcon) && tooltipContent;
	let t18;
	if ($[22] !== htmlFor || $[23] !== label || $[24] !== t17) {
		t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
			className: "element-label__inner",
			htmlFor,
			children: [label, t17]
		});
		$[22] = htmlFor;
		$[23] = label;
		$[24] = t17;
		$[25] = t18;
	} else t18 = $[25];
	let t19;
	if ($[26] !== checked || $[27] !== hasCheckbox || $[28] !== label || $[29] !== onCheckboxChange) {
		t19 = hasCheckbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			className: "element-label__checkbox",
			name: label,
			checked,
			onChange: (e) => onCheckboxChange && onCheckboxChange(e.target.checked)
		});
		$[26] = checked;
		$[27] = hasCheckbox;
		$[28] = label;
		$[29] = onCheckboxChange;
		$[30] = t19;
	} else t19 = $[30];
	let t20;
	if ($[31] !== t18 || $[32] !== t19) {
		t20 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "element-label",
			style: t16,
			children: [t18, t19]
		});
		$[31] = t18;
		$[32] = t19;
		$[33] = t20;
	} else t20 = $[33];
	return t20;
}
// src/components/form/formFields/SelectField.tsx
function SelectField(t0) {
	const $ = (0, import_compiler_runtime.c)(43);
	const { label, options, hasCheckbox, onCheckboxChange } = t0;
	const field = useFieldContext();
	const [checked, setChecked] = (0, import_react.useState)(!!field.state.value);
	const lockContext = (0, import_react.useContext)(LockContext);
	const isDisabled = hasCheckbox && !checked || !!lockContext?.lockAll;
	let t1;
	if ($[0] !== onCheckboxChange) {
		t1 = (value) => {
			setChecked(value);
			onCheckboxChange?.(value);
		};
		$[0] = onCheckboxChange;
		$[1] = t1;
	} else t1 = $[1];
	const handleCheckboxChange = t1;
	let t2;
	if ($[2] !== field || $[3] !== isDisabled) {
		t2 = (value_0) => {
			if (!isDisabled) field.handleChange(value_0);
		};
		$[2] = field;
		$[3] = isDisabled;
		$[4] = t2;
	} else t2 = $[4];
	const handleChange = t2;
	let t3;
	if ($[5] !== checked || $[6] !== handleCheckboxChange || $[7] !== hasCheckbox || $[8] !== label) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor: label,
			hasCheckbox,
			checked,
			onCheckboxChange: handleCheckboxChange
		});
		$[5] = checked;
		$[6] = handleCheckboxChange;
		$[7] = hasCheckbox;
		$[8] = label;
		$[9] = t3;
	} else t3 = $[9];
	let t4;
	if ($[10] !== handleChange) {
		t4 = (value_1) => handleChange(value_1);
		$[10] = handleChange;
		$[11] = t4;
	} else t4 = $[11];
	let t5;
	if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select an option…" });
		$[12] = t5;
	} else t5 = $[12];
	let t6;
	if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) });
		$[13] = t6;
	} else t6 = $[13];
	let t7;
	if ($[14] !== isDisabled) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
			className: "select-input__trigger",
			disabled: isDisabled,
			children: [t5, t6]
		});
		$[14] = isDisabled;
		$[15] = t7;
	} else t7 = $[15];
	let t8;
	if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUpIcon, {}) });
		$[16] = t8;
	} else t8 = $[16];
	let t9;
	if ($[17] !== options.emptyOpt || $[18] !== options.options) {
		t9 = options.options == null || Object.keys(options.options).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
			value: "none",
			className: "select-input__item",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
				className: "select-input__item-indicator",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children: options.emptyOpt })]
		});
		$[17] = options.emptyOpt;
		$[18] = options.options;
		$[19] = t9;
	} else t9 = $[19];
	let t10;
	if ($[20] !== options.groups || $[21] !== options.options) {
		t10 = options.groups && (() => {
			let offset = 0;
			return Object.entries(options.groups).map((t11) => {
				const [groupName, groupLimit] = t11;
				const groupEntries = Object.entries(options.options ?? {}).slice(offset, offset + groupLimit);
				offset = offset + groupLimit;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, {
					className: "select-input__group-label",
					children: groupName
				}), groupEntries.map(_temp$14)] }, groupName);
			});
		})();
		$[20] = options.groups;
		$[21] = options.options;
		$[22] = t10;
	} else t10 = $[22];
	let t11;
	if ($[23] !== options.groups || $[24] !== options.inactiveOptions || $[25] !== options.options) {
		t11 = Object.keys(options.groups ?? {}).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [Object.entries(options.options ?? {}).map(_temp2$3), Object.entries(options.inactiveOptions ?? {}).map(_temp3$1)] });
		$[23] = options.groups;
		$[24] = options.inactiveOptions;
		$[25] = options.options;
		$[26] = t11;
	} else t11 = $[26];
	let t12;
	if ($[27] !== t10 || $[28] !== t11 || $[29] !== t9) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectViewport, {
			className: "select-input__viewport",
			children: [
				t9,
				t10,
				t11
			]
		});
		$[27] = t10;
		$[28] = t11;
		$[29] = t9;
		$[30] = t12;
	} else t12 = $[30];
	let t13;
	if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) });
		$[31] = t13;
	} else t13 = $[31];
	let t14;
	if ($[32] !== t12) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			className: "select-input__content",
			position: "popper",
			sideOffset: 4,
			children: [
				t8,
				t12,
				t13
			]
		}) });
		$[32] = t12;
		$[33] = t14;
	} else t14 = $[33];
	let t15;
	if ($[34] !== field.state.value || $[35] !== isDisabled || $[36] !== t14 || $[37] !== t4 || $[38] !== t7) {
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "select-input__field-wrapper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: field.state.value,
				disabled: isDisabled,
				onValueChange: t4,
				children: [t7, t14]
			})
		});
		$[34] = field.state.value;
		$[35] = isDisabled;
		$[36] = t14;
		$[37] = t4;
		$[38] = t7;
		$[39] = t15;
	} else t15 = $[39];
	let t16;
	if ($[40] !== t15 || $[41] !== t3) {
		t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "select-input",
			children: [t3, t15]
		});
		$[40] = t15;
		$[41] = t3;
		$[42] = t16;
	} else t16 = $[42];
	return t16;
}
function _temp3$1(t0) {
	const [key_1, label_2] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
		disabled: true,
		value: key_1,
		className: "select-input__item select-input__item--inactive",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
			className: "select-input__item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children: label_2 })]
	}, key_1);
}
function _temp2$3(t0) {
	const [key_0, label_1] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
		value: key_0,
		className: "select-input__item",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
			className: "select-input__item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children: label_1 })]
	}, key_0);
}
function _temp$14(t0) {
	const [key, label_0] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
		value: key,
		className: "select-input__item",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
			className: "select-input__item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children: label_0 })]
	}, key);
}
// src/components/form/formFields/TextArea.tsx
function TextArea(t0) {
	const $ = (0, import_compiler_runtime.c)(14);
	const { label, required: t1, enabled, placeholder, warning, disabled: t2 } = t0;
	const required = t1 === void 0 ? false : t1;
	const disabled = t2 === void 0 ? false : t2;
	const field = useFieldContext();
	const lockContext = (0, import_react.useContext)(LockContext);
	const isDisabled = disabled || enabled === false || lockContext?.lockAll;
	const t3 = placeholder ?? "";
	let t4;
	if ($[0] !== field) {
		t4 = (e) => field.handleChange(e.target.value);
		$[0] = field;
		$[1] = t4;
	} else t4 = $[1];
	let t5;
	if ($[2] !== field.state.value || $[3] !== isDisabled || $[4] !== label || $[5] !== required || $[6] !== t3 || $[7] !== t4) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			className: "text-input__input",
			name: label,
			value: field.state.value,
			placeholder: t3,
			required,
			disabled: isDisabled,
			onChange: t4
		});
		$[2] = field.state.value;
		$[3] = isDisabled;
		$[4] = label;
		$[5] = required;
		$[6] = t3;
		$[7] = t4;
		$[8] = t5;
	} else t5 = $[8];
	let t6;
	if ($[9] !== warning) {
		t6 = warning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-input__validation",
			children: warning
		});
		$[9] = warning;
		$[10] = t6;
	} else t6 = $[10];
	let t7;
	if ($[11] !== t5 || $[12] !== t6) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__field-wrapper",
			children: [t5, t6]
		});
		$[11] = t5;
		$[12] = t6;
		$[13] = t7;
	} else t7 = $[13];
	return t7;
}
// src/components/form/formFields/TextInput.tsx
function TextInput(t0) {
	const $ = (0, import_compiler_runtime.c)(26);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning, disabled: t4 } = t0;
	const required = t1 === void 0 ? false : t1;
	const secret = t2 === void 0 ? false : t2;
	const copy = t3 === void 0 ? false : t3;
	const disabled = t4 === void 0 ? false : t4;
	const field = useFieldContext();
	const lockContext = (0, import_react.useContext)(LockContext);
	const isSecret = !!secret;
	const isCopy = !!copy;
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const isDisabled = disabled || enabled === false || lockContext?.lockAll;
	let t5;
	if ($[0] !== field.state.value) {
		t5 = async () => {
			await navigator.clipboard.writeText(field.state.value);
		};
		$[0] = field.state.value;
		$[1] = t5;
	} else t5 = $[1];
	const handleCopy = t5;
	const inputType = isSecret && !showPassword ? "password" : "text";
	const hasGroup = isSecret || isCopy;
	const t6 = placeholder ?? "";
	let t7;
	if ($[2] !== field) {
		t7 = (e) => field.handleChange(e.target.value);
		$[2] = field;
		$[3] = t7;
	} else t7 = $[3];
	let t8;
	if ($[4] !== field.state.value || $[5] !== inputType || $[6] !== isDisabled || $[7] !== label || $[8] !== pattern || $[9] !== required || $[10] !== t6 || $[11] !== t7) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: inputType,
			className: "text-input__input",
			name: label,
			value: field.state.value,
			placeholder: t6,
			pattern,
			required,
			disabled: isDisabled,
			onChange: t7
		});
		$[4] = field.state.value;
		$[5] = inputType;
		$[6] = isDisabled;
		$[7] = label;
		$[8] = pattern;
		$[9] = required;
		$[10] = t6;
		$[11] = t7;
		$[12] = t8;
	} else t8 = $[12];
	const input = t8;
	let t9;
	if ($[13] !== handleCopy || $[14] !== hasGroup || $[15] !== input || $[16] !== isCopy || $[17] !== isDisabled || $[18] !== isSecret || $[19] !== showPassword) {
		t9 = hasGroup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__input-group",
			children: [
				input,
				isSecret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-input__toggle-btn",
					onClick: () => setShowPassword(_temp$13),
					disabled: isDisabled,
					"aria-label": showPassword ? "Hide password" : "Show password",
					children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeClosedIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOpenIcon, {})
				}),
				isCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-input__copy-btn",
					onClick: handleCopy,
					disabled: isDisabled,
					"aria-label": "Copy to clipboard",
					title: "Copy to clipboard",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyIcon, {})
				})
			]
		}) : input;
		$[13] = handleCopy;
		$[14] = hasGroup;
		$[15] = input;
		$[16] = isCopy;
		$[17] = isDisabled;
		$[18] = isSecret;
		$[19] = showPassword;
		$[20] = t9;
	} else t9 = $[20];
	let t10;
	if ($[21] !== warning) {
		t10 = warning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-input__validation",
			children: warning
		});
		$[21] = warning;
		$[22] = t10;
	} else t10 = $[22];
	let t11;
	if ($[23] !== t10 || $[24] !== t9) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__field-wrapper",
			children: [t9, t10]
		});
		$[23] = t10;
		$[24] = t9;
		$[25] = t11;
	} else t11 = $[25];
	return t11;
}
function _temp$13(p) {
	return !p;
}
// src/components/form/formFields/TextField.tsx
function TextField(t0) {
	const $ = (0, import_compiler_runtime.c)(21);
	const { type: t1, label, required: t2, enabled, placeholder, secret: t3, copy: t4, pattern, warning, disabled: t5, hasCheckbox, onCheckboxChange } = t0;
	const type = t1 === void 0 ? "input" : t1;
	const required = t2 === void 0 ? false : t2;
	const secret = t3 === void 0 ? false : t3;
	const copy = t4 === void 0 ? false : t4;
	const disabled = t5 === void 0 ? false : t5;
	const field = useFieldContext();
	const lockContext = (0, import_react.useContext)(LockContext);
	const [checked, setChecked] = (0, import_react.useState)(!!field.state.value);
	const isDisabled = disabled || enabled === false || hasCheckbox && !checked || lockContext?.lockAll;
	let t6;
	if ($[0] !== onCheckboxChange) {
		t6 = (value) => {
			setChecked(value);
			onCheckboxChange?.(value);
		};
		$[0] = onCheckboxChange;
		$[1] = t6;
	} else t6 = $[1];
	const handleCheckboxChange = t6;
	let t7;
	if ($[2] !== checked || $[3] !== handleCheckboxChange || $[4] !== hasCheckbox || $[5] !== label) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor: label,
			hasCheckbox,
			checked,
			onCheckboxChange: handleCheckboxChange
		});
		$[2] = checked;
		$[3] = handleCheckboxChange;
		$[4] = hasCheckbox;
		$[5] = label;
		$[6] = t7;
	} else t7 = $[6];
	let t8;
	if ($[7] !== copy || $[8] !== enabled || $[9] !== isDisabled || $[10] !== label || $[11] !== pattern || $[12] !== placeholder || $[13] !== required || $[14] !== secret || $[15] !== type || $[16] !== warning) {
		t8 = type === "input" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			label,
			required,
			enabled,
			placeholder,
			secret,
			copy,
			pattern,
			disabled: isDisabled,
			warning
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			label,
			required,
			enabled,
			placeholder,
			copy,
			disabled: isDisabled,
			warning
		});
		$[7] = copy;
		$[8] = enabled;
		$[9] = isDisabled;
		$[10] = label;
		$[11] = pattern;
		$[12] = placeholder;
		$[13] = required;
		$[14] = secret;
		$[15] = type;
		$[16] = warning;
		$[17] = t8;
	} else t8 = $[17];
	let t9;
	if ($[18] !== t7 || $[19] !== t8) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input",
			children: [t7, t8]
		});
		$[18] = t7;
		$[19] = t8;
		$[20] = t9;
	} else t9 = $[20];
	return t9;
}
// src/components/form/formFields/ResourceField.tsx
function ResourceField(t0) {
	const $ = (0, import_compiler_runtime.c)(42);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning } = t0;
	const required = t1 === void 0 ? false : t1;
	const secret = t2 === void 0 ? false : t2;
	const copy = t3 === void 0 ? false : t3;
	const field = useFieldContext();
	const lockContext = (0, import_react.useContext)(LockContext);
	let t4;
	if ($[0] !== field.name) {
		t4 = field.name.split(".").slice(-1);
		$[0] = field.name;
		$[1] = t4;
	} else t4 = $[1];
	const fieldName = t4[0];
	const isSecret = !!secret;
	const isCopy = !!copy;
	const isDisabled = enabled === false || !!lockContext?.lockAll;
	const [labelText, setLabelText] = (0, import_react.useState)(label);
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [min, setMin] = (0, import_react.useState)(-1);
	const [max, setMax] = (0, import_react.useState)(-1);
	const [defaultValue, setDefaultValue] = (0, import_react.useState)(1);
	const [show, setShow] = (0, import_react.useState)(false);
	let t5;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t5 = getResourcesConfig();
		$[2] = t5;
	} else t5 = $[2];
	const resourcesConfig = t5;
	let t6;
	if ($[3] !== field.state.value) {
		t6 = async () => {
			await navigator.clipboard.writeText(field.state.value);
		};
		$[3] = field.state.value;
		$[4] = t6;
	} else t6 = $[4];
	const handleCopy = t6;
	const hasGroup = isSecret || isCopy;
	let t7;
	if ($[5] !== defaultValue || $[6] !== field.form || $[7] !== fieldName || $[8] !== label || $[9] !== max || $[10] !== min || $[11] !== show) {
		t7 = () => {
			const system = field.form.getFieldValue("system");
			const partition = field.form.getFieldValue("hpc.partition");
			const systems = system ? [system] : [];
			const partitions = partition ? [partition] : [];
			let _partitions = [];
			let minmaxavail = false;
			systems.forEach((system_0) => {
				if (partitions.length === 1 && partitions[0] === "_all_") _partitions = Object.keys(resourcesConfig[system_0] ?? {});
				else _partitions = partitions;
				_partitions.forEach((partition_0) => {
					const elementOptions = resourcesConfig[system_0]?.[partition_0]?.[fieldName] ?? {};
					if (Object.keys(elementOptions).length !== 0) {
						setShow(true);
						const minmax = elementOptions.minmax || false;
						setDefaultValue(elementOptions["default"] === void 0 || elementOptions["default"] === null ? defaultValue : elementOptions["default"]);
						if (minmax) {
							if (!minmaxavail) {
								minmaxavail = true;
								setMin(minmax[0]);
								setMax(minmax[1]);
							} else {
								if (minmax[0] < min) setMin(minmax[0]);
								if (minmax[1] > max) setMax(minmax[1]);
							}
						}
					}
				});
			});
			if (show) {
				if (minmaxavail) {
					console.log("min: ", min, "max: ", max);
					setLabelText(`${label} [${min}, ${max}]`);
				}
			}
		};
		$[5] = defaultValue;
		$[6] = field.form;
		$[7] = fieldName;
		$[8] = label;
		$[9] = max;
		$[10] = min;
		$[11] = show;
		$[12] = t7;
	} else t7 = $[12];
	(0, import_react.useEffect)(t7);
	let t8;
	if ($[13] !== field) {
		t8 = (value) => {
			field.handleChange(value);
		};
		$[13] = field;
		$[14] = t8;
	} else t8 = $[14];
	const handlechange = t8;
	if (!show) return null;
	console.log("ResourceField render: ", labelText);
	let t9;
	if ($[15] !== label || $[16] !== labelText) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label: labelText,
			htmlFor: label
		});
		$[15] = label;
		$[16] = labelText;
		$[17] = t9;
	} else t9 = $[17];
	let t10;
	if ($[18] !== defaultValue || $[19] !== field.state.value || $[20] !== handleCopy || $[21] !== handlechange || $[22] !== hasGroup || $[23] !== isCopy || $[24] !== isDisabled || $[25] !== isSecret || $[26] !== label || $[27] !== max || $[28] !== min || $[29] !== pattern || $[30] !== placeholder || $[31] !== required || $[32] !== showPassword) {
		t10 = hasGroup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__input-group",
			children: [isSecret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-input__toggle-btn",
				onClick: () => setShowPassword(_temp$12),
				disabled: isDisabled,
				"aria-label": showPassword ? "Hide password" : "Show password",
				children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeClosedIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOpenIcon, {})
			}), isCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-input__copy-btn",
				onClick: handleCopy,
				disabled: isDisabled,
				"aria-label": "Copy to clipboard",
				title: "Copy to clipboard",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyIcon, {})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			min,
			max,
			className: "text-input__input",
			defaultValue,
			name: label,
			value: field.state.value,
			placeholder: placeholder ?? "",
			pattern,
			required,
			disabled: isDisabled,
			onChange: (e) => handlechange(e.target.value)
		});
		$[18] = defaultValue;
		$[19] = field.state.value;
		$[20] = handleCopy;
		$[21] = handlechange;
		$[22] = hasGroup;
		$[23] = isCopy;
		$[24] = isDisabled;
		$[25] = isSecret;
		$[26] = label;
		$[27] = max;
		$[28] = min;
		$[29] = pattern;
		$[30] = placeholder;
		$[31] = required;
		$[32] = showPassword;
		$[33] = t10;
	} else t10 = $[33];
	let t11;
	if ($[34] !== warning) {
		t11 = warning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-input__validation",
			children: warning
		});
		$[34] = warning;
		$[35] = t11;
	} else t11 = $[35];
	let t12;
	if ($[36] !== t10 || $[37] !== t11) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__field-wrapper",
			children: [t10, t11]
		});
		$[36] = t10;
		$[37] = t11;
		$[38] = t12;
	} else t12 = $[38];
	let t13;
	if ($[39] !== t12 || $[40] !== t9) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input",
			children: [t9, t12]
		});
		$[39] = t12;
		$[40] = t9;
		$[41] = t13;
	} else t13 = $[41];
	return t13;
}
function _temp$12(p) {
	return !p;
}
// src/api/CollectStrategy.ts
function collectCore(form) {
	const core = {
		name: form.name,
		option: form.option,
		profile: form.profile,
		system: form.system,
		flavor: form.flavor,
		secret_keys: form.secret_keys
	};
	if (form.envvariables && form.envvariables.length > 0) core.envvariables = form.envvariables.reduce((acc, { name, value }) => {
		acc[name] = value;
		return acc;
	}, {});
	return core;
}
function resolveCollectionTypeFromForm(option, system) {
	if (option === "custom") return "custom";
	if (option === "repo2docker") return "repo2docker";
	if (option === "xpra") return "hpc";
	if (kubeFlavorSystems.includes(system.trim())) return "cloud";
	else return "hpc";
}
function required(value, field) {
	if (value === void 0 || value === null) throw new Error(`collectionStrategy: missing required subform "${field}" for selected strategy.`);
	return value;
}
function cleanStorage(storage) {
	if (!storage) return void 0;
	const result = { mounts: storage.mounts };
	if (!(storage.localstoragepath === "/home/jovyan/work" || storage.localstoragepath === "")) result.localstoragepath = storage.localstoragepath;
	return result;
}
function isStorageEmpty(storage) {
	if (!storage) return true;
	const hasNoMounts = !storage.mounts || storage.mounts.length === 0;
	const isDefaultPath = storage.localstoragepath === "/home/jovyan/work" || storage.localstoragepath === "";
	return hasNoMounts && isDefaultPath;
}
var strategies = {
	cloud: {
		type: "cloud",
		collect(form) {
			const payload = {
				...collectCore(form),
				modules: required(form.modules, "modules"),
				modules_versions: required(form.modules_versions, "modules_versions"),
				service: "jupyterlab"
			};
			if (!isStorageEmpty(form.storage)) payload.storage = cleanStorage(form.storage);
			return payload;
		}
	},
	hpc: {
		type: "hpc",
		collect(form) {
			const payload = {
				...collectCore(form),
				hpc: required(form.hpc, "hpc"),
				resources: required(form.resources, "resources"),
				modules: required(form.modules, "modules"),
				modules_versions: required(form.modules_versions, "modules_versions"),
				service: "jupyterlab"
			};
			if (!isStorageEmpty(form.storage)) payload.storage = cleanStorage(form.storage);
			return payload;
		}
	},
	repo2docker: {
		type: "repo2docker",
		collect(form) {
			const payload = {
				...collectCore(form),
				repo2docker: required(form.repo2docker, "repo2docker"),
				repo2dockerdirectlink: form.repo2dockerdirectlink,
				service: "jupyterlab"
			};
			if (!isStorageEmpty(form.storage)) payload.storage = cleanStorage(form.storage);
			return payload;
		}
	},
	custom: {
		type: "custom",
		collect(form) {
			const payload = {
				...collectCore(form),
				custom: required(form.custom, "custom"),
				service: "jupyterlab"
			};
			if (!isStorageEmpty(form.storage)) payload.storage = cleanStorage(form.storage);
			return payload;
		}
	}
};
function collect(type, form) {
	return strategies[type].collect(form);
}
// src/hooks/useApi.tsx
var MAX_RETRIES = 5;
async function fetchWithRetry(url, options = {}, retries = MAX_RETRIES) {
	try {
		const response = await fetch(url, options);
		if (response.status === 503 && retries > 0) {
			await new Promise((r) => setTimeout(r, 2 ** (MAX_RETRIES - retries) * 500));
			return fetchWithRetry(url, options, retries - 1);
		}
		if (!response.ok) throw new Error(`API error: ${response.status}`);
		return response;
	} catch (error) {
		if (retries > 0 && error instanceof DOMException && error.name === "AbortError") throw error;
		if (retries > 0 && !error) return fetchWithRetry(url, options, retries - 1);
		throw error;
	}
}
function showDefaultToast() {
	console.warn("Request to Server failed. Try refreshing website");
}
function useApi({ onError } = {}) {
	return { request: (0, import_react.useCallback)(async (url, options) => {
		try {
			const { parseAs = "json", ...fetchOptions } = options ?? {};
			const response = await fetchWithRetry(url, fetchOptions);
			if (parseAs === "raw") return response;
			return await response[parseAs]();
		} catch (error) {
			const err = error instanceof Error ? error : new Error(String(error));
			console.error("API Request failed:", err);
			(onError ?? showDefaultToast)(err);
			return null;
		}
	}, [onError]) };
}
// src/api/ServerService.ts
function normalizePathSegment(segment) {
	return encodeURIComponent(segment);
}
function buildApiUrl(...segments) {
	const baseUrl = window.jhdata.base_url ?? "/";
	const path = segments.map(normalizePathSegment).join("/");
	const url = new URL(`${baseUrl}api/${path}`, window.location.origin);
	if (window.jhdata.xsrf_token) url.searchParams.set("_xsrf", window.jhdata.xsrf_token);
	return url.toString();
}
function buildJsonRequestOptions(method, body, options = {}) {
	const requestOptions = {
		...options,
		method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			...options.headers ?? {}
		},
		parseAs: "raw"
	};
	if (body !== void 0) requestOptions.body = JSON.stringify(body);
	return requestOptions;
}
function createServerService(request) {
	const post = (path, body, options) => request(buildApiUrl(...path), buildJsonRequestOptions("POST", body, options));
	const del = (path, body, options) => request(buildApiUrl(...path), buildJsonRequestOptions("DELETE", body, options));
	return {
		startServer(user, payload, options) {
			return post([
				"users",
				user,
				"server"
			], payload, options);
		},
		startNamedServer(user, serverName, payload, options) {
			return post([
				"users",
				user,
				"encryptedservers",
				serverName
			], payload, options);
		},
		updateNamedServer(user, serverName, payload, options) {
			return post([
				"users",
				user,
				"servers",
				serverName,
				"update"
			], payload, options);
		},
		cancelNamedServer(user, serverName, options) {
			return post([
				"users",
				"progress",
				"events",
				user,
				serverName
			], {
				failed: true,
				progress: 100
			}, options);
		},
		cancelServer(user, options) {
			return post([
				"users",
				"progress",
				"events",
				user
			], {
				failed: true,
				progress: 100,
				html_message: "<details><summary>Start cancelled.</summary></details>"
			}, options);
		},
		stopServer(user, options) {
			return del([
				"users",
				user,
				"server"
			], void 0, options);
		},
		stopNamedServer(user, serverName, options) {
			return del([
				"users",
				user,
				"servers",
				serverName
			], void 0, options);
		},
		deleteServer(user, options) {
			return del([
				"users",
				user,
				"server"
			], void 0, options);
		},
		deleteNamedServer(user, serverName, options) {
			return del([
				"users",
				user,
				"servers",
				serverName
			], { remove: true }, options);
		},
		shareServer(options) {
			return post(["share", "user_options"], void 0, options);
		},
		rtcNamedServerCreate(user, serverName, options) {
			return post([
				"share-codes",
				user,
				serverName
			], {}, options);
		},
		rtcNamedServerRemove(user, serverName, options) {
			return del([
				"share-codes",
				user,
				serverName
			], {}, options);
		}
	};
}
function useServerService() {
	const $ = (0, import_compiler_runtime.c)(2);
	const { request } = useApi();
	let t0;
	if ($[0] !== request) {
		t0 = createServerService(request);
		$[0] = request;
		$[1] = t0;
	} else t0 = $[1];
	return t0;
}
// src/api/R2DService.tsx
var BUILD_ONLY_PHASES = /* @__PURE__ */ new Set([
	"ready",
	"built",
	"launching"
]);
var ENCODE_REPO_URL_PHASES = /* @__PURE__ */ new Set([
	"git",
	"gl",
	"hydroshare",
	"ckan"
]);
var PROGRESS_BY_PHASE = {
	waiting: 2,
	fetching: 3,
	building: 5,
	pushing: 8
};
function normalizeRepoRef(repoRef) {
	return repoRef && repoRef.trim() !== "" ? repoRef : "HEAD";
}
function buildRepo2DockerUrl(repo2DockerConfig) {
	const type = repo2DockerConfig.repotype;
	const repourl = ENCODE_REPO_URL_PHASES.has(type) ? encodeURIComponent(repo2DockerConfig.repourl) : repo2DockerConfig.repourl;
	const reporef = normalizeRepoRef(repo2DockerConfig.reporef);
	const url = new URL(`/services/binder/build/${type}/${repourl}/${reporef}`, window.location.origin);
	url.searchParams.set("build_only", "true");
	return url;
}
function toBuildStatus(phase) {
	if (phase === "waiting") return "waiting";
	if (phase === "fetching") return "fetching";
	if (phase === "building") return "building";
	if (phase === "pushing") return "pushing";
	if (BUILD_ONLY_PHASES.has(phase)) return "ready";
	if (phase === "failed") return "failed";
	return "idle";
}
function buildProgressForPhase(phase) {
	return PROGRESS_BY_PHASE[phase] ?? 100;
}
function parseBuildMessage(raw) {
	const parsed = JSON.parse(raw);
	return {
		phase: parsed.phase ?? "",
		message: parsed.message,
		imageName: parsed.imageName,
		raw: parsed
	};
}
function createRepo2DockerBuildProgress(message) {
	const status = toBuildStatus(message.phase);
	return {
		...message,
		status,
		progress: buildProgressForPhase(message.phase)
	};
}
function createRepo2DockerService() {
	return { repo2DockerSSE(repo2DockerConfig, callbacks = {}, timeoutMs = 3e4) {
		const url = buildRepo2DockerUrl(repo2DockerConfig);
		const eventSource = new EventSource(url);
		let closed = false;
		let completed = false;
		const close = () => {
			if (closed) return;
			closed = true;
			eventSource.close();
			callbacks.onClose?.();
		};
		const timeout = setTimeout(() => {
			if (!completed) {
				callbacks.onTimeout?.();
				close();
			}
		}, timeoutMs);
		const clearTimeoutIfNeeded = () => {
			clearTimeout(timeout);
		};
		eventSource.onmessage = (event) => {
			if (closed) return;
			try {
				const message = parseBuildMessage(event.data);
				const progress = createRepo2DockerBuildProgress(message);
				callbacks.onProgress?.(progress);
				if (message.message) callbacks.onMessage?.(message.message, message);
				if (BUILD_ONLY_PHASES.has(message.phase)) {
					completed = true;
					callbacks.onReady?.(progress);
					clearTimeoutIfNeeded();
					close();
					return;
				}
				if (message.phase === "failed") {
					completed = true;
					callbacks.onFailed?.(progress);
					clearTimeoutIfNeeded();
					close();
				}
			} catch (error) {
				clearTimeoutIfNeeded();
				callbacks.onError?.(error);
				close();
			}
		};
		eventSource.onerror = (error) => {
			clearTimeoutIfNeeded();
			if (!closed) callbacks.onError?.(error);
			close();
		};
		return {
			url: url.toString(),
			close: () => {
				clearTimeoutIfNeeded();
				close();
			}
		};
	} };
}
var repo2DockerService = createRepo2DockerService();
function useRepo2DockerService() {
	return repo2DockerService;
}
// src/hooks/TabContext.tsx
var TabContext = (0, import_react.createContext)(null);
var useTabContext = () => {
	const ctx = (0, import_react.useContext)(TabContext);
	if (!ctx) throw new Error("useTabContext must be used within TabContext.Provider");
	return ctx;
};
// src/hooks/RowContext.tsx
var RowContext = (0, import_react.createContext)(null);
var useRowContext = () => {
	const ctx = (0, import_react.useContext)(RowContext);
	if (!ctx) throw new Error("useRowContext must be used within RowContext.Provider");
	return ctx;
};
// src/stores/R2DStore.ts
var EMPTY_LOGS = [];
var useR2DStore = create((set) => ({
	logsByConfigId: {},
	appendLog: (configId, line) => set((state) => ({ logsByConfigId: {
		...state.logsByConfigId,
		[configId]: [...state.logsByConfigId[configId] ?? [], line]
	} })),
	clearLogs: (configId) => set((state) => ({ logsByConfigId: {
		...state.logsByConfigId,
		[configId]: []
	} }))
}));
function useR2DLogs(configId) {
	const $ = (0, import_compiler_runtime.c)(2);
	let t0;
	if ($[0] !== configId) {
		t0 = (state) => state.logsByConfigId[configId] ?? EMPTY_LOGS;
		$[0] = configId;
		$[1] = t0;
	} else t0 = $[1];
	return useR2DStore(t0);
}
// src/hooks/ConfigContext.tsx
var ConfigContext = (0, import_react.createContext)(null);
var useConfigContext = () => {
	const ctx = (0, import_react.useContext)(ConfigContext);
	if (!ctx) throw new Error("useConfigContext must be used within ConfigContext.Provider");
	return ctx;
};
// src/components/form/formButtons/StartButton.tsx
function StartButton() {
	const $ = (0, import_compiler_runtime.c)(21);
	const configID = useConfigContext().configID;
	const rowContext = useRowContext();
	const tabContext = useTabContext();
	const form = useFormContext();
	const serverService = useServerService();
	const repo2DockerService = useRepo2DockerService();
	const clearR2DLogs = useR2DStore(_temp$11);
	const appendR2DLog = useR2DStore(_temp2$2);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = getAuthState();
		$[0] = t0;
	} else t0 = $[0];
	const authState = t0;
	let t1;
	if ($[1] !== configID) {
		t1 = function openStartPage() {
			const startUrl = new URL(`/start/${authState.name}/${configID}`, window.origin);
			window.open(startUrl, "_blank");
		};
		$[1] = configID;
		$[2] = t1;
	} else t1 = $[2];
	const openStartPage = t1;
	let t2;
	if ($[3] !== configID || $[4] !== serverService) {
		t2 = async function startServerWithPayload(user, payload) {
			try {
				if (!await serverService.startNamedServer(user, configID, payload)) console.error("Server start request failed");
			} catch (t3) {
				console.error("Server start request failed:", t3);
			}
		};
		$[3] = configID;
		$[4] = serverService;
		$[5] = t2;
	} else t2 = $[5];
	const startServerWithPayload = t2;
	let t3;
	if ($[6] !== appendR2DLog || $[7] !== clearR2DLogs || $[8] !== configID || $[9] !== form.state.values || $[10] !== openStartPage || $[11] !== repo2DockerService || $[12] !== rowContext || $[13] !== startServerWithPayload || $[14] !== tabContext) {
		t3 = async function handleStartServer() {
			const values = form.state.values;
			const validation = formSchema.safeParse(values);
			if (!validation.success) {
				console.error("Form validation errors:", validation.error.flatten());
				return;
			}
			const collectionType = resolveCollectionTypeFromForm(values.option, values.system);
			if (!collectionType) {
				console.warn(`Skipping collection strategy for unsupported option "${values.option}".`);
				console.log("Current form values:", values);
				return;
			}
			const user_0 = getAuthState().name;
			try {
				openStartPage();
				if (!rowContext.isRowOpen) rowContext.openRow();
				tabContext.setActiveTab("logs");
				if (collectionType === "repo2docker") {
					const payload_0 = collect("repo2docker", values);
					clearR2DLogs(configID);
					appendR2DLog(configID, "Starting Repo2Docker build...");
					repo2DockerService.repo2DockerSSE(payload_0.repo2docker, {
						onProgress: (t5) => {
							const { phase, progress, message } = t5;
							appendR2DLog(configID, `Phase: ${phase} (${progress}%)`);
							if (message) appendR2DLog(configID, message);
						},
						onMessage: (message_0) => {
							appendR2DLog(configID, message_0);
						},
						onReady: (t6) => {
							const { imageName } = t6;
							appendR2DLog(configID, `Repo2Docker build complete${imageName ? `: ${imageName}` : ""}`);
							const repo2DockerPayload = {
								...payload_0,
								repo2docker: {
									...payload_0.repo2docker,
									image: imageName ?? payload_0.repo2docker.image
								}
							};
							startServerWithPayload(user_0, repo2DockerPayload);
						},
						onFailed: () => {
							console.error("Repo2Docker build failed");
							appendR2DLog(configID, "Repo2Docker build failed");
						},
						onTimeout: () => {
							console.error("Repo2Docker build timed out");
							appendR2DLog(configID, "Repo2Docker build timed out");
						},
						onError: (error_1) => {
							console.error("Repo2Docker build error:", error_1);
							appendR2DLog(configID, `Repo2Docker build error: ${String(error_1)}`);
						}
					});
					return;
				}
				const payload_1 = collect(collectionType, values);
				console.log(`Starting server for user ${user_0} with service and config ${configID} and payload:`);
				console.log("Collected payload:", payload_1);
				console.log("collected body", JSON.stringify(payload_1));
				await startServerWithPayload(user_0, payload_1);
			} catch (t4) {
				console.error("Failed to collect server payload:", t4);
			}
		};
		$[6] = appendR2DLog;
		$[7] = clearR2DLogs;
		$[8] = configID;
		$[9] = form.state.values;
		$[10] = openStartPage;
		$[11] = repo2DockerService;
		$[12] = rowContext;
		$[13] = startServerWithPayload;
		$[14] = tabContext;
		$[15] = t3;
	} else t3 = $[15];
	const handleStartServer = t3;
	let t4;
	if ($[16] !== handleStartServer) {
		t4 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "primary",
			disabled: isSubmitting,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleRightIcon, {}),
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleStartServer();
			},
			children: "start"
		});
		$[16] = handleStartServer;
		$[17] = t4;
	} else t4 = $[17];
	let t5;
	if ($[18] !== form.Subscribe || $[19] !== t4) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp3,
			children: t4
		});
		$[18] = form.Subscribe;
		$[19] = t4;
		$[20] = t5;
	} else t5 = $[20];
	return t5;
}
function _temp3(state_1) {
	return state_1.isSubmitting;
}
function _temp2$2(state_0) {
	return state_0.appendLog;
}
function _temp$11(state) {
	return state.clearLogs;
}
// src/components/form/formFields/CheckboxField.tsx
function CheckboxField(t0) {
	const $ = (0, import_compiler_runtime.c)(12);
	const { label } = t0;
	const field = useFieldContext();
	const isDisabled = !!(0, import_react.useContext)(LockContext)?.lockAll;
	let t1;
	if ($[0] !== label) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor: label
		});
		$[0] = label;
		$[1] = t1;
	} else t1 = $[1];
	let t2;
	if ($[2] !== field) {
		t2 = (e) => field.handleChange(e.target.checked);
		$[2] = field;
		$[3] = t2;
	} else t2 = $[3];
	let t3;
	if ($[4] !== field.state.value || $[5] !== isDisabled || $[6] !== label || $[7] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-input__field-wrapper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				className: "text-input__input",
				name: label,
				checked: field.state.value,
				disabled: isDisabled,
				onChange: t2
			})
		});
		$[4] = field.state.value;
		$[5] = isDisabled;
		$[6] = label;
		$[7] = t2;
		$[8] = t3;
	} else t3 = $[8];
	let t4;
	if ($[9] !== t1 || $[10] !== t3) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input",
			children: [t1, t3]
		});
		$[9] = t1;
		$[10] = t3;
		$[11] = t4;
	} else t4 = $[11];
	return t4;
}
// src/components/form/formButtons/UrlButton.tsx
function UrlButton() {
	const $ = (0, import_compiler_runtime.c)(5);
	const form = useFormContext();
	let t0;
	if ($[0] !== form) {
		t0 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			variant: "ghost",
			disabled: isSubmitting,
			iconPosition: "before",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2Icon, {}),
			onClick: (e) => {
				e.preventDefault();
				form.handleSubmit({ submitAction: "url" });
			},
			children: "URL"
		});
		$[0] = form;
		$[1] = t0;
	} else t0 = $[1];
	let t1;
	if ($[2] !== form.Subscribe || $[3] !== t0) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$10,
			children: t0
		});
		$[2] = form.Subscribe;
		$[3] = t0;
		$[4] = t1;
	} else t1 = $[4];
	return t1;
}
function _temp$10(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/ResetButton.tsx
function ResetButton() {
	const $ = (0, import_compiler_runtime.c)(7);
	const form = useFormContext();
	let t0;
	if ($[0] !== form) {
		t0 = (e) => {
			form.handleSubmit({ submitAction: "reset" });
		};
		$[0] = form;
		$[1] = t0;
	} else t0 = $[1];
	const handleReset = t0;
	let t1;
	if ($[2] !== handleReset) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			color: "danger",
			disabled: isSubmitting,
			onClick: handleReset,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResetIcon, {}),
			iconPosition: "before",
			children: "Reset"
		});
		$[2] = handleReset;
		$[3] = t1;
	} else t1 = $[3];
	let t2;
	if ($[4] !== form.Subscribe || $[5] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$9,
			children: t1
		});
		$[4] = form.Subscribe;
		$[5] = t1;
		$[6] = t2;
	} else t2 = $[6];
	return t2;
}
function _temp$9(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/ShareButton.tsx
function ShareButton() {
	const $ = (0, import_compiler_runtime.c)(8);
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== form.state.values || $[1] !== serverService) {
		t0 = () => {
			const values = form.state.values;
			const validation = formSchema.safeParse(values);
			if (!validation.success) {
				console.error("Form validation errors:", validation.error.flatten());
				return;
			}
			const collectionType = resolveCollectionTypeFromForm(values.option, values.system);
			if (!collectionType) {
				console.warn(`Skipping collection strategy for unsupported option "${values.option}".`);
				console.log("Current form values:", values);
				return;
			}
			try {
				const payload = collect(collectionType, values);
				if (!serverService.shareServer(payload)) console.error("Server start request failed");
			} catch (t1) {
				console.error("Failed to collect server payload:", t1);
			}
		};
		$[0] = form.state.values;
		$[1] = serverService;
		$[2] = t0;
	} else t0 = $[2];
	const handleShare = t0;
	let t1;
	if ($[3] !== handleShare) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			variant: "ghost",
			disabled: isSubmitting,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share1Icon, {}),
			iconPosition: "before",
			onClick: handleShare,
			children: "Share"
		});
		$[3] = handleShare;
		$[4] = t1;
	} else t1 = $[4];
	let t2;
	if ($[5] !== form.Subscribe || $[6] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$8,
			children: t1
		});
		$[5] = form.Subscribe;
		$[6] = t1;
		$[7] = t2;
	} else t2 = $[7];
	return t2;
}
function _temp$8(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/RtcButton.tsx
function RtcButton() {
	const $ = (0, import_compiler_runtime.c)(2);
	const form = useFormContext();
	let t0;
	if ($[0] !== form.Subscribe) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$7,
			children: _temp2$1
		});
		$[0] = form.Subscribe;
		$[1] = t0;
	} else t0 = $[1];
	return t0;
}
function _temp2$1(isSubmitting) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "submit",
		variant: "ghost",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonIcon, {}),
		iconPosition: "before",
		disabled: isSubmitting,
		children: "RTC"
	});
}
function _temp$7(state) {
	return state.isSubmitting;
}
// src/components/form/formFields/TextCheckboxField.tsx
function TextCheckboxField(t0) {
	const $ = (0, import_compiler_runtime.c)(19);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning, checked, onCheckboxChange } = t0;
	const required = t1 === void 0 ? false : t1;
	const secret = t2 === void 0 ? false : t2;
	const copy = t3 === void 0 ? false : t3;
	let t4;
	if ($[0] !== onCheckboxChange) {
		t4 = (checked_0) => {
			if (onCheckboxChange) onCheckboxChange(checked_0);
		};
		$[0] = onCheckboxChange;
		$[1] = t4;
	} else t4 = $[1];
	const handleCheckboxChange = t4;
	let t5;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t5 = {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "flex-start",
			gap: 0,
			marginBottom: "0.25rem"
		};
		$[2] = t5;
	} else t5 = $[2];
	let t6;
	if ($[3] !== checked || $[4] !== handleCheckboxChange || $[5] !== label) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor: label,
			hasCheckbox: true,
			checked,
			onCheckboxChange: handleCheckboxChange
		});
		$[3] = checked;
		$[4] = handleCheckboxChange;
		$[5] = label;
		$[6] = t6;
	} else t6 = $[6];
	const t7 = checked ? enabled : false;
	let t8;
	if ($[7] !== copy || $[8] !== label || $[9] !== pattern || $[10] !== placeholder || $[11] !== required || $[12] !== secret || $[13] !== t7 || $[14] !== warning) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			label,
			required,
			enabled: t7,
			placeholder,
			secret,
			copy,
			pattern,
			warning
		});
		$[7] = copy;
		$[8] = label;
		$[9] = pattern;
		$[10] = placeholder;
		$[11] = required;
		$[12] = secret;
		$[13] = t7;
		$[14] = warning;
		$[15] = t8;
	} else t8 = $[15];
	let t9;
	if ($[16] !== t6 || $[17] !== t8) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: t5,
			children: [t6, t8]
		});
		$[16] = t6;
		$[17] = t8;
		$[18] = t9;
	} else t9 = $[18];
	return t9;
}
// src/components/form/formButtons/SaveButton.tsx
function SaveButton() {
	const $ = (0, import_compiler_runtime.c)(9);
	const configID = useConfigContext().configID;
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== configID || $[1] !== form.state.values || $[2] !== serverService) {
		t0 = async function handleSaveServer() {
			const values = form.state.values;
			const validation = formSchema.safeParse(values);
			if (!validation.success) {
				console.error("Form validation errors:", validation.error.flatten());
				return;
			}
			const user = getAuthState().name;
			const collectionType = resolveCollectionTypeFromForm(values.option, values.system);
			if (!collectionType) {
				console.warn(`Skipping collection strategy for unsupported option "${values.option}".`);
				console.log("Current form values:", values);
				return;
			}
			try {
				const payload = collect(collectionType, values);
				if (!await serverService.updateNamedServer(user, configID, payload)) console.error("Server start request failed");
			} catch (t1) {
				console.error("Failed to collect server payload:", t1);
			}
		};
		$[0] = configID;
		$[1] = form.state.values;
		$[2] = serverService;
		$[3] = t0;
	} else t0 = $[3];
	const handleSaveServer = t0;
	let t1;
	if ($[4] !== handleSaveServer) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "success",
			disabled: isSubmitting,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil2Icon, {}),
			iconPosition: "before",
			onClick: (e) => {
				e.preventDefault();
				handleSaveServer();
			},
			children: "Save"
		});
		$[4] = handleSaveServer;
		$[5] = t1;
	} else t1 = $[5];
	let t2;
	if ($[6] !== form.Subscribe || $[7] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$6,
			children: t1
		});
		$[6] = form.Subscribe;
		$[7] = t1;
		$[8] = t2;
	} else t2 = $[8];
	return t2;
}
function _temp$6(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/DeleteButton.tsx
function DeleteButton() {
	const $ = (0, import_compiler_runtime.c)(8);
	const configID = useConfigContext().configID;
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== configID || $[1] !== serverService) {
		t0 = async () => {
			const user = getAuthState().name;
			try {
				if (!await serverService.deleteNamedServer(user, configID)) console.error("Server delete request failed");
			} catch (t1) {
				console.error("Failed to delete server:", t1);
			}
		};
		$[0] = configID;
		$[1] = serverService;
		$[2] = t0;
	} else t0 = $[2];
	const handleDeleteServer = t0;
	let t1;
	if ($[3] !== handleDeleteServer) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "danger",
			disabled: isSubmitting,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {}),
			iconPosition: "before",
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleDeleteServer();
			},
			children: "Delete"
		});
		$[3] = handleDeleteServer;
		$[4] = t1;
	} else t1 = $[4];
	let t2;
	if ($[5] !== form.Subscribe || $[6] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$5,
			children: t1
		});
		$[5] = form.Subscribe;
		$[6] = t1;
		$[7] = t2;
	} else t2 = $[7];
	return t2;
}
function _temp$5(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/CancelButton.tsx
function CancelButton() {
	const $ = (0, import_compiler_runtime.c)(8);
	const configID = useConfigContext().configID;
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== configID || $[1] !== serverService) {
		t0 = async () => {
			const user = getAuthState().name;
			try {
				if (!await serverService.cancelNamedServer(user, configID)) console.error("Server cancel request failed");
			} catch (t1) {
				console.error("Failed to cancel server:", t1);
			}
		};
		$[0] = configID;
		$[1] = serverService;
		$[2] = t0;
	} else t0 = $[2];
	const handleCancelServer = t0;
	let t1;
	if ($[3] !== handleCancelServer) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "danger",
			disabled: isSubmitting,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleCancelServer();
			},
			children: "Cancel"
		});
		$[3] = handleCancelServer;
		$[4] = t1;
	} else t1 = $[4];
	let t2;
	if ($[5] !== form.Subscribe || $[6] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$4,
			children: t1
		});
		$[5] = form.Subscribe;
		$[6] = t1;
		$[7] = t2;
	} else t2 = $[7];
	return t2;
}
function _temp$4(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/OpenButton.tsx
function OpenButton() {
	const $ = (0, import_compiler_runtime.c)(7);
	const configID = useConfigContext().configID;
	const form = useFormContext();
	let t0;
	if ($[0] !== configID) {
		t0 = async () => {
			const user = getAuthState().name;
			const url = new URL([
				"user",
				user,
				configID
			].map(encodeURIComponent).join("/") + "/", window.origin);
			console.log(`Opening server for user ${user} with config ${configID}`);
			console.log(`Opening URL: ${url.toString()}`);
			window.open(url, "_blank");
		};
		$[0] = configID;
		$[1] = t0;
	} else t0 = $[1];
	const handleOpenServer = t0;
	let t1;
	if ($[2] !== handleOpenServer) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "success",
			disabled: isSubmitting,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleOpenServer();
			},
			children: "Open"
		});
		$[2] = handleOpenServer;
		$[3] = t1;
	} else t1 = $[3];
	let t2;
	if ($[4] !== form.Subscribe || $[5] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$3,
			children: t1
		});
		$[4] = form.Subscribe;
		$[5] = t1;
		$[6] = t2;
	} else t2 = $[6];
	return t2;
}
function _temp$3(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/StopButton.tsx
function StopButton() {
	const $ = (0, import_compiler_runtime.c)(8);
	const configID = useConfigContext().configID;
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== configID || $[1] !== serverService) {
		t0 = async () => {
			const user = getAuthState().name;
			try {
				if (!await serverService.stopNamedServer(user, configID)) console.error("Server stop request failed");
			} catch (t1) {
				console.error("Failed to stop server:", t1);
			}
		};
		$[0] = configID;
		$[1] = serverService;
		$[2] = t0;
	} else t0 = $[2];
	const handleStopServer = t0;
	let t1;
	if ($[3] !== handleStopServer) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "danger",
			disabled: isSubmitting,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleStopServer();
			},
			children: "Stop"
		});
		$[3] = handleStopServer;
		$[4] = t1;
	} else t1 = $[4];
	let t2;
	if ($[5] !== form.Subscribe || $[6] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$2,
			children: t1
		});
		$[5] = form.Subscribe;
		$[6] = t1;
		$[7] = t2;
	} else t2 = $[7];
	return t2;
}
function _temp$2(state) {
	return state.isSubmitting;
}
// src/components/form/formButtons/StartNewButton.tsx
function _uuidv4hex() {
	return [
		1e7,
		1e3,
		4e3,
		8e3,
		1e11
	].join("").replace(/[018]/g, (c) => (Number(c) ^ crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16));
}
function _uuidWithLetterStart() {
	const uuid = _uuidv4hex();
	const char = Math.random().toString(36).match(/[a-zA-Z]/)?.[0];
	if (!char) throw new Error("Failed to generate letter");
	return char + uuid.substring(1);
}
function StartNewButton() {
	const $ = (0, import_compiler_runtime.c)(10);
	const rowContext = useRowContext();
	const tabContext = useTabContext();
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== form.state.values || $[1] !== rowContext || $[2] !== serverService || $[3] !== tabContext) {
		t0 = async function handleStartServer() {
			const values = form.state.values;
			const validation = formSchema.safeParse(values);
			if (!validation.success) {
				console.error("Form validation errors:", validation.error.flatten());
				return;
			}
			const user = getAuthState().name;
			const collectionType = resolveCollectionTypeFromForm(values.option, values.system);
			if (!collectionType) {
				console.warn(`Skipping collection strategy for unsupported option "${values.option}".`);
				console.log("Current form values:", values);
				return;
			}
			try {
				const payload = collect(collectionType, values);
				if (!rowContext.isRowOpen) rowContext.openRow();
				tabContext.setActiveTab("logs");
				const newID = _uuidWithLetterStart();
				if (!await serverService.startNamedServer(user, newID, payload)) console.error("Server start request failed");
			} catch (t1) {
				console.error("Failed to collect server payload:", t1);
			}
		};
		$[0] = form.state.values;
		$[1] = rowContext;
		$[2] = serverService;
		$[3] = tabContext;
		$[4] = t0;
	} else t0 = $[4];
	const handleStartServer = t0;
	let t1;
	if ($[5] !== handleStartServer) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			color: "success",
			disabled: isSubmitting,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleRightIcon, {}),
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleStartServer();
			},
			children: "start"
		});
		$[5] = handleStartServer;
		$[6] = t1;
	} else t1 = $[6];
	let t2;
	if ($[7] !== form.Subscribe || $[8] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$1,
			children: t1
		});
		$[7] = form.Subscribe;
		$[8] = t1;
		$[9] = t2;
	} else t2 = $[9];
	return t2;
}
function _temp$1(state) {
	return state.isSubmitting;
}
// src/components/form/formFields/ToggleGroupField.tsx
function ToggleGroupField(t0) {
	const $ = (0, import_compiler_runtime.c)(24);
	const { label, options, hasCheckbox, onCheckboxChange } = t0;
	const field = useFieldContext();
	const [checked, setChecked] = (0, import_react.useState)(field.state.value?.length > 0);
	let t1;
	if ($[0] !== options) {
		t1 = Array.isArray(options) ? options.reduce(_temp, {}) : options;
		$[0] = options;
		$[1] = t1;
	} else t1 = $[1];
	const Options = t1;
	const lockContext = (0, import_react.useContext)(LockContext);
	const isDisabled = !checked || lockContext?.lockAll;
	let t2;
	if ($[2] !== onCheckboxChange) {
		t2 = (value) => {
			setChecked(value);
			onCheckboxChange?.(value);
		};
		$[2] = onCheckboxChange;
		$[3] = t2;
	} else t2 = $[3];
	const handleCheckboxChange = t2;
	let t3;
	if ($[4] !== checked || $[5] !== handleCheckboxChange || $[6] !== hasCheckbox || $[7] !== label) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor: label,
			hasCheckbox,
			checked,
			onCheckboxChange: handleCheckboxChange
		});
		$[4] = checked;
		$[5] = handleCheckboxChange;
		$[6] = hasCheckbox;
		$[7] = label;
		$[8] = t3;
	} else t3 = $[8];
	let t4;
	if ($[9] !== field.state.value) {
		t4 = field.state.value || [];
		$[9] = field.state.value;
		$[10] = t4;
	} else t4 = $[10];
	const t5 = field.handleChange;
	let t6;
	if ($[11] !== Options) {
		t6 = Object.entries(Options).map(_temp2);
		$[11] = Options;
		$[12] = t6;
	} else t6 = $[12];
	let t7;
	if ($[13] !== field.handleChange || $[14] !== isDisabled || $[15] !== t4 || $[16] !== t6) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaViewport, {
			className: "ScrollAreaViewport",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroup, {
				className: "toggleGroupField__options",
				type: "multiple",
				disabled: isDisabled,
				value: t4,
				onValueChange: t5,
				children: t6
			})
		});
		$[13] = field.handleChange;
		$[14] = isDisabled;
		$[15] = t4;
		$[16] = t6;
		$[17] = t7;
	} else t7 = $[17];
	let t8;
	if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
			className: "ScrollAreaScrollbar",
			orientation: "vertical",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "ScrollAreaThumb" })
		});
		$[18] = t8;
	} else t8 = $[18];
	let t9;
	if ($[19] !== t7) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
			className: "ScrollAreaRoot",
			children: [t7, t8]
		});
		$[19] = t7;
		$[20] = t9;
	} else t9 = $[20];
	let t10;
	if ($[21] !== t3 || $[22] !== t9) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toggleGroupField",
			children: [t3, t9]
		});
		$[21] = t3;
		$[22] = t9;
		$[23] = t10;
	} else t10 = $[23];
	return t10;
}
function _temp2(t0) {
	const [key, value_0] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
		className: "toggleGroupField__option",
		value: key,
		children: value_0
	}, key);
}
function _temp(acc, curr) {
	acc[curr] = curr;
	return acc;
}
// src/components/form/formFields/InputField.tsx
function InputField(t0) {
	const $ = (0, import_compiler_runtime.c)(15);
	const { label, htmlFor, children, checkbox, labelOptions, className: t1 } = t0;
	const className = t1 === void 0 ? "text-input" : t1;
	const t2 = checkbox !== void 0;
	const t3 = checkbox?.checked;
	const t4 = checkbox?.onChange;
	const t5 = checkbox?.id;
	const t6 = checkbox?.name;
	const t7 = checkbox?.disabled;
	const t8 = checkbox?.ariaLabel ?? `${label} enabled`;
	let t9;
	if ($[0] !== htmlFor || $[1] !== label || $[2] !== labelOptions || $[3] !== t2 || $[4] !== t3 || $[5] !== t4 || $[6] !== t5 || $[7] !== t6 || $[8] !== t7 || $[9] !== t8) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor,
			labelOptions,
			hasCheckbox: t2,
			checked: t3,
			onCheckboxChange: t4,
			checkboxId: t5,
			checkboxName: t6,
			checkboxDisabled: t7,
			checkboxAriaLabel: t8
		});
		$[0] = htmlFor;
		$[1] = label;
		$[2] = labelOptions;
		$[3] = t2;
		$[4] = t3;
		$[5] = t4;
		$[6] = t5;
		$[7] = t6;
		$[8] = t7;
		$[9] = t8;
		$[10] = t9;
	} else t9 = $[10];
	let t10;
	if ($[11] !== children || $[12] !== className || $[13] !== t9) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className,
			children: [t9, children]
		});
		$[11] = children;
		$[12] = className;
		$[13] = t9;
		$[14] = t10;
	} else t10 = $[14];
	return t10;
}
// src/components/form/formFields/SmallEnvAdder.tsx
function EnvAdder(t0) {
	const $ = (0, import_compiler_runtime.c)(52);
	const { label, hasCheckbox, onCheckboxChange } = t0;
	const field = useFieldContext();
	let t1;
	if ($[0] !== field.state.value) {
		t1 = field.state.value ?? {};
		$[0] = field.state.value;
		$[1] = t1;
	} else t1 = $[1];
	const envVariables = t1;
	let t2;
	if ($[2] !== envVariables) {
		t2 = Object.keys(envVariables);
		$[2] = envVariables;
		$[3] = t2;
	} else t2 = $[3];
	const [checked, setChecked] = (0, import_react.useState)(t2.length > 0);
	const [newEnv, setNewEnv] = (0, import_react.useState)("");
	const lockContext = (0, import_react.useContext)(LockContext);
	const isDisabled = Boolean(lockContext?.lockAll || hasCheckbox && !checked);
	let t3;
	if ($[4] !== onCheckboxChange) {
		t3 = (value) => {
			setChecked(value);
			onCheckboxChange?.(value);
		};
		$[4] = onCheckboxChange;
		$[5] = t3;
	} else t3 = $[5];
	const handleCheckboxChange = t3;
	let t4;
	if ($[6] !== envVariables || $[7] !== field || $[8] !== newEnv) {
		t4 = () => {
			const separatorIndex = newEnv.indexOf("=");
			if (separatorIndex <= 0) return;
			const name = newEnv.slice(0, separatorIndex).trim();
			const value_0 = newEnv.slice(separatorIndex + 1);
			if (!name) return;
			field.handleChange({
				...envVariables,
				[name]: value_0
			});
			setNewEnv("");
		};
		$[6] = envVariables;
		$[7] = field;
		$[8] = newEnv;
		$[9] = t4;
	} else t4 = $[9];
	const handleAddEnv = t4;
	let t5;
	if ($[10] !== envVariables || $[11] !== field) {
		t5 = (env) => {
			const updatedEnvs = { ...envVariables };
			delete updatedEnvs[env];
			field.handleChange(updatedEnvs);
		};
		$[10] = envVariables;
		$[11] = field;
		$[12] = t5;
	} else t5 = $[12];
	const handleRemoveEnv = t5;
	let t6;
	if ($[13] !== envVariables || $[14] !== field) {
		t6 = (previousName, rawEnv) => {
			const separatorIndex_0 = rawEnv.indexOf("=");
			if (separatorIndex_0 <= 0) return;
			const name_0 = rawEnv.slice(0, separatorIndex_0).trim();
			if (!name_0) return;
			const updatedEnvs_0 = { ...envVariables };
			delete updatedEnvs_0[previousName];
			updatedEnvs_0[name_0] = rawEnv.slice(separatorIndex_0 + 1);
			field.handleChange(updatedEnvs_0);
		};
		$[13] = envVariables;
		$[14] = field;
		$[15] = t6;
	} else t6 = $[15];
	const handleUpdateEnv = t6;
	let t7;
	if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
		t7 = {
			display: "flex",
			alignItems: "flex-start",
			width: "100%"
		};
		$[16] = t7;
	} else t7 = $[16];
	let t8;
	if ($[17] !== checked || $[18] !== handleCheckboxChange || $[19] !== hasCheckbox || $[20] !== label) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField, {
			label,
			htmlFor: label,
			hasCheckbox,
			checked,
			onCheckboxChange: handleCheckboxChange
		});
		$[17] = checked;
		$[18] = handleCheckboxChange;
		$[19] = hasCheckbox;
		$[20] = label;
		$[21] = t8;
	} else t8 = $[21];
	let t10;
	let t9;
	if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
		t9 = { flex: 1 };
		t10 = {
			display: "flex",
			alignItems: "center",
			gap: "0.5rem"
		};
		$[22] = t10;
		$[23] = t9;
	} else {
		t10 = $[22];
		t9 = $[23];
	}
	let t11;
	if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
		t11 = (event) => setNewEnv(event.target.value);
		$[24] = t11;
	} else t11 = $[24];
	let t12;
	if ($[25] !== isDisabled || $[26] !== newEnv) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "text",
			className: "env-variables-entry__input",
			value: newEnv,
			onChange: t11,
			placeholder: "EnvName=EnvValue",
			disabled: isDisabled,
			"aria-label": "New environment variable"
		});
		$[25] = isDisabled;
		$[26] = newEnv;
		$[27] = t12;
	} else t12 = $[27];
	let t13;
	if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
		t13 = {
			backgroundColor: "#0d6efd",
			height: "2rem",
			margin: 0
		};
		$[28] = t13;
	} else t13 = $[28];
	let t14;
	if ($[29] !== isDisabled || $[30] !== newEnv) {
		t14 = isDisabled || !newEnv.includes("=");
		$[29] = isDisabled;
		$[30] = newEnv;
		$[31] = t14;
	} else t14 = $[31];
	let t15;
	if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {});
		$[32] = t15;
	} else t15 = $[32];
	let t16;
	if ($[33] !== handleAddEnv || $[34] !== t14) {
		t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "env-variables-entry__add-btn",
			style: t13,
			onClick: handleAddEnv,
			disabled: t14,
			"aria-label": "Add environment variable",
			children: t15
		});
		$[33] = handleAddEnv;
		$[34] = t14;
		$[35] = t16;
	} else t16 = $[35];
	let t17;
	if ($[36] !== t12 || $[37] !== t16) {
		t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: t10,
			children: [t12, t16]
		});
		$[36] = t12;
		$[37] = t16;
		$[38] = t17;
	} else t17 = $[38];
	let t18;
	if ($[39] !== envVariables) {
		t18 = Object.entries(envVariables);
		$[39] = envVariables;
		$[40] = t18;
	} else t18 = $[40];
	let t19;
	if ($[41] !== handleRemoveEnv || $[42] !== handleUpdateEnv || $[43] !== isDisabled || $[44] !== t18) {
		t19 = t18.map((t20, index) => {
			const [key, value_1] = t20;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "0.5rem",
					marginTop: "0.5rem"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					className: "env-variables-entry__input",
					value: `${key}=${value_1}`,
					onChange: (event_0) => handleUpdateEnv(key, event_0.target.value),
					disabled: isDisabled,
					"aria-label": `Environment variable ${key}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "env-variables-entry__remove-btn",
					style: {
						height: "2rem",
						flexShrink: 0
					},
					onClick: () => handleRemoveEnv(key),
					disabled: isDisabled,
					"aria-label": `Remove environment variable ${key}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {})
				})]
			}, index);
		});
		$[41] = handleRemoveEnv;
		$[42] = handleUpdateEnv;
		$[43] = isDisabled;
		$[44] = t18;
		$[45] = t19;
	} else t19 = $[45];
	let t20;
	if ($[46] !== t17 || $[47] !== t19) {
		t20 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "env-variables-entry",
			style: t9,
			children: [t17, t19]
		});
		$[46] = t17;
		$[47] = t19;
		$[48] = t20;
	} else t20 = $[48];
	let t21;
	if ($[49] !== t20 || $[50] !== t8) {
		t21 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: t7,
			children: [t8, t20]
		});
		$[49] = t20;
		$[50] = t8;
		$[51] = t21;
	} else t21 = $[51];
	return t21;
}
// src/hooks/formContext.tsx
var { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();
var { useAppForm, withForm, withFieldGroup } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		text: TextField,
		textarea: TextArea,
		select: SelectField,
		resource: ResourceField,
		checkbox: CheckboxField,
		textCheckbox: TextCheckboxField,
		toggle: ToggleGroupField,
		inputField: InputField,
		envAdder: EnvAdder
	},
	formComponents: {
		share: ShareButton,
		rtc: RtcButton,
		url: UrlButton,
		startNew: StartNewButton,
		start: StartButton,
		save: SaveButton,
		resetButton: ResetButton,
		delete: DeleteButton,
		cancel: CancelButton,
		open: OpenButton,
		stop: StopButton
	}
});
// src/utils/APIUtils.ts
function buildHumanReadableQuery(payload) {
	const params = new URLSearchParams();
	function addValue(key, value) {
		if (value === void 0 || value === null) return;
		if (Array.isArray(value)) value.forEach((v) => addValue(key, v));
		else if (typeof value === "object") Object.entries(value).forEach(([k, v]) => {
			addValue(`${key}.${k}`, v);
		});
		else params.append(key, String(value));
	}
	Object.entries(payload).forEach(([key, value]) => {
		if (Array.isArray(value) && value.length === 0) return;
		if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return;
		addValue(key, value);
	});
	return params.toString();
}
// src/components/LogoutDialog/LogoutDialog.tsx
var LogoutDialog = () => {
	const $ = (0, import_compiler_runtime.c)(28);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [stopJupyterLabs, setStopJupyterLabs] = (0, import_react.useState)(true);
	const [logoutAllDevices, setLogoutAllDevices] = (0, import_react.useState)(true);
	let t0;
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = () => {
			const handler = () => setOpen(true);
			window.addEventListener("open-logout-dialog", handler);
			return () => window.removeEventListener("open-logout-dialog", handler);
		};
		t1 = [];
		$[0] = t0;
		$[1] = t1;
	} else {
		t0 = $[0];
		t1 = $[1];
	}
	(0, import_react.useEffect)(t0, t1);
	let t2;
	if ($[2] !== logoutAllDevices || $[3] !== stopJupyterLabs) {
		t2 = () => {
			const params = [stopJupyterLabs ? "stopall=true" : "", logoutAllDevices ? "alldevices=true" : ""].filter(Boolean).join("&");
			const logoutUrl = `/hub/logout${params ? `?${params}` : ""}`;
			window.location.replace(logoutUrl);
			setOpen(false);
		};
		$[2] = logoutAllDevices;
		$[3] = stopJupyterLabs;
		$[4] = t2;
	} else t2 = $[4];
	const handleLogout = t2;
	let t3;
	if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, { className: "logout-overlay" });
		$[5] = t3;
	} else t3 = $[5];
	let t4;
	let t5;
	if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
			className: "logout-title",
			children: "Logout"
		});
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
			className: "logout-description",
			children: "Jupyter-JSC Logout."
		});
		$[6] = t4;
		$[7] = t5;
	} else {
		t4 = $[6];
		t5 = $[7];
	}
	let t6;
	if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
		t6 = (e) => setStopJupyterLabs(e.target.checked);
		$[8] = t6;
	} else t6 = $[8];
	let t7;
	if ($[9] !== stopJupyterLabs) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "logout-checkbox-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: stopJupyterLabs,
				onChange: t6
			}), "Stop all running JupyterLabs."]
		});
		$[9] = stopJupyterLabs;
		$[10] = t7;
	} else t7 = $[10];
	let t8;
	if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
		t8 = (e_0) => setLogoutAllDevices(e_0.target.checked);
		$[11] = t8;
	} else t8 = $[11];
	let t9;
	if ($[12] !== logoutAllDevices) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "logout-checkbox-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: logoutAllDevices,
				onChange: t8
			}), "Logout from all devices."]
		});
		$[12] = logoutAllDevices;
		$[13] = t9;
	} else t9 = $[13];
	let t10;
	if ($[14] !== t7 || $[15] !== t9) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "logout-checkboxes",
			children: [t7, t9]
		});
		$[14] = t7;
		$[15] = t9;
		$[16] = t10;
	} else t10 = $[16];
	let t11;
	if ($[17] !== handleLogout) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "logout-btn-confirm",
				onClick: handleLogout,
				children: "LOGOUT"
			})
		});
		$[17] = handleLogout;
		$[18] = t11;
	} else t11 = $[18];
	let t12;
	if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "logout-btn-cancel",
				children: "CANCEL"
			})
		});
		$[19] = t12;
	} else t12 = $[19];
	let t13;
	if ($[20] !== t11) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "logout-actions",
			children: [t11, t12]
		});
		$[20] = t11;
		$[21] = t13;
	} else t13 = $[21];
	let t14;
	if ($[22] !== t10 || $[23] !== t13) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [t3, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
			className: "logout-content",
			children: [
				t4,
				t5,
				t10,
				t13
			]
		})] });
		$[22] = t10;
		$[23] = t13;
		$[24] = t14;
	} else t14 = $[24];
	let t15;
	if ($[25] !== open || $[26] !== t14) {
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open,
			onOpenChange: setOpen,
			children: t14
		});
		$[25] = open;
		$[26] = t14;
		$[27] = t15;
	} else t15 = $[27];
	return t15;
};
// src/hooks/WorkshopContext.tsx
var WorkshopContext = (0, import_react.createContext)(null);
export { SelectContent as $, getTransformedUserOption as A, envVariableSchema as B, homeTriggerSystem as C, kubeSystems as D, kubeOutpostFlavors as E, formSchema as F, boolean as G, repo2dockerSchema as H, REPOPATHTYPE as I, optional as J, int as K, REPOTYPE as L, TemplateOptions as M, VendorOptions as N, getBackendServices as O, defaultFormValues as P, Select as Q, baseCustomSchema as R, homeTriggerReservation as S, getPartitionAndInteractivePartition as T, resourcesSchema as U, modulesSchema as V, array as W, string as X, record as Y, getFrontendConfig as Z, homeTriggerAccount as _, withForm as a, SelectScrollDownButton as at, homeTriggerPartition as b, useR2DLogs as c, SelectValue as ct, collect as d, Collapsible as dt, SelectIcon as et, resolveCollectionTypeFromForm as f, CollapsibleContent as ft, getModuleValues as g, useSelector as h, useAppForm as i, SelectPortal as it, getUserOptions as j, getSystemConfig as k, RowContext as l, SelectViewport as lt, useLockContext as m, LogoutDialog as n, SelectItemIndicator as nt, ConfigContext as o, SelectScrollUpButton as ot, LockContext as p, CollapsibleTrigger as pt, object as q, buildHumanReadableQuery as r, SelectItemText as rt, useConfigContext as s, SelectTrigger as st, WorkshopContext as t, SelectItem as tt, TabContext as u, Label as ut, homeTriggerFlavor as v, fillMappingDict as w, homeTriggerProject as x, homeTriggerOption as y, baseHpcSchema as z };

//# sourceMappingURL=WorkshopContext-CDvHrYY5.js.map