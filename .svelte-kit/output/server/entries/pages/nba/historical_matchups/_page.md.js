import { c as compute_rest_props, s as subscribe, a as set_store_value } from "../../../../chunks/utils.js";
import { s as setContext, g as getContext, c as create_ssr_component, a as spread, b as escape_object, d as add_attribute, v as validate_component, i as each, h as escape, o as onDestroy } from "../../../../chunks/ssr.js";
import { o as omit, w as withGet, m as makeElement, r as makeElementArray, e as effect, h as createElHelpers, j as disabledAttr, s as styleToString, i as isBrowser, b as executeCallbacks, g as addEventListener, c as addMeltEventListener, a as isHTMLElement, k as kbd, v as getElementByMeltId, l as cn } from "../../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { p as pageHasQueries, r as routeHash } from "../../../../chunks/stores.js";
import { hasUnsetValues, Query } from "@evidence-dev/sdk/usql";
import { I as INPUTS_CONTEXT_KEY, s as setQueryFunction, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../../chunks/buildQuery.js";
import { d as derived, w as writable } from "../../../../chunks/index2.js";
import "ssf";
import "../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import { D as DataTable_1, C as Column } from "../../../../chunks/DataTable.js";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "export-to-csv";
import { B as BarChart } from "../../../../chunks/BarChart.js";
import "chroma-js";
import "echarts-stat";
import { L as LineChart } from "../../../../chunks/LineChart.js";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../chunks/QueryViewer.js";
import { D as Dropdown, a as DropdownOption } from "../../../../chunks/Dropdown.js";
import { t as toWritableStores, o as overridable, g as generateIds, c as createBitAttrs, r as removeUndefined, a as getOptionUpdater, b as createDispatcher } from "../../../../chunks/updater.js";
import { H as HiddenInPrint } from "../../../../chunks/HiddenInPrint.js";
import { e as getFormatObjectFromString, d as formatValue } from "../../../../chunks/colours.js";
function snapValueToStep(value, min, max, step) {
  const remainder = (value - (isNaN(min) ? 0 : min)) % step;
  let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
  if (!isNaN(min)) {
    if (snappedValue < min) {
      snappedValue = min;
    } else if (!isNaN(max) && snappedValue > max) {
      snappedValue = min + Math.floor((max - min) / step) * step;
    }
  } else if (!isNaN(max) && snappedValue > max) {
    snappedValue = Math.floor(max / step) * step;
  }
  const string = step.toString();
  const index = string.indexOf(".");
  const precision = index >= 0 ? string.length - index : 0;
  if (precision > 0) {
    const pow = Math.pow(10, precision);
    snappedValue = Math.round(snappedValue * pow) / pow;
  }
  return snappedValue;
}
const defaults = {
  defaultValue: [],
  min: 0,
  max: 100,
  step: 1,
  orientation: "horizontal",
  dir: "ltr",
  disabled: false
};
const { name } = createElHelpers("slider");
const createSlider = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value", "onValueChange", "defaultValue"));
  const { min, max, step, orientation, dir, disabled } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const isActive = withGet(writable(false));
  const currentThumbIndex = withGet(writable(0));
  const activeThumb = withGet(writable(null));
  const meltIds = generateIds(["root"]);
  const updatePosition = (val, index) => {
    value.update((prev) => {
      if (!prev)
        return [val];
      if (prev[index] === val)
        return prev;
      const newValue = [...prev];
      const direction2 = newValue[index] > val ? -1 : 1;
      function swap() {
        newValue[index] = newValue[index + direction2];
        newValue[index + direction2] = val;
        const thumbs2 = getAllThumbs();
        if (thumbs2) {
          thumbs2[index + direction2].focus();
          activeThumb.set({ thumb: thumbs2[index + direction2], index: index + direction2 });
        }
      }
      if (direction2 === -1 && val < newValue[index - 1]) {
        swap();
        return newValue;
      } else if (direction2 === 1 && val > newValue[index + 1]) {
        swap();
        return newValue;
      }
      const $min = min.get();
      const $max = max.get();
      const $step = step.get();
      newValue[index] = snapValueToStep(val, $min, $max, $step);
      return newValue;
    });
  };
  const getAllThumbs = () => {
    const root2 = getElementByMeltId(meltIds.root);
    if (!root2)
      return null;
    return Array.from(root2.querySelectorAll('[data-melt-part="thumb"]')).filter((thumb) => isHTMLElement(thumb));
  };
  const position = derived([min, max], ([$min, $max]) => {
    return (val) => {
      const pos = (val - $min) / ($max - $min) * 100;
      return pos;
    };
  });
  const direction = withGet.derived([orientation, dir], ([$orientation, $dir]) => {
    if ($orientation === "horizontal") {
      return $dir === "rtl" ? "rl" : "lr";
    } else {
      return $dir === "rtl" ? "tb" : "bt";
    }
  });
  const root = makeElement(name(), {
    stores: [disabled, orientation, dir],
    returned: ([$disabled, $orientation, $dir]) => {
      return {
        dir: $dir,
        disabled: disabledAttr($disabled),
        "data-disabled": disabledAttr($disabled),
        "data-orientation": $orientation,
        style: $disabled ? void 0 : `touch-action: ${$orientation === "horizontal" ? "pan-y" : "pan-x"}`,
        "data-melt-id": meltIds.root
      };
    }
  });
  const range = makeElement(name("range"), {
    stores: [value, direction, position],
    returned: ([$value, $direction, $position]) => {
      const minimum = $value.length > 1 ? $position(Math.min(...$value) ?? 0) : 0;
      const maximum = 100 - $position(Math.max(...$value) ?? 0);
      const style = {
        position: "absolute"
      };
      switch ($direction) {
        case "lr": {
          style.left = `${minimum}%`;
          style.right = `${maximum}%`;
          break;
        }
        case "rl": {
          style.right = `${minimum}%`;
          style.left = `${maximum}%`;
          break;
        }
        case "bt": {
          style.bottom = `${minimum}%`;
          style.top = `${maximum}%`;
          break;
        }
        case "tb": {
          style.top = `${minimum}%`;
          style.bottom = `${maximum}%`;
          break;
        }
      }
      return {
        style: styleToString(style)
      };
    }
  });
  const thumbs = makeElementArray(name("thumb"), {
    stores: [value, position, min, max, disabled, orientation, direction],
    returned: ([$value, $position, $min, $max, $disabled, $orientation, $direction]) => {
      const result = Array.from({ length: $value.length || 1 }, (_, i) => {
        const currentThumb = currentThumbIndex.get();
        if (currentThumb < $value.length) {
          currentThumbIndex.update((prev) => prev + 1);
        }
        const thumbValue = $value[i];
        const thumbPosition = `${$position(thumbValue)}%`;
        const style = {
          position: "absolute"
        };
        switch ($direction) {
          case "lr": {
            style.left = thumbPosition;
            style.translate = "-50% 0";
            break;
          }
          case "rl": {
            style.right = thumbPosition;
            style.translate = "50% 0";
            break;
          }
          case "bt": {
            style.bottom = thumbPosition;
            style.translate = "0 50%";
            break;
          }
          case "tb": {
            style.top = thumbPosition;
            style.translate = "0 -50%";
            break;
          }
        }
        return {
          role: "slider",
          "aria-valuemin": $min,
          "aria-valuemax": $max,
          "aria-valuenow": thumbValue,
          "aria-disabled": disabledAttr($disabled),
          "aria-orientation": $orientation,
          "data-melt-part": "thumb",
          "data-value": thumbValue,
          style: styleToString(style),
          tabindex: $disabled ? -1 : 0
        };
      });
      return result;
    },
    action: (node) => {
      const unsub = addMeltEventListener(node, "keydown", (event) => {
        if (disabled.get())
          return;
        const target = event.currentTarget;
        if (!isHTMLElement(target))
          return;
        const thumbs2 = getAllThumbs();
        if (!thumbs2?.length)
          return;
        const index = thumbs2.indexOf(target);
        currentThumbIndex.set(index);
        if (![
          kbd.ARROW_LEFT,
          kbd.ARROW_RIGHT,
          kbd.ARROW_UP,
          kbd.ARROW_DOWN,
          kbd.HOME,
          kbd.END
        ].includes(event.key)) {
          return;
        }
        event.preventDefault();
        const $min = min.get();
        const $max = max.get();
        const $step = step.get();
        const $value = value.get();
        const $orientation = orientation.get();
        const $direction = direction.get();
        const thumbValue = $value[index];
        switch (event.key) {
          case kbd.HOME: {
            updatePosition($min, index);
            break;
          }
          case kbd.END: {
            updatePosition($max, index);
            break;
          }
          case kbd.ARROW_LEFT: {
            if ($orientation !== "horizontal")
              break;
            if (event.metaKey) {
              const newValue = $direction === "rl" ? $max : $min;
              updatePosition(newValue, index);
            } else if ($direction === "rl" && thumbValue < $max) {
              updatePosition(thumbValue + $step, index);
            } else if ($direction === "lr" && thumbValue > $min) {
              updatePosition(thumbValue - $step, index);
            }
            break;
          }
          case kbd.ARROW_RIGHT: {
            if ($orientation !== "horizontal")
              break;
            if (event.metaKey) {
              const newValue = $direction === "rl" ? $min : $max;
              updatePosition(newValue, index);
            } else if ($direction === "rl" && thumbValue > $min) {
              updatePosition(thumbValue - $step, index);
            } else if ($direction === "lr" && thumbValue < $max) {
              updatePosition(thumbValue + $step, index);
            }
            break;
          }
          case kbd.ARROW_UP: {
            if (event.metaKey) {
              const newValue = $direction === "tb" ? $min : $max;
              updatePosition(newValue, index);
            } else if ($direction === "tb" && thumbValue > $min) {
              updatePosition(thumbValue - $step, index);
            } else if ($direction !== "tb" && thumbValue < $max) {
              updatePosition(thumbValue + $step, index);
            }
            break;
          }
          case kbd.ARROW_DOWN: {
            if (event.metaKey) {
              const newValue = $direction === "tb" ? $max : $min;
              updatePosition(newValue, index);
            } else if ($direction === "tb" && thumbValue < $max) {
              updatePosition(thumbValue + $step, index);
            } else if ($direction !== "tb" && thumbValue > $min) {
              updatePosition(thumbValue - $step, index);
            }
            break;
          }
        }
      });
      return {
        destroy: unsub
      };
    }
  });
  const ticks = makeElementArray(name("tick"), {
    stores: [value, min, max, step, direction],
    returned: ([$value, $min, $max, $step, $direction]) => {
      const difference = $max - $min;
      let count = Math.ceil(difference / $step);
      if (difference % $step == 0) {
        count++;
      }
      return Array.from({ length: count }, (_, i) => {
        const tickPosition = `${i * ($step / ($max - $min)) * 100}%`;
        const isFirst = i === 0;
        const isLast = i === count - 1;
        const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
        const style = {
          position: "absolute"
        };
        switch ($direction) {
          case "lr": {
            style.left = tickPosition;
            style.translate = `${offsetPercentage}% 0`;
            break;
          }
          case "rl": {
            style.right = tickPosition;
            style.translate = `${-offsetPercentage}% 0`;
            break;
          }
          case "bt": {
            style.bottom = tickPosition;
            style.translate = `0 ${-offsetPercentage}%`;
            break;
          }
          case "tb": {
            style.top = tickPosition;
            style.translate = `0 ${offsetPercentage}%`;
            break;
          }
        }
        const tickValue = $min + i * $step;
        const bounded = $value.length === 1 ? tickValue <= $value[0] : $value[0] <= tickValue && tickValue <= $value[$value.length - 1];
        return {
          "data-bounded": bounded ? true : void 0,
          "data-value": tickValue,
          style: styleToString(style)
        };
      });
    }
  });
  effect([root, min, max, disabled, orientation, direction, step], ([$root, $min, $max, $disabled, $orientation, $direction, $step]) => {
    if (!isBrowser || $disabled)
      return;
    const applyPosition = (clientXY, activeThumbIdx, start, end) => {
      const percent = (clientXY - start) / (end - start);
      const val = percent * ($max - $min) + $min;
      if (val < $min) {
        updatePosition($min, activeThumbIdx);
      } else if (val > $max) {
        updatePosition($max, activeThumbIdx);
      } else {
        const step2 = $step;
        const min2 = $min;
        const currentStep = Math.floor((val - min2) / step2);
        const midpointOfCurrentStep = min2 + currentStep * step2 + step2 / 2;
        const midpointOfNextStep = min2 + (currentStep + 1) * step2 + step2 / 2;
        const newValue = val >= midpointOfCurrentStep && val < midpointOfNextStep ? (currentStep + 1) * step2 + min2 : currentStep * step2 + min2;
        if (newValue <= $max) {
          updatePosition(newValue, activeThumbIdx);
        }
      }
    };
    const getClosestThumb = (e) => {
      const thumbs2 = getAllThumbs();
      if (!thumbs2)
        return;
      thumbs2.forEach((thumb2) => thumb2.blur());
      const distances = thumbs2.map((thumb2) => {
        if ($orientation === "horizontal") {
          const { left, right } = thumb2.getBoundingClientRect();
          return Math.abs(e.clientX - (left + right) / 2);
        } else {
          const { top, bottom } = thumb2.getBoundingClientRect();
          return Math.abs(e.clientY - (top + bottom) / 2);
        }
      });
      const thumb = thumbs2[distances.indexOf(Math.min(...distances))];
      const index = thumbs2.indexOf(thumb);
      return { thumb, index };
    };
    const pointerMove = (e) => {
      if (!isActive.get())
        return;
      e.preventDefault();
      e.stopPropagation();
      const sliderEl = getElementByMeltId($root["data-melt-id"]);
      const closestThumb = activeThumb.get();
      if (!sliderEl || !closestThumb)
        return;
      closestThumb.thumb.focus();
      const { left, right, top, bottom } = sliderEl.getBoundingClientRect();
      switch ($direction) {
        case "lr": {
          applyPosition(e.clientX, closestThumb.index, left, right);
          break;
        }
        case "rl": {
          applyPosition(e.clientX, closestThumb.index, right, left);
          break;
        }
        case "bt": {
          applyPosition(e.clientY, closestThumb.index, bottom, top);
          break;
        }
        case "tb": {
          applyPosition(e.clientY, closestThumb.index, top, bottom);
          break;
        }
      }
    };
    const pointerDown = (e) => {
      if (e.button !== 0)
        return;
      const sliderEl = getElementByMeltId($root["data-melt-id"]);
      const closestThumb = getClosestThumb(e);
      if (!closestThumb || !sliderEl)
        return;
      const target = e.target;
      if (!isHTMLElement(target) || !sliderEl.contains(target)) {
        return;
      }
      e.preventDefault();
      activeThumb.set(closestThumb);
      closestThumb.thumb.focus();
      isActive.set(true);
      pointerMove(e);
    };
    const pointerUp = () => {
      isActive.set(false);
    };
    const unsub = executeCallbacks(addEventListener(document, "pointerdown", pointerDown), addEventListener(document, "pointerup", pointerUp), addEventListener(document, "pointerleave", pointerUp), addEventListener(document, "pointermove", pointerMove));
    return () => {
      unsub();
    };
  });
  effect([step, min, max, value], function fixValue([$step, $min, $max, $value]) {
    const isValidValue = (v) => {
      const snappedValue = snapValueToStep(v, $min, $max, $step);
      return snappedValue === v;
    };
    const gcv = (v) => {
      return snapValueToStep(v, $min, $max, $step);
    };
    if ($value.some((v) => !isValidValue(v))) {
      value.update((prev) => {
        return prev.map(gcv);
      });
    }
  });
  return {
    elements: {
      root,
      thumbs,
      range,
      ticks
    },
    states: {
      value
    },
    options
  };
};
function getSliderData() {
  const NAME = "slider";
  const PARTS = ["root", "input", "range", "thumb", "tick"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSliderData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const slider = { ...createSlider(removeUndefined(props)), getAttrs };
  setContext(NAME, slider);
  return {
    ...slider,
    updateOption: getOptionUpdater(slider.options)
  };
}
function getCtx() {
  const { NAME } = getSliderData();
  return getContext(NAME);
}
const Slider$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "disabled",
    "min",
    "max",
    "step",
    "orientation",
    "dir",
    "value",
    "onValueChange",
    "asChild",
    "el"
  ]);
  let $root, $$unsubscribe_root;
  let $ticks, $$unsubscribe_ticks;
  let $thumbs, $$unsubscribe_thumbs;
  let { disabled = void 0 } = $$props;
  let { min = void 0 } = $$props;
  let { max = void 0 } = $$props;
  let { step = void 0 } = $$props;
  let { orientation = void 0 } = $$props;
  let { dir = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root, ticks, thumbs }, states: { value: localValue }, updateOption, getAttrs } = setCtx({
    disabled,
    dir,
    min,
    max,
    step,
    orientation,
    defaultValue: value,
    onValueChange: ({ next }) => {
      if (value !== next) {
        onValueChange?.(next);
        value = next;
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  $$unsubscribe_ticks = subscribe(ticks, (value2) => $ticks = value2);
  $$unsubscribe_thumbs = subscribe(thumbs, (value2) => $thumbs = value2);
  const attrs = getAttrs("root");
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  value !== void 0 && localValue.set(value);
  {
    updateOption("disabled", disabled);
  }
  {
    updateOption("min", min);
  }
  {
    updateOption("max", max);
  }
  {
    updateOption("step", step);
  }
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("dir", dir);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  $$unsubscribe_ticks();
  $$unsubscribe_thumbs();
  return `${asChild ? `${slots.default ? slots.default({ builder, ticks: $ticks, thumbs: $thumbs }) : ``}` : `<span${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder, ticks: $ticks, thumbs: $thumbs }) : ``}</span>`}`;
});
const Slider_range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $range, $$unsubscribe_range;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { range }, getAttrs } = getCtx();
  $$unsubscribe_range = subscribe(range, (value) => $range = value);
  const attrs = getAttrs("range");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $range;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_range();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<span${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></span>`}`;
});
const Slider_thumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el", "thumb"]);
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  let { thumb } = $$props;
  const { getAttrs } = getCtx();
  createDispatcher();
  const attrs = getAttrs("thumb");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.thumb === void 0 && $$bindings.thumb && thumb !== void 0)
    $$bindings.thumb(thumb);
  builder = thumb;
  {
    Object.assign(builder, attrs);
  }
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<span${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></span>`}`;
});
const SliderShadcn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value = [0] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Slider$1, "SliderPrimitive.Root").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("relative left-1.5 flex w-full touch-none select-none items-center", className)
        },
        $$restProps,
        { value }
      ),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ thumbs }) => {
          return `<span class="relative h-1 w-full grow rounded-l-full bg-gray-900/20 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]">${validate_component(Slider_range, "SliderPrimitive.Range").$$render(
            $$result,
            {
              class: `absolute h-full bg-gray-900 before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-gray-900 after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-gray-900/20 after:-z-10 after:rounded-r-full`
            },
            {},
            {}
          )}</span> ${(thumbs ?? []).length ? each(thumbs ?? [], (thumb) => {
            return `${validate_component(Slider_thumb, "SliderPrimitive.Thumb").$$render(
              $$result,
              {
                thumb,
                class: "block h-3 w-3 rounded-full border-2 border-gray-900/50 bg-gray-900 shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"
              },
              {},
              {}
            )}`;
          }) : `${validate_component(Slider_thumb, "SliderPrimitive.Thumb").$$render(
            $$result,
            {
              class: "block h-3 w-3 rounded-full border-2 border-gray-900/50 bg-gray-900 shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"
            },
            {},
            {}
          )}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sizeClass;
  let $inputs, $$unsubscribe_inputs;
  const inputs = getContext(INPUTS_CONTEXT_KEY);
  $$unsubscribe_inputs = subscribe(inputs, (value2) => $inputs = value2);
  let { title } = $$props;
  let { name: name2 } = $$props;
  let { min = 0 } = $$props;
  if (min) {
    min = Number(min);
    if (isNaN(min)) {
      throw Error("min must be a number");
    }
  } else {
    min = 0;
  }
  let { max = 100 } = $$props;
  if (max) {
    max = Number(max);
    if (isNaN(max)) {
      throw Error("max must be a number");
    } else if (max < min) {
      throw Error("max cannot be less than min");
    }
  } else {
    max = 100;
  }
  let { step } = $$props;
  let { showMaxMin = true } = $$props;
  let { hideDuringPrint = true } = $$props;
  let { defaultValue = 0 } = $$props;
  let value = [defaultValue];
  let { fmt = void 0 } = $$props;
  let { size = "" } = $$props;
  const renderSize = (size2) => {
    const sizeMap = {
      medium: "w-64",
      large: "w-96",
      //Full size width requires calc to compensate for shifted range span in sliderShadcn
      full: "w-[calc(100%-0.6rem)]"
    };
    return sizeMap[size2.toLowerCase()] || "w-40";
  };
  let format_object;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.name === void 0 && $$bindings.name && name2 !== void 0)
    $$bindings.name(name2);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.showMaxMin === void 0 && $$bindings.showMaxMin && showMaxMin !== void 0)
    $$bindings.showMaxMin(showMaxMin);
  if ($$props.hideDuringPrint === void 0 && $$bindings.hideDuringPrint && hideDuringPrint !== void 0)
    $$bindings.hideDuringPrint(hideDuringPrint);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    showMaxMin = showMaxMin === "true" || showMaxMin === true;
    hideDuringPrint = hideDuringPrint === "true" || hideDuringPrint === true;
    set_store_value(inputs, $inputs[name2] = value, $inputs);
    sizeClass = renderSize(size);
    {
      if (fmt)
        format_object = getFormatObjectFromString(fmt, "number");
      else
        format_object = void 0;
    }
    $$rendered = `${validate_component(HiddenInPrint, "HiddenInPrint").$$render($$result, { enabled: hideDuringPrint }, {}, {
      default: () => {
        return `<div${add_attribute("class", `relative ${sizeClass} mb-10 select-none`, 0)}><p class="pb-2 truncate text-xs">${escape(title)} :
			<span class="text-xs">${escape(fmt ? formatValue($inputs[name2], format_object) : $inputs[name2])}</span></p> ${validate_component(SliderShadcn, "SliderShadcn").$$render(
          $$result,
          { min, max, step, sizeClass, value },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${showMaxMin ? `<span class="absolute left-0 text-xs pt-1 -z-10">${escape(fmt ? formatValue(min, format_object) : min)}</span> <span class="absolute -right-2.5 text-xs pt-1 -z-10">${escape(fmt ? formatValue(max, format_object) : max)}</span>` : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_inputs();
  return $$rendered;
});
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y_min;
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "c39b2b8542cb1863eda7ce3ad9da3950", $routeHash);
  let inputs_store = writable(inputs);
  setContext(INPUTS_CONTEXT_KEY, inputs_store);
  onDestroy(inputs_store.subscribe((value) => inputs = value));
  setContext(CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY, {
    getCustomFormats: () => {
      return customFormattingSettings.customFormats || [];
    }
  });
  {
    onDestroy(() => Query.emptyCache());
  }
  const queryFunc = (query, query_name) => profile(__db.query, query, { query_name });
  setQueryFunction(queryFunc);
  $page.params;
  let elo_historyInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __elo_historyHasUnresolved = hasUnsetValues`from src_nba_elo_history`;
  let __elo_historyText = `from src_nba_elo_history`;
  {
    try {
      if (!__elo_historyHasUnresolved)
        elo_historyInitialStates.initialData = profile(__db.query, __elo_historyText, { query_name: "elo_history" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      elo_historyInitialStates.initialError = e;
    }
  }
  let elo_history;
  const __elo_historyFactory = Query.createReactive(
    {
      callback: (v) => {
        elo_history = v;
      },
      execFn: queryFunc
    },
    {
      id: "elo_history",
      initialData: elo_historyInitialStates.initialData,
      initialError: elo_historyInitialStates.initialError
    }
  );
  __elo_historyFactory(__elo_historyText, { noResolve: __elo_historyHasUnresolved });
  globalThis[Symbol.for("elo_history")] = {
    get value() {
      return elo_history;
    }
  };
  let seasonsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __seasonsHasUnresolved = hasUnsetValues`select A.season
    from src_nba_seasons A
    order by A.season`;
  let __seasonsText = `select A.season
    from src_nba_seasons A
    order by A.season`;
  {
    try {
      if (!__seasonsHasUnresolved)
        seasonsInitialStates.initialData = profile(__db.query, __seasonsText, { query_name: "seasons" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      seasonsInitialStates.initialError = e;
    }
  }
  let seasons;
  const __seasonsFactory = Query.createReactive(
    {
      callback: (v) => {
        seasons = v;
      },
      execFn: queryFunc
    },
    {
      id: "seasons",
      initialData: seasonsInitialStates.initialData,
      initialError: seasonsInitialStates.initialError
    }
  );
  __seasonsFactory(__seasonsText, { noResolve: __seasonsHasUnresolved });
  globalThis[Symbol.for("seasons")] = {
    get value() {
      return seasons;
    }
  };
  let team1InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team1HasUnresolved = hasUnsetValues`select C.*
    from src_nba_season_teams C
    where C.season = ${inputs.team1_season_dd.value}
    group by all
    order by C.team`;
  let __team1Text = `select C.*
    from src_nba_season_teams C
    where C.season = ${inputs.team1_season_dd.value}
    group by all
    order by C.team`;
  {
    try {
      if (!__team1HasUnresolved)
        team1InitialStates.initialData = profile(__db.query, __team1Text, { query_name: "team1" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team1InitialStates.initialError = e;
    }
  }
  let team1;
  const __team1Factory = Query.createReactive(
    {
      callback: (v) => {
        team1 = v;
      },
      execFn: queryFunc
    },
    {
      id: "team1",
      initialData: team1InitialStates.initialData,
      initialError: team1InitialStates.initialError
    }
  );
  __team1Factory(__team1Text, { noResolve: __team1HasUnresolved });
  globalThis[Symbol.for("team1")] = {
    get value() {
      return team1;
    }
  };
  let team2InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team2HasUnresolved = hasUnsetValues`select C.* 
    from src_nba_season_teams C
    where C.season = ${inputs.team2_season_dd.value}
    group by all
    order by C.team`;
  let __team2Text = `select C.* 
    from src_nba_season_teams C
    where C.season = ${inputs.team2_season_dd.value}
    group by all
    order by C.team`;
  {
    try {
      if (!__team2HasUnresolved)
        team2InitialStates.initialData = profile(__db.query, __team2Text, { query_name: "team2" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team2InitialStates.initialError = e;
    }
  }
  let team2;
  const __team2Factory = Query.createReactive(
    {
      callback: (v) => {
        team2 = v;
      },
      execFn: queryFunc
    },
    {
      id: "team2",
      initialData: team2InitialStates.initialData,
      initialError: team2InitialStates.initialError
    }
  );
  __team2Factory(__team2Text, { noResolve: __team2HasUnresolved });
  globalThis[Symbol.for("team2")] = {
    get value() {
      return team2;
    }
  };
  let team1_historyInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team1_historyHasUnresolved = hasUnsetValues`select * from (from src_nba_elo_history)
    where season = ${inputs.team1_season_dd.value}
       and ( team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}')
    order by date`;
  let __team1_historyText = `select * from (from src_nba_elo_history)
    where season = ${inputs.team1_season_dd.value}
       and ( team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}')
    order by date`;
  {
    try {
      if (!__team1_historyHasUnresolved)
        team1_historyInitialStates.initialData = profile(__db.query, __team1_historyText, { query_name: "team1_history" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team1_historyInitialStates.initialError = e;
    }
  }
  let team1_history;
  const __team1_historyFactory = Query.createReactive(
    {
      callback: (v) => {
        team1_history = v;
      },
      execFn: queryFunc
    },
    {
      id: "team1_history",
      initialData: team1_historyInitialStates.initialData,
      initialError: team1_historyInitialStates.initialError
    }
  );
  __team1_historyFactory(__team1_historyText, { noResolve: __team1_historyHasUnresolved });
  globalThis[Symbol.for("team1_history")] = {
    get value() {
      return team1_history;
    }
  };
  let team2_historyInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team2_historyHasUnresolved = hasUnsetValues`select * from (from src_nba_elo_history)
    where season = ${inputs.team2_season_dd.value}
        and ( team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}')
    order by date`;
  let __team2_historyText = `select * from (from src_nba_elo_history)
    where season = ${inputs.team2_season_dd.value}
        and ( team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}')
    order by date`;
  {
    try {
      if (!__team2_historyHasUnresolved)
        team2_historyInitialStates.initialData = profile(__db.query, __team2_historyText, { query_name: "team2_history" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team2_historyInitialStates.initialError = e;
    }
  }
  let team2_history;
  const __team2_historyFactory = Query.createReactive(
    {
      callback: (v) => {
        team2_history = v;
      },
      execFn: queryFunc
    },
    {
      id: "team2_history",
      initialData: team2_historyInitialStates.initialData,
      initialError: team2_historyInitialStates.initialError
    }
  );
  __team2_historyFactory(__team2_historyText, { noResolve: __team2_historyHasUnresolved });
  globalThis[Symbol.for("team2_history")] = {
    get value() {
      return team2_history;
    }
  };
  let team1_statsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team1_statsHasUnresolved = hasUnsetValues`select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}`;
  let __team1_statsText = `select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}`;
  {
    try {
      if (!__team1_statsHasUnresolved)
        team1_statsInitialStates.initialData = profile(__db.query, __team1_statsText, { query_name: "team1_stats" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team1_statsInitialStates.initialError = e;
    }
  }
  let team1_stats;
  const __team1_statsFactory = Query.createReactive(
    {
      callback: (v) => {
        team1_stats = v;
      },
      execFn: queryFunc
    },
    {
      id: "team1_stats",
      initialData: team1_statsInitialStates.initialData,
      initialError: team1_statsInitialStates.initialError
    }
  );
  __team1_statsFactory(__team1_statsText, { noResolve: __team1_statsHasUnresolved });
  globalThis[Symbol.for("team1_stats")] = {
    get value() {
      return team1_stats;
    }
  };
  let team2_statsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team2_statsHasUnresolved = hasUnsetValues`select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}`;
  let __team2_statsText = `select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}`;
  {
    try {
      if (!__team2_statsHasUnresolved)
        team2_statsInitialStates.initialData = profile(__db.query, __team2_statsText, { query_name: "team2_stats" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team2_statsInitialStates.initialError = e;
    }
  }
  let team2_stats;
  const __team2_statsFactory = Query.createReactive(
    {
      callback: (v) => {
        team2_stats = v;
      },
      execFn: queryFunc
    },
    {
      id: "team2_stats",
      initialData: team2_statsInitialStates.initialData,
      initialError: team2_statsInitialStates.initialError
    }
  );
  __team2_statsFactory(__team2_statsText, { noResolve: __team2_statsHasUnresolved });
  globalThis[Symbol.for("team2_stats")] = {
    get value() {
      return team2_stats;
    }
  };
  let stat_tableInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __stat_tableHasUnresolved = hasUnsetValues`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}'`;
  let __stat_tableText = `with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}'`;
  {
    try {
      if (!__stat_tableHasUnresolved)
        stat_tableInitialStates.initialData = profile(__db.query, __stat_tableText, { query_name: "stat_table" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      stat_tableInitialStates.initialError = e;
    }
  }
  let stat_table;
  const __stat_tableFactory = Query.createReactive(
    {
      callback: (v) => {
        stat_table = v;
      },
      execFn: queryFunc
    },
    {
      id: "stat_table",
      initialData: stat_tableInitialStates.initialData,
      initialError: stat_tableInitialStates.initialError
    }
  );
  __stat_tableFactory(__stat_tableText, { noResolve: __stat_tableHasUnresolved });
  globalThis[Symbol.for("stat_table")] = {
    get value() {
      return stat_table;
    }
  };
  let team1_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team1_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  let __team1_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  {
    try {
      if (!__team1_trendHasUnresolved)
        team1_trendInitialStates.initialData = profile(__db.query, __team1_trendText, { query_name: "team1_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team1_trendInitialStates.initialError = e;
    }
  }
  let team1_trend;
  const __team1_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        team1_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "team1_trend",
      initialData: team1_trendInitialStates.initialData,
      initialError: team1_trendInitialStates.initialError
    }
  );
  __team1_trendFactory(__team1_trendText, { noResolve: __team1_trendHasUnresolved });
  globalThis[Symbol.for("team1_trend")] = {
    get value() {
      return team1_trend;
    }
  };
  let team2_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team2_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  let __team2_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  {
    try {
      if (!__team2_trendHasUnresolved)
        team2_trendInitialStates.initialData = profile(__db.query, __team2_trendText, { query_name: "team2_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team2_trendInitialStates.initialError = e;
    }
  }
  let team2_trend;
  const __team2_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        team2_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "team2_trend",
      initialData: team2_trendInitialStates.initialData,
      initialError: team2_trendInitialStates.initialError
    }
  );
  __team2_trendFactory(__team2_trendText, { noResolve: __team2_trendHasUnresolved });
  globalThis[Symbol.for("team2_trend")] = {
    get value() {
      return team2_trend;
    }
  };
  let combined_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __combined_trendHasUnresolved = hasUnsetValues`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`;
  let __combined_trendText = `select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`;
  {
    try {
      if (!__combined_trendHasUnresolved)
        combined_trendInitialStates.initialData = profile(__db.query, __combined_trendText, { query_name: "combined_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      combined_trendInitialStates.initialError = e;
    }
  }
  let combined_trend;
  const __combined_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        combined_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "combined_trend",
      initialData: combined_trendInitialStates.initialData,
      initialError: combined_trendInitialStates.initialError
    }
  );
  __combined_trendFactory(__combined_trendText, { noResolve: __combined_trendHasUnresolved });
  globalThis[Symbol.for("combined_trend")] = {
    get value() {
      return combined_trend;
    }
  };
  let elo_by_teamInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __elo_by_teamHasUnresolved = hasUnsetValues`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1`;
  let __elo_by_teamText = `select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1`;
  {
    try {
      if (!__elo_by_teamHasUnresolved)
        elo_by_teamInitialStates.initialData = profile(__db.query, __elo_by_teamText, { query_name: "elo_by_team" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      elo_by_teamInitialStates.initialError = e;
    }
  }
  let elo_by_team;
  const __elo_by_teamFactory = Query.createReactive(
    {
      callback: (v) => {
        elo_by_team = v;
      },
      execFn: queryFunc
    },
    {
      id: "elo_by_team",
      initialData: elo_by_teamInitialStates.initialData,
      initialError: elo_by_teamInitialStates.initialError
    }
  );
  __elo_by_teamFactory(__elo_by_teamText, { noResolve: __elo_by_teamHasUnresolved });
  globalThis[Symbol.for("elo_by_team")] = {
    get value() {
      return elo_by_team;
    }
  };
  let gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __gamesHasUnresolved = hasUnsetValues`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I`;
  let __gamesText = `SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I`;
  {
    try {
      if (!__gamesHasUnresolved)
        gamesInitialStates.initialData = profile(__db.query, __gamesText, { query_name: "games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      gamesInitialStates.initialError = e;
    }
  }
  let games;
  const __gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        games = v;
      },
      execFn: queryFunc
    },
    {
      id: "games",
      initialData: gamesInitialStates.initialData,
      initialError: gamesInitialStates.initialError
    }
  );
  __gamesFactory(__gamesText, { noResolve: __gamesHasUnresolved });
  globalThis[Symbol.for("games")] = {
    get value() {
      return games;
    }
  };
  let monte_carlo_simInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __monte_carlo_simHasUnresolved = hasUnsetValues`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`;
  let __monte_carlo_simText = `WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`;
  {
    try {
      if (!__monte_carlo_simHasUnresolved)
        monte_carlo_simInitialStates.initialData = profile(__db.query, __monte_carlo_simText, { query_name: "monte_carlo_sim" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      monte_carlo_simInitialStates.initialError = e;
    }
  }
  let monte_carlo_sim;
  const __monte_carlo_simFactory = Query.createReactive(
    {
      callback: (v) => {
        monte_carlo_sim = v;
      },
      execFn: queryFunc
    },
    {
      id: "monte_carlo_sim",
      initialData: monte_carlo_simInitialStates.initialData,
      initialError: monte_carlo_simInitialStates.initialError
    }
  );
  __monte_carlo_simFactory(__monte_carlo_simText, {
    noResolve: __monte_carlo_simHasUnresolved
  });
  globalThis[Symbol.for("monte_carlo_sim")] = {
    get value() {
      return monte_carlo_sim;
    }
  };
  let monte_carlo_winnersInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __monte_carlo_winnersHasUnresolved = hasUnsetValues`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`;
  let __monte_carlo_winnersText = `SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`;
  {
    try {
      if (!__monte_carlo_winnersHasUnresolved)
        monte_carlo_winnersInitialStates.initialData = profile(__db.query, __monte_carlo_winnersText, { query_name: "monte_carlo_winners" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      monte_carlo_winnersInitialStates.initialError = e;
    }
  }
  let monte_carlo_winners;
  const __monte_carlo_winnersFactory = Query.createReactive(
    {
      callback: (v) => {
        monte_carlo_winners = v;
      },
      execFn: queryFunc
    },
    {
      id: "monte_carlo_winners",
      initialData: monte_carlo_winnersInitialStates.initialData,
      initialError: monte_carlo_winnersInitialStates.initialError
    }
  );
  __monte_carlo_winnersFactory(__monte_carlo_winnersText, {
    noResolve: __monte_carlo_winnersHasUnresolved
  });
  globalThis[Symbol.for("monte_carlo_winners")] = {
    get value() {
      return monte_carlo_winners;
    }
  };
  let mc_final_resultsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __mc_final_resultsHasUnresolved = hasUnsetValues`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`;
  let __mc_final_resultsText = `with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`;
  {
    try {
      if (!__mc_final_resultsHasUnresolved)
        mc_final_resultsInitialStates.initialData = profile(__db.query, __mc_final_resultsText, { query_name: "mc_final_results" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      mc_final_resultsInitialStates.initialError = e;
    }
  }
  let mc_final_results;
  const __mc_final_resultsFactory = Query.createReactive(
    {
      callback: (v) => {
        mc_final_results = v;
      },
      execFn: queryFunc
    },
    {
      id: "mc_final_results",
      initialData: mc_final_resultsInitialStates.initialData,
      initialError: mc_final_resultsInitialStates.initialError
    }
  );
  __mc_final_resultsFactory(__mc_final_resultsText, {
    noResolve: __mc_final_resultsHasUnresolved
  });
  globalThis[Symbol.for("mc_final_results")] = {
    get value() {
      return mc_final_results;
    }
  };
  let mc_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __mc_summaryHasUnresolved = hasUnsetValues`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`;
  let __mc_summaryText = `select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`;
  {
    try {
      if (!__mc_summaryHasUnresolved)
        mc_summaryInitialStates.initialData = profile(__db.query, __mc_summaryText, { query_name: "mc_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      mc_summaryInitialStates.initialError = e;
    }
  }
  let mc_summary;
  const __mc_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        mc_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "mc_summary",
      initialData: mc_summaryInitialStates.initialData,
      initialError: mc_summaryInitialStates.initialError
    }
  );
  __mc_summaryFactory(__mc_summaryText, { noResolve: __mc_summaryHasUnresolved });
  globalThis[Symbol.for("mc_summary")] = {
    get value() {
      return mc_summary;
    }
  };
  {
    onDestroy(inputs_store.subscribe((inputs2) => {
      __team1Factory(
        `select C.*
    from src_nba_season_teams C
    where C.season = ${inputs2.team1_season_dd.value}
    group by all
    order by C.team`,
        {
          noResolve: hasUnsetValues`select C.*
    from src_nba_season_teams C
    where C.season = ${inputs2.team1_season_dd.value}
    group by all
    order by C.team`
        }
      );
      __team2Factory(
        `select C.* 
    from src_nba_season_teams C
    where C.season = ${inputs2.team2_season_dd.value}
    group by all
    order by C.team`,
        {
          noResolve: hasUnsetValues`select C.* 
    from src_nba_season_teams C
    where C.season = ${inputs2.team2_season_dd.value}
    group by all
    order by C.team`
        }
      );
      __team1_historyFactory(
        `select * from (from src_nba_elo_history)
    where season = ${inputs2.team1_season_dd.value}
       and ( team1 = '${inputs2.team1_dd.value}' OR team2 = '${inputs2.team1_dd.value}')
    order by date`,
        {
          noResolve: hasUnsetValues`select * from (from src_nba_elo_history)
    where season = ${inputs2.team1_season_dd.value}
       and ( team1 = '${inputs2.team1_dd.value}' OR team2 = '${inputs2.team1_dd.value}')
    order by date`
        }
      );
      __team2_historyFactory(
        `select * from (from src_nba_elo_history)
    where season = ${inputs2.team2_season_dd.value}
        and ( team1 = '${inputs2.team2_dd.value}' OR team2 = '${inputs2.team2_dd.value}')
    order by date`,
        {
          noResolve: hasUnsetValues`select * from (from src_nba_elo_history)
    where season = ${inputs2.team2_season_dd.value}
        and ( team1 = '${inputs2.team2_dd.value}' OR team2 = '${inputs2.team2_dd.value}')
    order by date`
        }
      );
      __team1_statsFactory(
        `select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}`,
        {
          noResolve: hasUnsetValues`select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}`
        }
      );
      __team2_statsFactory(
        `select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}`,
        {
          noResolve: hasUnsetValues`select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}`
        }
      );
      __stat_tableFactory(
        `with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${inputs2.team1_dd.value}' || ':' || '${inputs2.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${inputs2.team2_dd.value}' || ':' || '${inputs2.team2_season_dd.value}'`,
        {
          noResolve: hasUnsetValues`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${inputs2.team1_dd.value}' || ':' || '${inputs2.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${inputs2.team2_dd.value}' || ':' || '${inputs2.team2_season_dd.value}'`
        }
      );
      __team1_trendFactory(
        `with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team1_dd.value}' || ':' || '${inputs2.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team1_dd.value}' OR team2 = '${inputs2.team1_dd.value}') AND season = ${inputs2.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team1_season_dd.value}' || ' ' || '${inputs2.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`,
        {
          noResolve: hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team1_dd.value}' || ':' || '${inputs2.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team1_dd.value}' OR team2 = '${inputs2.team1_dd.value}') AND season = ${inputs2.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team1_season_dd.value}' || ' ' || '${inputs2.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`
        }
      );
      __team2_trendFactory(
        `with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team2_dd.value}' || ':' || '${inputs2.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team2_dd.value}' OR team2 = '${inputs2.team2_dd.value}') 
        AND season = ${inputs2.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team2_season_dd.value}' || ' ' || '${inputs2.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`,
        {
          noResolve: hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team2_dd.value}' || ':' || '${inputs2.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team2_dd.value}' OR team2 = '${inputs2.team2_dd.value}') 
        AND season = ${inputs2.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team2_season_dd.value}' || ' ' || '${inputs2.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`
        }
      );
      __combined_trendFactory(
        `select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team1_dd.value}' || ':' || '${inputs2.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team1_dd.value}' OR team2 = '${inputs2.team1_dd.value}') AND season = ${inputs2.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team1_season_dd.value}' || ' ' || '${inputs2.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team2_dd.value}' || ':' || '${inputs2.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team2_dd.value}' OR team2 = '${inputs2.team2_dd.value}') 
        AND season = ${inputs2.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team2_season_dd.value}' || ' ' || '${inputs2.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`,
        {
          noResolve: hasUnsetValues`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team1_dd.value}' || ':' || '${inputs2.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team1_dd.value}' OR team2 = '${inputs2.team1_dd.value}') AND season = ${inputs2.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team1_season_dd.value}' || ' ' || '${inputs2.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs2.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs2.team2_dd.value}' || ':' || '${inputs2.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs2.team2_dd.value}' OR team2 = '${inputs2.team2_dd.value}') 
        AND season = ${inputs2.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs2.team2_season_dd.value}' || ' ' || '${inputs2.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`
        }
      );
      __elo_by_teamFactory(
        `select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1`,
        {
          noResolve: hasUnsetValues`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1`
        }
      );
      __gamesFactory(
        `SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I`,
        {
          noResolve: hasUnsetValues`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I`
        }
      );
      __monte_carlo_simFactory(
        `WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`,
        {
          noResolve: hasUnsetValues`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`
        }
      );
      __monte_carlo_winnersFactory(
        `SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`,
        {
          noResolve: hasUnsetValues`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`
        }
      );
      __mc_final_resultsFactory(
        `with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`,
        {
          noResolve: hasUnsetValues`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`
        }
      );
      __mc_summaryFactory(
        `select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`,
        {
          noResolve: hasUnsetValues`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs2.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs2.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team2_dd.value}' AND season = ${inputs2.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs2.team1_dd.value}' AND season = ${inputs2.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs2.team_1_wins.value} + ${inputs2.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs2.team_1_wins.value} 
                ELSE ${inputs2.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`
        }
      );
    }));
  }
  if ($$props.data === void 0 && $$bindings.data && props !== void 0)
    $$bindings.data(props);
  ({ data = {}, customFormattingSettings, __db } = props);
  {
    pageHasQueries.set(Object.keys(data).length > 0);
  }
  $page.params;
  __elo_historyHasUnresolved = hasUnsetValues`from src_nba_elo_history`;
  __elo_historyText = `from src_nba_elo_history`;
  {
    __elo_historyFactory(__elo_historyText, { noResolve: __elo_historyHasUnresolved });
  }
  __seasonsHasUnresolved = hasUnsetValues`select A.season
    from src_nba_seasons A
    order by A.season`;
  __seasonsText = `select A.season
    from src_nba_seasons A
    order by A.season`;
  {
    __seasonsFactory(__seasonsText, { noResolve: __seasonsHasUnresolved });
  }
  __team1HasUnresolved = hasUnsetValues`select C.*
    from src_nba_season_teams C
    where C.season = ${inputs.team1_season_dd.value}
    group by all
    order by C.team`;
  __team1Text = `select C.*
    from src_nba_season_teams C
    where C.season = ${inputs.team1_season_dd.value}
    group by all
    order by C.team`;
  {
    __team1Factory(__team1Text, { noResolve: __team1HasUnresolved });
  }
  __team2HasUnresolved = hasUnsetValues`select C.* 
    from src_nba_season_teams C
    where C.season = ${inputs.team2_season_dd.value}
    group by all
    order by C.team`;
  __team2Text = `select C.* 
    from src_nba_season_teams C
    where C.season = ${inputs.team2_season_dd.value}
    group by all
    order by C.team`;
  {
    __team2Factory(__team2Text, { noResolve: __team2HasUnresolved });
  }
  __team1_historyHasUnresolved = hasUnsetValues`select * from (from src_nba_elo_history)
    where season = ${inputs.team1_season_dd.value}
       and ( team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}')
    order by date`;
  __team1_historyText = `select * from (from src_nba_elo_history)
    where season = ${inputs.team1_season_dd.value}
       and ( team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}')
    order by date`;
  {
    __team1_historyFactory(__team1_historyText, { noResolve: __team1_historyHasUnresolved });
  }
  __team2_historyHasUnresolved = hasUnsetValues`select * from (from src_nba_elo_history)
    where season = ${inputs.team2_season_dd.value}
        and ( team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}')
    order by date`;
  __team2_historyText = `select * from (from src_nba_elo_history)
    where season = ${inputs.team2_season_dd.value}
        and ( team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}')
    order by date`;
  {
    __team2_historyFactory(__team2_historyText, { noResolve: __team2_historyHasUnresolved });
  }
  __team1_statsHasUnresolved = hasUnsetValues`select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}`;
  __team1_statsText = `select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}`;
  {
    __team1_statsFactory(__team1_statsText, { noResolve: __team1_statsHasUnresolved });
  }
  __team2_statsHasUnresolved = hasUnsetValues`select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}`;
  __team2_statsText = `select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}`;
  {
    __team2_statsFactory(__team2_statsText, { noResolve: __team2_statsHasUnresolved });
  }
  __stat_tableHasUnresolved = hasUnsetValues`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}'`;
  __stat_tableText = `with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}'`;
  {
    __stat_tableFactory(__stat_tableText, { noResolve: __stat_tableHasUnresolved });
  }
  __team1_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  __team1_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  {
    __team1_trendFactory(__team1_trendText, { noResolve: __team1_trendHasUnresolved });
  }
  __team2_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  __team2_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;
  {
    __team2_trendFactory(__team2_trendText, { noResolve: __team2_trendHasUnresolved });
  }
  __combined_trendHasUnresolved = hasUnsetValues`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`;
  __combined_trendText = `select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team1_dd.value}' || ':' || '${inputs.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team1_dd.value}' OR team2 = '${inputs.team1_dd.value}') AND season = ${inputs.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team1_season_dd.value}' || ' ' || '${inputs.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${inputs.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${inputs.team2_dd.value}' || ':' || '${inputs.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${inputs.team2_dd.value}' OR team2 = '${inputs.team2_dd.value}') 
        AND season = ${inputs.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${inputs.team2_season_dd.value}' || ' ' || '${inputs.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`;
  {
    __combined_trendFactory(__combined_trendText, { noResolve: __combined_trendHasUnresolved });
  }
  __elo_by_teamHasUnresolved = hasUnsetValues`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1`;
  __elo_by_teamText = `select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1`;
  {
    __elo_by_teamFactory(__elo_by_teamText, { noResolve: __elo_by_teamHasUnresolved });
  }
  __gamesHasUnresolved = hasUnsetValues`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I`;
  __gamesText = `SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I`;
  {
    __gamesFactory(__gamesText, { noResolve: __gamesHasUnresolved });
  }
  __monte_carlo_simHasUnresolved = hasUnsetValues`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`;
  __monte_carlo_simText = `WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`;
  {
    __monte_carlo_simFactory(__monte_carlo_simText, {
      noResolve: __monte_carlo_simHasUnresolved
    });
  }
  __monte_carlo_winnersHasUnresolved = hasUnsetValues`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`;
  __monte_carlo_winnersText = `SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`;
  {
    __monte_carlo_winnersFactory(__monte_carlo_winnersText, {
      noResolve: __monte_carlo_winnersHasUnresolved
    });
  }
  __mc_final_resultsHasUnresolved = hasUnsetValues`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`;
  __mc_final_resultsText = `with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`;
  {
    __mc_final_resultsFactory(__mc_final_resultsText, {
      noResolve: __mc_final_resultsHasUnresolved
    });
  }
  __mc_summaryHasUnresolved = hasUnsetValues`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`;
  __mc_summaryText = `select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${inputs.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${inputs.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${inputs.team2_dd.value}' AND season = ${inputs.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${inputs.team1_dd.value}' AND season = ${inputs.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${inputs.team_1_wins.value} + ${inputs.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${inputs.team_1_wins.value} 
                ELSE ${inputs.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`;
  {
    __mc_summaryFactory(__mc_summaryText, { noResolve: __mc_summaryHasUnresolved });
  }
  y_min = Math.min(...combined_trend.map((item) => item.elo));
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   <h1 class="markdown" id="historical-matchups" data-svelte-h="svelte-m8tlbj"><a href="#historical-matchups">Historical Matchups</a></h1> <p class="markdown" data-svelte-h="svelte-1xg6khx">Ever wondered if the &#39;86 Celtics could beat the &#39;96 Bulls? Wonder no more!</p> ${elo_history ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "elo_history",
      queryResult: elo_history
    },
    {},
    {}
  )}` : ``} ${seasons ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "seasons", queryResult: seasons }, {}, {})}` : ``} ${team1 ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "team1", queryResult: team1 }, {}, {})}` : ``} ${team2 ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "team2", queryResult: team2 }, {}, {})}` : ``} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: seasons,
      name: "team1_season_dd",
      value: "season",
      title: "Team 1 Year"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "1986", value: "1986" }, {}, {})}`;
      }
    }
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: team1,
      name: "team1_dd",
      value: "team",
      title: "Team 1"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "BOS", value: "BOS" }, {}, {})}`;
      }
    }
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: seasons,
      name: "team2_season_dd",
      value: "season",
      title: "Team 2 Year"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "1996", value: "1996" }, {}, {})}`;
      }
    }
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: team2,
      name: "team2_dd",
      value: "team",
      title: "Team 2"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "CHI", value: "CHI" }, {}, {})}`;
      }
    }
  )} ${team1_history ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team1_history",
      queryResult: team1_history
    },
    {},
    {}
  )}` : ``} ${team2_history ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team2_history",
      queryResult: team2_history
    },
    {},
    {}
  )}` : ``} ${team1_stats ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team1_stats",
      queryResult: team1_stats
    },
    {},
    {}
  )}` : ``} ${team2_stats ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team2_stats",
      queryResult: team2_stats
    },
    {},
    {}
  )}` : ``} ${stat_table ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "stat_table",
      queryResult: stat_table
    },
    {},
    {}
  )}` : ``} <h2 class="markdown" id="head-to-head-stats" data-svelte-h="svelte-1bk2bg0"><a href="#head-to-head-stats">Head to Head Stats</a></h2> ${validate_component(DataTable_1, "DataTable").$$render($$result, { data: stat_table, rows: "all" }, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, { id: "t1", align: "center", title: " " }, {}, {})} ${validate_component(Column, "Column").$$render(
        $$result,
        {
          id: "team1",
          align: "right",
          title: inputs.team1_season_dd.value + " " + inputs.team1_dd.value
        },
        {},
        {}
      )} ${validate_component(Column, "Column").$$render(
        $$result,
        {
          id: "stat",
          align: "center",
          title: "category"
        },
        {},
        {}
      )} ${validate_component(Column, "Column").$$render(
        $$result,
        {
          id: "team2",
          align: "left",
          title: inputs.team2_season_dd.value + " " + inputs.team2_dd.value
        },
        {},
        {}
      )} ${validate_component(Column, "Column").$$render($$result, { id: "t2", align: "center", title: " " }, {}, {})}`;
    }
  })} <h2 class="markdown" id="elo-trends" data-svelte-h="svelte-1b0adum"><a href="#elo-trends">Elo Trends</a></h2> ${team1_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team1_trend",
      queryResult: team1_trend
    },
    {},
    {}
  )}` : ``} ${team2_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team2_trend",
      queryResult: team2_trend
    },
    {},
    {}
  )}` : ``} ${combined_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "combined_trend",
      queryResult: combined_trend
    },
    {},
    {}
  )}` : ``} ${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: combined_trend,
      x: "game_id",
      y: "elo",
      title: "elo change over time",
      series: "team",
      yMin: parseFloat(y_min) - 25,
      xAxisTitle: "games played",
      handleMissing: "connect",
      colorPalette: ["#29BDAD", "#DE4500"]
    },
    {},
    {}
  )} <h2 class="markdown" id="7-games-series-results" data-svelte-h="svelte-uoghfb"><a href="#7-games-series-results">7 Games Series Results</a></h2> <p class="markdown" data-svelte-h="svelte-1l9g9kn">This is a 10k iteration monte carlo sim, calculated in browser using DuckDB WASM.</p> ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      title: "Team 1 wins",
      name: "team_1_wins"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "0", value: "0" }, {}, {})} ${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "1", value: "1" }, {}, {})} ${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "2", value: "2" }, {}, {})} ${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "3", value: "3" }, {}, {})}`;
      }
    }
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      title: "Team 2 wins",
      name: "team_2_wins"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "0", value: "0" }, {}, {})} ${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "1", value: "1" }, {}, {})} ${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "2", value: "2" }, {}, {})} ${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "3", value: "3" }, {}, {})}`;
      }
    }
  )} ${elo_by_team ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "elo_by_team",
      queryResult: elo_by_team
    },
    {},
    {}
  )}` : ``} ${games ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "games", queryResult: games }, {}, {})}` : ``} ${monte_carlo_sim ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "monte_carlo_sim",
      queryResult: monte_carlo_sim
    },
    {},
    {}
  )}` : ``} ${monte_carlo_winners ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "monte_carlo_winners",
      queryResult: monte_carlo_winners
    },
    {},
    {}
  )}` : ``} ${mc_final_results ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "mc_final_results",
      queryResult: mc_final_results
    },
    {},
    {}
  )}` : ``} ${mc_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "mc_summary",
      queryResult: mc_summary
    },
    {},
    {}
  )}` : ``} ${validate_component(BarChart, "BarChart").$$render(
    $$result,
    {
      data: mc_summary,
      x: "winning_team",
      y: "occurances_pct1",
      series: "result",
      xAxisTitle: "games_played",
      title: "Outcome by Team",
      labels: "true",
      swapXY: "true"
    },
    {},
    {}
  )} ${validate_component(BarChart, "BarChart").$$render(
    $$result,
    {
      data: mc_summary,
      x: "result",
      y: "occurances_pct1",
      series: "winning_team",
      xAxisTitle: "games_played",
      title: "Outcomes by Series Result",
      type: "grouped",
      labels: "true",
      sort: "false",
      swapXY: "true"
    },
    {},
    {}
  )} <p class="markdown" data-svelte-h="svelte-vxp8ge"><em class="markdown">If you don&#39;t like the current results, you can modify the elo inputs with this slider.</em></p> <h3 class="markdown" id="elo-slider" data-svelte-h="svelte-12vt0x5"><a href="#elo-slider">Elo Slider</a></h3> ${validate_component(Slider, "Slider").$$render(
    $$result,
    {
      name: "elo_slider",
      value: "score",
      current: "0",
      title: "elo slider"
    },
    {},
    {}
  )} <br>
The current value is ${escape(inputs.elo_slider)}.`;
});
export {
  Page as default
};
