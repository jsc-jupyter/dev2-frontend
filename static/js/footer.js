import { a as require_react, n as require_compiler_runtime, r as require_client, s as __toESM, t as require_jsx_runtime } from "./chunks/jsx-runtime-Br9Np9gf.js";
var import_compiler_runtime = require_compiler_runtime();
var import_client = require_client();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var helmholtz_default = "/static/js/assets/helmholtz.png";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var Footer = () => {
	const $ = (0, import_compiler_runtime.c)(4);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "footer-top",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {},
				children: "Carousel broke"
			})
		});
		$[0] = t0;
	} else t0 = $[0];
	let t1;
	let t2;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "footer-link-text",
			href: "https://www.fz-juelich.de/",
			children: "© Forschungszentrum Jülich"
		});
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { flexGrow: 1 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "footer-link-text",
					href: "/hub/imprint",
					children: "Legal Notice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " | " }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "footer-link-text",
					href: "/hub/privacy",
					children: "Privacy Policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " | " }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "footer-link-text",
					href: "/hub/terms",
					children: "Terms of Service"
				})
			]
		});
		$[1] = t1;
		$[2] = t2;
	} else {
		t1 = $[1];
		t2 = $[2];
	}
	let t3;
	if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-container",
			children: [t0, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [
					t1,
					t2,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.helmholtz.de/en/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: helmholtz_default,
							width: 220,
							alt: "Hemholtz Logo"
						})
					}) })
				]
			})]
		}) });
		$[3] = t3;
	} else t3 = $[3];
	return t3;
};
var Footer_default = Footer;
(0, import_client.createRoot)(document.getElementById("react-footer-hook")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer_default, {}));

//# sourceMappingURL=footer.js.map