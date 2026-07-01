import { a as require_react, i as require_react_dom, n as require_compiler_runtime, o as __commonJSMin, r as require_client, s as __toESM, t as require_jsx_runtime } from "./chunks/jsx-runtime-Br9Np9gf.js";
import { A as createSlot, C as useLayoutEffect2, D as createContextScope, E as createContext2, N as useComposedRefs, O as Primitive, S as useControllableState, T as createCollection, _ as DismissableLayer, a as createRovingFocusGroupScope, b as useId, c as Content$3, d as useSize, f as hideOthers, g as FocusScope, h as Portal, i as Root$5, j as createSlottable, l as Root2$3, m as useFocusGuards, n as getAuthState, o as Anchor, p as Combination_default, r as Item$1, s as Arrow, t as Button_default, u as createPopperScope, v as useCallbackRef, w as composeEventHandlers, x as Presence, y as useDirection } from "./chunks/main-DSkI5uU_.js";
var import_client = require_client();
var import_compiler_runtime$31 = require_compiler_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var FilterBlock = () => {
	const $ = (0, import_compiler_runtime$31.c)(1);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "filter-block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Filter Block" })
		});
		$[0] = t0;
	} else t0 = $[0];
	return t0;
};
var FilterBlock_default = FilterBlock;
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
var NAME$1 = "VisuallyHidden";
var VisuallyHidden = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...props,
		ref: forwardedRef,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		}
	});
});
VisuallyHidden.displayName = NAME$1;
var Root$4 = VisuallyHidden;
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = import_react.forwardRef((props, forwardedRef) => {
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
			"data-state": getState$2(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$6 = "CollapsibleTrigger";
var CollapsibleTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$6, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.contentId,
		"aria-expanded": context.open || false,
		"data-state": getState$2(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
CollapsibleTrigger.displayName = TRIGGER_NAME$6;
var CONTENT_NAME$5 = "CollapsibleContent";
var CollapsibleContent = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$5, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
});
CollapsibleContent.displayName = CONTENT_NAME$5;
var CollapsibleContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$5, __scopeCollapsible);
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
		"data-state": getState$2(context.open),
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
});
function getState$2(open) {
	return open ? "open" : "closed";
}
var Root$3 = Collapsible;
var Trigger$4 = CollapsibleTrigger;
var Content$2 = CollapsibleContent;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$5 = "DialogTrigger";
var DialogTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...triggerProps } = props;
	const context = useDialogContext(TRIGGER_NAME$5, __scopeDialog);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.contentId,
		"data-state": getState$1(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME$5;
var PORTAL_NAME$3 = "DialogPortal";
var [PortalProvider$1, usePortalContext$1] = createDialogContext(PORTAL_NAME$3, { forceMount: void 0 });
var DialogPortal = (props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME$3, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$1, {
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
};
DialogPortal.displayName = PORTAL_NAME$3;
var OVERLAY_NAME$1 = "DialogOverlay";
var DialogOverlay = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext$1(OVERLAY_NAME$1, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME$1, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME$1;
var Slot$1 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
		as: Slot$1,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$1(context.open),
			...overlayProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
});
var CONTENT_NAME$4 = "DialogContent";
var DialogContent = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext$1(CONTENT_NAME$4, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$4, props.__scopeDialog);
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
});
DialogContent.displayName = CONTENT_NAME$4;
var DialogContentModal = import_react.forwardRef((props, forwardedRef) => {
	const context = useDialogContext(CONTENT_NAME$4, props.__scopeDialog);
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
		disableOutsidePointerEvents: true,
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
});
var DialogContentNonModal = import_react.forwardRef((props, forwardedRef) => {
	const context = useDialogContext(CONTENT_NAME$4, props.__scopeDialog);
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
});
var DialogContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$4, __scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionId,
			"aria-labelledby": context.titleId,
			"data-state": getState$1(context.open),
			...contentProps,
			ref: composedRefs,
			onDismiss: () => context.onOpenChange(false)
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleWarning, { titleId: context.titleId }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning$1, {
		contentRef,
		descriptionId: context.descriptionId
	})] })] });
});
var TITLE_NAME$1 = "DialogTitle";
var DialogTitle = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
});
DialogTitle.displayName = TITLE_NAME$1;
var DESCRIPTION_NAME$1 = "DialogDescription";
var DialogDescription = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
});
DialogDescription.displayName = DESCRIPTION_NAME$1;
var CLOSE_NAME = "DialogClose";
var DialogClose = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState$1(open) {
	return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME$4,
	titleName: TITLE_NAME$1,
	docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
	const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
	const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
	import_react.useEffect(() => {
		if (titleId) {
			if (!document.getElementById(titleId)) console.error(MESSAGE);
		}
	}, [MESSAGE, titleId]);
	return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning$1 = ({ contentRef, descriptionId }) => {
	const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	import_react.useEffect(() => {
		const describedById = contentRef.current?.getAttribute("aria-describedby");
		if (descriptionId && describedById) {
			if (!document.getElementById(descriptionId)) console.warn(MESSAGE);
		}
	}, [
		MESSAGE,
		contentRef,
		descriptionId
	]);
	return null;
};
var Root$2 = Dialog;
var Trigger$3 = DialogTrigger;
var Portal$3 = DialogPortal;
var Overlay = DialogOverlay;
var Content$1 = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [createDialogScope]);
var useDialogScope = createDialogScope();
var AlertDialog = (props) => {
	const { __scopeAlertDialog, ...alertDialogProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
		...dialogScope,
		...alertDialogProps,
		modal: true
	});
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME$4 = "AlertDialogTrigger";
var AlertDialogTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...triggerProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$3, {
		...dialogScope,
		...triggerProps,
		ref: forwardedRef
	});
});
AlertDialogTrigger.displayName = TRIGGER_NAME$4;
var PORTAL_NAME$2 = "AlertDialogPortal";
var AlertDialogPortal = (props) => {
	const { __scopeAlertDialog, ...portalProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$3, {
		...dialogScope,
		...portalProps
	});
};
AlertDialogPortal.displayName = PORTAL_NAME$2;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...overlayProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		...dialogScope,
		...overlayProps,
		ref: forwardedRef
	});
});
AlertDialogOverlay.displayName = OVERLAY_NAME;
var CONTENT_NAME$3 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME$3);
var Slottable$1 = createSlottable("AlertDialogContent");
var AlertDialogContent = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, children, ...contentProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const cancelRef = import_react.useRef(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningProvider, {
		contentName: CONTENT_NAME$3,
		titleName: TITLE_NAME,
		docsSlug: "alert-dialog",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
			scope: __scopeAlertDialog,
			cancelRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content$1, {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable$1, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, { contentRef })]
			})
		})
	});
});
AlertDialogContent.displayName = CONTENT_NAME$3;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...titleProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
		...dialogScope,
		...titleProps,
		ref: forwardedRef
	});
});
AlertDialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...descriptionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
		...dialogScope,
		...descriptionProps,
		ref: forwardedRef
	});
});
AlertDialogDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...actionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
		...dialogScope,
		...actionProps,
		ref: forwardedRef
	});
});
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...cancelProps } = props;
	const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const ref = useComposedRefs(forwardedRef, cancelRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
		...dialogScope,
		...cancelProps,
		ref
	});
});
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
	const MESSAGE = `\`${CONTENT_NAME$3}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME$3}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME$3}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
	import_react.useEffect(() => {
		if (!document.getElementById(contentRef.current?.getAttribute("aria-describedby"))) console.warn(MESSAGE);
	}, [MESSAGE, contentRef]);
	return null;
};
var Root2$2 = AlertDialog;
var Portal2 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content2$2 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;
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
	var React$11 = require_react();
	function is$1(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs$1 = "function" === typeof Object.is ? Object.is : is$1, useState$14 = React$11.useState, useEffect$7 = React$11.useEffect, useLayoutEffect$1 = React$11.useLayoutEffect, useDebugValue$1 = React$11.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState$14({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect$1(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect$7(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue$1(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs$1(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React$11.useSyncExternalStore ? React$11.useSyncExternalStore : shim$1;
}));
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required: required$2, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		required: required$2,
		defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
var TRIGGER_NAME$3 = "CheckboxTrigger";
var CheckboxTrigger = import_react.forwardRef(({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
	const { control, value, disabled, checked, required: required$2, setControl, setChecked, hasConsumerStoppedPropagationRef, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME$3, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = () => setChecked(initialCheckedStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
		"aria-required": required$2,
		"data-state": getState(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
});
CheckboxTrigger.displayName = TRIGGER_NAME$3;
var Checkbox = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCheckbox, name, checked, defaultChecked, required: required$2, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required: required$2,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
});
Checkbox.displayName = CHECKBOX_NAME;
var INDICATOR_NAME$1 = "CheckboxIndicator";
var CheckboxIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME$1, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
});
CheckboxIndicator.displayName = INDICATOR_NAME$1;
var BUBBLE_INPUT_NAME$1 = "CheckboxBubbleInput";
var CheckboxBubbleInput = import_react.forwardRef(({ __scopeCheckbox, ...props }, forwardedRef) => {
	const { control, hasConsumerStoppedPropagationRef, checked, defaultChecked, required: required$2, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME$1, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const prevChecked = usePrevious(checked);
	const controlSize = useSize(control);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const bubbles = !hasConsumerStoppedPropagationRef.current;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate(checked);
			setChecked.call(input, isIndeterminate(checked) ? false : checked);
			input.dispatchEvent(event);
		}
	}, [
		bubbleInput,
		prevChecked,
		checked,
		hasConsumerStoppedPropagationRef
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required: required$2,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME$1;
function isFunction(value) {
	return typeof value === "function";
}
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var NAME = "Label";
var Label$1 = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.label, {
		...props,
		ref: forwardedRef,
		onMouseDown: (event) => {
			if (event.target.closest("button, input, select, textarea")) return;
			props.onMouseDown?.(event);
			if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		}
	});
});
Label$1.displayName = NAME;
var Root$1 = Label$1;
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
	if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
	const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
	if (valueProp !== null && !isValidValueNumber(valueProp, max)) console.error(getInvalidValueError(`${valueProp}`, "Progress"));
	const value = isValidValueNumber(valueProp, max) ? valueProp : null;
	const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
		scope: __scopeProgress,
		value,
		max,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"aria-valuemax": max,
			"aria-valuemin": 0,
			"aria-valuenow": isNumber(value) ? value : void 0,
			"aria-valuetext": valueLabel,
			role: "progressbar",
			"data-state": getProgressState(value, max),
			"data-value": value ?? void 0,
			"data-max": max,
			...progressProps,
			ref: forwardedRef
		})
	});
});
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeProgress, ...indicatorProps } = props;
	const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getProgressState(context.value, context.max),
		"data-value": context.value ?? void 0,
		"data-max": context.max,
		...indicatorProps,
		ref: forwardedRef
	});
});
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
	return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
	return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
	return typeof value === "number";
}
function isValidMaxNumber(max) {
	return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
	return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
	return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
	return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress;
var Indicator = ProgressIndicator;
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
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
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props) => {
	const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required: required$2, form } = props;
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
	const isFormControl = trigger ? form || !!trigger.closest("form") : true;
	const [nativeOptionsSet, setNativeOptionsSet] = import_react.useState(/* @__PURE__ */ new Set());
	const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$3, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectProvider, {
			required: required$2,
			scope: __scopeSelect,
			trigger,
			onTriggerChange: setTrigger,
			valueNode,
			onValueNodeChange: setValueNode,
			valueNodeHasChildren,
			onValueNodeHasChildrenChange: setValueNodeHasChildren,
			contentId: useId(),
			value,
			onValueChange: setValue,
			open,
			onOpenChange: setOpen,
			dir: direction,
			triggerPointerDownPosRef,
			disabled,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
				scope: __scopeSelect,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
					scope: props.__scopeSelect,
					onNativeOptionAdd: import_react.useCallback((option) => {
						setNativeOptionsSet((prev) => new Set(prev).add(option));
					}, []),
					onNativeOptionRemove: import_react.useCallback((option) => {
						setNativeOptionsSet((prev) => {
							const optionsSet = new Set(prev);
							optionsSet.delete(option);
							return optionsSet;
						});
					}, []),
					children
				})
			}), isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectBubbleInput, {
				"aria-hidden": true,
				required: required$2,
				tabIndex: -1,
				name,
				autoComplete,
				value,
				onChange: (event) => setValue(event.target.value),
				disabled,
				form,
				children: [value === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }) : null, Array.from(nativeOptionsSet)]
			}, nativeSelectKey) : null]
		})
	});
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME$2 = "SelectTrigger";
var SelectTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, disabled = false, ...triggerProps } = props;
	const popperScope = usePopperScope$1(__scopeSelect);
	const context = useSelectContext(TRIGGER_NAME$2, __scopeSelect);
	const isDisabled = context.disabled || disabled;
	const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
	const getItems = useCollection(__scopeSelect);
	const pointerTypeRef = import_react.useRef("touch");
	const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.value === context.value));
		if (nextItem !== void 0) context.onValueChange(nextItem.value);
	});
	const handleOpen = (pointerEvent) => {
		if (!isDisabled) {
			context.onOpenChange(true);
			resetTypeahead();
		}
		if (pointerEvent) context.triggerPointerDownPosRef.current = {
			x: Math.round(pointerEvent.pageX),
			y: Math.round(pointerEvent.pageY)
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": context.contentId,
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
				if (!(event.ctrlKey || event.altKey || event.metaKey) && event.key.length === 1) handleTypeaheadSearch(event.key);
				if (isTypingAhead && event.key === " ") return;
				if (OPEN_KEYS.includes(event.key)) {
					handleOpen();
					event.preventDefault();
				}
			})
		})
	});
});
SelectTrigger.displayName = TRIGGER_NAME$2;
var VALUE_NAME = "SelectValue";
var SelectValue = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
	const context = useSelectContext(VALUE_NAME, __scopeSelect);
	const { onValueNodeHasChildrenChange } = context;
	const hasChildren = children !== void 0;
	const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
	useLayoutEffect2(() => {
		onValueNodeHasChildrenChange(hasChildren);
	}, [onValueNodeHasChildrenChange, hasChildren]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...valueProps,
		ref: composedRefs,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: placeholder }) : children
	});
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, children, ...iconProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...iconProps,
		ref: forwardedRef,
		children: children || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME$1 = "SelectPortal";
var SelectPortal = (props) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		asChild: true,
		...props
	});
};
SelectPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$2 = "SelectContent";
var SelectContent = import_react.forwardRef((props, forwardedRef) => {
	const context = useSelectContext(CONTENT_NAME$2, props.__scopeSelect);
	const [fragment, setFragment] = import_react.useState();
	useLayoutEffect2(() => {
		setFragment(new DocumentFragment());
	}, []);
	if (!context.open) {
		const frag = fragment;
		return frag ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
			scope: props.__scopeSelect,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: props.__scopeSelect,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: props.children })
			})
		}), frag) : null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentImpl, {
		...props,
		ref: forwardedRef
	});
});
SelectContent.displayName = CONTENT_NAME$2;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$2);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot = createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, position = "item-aligned", onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME$2, __scopeSelect);
	const [content, setContent] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
	const [selectedItem, setSelectedItem] = import_react.useState(null);
	const [selectedItemText, setSelectedItemText] = import_react.useState(null);
	const getItems = useCollection(__scopeSelect);
	const [isPositioned, setIsPositioned] = import_react.useState(false);
	const firstValidItemFoundRef = import_react.useRef(false);
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
			const handlePointerMove = (event) => {
				pointerMoveDelta = {
					x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
					y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
				};
			};
			const handlePointerUp = (event) => {
				if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
				else if (!content.contains(event.target)) onOpenChange(false);
				document.removeEventListener("pointermove", handlePointerMove);
				triggerPointerDownPosRef.current = null;
			};
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
		const close = () => onOpenChange(false);
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
		if (nextItem) setTimeout(() => nextItem.ref.current.focus());
	});
	const itemRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) {
			setSelectedItem(node);
			if (isFirstValidItem) firstValidItemFoundRef.current = true;
		}
	}, [context.value]);
	const handleItemLeave = import_react.useCallback(() => content?.focus(), [content]);
	const itemTextRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) setSelectedItemText(node);
	}, [context.value]);
	const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
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
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, onPlaced, ...popperProps } = props;
	const context = useSelectContext(CONTENT_NAME$2, __scopeSelect);
	const contentContext = useSelectContentContext(CONTENT_NAME$2, __scopeSelect);
	const [contentWrapper, setContentWrapper] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
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
			if (context.dir !== "rtl") {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportProvider, {
		scope: __scopeSelect,
		contentWrapper,
		shouldExpandOnScrollRef,
		onScrollButtonChange: import_react.useCallback((node) => {
			if (node && shouldRepositionRef.current === true) {
				position();
				focusSelectedItem?.();
				shouldRepositionRef.current = false;
			}
		}, [position, focusSelectedItem]),
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
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
	const popperScope = usePopperScope$1(__scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content$3, {
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
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$2, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = import_react.forwardRef((props, forwardedRef) => {
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
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = import_react.forwardRef((props, forwardedRef) => {
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
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, ...labelProps } = props;
	const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		id: groupContext.id,
		...labelProps,
		ref: forwardedRef
	});
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
	const context = useSelectContext(ITEM_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
	const isSelected = context.value === value;
	const [textValue, setTextValue] = import_react.useState(textValueProp ?? "");
	const [isFocused, setIsFocused] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, (node) => contentContext.itemRefCallback?.(node, value, disabled));
	const textId = useId();
	const pointerTypeRef = import_react.useRef("touch");
	const handleSelect = () => {
		if (!disabled) {
			context.onValueChange(value);
			context.onOpenChange(false);
		}
	};
	if (value === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
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
				onClick: composeEventHandlers(itemProps.onClick, () => {
					if (pointerTypeRef.current !== "mouse") handleSelect();
				}),
				onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
					if (pointerTypeRef.current === "mouse") handleSelect();
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
					if (contentContext.searchRef?.current !== "" && event.key === " ") return;
					if (SELECTION_KEYS.includes(event.key)) handleSelect();
					if (event.key === " ") event.preventDefault();
				})
			})
		})
	});
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, className, style, ...itemTextProps } = props;
	const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
	const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
	const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
	const [itemTextNode, setItemTextNode] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setItemTextNode(node), itemContext.onItemTextChange, (node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
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
	}), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? import_react_dom.createPortal(itemTextProps.children, context.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, ...itemIndicatorProps } = props;
	return useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect).isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...itemIndicatorProps,
		ref: forwardedRef
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = import_react.forwardRef((props, forwardedRef) => {
	const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const [canScrollUp, setCanScrollUp] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				setCanScrollUp(viewport.scrollTop > 0);
			};
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
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = import_react.forwardRef((props, forwardedRef) => {
	const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const [canScrollDown, setCanScrollDown] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				const maxScroll = viewport.scrollHeight - viewport.clientHeight;
				setCanScrollDown(Math.ceil(viewport.scrollTop) < maxScroll);
			};
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
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = import_react.forwardRef((props, forwardedRef) => {
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
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, ...separatorProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": true,
		...separatorProps,
		ref: forwardedRef
	});
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME$1 = "SelectArrow";
var SelectArrow = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSelect, ...arrowProps } = props;
	const popperScope = usePopperScope$1(__scopeSelect);
	const context = useSelectContext(ARROW_NAME$1, __scopeSelect);
	const contentContext = useSelectContentContext(ARROW_NAME$1, __scopeSelect);
	return context.open && contentContext.position === "popper" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...popperScope,
		...arrowProps,
		ref: forwardedRef
	}) : null;
});
SelectArrow.displayName = ARROW_NAME$1;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = import_react.forwardRef(({ __scopeSelect, value, ...props }, forwardedRef) => {
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const prevValue = usePrevious(value);
	import_react.useEffect(() => {
		const select = ref.current;
		if (!select) return;
		const selectProto = window.HTMLSelectElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(selectProto, "value").set;
		if (prevValue !== value && setValue) {
			const event = new Event("change", { bubbles: true });
			setValue.call(select, value);
			select.dispatchEvent(event);
		}
	}, [prevValue, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.select, {
		...props,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		},
		ref: composedRefs,
		defaultValue: value
	});
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
	return value === "" || value === void 0;
}
function useTypeaheadSearch(onSearchChange) {
	const handleSearchChange = useCallbackRef(onSearchChange);
	const searchRef = import_react.useRef("");
	const timerRef = import_react.useRef(0);
	const handleTypeaheadSearch = import_react.useCallback((key) => {
		const search = searchRef.current + key;
		handleSearchChange(search);
		(function updateSearch(value) {
			searchRef.current = value;
			window.clearTimeout(timerRef.current);
			if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
		})(search);
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
function findNextItem(items, search, currentItem) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
	let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
	if (normalizedSearch.length === 1) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
	const nextItem = wrappedItems.find((item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array$1, startIndex) {
	return array$1.map((_, index) => array$1[(startIndex + index) % array$1.length]);
}
var Root2$1 = Select;
var Trigger$2 = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal$2 = SelectPortal;
var Content2$1 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$5, {
		asChild: true,
		...rovingFocusGroupScope,
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME$1 = "TabsTrigger";
var TabsTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME$1, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item$1, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) context.onValueChange(value);
				else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== "manual";
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
});
TabsTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "TabsContent";
var TabsContent = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME$1, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
});
TabsContent.displayName = CONTENT_NAME$1;
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
var Root2 = Tabs;
var List = TabsList;
var Trigger$1 = TabsTrigger;
var Content = TabsContent;
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
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
			window.clearTimeout(skipDelayTimerRef.current);
			isOpenDelayedRef.current = false;
		}, []),
		onClose: import_react.useCallback(() => {
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
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
	const { __scopeTooltip, children, open: openProp, defaultOpen, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
	const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
	const popperScope = usePopperScope(__scopeTooltip);
	const [trigger, setTrigger] = import_react.useState(null);
	const contentId = useId();
	const openTimerRef = import_react.useRef(0);
	const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
	const delayDuration = delayDurationProp ?? providerContext.delayDuration;
	const wasOpenDelayedRef = import_react.useRef(false);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: (open2) => {
			if (open2) {
				providerContext.onOpen();
				document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
			} else providerContext.onClose();
			onOpenChange?.(open2);
		},
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$3, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContextProvider, {
			scope: __scopeTooltip,
			contentId,
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
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTooltip, ...triggerProps } = props;
	const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
	const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
	const popperScope = usePopperScope(__scopeTooltip);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null), context.onTriggerChange);
	const isPointerDownRef = import_react.useRef(false);
	const hasPointerMoveOpenedRef = import_react.useRef(false);
	const handlePointerUp = import_react.useCallback(() => isPointerDownRef.current = false, []);
	import_react.useEffect(() => {
		return () => document.removeEventListener("pointerup", handlePointerUp);
	}, [handlePointerUp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			"aria-describedby": context.open ? context.contentId : void 0,
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
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 });
var TooltipPortal = (props) => {
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
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent";
var TooltipContent = import_react.forwardRef((props, forwardedRef) => {
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
});
var TooltipContentHoverable = import_react.forwardRef((props, forwardedRef) => {
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
		setPointerGraceArea(getHull([...paddedExitPoints, ...hoverTargetPoints]));
		onPointerInTransitChange(true);
	}, [onPointerInTransitChange]);
	import_react.useEffect(() => {
		return () => handleRemoveGraceArea();
	}, [handleRemoveGraceArea]);
	import_react.useEffect(() => {
		if (trigger && content) {
			const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
			const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
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
			const handleTrackPointerGrace = (event) => {
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
			};
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
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable = createSlottable("TooltipContent");
var TooltipContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
	const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
	const popperScope = usePopperScope(__scopeTooltip);
	const { onClose } = context;
	import_react.useEffect(() => {
		document.addEventListener(TOOLTIP_OPEN, onClose);
		return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
	}, [onClose]);
	import_react.useEffect(() => {
		if (context.trigger) {
			const handleScroll = (event) => {
				if (event.target?.contains(context.trigger)) onClose();
			};
			window.addEventListener("scroll", handleScroll, { capture: true });
			return () => window.removeEventListener("scroll", handleScroll, { capture: true });
		}
	}, [context.trigger, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: true,
		disableOutsidePointerEvents: false,
		onEscapeKeyDown,
		onPointerDownOutside,
		onFocusOutside: (event) => event.preventDefault(),
		onDismiss: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content$3, {
			"data-state": context.stateAttribute,
			...popperScope,
			...contentProps,
			ref: forwardedRef,
			style: {
				...contentProps.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHiddenContentContextProvider, {
				scope: __scopeTooltip,
				isInside: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$4, {
					id: context.contentId,
					role: "tooltip",
					children: ariaLabel || children
				})
			})]
		})
	});
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow";
var TooltipArrow = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTooltip, ...arrowProps } = props;
	const popperScope = usePopperScope(__scopeTooltip);
	return useVisuallyHiddenContentContext(ARROW_NAME, __scopeTooltip).isInside ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
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
	switch (Math.min(top, bottom, right, left)) {
		case left: return "left";
		case right: return "right";
		case top: return "top";
		case bottom: return "bottom";
		default: throw new Error("unreachable");
	}
}
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
var Provider = TooltipProvider;
var Root3 = Tooltip;
var Trigger = TooltipTrigger;
var Portal$1 = TooltipPortal;
var Content2 = TooltipContent;
var Arrow2 = TooltipArrow;
var getFrontendConfig = () => {
	return window.getFrontendConfig();
};
Object.freeze({ status: "aborted" });
function $constructor(name, initializer$2, params) {
	function init(inst, def) {
		if (!inst._zod) Object.defineProperty(inst, "_zod", {
			value: {
				def,
				constr: _,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: false
		});
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer$2(inst, def);
		const proto = _.prototype;
		const keys = Object.keys(proto);
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		var _a$1;
		const inst = params?.Parent ? new Definition() : this;
		init(inst, def);
		(_a$1 = inst._zod).deferred ?? (_a$1.deferred = []);
		for (const fn of inst._zod.deferred) fn();
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
const globalConfig = {};
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
		throw new Error("cached value already set");
	} };
}
function nullish(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object$1, key, getter) {
	let value = void 0;
	Object.defineProperty(object$1, key, {
		get() {
			if (value === EVALUATING) return;
			if (value === void 0) {
				value = EVALUATING;
				value = getter();
			}
			return value;
		},
		set(v) {
			Object.defineProperty(object$1, key, { value: v });
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
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = cached(() => {
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
	return o;
}
const propertyKeyTypes = new Set([
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
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
	});
}
Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, -Number.MAX_VALUE, Number.MAX_VALUE;
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = {};
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				newShape[key] = currDef.shape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = { ...schema._zod.def.shape };
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema._zod.def.shape;
		for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge(a, b) {
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: []
	}));
}
function partial(Class, schema, mask) {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const oldShape = schema._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key in mask) {
				if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key in oldShape) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required$1(Class, schema, mask) {
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a$1;
		(_a$1 = iss).path ?? (_a$1.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config$1) {
	const full = {
		...iss,
		path: iss.path ?? []
	};
	if (!iss.message) full.message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config$1.customError?.(iss)) ?? unwrapMessage(config$1.localeError?.(iss)) ?? "Invalid input";
	delete full.inst;
	delete full.continue;
	if (!ctx?.reportInput) delete full.input;
	return full;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
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
var initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	Object.defineProperty(inst, "_zod", {
		value: inst._zod,
		enumerable: false
	});
	Object.defineProperty(inst, "issues", {
		value: def,
		enumerable: false
	});
	inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
	Object.defineProperty(inst, "toString", {
		value: () => inst.message,
		enumerable: false
	});
};
const $ZodError = $constructor("$ZodError", initializer$1);
const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error, mapper = (issue$1) => issue$1.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) {
		fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
		fieldErrors[sub.path[0]].push(mapper(sub));
	} else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue$1) => issue$1.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error$1) => {
		for (const issue$1 of error$1.issues) if (issue$1.code === "invalid_union" && issue$1.errors.length) issue$1.errors.map((issues) => processError({ issues }));
		else if (issue$1.code === "invalid_key") processError({ issues: issue$1.issues });
		else if (issue$1.code === "invalid_element") processError({ issues: issue$1.issues });
		else if (issue$1.path.length === 0) fieldErrors._errors.push(mapper(issue$1));
		else {
			let curr = fieldErrors;
			let i = 0;
			while (i < issue$1.path.length) {
				const el = issue$1.path[i];
				if (!(i === issue$1.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
				else {
					curr[el] = curr[el] || { _errors: [] };
					curr[el]._errors.push(mapper(issue$1));
				}
				curr = curr[el];
				i++;
			}
		}
	};
	processError(error);
	return fieldErrors;
}
const _parse = (_Err) => (schema, value, _ctx, _params) => {
	const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	if (result.issues.length) {
		const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, _params?.callee);
		throw e;
	}
	return result.value;
};
const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
	const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	if (result.issues.length) {
		const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, params?.callee);
		throw e;
	}
	return result.value;
};
const _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
const safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
const safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
const _encode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _parse(_Err)(schema, value, ctx);
};
const _decode = (_Err) => (schema, value, _ctx) => {
	return _parse(_Err)(schema, value, _ctx);
};
const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _parseAsync(_Err)(schema, value, ctx);
};
const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _parseAsync(_Err)(schema, value, _ctx);
};
const _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
const _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
const cuid = /^[cC][^\s-]{8,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
const uuid$1 = (version$1) => {
	if (!version$1) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return /* @__PURE__ */ new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version$1}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^[A-Za-z0-9_-]*$/;
const e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
const date$1 = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return /* @__PURE__ */ new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time$2 = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const timeRegex = `${time$2}(?:${opts.join("|")})`;
	return /* @__PURE__ */ new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
const string$1 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return /* @__PURE__ */ new RegExp(`^${regex}$`);
};
const number = /^-?\d+(?:\.\d+)?$/;
const boolean$1 = /^(?:true|false)$/i;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;
const $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
	var _a$1;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a$1 = inst._zod).onattach ?? (_a$1.onattach = []);
});
const $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a$1;
	$ZodCheck.init(inst, def);
	(_a$1 = inst._zod.def).when ?? (_a$1.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const curr = inst$1._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst$1._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
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
const $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a$1;
	$ZodCheck.init(inst, def);
	(_a$1 = inst._zod.def).when ?? (_a$1.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const curr = inst$1._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst$1._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
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
const $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a$1;
	$ZodCheck.init(inst, def);
	(_a$1 = inst._zod.def).when ?? (_a$1.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
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
const $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a$1, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a$1 = inst._zod).check ?? (_a$1.check = (payload) => {
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
const $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
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
const $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
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
const $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = /* @__PURE__ */ new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
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
const $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = /* @__PURE__ */ new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
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
const $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
var Doc = class {
	constructor(args = []) {
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
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};
const version = {
	major: 4,
	minor: 3,
	patch: 6
};
const $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
	var _a$1;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a$1 = inst._zod).deferred ?? (_a$1.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks$1, ctx) => {
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks$1) {
				if (ch._zod.def.when) {
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
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
				return checkResult.then((checkResult$1) => inst._zod.parse(checkResult$1, ctx));
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
				if (canary instanceof Promise) return canary.then((canary$1) => {
					return handleCanaryResult(canary$1, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result$1) => runChecks(result$1, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	defineLazy(inst, "~standard", () => ({
		validate: (value) => {
			try {
				const r = safeParse$1(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
});
const $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_$1) {}
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
const $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
const $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
const $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
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
const $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
const $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			const url = new URL(trimmed);
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: def.hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.normalize) payload.value = url.href;
			else payload.value = trimmed;
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
const $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid);
	$ZodStringFormat.init(inst, def);
});
const $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
const $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
const $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
const $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv4`;
});
const $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv6`;
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
const $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
const $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const parts = payload.value.split("/");
		try {
			if (parts.length !== 2) throw new Error();
			const [address, prefix] = parts;
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
const $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64";
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
function isValidBase64URL(data) {
	if (!base64url.test(data)) return false;
	const base64$1 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64$1.padEnd(Math.ceil(base64$1.length / 4) * 4, "="));
}
const $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64url";
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
const $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
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
const $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
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
const $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
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
const $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
const $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
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
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
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
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result$1) => handleArrayResult(result$1, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
	if (result.issues.length) {
		if (isOptionalOut && !(key in input)) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (result.value === void 0) {
		if (key in input) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		keys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const isOptionalOut = _catchall.optout === "optional";
	for (const key in input) {
		if (keySet.has(key)) continue;
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r$1) => handlePropertyResult(r$1, payload, key, input, isOptionalOut)));
		else handlePropertyResult(r, payload, key, input, isOptionalOut);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
const $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
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
		payload.value = {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.keys) {
			const el = shape[key];
			const isOptionalOut = el._zod.optout === "optional";
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r$1) => handlePropertyResult(r$1, payload, key, input, isOptionalOut)));
			else handlePropertyResult(r, payload, key, input, isOptionalOut);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
const $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {};`);
		for (const key of normalized.keys) {
			const id = ids[key];
			const k = esc(key);
			const isOptionalOut = shape[key]?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(key)};`);
			if (isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
			else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$1 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
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
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
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
const $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return /* @__PURE__ */ new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const single = def.options.length === 1;
	const first = def.options[0]._zod.run;
	inst._zod.parse = (payload, ctx) => {
		if (single) return first(payload, ctx);
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
		return Promise.all(results).then((results$1) => {
			return handleUnionResults(results$1, payload, inst, ctx);
		});
	};
});
const $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
	def.inclusive = false;
	$ZodUnion.init(inst, def);
	const _super = inst._zod.parse;
	defineLazy(inst._zod, "propValues", () => {
		const propValues = {};
		for (const option of def.options) {
			const pv = option._zod.propValues;
			if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
			for (const [k, v] of Object.entries(pv)) {
				if (!propValues[k]) propValues[k] = /* @__PURE__ */ new Set();
				for (const val of v) propValues[k].add(val);
			}
		}
		return propValues;
	});
	const disc = cached(() => {
		const opts = def.options;
		const map = /* @__PURE__ */ new Map();
		for (const o of opts) {
			const values = o._zod.propValues?.[def.discriminator];
			if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
			for (const v of values) {
				if (map.has(v)) throw new Error(`Duplicate discriminator value "${String(v)}"`);
				map.set(v, o);
			}
		}
		return map;
	});
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
		const opt = disc.value.get(input?.[def.discriminator]);
		if (opt) return opt._zod.run(payload, ctx);
		if (def.unionFallback) return _super(payload, ctx);
		payload.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: def.discriminator,
			input,
			path: [def.discriminator],
			inst
		});
		return payload;
	};
});
const $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
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
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left$1, right$1]) => {
			return handleIntersectionResults(payload, left$1, right$1);
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
		for (const key of sharedKeys) {
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
	for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
		unrecIssue ?? (unrecIssue = iss);
		for (const k of iss.keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k).l = true;
		}
	} else result.issues.push(iss);
	for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
		if (!unrecKeys.has(k)) unrecKeys.set(k, {});
		unrecKeys.get(k).r = true;
	}
	else result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length && unrecIssue) result.issues.push({
		...unrecIssue,
		keys: bothKeys
	});
	if (aborted(result)) return result;
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
const $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
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
		if (values) {
			payload.value = {};
			const recordKeys = /* @__PURE__ */ new Set();
			for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
				recordKeys.add(typeof key === "number" ? key.toString() : key);
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result$1) => {
					if (result$1.issues.length) payload.issues.push(...prefixIssues(key, result$1.issues));
					payload.value[key] = result$1.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[key] = result.value;
				}
			}
			let unrecognized;
			for (const key in input) if (!recordKeys.has(key)) {
				unrecognized = unrecognized ?? [];
				unrecognized.push(key);
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized
			});
		} else {
			payload.value = {};
			for (const key of Reflect.ownKeys(input)) {
				if (key === "__proto__") continue;
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
					else payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result$1) => {
					if (result$1.issues.length) payload.issues.push(...prefixIssues(key, result$1.issues));
					payload.value[keyResult.value] = result$1.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
const $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	inst._zod.pattern = /* @__PURE__ */ new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
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
const $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
	const values = new Set(def.values);
	inst._zod.values = values;
	inst._zod.pattern = /* @__PURE__ */ new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
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
const $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
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
function handleOptionalResult(result, input) {
	if (result.issues.length && input === void 0) return {
		issues: [],
		value: void 0
	};
	return result;
}
const $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? /* @__PURE__ */ new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") {
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, payload.value));
			return handleOptionalResult(result, payload.value);
		}
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? /* @__PURE__ */ new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleDefaultResult(result$1, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
const $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleNonOptionalResult(result$1, inst));
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
const $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => {
			payload.value = result$1.value;
			if (result$1.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result$1.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
		}
		return payload;
	};
});
const $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right$1) => handlePipeResult(right$1, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left$1) => handlePipeResult(left$1, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues
	}, ctx);
}
const $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
	defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
const $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r$1) => handleRefineResult(r$1, payload, input, inst));
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
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta$2 = _meta[0];
		this._map.set(schema, meta$2);
		if (meta$2 && typeof meta$2 === "object" && "id" in meta$2) this._idmap.set(meta$2.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta$2 = this._map.get(schema);
		if (meta$2 && typeof meta$2 === "object" && "id" in meta$2) this._idmap.delete(meta$2.id);
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
const globalRegistry = globalThis.__zod_globalRegistry;
/* @__NO_SIDE_EFFECTS__ */
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
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
/* @__NO_SIDE_EFFECTS__ */
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
/* @__NO_SIDE_EFFECTS__ */
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
/* @__NO_SIDE_EFFECTS__ */
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
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
/* @__NO_SIDE_EFFECTS__ */
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
/* @__NO_SIDE_EFFECTS__ */
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
/* @__NO_SIDE_EFFECTS__ */
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _superRefine(fn) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	});
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
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
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		external: params?.external ?? void 0
	};
}
function process(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a$1;
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
			process(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta$2 = ctx.metadataRegistry.get(schema);
	if (meta$2) Object.assign(result.schema, meta$2);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && result.schema._prefault) (_a$1 = result.schema).default ?? (_a$1.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
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
			const uriGenerator = ctx.external.uri ?? ((id$1) => id$1);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
			};
		}
		if (entry[1] === root) return { ref: "#" };
		const defUriPrefix = `#/${defsSegment}/`;
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + defId
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema$1 = seen.schema;
		for (const key in schema$1) delete schema$1[key];
		schema$1.$ref = ref;
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
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema$1 = seen.def ?? seen.schema;
		const _cached = { ...schema$1 };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema$1.allOf = schema$1.allOf ?? [];
				schema$1.allOf.push(refSchema);
			} else Object.assign(schema$1, refSchema);
			Object.assign(schema$1, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema$1) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema$1[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema$1) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema$1[key]) === JSON.stringify(refSeen.def[key])) delete schema$1[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema$1.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema$1) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema$1[key]) === JSON.stringify(parentSeen.def[key])) delete schema$1[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema$1,
			path: seen.path ?? []
		});
	};
	for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
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
	Object.assign(result, root.def ?? root.schema);
	const defs = ctx.external?.defs ?? {};
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) defs[seen.defId] = seen.def;
	}
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
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
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
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
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
const stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time") delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const regexes = [...patterns];
		if (regexes.length === 1) json.pattern = regexes[0].source;
		else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
const booleanProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
const neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
const unknownProcessor = (_schema, _ctx, _json, _params) => {};
const enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
const literalProcessor = (schema, ctx, json, _params) => {
	const def = schema._zod.def;
	const vals = [];
	for (const val of def.values) if (val === void 0) {
		if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
	else vals.push(Number(val));
	else vals.push(val);
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
const customProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
};
const transformProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
};
const arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = process(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
const objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	json.properties = {};
	const shape = def.shape;
	for (const key in shape) json.properties[key] = process(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	});
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const v = def.shape[key]._zod;
		if (ctx.io === "input") return v.optin === void 0;
		else return v.optout === void 0;
	}));
	if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
const unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process(x, ctx, {
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
const intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = process(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
};
const recordProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	const keyType = def.keyType;
	const patterns = keyType._zod.bag?.patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = process(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json.patternProperties = {};
		for (const pattern of patterns) json.patternProperties[pattern.source] = valueSchema;
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") json.propertyNames = process(def.keyType, ctx, {
			...params,
			path: [...params.path, "propertyNames"]
		});
		json.additionalProperties = process(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	if (keyValues) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json.required = validKeyValues;
	}
};
const nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
const defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
const prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
const catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		throw new Error("Dynamic catch values are not supported in JSON Schema");
	}
	json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
	process(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
const optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
const ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
}
const ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date(params) {
	return /* @__PURE__ */ _isoDate(ZodISODate, params);
}
const ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return /* @__PURE__ */ _isoTime(ZodISOTime, params);
}
const ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
}
var initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	Object.defineProperties(inst, {
		format: { value: (mapper) => formatError(inst, mapper) },
		flatten: { value: (mapper) => flattenError(inst, mapper) },
		addIssue: { value: (issue$1) => {
			inst.issues.push(issue$1);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		addIssues: { value: (issues$1) => {
			inst.issues.push(...issues$1);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		isEmpty: { get() {
			return inst.issues.length === 0;
		} }
	});
};
$constructor("ZodError", initializer);
const ZodRealError = $constructor("ZodError", initializer, { Parent: Error });
const parse = /* @__PURE__ */ _parse(ZodRealError);
const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
const encode = /* @__PURE__ */ _encode(ZodRealError);
const decode = /* @__PURE__ */ _decode(ZodRealError);
const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
const ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	Object.assign(inst["~standard"], { jsonSchema: {
		input: createStandardJSONSchemaMethod(inst, "input"),
		output: createStandardJSONSchemaMethod(inst, "output")
	} });
	inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
	inst.def = def;
	inst.type = def.type;
	Object.defineProperty(inst, "_def", { value: def });
	inst.check = (...checks) => {
		return inst.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...checks.map((ch) => typeof ch === "function" ? { _zod: {
			check: ch,
			def: { check: "custom" },
			onattach: []
		} } : ch)] }), { parent: true });
	};
	inst.with = inst.check;
	inst.clone = (def$1, params) => clone(inst, def$1, params);
	inst.brand = () => inst;
	inst.register = ((reg, meta$2) => {
		reg.add(inst, meta$2);
		return inst;
	});
	inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.encode = (data, params) => encode(inst, data, params);
	inst.decode = (data, params) => decode(inst, data, params);
	inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
	inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
	inst.safeEncode = (data, params) => safeEncode(inst, data, params);
	inst.safeDecode = (data, params) => safeDecode(inst, data, params);
	inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
	inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
	inst.refine = (check, params) => inst.check(refine(check, params));
	inst.superRefine = (refinement) => inst.check(superRefine(refinement));
	inst.overwrite = (fn) => inst.check(/* @__PURE__ */ _overwrite(fn));
	inst.optional = () => optional(inst);
	inst.exactOptional = () => exactOptional(inst);
	inst.nullable = () => nullable(inst);
	inst.nullish = () => optional(nullable(inst));
	inst.nonoptional = (params) => nonoptional(inst, params);
	inst.array = () => array(inst);
	inst.or = (arg) => union([inst, arg]);
	inst.and = (arg) => intersection(inst, arg);
	inst.transform = (tx) => pipe(inst, transform(tx));
	inst.default = (def$1) => _default(inst, def$1);
	inst.prefault = (def$1) => prefault(inst, def$1);
	inst.catch = (params) => _catch(inst, params);
	inst.pipe = (target) => pipe(inst, target);
	inst.readonly = () => readonly(inst);
	inst.describe = (description) => {
		const cl = inst.clone();
		globalRegistry.add(cl, { description });
		return cl;
	};
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	inst.meta = (...args) => {
		if (args.length === 0) return globalRegistry.get(inst);
		const cl = inst.clone();
		globalRegistry.add(cl, args[0]);
		return cl;
	};
	inst.isOptional = () => inst.safeParse(void 0).success;
	inst.isNullable = () => inst.safeParse(null).success;
	inst.apply = (fn) => fn(inst);
	return inst;
});
const _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	inst.regex = (...args) => inst.check(/* @__PURE__ */ _regex(...args));
	inst.includes = (...args) => inst.check(/* @__PURE__ */ _includes(...args));
	inst.startsWith = (...args) => inst.check(/* @__PURE__ */ _startsWith(...args));
	inst.endsWith = (...args) => inst.check(/* @__PURE__ */ _endsWith(...args));
	inst.min = (...args) => inst.check(/* @__PURE__ */ _minLength(...args));
	inst.max = (...args) => inst.check(/* @__PURE__ */ _maxLength(...args));
	inst.length = (...args) => inst.check(/* @__PURE__ */ _length(...args));
	inst.nonempty = (...args) => inst.check(/* @__PURE__ */ _minLength(1, ...args));
	inst.lowercase = (params) => inst.check(/* @__PURE__ */ _lowercase(params));
	inst.uppercase = (params) => inst.check(/* @__PURE__ */ _uppercase(params));
	inst.trim = () => inst.check(/* @__PURE__ */ _trim());
	inst.normalize = (...args) => inst.check(/* @__PURE__ */ _normalize(...args));
	inst.toLowerCase = () => inst.check(/* @__PURE__ */ _toLowerCase());
	inst.toUpperCase = () => inst.check(/* @__PURE__ */ _toUpperCase());
	inst.slugify = () => inst.check(/* @__PURE__ */ _slugify());
});
const ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
	inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
	inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string(params) {
	return /* @__PURE__ */ _string(ZodString, params);
}
const ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
const ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
	return /* @__PURE__ */ _boolean(ZodBoolean, params);
}
const ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown);
}
const ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return /* @__PURE__ */ _never(ZodNever, params);
}
const ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
	inst.min = (minLength, params) => inst.check(/* @__PURE__ */ _minLength(minLength, params));
	inst.nonempty = (params) => inst.check(/* @__PURE__ */ _minLength(1, params));
	inst.max = (maxLength, params) => inst.check(/* @__PURE__ */ _maxLength(maxLength, params));
	inst.length = (len, params) => inst.check(/* @__PURE__ */ _length(len, params));
	inst.unwrap = () => inst.element;
});
function array(element, params) {
	return /* @__PURE__ */ _array(ZodArray, element, params);
}
const ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	defineLazy(inst, "shape", () => {
		return def.shape;
	});
	inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
	inst.catchall = (catchall) => inst.clone({
		...inst._zod.def,
		catchall
	});
	inst.passthrough = () => inst.clone({
		...inst._zod.def,
		catchall: unknown()
	});
	inst.loose = () => inst.clone({
		...inst._zod.def,
		catchall: unknown()
	});
	inst.strict = () => inst.clone({
		...inst._zod.def,
		catchall: never()
	});
	inst.strip = () => inst.clone({
		...inst._zod.def,
		catchall: void 0
	});
	inst.extend = (incoming) => {
		return extend(inst, incoming);
	};
	inst.safeExtend = (incoming) => {
		return safeExtend(inst, incoming);
	};
	inst.merge = (other) => merge(inst, other);
	inst.pick = (mask) => pick(inst, mask);
	inst.omit = (mask) => omit(inst, mask);
	inst.partial = (...args) => partial(ZodOptional, inst, args[0]);
	inst.required = (...args) => required$1(ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
	return new ZodObject({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
const ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
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
const ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
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
const ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
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
const ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
	$ZodRecord.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
	return new ZodRecord({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
const ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
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
const ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
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
const ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
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
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output$1) => {
			payload.value = output$1;
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
const ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
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
const ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
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
const ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
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
const ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
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
const ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
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
const ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
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
const ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
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
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
const ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
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
const ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
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
const ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
	return /* @__PURE__ */ _superRefine(fn);
}
const REPOTYPE = [
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
const REPOPATHTYPE = [{
	value: "file",
	label: "File"
}, {
	value: "url",
	label: "URL"
}];
const TemplateOptions = [
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
const REGION = [
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
const VendorOptions = [
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
	relativemountpath: string(),
	readonly: optional(boolean()).default(false)
});
const StorageSchema = discriminatedUnion("template", [
	StorageBaseSchema.extend({
		template: literal("b2drop"),
		user: optional(string()),
		obscure_pass: optional(string()),
		path: optional(string())
	}),
	StorageBaseSchema.extend({
		template: literal("aws"),
		access_key_id: optional(string()),
		secret_access_key: optional(string()),
		remotepath: optional(string()),
		region: string().default(REGION[0].value)
	}),
	StorageBaseSchema.extend({
		template: literal("s3"),
		access_key_id: optional(string()),
		secret_access_key: optional(string()),
		provider: string().default(PROVIDER[0].value),
		remotepath: optional(string()).default("bucketname"),
		endpoint: optional(string()),
		region: optional(string())
	}),
	StorageBaseSchema.extend({
		template: literal("webdav"),
		user: optional(string()),
		obscure_pass: optional(string()),
		path: string().default("/"),
		url: string().default("https://b2drop.eudat.eu/remote.php/webdav/"),
		vendor: string().default(VendorOptions[0].value),
		bearer_token: optional(string())
	})
]);
const repo2docker = optional(object({
	repotype: _enum(REPOTYPE.map((r) => r.value)).default(REPOTYPE[0].value),
	repourl: string().default(""),
	reporef: optional(string()),
	repopath: optional(string()),
	repopathtype: _enum(REPOPATHTYPE.map((r) => r.value)).default(REPOPATHTYPE[0].value)
}));
var custom = optional(object({
	customimage: string().default("jupyter/datascience-notebook"),
	privaterepo: optional(string()),
	privaterepousername: optional(string()),
	privaterepopassword: optional(string())
}));
var hpc = optional(object({
	account: optional(string()),
	partition: optional(string()),
	project: optional(string()),
	reservation: optional(string())
}));
var resources = optional(object({
	nodes: optional(string()),
	runtime: optional(string()),
	gpus: optional(string()),
	xserver: optional(string())
}));
var envVariable = object({
	name: string().startsWith("JUPYTER_CUSTOM_VAR_", "Variable name must start with \"JUPYTER_CUSTOM_VAR_\""),
	value: string()
});
const formSchema = object({
	name: string().min(1, "Name is required"),
	service: optional(string()),
	option: string(),
	profile: string(),
	system: string(),
	flavor: optional(string()),
	modules: optional(record(string(), array(string()))),
	modules_versions: optional(record(string(), array(string()))),
	envvariables: array(envVariable),
	workshop_id: optional(boolean()),
	secret_keys: array(string()).default([]),
	share_id: optional(string()),
	resources,
	storage: object({
		mounts: array(StorageSchema),
		localstoragepath: optional(string()).prefault("/home/jovyan/work")
	}),
	repo2dockerdirectlink: optional(string()),
	repo2docker,
	custom,
	hpc
});
const defaultFormValues = {
	name: "Unnamed Jupyterlab",
	service: "",
	option: "",
	profile: "",
	system: "",
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
								interactivePartitions = [...new Set([...interactivePartitions, ...interactivePartitions_])];
							}
							if (entitlementInfo.account === account || account === "_all_") allPartitions_.add(mapPartitions[entitlementInfo.systempartition.toLowerCase()]);
						} else if (accountType === "secondary") {
							if (!interactiveAdded) {
								interactiveAdded = true;
								const interactivePartitions_ = systemConfig$1[system]?.interactivePartitions || [];
								interactivePartitions = [...new Set([...interactivePartitions, ...interactivePartitions_])];
							}
							if (entitlementInfo.account === prefered_username && entitlementInfo.account === account) allPartitions_.add(mapPartitions[entitlementInfo.systempartition.toLowerCase()]);
						}
					}
					allPartitions = [...new Set([...allPartitions, ...allPartitions_])];
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
	return [...new Set([...interactivePartitions, ...allPartitions])];
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
		systems.forEach((system$1) => {
			if ((systemConfig$1[system$1]?.interactivePartitions || []).includes(partition_)) {
				if (!interactivePartitionAdded.includes(partition_)) {
					interactivePartitionsLength += 1;
					interactivePartitionAdded.push(partition_);
				}
			}
		});
	});
	return [partitions, interactivePartitionsLength];
}
var serviceConfig = getServiceConfig();
var systemConfig = getSystemConfig();
var globalMaintenanceSystems = [];
var getAllSystems = () => {
	const kubeSystemss = kubeSystems;
	const unicoreSystems = _getUnicoreSystems();
	return [...new Set([...kubeSystemss, ...unicoreSystems])];
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
var getMissingSystemOptions = (serviceId, rowId, options) => {
	const availableSystems = getAvailableSystems(serviceId, options);
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
var homeTriggerOption = () => {
	const ret = { options: {} };
	let values = getServiceConfig().JupyterLab.options;
	let allowedSystems = getAllSystems();
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
var homeTriggerSystem = (option, configId, serviceId) => {
	const ret = { options: {} };
	const options = Array.isArray(option) ? option : [option];
	const serviceConfig$1 = getServiceConfig();
	let inactiveText = "N/A";
	const displayNames = Array();
	options.forEach((option$1) => {
		if (serviceConfig$1["JupyterLab"]?.options && Object.keys(serviceConfig$1["JupyterLab"]?.options).includes(option$1)) displayNames.push(serviceConfig$1["JupyterLab"].options[option$1].name);
	});
	inactiveText = `N/A for ${displayNames.join(", ")}`;
	const values = getAvailableSystems(serviceId, options);
	const inactiveValues = getMissingSystemOptions(serviceId, configId, options);
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
	const values = getProjectOptions(system, account);
	ret.options = Object.fromEntries(values);
	return ret;
};
var homeTriggerPartition = (system, account, project, configId, serviceId) => {
	const ret = { options: {} };
	const [partitions, interactivePartitionsLength] = getPartitionAndInteractivePartition(system, account, project);
	ret.options = Object.fromEntries(partitions);
	ret.groups = {
		"Login Nodes": interactivePartitionsLength,
		"Compute Nodes": partitions.length - interactivePartitionsLength
	};
	console.log("homeTriggerPartition partitions ", ret);
	return ret;
};
var homeTriggerReservation = (system, account, project, partition, configId, serviceId) => {
	const ret = { options: {} };
	const reservations$1 = getUnicoreReservationsSAPP([system], [account], [project], [partition]);
	ret.options = Object.fromEntries(reservations$1);
	return ret;
};
var homeTriggerFlavor = (system) => {
	const ret = { options: {} };
	if (kubeFlavorSystems.includes(system)) {
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
	const values = [];
	const serviceConfig$1 = getServiceConfig();
	const userModulesConfig = getModulesConfig();
	const keys = /* @__PURE__ */ new Set();
	for (const system of systems) for (const option of options) if (serviceConfig$1?.[serviceId]?.options?.[option]?.[setName]) {
		const nameSet = serviceConfig$1[serviceId].options[option][setName];
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
var ReactiveFlags = /* @__PURE__ */ ((ReactiveFlags2) => {
	ReactiveFlags2[ReactiveFlags2["None"] = 0] = "None";
	ReactiveFlags2[ReactiveFlags2["Mutable"] = 1] = "Mutable";
	ReactiveFlags2[ReactiveFlags2["Watching"] = 2] = "Watching";
	ReactiveFlags2[ReactiveFlags2["RecursedCheck"] = 4] = "RecursedCheck";
	ReactiveFlags2[ReactiveFlags2["Recursed"] = 8] = "Recursed";
	ReactiveFlags2[ReactiveFlags2["Dirty"] = 16] = "Dirty";
	ReactiveFlags2[ReactiveFlags2["Pending"] = 32] = "Pending";
	return ReactiveFlags2;
})(ReactiveFlags || {});
/* @__NO_SIDE_EFFECTS__ */
function createReactiveSystem({ update, notify, unwatched }) {
	return {
		link: link$1,
		unlink: unlink$1,
		propagate: propagate$1,
		checkDirty: checkDirty$1,
		shallowPropagate: shallowPropagate$1
	};
	function link$1(dep, sub, version$1) {
		const prevDep = sub.depsTail;
		if (prevDep !== void 0 && prevDep.dep === dep) return;
		const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub.deps;
		if (nextDep !== void 0 && nextDep.dep === dep) {
			nextDep.version = version$1;
			sub.depsTail = nextDep;
			return;
		}
		const prevSub = dep.subsTail;
		if (prevSub !== void 0 && prevSub.version === version$1 && prevSub.sub === sub) return;
		const newLink = sub.depsTail = dep.subsTail = {
			version: version$1,
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
	function unlink$1(link2, sub = link2.sub) {
		const dep = link2.dep;
		const prevDep = link2.prevDep;
		const nextDep = link2.nextDep;
		const nextSub = link2.nextSub;
		const prevSub = link2.prevSub;
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
	function propagate$1(link2) {
		let next = link2.nextSub;
		let stack;
		top: do {
			const sub = link2.sub;
			let flags = sub.flags;
			if (!(flags & 60)) sub.flags = flags | 32;
			else if (!(flags & 12)) flags = 0;
			else if (!(flags & 4)) sub.flags = flags & -9 | 32;
			else if (!(flags & 48) && isValidLink(link2, sub)) {
				sub.flags = flags | 40;
				flags &= 1;
			} else flags = 0;
			if (flags & 2) notify(sub);
			if (flags & 1) {
				const subSubs = sub.subs;
				if (subSubs !== void 0) {
					const nextSub = (link2 = subSubs).nextSub;
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
			if ((link2 = next) !== void 0) {
				next = link2.nextSub;
				continue;
			}
			while (stack !== void 0) {
				link2 = stack.value;
				stack = stack.prev;
				if (link2 !== void 0) {
					next = link2.nextSub;
					continue top;
				}
			}
			break;
		} while (true);
	}
	function checkDirty$1(link2, sub) {
		let stack;
		let checkDepth = 0;
		let dirty = false;
		top: do {
			const dep = link2.dep;
			const flags = dep.flags;
			if (sub.flags & 16) dirty = true;
			else if ((flags & 17) === 17) {
				if (update(dep)) {
					const subs = dep.subs;
					if (subs.nextSub !== void 0) shallowPropagate$1(subs);
					dirty = true;
				}
			} else if ((flags & 33) === 33) {
				if (link2.nextSub !== void 0 || link2.prevSub !== void 0) stack = {
					value: link2,
					prev: stack
				};
				link2 = dep.deps;
				sub = dep;
				++checkDepth;
				continue;
			}
			if (!dirty) {
				const nextDep = link2.nextDep;
				if (nextDep !== void 0) {
					link2 = nextDep;
					continue;
				}
			}
			while (checkDepth--) {
				const firstSub = sub.subs;
				const hasMultipleSubs = firstSub.nextSub !== void 0;
				if (hasMultipleSubs) {
					link2 = stack.value;
					stack = stack.prev;
				} else link2 = firstSub;
				if (dirty) {
					if (update(sub)) {
						if (hasMultipleSubs) shallowPropagate$1(firstSub);
						sub = link2.sub;
						continue;
					}
					dirty = false;
				} else sub.flags &= -33;
				sub = link2.sub;
				const nextDep = link2.nextDep;
				if (nextDep !== void 0) {
					link2 = nextDep;
					continue top;
				}
			}
			return dirty;
		} while (true);
	}
	function shallowPropagate$1(link2) {
		do {
			const sub = link2.sub;
			const flags = sub.flags;
			if ((flags & 48) === 32) {
				sub.flags = flags | 16;
				if ((flags & 6) === 2) notify(sub);
			}
		} while ((link2 = link2.nextSub) !== void 0);
	}
	function isValidLink(checkLink, sub) {
		let link2 = sub.depsTail;
		while (link2 !== void 0) {
			if (link2 === checkLink) return true;
			link2 = link2.prevDep;
		}
		return false;
	}
}
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
	notify(effect2) {
		queuedEffects[queuedEffectsLength++] = effect2;
		effect2.flags &= ~ReactiveFlags.Watching;
	},
	unwatched(atom) {
		if (atom.depsTail !== void 0) {
			atom.depsTail = void 0;
			atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
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
		const effect2 = queuedEffects[notifyIndex];
		queuedEffects[notifyIndex++] = void 0;
		effect2.notify();
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
		flags: isComputed ? ReactiveFlags.None : ReactiveFlags.Mutable,
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
				else obs.next?.(atom._snapshot);
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
			if (isComputed) atom.flags = ReactiveFlags.Mutable | ReactiveFlags.RecursedCheck;
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
				if (isComputed) atom.flags &= ~ReactiveFlags.RecursedCheck;
				purgeDeps(atom);
			}
		}
	};
	if (isComputed) {
		atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
		atom.get = function() {
			const flags = atom.flags;
			if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(atom.deps, atom)) {
				if (atom._update()) {
					const subs = atom.subs;
					if (subs !== void 0) shallowPropagate(subs);
				}
			} else if (flags & ReactiveFlags.Pending) atom.flags = flags & ~ReactiveFlags.Pending;
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		};
	} else atom.set = function(valueOrFn2) {
		if (atom._update(valueOrFn2)) {
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
		effectObj.flags = ReactiveFlags.Watching | ReactiveFlags.RecursedCheck;
		try {
			return fn();
		} finally {
			activeSub = prevSub;
			effectObj.flags &= ~ReactiveFlags.RecursedCheck;
			purgeDeps(effectObj);
		}
	};
	const effectObj = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: ReactiveFlags.Watching | ReactiveFlags.RecursedCheck,
		notify() {
			const flags = this.flags;
			if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(this.deps, this)) run();
			else this.flags = ReactiveFlags.Watching;
		},
		stop() {
			this.flags = ReactiveFlags.None;
			this.depsTail = void 0;
			purgeDeps(this);
		}
	};
	run();
	return effectObj;
}
var Store = class {
	constructor(valueOrFn) {
		this.atom = createAtom(valueOrFn);
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
function createStore$1(valueOrFn) {
	if (typeof valueOrFn === "function") return new ReadonlyStore(valueOrFn);
	return new Store(valueOrFn);
}
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
function liteThrottle(fn, options) {
	return new LiteThrottler(fn, options).maybeExecute;
}
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
var FormEventClient = class extends EventClient {
	constructor() {
		super({
			pluginId: "form-devtools",
			reconnectEveryMs: 1e3
		});
	}
};
var formEventClient = new FormEventClient();
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
var reLineOfOnlyDigits = /^(\d+)$/gm;
var reDigitsBetweenDots = /\.(\d+)(?=\.)/gm;
var reStartWithDigitThenDot = /^(\d+)\./gm;
var reDotWithDigitsToEnd = /\.(\d+$)/gm;
var reMultipleDots = /\.{2,}/gm;
var intPrefix = "__int__";
var intReplace = `${intPrefix}$1`;
function makePathArray(str) {
	if (Array.isArray(str)) return [...str];
	if (typeof str !== "string") throw new Error("Path must be a string.");
	return str.replace(/(^\[)|]/gm, "").replace(/\[/g, ".").replace(reLineOfOnlyDigits, intReplace).replace(reDigitsBetweenDots, `.${intReplace}.`).replace(reStartWithDigitThenDot, `${intReplace}.`).replace(reDotWithDigitsToEnd, `.${intReplace}`).replace(reMultipleDots, ".").split(".").map((d) => {
		if (d.startsWith(intPrefix)) {
			const numStr = d.substring(7);
			const num = parseInt(numStr, 10);
			if (String(num) === numStr) return num;
			return numStr;
		}
		return d;
	});
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
		validators: options.validators,
		event: {
			type: cause,
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
				case "submit":
					debounceMs = 0;
					break;
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
		validators: options.validators,
		event: {
			type: cause,
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
function prefixSchemaToErrors(issues, formValue) {
	const schema = /* @__PURE__ */ new Map();
	for (const issue$1 of issues) {
		const issuePath = issue$1.path ?? [];
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
		schema.set(path, (schema.get(path) ?? []).concat(issue$1));
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
	errorSourceMap: {}
};
function metaHelper(formApi) {
	function handleArrayMove(field, fromIndex, toIndex) {
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
		shiftMeta(getAffectedFields(field, index, "remove"), "up");
	}
	function handleArraySwap(field, index, secondIndex) {
		getAffectedFields(field, index, "swap", secondIndex).forEach((fieldKey) => {
			if (!fieldKey.toString().startsWith(getFieldPath(field, index))) return;
			const swappedKey = fieldKey.toString().replace(getFieldPath(field, index), getFieldPath(field, secondIndex));
			const [meta1, meta2] = [formApi.getFieldMeta(fieldKey), formApi.getFieldMeta(swappedKey)];
			if (meta1) formApi.setFieldMeta(swappedKey, meta1);
			if (meta2) formApi.setFieldMeta(fieldKey, meta2);
		});
	}
	function handleArrayInsert(field, insertIndex) {
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
		handleArrayMove,
		handleArrayRemove,
		handleArraySwap,
		handleArrayInsert
	};
}
function getDefaultFormState(defaultState) {
	return {
		values: defaultState.values ?? {},
		errorMap: defaultState.errorMap ?? {},
		fieldMetaBase: defaultState.fieldMetaBase ?? {},
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
	constructor(opts) {
		this.options = {};
		this.fieldInfo = {};
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
			this.baseStore.setState(() => getDefaultFormState({
				...this.options.defaultState,
				values: values ?? this.options.defaultValues ?? this.options.defaultState?.values,
				fieldMetaBase
			}));
		};
		this.validateAllFields = async (cause) => {
			const fieldValidationPromises = [];
			batch(() => {
				Object.values(this.fieldInfo).forEach((field) => {
					if (!field.instance) return;
					const fieldInstance = field.instance;
					fieldValidationPromises.push(Promise.resolve().then(() => fieldInstance.validate(cause, { skipFormValidation: true })));
					if (!field.instance.state.meta.isTouched) field.instance.setMeta((prev) => ({
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
			if (!fieldInstance.state.meta.isTouched) fieldInstance.setMeta((prev) => ({
				...prev,
				isTouched: true
			}));
			return fieldInstance.validate(cause);
		};
		this.validateSync = (cause) => {
			const validates = getSyncValidatorArray(cause, {
				...this.options,
				form: this,
				validationLogic: this.options.validationLogic || defaultValidationLogic
			});
			let hasErrored = false;
			const currentValidationErrorMap = {};
			batch(() => {
				for (const validateObj of validates) {
					if (!validateObj.validate) continue;
					const { formError, fieldErrors } = normalizeError$1(this.runValidator({
						validate: validateObj.validate,
						value: {
							value: this.state.values,
							formApi: this,
							validationSource: "form"
						},
						type: "validate"
					}));
					const errorMapKey = getErrorMapKey$1(validateObj.cause);
					const allFieldsToProcess = /* @__PURE__ */ new Set([...Object.keys(this.state.fieldMeta), ...Object.keys(fieldErrors || {})]);
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
					if (this.state.errorMap?.[errorMapKey] !== formError) this.baseStore.setState((prev) => ({
						...prev,
						errorMap: {
							...prev.errorMap,
							[errorMapKey]: formError
						}
					}));
					if (formError || fieldErrors) hasErrored = true;
				}
				const submitErrKey = getErrorMapKey$1("submit");
				if (this.state.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored) this.baseStore.setState((prev) => ({
					...prev,
					errorMap: {
						...prev.errorMap,
						[submitErrKey]: void 0
					}
				}));
				const serverErrKey = getErrorMapKey$1("server");
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
		this.validateAsync = async (cause) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this,
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
				const key = getErrorMapKey$1(validateObj.cause);
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
					const { formError, fieldErrors: fieldErrorsFromNormalizeError } = normalizeError$1(rawError);
					if (fieldErrorsFromNormalizeError) fieldErrorsFromFormValidators = fieldErrorsFromFormValidators ? {
						...fieldErrorsFromFormValidators,
						...fieldErrorsFromNormalizeError
					} : fieldErrorsFromNormalizeError;
					const errorMapKey = getErrorMapKey$1(validateObj.cause);
					for (const field of Object.keys(this.state.fieldMeta)) {
						if (this.baseStore.state.fieldMetaBase[field] === void 0) continue;
						const fieldMeta = this.getFieldMeta(field);
						if (!fieldMeta) continue;
						const { errorMap: currentErrorMap, errorSourceMap: currentErrorMapSource } = fieldMeta;
						const newFormValidatorError = fieldErrorsFromFormValidators?.[field];
						const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
							newFormValidatorError,
							isPreviousErrorFromFormValidator: currentErrorMapSource?.[errorMapKey] === "form",
							previousErrorValue: currentErrorMap?.[errorMapKey]
						});
						if (currentErrorMap?.[errorMapKey] !== newErrorValue) this.setFieldMeta(field, (prev) => ({
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
					this.baseStore.setState((prev) => ({
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
		this.validate = (cause) => {
			const { hasErrored, fieldsErrorMap } = this.validateSync(cause);
			if (hasErrored && !this.options.asyncAlways) return fieldsErrorMap;
			return this.validateAsync(cause);
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
					if (!field.instance.state.meta.isTouched) field.instance.setMeta((prev) => ({
						...prev,
						isTouched: true
					}));
				});
			});
			const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
			if (!this.state.canSubmit && !this._devtoolsSubmissionOverride) {
				this.options.onSubmitInvalid?.({
					value: this.state.values,
					formApi: this,
					meta: submitMetaArg
				});
				return;
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
					errors: Object.values(this.state.fieldMeta).map((meta$2) => meta$2.errors).flat()
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
					field.instance?.options.listeners?.onSubmit?.({
						value: field.instance.state.value,
						fieldApi: field.instance
					});
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
				return f !== fieldStr && f.startsWith(fieldStr);
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
			if (lastIndex !== null) for (let i = 0; i <= lastIndex; i++) {
				const fieldKey = `${field}[${i}]`;
				this.deleteField(fieldKey);
			}
			if (!(options?.dontValidate ?? false)) this.validateField(field, "change");
		};
		this.resetField = (field) => {
			this.baseStore.setState((prev) => {
				return {
					...prev,
					fieldMetaBase: {
						...prev.fieldMetaBase,
						[field]: defaultFieldMeta
					},
					values: this.options.defaultValues ? setBy(prev.values, field, getBy(this.options.defaultValues, field)) : prev.values
				};
			});
		};
		this.setErrorMap = (errorMap) => {
			batch(() => {
				Object.entries(errorMap).forEach(([key, value]) => {
					const errorMapKey = key;
					if (isGlobalFormValidationError(value)) {
						const { formError, fieldErrors } = normalizeError$1(value);
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
		this.baseStore = createStore$1(baseStoreVal);
		let prevBaseStore = void 0;
		this.fieldMetaDerived = createStore$1((prevVal) => {
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
				const isDefaultValue = evaluate(curFieldVal, getBy(this.options.defaultValues, fieldName)) || evaluate(curFieldVal, this.getFieldInfo(fieldName)?.instance?.options.defaultValue);
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
		let prevBaseStoreForStore = void 0;
		this.store = createStore$1((prevVal) => {
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
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) return standardSchemaValidators[props.type](props.value, props.validate);
		return props.validate(props.value);
	}
	handleSubmit(submitMeta) {
		return this._handleSubmit(submitMeta);
	}
};
function normalizeError$1(rawError) {
	if (rawError) {
		if (isGlobalFormValidationError(rawError)) return {
			formError: normalizeError$1(rawError.form).formError,
			fieldErrors: rawError.fields
		};
		return { formError: rawError };
	}
	return { formError: void 0 };
}
function getErrorMapKey$1(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		case "change":
		default: return "onChange";
	}
}
var FieldApi = class {
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
				validationLogic: this.form.options.validationLogic || defaultValidationLogic
			});
			const linkedFieldValidates = this.getLinkedFields(cause).reduce((acc, field) => {
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
				const validateFieldFn = (field, validateObj) => {
					const errorMapKey = getErrorMapKey(validateObj.cause);
					const fieldLevelError = validateObj.validate ? normalizeError(field.runValidator({
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
		this.validateAsync = async (cause, formValidationResultPromise) => {
			const validates = getAsyncValidatorArray(cause, {
				...this.options,
				form: this.form,
				validationLogic: this.form.options.validationLogic || defaultValidationLogic
			});
			const asyncFormValidationResults = await formValidationResultPromise;
			const linkedFields = this.getLinkedFields(cause);
			const linkedFieldValidates = linkedFields.reduce((acc, field) => {
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
			const hasAsyncValidators = validates.some((v) => v.validate) || linkedFieldValidates.some((v) => v.validate);
			if (hasAsyncValidators) {
				if (!this.state.meta.isValidating) this.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
				for (const linkedField of linkedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: true
				}));
			}
			const validateFieldAsyncFn = (field, validateObj, promises) => {
				const errorMapKey = getErrorMapKey(validateObj.cause);
				const fieldInfo = field.getInfo();
				fieldInfo.validationMetaMap[errorMapKey]?.lastAbortController.abort();
				const controller = new AbortController();
				fieldInfo.validationMetaMap[errorMapKey] = { lastAbortController: controller };
				promises.push(new Promise(async (resolve) => {
					let rawError;
					try {
						rawError = await new Promise((rawResolve, rawReject) => {
							if (field.timeoutIds.validations[validateObj.cause]) clearTimeout(field.timeoutIds.validations[validateObj.cause]);
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
					const fieldLevelError = normalizeError(rawError);
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
			if (hasAsyncValidators) {
				this.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
				for (const linkedField of linkedFields) linkedField.setMeta((prev) => ({
					...prev,
					isValidating: false
				}));
			}
			return results.filter(Boolean);
		};
		this.validate = (cause, opts2) => {
			if (!this.state.meta.isTouched) return [];
			const { fieldsErrorMap } = opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause);
			const { hasErrored } = this.validateSync(cause, fieldsErrorMap[this.name] ?? {});
			if (hasErrored && !this.options.asyncAlways) {
				this.getInfo().validationMetaMap[getErrorMapKey(cause)]?.lastAbortController.abort();
				return this.state.meta.errors;
			}
			const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause);
			return this.validateAsync(cause, formValidationResultPromise);
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
		};
		this.form = opts.form;
		this.name = opts.name;
		this.options = opts;
		this.timeoutIds = {
			validations: {},
			listeners: {},
			formListeners: {}
		};
		this.store = createStore$1((prevVal) => {
			this.form.store.get();
			const meta$2 = this.form.getFieldMeta(this.name) ?? {
				...defaultFieldMeta,
				...opts.defaultMeta
			};
			let value = this.form.getFieldValue(this.name);
			if (!meta$2.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !evaluate(value, this.options.defaultValue)) value = this.options.defaultValue;
			if (prevVal && prevVal.value === value && prevVal.meta === meta$2) return prevVal;
			return {
				value,
				meta: meta$2
			};
		});
	}
	get state() {
		return this.store.state;
	}
	runValidator(props) {
		if (isStandardSchemaValidator(props.validate)) return standardSchemaValidators[props.type](props.value, props.validate);
		return props.validate(props.value);
	}
	triggerOnBlurListener() {
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
	}
};
function normalizeError(rawError) {
	if (rawError) return rawError;
}
function getErrorMapKey(cause) {
	switch (cause) {
		case "submit": return "onSubmit";
		case "blur": return "onBlur";
		case "mount": return "onMount";
		case "server": return "onServer";
		case "dynamic": return "onDynamic";
		case "change":
		default: return "onChange";
	}
}
var FieldGroupApi = class FieldGroupApi {
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
		this.store = createStore$1(() => {
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
	var React$10 = require_react(), shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef$1 = React$10.useRef, useEffect$6 = React$10.useEffect, useMemo$3 = React$10.useMemo, useDebugValue = React$10.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef$1(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo$3(function() {
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
		useEffect$6(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
var import_with_selector = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
})))();
function defaultCompare(a, b) {
	return a === b;
}
function useStore(atom, selector, compare = defaultCompare) {
	const subscribe = (0, import_react.useCallback)((handleStoreChange) => {
		if (!atom) return () => {};
		const { unsubscribe } = atom.subscribe(handleStoreChange);
		return unsubscribe;
	}, [atom]);
	const boundGetSnapshot = (0, import_react.useCallback)(() => atom?.get(), [atom]);
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, boundGetSnapshot, boundGetSnapshot, selector, compare);
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function useField(opts) {
	const [prevOptions, setPrevOptions] = (0, import_react.useState)(() => ({
		form: opts.form,
		name: opts.name
	}));
	const [fieldApi, setFieldApi] = (0, import_react.useState)(() => {
		return new FieldApi({ ...opts });
	});
	if (prevOptions.form !== opts.form || prevOptions.name !== opts.name) {
		setFieldApi(new FieldApi({ ...opts }));
		setPrevOptions({
			form: opts.form,
			name: opts.name
		});
	}
	const reactiveStateValue = useStore(fieldApi.store, opts.mode === "array" ? (state) => Object.keys(state.value ?? []).length : (state) => state.value);
	const reactiveMetaIsTouched = useStore(fieldApi.store, (state) => state.meta.isTouched);
	const reactiveMetaIsBlurred = useStore(fieldApi.store, (state) => state.meta.isBlurred);
	const reactiveMetaIsDirty = useStore(fieldApi.store, (state) => state.meta.isDirty);
	const reactiveMetaErrorMap = useStore(fieldApi.store, (state) => state.meta.errorMap);
	const reactiveMetaErrorSourceMap = useStore(fieldApi.store, (state) => state.meta.errorSourceMap);
	const reactiveMetaIsValidating = useStore(fieldApi.store, (state) => state.meta.isValidating);
	const extendedFieldApi = (0, import_react.useMemo)(() => {
		const extendedApi = {
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
		extendedApi.Field = Field;
		return extendedApi;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_react.useMemo)(() => functionalUpdate(children, fieldApi), [children, fieldApi]) });
});
function useUUID() {
	return (0, import_react.useState)(() => uuid())[0];
}
var _React = import_react;
var useFormId = "19.2.4".split(".")[0] === "17" ? useUUID : _React.useId;
function LocalSubscribe$1({ form, selector = (state) => state, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: functionalUpdate(children, useStore(form.store, selector)) });
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
function LocalSubscribe({ lens, selector = (state) => state, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: functionalUpdate(children, useStore(lens.store, selector)) });
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
		extendedApi.Field = function Field$1(props) {
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
var fieldContext$1 = (0, import_react.createContext)(null);
var formContext$1 = (0, import_react.createContext)(null);
function useFormContext$1() {
	const form = (0, import_react.useContext)(formContext$1);
	if (!form) throw new Error("`formContext` only works when within a `formComponent` passed to `createFormHook`");
	return form;
}
function createFormHookContexts() {
	function useFieldContext$1() {
		const field = (0, import_react.useContext)(fieldContext$1);
		if (!field) throw new Error("`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`");
		return field;
	}
	return {
		fieldContext: fieldContext$1,
		useFieldContext: useFieldContext$1,
		useFormContext: useFormContext$1,
		formContext: formContext$1
	};
}
function createFormHook({ fieldComponents, fieldContext: fieldContext2, formContext: formContext2, formComponents }) {
	function useAppForm$1(props) {
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
	function withForm$1({ render, props }) {
		return function Render(innerProps) {
			return render({
				...props,
				...innerProps
			});
		};
	}
	function withFieldGroup$1({ render, props, defaultValues }) {
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
	return {
		useAppForm: useAppForm$1,
		withForm: withForm$1,
		withFieldGroup: withFieldGroup$1,
		useTypedAppFormContext
	};
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
var _excluded$T = ["color"];
var CheckIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$W = ["color"];
var ChevronDownIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$W);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$Z = ["color"];
var ChevronUpIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$Z);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$1h = ["color"];
var CopyIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1h);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$24 = ["color"];
var EyeClosedIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$24);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M14.7649 6.07596C14.9991 6.22231 15.0703 6.53079 14.9239 6.76495C14.4849 7.46743 13.9632 8.10645 13.3702 8.66305L14.5712 9.86406C14.7664 10.0593 14.7664 10.3759 14.5712 10.5712C14.3759 10.7664 14.0593 10.7664 13.8641 10.5712L12.6011 9.30817C11.805 9.90283 10.9089 10.3621 9.93375 10.651L10.383 12.3277C10.4544 12.5944 10.2961 12.8685 10.0294 12.94C9.76267 13.0115 9.4885 12.8532 9.41704 12.5865L8.95917 10.8775C8.48743 10.958 8.00036 10.9999 7.50001 10.9999C6.99965 10.9999 6.51257 10.958 6.04082 10.8775L5.58299 12.5864C5.51153 12.8532 5.23737 13.0115 4.97064 12.94C4.7039 12.8686 4.5456 12.5944 4.61706 12.3277L5.06625 10.651C4.09111 10.3621 3.19503 9.90282 2.3989 9.30815L1.1359 10.5712C0.940638 10.7664 0.624058 10.7664 0.428798 10.5712C0.233537 10.3759 0.233537 10.0593 0.428798 9.86405L1.62982 8.66303C1.03682 8.10643 0.515113 7.46742 0.0760677 6.76495C-0.0702867 6.53079 0.000898544 6.22231 0.235065 6.07596C0.469231 5.9296 0.777703 6.00079 0.924058 6.23496C1.40354 7.00213 1.989 7.68057 2.66233 8.2427C2.67315 8.25096 2.6837 8.25972 2.69397 8.26898C4.00897 9.35527 5.65537 9.99991 7.50001 9.99991C10.3078 9.99991 12.6564 8.5063 14.076 6.23495C14.2223 6.00079 14.5308 5.9296 14.7649 6.07596Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$26 = ["color"];
var EyeOpenIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$26);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$2D = ["color"];
var InfoCircledIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2D);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$2T = ["color"];
var Link2Icon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$2T);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$3o = ["color"];
var Pencil2Icon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3o);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$3p = ["color"];
var PersonIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3p);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$3x = ["color"];
var PlusIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3x);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$3F = ["color"];
var ResetIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3F);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$3V = ["color"];
var Share1Icon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$3V);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$4G = ["color"];
var TrashIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$4G);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z",
		fill: color,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
var _excluded$4J = ["color"];
var TriangleRightIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, forwardedRef) {
	var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$4J);
	return (0, import_react.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, props, { ref: forwardedRef }), (0, import_react.createElement)("path", {
		d: "M6 11L6 4L10.5 7.5L6 11Z",
		fill: color
	}));
});
var import_compiler_runtime$30 = require_compiler_runtime();
function LabelField(t0) {
	const $ = (0, import_compiler_runtime$30.c)(34);
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
		const t10$1 = `${Number(width) / 12 * 100}%`;
		let t11$1;
		if ($[3] !== t10$1) {
			t11$1 = { flexBasis: t10$1 };
			$[3] = t10$1;
			$[4] = t11$1;
		} else t11$1 = $[4];
		let t12$1;
		if ($[5] !== label) {
			t12$1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "element-label__header",
				children: label
			});
			$[5] = label;
			$[6] = t12$1;
		} else t12$1 = $[6];
		let t13$1;
		if ($[7] !== t11$1 || $[8] !== t12$1) {
			t13$1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: t11$1,
				children: t12$1
			});
			$[7] = t11$1;
			$[8] = t12$1;
			$[9] = t13$1;
		} else t13$1 = $[9];
		return t13$1;
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
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
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
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, { className: "element-label__tooltip-arrow" });
		$[15] = t13;
	} else t13 = $[15];
	let t14;
	if ($[16] !== icontext) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2, {
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
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
			delayDuration: 200,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root3, { children: [t12, t14] })
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
		t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$1, {
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
var LabelField_default = LabelField;
var import_compiler_runtime$29 = require_compiler_runtime();
function SelectField(t0) {
	const $ = (0, import_compiler_runtime$29.c)(33);
	const { label, options } = t0;
	const field = useFieldContext();
	console.log(`Rendering SelectField with label: ${label}`);
	console.log("Current field value: ", field.state.value);
	console.log("Available options: ", options);
	let t1;
	if ($[0] !== field) {
		t1 = (value) => {
			field.handleChange(value);
		};
		$[0] = field;
		$[1] = t1;
	} else t1 = $[1];
	const handleChange = t1;
	let t2;
	if ($[2] !== label) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField_default, {
			label,
			htmlFor: label
		});
		$[2] = label;
		$[3] = t2;
	} else t2 = $[3];
	let t3;
	if ($[4] !== handleChange) {
		t3 = (value_0) => handleChange(value_0);
		$[4] = handleChange;
		$[5] = t3;
	} else t3 = $[5];
	let t4;
	if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, { placeholder: "Select an option…" });
		$[6] = t4;
	} else t4 = $[6];
	let t5;
	if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger$2, {
			className: "select-input__trigger",
			children: [t4, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) })]
		});
		$[7] = t5;
	} else t5 = $[7];
	let t6;
	if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollUpButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUpIcon, {}) });
		$[8] = t6;
	} else t6 = $[8];
	let t7;
	if ($[9] !== options.emptyOpt || $[10] !== options.options) {
		t7 = options.options == null || Object.keys(options.options).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
			value: "none",
			className: "select-input__item",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, {
				className: "select-input__item-indicator",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: options.emptyOpt })]
		});
		$[9] = options.emptyOpt;
		$[10] = options.options;
		$[11] = t7;
	} else t7 = $[11];
	let t8;
	if ($[12] !== options.groups || $[13] !== options.options) {
		t8 = options.groups && (() => {
			let offset = 0;
			return Object.entries(options.groups).map((t9$1) => {
				const [groupName, groupLimit] = t9$1;
				const groupEntries = Object.entries(options.options ?? {}).slice(offset, offset + groupLimit);
				offset = offset + groupLimit;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "select-input__group-label",
					children: groupName
				}), groupEntries.map(_temp$20)] }, groupName);
			});
		})();
		$[12] = options.groups;
		$[13] = options.options;
		$[14] = t8;
	} else t8 = $[14];
	let t9;
	if ($[15] !== options.groups || $[16] !== options.inactiveOptions || $[17] !== options.options) {
		t9 = Object.keys(options.groups ?? {}).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [Object.entries(options.options ?? {}).map(_temp2$7), Object.entries(options.inactiveOptions ?? {}).map(_temp3$3)] });
		$[15] = options.groups;
		$[16] = options.inactiveOptions;
		$[17] = options.options;
		$[18] = t9;
	} else t9 = $[18];
	let t10;
	if ($[19] !== t7 || $[20] !== t8 || $[21] !== t9) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Viewport, {
			className: "select-input__viewport",
			children: [
				t7,
				t8,
				t9
			]
		});
		$[19] = t7;
		$[20] = t8;
		$[21] = t9;
		$[22] = t10;
	} else t10 = $[22];
	let t11;
	if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollDownButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) });
		$[23] = t11;
	} else t11 = $[23];
	let t12;
	if ($[24] !== t10) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$1, {
			className: "select-input__content",
			position: "popper",
			sideOffset: 4,
			children: [
				t6,
				t10,
				t11
			]
		}) });
		$[24] = t10;
		$[25] = t12;
	} else t12 = $[25];
	let t13;
	if ($[26] !== field.state.value || $[27] !== t12 || $[28] !== t3) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "select-input__field-wrapper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, {
				value: field.state.value,
				onValueChange: t3,
				children: [t5, t12]
			})
		});
		$[26] = field.state.value;
		$[27] = t12;
		$[28] = t3;
		$[29] = t13;
	} else t13 = $[29];
	let t14;
	if ($[30] !== t13 || $[31] !== t2) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "select-input",
			children: [t2, t13]
		});
		$[30] = t13;
		$[31] = t2;
		$[32] = t14;
	} else t14 = $[32];
	return t14;
}
function _temp3$3(t0) {
	const [key_1, label_2] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
		disabled: true,
		value: key_1,
		className: "select-input__item select-input__item--inactive",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, {
			className: "select-input__item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: label_2 })]
	}, key_1);
}
function _temp2$7(t0) {
	const [key_0, label_1] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
		value: key_0,
		className: "select-input__item",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, {
			className: "select-input__item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: label_1 })]
	}, key_0);
}
function _temp$20(t0) {
	const [key, label_0] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
		value: key,
		className: "select-input__item",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, {
			className: "select-input__item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: label_0 })]
	}, key);
}
var SelectField_default = SelectField;
var import_compiler_runtime$28 = require_compiler_runtime();
function TextInput(t0) {
	const $ = (0, import_compiler_runtime$28.c)(25);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning } = t0;
	const required$2 = t1 === void 0 ? false : t1;
	const secret = t2 === void 0 ? false : t2;
	const copy = t3 === void 0 ? false : t3;
	const field = useFieldContext();
	const isSecret = !!secret;
	const isCopy = !!copy;
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	let t4;
	if ($[0] !== field.state.value) {
		t4 = async () => {
			await navigator.clipboard.writeText(field.state.value);
		};
		$[0] = field.state.value;
		$[1] = t4;
	} else t4 = $[1];
	const handleCopy = t4;
	const inputType = isSecret && !showPassword ? "password" : "text";
	const hasGroup = isSecret || isCopy;
	const t5 = placeholder ?? "";
	const t6 = enabled === false;
	let t7;
	if ($[2] !== field) {
		t7 = (e) => field.handleChange(e.target.value);
		$[2] = field;
		$[3] = t7;
	} else t7 = $[3];
	let t8;
	if ($[4] !== field.state.value || $[5] !== inputType || $[6] !== label || $[7] !== pattern || $[8] !== required$2 || $[9] !== t5 || $[10] !== t6 || $[11] !== t7) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: inputType,
			className: "text-input__input",
			name: label,
			value: field.state.value,
			placeholder: t5,
			pattern,
			required: required$2,
			disabled: t6,
			onChange: t7
		});
		$[4] = field.state.value;
		$[5] = inputType;
		$[6] = label;
		$[7] = pattern;
		$[8] = required$2;
		$[9] = t5;
		$[10] = t6;
		$[11] = t7;
		$[12] = t8;
	} else t8 = $[12];
	const input = t8;
	let t9;
	if ($[13] !== handleCopy || $[14] !== hasGroup || $[15] !== input || $[16] !== isCopy || $[17] !== isSecret || $[18] !== showPassword) {
		t9 = hasGroup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__input-group",
			children: [
				input,
				isSecret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-input__toggle-btn",
					onClick: () => setShowPassword(_temp$19),
					"aria-label": showPassword ? "Hide password" : "Show password",
					children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeClosedIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOpenIcon, {})
				}),
				isCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-input__copy-btn",
					onClick: handleCopy,
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
		$[17] = isSecret;
		$[18] = showPassword;
		$[19] = t9;
	} else t9 = $[19];
	let t10;
	if ($[20] !== warning) {
		t10 = warning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-input__validation",
			children: warning
		});
		$[20] = warning;
		$[21] = t10;
	} else t10 = $[21];
	let t11;
	if ($[22] !== t10 || $[23] !== t9) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__field-wrapper",
			children: [t9, t10]
		});
		$[22] = t10;
		$[23] = t9;
		$[24] = t11;
	} else t11 = $[24];
	return t11;
}
function _temp$19(p) {
	return !p;
}
var TextInput_default = TextInput;
var import_compiler_runtime$27 = require_compiler_runtime();
function TextField(t0) {
	const $ = (0, import_compiler_runtime$27.c)(15);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning } = t0;
	const required$2 = t1 === void 0 ? false : t1;
	const secret = t2 === void 0 ? false : t2;
	const copy = t3 === void 0 ? false : t3;
	let t4;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "flex-start",
			gap: 0,
			marginBottom: "0.25rem"
		};
		$[0] = t4;
	} else t4 = $[0];
	let t5;
	if ($[1] !== label) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField_default, {
			label,
			htmlFor: label
		});
		$[1] = label;
		$[2] = t5;
	} else t5 = $[2];
	let t6;
	if ($[3] !== copy || $[4] !== enabled || $[5] !== label || $[6] !== pattern || $[7] !== placeholder || $[8] !== required$2 || $[9] !== secret || $[10] !== warning) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput_default, {
			label,
			required: required$2,
			enabled,
			placeholder,
			secret,
			copy,
			pattern,
			warning
		});
		$[3] = copy;
		$[4] = enabled;
		$[5] = label;
		$[6] = pattern;
		$[7] = placeholder;
		$[8] = required$2;
		$[9] = secret;
		$[10] = warning;
		$[11] = t6;
	} else t6 = $[11];
	let t7;
	if ($[12] !== t5 || $[13] !== t6) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: t4,
			children: [t5, t6]
		});
		$[12] = t5;
		$[13] = t6;
		$[14] = t7;
	} else t7 = $[14];
	return t7;
}
var TextField_default = TextField;
var import_compiler_runtime$26 = require_compiler_runtime();
function ResourceField(t0) {
	const $ = (0, import_compiler_runtime$26.c)(42);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning } = t0;
	const required$2 = t1 === void 0 ? false : t1;
	const secret = t2 === void 0 ? false : t2;
	const copy = t3 === void 0 ? false : t3;
	const field = useFieldContext();
	let t4;
	if ($[0] !== field.name) {
		t4 = field.name.split(".").slice(-1);
		$[0] = field.name;
		$[1] = t4;
	} else t4 = $[1];
	const fieldName = t4[0];
	const isSecret = !!secret;
	const isCopy = !!copy;
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
	const resourcesConfig$1 = t5;
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
				if (partitions.length === 1 && partitions[0] === "_all_") _partitions = Object.keys(resourcesConfig$1[system_0] ?? {});
				else _partitions = partitions;
				_partitions.forEach((partition_0) => {
					const elementOptions = resourcesConfig$1[system_0]?.[partition_0]?.[fieldName] ?? {};
					if (Object.keys(elementOptions).length !== 0) {
						setShow(true);
						const minmax = elementOptions.minmax || false;
						setDefaultValue(elementOptions["default"] === void 0 || elementOptions["default"] === null ? defaultValue : elementOptions["default"]);
						if (minmax) if (!minmaxavail) {
							minmaxavail = true;
							setMin(minmax[0]);
							setMax(minmax[1]);
						} else {
							if (minmax[0] < min) setMin(minmax[0]);
							if (minmax[1] > max) setMax(minmax[1]);
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
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField_default, {
			label: labelText,
			htmlFor: label
		});
		$[15] = label;
		$[16] = labelText;
		$[17] = t9;
	} else t9 = $[17];
	let t10;
	if ($[18] !== defaultValue || $[19] !== enabled || $[20] !== field.state.value || $[21] !== handleCopy || $[22] !== handlechange || $[23] !== hasGroup || $[24] !== isCopy || $[25] !== isSecret || $[26] !== label || $[27] !== max || $[28] !== min || $[29] !== pattern || $[30] !== placeholder || $[31] !== required$2 || $[32] !== showPassword) {
		t10 = hasGroup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input__input-group",
			children: [isSecret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-input__toggle-btn",
				onClick: () => setShowPassword(_temp$18),
				"aria-label": showPassword ? "Hide password" : "Show password",
				children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeClosedIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOpenIcon, {})
			}), isCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-input__copy-btn",
				onClick: handleCopy,
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
			required: required$2,
			disabled: enabled === false,
			onChange: (e) => handlechange(e.target.value)
		});
		$[18] = defaultValue;
		$[19] = enabled;
		$[20] = field.state.value;
		$[21] = handleCopy;
		$[22] = handlechange;
		$[23] = hasGroup;
		$[24] = isCopy;
		$[25] = isSecret;
		$[26] = label;
		$[27] = max;
		$[28] = min;
		$[29] = pattern;
		$[30] = placeholder;
		$[31] = required$2;
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
function _temp$18(p) {
	return !p;
}
var ResourceField_default = ResourceField;
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
var import_compiler_runtime$25 = require_compiler_runtime();
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
	const $ = (0, import_compiler_runtime$25.c)(2);
	const { request } = useApi();
	let t0;
	if ($[0] !== request) {
		t0 = createServerService(request);
		$[0] = request;
		$[1] = t0;
	} else t0 = $[1];
	return t0;
}
const TabContext = (0, import_react.createContext)(null);
const useTabContext = () => {
	const ctx = (0, import_react.useContext)(TabContext);
	if (!ctx) throw new Error("useTabContext must be used within TabContext.Provider");
	return ctx;
};
const RowContext = (0, import_react.createContext)(null);
const useRowContext = () => {
	const ctx = (0, import_react.useContext)(RowContext);
	if (!ctx) throw new Error("useRowContext must be used within RowContext.Provider");
	return ctx;
};
var import_compiler_runtime$24 = require_compiler_runtime();
function StartButton(t0) {
	const $ = (0, import_compiler_runtime$24.c)(11);
	const { configId } = t0;
	const rowContext = useRowContext();
	const tabContext = useTabContext();
	const form = useFormContext();
	const serverService = useServerService();
	let t1;
	if ($[0] !== configId || $[1] !== form.state.values || $[2] !== rowContext || $[3] !== serverService || $[4] !== tabContext) {
		t1 = async function handleStartServer$1() {
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
				console.log(`Starting server for user ${user} with service and config ${configId}`);
				console.log("Collected payload:", payload);
				console.log("collected body", JSON.stringify(payload));
				if (!rowContext.isRowOpen) rowContext.openRow();
				tabContext.setActiveTab("logs");
				if (!await serverService.startNamedServer(user, configId, payload)) console.error("Server start request failed");
			} catch (t2$1) {
				const error = t2$1;
				console.error("Failed to collect server payload:", error);
			}
		};
		$[0] = configId;
		$[1] = form.state.values;
		$[2] = rowContext;
		$[3] = serverService;
		$[4] = tabContext;
		$[5] = t1;
	} else t1 = $[5];
	const handleStartServer = t1;
	let t2;
	if ($[6] !== handleStartServer) {
		t2 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
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
		$[6] = handleStartServer;
		$[7] = t2;
	} else t2 = $[7];
	let t3;
	if ($[8] !== form.Subscribe || $[9] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$17,
			children: t2
		});
		$[8] = form.Subscribe;
		$[9] = t2;
		$[10] = t3;
	} else t3 = $[10];
	return t3;
}
function _temp$17(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$23 = require_compiler_runtime();
function CheckboxField(t0) {
	const $ = (0, import_compiler_runtime$23.c)(11);
	const { label } = t0;
	const field = useFieldContext();
	let t1;
	if ($[0] !== label) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField_default, {
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
	if ($[4] !== field.state.value || $[5] !== label || $[6] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-input__field-wrapper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				className: "text-input__input",
				name: label,
				checked: field.state.value,
				onChange: t2
			})
		});
		$[4] = field.state.value;
		$[5] = label;
		$[6] = t2;
		$[7] = t3;
	} else t3 = $[7];
	let t4;
	if ($[8] !== t1 || $[9] !== t3) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-input",
			children: [t1, t3]
		});
		$[8] = t1;
		$[9] = t3;
		$[10] = t4;
	} else t4 = $[10];
	return t4;
}
var CheckboxField_default = CheckboxField;
var import_compiler_runtime$22 = require_compiler_runtime();
function UrlButton() {
	const $ = (0, import_compiler_runtime$22.c)(5);
	const form = useFormContext();
	let t0;
	if ($[0] !== form) {
		t0 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
			type: "submit",
			variant: "ghost",
			disabled: isSubmitting,
			iconPosition: "before",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2Icon, {}),
			onClick: (e) => {
				e.preventDefault();
				form.handleSubmit("url");
			},
			children: "URL"
		});
		$[0] = form;
		$[1] = t0;
	} else t0 = $[1];
	let t1;
	if ($[2] !== form.Subscribe || $[3] !== t0) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$16,
			children: t0
		});
		$[2] = form.Subscribe;
		$[3] = t0;
		$[4] = t1;
	} else t1 = $[4];
	return t1;
}
function _temp$16(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$21 = require_compiler_runtime();
function ResetButton() {
	const $ = (0, import_compiler_runtime$21.c)(7);
	const form = useFormContext();
	let t0;
	if ($[0] !== form) {
		t0 = (e) => {
			form.handleSubmit({ submitAction: "reset" });
		};
		$[0] = form;
		$[1] = t0;
	} else t0 = $[1];
	const handleSubmit = t0;
	let t1;
	if ($[2] !== handleSubmit) {
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
			type: "button",
			color: "danger",
			disabled: isSubmitting,
			onClick: handleSubmit,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResetIcon, {}),
			iconPosition: "before",
			children: "Reset"
		});
		$[2] = handleSubmit;
		$[3] = t1;
	} else t1 = $[3];
	let t2;
	if ($[4] !== form.Subscribe || $[5] !== t1) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$15,
			children: t1
		});
		$[4] = form.Subscribe;
		$[5] = t1;
		$[6] = t2;
	} else t2 = $[6];
	return t2;
}
function _temp$15(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$20 = require_compiler_runtime();
function ShareButton() {
	const $ = (0, import_compiler_runtime$20.c)(2);
	const form = useFormContext();
	let t0;
	if ($[0] !== form.Subscribe) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$14,
			children: _temp2$6
		});
		$[0] = form.Subscribe;
		$[1] = t0;
	} else t0 = $[1];
	return t0;
}
function _temp2$6(isSubmitting) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
		type: "submit",
		variant: "ghost",
		disabled: isSubmitting,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share1Icon, {}),
		iconPosition: "before",
		children: "Share"
	});
}
function _temp$14(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$19 = require_compiler_runtime();
function RtcButton() {
	const $ = (0, import_compiler_runtime$19.c)(2);
	const form = useFormContext();
	let t0;
	if ($[0] !== form.Subscribe) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$13,
			children: _temp2$5
		});
		$[0] = form.Subscribe;
		$[1] = t0;
	} else t0 = $[1];
	return t0;
}
function _temp2$5(isSubmitting) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
		type: "submit",
		variant: "ghost",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonIcon, {}),
		iconPosition: "before",
		disabled: isSubmitting,
		children: "RTC"
	});
}
function _temp$13(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$18 = require_compiler_runtime();
function TextCheckboxField(t0) {
	const $ = (0, import_compiler_runtime$18.c)(19);
	const { label, required: t1, enabled, placeholder, secret: t2, copy: t3, pattern, warning, checked, onCheckboxChange } = t0;
	const required$2 = t1 === void 0 ? false : t1;
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
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelField_default, {
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
	if ($[7] !== copy || $[8] !== label || $[9] !== pattern || $[10] !== placeholder || $[11] !== required$2 || $[12] !== secret || $[13] !== t7 || $[14] !== warning) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput_default, {
			label,
			required: required$2,
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
		$[11] = required$2;
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
var TextCheckboxField_default = TextCheckboxField;
var import_compiler_runtime$17 = require_compiler_runtime();
function SaveButton() {
	const $ = (0, import_compiler_runtime$17.c)(2);
	const form = useFormContext();
	let t0;
	if ($[0] !== form.Subscribe) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$12,
			children: _temp2$4
		});
		$[0] = form.Subscribe;
		$[1] = t0;
	} else t0 = $[1];
	return t0;
}
function _temp2$4(isSubmitting) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
		type: "submit",
		color: "success",
		disabled: isSubmitting,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil2Icon, {}),
		iconPosition: "before",
		children: "Save"
	});
}
function _temp$12(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$16 = require_compiler_runtime();
function DeleteButton(t0) {
	const $ = (0, import_compiler_runtime$16.c)(8);
	const { configId } = t0;
	const form = useFormContext();
	const serverService = useServerService();
	let t1;
	if ($[0] !== configId || $[1] !== serverService) {
		t1 = async () => {
			const user = getAuthState().name;
			try {
				if (!await serverService.deleteNamedServer(user, configId)) console.error("Server delete request failed");
			} catch (t2$1) {
				const error = t2$1;
				console.error("Failed to delete server:", error);
			}
		};
		$[0] = configId;
		$[1] = serverService;
		$[2] = t1;
	} else t1 = $[2];
	const handleDeleteServer = t1;
	let t2;
	if ($[3] !== handleDeleteServer) {
		t2 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
			type: "submit",
			color: "danger",
			disabled: isSubmitting,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleDeleteServer();
			},
			children: "Delete"
		});
		$[3] = handleDeleteServer;
		$[4] = t2;
	} else t2 = $[4];
	let t3;
	if ($[5] !== form.Subscribe || $[6] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$11,
			children: t2
		});
		$[5] = form.Subscribe;
		$[6] = t2;
		$[7] = t3;
	} else t3 = $[7];
	return t3;
}
function _temp$11(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$15 = require_compiler_runtime();
function CancelButton(t0) {
	const $ = (0, import_compiler_runtime$15.c)(8);
	const { configId } = t0;
	const form = useFormContext();
	const serverService = useServerService();
	let t1;
	if ($[0] !== configId || $[1] !== serverService) {
		t1 = async () => {
			const user = getAuthState().name;
			try {
				if (!await serverService.cancelNamedServer(user, configId)) console.error("Server cancel request failed");
			} catch (t2$1) {
				const error = t2$1;
				console.error("Failed to cancel server:", error);
			}
		};
		$[0] = configId;
		$[1] = serverService;
		$[2] = t1;
	} else t1 = $[2];
	const handleCancelServer = t1;
	let t2;
	if ($[3] !== handleCancelServer) {
		t2 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
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
		$[4] = t2;
	} else t2 = $[4];
	let t3;
	if ($[5] !== form.Subscribe || $[6] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$10,
			children: t2
		});
		$[5] = form.Subscribe;
		$[6] = t2;
		$[7] = t3;
	} else t3 = $[7];
	return t3;
}
function _temp$10(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$14 = require_compiler_runtime();
function OpenButton(t0) {
	const $ = (0, import_compiler_runtime$14.c)(7);
	const { configId } = t0;
	const form = useFormContext();
	let t1;
	if ($[0] !== configId) {
		t1 = async () => {
			const user = getAuthState().name;
			const url = new URL([
				"user",
				user,
				configId
			].map(encodeURIComponent).join("/") + "/", window.origin);
			console.log(`Opening server for user ${user} with config ${configId}`);
			console.log(`Opening URL: ${url.toString()}`);
			window.open(url, "_blank");
		};
		$[0] = configId;
		$[1] = t1;
	} else t1 = $[1];
	const handleOpenServer = t1;
	let t2;
	if ($[2] !== handleOpenServer) {
		t2 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
			type: "submit",
			color: "danger",
			disabled: isSubmitting,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				handleOpenServer();
			},
			children: "Open"
		});
		$[2] = handleOpenServer;
		$[3] = t2;
	} else t2 = $[3];
	let t3;
	if ($[4] !== form.Subscribe || $[5] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$9,
			children: t2
		});
		$[4] = form.Subscribe;
		$[5] = t2;
		$[6] = t3;
	} else t3 = $[6];
	return t3;
}
function _temp$9(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$13 = require_compiler_runtime();
function StopButton(t0) {
	const $ = (0, import_compiler_runtime$13.c)(8);
	const { configId } = t0;
	const form = useFormContext();
	const serverService = useServerService();
	let t1;
	if ($[0] !== configId || $[1] !== serverService) {
		t1 = async () => {
			const user = getAuthState().name;
			try {
				if (!await serverService.stopNamedServer(user, configId)) console.error("Server stop request failed");
			} catch (t2$1) {
				const error = t2$1;
				console.error("Failed to stop server:", error);
			}
		};
		$[0] = configId;
		$[1] = serverService;
		$[2] = t1;
	} else t1 = $[2];
	const handleStopServer = t1;
	let t2;
	if ($[3] !== handleStopServer) {
		t2 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
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
		$[4] = t2;
	} else t2 = $[4];
	let t3;
	if ($[5] !== form.Subscribe || $[6] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
			selector: _temp$8,
			children: t2
		});
		$[5] = form.Subscribe;
		$[6] = t2;
		$[7] = t3;
	} else t3 = $[7];
	return t3;
}
function _temp$8(state) {
	return state.isSubmitting;
}
var import_compiler_runtime$12 = require_compiler_runtime();
function _uuidv4hex() {
	return [
		1e7,
		1e3,
		4e3,
		8e3,
		1e11
	].join("").replace(/[018]/g, (c) => (Number(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16));
}
function _uuidWithLetterStart() {
	const uuid$2 = _uuidv4hex();
	const char = Math.random().toString(36).match(/[a-zA-Z]/)?.[0];
	if (!char) throw new Error("Failed to generate letter");
	return char + uuid$2.substring(1);
}
function StartNewButton() {
	const $ = (0, import_compiler_runtime$12.c)(10);
	const rowContext = useRowContext();
	const tabContext = useTabContext();
	const form = useFormContext();
	const serverService = useServerService();
	let t0;
	if ($[0] !== form.state.values || $[1] !== rowContext || $[2] !== serverService || $[3] !== tabContext) {
		t0 = async function handleStartServer$1() {
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
			} catch (t1$1) {
				const error = t1$1;
				console.error("Failed to collect server payload:", error);
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
		t1 = (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
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
			selector: _temp$7,
			children: t1
		});
		$[7] = form.Subscribe;
		$[8] = t1;
		$[9] = t2;
	} else t2 = $[9];
	return t2;
}
function _temp$7(state) {
	return state.isSubmitting;
}
const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();
const { useAppForm, withForm, withFieldGroup } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		text: TextField_default,
		select: SelectField_default,
		resource: ResourceField_default,
		checkbox: CheckboxField_default,
		textCheckbox: TextCheckboxField_default
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
const HPCForm = withForm({
	defaultValues: defaultFormValues,
	props: { configId: "" },
	render: function Render({ form, configId }) {
		const [accountOptions, setAccountOptions] = (0, import_react.useState)({ options: {} });
		const [projectOptions, setProjectOptions] = (0, import_react.useState)({ options: {} });
		const [partitionOptions, setPartitionOptions] = (0, import_react.useState)({ options: {} });
		const [reservationOptions, setReservationOptions] = (0, import_react.useState)({ options: {} });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "hpc.account",
				validators: { onChange: ({ value, fieldApi }) => {
					console.log(`HPC Account changed to: ${value}`);
					const options = homeTriggerAccount(form.getFieldValue("system"), configId, "jupyterlab");
					console.log("homeTriggerAccount onChange result: ", options);
					setAccountOptions(options ?? []);
					if (value == "" && options.options) {
						const firstOption = Object.keys(options.options)[0];
						if (firstOption) fieldApi.handleChange(firstOption);
					}
				} },
				listeners: { onMount: ({ value, fieldApi }) => {
					const options = homeTriggerAccount(form.getFieldValue("system"), configId, "jupyterlab");
					setAccountOptions(options);
					if (value == "" && options.options) {
						const firstOption = Object.keys(options.options)[0];
						if (firstOption) fieldApi.handleChange(firstOption);
					}
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "HPC Account",
					options: accountOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "hpc.project",
				validators: {
					onChangeListenTo: ["hpc.account"],
					onChange: ({ value, fieldApi }) => {
						const system = fieldApi.form.getFieldValue("system");
						const account = fieldApi.form.getFieldValue("hpc.account") || "";
						console.log(`HPC Project changed to: ${value}`);
						const options = homeTriggerProject(system, account, configId, "jupyterlab");
						setProjectOptions(options ?? []);
						if (value == "" && options.options) {
							const firstOption = Object.keys(options.options)[0];
							if (firstOption) fieldApi.handleChange(firstOption);
						}
					}
				},
				listeners: { onMount: ({ value, fieldApi }) => {
					const system = fieldApi.form.getFieldValue("system");
					const account = fieldApi.form.getFieldValue("hpc.account") || "";
					console.log(`HPC Project changed to: ${value}`);
					const options = homeTriggerProject(system, account, configId, "jupyterlab");
					setProjectOptions(options ?? []);
					if (value == "" && options.options) {
						const firstOption = Object.keys(options.options)[0];
						if (firstOption) fieldApi.handleChange(firstOption);
					}
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "HPC Project",
					options: projectOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "hpc.partition",
				validators: {
					onChangeListenTo: [
						"hpc.account",
						"hpc.project",
						"system"
					],
					onChange: ({ value, fieldApi }) => {
						const account = fieldApi.form.getFieldValue("hpc.account") || "";
						const project = fieldApi.form.getFieldValue("hpc.project") || "";
						const options = homeTriggerPartition(fieldApi.form.getFieldValue("system"), account, project, configId, "jupyterlab");
						setPartitionOptions(options ?? []);
						if (value == "" && options.options) {
							const firstOption = Object.keys(options.options)[0];
							if (firstOption) fieldApi.handleChange(firstOption);
						}
					}
				},
				listeners: { onMount: ({ value, fieldApi }) => {
					const account = fieldApi.form.getFieldValue("hpc.account") || "";
					const project = fieldApi.form.getFieldValue("hpc.project") || "";
					const options = homeTriggerPartition(fieldApi.form.getFieldValue("system"), account, project, configId, "jupyterlab");
					setPartitionOptions(options ?? []);
					if (value == "" && options.options) {
						const firstOption = Object.keys(options.options)[0];
						if (firstOption) fieldApi.handleChange(firstOption);
					}
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "HPC Partition",
					options: partitionOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "hpc.reservation",
				validators: {
					onChangeListenTo: [
						"hpc.account",
						"hpc.partition",
						"hpc.project"
					],
					onChange: ({ value }) => {
						console.log(`HPC Reservation changed to: ${value}`);
						setReservationOptions(homeTriggerReservation(configId, "jupyterlab") ?? []);
					}
				},
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "HPC Reservation",
					options: reservationOptions
				})
			})
		] });
	}
});
const Repo2DockerForm = withForm({
	defaultValues: defaultFormValues,
	render: function Render({ form }) {
		const [repoTypeOptions, setRepoTypeOptions] = (0, import_react.useState)({ options: {} });
		const [repoPathTypeOptions, setRepoPathTypeOptions] = (0, import_react.useState)({ options: {} });
		const [repoPathChecked, setRepoPathChecked] = (0, import_react.useState)(form.getFieldValue("repo2docker.repopath") !== "");
		const localStoragePath = useStore(form.store, (state) => state.values.storage.localstoragepath);
		const repoType = useStore(form.store, (state) => state.values.repo2docker?.repotype);
		console.log("Repo2DockerForm render: ", {
			localStoragePath,
			repoType
		});
		const [localStorageChecked, setLocalStorageChecked] = (0, import_react.useState)(form.getFieldValue("storage.localstoragepath") !== "/home/jovyan/work");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "repo2dockerdirectlink",
				listeners: { onMount: ({ fieldApi }) => {
					const repoType$1 = fieldApi.form.getFieldValue("repo2docker.repotype");
					const repoRef = fieldApi.form.getFieldValue("repo2docker.reporef");
					const system = fieldApi.form.getFieldValue("system");
					const flavor = fieldApi.form.getFieldValue("flavor");
					const queryArgs = [`system=${system}`, `flavor=${flavor}`];
					let urlPath = `/v2/${repoType$1}/${repoRef ? repoRef : "HEAD"}`;
					const queryString = queryArgs.join("&");
					urlPath = window.origin + `${urlPath}?${queryString}`;
					fieldApi.setValue(urlPath, { dontValidate: true });
				} },
				validators: {
					onChangeListenTo: [
						"storage.localstoragepath",
						"repo2docker.repopath",
						"repo2docker.repopathtype",
						"repo2docker.repotype",
						"flavor",
						"system"
					],
					onChange: ({ value, fieldApi }) => {
						const repoType$1 = fieldApi.form.getFieldValue("repo2docker.repotype");
						const repoPath = fieldApi.form.getFieldValue("repo2docker.repopath");
						let reporef = fieldApi.form.getFieldValue("repo2docker.reporef");
						let repourl = fieldApi.form.getFieldValue("repo2docker.repourl");
						let urlPath = `/v2/${repoType$1}`;
						if ([
							"git",
							"gl",
							"hydroshare",
							"ckan"
						].includes(repoType$1)) repourl = encodeURIComponent(repourl);
						urlPath = `${urlPath}/${repourl}/`;
						if ([
							"git",
							"gl",
							"gh",
							"gist"
						].includes(repoType$1)) {
							reporef = reporef || "HEAD";
							urlPath = `${urlPath}${reporef}`;
						}
						const queryArgs = [];
						if (repoPathChecked) {
							const urlprefix = fieldApi.form.getFieldValue("repo2docker.repopathtype") == "file" ? "labpath" : "urlpath";
							const urlEE = encodeURIComponent(repoPath);
							queryArgs.push(`${urlprefix}=${urlEE}`);
						}
						const system = fieldApi.form.getFieldValue("system");
						queryArgs.push(`system=${system}`);
						const flavor = fieldApi.form.getFieldValue("flavor");
						queryArgs.push(`flavor=${flavor}`);
						const localstoragepathElement = fieldApi.form.getFieldValue("storage.localstoragepath");
						const localestoragepath = encodeURIComponent(localstoragepathElement);
						queryArgs.push(`localstoragepath=${localestoragepath}`);
						const queryString = queryArgs.join("&");
						urlPath = window.origin + `${urlPath}?${queryString}`;
						urlPath = urlPath.replace(/([^:]\/)\/+/g, "$1");
						console.log("Updating direct link to: ", urlPath);
						fieldApi.setValue(urlPath, { dontValidate: true });
					}
				},
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
					label: "Direct Link for this configuration",
					copy: true,
					enabled: false
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "repo2docker.repotype",
				listeners: { onMount: (value) => {
					setRepoTypeOptions({ options: Object.fromEntries(REPOTYPE.map((r) => [r.value, r.label])) });
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "Repository Type",
					options: repoTypeOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "repo2docker.repourl",
				validators: {
					onChangeListenTo: ["repo2docker.repotype"],
					onChange: ({ value }) => {
						console.log(`Repo URL changed to: ${value}`);
					}
				},
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
					label: "GitHub repository name or URL",
					placeholder: "example: yuvipanda/requirements or https://github.com/yuvipanda/requirements",
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "repo2docker.reporef",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
					label: "Git ref (branch, tag, or commit)",
					placeholder: "HEAD"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "repo2docker.repopath",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.textCheckbox, {
					label: "Open notebook or path (optional)",
					checked: repoPathChecked,
					onCheckboxChange: setRepoPathChecked
				}) })
			}),
			repoPathChecked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "repo2docker.repopathtype",
				listeners: { onMount: () => {
					setRepoPathTypeOptions({ options: Object.fromEntries(REPOPATHTYPE.map((r) => [r.value, r.label])) });
				} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "Notebook Type",
					options: repoPathTypeOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "storage.localstoragepath",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.textCheckbox, {
					label: "Mount user data",
					checked: localStorageChecked,
					onCheckboxChange: setLocalStorageChecked
				})
			})
		] });
	}
});
const CustomDockerForm = withForm({
	defaultValues: defaultFormValues,
	render: function Render({ form }) {
		const [privateRepoChecked, setPrivateRepoChecked] = (0, import_react.useState)(form.getFieldValue("custom.privaterepo") !== "");
		const [localStorageChecked, setLocalStorageChecked] = (0, import_react.useState)(form.getFieldValue("storage.localstoragepath") !== "/home/jovyan/work");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "custom.customimage",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, { label: "Image" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "custom.privaterepo",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.textCheckbox, {
					label: "Private image registry",
					placeholder: "myregistry.com:5000/myuser/myrepo",
					checked: privateRepoChecked,
					onCheckboxChange: (checked) => {
						setPrivateRepoChecked(checked);
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (state) => state.values.custom?.privaterepo,
				children: privateRepoChecked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
					name: "custom.privaterepousername",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, { label: "Username" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
					name: "custom.privaterepopassword",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
						label: "Password",
						secret: true
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "storage.localstoragepath",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.textCheckbox, {
					label: "Mount user data",
					checked: localStorageChecked,
					onCheckboxChange: setLocalStorageChecked
				})
			})
		] });
	}
});
var import_compiler_runtime$11 = require_compiler_runtime();
var FlavorBar = (t0) => {
	const $ = (0, import_compiler_runtime$11.c)(29);
	const { description } = t0;
	const current = description.current ?? 2;
	const maxAllowed = description.max;
	if (maxAllowed === 0 || current < 0 || maxAllowed == null || current == null) return null;
	let usedVariant = "primary";
	let progressTooltip;
	let remainingLabel;
	let currentWidth;
	let remainingWidth;
	if (maxAllowed === -1) {
		progressTooltip = `${current} used`;
		remainingLabel = "∞";
		if (current === 0) {
			currentWidth = 0;
			remainingWidth = 100;
		} else {
			currentWidth = 20;
			remainingWidth = 80;
		}
	} else {
		progressTooltip = `${current} out of ${maxAllowed} used`;
		remainingLabel = maxAllowed - current;
		currentWidth = current / maxAllowed * 100;
		remainingWidth = Number(remainingLabel) / maxAllowed * 100;
		if (remainingLabel < 0) {
			remainingLabel = 0;
			remainingWidth = 0;
			usedVariant = "danger";
		}
	}
	let t1;
	if ($[0] !== description.display_name) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: description.display_name });
		$[0] = description.display_name;
		$[1] = t1;
	} else t1 = $[1];
	let t2;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = { paddingTop: "1px" };
		$[2] = t2;
	} else t2 = $[2];
	let t3;
	if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCircledIcon, {});
		$[3] = t3;
	} else t3 = $[3];
	let t4;
	if ($[4] !== description.description) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "lh-1 ms-3",
			style: t2,
			"data-bs-toggle": "tooltip",
			"data-bs-placement": "right",
			title: description.description,
			children: t3
		});
		$[4] = description.description;
		$[5] = t4;
	} else t4 = $[5];
	let t5;
	if ($[6] !== t1 || $[7] !== t4) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-4",
			children: [t1, t4]
		});
		$[6] = t1;
		$[7] = t4;
		$[8] = t5;
	} else t5 = $[8];
	const t6 = maxAllowed === -1 ? void 0 : maxAllowed;
	const t7 = `${currentWidth}%`;
	let t8;
	if ($[9] !== t7) {
		t8 = { width: t7 };
		$[9] = t7;
		$[10] = t8;
	} else t8 = $[10];
	let t9;
	if ($[11] !== current || $[12] !== t8 || $[13] !== usedVariant) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "FlavorProgressSegment",
				"data-variant": usedVariant,
				style: t8,
				children: current
			})
		});
		$[11] = current;
		$[12] = t8;
		$[13] = usedVariant;
		$[14] = t9;
	} else t9 = $[14];
	const t10 = `${remainingWidth}%`;
	let t11;
	if ($[15] !== t10) {
		t11 = { width: t10 };
		$[15] = t10;
		$[16] = t11;
	} else t11 = $[16];
	let t12;
	if ($[17] !== remainingLabel || $[18] !== t11) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "FlavorProgressSegment",
			"data-variant": "success",
			style: t11,
			children: remainingLabel
		});
		$[17] = remainingLabel;
		$[18] = t11;
		$[19] = t12;
	} else t12 = $[19];
	let t13;
	if ($[20] !== current || $[21] !== progressTooltip || $[22] !== t12 || $[23] !== t6 || $[24] !== t9) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
			className: "FlavorProgressRoot col ms-2 fw-bold",
			value: current,
			max: t6,
			"data-bs-toggle": "tooltip",
			"data-bs-placement": "top",
			title: progressTooltip,
			children: [t9, t12]
		});
		$[20] = current;
		$[21] = progressTooltip;
		$[22] = t12;
		$[23] = t6;
		$[24] = t9;
		$[25] = t13;
	} else t13 = $[25];
	let t14;
	if ($[26] !== t13 || $[27] !== t5) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "row align-items-center g-0 mt-4",
			children: [t5, t13]
		});
		$[26] = t13;
		$[27] = t5;
		$[28] = t14;
	} else t14 = $[28];
	return t14;
};
var FlavorBar_default = FlavorBar;
var import_compiler_runtime$10 = require_compiler_runtime();
var FlavorInfo = (t0) => {
	const $ = (0, import_compiler_runtime$10.c)(9);
	const { elementId, flavors, children, system } = t0;
	let t1;
	bb0: {
		if (flavors !== void 0) {
			t1 = flavors;
			break bb0;
		}
		if (system) {
			t1 = kubeOutpostFlavors?.[system];
			break bb0;
		}
		t1 = void 0;
	}
	const resolvedFlavors = t1;
	let t2;
	bb1: {
		if (!resolvedFlavors) {
			let t3$2;
			if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
				t3$2 = [];
				$[0] = t3$2;
			} else t3$2 = $[0];
			t2 = t3$2;
			break bb1;
		}
		let t3$1;
		if ($[1] !== resolvedFlavors) {
			t3$1 = Object.entries(resolvedFlavors).filter(_temp$6).sort(_temp2$3).map(_temp3$2);
			$[1] = resolvedFlavors;
			$[2] = t3$1;
		} else t3$1 = $[2];
		t2 = t3$1;
	}
	const sortedFlavors = t2;
	if (!system || !resolvedFlavors) return null;
	const t3 = `${elementId}-flavor-info`;
	let t4;
	if ($[3] !== sortedFlavors) {
		t4 = sortedFlavors.map(_temp4$2);
		$[3] = sortedFlavors;
		$[4] = t4;
	} else t4 = $[4];
	let t5;
	if ($[5] !== children || $[6] !== t3 || $[7] !== t4) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: t3,
			className: "flavor-info",
			children: [t4, children]
		});
		$[5] = children;
		$[6] = t3;
		$[7] = t4;
		$[8] = t5;
	} else t5 = $[8];
	return t5;
};
var FlavorInfo_default = FlavorInfo;
function _temp$6(t0) {
	const [, value] = t0;
	return value.max !== 0;
}
function _temp2$3(t0, t1) {
	const [, a] = t0;
	const [, b] = t1;
	const weightA = a.weight ?? 99;
	return (b.weight ?? 99) - weightA;
}
function _temp3$2(t0) {
	const [, description] = t0;
	return description;
}
function _temp4$2(description_0) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlavorBar_default, { description: description_0 }, description_0.display_name);
}
var import_compiler_runtime$9 = require_compiler_runtime();
var LEGEND_ITEMS = [
	{
		className: "flavor-legend__box--free",
		label: "Free"
	},
	{
		className: "flavor-legend__box--used",
		label: "Used"
	},
	{
		className: "flavor-legend__box--exceeded",
		label: "Limit exceeded"
	}
];
var FlavorLegend = () => {
	const $ = (0, import_compiler_runtime$9.c)(2);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flavor-legend__title",
			children: "Available Flavors"
		});
		$[0] = t0;
	} else t0 = $[0];
	let t1;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flavor-legend",
			children: [t0, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flavor-legend__items",
				children: LEGEND_ITEMS.map(_temp$5)
			})]
		});
		$[1] = t1;
	} else t1 = $[1];
	return t1;
};
var FlavorLegend_default = FlavorLegend;
function _temp$5(item) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `flavor-legend__box ${item.className}` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flavor-legend__label",
			children: ["= ", item.label]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flavor-legend__spacer" })
	] }, item.label);
}
const HomeForm = withForm({
	defaultValues: defaultFormValues,
	props: {
		configId: "",
		userOptions: void 0,
		configOptions: void 0
	},
	render: function Render({ form, configId }) {
		const [optionOptions] = (0, import_react.useState)(homeTriggerOption());
		const [systemOptions, setSystemOptions] = (0, import_react.useState)(homeTriggerSystem(form.state.values.option, configId, "jupyterlab"));
		const [flavorOptions, setFlavorOptions] = (0, import_react.useState)(homeTriggerFlavor(form.state.values.system));
		const getSystemType = (system) => {
			const systemConfig$3 = getSystemConfig();
			const ret = getBackendServices()[systemConfig$3[system].backendService]?.mapping ?? system;
			console.log("getSystemType result: ", ret);
			return ret;
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "name",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, { label: "Name" }), field.state.meta.errors?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "entry__error",
					children: field.state.meta.errors.map((err) => err.message ?? err).join(", ")
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "option",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "Option",
					options: optionOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "system",
				validators: {
					onChangeListenTo: ["option"],
					onChange: ({ value, fieldApi }) => {
						const options = homeTriggerSystem(fieldApi.form.getFieldValue("option"), configId, "jupyterlab");
						if (options.inactiveOptions && options.inactiveOptions[value]) {
							console.warn(`Selected value "${value}" is in inactive options. Resetting selection.`);
							const firstOption = Object.keys(options.options)[0];
							if (firstOption) fieldApi.handleChange(firstOption);
						}
						setSystemOptions(options ?? []);
					}
				},
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
					label: "System",
					options: systemOptions
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (state) => state.values.system,
				children: (system) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: getSystemType(system) === "unicore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HPCForm, {
					form,
					configId
				}) }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (state) => state.values.option,
				children: (option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: option === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomDockerForm, { form }) }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (state) => state.values.option,
				children: (option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: option === "repo2docker" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repo2DockerForm, { form }) }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (state) => state.values.system,
				children: (system) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: getSystemType(system) !== "unicore" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
						name: "flavor",
						validators: {
							onChangeListenTo: ["system"],
							onChange: ({ value, fieldApi }) => {
								const options = homeTriggerFlavor(fieldApi.form.getFieldValue("system"));
								console.log("homeTriggerFlavor onChange result: ", options);
								console.log("Selected flavor: ", value);
								if (value == "" && options.options && Object.keys(options.options).length > 0) {
									const firstOption = Object.keys(options.options)[0];
									fieldApi.handleChange(firstOption);
								}
								setFlavorOptions(options ?? []);
							}
						},
						listeners: { onMount: ({ value, fieldApi }) => {
							const options = homeTriggerFlavor(fieldApi.form.getFieldValue("system"));
							console.log("homeTriggerFlavor onMount result: ", options);
							setFlavorOptions(options ?? []);
							if (value == "" && options.options && Object.keys(options.options).length > 0) {
								const firstOption = Object.keys(options.options)[0];
								fieldApi.handleChange(firstOption);
							}
						} },
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
							label: "Flavor",
							options: flavorOptions
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlavorLegend_default, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlavorInfo_default, {
						system,
						flavors: void 0
					})
				] }) })
			})
		] });
	}
});
const EnvVariablesForm = withForm({
	defaultValues: defaultFormValues,
	render: function Render({ form }) {
		const handleAdd = () => {
			form.pushFieldValue("envvariables", {
				name: "JUPYTER_CUSTOM_VAR_",
				value: ""
			});
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "env-variables-entry",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "env-variables-entry__header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "env-variables-entry__header-text",
					children: "Add Environment Variables"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "env-variables-entry__add-btn",
					"aria-label": "Add environment variable",
					onClick: handleAdd,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "envvariables",
				mode: "array",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: field.state.value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "jh-table env-variables-entry__table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "jh-thead",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Variable Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Variable Value" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Action" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: field.state.value.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "jh-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
								name: `envvariables[${i}].name`,
								children: (subField) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: subField.state.value,
									className: "env-variables-entry__input",
									placeholder: "JUPYTER_CUSTOM_VAR_...",
									onChange: (e) => subField.handleChange(e.target.value),
									onBlur: subField.handleBlur
								}), subField.state.meta.errors?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "env-variables-entry__error",
									children: subField.state.meta.errors.map((err) => err.message ?? err).join(", ")
								})] })
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
								name: `envvariables[${i}].value`,
								children: (subField) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: subField.state.value,
									className: "env-variables-entry__input",
									onChange: (e) => subField.handleChange(e.target.value)
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "env-variables-entry__remove-btn",
								onClick: () => field.removeValue(i),
								"aria-label": "Remove variable",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {})
							}) })
						]
					}, i)) })]
				}) })
			})]
		});
	}
});
const ResourcesForm = withForm({
	defaultValues: defaultFormValues,
	render: function Render({ form }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "resources.nodes",
				listeners: { onBlur: () => {} },
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.resource, { label: "Nodes" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "resources.runtime",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.resource, { label: "Runtime (minutes)" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "resources.gpus",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.resource, { label: "GPUs" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "resources.xserver",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.resource, { label: "Use XServer GPU index" })
			})
		] });
	}
});
var defaultb2drop = {
	template: "b2drop",
	relativemountpath: "",
	readonly: false,
	path: "",
	user: "",
	obscure_pass: ""
};
const StorageForm = withForm({
	defaultValues: defaultFormValues,
	render: function Render({ form }) {
		const [templateOptions, setTemplateOptions] = (0, import_react.useState)({ options: {} });
		const [vendorOptions, setVendorOptions] = (0, import_react.useState)({ options: {} });
		const handleAdd = () => {
			form.pushFieldValue("storage.mounts", defaultb2drop);
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "env-variables-entry",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "env-variables-entry__header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "env-variables-entry__header-text",
					children: "Add Storage Mount"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "env-variables-entry__add-btn",
					"aria-label": "Add environment variable",
					onClick: handleAdd,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "storage.mounts",
				mode: "array",
				children: (field) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: field.state.value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "jh-table env-variables-entry__table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "jh-thead",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Template" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Action" })
							] })
						}), field.state.value.map((mount, i) => {
							const templateLabel = TemplateOptions.find((option) => option.value === mount.template)?.label ?? mount.template ?? "Template Value";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$3, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
									className: "jh-table__body",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$4, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "jh-row",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														width: "2rem",
														textAlign: "center"
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, { className: "storage-mount-chevron" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: templateLabel }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { textAlign: "center" },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "env-variables-entry__remove-btn",
														onClick: (e) => {
															e.stopPropagation();
															field.removeValue(i);
														},
														"aria-label": "Remove storage mount",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashIcon, {})
													})
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content$2, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											colSpan: 3,
											className: "jh-content-cell",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "env-variables-entry__content",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
													name: `storage.mounts[${i}].template`,
													listeners: { onMount: () => {
														setTemplateOptions({ options: Object.fromEntries(TemplateOptions.map((r) => [r.value, r.label])) });
													} },
													children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.select, {
														label: "Template",
														options: templateOptions
													})
												}, i), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
													selector: (state) => state.values.storage.mounts?.[i].template,
													children: (template) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
														template === "b2drop" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].relativemountpath`,
																listeners: { onMount: ({ fieldApi }) => {
																	fieldApi.form.setFieldValue(`storage.mounts[${i}].relativemountpath`, template);
																} },
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Relative Mount Path" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].readonly`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.checkbox, { label: "Read Only" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].path`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Path" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].user`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Username" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].obscure_pass`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, {
																	label: "Password",
																	secret: true
																})
															})
														] }),
														template === "aws" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].relativemountpath`,
																listeners: { onMount: ({ fieldApi }) => {
																	fieldApi.form.setFieldValue(`storage.mounts[${i}].relativemountpath`, template);
																} },
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Relative Mount Path" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].readonly`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.checkbox, { label: "Read Only" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].remotepath`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Bucket Name" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].region`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Region" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].access_key_id`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Username" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].secret_access_key`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, {
																	label: "Password",
																	secret: true
																})
															})
														] }),
														template === "s3" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].relativemountpath`,
																listeners: { onMount: ({ fieldApi }) => {
																	fieldApi.form.setFieldValue(`storage.mounts[${i}].relativemountpath`, template);
																} },
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Relative Mount Path" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].readonly`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.checkbox, { label: "Read Only" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].provider`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Provider" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].remotepath`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Bucket Name" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].endpoint`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Endpoint" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].access_key_id`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Username" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].secret_access_key`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, {
																	label: "Password",
																	secret: true
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].region`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Region" })
															})
														] }),
														template === "webdav" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].relativemountpath`,
																listeners: { onMount: ({ fieldApi }) => {
																	fieldApi.form.setFieldValue(`storage.mounts[${i}].relativemountpath`, template);
																} },
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Relative Mount Path" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].readonly`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.checkbox, { label: "Read Only" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].path`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Path" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].url`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "URL" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].vendor`,
																listeners: { onMount: () => {
																	setVendorOptions({ options: Object.fromEntries(VendorOptions.map((r) => [r.value, r.label])) });
																} },
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.select, {
																	label: "Vendor",
																	options: vendorOptions
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].user`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Username" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].obscure_pass`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, {
																	label: "Password",
																	secret: true
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
																name: `storage.mounts[${i}].bearer_token`,
																children: (subfield) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(subfield.text, { label: "Bearer Token" })
															})
														] })
													] })
												})]
											})
										}) })
									})]
								})
							}, i);
						})]
					}) });
				}
			})]
		});
	}
});
const ModuleGroupForm = withForm({
	defaultValues: defaultFormValues,
	props: {
		name: "modules.communities",
		label: "",
		config: []
	},
	render: function Render({ form, name, label, config: config$1 }) {
		const [group, key] = name.split(".");
		const selected = useStore(form.store, (state) => state.values[group][key]);
		const versionsMap = useStore(form.store, (state) => state.values.modules_versions);
		const sorted = [...config$1].sort((a, b) => b.weight - a.weight);
		const toggle = (mod) => {
			const current = selected ?? [];
			if (current.includes(mod.id)) {
				form.setFieldValue(name, current.filter((x) => x !== mod.id));
				if (`${key}_${mod.id}` in versionsMap) {
					const { [mod.id]: _, ...rest } = versionsMap;
					form.setFieldValue("modules_versions", rest);
				}
			} else {
				form.setFieldValue(name, [...current, mod.id]);
				if (mod.versions && mod.versions.length > 0) form.setFieldValue("modules_versions", {
					...versionsMap,
					[`${key}_${mod.id}`]: [mod.versions[0]]
				});
			}
		};
		const setVersion = (id, version$1) => {
			const baseID = `${key}_${id}`;
			form.setFieldValue("modules_versions", {
				...versionsMap,
				[baseID]: [version$1]
			});
		};
		const isChecked = (id) => (selected ?? []).includes(id);
		const getSelectedVersion = (id) => versionsMap[`${key}_${id}`]?.[0] ?? "";
		(0, import_react.useEffect)(() => {
			if (!selected || selected.length === 0) {
				const defaults = config$1.filter((m) => m.default).map((m) => m.id);
				form.setFieldValue(name, defaults);
				const defaultVersions = config$1.filter((m) => m.default && m.versions && m.versions.length > 0).reduce((acc, m) => ({
					...acc,
					[`${key}_${m.id}`]: [m.versions[0]]
				}), {});
				if (Object.keys(defaultVersions).length > 0) form.setFieldValue("modules_versions", {
					...versionsMap,
					...defaultVersions
				});
			}
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
			className: "module-group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: label }), sorted.map((mod) => {
				const checked = isChecked(mod.id);
				const checkboxId = `module-${name}-${mod.id}`;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "multiple-checkboxes__item",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: checkboxId,
							checked,
							onCheckedChange: () => toggle(mod),
							className: "multiple-checkboxes__checkbox",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {}) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
							htmlFor: checkboxId,
							children: mod.displayname
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mod.link,
							target: "_blank",
							rel: "noopener noreferrer",
							title: `More info about ${mod.displayname}`,
							"aria-label": `More info about ${mod.displayname}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCircledIcon, {})
						}),
						mod.versions && mod.versions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, {
							disabled: !checked,
							value: getSelectedVersion(mod.id),
							onValueChange: (v) => setVersion(mod.id, v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger$2, {
								className: "module-row__select-trigger",
								"aria-label": `${mod.displayname} version`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, { placeholder: "Select version…" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$1, {
								className: "module-row__select-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollUpButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUpIcon, {}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, { children: mod.versions.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
										value: v,
										className: "module-row__select-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: v }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, {}) })]
									}, v)) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollDownButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) })
								]
							}) })]
						})
					]
				}, mod.id);
			})]
		});
	}
});
const ModuleForm = withForm({
	defaultValues: defaultFormValues,
	render: function Render({ form }) {
		const system = useStore(form.store, (state) => state.values.system);
		const option = useStore(form.store, (state) => state.values.option);
		const systems = system ? [system] : [];
		const options = option ? [option] : [];
		console.log("ModuleForm", {
			system,
			option,
			systems,
			options
		});
		const communityModules = getModuleValues(options, systems, "JupyterLab", "communities", "communitySet");
		console.log("ModuleForm", { communityModules });
		const extensionModules = getModuleValues(options, systems, "JupyterLab", "extensions", "extensionSet");
		const kernelModules = getModuleValues(options, systems, "JupyterLab", "kernels", "kernelSet");
		const proxyModules = getModuleValues(options, systems, "JupyterLab", "proxies", "proxySet");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleGroupForm, {
				form,
				name: "modules.communities",
				label: "Communities",
				config: communityModules
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleGroupForm, {
				form,
				name: "modules.extensions",
				label: "Extensions",
				config: extensionModules
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleGroupForm, {
				form,
				name: "modules.kernels",
				label: "Kernels",
				config: kernelModules
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleGroupForm, {
				form,
				name: "modules.proxies",
				label: "Proxies",
				config: proxyModules
			})
		] });
	}
});
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial$1, replace) => {
		const nextState = typeof partial$1 === "function" ? partial$1(state) : partial$1;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState$3 = () => state;
	const getInitialState = () => initialState$1;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState: getState$3,
		getInitialState,
		subscribe
	};
	const initialState$1 = state = createState(setState, getState$3, api);
	return api;
};
var createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
var identity = (arg) => arg;
function useStore$1(api, selector = identity) {
	const slice = import_react.useSyncExternalStore(api.subscribe, import_react.useCallback(() => selector(api.getState()), [api, selector]), import_react.useCallback(() => selector(api.getInitialState()), [api, selector]));
	import_react.useDebugValue(slice);
	return slice;
}
var createImpl = (createState) => {
	const api = createStore(createState);
	const useBoundStore = (selector) => useStore$1(api, selector);
	Object.assign(useBoundStore, api);
	return useBoundStore;
};
var create = ((createState) => createState ? createImpl(createState) : createImpl);
var shouldDispatchFromDevtools = (api) => !!api.dispatchFromDevtools && typeof api.dispatch === "function";
var trackedConnections = /* @__PURE__ */ new Map();
var getTrackedConnectionState = (name) => {
	const api = trackedConnections.get(name);
	if (!api) return {};
	return Object.fromEntries(Object.entries(api.stores).map(([key, api2]) => [key, api2.getState()]));
};
var extractConnectionInformation = (store, extensionConnector, options) => {
	if (store === void 0) return {
		type: "untracked",
		connection: extensionConnector.connect(options)
	};
	const existingConnection = trackedConnections.get(options.name);
	if (existingConnection) return {
		type: "tracked",
		store,
		...existingConnection
	};
	const newConnection = {
		connection: extensionConnector.connect(options),
		stores: {}
	};
	trackedConnections.set(options.name, newConnection);
	return {
		type: "tracked",
		store,
		...newConnection
	};
};
var removeStoreFromTrackedConnections = (name, store) => {
	if (store === void 0) return;
	const connectionInfo = trackedConnections.get(name);
	if (!connectionInfo) return;
	delete connectionInfo.stores[store];
	if (Object.keys(connectionInfo.stores).length === 0) trackedConnections.delete(name);
};
var findCallerName = (stack) => {
	var _a$1, _b;
	if (!stack) return void 0;
	const traceLines = stack.split("\n");
	const apiSetStateLineIndex = traceLines.findIndex((traceLine) => traceLine.includes("api.setState"));
	if (apiSetStateLineIndex < 0) return void 0;
	const callerLine = ((_a$1 = traceLines[apiSetStateLineIndex + 1]) == null ? void 0 : _a$1.trim()) || "";
	return (_b = /.+ (.+) .+/.exec(callerLine)) == null ? void 0 : _b[1];
};
var devtoolsImpl = (fn, devtoolsOptions = {}) => (set, get, api) => {
	const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
	let extensionConnector;
	try {
		extensionConnector = (enabled != null ? enabled : true) && window.__REDUX_DEVTOOLS_EXTENSION__;
	} catch (e) {}
	if (!extensionConnector) return fn(set, get, api);
	const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
	let isRecording = true;
	api.setState = ((state, replace, nameOrAction) => {
		const r = set(state, replace);
		if (!isRecording) return r;
		const action = nameOrAction === void 0 ? { type: anonymousActionType || findCallerName((/* @__PURE__ */ new Error()).stack) || "anonymous" } : typeof nameOrAction === "string" ? { type: nameOrAction } : nameOrAction;
		if (store === void 0) {
			connection?.send(action, get());
			return r;
		}
		connection?.send({
			...action,
			type: `${store}/${action.type}`
		}, {
			...getTrackedConnectionState(options.name),
			[store]: api.getState()
		});
		return r;
	});
	api.devtools = { cleanup: () => {
		if (connection && typeof connection.unsubscribe === "function") connection.unsubscribe();
		removeStoreFromTrackedConnections(options.name, store);
	} };
	const setStateFromDevtools = (...a) => {
		const originalIsRecording = isRecording;
		isRecording = false;
		set(...a);
		isRecording = originalIsRecording;
	};
	const initialState$1 = fn(api.setState, get, api);
	if (connectionInformation.type === "untracked") connection?.init(initialState$1);
	else {
		connectionInformation.stores[connectionInformation.store] = api;
		connection?.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2]) => [key, key === connectionInformation.store ? initialState$1 : store2.getState()])));
	}
	if (shouldDispatchFromDevtools(api)) {
		let didWarnAboutReservedActionType = false;
		const originalDispatch = api.dispatch;
		api.dispatch = (...args) => {
			if (args[0].type === "__setState" && !didWarnAboutReservedActionType) {
				console.warn("[zustand devtools middleware] \"__setState\" action type is reserved to set state from the devtools. Avoid using it.");
				didWarnAboutReservedActionType = true;
			}
			originalDispatch(...args);
		};
	}
	connection.subscribe((message) => {
		var _a$1;
		switch (message.type) {
			case "ACTION":
				if (typeof message.payload !== "string") {
					console.error("[zustand devtools middleware] Unsupported action format");
					return;
				}
				return parseJsonThen(message.payload, (action) => {
					if (action.type === "__setState") {
						if (store === void 0) {
							setStateFromDevtools(action.state);
							return;
						}
						if (Object.keys(action.state).length !== 1) console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
						const stateFromDevtools = action.state[store];
						if (stateFromDevtools === void 0 || stateFromDevtools === null) return;
						if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) setStateFromDevtools(stateFromDevtools);
						return;
					}
					if (shouldDispatchFromDevtools(api)) api.dispatch(action);
				});
			case "DISPATCH":
				switch (message.payload.type) {
					case "RESET":
						setStateFromDevtools(initialState$1);
						if (store === void 0) return connection == null ? void 0 : connection.init(api.getState());
						return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
					case "COMMIT":
						if (store === void 0) {
							connection?.init(api.getState());
							return;
						}
						return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
					case "ROLLBACK": return parseJsonThen(message.state, (state) => {
						if (store === void 0) {
							setStateFromDevtools(state);
							connection?.init(api.getState());
							return;
						}
						setStateFromDevtools(state[store]);
						connection?.init(getTrackedConnectionState(options.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return parseJsonThen(message.state, (state) => {
						if (store === void 0) {
							setStateFromDevtools(state);
							return;
						}
						if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) setStateFromDevtools(state[store]);
					});
					case "IMPORT_STATE": {
						const { nextLiftedState } = message.payload;
						const lastComputedState = (_a$1 = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a$1.state;
						if (!lastComputedState) return;
						if (store === void 0) setStateFromDevtools(lastComputedState);
						else setStateFromDevtools(lastComputedState[store]);
						connection?.send(null, nextLiftedState);
						return;
					}
					case "PAUSE_RECORDING": return isRecording = !isRecording;
				}
				return;
		}
	});
	return initialState$1;
};
var devtools = devtoolsImpl;
var parseJsonThen = (stringified, fn) => {
	let parsed;
	try {
		parsed = JSON.parse(stringified);
	} catch (e) {
		console.error("[zustand devtools middleware] Could not parse the received json", e);
	}
	if (parsed !== void 0) fn(parsed);
};
var import_compiler_runtime$8 = require_compiler_runtime();
var initialState = {
	latestStatus: null,
	latestProgress: null,
	connectionStatus: "idle",
	error: null
};
const useSSEStore = create()(devtools((set) => ({
	...initialState,
	_setStatus: (msg) => set({ latestStatus: msg }, false, "sse/setStatus"),
	_setProgress: (msg) => set({ latestProgress: msg }, false, "sse/setProgress"),
	_setConnectionStatus: (connectionStatus, error = null) => set({
		connectionStatus,
		error
	}, false, "sse/setConnectionStatus"),
	_reset: () => set(initialState, false, "sse/reset")
}), { name: "SSEStore" }));
function useServerProgress(serverId) {
	return useSSEStore((s) => s.latestProgress?.progress[serverId]) ?? null;
}
function useServerState(serverId) {
	const $ = (0, import_compiler_runtime$8.c)(2);
	const servers = useSSEStore(_temp9);
	let t0;
	if ($[0] !== serverId) {
		t0 = (s_0) => s_0.latestProgress?.progress[serverId];
		$[0] = serverId;
		$[1] = t0;
	} else t0 = $[1];
	const progress = useSSEStore(t0);
	if (servers === void 0 && progress === void 0) return "unknown";
	const isStopped = servers?.stopped?.includes(serverId) ?? false;
	const isStopping = servers?.stopping?.includes(serverId) ?? false;
	const isStarting = (progress?.progress ?? 0) > 0;
	const isConnecting = progress?.ready ?? false;
	if (isStarting) return "starting";
	if (isStopped) return "stopped";
	if (isStopping) return "stopping";
	if (servers?.stopped?.includes(serverId) === false || progress?.ready && progress?.progress === 100) return "running";
	if (isConnecting) return "connecting";
	return "unknown";
}
function _temp9(s) {
	return s.latestStatus?.servers;
}
var import_compiler_runtime$7 = require_compiler_runtime();
function LogRow(t0) {
	const $ = (0, import_compiler_runtime$7.c)(10);
	const { entry } = t0;
	const html = entry.progress.html_message;
	if (html?.includes("<details")) {
		const t1$1 = `log-row${entry.progress.failed ? " log-row--failed" : ""}`;
		let t2$1;
		if ($[0] !== html) {
			t2$1 = { __html: html };
			$[0] = html;
			$[1] = t2$1;
		} else t2$1 = $[1];
		let t3$1;
		if ($[2] !== t1$1 || $[3] !== t2$1) {
			t3$1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: t1$1,
				dangerouslySetInnerHTML: t2$1
			});
			$[2] = t1$1;
			$[3] = t2$1;
			$[4] = t3$1;
		} else t3$1 = $[4];
		return t3$1;
	}
	const t1 = `log-row${entry.progress.failed ? " log-row--failed" : ""}`;
	const t2 = html ?? entry.progress.message ?? "";
	let t3;
	if ($[5] !== t2) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "log-row__message",
			dangerouslySetInnerHTML: { __html: t2 }
		});
		$[5] = t2;
		$[6] = t3;
	} else t3 = $[6];
	let t4;
	if ($[7] !== t1 || $[8] !== t3) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: t1,
			children: t3
		});
		$[7] = t1;
		$[8] = t3;
		$[9] = t4;
	} else t4 = $[9];
	return t4;
}
function Logger(t0) {
	const $ = (0, import_compiler_runtime$7.c)(10);
	const { configID } = t0;
	const serverProgress = useServerProgress(configID);
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = [];
		$[0] = t1;
	} else t1 = $[0];
	const [entries, setEntries] = (0, import_react.useState)(t1);
	let t2;
	if ($[1] !== configID || $[2] !== serverProgress) {
		t2 = () => {
			if (!serverProgress) return;
			setEntries((prev) => [...prev, {
				serverId: configID,
				progress: serverProgress
			}]);
		};
		$[1] = configID;
		$[2] = serverProgress;
		$[3] = t2;
	} else t2 = $[3];
	let t3;
	if ($[4] !== serverProgress) {
		t3 = [serverProgress];
		$[4] = serverProgress;
		$[5] = t3;
	} else t3 = $[5];
	(0, import_react.useEffect)(t2, t3);
	let t4;
	if ($[6] !== entries) {
		t4 = entries.map(_temp$4);
		$[6] = entries;
		$[7] = t4;
	} else t4 = $[7];
	let t5;
	if ($[8] !== t4) {
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "logger",
			children: t4
		});
		$[8] = t4;
		$[9] = t5;
	} else t5 = $[9];
	return t5;
}
function _temp$4(entry, i) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogRow, { entry }, i);
}
var import_compiler_runtime$6 = require_compiler_runtime();
var mappingdict = fillMappingDict();
var JupyterLabTab = (t0) => {
	const $ = (0, import_compiler_runtime$6.c)(49);
	const { form, configId, activeTab, onTabChange } = t0;
	console.log("JupyterLabTab component called with configId:", configId);
	const system = useStore(form.store, _temp$3);
	const option = useStore(form.store, _temp2$2);
	const partition = useStore(form.store, _temp3$1);
	const account = useStore(form.store, _temp4$1);
	const project = useStore(form.store, _temp5$1);
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = getFrontendConfig();
		$[0] = t1;
	} else t1 = $[0];
	const frontendConfig = t1;
	const tabs = frontendConfig.services.options[frontendConfig.services.default].navbar;
	let T0;
	let T1;
	let t2;
	let t3;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;
	if ($[1] !== account || $[2] !== activeTab || $[3] !== onTabChange || $[4] !== partition || $[5] !== project || $[6] !== system) {
		const [partitions, interactivePartition] = getPartitionAndInteractivePartition(system, account, project);
		const isInteractivePartition = (partition_0) => {
			if (partitions && Array.isArray(partitions)) return partitions.slice(interactivePartition).some((p) => p.includes(partition_0));
			else return false;
		};
		T1 = Root2;
		t7 = activeTab;
		t8 = onTabChange;
		t9 = "jupyter-lab-tabs";
		T0 = List;
		t2 = "jupyter-lab-tabs__list";
		if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
			t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
				value: "labconfig",
				className: "jupyter-lab-tabs__trigger",
				children: "Lab Config"
			}, "labconfig");
			$[17] = t3;
		} else t3 = $[17];
		if ($[18] !== system) {
			t4 = kubeSystems.includes(system) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
				value: "storage",
				className: "jupyter-lab-tabs__trigger",
				children: "Storage"
			}, "storage");
			$[18] = system;
			$[19] = t4;
		} else t4 = $[19];
		if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
			t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
				value: "envvariables",
				className: "jupyter-lab-tabs__trigger",
				children: "Environment Variables"
			}, "envvariables");
			$[20] = t5;
		} else t5 = $[20];
		t6 = isInteractivePartition(partition) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
			value: "resources",
			className: "jupyter-lab-tabs__trigger",
			children: "Resources"
		}, "resources");
		$[1] = account;
		$[2] = activeTab;
		$[3] = onTabChange;
		$[4] = partition;
		$[5] = project;
		$[6] = system;
		$[7] = T0;
		$[8] = T1;
		$[9] = t2;
		$[10] = t3;
		$[11] = t4;
		$[12] = t5;
		$[13] = t6;
		$[14] = t7;
		$[15] = t8;
		$[16] = t9;
	} else {
		T0 = $[7];
		T1 = $[8];
		t2 = $[9];
		t3 = $[10];
		t4 = $[11];
		t5 = $[12];
		t6 = $[13];
		t7 = $[14];
		t8 = $[15];
		t9 = $[16];
	}
	let t10;
	if ($[21] !== option) {
		t10 = mappingdict.jupyterlab.option[option] == "lmod" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
			value: "modules",
			className: "jupyter-lab-tabs__trigger",
			children: "Kernels and Extensions"
		}, "modules");
		$[21] = option;
		$[22] = t10;
	} else t10 = $[22];
	let t11;
	if ($[23] !== configId) {
		t11 = configId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
			value: "logs",
			className: "jupyter-lab-tabs__trigger",
			children: "Logs"
		}, "logs");
		$[23] = configId;
		$[24] = t11;
	} else t11 = $[24];
	let t12;
	if ($[25] !== T0 || $[26] !== t10 || $[27] !== t11 || $[28] !== t2 || $[29] !== t3 || $[30] !== t4 || $[31] !== t5 || $[32] !== t6) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
			className: t2,
			children: [
				t3,
				t4,
				t5,
				t6,
				t10,
				t11
			]
		});
		$[25] = T0;
		$[26] = t10;
		$[27] = t11;
		$[28] = t2;
		$[29] = t3;
		$[30] = t4;
		$[31] = t5;
		$[32] = t6;
		$[33] = t12;
	} else t12 = $[33];
	let t13;
	if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
		t13 = { width: "100%" };
		$[34] = t13;
	} else t13 = $[34];
	let t14;
	if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
		t14 = Object.entries(tabs);
		$[35] = t14;
	} else t14 = $[35];
	let t15;
	if ($[36] !== configId || $[37] !== form) {
		t15 = t14.map((t16$1) => {
			const [tabKey] = t16$1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
				value: tabKey,
				className: "jupyter-lab-tabs__content",
				children: [
					tabKey === "labconfig" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeForm, { form }),
					tabKey === "envvariables" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvVariablesForm, { form }),
					tabKey === "resources" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcesForm, { form }),
					tabKey === "storage" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StorageForm, { form }),
					tabKey === "modules" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleForm, { form }),
					tabKey === "logs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logger, { configID: configId }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "jupyter-lab-tabs__actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "jupyter-lab-tabs__actions-left",
							children: configId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.share, {
									label: "Share",
									configId
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.rtc, {
									label: "RTC",
									configId
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.url, {}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.save, {
									label: "Save",
									configId
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.resetButton, {}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.delete, {
									label: "Delete",
									configId
								}) })
							] })
						}), !configId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.startNew, {}) })]
					})
				]
			}, tabKey);
		});
		$[36] = configId;
		$[37] = form;
		$[38] = t15;
	} else t15 = $[38];
	let t16;
	if ($[39] !== configId || $[40] !== t15) {
		t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			style: t13,
			onSubmit: _temp6$1,
			children: t15
		}, configId);
		$[39] = configId;
		$[40] = t15;
		$[41] = t16;
	} else t16 = $[41];
	let t17;
	if ($[42] !== T1 || $[43] !== t12 || $[44] !== t16 || $[45] !== t7 || $[46] !== t8 || $[47] !== t9) {
		t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T1, {
			value: t7,
			onValueChange: t8,
			className: t9,
			children: [t12, t16]
		});
		$[42] = T1;
		$[43] = t12;
		$[44] = t16;
		$[45] = t7;
		$[46] = t8;
		$[47] = t9;
		$[48] = t17;
	} else t17 = $[48];
	return t17;
};
var JupyterLabTab_default = JupyterLabTab;
function _temp$3(state) {
	return state.values.system;
}
function _temp2$2(state_0) {
	return state_0.values.option;
}
function _temp3$1(state_1) {
	return state_1.values.hpc.partition;
}
function _temp4$1(state_2) {
	return state_2.values.hpc.account;
}
function _temp5$1(state_3) {
	return state_3.values.hpc.project;
}
function _temp6$1(e) {
	e.preventDefault();
	e.stopPropagation();
}
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
var import_compiler_runtime$5 = require_compiler_runtime();
const SummaryRowCells = (t0) => {
	const $ = (0, import_compiler_runtime$5.c)(56);
	const { optionType, system, option, repoType, repoUrl, project, partition } = t0;
	switch (optionType) {
		case "custom": {
			let t1;
			if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
				t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "System"
				});
				$[0] = t1;
			} else t1 = $[0];
			let t2;
			if ($[1] !== system) {
				t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: system
					})]
				});
				$[1] = system;
				$[2] = t2;
			} else t2 = $[2];
			let t3;
			if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
				t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Option"
				});
				$[3] = t3;
			} else t3 = $[3];
			let t4;
			if ($[4] !== option) {
				t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t3, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: option
					})]
				});
				$[4] = option;
				$[5] = t4;
			} else t4 = $[5];
			let t5;
			let t6;
			if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
				t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {});
				t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {});
				$[6] = t5;
				$[7] = t6;
			} else {
				t5 = $[6];
				t6 = $[7];
			}
			let t7;
			if ($[8] !== t2 || $[9] !== t4) {
				t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t2,
					t4,
					t5,
					t6
				] });
				$[8] = t2;
				$[9] = t4;
				$[10] = t7;
			} else t7 = $[10];
			return t7;
		}
		case "repo2docker": {
			let t1;
			if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
				t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "System"
				});
				$[11] = t1;
			} else t1 = $[11];
			let t2;
			if ($[12] !== system) {
				t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: system
					})]
				});
				$[12] = system;
				$[13] = t2;
			} else t2 = $[13];
			let t3;
			if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
				t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Option"
				});
				$[14] = t3;
			} else t3 = $[14];
			let t4;
			if ($[15] !== option) {
				t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t3, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: option
					})]
				});
				$[15] = option;
				$[16] = t4;
			} else t4 = $[16];
			let t5;
			if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
				t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Repository Type"
				});
				$[17] = t5;
			} else t5 = $[17];
			let t6;
			if ($[18] !== repoType) {
				t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t5, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: repoType
					})]
				});
				$[18] = repoType;
				$[19] = t6;
			} else t6 = $[19];
			let t7;
			if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
				t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Repo URL"
				});
				$[20] = t7;
			} else t7 = $[20];
			let t8;
			if ($[21] !== repoUrl) {
				t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t7, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: repoUrl
					})]
				});
				$[21] = repoUrl;
				$[22] = t8;
			} else t8 = $[22];
			let t9;
			if ($[23] !== t2 || $[24] !== t4 || $[25] !== t6 || $[26] !== t8) {
				t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t2,
					t4,
					t6,
					t8
				] });
				$[23] = t2;
				$[24] = t4;
				$[25] = t6;
				$[26] = t8;
				$[27] = t9;
			} else t9 = $[27];
			return t9;
		}
		case "hpc": {
			let t1;
			if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
				t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "System"
				});
				$[28] = t1;
			} else t1 = $[28];
			let t2;
			if ($[29] !== system) {
				t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: system
					})]
				});
				$[29] = system;
				$[30] = t2;
			} else t2 = $[30];
			let t3;
			if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
				t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Option"
				});
				$[31] = t3;
			} else t3 = $[31];
			let t4;
			if ($[32] !== option) {
				t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t3, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: option
					})]
				});
				$[32] = option;
				$[33] = t4;
			} else t4 = $[33];
			let t5;
			if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
				t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Project"
				});
				$[34] = t5;
			} else t5 = $[34];
			let t6;
			if ($[35] !== project) {
				t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t5, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: project
					})]
				});
				$[35] = project;
				$[36] = t6;
			} else t6 = $[36];
			let t7;
			if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
				t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Partition"
				});
				$[37] = t7;
			} else t7 = $[37];
			let t8;
			if ($[38] !== partition) {
				t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t7, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: partition
					})]
				});
				$[38] = partition;
				$[39] = t8;
			} else t8 = $[39];
			let t9;
			if ($[40] !== t2 || $[41] !== t4 || $[42] !== t6 || $[43] !== t8) {
				t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t2,
					t4,
					t6,
					t8
				] });
				$[40] = t2;
				$[41] = t4;
				$[42] = t6;
				$[43] = t8;
				$[44] = t9;
			} else t9 = $[44];
			return t9;
		}
		case "cloud":
		default: {
			let t1;
			if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
				t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "System"
				});
				$[45] = t1;
			} else t1 = $[45];
			let t2;
			if ($[46] !== system) {
				t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: system
					})]
				});
				$[46] = system;
				$[47] = t2;
			} else t2 = $[47];
			let t3;
			if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
				t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-cell__label",
					children: "Option"
				});
				$[48] = t3;
			} else t3 = $[48];
			let t4;
			if ($[49] !== option) {
				t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "jh-cell",
					children: [t3, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "jh-cell__value",
						children: option
					})]
				});
				$[49] = option;
				$[50] = t4;
			} else t4 = $[50];
			let t5;
			let t6;
			if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
				t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {});
				t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {});
				$[51] = t5;
				$[52] = t6;
			} else {
				t5 = $[51];
				t6 = $[52];
			}
			let t7;
			if ($[53] !== t2 || $[54] !== t4) {
				t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t2,
					t4,
					t5,
					t6
				] });
				$[53] = t2;
				$[54] = t4;
				$[55] = t7;
			} else t7 = $[55];
			return t7;
		}
	}
};
var import_compiler_runtime$4 = require_compiler_runtime();
var STATUS_LABELS = {
	stopped: "Stopped",
	stopping: "Stopping…",
	running: "Running",
	starting: "Starting…",
	connecting: "Connecting…"
};
var STATUS_VARIANTS = {
	running: "success",
	connecting: "success",
	starting: "info",
	stopping: "danger",
	stopped: "info"
};
function ProgressBar(t0) {
	const $ = (0, import_compiler_runtime$4.c)(17);
	const { serverId } = t0;
	const state = useServerState(serverId);
	const progress = useServerProgress(serverId);
	if (state === "stopped" || serverId == "") return null;
	const isStarting = state === "starting";
	const percent = isStarting ? progress?.progress ?? 0 : 100;
	if (progress?.url !== void 0 && progress?.url !== "") {
		const url = new URL(progress?.url ?? "", window.origin);
		console.log(`Opening server for serverId ${serverId} with URL ${url.toString()}`);
		window.open(url, "_blank");
	}
	const t1 = STATUS_VARIANTS[state];
	const t2 = `translateX(-${100 - percent}%)`;
	let t3;
	if ($[0] !== t2) {
		t3 = { transform: t2 };
		$[0] = t2;
		$[1] = t3;
	} else t3 = $[1];
	let t4;
	if ($[2] !== t1 || $[3] !== t3) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: "ProgressIndicator",
			"data-variant": t1,
			style: t3
		});
		$[2] = t1;
		$[3] = t3;
		$[4] = t4;
	} else t4 = $[4];
	let t5;
	if ($[5] !== isStarting || $[6] !== percent) {
		t5 = isStarting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ProgressPercent",
			children: [percent, "%"]
		});
		$[5] = isStarting;
		$[6] = percent;
		$[7] = t5;
	} else t5 = $[7];
	let t6;
	if ($[8] !== percent || $[9] !== t4 || $[10] !== t5) {
		t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
			className: "ProgressRoot",
			value: percent,
			children: [t4, t5]
		});
		$[8] = percent;
		$[9] = t4;
		$[10] = t5;
		$[11] = t6;
	} else t6 = $[11];
	const t7 = STATUS_LABELS[state];
	let t8;
	if ($[12] !== t7) {
		t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "progress-bar__status",
			children: t7
		});
		$[12] = t7;
		$[13] = t8;
	} else t8 = $[13];
	let t9;
	if ($[14] !== t6 || $[15] !== t8) {
		t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "progress-bar",
			children: [t6, t8]
		});
		$[14] = t6;
		$[15] = t8;
		$[16] = t9;
	} else t9 = $[16];
	return t9;
}
var import_compiler_runtime$3 = require_compiler_runtime();
var defaultSubmitAction = { submitAction: null };
var getOptionType = (option, system) => {
	if (option === "custom") return "custom";
	if (option === "repo2docker") return "repo2docker";
	if (kubeSystems.includes(system)) return "cloud";
	return "hpc";
};
var JupyterlabCollapsibleRow = (t0) => {
	const $ = (0, import_compiler_runtime$3.c)(49);
	const { configId, isFirst: t1 } = t0;
	const isFirst = t1 === void 0 ? false : t1;
	const serverState = useServerState(configId);
	let t2;
	if ($[0] !== configId) {
		const userOption = getTransformedUserOption(configId);
		t2 = formSchema.parse(userOption);
		$[0] = configId;
		$[1] = t2;
	} else t2 = $[1];
	const parsed = t2;
	let t3;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = getFrontendConfig();
		$[2] = t3;
	} else t3 = $[2];
	const frontendConfig = t3;
	const [activeTab, setActiveTab] = (0, import_react.useState)(frontendConfig.services.options[frontendConfig.services.default].default.tab);
	const [isRowOpen, setIsRowOpen] = (0, import_react.useState)(false);
	let t5;
	if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
		t5 = { onChange: formSchema };
		$[3] = t5;
	} else t5 = $[3];
	const form = useAppForm({
		defaultValues: parsed,
		onSubmitMeta: defaultSubmitAction,
		onSubmit: (t4) => {
			const { value, meta: meta$2 } = t4;
			bb6: switch (meta$2.submitAction) {
				case "url":
					console.log("Generated URL Query: ", buildHumanReadableQuery(value));
					break bb6;
				case "reset":
					form.reset();
					break bb6;
				case "submit":
					console.log("Form submitted with values: ", value);
					break bb6;
				default:
			}
		},
		validators: t5
	});
	const name = useStore(form.store, _temp$2);
	const system = useStore(form.store, _temp2$1);
	const option = useStore(form.store, _temp3);
	const repoType = useStore(form.store, _temp4);
	const repoUrl = useStore(form.store, _temp5);
	const project = useStore(form.store, _temp6);
	const partition = useStore(form.store, _temp7);
	let t6;
	if ($[4] !== option || $[5] !== system) {
		t6 = getOptionType(option, system);
		$[4] = option;
		$[5] = system;
		$[6] = t6;
	} else t6 = $[6];
	const optionType = t6;
	let t7;
	let t8;
	if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
		t7 = () => setIsRowOpen(true);
		t8 = () => setIsRowOpen(false);
		$[7] = t7;
		$[8] = t8;
	} else {
		t7 = $[7];
		t8 = $[8];
	}
	let t9;
	if ($[9] !== isRowOpen) {
		t9 = {
			isRowOpen,
			openRow: t7,
			closeRow: t8
		};
		$[9] = isRowOpen;
		$[10] = t9;
	} else t9 = $[10];
	let t10;
	if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
		t10 = { setActiveTab };
		$[11] = t10;
	} else t10 = $[11];
	let t11;
	let t12;
	if ($[12] !== isFirst) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: isFirst ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, { className: "jh-chevron" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, { className: "jh-chevron" }) });
		t12 = isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			colSpan: 7,
			children: "new jupyterlab"
		});
		$[12] = isFirst;
		$[13] = t11;
		$[14] = t12;
	} else {
		t11 = $[13];
		t12 = $[14];
	}
	let t13;
	if ($[15] !== configId || $[16] !== form.AppForm || $[17] !== form.cancel || $[18] !== form.open || $[19] !== form.start || $[20] !== form.stop || $[21] !== isFirst || $[22] !== name || $[23] !== option || $[24] !== optionType || $[25] !== partition || $[26] !== project || $[27] !== repoType || $[28] !== repoUrl || $[29] !== serverState || $[30] !== system) {
		t13 = !isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRowCells, {
				optionType,
				system,
				option,
				repoType,
				repoUrl,
				project,
				partition
			}),
			serverState == "unknown" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { colSpan: 2 }),
			serverState != "unknown" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { serverId: configId }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
				serverState === "stopped" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.start, { configId }) }),
				serverState === "stopping" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.cancel, { configId }) }),
				serverState === "starting" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.cancel, { configId }) }),
				serverState === "connecting" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "jh-server-status jh-server-status--connecting",
					children: "connecting"
				}),
				serverState === "running" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.open, { configId }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.stop, { configId }) })] })
			] })] })
		] });
		$[15] = configId;
		$[16] = form.AppForm;
		$[17] = form.cancel;
		$[18] = form.open;
		$[19] = form.start;
		$[20] = form.stop;
		$[21] = isFirst;
		$[22] = name;
		$[23] = option;
		$[24] = optionType;
		$[25] = partition;
		$[26] = project;
		$[27] = repoType;
		$[28] = repoUrl;
		$[29] = serverState;
		$[30] = system;
		$[31] = t13;
	} else t13 = $[31];
	let t14;
	if ($[32] !== t11 || $[33] !== t12 || $[34] !== t13) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$4, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "jh-row",
				children: [
					t11,
					t12,
					t13
				]
			})
		});
		$[32] = t11;
		$[33] = t12;
		$[34] = t13;
		$[35] = t14;
	} else t14 = $[35];
	let t15;
	if ($[36] !== activeTab || $[37] !== configId || $[38] !== form) {
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content$2, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 8,
				className: "jh-content-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JupyterLabTab_default, {
					activeTab,
					onTabChange: setActiveTab,
					form,
					configId
				})
			}) })
		});
		$[36] = activeTab;
		$[37] = configId;
		$[38] = form;
		$[39] = t15;
	} else t15 = $[39];
	let t16;
	if ($[40] !== t14 || $[41] !== t15) {
		t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
			className: "jh-table__body",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabContext.Provider, {
				value: t10,
				children: [t14, t15]
			})
		});
		$[40] = t14;
		$[41] = t15;
		$[42] = t16;
	} else t16 = $[42];
	let t17;
	if ($[43] !== isRowOpen || $[44] !== t16) {
		t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$3, {
			asChild: true,
			open: isRowOpen,
			onOpenChange: setIsRowOpen,
			children: t16
		});
		$[43] = isRowOpen;
		$[44] = t16;
		$[45] = t17;
	} else t17 = $[45];
	let t18;
	if ($[46] !== t17 || $[47] !== t9) {
		t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowContext.Provider, {
			value: t9,
			children: t17
		});
		$[46] = t17;
		$[47] = t9;
		$[48] = t18;
	} else t18 = $[48];
	return t18;
};
var JupyterLabCollabsibleRow_default = JupyterlabCollapsibleRow;
function _temp$2(state) {
	return state.values.name;
}
function _temp2$1(state_0) {
	return state_0.values.system;
}
function _temp3(state_1) {
	return state_1.values.option;
}
function _temp4(state_2) {
	return state_2.values.repo2docker?.repotype;
}
function _temp5(state_3) {
	return state_3.values.repo2docker?.repourl;
}
function _temp6(state_4) {
	return state_4.values.hpc?.project;
}
function _temp7(state_5) {
	return state_5.values.hpc?.partition;
}
var import_compiler_runtime$2 = require_compiler_runtime();
var Table = () => {
	const $ = (0, import_compiler_runtime$2.c)(3);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = getUserOptions();
		$[0] = t0;
	} else t0 = $[0];
	const configs = t0;
	let t1;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("colgroup", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "40px" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "15%" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "15%" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "15%" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "15%" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "15%" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "15%" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("col", { style: { width: "120px" } })
		] });
		$[1] = t1;
	} else t1 = $[1];
	let t2;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "jh-table",
			children: [
				t1,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "jh-thead",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Name" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							colSpan: 4,
							children: "Configuration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Action" })
					] })
				}),
				Object.entries(configs || {}).map(_temp$1)
			]
		});
		$[2] = t2;
	} else t2 = $[2];
	return t2;
};
var Table_default = Table;
function _temp$1(t0) {
	const [configId] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JupyterLabCollabsibleRow_default, {
		configId,
		isFirst: configId == ""
	}, configId);
}
var import_compiler_runtime$1 = require_compiler_runtime();
var LogoutDialog = () => {
	const $ = (0, import_compiler_runtime$1.c)(28);
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
			console.log("Logging out...", {
				stopJupyterLabs,
				logoutAllDevices
			});
			setOpen(false);
		};
		$[2] = logoutAllDevices;
		$[3] = stopJupyterLabs;
		$[4] = t2;
	} else t2 = $[4];
	const handleLogout = t2;
	let t3;
	if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, { className: "logout-overlay" });
		$[5] = t3;
	} else t3 = $[5];
	let t4;
	let t5;
	if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
			className: "logout-title",
			children: "Logout"
		});
		t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
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
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
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
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
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
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Portal2, { children: [t3, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$2, {
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
		t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$2, {
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
var LogoutDialog_default = LogoutDialog;
function isStatusMessage(msg) {
	return "usercount" in msg;
}
function isProgressMessage(msg) {
	return "progress" in msg;
}
var RECONNECT_DELAY_MS = 3e3;
var SSE_TIMEOUT_MS = 8e4;
const sseService = new class SSEService {
	eventSource = null;
	url = null;
	reconnectTimer = null;
	watchdogTimer = null;
	shouldReconnect = false;
	connect(url) {
		if (this.eventSource) {
			console.warn("SSEService: already connected, call disconnect() first");
			return;
		}
		if (!url) this.url = SSEService.buildUrl(window.jhdata.base_url, window.jhdata.user, window.jhdata.xsrf_token);
		else this.url = url;
		this.shouldReconnect = true;
		this._open();
	}
	disconnect() {
		this.shouldReconnect = false;
		this._clearReconnectTimer();
		this._clearWatchdog();
		this._close();
		useSSEStore.getState()._reset();
	}
	static buildUrl(baseUrl, user, xsrfToken) {
		if (user && xsrfToken) return `${baseUrl}api/sse/${user}?_xsrf=${xsrfToken}`;
		return `${baseUrl}api/sse`;
	}
	_open() {
		if (!this.url) return;
		const { _setStatus, _setProgress, _setConnectionStatus } = useSSEStore.getState();
		_setConnectionStatus("connecting");
		this.eventSource = new EventSource(this.url);
		this.eventSource.onopen = () => {
			_setConnectionStatus("connected");
			this._resetWatchdog();
		};
		this.eventSource.onmessage = (event) => {
			this._resetWatchdog();
			try {
				const raw = JSON.parse(event.data);
				if (isStatusMessage(raw)) _setStatus(raw);
				else if (isProgressMessage(raw)) _setProgress(raw);
				else console.warn("SSEService: unknown message shape", raw);
			} catch (err) {
				console.error("SSEService: failed to parse message", event.data, err);
			}
		};
		this.eventSource.onerror = () => {
			this._close();
			this._clearWatchdog();
			_setConnectionStatus("disconnected", "Connection lost");
			if (this.shouldReconnect) this._scheduleReconnect();
		};
	}
	_close() {
		this.eventSource?.close();
		this.eventSource = null;
	}
	_resetWatchdog() {
		this._clearWatchdog();
		this.watchdogTimer = setTimeout(() => {
			console.warn(`SSEService: no updates for ${SSE_TIMEOUT_MS / 1e3}s — reloading page`);
			location.reload();
		}, SSE_TIMEOUT_MS);
	}
	_clearWatchdog() {
		if (this.watchdogTimer !== null) {
			clearTimeout(this.watchdogTimer);
			this.watchdogTimer = null;
		}
	}
	_scheduleReconnect() {
		this._clearReconnectTimer();
		this.reconnectTimer = setTimeout(() => {
			if (this.shouldReconnect) this._open();
		}, RECONNECT_DELAY_MS);
	}
	_clearReconnectTimer() {
		if (this.reconnectTimer !== null) {
			clearTimeout(this.reconnectTimer);
			this.reconnectTimer = null;
		}
	}
}();
var import_compiler_runtime = require_compiler_runtime();
var App = () => {
	const $ = (0, import_compiler_runtime.c)(2);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = [];
		$[0] = t0;
	} else t0 = $[0];
	(0, import_react.useEffect)(_temp2, t0);
	let t1;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.StrictMode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "home-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock_default, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table_default, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { margin: 5 } })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoutDialog_default, {})] });
		$[1] = t1;
	} else t1 = $[1];
	return t1;
};
var App_default = App;
function _temp() {
	return sseService.disconnect();
}
function _temp2() {
	sseService.connect();
	return _temp;
}
(0, import_client.createRoot)(document.getElementById("react-home-hook")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App_default, {}));

//# sourceMappingURL=home.js.map