import { n as require_compiler_runtime } from "./jsx-runtime-Ci6bW1BI.js";
import { t as create } from "./react-p3UJvfrU.js";
// node_modules/.pnpm/zustand@5.1.0_@types+react@19.3.0_immer@11.2.10_react@19.3.1_use-sync-external-store@1.7.0_react@19.3.1_/node_modules/zustand/esm/middleware.mjs
var import_compiler_runtime = require_compiler_runtime();
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
var removeStoreFromTrackedConnections = (name, store, api) => {
	if (store === void 0) return;
	const connectionInfo = trackedConnections.get(name);
	if ((connectionInfo == null ? void 0 : connectionInfo.stores[store]) !== api) return;
	delete connectionInfo.stores[store];
	if (Object.keys(connectionInfo.stores).length === 0) trackedConnections.delete(name);
};
var v8StackLineRe = /^at (?:new |async )?(.+?) \(/;
var geckoStackLineRe = /^([^@]+)@/;
function findCallerName(stack) {
	var _a, _b, _c;
	if (!stack) return void 0;
	const traceLines = stack.split("\n");
	const apiSetStateLineIndex = traceLines.findIndex((traceLine) => traceLine.includes("api.setState"));
	if (apiSetStateLineIndex < 0) return void 0;
	const callerLine = ((_a = traceLines[apiSetStateLineIndex + 1]) == null ? void 0 : _a.trim()) || "";
	return ((_b = v8StackLineRe.exec(callerLine)) == null ? void 0 : _b[1]) || ((_c = geckoStackLineRe.exec(callerLine)) == null ? void 0 : _c[1]);
}
var devtoolsImpl = (fn, devtoolsOptions = {}) => (set, get, api) => {
	const { enabled, anonymousActionType, store, actionCreators, ...options } = devtoolsOptions;
	let extensionConnector;
	try {
		extensionConnector = (enabled != null ? enabled : true) && window.__REDUX_DEVTOOLS_EXTENSION__;
	} catch (e) {}
	if (!extensionConnector) return fn(set, get, api);
	let connection = void 0;
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
	let unsubscribeFromStore;
	api.devtools = { cleanup: () => {
		unsubscribeFromStore?.();
		unsubscribeFromStore = void 0;
		removeStoreFromTrackedConnections(options.name, store, api);
		if ((store === void 0 || !trackedConnections.has(options.name)) && connection && typeof connection.unsubscribe === "function") connection.unsubscribe();
	} };
	const setStateFromDevtools = (...a) => {
		const originalIsRecording = isRecording;
		isRecording = false;
		set(...a);
		isRecording = originalIsRecording;
	};
	const initialState = fn(api.setState, get, api);
	const actionCreatorObjects = actionCreators && getActionCreatorObjects(initialState, actionCreators);
	const connectionInformation = extractConnectionInformation(store, extensionConnector, {
		...options,
		actionCreators: actionCreatorObjects
	});
	connection = connectionInformation.connection;
	const findActionCreator = (name) => {
		const actionCreator = actionCreatorObjects == null ? void 0 : actionCreatorObjects.find((candidate) => candidate.name === name);
		if (!actionCreator && actionCreators && store === void 0) console.error(`[zustand devtools middleware] Action type "${name}" not found in actionCreators`);
		return actionCreator;
	};
	if (connectionInformation.type === "untracked") connection?.init(initialState);
	else {
		connectionInformation.stores[connectionInformation.store] = api;
		connection?.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2]) => [key, key === connectionInformation.store ? initialState : store2.getState()])));
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
	unsubscribeFromStore = connection.subscribe((message) => {
		var _a;
		const reviver = typeof options.serialize === "object" ? options.serialize.reviver : void 0;
		switch (message.type) {
			case "ACTION": {
				if (typeof message.payload !== "string") {
					if (shouldDispatchFromDevtools(api)) {
						console.error("[zustand devtools middleware] The action dropdown is not supported with the redux middleware. Dispatch a custom action in JSON format instead, e.g. { \"type\": \"increment\" }");
						return;
					}
					if (!actionCreators) {
						console.error("[zustand devtools middleware] Unsupported action format");
						return;
					}
					const actionCreator2 = findActionCreator(message.payload.name);
					if (!actionCreator2) return;
					const args2 = parseDropdownArgs(message.payload, reviver);
					if (!args2) return;
					return actionCreator2.func(...args2);
				}
				let action;
				try {
					action = JSON.parse(message.payload, reviver);
				} catch (e) {
					let errorMessage = `[zustand devtools middleware] Malformed JSON. When dispatching custom actions, please format the payload as a JSON string.
              Examples:`;
					if (shouldDispatchFromDevtools(api)) errorMessage += `
              - { "type": "increment", "amount": 1 }
              - { "type": "reset" }
              `;
					else errorMessage += `
              - { "type": "increment" }
              - { "type": "increment", "args": [1] }
              If you have args with default values or want to be \`undefined\`, prefer using the object syntax so you can omit them.
              - { "type": "increment", "args": { "amount": 1 } }
              `;
					console.error(errorMessage.replace(/\n\s+/g, "\n"));
					return;
				}
				if (action.type === "__setState") {
					if (store === void 0) {
						if (!("state" in action)) {
							console.warn(`
                  [zustand devtools middleware] Calling __setState without a state property.
                  This may not be what you intended, you should explicitly set the state you want to set.
                  Example: { "type": "__setState", "state": { "foo": "bar" } }
                  `.replace(/\n\s+/g, "\n"));
							return;
						}
						setStateFromDevtools(action.state);
						return;
					}
					if (Object.keys(action.state).length !== 1) console.error(`
                [zustand devtools middleware] Unsupported __setState action format.
                When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                `.replace(/\n\s+/g, "\n"));
					const stateFromDevtools = action.state[store];
					if (stateFromDevtools === void 0 || stateFromDevtools === null) return;
					if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) setStateFromDevtools(stateFromDevtools);
					return;
				}
				if (shouldDispatchFromDevtools(api)) {
					api.dispatch(action);
					return;
				}
				const actionCreator = findActionCreator(action.type);
				if (!actionCreator) return;
				const args = action.args;
				return actionCreator.func(...Array.isArray(args) ? args : actionCreator.args.map((name) => args == null ? void 0 : args[name]));
			}
			case "DISPATCH":
				switch (message.payload.type) {
					case "RESET":
						setStateFromDevtools(initialState);
						if (store === void 0) return connection == null ? void 0 : connection.init(api.getState());
						return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
					case "COMMIT":
						if (store === void 0) {
							connection?.init(api.getState());
							return;
						}
						return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
					case "ROLLBACK": return parseJsonThen(message.state, reviver, (state) => {
						if (store === void 0) {
							setStateFromDevtools(state);
							connection?.init(api.getState());
							return;
						}
						setStateFromDevtools(state[store]);
						connection?.init(getTrackedConnectionState(options.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return parseJsonThen(message.state, reviver, (state) => {
						if (store === void 0) {
							setStateFromDevtools(state);
							return;
						}
						if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) setStateFromDevtools(state[store]);
					});
					case "IMPORT_STATE": {
						const { nextLiftedState } = message.payload;
						const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
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
	return initialState;
};
var devtools = devtoolsImpl;
var parseJsonThen = (stringified, reviver, fn) => {
	let parsed;
	try {
		parsed = JSON.parse(stringified, reviver);
	} catch (e) {
		console.error("[zustand devtools middleware] Could not parse the received json", e);
	}
	if (parsed !== void 0) fn(parsed);
};
function maskToRegex(mask) {
	const escaped = mask.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*\*|\*/g, (wildcard) => wildcard === "**" ? ".*" : "[^.]*");
	return new RegExp(`^${escaped}$`);
}
var isPlainObject = (value) => typeof value === "object" && value !== null && Object.getPrototypeOf(value) === Object.prototype;
var getStateFunctions = (state, walked = /* @__PURE__ */ new Map()) => {
	var _a;
	if (!isPlainObject(state)) return [];
	const known = walked.get(state);
	if (known) return known;
	walked.set(state, []);
	const functions = [];
	for (const key of Object.keys(state)) {
		const value = (_a = Object.getOwnPropertyDescriptor(state, key)) == null ? void 0 : _a.value;
		if (typeof value === "function") functions.push([key, value]);
		else for (const [path, func] of getStateFunctions(value, walked)) functions.push([`${key}.${path}`, func]);
	}
	walked.set(state, functions);
	return functions;
};
var sourceTokenRe = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\*[\s\S]*?\*\/|\/\/.*|[\s\S]/g;
var getParamNames = (func) => {
	var _a, _b;
	const tokens = ((_a = func.toString().match(sourceTokenRe)) != null ? _a : []).filter((token) => !/^\/[/*]/.test(token));
	const arrowParam = (_b = /^(?:async\s+)?([^\s(=]+)\s*=>/.exec(tokens.join(""))) == null ? void 0 : _b[1];
	if (arrowParam) return [arrowParam];
	const params = [""];
	let depth = 0;
	let inDefaultValue = false;
	for (const token of tokens.slice(tokens.indexOf("(") + 1)) {
		if (depth === 0) {
			if (token === ")") break;
			if (token === ",") {
				params.push("");
				inDefaultValue = false;
				continue;
			}
			if (token === "=") inDefaultValue = true;
		}
		if ("([{".includes(token)) depth++;
		if (")]}".includes(token)) depth--;
		if (!inDefaultValue) params[params.length - 1] += token;
	}
	return params.map((param) => param.trim()).filter((param) => param && !param.startsWith("..."));
};
var createActionCreatorObject = (name, func) => ({
	name,
	func,
	args: getParamNames(func)
});
function getActionCreatorObjects(state, actionCreators) {
	const actions = /* @__PURE__ */ new Map();
	const matchers = Object.entries(actionCreators).map(([key, picked]) => ({
		matcher: maskToRegex(key),
		picked,
		key
	})).sort((a, b) => {
		const aIsDoubleWildcard = a.key.includes("**");
		const bIsDoubleWildcard = b.key.includes("**");
		if (aIsDoubleWildcard !== bIsDoubleWildcard) return aIsDoubleWildcard ? -1 : 1;
		const aIsSingleWildcard = a.key.includes("*") && !aIsDoubleWildcard;
		if (aIsSingleWildcard !== (b.key.includes("*") && !bIsDoubleWildcard)) return aIsSingleWildcard ? -1 : 1;
		return a.key.length - b.key.length;
	});
	for (const [name, func] of getStateFunctions(state)) for (const { matcher, picked } of matchers) if (matcher.test(name)) {
		if (picked === false) {
			actions.delete(name);
			continue;
		}
		actions.set(name, createActionCreatorObject(name, func));
	}
	for (const [name, picked] of Object.entries(actionCreators)) if (typeof picked === "function") actions.set(name, createActionCreatorObject(name, picked));
	return Array.from(actions.values());
}
var parseDropdownArgs = ({ args, rest }, reviver) => {
	var _a;
	const parse = (arg) => arg ? JSON.parse(arg, reviver) : void 0;
	try {
		const restArgs = (_a = parse(rest)) != null ? _a : [];
		if (!Array.isArray(restArgs)) throw new Error("...rest is not an array");
		return [...args.map(parse), ...restArgs];
	} catch (e) {
		console.error("[zustand devtools middleware] Could not parse the arguments from the action dropdown. Each one must be JSON, e.g. 5, \"foo\" or { \"by\": 5 }, and ...rest a JSON array.", e);
		return;
	}
};
// src/stores/SSEStore.ts
var EMPTY_PROGRESS_HISTORY = [];
var initialState = {
	latestStatus: null,
	latestProgress: null,
	progressHistory: {},
	connectionStatus: "idle",
	error: null
};
var useSSEStore = create()(devtools((set) => ({
	...initialState,
	_setStatus: (msg) => set({ latestStatus: msg }, false, "sse/setStatus"),
	_setProgress: (msg) => set((state) => {
		const progressHistory = { ...state.progressHistory };
		for (const [serverId, progress] of Object.entries(msg.progress)) progressHistory[serverId] = [...progressHistory[serverId] ?? [], progress];
		return {
			latestProgress: msg,
			progressHistory
		};
	}, false, "sse/setProgress"),
	_setConnectionStatus: (connectionStatus, error = null) => set({
		connectionStatus,
		error
	}, false, "sse/setConnectionStatus"),
	_reset: () => set(initialState, false, "sse/reset")
}), { name: "SSEStore" }));
function useLatestStatus() {
	return useSSEStore(_temp2);
}
function _temp2(s) {
	return s.latestStatus;
}
function useServerProgress(serverId) {
	return useSSEStore((s) => s.latestProgress?.progress[serverId]) ?? null;
}
function useServerProgressHistory(serverId) {
	const $ = (0, import_compiler_runtime.c)(2);
	let t0;
	if ($[0] !== serverId) {
		t0 = (s) => s.progressHistory[serverId] ?? EMPTY_PROGRESS_HISTORY;
		$[0] = serverId;
		$[1] = t0;
	} else t0 = $[1];
	return useSSEStore(t0);
}
function useServerState(serverId) {
	const $ = (0, import_compiler_runtime.c)(2);
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
	const hasFailed = progress?.failed ?? false;
	console.log(`useServerState: serverId=${serverId}, isStopped=${isStopped}, isStopping=${isStopping}, isStarting=${isStarting}, isConnecting=${isConnecting}`);
	if (servers?.stopped?.includes(serverId) === false && !progress || progress?.ready && progress?.progress === 100) return "running";
	if (hasFailed) return "failed";
	if (isConnecting) return "connecting";
	if (isStarting) return "starting";
	if (isStopped) return "stopped";
	if (isStopping) return "stopping";
	return "unknown";
}
function _temp9(s) {
	return s.latestStatus?.servers;
}
function useCarouselItems() {
	const $ = (0, import_compiler_runtime.c)(3);
	const status = useLatestStatus();
	let t0;
	if ($[0] !== status?.incidents || $[1] !== status?.usercount) {
		t0 = Object.entries(status?.incidents ?? {}).map((t1) => {
			const [system, incident] = t1;
			const normalizedSystem = system === "JSC-Cloud" ? "JSCCLOUD" : system;
			const usercountKey = normalizedSystem === "JSCCLOUD" ? "JSC-Cloud" : normalizedSystem;
			const usercountEntry = status?.usercount?.[usercountKey];
			return {
				system: normalizedSystem,
				incident,
				usercount: typeof usercountEntry === "number" ? usercountEntry : usercountEntry?.total ?? 0,
				href: `/hub/${encodeURIComponent(usercountKey.toLowerCase())}`
			};
		});
		$[0] = status?.incidents;
		$[1] = status?.usercount;
		$[2] = t0;
	} else t0 = $[2];
	return t0;
}
export { useServerState as a, useServerProgressHistory as i, useLatestStatus as n, useServerProgress as r, useCarouselItems as t };

//# sourceMappingURL=SSEStore-46AqF-6h.js.map