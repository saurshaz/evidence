import "dequal";
import { Query } from "@evidence-dev/sdk/usql";
import "@uwdata/mosaic-sql";
import "@evidence-dev/universal-sql/client-duckdb";
import "./inferColumnTypes.js";
import { r as run_all, g as get_store_value, c as compute_rest_props } from "./utils.js";
import { j as set_current_component, k as current_component, o as onDestroy, c as create_ssr_component, a as spread, b as escape_object, e as escape_attribute_value, h as escape, i as each, d as add_attribute, v as validate_component, g as getContext, s as setContext } from "./ssr.js";
import { d as derived, w as writable, r as readable } from "./index2.js";
import { nanoid } from "nanoid/non-secure";
import { tv } from "tailwind-variants";
import "lodash.debounce";
import "ssf";
import "@tidyjs/tidy";
import "@evidence-dev/sdk/utils";
import { espresso } from "thememirror";
import { closeBrackets, autocompletion, closeBracketsKeymap, completionKeymap } from "@codemirror/autocomplete";
import { history, defaultKeymap, historyKeymap } from "@codemirror/commands";
import { indentOnInput, syntaxHighlighting, defaultHighlightStyle, bracketMatching, foldKeymap } from "@codemirror/language";
import { lintKeymap } from "@codemirror/lint";
import { drawSelection, dropCursor, keymap } from "@codemirror/view";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import "export-to-csv";
import "echarts";
import "prismjs";
import "./stores.js";
import { o as onMount } from "./ssr2.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function styleToString$2(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString$2({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function portalAttr(portal) {
  if (portal !== null) {
    return "";
  }
  return void 0;
}
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
function getElementByMeltId(id) {
  if (!isBrowser$1)
    return null;
  const el = document.querySelector(`[data-melt-id="${id}"]`);
  return isHTMLElement$1(el) ? el : null;
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function makeElementArray(name, args) {
  const { stores, returned, action } = args;
  const { subscribe } = derived(stores, (values) => returned(values).map((value) => hiddenAction({
    ...value,
    [`data-melt-${name}`]: "",
    action: action ?? noop
  })));
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name,
    attribute,
    selector,
    getEl
  };
}
const isBrowser$1 = typeof document !== "undefined";
const isFunction = (v) => typeof v === "function";
function isElement(element) {
  return element instanceof Element;
}
function isHTMLElement$1(element) {
  return element instanceof HTMLElement;
}
function isElementDisabled(element) {
  const ariaDisabled = element.getAttribute("aria-disabled");
  const disabled = element.getAttribute("disabled");
  const dataDisabled = element.hasAttribute("data-disabled");
  if (ariaDisabled === "true" || disabled !== null || dataDisabled) {
    return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isReadable(value) {
  return isObject(value) && "subscribe" in value;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener$1(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement$1(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
const safeOnMount = (fn) => {
  try {
    onMount(fn);
  } catch {
    return fn;
  }
};
const safeOnDestroy = (fn) => {
  try {
    onDestroy(fn);
  } catch {
    return fn;
  }
};
function omit$1(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get_store_value(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get());
      }));
    });
    subscriber(get());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get,
    subscribe
  };
};
const kbd$2 = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
const FIRST_KEYS = [kbd$2.ARROW_DOWN, kbd$2.PAGE_UP, kbd$2.HOME];
const LAST_KEYS = [kbd$2.ARROW_UP, kbd$2.PAGE_DOWN, kbd$2.END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const SELECTION_KEYS = [kbd$2.ENTER, kbd$2.SPACE];
function effect(stores, fn) {
  let cb = void 0;
  const destroy = derived(stores, (stores2) => {
    cb?.();
    cb = fn(stores2);
  }).subscribe(noop);
  const unsub = () => {
    destroy();
    cb?.();
  };
  safeOnDestroy(unsub);
  return unsub;
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener$1(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
const documentEscapeKeyStore = readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd$2.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener$1(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
const useEscapeKeydown = (node, config = {}) => {
  let unsub = noop;
  function update2(config2 = {}) {
    unsub();
    const options = { enabled: true, ...config2 };
    const enabled = isReadable(options.enabled) ? options.enabled : readable(options.enabled);
    unsub = executeCallbacks(
      // Handle escape keydowns
      documentEscapeKeyStore.subscribe((e) => {
        if (!e || !get_store_value(enabled))
          return;
        const target = e.target;
        if (!isHTMLElement$1(target) || target.closest("[data-escapee]") !== node) {
          return;
        }
        e.preventDefault();
        if (options.ignore) {
          if (isFunction(options.ignore)) {
            if (options.ignore(e))
              return;
          } else if (Array.isArray(options.ignore)) {
            if (options.ignore.length > 0 && options.ignore.some((ignoreEl) => {
              return ignoreEl && target === ignoreEl;
            }))
              return;
          }
        }
        options.handler?.(e);
      }),
      effect(enabled, ($enabled) => {
        if ($enabled) {
          node.dataset.escapee = "";
        } else {
          delete node.dataset.escapee;
        }
      })
    );
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      node.removeAttribute("data-escapee");
      unsub();
    }
  };
};
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults$1 = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit$1(defaults$1, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
console.log(" --- test logging---");
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString2 = (style2) => {
    return Object.keys(style2).reduce((str, key) => {
      if (style2[key] === void 0)
        return str;
      return str + `${key}:${style2[key]};`;
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString2({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["src", "size", "theme", "title"]);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { theme = "default" } = $$props;
  let { title = void 0 } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  icon = src?.[theme] ?? src?.["default"];
  return `<svg${spread(
    [
      escape_object(icon?.a),
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}${each(icon?.path ?? [], (a) => {
    return `<path${spread([escape_object(a)], {})}></path>`;
  })}${each(icon?.rect ?? [], (a) => {
    return `<rect${spread([escape_object(a)], {})}></rect>`;
  })}${each(icon?.circle ?? [], (a) => {
    return `<circle${spread([escape_object(a)], {})}></circle>`;
  })}${each(icon?.polygon ?? [], (a) => {
    return `<polygon${spread([escape_object(a)], {})}></polygon>`;
  })}${each(icon?.polyline ?? [], (a) => {
    return `<polyline${spread([escape_object(a)], {})}></polyline>`;
  })}${each(icon?.line ?? [], (a) => {
    return `<line${spread([escape_object(a)], {})}></line>`;
  })}</svg>`;
});
const css = {
  code: "button.variant-info.svelte-rhn4zq{--100:#dbeafe;--400:#60a5fa;--500:#3b82f6;--600:#2563eb;--700:#1d4ed8;--800:#1e40af;--900:#1e3a8a}button.variant-warn.svelte-rhn4zq{--100:#fef9c3;--400:#facc15;--500:#eab308;--600:#ca8a04;--700:#a16207;--800:#854d0e;--900:#713f12}button.variant-success.svelte-rhn4zq{--100:#dcfce7;--400:#4ade80;--500:#22c55e;--600:#16a34a;--700:#15803d;--800:#166534;--900:#14532d}button.variant-error.svelte-rhn4zq{--100:#fee2e2;--400:#f87171;--500:#ef4444;--600:#dc2626;--700:#b91c1c;--800:#991b1b;--900:#7f1d1d}button.svelte-rhn4zq:enabled{cursor:pointer}button.svelte-rhn4zq:disabled{cursor:default}button.outlined.svelte-rhn4zq{border-width:1px;border-color:var(--700);color:var(--700)}button.outlined.svelte-rhn4zq:hover:enabled{border-color:var(--800);background-color:var(--100);color:var(--800)}button.outlined.svelte-rhn4zq:active:enabled{border-color:var(--900);color:var(--900)}button.outlined.svelte-rhn4zq:disabled{border-color:var(--400);color:var(--400)}button.svelte-rhn4zq:not(.outlined){border-width:1px;border-color:transparent;background-color:var(--600);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}button.svelte-rhn4zq:not(.outlined):hover:enabled{background-color:var(--700)}button.svelte-rhn4zq:not(.outlined):active:enabled{background-color:var(--800)}button.svelte-rhn4zq:not(.outlined):disabled{background-color:var(--400)}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n\\n\\t/** @typedef {\\"sm\\" | \\"md\\" | \\"base\\" | \\"lg\\"} ButtonSize */\\n\\t/** @typedef {\\"info\\" | \\"success\\" | \\"warn\\" | \\"error\\"} ButtonVariant */\\n\\t/** @typedef {\\"left\\" | \\"right\\"} ButtonIconPosition */\\n\\t/** @typedef {boolean} ButtonOutline */\\n\\n\\t/** @type {Record<ButtonSize, string>}*/\\n\\tconst sizes = {\\n\\t\\tbase: 'px-2 py-1 mx-1 gap-2',\\n\\t\\tmd: 'px-2 py-1 mx-1 gap-2 text-xs',\\n\\t\\tsm: 'px-1 py-0.5 mx-0.5 gap-1 text-xs',\\n\\t\\tlg: 'px-4 py-2 mx-2 gap-4'\\n\\t};\\n\\n\\t/** @type {Record<ButtonSize, string>}*/\\n\\tconst iconSizes = {\\n\\t\\tbase: 'w-4',\\n\\t\\tmd: 'w-4',\\n\\t\\tsm: 'w-3',\\n\\t\\tlg: 'w-5'\\n\\t};\\n\\tconsole.log(' --- test logging---');\\n\\n<\/script>\\n\\n<script>\\n\\timport { Icon } from '@steeze-ui/svelte-icon';\\n\\t/** @type {import(\\"@steeze-ui/svelte-icon\\").IconSource | undefined} */\\n\\texport let icon = undefined;\\n\\n\\t/** @type {ButtonIconPosition} */\\n\\texport let iconPosition = 'right';\\n\\n\\t/** @type {ButtonSize} */\\n\\texport let size = 'base';\\n\\n\\t/** @type {ButtonSize} */\\n\\texport let iconSize = size;\\n\\n\\t/** @type {ButtonVariant} */\\n\\texport let variant = 'info';\\n\\n\\t/** @type {boolean} */\\n\\texport let outline = false;\\n\\n\\t/** @type {boolean} */\\n\\texport let disabled = false;\\n\\n\\t/** @type {string | undefined} */\\n\\texport let formaction = undefined;\\n\\n\\t/** @type {HTMLButtonAttributes[\\"type\\"]} */\\n\\tlet _type = 'button';\\n\\texport { _type as type };\\n\\n\\t$: if (formaction) _type = 'submit';\\n<\/script>\\n\\n<button\\n\\ttype={_type}\\n\\t{disabled}\\n\\t{formaction}\\n\\ton:click|stopPropagation\\n\\tclass:outlined={outline}\\n\\tclass=\\"flex items-center transition-colors rounded variant-{variant} {sizes[size]}\\"\\n>\\n\\t{#if iconPosition === 'left' && icon}\\n\\t\\t<Icon src={icon} class={iconSizes[iconSize]} />\\n\\t{/if}\\n\\t<slot />\\n\\t{#if iconPosition === 'right' && icon}\\n\\t\\t<Icon src={icon} class={iconSizes[iconSize]} />\\n\\t{/if}\\n</button>\\n\\n<style>\\n\\t/* \\n\\t\\tColors are handled here because of the amount of permutations between outlined, variant, and disabled states\\n\\n\\t\\tThere is probably room to clean this up; but right now it works\\n\\t*/\\n\\tbutton.variant-info {\\n\\t\\t\\t--100: #dbeafe;\\n\\t\\t\\t--400: #60a5fa;\\n\\t\\t\\t--500: #3b82f6;\\n\\t\\t\\t--600: #2563eb;\\n\\t\\t\\t--700: #1d4ed8;\\n\\t\\t\\t--800: #1e40af;\\n\\t\\t\\t--900: #1e3a8a;\\n\\t\\t}\\n\\tbutton.variant-warn {\\n\\t\\t\\t--100: #fef9c3;\\n\\t\\t\\t--400: #facc15;\\n\\t\\t\\t--500: #eab308;\\n\\t\\t\\t--600: #ca8a04;\\n\\t\\t\\t--700: #a16207;\\n\\t\\t\\t--800: #854d0e;\\n\\t\\t\\t--900: #713f12;\\n\\t\\t}\\n\\tbutton.variant-success {\\n\\t\\t\\t--100: #dcfce7;\\n\\t\\t\\t--400: #4ade80;\\n\\t\\t\\t--500: #22c55e;\\n\\t\\t\\t--600: #16a34a;\\n\\t\\t\\t--700: #15803d;\\n\\t\\t\\t--800: #166534;\\n\\t\\t\\t--900: #14532d;\\n\\t\\t}\\n\\tbutton.variant-error {\\n\\t\\t\\t--100: #fee2e2;\\n\\t\\t\\t--400: #f87171;\\n\\t\\t\\t--500: #ef4444;\\n\\t\\t\\t--600: #dc2626;\\n\\t\\t\\t--700: #b91c1c;\\n\\t\\t\\t--800: #991b1b;\\n\\t\\t\\t--900: #7f1d1d;\\n\\t\\t}\\n\\tbutton:enabled {\\n\\t\\t\\tcursor: pointer;\\n}\\n\\tbutton:disabled {\\n\\t\\t\\tcursor: default;\\n}\\n\\tbutton.outlined {\\n\\t\\t\\tborder-width: 1px;\\n\\t\\t\\tborder-color: var(--700);\\n\\t\\t\\tcolor: var(--700);\\n}\\n\\tbutton.outlined:hover:enabled {\\n\\t\\t\\tborder-color: var(--800);\\n\\t\\t\\tbackground-color: var(--100);\\n\\t\\t\\tcolor: var(--800);\\n}\\n\\tbutton.outlined:active:enabled {\\n\\t\\t\\tborder-color: var(--900);\\n\\t\\t\\tcolor: var(--900);\\n}\\n\\tbutton.outlined:disabled {\\n\\t\\t\\tborder-color: var(--400);\\n\\t\\t\\tcolor: var(--400);\\n}\\n\\tbutton:not(.outlined) {\\n\\t\\t\\tborder-width: 1px;\\n\\t\\t\\tborder-color: transparent;\\n\\t\\t\\tbackground-color: var(--600);\\n\\t\\t\\t--tw-text-opacity: 1;\\n\\t\\t\\tcolor: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\n\\tbutton:not(.outlined):hover:enabled {\\n\\t\\t\\tbackground-color: var(--700);\\n}\\n\\tbutton:not(.outlined):active:enabled {\\n\\t\\t\\tbackground-color: var(--800);\\n}\\n\\tbutton:not(.outlined):disabled {\\n\\t\\t\\tbackground-color: var(--400);\\n}</style>\\n"],"names":[],"mappings":"AAmFC,MAAM,2BAAc,CAClB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OACR,CACD,MAAM,2BAAc,CAClB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OACR,CACD,MAAM,8BAAiB,CACrB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OACR,CACD,MAAM,4BAAe,CACnB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,OACR,CACD,oBAAM,QAAS,CACb,MAAM,CAAE,OACX,CACC,oBAAM,SAAU,CACd,MAAM,CAAE,OACX,CACC,MAAM,uBAAU,CACd,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,IAAI,KAAK,CAAC,CACxB,KAAK,CAAE,IAAI,KAAK,CACnB,CACC,MAAM,uBAAS,MAAM,QAAS,CAC5B,YAAY,CAAE,IAAI,KAAK,CAAC,CACxB,gBAAgB,CAAE,IAAI,KAAK,CAAC,CAC5B,KAAK,CAAE,IAAI,KAAK,CACnB,CACC,MAAM,uBAAS,OAAO,QAAS,CAC7B,YAAY,CAAE,IAAI,KAAK,CAAC,CACxB,KAAK,CAAE,IAAI,KAAK,CACnB,CACC,MAAM,uBAAS,SAAU,CACvB,YAAY,CAAE,IAAI,KAAK,CAAC,CACxB,KAAK,CAAE,IAAI,KAAK,CACnB,CACC,oBAAM,KAAK,SAAS,CAAE,CACpB,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,WAAW,CACzB,gBAAgB,CAAE,IAAI,KAAK,CAAC,CAC5B,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAClD,CACC,oBAAM,KAAK,SAAS,CAAC,MAAM,QAAS,CAClC,gBAAgB,CAAE,IAAI,KAAK,CAC9B,CACC,oBAAM,KAAK,SAAS,CAAC,OAAO,QAAS,CACnC,gBAAgB,CAAE,IAAI,KAAK,CAC9B,CACC,oBAAM,KAAK,SAAS,CAAC,SAAU,CAC7B,gBAAgB,CAAE,IAAI,KAAK,CAC9B"}`
};
const sizes = {
  base: "px-2 py-1 mx-1 gap-2",
  md: "px-2 py-1 mx-1 gap-2 text-xs",
  sm: "px-1 py-0.5 mx-0.5 gap-1 text-xs",
  lg: "px-4 py-2 mx-2 gap-4"
};
const iconSizes = {
  base: "w-4",
  md: "w-4",
  sm: "w-3",
  lg: "w-5"
};
console.log(" --- test logging---");
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = void 0 } = $$props;
  let { iconPosition = "right" } = $$props;
  let { size = "base" } = $$props;
  let { iconSize = size } = $$props;
  let { variant = "info" } = $$props;
  let { outline = false } = $$props;
  let { disabled = false } = $$props;
  let { formaction = void 0 } = $$props;
  let { type: _type = "button" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconPosition === void 0 && $$bindings.iconPosition && iconPosition !== void 0)
    $$bindings.iconPosition(iconPosition);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.formaction === void 0 && $$bindings.formaction && formaction !== void 0)
    $$bindings.formaction(formaction);
  if ($$props.type === void 0 && $$bindings.type && _type !== void 0)
    $$bindings.type(_type);
  $$result.css.add(css);
  {
    if (formaction)
      _type = "submit";
  }
  return `<button${add_attribute("type", _type, 0)} ${disabled ? "disabled" : ""}${add_attribute("formaction", formaction, 0)} class="${[
    "flex items-center transition-colors rounded variant-" + escape(variant, true) + " " + escape(sizes[size], true) + " svelte-rhn4zq",
    outline ? "outlined" : ""
  ].join(" ").trim()}">${iconPosition === "left" && icon ? `${validate_component(Icon, "Icon").$$render($$result, { src: icon, class: iconSizes[iconSize] }, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``} ${iconPosition === "right" && icon ? `${validate_component(Icon, "Icon").$$render($$result, { src: icon, class: iconSizes[iconSize] }, {}, {})}` : ``} </button>`;
});
const SCORE_CONTINUE_MATCH = 1, SCORE_SPACE_WORD_JUMP = 0.9, SCORE_NON_SPACE_WORD_JUMP = 0.8, SCORE_CHARACTER_JUMP = 0.17, SCORE_TRANSPOSITION = 0.1, PENALTY_SKIPPED = 0.999, PENALTY_CASE_MISMATCH = 0.9999, PENALTY_NOT_COMPLETE = 0.99;
const IS_GAP_REGEXP = /[\\/_+.#"@[({&]/, COUNT_GAPS_REGEXP = /[\\/_+.#"@[({&]/g, IS_SPACE_REGEXP = /[\s-]/, COUNT_SPACE_REGEXP = /[\s-]/g;
function commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, stringIndex, abbreviationIndex, memoizedResults) {
  if (abbreviationIndex === abbreviation.length) {
    if (stringIndex === string.length) {
      return SCORE_CONTINUE_MATCH;
    }
    return PENALTY_NOT_COMPLETE;
  }
  const memoizeKey = `${stringIndex},${abbreviationIndex}`;
  if (memoizedResults[memoizeKey] !== void 0) {
    return memoizedResults[memoizeKey];
  }
  const abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
  let index = lowerString.indexOf(abbreviationChar, stringIndex);
  let highScore = 0;
  let score, transposedScore, wordBreaks, spaceBreaks;
  while (index >= 0) {
    score = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 1, memoizedResults);
    if (score > highScore) {
      if (index === stringIndex) {
        score *= SCORE_CONTINUE_MATCH;
      } else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
        score *= SCORE_NON_SPACE_WORD_JUMP;
        wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
        if (wordBreaks && stringIndex > 0) {
          score *= Math.pow(PENALTY_SKIPPED, wordBreaks.length);
        }
      } else if (IS_SPACE_REGEXP.test(string.charAt(index - 1))) {
        score *= SCORE_SPACE_WORD_JUMP;
        spaceBreaks = string.slice(stringIndex, index - 1).match(COUNT_SPACE_REGEXP);
        if (spaceBreaks && stringIndex > 0) {
          score *= Math.pow(PENALTY_SKIPPED, spaceBreaks.length);
        }
      } else {
        score *= SCORE_CHARACTER_JUMP;
        if (stringIndex > 0) {
          score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
        }
      }
      if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) {
        score *= PENALTY_CASE_MISMATCH;
      }
    }
    if (score < SCORE_TRANSPOSITION && lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1) || lowerAbbreviation.charAt(abbreviationIndex + 1) === lowerAbbreviation.charAt(abbreviationIndex) && // allow duplicate letters. Ref #7428
    lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex)) {
      transposedScore = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 2, memoizedResults);
      if (transposedScore * SCORE_TRANSPOSITION > score) {
        score = transposedScore * SCORE_TRANSPOSITION;
      }
    }
    if (score > highScore) {
      highScore = score;
    }
    index = lowerString.indexOf(abbreviationChar, index + 1);
  }
  memoizedResults[memoizeKey] = highScore;
  return highScore;
}
function formatInput(string) {
  return string.toLowerCase().replace(COUNT_SPACE_REGEXP, " ");
}
function commandScore(string, abbreviation) {
  return commandScoreInner(string, abbreviation, formatInput(string), formatInput(abbreviation), 0, 0, {});
}
const isBrowser = typeof document !== "undefined";
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isHTMLInputElement(element) {
  return element instanceof HTMLInputElement;
}
function isUndefined(value) {
  return value === void 0;
}
function generateId() {
  return nanoid(10);
}
const kbd$1 = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*"
};
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
const NAME$m = "Command";
const STATE_NAME = "CommandState";
const GROUP_NAME = "CommandGroup";
const LIST_SELECTOR = `[data-cmdk-list-sizer]`;
const GROUP_SELECTOR = `[data-cmdk-group]`;
const GROUP_ITEMS_SELECTOR = `[data-cmdk-group-items]`;
const GROUP_HEADING_SELECTOR = `[data-cmdk-group-heading]`;
const ITEM_SELECTOR = `[data-cmdk-item]`;
const VALID_ITEM_SELECTOR = `${ITEM_SELECTOR}:not([aria-disabled="true"])`;
const VALUE_ATTR = `data-value`;
const defaultFilter = (value, search) => commandScore(value, search);
function getCtx() {
  return getContext(NAME$m);
}
function getState() {
  return getContext(STATE_NAME);
}
function createGroup(alwaysRender) {
  const id = generateId();
  setContext(GROUP_NAME, {
    id,
    alwaysRender: isUndefined(alwaysRender) ? false : alwaysRender
  });
  return { id };
}
function getGroup() {
  const context = getContext(GROUP_NAME);
  if (!context)
    return void 0;
  return context;
}
function createState(initialValues) {
  const defaultState = {
    search: "",
    value: "",
    filtered: {
      count: 0,
      items: /* @__PURE__ */ new Map(),
      groups: /* @__PURE__ */ new Set()
    }
  };
  const state = writable(initialValues ? { ...defaultState, ...removeUndefined(initialValues) } : defaultState);
  return state;
}
const defaults = {
  label: "Command menu",
  shouldFilter: true,
  loop: false,
  onValueChange: void 0,
  value: void 0,
  filter: defaultFilter,
  ids: {
    root: generateId(),
    list: generateId(),
    label: generateId(),
    input: generateId()
  }
};
function createCommand(props) {
  const ids = {
    root: generateId(),
    list: generateId(),
    label: generateId(),
    input: generateId(),
    ...props.ids
  };
  const withDefaults = {
    ...defaults,
    ...removeUndefined(props)
  };
  const state = props.state ?? createState({
    value: withDefaults.value
  });
  const allItems = writable(/* @__PURE__ */ new Set());
  const allGroups = writable(/* @__PURE__ */ new Map());
  const allIds = writable(/* @__PURE__ */ new Map());
  const commandEl = writable(null);
  const options = toWritableStores(omit(withDefaults, "value", "ids"));
  const { shouldFilter, loop, filter, label } = options;
  const context = {
    value: (id, value) => {
      if (value !== get_store_value(allIds).get(id)) {
        allIds.update(($allIds) => {
          $allIds.set(id, value);
          return $allIds;
        });
        state.update(($state) => {
          $state.filtered.items.set(id, score(value, $state.search));
          const sortedState = sort($state, get_store_value(shouldFilter));
          return sortedState;
        });
      }
    },
    // Track item lifecycle (add/remove)
    item: (id, groupId) => {
      allItems.update(($allItems) => $allItems.add(id));
      if (groupId) {
        allGroups.update(($allGroups) => {
          if (!$allGroups.has(groupId)) {
            $allGroups.set(groupId, /* @__PURE__ */ new Set([id]));
          } else {
            $allGroups.get(groupId)?.add(id);
          }
          return $allGroups;
        });
      }
      state.update(($state) => {
        const $shouldFilter = get_store_value(shouldFilter);
        const filteredState = filterItems($state, $shouldFilter);
        const sortedState = sort(filteredState, $shouldFilter);
        if (!sortedState.value) {
          const value = selectFirstItem();
          sortedState.value = value ?? "";
        }
        return sortedState;
      });
      return () => {
        allIds.update(($allIds) => {
          $allIds.delete(id);
          return $allIds;
        });
        allItems.update(($allItems) => {
          $allItems.delete(id);
          return $allItems;
        });
        state.update(($state) => {
          $state.filtered.items.delete(id);
          const selectedItem = getSelectedItem();
          const filteredState = filterItems($state);
          if (selectedItem?.getAttribute("id") === id) {
            filteredState.value = selectFirstItem() ?? "";
          }
          return $state;
        });
      };
    },
    group: (id) => {
      allGroups.update(($allGroups) => {
        if (!$allGroups.has(id)) {
          $allGroups.set(id, /* @__PURE__ */ new Set());
        }
        return $allGroups;
      });
      return () => {
        allIds.update(($allIds) => {
          $allIds.delete(id);
          return $allIds;
        });
        allGroups.update(($allGroups) => {
          $allGroups.delete(id);
          return $allGroups;
        });
      };
    },
    filter: () => {
      return get_store_value(shouldFilter);
    },
    label: get_store_value(label) || props["aria-label"] || "",
    commandEl,
    ids,
    updateState
  };
  function updateState(key, value, preventScroll) {
    const $shouldFilter = get_store_value(shouldFilter);
    state.update((curr) => {
      if (Object.is(curr[key], value))
        return curr;
      curr[key] = value;
      if (key === "search") {
        const filteredState = filterItems(curr, $shouldFilter);
        curr = filteredState;
        const sortedState = sort(curr, $shouldFilter);
        curr = sortedState;
        tick().then(() => state.update((curr2) => {
          curr2.value = selectFirstItem() ?? "";
          return curr2;
        }));
      } else if (key === "value") {
        props.onValueChange?.(curr.value);
        if (!preventScroll) {
          tick().then(() => scrollSelectedIntoView());
        }
      }
      return curr;
    });
  }
  function filterItems(state2, shouldFilterVal) {
    const $shouldFilter = shouldFilterVal ?? get_store_value(shouldFilter);
    const $allItems = get_store_value(allItems);
    const $allIds = get_store_value(allIds);
    if (!state2.search || !$shouldFilter) {
      state2.filtered.count = $allItems.size;
      return state2;
    }
    state2.filtered.groups = /* @__PURE__ */ new Set();
    let itemCount = 0;
    for (const id of $allItems) {
      const value = $allIds.get(id);
      const rank = score(value, state2.search);
      state2.filtered.items.set(id, rank);
      if (rank > 0) {
        itemCount++;
      }
    }
    for (const [groupId, group] of get_store_value(allGroups)) {
      for (const itemId of group) {
        const rank = state2.filtered.items.get(itemId);
        if (rank && rank > 0) {
          state2.filtered.groups.add(groupId);
        }
      }
    }
    state2.filtered.count = itemCount;
    return state2;
  }
  function sort(state2, shouldFilterVal) {
    const $shouldFilter = shouldFilterVal ?? get_store_value(shouldFilter);
    if (!state2.search || !$shouldFilter) {
      return state2;
    }
    const scores = state2.filtered.items;
    const groups = [];
    const $allGroups = get_store_value(allGroups);
    state2.filtered.groups.forEach((value) => {
      const items = $allGroups.get(value);
      if (!items)
        return;
      let max = 0;
      items.forEach((item) => {
        const score2 = scores.get(item);
        if (isUndefined(score2))
          return;
        max = Math.max(score2, max);
      });
      groups.push([value, max]);
    });
    const rootEl = document.getElementById(ids.root);
    if (!rootEl)
      return state2;
    const list = rootEl.querySelector(LIST_SELECTOR);
    getValidItems(rootEl).sort((a, b) => {
      const valueA = a.getAttribute(VALUE_ATTR) ?? "";
      const valueB = b.getAttribute(VALUE_ATTR) ?? "";
      return (scores.get(valueA) ?? 0) - (scores.get(valueB) ?? 0);
    }).forEach((item) => {
      const group = item.closest(GROUP_ITEMS_SELECTOR);
      const closest = item.closest(`${GROUP_ITEMS_SELECTOR} > *`);
      if (isHTMLElement(group)) {
        if (item.parentElement === group) {
          group.appendChild(item);
        } else {
          if (!isHTMLElement(closest))
            return;
          group.appendChild(closest);
        }
      } else {
        if (!isHTMLElement(list))
          return;
        if (item.parentElement === list) {
          list.appendChild(item);
        } else {
          if (!isHTMLElement(closest))
            return;
          list.appendChild(closest);
        }
      }
    });
    groups.sort((a, b) => b[1] - a[1]).forEach((group) => {
      const el = rootEl.querySelector(`${GROUP_SELECTOR}[${VALUE_ATTR}="${group[0]}"]`);
      if (!isHTMLElement(el))
        return;
      el.parentElement?.appendChild(el);
    });
    return state2;
  }
  function selectFirstItem() {
    const item = getValidItems().find((item2) => !item2.ariaDisabled);
    if (!item)
      return;
    const value = item.getAttribute(VALUE_ATTR);
    if (!value)
      return;
    return value;
  }
  function score(value, search) {
    const lowerCaseAndTrimmedValue = value?.toLowerCase().trim();
    const filterFn = get_store_value(filter);
    if (!filterFn) {
      return lowerCaseAndTrimmedValue ? defaultFilter(lowerCaseAndTrimmedValue, search) : 0;
    }
    return lowerCaseAndTrimmedValue ? filterFn(lowerCaseAndTrimmedValue, search) : 0;
  }
  function scrollSelectedIntoView() {
    const item = getSelectedItem();
    if (!item) {
      return;
    }
    if (item.parentElement?.firstChild === item) {
      tick().then(() => item.closest(GROUP_SELECTOR)?.querySelector(GROUP_HEADING_SELECTOR)?.scrollIntoView({
        block: "nearest"
      }));
    }
    tick().then(() => item.scrollIntoView({ block: "nearest" }));
  }
  function getValidItems(rootElement) {
    const rootEl = rootElement ?? document.getElementById(ids.root);
    if (!rootEl)
      return [];
    return Array.from(rootEl.querySelectorAll(VALID_ITEM_SELECTOR)).filter((el) => isHTMLElement(el));
  }
  function getSelectedItem(rootElement) {
    const rootEl = document.getElementById(ids.root);
    if (!rootEl)
      return;
    const selectedEl = rootEl.querySelector(`${VALID_ITEM_SELECTOR}[aria-selected="true"]`);
    if (!isHTMLElement(selectedEl))
      return null;
    return selectedEl;
  }
  function updateSelectedToIndex(index) {
    const rootEl = document.getElementById(ids.root);
    if (!rootEl)
      return;
    const items = getValidItems(rootEl);
    const item = items[index];
    if (!item)
      return;
  }
  function updateSelectedByChange(change) {
    const selected = getSelectedItem();
    const items = getValidItems();
    const index = items.findIndex((item) => item === selected);
    let newSelected = items[index + change];
    if (get_store_value(loop)) {
      if (index + change < 0) {
        newSelected = items[items.length - 1];
      } else if (index + change === items.length) {
        newSelected = items[0];
      } else {
        newSelected = items[index + change];
      }
    }
    if (newSelected) {
      updateState("value", newSelected.getAttribute(VALUE_ATTR) ?? "");
    }
  }
  function updateSelectedToGroup(change) {
    const selected = getSelectedItem();
    let group = selected?.closest(GROUP_SELECTOR);
    let item = void 0;
    while (group && !item) {
      group = change > 0 ? findNextSibling(group, GROUP_SELECTOR) : findPreviousSibling(group, GROUP_SELECTOR);
      item = group?.querySelector(VALID_ITEM_SELECTOR);
    }
    if (item) {
      updateState("value", item.getAttribute(VALUE_ATTR) ?? "");
    } else {
      updateSelectedByChange(change);
    }
  }
  function last() {
    return updateSelectedToIndex(getValidItems().length - 1);
  }
  function next(e) {
    e.preventDefault();
    if (e.metaKey) {
      last();
    } else if (e.altKey) {
      updateSelectedToGroup(1);
    } else {
      updateSelectedByChange(1);
    }
  }
  function prev(e) {
    e.preventDefault();
    if (e.metaKey) {
      updateSelectedToIndex(0);
    } else if (e.altKey) {
      updateSelectedToGroup(-1);
    } else {
      updateSelectedByChange(-1);
    }
  }
  function handleRootKeydown(e) {
    switch (e.key) {
      case kbd$1.ARROW_DOWN:
        next(e);
        break;
      case kbd$1.ARROW_UP:
        prev(e);
        break;
      case kbd$1.HOME:
        e.preventDefault();
        updateSelectedToIndex(0);
        break;
      case kbd$1.END:
        e.preventDefault();
        last();
        break;
      case kbd$1.ENTER: {
        e.preventDefault();
        const item = getSelectedItem();
        if (item) {
          item.click();
        }
      }
    }
  }
  setContext(NAME$m, context);
  const stateStore = {
    subscribe: state.subscribe,
    update: state.update,
    set: state.set,
    updateState
  };
  setContext(STATE_NAME, stateStore);
  return {
    state: stateStore,
    handleRootKeydown,
    commandEl,
    ids
  };
}
function findNextSibling(el, selector) {
  let sibling = el.nextElementSibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.nextElementSibling;
  }
}
function findPreviousSibling(el, selector) {
  let sibling = el.previousElementSibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.previousElementSibling;
  }
}
function styleToString$1(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString$1({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-bits-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
styleToString({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
});
styleToString({
  position: "absolute",
  width: "25px",
  height: "25px",
  opacity: "0",
  margin: "0px",
  pointerEvents: "none",
  transform: "translateX(-100%)"
});
const NAME$l = "accordion";
const PARTS$l = ["root", "content", "header", "item", "trigger"];
createBitAttrs(NAME$l, PARTS$l);
const NAME$k = "alert-dialog";
const PARTS$k = [
  "action",
  "cancel",
  "content",
  "description",
  "overlay",
  "portal",
  "title",
  "trigger"
];
createBitAttrs(NAME$k, PARTS$k);
const NAME$j = "avatar";
const PARTS$j = ["root", "image", "fallback"];
createBitAttrs(NAME$j, PARTS$j);
const NAME$i = "checkbox";
const PARTS$i = ["root", "input", "indicator"];
createBitAttrs(NAME$i, PARTS$i);
const NAME$h = "collapsible";
const PARTS$h = ["root", "content", "trigger"];
createBitAttrs(NAME$h, PARTS$h);
const NAME$g = "context-menu";
const PARTS$g = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$g, PARTS$g);
const NAME$f = "dialog";
const PARTS$f = ["close", "content", "description", "overlay", "portal", "title", "trigger"];
createBitAttrs(NAME$f, PARTS$f);
const NAME$e = "dropdown-menu";
const PARTS$e = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$e, PARTS$e);
const NAME$d = "link-preview";
const PARTS$d = ["arrow", "content", "trigger"];
createBitAttrs(NAME$d, PARTS$d);
const NAME$c = "label";
const PARTS$c = ["root"];
createBitAttrs(NAME$c, PARTS$c);
const NAME$b = "menubar";
const PARTS$b = [
  "root",
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$b, PARTS$b);
const NAME$a = "popover";
const PARTS$a = ["arrow", "close", "content", "trigger"];
createBitAttrs(NAME$a, PARTS$a);
const NAME$9 = "progress";
const PARTS$9 = ["root"];
createBitAttrs(NAME$9, PARTS$9);
const NAME$8 = "radio-group";
const PARTS$8 = ["root", "item", "input"];
createBitAttrs(NAME$8, PARTS$8);
const NAME$7 = "select";
const PARTS$7 = ["arrow", "content", "group", "item", "input", "label", "trigger", "value"];
createBitAttrs(NAME$7, PARTS$7);
const NAME$6 = "separator";
const PARTS$6 = ["root"];
createBitAttrs(NAME$6, PARTS$6);
const NAME$5 = "slider";
const PARTS$5 = ["root", "input", "range", "thumb", "tick"];
createBitAttrs(NAME$5, PARTS$5);
const NAME$4 = "switch";
const PARTS$4 = ["root", "input", "thumb"];
createBitAttrs(NAME$4, PARTS$4);
const NAME$3 = "tabs";
const PARTS$3 = ["root", "content", "list", "trigger"];
createBitAttrs(NAME$3, PARTS$3);
const NAME$2 = "toggle";
const PARTS$2 = ["root", "input"];
createBitAttrs(NAME$2, PARTS$2);
const NAME$1 = "toggle-group";
const PARTS$1 = ["root", "item"];
createBitAttrs(NAME$1, PARTS$1);
const NAME = "tooltip";
const PARTS = ["arrow", "content", "trigger"];
createBitAttrs(NAME, PARTS);
const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-gray-900 text-white shadow hover:bg-gray-900/90",
      destructive: "bg-red-500 text-red-50 shadow-sm hover:bg-red-500/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-gray-100 hover:text-gray-900",
      secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      link: "text-gray-900 underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 select-none",
  variants: {
    variant: {
      default: "border-transparent bg-gray-900 text-white shadow hover:bg-gray-900/80",
      secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80",
      destructive: "border-transparent bg-red-500 text-red-50 shadow hover:bg-red-500/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const ssrQueries = [];
Query.addEventListener("queryCreated", (q) => ssrQueries.push(q.proxied));
console.log("loading componengts ....");
[
  espresso,
  // highlightSpecialChars(),
  history(),
  drawSelection(),
  dropCursor(),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...completionKeymap,
    ...lintKeymap
  ])
];
console.log(" --- test logging---");
export {
  createGroup as A,
  Button as B,
  getCtx as C,
  generateId as D,
  isBrowser as E,
  FIRST_LAST_KEYS as F,
  ITEM_SELECTOR as G,
  isHTMLInputElement as H,
  Icon as I,
  getGroup as J,
  isUndefined as K,
  isHTMLElement as L,
  badgeVariants as M,
  isFunction as N,
  buttonVariants as O,
  SELECTION_KEYS as S,
  VALUE_ATTR as V,
  isHTMLElement$1 as a,
  executeCallbacks as b,
  addMeltEventListener as c,
  isElementDisabled as d,
  effect as e,
  safeOnMount as f,
  addEventListener$1 as g,
  createElHelpers as h,
  isBrowser$1 as i,
  disabledAttr as j,
  kbd$2 as k,
  cn as l,
  makeElement as m,
  noop as n,
  omit$1 as o,
  portalAttr as p,
  flyAndScale as q,
  makeElementArray as r,
  styleToString$2 as s,
  tick as t,
  useEscapeKeydown as u,
  getElementByMeltId as v,
  withGet as w,
  isElement as x,
  createCommand as y,
  getState as z
};
