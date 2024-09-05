import { c as compute_rest_props, s as subscribe } from "../../chunks/utils.js";
import { s as setContext, g as getContext, c as create_ssr_component, a as spread, b as escape_object, d as add_attribute, v as validate_component, h as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores2.js";
import { q as omit, m as makeElement, l as createElHelpers, o as disabledAttr, e as executeCallbacks, g as addMeltEventListener, s as styleToString, a as isHTMLElement, k as kbd, x as getElementByMeltId, r as cn, I as Icon } from "../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import "../../chunks/stores.js";
import "@evidence-dev/sdk/usql";
import "ssf";
import "../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import "@uwdata/mosaic-sql";
import "@evidence-dev/universal-sql/client-duckdb";
import "export-to-csv";
import "chroma-js";
import "lodash.debounce";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import { a as toWritableStores, g as generateIds, o as overridable, t as tick, f as generateId, r as removeUndefined, c as createBitAttrs, b as getOptionUpdater, d as createDispatcher } from "../../chunks/updater.js";
import { d as derived, w as writable } from "../../chunks/index2.js";
import { C as ChevronDown } from "../../chunks/index5.js";
import { a as Clipboard } from "../../chunks/index4.js";
const { name, selector } = createElHelpers("accordion");
const defaults = {
  multiple: false,
  disabled: false,
  forceVisible: false
};
const createAccordion = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value", "onValueChange", "defaultValue"));
  const meltIds = generateIds(["root"]);
  const { disabled, forceVisible } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const isSelected = (key, v) => {
    if (v === void 0)
      return false;
    if (typeof v === "string")
      return v === key;
    return v.includes(key);
  };
  const isSelectedStore = derived(value, ($value) => {
    return (key) => isSelected(key, $value);
  });
  const root = makeElement(name(), {
    returned: () => ({
      "data-melt-id": meltIds.root
    })
  });
  const parseItemProps = (props2) => {
    if (typeof props2 === "string") {
      return { value: props2 };
    } else {
      return props2;
    }
  };
  const parseHeadingProps = (props2) => {
    if (typeof props2 === "number") {
      return { level: props2 };
    } else {
      return props2;
    }
  };
  const item = makeElement(name("item"), {
    stores: value,
    returned: ($value) => {
      return (props2) => {
        const { value: itemValue, disabled: disabled2 } = parseItemProps(props2);
        return {
          "data-state": isSelected(itemValue, $value) ? "open" : "closed",
          "data-disabled": disabledAttr(disabled2)
        };
      };
    }
  });
  const trigger = makeElement(name("trigger"), {
    stores: [value, disabled],
    returned: ([$value, $disabled]) => {
      return (props2) => {
        const { value: itemValue, disabled: disabled2 } = parseItemProps(props2);
        return {
          disabled: disabledAttr($disabled || disabled2),
          "aria-expanded": isSelected(itemValue, $value) ? true : false,
          "aria-disabled": disabled2 ? true : false,
          "data-disabled": disabledAttr(disabled2),
          "data-value": itemValue,
          "data-state": isSelected(itemValue, $value) ? "open" : "closed"
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const disabled2 = node.dataset.disabled === "true";
        const itemValue = node.dataset.value;
        if (disabled2 || !itemValue)
          return;
        handleValueUpdate(itemValue);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (![kbd.ARROW_DOWN, kbd.ARROW_UP, kbd.HOME, kbd.END].includes(e.key)) {
          return;
        }
        e.preventDefault();
        if (e.key === kbd.SPACE || e.key === kbd.ENTER) {
          const disabled2 = node.dataset.disabled === "true";
          const itemValue = node.dataset.value;
          if (disabled2 || !itemValue)
            return;
          handleValueUpdate(itemValue);
          return;
        }
        const el = e.target;
        const rootEl = getElementByMeltId(meltIds.root);
        if (!rootEl || !isHTMLElement(el))
          return;
        const items = Array.from(rootEl.querySelectorAll(selector("trigger")));
        const candidateItems = items.filter((item2) => {
          if (!isHTMLElement(item2))
            return false;
          return item2.dataset.disabled !== "true";
        });
        if (!candidateItems.length)
          return;
        const elIdx = candidateItems.indexOf(el);
        if (e.key === kbd.ARROW_DOWN) {
          candidateItems[(elIdx + 1) % candidateItems.length].focus();
        }
        if (e.key === kbd.ARROW_UP) {
          candidateItems[(elIdx - 1 + candidateItems.length) % candidateItems.length].focus();
        }
        if (e.key === kbd.HOME) {
          candidateItems[0].focus();
        }
        if (e.key === kbd.END) {
          candidateItems[candidateItems.length - 1].focus();
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: [value, disabled, forceVisible],
    returned: ([$value, $disabled, $forceVisible]) => {
      return (props2) => {
        const { value: itemValue } = parseItemProps(props2);
        const isVisible = isSelected(itemValue, $value) || $forceVisible;
        return {
          "data-state": isVisible ? "open" : "closed",
          "data-disabled": disabledAttr($disabled),
          "data-value": itemValue,
          hidden: isVisible ? void 0 : true,
          style: styleToString({
            display: isVisible ? void 0 : "none"
          })
        };
      };
    },
    action: (node) => {
      tick().then(() => {
        const contentId = generateId();
        const triggerId = generateId();
        const parentTrigger = document.querySelector(`${selector("trigger")}, [data-value="${node.dataset.value}"]`);
        if (!isHTMLElement(parentTrigger))
          return;
        node.id = contentId;
        parentTrigger.setAttribute("aria-controls", contentId);
        parentTrigger.id = triggerId;
      });
    }
  });
  const heading = makeElement(name("heading"), {
    returned: () => {
      return (props2) => {
        const { level } = parseHeadingProps(props2);
        return {
          role: "heading",
          "aria-level": level,
          "data-heading-level": level
        };
      };
    }
  });
  function handleValueUpdate(itemValue) {
    value.update(($value) => {
      if ($value === void 0) {
        return withDefaults.multiple ? [itemValue] : itemValue;
      }
      if (Array.isArray($value)) {
        if ($value.includes(itemValue)) {
          return $value.filter((v) => v !== itemValue);
        }
        $value.push(itemValue);
        return $value;
      }
      return $value === itemValue ? void 0 : itemValue;
    });
  }
  return {
    ids: meltIds,
    elements: {
      root,
      item,
      trigger,
      content,
      heading
    },
    states: {
      value
    },
    helpers: {
      isSelected: isSelectedStore
    },
    options
  };
};
function getAccordionData() {
  const NAME = "accordion";
  const ITEM_NAME = "accordion-item";
  const PARTS = ["root", "content", "header", "item", "trigger"];
  return { NAME, ITEM_NAME, PARTS };
}
function setCtx(props) {
  const initAccordion = createAccordion(removeUndefined(props));
  const { NAME, PARTS } = getAccordionData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const accordion = {
    ...initAccordion,
    getAttrs,
    updateOption: getOptionUpdater(initAccordion.options)
  };
  setContext(NAME, accordion);
  return accordion;
}
function getCtx() {
  const { NAME } = getAccordionData();
  return getContext(NAME);
}
function setItem(props) {
  const { ITEM_NAME } = getAccordionData();
  setContext(ITEM_NAME, { ...props });
  const ctx = getCtx();
  return { ...ctx, props };
}
function getItemProps() {
  const { ITEM_NAME } = getAccordionData();
  return getContext(ITEM_NAME);
}
function getContent() {
  const ctx = getCtx();
  const { value: props } = getItemProps();
  return {
    ...ctx,
    props
  };
}
function getTrigger() {
  const ctx = getCtx();
  const { value, disabled } = getItemProps();
  return {
    ...ctx,
    props: { value, disabled }
  };
}
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}
const Accordion$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["multiple", "value", "onValueChange", "disabled", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { multiple = false } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption, getAttrs } = setCtx({
    multiple,
    disabled,
    defaultValue: value,
    onValueChange: ({ next }) => {
      if (Array.isArray(next)) {
        if (!Array.isArray(value) || !arraysAreEqual(value, next)) {
          onValueChange?.(next);
          value = next;
          return next;
        }
        return next;
      }
      if (value !== next) {
        onValueChange?.(next);
        value = next;
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs("root");
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  value !== void 0 && localValue.set(Array.isArray(value) ? [...value] : value);
  {
    updateOption("multiple", multiple);
  }
  {
    updateOption("disabled", disabled);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Accordion_item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild", "el"]);
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { item }, props, getAttrs } = setItem({ value, disabled });
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  const attrs = getAttrs("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $item(props);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_item();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Accordion_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["level", "asChild", "el"]);
  let $header, $$unsubscribe_header;
  let { level = 3 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { heading: header }, getAttrs } = getCtx();
  $$unsubscribe_header = subscribe(header, (value) => $header = value);
  const attrs = getAttrs("header");
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $header(level);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_header();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Accordion_trigger$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, props, getAttrs } = getTrigger();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $trigger(props);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Accordion_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  let $content, $$unsubscribe_content;
  let $isSelected, $$unsubscribe_isSelected;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, helpers: { isSelected }, props, getAttrs } = getContent();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $content(props);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_content();
  $$unsubscribe_isSelected();
  return `${asChild && $isSelected(props) ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Accordion_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Accordion_content$1, "AccordionPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("overflow-hidden text-sm", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="pb-4 pt-0">${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
const Accordion_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(Accordion_item$1, "AccordionPrimitive.Item").$$render($$result, Object.assign({}, { value }, { class: cn("border-b", className) }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Accordion_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = 3 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  return `${validate_component(Accordion_header, "AccordionPrimitive.Header").$$render($$result, { level, class: "flex" }, {}, {
    default: () => {
      return `${validate_component(Accordion_trigger$1, "AccordionPrimitive.Trigger").$$render(
        $$result,
        Object.assign(
          {},
          {
            class: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 focus:outline-none focus:ring ring-gray-100 rounded", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``} ${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                src: ChevronDown,
                class: "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200"
              },
              {},
              {}
            )}`;
          }
        }
      )}`;
    }
  })}`;
});
const Root = Accordion$1;
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { single = false } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.single === void 0 && $$bindings.single && single !== void 0)
    $$bindings.single(single);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Root, "BaseAccordion.Root").$$render($$result, { class: className, multiple: !single }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Accordion_item, "BaseAccordion.Item").$$render($$result, { value: title, class: className }, {}, {
    default: () => {
      return `${validate_component(Accordion_trigger, "BaseAccordion.Trigger").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.title ? slots.title({}) : ` ${escape(title)} `}`;
        }
      })} ${validate_component(Accordion_content, "BaseAccordion.Content").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
const CopyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textToCopy = "" } = $$props;
  if ($$props.textToCopy === void 0 && $$bindings.textToCopy && textToCopy !== void 0)
    $$bindings.textToCopy(textToCopy);
  return `<div class="relative">${``} <button class="bg-white/80 border border-gray-950 rounded p-2 hover:bg-gray-200/80 active:bg-gray-400/80" title="Copy to Clipboard">${validate_component(Icon, "Icon").$$render($$result, { src: Clipboard, class: "w-4 h-4" }, {}, {})}</button></div>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expanded;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const expand = (error) => {
    let output = "";
    if (error.stack) {
      output += error.stack;
    }
    if (error.cause) {
      output += "\n\nCaused By:\n	";
      output += expand(error.cause).split("\n").join("\n	");
    }
    return output;
  };
  expanded = expand($page.error);
  $$unsubscribe_page();
  return `${$page.status === 404 ? `<h1 class="mt-0 mb-8 py-0" data-svelte-h="svelte-s9jbdv">Page Not Found</h1> <p><span class="font-mono text-base">${escape($page.status)}</span>: The page
		<span class="font-mono text-base bg-gray-200">${escape($page.url.pathname)}</span> can&#39;t be found in the project.</p>` : `${$page.status === 500 ? `<h1 class="mt-0 mb-8 py-0" data-svelte-h="svelte-zh66lr">Application Error</h1> ${$page.error.message ? `<p class="font-mono text-sm bg-gray-200 px-2 py-2"><span class="font-mono text-base">${escape($page.status)}</span>:${escape($page.error.message)}</p>` : ``} ${$page.error.stack || $page.error.cause ? `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Error Details" }, {}, {
        default: () => {
          return `<div class="relative"><span class="absolute top-2 right-2">${validate_component(CopyButton, "CopyButton").$$render($$result, { textToCopy: expanded }, {}, {})}</span> <pre class="font-mono text-sm bg-gray-200 px-2 py-2 overflow-auto">${escape(expanded)}</pre></div>`;
        }
      })}`;
    }
  })}` : ``}` : `<h1 data-svelte-h="svelte-blh3ny">Unknown Error Encountered</h1> <span class="font-mono text-base">HTTP ${escape($page.status)}</span>`}`}`;
});
export {
  Error as default
};
