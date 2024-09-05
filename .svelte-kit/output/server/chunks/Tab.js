import { s as subscribe, a as set_store_value } from "./utils.js";
import { c as create_ssr_component, s as setContext, i as each, h as escape, l as add_styles, g as getContext, o as onDestroy } from "./ssr.js";
import { w as writable } from "./index2.js";
import { nanoid } from "nanoid";
function isHex(inputColor) {
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i;
  return hexRegex.test(inputColor);
}
function isRGB(inputColor) {
  const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
  return rgbRegex.test(inputColor);
}
function isHSL(inputColor) {
  const hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3}%)\s*,\s*(\d{1,3}%)\s*\)$/i;
  return hslRegex.test(inputColor);
}
function isValidColorString(inputColor) {
  return isHex(inputColor) || isRGB(inputColor) || isHSL(inputColor);
}
function addOpacityToColor(colorString) {
  if (isHex(colorString)) {
    return colorString + "1a";
  } else if (isRGB(colorString) || isHSL(colorString)) {
    return colorString.replace(/(\)|\s|$)/, ", 0.1$1");
  }
}
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $context, $$unsubscribe_context;
  const classes = {
    notActive: "text-gray-600 hover:text-gray-800 hover:bg-gray-200",
    active: "text-black border-b-2 border-[--borderColor] bg-[--bgColor]"
  };
  let { id } = $$props;
  let { color = "hsla(207, 65%, 39%, 1)" } = $$props;
  color = color.replace(/\s+/g, "");
  const bgColor = isValidColorString(color) ? addOpacityToColor(color) : "hsla(207, 65%, 39%, 0.1)";
  const borderColor = isValidColorString(color) ? color : "hsla(207, 65%, 39%, 1)";
  const context = writable({ tabs: [], active: null });
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  setContext("TABS_STORE", context);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  {
    if (!$context.activeId && $context.tabs.length) {
      set_store_value(context, $context.activeId = $context.tabs[0].id, $context);
    }
  }
  {
    if (!$context.tabs.find((t) => t.id === $context.activeId)) {
      set_store_value(context, $context.activeId = $context.tabs[0]?.id, $context);
    }
  }
  {
    if ($context.activeId && id) {
      const url = new URL(window.location.href);
      url.searchParams.set(id, $context.activeId);
      history.replaceState({}, "", url);
    }
  }
  $$unsubscribe_context();
  return `<section><nav class="my-6 flex flex-wrap gap-x-4 gap-y-1">${each($context.tabs, (tab) => {
    return `<button class="${"mt-2 p-2 rounded-t flex-1 text-sm font-sans whitespace-nowrap transition duration-200 ease-in active:bg-gray-100 " + escape(
      $context.activeId === tab.id ? classes.active : classes.notActive,
      true
    )}"${add_styles({
      "--bgColor": bgColor,
      "--borderColor": borderColor
    })}>${escape(tab.label)} </button>`;
  })}</nav> <div class="text-base">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $context, $$unsubscribe_context;
  let { label } = $$props;
  let { id } = $$props;
  let { selected } = $$props;
  const internalId = nanoid();
  const context = getContext("TABS_STORE");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  const addTabToContext = () => {
    set_store_value(
      context,
      $context.tabs = [
        ...$context.tabs.filter((t) => t.internalId !== internalId),
        { internalId, id, label }
      ],
      $context
    );
    if (selected) {
      set_store_value(context, $context.activeId = id, $context);
    }
  };
  onDestroy(() => {
    set_store_value(context, $context.tabs = $context.tabs.filter((t) => t.internalId !== internalId), $context);
  });
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  id = id ?? label;
  {
    if (id && label) {
      addTabToContext();
    }
  }
  $$unsubscribe_context();
  return `${selected ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
export {
  Tabs as T,
  Tab as a
};
