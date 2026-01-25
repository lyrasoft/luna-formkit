import { uid, deleteConfirm, useUnicorn, useStack, data, injectCssToDocument } from "@windwalker-io/unicorn-next";
import { defineComponent, mergeModels, useModel, resolveComponent, createElementBlock, openBlock, createElementVNode, createTextVNode, createVNode, withCtx, TransitionGroup, Fragment, renderList, withDirectives, vModelText, normalizeClass, createCommentVNode, computed, toValue as toValue$1, effectScope, watch, getCurrentScope, onScopeDispose, isRef, shallowRef, unref, ref, h, Teleport, inject, watchEffect, getCurrentInstance as getCurrentInstance$1, provide, useSlots, createBlock, resolveDynamicComponent, renderSlot, toDisplayString, readonly, toRef, useAttrs, mergeProps, useTemplateRef, useId as useId$1, onMounted, nextTick, onBeforeUnmount, onUnmounted, render, shallowReadonly, normalizeProps, guardReactiveProps, Transition, normalizeStyle, vShow, vModelCheckbox, withModifiers, createApp, defineAsyncComponent } from "vue";
import { useFieldComponents } from "../index.js";
import { VueDraggable } from "vue-draggable-plus";
function prepareList(items, defaultData = {}, uidField = "uid") {
  return items.map((item) => prepareListItem(item, defaultData || {}, uidField));
}
function prepareListItem(item, defaultData = {}, uidField = "uid") {
  return {
    ...{ [uidField]: uid() },
    ...defaultData,
    ...item
  };
}
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "GridOptions",
  props: /* @__PURE__ */ mergeModels({
    icon: { default: "far fa-circle" }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const item = useModel(__props, "modelValue");
    function addRow(i) {
      const option = prepareListItem({}, {
        text: ""
      });
      if (i == null) {
        item.value.rows.push(option);
      } else {
        item.value.rows.splice(i + 1, 0, option);
      }
    }
    function removeRow(i) {
      item.value.rows.splice(i, 1);
    }
    function addColumn(i) {
      const option = prepareListItem({}, {
        text: ""
      });
      if (i == null) {
        item.value.columns.push(option);
      } else {
        item.value.columns.splice(i + 1, 0, option);
      }
    }
    function removeColumn(i) {
      item.value.columns.splice(i, 1);
    }
    const __returned__ = { props, item, addRow, removeRow, addColumn, removeColumn };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$6 = { class: "row" };
const _hoisted_2$6 = { class: "col-md-6" };
const _hoisted_3$3 = { class: "c-field-options" };
const _hoisted_4$3 = { class: "flex-grow-1" };
const _hoisted_5$3 = ["onUpdate:modelValue"];
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = { class: "mt-3 text-center" };
const _hoisted_8$2 = { class: "col-md-6" };
const _hoisted_9$1 = { class: "c-field-options" };
const _hoisted_10$1 = { class: "" };
const _hoisted_11$1 = { class: "flex-grow-1" };
const _hoisted_12 = ["onUpdate:modelValue"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "mt-3 text-center" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_draggable = resolveComponent("draggable");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", _hoisted_2$6, [
      _cache[9] || (_cache[9] = createElementVNode("h5", { class: "" }, "\n        列\n      ", -1)),
      _cache[10] || (_cache[10] = createTextVNode()),
      createElementVNode("div", _hoisted_3$3, [
        createVNode(_component_draggable, {
          modelValue: $setup.item.rows,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.item.rows = $event),
          handle: ".h-option-handle",
          animation: 150,
          group: `field-${$setup.item.uid}-rows`
        }, {
          default: withCtx(() => [
            createVNode(TransitionGroup, { name: "fade" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.item.rows, (option, i) => {
                  return openBlock(), createElementBlock("div", {
                    class: "c-field-option d-flex align-items-center mb-2 gap-2",
                    key: option.uid,
                    style: { "animation-duration": ".3s" }
                  }, [
                    _cache[5] || (_cache[5] = createElementVNode("div", { class: "" }, [
                      createElementVNode("span", {
                        class: "h-option-handle far fa-ellipsis-v fa-fw",
                        style: { "cursor": "move" }
                      })
                    ], -1)),
                    _cache[6] || (_cache[6] = createTextVNode()),
                    createElementVNode("div", _hoisted_4$3, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control form-control-sm",
                        "onUpdate:modelValue": ($event) => option.text = $event
                      }, null, 8, _hoisted_5$3), [
                        [vModelText, option.text]
                      ])
                    ]),
                    _cache[7] || (_cache[7] = createTextVNode()),
                    createElementVNode("div", null, [
                      createElementVNode("button", {
                        type: "button",
                        class: "btn btn-sm btn-link",
                        onClick: ($event) => $setup.removeRow(i)
                      }, [..._cache[4] || (_cache[4] = [
                        createElementVNode("span", { class: "far fa-times" }, null, -1)
                      ])], 8, _hoisted_6$2)
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "group"])
      ]),
      _cache[11] || (_cache[11] = createTextVNode()),
      createElementVNode("div", _hoisted_7$2, [
        createElementVNode("button", {
          type: "button",
          class: "btn btn-sm btn-secondary",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.addRow())
        }, [..._cache[8] || (_cache[8] = [
          createElementVNode("span", { class: "far fa-plus" }, null, -1),
          createTextVNode("\n          新增列\n        ", -1)
        ])])
      ])
    ]),
    _cache[21] || (_cache[21] = createTextVNode()),
    createElementVNode("div", _hoisted_8$2, [
      _cache[18] || (_cache[18] = createElementVNode("h5", { class: "" }, "\n        欄\n      ", -1)),
      _cache[19] || (_cache[19] = createTextVNode()),
      createElementVNode("div", _hoisted_9$1, [
        createVNode(_component_draggable, {
          modelValue: $setup.item.options,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.item.options = $event),
          handle: ".h-option-handle",
          animation: 150,
          group: `field-${$setup.item.uid}-columns`
        }, {
          default: withCtx(() => [
            createVNode(TransitionGroup, { name: "fade" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.item.columns, (option, i) => {
                  return openBlock(), createElementBlock("div", {
                    class: "c-field-option d-flex align-items-center mb-2 gap-2",
                    key: option.uid,
                    style: { "animation-duration": ".3s" }
                  }, [
                    _cache[13] || (_cache[13] = createElementVNode("div", { class: "" }, [
                      createElementVNode("span", {
                        class: "h-option-handle far fa-ellipsis-v fa-fw",
                        style: { "cursor": "move" }
                      })
                    ], -1)),
                    _cache[14] || (_cache[14] = createTextVNode()),
                    createElementVNode("div", _hoisted_10$1, [
                      createElementVNode("span", {
                        class: normalizeClass($props.icon)
                      }, null, 2)
                    ]),
                    _cache[15] || (_cache[15] = createTextVNode()),
                    createElementVNode("div", _hoisted_11$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control form-control-sm",
                        "onUpdate:modelValue": ($event) => option.text = $event
                      }, null, 8, _hoisted_12), [
                        [vModelText, option.text]
                      ])
                    ]),
                    _cache[16] || (_cache[16] = createTextVNode()),
                    createElementVNode("div", null, [
                      createElementVNode("button", {
                        type: "button",
                        class: "btn btn-sm btn-link",
                        onClick: ($event) => $setup.removeColumn(i)
                      }, [..._cache[12] || (_cache[12] = [
                        createElementVNode("span", { class: "far fa-times" }, null, -1)
                      ])], 8, _hoisted_13)
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "group"])
      ]),
      _cache[20] || (_cache[20] = createTextVNode()),
      createElementVNode("div", _hoisted_14, [
        createElementVNode("button", {
          type: "button",
          class: "btn btn-sm btn-secondary",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.addColumn())
        }, [..._cache[17] || (_cache[17] = [
          createElementVNode("span", { class: "far fa-plus" }, null, -1),
          createTextVNode("\n          新增欄\n        ", -1)
        ])])
      ])
    ])
  ]);
}
const GridOptions = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$4], ["__file", "GridOptions.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SelectOptions",
  props: /* @__PURE__ */ mergeModels({
    icon: { default: "far fa-circle" },
    other: { type: Boolean, default: false }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const item = useModel(__props, "modelValue");
    function addOption(i) {
      const option = prepareListItem({}, {
        text: ""
      });
      if (i == null) {
        item.value.options.push(option);
      } else {
        item.value.options.splice(i + 1, 0, option);
      }
    }
    function remove(i) {
      item.value.options.splice(i, 1);
    }
    const __returned__ = { props, item, addOption, remove };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "c-field-options" };
const _hoisted_2$5 = { class: "" };
const _hoisted_3$2 = { class: "flex-grow-1" };
const _hoisted_4$2 = ["onUpdate:modelValue"];
const _hoisted_5$2 = ["onClick"];
const _hoisted_6$1 = {
  key: 0,
  class: "c-field-option c-field-option--other d-flex align-items-center mb-2 gap-2"
};
const _hoisted_7$1 = { class: "" };
const _hoisted_8$1 = { class: "mt-3 text-center" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_draggable = resolveComponent("draggable");
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("div", _hoisted_1$5, [
      createVNode(_component_draggable, {
        modelValue: $setup.item.options,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.item.options = $event),
        handle: ".h-option-handle",
        animation: 150,
        group: `field-${$setup.item.uid}-group`
      }, {
        default: withCtx(() => [
          createVNode(TransitionGroup, { name: "fade" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.item.options, (option, i) => {
                return openBlock(), createElementBlock("div", {
                  class: "c-field-option d-flex align-items-center gap-2 mb-2",
                  style: { "animation-duration": ".3s" },
                  key: option.uid
                }, [
                  _cache[5] || (_cache[5] = createElementVNode("div", { class: "" }, [
                    createElementVNode("span", {
                      class: "h-option-handle far fa-ellipsis-v fa-fw",
                      style: { "cursor": "move" }
                    })
                  ], -1)),
                  _cache[6] || (_cache[6] = createTextVNode()),
                  createElementVNode("div", _hoisted_2$5, [
                    createElementVNode("span", {
                      class: normalizeClass($props.icon)
                    }, null, 2)
                  ]),
                  _cache[7] || (_cache[7] = createTextVNode()),
                  createElementVNode("div", _hoisted_3$2, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control form-control-sm",
                      "onUpdate:modelValue": ($event) => option.text = $event
                    }, null, 8, _hoisted_4$2), [
                      [vModelText, option.text]
                    ])
                  ]),
                  _cache[8] || (_cache[8] = createTextVNode()),
                  _cache[9] || (_cache[9] = createElementVNode("div", null, null, -1)),
                  _cache[10] || (_cache[10] = createTextVNode()),
                  createElementVNode("div", null, [
                    createElementVNode("button", {
                      type: "button",
                      class: "btn btn-sm btn-link",
                      onClick: ($event) => $setup.remove(i)
                    }, [..._cache[4] || (_cache[4] = [
                      createElementVNode("span", { class: "far fa-times" }, null, -1)
                    ])], 8, _hoisted_5$2)
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "group"]),
      _cache[18] || (_cache[18] = createTextVNode()),
      $props.other && $setup.item.enable_other === "1" ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
        _cache[12] || (_cache[12] = createElementVNode("div", { class: "" }, [
          createElementVNode("span", { class: "h-option-handle far fa-fw" })
        ], -1)),
        _cache[13] || (_cache[13] = createTextVNode()),
        createElementVNode("div", _hoisted_7$1, [
          createElementVNode("span", {
            class: normalizeClass($props.icon)
          }, null, 2)
        ]),
        _cache[14] || (_cache[14] = createTextVNode()),
        _cache[15] || (_cache[15] = createElementVNode("div", { class: "flex-grow-1" }, [
          createElementVNode("input", {
            type: "text",
            disabled: "",
            class: "form-control form-control-sm bg-light",
            value: "其他，請填寫"
          })
        ], -1)),
        _cache[16] || (_cache[16] = createTextVNode()),
        createElementVNode("div", null, [
          createElementVNode("button", {
            type: "button",
            class: "btn btn-sm btn-link",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.item.enable_other = "0")
          }, [..._cache[11] || (_cache[11] = [
            createElementVNode("span", { class: "far fa-times" }, null, -1)
          ])])
        ])
      ])) : createCommentVNode("", true),
      _cache[19] || (_cache[19] = createTextVNode()),
      $setup.item.enable_other === "0" ? (openBlock(), createElementBlock("button", {
        key: 1,
        type: "button",
        class: "btn btn-sm btn-outline-secondary",
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.item.enable_other = "1")
      }, [..._cache[17] || (_cache[17] = [
        createElementVNode("span", { class: "far fa-plus" }, null, -1),
        createTextVNode("\n        新增其他\n      ", -1)
      ])])) : createCommentVNode("", true)
    ]),
    _cache[21] || (_cache[21] = createTextVNode()),
    createElementVNode("div", _hoisted_8$1, [
      createElementVNode("button", {
        type: "button",
        class: "btn btn-sm btn-secondary",
        onClick: _cache[3] || (_cache[3] = ($event) => $setup.addOption())
      }, [..._cache[20] || (_cache[20] = [
        createElementVNode("span", { class: "far fa-plus" }, null, -1),
        createTextVNode("\n        新增選項\n      ", -1)
      ])])
    ])
  ]);
}
const SelectOptions = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3], ["__file", "SelectOptions.vue"]]);
const genericBvnPrefix = "BootstrapVueNext__";
const withBvnPrefix = (value, suffix = "") => {
  const suffixWithTrail = `${suffix}___`;
  return `${genericBvnPrefix}ID__${value}__${suffix ? suffixWithTrail : ""}`;
};
const createBvnInjectionKey = (name) => withBvnPrefix(name);
const createBvnRegistryInjectionKey = (name) => withBvnPrefix(`${name}__registry`);
const checkboxGroupKey = createBvnInjectionKey("checkboxGroup");
const collapseInjectionKey = createBvnInjectionKey("collapse");
const showHideRegistryKey = createBvnRegistryInjectionKey("showHide");
const dropdownInjectionKey = createBvnInjectionKey("dropdown");
const navbarInjectionKey = createBvnInjectionKey("navbar");
const rtlRegistryKey = createBvnRegistryInjectionKey("rtl");
const breadcrumbGlobalIndexKey = `${genericBvnPrefix}global_breadcrumb`;
const breadcrumbRegistryKey = createBvnRegistryInjectionKey("breadcrumb");
const modalManagerKey = createBvnRegistryInjectionKey("modalManager");
const defaultsKey = createBvnRegistryInjectionKey("defaults");
const inputGroupKey = createBvnInjectionKey("inputGroup");
const buttonGroupKey = createBvnInjectionKey("buttonGroup");
const orchestratorRegistryKey = createBvnRegistryInjectionKey("orchestrator");
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
// @__NO_SIDE_EFFECTS__
function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!scope) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject$1 = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue$1(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
// @__NO_SIDE_EFFECTS__
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
// @__NO_SIDE_EFFECTS__
function useToNumber(value, options = {}) {
  const {
    method = "parseFloat",
    radix,
    nanToZero
  } = options;
  return computed(() => {
    let resolved = toValue$1(value);
    if (typeof method === "function")
      resolved = method(resolved);
    else if (typeof resolved === "string")
      resolved = Number[method](resolved, radix);
    if (nanToZero && Number.isNaN(resolved))
      resolved = 0;
    return resolved;
  });
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue$1(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue$1(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue$1(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue$1(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject$1(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) {
    return controls ? { stop: noop, cancel: noop, trigger: noop } : noop;
  }
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop, listenerOptions));
    window2.document.documentElement.addEventListener("click", noop, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue$1(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue$1(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue$1(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if ("detail" in event && event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue$1(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function useFocus(target, options = {}) {
  const { initialValue = false, focusVisible = false, preventScroll = false } = options;
  const innerFocused = shallowRef(false);
  const targetElement = computed(() => unrefElement(target));
  const listenerOptions = { passive: true };
  useEventListener(targetElement, "focus", (event) => {
    var _a, _b;
    if (!focusVisible || ((_b = (_a = event.target).matches) == null ? void 0 : _b.call(_a, ":focus-visible")))
      innerFocused.value = true;
  }, listenerOptions);
  useEventListener(targetElement, "blur", () => innerFocused.value = false, listenerOptions);
  const focused = computed({
    get: () => innerFocused.value,
    set(value) {
      var _a, _b;
      if (!value && innerFocused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      else if (value && !innerFocused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus({ preventScroll });
    }
  });
  watch(
    targetElement,
    () => {
      focused.value = initialValue;
    },
    { immediate: true, flush: "post" }
  );
  return { focused };
}
const UseMouseBuiltinExtractors = {
  page: (event) => [event.pageX, event.pageY],
  client: (event) => [event.clientX, event.clientY],
  screen: (event) => [event.screenX, event.screenY],
  movement: (event) => event instanceof MouseEvent ? [event.movementX, event.movementY] : null
};
function useMouse$1(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window: window2 = defaultWindow,
    target = window2,
    scroll = true,
    eventFilter
  } = options;
  let _prevMouseEvent = null;
  let _prevScrollX = 0;
  let _prevScrollY = 0;
  const x = shallowRef(initialValue.x);
  const y = shallowRef(initialValue.y);
  const sourceType = shallowRef(null);
  const extractor = typeof type === "function" ? type : UseMouseBuiltinExtractors[type];
  const mouseHandler = (event) => {
    const result = extractor(event);
    _prevMouseEvent = event;
    if (result) {
      [x.value, y.value] = result;
      sourceType.value = "mouse";
    }
    if (window2) {
      _prevScrollX = window2.scrollX;
      _prevScrollY = window2.scrollY;
    }
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const result = extractor(event.touches[0]);
      if (result) {
        [x.value, y.value] = result;
        sourceType.value = "touch";
      }
    }
  };
  const scrollHandler = () => {
    if (!_prevMouseEvent || !window2)
      return;
    const pos = extractor(_prevMouseEvent);
    if (_prevMouseEvent instanceof MouseEvent && pos) {
      x.value = pos[0] + window2.scrollX - _prevScrollX;
      y.value = pos[1] + window2.scrollY - _prevScrollY;
    }
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const mouseHandlerWrapper = eventFilter ? (event) => eventFilter(() => mouseHandler(event), {}) : (event) => mouseHandler(event);
  const touchHandlerWrapper = eventFilter ? (event) => eventFilter(() => touchHandler(event), {}) : (event) => touchHandler(event);
  const scrollHandlerWrapper = eventFilter ? () => eventFilter(() => scrollHandler(), {}) : () => scrollHandler();
  if (target) {
    const listenerOptions = { passive: true };
    useEventListener(target, ["mousemove", "dragover"], mouseHandlerWrapper, listenerOptions);
    if (touch && type !== "movement") {
      useEventListener(target, ["touchstart", "touchmove"], touchHandlerWrapper, listenerOptions);
      if (resetOnTouchEnds)
        useEventListener(target, "touchend", reset, listenerOptions);
    }
    if (scroll && type === "page")
      useEventListener(window2, "scroll", scrollHandlerWrapper, listenerOptions);
  }
  return {
    x,
    y,
    sourceType
  };
}
const _newOrchestratorRegistry = () => ({
  store: ref([]),
  _isOrchestratorInstalled: ref(false),
  _isToastAppend: ref(false)
});
const componentsWithExternalPath = {
  BAccordion: "/components/BAccordion",
  BAccordionItem: "/components/BAccordion",
  BAlert: "/components/BAlert",
  BApp: "/components/BApp",
  BAvatar: "/components/BAvatar",
  BAvatarGroup: "/components/BAvatar",
  BBadge: "/components/BBadge",
  BBreadcrumb: "/components/BBreadcrumb",
  BBreadcrumbItem: "/components/BBreadcrumb",
  BButton: "/components/BButton",
  BButtonGroup: "/components/BButton",
  BButtonToolbar: "/components/BButton",
  BCloseButton: "/components/BButton",
  BCard: "/components/BCard",
  BCardBody: "/components/BCard",
  BCardFooter: "/components/BCard",
  BCardGroup: "/components/BCard",
  BCardHeader: "/components/BCard",
  BCardImg: "/components/BCard",
  BCardSubtitle: "/components/BCard",
  BCardText: "/components/BCard",
  BCardTitle: "/components/BCard",
  BCarousel: "/components/BCarousel",
  BCarouselSlide: "/components/BCarousel",
  BCol: "/components/BContainer",
  BCollapse: "/components/BCollapse",
  BContainer: "/components/BContainer",
  BDropdown: "/components/BDropdown",
  BDropdownDivider: "/components/BDropdown",
  BDropdownForm: "/components/BDropdown",
  BDropdownGroup: "/components/BDropdown",
  BDropdownHeader: "/components/BDropdown",
  BDropdownItem: "/components/BDropdown",
  BDropdownItemButton: "/components/BDropdown",
  BDropdownText: "/components/BDropdown",
  BForm: "/components/BForm",
  BFormCheckbox: "/components/BFormCheckbox",
  BFormCheckboxGroup: "/components/BFormCheckbox",
  BFormDatalist: "/components/BForm",
  BFormFile: "/components/BFormFile",
  BFormFloatingLabel: "/components/BForm",
  BFormGroup: "/components/BFormGroup",
  BFormInput: "/components/BFormInput",
  BFormInvalidFeedback: "/components/BForm",
  BFormRadio: "/components/BFormRadio",
  BFormRadioGroup: "/components/BFormRadio",
  BFormRating: "/components/BFormRating",
  BFormRow: "/components/BForm",
  BFormSelect: "/components/BFormSelect",
  BFormSelectOption: "/components/BFormSelect",
  BFormSelectOptionGroup: "/components/BFormSelect",
  BFormSpinbutton: "/components/BFormSpinbutton",
  BFormTag: "/components/BFormTags",
  BFormTags: "/components/BFormTags",
  BFormText: "/components/BForm",
  BFormTextarea: "/components/BFormTextarea",
  BFormValidFeedback: "/components/BForm",
  BImg: "/components/BImg",
  BInput: "/components/BFormInput",
  BInputGroup: "/components/BInputGroup",
  BInputGroupText: "/components/BInputGroup",
  BListGroup: "/components/BListGroup",
  BListGroupItem: "/components/BListGroup",
  BModal: "/components/BModal",
  BModalOrchestrator: "/components/BModal",
  BNav: "/components/BNav",
  BNavForm: "/components/BNav",
  BNavItem: "/components/BNav",
  BNavItemDropdown: "/components/BNav",
  BNavText: "/components/BNav",
  BNavbar: "/components/BNavbar",
  BNavbarBrand: "/components/BNavbar",
  BNavbarNav: "/components/BNavbar",
  BNavbarToggle: "/components/BNavbar",
  BOffcanvas: "/components/BOffcanvas",
  BOverlay: "/components/BOverlay",
  BOrchestrator: "/components/BApp",
  BPagination: "/components/BPagination",
  BPlaceholder: "/components/BPlaceholder",
  BPlaceholderButton: "/components/BPlaceholder",
  BPlaceholderCard: "/components/BPlaceholder",
  BPlaceholderTable: "/components/BPlaceholder",
  BPlaceholderWrapper: "/components/BPlaceholder",
  BPopover: "/components/BPopover",
  BProgress: "/components/BProgress",
  BRow: "/components/BContainer",
  BSpinner: "/components/BSpinner",
  BTab: "/components/BTabs",
  BTabs: "/components/BTabs",
  BToast: "/components/BToast",
  BToastOrchestrator: "/components/BToast",
  BTooltip: "/components/BTooltip",
  BLink: "/components/BLink",
  BProgressBar: "/components/BProgress",
  BTableSimple: "/components/BTable",
  BTableLite: "/components/BTable",
  BTable: "/components/BTable",
  BTbody: "/components/BTable",
  BTd: "/components/BTable",
  BTh: "/components/BTable",
  BThead: "/components/BTable",
  BTfoot: "/components/BTable",
  BTr: "/components/BTable",
  BPopoverOrchestrator: "/components/BPopover"
};
const componentNames = Object.freeze(
  Object.keys(componentsWithExternalPath)
);
const directivesWithExternalPath = {
  vBColorMode: "/directives/BColorMode",
  vBModal: "/directives/BModal",
  vBPopover: "/directives/BPopover",
  vBScrollspy: "/directives/BScrollspy",
  vBToggle: "/directives/BToggle",
  vBTooltip: "/directives/BTooltip"
};
const directiveNames = Object.freeze(
  Object.keys(directivesWithExternalPath)
);
const composablesWithExternalPath = {
  useBreadcrumb: "/composables/useBreadcrumb",
  useColorMode: "/composables/useColorMode",
  useModal: "/composables/useModal",
  useModalController: "/composables/useModal",
  useScrollLock: "/composables/useScrollLock",
  useScrollspy: "/composables/useScrollspy",
  useToast: "/composables/useToast",
  useToastController: "/composables/useToast",
  useToggle: "/composables/useToggle",
  usePopover: "/composables/usePopover",
  usePopoverController: "/composables/usePopover",
  useRegistry: "/composables/useRegistry",
  useProvideDefaults: "/composables/useProvideDefaults",
  useOrchestratorRegistry: "/composables/orchestratorShared"
};
Object.freeze(
  Object.keys(composablesWithExternalPath)
);
const _sfc_main$a = defineComponent({
  name: "ConditionalTeleport",
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    return () => !props.to ? slots.default?.({}) : h(Teleport, { to: props.to, disabled: props.disabled || !props.to }, [slots.default?.({})]);
  }
});
const _sfc_main$9 = defineComponent({
  name: "ConditionalWrapper",
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    skip: {
      type: Boolean,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots, attrs }) {
    return () => props.skip ? slots.default?.({}) : h(props.tag, { ...attrs }, [slots.default?.({})]);
  }
});
const isEmptySlot = (el) => (el?.() ?? []).length === 0;
function injectSelf(key, vm = getCurrentInstance("injectSelf")) {
  const { provides } = vm;
  if (provides && key in provides) {
    return provides[key];
  }
  return void 0;
}
function getCurrentInstance(name, message) {
  const vm = getCurrentInstance$1();
  if (!vm) {
    throw new Error(`[Bvn] ${name} ${"must be called from inside a setup function"}`);
  }
  return vm;
}
const toKebabCase = (str = "") => str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
const isObject = (obj) => obj !== null && typeof obj === "object" && !Array.isArray(obj);
function mergeDeep(source = {}, target = {}, arrayFn) {
  const out = {};
  for (const key in source) {
    out[key] = source[key];
  }
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }
    out[key] = targetProperty;
  }
  return out;
}
const propIsDefined = (vnode, prop) => typeof vnode.props?.[prop] !== "undefined" || typeof vnode.props?.[toKebabCase(prop)] !== "undefined";
function internalUseDefaults(props = {}, name) {
  const defaults = inject(defaultsKey, ref({}));
  const vm = getCurrentInstance("useDefaults");
  name = name ?? vm.type.name ?? vm.type.__name;
  if (!name) {
    throw new Error("[Bvn] Could not determine component name");
  }
  const componentDefaults = computed(() => defaults.value?.[props._as ?? name]);
  const _props = new Proxy(props, {
    get(target, prop) {
      const propValue = Reflect.get(target, prop);
      if (prop === "class" || prop === "style") {
        return [componentDefaults.value?.[prop], propValue].filter((v) => v != null);
      } else if (typeof prop === "string" && !propIsDefined(vm.vnode, prop)) {
        return componentDefaults.value?.[prop] ?? defaults.value?.global?.[prop] ?? propValue;
      }
      return propValue;
    }
  });
  const _subcomponentDefaults = shallowRef();
  watchEffect(() => {
    if (componentDefaults.value) {
      const subComponents = Object.entries(componentDefaults.value).filter(
        ([key]) => key.startsWith(key[0].toUpperCase())
      );
      _subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : void 0;
    } else {
      _subcomponentDefaults.value = void 0;
    }
  });
  function provideSubDefaults() {
    const injected = injectSelf(defaultsKey, vm);
    provide(
      defaultsKey,
      computed(
        () => _subcomponentDefaults.value ? mergeDeep(injected?.value ?? {}, _subcomponentDefaults.value) : injected?.value
      )
    );
  }
  return { props: _props, provideSubDefaults };
}
function useDefaults(props, name) {
  const { props: _props, provideSubDefaults } = internalUseDefaults(props, name);
  provideSubDefaults();
  return _props;
}
const useColorVariantClasses = (obj) => computed(() => {
  let props = toValue$1(obj);
  props = {
    variant: props.variant ?? null,
    bgVariant: props.bgVariant ?? null,
    textVariant: props.textVariant ?? null,
    borderVariant: props.borderVariant ?? null
  };
  return {
    [`text-bg-${props.variant}`]: props.variant !== null,
    [`text-${props.textVariant}`]: props.textVariant !== null,
    [`bg-${props.bgVariant}`]: props.bgVariant !== null,
    [`border-${props.borderVariant}`]: props.borderVariant !== null
  };
});
const _hoisted_1$4 = {
  key: 0,
  class: "visually-hidden"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BSpinner",
  props: {
    label: { default: void 0 },
    role: { default: "status" },
    small: { type: Boolean, default: false },
    tag: { default: "span" },
    type: { default: "border" },
    variant: { default: null }
  },
  setup(__props) {
    const _props = __props;
    const props = useDefaults(_props, "BSpinner");
    const slots = useSlots();
    const colorClasses = useColorVariantClasses(
      computed(() => ({
        textVariant: props.variant
      }))
    );
    const computedClasses = computed(() => [
      `spinner-${props.type}`,
      colorClasses.value,
      {
        [`spinner-${props.type}-sm`]: props.small
      }
    ]);
    const hasLabelSlot = computed(() => !isEmptySlot(slots.label));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(props).tag), {
        class: normalizeClass(computedClasses.value),
        role: unref(props).label || hasLabelSlot.value ? unref(props).role : null,
        "aria-hidden": unref(props).label || hasLabelSlot.value ? null : true
      }, {
        default: withCtx(() => [
          unref(props).label || hasLabelSlot.value ? (openBlock(), createElementBlock("span", _hoisted_1$4, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(unref(props).label), 1)
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "role", "aria-hidden"]);
    };
  }
});
const pick = (objToPluck, keysToPluck) => [...keysToPluck].reduce(
  (memo, prop) => {
    memo[prop] = objToPluck[prop];
    return memo;
  },
  {}
);
const toPascalCase = (str) => str.replace(/-./g, (match) => match.charAt(1).toUpperCase()).replace(/\b\w/g, (match) => match.toUpperCase()).replace(/\s+/g, "");
const isLink = (props) => !!(props.href || props.to);
const useBLinkHelper = (props, pickProps) => {
  const pickPropsResolved = readonly(toRef(pickProps));
  const resolvedProps = readonly(toRef(props));
  const computedLink = computed(() => isLink(resolvedProps.value));
  const computedLinkProps = computed(
    () => computedLink.value ? pick(
      resolvedProps.value,
      pickPropsResolved.value ?? [
        "active",
        "activeClass",
        "append",
        "exactActiveClass",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover"
      ]
    ) : {}
  );
  return { computedLink, computedLinkProps };
};
const useBLinkTagResolver = ({
  to,
  disabled,
  href,
  replace,
  routerComponentName
}) => {
  const instance = getCurrentInstance$1();
  const router = instance?.appContext?.app?.config?.globalProperties?.$router;
  const route = instance?.appContext?.app?.config?.globalProperties?.$route;
  const RouterLinkComponent = resolveDynamicComponent("RouterLink");
  const useLink = !!RouterLinkComponent && typeof RouterLinkComponent !== "string" && "useLink" in RouterLinkComponent ? RouterLinkComponent.useLink : null;
  const resolvedTo = computed(() => toValue$1(to) || "");
  const resolvedReplace = readonly(toRef(replace));
  const routerName = computed(() => toPascalCase(toValue$1(routerComponentName)));
  const tag = computed(() => {
    const hasRouter = instance?.appContext?.app?.component(routerName.value) !== void 0;
    if (!hasRouter || toValue$1(disabled) || !resolvedTo.value) {
      return "a";
    }
    return routerName.value;
  });
  const isRouterLink = computed(() => tag.value === "RouterLink");
  const isNuxtLink = computed(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => isRouterLink.value && typeof instance?.appContext?.app?.$nuxt !== "undefined"
  );
  const isNonStandardTag = computed(
    () => tag.value !== "a" && !isRouterLink.value && !isNuxtLink.value
  );
  const isOfRouterType = computed(() => isRouterLink.value || isNuxtLink.value);
  const linkProps = computed(() => ({
    to: resolvedTo.value,
    replace: resolvedReplace.value
  }));
  const _link = useLink?.({
    to: resolvedTo,
    replace: resolvedReplace
  });
  const link = computed(() => isOfRouterType.value ? _link : null);
  const computedHref = computed(() => {
    if (link.value?.href.value) return link.value.href.value;
    const toFallback = "#";
    const resolvedHref = toValue$1(href);
    if (resolvedHref) return resolvedHref;
    if (typeof resolvedTo.value === "string") return resolvedTo.value || toFallback;
    const stableTo = resolvedTo.value;
    if (stableTo !== void 0 && "path" in stableTo) {
      const path = stableTo.path || "";
      const query = stableTo.query ? `?${Object.keys(stableTo.query).map((e) => `${e}=${stableTo.query?.[e]}`).join("=")}` : "";
      const hash = !stableTo.hash || stableTo.hash.charAt(0) === "#" ? stableTo.hash || "" : `#${stableTo.hash}`;
      return `${path}${query}${hash}` || toFallback;
    }
    return toFallback;
  });
  return {
    isNonStandardTag,
    tag,
    isRouterLink,
    isNuxtLink,
    computedHref,
    routerName,
    router,
    route,
    link,
    linkProps
  };
};
const useLinkClasses = (linkProps) => computed(() => {
  const props = toValue$1(linkProps);
  return {
    [`link-${props.variant}`]: props.variant !== null,
    [`link-opacity-${props.opacity}`]: props.opacity !== void 0,
    [`link-opacity-${props.opacityHover}-hover`]: props.opacityHover !== void 0,
    [`link-underline-${props.underlineVariant}`]: props.underlineVariant !== null,
    [`link-offset-${props.underlineOffset}`]: props.underlineOffset !== void 0,
    [`link-offset-${props.underlineOffsetHover}-hover`]: props.underlineOffsetHover !== void 0,
    ["link-underline"]: props.underlineVariant === null && (props.underlineOpacity !== void 0 || props.underlineOpacityHover !== void 0),
    [`link-underline-opacity-${props.underlineOpacity}`]: props.underlineOpacity !== void 0,
    [`link-underline-opacity-${props.underlineOpacityHover}-hover`]: props.underlineOpacityHover !== void 0,
    "icon-link": props.icon === true
  };
});
const defaultActiveClass = "active";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BLink",
  props: {
    active: { type: Boolean, default: void 0 },
    activeClass: { default: "router-link-active" },
    disabled: { type: Boolean, default: false },
    exactActiveClass: { default: "router-link-exact-active" },
    href: { default: void 0 },
    icon: { type: Boolean, default: false },
    noRel: { type: Boolean, default: false },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    prefetch: { type: Boolean, default: void 0 },
    prefetchOn: { default: void 0 },
    noPrefetch: { type: Boolean, default: void 0 },
    prefetchedClass: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: false },
    routerComponentName: { default: "router-link" },
    routerTag: { default: "a" },
    stretched: { type: Boolean, default: false },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null },
    variant: { default: null }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const props = useDefaults(_props, "BLink");
    const emit = __emit;
    const attrs = useAttrs();
    const { computedHref, tag, link, isNuxtLink, isRouterLink, linkProps, isNonStandardTag } = useBLinkTagResolver({
      routerComponentName: () => props.routerComponentName,
      disabled: () => props.disabled,
      to: () => props.to,
      replace: () => props.replace,
      href: () => props.href
    });
    const collapseData = inject(collapseInjectionKey, null);
    const navbarData = inject(navbarInjectionKey, null);
    const linkValueClasses = useLinkClasses(props);
    const computedClasses = computed(() => [
      linkValueClasses.value,
      attrs.class,
      computedLinkClasses.value,
      {
        [defaultActiveClass]: props.active,
        [props.activeClass]: link.value?.isActive.value || false,
        [props.exactActiveClass]: link.value?.isExactActive.value || false,
        "stretched-link": props.stretched === true
      }
    ]);
    const computedLinkClasses = computed(() => ({
      [defaultActiveClass]: props.active,
      disabled: props.disabled
    }));
    const clicked = (e) => {
      if (props.disabled) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if (collapseData?.isNav?.value === true && navbarData === null || navbarData !== null && navbarData.noAutoClose?.value !== true) {
        collapseData?.hide?.();
      }
      emit("click", e);
    };
    const computedRel = computed(
      () => props.target === "_blank" ? !props.rel && props.noRel ? "noopener" : props.rel : void 0
    );
    const computedTabIndex = computed(
      () => props.disabled ? "-1" : typeof attrs.tabindex === "undefined" ? null : attrs.tabindex
    );
    const nuxtSpecificProps = computed(() => ({
      prefetch: props.prefetch,
      noPrefetch: props.noPrefetch,
      prefetchOn: props.prefetchOn,
      prefetchedClass: props.prefetchedClass,
      ...linkProps.value
    }));
    const computedSpecificProps = computed(() => ({
      ...isRouterLink.value ? linkProps.value : void 0,
      // In addition to being Nuxt specific, we add these values if it's some non-standard tag. We don't know what it is,
      // So we just add it anyways. It will be made as an attr if it's unused so it's fine
      ...isNuxtLink.value || isNonStandardTag.value ? nuxtSpecificProps.value : void 0
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(tag)), mergeProps({
        class: computedClasses.value,
        target: unref(props).target,
        href: unref(computedHref),
        rel: computedRel.value,
        tabindex: computedTabIndex.value,
        "aria-disabled": unref(props).disabled ? true : null
      }, computedSpecificProps.value, {
        onClick: _cache[0] || (_cache[0] = (e) => {
          clicked(e);
          unref(link)?.navigate(e);
        })
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "target", "href", "rel", "tabindex", "aria-disabled"]);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BButton",
  props: /* @__PURE__ */ mergeModels({
    loading: { type: Boolean, default: false },
    loadingFill: { type: Boolean, default: false },
    loadingText: { default: "Loading..." },
    pill: { type: Boolean, default: false },
    size: { default: "md" },
    squared: { type: Boolean, default: false },
    tag: { default: "button" },
    type: { default: "button" },
    variant: { default: "secondary" },
    active: { type: Boolean, default: false },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: false },
    noRel: { type: Boolean },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    prefetchedClass: {},
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    routerTag: { default: void 0 },
    stretched: { type: Boolean, default: false },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null }
  }, {
    "pressed": { type: Boolean, ...{ default: void 0 } },
    "pressedModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["click"], ["update:pressed"]),
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const props = useDefaults(_props, "BButton");
    const emit = __emit;
    const element = useTemplateRef("_element");
    const pressedValue = useModel(__props, "pressed");
    const { computedLink, computedLinkProps } = useBLinkHelper(props, [
      "active-class",
      "exact-active-class",
      "replace",
      "routerComponentName",
      "routerTag"
    ]);
    const isToggle = computed(() => typeof pressedValue.value === "boolean");
    const isButton = computed(
      () => props.tag === "button" && props.href === void 0 && props.to === void 0
    );
    const isBLink = computed(() => props.to !== void 0);
    const nonStandardTag = computed(() => props.href !== void 0 ? false : !isButton.value);
    const linkProps = computed(() => isBLink.value ? computedLinkProps.value : []);
    const computedAriaDisabled = computed(() => {
      if (props.href === "#" && props.disabled) return true;
      return nonStandardTag.value ? props.disabled : null;
    });
    const variantIsLinkType = computed(() => props.variant?.startsWith("link") || false);
    const variantIsLinkTypeSubset = computed(() => props.variant?.startsWith("link-") || false);
    const linkValueClasses = useLinkClasses(
      computed(() => ({
        ...variantIsLinkType.value ? {
          icon: props.icon,
          opacity: props.opacity,
          opacityHover: props.opacityHover,
          underlineOffset: props.underlineOffset,
          underlineOffsetHover: props.underlineOffsetHover,
          underlineOpacity: props.underlineOpacity,
          underlineOpacityHover: props.underlineOpacityHover,
          underlineVariant: props.underlineVariant,
          variant: variantIsLinkTypeSubset.value === true ? props.variant?.slice(5) : null
        } : void 0
      }))
    );
    const computedClasses = computed(() => [
      variantIsLinkType.value === true && computedLink.value === false ? linkValueClasses.value : void 0,
      [`btn-${props.size}`],
      {
        [`btn-${props.variant}`]: props.variant !== null && variantIsLinkTypeSubset.value === false,
        "active": props.active || pressedValue.value,
        "rounded-pill": props.pill,
        "rounded-0": props.squared,
        "disabled": props.disabled
      }
    ]);
    const computedTag = computed(() => isBLink.value ? _sfc_main$7 : props.href ? "a" : props.tag);
    const clicked = (e) => {
      if (props.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      emit("click", e);
      if (isToggle.value) pressedValue.value = !pressedValue.value;
    };
    onKeyStroke(
      [" ", "enter"],
      (e) => {
        if (props.href === "#") {
          e.preventDefault();
          element.value?.click();
        }
      },
      { target: element }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(computedTag.value), mergeProps({
        ref: "_element",
        class: "btn"
      }, linkProps.value, {
        class: computedClasses.value,
        "aria-disabled": computedAriaDisabled.value,
        "aria-pressed": isToggle.value ? pressedValue.value : null,
        autocomplete: isToggle.value ? "off" : null,
        disabled: isButton.value ? unref(props).disabled : null,
        href: unref(props).href,
        rel: unref(computedLink) ? unref(props).rel : null,
        role: nonStandardTag.value || unref(computedLink) ? "button" : null,
        target: unref(computedLink) ? unref(props).target : null,
        type: isButton.value ? unref(props).type : null,
        to: !isButton.value ? unref(props).to : null,
        onClick: clicked
      }), {
        default: withCtx(() => [
          unref(props).loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
            !unref(props).loadingFill ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(unref(props).loadingText), 1)
            ], 64)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "loading-spinner", {}, () => [
              createVNode(_sfc_main$8, {
                small: unref(props).size !== "lg",
                label: unref(props).loadingFill ? unref(props).loadingText : void 0
              }, null, 8, ["small", "label"])
            ])
          ]) : renderSlot(_ctx.$slots, "default", { key: 1 })
        ]),
        _: 3
      }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to"]);
    };
  }
});
const useId = (id, suffix) => {
  const genId = useId$1();
  return computed(() => toValue$1(id) || withBvnPrefix(genId || "", suffix));
};
class BvEvent {
  cancelable = true;
  componentId = null;
  _defaultPrevented = false;
  eventType = "";
  nativeEvent = null;
  _preventDefault;
  relatedTarget = null;
  target = null;
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(prop) {
    this._defaultPrevented = prop;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(setter) {
    this._preventDefault = setter;
  }
  constructor(eventType, eventInit = {}) {
    if (!eventType) {
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    }
    Object.assign(this, BvEvent.Defaults, eventInit, { eventType });
    this._preventDefault = function _preventDefault() {
      if (this.cancelable) {
        this.defaultPrevented = true;
      }
    };
  }
  static get Defaults() {
    return {
      cancelable: true,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
}
class BvTriggerableEvent extends BvEvent {
  trigger = null;
  ok = void 0;
  constructor(eventType, eventInit = {}) {
    super(eventType, eventInit);
    Object.assign(this, BvEvent.Defaults, eventInit, { eventType });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null,
      ok: void 0
    };
  }
}
const fadeBaseTransitionProps = {
  name: "fade",
  enterActiveClass: "",
  enterFromClass: "showing",
  enterToClass: "",
  leaveActiveClass: "",
  leaveFromClass: "",
  leaveToClass: "showing",
  css: true
};
const useShowHide = (modelValue, props, emit, element, computedId, options = {
  transitionProps: {},
  showFn: () => {
  },
  hideFn: () => {
  }
}) => {
  let noAction = false;
  const initialShow = !!modelValue.value && !props.initialAnimation || props.visible || false;
  const showRef = ref(initialShow);
  const renderRef = ref(initialShow);
  const renderBackdropRef = ref(initialShow);
  let isCountdown = typeof modelValue.value !== "boolean";
  watch(modelValue, () => {
    isCountdown = typeof modelValue.value !== "boolean";
    if (noAction) {
      noAction = false;
      return;
    }
    if (modelValue.value) {
      show();
    } else {
      hide2("modelValue", true);
    }
  });
  const localNoAnimation = ref(initialShow);
  const localTemporaryHide = ref(false);
  const computedNoAnimation = computed(
    () => props.noAnimation || props.noFade || localNoAnimation.value || false
  );
  let isMounted = false;
  onMounted(() => {
    isMounted = true;
    if (!props.show && initialShow) {
      const event = buildTriggerableEvent("show", { cancelable: true });
      emit("show", event);
      if (event.defaultPrevented) {
        emit("show-prevented", buildTriggerableEvent("show-prevented"));
        return;
      }
      localNoAnimation.value = true;
      if (!modelValue.value) {
        noAction = true;
        modelValue.value = true;
      }
      renderRef.value = true;
      renderBackdropRef.value = true;
      isVisible.value = true;
      backdropVisible.value = true;
      backdropReady.value = true;
      showRef.value = true;
      options.showFn?.();
    } else if (props.show || !!modelValue.value && props.initialAnimation) {
      show();
    }
  });
  watch(
    () => props.visible,
    (newval) => {
      localNoAnimation.value = true;
      nextTick(() => {
        if (newval) isVisible.value = true;
        if (newval) {
          show();
        } else {
          hide2("visible-prop", true);
        }
      });
    }
  );
  watch(
    () => props.show,
    (newval) => {
      if (newval) {
        show();
      } else {
        hide2("show-prop", true);
      }
    }
  );
  useEventListener(element, "bv-toggle", () => {
    modelValue.value = !modelValue.value;
  });
  const buildTriggerableEvent = (type, opts = {}) => new BvTriggerableEvent(type, {
    cancelable: false,
    target: element?.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId?.value
  });
  let showTimeout;
  let hideTimeout;
  let _Resolve;
  let _Promise;
  let _resolveOnHide;
  const show = (resolveOnHide = false) => {
    if (showRef.value && !hideTimeout && !_Promise) return Promise.resolve(true);
    _resolveOnHide = resolveOnHide;
    if (showRef.value && !hideTimeout && _Promise) return _Promise;
    _Promise = new Promise((resolve) => {
      _Resolve = resolve;
    });
    const event = buildTriggerableEvent("show", { cancelable: true });
    emit("show", event);
    if (event.defaultPrevented) {
      emit("show-prevented", buildTriggerableEvent("show-prevented"));
      if (isVisible.value) {
        isVisible.value = false;
      }
      if (modelValue.value && !isCountdown) {
        noAction = true;
        nextTick(() => {
          modelValue.value = false;
        });
      }
      _Resolve?.("show-prevented");
      return _Promise;
    }
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = void 0;
    }
    renderRef.value = true;
    renderBackdropRef.value = true;
    requestAnimationFrame(() => {
      if (localNoAnimation.value || props.delay === void 0) {
        if (!isMounted) return;
        showTimeout = void 0;
        showRef.value = true;
        options.showFn?.();
        if (!modelValue.value) {
          noAction = true;
          nextTick(() => {
            modelValue.value = true;
          });
        }
        return;
      }
      showTimeout = setTimeout(
        () => {
          if (!isMounted) return;
          showTimeout = void 0;
          showRef.value = true;
          options.showFn?.();
          if (!modelValue.value) {
            noAction = true;
            nextTick(() => {
              modelValue.value = true;
            });
          }
        },
        typeof props.delay === "number" ? props.delay : props.delay?.show || 0
      );
    });
    return _Promise;
  };
  let leaveTrigger;
  const hide2 = (trigger, noTriggerEmit) => {
    if (!showRef.value && !showTimeout) return Promise.resolve("");
    if (!_Promise)
      _Promise = new Promise((resolve) => {
        _Resolve = resolve;
      });
    if (typeof trigger !== "string") trigger = void 0;
    leaveTrigger = trigger;
    const event = buildTriggerableEvent("hide", { cancelable: true, trigger });
    const event2 = buildTriggerableEvent(trigger || "ignore", { cancelable: true, trigger });
    if (trigger === "backdrop" && props.noCloseOnBackdrop || trigger === "esc" && props.noCloseOnEsc) {
      emit("hide-prevented", buildTriggerableEvent("hide-prevented", { trigger }));
      _Resolve?.("hide-prevented");
      return _Promise;
    }
    if (showTimeout) {
      clearTimeout(showTimeout);
      showTimeout = void 0;
    }
    if (trigger && !noTriggerEmit) {
      emit(trigger, event2);
    }
    emit("hide", event);
    if (event.defaultPrevented || event2.defaultPrevented) {
      emit("hide-prevented", buildTriggerableEvent("hide-prevented", { trigger }));
      if (!modelValue.value) {
        nextTick(() => {
          noAction = true;
          modelValue.value = true;
        });
      }
      _Resolve?.("hide-prevented");
      return _Promise;
    }
    trapActive.value = false;
    if (showTimeout) {
      clearTimeout(showTimeout);
      showTimeout = void 0;
      if (!localTemporaryHide.value) renderRef.value = false;
      renderBackdropRef.value = false;
    }
    hideTimeout = setTimeout(
      () => {
        if (!isMounted) return;
        hideTimeout = void 0;
        isLeaving.value = true;
        showRef.value = false;
        options.hideFn?.();
        if (modelValue.value) {
          noAction = true;
          modelValue.value = isCountdown ? 0 : false;
        }
      },
      localNoAnimation.value ? 0 : typeof props.delay === "number" ? props.delay : props.delay?.hide || 0
    );
    return _Promise;
  };
  const throttleHide = /* @__PURE__ */ useThrottleFn((a) => hide2(a), 500);
  const throttleShow = /* @__PURE__ */ useThrottleFn(() => show(), 500);
  const toggle = (resolveOnHide = false) => {
    const e = buildTriggerableEvent("toggle", { cancelable: true });
    emit("toggle", e);
    if (e.defaultPrevented) {
      emit("toggle-prevented", buildTriggerableEvent("toggle-prevented"));
      return Promise.resolve("toggle-prevented");
    }
    if (showRef.value) {
      return hide2("toggle-function", true);
    }
    return show(resolveOnHide);
  };
  const triggerToggle = () => {
    const e = buildTriggerableEvent("toggle", { cancelable: true });
    emit("toggle", e);
    if (e.defaultPrevented) {
      emit("toggle-prevented", buildTriggerableEvent("toggle-prevented"));
      return;
    }
    if (showRef.value) {
      hide2("toggle-trigger", true);
    } else {
      show();
    }
  };
  const triggerRegistry = [];
  const registerTrigger = (trigger, el) => {
    triggerRegistry.push({ trigger, el });
    el.addEventListener(trigger, triggerToggle);
    checkVisibility(el);
  };
  const unregisterTrigger = (trigger, el, clean = true) => {
    const idx = triggerRegistry.findIndex((t) => t?.trigger === trigger && t.el === el);
    if (idx > -1) {
      triggerRegistry.splice(idx, 1);
      el.removeEventListener(trigger, triggerToggle);
      if (clean) {
        el.removeAttribute("aria-expanded");
        el.classList.remove("collapsed");
        el.classList.remove("not-collapsed");
      }
    }
  };
  const appRegistry = inject(showHideRegistryKey, void 0)?.register({
    id: computedId.value,
    toggle,
    show,
    hide: hide2,
    value: readonly(showRef),
    registerTrigger,
    unregisterTrigger,
    component: getCurrentInstance$1()
  });
  const checkVisibility = (el) => {
    el.setAttribute("aria-expanded", modelValue.value ? "true" : "false");
    el.classList.toggle("collapsed", !modelValue.value);
    el.classList.toggle("not-collapsed", !!modelValue.value);
  };
  watch(modelValue, () => {
    triggerRegistry.forEach((t) => {
      checkVisibility(t.el);
    });
  });
  watch(computedId, (newId, oldId) => {
    appRegistry?.updateId(newId, oldId);
  });
  onBeforeUnmount(() => {
    appRegistry?.unregister();
    triggerRegistry.forEach((t) => {
      t.el.removeEventListener(t.trigger, triggerToggle);
    });
  });
  onUnmounted(() => {
    isMounted = false;
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    showTimeout = void 0;
    hideTimeout = void 0;
  });
  const lazyLoadCompleted = ref(false);
  const markLazyLoadCompleted = () => {
    if (props.lazy === true) lazyLoadCompleted.value = true;
  };
  const isLeaving = ref(false);
  const isActive = ref(initialShow);
  const isVisible = ref(initialShow);
  const onBeforeEnter = (el) => {
    options.transitionProps?.onBeforeEnter?.(el);
    props.transitionProps?.onBeforeEnter?.(el);
    isActive.value = true;
  };
  const onEnter = (el) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isVisible.value = true;
      });
    });
    options.transitionProps?.onEnter?.(el);
    props.transitionProps?.onEnter?.(el);
  };
  const onAfterEnter = (el) => {
    markLazyLoadCompleted();
    options.transitionProps?.onAfterEnter?.(el);
    props.transitionProps?.onAfterEnter?.(el);
    if (localNoAnimation.value) {
      requestAnimationFrame(() => {
        localNoAnimation.value = false;
      });
    }
    if (localTemporaryHide.value) {
      localTemporaryHide.value = false;
    }
    requestAnimationFrame(() => {
      trapActive.value = true;
      nextTick(() => {
        emit("shown", buildTriggerableEvent("shown", { cancelable: false }));
      });
    });
    if (!_resolveOnHide) {
      _Resolve?.(true);
      _Promise = void 0;
      _Resolve = void 0;
    }
  };
  const onBeforeLeave = (el) => {
    if (!isLeaving.value) isLeaving.value = true;
    options.transitionProps?.onBeforeLeave?.(el);
    props.transitionProps?.onBeforeLeave?.(el);
    trapActive.value = false;
  };
  const onLeave = (el) => {
    isVisible.value = false;
    options.transitionProps?.onLeave?.(el);
    props.transitionProps?.onLeave?.(el);
  };
  const onAfterLeave = (el) => {
    emit("hidden", buildTriggerableEvent("hidden", { trigger: leaveTrigger, cancelable: false }));
    options.transitionProps?.onAfterLeave?.(el);
    props.transitionProps?.onAfterLeave?.(el);
    isLeaving.value = false;
    isActive.value = false;
    if (localNoAnimation.value) {
      requestAnimationFrame(() => {
        localNoAnimation.value = false;
      });
    }
    requestAnimationFrame(() => {
      if (!localTemporaryHide.value) renderRef.value = false;
    });
    _Resolve?.(leaveTrigger || "");
    _Promise = void 0;
    _Resolve = void 0;
    leaveTrigger = void 0;
  };
  const contentShowing = computed(
    () => localTemporaryHide.value === true || isActive.value === true || props.lazy === false || props.lazy === true && lazyLoadCompleted.value === true && props.unmountLazy === false
  );
  const trapActive = ref(false);
  const backdropVisible = ref(false);
  const backdropReady = ref(false);
  const transitionFunctions = {
    ...options.transitionProps,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onBeforeLeave,
    onLeave,
    onAfterLeave
  };
  return {
    showRef,
    renderRef,
    renderBackdropRef,
    isVisible,
    isActive,
    trapActive,
    show,
    hide: hide2,
    toggle,
    throttleHide,
    throttleShow,
    buildTriggerableEvent,
    computedNoAnimation,
    localNoAnimation,
    localTemporaryHide,
    isLeaving,
    transitionProps: {
      ...fadeBaseTransitionProps,
      ...props.transitionProps,
      ...transitionFunctions
    },
    lazyLoadCompleted,
    markLazyLoadCompleted,
    contentShowing,
    backdropReady,
    backdropVisible,
    backdropTransitionProps: {
      ...fadeBaseTransitionProps,
      onBeforeEnter: () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            backdropVisible.value = true;
          });
        });
        backdropReady.value = false;
      },
      onAfterEnter: () => {
        backdropReady.value = true;
      },
      onBeforeLeave: () => {
        backdropVisible.value = false;
      },
      onAfterLeave: () => {
        backdropReady.value = false;
        requestAnimationFrame(() => {
          renderBackdropRef.value = false;
        });
      }
    }
  };
};
const getElement = (element, root = typeof document !== "undefined" ? document : void 0) => {
  if (!element) return void 0;
  if (typeof element === "string") {
    if (typeof root === "undefined" || typeof document === "undefined") return void 0;
    const idElement = document.getElementById(element);
    return idElement ?? root.querySelector(element) ?? void 0;
  }
  return element.$el ?? element;
};
Object.freeze(
  Object.keys({
    bordered: 0,
    borderless: 0,
    borderVariant: 0,
    captionTop: 0,
    dark: 0,
    fixed: 0,
    hover: 0,
    id: 0,
    noBorderCollapse: 0,
    outlined: 0,
    responsive: 0,
    small: 0,
    stacked: 0,
    stickyHeader: 0,
    striped: 0,
    stripedColumns: 0,
    variant: 0,
    tableAttrs: 0,
    tableClass: 0
  })
);
Object.freeze(
  Object.keys({
    align: 0,
    caption: 0,
    detailsTdClass: 0,
    fieldColumnClass: 0,
    fields: 0,
    footClone: 0,
    footRowVariant: 0,
    footVariant: 0,
    headRowVariant: 0,
    headVariant: 0,
    items: 0,
    labelStacked: 0,
    modelValue: 0,
    primaryKey: 0,
    tbodyClass: 0,
    tbodyTrAttrs: 0,
    tbodyTrClass: 0,
    tfootClass: 0,
    tfootTrClass: 0,
    theadClass: 0,
    theadTrClass: 0
  })
);
const sides = ["top", "right", "bottom", "left"];
const alignments = ["start", "end"];
const placements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
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
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
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
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
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
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
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
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data: data2,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
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
        ...data2
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
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
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const arrow$2 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
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
      const placementsSortedByMostSpace = allOverflows.map((d) => {
        const alignment2 = getAlignment(d.placement);
        return [d.placement, alignment2 && crossAxis ? (
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
        ) : (
          // Check only the mainAxis.
          d.overflows[0]
        ), d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        getAlignment(d[0]) ? 2 : 3
      ).every((v) => v <= 0));
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
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
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
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
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
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
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
        default: {
          return {};
        }
      }
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
const inline$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform: platform2,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect2() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = getSide(placement) === "left";
          const maxRight = max(...clientRects.map((rect) => rect.right));
          const minLeft = min(...clientRects.map((rect) => rect.left));
          const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
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
      const resetRects = await platform2.getElementRects({
        reference: {
          getBoundingClientRect: getBoundingClientRect2
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
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
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
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
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
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
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
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
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
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
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
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
const containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css2 = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css2[value] ? css2[value] !== "none" : false) || (css2.containerType ? css2.containerType !== "normal" : false) || !webkit && (css2.backdropFilter ? css2.backdropFilter !== "none" : false) || !webkit && (css2.filter ? css2.filter !== "none" : false) || willChangeValues.some((value) => (css2.willChange || "").includes(value)) || containValues.some((value) => (css2.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
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
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
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
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
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
function getCssDimensions(element) {
  const css2 = getComputedStyle(element);
  let width = parseFloat(css2.width) || 0;
  let height = parseFloat(css2.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
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
function unwrapElement$1(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement$1(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
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
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
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
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
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
  const domElement = unwrapElement$1(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css2 = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
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
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
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
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
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
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
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
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
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
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
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
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data2) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data2.floating);
  return {
    reference: getRectRelativeToOffsetParent(data2.reference, await getOffsetParentFn(data2.floating), data2.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
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
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
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
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement$1(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
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
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const autoPlacement = autoPlacement$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow$1 = arrow$2;
const inline = inline$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode(element) && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function toValue(source) {
  return typeof source === "function" ? source() : unref(source);
}
function arrow(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement(toValue(options.element));
      if (element == null) {
        return {};
      }
      return arrow$1({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _toValue;
    return (_toValue = toValue(options.open)) != null ? _toValue : true;
  });
  const middlewareOption = computed(() => toValue(options.middleware));
  const placementOption = computed(() => {
    var _toValue2;
    return (_toValue2 = toValue(options.placement)) != null ? _toValue2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _toValue3;
    return (_toValue3 = toValue(options.strategy)) != null ? _toValue3 : "absolute";
  });
  const transformOption = computed(() => {
    var _toValue4;
    return (_toValue4 = toValue(options.transform)) != null ? _toValue4 : true;
  });
  const referenceElement = computed(() => unwrapElement(reference.value));
  const floatingElement = computed(() => unwrapElement(floating.value));
  const x = ref(0);
  const y = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    const open = openOption.value;
    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = open !== false;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption, openOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}
const useMouse = /* @__PURE__ */ createSharedComposable(useMouse$1);
const _hoisted_1$3 = ["id"];
const _hoisted_2$4 = ["id"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BPopover",
  props: /* @__PURE__ */ mergeModels({
    body: { default: void 0 },
    bodyClass: { default: void 0 },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    click: { type: Boolean, default: void 0 },
    closeOnHide: { type: Boolean, default: false },
    focus: { type: Boolean, default: void 0 },
    hover: { type: Boolean, default: void 0 },
    delay: { default: () => ({ show: 100, hide: 300 }) },
    floatingMiddleware: { default: void 0 },
    hideMargin: { default: 2 },
    id: { default: void 0 },
    inline: { type: Boolean, default: false },
    manual: { type: Boolean, default: false },
    noAutoClose: { type: Boolean, default: false },
    noFlip: { type: Boolean, default: false },
    noHide: { type: Boolean, default: false },
    noShift: { type: Boolean, default: false },
    noSize: { type: Boolean, default: false },
    noninteractive: { type: Boolean, default: false },
    offset: { default: null },
    placement: { default: "top" },
    realtime: { type: Boolean, default: false },
    reference: { default: null },
    strategy: { default: "absolute" },
    target: { default: null },
    title: { default: void 0 },
    titleClass: { default: void 0 },
    tooltip: { type: Boolean, default: false },
    teleportDisabled: { type: Boolean, default: false },
    teleportTo: { default: void 0 },
    initialAnimation: { type: Boolean, default: false },
    noAnimation: { type: Boolean },
    noFade: { type: Boolean, default: false },
    lazy: { type: Boolean, default: false },
    unmountLazy: { type: Boolean, default: false },
    show: { type: Boolean, default: false },
    transProps: {},
    visible: { type: Boolean, default: false }
  }, {
    "modelValue": { type: Boolean, ...{
      default: false
    } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["pointerleave", "blur", "click-outside", "close-on-hide", "hide", "hide-prevented", "hidden", "show", "show-prevented", "shown", "toggle", "toggle-prevented", "cancel", "ok"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const props = useDefaults(_props, "BPopover");
    const emit = __emit;
    const slots = useSlots();
    const attrs = useAttrs();
    const modelValue = useModel(__props, "modelValue");
    const computedId = useId(() => props.id, "popover");
    const hidden = ref(false);
    const floatingElement = useTemplateRef("_element");
    const content = useTemplateRef("_content");
    const arrow$12 = useTemplateRef("_arrow");
    const placeholder = useTemplateRef("_placeholder");
    const referenceElement = ref(null);
    const triggerElement = ref(null);
    const isAutoPlacement = computed(() => props.placement.startsWith("auto"));
    const offsetNumber = /* @__PURE__ */ useToNumber(() => props.offset ?? NaN);
    const boundary = computed(
      () => isBoundary(props.boundary) ? props.boundary : void 0
    );
    const rootBoundary = computed(
      () => isRootBoundary(props.boundary) ? props.boundary : void 0
    );
    const sizeStyles = ref({});
    const floatingMiddleware = computed(() => {
      if (props.floatingMiddleware !== void 0) {
        return props.floatingMiddleware;
      }
      const off = props.offset !== null ? offsetNumber.value : props.tooltip ? 6 : 8;
      const arr = [offset(off)];
      if (props.noFlip === false && !isAutoPlacement.value) {
        arr.push(
          flip({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding
          })
        );
      }
      if (isAutoPlacement.value) {
        arr.push(
          autoPlacement({
            alignment: props.placement.split("-")[1] || void 0,
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding
          })
        );
      }
      if (props.noShift === false) {
        arr.push(
          shift({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding
          })
        );
      }
      if (props.noHide === false) {
        arr.push(
          hide({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding
          })
        );
      }
      if (props.inline === true) {
        arr.push(inline());
      }
      arr.push(arrow({ element: arrow$12, padding: 10 }));
      if (props.noSize === false) {
        arr.push(
          size({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding,
            apply({ availableWidth, availableHeight }) {
              sizeStyles.value = {
                maxHeight: availableHeight >= (content.value?.scrollHeight ?? 0) ? void 0 : availableHeight ? `${Math.max(0, availableHeight)}px` : void 0,
                maxWidth: availableWidth >= (content.value?.scrollWidth ?? 0) ? void 0 : availableWidth ? `${Math.max(0, availableWidth)}px` : void 0
              };
            }
          })
        );
      }
      return arr;
    });
    const placementRef = computed(
      () => isAutoPlacement.value ? void 0 : props.placement
    );
    const { floatingStyles, middlewareData, placement, update } = useFloating(
      referenceElement,
      floatingElement,
      {
        placement: placementRef,
        middleware: floatingMiddleware,
        strategy: toRef(() => props.strategy)
      }
    );
    const arrowStyle = ref({ position: "absolute" });
    watch(middlewareData, (newValue) => {
      if (props.noHide === false) {
        if (newValue.hide?.referenceHidden && !hidden.value && showRef.value) {
          if (props.closeOnHide && !props.noAutoClose && !props.manual) {
            throttleHide("close-on-hide");
          } else {
            localTemporaryHide.value = true;
            hidden.value = true;
          }
        } else if (localTemporaryHide.value && !newValue.hide?.referenceHidden) {
          localTemporaryHide.value = false;
          hidden.value = false;
        }
      }
      if (newValue.arrow) {
        const { x: x2, y: y2 } = newValue.arrow;
        arrowStyle.value = {
          position: "absolute",
          top: y2 ? `${y2}px` : "",
          left: x2 ? `${x2}px` : ""
        };
      }
    });
    let cleanup;
    const {
      showRef,
      hide: hide$12,
      show,
      toggle,
      throttleHide,
      computedNoAnimation,
      transitionProps,
      contentShowing,
      isVisible,
      isActive,
      renderRef,
      localTemporaryHide
    } = useShowHide(modelValue, props, emit, floatingElement, computedId, {
      showFn: () => {
        update();
        nextTick(() => {
          cleanup = autoUpdate(
            referenceElement.value,
            floatingElement.value,
            update,
            { animationFrame: props.realtime }
          );
        });
      },
      hideFn: () => {
        if (cleanup) {
          cleanup();
          cleanup = void 0;
        }
      }
    });
    const computedClasses = computed(() => {
      const type = props.tooltip ? "tooltip" : "popover";
      return [
        type,
        `b-${type}`,
        {
          show: isVisible.value && !hidden.value,
          fade: !computedNoAnimation.value,
          [`bs-${type}-${resolveBootstrapPlacement(placement.value)}`]: placement.value !== void 0
        }
      ];
    });
    const { x, y } = useMouse();
    const isElementAndTriggerOutside = () => {
      const triggerRect = triggerElement.value?.getBoundingClientRect();
      const elementRect = floatingElement.value?.getBoundingClientRect();
      const margin = parseInt(props.hideMargin, 10) || 0;
      const offsetX = window?.scrollX || 0;
      const offsetY = window?.scrollY || 0;
      const triggerIsOutside = !triggerRect || x.value < triggerRect.left + offsetX - margin || x.value > triggerRect.right + offsetX + margin || y.value < triggerRect.top + offsetY - margin || y.value > triggerRect.bottom + offsetY + margin;
      const isOutside = !elementRect || x.value < elementRect.left + offsetX - margin || x.value > elementRect.right + offsetX + margin || y.value < elementRect.top + offsetY - margin || y.value > elementRect.bottom + offsetY + margin;
      return { triggerIsOutside, isOutside };
    };
    let looptimeout;
    const tryHide = (e) => {
      const { triggerIsOutside, isOutside } = isElementAndTriggerOutside();
      if (!props.noninteractive && isOutside && triggerIsOutside && !floatingElement.value?.contains(document?.activeElement) && !triggerElement.value?.contains(document?.activeElement) || props.noninteractive && triggerIsOutside) {
        hide$12(e?.type);
      } else {
        if (looptimeout) clearTimeout(looptimeout);
        looptimeout = setTimeout(() => {
          tryHide(e);
        }, 50);
      }
    };
    watch(isVisible, () => {
      update();
    });
    __expose({
      hide: hide$12,
      show,
      toggle
    });
    const localToggle = (e) => {
      if (showRef.value) {
        hide$12(e.type === "click" ? "click" : "toggle");
      } else {
        show();
      }
    };
    const localShow = () => {
      show();
    };
    const computedTriggers = computed(() => {
      if (props.manual) {
        return { hover: false, focus: false, click: false };
      }
      if (props.hover !== void 0 || props.focus !== void 0 || props.click !== void 0) {
        return {
          hover: props.hover ?? false,
          focus: props.focus ?? false,
          click: props.click ?? false
        };
      }
      return { hover: true, focus: true, click: false };
    });
    const bind2 = () => {
      if (props.target) {
        const elem = getElement(toValue$1(props.target));
        if (elem) {
          triggerElement.value = elem;
        } else {
          console.warn("Target element not found", props.target);
        }
      } else {
        triggerElement.value = placeholder.value?.nextElementSibling;
      }
      if (props.reference) {
        const elem = getElement(toValue$1(props.reference));
        if (elem) {
          referenceElement.value = elem;
        } else {
          console.warn("Reference element not found", props.reference);
        }
      } else {
        referenceElement.value = triggerElement.value;
      }
      if (!triggerElement.value || props.manual) {
        return;
      }
      const triggers = computedTriggers.value;
      if (triggers.click) {
        triggerElement.value.addEventListener("click", localToggle);
      }
      if (triggers.hover) {
        triggerElement.value.addEventListener("pointerenter", localShow);
        triggerElement.value.addEventListener("pointerleave", tryHide);
      }
      if (triggers.focus) {
        triggerElement.value.addEventListener("focus", localShow);
        triggerElement.value.addEventListener("blur", tryHide);
      }
    };
    const unbind2 = () => {
      if (triggerElement.value) {
        triggerElement.value.removeEventListener("click", localToggle);
        triggerElement.value.removeEventListener("pointerenter", localShow);
        triggerElement.value.removeEventListener("pointerleave", tryHide);
        triggerElement.value.removeEventListener("focus", localShow);
        triggerElement.value.removeEventListener("blur", tryHide);
      }
    };
    onClickOutside(
      floatingElement,
      () => {
        if (showRef.value && computedTriggers.value.click && !props.noAutoClose && !props.manual)
          hide$12("click-outside");
      },
      { ignore: [triggerElement] }
    );
    watch(
      [
        () => props.click,
        () => props.hover,
        () => props.focus,
        () => props.manual,
        () => props.target,
        () => props.reference
      ],
      () => {
        unbind2();
        bind2();
      }
    );
    const sharedSlots = computed(() => ({
      toggle,
      show,
      hide: hide$12,
      id: computedId.value,
      visible: isVisible.value,
      active: isActive.value
    }));
    onMounted(() => {
      bind2();
      nextTick(() => {
        update();
      });
    });
    onBeforeUnmount(unbind2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("span", {
          id: unref(computedId) + "_placeholder",
          ref: "_placeholder",
          style: { "display": "none" }
        }, null, 8, _hoisted_1$3),
        renderSlot(_ctx.$slots, "target", normalizeProps(guardReactiveProps(sharedSlots.value))),
        createVNode(_sfc_main$a, {
          to: unref(props).teleportTo,
          disabled: !unref(props).teleportTo || unref(props).teleportDisabled
        }, {
          default: withCtx(() => [
            unref(renderRef) || unref(contentShowing) ? (openBlock(), createBlock(Transition, mergeProps({ key: 0 }, unref(transitionProps), {
              appear: modelValue.value || unref(props).visible
            }), {
              default: withCtx(() => [
                withDirectives(createElementVNode("div", mergeProps({ id: unref(computedId) }, unref(attrs), {
                  ref: "_element",
                  class: computedClasses.value,
                  role: "tooltip",
                  tabindex: "-1",
                  style: unref(floatingStyles)
                }), [
                  createElementVNode("div", {
                    ref: "_arrow",
                    class: normalizeClass(`${unref(props).tooltip ? "tooltip" : "popover"}-arrow`),
                    style: normalizeStyle(arrowStyle.value),
                    "data-popper-arrow": ""
                  }, null, 6),
                  createElementVNode("div", {
                    ref: "_content",
                    class: "overflow-auto",
                    style: normalizeStyle(sizeStyles.value)
                  }, [
                    unref(props).title || slots.title ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(["position-sticky top-0", [unref(props).tooltip ? "tooltip-inner" : "popover-header", unref(props).titleClass]])
                    }, [
                      renderSlot(_ctx.$slots, "title", normalizeProps(guardReactiveProps(sharedSlots.value)), () => [
                        createTextVNode(toDisplayString(unref(props).title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    unref(props).tooltip && !slots.title && !unref(props).title || !unref(props).tooltip ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass([unref(props).tooltip ? "tooltip-inner" : "popover-body", unref(props).bodyClass])
                    }, [
                      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(sharedSlots.value)), () => [
                        createTextVNode(toDisplayString(unref(props).body) + toDisplayString(unref(attrs).content), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 4)
                ], 16, _hoisted_2$4), [
                  [vShow, unref(showRef) && !hidden.value]
                ])
              ]),
              _: 3
            }, 16, ["appear"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["to", "disabled"])
      ], 64);
    };
  }
});
const resolveBootstrapPlacement = (placement) => {
  const [_placement] = placement.split("-");
  switch (_placement) {
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return _placement;
  }
};
const resolveBootstrapCaret = (placement) => {
  const [_placement] = placement.split("-");
  switch (_placement) {
    case "left":
      return "start";
    case "right":
      return "end";
    case "top":
      return "up";
    case "bottom":
      return "down";
    default:
      return _placement;
  }
};
const resolveActiveStatus = (values) => typeof values !== "object" || values.active !== false;
const resolveContent = (values, el) => {
  const isActive = resolveActiveStatus(values);
  if (!isActive) return {};
  const missingBindingValue = typeof values === "undefined" || typeof values === "object" && !values.title && !values.content && !values.body;
  const title = el.getAttribute("title") || el.getAttribute("data-original-title");
  if (missingBindingValue) {
    if (title) {
      el.removeAttribute("title");
      el.setAttribute("data-original-title", title);
      return {
        body: title
      };
    }
    return {};
  }
  if (typeof values === "string") {
    return {
      body: values
    };
  }
  if (values?.content)
    console.warn("v-b-popover/v-b-tooltip: `content` is deprecated, use `body` instead");
  return {
    title: values?.title ? values?.title : void 0,
    body: values?.body ? values?.body : values?.content ? values?.content : void 0
  };
};
const resolveDirectiveProps = (binding, el) => ({
  target: el,
  modelValue: binding.modifiers.show,
  inline: binding.modifiers.inline,
  click: binding.modifiers.click,
  realtime: binding.modifiers.realtime,
  lazy: binding.modifiers.lazy,
  placement: binding.modifiers.left ? "left" : binding.modifiers.right ? "right" : binding.modifiers.bottom ? "bottom" : binding.modifiers.top ? "top" : void 0,
  ...typeof binding.value === "object" ? binding.value : void 0,
  ...binding.modifiers.interactive ? { noninteractive: false } : void 0,
  title: null,
  body: null
});
const bind = (el, binding, props) => {
  const div = document.createElement("span");
  if (binding.modifiers.body) document.body.appendChild(div);
  else if (binding.modifiers.child) el.appendChild(div);
  else el.parentNode?.insertBefore(div, el.nextSibling);
  render(h(_sfc_main$5, props), div);
  el.$__element = div;
};
const unbind = (el) => {
  const div = el.$__element;
  if (div) render(null, div);
  setTimeout(() => {
    div?.remove();
  }, 0);
  delete el.$__element;
};
const isBoundary = (input) => input === "clippingAncestors" || input instanceof Element || Array.isArray(input);
const isRootBoundary = (input) => !isBoundary(input);
const _newShowHideRegistry = () => {
  const values = ref(/* @__PURE__ */ new Map());
  const register = ({
    id,
    component,
    value,
    toggle,
    show,
    hide: hide2,
    registerTrigger,
    unregisterTrigger
  }) => {
    values.value.set(id, {
      id,
      component,
      value: readonly(value),
      toggle,
      show,
      hide: hide2,
      registerTrigger,
      unregisterTrigger
    });
    return {
      unregister() {
        values.value.delete(id);
      },
      updateId(newId, oldId) {
        const existingValue = values.value.get(oldId);
        if (existingValue) {
          values.value.set(newId, { ...existingValue, id: newId });
          values.value.delete(oldId);
        }
      }
    };
  };
  return {
    register,
    values
  };
};
function findProvides(binding, vnode) {
  const provides = (vnode.ctx === binding.instance.$ ? findComponentParent(vnode, binding.instance.$)?.provides : vnode.ctx?.provides) ?? binding.instance.$.provides;
  return provides;
}
function findComponentParent(vnode, root) {
  const stack = /* @__PURE__ */ new Set();
  const walk = (children) => {
    for (const child of children) {
      if (!child) continue;
      if (child === vnode || child.el && vnode.el && child.el === vnode.el) {
        return true;
      }
      stack.add(child);
      let result2;
      if (child.suspense) {
        result2 = walk([child.ssContent]);
      } else if (Array.isArray(child.children)) {
        result2 = walk(child.children);
      } else if (child.component?.vnode) {
        result2 = walk([child.component?.subTree]);
      }
      if (result2) {
        return result2;
      }
      stack.delete(child);
    }
    return false;
  };
  if (!walk([root.subTree])) {
    console.error("Could not find original vnode,  will not inherit provides");
    return root;
  }
  const result = Array.from(stack).reverse();
  for (const child of result) {
    if (child.component) {
      return child.component;
    }
  }
  return root;
}
const vBTooltip = {
  mounted(el, binding, vnode) {
    const defaults = findProvides(binding, vnode)[defaultsKey]?.value;
    const isActive = resolveActiveStatus(binding.value);
    if (!isActive) return;
    const text = resolveContent(binding.value, el);
    if (!text.body && !text.title) return;
    el.$__binding = JSON.stringify([binding.modifiers, binding.value]);
    bind(el, binding, {
      noninteractive: true,
      ...defaults["BTooltip"] || void 0,
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.body ?? "",
      tooltip: isActive
    });
  },
  updated(el, binding, vnode) {
    const defaults = findProvides(binding, vnode)[defaultsKey]?.value;
    const isActive = resolveActiveStatus(binding.value);
    if (!isActive) return;
    const text = resolveContent(binding.value, el);
    if (!text.body && !text.title) return;
    delete binding.oldValue;
    if (el.$__binding === JSON.stringify([binding.modifiers, binding.value])) return;
    unbind(el);
    bind(el, binding, {
      noninteractive: true,
      ...defaults["BTooltip"] || void 0,
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.body ?? "",
      tooltip: isActive
    });
    el.$__binding = JSON.stringify([binding.modifiers, binding.value]);
  },
  beforeUnmount(el) {
    unbind(el);
  }
};
const _hoisted_1$2 = { class: "visually-hidden" };
const _hoisted_2$3 = ["id", "aria-labelledby", "role"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BDropdown",
  props: /* @__PURE__ */ mergeModels({
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: true },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    disabled: { type: Boolean, default: false },
    floatingMiddleware: { default: void 0 },
    icon: { type: Boolean, default: false },
    id: { default: void 0 },
    isNav: { type: Boolean, default: false },
    menuClass: { default: void 0 },
    noCaret: { type: Boolean, default: false },
    noFlip: { type: Boolean, default: false },
    noShift: { type: Boolean, default: false },
    noSize: { type: Boolean, default: false },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    noWrapper: { type: Boolean, default: false },
    split: { type: Boolean, default: false },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: Boolean, default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" },
    wrapperClass: { default: void 0 },
    placement: { default: "bottom-start" },
    teleportDisabled: { type: Boolean, default: false },
    teleportTo: { default: void 0 },
    initialAnimation: { type: Boolean, default: false },
    noAnimation: { type: Boolean },
    noFade: { type: Boolean, default: false },
    lazy: { type: Boolean, default: false },
    unmountLazy: { type: Boolean, default: false },
    show: { type: Boolean, default: false },
    transProps: { default: void 0 },
    visible: { type: Boolean, default: false }
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["split-click", "hide", "hide-prevented", "hidden", "show", "show-prevented", "shown", "toggle", "toggle-prevented", "cancel", "ok"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const props = useDefaults(_props, "BDropdown");
    const emit = __emit;
    const computedId = useId(() => props.id, "dropdown");
    const modelValue = useModel(__props, "modelValue");
    const inInputGroup = inject(inputGroupKey, false);
    const inButtonGroup = inject(buttonGroupKey, false);
    const computedOffset = computed(
      () => typeof props.offset === "string" || typeof props.offset === "number" ? props.offset : NaN
    );
    const offsetToNumber = /* @__PURE__ */ useToNumber(computedOffset);
    const floatingElement = useTemplateRef("_floating");
    const button = useTemplateRef("_button");
    const splitButton = useTemplateRef("_splitButton");
    const boundary = computed(
      () => isBoundary(props.boundary) ? props.boundary : void 0
    );
    const rootBoundary = computed(
      () => isRootBoundary(props.boundary) ? props.boundary : void 0
    );
    const referenceElement = computed(() => !props.split ? splitButton.value : button.value);
    let cleanup;
    const {
      showRef,
      renderRef,
      hide: hide2,
      show,
      toggle,
      computedNoAnimation,
      transitionProps,
      contentShowing,
      isVisible
    } = useShowHide(modelValue, props, emit, referenceElement, computedId, {
      showFn: () => {
        update();
        nextTick(() => {
          cleanup = autoUpdate(
            referenceElement.value,
            floatingElement.value,
            update,
            {
              animationFrame: false
            }
          );
        });
      },
      hideFn: () => {
        if (cleanup) {
          cleanup();
          cleanup = void 0;
        }
      }
    });
    const computedMenuClasses = computed(() => [
      {
        show: isVisible.value,
        fade: !computedNoAnimation.value
      }
    ]);
    onKeyStroke(
      "Escape",
      () => {
        hide2();
        getElement(referenceElement.value)?.focus();
      },
      { target: referenceElement }
    );
    onKeyStroke(
      "Escape",
      () => {
        hide2();
        getElement(referenceElement.value)?.focus();
      },
      { target: floatingElement }
    );
    const keynav = (e, v) => {
      if (floatingElement.value?.contains(e.target?.closest("form"))) return;
      if (/input|select|option|textarea|form/i.test(e.target?.tagName)) return;
      e.preventDefault();
      if (!showRef.value) {
        show();
        const loop = setInterval(() => {
          if (isVisible.value) {
            clearInterval(loop);
            nextTick(() => keynav(e, v));
          }
        }, 16);
        return;
      }
      const list = floatingElement.value?.querySelectorAll(
        ".dropdown-item:not(.disabled):not(:disabled)"
      );
      if (!list) return;
      if (floatingElement.value?.contains(document.activeElement)) {
        const active = floatingElement.value.querySelector(".dropdown-item:focus");
        const index = Array.prototype.indexOf.call(list, active) + v;
        if (index >= 0 && index < list?.length) list[index]?.focus();
      } else {
        list[v === -1 ? list.length - 1 : 0]?.focus();
      }
    };
    onKeyStroke("ArrowUp", (e) => keynav(e, -1), { target: referenceElement });
    onKeyStroke("ArrowDown", (e) => keynav(e, 1), { target: referenceElement });
    onKeyStroke("ArrowUp", (e) => keynav(e, -1), { target: floatingElement });
    onKeyStroke("ArrowDown", (e) => keynav(e, 1), { target: floatingElement });
    const sizeStyles = ref({});
    const floatingMiddleware = computed(() => {
      if (props.floatingMiddleware !== void 0) {
        return props.floatingMiddleware;
      }
      const localOffset = typeof props.offset === "string" || typeof props.offset === "number" ? offsetToNumber.value : props.offset;
      const arr = [offset(localOffset)];
      if (props.noFlip === false) {
        arr.push(
          flip({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding
          })
        );
      }
      if (props.noShift === false) {
        arr.push(
          shift({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding
          })
        );
      }
      if (props.noSize === false) {
        arr.push(
          size({
            boundary: boundary.value,
            rootBoundary: rootBoundary.value,
            padding: props.boundaryPadding,
            apply({ availableWidth, availableHeight }) {
              sizeStyles.value = {
                maxHeight: availableHeight >= (floatingElement.value?.scrollHeight ?? 0) ? void 0 : availableHeight ? `${Math.max(0, availableHeight)}px` : void 0,
                maxWidth: availableWidth >= (floatingElement.value?.scrollWidth ?? 0) ? void 0 : availableWidth ? `${Math.max(0, availableWidth)}px` : void 0
              };
            }
          })
        );
      }
      return arr;
    });
    const { update, floatingStyles } = useFloating(referenceElement, floatingElement, {
      placement: () => props.placement,
      middleware: floatingMiddleware,
      strategy: toRef(() => props.strategy)
    });
    const inButtonGroupAttributes = inButtonGroup ? {
      class: "btn-group",
      role: "group"
    } : void 0;
    const computedClasses = computed(() => [
      inButtonGroupAttributes?.class,
      props.wrapperClass,
      {
        "btn-group": !props.wrapperClass && props.split,
        [`drop${resolveBootstrapCaret(props.placement)}`]: !props.wrapperClass,
        "position-static": props.boundary !== "clippingAncestors" && !props.isNav
      }
    ]);
    const buttonClasses = computed(() => [
      props.split ? props.splitClass : props.toggleClass,
      {
        "nav-link": props.isNav,
        "dropdown-toggle": !props.split,
        "dropdown-toggle-no-caret": props.noCaret && !props.split,
        "show": props.split ? void 0 : showRef.value
      }
    ]);
    const onButtonClick = () => {
      toggle();
    };
    const onSplitClick = (event) => {
      if (props.split) {
        emit("split-click", event);
        return;
      }
      onButtonClick();
    };
    onClickOutside(
      floatingElement,
      () => {
        if (showRef.value && (props.autoClose === true || props.autoClose === "outside")) {
          hide2();
        }
      },
      { ignore: [button, splitButton] }
    );
    const onClickInside = () => {
      if (showRef.value && (props.autoClose === true || props.autoClose === "inside")) {
        hide2();
      }
    };
    watch(isVisible, () => {
      update();
    });
    __expose({
      hide: hide2,
      show,
      toggle
    });
    provide(dropdownInjectionKey, {
      id: computedId,
      show,
      hide: hide2,
      toggle,
      visible: toRef(() => showRef.value),
      isNav: toRef(() => props.isNav)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, {
        skip: unref(inInputGroup) || unref(props).noWrapper,
        class: normalizeClass(computedClasses.value),
        role: unref(inButtonGroupAttributes)?.role
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$6, {
            id: unref(computedId),
            ref: "_splitButton",
            variant: unref(props).splitVariant || unref(props).variant,
            size: unref(props).size,
            class: normalizeClass(buttonClasses.value),
            disabled: unref(props).splitDisabled || unref(props).disabled,
            type: unref(props).splitButtonType,
            "aria-label": unref(props).ariaLabel,
            "aria-expanded": unref(props).split ? void 0 : unref(showRef),
            "aria-haspopup": unref(props).split ? void 0 : "menu",
            href: unref(props).split ? unref(props).splitHref : void 0,
            icon: unref(props).icon,
            to: unref(props).split && unref(props).splitTo ? unref(props).splitTo : void 0,
            onClick: onSplitClick
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "button-content", {}, () => [
                createTextVNode(toDisplayString(unref(props).text), 1)
              ])
            ]),
            _: 3
          }, 8, ["id", "variant", "size", "class", "disabled", "type", "aria-label", "aria-expanded", "aria-haspopup", "href", "icon", "to"]),
          unref(props).split ? (openBlock(), createBlock(_sfc_main$6, {
            key: 0,
            id: unref(computedId) + "-split",
            ref: "_button",
            variant: unref(props).variant,
            size: unref(props).size,
            disabled: unref(props).disabled,
            class: normalizeClass([[unref(props).toggleClass, { show: unref(showRef) }], "dropdown-toggle-split dropdown-toggle"]),
            "aria-expanded": unref(showRef),
            "aria-haspopup": "menu",
            onClick: onButtonClick
          }, {
            default: withCtx(() => [
              createElementVNode("span", _hoisted_1$2, [
                renderSlot(_ctx.$slots, "toggle-text", {}, () => [
                  createTextVNode(toDisplayString(unref(props).toggleText), 1)
                ])
              ])
            ]),
            _: 3
          }, 8, ["id", "variant", "size", "disabled", "class", "aria-expanded"])) : createCommentVNode("", true),
          createVNode(_sfc_main$a, {
            to: unref(props).teleportTo,
            disabled: !unref(props).teleportTo || unref(props).teleportDisabled
          }, {
            default: withCtx(() => [
              unref(renderRef) || unref(contentShowing) ? (openBlock(), createBlock(Transition, mergeProps({ key: 0 }, unref(transitionProps), {
                appear: modelValue.value || unref(props).visible
              }), {
                default: withCtx(() => [
                  withDirectives(createElementVNode("ul", {
                    id: unref(computedId) + "-menu",
                    ref: "_floating",
                    style: normalizeStyle([unref(floatingStyles), sizeStyles.value, { display: unref(showRef) ? "block" : "none" }]),
                    class: normalizeClass(["dropdown-menu overflow-auto", [unref(props).menuClass, computedMenuClasses.value]]),
                    "aria-labelledby": unref(computedId),
                    role: unref(props).role,
                    onClick: onClickInside
                  }, [
                    unref(contentShowing) ? renderSlot(_ctx.$slots, "default", {
                      key: 0,
                      id: unref(computedId),
                      hide: unref(hide2),
                      show: unref(show),
                      visible: unref(showRef),
                      click: onClickInside,
                      toggle: onButtonClick,
                      active: unref(showRef)
                    }) : createCommentVNode("", true)
                  ], 14, _hoisted_2$3), [
                    [vShow, unref(showRef)]
                  ])
                ]),
                _: 3
              }, 16, ["appear"])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["to", "disabled"])
        ]),
        _: 3
      }, 8, ["skip", "class", "role"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BDropdownHeader",
  props: {
    headerClass: { default: void 0 },
    tag: { default: "h6" },
    text: { default: void 0 },
    variant: { default: null },
    wrapperAttrs: { default: void 0 }
  },
  setup(__props) {
    const _props = __props;
    const props = useDefaults(_props, "BDropdownHeader");
    const attrs = useAttrs();
    const processedAttrs = computed(() => {
      const { class: wrapperClass, ...headerAttrs } = attrs;
      return { wrapperClass, headerAttrs };
    });
    const colorClasses = useColorVariantClasses(
      computed(() => ({
        textVariant: props.variant
      }))
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", mergeProps({
        role: "presentation",
        class: processedAttrs.value.wrapperClass
      }, _ctx.wrapperAttrs), [
        (openBlock(), createBlock(resolveDynamicComponent(unref(props).tag), mergeProps({
          class: ["dropdown-header", [unref(colorClasses), unref(props).headerClass]]
        }, processedAttrs.value.headerAttrs), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(unref(props).text), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"]))
      ], 16);
    };
  }
});
const _sfc_main$2$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BDropdownItem",
  props: {
    linkClass: { default: void 0 },
    wrapperAttrs: { default: void 0 },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    noRel: { type: Boolean },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    prefetchedClass: {},
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    stretched: { type: Boolean, default: false },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: null }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const props = useDefaults(_props, "BDropdownItem");
    const emit = __emit;
    const attrs = useAttrs();
    const processedAttrs = computed(() => {
      const { class: wrapperClass, ...dropdownItemAttrs } = attrs;
      return { wrapperClass, dropdownItemAttrs };
    });
    const { computedLink, computedLinkProps } = useBLinkHelper(props);
    const colorClasses = useColorVariantClasses(
      computed(() => ({
        textVariant: props.variant
      }))
    );
    const computedClasses = computed(() => [
      props.linkClass,
      colorClasses.value,
      {
        active: props.active,
        disabled: props.disabled
      }
    ]);
    const computedTag = computed(() => computedLink.value ? _sfc_main$7 : props.href ? "a" : "button");
    const collapseData = inject(collapseInjectionKey, null);
    const dropdownData = inject(dropdownInjectionKey, null);
    const navbarData = inject(navbarInjectionKey, null);
    const clicked = (e) => {
      emit("click", e);
      if (navbarData !== null && navbarData?.noAutoClose?.value !== true) {
        collapseData?.hide?.();
      }
      dropdownData?.hide?.();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", mergeProps({
        role: "presentation",
        class: processedAttrs.value.wrapperClass
      }, unref(props).wrapperAttrs), [
        (openBlock(), createBlock(resolveDynamicComponent(computedTag.value), mergeProps({
          class: ["dropdown-item", computedClasses.value],
          disabled: unref(props).disabled,
          "aria-disabled": unref(props).disabled ? true : null,
          "aria-current": unref(props).active ? true : null,
          href: computedTag.value === "a" ? unref(props).href : null,
          rel: unref(props).rel,
          role: "menuitem",
          type: computedTag.value === "button" ? "button" : null,
          target: unref(props).target
        }, { ...unref(computedLinkProps), ...processedAttrs.value.dropdownItemAttrs }, { onClick: clicked }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["class", "disabled", "aria-disabled", "aria-current", "href", "rel", "type", "target"]))
      ], 16);
    };
  }
});
const useStateClass = (value) => computed(() => {
  const resolvedValue = toValue$1(value);
  return resolvedValue === true ? "is-valid" : resolvedValue === false ? "is-invalid" : null;
});
const getClasses = (items) => computed(() => {
  const resolvedItems = toValue$1(items);
  return {
    "form-check": resolvedItems.plain === false && resolvedItems.button === false && resolvedItems.hasDefaultSlot,
    "form-check-reverse": resolvedItems.reverse === true,
    "form-check-inline": resolvedItems.inline === true,
    "form-switch": resolvedItems.switch === true,
    [`form-control-${resolvedItems.size}`]: resolvedItems.size !== void 0 && resolvedItems.size !== "md" && resolvedItems.button === false
  };
});
const getInputClasses = (items) => {
  const resolvedItems = readonly(toRef(items));
  const stateClass = useStateClass(() => resolvedItems.value.state ?? null);
  return computed(() => [
    stateClass.value,
    {
      "form-check-input": resolvedItems.value.plain === false && resolvedItems.value.button === false,
      "btn-check": resolvedItems.value.button === true
    }
  ]);
};
const getLabelClasses = (items) => computed(() => {
  const resolvedItems = toValue$1(items);
  return {
    "form-check-label": resolvedItems.plain === false && resolvedItems.button === false,
    "btn": resolvedItems.button === true,
    [`btn-${resolvedItems.buttonVariant}`]: resolvedItems.button === true && resolvedItems.buttonVariant !== void 0 && resolvedItems.buttonVariant !== null,
    [`btn-${resolvedItems.size}`]: resolvedItems.button && resolvedItems.size && resolvedItems.size !== "md"
  };
});
const _hoisted_1$1$1 = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "true-value", "false-value", "indeterminate"];
const _hoisted_2$2 = ["for"];
const _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BFormCheckbox",
  props: /* @__PURE__ */ mergeModels({
    ariaLabel: { default: void 0 },
    ariaLabelledby: { default: void 0 },
    autofocus: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    buttonGroup: { type: Boolean, default: false },
    buttonVariant: { default: null },
    disabled: { type: Boolean, default: false },
    form: { default: void 0 },
    id: { default: void 0 },
    inline: { type: Boolean, default: false },
    name: { default: void 0 },
    plain: { type: Boolean, default: false },
    required: { type: Boolean, default: void 0 },
    reverse: { type: Boolean, default: false },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    switch: { type: Boolean, default: false },
    uncheckedValue: { type: [Array, Set, String, Boolean, Object, Number, null], default: false },
    wrapperAttrs: { default: void 0 },
    inputClass: { default: void 0 },
    value: { type: [String, Boolean, Array, Set, Object, Number, null], default: true }
  }, {
    "modelValue": { type: [Array, Set, String, Boolean, Object, Number, null], ...{
      default: void 0
    } },
    "modelModifiers": {},
    "indeterminate": { type: Boolean, ...{
      default: false
    } },
    "indeterminateModifiers": {}
  }),
  emits: ["update:modelValue", "update:indeterminate"],
  setup(__props, { expose: __expose }) {
    const _props = __props;
    const props = useDefaults(_props, "BFormCheckbox");
    const slots = useSlots();
    const attrs = useAttrs();
    const modelValue = useModel(__props, "modelValue");
    const indeterminate = useModel(
      __props,
      "indeterminate"
    );
    const processedAttrs = computed(() => {
      const { class: wrapperClass, ...inputAttrs } = attrs;
      return { wrapperClass, inputAttrs };
    });
    const computedId = useId(() => props.id, "form-check");
    const parentData = inject(checkboxGroupKey, null);
    const input = useTemplateRef("_input");
    const { focused } = useFocus(input, {
      initialValue: props.autofocus
    });
    const hasDefaultSlot = computed(() => !isEmptySlot(slots.default));
    const localValue = computed({
      get: () => parentData ? parentData.modelValue.value : modelValue.value,
      set: (newVal) => {
        if (newVal === void 0) return;
        indeterminate.value = false;
        if (parentData !== null && Array.isArray(newVal)) {
          parentData.modelValue.value = newVal;
          return;
        }
        modelValue.value = newVal;
      }
    });
    const computedRequired = computed(
      () => !!(props.name ?? parentData?.name.value) && (props.required || parentData?.required.value)
    );
    const isButtonGroup = computed(() => props.buttonGroup || (parentData?.buttons.value ?? false));
    const classesObject = computed(() => ({
      plain: props.plain || (parentData?.plain.value ?? false),
      button: props.button || (parentData?.buttons.value ?? false),
      inline: props.inline || (parentData?.inline.value ?? false),
      reverse: props.reverse || (parentData?.reverse.value ?? false),
      switch: props.switch || (parentData?.switch.value ?? false),
      state: props.state === true || props.state === false ? props.state : parentData?.state.value ?? null,
      size: props.size ?? parentData?.size.value ?? "md",
      // This is where the true default is made
      buttonVariant: props.buttonVariant ?? parentData?.buttonVariant.value ?? "secondary",
      // This is where the true default is made
      hasDefaultSlot: hasDefaultSlot.value
    }));
    const wrapperClasses = getClasses(classesObject);
    const computedWrapperClasses = computed(() => [
      wrapperClasses.value,
      processedAttrs.value.wrapperClass
    ]);
    const inputClasses = getInputClasses(classesObject);
    const computedInputClasses = computed(() => [inputClasses.value, props.inputClass]);
    const labelClasses = getLabelClasses(classesObject);
    __expose({
      blur: () => {
        focused.value = false;
      },
      element: input,
      focus: () => {
        focused.value = true;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, mergeProps({ skip: isButtonGroup.value }, unref(props).wrapperAttrs, { class: computedWrapperClasses.value }), {
        default: withCtx(() => [
          withDirectives(createElementVNode("input", mergeProps({
            id: unref(computedId),
            ref: "_input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localValue.value = $event),
            class: computedInputClasses.value,
            type: "checkbox",
            disabled: unref(props).disabled || unref(parentData)?.disabled.value,
            required: computedRequired.value || void 0,
            name: unref(props).name || unref(parentData)?.name.value,
            form: unref(props).form || unref(parentData)?.form.value,
            "aria-label": unref(props).ariaLabel,
            "aria-labelledby": unref(props).ariaLabelledby,
            "aria-required": computedRequired.value || void 0,
            value: unref(props).value,
            "true-value": unref(props).value,
            "false-value": unref(props).uncheckedValue,
            indeterminate: indeterminate.value || void 0
          }, processedAttrs.value.inputAttrs), null, 16, _hoisted_1$1$1), [
            [vModelCheckbox, localValue.value]
          ]),
          hasDefaultSlot.value || unref(props).plain === false ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: unref(computedId),
            class: normalizeClass(unref(labelClasses))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 10, _hoisted_2$2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["skip", "class"]);
    };
  }
});
const bvKey = "bootstrap-vue-next";
const parseActiveImports = (options, values) => {
  const { all, ...others } = options;
  const valuesCopy = {};
  if (all) {
    values.forEach((el) => {
      valuesCopy[el] = all;
    });
  }
  const merge = { ...valuesCopy, ...others };
  return Object.entries(merge).filter(([name, value]) => !!value && values.includes(name)).map(([name]) => name);
};
const usedComponents = /* @__PURE__ */ new Set();
const usedDirectives = /* @__PURE__ */ new Set();
Object.assign(
  ({
    aliases = {},
    directives = true,
    components = true
  } = {}) => {
    const selectedComponents = typeof components === "boolean" ? { all: components } : components;
    const compImports = parseActiveImports(selectedComponents, componentNames).reduce(
      (map, name) => {
        map.set(name, `${bvKey}${componentsWithExternalPath[name]}`);
        return map;
      },
      /* @__PURE__ */ new Map()
    );
    const selectedDirectives = typeof directives === "boolean" ? { all: directives } : directives;
    const dirImports = parseActiveImports(selectedDirectives, directiveNames).reduce(
      (map, directive) => {
        const key = directive.toLowerCase().startsWith("v") ? directive : `v${directive}`;
        map.set(key, `${bvKey}${directivesWithExternalPath[key]}`);
        return map;
      },
      /* @__PURE__ */ new Map()
    );
    const resolvers = [
      {
        type: "component",
        resolve(name) {
          const destination = compImports.get(name);
          const aliasDestination = compImports.get(aliases[name]);
          if (aliasDestination) {
            const val = aliases[name];
            usedComponents.add(val);
            return {
              name: val,
              from: aliasDestination
            };
          }
          if (destination) {
            usedComponents.add(name);
            return {
              name,
              from: destination
            };
          }
        }
      },
      {
        type: "directive",
        resolve(name) {
          const prefixedName = `v${name}`;
          const destination = dirImports.get(prefixedName);
          if (destination) {
            usedDirectives.add(prefixedName);
            return {
              name: prefixedName,
              from: destination
            };
          }
        }
      }
    ];
    return resolvers;
  },
  {
    __usedComponents: usedComponents,
    __usedDirectives: usedDirectives
  }
);
const rtlPlugin = {
  install(app, options) {
    const rtlDefault = false;
    const localeDefault = void 0;
    const rtlInitial = typeof options?.rtl === "boolean" ? rtlDefault : options?.rtl?.rtlInitial ?? rtlDefault;
    const localeInitial = typeof options?.rtl === "boolean" ? localeDefault : options?.rtl?.localeInitial ?? localeDefault;
    const isRtl = ref(rtlInitial);
    const locale = ref(localeInitial);
    app.provide(rtlRegistryKey, { isRtl, locale });
  }
};
const registryPlugin = {
  install(app) {
    const { register, values } = _newShowHideRegistry();
    app.provide(showHideRegistryKey, { register, values });
    const items = ref({
      [breadcrumbGlobalIndexKey]: []
    });
    const reset = (key = breadcrumbGlobalIndexKey) => {
      items.value[key] = [];
    };
    app.provide(breadcrumbRegistryKey, { items, reset });
    const stack = ref(/* @__PURE__ */ new Map());
    const countStack = computed(() => stack.value.size);
    const valuesStack = computed(() => [...stack.value.values()]);
    const lastStack = computed(() => valuesStack.value[valuesStack.value.length - 1]);
    const pushStack = (modal) => {
      stack.value.set(modal.uid, modal);
    };
    const removeStack = (modal) => {
      stack.value.delete(modal.uid);
    };
    const registry = ref(/* @__PURE__ */ new Map());
    const pushRegistry = (modal) => {
      registry.value.set(modal.uid, modal);
    };
    const removeRegistry = (modal) => {
      registry.value.delete(modal.uid);
    };
    app.provide(modalManagerKey, {
      countStack,
      lastStack,
      registry: computed(() => registry.value),
      stack: valuesStack,
      pushStack,
      removeStack,
      pushRegistry,
      removeRegistry
    });
  }
};
const orchestratorPlugin = {
  install(app) {
    const orchestratorRegistry = _newOrchestratorRegistry();
    app.provide(orchestratorRegistryKey, orchestratorRegistry);
  }
};
const createBootstrap = (pluginData = {}) => ({
  install(app) {
    if ((pluginData.registries ?? true) === true) {
      app.use(registryPlugin, pluginData);
    }
    if ((pluginData.rtl ?? true) === true || typeof pluginData.rtl === "object") {
      app.use(rtlPlugin, pluginData);
    }
    if ((pluginData.orchestrator ?? true) === true) {
      app.use(orchestratorPlugin);
    }
    const val = pluginData?.components ?? {};
    app.provide(defaultsKey, ref(val));
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TypeSelector",
  props: {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const types = inject("form.types");
    const selected = useModel(__props, "modelValue");
    const currentType = computed(() => {
      return types[selected.value];
    });
    const groupedTypes = computed(() => {
      const groupedTypes2 = {};
      for (const k in types) {
        const type = types[k];
        const group = type.group || "__DEFAULT__";
        groupedTypes2[group] ??= [];
        groupedTypes2[group].push(type);
      }
      return groupedTypes2;
    });
    const __returned__ = { types, selected, currentType, groupedTypes, get BDropdownHeader() {
      return _sfc_main$3;
    }, get BDropdown() {
      return _sfc_main$4;
    }, get BDropdownItem() {
      return _sfc_main$2$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["BDropdown"], {
    variant: "light",
    size: "lg",
    class: "",
    "toggle-class": "w-100"
  }, {
    "button-content": withCtx(() => [
      createElementVNode("i", {
        class: normalizeClass(["fa-fw", $setup.currentType?.icon || "far fa-circle-question"])
      }, null, 2),
      createTextVNode(" " + toDisplayString($setup.currentType?.title || "未知類型"), 1)
    ]),
    default: withCtx(() => [
      _cache[1] || (_cache[1] = createTextVNode()),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.groupedTypes, (types, group) => {
        return openBlock(), createElementBlock(Fragment, { key: group }, [
          group !== "__DEFAULT__" ? (openBlock(), createBlock($setup["BDropdownHeader"], { key: 0 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(group), 1)
            ]),
            _: 2
          }, 1024)) : createCommentVNode("", true),
          _cache[0] || (_cache[0] = createTextVNode()),
          (openBlock(true), createElementBlock(Fragment, null, renderList(types, (type) => {
            return openBlock(), createBlock($setup["BDropdownItem"], {
              key: type.id,
              active: $setup.selected === type.id,
              onClick: ($event) => $setup.selected = type.id
            }, {
              default: withCtx(() => [
                createElementVNode("i", {
                  class: normalizeClass(["fa-fw", type.icon])
                }, null, 2),
                createTextVNode(" " + toDisplayString(type.title), 1)
              ]),
              _: 2
            }, 1032, ["active", "onClick"]);
          }), 128))
        ], 64);
      }), 128))
    ]),
    _: 1
  });
}
const TypeSelector = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "TypeSelector.vue"]]);
const vTextareaAutoResize = {
  mounted(el, { value }) {
    resize(el, value);
  },
  updated(el, { value }) {
    resize(el, value);
  }
};
function resize(el, options) {
  const borderWidth = (parseInt(window.getComputedStyle(el).borderWidth) || 0) * 2;
  const paddingTop = parseInt(window.getComputedStyle(el).paddingTop) || 0;
  const paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom) || 0;
  const lineHeight = parseInt(window.getComputedStyle(el).lineHeight) || 0;
  const lines = (el.value.match(/\n/g)?.length || 0) + 1;
  let contentHeight = borderWidth + lineHeight * lines + paddingTop + paddingBottom;
  options = options || {};
  const minHeight = options.minHeight;
  if (minHeight) {
    contentHeight = contentHeight < minHeight ? minHeight : contentHeight;
  }
  const maxHeight = options.maxHeight;
  if (maxHeight) {
    if (contentHeight > maxHeight) {
      contentHeight = maxHeight;
    }
  }
  const heightVal = contentHeight + "px";
  el.style.height = `${heightVal}`;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FieldCard",
  props: /* @__PURE__ */ mergeModels({
    isFocused: { type: Boolean }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["focus", "add", "copy", "remove"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const startComponent = inject("field.card.start", null);
    const endComponent = inject("field.card.end", null);
    const toolbarComponent = inject("field.card.toolbar", null);
    const emits = __emit;
    const item = useModel(__props, "modelValue");
    function onUpdate(v) {
      item.value = unref(v);
    }
    function copy(item2) {
      emits("copy", item2);
    }
    async function remove(item2) {
      if (await deleteConfirm("您確定要刪除嗎？")) {
        emits("remove", item2);
      }
    }
    const types = inject("form.types");
    watch(() => item.value.type, (type) => {
      item.value = {
        ...types[type].params,
        ...item.value
      };
    });
    const fieldForm = computed(() => {
      const type = types[item.value.type];
      if (!type) {
        return null;
      }
      return type.componentName;
    });
    const __returned__ = { startComponent, endComponent, toolbarComponent, emits, item, onUpdate, copy, remove, types, fieldForm, TypeSelector, get vTextareaAutoResize() {
      return vTextareaAutoResize;
    }, get BFormCheckbox() {
      return _sfc_main$1$1;
    }, get vBTooltip() {
      return vBTooltip;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "card-body d-flex flex-column gap-2" };
const _hoisted_2$1 = { class: "row" };
const _hoisted_3$1 = { class: "col-lg-8" };
const _hoisted_4$1 = { class: "col" };
const _hoisted_5$1 = {
  key: 0,
  class: "form-group"
};
const _hoisted_6 = {
  key: 0,
  class: "card-footer"
};
const _hoisted_7 = { class: "d-flex align-items-center gap-3" };
const _hoisted_8 = { class: "" };
const _hoisted_9 = { class: "ms-auto" };
const _hoisted_10 = { class: "" };
const _hoisted_11 = { class: "d-flex gap-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["card border-left border-primary c-field-card", `c-field-card--${$setup.item.type}`]),
    style: normalizeStyle([$props.isFocused ? "border-left-width: 8px !important;" : "border-left-width: 3px !important;"]),
    onClick: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("focus"))
  }, [
    _cache[27] || (_cache[27] = createElementVNode("div", {
      class: "h-handle text-center position-absolute w-100",
      style: { "top": "0", "cursor": "move" }
    }, [
      createElementVNode("span", { class: "far fa-ellipsis-h" })
    ], -1)),
    _cache[28] || (_cache[28] = createTextVNode()),
    createElementVNode("div", _hoisted_1$1, [
      createElementVNode("div", _hoisted_2$1, [
        createElementVNode("div", _hoisted_3$1, [
          withDirectives(createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.item.label = $event),
            class: "form-control form-control-lg",
            placeholder: "欄位標題"
          }, null, 512), [
            [vModelText, $setup.item.label]
          ])
        ]),
        _cache[12] || (_cache[12] = createTextVNode()),
        createElementVNode("div", _hoisted_4$1, [
          createVNode($setup["TypeSelector"], {
            modelValue: $setup.item.type,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.item.type = $event)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _cache[15] || (_cache[15] = createTextVNode()),
      $props.isFocused ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
        withDirectives(createElementVNode("textarea", {
          rows: "1",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.item.description = $event),
          class: "form-control",
          placeholder: "描述"
        }, null, 512), [
          [vModelText, $setup.item.description],
          [$setup["vTextareaAutoResize"], { maxHeight: 300 }]
        ])
      ])) : createCommentVNode("", true),
      _cache[16] || (_cache[16] = createTextVNode()),
      $props.isFocused ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        $setup.startComponent ? (openBlock(), createBlock(resolveDynamicComponent($setup.startComponent), {
          key: 0,
          modelValue: $setup.item,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.item = $event)
        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
        _cache[13] || (_cache[13] = createTextVNode()),
        $setup.fieldForm ? (openBlock(), createBlock(resolveDynamicComponent($setup.fieldForm), {
          key: 1,
          "model-value": $setup.item,
          "onUpdate:modelValue": $setup.onUpdate
        }, null, 8, ["model-value"])) : createCommentVNode("", true),
        _cache[14] || (_cache[14] = createTextVNode()),
        $setup.endComponent ? (openBlock(), createBlock(resolveDynamicComponent($setup.endComponent), {
          key: 2,
          modelValue: $setup.item,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.item = $event)
        }, null, 8, ["modelValue"])) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ]),
    _cache[29] || (_cache[29] = createTextVNode()),
    $props.isFocused ? (openBlock(), createElementBlock("div", _hoisted_6, [
      createElementVNode("div", _hoisted_7, [
        createElementVNode("div", _hoisted_8, [
          createElementVNode("button", {
            type: "button",
            class: "btn btn-outline-secondary btn-sm",
            onClick: _cache[5] || (_cache[5] = withModifiers(($event) => _ctx.$emit("add"), ["stop"]))
          }, [..._cache[17] || (_cache[17] = [
            createElementVNode("span", { class: "far fa-plus" }, null, -1),
            createTextVNode("\n            新增\n          ", -1)
          ])])
        ]),
        _cache[23] || (_cache[23] = createTextVNode()),
        $setup.toolbarComponent ? (openBlock(), createBlock(resolveDynamicComponent($setup.toolbarComponent), {
          key: 0,
          modelValue: $setup.item,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.item = $event)
        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
        _cache[24] || (_cache[24] = createTextVNode()),
        createElementVNode("div", _hoisted_9, [
          withDirectives((openBlock(), createBlock($setup["BFormCheckbox"], {
            modelValue: $setup.item.grid_preview,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.item.grid_preview = $event),
            name: "grid-preview",
            switch: ""
          }, {
            default: withCtx(() => [..._cache[18] || (_cache[18] = [
              createTextVNode("\n            列表預覽\n          ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])), [
            [$setup["vBTooltip"], "在後台提交列表中預覽這個欄位"]
          ])
        ]),
        _cache[25] || (_cache[25] = createTextVNode()),
        createElementVNode("div", _hoisted_10, [
          createVNode($setup["BFormCheckbox"], {
            modelValue: $setup.item.required,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.item.required = $event),
            name: "check-button",
            switch: ""
          }, {
            default: withCtx(() => [..._cache[19] || (_cache[19] = [
              createTextVNode("\n            必填\n          ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _cache[26] || (_cache[26] = createTextVNode()),
        createElementVNode("div", _hoisted_11, [
          createElementVNode("button", {
            type: "button",
            class: "btn btn-outline-secondary btn-sm",
            onClick: _cache[9] || (_cache[9] = withModifiers(($event) => $setup.copy($setup.item), ["stop"]))
          }, [..._cache[20] || (_cache[20] = [
            createElementVNode("span", { class: "far fa-copy" }, null, -1),
            createTextVNode("\n            複製\n          ", -1)
          ])]),
          _cache[22] || (_cache[22] = createTextVNode()),
          createElementVNode("button", {
            type: "button",
            class: "btn btn-outline-secondary btn-sm",
            onClick: _cache[10] || (_cache[10] = ($event) => $setup.remove($setup.item))
          }, [..._cache[21] || (_cache[21] = [
            createElementVNode("span", { class: "far fa-trash" }, null, -1),
            createTextVNode("\n            刪除\n          ", -1)
          ])])
        ])
      ])
    ])) : createCommentVNode("", true)
  ], 6);
}
const FieldCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "FieldCard.vue"]]);
const defaultType = "text";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormkitEditorApp",
  props: {
    fields: {},
    types: {},
    item: {},
    name: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    provide("form.types", props.types);
    const focus = ref(false);
    const fields = ref(prepareList(props.fields));
    onMounted(() => {
      if (fields.value.length > 0) {
        focus.value = fields.value[0].uid;
      }
    });
    function addField(i) {
      const field = prepareListItem({}, props.types[defaultType].params);
      if (i != null) {
        fields.value.splice(i + 1, 0, field);
      } else {
        fields.value.push(field);
      }
      nextTick(() => {
        focus.value = field.uid;
      });
    }
    function copy(item, i) {
      let newItem = { ...item };
      delete newItem.uid;
      prepareListItem(newItem);
      newItem.label += " (複製)";
      fields.value.splice(i + 1, 0, newItem);
      nextTick(() => {
        focus.value = newItem.uid;
      });
    }
    function remove(item, i) {
      fields.value.splice(i, 1);
    }
    const content = computed(() => {
      return JSON.stringify(fields.value || []);
    });
    const __returned__ = { props, defaultType, focus, fields, addField, copy, remove, content, FieldCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "l-form-builder" };
const _hoisted_2 = { class: "l-form-builder__content" };
const _hoisted_3 = { class: "l-form-builder__bottom text-center" };
const _hoisted_4 = { class: "d-none" };
const _hoisted_5 = ["name"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_draggable = resolveComponent("draggable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createVNode(_component_draggable, {
        modelValue: $setup.fields,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.fields = $event),
        handle: ".h-handle",
        animation: 150
      }, {
        default: withCtx(() => [
          createVNode(TransitionGroup, { name: "fade" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fields, (field, i) => {
                return openBlock(), createElementBlock("div", {
                  class: "c-field",
                  key: field.uid,
                  style: { "animation-duration": ".3s" }
                }, [
                  createVNode($setup["FieldCard"], {
                    "is-focused": $setup.focus === field.uid,
                    class: "mb-3",
                    modelValue: $setup.fields[i],
                    "onUpdate:modelValue": ($event) => $setup.fields[i] = $event,
                    onFocus: ($event) => $setup.focus = field.uid,
                    onCopy: ($event) => $setup.copy($event, i),
                    onRemove: ($event) => $setup.remove($event, i),
                    onAdd: ($event) => $setup.addField(i)
                  }, null, 8, ["is-focused", "modelValue", "onUpdate:modelValue", "onFocus", "onCopy", "onRemove", "onAdd"])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _cache[3] || (_cache[3] = createTextVNode()),
    createElementVNode("div", _hoisted_3, [
      createElementVNode("button", {
        type: "button",
        class: "btn btn-outline-primary",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.addField())
      }, [..._cache[2] || (_cache[2] = [
        createElementVNode("span", { class: "fa fa-plus" }, null, -1),
        createTextVNode("\n        增加欄位\n      ", -1)
      ])])
    ]),
    _cache[4] || (_cache[4] = createTextVNode()),
    createElementVNode("div", _hoisted_4, [
      createElementVNode("textarea", { name: $props.name }, toDisplayString($setup.content), 9, _hoisted_5)
    ])
  ]);
}
const FormkitEditorApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "FormkitEditorApp.vue"]]);
const css = '.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex-shrink:0;width:2.5rem;height:2.5rem;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-text,.b-avatar .b-avatar-img{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.bootstrap-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit;object-fit:cover}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:1}.b-avatar-sm{width:1.5rem;height:1.5rem}.b-avatar-sm .b-avatar-text{font-size:.6rem}.b-avatar-sm .b-avatar-badge{font-size:.42rem}.b-avatar-lg{width:3.5rem;height:3.5rem}.b-avatar-lg .b-avatar-text{font-size:1.4rem}.b-avatar-lg .b-avatar-badge{font-size:.98rem}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled){z-index:1}.card-deck{gap:1.5rem}@media (min-width: 576px){.card-deck{display:flex;flex-flow:row wrap}}.card-deck>.card{flex:1 0 0%;margin-bottom:0}.card-columns .card{margin-bottom:.75rem}@media (min-width: 576px){.card-columns{column-count:3;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.b-form-rating{display:flex;justify-content:space-between;padding:.375rem .75rem;margin:.5rem;border-radius:.375rem;border:1px solid var(--bs-secondary-border-subtle, #dee2e6);background-color:var(--bs-body-bg);gap:.25rem}.b-form-rating.no-border{border:none}.b-form-rating.is-disabled{color:var(--bs-secondary);background-color:var(--bs-secondary-bg)}.b-form-rating .clear-icon{width:1em;height:1em;transition:transform var(--bs-transition-duration) ease;color:var(--bs-body-color);fill:currentColor}.b-form-rating:not(.is-readonly):not(.is-disabled) .clear-icon:hover{transform:scale(1.5)}.star{cursor:pointer;-webkit-user-select:none;user-select:none;padding:0 .25em}.is-readonly .star,.is-disabled .star{cursor:default}.clear-button-spacing{cursor:pointer;margin-left:.5rem}.star-spacing{margin:0 .5rem}.rating-value-text{color:var(--bs-body-color);margin:0 .6}.b-form-rating-star svg{transition:transform .2s ease}.b-form-rating:not(.is-readonly):not(.is-disabled) .star:hover .b-form-rating-star svg{transform:scale(1.5)}.b-form-tags.focus{background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.b-form-tags.disabled{background-color:var(--bs-secondary-bg)}.b-form-tag.disabled{opacity:.75}.b-form-tags.focus.is-valid{border-color:#198754;box-shadow:0 0 0 .25rem #19875440}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .25rem #dc354540}.b-form-tags .b-form-tags-list{margin-top:-.25rem}.b-form-tags .b-form-tags-list .b-form-tag,.b-form-tags .b-form-tags-list .b-from-tags-field{margin-top:.25rem}.b-form-tags .b-form-tags-list .b-form-tag{padding:.25em .65em}.b-form-tag{font-size:75%!important;font-weight:400!important;line-height:1.5!important;margin-right:.25rem}.b-form-tags .b-form-tag+.b-form-tag{margin-left:0}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:75%;line-height:1;float:none;margin-left:.25rem}.input-group .btn-group:not(:last-child)>:not(:first-child){border-start-end-radius:0px;border-end-end-radius:0px}.input-group .btn-group:not(:last-child)>:not(:last-child){border-start-start-radius:0px;border-end-start-radius:0px}.input-group .btn-group:not(:first-child)>:not(:last-child){border-end-start-radius:0px;border-start-start-radius:0px}.b-pagination-pills .page-item .page-link{border-radius:50rem!important;margin-left:.25rem!important;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0!important}.b-table-stacked-label{display:none;font-weight:700}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>td>.b-table-stacked-label,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>tbody>tr>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{display:block;clear:both;content:""}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}@media (max-width: 575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>td>.b-table-stacked-label,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{display:block;clear:both;content:""}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}}@media (max-width: 767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>td>.b-table-stacked-label,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>tbody>tr>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{display:block;clear:both;content:""}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}}@media (max-width: 991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>td>.b-table-stacked-label,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{display:block;clear:both;content:""}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}}@media (max-width: 1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>td>.b-table-stacked-label,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{display:block;clear:both;content:""}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}}@media (max-width: 1399.98px){.table.b-table.b-table-stacked-xxl{display:block;width:100%}.table.b-table.b-table-stacked-xxl>tfoot,.table.b-table.b-table-stacked-xxl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xxl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xxl>thead,.table.b-table.b-table-stacked-xxl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xxl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xxl>caption,.table.b-table.b-table-stacked-xxl>tbody,.table.b-table.b-table-stacked-xxl>tbody>tr,.table.b-table.b-table-stacked-xxl>tbody>tr>td,.table.b-table.b-table-stacked-xxl>tbody>tr>td>.b-table-stacked-label,.table.b-table.b-table-stacked-xxl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xxl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xxl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xxl>tbody>tr>[rowspan]+th{border-top-width:3px}.table.b-table.b-table-stacked-xxl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xxl>tbody>tr>[data-label]:after{display:block;clear:both;content:""}.table.b-table.b-table-stacked-xxl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto}@media print{.b-table-sticky-header{overflow-y:visible!important;max-height:none!important}}.table.b-table[aria-busy=true]{opacity:.55}@supports (position: sticky){.b-table-sticky-header>.table.b-table>thead>tr>th{position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}}.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{color:#212529;background-color:#fff}.table th.b-table-sortable-column,.b-table.b-table-selectable td{cursor:pointer}.b-table.b-table-busy .b-table-busy-slot>td{border:none;padding:0}.b-table.b-table-fixed{table-layout:fixed}.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}input[type=range].is-valid::-webkit-slider-thumb{background-color:#198754}input[type=range].is-valid::-moz-range-thumb{background-color:#198754}input[type=range].is-valid::-ms-thumb{background-color:#198754}input[type=range].is-invalid::-webkit-slider-thumb{background-color:#dc3545}input[type=range].is-invalid::-moz-range-thumb{background-color:#dc3545}input[type=range].is-invalid::-ms-thumb{background-color:#dc3545}input[type=range].is-valid::-webkit-slider-runnable-track{background-color:#84e8ba}input[type=range].is-valid::-moz-range-track{background-color:#84e8ba}input[type=range].is-valid::-ms-track{background-color:#84e8ba}input[type=range].is-invalid::-webkit-slider-runnable-track{background-color:#fae3e5}input[type=range].is-invalid::-moz-range-track{background-color:#fae3e5}input[type=range].is-invalid::-ms-track{background-color:#fae3e5}input[type=file].form-control-input-file-hide-button::-webkit-file-upload-button{display:none}input[type=file].form-control-input-file-hide-button::file-selector-button{display:none}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}[dir=rtl] .b-form-spinbutton:not(.flex-column),.b-form-spinbutton[dir=rtl]:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:transparent;width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>div,.b-form-spinbutton output>bdi{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none!important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:var(--bs-secondary-bg)}.b-form-spinbutton.disabled{pointer-events:none}.b-form-spinbutton:not(.form-control-sm):not(.form-control-lg):not(.flex-column){height:calc(1.5em + .5rem + var(--bs-border-width) * 2)}.alert .progress .progress-bar{--bs-progress-bar-transition: none}.alert .btn-close-custom{margin-bottom:auto;position:relative}.bs-popover-auto[data-popper-placement^=bottom] .popover-arrow:has(+div>.popover-header):after,.bs-popover-bottom .popover-arrow:has(+div>.popover-header):after{--bs-popover-bg: var(--bs-popover-header-bg)}.toast .progress .progress-bar{--bs-progress-bar-transition: none}.toast:not(.show){opacity:unset}.toast.fade:not(.show){opacity:0}.toast .btn-close-custom{margin:var(--bs-toast-padding-x) var(--bs-toast-padding-x) auto}.b-list-move,.b-list-enter-active,.b-list-leave-active{transition:all .5s cubic-bezier(.55,0,.1,1)}.b-list-enter-from,.b-list-leave-to{opacity:0}.b-list-leave-active{position:fixed}.container,.container-fluid{display:block}.input-group>.form-floating:not(:first-child)>:not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.input-group:not(.has-validation)>.form-floating:not(:last-child)>:not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.dropdown-toggle.dropdown-toggle-no-caret:before,.dropdown-toggle.dropdown-toggle-no-caret:after{display:none!important}.dropdown-menu.fade.showing{display:block!important}.bv-no-focus-ring:focus{outline:none}@media (max-width: 575.98px){.bv-d-sm-down-none{display:none!important}}@media (max-width: 767.98px){.bv-d-md-down-none{display:none!important}}@media (max-width: 991.98px){.bv-d-lg-down-none{display:none!important}}@media (max-width: 1199.98px){.bv-d-xl-down-none{display:none!important}}@media (max-width: 1399.98px){.bv-d-xxl-down-none{display:none!important}}.fade-enter-active,.fade-leave-active{transition:opacity .25s linear}.fade-enter-from,.fade-leave-to{opacity:0}.no-transition{transition:none!important}:root{--bs-modal-zindex: 1055;--bs-toast-max-width: 350px}\n';
injectCssToDocument(css);
useFieldComponents({
  "checkboxes": () => import("../form-checkboxes.js"),
  "date": () => import("../form-date.js"),
  "file": () => import("../form-file.js"),
  "grid-box-scale": () => import("../form-grid-box-scale.js"),
  "grid-radio-scale": () => import("../form-grid-radio-scale.js"),
  "point-scale": () => import("../form-point-scale.js"),
  "radio": () => import("../form-radio.js"),
  "select": () => import("../form-select.js"),
  "text": () => import("../form-text.js"),
  "textarea": () => import("../form-textarea.js"),
  "time": () => import("../form-time.js")
});
async function createFormkitEditor() {
  const u = useUnicorn();
  const stack = useStack("uploading");
  stack.push("loading");
  FormkitEditorApp.name = "Formkit";
  const props = data("formkit.props") || {};
  const fieldsComponents = useFieldComponents();
  const app = createApp(
    FormkitEditorApp,
    props
  );
  app.use(createBootstrap());
  app.component("draggable", VueDraggable);
  app.component("SelectOptions", SelectOptions);
  app.component("GridOptions", GridOptions);
  const types = props.types;
  const promises = [];
  for (const id in types) {
    const type = props.types[id];
    promises.push(addField(type));
  }
  async function addField(type) {
    types[type.id] = type;
    u.trigger("formkit.type.added", type, app);
    const module = type.componentModule || fieldsComponents[type.id];
    if (module) {
      const component = typeof module === "function" ? defineAsyncComponent(module) : module;
      app.component(type.componentName, component);
    } else if (type.componentModuleUrl) {
      const component = () => import(
        /* @vite-ignore */
        type.componentModuleUrl
      );
      app.component(type.componentName, defineAsyncComponent(component));
    }
  }
  async function mount(rootContainer = "formkit-edit-app") {
    await Promise.allSettled(promises);
    u.trigger("formkit.prepared", app);
    const vm = app.mount(rootContainer);
    u.trigger("formkit.mounted", vm, app);
    stack.pop();
    return vm;
  }
  return {
    mount,
    fieldsTypes: types,
    addField,
    app
  };
}
export {
  createFormkitEditor
};
//# sourceMappingURL=formkit-editor.js.map
