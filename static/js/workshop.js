import { a as require_react, n as require_compiler_runtime, r as require_client, s as __toESM, t as require_jsx_runtime } from "./chunks/jsx-runtime-Ci6bW1BI.js";
import { B as envVariableSchema, C as homeTriggerSystem, G as boolean, H as repo2dockerSchema, J as optional, K as int, O as getBackendServices, R as baseCustomSchema, U as resourcesSchema, V as modulesSchema, W as array, X as string, Y as record, a as withForm, b as homeTriggerPartition, dt as Collapsible, ft as CollapsibleContent, g as getModuleValues, h as useSelector, i as useAppForm, k as getSystemConfig, l as RowContext, n as LogoutDialog, pt as CollapsibleTrigger, q as object, r as buildHumanReadableQuery, t as WorkshopContext, v as homeTriggerFlavor, w as fillMappingDict, x as homeTriggerProject, y as homeTriggerOption, z as baseHpcSchema } from "./chunks/WorkshopContext-CDvHrYY5.js";
import { a as ChevronDownIcon, m as PlusIcon } from "./chunks/react-p3UJvfrU.js";
import { t as Button } from "./chunks/main-CXKyoRHG.js";
// src/components/form/workshop/schema.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
var import_compiler_runtime = require_compiler_runtime();
var hpcSchema = baseHpcSchema.extend({
	partition: optional(array(string().trim())),
	project: optional(array(string().trim())),
	reservation: optional(array(string().trim()))
});
var workshopSchema = object({
	workshop_id: string().trim(),
	instructor_user_id: int(),
	user_options: object({
		description: string().trim(),
		expertmode: boolean(),
		name: string().trim(),
		workshop_storage_rw: boolean(),
		workshop_tutor_server_access: boolean(),
		workshopid: string().trim(),
		secret_keys: array(string().trim()),
		profile: string().trim(),
		option: optional(string().trim()),
		system: optional(string().trim()),
		service: string().trim(),
		userlist: optional(string().trim()),
		tutorlist: optional(string().trim()),
		defaultvalues: optional(record(string().trim(), string().trim())),
		resources: resourcesSchema,
		envvariables: optional(array(envVariableSchema)),
		hpc: optional(hpcSchema),
		modules: optional(modulesSchema),
		repo2docker: optional(repo2dockerSchema),
		custom: optional(baseCustomSchema),
		storage: optional(object({ localstoragepath: optional(string().trim()).prefault("/home/jovyan/work") })),
		flavor: optional(string().trim())
	})
});
var workshopEmpty = {
	workshop_id: "default",
	instructor_user_id: 0,
	user_options: {
		workshopid: "default",
		description: "",
		userlist: "",
		tutorlist: "",
		workshop_tutor_server_access: false,
		workshop_storage_rw: false,
		option: "4.5",
		system: "default",
		envvariables: {},
		expertmode: false,
		name: "",
		profile: "4.5",
		service: "jupyterlab",
		flavor: "",
		defaultvalues: {},
		resources: {
			nodes: "",
			runtime: "",
			gpus: "",
			xserver: ""
		},
		modules: {
			kernels: [],
			proxies: [],
			communities: [],
			extensions: []
		},
		secret_keys: [],
		storage: { localstoragepath: "/home/jovyan/work" },
		hpc: {
			partition: [],
			project: [],
			reservation: []
		},
		repo2docker: {
			repotype: "gh",
			repourl: "",
			reporef: "",
			repopath: "",
			repopathtype: "file"
		},
		custom: {
			customimage: "jupyter/datascience-notebook",
			privaterepo: "",
			privaterepousername: ""
		}
	}
};
// src/components/form/shared/systemHelper.ts
var getSystemType = (system) => {
	const systemConfig = getSystemConfig();
	const backendServicesConfig = getBackendServices();
	if (!system) return "none";
	if (Array.isArray(system)) {
		for (const sys of system) {
			const backendService = systemConfig[sys]?.backendService;
			if (!backendService) {
				console.warn("No backend service found for system:", sys);
				continue;
			}
			backendServicesConfig[backendService]?.mapping;
		}
		return "cloud";
	} else {
		const backendService = systemConfig[system]?.backendService;
		console.log("Backend service for system", system, ":", backendService);
		if (!backendService) {
			console.warn("No backend service found for system:", system);
			return "cloud";
		}
		return (backendServicesConfig[backendService]?.mapping ?? system) == "unicore" ? "hpc" : "cloud";
	}
};
// src/components/form/workshop/ModulesFormToggle.tsx
var import_jsx_runtime = require_jsx_runtime();
var ModulesToggleForm = withForm({
	defaultValues: workshopEmpty,
	render: function Render({ form }) {
		const system = useSelector(form.store, (state) => state.values.user_options.system);
		const option = useSelector(form.store, (state) => state.values.user_options.option);
		const systems = system ? [system] : [];
		const options = option ? [option] : [];
		const communityModules = Object.fromEntries(getModuleValues(options, systems, "JupyterLab", "communities", "communitySet").map((mod) => [mod.id, mod.displayname]));
		const extensionModules = Object.fromEntries(getModuleValues(options, systems, "JupyterLab", "extensions", "extensionSet").map((mod) => [mod.id, mod.displayname]));
		const kernelModules = Object.fromEntries(getModuleValues(options, systems, "JupyterLab", "kernels", "kernelSet").map((mod) => [mod.id, mod.displayname]));
		const proxyModules = Object.fromEntries(getModuleValues(options, systems, "JupyterLab", "proxies", "proxySet").map((mod) => [mod.id, mod.displayname]));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "user_options.modules.communities",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.toggle, {
					label: "Communities",
					options: communityModules,
					hasCheckbox: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "user_options.modules.extensions",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.toggle, {
					label: "Extensions",
					options: extensionModules,
					hasCheckbox: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "user_options.modules.kernels",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.toggle, {
					label: "Kernels",
					options: kernelModules,
					hasCheckbox: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
				name: "user_options.modules.proxies",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.toggle, {
					label: "Proxies",
					options: proxyModules,
					hasCheckbox: true
				})
			})
		] });
	}
});
// src/components/form/workshop/WorkshopForm.tsx
var WorkshopForm = withForm({
	defaultValues: workshopEmpty,
	validators: { onChange: workshopSchema },
	render: function Render({ form }) {
		const mappingdict = fillMappingDict();
		const [optionOptions] = (0, import_react.useState)(homeTriggerOption());
		const [systemOptions, setSystemOptions] = (0, import_react.useState)(homeTriggerSystem(form.getFieldValue("user_options.option"), "jupyterlab"));
		const [projectOptions, setProjectOptions] = (0, import_react.useState)(homeTriggerProject(form.getFieldValue("user_options.system"), "", "configId", "jupyterlab"));
		console.log("Project options:", projectOptions);
		const [partitionOptions, setPartitionOptions] = (0, import_react.useState)({ options: {} });
		const [flavorOptions, setFlavorOptions] = (0, import_react.useState)(homeTriggerFlavor(form.state.values.user_options.system));
		console.log("Partition options:", partitionOptions);
		const handleSubmit = () => {
			const values = form.state.values;
			console.log("Workshop form values:", values);
			const parsed = workshopSchema.safeParse(values);
			if (!parsed.success) {
				console.error("Workshop form parse errors:", parsed.error.flatten());
				return;
			}
			console.log("Parsed workshop values:", parsed.data);
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			className: "workshop-form",
			onSubmit: (event) => {
				event.preventDefault();
				handleSubmit();
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "workshop-form__body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "workshop-form__column",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
									name: "workshop_id",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, { label: "Workshop ID" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
									name: "user_options.description",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, { label: "Description" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
									name: "user_options.userlist",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
										type: "textarea",
										label: "Restrict workshop access to specific users",
										hasCheckbox: true
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(form.Subscribe, {
									selector: (state) => state.values.user_options.userlist,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.tutorlist",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												type: "textarea",
												label: "Add workshop tutors",
												hasCheckbox: true
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
											selector: (state) => state.values.user_options.tutorlist,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
												name: "user_options.workshop_tutor_server_access",
												children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.checkbox, { label: "Allow tutors to access participant servers (cloud only)" })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.workshop_storage_rw",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.checkbox, { label: "Allow participants to write to shared storage" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Request additional credits for this workshop" })
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "workshop-form__column",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
									name: "user_options.option",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
										label: "Select version",
										options: optionOptions,
										hasCheckbox: true
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
									name: "user_options.system",
									validators: {
										onChangeListenTo: ["user_options.option"],
										onChange: ({ value, fieldApi }) => {
											const option = fieldApi.form.getFieldValue("user_options.option");
											const service = fieldApi.form.getFieldValue("user_options.service");
											const options = homeTriggerSystem(option, service);
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
										options: systemOptions,
										hasCheckbox: true
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
								selector: (state) => state.values.user_options.option,
								children: (option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: mappingdict["jupyterlab"].option[option] == "lmod" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "workshop-form__field",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModulesToggleForm, { form })
								}) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
								selector: (state) => state.values.user_options.system,
								children: (system) => getSystemType(system) === "hpc" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.hpc.project",
											listeners: { onMount: ({ fieldApi }) => {
												const system = fieldApi.form.getFieldValue("user_options.system");
												const options = homeTriggerProject(system, "", "configId", "jupyterlab");
												setProjectOptions(options ?? []);
											} },
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.toggle, {
												label: "Project",
												options: projectOptions.options,
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
										selector: (state) => state.values.user_options.hpc.project,
										children: (project) => project && project.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.defaultvalues.project",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
												label: "Prefered project",
												options: projectOptions
											})
										}) }) : null
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.hpc.partition",
											validators: {
												onChangeListenTo: ["user_options.hpc.project", "user_options.system"],
												onChange: ({ fieldApi }) => {
													const project = fieldApi.form.getFieldValue("user_options.hpc.project") || "_all_";
													const system = fieldApi.form.getFieldValue("user_options.system");
													const options = homeTriggerPartition(system, "_all_", project, "configId", "jupyterlab");
													setPartitionOptions(options ?? []);
												}
											},
											listeners: { onMount: ({ fieldApi }) => {
												const project = fieldApi.form.getFieldValue("user_options.hpc.project") || "_all_";
												const system = fieldApi.form.getFieldValue("user_options.system");
												const options = homeTriggerPartition(system, "_all_", project, "configId", "jupyterlab");
												setPartitionOptions(options ?? []);
											} },
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.toggle, {
												label: "Partition",
												options: partitionOptions.options,
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
										selector: (state) => state.values.user_options.hpc.partition,
										children: (partitions) => partitions && partitions.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.defaultvalues.partition",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
												label: "Prefered Partition",
												options: partitionOptions,
												hasCheckbox: true
											})
										}) }) : null
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.hpc.reservation",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Reservation",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.resources.nodes",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Nodes [x, X]",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.resources.runtime",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Runtime [x, X]",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.resources.gpus",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "GPUs [x, X]",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.resources.xserver",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "X Server",
												hasCheckbox: true
											})
										})
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
								selector: (state) => state.values.user_options.option === "repo2docker",
								children: (isRepo2Docker) => isRepo2Docker && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.repo2docker.repotype",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Repository Type",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.repo2docker.repourl",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "GitHub repository name or URL",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.repo2docker.reporef",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Git ref (branch, tag or commit)",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.repo2docker.repopath",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Open notebook or path (optional)",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.repo2docker.repopathtype",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Notebook Type",
												hasCheckbox: true
											})
										})
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
								selector: (state) => state.values.user_options.option == "custom",
								children: (isCustom) => isCustom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.custom.customimage",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Image",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.custom.privaterepo",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Private image repository",
												hasCheckbox: true
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "workshop-form__field",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
											name: "user_options.custom.privaterepousername",
											children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
												label: "Username",
												hasCheckbox: true
											})
										})
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
								selector: (state) => state.values.user_options.option == "custom" || state.values.user_options.option == "repo2docker",
								children: (isR2DOrCustom) => isR2DOrCustom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "workshop-form__field",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
										name: "user_options.storage.localstoragepath",
										children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.text, {
											label: "Mount user data",
											hasCheckbox: true
										})
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workshop-form__field",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
									name: "user_options.envvariables",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.envAdder, {
										label: "Environment variables",
										hasCheckbox: true
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
								selector: (state) => state.values.user_options.system,
								children: (system) => getSystemType(system) === "cloud" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "workshop-form__field",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppField, {
										name: "user_options.flavor",
										validators: {
											onChangeListenTo: ["user_options.system"],
											onChange: ({ value, fieldApi }) => {
												const system = fieldApi.form.getFieldValue("user_options.system");
												const options = homeTriggerFlavor(system);
												if (value == "" && options.options && Object.keys(options.options).length > 0) {
													const firstOption = Object.keys(options.options)[0];
													fieldApi.handleChange(firstOption);
												}
												setFlavorOptions(options ?? []);
											}
										},
										children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field.select, {
											label: "Flavor",
											options: flavorOptions,
											hasCheckbox: true
										})
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.AppForm, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "workshop-form__submit-button",
						children: "Submit"
					}) })
				]
			})
		});
	}
});
// src/components/form/workshop/workshopOptionsContext.tsx
var WorkshopOptionsContext = (0, import_react.createContext)(null);
var useWorkshopOptionsContext = () => {
	const ctx = (0, import_react.useContext)(WorkshopOptionsContext);
	if (!ctx) throw new Error("useWorkshopOptionsContext must be used within WorkshopOptionsContext.Provider");
	return ctx;
};
// src/components/form/workshop/WorkshopRow.tsx
var defaultSubmitAction = { submitAction: null };
var WorkshopRow = (t0) => {
	const $ = (0, import_compiler_runtime.c)(26);
	const { isFirst: t1 } = t0;
	const isFirst = t1 === void 0 ? false : t1;
	const [isRowOpen, setIsRowOpen] = (0, import_react.useState)(false);
	const workshop = useWorkshopOptionsContext().workshop;
	let t3;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = { onChange: workshopSchema };
		$[0] = t3;
	} else t3 = $[0];
	const form = useAppForm({
		defaultValues: workshop,
		onSubmitMeta: defaultSubmitAction,
		onSubmit: (t2) => {
			const { value, meta } = t2;
			bb6: switch (meta.submitAction) {
				case "url":
					console.log("Generated URL Query: ", buildHumanReadableQuery(value));
					break bb6;
				case "reset":
					form.reset();
					break bb6;
				case "submit":
					console.log("Form submitted with values: ", value);
					break bb6;
			}
		},
		validators: t3
	});
	let t4;
	let t5;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = () => setIsRowOpen(true);
		t5 = () => setIsRowOpen(false);
		$[1] = t4;
		$[2] = t5;
	} else {
		t4 = $[1];
		t5 = $[2];
	}
	let t6;
	if ($[3] !== isRowOpen) {
		t6 = {
			isRowOpen,
			openRow: t4,
			closeRow: t5
		};
		$[3] = isRowOpen;
		$[4] = t6;
	} else t6 = $[4];
	let t7;
	let t8;
	if ($[5] !== isFirst) {
		t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "workshop-row__toggle-cell",
			children: isFirst ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, { className: "jh-chevron" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, { className: "jh-chevron" })
		});
		t8 = isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 1,
				className: "workshop-row__label-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "workshop-row__title",
					children: "New Workshop"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 5,
				className: "workshop-row__label-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "workshop-row__title",
					children: "Design a simplified set of options for your workshop to make it more accessible for your students."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "workshop-row__action-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: (event) => {
						event.stopPropagation();
						setIsRowOpen(true);
					},
					children: "Create"
				})
			})
		] });
		$[5] = isFirst;
		$[6] = t7;
		$[7] = t8;
	} else {
		t7 = $[6];
		t8 = $[7];
	}
	let t9;
	if ($[8] !== isFirst || $[9] !== workshop) {
		t9 = !isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 1,
				className: "workshop-row__label-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "workshop-row__title",
					children: workshop.workshop_id
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 5,
				className: "workshop-row__label-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "workshop-row__title",
					children: workshop.user_options.description
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "workshop-row__action-cell" })
		] });
		$[8] = isFirst;
		$[9] = workshop;
		$[10] = t9;
	} else t9 = $[10];
	let t10;
	if ($[11] !== t7 || $[12] !== t8 || $[13] !== t9) {
		t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "jh-row workshop-row__trigger",
				children: [
					t7,
					t8,
					t9
				]
			})
		});
		$[11] = t7;
		$[12] = t8;
		$[13] = t9;
		$[14] = t10;
	} else t10 = $[14];
	let t11;
	if ($[15] !== form) {
		t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "workshop-row__content-row",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 8,
					className: "jh-content-cell workshop-row__content-cell",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopForm, { form })
				})
			})
		});
		$[15] = form;
		$[16] = t11;
	} else t11 = $[16];
	let t12;
	if ($[17] !== t10 || $[18] !== t11) {
		t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
			className: "jh-table__body",
			children: [t10, t11]
		});
		$[17] = t10;
		$[18] = t11;
		$[19] = t12;
	} else t12 = $[19];
	let t13;
	if ($[20] !== isRowOpen || $[21] !== t12) {
		t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
			asChild: true,
			open: isRowOpen,
			onOpenChange: setIsRowOpen,
			children: t12
		});
		$[20] = isRowOpen;
		$[21] = t12;
		$[22] = t13;
	} else t13 = $[22];
	let t14;
	if ($[23] !== t13 || $[24] !== t6) {
		t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowContext.Provider, {
			value: t6,
			children: t13
		});
		$[23] = t13;
		$[24] = t6;
		$[25] = t14;
	} else t14 = $[25];
	return t14;
};
// src/WorkshopRoot.tsx
var WorkshopTable = (t0) => {
	const $ = (0, import_compiler_runtime.c)(5);
	const { workshops } = t0;
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
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
		$[0] = t1;
	} else t1 = $[0];
	let t2;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "jh-thead",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Name" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					colSpan: 5,
					children: "Description"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Action" })
			] })
		});
		$[1] = t2;
	} else t2 = $[1];
	let t3;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopOptionsContext.Provider, {
			value: { workshop: workshopEmpty },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopRow, { isFirst: true })
		});
		$[2] = t3;
	} else t3 = $[2];
	let t4;
	if ($[3] !== workshops) {
		t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "jh-table",
			children: [
				t1,
				t2,
				t3,
				Object.entries(workshops || {}).filter(_temp).map(_temp2)
			]
		});
		$[3] = workshops;
		$[4] = t4;
	} else t4 = $[4];
	return t4;
};
var WorkshopApp = () => {
	const $ = (0, import_compiler_runtime.c)(3);
	let t0;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t0 = window.getWorkshopOptions();
		$[0] = t0;
	} else t0 = $[0];
	const workshopOptions = t0;
	let t1;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = { test: "test" };
		$[1] = t1;
	} else t1 = $[1];
	let t2;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.StrictMode, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopContext.Provider, {
			value: t1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "home-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopTable, { workshops: workshopOptions })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoutDialog, {})] });
		$[2] = t2;
	} else t2 = $[2];
	return t2;
};
var container = document.getElementById("react-workshop-hook");
(0, import_client.createRoot)(container).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopApp, {}));
function _temp(t0) {
	const [workshopID] = t0;
	return workshopID !== "";
}
function _temp2(t0) {
	const [workshopID_0, workshop] = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopOptionsContext.Provider, {
		value: { workshop },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkshopRow, {})
	}, workshopID_0);
}

//# sourceMappingURL=workshop.js.map