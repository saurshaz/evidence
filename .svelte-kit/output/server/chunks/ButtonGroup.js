import { s as subscribe, a as set_store_value } from "./utils.js";
import { g as getContext, s as setContext, c as create_ssr_component, h as escape, v as validate_component, i as each } from "./ssr.js";
import { a as readonly, w as writable } from "./index2.js";
import { a as buildReactiveInputQuery, I as INPUTS_CONTEXT_KEY } from "./buildQuery.js";
import { p as page } from "./stores2.js";
import { H as HiddenInPrint } from "./HiddenInPrint.js";
import { Q as QueryLoad } from "./colours.js";
const CONTEXT_KEY = "__EVIDENCE_BUTTON_GROUP_CONTEXT";
const getButtonGroupContext = () => getContext(CONTEXT_KEY);
const setButtonGroupContext = (update, value) => setContext(CONTEXT_KEY, { update, value });
const presets = {
  dates: [
    { valueLabel: "Week", value: "7 days" },
    { valueLabel: "Month", value: "1 month" },
    { valueLabel: "Year", value: "1 year" }
  ]
};
const ButtonGroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentValue, $$unsubscribe_currentValue;
  let { valueLabel } = $$props;
  let { value } = $$props;
  const { update, value: currentValue } = getButtonGroupContext();
  $$unsubscribe_currentValue = subscribe(currentValue, (value2) => $currentValue = value2);
  let { default: _default = false } = $$props;
  if (_default) {
    update({ valueLabel, value });
  }
  if ($$props.valueLabel === void 0 && $$bindings.valueLabel && valueLabel !== void 0)
    $$bindings.valueLabel(valueLabel);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.default === void 0 && $$bindings.default && _default !== void 0)
    $$bindings.default(_default);
  $$unsubscribe_currentValue();
  return `<button type="button" class="${"flex-none py-1 font-medium h-8 px-3 text-xs truncate border-r last:border-none hover:bg-gray-100 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 " + escape(
    $currentValue?.value === value ? "z-10 border-gray-200 bg-gray-100 text-blue-700" : "z-0 bg-white text-gray-900 border-gray-200",
    true
  )}">${escape(valueLabel)}</button>`;
});
const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasQuery;
  let query;
  let $results, $$unsubscribe_results;
  let $page, $$unsubscribe_page;
  let $inputs, $$unsubscribe_inputs;
  let $valueStore, $$unsubscribe_valueStore;
  $$unsubscribe_page = subscribe(page, (value2) => $page = value2);
  let { name } = $$props;
  let { title } = $$props;
  let { hideDuringPrint = true } = $$props;
  let { preset = void 0 } = $$props;
  const inputs = getContext(INPUTS_CONTEXT_KEY);
  $$unsubscribe_inputs = subscribe(inputs, (value2) => $inputs = value2);
  const valueStore = writable(null);
  $$unsubscribe_valueStore = subscribe(valueStore, (value2) => $valueStore = value2);
  setButtonGroupContext(
    (v) => {
      set_store_value(valueStore, $valueStore = v, $valueStore);
      set_store_value(inputs, $inputs[name] = v?.value ?? null, $inputs);
    },
    readonly(valueStore)
  );
  let { value, data, label, order, where } = $$props;
  const { results, update } = buildReactiveInputQuery({ value, data, label, order, where }, `ButtonGroup-${name}`, $page?.data?.data[`ButtonGroup-${name}`]);
  $$unsubscribe_results = subscribe(results, (value2) => $results = value2);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.hideDuringPrint === void 0 && $$bindings.hideDuringPrint && hideDuringPrint !== void 0)
    $$bindings.hideDuringPrint(hideDuringPrint);
  if ($$props.preset === void 0 && $$bindings.preset && preset !== void 0)
    $$bindings.preset(preset);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.where === void 0 && $$bindings.where && where !== void 0)
    $$bindings.where(where);
  {
    update({ value, data, label, order, where });
  }
  ({ hasQuery, query } = $results);
  $$unsubscribe_results();
  $$unsubscribe_page();
  $$unsubscribe_inputs();
  $$unsubscribe_valueStore();
  return `${validate_component(HiddenInPrint, "HiddenInPrint").$$render($$result, { enabled: hideDuringPrint }, {}, {
    default: () => {
      return `<div class="inline-flex w-fit max-w-full flex-col mt-2 mb-4 ml-0 mr-2">${title ? `<span class="text-gray-900 text-sm block mb-1">${escape(title)}</span>` : ``} <div class="inline-flex rounded-md shadow-sm overflow-auto border no-scrollbar" role="group">${preset ? `${presets[preset] ? `${each(presets[preset], ({ value: value2, valueLabel }) => {
        return `${validate_component(ButtonGroupItem, "ButtonGroupItem").$$render($$result, { value: value2, valueLabel }, {}, {})}`;
      })}` : `<span class="text-red-500 font-bold text-sm">${escape(preset)} is not a valid preset</span>`}` : `${slots.default ? slots.default({}) : ``} ${hasQuery ? `${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data: query }, {}, {
        default: ({ loaded }) => {
          return `${each(loaded, ({ label: label2, value: value2 }) => {
            return `${validate_component(ButtonGroupItem, "ButtonGroupItem").$$render($$result, { value: value2, valueLabel: label2 }, {}, {})}`;
          })} `;
        },
        skeleton: () => {
          return `<div class="h-8 min-w-24 w-full max-width-24 block animate-pulse bg-gray-200"></div>`;
        }
      })}` : ``}`}</div></div>`;
    }
  })}`;
});
export {
  ButtonGroup as B,
  ButtonGroupItem as a
};
