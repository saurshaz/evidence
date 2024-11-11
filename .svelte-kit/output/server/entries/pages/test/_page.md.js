import { s as subscribe, a as set_store_value, n as null_to_empty, c as compute_rest_props, b as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, g as getContext, s as setContext, h as escape, v as validate_component, i as each, d as add_attribute, f as createEventDispatcher, o as onDestroy } from "../../../chunks/ssr.js";
import { y as throttle, z as init, A as connect } from "../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { s as showQueries, l as localStorageStore, p as pageHasQueries, r as routeHash } from "../../../chunks/stores.js";
import { Query, hasUnsetValues } from "@evidence-dev/sdk/usql";
import { a as buildReactiveInputQuery, I as INPUTS_CONTEXT_KEY, s as setQueryFunction, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../chunks/buildQuery.js";
import { a as readonly, w as writable } from "../../../chunks/index2.js";
import "ssf";
import "../../../chunks/inferColumnTypes.js";
import { tidy, summarize, nDistinct, groupBy, mutateWithSummary, sum, mutate, rate, rename, replaceNully, complete, summarizeAt } from "@tidyjs/tidy";
import { Q as QueryLoad, g as getColumnSummary, f as formatValue, a as DownloadData, C as CodeBlock, p as propKey, c as configKey, b as checkInputs, s as standardizeDateColumn, d as getFormatObjectFromString, e as formatTitle, h as formatAxisValue, i as chartColours, u as uiColours, j as strictBuild, E as EmptyChart, k as ErrorChart, l as globals, m as convertColumnToDate, V as ValueError, B as BigValueError, n as Delta_1, D as DataTable_1, o as Column } from "../../../chunks/DataTable.js";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "debounce";
import "downloadjs";
import { b as browser } from "../../../chunks/index3.js";
import chroma from "chroma-js";
import "export-to-csv";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../chunks/profile.js";
import Prism from "prismjs";
const HiddenInPrint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { enabled = true } = $$props;
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0)
    $$bindings.enabled(enabled);
  return `<div class="${["contents", enabled ? "print:hidden" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
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
const css$6 = {
  code: "svg.svelte-c6mrxw.svelte-c6mrxw{display:inline-block;vertical-align:middle;transition:transform 0.15s ease-in}span.svelte-c6mrxw.svelte-c6mrxw{margin:auto 0 auto 0}[aria-expanded='true'].svelte-c6mrxw svg.svelte-c6mrxw{transform:rotate(0.25turn)}",
  map: `{"version":3,"file":"ChevronToggle.svelte","sources":["ChevronToggle.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\texport let toggled = false;\\n\\texport let color = '#2d2d2d';\\n\\texport let size = 10;\\n<\/script>\\n\\n<span aria-expanded={toggled}>\\n\\t<svg viewBox=\\"0 0 16 16\\" width={size} height={size}\\n\\t\\t><path\\n\\t\\t\\tfill={color}\\n\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\td=\\"M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z\\"\\n\\t\\t/></svg\\n\\t>\\n</span>\\n\\n<style>\\n\\tsvg {\\n\\t\\tdisplay: inline-block;\\n\\t\\tvertical-align: middle;\\n\\t\\ttransition: transform 0.15s ease-in;\\n\\t}\\n\\n\\tspan {\\n\\t\\tmargin: auto 0 auto 0;\\n\\t}\\n\\n\\t[aria-expanded='true'] svg {\\n\\t\\ttransform: rotate(0.25turn);\\n\\t}</style>\\n"],"names":[],"mappings":"AAqBC,+BAAI,CACH,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,OAC7B,CAEA,gCAAK,CACJ,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,CAEA,CAAC,aAAa,CAAC,MAAM,eAAC,CAAC,iBAAI,CAC1B,SAAS,CAAE,OAAO,QAAQ,CAC3B"}`
};
const ChevronToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggled = false } = $$props;
  let { color = "#2d2d2d" } = $$props;
  let { size: size2 = 10 } = $$props;
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  $$result.css.add(css$6);
  return `<span${add_attribute("aria-expanded", toggled, 0)} class="svelte-c6mrxw"><svg viewBox="0 0 16 16"${add_attribute("width", size2, 0)}${add_attribute("height", size2, 0)} class="svelte-c6mrxw"><path${add_attribute("fill", color, 0)} fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path></svg> </span>`;
});
const css$5 = {
  code: "div.pagination.svelte-iw7vqx.svelte-iw7vqx{padding:0px 5px;align-content:center;border-bottom:1px solid var(--grey-200);height:1.25em;background-color:white;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.slider.svelte-iw7vqx.svelte-iw7vqx{-webkit-appearance:none;width:75%;height:10px;margin:0 0;background:var(--blue-100);outline:none;opacity:0.7;transition:opacity 0.2s;border-radius:10px;display:inline-block;cursor:pointer}.slider.svelte-iw7vqx.svelte-iw7vqx:hover{opacity:1}.slider.svelte-iw7vqx.svelte-iw7vqx::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:10px;height:10px;background:var(--blue-500);cursor:pointer;border-radius:10px}.slider.svelte-iw7vqx.svelte-iw7vqx::-moz-range-thumb{width:10px;height:10px;background:var(--blue-500);cursor:pointer}span.svelte-iw7vqx.svelte-iw7vqx{font-size:0.75rem;line-height:1rem;font-family:var(--ui-font-family-compact);-webkit-font-smoothing:antialiased;float:right}:root{--scrollbar-track-color:transparent;--scrollbar-color:rgba(0, 0, 0, 0.2);--scrollbar-active-color:rgba(0, 0, 0, 0.4);--scrollbar-size:0.75rem;--scrollbar-minlength:1.5rem}.scrollbox.svelte-iw7vqx.svelte-iw7vqx{width:100%;overflow-x:auto;border-bottom:1px solid var(--grey-200);scrollbar-width:thin;scrollbar-color:var(--scrollbar-color) var(--scrollbar-track-color);background-color:white}.scrollbox.svelte-iw7vqx.svelte-iw7vqx::-webkit-scrollbar{height:var(--scrollbar-size);width:var(--scrollbar-size)}.scrollbox.svelte-iw7vqx.svelte-iw7vqx::-webkit-scrollbar-track{background-color:var(--scrollbar-track-color)}.scrollbox.svelte-iw7vqx.svelte-iw7vqx::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:7px;background-clip:padding-box}.scrollbox.svelte-iw7vqx.svelte-iw7vqx::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-active-color)}.scrollbox.svelte-iw7vqx.svelte-iw7vqx::-webkit-scrollbar-thumb:vertical{min-height:var(--scrollbar-minlength);border:3px solid transparent}.scrollbox.svelte-iw7vqx.svelte-iw7vqx::-webkit-scrollbar-thumb:horizontal{min-width:var(--scrollbar-minlength);border:3px solid transparent}.results-pane.svelte-iw7vqx .download-button{margin-top:10px}table.svelte-iw7vqx.svelte-iw7vqx{font-size:0.75rem;line-height:1rem;width:100%;border-collapse:collapse;font-family:var(--ui-font-family);font-variant-numeric:tabular-nums}th.svelte-iw7vqx.svelte-iw7vqx{padding-top:0px;padding-bottom:0px;padding-left:0.5rem;padding-right:0.5rem;font-weight:500}td.svelte-iw7vqx.svelte-iw7vqx{padding:2px 8px;overflow:hidden;text-overflow:ellipsis}td.svelte-iw7vqx div.svelte-iw7vqx{width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.other.svelte-iw7vqx.svelte-iw7vqx{text-align:left}.string.svelte-iw7vqx.svelte-iw7vqx{text-align:left}.date.svelte-iw7vqx.svelte-iw7vqx{text-align:left}.number.svelte-iw7vqx.svelte-iw7vqx{text-align:right}.boolean.svelte-iw7vqx.svelte-iw7vqx{text-align:left}.null.svelte-iw7vqx.svelte-iw7vqx{color:var(--grey-300)}.index.svelte-iw7vqx.svelte-iw7vqx{color:var(--grey-300);text-align:left;max-width:-moz-min-content;max-width:min-content}th.type-indicator.svelte-iw7vqx.svelte-iw7vqx{font-weight:400;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}tr.type-indicator.svelte-iw7vqx.svelte-iw7vqx{border-bottom:1px solid var(--grey-100)}.footer.svelte-iw7vqx.svelte-iw7vqx{display:flex;justify-content:flex-end;font-size:12px}",
  map: `{"version":3,"file":"QueryDataTable.svelte","sources":["QueryDataTable.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { blur, slide } from 'svelte/transition';\\n\\timport DownloadData from '../DownloadData.svelte';\\n\\timport getColumnSummary from '@evidence-dev/component-utilities/getColumnSummary';\\n\\timport { formatValue } from '@evidence-dev/component-utilities/formatting';\\n\\timport { throttle } from 'echarts';\\n\\n\\texport let queryID;\\n\\texport let data;\\n\\n\\t$: columnSummary = getColumnSummary(data, 'array');\\n\\t$: columnWidths = 90 / (columnSummary.length + 1);\\n\\n\\t// Slicer\\n\\tlet index = 0;\\n\\tlet size = 5;\\n\\t$: max = Math.max(data.length - size, 0);\\n\\t$: dataPage = data.slice(index, index + size);\\n\\tlet updatedSlice;\\n\\n\\tfunction slice() {\\n\\t\\tupdatedSlice = data.slice(index, index + size);\\n\\t\\tdataPage = updatedSlice;\\n\\t}\\n\\n\\tconst updateIndex = throttle((event) => {\\n\\t\\tindex = Math.min(Math.max(0, index + Math.floor(event.deltaY / Math.abs(event.deltaY))), max);\\n\\t\\tslice();\\n\\t}, 60);\\n\\n\\tfunction handleWheel(event) {\\n\\t\\t// abort if scroll is in x-direction\\n\\t\\tif (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\n\\t\\tconst hasScrolledToTop = event.deltaY < 0 && index === 0;\\n\\t\\tconst hasScrolledToBottom = event.deltaY > 0 && index === max;\\n\\n\\t\\tif (hasScrolledToTop || hasScrolledToBottom) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\n\\t\\tevent.preventDefault();\\n\\t\\tupdateIndex(event);\\n\\t}\\n<\/script>\\n\\n<div class=\\"results-pane py-1\\" transition:slide|local>\\n\\t<div class=\\"scrollbox\\">\\n\\t\\t<table in:blur>\\n\\t\\t\\t<thead>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th class=\\"index\\" style=\\"width:10%\\" />\\n\\t\\t\\t\\t\\t{#each columnSummary as column}\\n\\t\\t\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\t\\t\\tclass={column.type}\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"width:{columnWidths}%\\"\\n\\t\\t\\t\\t\\t\\t\\tevidenceType={column.evidenceColumnType?.evidenceType || 'unavailable'}\\n\\t\\t\\t\\t\\t\\t\\tevidenceTypeFidelity={column.evidenceColumnType?.typeFidelity || 'unavailable'}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{column.id}\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr><tr />\\n\\t\\t\\t\\t<tr class=\\"type-indicator\\">\\n\\t\\t\\t\\t\\t<th class=\\"index type-indicator\\" style=\\"width:10%\\" />\\n\\t\\t\\t\\t\\t{#each columnSummary as column}\\n\\t\\t\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"{column.type} type-indicator\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"width:{columnWidths}%\\"\\n\\t\\t\\t\\t\\t\\t\\tevidenceType={column.evidenceColumnType?.evidenceType || 'unavailable'}\\n\\t\\t\\t\\t\\t\\t\\tevidenceTypeFidelity={column.evidenceColumnType?.typeFidelity || 'unavailable'}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{column.type}\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr><tr />\\n\\t\\t\\t</thead>\\n\\t\\t\\t<tbody on:wheel={handleWheel}>\\n\\t\\t\\t\\t{#each dataPage as row, i}\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td class=\\"index\\" style=\\"width:10%\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if i === 0}\\n\\t\\t\\t\\t\\t\\t\\t\\t<!-- <input type=\\"number\\" bind:value={index} max={max} min=0 on:input={slice} class=\\"index-key\\" autofocus reversed> -->\\n\\t\\t\\t\\t\\t\\t\\t\\t{(index + i + 1).toLocaleString()}\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t{(index + i + 1).toLocaleString()}\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t{#each columnSummary as column, j}\\n\\t\\t\\t\\t\\t\\t\\t{#if row[column.id] == null}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\"null {columnSummary[j].type}\\" style=\\"width:{columnWidths}%\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{'Ø'}\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{:else if columnSummary[j].type === 'number'}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\"number\\" style=\\"width:{columnWidths}%;\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{formatValue(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trow[column.id],\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary[j].format,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary[j].columnUnitSummary\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{:else if columnSummary[j].type === 'date'}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"string\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"width:{columnWidths}%\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttitle={formatValue(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trow[column.id],\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary[j].format,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary[j].columnUnitSummary\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{formatValue(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trow[column.id],\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary[j].format,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary[j].columnUnitSummary\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{:else if columnSummary[j].type === 'string'}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\"string\\" style=\\"width:{columnWidths}%\\" title={row[column.id]}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{row[column.id] || 'Ø'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{:else if columnSummary[j].type === 'boolean'}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\"boolean\\" style=\\"width:{columnWidths}%\\" title={row[column.id]}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{row[column.id] ?? 'Ø'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\"other\\" style=\\"width:{columnWidths}%\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{row[column.id] || 'Ø'}\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</tbody>\\n\\t\\t</table>\\n\\t</div>\\n\\n\\t{#if max > 0}\\n\\t\\t<div class=\\"pagination\\">\\n\\t\\t\\t<input type=\\"range\\" {max} step=\\"1\\" bind:value={index} on:input={slice} class=\\"slider\\" />\\n\\t\\t\\t<span>\\n\\t\\t\\t\\t{(index + size).toLocaleString()} of {(max + size).toLocaleString()}\\n\\t\\t\\t</span>\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t<div class=\\"footer\\">\\n\\t\\t<DownloadData class=\\"download-button\\" {data} {queryID} display />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\tdiv.pagination {\\n\\t\\tpadding: 0px 5px;\\n\\t\\talign-content: center;\\n\\t\\tborder-bottom: 1px solid var(--grey-200);\\n\\t\\theight: 1.25em;\\n\\t\\tbackground-color: white;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.slider {\\n\\t\\t-webkit-appearance: none;\\n\\t\\twidth: 75%;\\n\\t\\theight: 10px;\\n\\t\\tmargin: 0 0;\\n\\t\\tbackground: var(--blue-100);\\n\\t\\toutline: none;\\n\\t\\topacity: 0.7;\\n\\t\\ttransition: opacity 0.2s;\\n\\t\\tborder-radius: 10px;\\n\\t\\tdisplay: inline-block;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.slider:hover {\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\t.slider::-webkit-slider-thumb {\\n\\t\\t-webkit-appearance: none;\\n\\t\\tappearance: none;\\n\\t\\twidth: 10px;\\n\\t\\theight: 10px;\\n\\t\\tbackground: var(--blue-500);\\n\\t\\tcursor: pointer;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\t.slider::-moz-range-thumb {\\n\\t\\twidth: 10px;\\n\\t\\theight: 10px;\\n\\t\\tbackground: var(--blue-500);\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\tspan {\\n\\t\\tfont-size: 0.75rem;\\n\\t\\tline-height: 1rem;\\n\\t\\tfont-family: var(--ui-font-family-compact);\\n\\t\\t-webkit-font-smoothing: antialiased;\\n\\t\\tfloat: right;\\n}\\n\\n\\t:root {\\n\\t\\t--scrollbar-track-color: transparent;\\n\\t\\t--scrollbar-color: rgba(0, 0, 0, 0.2);\\n\\t\\t--scrollbar-active-color: rgba(0, 0, 0, 0.4);\\n\\t\\t--scrollbar-size: 0.75rem;\\n\\t\\t--scrollbar-minlength: 1.5rem; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */\\n\\t}\\n\\n\\t.scrollbox {\\n\\t\\twidth: 100%;\\n\\t\\toverflow-x: auto;\\n\\t\\tborder-bottom: 1px solid var(--grey-200);\\n\\t\\tscrollbar-width: thin;\\n\\t\\tscrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);\\n\\t\\tbackground-color: white;\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar {\\n\\t\\theight: var(--scrollbar-size);\\n\\t\\twidth: var(--scrollbar-size);\\n\\t}\\n\\t.scrollbox::-webkit-scrollbar-track {\\n\\t\\tbackground-color: var(--scrollbar-track-color);\\n\\t}\\n\\t.scrollbox::-webkit-scrollbar-thumb {\\n\\t\\tbackground-color: var(--scrollbar-color);\\n\\t\\tborder-radius: 7px;\\n\\t\\tbackground-clip: padding-box;\\n\\t}\\n\\t.scrollbox::-webkit-scrollbar-thumb:hover {\\n\\t\\tbackground-color: var(--scrollbar-active-color);\\n\\t}\\n\\t.scrollbox::-webkit-scrollbar-thumb:vertical {\\n\\t\\tmin-height: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\t.scrollbox::-webkit-scrollbar-thumb:horizontal {\\n\\t\\tmin-width: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\n\\t.results-pane :global(.download-button) {\\n\\t\\tmargin-top: 10px;\\n\\t}\\n\\n\\ttable {\\n\\t\\tfont-size: 0.75rem;\\n\\t\\tline-height: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tborder-collapse: collapse;\\n\\t\\tfont-family: var(--ui-font-family);\\n\\t\\tfont-variant-numeric: tabular-nums;\\n}\\n\\n\\tth {\\n\\t\\tpadding-top: 0px;\\n\\t\\tpadding-bottom: 0px;\\n\\t\\tpadding-left: 0.5rem;\\n\\t\\tpadding-right: 0.5rem;\\n\\t\\tfont-weight: 500;\\n}\\n\\n\\ttd {\\n\\t\\tpadding: 2px 8px;\\n\\t\\toverflow: hidden;\\n\\t\\ttext-overflow: ellipsis;\\n\\t}\\n\\n\\ttd div {\\n\\t\\twidth: 100px;\\n\\t\\twhite-space: nowrap;\\n\\t\\toverflow: hidden;\\n\\t\\ttext-overflow: ellipsis;\\n\\t}\\n\\n\\t.other {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.string {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.date {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.number {\\n\\t\\ttext-align: right;\\n\\t}\\n\\n\\t.boolean {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.null {\\n\\t\\tcolor: var(--grey-300);\\n\\t}\\n\\n\\t.index {\\n\\t\\tcolor: var(--grey-300);\\n\\t\\ttext-align: left;\\n\\t\\tmax-width: -moz-min-content;\\n\\t\\tmax-width: min-content;\\n\\t}\\n\\n\\tth.type-indicator {\\n\\t\\tfont-weight: 400;\\n\\t\\t--tw-text-opacity: 1;\\n\\t\\tcolor: rgb(156 163 175 / var(--tw-text-opacity));\\n}\\n\\n\\ttr.type-indicator {\\n\\t\\tborder-bottom: 1px solid var(--grey-100);\\n\\t}\\n\\n\\t.footer {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tfont-size: 12px;\\n\\t}</style>\\n"],"names":[],"mappings":"AAoKC,GAAG,uCAAY,CACd,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACxC,MAAM,CAAE,MAAM,CACd,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACd,CAEA,mCAAQ,CACP,kBAAkB,CAAE,IAAI,CACxB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CAAC,CAAC,CACX,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,OACT,CAEA,mCAAO,MAAO,CACb,OAAO,CAAE,CACV,CAEA,mCAAO,sBAAuB,CAC7B,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IAChB,CAEA,mCAAO,kBAAmB,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,OACT,CAEA,gCAAK,CACJ,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,wBAAwB,CAAC,CAC1C,sBAAsB,CAAE,WAAW,CACnC,KAAK,CAAE,KACT,CAEC,KAAM,CACL,uBAAuB,CAAE,WAAW,CACpC,iBAAiB,CAAE,kBAAkB,CACrC,wBAAwB,CAAE,kBAAkB,CAC5C,gBAAgB,CAAE,OAAO,CACzB,qBAAqB,CAAE,MACxB,CAEA,sCAAW,CACV,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACxC,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,iBAAiB,CAAC,CAAC,IAAI,uBAAuB,CAAC,CACpE,gBAAgB,CAAE,KACnB,CAEA,sCAAU,mBAAoB,CAC7B,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,KAAK,CAAE,IAAI,gBAAgB,CAC5B,CACA,sCAAU,yBAA0B,CACnC,gBAAgB,CAAE,IAAI,uBAAuB,CAC9C,CACA,sCAAU,yBAA0B,CACnC,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,WAClB,CACA,sCAAU,yBAAyB,MAAO,CACzC,gBAAgB,CAAE,IAAI,wBAAwB,CAC/C,CACA,sCAAU,yBAAyB,SAAU,CAC5C,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CACA,sCAAU,yBAAyB,WAAY,CAC9C,SAAS,CAAE,IAAI,qBAAqB,CAAC,CACrC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CAEA,2BAAa,CAAS,gBAAkB,CACvC,UAAU,CAAE,IACb,CAEA,iCAAM,CACL,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,QAAQ,CACzB,WAAW,CAAE,IAAI,gBAAgB,CAAC,CAClC,oBAAoB,CAAE,YACxB,CAEC,8BAAG,CACF,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,GAAG,CACnB,YAAY,CAAE,MAAM,CACpB,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,GACf,CAEC,8BAAG,CACF,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAChB,CAEA,gBAAE,CAAC,iBAAI,CACN,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAChB,CAEA,kCAAO,CACN,UAAU,CAAE,IACb,CAEA,mCAAQ,CACP,UAAU,CAAE,IACb,CAEA,iCAAM,CACL,UAAU,CAAE,IACb,CAEA,mCAAQ,CACP,UAAU,CAAE,KACb,CAEA,oCAAS,CACR,UAAU,CAAE,IACb,CAEA,iCAAM,CACL,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,kCAAO,CACN,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,gBAAgB,CAC3B,SAAS,CAAE,WACZ,CAEA,EAAE,2CAAgB,CACjB,WAAW,CAAE,GAAG,CAChB,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CACjD,CAEC,EAAE,2CAAgB,CACjB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CACxC,CAEA,mCAAQ,CACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,SAAS,CAAE,IACZ"}`
};
let size = 5;
const QueryDataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnSummary;
  let columnWidths;
  let max;
  let dataPage;
  let { queryID } = $$props;
  let { data } = $$props;
  let index = 0;
  let updatedSlice;
  function slice() {
    updatedSlice = data.slice(index, index + size);
    dataPage = updatedSlice;
  }
  throttle(
    (event2) => {
      index = Math.min(Math.max(0, index + Math.floor(event2.deltaY / Math.abs(event2.deltaY))), max);
      slice();
    },
    60
  );
  if ($$props.queryID === void 0 && $$bindings.queryID && queryID !== void 0)
    $$bindings.queryID(queryID);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  columnSummary = getColumnSummary(data, "array");
  columnWidths = 90 / (columnSummary.length + 1);
  max = Math.max(data.length - size, 0);
  dataPage = data.slice(index, index + size);
  return `<div class="results-pane py-1 svelte-iw7vqx"><div class="scrollbox svelte-iw7vqx"><table class="svelte-iw7vqx"><thead><tr><th class="index svelte-iw7vqx" style="width:10%"></th> ${each(columnSummary, (column) => {
    return `<th class="${escape(null_to_empty(column.type), true) + " svelte-iw7vqx"}" style="${"width:" + escape(columnWidths, true) + "%"}"${add_attribute("evidencetype", column.evidenceColumnType?.evidenceType || "unavailable", 0)}${add_attribute("evidencetypefidelity", column.evidenceColumnType?.typeFidelity || "unavailable", 0)}>${escape(column.id)} </th>`;
  })} </tr><tr></tr> <tr class="type-indicator svelte-iw7vqx"><th class="index type-indicator svelte-iw7vqx" style="width:10%"></th> ${each(columnSummary, (column) => {
    return `<th class="${escape(column.type, true) + " type-indicator svelte-iw7vqx"}" style="${"width:" + escape(columnWidths, true) + "%"}"${add_attribute("evidencetype", column.evidenceColumnType?.evidenceType || "unavailable", 0)}${add_attribute("evidencetypefidelity", column.evidenceColumnType?.typeFidelity || "unavailable", 0)}>${escape(column.type)} </th>`;
  })} </tr><tr></tr></thead> <tbody>${each(dataPage, (row, i) => {
    return `<tr><td class="index svelte-iw7vqx" style="width:10%">${i === 0 ? ` ${escape((index + i + 1).toLocaleString())}` : `${escape((index + i + 1).toLocaleString())}`}</td> ${each(columnSummary, (column, j) => {
      return `${row[column.id] == null ? `<td class="${"null " + escape(columnSummary[j].type, true) + " svelte-iw7vqx"}" style="${"width:" + escape(columnWidths, true) + "%"}">${escape("Ø")} </td>` : `${columnSummary[j].type === "number" ? `<td class="number svelte-iw7vqx" style="${"width:" + escape(columnWidths, true) + "%;"}">${escape(formatValue(row[column.id], columnSummary[j].format, columnSummary[j].columnUnitSummary))} </td>` : `${columnSummary[j].type === "date" ? `<td class="string svelte-iw7vqx" style="${"width:" + escape(columnWidths, true) + "%"}"${add_attribute("title", formatValue(row[column.id], columnSummary[j].format, columnSummary[j].columnUnitSummary), 0)}><div class="svelte-iw7vqx">${escape(formatValue(row[column.id], columnSummary[j].format, columnSummary[j].columnUnitSummary))}</div> </td>` : `${columnSummary[j].type === "string" ? `<td class="string svelte-iw7vqx" style="${"width:" + escape(columnWidths, true) + "%"}"${add_attribute("title", row[column.id], 0)}><div class="svelte-iw7vqx">${escape(row[column.id] || "Ø")}</div> </td>` : `${columnSummary[j].type === "boolean" ? `<td class="boolean svelte-iw7vqx" style="${"width:" + escape(columnWidths, true) + "%"}"${add_attribute("title", row[column.id], 0)}><div class="svelte-iw7vqx">${escape(row[column.id] ?? "Ø")}</div> </td>` : `<td class="other svelte-iw7vqx" style="${"width:" + escape(columnWidths, true) + "%"}">${escape(row[column.id] || "Ø")} </td>`}`}`}`}`}`;
    })} </tr>`;
  })}</tbody></table></div> ${max > 0 ? `<div class="pagination svelte-iw7vqx"><input type="range"${add_attribute("max", max, 0)} step="1" class="slider svelte-iw7vqx"${add_attribute("value", index, 0)}> <span class="svelte-iw7vqx">${escape((index + size).toLocaleString())} of ${escape((max + size).toLocaleString())}</span></div>` : ``} <div class="footer svelte-iw7vqx">${validate_component(DownloadData, "DownloadData").$$render(
    $$result,
    {
      class: "download-button",
      data,
      queryID,
      display: true
    },
    {},
    {}
  )}</div> </div>`;
});
const prism_sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: true
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
const css$4 = {
  code: ":root{--scrollbar-track-color:transparent;--scrollbar-color:rgba(0, 0, 0, 0.2);--scrollbar-active-color:rgba(0, 0, 0, 0.4);--scrollbar-size:0.75rem;--scrollbar-minlength:1.5rem}pre.svelte-isi8vj{white-space:normal;margin:0 0 0 0;display:block;scrollbar-width:thin;scrollbar-color:var(--scrollbar-color) var(--scrollbar-track-color)}pre.svelte-isi8vj::-webkit-scrollbar{height:var(--scrollbar-size);width:var(--scrollbar-size)}pre.svelte-isi8vj::-webkit-scrollbar-track{background-color:var(--scrollbar-track-color)}pre.svelte-isi8vj::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:7px;background-clip:padding-box}pre.svelte-isi8vj::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-active-color)}pre.svelte-isi8vj::-webkit-scrollbar-thumb:vertical{min-height:var(--scrollbar-minlength);border:3px solid transparent}pre.svelte-isi8vj::-webkit-scrollbar-thumb:horizontal{min-width:var(--scrollbar-minlength);border:3px solid transparent}code.svelte-isi8vj{display:block}",
  map: `{"version":3,"file":"Prismjs.svelte","sources":["Prismjs.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport './prismtheme.css';\\n\\timport Prism from 'prismjs';\\n\\timport { prism_sql } from './prism-sql';\\n\\n\\texport let code = '';\\n<\/script>\\n\\n<pre class=\\"text-xs max-h-56 overflow-auto\\">\\n  <code class=\\"language-sql\\">{@html Prism.highlight(code, prism_sql)}</code>\\n</pre>\\n\\n<style>\\n\\t:root {\\n\\t\\t--scrollbar-track-color: transparent;\\n\\t\\t--scrollbar-color: rgba(0, 0, 0, 0.2);\\n\\t\\t--scrollbar-active-color: rgba(0, 0, 0, 0.4);\\n\\t\\t--scrollbar-size: 0.75rem;\\n\\t\\t--scrollbar-minlength: 1.5rem; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */\\n\\t}\\n\\n\\tpre {\\n\\t\\twhite-space: normal;\\n\\t\\tmargin: 0 0 0 0; /* Makes the block jump around on transition */\\n\\t\\tdisplay: block;\\n\\t\\tscrollbar-width: thin;\\n\\t\\tscrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);\\n\\t}\\n\\n\\tpre::-webkit-scrollbar {\\n\\t\\theight: var(--scrollbar-size);\\n\\t\\twidth: var(--scrollbar-size);\\n\\t}\\n\\tpre::-webkit-scrollbar-track {\\n\\t\\tbackground-color: var(--scrollbar-track-color);\\n\\t}\\n\\tpre::-webkit-scrollbar-thumb {\\n\\t\\tbackground-color: var(--scrollbar-color);\\n\\t\\tborder-radius: 7px;\\n\\t\\tbackground-clip: padding-box;\\n\\t}\\n\\tpre::-webkit-scrollbar-thumb:hover {\\n\\t\\tbackground-color: var(--scrollbar-active-color);\\n\\t}\\n\\tpre::-webkit-scrollbar-thumb:vertical {\\n\\t\\tmin-height: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\tpre::-webkit-scrollbar-thumb:horizontal {\\n\\t\\tmin-width: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\tcode {\\n\\t\\tdisplay: block; /* inline-block has odd behavior when it overflows on webkit mobile */\\n\\t}</style>\\n"],"names":[],"mappings":"AAiBC,KAAM,CACL,uBAAuB,CAAE,WAAW,CACpC,iBAAiB,CAAE,kBAAkB,CACrC,wBAAwB,CAAE,kBAAkB,CAC5C,gBAAgB,CAAE,OAAO,CACzB,qBAAqB,CAAE,MACxB,CAEA,iBAAI,CACH,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACf,OAAO,CAAE,KAAK,CACd,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,iBAAiB,CAAC,CAAC,IAAI,uBAAuB,CACpE,CAEA,iBAAG,mBAAoB,CACtB,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,KAAK,CAAE,IAAI,gBAAgB,CAC5B,CACA,iBAAG,yBAA0B,CAC5B,gBAAgB,CAAE,IAAI,uBAAuB,CAC9C,CACA,iBAAG,yBAA0B,CAC5B,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,WAClB,CACA,iBAAG,yBAAyB,MAAO,CAClC,gBAAgB,CAAE,IAAI,wBAAwB,CAC/C,CACA,iBAAG,yBAAyB,SAAU,CACrC,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CACA,iBAAG,yBAAyB,WAAY,CACvC,SAAS,CAAE,IAAI,qBAAqB,CAAC,CACrC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CACA,kBAAK,CACJ,OAAO,CAAE,KACV"}`
};
const Prismjs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code = "" } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  $$result.css.add(css$4);
  return `<pre class="text-xs max-h-56 overflow-auto svelte-isi8vj">  <code class="language-sql svelte-isi8vj"><!-- HTML_TAG_START -->${Prism.highlight(code, prism_sql)}<!-- HTML_TAG_END --></code>
</pre>`;
});
const css$3 = {
  code: "div.toggle.svelte-1b8idd8{background-color:var(--grey-50);border-left:1px solid var(--grey-200);border-right:1px solid var(--grey-200);padding:6px 0 10px 12px;font-family:var(--ui-font-family);font-size:10px;user-select:none;-webkit-user-select:none;-moz-user-select:none}button.svelte-1b8idd8{padding:2px 4px 2px 4px;border-radius:3px;cursor:pointer;background-color:transparent;font-size:1em;font-weight:600}button.off.svelte-1b8idd8{color:var(--grey-600);border:1px solid var(--grey-200);transition:all 400ms}button.off.svelte-1b8idd8:hover{color:var(--grey-700);border:1px solid var(--grey-300);transition:all 400ms;background-color:none}button.on.svelte-1b8idd8{color:var(--blue-700);background-color:var(--blue-100);border:1px solid var(--blue-200)}",
  map: `{"version":3,"file":"CompilerToggle.svelte","sources":["CompilerToggle.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { slide } from 'svelte/transition';\\n\\n\\texport let showCompiled;\\n\\n\\tconst toggleCompiled = function () {\\n\\t\\tshowCompiled = !showCompiled;\\n\\t};\\n<\/script>\\n\\n<div class=\\"toggle\\" transition:slide|local>\\n\\t{#if showCompiled}\\n\\t\\t<button class=\\"on\\">Compiled</button>\\n\\t\\t<button on:click={toggleCompiled} class=\\"off\\">Written</button>\\n\\t{:else}\\n\\t\\t<button on:click={toggleCompiled} class=\\"off\\">Compiled</button>\\n\\t\\t<button class=\\"on\\">Written</button>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\tdiv.toggle {\\n\\t\\tbackground-color: var(--grey-50);\\n\\t\\tborder-left: 1px solid var(--grey-200);\\n\\t\\tborder-right: 1px solid var(--grey-200);\\n\\t\\tpadding: 6px 0 10px 12px;\\n\\t\\tfont-family: var(--ui-font-family);\\n\\t\\tfont-size: 10px;\\n\\t\\tuser-select: none;\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-moz-user-select: none;\\n\\t}\\n\\n\\tbutton {\\n\\t\\tpadding: 2px 4px 2px 4px;\\n\\t\\tborder-radius: 3px;\\n\\t\\tcursor: pointer;\\n\\t\\tbackground-color: transparent;\\n\\t\\tfont-size: 1em;\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\tbutton.off {\\n\\t\\tcolor: var(--grey-600);\\n\\t\\tborder: 1px solid var(--grey-200);\\n\\t\\ttransition: all 400ms;\\n\\t}\\n\\n\\tbutton.off:hover {\\n\\t\\tcolor: var(--grey-700);\\n\\t\\tborder: 1px solid var(--grey-300);\\n\\t\\ttransition: all 400ms;\\n\\t\\tbackground-color: none;\\n\\t}\\n\\n\\tbutton.on {\\n\\t\\tcolor: var(--blue-700);\\n\\t\\tbackground-color: var(--blue-100);\\n\\t\\tborder: 1px solid var(--blue-200);\\n\\t}</style>\\n"],"names":[],"mappings":"AAyBC,GAAG,sBAAQ,CACV,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACvC,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CACxB,WAAW,CAAE,IAAI,gBAAgB,CAAC,CAClC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IACnB,CAEA,qBAAO,CACN,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACxB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,gBAAgB,CAAE,WAAW,CAC7B,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GACd,CAEA,MAAM,mBAAK,CACV,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACjC,UAAU,CAAE,GAAG,CAAC,KACjB,CAEA,MAAM,mBAAI,MAAO,CAChB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACjC,UAAU,CAAE,GAAG,CAAC,KAAK,CACrB,gBAAgB,CAAE,IACnB,CAEA,MAAM,kBAAI,CACT,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CACjC"}`
};
const CompilerToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showCompiled } = $$props;
  if ($$props.showCompiled === void 0 && $$bindings.showCompiled && showCompiled !== void 0)
    $$bindings.showCompiled(showCompiled);
  $$result.css.add(css$3);
  return `<div class="toggle svelte-1b8idd8">${showCompiled ? `<button class="on svelte-1b8idd8" data-svelte-h="svelte-1ofx42v">Compiled</button> <button class="off svelte-1b8idd8" data-svelte-h="svelte-v36xno">Written</button>` : `<button class="off svelte-1b8idd8" data-svelte-h="svelte-1vzm9jy">Compiled</button> <button class="on svelte-1b8idd8" data-svelte-h="svelte-5roa31">Written</button>`} </div>`;
});
const css$2 = {
  code: ":root{--scrollbar-track-color:transparent;--scrollbar-color:rgba(0, 0, 0, 0.2);--scrollbar-active-color:rgba(0, 0, 0, 0.4);--scrollbar-size:0.75rem;--scrollbar-minlength:1.5rem}.code-container.svelte-1plm20d{background-color:var(--grey-50);border-left:1px solid var(--grey-200);border-right:1px solid var(--grey-200);overflow-x:auto;overflow-y:hidden;padding-top:0;padding-right:12px;padding-bottom:6px;padding-left:15px;scrollbar-width:thin;scrollbar-color:var(--scrollbar-color) var(--scrollbar-track-color)}.code-container.svelte-1plm20d::-webkit-scrollbar{height:var(--scrollbar-size);width:var(--scrollbar-size)}.code-container.svelte-1plm20d::-webkit-scrollbar-track{background-color:var(--scrollbar-track-color)}.over-container.svelte-1plm20d{overflow-y:hidden;overflow-x:auto}.code-container.svelte-1plm20d::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:7px;background-clip:padding-box}.code-container.svelte-1plm20d::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-active-color)}.code-container.svelte-1plm20d::-webkit-scrollbar-thumb:vertical{min-height:var(--scrollbar-minlength);border:3px solid transparent}.code-container.svelte-1plm20d::-webkit-scrollbar-thumb:horizontal{min-width:var(--scrollbar-minlength);border:3px solid transparent}.status-bar.svelte-1plm20d{margin-top:0px;margin-bottom:0px;background-color:var(--grey-50);border-left:1px solid var(--grey-200);border-right:1px solid var(--grey-200);border-bottom:1px solid var(--grey-200);overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:var(--scrollbar-color) var(--scrollbar-track-color)}.status-bar.svelte-1plm20d::-webkit-scrollbar{height:var(--scrollbar-size);width:var(--scrollbar-size)}.status-bar.svelte-1plm20d::-webkit-scrollbar-track{background-color:var(--scrollbar-track-color)}.status-bar.svelte-1plm20d::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:7px;background-clip:padding-box}.status-bar.svelte-1plm20d::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-active-color)}.status-bar.svelte-1plm20d::-webkit-scrollbar-thumb:vertical{min-height:var(--scrollbar-minlength);border:3px solid transparent}.status-bar.svelte-1plm20d::-webkit-scrollbar-thumb:horizontal{min-width:var(--scrollbar-minlength);border:3px solid transparent}.closed.svelte-1plm20d{border-bottom-left-radius:6px;border-bottom-right-radius:6px;transition:400ms;transition-delay:400ms}.open.svelte-1plm20d{border-bottom-left-radius:0px;border-bottom-right-radius:0px;transition:400ms}.status-bar.success.svelte-1plm20d{color:var(--blue-500);cursor:pointer}.status-bar.error.svelte-1plm20d{color:var(--red-600);-webkit-user-select:all;-moz-user-select:all;user-select:all;cursor:auto}button.svelte-1plm20d{font-family:var(--ui-font-family-compact);-webkit-font-smoothing:antialiased;font-size:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;text-align:left;width:100%;background-color:var(--grey-50);border:none;border-left:1px solid var(--grey-200);border-right:1px solid var(--grey-200);margin-bottom:0px;cursor:pointer;padding:5px}button.title.svelte-1plm20d{border-top:1px solid var(--grey-200);border-top-left-radius:6px;border-top-right-radius:6px}.scrollbox.svelte-1plm20d{margin-top:0.75rem;margin-bottom:0.75rem;display:flex;flex-direction:column}.container-a.svelte-1plm20d{background-color:var(--grey-50);border-top-left-radius:6px;border-top-right-radius:6px;box-sizing:border-box;display:flex;flex-direction:column}@media print{.scrollbox.svelte-1plm20d{-moz-column-break-inside:avoid;break-inside:avoid}}",
  map: `{"version":3,"file":"QueryViewer.svelte","sources":["QueryViewer.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { slide, blur } from 'svelte/transition';\\n\\timport DataTable from './QueryViewerSupport/QueryDataTable.svelte';\\n\\timport ChevronToggle from './ChevronToggle.svelte';\\n\\timport Prism from './QueryViewerSupport/Prismjs.svelte';\\n\\timport { showQueries, localStorageStore } from '@evidence-dev/component-utilities/stores';\\n\\timport CompilerToggle from './QueryViewerSupport/CompilerToggle.svelte';\\n\\timport { page } from '$app/stores';\\n\\n\\texport let queryID;\\n\\t/** @type {import(\\"@evidence-dev/sdk/usql\\").QueryValue} */\\n\\texport let queryResult;\\n\\n\\t$: pageQueries = $page.data.evidencemeta.queries;\\n\\n\\t// Title & Query Toggle\\n\\tlet showSQL = localStorageStore('showSQL_'.concat(queryID), false);\\n\\t// Query text & Compiler Toggle\\n\\tlet showResults = localStorageStore(\`showResults_\${queryID}\`);\\n\\n\\tconst toggleSQL = function () {\\n\\t\\t$showSQL = !$showSQL;\\n\\t};\\n\\n\\tconst toggleResults = function () {\\n\\t\\tif (!error && $queryResult.length > 0) {\\n\\t\\t\\t$showResults = !$showResults;\\n\\t\\t}\\n\\t};\\n\\n\\tlet inputQuery;\\n\\tlet showCompilerToggle;\\n\\tlet showCompiled = true;\\n\\t/** @type {undefined | Error } */\\n\\tlet error = undefined;\\n\\n\\t// Enter an error state if the queryResult isn't defined\\n\\t$: {\\n\\t\\tif (!$queryResult) error = new Error('queryResult is undefined');\\n\\t\\telse error = $queryResult.error;\\n\\t}\\n\\n\\t$: rowCount = $queryResult?.length ?? 0;\\n\\t$: colCount = $queryResult.columns.length ?? $queryResult?._evidenceColumnTypes.length ?? 0;\\n\\n\\t$: {\\n\\t\\tlet query = pageQueries?.find((d) => d.id === queryID);\\n\\n\\t\\tif (query) {\\n\\t\\t\\tinputQuery = query.inputQueryString;\\n\\t\\t\\tshowCompilerToggle = query.compiled && query.compileError === undefined;\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<div class=\\"over-container\\" in:blur|local>\\n\\t{#if $showQueries}\\n\\t\\t<!-- Title -->\\n\\t\\t<div class=\\"scrollbox\\" transition:slide|local>\\n\\t\\t\\t<div class=\\"container-a\\">\\n\\t\\t\\t\\t<button type=\\"button\\" aria-label=\\"show-sql\\" on:click={toggleSQL} class=\\"title\\">\\n\\t\\t\\t\\t\\t<ChevronToggle toggled={$showSQL} />\\n\\t\\t\\t\\t\\t{queryID}\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<!-- Compile Toggle  -->\\n\\t\\t\\t\\t{#if $showSQL && showCompilerToggle}\\n\\t\\t\\t\\t\\t<CompilerToggle bind:showCompiled />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t<!-- Query Display -->\\n\\t\\t\\t\\t{#if $showSQL}\\n\\t\\t\\t\\t\\t<div class=\\"code-container\\" transition:slide|local>\\n\\t\\t\\t\\t\\t\\t{#if showCompiled}\\n\\t\\t\\t\\t\\t\\t\\t<Prism code={queryResult.originalText} />\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Prism code={inputQuery} />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t<!-- Status -->\\n\\t\\t\\t<button\\n\\t\\t\\t\\ttype=\\"button\\"\\n\\t\\t\\t\\taria-label=\\"view-query\\"\\n\\t\\t\\t\\tclass={'status-bar'}\\n\\t\\t\\t\\tclass:error\\n\\t\\t\\t\\tclass:success={!error}\\n\\t\\t\\t\\tclass:open={$showResults}\\n\\t\\t\\t\\tclass:closed={!$showResults}\\n\\t\\t\\t\\ton:click={toggleResults}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if error}\\n\\t\\t\\t\\t\\t{error.message}\\n\\t\\t\\t\\t{:else if rowCount}\\n\\t\\t\\t\\t\\t<ChevronToggle toggled={$showResults} color=\\"#3488e9\\" />\\n\\t\\t\\t\\t\\t{rowCount.toLocaleString()}\\n\\t\\t\\t\\t\\t{rowCount > 1 ? 'records' : 'record'} with {colCount.toLocaleString()}\\n\\t\\t\\t\\t\\t{colCount > 1 ? 'properties' : 'property'}\\n\\t\\t\\t\\t{:else if $queryResult.loading}\\n\\t\\t\\t\\t\\tloading...\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\tran successfully but no data was returned\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t<!-- Results -->\\n\\t\\t\\t</button>\\n\\t\\t\\t{#if rowCount > 0 && !error && $showResults}\\n\\t\\t\\t\\t<DataTable data={queryResult} {queryID} />\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t:root {\\n\\t\\t--scrollbar-track-color: transparent;\\n\\t\\t--scrollbar-color: rgba(0, 0, 0, 0.2);\\n\\t\\t--scrollbar-active-color: rgba(0, 0, 0, 0.4);\\n\\t\\t--scrollbar-size: 0.75rem;\\n\\t\\t--scrollbar-minlength: 1.5rem; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */\\n\\t}\\n\\n\\t.code-container {\\n\\t\\tbackground-color: var(--grey-50);\\n\\t\\tborder-left: 1px solid var(--grey-200);\\n\\t\\tborder-right: 1px solid var(--grey-200);\\n\\t\\toverflow-x: auto;\\n\\t\\toverflow-y: hidden;\\n\\t\\tpadding-top: 0;\\n\\t\\tpadding-right: 12px;\\n\\t\\tpadding-bottom: 6px;\\n\\t\\tpadding-left: 15px;\\n\\t\\tscrollbar-width: thin;\\n\\t\\tscrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);\\n\\t}\\n\\t.code-container::-webkit-scrollbar {\\n\\t\\theight: var(--scrollbar-size);\\n\\t\\twidth: var(--scrollbar-size);\\n\\t}\\n\\t.code-container::-webkit-scrollbar-track {\\n\\t\\tbackground-color: var(--scrollbar-track-color);\\n\\t}\\n\\n\\t.over-container {\\n\\t\\toverflow-y: hidden;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.code-container::-webkit-scrollbar-thumb {\\n\\t\\tbackground-color: var(--scrollbar-color);\\n\\t\\tborder-radius: 7px;\\n\\t\\tbackground-clip: padding-box;\\n\\t}\\n\\t.code-container::-webkit-scrollbar-thumb:hover {\\n\\t\\tbackground-color: var(--scrollbar-active-color);\\n\\t}\\n\\t.code-container::-webkit-scrollbar-thumb:vertical {\\n\\t\\tmin-height: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\t.code-container::-webkit-scrollbar-thumb:horizontal {\\n\\t\\tmin-width: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\n\\t.status-bar {\\n\\t\\tmargin-top: 0px;\\n\\t\\tmargin-bottom: 0px;\\n\\t\\tbackground-color: var(--grey-50);\\n\\t\\tborder-left: 1px solid var(--grey-200);\\n\\t\\tborder-right: 1px solid var(--grey-200);\\n\\t\\tborder-bottom: 1px solid var(--grey-200);\\n\\t\\toverflow-x: auto;\\n\\t\\toverflow-y: hidden;\\n\\t\\tscrollbar-width: thin;\\n\\t\\tscrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);\\n\\t}\\n\\n\\t.status-bar::-webkit-scrollbar {\\n\\t\\theight: var(--scrollbar-size);\\n\\t\\twidth: var(--scrollbar-size);\\n\\t}\\n\\t.status-bar::-webkit-scrollbar-track {\\n\\t\\tbackground-color: var(--scrollbar-track-color);\\n\\t}\\n\\t.status-bar::-webkit-scrollbar-thumb {\\n\\t\\tbackground-color: var(--scrollbar-color);\\n\\t\\tborder-radius: 7px;\\n\\t\\tbackground-clip: padding-box;\\n\\t}\\n\\t.status-bar::-webkit-scrollbar-thumb:hover {\\n\\t\\tbackground-color: var(--scrollbar-active-color);\\n\\t}\\n\\t.status-bar::-webkit-scrollbar-thumb:vertical {\\n\\t\\tmin-height: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\t.status-bar::-webkit-scrollbar-thumb:horizontal {\\n\\t\\tmin-width: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\n\\t.closed {\\n\\t\\tborder-bottom-left-radius: 6px;\\n\\t\\tborder-bottom-right-radius: 6px;\\n\\t\\ttransition: 400ms;\\n\\t\\ttransition-delay: 400ms;\\n\\t\\t/* 400ms is the default duration for the slide */\\n\\t}\\n\\n\\t.open {\\n\\t\\tborder-bottom-left-radius: 0px;\\n\\t\\tborder-bottom-right-radius: 0px;\\n\\t\\ttransition: 400ms;\\n\\t}\\n\\n\\t.status-bar.success {\\n\\t\\tcolor: var(--blue-500);\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.status-bar.error {\\n\\t\\tcolor: var(--red-600);\\n\\t\\t-webkit-user-select: all;\\n\\t\\t-moz-user-select: all;\\n\\t\\tuser-select: all;\\n\\t\\tcursor: auto;\\n\\t}\\n\\n\\tbutton {\\n\\t\\tfont-family: var(--ui-font-family-compact);\\n\\t\\t-webkit-font-smoothing: antialiased;\\n\\t\\tfont-size: 12px;\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-moz-user-select: none;\\n\\t\\t     user-select: none;\\n\\t\\twhite-space: nowrap;\\n\\t\\ttext-align: left;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-color: var(--grey-50);\\n\\t\\tborder: none;\\n\\t\\tborder-left: 1px solid var(--grey-200);\\n\\t\\tborder-right: 1px solid var(--grey-200);\\n\\t\\tmargin-bottom: 0px;\\n\\t\\tcursor: pointer;\\n\\t\\tpadding: 5px;\\n\\t}\\n\\n\\tbutton.title {\\n\\t\\tborder-top: 1px solid var(--grey-200);\\n\\t\\tborder-top-left-radius: 6px;\\n\\t\\tborder-top-right-radius: 6px;\\n\\t}\\n\\n\\t.scrollbox {\\n\\t\\tmargin-top: 0.75rem;\\n\\t\\tmargin-bottom: 0.75rem;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n}\\n\\n\\t.container-a {\\n\\t\\tbackground-color: var(--grey-50);\\n\\t\\tborder-top-left-radius: 6px;\\n\\t\\tborder-top-right-radius: 6px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\t/* container-a avoids whitespace appearing in the slide transition */\\n\\n\\t@media print {\\n\\t\\t.scrollbox {\\n\\t\\t\\t-moz-column-break-inside: avoid;\\n\\t\\t\\t     break-inside: avoid;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AAoHC,KAAM,CACL,uBAAuB,CAAE,WAAW,CACpC,iBAAiB,CAAE,kBAAkB,CACrC,wBAAwB,CAAE,kBAAkB,CAC5C,gBAAgB,CAAE,OAAO,CACzB,qBAAqB,CAAE,MACxB,CAEA,8BAAgB,CACf,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACvC,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,CAAC,CACd,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,GAAG,CACnB,YAAY,CAAE,IAAI,CAClB,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,iBAAiB,CAAC,CAAC,IAAI,uBAAuB,CACpE,CACA,8BAAe,mBAAoB,CAClC,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,KAAK,CAAE,IAAI,gBAAgB,CAC5B,CACA,8BAAe,yBAA0B,CACxC,gBAAgB,CAAE,IAAI,uBAAuB,CAC9C,CAEA,8BAAgB,CACf,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACb,CAEA,8BAAe,yBAA0B,CACxC,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,WAClB,CACA,8BAAe,yBAAyB,MAAO,CAC9C,gBAAgB,CAAE,IAAI,wBAAwB,CAC/C,CACA,8BAAe,yBAAyB,SAAU,CACjD,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CACA,8BAAe,yBAAyB,WAAY,CACnD,SAAS,CAAE,IAAI,qBAAqB,CAAC,CACrC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CAEA,0BAAY,CACX,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACvC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,iBAAiB,CAAC,CAAC,IAAI,uBAAuB,CACpE,CAEA,0BAAW,mBAAoB,CAC9B,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,KAAK,CAAE,IAAI,gBAAgB,CAC5B,CACA,0BAAW,yBAA0B,CACpC,gBAAgB,CAAE,IAAI,uBAAuB,CAC9C,CACA,0BAAW,yBAA0B,CACpC,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,WAClB,CACA,0BAAW,yBAAyB,MAAO,CAC1C,gBAAgB,CAAE,IAAI,wBAAwB,CAC/C,CACA,0BAAW,yBAAyB,SAAU,CAC7C,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CACA,0BAAW,yBAAyB,WAAY,CAC/C,SAAS,CAAE,IAAI,qBAAqB,CAAC,CACrC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CAEA,sBAAQ,CACP,yBAAyB,CAAE,GAAG,CAC9B,0BAA0B,CAAE,GAAG,CAC/B,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,KAEnB,CAEA,oBAAM,CACL,yBAAyB,CAAE,GAAG,CAC9B,0BAA0B,CAAE,GAAG,CAC/B,UAAU,CAAE,KACb,CAEA,WAAW,uBAAS,CACnB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,MAAM,CAAE,OACT,CAEA,WAAW,qBAAO,CACjB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,mBAAmB,CAAE,GAAG,CACxB,gBAAgB,CAAE,GAAG,CACrB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IACT,CAEA,qBAAO,CACN,WAAW,CAAE,IAAI,wBAAwB,CAAC,CAC1C,sBAAsB,CAAE,WAAW,CACnC,SAAS,CAAE,IAAI,CACf,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACvC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,GACV,CAEA,MAAM,qBAAO,CACZ,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACrC,sBAAsB,CAAE,GAAG,CAC3B,uBAAuB,CAAE,GAC1B,CAEA,yBAAW,CACV,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEC,2BAAa,CACZ,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,sBAAsB,CAAE,GAAG,CAC3B,uBAAuB,CAAE,GAAG,CAC5B,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAGA,OAAO,KAAM,CACZ,yBAAW,CACV,wBAAwB,CAAE,KAAK,CAC1B,YAAY,CAAE,KACpB,CACD"}`
};
const QueryViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageQueries;
  let rowCount;
  let colCount;
  let $queryResult, $$unsubscribe_queryResult;
  let $showResults, $$unsubscribe_showResults;
  let $showSQL, $$unsubscribe_showSQL;
  let $page, $$unsubscribe_page;
  let $showQueries, $$unsubscribe_showQueries;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showQueries = subscribe(showQueries, (value) => $showQueries = value);
  let { queryID } = $$props;
  let { queryResult } = $$props;
  $$unsubscribe_queryResult = subscribe(queryResult, (value) => $queryResult = value);
  let showSQL = localStorageStore("showSQL_".concat(queryID), false);
  $$unsubscribe_showSQL = subscribe(showSQL, (value) => $showSQL = value);
  let showResults = localStorageStore();
  $$unsubscribe_showResults = subscribe(showResults, (value) => $showResults = value);
  let inputQuery;
  let showCompilerToggle;
  let showCompiled = true;
  let error = void 0;
  if ($$props.queryID === void 0 && $$bindings.queryID && queryID !== void 0)
    $$bindings.queryID(queryID);
  if ($$props.queryResult === void 0 && $$bindings.queryResult && queryResult !== void 0)
    $$bindings.queryResult(queryResult);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    pageQueries = $page.data.evidencemeta.queries;
    {
      {
        if (!$queryResult)
          error = new Error("queryResult is undefined");
        else
          error = $queryResult.error;
      }
    }
    rowCount = $queryResult?.length ?? 0;
    colCount = $queryResult.columns.length ?? $queryResult?._evidenceColumnTypes.length ?? 0;
    {
      {
        let query = pageQueries?.find((d) => d.id === queryID);
        if (query) {
          inputQuery = query.inputQueryString;
          showCompilerToggle = query.compiled && query.compileError === void 0;
        }
      }
    }
    $$rendered = `<div class="over-container svelte-1plm20d">${$showQueries ? ` <div class="scrollbox svelte-1plm20d"><div class="container-a svelte-1plm20d"><button type="button" aria-label="show-sql" class="title svelte-1plm20d">${validate_component(ChevronToggle, "ChevronToggle").$$render($$result, { toggled: $showSQL }, {}, {})} ${escape(queryID)}</button>  ${$showSQL && showCompilerToggle ? `${validate_component(CompilerToggle, "CompilerToggle").$$render(
      $$result,
      { showCompiled },
      {
        showCompiled: ($$value) => {
          showCompiled = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}  ${$showSQL ? `<div class="code-container svelte-1plm20d">${showCompiled ? `${validate_component(Prismjs, "Prism").$$render($$result, { code: queryResult.originalText }, {}, {})}` : `${validate_component(Prismjs, "Prism").$$render($$result, { code: inputQuery }, {}, {})}`}</div>` : ``}</div>  <button type="button" aria-label="view-query" class="${[
      escape(null_to_empty("status-bar"), true) + " svelte-1plm20d",
      (error ? "error" : "") + " " + (!error ? "success" : "") + " " + ($showResults ? "open" : "") + " " + (!$showResults ? "closed" : "")
    ].join(" ").trim()}">${error ? `${escape(error.message)}` : `${rowCount ? `${validate_component(ChevronToggle, "ChevronToggle").$$render($$result, { toggled: $showResults, color: "#3488e9" }, {}, {})} ${escape(rowCount.toLocaleString())} ${escape(rowCount > 1 ? "records" : "record")} with ${escape(colCount.toLocaleString())} ${escape(colCount > 1 ? "properties" : "property")}` : `${$queryResult.loading ? `loading...` : `ran successfully but no data was returned`}`}`} </button> ${rowCount > 0 && !error && $showResults ? `${validate_component(QueryDataTable, "DataTable").$$render($$result, { data: queryResult, queryID }, {}, {})}` : ``}</div>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_queryResult();
  $$unsubscribe_showResults();
  $$unsubscribe_showSQL();
  $$unsubscribe_page();
  $$unsubscribe_showQueries();
  return $$rendered;
});
const EChartsCopyTarget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let portraitCols;
  let portraitWidth;
  let landscapeCols;
  let landscapeWidth;
  let { config = void 0 } = $$props;
  let { height = "291px" } = $$props;
  let { width = "100%" } = $$props;
  let { copying = false } = $$props;
  let { printing = false } = $$props;
  let { echartsOptions = void 0 } = $$props;
  let { seriesOptions = void 0 } = $$props;
  let { seriesColors = void 0 } = $$props;
  let { isMap = false } = $$props;
  let { extraHeight = void 0 } = $$props;
  let inGrid = false;
  let gridCols;
  let gapWidth;
  const gridConfig = getContext("gridConfig");
  if (gridConfig) {
    inGrid = true;
    ({ cols: gridCols, gapWidth } = gridConfig);
  }
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.copying === void 0 && $$bindings.copying && copying !== void 0)
    $$bindings.copying(copying);
  if ($$props.printing === void 0 && $$bindings.printing && printing !== void 0)
    $$bindings.printing(printing);
  if ($$props.echartsOptions === void 0 && $$bindings.echartsOptions && echartsOptions !== void 0)
    $$bindings.echartsOptions(echartsOptions);
  if ($$props.seriesOptions === void 0 && $$bindings.seriesOptions && seriesOptions !== void 0)
    $$bindings.seriesOptions(seriesOptions);
  if ($$props.seriesColors === void 0 && $$bindings.seriesColors && seriesColors !== void 0)
    $$bindings.seriesColors(seriesColors);
  if ($$props.isMap === void 0 && $$bindings.isMap && isMap !== void 0)
    $$bindings.isMap(isMap);
  if ($$props.extraHeight === void 0 && $$bindings.extraHeight && extraHeight !== void 0)
    $$bindings.extraHeight(extraHeight);
  portraitCols = Math.min(Number(gridCols), 2);
  portraitWidth = (650 - Number(gapWidth) * (portraitCols - 1)) / portraitCols;
  landscapeCols = Math.min(Number(gridCols), 3);
  landscapeWidth = (841 - Number(gapWidth) * (landscapeCols - 1)) / landscapeCols;
  return `${copying ? `<div class="chart" style="${"height: " + escape(height, true) + "; width: " + escape(width, true) + "; margin-left: 0; margin-top: 15px; margin-bottom: 10px; overflow: visible; break-inside: avoid;"}"></div>` : `${printing ? `${inGrid ? `<div class="chart md:hidden" style="${"height: " + escape(height, true) + "; width: " + escape(portraitWidth, true) + "px; margin-left: 0; margin-top: 15px; margin-bottom: 10px; overflow: visible; break-inside: avoid;"}"></div> <div class="chart hidden md:block" style="${"height: " + escape(height, true) + "; width: " + escape(landscapeWidth, true) + "px; margin-left: 0; margin-top: 15px; margin-bottom: 10px; overflow: visible; break-inside: avoid;"}"></div>` : `<div class="chart md:hidden" style="${"height: " + escape(height, true) + "; width: 650px; margin-left: 0; margin-top: 15px; margin-bottom: 10px; overflow: visible; break-inside: avoid;"}"></div> <div class="chart hidden md:block" style="${"height: " + escape(height, true) + "; width: 841px; margin-left: 0; margin-top: 15px; margin-bottom: 10px; overflow: visible; break-inside: avoid;"}"></div>`}` : ``}`}`;
});
const ChartLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "231px" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<div role="status" class="animate-pulse"><span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span> <div class="bg-gray-200 rounded-md dark:bg-gray-400 max-w-[100%]" style="${"height:" + escape(height, true) + "; margin-top: 15px; margin-bottom: 31px;"}"></div></div>`;
});
const css$1 = {
  code: "@media print{.chart.svelte-19r8f8{-moz-column-break-inside:avoid;break-inside:avoid}.chart-container.svelte-19r8f8{padding:0}}.chart.svelte-19r8f8{-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none}.chart-footer.svelte-19r8f8{display:flex;justify-content:flex-end;align-items:center;margin:3px 12px;font-size:12px;height:9px}",
  map: `{"version":3,"file":"ECharts.svelte","sources":["ECharts.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { browser } from '$app/environment';\\n\\timport echarts from '@evidence-dev/component-utilities/echarts';\\n\\timport echartsCanvasDownload from '@evidence-dev/component-utilities/echartsCanvasDownload';\\n\\timport EChartsCopyTarget from './EChartsCopyTarget.svelte';\\n\\timport DownloadData from '../../ui/DownloadData.svelte';\\n\\timport CodeBlock from '../../ui/CodeBlock.svelte';\\n\\timport ChartLoading from '../../ui/ChartLoading.svelte';\\n\\timport { flush } from 'svelte/internal';\\n\\timport { createEventDispatcher } from 'svelte';\\n\\n\\texport let config = undefined;\\n\\t\\n\\texport let contextMenuOptions = [];\\n\\texport let contextMenuClickHandler = () => {}\\n\\t\\n\\texport let queryID = undefined;\\n\\texport let evidenceChartTitle = undefined;\\n\\n\\texport let height = '291px';\\n\\texport let width = '100%';\\n\\n\\texport let data;\\n\\n\\texport let renderer = undefined;\\n\\n\\texport let echartsOptions = undefined;\\n\\texport let seriesOptions = undefined;\\n\\texport let printEchartsConfig; // helper for custom chart development\\n\\texport let seriesColors = undefined;\\n\\n\\texport let connectGroup = undefined;\\n\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\tlet downloadChart = false;\\n\\tlet copying = false;\\n\\tlet printing = false;\\n\\tlet hovering = false;\\n\\n\\tconsole.log(' -- -from ECharts.svelte ****')\\n<\/script>\\n\\n<svelte:window\\n\\ton:copy={() => {\\n\\t\\tcopying = true;\\n\\t\\tflush();\\n\\t\\tsetTimeout(() => {\\n\\t\\t\\tcopying = false;\\n\\t\\t}, 0);\\n\\t}}\\n\\ton:beforeprint={() => (printing = true)}\\n\\ton:afterprint={() => (printing = false)}\\n\\ton:export-beforeprint={() => (printing = true)}\\n\\ton:export-afterprint={() => (printing = false)}\\n/>\\n\\n\\t<div class=\\"menu\\">\\n\\t\\t<ul class=\\"menu-options\\">\\n\\t\\t\\t{#each contextMenuOptions as option} \\n\\t\\t\\t\\t<li on:click={contextMenuClickHandler} class={option.menuClass}>{option.key}</li>\\n\\t\\t\\t{/each}\\n\\t\\t\\t<li class=\\"menu-option larger-height \\">\\n\\t\\t\\t\\t<div><input type=\\"textarea\\" style=\\"width:7vw;height:7vh\\" placeholder=\\"Annotate ...\\"/> </div>\\n\\t\\t\\t</li>\\n\\t\\t</ul>\\n\\t</div>\\n<div\\n\\trole=\\"none\\"\\n\\tclass=\\"chart-container\\"\\n\\ton:mouseenter={() => (hovering = true)}\\n\\ton:mouseleave={() => (hovering = false)}\\n>\\n\\t{#if !printing}\\n\\t\\t{#if !browser}\\n\\t\\t\\t<ChartLoading {height} />\\n\\t\\t{:else}\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"chart\\"\\n\\t\\t\\t\\tstyle=\\"\\n\\t\\t\\t\\theight: {height};\\n\\t\\t\\t\\twidth: {width};\\n\\t\\t\\t\\tmargin-left: 0;\\n\\t\\t\\t\\tmargin-top: 15px;\\n\\t\\t\\t\\tmargin-bottom: 10px;\\n\\t\\t\\t\\toverflow: visible;\\n\\t\\t\\t\\tdisplay: {copying ? 'none' : 'inherit'}\\n\\t\\t\\t\\"\\n\\t\\t\\t\\tuse:echarts={{\\n\\t\\t\\t\\t\\tconfig,\\n\\t\\t\\t\\t\\t...$$restProps,\\n\\t\\t\\t\\t\\techartsOptions,\\n\\t\\t\\t\\t\\tseriesOptions,\\n\\t\\t\\t\\t\\tdispatch,\\n\\t\\t\\t\\t\\trenderer,\\n\\t\\t\\t\\t\\tconnectGroup,\\n\\t\\t\\t\\t\\tseriesColors\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t{/if}\\n\\t{/if}\\n\\n\\t<EChartsCopyTarget\\n\\t\\t{config}\\n\\t\\t{height}\\n\\t\\t{width}\\n\\t\\t{copying}\\n\\t\\t{printing}\\n\\t\\t{echartsOptions}\\n\\t\\t{seriesOptions}\\n\\t\\t{seriesColors}\\n\\t/>\\n\\n\\n\\t<div class=\\"chart-footer\\">\\n\\t\\t<DownloadData\\n\\t\\t\\ttext=\\"Save image\\"\\n\\t\\t\\tclass=\\"download-button\\"\\n\\t\\t\\tdownloadData={() => {\\n\\t\\t\\t\\tdownloadChart = true;\\n\\t\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\t\\tdownloadChart = false;\\n\\t\\t\\t\\t}, 0);\\n\\t\\t\\t}}\\n\\t\\t\\tdisplay={hovering}\\n\\t\\t\\t{queryID}\\n\\t\\t>\\n\\t\\t\\t<svg\\n\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\twidth=\\"12\\"\\n\\t\\t\\t\\theight=\\"12\\"\\n\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\tstroke=\\"#000\\"\\n\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" />\\n\\t\\t\\t\\t<circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\" />\\n\\t\\t\\t\\t<path d=\\"M20.4 14.5L16 10 4 20\\" />\\n\\t\\t\\t</svg>\\n\\t\\t</DownloadData>\\n\\t\\t{#if data}\\n\\t\\t\\t<DownloadData\\n\\t\\t\\t\\ttext=\\"Download data\\"\\n\\t\\t\\t\\t{data}\\n\\t\\t\\t\\t{queryID}\\n\\t\\t\\t\\tclass=\\"download-button\\"\\n\\t\\t\\t\\tdisplay={hovering}\\n\\t\\t\\t/>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t{#if printEchartsConfig && !printing}\\n\\t\\t<CodeBlock source={JSON.stringify(config, undefined, 3)} copyToClipboard={true}>\\n\\t\\t\\t{JSON.stringify(config, undefined, 3)}\\n\\t\\t</CodeBlock>\\n\\t{/if}\\n</div>\\n\\n{#if downloadChart}\\n\\t<div\\n\\t\\tclass=\\"chart\\"\\n\\t\\tstyle=\\"\\n        display: none;\\n        visibility: visible;\\n        height: {height};\\n        width: 666px;\\n        margin-left: 0;\\n        margin-top: 15px;\\n        margin-bottom: 15px;\\n        overflow: visible;\\n    \\"\\n\\t\\tuse:echartsCanvasDownload={{\\n\\t\\t\\tconfig,\\n\\t\\t\\t...$$restProps,\\n\\t\\t\\techartsOptions,\\n\\t\\t\\tseriesOptions,\\n\\t\\t\\tseriesColors,\\n\\t\\t\\tqueryID,\\n\\t\\t\\tevidenceChartTitle\\n\\t\\t}}\\n\\t/>\\n{/if}\\n\\n<style>\\n\\t@media print {\\n\\t\\t.chart {\\n\\t\\t\\t-moz-column-break-inside: avoid;\\n\\t\\t\\tbreak-inside: avoid;\\n\\t\\t}\\n\\n\\t\\t.chart-container {\\n\\t\\t\\tpadding: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.chart {\\n\\t\\t-moz-user-select: none;\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-o-user-select: none;\\n\\t\\tuser-select: none;\\n\\t}\\n\\n\\t.chart-footer {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-end;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 3px 12px;\\n\\t\\tfont-size: 12px;\\n\\t\\theight: 9px;\\n\\t}</style>\\n"],"names":[],"mappings":"AA+LC,OAAO,KAAM,CACZ,oBAAO,CACN,wBAAwB,CAAE,KAAK,CAC/B,YAAY,CAAE,KACf,CAEA,8BAAiB,CAChB,OAAO,CAAE,CACV,CACD,CAEA,oBAAO,CACN,gBAAgB,CAAE,IAAI,CACtB,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,IAAI,CACpB,WAAW,CAAE,IACd,CAEA,2BAAc,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GACT"}`
};
const ECharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  compute_rest_props($$props, [
    "config",
    "contextMenuOptions",
    "contextMenuClickHandler",
    "queryID",
    "evidenceChartTitle",
    "height",
    "width",
    "data",
    "renderer",
    "echartsOptions",
    "seriesOptions",
    "printEchartsConfig",
    "seriesColors",
    "connectGroup"
  ]);
  let { config = void 0 } = $$props;
  let { contextMenuOptions = [] } = $$props;
  let { contextMenuClickHandler = () => {
  } } = $$props;
  let { queryID = void 0 } = $$props;
  let { evidenceChartTitle = void 0 } = $$props;
  let { height = "291px" } = $$props;
  let { width = "100%" } = $$props;
  let { data } = $$props;
  let { renderer = void 0 } = $$props;
  let { echartsOptions = void 0 } = $$props;
  let { seriesOptions = void 0 } = $$props;
  let { printEchartsConfig } = $$props;
  let { seriesColors = void 0 } = $$props;
  let { connectGroup = void 0 } = $$props;
  createEventDispatcher();
  let downloadChart = false;
  let copying = false;
  let printing = false;
  let hovering = false;
  console.log(" -- -from ECharts.svelte ****");
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.contextMenuOptions === void 0 && $$bindings.contextMenuOptions && contextMenuOptions !== void 0)
    $$bindings.contextMenuOptions(contextMenuOptions);
  if ($$props.contextMenuClickHandler === void 0 && $$bindings.contextMenuClickHandler && contextMenuClickHandler !== void 0)
    $$bindings.contextMenuClickHandler(contextMenuClickHandler);
  if ($$props.queryID === void 0 && $$bindings.queryID && queryID !== void 0)
    $$bindings.queryID(queryID);
  if ($$props.evidenceChartTitle === void 0 && $$bindings.evidenceChartTitle && evidenceChartTitle !== void 0)
    $$bindings.evidenceChartTitle(evidenceChartTitle);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.echartsOptions === void 0 && $$bindings.echartsOptions && echartsOptions !== void 0)
    $$bindings.echartsOptions(echartsOptions);
  if ($$props.seriesOptions === void 0 && $$bindings.seriesOptions && seriesOptions !== void 0)
    $$bindings.seriesOptions(seriesOptions);
  if ($$props.printEchartsConfig === void 0 && $$bindings.printEchartsConfig && printEchartsConfig !== void 0)
    $$bindings.printEchartsConfig(printEchartsConfig);
  if ($$props.seriesColors === void 0 && $$bindings.seriesColors && seriesColors !== void 0)
    $$bindings.seriesColors(seriesColors);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  $$result.css.add(css$1);
  return ` <div class="menu"><ul class="menu-options">${each(contextMenuOptions, (option) => {
    return `<li class="${escape(null_to_empty(option.menuClass), true) + " svelte-19r8f8"}">${escape(option.key)}</li>`;
  })} <li class="menu-option larger-height " data-svelte-h="svelte-1fqftvc"><div><input type="textarea" style="width:7vw;height:7vh" placeholder="Annotate ..."></div></li></ul></div> <div role="none" class="chart-container svelte-19r8f8">${`${`${validate_component(ChartLoading, "ChartLoading").$$render($$result, { height }, {}, {})}`}`} ${validate_component(EChartsCopyTarget, "EChartsCopyTarget").$$render(
    $$result,
    {
      config,
      height,
      width,
      copying,
      printing,
      echartsOptions,
      seriesOptions,
      seriesColors
    },
    {},
    {}
  )} <div class="chart-footer svelte-19r8f8">${validate_component(DownloadData, "DownloadData").$$render(
    $$result,
    {
      text: "Save image",
      class: "download-button",
      downloadData: () => {
        downloadChart = true;
        setTimeout(
          () => {
            downloadChart = false;
          },
          0
        );
      },
      display: hovering,
      queryID
    },
    {},
    {
      default: () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M20.4 14.5L16 10 4 20"></path></svg>`;
      }
    }
  )} ${data ? `${validate_component(DownloadData, "DownloadData").$$render(
    $$result,
    {
      text: "Download data",
      data,
      queryID,
      class: "download-button",
      display: hovering
    },
    {},
    {}
  )}` : ``}</div> ${printEchartsConfig && !printing ? `${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      source: JSON.stringify(config, void 0, 3),
      copyToClipboard: true
    },
    {},
    {
      default: () => {
        return `${escape(JSON.stringify(config, void 0, 3))}`;
      }
    }
  )}` : ``}</div> ${downloadChart ? `<div class="chart svelte-19r8f8" style="${"display: none; visibility: visible; height: " + escape(height, true) + "; width: 666px; margin-left: 0; margin-top: 15px; margin-bottom: 15px; overflow: visible;"}"></div>` : ``}`;
});
function getDistinctValues(data, column) {
  const set = new Set(data.map((val) => val[column]));
  return Array.from(set);
}
function getDistinctCount(data, column) {
  let distinctCount = tidy(data, summarize({ count: nDistinct(column) }))[0].count;
  return distinctCount;
}
function getStackPercentages(data, groupCol, valueCol) {
  let pctData;
  if (typeof valueCol !== "object") {
    pctData = tidy(
      data,
      groupBy(groupCol, mutateWithSummary({ xTotal: sum(valueCol) })),
      mutate({ percentOfX: rate(valueCol, "xTotal") }),
      rename({
        [valueCol]: valueCol + "_raw",
        percentOfX: valueCol + "_pct"
      })
    );
  } else {
    pctData = tidy(
      data,
      mutate({
        valueSum: 0
      })
    );
    for (let i = 0; i < pctData.length; i++) {
      pctData[i].valueSum = 0;
      for (let j = 0; j < valueCol.length; j++) {
        pctData[i].valueSum = pctData[i].valueSum + pctData[i][valueCol[j]];
      }
    }
    pctData = tidy(pctData, groupBy(groupCol, mutateWithSummary({ xTotal: sum("valueSum") })));
    for (let i = 0; i < valueCol.length; i++) {
      pctData = tidy(
        pctData,
        mutate({ percentOfX: rate(valueCol[i], "xTotal") }),
        rename({
          [valueCol[i]]: valueCol[i] + "_raw",
          percentOfX: valueCol[i] + "_pct"
        })
      );
    }
  }
  return pctData;
}
function getSortedData(data, col, isAsc) {
  return [...data].sort((a, b) => {
    return (a[col] < b[col] ? -1 : 1) * (isAsc ? 1 : -1);
  });
}
function getYAxisIndex(componentIndex, yCount, y2Count) {
  const totalPatternCount = yCount + y2Count;
  const positionInPattern = componentIndex % totalPatternCount;
  if (positionInPattern < yCount) {
    return 0;
  } else {
    return 1;
  }
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $config, $$unsubscribe_config;
  let props = writable({});
  let config = writable({});
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  let { data = void 0 } = $$props;
  let { queryID = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { y2 = void 0 } = $$props;
  let { series = void 0 } = $$props;
  let { size: size2 = void 0 } = $$props;
  let { tooltipTitle = void 0 } = $$props;
  let { showAllXAxisLabels = false } = $$props;
  let { printEchartsConfig = false } = $$props;
  const ySet = y ? true : false;
  const xSet = x ? true : false;
  let { swapXY = false } = $$props;
  let { title = void 0 } = $$props;
  let { subtitle = void 0 } = $$props;
  let { chartType: chartType2 = "Chart" } = $$props;
  let { bubble = false } = $$props;
  let { hist = false } = $$props;
  let { boxplot = false } = $$props;
  let reqCols;
  let { xType = void 0 } = $$props;
  let { xAxisTitle = "false" } = $$props;
  let { xBaseline = true } = $$props;
  let { xTickMarks = false } = $$props;
  let { xGridlines = false } = $$props;
  let { xAxisLabels = true } = $$props;
  let { sort = true } = $$props;
  let { xFmt = void 0 } = $$props;
  let { xMin = void 0 } = $$props;
  let { xMax = void 0 } = $$props;
  let { yLog = false } = $$props;
  let { yType = yLog === true ? "log" : "value" } = $$props;
  let { yLogBase = 10 } = $$props;
  let { yAxisTitle = "false" } = $$props;
  let { yBaseline = false } = $$props;
  let { yTickMarks = false } = $$props;
  let { yGridlines = true } = $$props;
  let { yAxisLabels = true } = $$props;
  let { yMin = void 0 } = $$props;
  let { yMax = void 0 } = $$props;
  let { yScale = false } = $$props;
  let { yFmt = void 0 } = $$props;
  let { yAxisColor = "true" } = $$props;
  let { y2AxisTitle = "false" } = $$props;
  let { y2Baseline = false } = $$props;
  let { y2TickMarks = false } = $$props;
  let { y2Gridlines = true } = $$props;
  let { y2AxisLabels = true } = $$props;
  let { y2Min = void 0 } = $$props;
  let { y2Max = void 0 } = $$props;
  let { y2Scale = false } = $$props;
  let { y2Fmt = void 0 } = $$props;
  let { y2AxisColor = "true" } = $$props;
  let { sizeFmt = void 0 } = $$props;
  let { colorPalette = void 0 } = $$props;
  let { legend = void 0 } = $$props;
  let { echartsOptions = void 0 } = $$props;
  let { seriesOptions = void 0 } = $$props;
  let { seriesColors = void 0 } = $$props;
  let { stackType = void 0 } = $$props;
  let { stacked100 = false } = $$props;
  let { chartAreaHeight } = $$props;
  let { renderer = void 0 } = $$props;
  let { connectGroup = void 0 } = $$props;
  let columnSummary;
  let columnNames;
  let uColNames = [];
  let unusedColumns = [];
  let uColType;
  let uColName;
  let xDataType;
  let xMismatch;
  let xFormat;
  let yFormat;
  let y2Format;
  let sizeFormat;
  let xUnitSummary;
  let yUnitSummary;
  let y2UnitSummary;
  let xDistinct;
  let horizAxisConfig;
  let verticalAxisConfig;
  let horizAxisTitleConfig;
  let chartConfig;
  let hasTitle;
  let hasSubtitle;
  let hasLegend;
  let hasTopAxisTitle;
  let hasBottomAxisTitle;
  let titleFontSize;
  let subtitleFontSize;
  let titleBoxPadding;
  let titleBoxHeight;
  let chartAreaPaddingTop;
  let chartAreaPaddingBottom;
  let bottomAxisTitleSize;
  let topAxisTitleSize;
  let legendHeight;
  let legendPaddingTop;
  let legendTop;
  let chartTop;
  let chartBottom;
  let chartContainerHeight;
  let topAxisTitleTop;
  let horizAxisTitle;
  let maxBars;
  let barCount;
  let heightMultiplier;
  let height;
  let width;
  let missingCols = [];
  let originalRun = true;
  let inputCols = [];
  let optCols = [];
  let i;
  let error;
  let columnSummaryArray;
  let dateCols;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.queryID === void 0 && $$bindings.queryID && queryID !== void 0)
    $$bindings.queryID(queryID);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.tooltipTitle === void 0 && $$bindings.tooltipTitle && tooltipTitle !== void 0)
    $$bindings.tooltipTitle(tooltipTitle);
  if ($$props.showAllXAxisLabels === void 0 && $$bindings.showAllXAxisLabels && showAllXAxisLabels !== void 0)
    $$bindings.showAllXAxisLabels(showAllXAxisLabels);
  if ($$props.printEchartsConfig === void 0 && $$bindings.printEchartsConfig && printEchartsConfig !== void 0)
    $$bindings.printEchartsConfig(printEchartsConfig);
  if ($$props.swapXY === void 0 && $$bindings.swapXY && swapXY !== void 0)
    $$bindings.swapXY(swapXY);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.chartType === void 0 && $$bindings.chartType && chartType2 !== void 0)
    $$bindings.chartType(chartType2);
  if ($$props.bubble === void 0 && $$bindings.bubble && bubble !== void 0)
    $$bindings.bubble(bubble);
  if ($$props.hist === void 0 && $$bindings.hist && hist !== void 0)
    $$bindings.hist(hist);
  if ($$props.boxplot === void 0 && $$bindings.boxplot && boxplot !== void 0)
    $$bindings.boxplot(boxplot);
  if ($$props.xType === void 0 && $$bindings.xType && xType !== void 0)
    $$bindings.xType(xType);
  if ($$props.xAxisTitle === void 0 && $$bindings.xAxisTitle && xAxisTitle !== void 0)
    $$bindings.xAxisTitle(xAxisTitle);
  if ($$props.xBaseline === void 0 && $$bindings.xBaseline && xBaseline !== void 0)
    $$bindings.xBaseline(xBaseline);
  if ($$props.xTickMarks === void 0 && $$bindings.xTickMarks && xTickMarks !== void 0)
    $$bindings.xTickMarks(xTickMarks);
  if ($$props.xGridlines === void 0 && $$bindings.xGridlines && xGridlines !== void 0)
    $$bindings.xGridlines(xGridlines);
  if ($$props.xAxisLabels === void 0 && $$bindings.xAxisLabels && xAxisLabels !== void 0)
    $$bindings.xAxisLabels(xAxisLabels);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.xFmt === void 0 && $$bindings.xFmt && xFmt !== void 0)
    $$bindings.xFmt(xFmt);
  if ($$props.xMin === void 0 && $$bindings.xMin && xMin !== void 0)
    $$bindings.xMin(xMin);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  if ($$props.yLog === void 0 && $$bindings.yLog && yLog !== void 0)
    $$bindings.yLog(yLog);
  if ($$props.yType === void 0 && $$bindings.yType && yType !== void 0)
    $$bindings.yType(yType);
  if ($$props.yLogBase === void 0 && $$bindings.yLogBase && yLogBase !== void 0)
    $$bindings.yLogBase(yLogBase);
  if ($$props.yAxisTitle === void 0 && $$bindings.yAxisTitle && yAxisTitle !== void 0)
    $$bindings.yAxisTitle(yAxisTitle);
  if ($$props.yBaseline === void 0 && $$bindings.yBaseline && yBaseline !== void 0)
    $$bindings.yBaseline(yBaseline);
  if ($$props.yTickMarks === void 0 && $$bindings.yTickMarks && yTickMarks !== void 0)
    $$bindings.yTickMarks(yTickMarks);
  if ($$props.yGridlines === void 0 && $$bindings.yGridlines && yGridlines !== void 0)
    $$bindings.yGridlines(yGridlines);
  if ($$props.yAxisLabels === void 0 && $$bindings.yAxisLabels && yAxisLabels !== void 0)
    $$bindings.yAxisLabels(yAxisLabels);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.yFmt === void 0 && $$bindings.yFmt && yFmt !== void 0)
    $$bindings.yFmt(yFmt);
  if ($$props.yAxisColor === void 0 && $$bindings.yAxisColor && yAxisColor !== void 0)
    $$bindings.yAxisColor(yAxisColor);
  if ($$props.y2AxisTitle === void 0 && $$bindings.y2AxisTitle && y2AxisTitle !== void 0)
    $$bindings.y2AxisTitle(y2AxisTitle);
  if ($$props.y2Baseline === void 0 && $$bindings.y2Baseline && y2Baseline !== void 0)
    $$bindings.y2Baseline(y2Baseline);
  if ($$props.y2TickMarks === void 0 && $$bindings.y2TickMarks && y2TickMarks !== void 0)
    $$bindings.y2TickMarks(y2TickMarks);
  if ($$props.y2Gridlines === void 0 && $$bindings.y2Gridlines && y2Gridlines !== void 0)
    $$bindings.y2Gridlines(y2Gridlines);
  if ($$props.y2AxisLabels === void 0 && $$bindings.y2AxisLabels && y2AxisLabels !== void 0)
    $$bindings.y2AxisLabels(y2AxisLabels);
  if ($$props.y2Min === void 0 && $$bindings.y2Min && y2Min !== void 0)
    $$bindings.y2Min(y2Min);
  if ($$props.y2Max === void 0 && $$bindings.y2Max && y2Max !== void 0)
    $$bindings.y2Max(y2Max);
  if ($$props.y2Scale === void 0 && $$bindings.y2Scale && y2Scale !== void 0)
    $$bindings.y2Scale(y2Scale);
  if ($$props.y2Fmt === void 0 && $$bindings.y2Fmt && y2Fmt !== void 0)
    $$bindings.y2Fmt(y2Fmt);
  if ($$props.y2AxisColor === void 0 && $$bindings.y2AxisColor && y2AxisColor !== void 0)
    $$bindings.y2AxisColor(y2AxisColor);
  if ($$props.sizeFmt === void 0 && $$bindings.sizeFmt && sizeFmt !== void 0)
    $$bindings.sizeFmt(sizeFmt);
  if ($$props.colorPalette === void 0 && $$bindings.colorPalette && colorPalette !== void 0)
    $$bindings.colorPalette(colorPalette);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.echartsOptions === void 0 && $$bindings.echartsOptions && echartsOptions !== void 0)
    $$bindings.echartsOptions(echartsOptions);
  if ($$props.seriesOptions === void 0 && $$bindings.seriesOptions && seriesOptions !== void 0)
    $$bindings.seriesOptions(seriesOptions);
  if ($$props.seriesColors === void 0 && $$bindings.seriesColors && seriesColors !== void 0)
    $$bindings.seriesColors(seriesColors);
  if ($$props.stackType === void 0 && $$bindings.stackType && stackType !== void 0)
    $$bindings.stackType(stackType);
  if ($$props.stacked100 === void 0 && $$bindings.stacked100 && stacked100 !== void 0)
    $$bindings.stacked100(stacked100);
  if ($$props.chartAreaHeight === void 0 && $$bindings.chartAreaHeight && chartAreaHeight !== void 0)
    $$bindings.chartAreaHeight(chartAreaHeight);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  {
    setContext(propKey, props);
  }
  {
    setContext(configKey, config);
  }
  printEchartsConfig = printEchartsConfig === "true" || printEchartsConfig === true;
  {
    if (swapXY === "true" || swapXY === true) {
      swapXY = true;
    } else {
      swapXY = false;
    }
  }
  xBaseline = xBaseline === "true" || xBaseline === true;
  xTickMarks = xTickMarks === "true" || xTickMarks === true;
  xGridlines = xGridlines === "true" || xGridlines === true;
  xAxisLabels = xAxisLabels === "true" || xAxisLabels === true;
  sort = sort === "true" || sort === true;
  yLog = yLog === "true" || yLog === true;
  yBaseline = yBaseline === "true" || yBaseline === true;
  yTickMarks = yTickMarks === "true" || yTickMarks === true;
  yGridlines = yGridlines === "true" || yGridlines === true;
  yAxisLabels = yAxisLabels === "true" || yAxisLabels === true;
  yScale = yScale === "true" || yScale === true;
  y2Baseline = y2Baseline === "true" || y2Baseline === true;
  y2TickMarks = y2TickMarks === "true" || y2TickMarks === true;
  y2Gridlines = y2Gridlines === "true" || y2Gridlines === true;
  y2AxisLabels = y2AxisLabels === "true" || y2AxisLabels === true;
  y2Scale = y2Scale === "true" || y2Scale === true;
  {
    {
      try {
        error = void 0;
        missingCols = [];
        unusedColumns = [];
        inputCols = [];
        optCols = [];
        uColName = [];
        checkInputs(data);
        columnSummary = getColumnSummary(data);
        columnNames = Object.keys(columnSummary);
        if (!xSet) {
          x = columnNames[0];
        }
        if (!ySet) {
          uColNames = columnNames.filter(function(col) {
            return ![x, series, size2].includes(col);
          });
          for (let i2 = 0; i2 < uColNames.length; i2++) {
            uColName = uColNames[i2];
            uColType = columnSummary[uColName].type;
            if (uColType === "number") {
              unusedColumns.push(uColName);
            }
          }
          y = unusedColumns.length > 1 ? unusedColumns : unusedColumns[0];
        }
        if (bubble) {
          reqCols = { x, y, size: size2 };
        } else if (hist) {
          reqCols = { x };
        } else if (boxplot) {
          reqCols = {};
        } else {
          reqCols = { x, y };
        }
        for (let property in reqCols) {
          if (reqCols[property] == null) {
            missingCols.push(property);
          }
        }
        if (missingCols.length === 1) {
          throw Error(new Intl.ListFormat().format(missingCols) + " is required");
        } else if (missingCols.length > 1) {
          throw Error(new Intl.ListFormat().format(missingCols) + " are required");
        }
        if (stacked100 === true && y.includes("_pct") && originalRun === false) {
          if (typeof y === "object") {
            for (let i2 = 0; i2 < y.length; i2++) {
              y[i2] = y[i2].replace("_pct", "");
            }
            originalRun = false;
          } else {
            y = y.replace("_pct", "");
            originalRun = false;
          }
        }
        if (x) {
          inputCols.push(x);
        }
        if (y) {
          if (typeof y === "object") {
            for (i = 0; i < y.length; i++) {
              inputCols.push(y[i]);
            }
          } else {
            inputCols.push(y);
          }
        }
        if (y2) {
          if (typeof y2 === "object") {
            for (i = 0; i < y2.length; i++) {
              inputCols.push(y2[i]);
            }
          } else {
            inputCols.push(y2);
          }
        }
        if (size2) {
          inputCols.push(size2);
        }
        if (series) {
          optCols.push(series);
        }
        if (tooltipTitle) {
          optCols.push(tooltipTitle);
        }
        checkInputs(data, inputCols, optCols);
        if (stacked100 === true) {
          data = getStackPercentages(data, x, y);
          if (typeof y === "object") {
            for (let i2 = 0; i2 < y.length; i2++) {
              y[i2] = y[i2] + "_pct";
            }
            originalRun = false;
          } else {
            y = y + "_pct";
            originalRun = false;
          }
          columnSummary = getColumnSummary(data);
        }
        xDataType = columnSummary[x].type;
        switch (xDataType) {
          case "number":
            xDataType = "value";
            break;
          case "string":
            xDataType = "category";
            break;
          case "date":
            xDataType = "time";
            break;
          default:
            break;
        }
        xType = xType === "category" ? "category" : xDataType;
        if (swapXY && xType !== "category") {
          throw Error("Horizontal charts do not support a value or time-based x-axis. You can either change your SQL query to output string values or set swapXY=false.");
        }
        if (swapXY && y2) {
          throw Error("Horizontal charts do not support a secondary y-axis. You can either set swapXY=false or remove the y2 prop from your chart.");
        }
        if (swapXY) {
          xType = "category";
        }
        xMismatch = xDataType === "value" && xType === "category";
        data = sort ? xDataType === "category" ? getSortedData(data, y, false) : getSortedData(data, x, true) : data;
        if (xDataType === "time") {
          data = getSortedData(data, x, true);
        }
        columnSummaryArray = getColumnSummary(data, "array");
        dateCols = columnSummaryArray.filter((d) => d.type === "date");
        dateCols = dateCols.map((d) => d.id);
        if (dateCols.length > 0) {
          for (let i2 = 0; i2 < dateCols.length; i2++) {
            data = standardizeDateColumn(data, dateCols[i2]);
          }
        }
        if (xFmt) {
          xFormat = getFormatObjectFromString(xFmt, columnSummary[x].format?.valueType);
        } else {
          xFormat = columnSummary[x].format;
        }
        if (!y) {
          yFormat = "str";
        } else {
          if (yFmt) {
            if (typeof y === "object") {
              yFormat = getFormatObjectFromString(yFmt, columnSummary[y[0]].format?.valueType);
            } else {
              yFormat = getFormatObjectFromString(yFmt, columnSummary[y].format?.valueType);
            }
          } else {
            if (typeof y === "object") {
              yFormat = columnSummary[y[0]].format;
            } else {
              yFormat = columnSummary[y].format;
            }
          }
        }
        if (y2) {
          if (y2Fmt) {
            if (typeof y2 === "object") {
              y2Format = getFormatObjectFromString(y2Fmt, columnSummary[y2[0]].format?.valueType);
            } else {
              y2Format = getFormatObjectFromString(y2Fmt, columnSummary[y2].format?.valueType);
            }
          } else {
            if (typeof y2 === "object") {
              y2Format = columnSummary[y2[0]].format;
            } else {
              y2Format = columnSummary[y2].format;
            }
          }
        }
        if (size2) {
          if (sizeFmt) {
            sizeFormat = getFormatObjectFromString(sizeFmt, columnSummary[size2].format?.valueType);
          } else {
            sizeFormat = columnSummary[size2].format;
          }
        }
        xUnitSummary = columnSummary[x].columnUnitSummary;
        if (y) {
          if (typeof y === "object") {
            yUnitSummary = columnSummary[y[0]].columnUnitSummary;
          } else {
            yUnitSummary = columnSummary[y].columnUnitSummary;
          }
        }
        if (y2) {
          if (typeof y2 === "object") {
            y2UnitSummary = columnSummary[y2[0]].columnUnitSummary;
          } else {
            y2UnitSummary = columnSummary[y2].columnUnitSummary;
          }
        }
        xAxisTitle = xAxisTitle === "true" ? formatTitle(x, xFormat) : xAxisTitle === "false" ? "" : xAxisTitle;
        yAxisTitle = yAxisTitle === "true" ? typeof y === "object" ? "" : formatTitle(y, yFormat) : yAxisTitle === "false" ? "" : yAxisTitle;
        y2AxisTitle = y2AxisTitle === "true" ? typeof y2 === "object" ? "" : formatTitle(y2, y2Format) : y2AxisTitle === "false" ? "" : y2AxisTitle;
        let yCount = typeof y === "object" ? y.length : 1;
        let seriesCount = series ? getDistinctCount(data, series) : 1;
        let ySeriesCount = yCount * seriesCount;
        let y2Count = typeof y2 === "object" ? y2.length : y2 ? 1 : 0;
        let totalSeriesCount = ySeriesCount + y2Count;
        if (legend !== void 0) {
          legend = legend === "true" || legend === true;
        }
        legend = legend ?? totalSeriesCount > 1;
        if (stacked100 === true && yLog === true) {
          throw Error("Log axis cannot be used in a 100% stacked chart");
        } else if (stackType === "stacked" && totalSeriesCount > 1 && yLog === true) {
          throw Error("Log axis cannot be used in a stacked chart");
        }
        let minYValue;
        if (typeof y === "object") {
          minYValue = columnSummary[y[0]].columnUnitSummary.min;
          for (let i2 = 0; i2 < y.length; i2++) {
            if (columnSummary[y[i2]].columnUnitSummary.min < minYValue) {
              minYValue = columnSummary[y[i2]].columnUnitSummary.min;
            }
          }
        } else if (y) {
          minYValue = columnSummary[y].columnUnitSummary.min;
        }
        if (yLog === true && minYValue <= 0 && minYValue !== null) {
          throw Error("Log axis cannot display values less than or equal to zero");
        }
        props.update((d) => {
          return {
            ...d,
            data,
            x,
            y,
            y2,
            series,
            swapXY,
            sort,
            xType,
            xFormat,
            yFormat,
            y2Format,
            sizeFormat,
            xMismatch,
            size: size2,
            yMin,
            y2Min,
            columnSummary,
            xAxisTitle,
            yAxisTitle,
            y2AxisTitle,
            tooltipTitle,
            chartAreaHeight,
            chartType: chartType2,
            yCount,
            y2Count
          };
        });
        xDistinct = getDistinctValues(data, x);
        let secondaryAxis;
        if (swapXY) {
          horizAxisConfig = {
            type: yType,
            logBase: yLogBase,
            position: "top",
            axisLabel: {
              show: yAxisLabels,
              hideOverlap: true,
              showMaxLabel: true,
              formatter(value) {
                return formatAxisValue(value, yFormat, yUnitSummary);
              },
              margin: 4
            },
            min: yMin,
            max: yMax,
            scale: yScale,
            splitLine: { show: yGridlines },
            axisLine: { show: yBaseline, onZero: false },
            axisTick: { show: yTickMarks },
            boundaryGap: false,
            z: 2
          };
        } else {
          horizAxisConfig = {
            type: xType,
            min: xMin,
            max: xMax,
            splitLine: { show: xGridlines },
            axisLine: { show: xBaseline },
            axisTick: { show: xTickMarks },
            axisLabel: {
              show: xAxisLabels,
              hideOverlap: true,
              showMaxLabel: xType === "category" || xType === "value",
              // max label for ECharts' time axis is a stub - default for that is false
              formatter: xType === "time" || xType === "category" ? false : function(value) {
                return formatAxisValue(value, xFormat, xUnitSummary);
              },
              margin: 6
            },
            scale: true,
            z: 2
          };
        }
        if (swapXY) {
          verticalAxisConfig = {
            type: xType,
            inverse: "true",
            splitLine: { show: xGridlines },
            axisLine: { show: xBaseline },
            axisTick: { show: xTickMarks },
            axisLabel: { show: xAxisLabels, hideOverlap: true },
            // formatter:
            //     function(value){
            //         return formatAxisValue(value, xFormat, xUnitSummary)
            //     },
            scale: true,
            min: xMin,
            max: xMax,
            z: 2
          };
        } else {
          verticalAxisConfig = {
            type: yType,
            logBase: yLogBase,
            splitLine: { show: yGridlines },
            axisLine: { show: yBaseline, onZero: false },
            axisTick: { show: yTickMarks },
            axisLabel: {
              show: yAxisLabels,
              hideOverlap: true,
              margin: 4,
              formatter(value) {
                return formatAxisValue(value, yFormat, yUnitSummary);
              },
              color: y2 ? yAxisColor === "true" ? colorPalette ? colorPalette[0] : chartColours[0] : yAxisColor !== "false" ? yAxisColor : void 0 : void 0
            },
            name: yAxisTitle,
            nameLocation: "end",
            nameTextStyle: {
              align: "left",
              verticalAlign: "top",
              padding: [0, 5, 0, 0],
              color: y2 ? yAxisColor === "true" ? colorPalette ? colorPalette[0] : chartColours[0] : yAxisColor !== "false" ? yAxisColor : void 0 : void 0
            },
            nameGap: 6,
            min: yMin,
            max: yMax,
            scale: yScale,
            boundaryGap: ["0%", "1%"],
            z: 2
          };
          secondaryAxis = {
            type: "value",
            show: false,
            alignTicks: true,
            splitLine: { show: y2Gridlines },
            axisLine: { show: y2Baseline, onZero: false },
            axisTick: { show: y2TickMarks },
            axisLabel: {
              show: y2AxisLabels,
              hideOverlap: true,
              margin: 4,
              formatter(value) {
                return formatAxisValue(value, y2Format, y2UnitSummary);
              },
              color: y2AxisColor === "true" ? colorPalette ? colorPalette[ySeriesCount] : chartColours[ySeriesCount] : y2AxisColor !== "false" ? y2AxisColor : void 0
            },
            name: y2AxisTitle,
            nameLocation: "end",
            nameTextStyle: {
              align: "right",
              verticalAlign: "top",
              padding: [0, 0, 0, 5],
              color: y2AxisColor === "true" ? colorPalette ? colorPalette[ySeriesCount] : chartColours[ySeriesCount] : y2AxisColor !== "false" ? y2AxisColor : void 0
            },
            nameGap: 6,
            min: y2Min,
            max: y2Max,
            scale: y2Scale,
            boundaryGap: ["0%", "1%"],
            z: 2
          };
          verticalAxisConfig = [verticalAxisConfig, secondaryAxis];
        }
        if (chartAreaHeight) {
          chartAreaHeight = Number(chartAreaHeight);
          if (isNaN(chartAreaHeight)) {
            throw Error("chartAreaHeight must be a number");
          } else if (chartAreaHeight <= 0) {
            throw Error("chartAreaHeight must be a positive number");
          }
        } else {
          chartAreaHeight = 180;
        }
        hasTitle = title ? true : false;
        hasSubtitle = subtitle ? true : false;
        hasLegend = legend * (series !== null || typeof y === "object" && y.length > 1);
        hasTopAxisTitle = yAxisTitle !== "" && swapXY;
        hasBottomAxisTitle = xAxisTitle !== "" && !swapXY;
        titleFontSize = 15;
        subtitleFontSize = 13;
        titleBoxPadding = 6 * hasSubtitle;
        titleBoxHeight = hasTitle * titleFontSize + hasSubtitle * subtitleFontSize + titleBoxPadding * Math.max(hasTitle, hasSubtitle);
        chartAreaPaddingTop = 10;
        chartAreaPaddingBottom = 8;
        bottomAxisTitleSize = 14;
        topAxisTitleSize = 14 + 0;
        legendHeight = 15;
        legendHeight = legendHeight * hasLegend;
        legendPaddingTop = 7;
        legendPaddingTop = legendPaddingTop * Math.max(hasTitle, hasSubtitle);
        legendTop = titleBoxHeight + legendPaddingTop;
        chartTop = legendTop + legendHeight + topAxisTitleSize * hasTopAxisTitle + chartAreaPaddingTop;
        chartBottom = hasBottomAxisTitle * bottomAxisTitleSize + chartAreaPaddingBottom;
        maxBars = 8;
        heightMultiplier = 1;
        if (swapXY) {
          barCount = xDistinct.length;
          heightMultiplier = Math.max(1, barCount / maxBars);
        }
        chartContainerHeight = chartAreaHeight * heightMultiplier + chartTop + chartBottom;
        topAxisTitleTop = legendTop + legendHeight + 7;
        height = chartContainerHeight + "px";
        width = "100%";
        horizAxisTitle = swapXY ? yAxisTitle : xAxisTitle;
        if (horizAxisTitle !== "") {
          horizAxisTitle = horizAxisTitle + " →";
        }
        horizAxisTitleConfig = {
          id: "horiz-axis-title",
          type: "text",
          style: {
            text: horizAxisTitle,
            textAlign: "right",
            fill: uiColours.grey500
          },
          cursor: "auto",
          // Positioning (if swapXY, top right; otherwise bottom right)
          right: swapXY ? "2%" : "3%",
          top: swapXY ? topAxisTitleTop : null,
          bottom: swapXY ? null : "2%"
        };
        chartConfig = {
          title: {
            text: title,
            subtext: subtitle,
            subtextStyle: { width }
          },
          tooltip: {
            trigger: "axis",
            // formatter function is overridden in ScatterPlot, BubbleChart, and Histogram
            formatter(params) {
              let output;
              let xVal;
              let yVal;
              let yCol;
              if (totalSeriesCount > 1) {
                xVal = params[0].value[swapXY ? 1 : 0];
                output = `<span id="tooltip" style='font-weight: 600;'>${formatValue(xVal, xFormat)}</span>`;
                for (let i2 = params.length - 1; i2 >= 0; i2--) {
                  if (params[i2].seriesName !== "stackTotal") {
                    yVal = params[i2].value[swapXY ? 0 : 1];
                    output = output + `<br> ${params[i2].marker} ${params[i2].seriesName} <span style='float:right; margin-left: 10px;'>${formatValue(
                      yVal,
                      // Not sure if this will work. Need to check with multi series on both axes
                      // Check if echarts does the order in the same way - y first, then y2
                      getYAxisIndex(params[i2].componentIndex, yCount, y2Count) === 0 ? yFormat : y2Format
                    )}</span>`;
                  }
                }
              } else if (xType === "value") {
                xVal = params[0].value[swapXY ? 1 : 0];
                yVal = params[0].value[swapXY ? 0 : 1];
                yCol = params[0].seriesName;
                output = `<span id="tooltip" style='font-weight: 600;'>${formatTitle(x, xFormat)}: </span><span style='float:right; margin-left: 10px;'>${formatValue(xVal, xFormat)}</span><br/><span style='font-weight: 600;'>${formatTitle(yCol, yFormat)}: </span><span style='float:right; margin-left: 10px;'>${formatValue(yVal, yFormat)}</span>`;
              } else {
                xVal = params[0].value[swapXY ? 1 : 0];
                yVal = params[0].value[swapXY ? 0 : 1];
                yCol = params[0].seriesName;
                output = `<span id="tooltip" style='font-weight: 600;'>${formatValue(xVal, xFormat)}</span><br/><span>${formatTitle(yCol, yFormat)}: </span><span style='float:right; margin-left: 10px;'>${formatValue(yVal, yFormat)}</span>`;
              }
              return output;
            },
            confine: true,
            axisPointer: {
              // Use axis to trigger tooltip
              type: "shadow"
              // 'shadow' as default; can also be 'line' or 'shadow'
            },
            extraCssText: "box-shadow: 0 3px 6px rgba(0,0,0,.15); box-shadow: 0 2px 4px rgba(0,0,0,.12); z-index: 1;",
            order: "valueDesc"
          },
          legend: {
            show: legend,
            type: "scroll",
            top: legendTop,
            padding: [0, 0, 0, 0],
            data: []
          },
          grid: {
            left: "0.5%",
            right: swapXY ? "4%" : "3%",
            bottom: chartBottom,
            top: chartTop,
            containLabel: true
          },
          xAxis: horizAxisConfig,
          yAxis: verticalAxisConfig,
          series: [],
          animation: true,
          graphic: horizAxisTitleConfig,
          color: colorPalette
        };
        config.update(() => {
          return chartConfig;
        });
        console.log(" ***  -from _Chart.svelte");
      } catch (e) {
        error = e.message;
        const setTextRed = "\x1B[31m%s\x1B[0m";
        console.error(setTextRed, `Error in ${chartType2}: ${e.message}`);
        if (strictBuild) {
          throw error;
        }
        props.update((d) => {
          return { ...d, error };
        });
      }
    }
  }
  $$unsubscribe_config();
  return `${!error ? `${slots.default ? slots.default({}) : ``} ${!$config.series.length ? `${validate_component(EmptyChart, "EmptyChart").$$render($$result, { emptySet: "pass" }, {}, {})}` : `${validate_component(ECharts, "ECharts").$$render(
    $$result,
    {
      config: $config,
      height,
      width,
      data,
      queryID,
      evidenceChartTitle: title,
      showAllXAxisLabels,
      swapXY,
      echartsOptions,
      seriesOptions,
      printEchartsConfig,
      renderer,
      connectGroup,
      seriesColors
    },
    {},
    {}
  )}`}` : `${validate_component(ErrorChart, "ErrorChart").$$render($$result, { error, chartType: chartType2 }, {}, {})}`}`;
});
const { Object: Object_1$3 } = globals;
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data } = $$props;
  const initialHash = Query.isQuery(data) ? data.hash : void 0;
  let isInitial = data?.hash === initialHash;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  let queryID = data?.id;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  isInitial = data?.hash === initialHash;
  spreadProps = {
    ...Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0))
  };
  return ` ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data }, {}, {
    error: ({ loaded }) => {
      return `${validate_component(ErrorChart, "ErrorChart").$$render(
        $$result,
        {
          slot: "error",
          chartType: spreadProps.chartType,
          error: loaded.error.message
        },
        {},
        {}
      )}`;
    },
    empty: () => {
      return `${validate_component(EmptyChart, "EmptyChart").$$render(
        $$result,
        {
          slot: "empty",
          emptyMessage,
          emptySet,
          chartType: spreadProps.chartType,
          isInitial
        },
        {},
        {}
      )}`;
    },
    default: ({ loaded }) => {
      return `${validate_component(Chart, "Chart").$$render(
        $$result,
        Object_1$3.assign(
          {},
          spreadProps,
          {
            data: Query.isQuery(loaded) ? Array.from(loaded) : loaded
          },
          { queryID }
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
function getSeriesConfig(data, x, y, series, swapXY, baseConfig, name, xMismatch, columnSummary, size2 = void 0, tooltipTitle = void 0, y2 = void 0) {
  function generateTempConfig(seriesData2, seriesName2, yAxisIndex2, baseConfig2) {
    let tempConfig2 = {
      name: seriesName2,
      data: seriesData2,
      yAxisIndex: yAxisIndex2
    };
    tempConfig2 = { ...baseConfig2, ...tempConfig2 };
    return tempConfig2;
  }
  let i;
  let j;
  let tempConfig;
  let seriesConfig = [];
  let seriesData;
  let filteredData;
  let seriesName;
  let seriesDistinct;
  let yAxisIndex;
  function combineVariables(variable1, variable2) {
    const array = [];
    function isUndefined(value) {
      return typeof value === "undefined";
    }
    function addValuesToArray(value, source) {
      if (!isUndefined(value)) {
        if (Array.isArray(value)) {
          value.forEach((item) => array.push([item, source]));
        } else {
          array.push([value, source]);
        }
      }
    }
    addValuesToArray(variable1, 0);
    addValuesToArray(variable2, 1);
    return array;
  }
  let yList = combineVariables(y, y2);
  if (series != null && yList.length === 1) {
    seriesDistinct = getDistinctValues(data, series);
    for (i = 0; i < seriesDistinct.length; i++) {
      filteredData = data.filter((d) => d[series] === seriesDistinct[i]);
      if (swapXY) {
        seriesData = filteredData.map((d) => [d[yList[0][0]], xMismatch ? d[x].toString() : d[x]]);
      } else {
        seriesData = filteredData.map((d) => [xMismatch ? d[x].toString() : d[x], d[yList[0][0]]]);
      }
      if (size2) {
        let sizeData = filteredData.map((d) => d[size2]);
        seriesData.forEach((item, index) => item.push(sizeData[index]));
      }
      if (tooltipTitle) {
        let tooltipData = filteredData.map((d) => d[tooltipTitle]);
        seriesData.forEach((item, index) => item.push(tooltipData[index]));
      }
      seriesName = seriesDistinct[i] ?? "null";
      yAxisIndex = yList[0][1];
      tempConfig = generateTempConfig(seriesData, seriesName, yAxisIndex, baseConfig);
      seriesConfig.push(tempConfig);
    }
  }
  if (series != null && yList.length > 1) {
    seriesDistinct = getDistinctValues(data, series);
    for (i = 0; i < seriesDistinct.length; i++) {
      filteredData = data.filter((d) => d[series] === seriesDistinct[i]);
      for (j = 0; j < yList.length; j++) {
        if (swapXY) {
          seriesData = filteredData.map((d) => [
            d[yList[j][0]],
            xMismatch ? d[x].toString() : d[x]
          ]);
        } else {
          seriesData = filteredData.map((d) => [
            xMismatch ? d[x].toString() : d[x],
            d[yList[j][0]]
          ]);
        }
        if (size2) {
          let sizeData = filteredData.map((d) => d[size2]);
          seriesData.forEach((item, index) => item.push(sizeData[index]));
        }
        if (tooltipTitle) {
          let tooltipData = filteredData.map((d) => d[tooltipTitle]);
          seriesData.forEach((item, index) => item.push(tooltipData[index]));
        }
        seriesName = (seriesDistinct[i] ?? "null") + " - " + columnSummary[yList[j][0]].title;
        yAxisIndex = yList[j][1];
        tempConfig = generateTempConfig(seriesData, seriesName, yAxisIndex, baseConfig);
        seriesConfig.push(tempConfig);
      }
    }
  }
  if (series == null && yList.length > 1) {
    for (i = 0; i < yList.length; i++) {
      if (swapXY) {
        seriesData = data.map((d) => [d[yList[i][0]], xMismatch ? d[x].toString() : d[x]]);
      } else {
        seriesData = data.map((d) => [xMismatch ? d[x].toString() : d[x], d[yList[i][0]]]);
      }
      if (size2) {
        let sizeData = data.map((d) => d[size2]);
        seriesData.forEach((item, index) => item.push(sizeData[index]));
      }
      if (tooltipTitle) {
        let tooltipData = data.map((d) => d[tooltipTitle]);
        seriesData.forEach((item, index) => item.push(tooltipData[index]));
      }
      seriesName = columnSummary[yList[i][0]].title;
      yAxisIndex = yList[i][1];
      tempConfig = generateTempConfig(seriesData, seriesName, yAxisIndex, baseConfig);
      seriesConfig.push(tempConfig);
    }
  }
  if (series == null && yList.length === 1) {
    if (swapXY) {
      seriesData = data.map((d) => [d[yList[0][0]], xMismatch ? d[x].toString() : d[x]]);
    } else {
      seriesData = data.map((d) => [xMismatch ? d[x].toString() : d[x], d[yList[0][0]]]);
    }
    if (size2) {
      let sizeData = data.map((d) => d[size2]);
      seriesData.forEach((item, index) => item.push(sizeData[index]));
    }
    if (tooltipTitle) {
      let tooltipData = data.map((d) => d[tooltipTitle]);
      seriesData.forEach((item, index) => item.push(tooltipData[index]));
    }
    seriesName = columnSummary[yList[0][0]].title;
    yAxisIndex = yList[0][1];
    tempConfig = generateTempConfig(seriesData, seriesName, yAxisIndex, baseConfig);
    seriesConfig.push(tempConfig);
  }
  return seriesConfig;
}
function replaceNulls(data, columns) {
  let colObj = {};
  if (typeof columns === "object") {
    for (let i = 0; i < columns.length; i++) {
      colObj[columns[i]] = 0;
    }
  } else {
    colObj[columns] = 0;
  }
  data = tidy(data, replaceNully(colObj));
  return data;
}
function getDiffs(arr) {
  let diffs = [];
  for (let i = 1; i < arr.length; i++)
    diffs.push(arr[i] - arr[i - 1]);
  return diffs;
}
function gcd(a, b) {
  if (typeof a !== "number" || isNaN(a))
    a = 0;
  if (typeof b !== "number" || isNaN(b))
    b = 0;
  a = Math.abs(a);
  b = Math.abs(b);
  if (b <= 0.01) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
function extent(values, valueof) {
  if (!Array.isArray(values))
    throw new TypeError("Cannot calculate extent of non-array value.");
  let min;
  let max;
  {
    for (const value of values) {
      if (typeof value !== "number")
        continue;
      if (min === void 0) {
        if (value >= value)
          min = max = value;
      } else {
        if (min > value)
          min = value;
        if (max < value)
          max = value;
      }
    }
  }
  return [min, max];
}
function vectorSeq(values, period) {
  let [min, max] = extent(values);
  const sequence = [];
  let value = min;
  while (value <= max) {
    sequence.push(Math.round((value + Number.EPSILON) * 1e8) / 1e8);
    value += period;
  }
  return sequence;
}
function findInterval(arr) {
  if (arr.length <= 1) {
    return;
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  arr = arr.map(function(x) {
    return x * 1e8;
  });
  arr = getDiffs(arr);
  let interval = arr.reduce((a, b) => gcd(a, b)) / 1e8;
  interval = Math.round((interval + Number.EPSILON) * 1e8) / 1e8;
  return interval;
}
function getCompletedData(_data, x, y, series, nullsZero = false, fillX = false) {
  let xIsDate = false;
  const data = _data.map(
    (d) => Object.assign({}, d, {
      [x]: d[x] instanceof Date ? (xIsDate = true, d[x].toISOString()) : d[x]
    })
  ).filter((d) => d[x] !== void 0 && d[x] !== null);
  const groups = Array.from(data).reduce((a, v) => {
    if (v[x] instanceof Date) {
      v[x] = v[x].toISOString();
      xIsDate = true;
    }
    if (series) {
      if (!a[v[series] ?? "null"])
        a[v[series] ?? "null"] = [];
      a[v[series] ?? "null"].push(v);
    } else {
      if (!a.default)
        a.default = [];
      a.default.push(v);
    }
    return a;
  }, {});
  const expandKeys = {};
  let xDistinct;
  const exampleX = data.find((item) => item && item[x] !== null && item[x] !== void 0)?.[x] ?? null;
  switch (typeof exampleX) {
    case "object":
      if (exampleX === null) {
        throw new Error(
          `Column '${x}' is entirely null. Column must contain at least one non-null value.`
        );
      } else {
        throw new Error("Unexpected object property, expected string, date, or number");
      }
    case "number":
      xDistinct = getDistinctValues(data, x);
      if (fillX) {
        const interval = findInterval(xDistinct);
        expandKeys[x] = vectorSeq(xDistinct, interval);
      }
      break;
    case "string":
      xDistinct = getDistinctValues(data, x);
      expandKeys[x] = xDistinct;
      break;
  }
  const output = [];
  for (const value of Object.values(groups)) {
    const nullySpec = series ? { [series]: null } : {};
    if (nullsZero) {
      if (y instanceof Array) {
        for (let i = 0; i < y.length; i++) {
          nullySpec[y[i]] = 0;
        }
      } else {
        nullySpec[y] = 0;
      }
    } else {
      if (y instanceof Array) {
        for (let i = 0; i < y.length; i++) {
          nullySpec[y[i]] = null;
        }
      } else {
        nullySpec[y] = null;
      }
    }
    if (series) {
      expandKeys[series] = series;
    }
    const tidyFuncs = [];
    if (Object.keys(expandKeys).length === 0) {
      tidyFuncs.push(complete([x], nullySpec));
    } else {
      tidyFuncs.push(complete(expandKeys, nullySpec));
    }
    output.push(tidy(value, ...tidyFuncs));
  }
  if (xIsDate)
    return output.flat().map((r) => ({ ...r, [x]: new Date(r[x]) }));
  return output.flat();
}
const Area = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let x;
  let swapXY;
  let yFormat;
  let xType;
  let xMismatch;
  let columnSummary;
  let baseConfig;
  let seriesConfig;
  let $props, $$unsubscribe_props;
  let props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let config = getContext(configKey);
  let { y = void 0 } = $$props;
  const ySet = y ? true : false;
  let { series = void 0 } = $$props;
  const seriesSet = series ? true : false;
  let { options = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { type = "stacked" } = $$props;
  let { fillColor = void 0 } = $$props;
  let { lineColor = void 0 } = $$props;
  let { fillOpacity = void 0 } = $$props;
  let { line = true } = $$props;
  let { markers = false } = $$props;
  let { markerShape = "circle" } = $$props;
  let { markerSize = 8 } = $$props;
  let { handleMissing = "gap" } = $$props;
  let { step = false } = $$props;
  let { stepPosition = "end" } = $$props;
  let { labels = false } = $$props;
  let { labelSize = 11 } = $$props;
  let { labelPosition = "top" } = $$props;
  let { labelColor = void 0 } = $$props;
  let { labelFmt = void 0 } = $$props;
  let labelFormat;
  if (labelFmt) {
    labelFormat = getFormatObjectFromString(labelFmt);
  }
  let { showAllLabels = false } = $$props;
  let stackName;
  const labelPositions = {
    above: "top",
    below: "bottom",
    middle: "inside"
  };
  const swapXYLabelPositions = {
    above: "right",
    below: "left",
    middle: "inside"
  };
  let defaultLabelPosition = swapXY ? "right" : "top";
  console.log(" --- test logging---");
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.fillOpacity === void 0 && $$bindings.fillOpacity && fillOpacity !== void 0)
    $$bindings.fillOpacity(fillOpacity);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.markers === void 0 && $$bindings.markers && markers !== void 0)
    $$bindings.markers(markers);
  if ($$props.markerShape === void 0 && $$bindings.markerShape && markerShape !== void 0)
    $$bindings.markerShape(markerShape);
  if ($$props.markerSize === void 0 && $$bindings.markerSize && markerSize !== void 0)
    $$bindings.markerSize(markerSize);
  if ($$props.handleMissing === void 0 && $$bindings.handleMissing && handleMissing !== void 0)
    $$bindings.handleMissing(handleMissing);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.stepPosition === void 0 && $$bindings.stepPosition && stepPosition !== void 0)
    $$bindings.stepPosition(stepPosition);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.labelSize === void 0 && $$bindings.labelSize && labelSize !== void 0)
    $$bindings.labelSize(labelSize);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.labelFmt === void 0 && $$bindings.labelFmt && labelFmt !== void 0)
    $$bindings.labelFmt(labelFmt);
  if ($$props.showAllLabels === void 0 && $$bindings.showAllLabels && showAllLabels !== void 0)
    $$bindings.showAllLabels(showAllLabels);
  line = line === "true" || line === true;
  markers = markers === "true" || markers === true;
  step = step === "true" || step === true;
  labels = labels === "true" || labels === true;
  data = $props.data;
  x = $props.x;
  y = ySet ? y : $props.y;
  swapXY = $props.swapXY;
  yFormat = $props.yFormat;
  xType = $props.xType;
  xMismatch = $props.xMismatch;
  columnSummary = $props.columnSummary;
  series = seriesSet ? series : $props.series;
  {
    if (!series && typeof y !== "object") {
      name = name ?? formatTitle(y, columnSummary[y].title);
    } else {
      stackName = "area";
      data = getCompletedData(data, x, y, series, false, xType === "value");
      data = replaceNulls(data, y);
      xType = xType === "value" ? "category" : xType;
    }
  }
  {
    if (handleMissing === "zero") {
      data = replaceNulls(data, y);
    }
  }
  labelPosition = (swapXY ? swapXYLabelPositions[labelPosition] : labelPositions[labelPosition]) ?? defaultLabelPosition;
  baseConfig = {
    type: "line",
    stack: stackName,
    areaStyle: { color: fillColor, opacity: fillOpacity },
    connectNulls: handleMissing === "connect",
    lineStyle: { width: line ? 1 : 0, color: lineColor },
    label: {
      show: labels,
      formatter(params) {
        return params.value[swapXY ? 0 : 1] === 0 ? "" : formatValue(params.value[swapXY ? 0 : 1], labelFormat ?? yFormat);
      },
      fontSize: labelSize,
      color: labelColor,
      position: labelPosition,
      padding: 3
    },
    labelLayout: {
      hideOverlap: showAllLabels ? false : true
    },
    emphasis: { focus: "series" },
    showSymbol: labels || markers,
    symbol: markerShape,
    symbolSize: labels && !markers ? 0 : markerSize,
    step: step ? stepPosition : false
  };
  seriesConfig = getSeriesConfig(data, x, y, series, swapXY, baseConfig, name, xMismatch, columnSummary);
  {
    config.update((d) => {
      d.series.push(...seriesConfig);
      d.legend.data.push(...seriesConfig.map((d2) => d2.name.toString()));
      return d;
    });
  }
  {
    if (options) {
      config.update((d) => {
        return { ...d, ...options };
      });
    }
  }
  $$unsubscribe_props();
  return ``;
});
let chartType$3 = "Area Chart";
const AreaChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { series = void 0 } = $$props;
  let { xType = void 0 } = $$props;
  let { yLog = void 0 } = $$props;
  let { yLogBase = void 0 } = $$props;
  let { yFmt = void 0 } = $$props;
  let { xFmt = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { subtitle = void 0 } = $$props;
  let { legend = void 0 } = $$props;
  let { xAxisTitle = void 0 } = $$props;
  let { yAxisTitle = void 0 } = $$props;
  let { xGridlines = void 0 } = $$props;
  let { yGridlines = void 0 } = $$props;
  let { xAxisLabels = void 0 } = $$props;
  let { yAxisLabels = void 0 } = $$props;
  let { xBaseline = void 0 } = $$props;
  let { yBaseline = void 0 } = $$props;
  let { xTickMarks = void 0 } = $$props;
  let { yTickMarks = void 0 } = $$props;
  let { yMin = void 0 } = $$props;
  let { yMax = void 0 } = $$props;
  let { yScale = void 0 } = $$props;
  let { line = void 0 } = $$props;
  let { fillColor = void 0 } = $$props;
  let { lineColor = void 0 } = $$props;
  let { fillOpacity = void 0 } = $$props;
  let { chartAreaHeight = void 0 } = $$props;
  let { markers = void 0 } = $$props;
  let { markerShape = void 0 } = $$props;
  let { markerSize = void 0 } = $$props;
  let { handleMissing = void 0 } = $$props;
  let { step = void 0 } = $$props;
  let { stepPosition = void 0 } = $$props;
  let { sort = void 0 } = $$props;
  let { type = "stacked" } = $$props;
  let stacked100 = type === "stacked100";
  let { colorPalette = void 0 } = $$props;
  let { labels = void 0 } = $$props;
  let { labelSize = void 0 } = $$props;
  let { labelPosition = void 0 } = $$props;
  let { labelColor = void 0 } = $$props;
  let { labelFmt = void 0 } = $$props;
  let { showAllLabels = void 0 } = $$props;
  let { echartsOptions = void 0 } = $$props;
  let { seriesOptions = void 0 } = $$props;
  let { printEchartsConfig = false } = $$props;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  let { renderer = void 0 } = $$props;
  let { seriesColors = void 0 } = $$props;
  let { connectGroup = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.xType === void 0 && $$bindings.xType && xType !== void 0)
    $$bindings.xType(xType);
  if ($$props.yLog === void 0 && $$bindings.yLog && yLog !== void 0)
    $$bindings.yLog(yLog);
  if ($$props.yLogBase === void 0 && $$bindings.yLogBase && yLogBase !== void 0)
    $$bindings.yLogBase(yLogBase);
  if ($$props.yFmt === void 0 && $$bindings.yFmt && yFmt !== void 0)
    $$bindings.yFmt(yFmt);
  if ($$props.xFmt === void 0 && $$bindings.xFmt && xFmt !== void 0)
    $$bindings.xFmt(xFmt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.xAxisTitle === void 0 && $$bindings.xAxisTitle && xAxisTitle !== void 0)
    $$bindings.xAxisTitle(xAxisTitle);
  if ($$props.yAxisTitle === void 0 && $$bindings.yAxisTitle && yAxisTitle !== void 0)
    $$bindings.yAxisTitle(yAxisTitle);
  if ($$props.xGridlines === void 0 && $$bindings.xGridlines && xGridlines !== void 0)
    $$bindings.xGridlines(xGridlines);
  if ($$props.yGridlines === void 0 && $$bindings.yGridlines && yGridlines !== void 0)
    $$bindings.yGridlines(yGridlines);
  if ($$props.xAxisLabels === void 0 && $$bindings.xAxisLabels && xAxisLabels !== void 0)
    $$bindings.xAxisLabels(xAxisLabels);
  if ($$props.yAxisLabels === void 0 && $$bindings.yAxisLabels && yAxisLabels !== void 0)
    $$bindings.yAxisLabels(yAxisLabels);
  if ($$props.xBaseline === void 0 && $$bindings.xBaseline && xBaseline !== void 0)
    $$bindings.xBaseline(xBaseline);
  if ($$props.yBaseline === void 0 && $$bindings.yBaseline && yBaseline !== void 0)
    $$bindings.yBaseline(yBaseline);
  if ($$props.xTickMarks === void 0 && $$bindings.xTickMarks && xTickMarks !== void 0)
    $$bindings.xTickMarks(xTickMarks);
  if ($$props.yTickMarks === void 0 && $$bindings.yTickMarks && yTickMarks !== void 0)
    $$bindings.yTickMarks(yTickMarks);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.fillOpacity === void 0 && $$bindings.fillOpacity && fillOpacity !== void 0)
    $$bindings.fillOpacity(fillOpacity);
  if ($$props.chartAreaHeight === void 0 && $$bindings.chartAreaHeight && chartAreaHeight !== void 0)
    $$bindings.chartAreaHeight(chartAreaHeight);
  if ($$props.markers === void 0 && $$bindings.markers && markers !== void 0)
    $$bindings.markers(markers);
  if ($$props.markerShape === void 0 && $$bindings.markerShape && markerShape !== void 0)
    $$bindings.markerShape(markerShape);
  if ($$props.markerSize === void 0 && $$bindings.markerSize && markerSize !== void 0)
    $$bindings.markerSize(markerSize);
  if ($$props.handleMissing === void 0 && $$bindings.handleMissing && handleMissing !== void 0)
    $$bindings.handleMissing(handleMissing);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.stepPosition === void 0 && $$bindings.stepPosition && stepPosition !== void 0)
    $$bindings.stepPosition(stepPosition);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.colorPalette === void 0 && $$bindings.colorPalette && colorPalette !== void 0)
    $$bindings.colorPalette(colorPalette);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.labelSize === void 0 && $$bindings.labelSize && labelSize !== void 0)
    $$bindings.labelSize(labelSize);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.labelFmt === void 0 && $$bindings.labelFmt && labelFmt !== void 0)
    $$bindings.labelFmt(labelFmt);
  if ($$props.showAllLabels === void 0 && $$bindings.showAllLabels && showAllLabels !== void 0)
    $$bindings.showAllLabels(showAllLabels);
  if ($$props.echartsOptions === void 0 && $$bindings.echartsOptions && echartsOptions !== void 0)
    $$bindings.echartsOptions(echartsOptions);
  if ($$props.seriesOptions === void 0 && $$bindings.seriesOptions && seriesOptions !== void 0)
    $$bindings.seriesOptions(seriesOptions);
  if ($$props.printEchartsConfig === void 0 && $$bindings.printEchartsConfig && printEchartsConfig !== void 0)
    $$bindings.printEchartsConfig(printEchartsConfig);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.seriesColors === void 0 && $$bindings.seriesColors && seriesColors !== void 0)
    $$bindings.seriesColors(seriesColors);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  return `${validate_component(Chart_1, "Chart").$$render(
    $$result,
    {
      data,
      x,
      y,
      xFmt,
      yFmt,
      series,
      xType,
      yLog,
      yLogBase,
      legend,
      xAxisTitle,
      yAxisTitle,
      xGridlines,
      yGridlines,
      xAxisLabels,
      yAxisLabels,
      xBaseline,
      yBaseline,
      xTickMarks,
      yTickMarks,
      yMin,
      yMax,
      yScale,
      title,
      subtitle,
      chartType: chartType$3,
      sort,
      stackType: type,
      stacked100,
      chartAreaHeight,
      colorPalette,
      echartsOptions,
      seriesOptions,
      printEchartsConfig,
      emptySet,
      emptyMessage,
      renderer,
      connectGroup,
      seriesColors
    },
    {},
    {
      default: () => {
        return `${validate_component(Area, "Area").$$render(
          $$result,
          {
            line,
            fillColor,
            lineColor,
            fillOpacity,
            handleMissing,
            type,
            step,
            stepPosition,
            markers,
            markerShape,
            markerSize,
            labels,
            labelSize,
            labelPosition,
            labelColor,
            labelFmt,
            showAllLabels
          },
          {},
          {}
        )} ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
function getStackedData(data, groupCol, valueCol) {
  let stackedData = tidy(data, groupBy(groupCol, [summarizeAt(valueCol, sum)]));
  if (typeof valueCol === "object") {
    for (let i = 0; i < stackedData.length; i++) {
      stackedData[i].stackTotal = 0;
      for (let j = 0; j < valueCol.length; j++) {
        stackedData[i].stackTotal = stackedData[i].stackTotal + stackedData[i][valueCol[j]];
      }
    }
  }
  return stackedData;
}
let barMaxWidth = 60;
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let config;
  let data;
  let x;
  let yFormat;
  let y2Format;
  let yCount;
  let y2Count;
  let swapXY;
  let xType;
  let xMismatch;
  let columnSummary;
  let sort;
  let baseConfig;
  let seriesConfig;
  let $props, $$unsubscribe_props = noop, $$subscribe_props = () => ($$unsubscribe_props(), $$unsubscribe_props = subscribe(props, ($$value) => $props = $$value), props);
  let { y = void 0 } = $$props;
  const ySet = y ? true : false;
  let { y2 = void 0 } = $$props;
  const y2Set = y2 ? true : false;
  let { series = void 0 } = $$props;
  const seriesSet = series ? true : false;
  let { options = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { type = "stacked" } = $$props;
  let { stackName = void 0 } = $$props;
  let { fillColor = void 0 } = $$props;
  let { fillOpacity = void 0 } = $$props;
  let { outlineColor = void 0 } = $$props;
  let { outlineWidth = void 0 } = $$props;
  let { labels = false } = $$props;
  let { labelSize = 11 } = $$props;
  let { labelPosition = void 0 } = $$props;
  let { labelColor = void 0 } = $$props;
  let { labelFmt = void 0 } = $$props;
  let labelFormat;
  if (labelFmt) {
    labelFormat = getFormatObjectFromString(labelFmt);
  }
  let { yLabelFmt = void 0 } = $$props;
  let yLabelFormat;
  if (yLabelFmt) {
    yLabelFormat = getFormatObjectFromString(yLabelFmt);
  }
  let { y2LabelFmt = void 0 } = $$props;
  let y2LabelFormat;
  if (y2LabelFmt) {
    y2LabelFormat = getFormatObjectFromString(y2LabelFmt);
  }
  let { y2SeriesType = "bar" } = $$props;
  let { stackTotalLabel = true } = $$props;
  let { showAllLabels = false } = $$props;
  let stackedData;
  let sortOrder;
  let defaultLabelPosition;
  let stackTotalSeries;
  const labelPositions = { outside: "top", inside: "inside" };
  const swapXYLabelPositions = { outside: "right", inside: "inside" };
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.stackName === void 0 && $$bindings.stackName && stackName !== void 0)
    $$bindings.stackName(stackName);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.fillOpacity === void 0 && $$bindings.fillOpacity && fillOpacity !== void 0)
    $$bindings.fillOpacity(fillOpacity);
  if ($$props.outlineColor === void 0 && $$bindings.outlineColor && outlineColor !== void 0)
    $$bindings.outlineColor(outlineColor);
  if ($$props.outlineWidth === void 0 && $$bindings.outlineWidth && outlineWidth !== void 0)
    $$bindings.outlineWidth(outlineWidth);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.labelSize === void 0 && $$bindings.labelSize && labelSize !== void 0)
    $$bindings.labelSize(labelSize);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.labelFmt === void 0 && $$bindings.labelFmt && labelFmt !== void 0)
    $$bindings.labelFmt(labelFmt);
  if ($$props.yLabelFmt === void 0 && $$bindings.yLabelFmt && yLabelFmt !== void 0)
    $$bindings.yLabelFmt(yLabelFmt);
  if ($$props.y2LabelFmt === void 0 && $$bindings.y2LabelFmt && y2LabelFmt !== void 0)
    $$bindings.y2LabelFmt(y2LabelFmt);
  if ($$props.y2SeriesType === void 0 && $$bindings.y2SeriesType && y2SeriesType !== void 0)
    $$bindings.y2SeriesType(y2SeriesType);
  if ($$props.stackTotalLabel === void 0 && $$bindings.stackTotalLabel && stackTotalLabel !== void 0)
    $$bindings.stackTotalLabel(stackTotalLabel);
  if ($$props.showAllLabels === void 0 && $$bindings.showAllLabels && showAllLabels !== void 0)
    $$bindings.showAllLabels(showAllLabels);
  $$subscribe_props(props = getContext(propKey));
  config = getContext(configKey);
  labels = labels === "true" || labels === true;
  stackTotalLabel = stackTotalLabel === "true" || stackTotalLabel === true;
  data = $props.data;
  x = $props.x;
  y = ySet ? y : $props.y;
  y2 = y2Set ? y2 : $props.y2;
  yFormat = $props.yFormat;
  y2Format = $props.y2Format;
  yCount = $props.yCount;
  y2Count = $props.y2Count;
  swapXY = $props.swapXY;
  xType = $props.xType;
  xMismatch = $props.xMismatch;
  columnSummary = $props.columnSummary;
  sort = $props.sort;
  series = seriesSet ? series : $props.series;
  {
    if (!series && typeof y !== "object") {
      name = name ?? formatTitle(y, columnSummary[y].title);
      if (swapXY && xType !== "category") {
        data = getCompletedData(data, x, y, series, true, xType !== "time");
        xType = "category";
      }
      stackName = "stack1";
      defaultLabelPosition = swapXY ? "right" : "top";
    } else {
      if (sort === true && xType === "category") {
        stackedData = getStackedData(data, x, y);
        if (typeof y === "object") {
          stackedData = getSortedData(stackedData, "stackTotal", false);
        } else {
          stackedData = getSortedData(stackedData, y, false);
        }
        sortOrder = stackedData.map((d) => d[x]);
        data = [...data].sort(function(a, b) {
          return sortOrder.indexOf(a[x]) - sortOrder.indexOf(b[x]);
        });
      }
      if (swapXY || (xType === "value" || xType === "category") && type.includes("stacked")) {
        data = getCompletedData(data, x, y, series, true, xType === "value");
        xType = "category";
      } else if (xType === "time" && type.includes("stacked")) {
        data = getCompletedData(data, x, y, series, true, true);
      }
      if (type.includes("stacked")) {
        stackName = stackName ?? "stack1";
        defaultLabelPosition = "inside";
      } else {
        stackName = void 0;
        defaultLabelPosition = swapXY ? "right" : "top";
      }
    }
  }
  {
    if (type === "stacked") {
      stackTotalSeries = getStackedData(data, x, y);
    }
  }
  labelPosition = (swapXY ? swapXYLabelPositions[labelPosition] : labelPositions[labelPosition]) ?? defaultLabelPosition;
  baseConfig = {
    type: "bar",
    stack: stackName,
    label: {
      show: labels,
      // formatter: function (params) {
      // 	let output;
      // 	output =
      // 		params.value[swapXY ? 0 : 1] === 0
      // 			? ''
      // 			: formatValue(params.value[swapXY ? 0 : 1], labelFormat ?? yFormat);
      // 	return output;
      // },
      formatter(params) {
        return params.value[swapXY ? 0 : 1] === 0 ? "" : formatValue(params.value[swapXY ? 0 : 1], [
          yLabelFormat ?? labelFormat ?? yFormat,
          y2LabelFormat ?? labelFormat ?? y2Format
        ][getYAxisIndex(params.componentIndex, yCount, y2Count)]);
      },
      position: labelPosition,
      fontSize: labelSize,
      color: labelColor
    },
    labelLayout: {
      hideOverlap: showAllLabels ? false : true
    },
    emphasis: { focus: "series" },
    barMaxWidth,
    itemStyle: {
      color: fillColor,
      opacity: fillOpacity,
      borderColor: outlineColor,
      borderWidth: outlineWidth
    }
  };
  seriesConfig = getSeriesConfig(data, x, y, series, swapXY, baseConfig, name, xMismatch, columnSummary, void 0, void 0, y2);
  {
    config.update((d) => {
      d.series.push(...seriesConfig);
      d.legend.data.push(...seriesConfig.map((d2) => d2.name.toString()));
      if (labels === true && type === "stacked" && typeof y === "object" | series !== void 0 && stackTotalLabel === true && series !== x) {
        d.series.push({
          type: "bar",
          stack: stackName,
          name: "stackTotal",
          color: "none",
          data: stackTotalSeries.map((d2) => [
            swapXY ? 0 : xMismatch ? d2[x].toString() : d2[x],
            swapXY ? xMismatch ? d2[x].toString() : d2[x] : 0
          ]),
          label: {
            show: true,
            position: swapXY ? "right" : "top",
            formatter(params) {
              let sum2 = 0;
              seriesConfig.forEach((s) => {
                sum2 += s.data[params.dataIndex][swapXY ? 0 : 1];
              });
              return sum2 === 0 ? "" : formatValue(sum2, labelFormat ?? yFormat);
            },
            fontWeight: "bold",
            fontSize: labelSize,
            padding: swapXY ? [0, 0, 0, 5] : void 0
          }
        });
        d.legend.selectedMode = false;
      }
      return d;
    });
  }
  $$unsubscribe_props();
  return ``;
});
const BarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { y2 = void 0 } = $$props;
  let { series = void 0 } = $$props;
  let { xType = void 0 } = $$props;
  let { yLog = void 0 } = $$props;
  let { yLogBase = void 0 } = $$props;
  let { y2SeriesType = void 0 } = $$props;
  let { yFmt = void 0 } = $$props;
  let { y2Fmt = void 0 } = $$props;
  let { xFmt = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { subtitle = void 0 } = $$props;
  let { legend = void 0 } = $$props;
  let { xAxisTitle = void 0 } = $$props;
  let { yAxisTitle = y2 ? "true" : void 0 } = $$props;
  let { y2AxisTitle = y2 ? "true" : void 0 } = $$props;
  let { xGridlines = void 0 } = $$props;
  let { yGridlines = void 0 } = $$props;
  let { y2Gridlines = void 0 } = $$props;
  let { xAxisLabels = void 0 } = $$props;
  let { yAxisLabels = void 0 } = $$props;
  let { y2AxisLabels = void 0 } = $$props;
  let { xBaseline = void 0 } = $$props;
  let { yBaseline = void 0 } = $$props;
  let { y2Baseline = void 0 } = $$props;
  let { xTickMarks = void 0 } = $$props;
  let { yTickMarks = void 0 } = $$props;
  let { y2TickMarks = void 0 } = $$props;
  let { yMin = void 0 } = $$props;
  let { yMax = void 0 } = $$props;
  let { yScale = void 0 } = $$props;
  let { y2Min = void 0 } = $$props;
  let { y2Max = void 0 } = $$props;
  let { y2Scale = void 0 } = $$props;
  let { swapXY = false } = $$props;
  let xEvidenceType = void 0;
  let { showAllXAxisLabels } = $$props;
  const showAllXaxisLabelsManuallySet = typeof showAllXAxisLabels !== "undefined";
  let { type = "stacked" } = $$props;
  let stacked100 = type === "stacked100";
  let { fillColor = void 0 } = $$props;
  let { fillOpacity = void 0 } = $$props;
  let { outlineColor = void 0 } = $$props;
  let { outlineWidth = void 0 } = $$props;
  let { chartAreaHeight = void 0 } = $$props;
  let { sort = void 0 } = $$props;
  let { colorPalette = void 0 } = $$props;
  let { labels = void 0 } = $$props;
  let { labelSize = void 0 } = $$props;
  let { labelPosition = void 0 } = $$props;
  let { labelColor = void 0 } = $$props;
  let { labelFmt = void 0 } = $$props;
  let { yLabelFmt = void 0 } = $$props;
  let { y2LabelFmt = void 0 } = $$props;
  let { stackTotalLabel = void 0 } = $$props;
  let { showAllLabels = void 0 } = $$props;
  let { yAxisColor = void 0 } = $$props;
  let { y2AxisColor = void 0 } = $$props;
  let { echartsOptions = void 0 } = $$props;
  let { seriesOptions = void 0 } = $$props;
  let { printEchartsConfig = false } = $$props;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  let { renderer = void 0 } = $$props;
  let { seriesColors = void 0 } = $$props;
  let { connectGroup = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.xType === void 0 && $$bindings.xType && xType !== void 0)
    $$bindings.xType(xType);
  if ($$props.yLog === void 0 && $$bindings.yLog && yLog !== void 0)
    $$bindings.yLog(yLog);
  if ($$props.yLogBase === void 0 && $$bindings.yLogBase && yLogBase !== void 0)
    $$bindings.yLogBase(yLogBase);
  if ($$props.y2SeriesType === void 0 && $$bindings.y2SeriesType && y2SeriesType !== void 0)
    $$bindings.y2SeriesType(y2SeriesType);
  if ($$props.yFmt === void 0 && $$bindings.yFmt && yFmt !== void 0)
    $$bindings.yFmt(yFmt);
  if ($$props.y2Fmt === void 0 && $$bindings.y2Fmt && y2Fmt !== void 0)
    $$bindings.y2Fmt(y2Fmt);
  if ($$props.xFmt === void 0 && $$bindings.xFmt && xFmt !== void 0)
    $$bindings.xFmt(xFmt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.xAxisTitle === void 0 && $$bindings.xAxisTitle && xAxisTitle !== void 0)
    $$bindings.xAxisTitle(xAxisTitle);
  if ($$props.yAxisTitle === void 0 && $$bindings.yAxisTitle && yAxisTitle !== void 0)
    $$bindings.yAxisTitle(yAxisTitle);
  if ($$props.y2AxisTitle === void 0 && $$bindings.y2AxisTitle && y2AxisTitle !== void 0)
    $$bindings.y2AxisTitle(y2AxisTitle);
  if ($$props.xGridlines === void 0 && $$bindings.xGridlines && xGridlines !== void 0)
    $$bindings.xGridlines(xGridlines);
  if ($$props.yGridlines === void 0 && $$bindings.yGridlines && yGridlines !== void 0)
    $$bindings.yGridlines(yGridlines);
  if ($$props.y2Gridlines === void 0 && $$bindings.y2Gridlines && y2Gridlines !== void 0)
    $$bindings.y2Gridlines(y2Gridlines);
  if ($$props.xAxisLabels === void 0 && $$bindings.xAxisLabels && xAxisLabels !== void 0)
    $$bindings.xAxisLabels(xAxisLabels);
  if ($$props.yAxisLabels === void 0 && $$bindings.yAxisLabels && yAxisLabels !== void 0)
    $$bindings.yAxisLabels(yAxisLabels);
  if ($$props.y2AxisLabels === void 0 && $$bindings.y2AxisLabels && y2AxisLabels !== void 0)
    $$bindings.y2AxisLabels(y2AxisLabels);
  if ($$props.xBaseline === void 0 && $$bindings.xBaseline && xBaseline !== void 0)
    $$bindings.xBaseline(xBaseline);
  if ($$props.yBaseline === void 0 && $$bindings.yBaseline && yBaseline !== void 0)
    $$bindings.yBaseline(yBaseline);
  if ($$props.y2Baseline === void 0 && $$bindings.y2Baseline && y2Baseline !== void 0)
    $$bindings.y2Baseline(y2Baseline);
  if ($$props.xTickMarks === void 0 && $$bindings.xTickMarks && xTickMarks !== void 0)
    $$bindings.xTickMarks(xTickMarks);
  if ($$props.yTickMarks === void 0 && $$bindings.yTickMarks && yTickMarks !== void 0)
    $$bindings.yTickMarks(yTickMarks);
  if ($$props.y2TickMarks === void 0 && $$bindings.y2TickMarks && y2TickMarks !== void 0)
    $$bindings.y2TickMarks(y2TickMarks);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.y2Min === void 0 && $$bindings.y2Min && y2Min !== void 0)
    $$bindings.y2Min(y2Min);
  if ($$props.y2Max === void 0 && $$bindings.y2Max && y2Max !== void 0)
    $$bindings.y2Max(y2Max);
  if ($$props.y2Scale === void 0 && $$bindings.y2Scale && y2Scale !== void 0)
    $$bindings.y2Scale(y2Scale);
  if ($$props.swapXY === void 0 && $$bindings.swapXY && swapXY !== void 0)
    $$bindings.swapXY(swapXY);
  if ($$props.showAllXAxisLabels === void 0 && $$bindings.showAllXAxisLabels && showAllXAxisLabels !== void 0)
    $$bindings.showAllXAxisLabels(showAllXAxisLabels);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.fillOpacity === void 0 && $$bindings.fillOpacity && fillOpacity !== void 0)
    $$bindings.fillOpacity(fillOpacity);
  if ($$props.outlineColor === void 0 && $$bindings.outlineColor && outlineColor !== void 0)
    $$bindings.outlineColor(outlineColor);
  if ($$props.outlineWidth === void 0 && $$bindings.outlineWidth && outlineWidth !== void 0)
    $$bindings.outlineWidth(outlineWidth);
  if ($$props.chartAreaHeight === void 0 && $$bindings.chartAreaHeight && chartAreaHeight !== void 0)
    $$bindings.chartAreaHeight(chartAreaHeight);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.colorPalette === void 0 && $$bindings.colorPalette && colorPalette !== void 0)
    $$bindings.colorPalette(colorPalette);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.labelSize === void 0 && $$bindings.labelSize && labelSize !== void 0)
    $$bindings.labelSize(labelSize);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.labelFmt === void 0 && $$bindings.labelFmt && labelFmt !== void 0)
    $$bindings.labelFmt(labelFmt);
  if ($$props.yLabelFmt === void 0 && $$bindings.yLabelFmt && yLabelFmt !== void 0)
    $$bindings.yLabelFmt(yLabelFmt);
  if ($$props.y2LabelFmt === void 0 && $$bindings.y2LabelFmt && y2LabelFmt !== void 0)
    $$bindings.y2LabelFmt(y2LabelFmt);
  if ($$props.stackTotalLabel === void 0 && $$bindings.stackTotalLabel && stackTotalLabel !== void 0)
    $$bindings.stackTotalLabel(stackTotalLabel);
  if ($$props.showAllLabels === void 0 && $$bindings.showAllLabels && showAllLabels !== void 0)
    $$bindings.showAllLabels(showAllLabels);
  if ($$props.yAxisColor === void 0 && $$bindings.yAxisColor && yAxisColor !== void 0)
    $$bindings.yAxisColor(yAxisColor);
  if ($$props.y2AxisColor === void 0 && $$bindings.y2AxisColor && y2AxisColor !== void 0)
    $$bindings.y2AxisColor(y2AxisColor);
  if ($$props.echartsOptions === void 0 && $$bindings.echartsOptions && echartsOptions !== void 0)
    $$bindings.echartsOptions(echartsOptions);
  if ($$props.seriesOptions === void 0 && $$bindings.seriesOptions && seriesOptions !== void 0)
    $$bindings.seriesOptions(seriesOptions);
  if ($$props.printEchartsConfig === void 0 && $$bindings.printEchartsConfig && printEchartsConfig !== void 0)
    $$bindings.printEchartsConfig(printEchartsConfig);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.seriesColors === void 0 && $$bindings.seriesColors && seriesColors !== void 0)
    $$bindings.seriesColors(seriesColors);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  {
    if (!showAllXaxisLabelsManuallySet)
      showAllXAxisLabels = xType === "category" || xEvidenceType === "string";
  }
  {
    if (typeof showAllXAxisLabels === "string")
      showAllXAxisLabels = showAllXAxisLabels?.toLowerCase() === "true";
  }
  {
    {
      if (swapXY === "true" || swapXY === true) {
        swapXY = true;
      } else {
        swapXY = false;
      }
    }
  }
  return `${validate_component(Chart_1, "Chart").$$render(
    $$result,
    {
      data,
      x,
      y,
      y2,
      xFmt,
      yFmt,
      y2Fmt,
      series,
      xType,
      yLog,
      yLogBase,
      legend,
      xAxisTitle,
      yAxisTitle,
      y2AxisTitle,
      xGridlines,
      yGridlines,
      y2Gridlines,
      xAxisLabels,
      yAxisLabels,
      y2AxisLabels,
      xBaseline,
      yBaseline,
      y2Baseline,
      xTickMarks,
      yTickMarks,
      y2TickMarks,
      yAxisColor,
      y2AxisColor,
      yMin,
      yMax,
      yScale,
      y2Min,
      y2Max,
      y2Scale,
      swapXY,
      title,
      subtitle,
      chartType: "Bar Chart",
      stackType: type,
      sort,
      stacked100,
      chartAreaHeight,
      showAllXAxisLabels,
      colorPalette,
      echartsOptions,
      seriesOptions,
      printEchartsConfig,
      emptySet,
      emptyMessage,
      renderer,
      connectGroup,
      seriesColors
    },
    {},
    {
      default: () => {
        return `${validate_component(Bar, "Bar").$$render(
          $$result,
          {
            type,
            fillColor,
            fillOpacity,
            outlineColor,
            outlineWidth,
            labels,
            labelSize,
            labelPosition,
            labelColor,
            labelFmt,
            yLabelFmt,
            y2LabelFmt,
            stackTotalLabel,
            showAllLabels,
            y2SeriesType
          },
          {},
          {}
        )} ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const css = {
  code: ".placeholder.svelte-11norvs.svelte-11norvs{display:inline;position:relative;cursor:help;color:blue}.placeholder.svelte-11norvs .error-msg.svelte-11norvs{display:none;position:absolute;top:-5px;left:105%;max-width:400px;min-width:150px;padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:1px;color:white;font-size:0.8em;background-color:var(--grey-900);opacity:0.85;border-radius:6px;z-index:1;word-wrap:break-word}.placeholder.svelte-11norvs:hover .error-msg.svelte-11norvs{display:inline}",
  map: `{"version":3,"file":"_Value.svelte","sources":["_Value.svelte"],"sourcesContent":["<script>\\n\\timport getColumnSummary from '@evidence-dev/component-utilities/getColumnSummary';\\n\\timport {\\n\\t\\tformatValue,\\n\\t\\tgetFormatObjectFromString\\n\\t} from '@evidence-dev/component-utilities/formatting';\\n\\timport { convertColumnToDate } from '@evidence-dev/component-utilities/dateParsing';\\n\\timport checkInputs from '@evidence-dev/component-utilities/checkInputs';\\n\\timport ValueError from './ValueError.svelte';\\n\\timport { strictBuild } from '@evidence-dev/component-utilities/chartContext';\\n\\n\\t// Passing in value from dataset:\\n\\texport let data = null;\\n\\texport let row = 0;\\n\\texport let column = null;\\n\\n\\t// alias for column\\n\\texport let value = null;\\n\\t$: if (value && column) {\\n\\t\\tconsole.warn(\\n\\t\\t\\t'Both \\"value\\" and \\"column\\" were supplied as props to Value. \\"value\\" will be ignored.'\\n\\t\\t);\\n\\t}\\n\\t$: column = column ?? value;\\n\\n\\t// Placeholder text when data not supplied:\\n\\texport let placeholder = null;\\n\\n\\t// Value Formatting:\\n\\texport let fmt = undefined;\\n\\tlet format_object;\\n\\n\\tlet selected_value;\\n\\tlet error;\\n\\n\\tlet columnSummary;\\n\\t$: {\\n\\t\\ttry {\\n\\t\\t\\terror = undefined;\\n\\t\\t\\tif (!placeholder) {\\n\\t\\t\\t\\tif (data) {\\n\\t\\t\\t\\t\\tif (typeof data == 'string') {\\n\\t\\t\\t\\t\\t\\tthrow Error(\`Received: data=\${data}, expected: data={\${data}}\`);\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tif (!Array.isArray(data)) {\\n\\t\\t\\t\\t\\t\\t// Accept bare objects\\n\\t\\t\\t\\t\\t\\tdata = [data];\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tif (isNaN(row)) {\\n\\t\\t\\t\\t\\t\\tthrow Error('row must be a number (row=' + row + ')');\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\ttry {\\n\\t\\t\\t\\t\\t\\tObject.keys(data[row])[0];\\n\\t\\t\\t\\t\\t} catch (e) {\\n\\t\\t\\t\\t\\t\\tthrow Error('Row ' + row + ' does not exist in the dataset');\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tcolumn = column ?? Object.keys(data[row])[0];\\n\\n\\t\\t\\t\\t\\tcheckInputs(data, [column]);\\n\\n\\t\\t\\t\\t\\tcolumnSummary = getColumnSummary(data, 'array');\\n\\n\\t\\t\\t\\t\\tconst dateCols = columnSummary\\n\\t\\t\\t\\t\\t\\t.filter((d) => d.type === 'date' && !(data[0]?.[d.id] instanceof Date))\\n\\t\\t\\t\\t\\t\\t.map((d) => d.id);\\n\\n\\t\\t\\t\\t\\tfor (let i = 0; i < dateCols.length; i++) {\\n\\t\\t\\t\\t\\t\\tdata = convertColumnToDate(data, dateCols[i]);\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tselected_value = data[row][column];\\n\\t\\t\\t\\t\\tcolumnSummary = columnSummary.filter((d) => d.id === column);\\n\\t\\t\\t\\t\\tif (fmt) {\\n\\t\\t\\t\\t\\t\\tformat_object = getFormatObjectFromString(fmt, columnSummary[0].format?.valueType);\\n\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\tformat_object = columnSummary[0].format;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tthrow Error(\\n\\t\\t\\t\\t\\t\\t'No data provided. If you referenced a query result, check that the name is correct.'\\n\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t} catch (e) {\\n\\t\\t\\terror = e.message;\\n\\t\\t\\tconst setTextRed = '\\\\x1b[31m%s\\\\x1b[0m';\\n\\t\\t\\tconsole.error(setTextRed, \`Error in Value: \${error}\`);\\n\\t\\t\\tif (strictBuild) {\\n\\t\\t\\t\\tthrow error;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n{#if placeholder}\\n\\t<span class=\\"placeholder\\"\\n\\t\\t>[{placeholder}]<span class=\\"error-msg\\">Placeholder: no data currently referenced.</span></span\\n\\t>\\n{:else if !error}\\n\\t<span>\\n\\t\\t{formatValue(selected_value, format_object)}\\n\\t</span>\\n{:else}\\n\\t<ValueError {error} />\\n{/if}\\n\\n<style>\\n\\t.placeholder {\\n\\t\\tdisplay: inline;\\n\\t\\tposition: relative;\\n\\t\\tcursor: help;\\n\\t\\tcolor: blue;\\n\\t}\\n\\n\\t.placeholder .error-msg {\\n\\t\\tdisplay: none;\\n\\t\\tposition: absolute;\\n\\t\\ttop: -5px;\\n\\t\\tleft: 105%;\\n\\t\\tmax-width: 400px;\\n\\t\\tmin-width: 150px;\\n\\t\\tpadding-left: 5px;\\n\\t\\tpadding-right: 5px;\\n\\t\\tpadding-top: 2px;\\n\\t\\tpadding-bottom: 1px;\\n\\t\\tcolor: white;\\n\\t\\tfont-size: 0.8em;\\n\\t\\tbackground-color: var(--grey-900);\\n\\t\\topacity: 0.85;\\n\\t\\tborder-radius: 6px;\\n\\t\\tz-index: 1;\\n\\t\\tword-wrap: break-word;\\n\\t}\\n\\n\\t.placeholder:hover .error-msg {\\n\\t\\tdisplay: inline;\\n\\t}</style>\\n"],"names":[],"mappings":"AA+GC,0CAAa,CACZ,OAAO,CAAE,MAAM,CACf,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACR,CAEA,2BAAY,CAAC,yBAAW,CACvB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KAAK,CAChB,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,UACZ,CAEA,2BAAY,MAAM,CAAC,yBAAW,CAC7B,OAAO,CAAE,MACV"}`
};
const Value = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = null } = $$props;
  let { row = 0 } = $$props;
  let { column = null } = $$props;
  let { value = null } = $$props;
  let { placeholder = null } = $$props;
  let { fmt = void 0 } = $$props;
  let format_object;
  let selected_value;
  let error;
  let columnSummary;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  $$result.css.add(css);
  column = column ?? value;
  {
    {
      try {
        error = void 0;
        if (!placeholder) {
          if (data) {
            if (typeof data == "string") {
              throw Error(`Received: data=${data}, expected: data={${data}}`);
            }
            if (!Array.isArray(data)) {
              data = [data];
            }
            if (isNaN(row)) {
              throw Error("row must be a number (row=" + row + ")");
            }
            try {
              Object.keys(data[row])[0];
            } catch (e) {
              throw Error("Row " + row + " does not exist in the dataset");
            }
            column = column ?? Object.keys(data[row])[0];
            checkInputs(data, [column]);
            columnSummary = getColumnSummary(data, "array");
            const dateCols = columnSummary.filter((d) => d.type === "date" && !(data[0]?.[d.id] instanceof Date)).map((d) => d.id);
            for (let i = 0; i < dateCols.length; i++) {
              data = convertColumnToDate(data, dateCols[i]);
            }
            selected_value = data[row][column];
            columnSummary = columnSummary.filter((d) => d.id === column);
            if (fmt) {
              format_object = getFormatObjectFromString(fmt, columnSummary[0].format?.valueType);
            } else {
              format_object = columnSummary[0].format;
            }
          } else {
            throw Error("No data provided. If you referenced a query result, check that the name is correct.");
          }
        }
      } catch (e) {
        error = e.message;
        const setTextRed = "\x1B[31m%s\x1B[0m";
        console.error(setTextRed, `Error in Value: ${error}`);
        if (strictBuild) {
          throw error;
        }
      }
    }
  }
  {
    if (value && column) {
      console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.');
    }
  }
  return `${placeholder ? `<span class="placeholder svelte-11norvs">[${escape(placeholder)}]<span class="error-msg svelte-11norvs" data-svelte-h="svelte-ddarzq">Placeholder: no data currently referenced.</span></span>` : `${!error ? `<span>${escape(formatValue(selected_value, format_object))}</span>` : `${validate_component(ValueError, "ValueError").$$render($$result, { error }, {}, {})}`}`}`;
});
const { Object: Object_1$2 } = globals;
let chartType$2 = "Value";
const Value_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data } = $$props;
  let { column } = $$props;
  let { agg } = $$props;
  const initialHash = Query.isQuery(data) ? data.hash : void 0;
  let isInitial = data?.hash === initialHash;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.agg === void 0 && $$bindings.agg && agg !== void 0)
    $$bindings.agg(agg);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  {
    if (agg) {
      data = data.groupBy(void 0).agg({ [agg]: { col: column, as: column } });
    }
  }
  isInitial = data?.hash === initialHash;
  spreadProps = Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0));
  return ` ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data }, {}, {
    skeleton: () => {
      return `<span slot="skeleton" class="text-gray-500" data-svelte-h="svelte-exu0be">Loading...</span>`;
    },
    empty: () => {
      return `<span slot="empty">${!spreadProps.placeholder ? `${validate_component(EmptyChart, "EmptyChart").$$render(
        $$result,
        {
          emptyMessage,
          emptySet,
          chartType: chartType$2,
          isInitial
        },
        {},
        {}
      )}` : ``}</span>`;
    },
    default: ({ loaded }) => {
      return `${validate_component(Value, "Value").$$render(
        $$result,
        Object_1$2.assign({}, spreadProps, {
          data: Query.isQuery(loaded) ? Array.from(loaded) : loaded
        }),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
function validateSize(height, width) {
  if (height) {
    height = Number(height);
    if (isNaN(height)) {
      throw Error("height must be a number");
    } else if (height <= 0) {
      throw Error("height must be a positive number");
    }
  } else {
    height = 15;
  }
  if (width) {
    width = Number(width);
    if (isNaN(width)) {
      throw Error("width must be a number");
    } else if (width <= 0) {
      throw Error("width must be a positive number");
    }
  } else {
    width = 50;
  }
  return { height, width };
}
function getColumnFormats(data, valueCol, dateCol, valueFmt, dateFmt) {
  const columnSummary = getColumnSummary(data);
  if (columnSummary[dateCol].type !== "date") {
    throw Error("dateCol must be of type date");
  }
  const valueFormat = columnSummary[valueCol].format;
  const dateFormat = columnSummary[dateCol].format;
  const value_format_object = valueFmt ? getFormatObjectFromString(valueFmt) : valueFormat;
  const date_format_object = dateFmt ? getFormatObjectFromString(dateFmt) : dateFormat;
  return { value_format_object, date_format_object };
}
function getSparklineConfig(sparklineData, type, seriesType, color, yScale, value_format_object, date_format_object, height, tooltipBackgroundColor2) {
  return {
    title: {
      subtextStyle: {
        width: "100%"
      }
    },
    tooltip: {
      trigger: "axis",
      position: function(point, params, dom, rect, size2) {
        const horizontalCenter = size2.viewSize[0] / 2 - size2.contentSize[0] / 2;
        const verticalOffset = -11;
        return [horizontalCenter, verticalOffset];
      },
      formatter: function(params) {
        const dataPoint = params[0];
        const valuePart = `<div style="text-align: center; background-color: ${tooltipBackgroundColor2}; border-radius: 1px; padding: 0px 2px; height: 12px;">${formatValue(
          dataPoint.value[1],
          value_format_object
        )}</div>`;
        const transparentGap = `<div style="background-color: transparent; height: ${height - 1.5}px;"></div>`;
        const datePart = `<div style="text-align: center; height: 1em; background-color: transparent; border-radius: 1px; padding: 0px 2px;">${formatValue(
          dataPoint.axisValueLabel,
          date_format_object
        )}</div>`;
        return valuePart + transparentGap + datePart;
      },
      backgroundColor: "transparent",
      // Semi-transparent white background
      borderWidth: 0,
      borderColor: "transparent",
      extraCssText: "box-shadow: none; padding-bottom: 0;",
      // Optional: Add some shadow for depth
      padding: 0,
      textStyle: {
        fontSize: 9
      }
    },
    legend: {
      show: false
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      containLabel: true
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 0.75,
          color: uiColours.grey500
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        hideOverlap: true,
        showMaxLabel: false,
        formatter: false,
        margin: 6
      },
      scale: true,
      z: 2,
      boundaryGap: "2%",
      axisPointer: {
        show: true,
        snap: true,
        type: "line",
        z: 0,
        lineStyle: {
          width: 0.5
        },
        handle: {
          show: false
        },
        label: {
          show: false
        }
      }
    },
    yAxis: [
      {
        type: "value",
        logBase: 10,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
          onZero: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          hideOverlap: true,
          margin: 4
        },
        name: "",
        nameLocation: "end",
        nameTextStyle: {
          align: "left",
          verticalAlign: "top",
          padding: [0, 5, 0, 0]
        },
        nameGap: 6,
        scale: yScale,
        boundaryGap: ["1%", "1%"],
        z: 2
      }
    ],
    series: [
      {
        type: seriesType,
        triggerLineEvent: true,
        label: {
          show: false,
          position: "top",
          padding: 0,
          fontSize: 9
        },
        labelLayout: {
          hideOverlap: true
        },
        connectNulls: false,
        emphasis: {
          disabled: true
        },
        lineStyle: {
          width: 1,
          type: "solid",
          color: color ?? uiColours.grey400
        },
        areaStyle: {
          color: type === "area" ? color ? chroma(color).brighten(1.5).hex() : uiColours.grey300 : "transparent"
        },
        itemStyle: {
          color: color ?? uiColours.grey400
        },
        showSymbol: false,
        symbol: "circle",
        symbolSize: 0,
        step: false,
        name: "sparkline",
        data: sparklineData,
        yAxisIndex: 0
      }
    ],
    animation: false
  };
}
let tooltipBackgroundColor = "white";
const Sparkline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { config = {} } = $$props;
  let { width = 50 } = $$props;
  let { height = 15 } = $$props;
  let { interactive = true } = $$props;
  let chartContainer;
  let chartInstance = null;
  let { data = void 0 } = $$props;
  let { dateCol = void 0 } = $$props;
  let { valueCol = void 0 } = $$props;
  let { valueFmt = void 0 } = $$props;
  let value_format_object;
  let { dateFmt = void 0 } = $$props;
  let date_format_object;
  let { type = "line" } = $$props;
  let { color = void 0 } = $$props;
  let { yScale = false } = $$props;
  let seriesType = type === "area" ? "line" : type;
  let { connectGroup = void 0 } = $$props;
  let staticSVGSSR;
  let error;
  function initializeChart() {
    if (interactive && chartContainer && !chartInstance) {
      chartInstance = init(chartContainer, "evidence-light", { renderer: "svg", width, height });
      chartInstance.setOption(config);
      if (connectGroup) {
        chartInstance.group = connectGroup;
        connect(connectGroup);
      }
    }
  }
  onDestroy(() => {
    if (chartInstance) {
      chartInstance.dispose();
    }
  });
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.dateCol === void 0 && $$bindings.dateCol && dateCol !== void 0)
    $$bindings.dateCol(dateCol);
  if ($$props.valueCol === void 0 && $$bindings.valueCol && valueCol !== void 0)
    $$bindings.valueCol(valueCol);
  if ($$props.valueFmt === void 0 && $$bindings.valueFmt && valueFmt !== void 0)
    $$bindings.valueFmt(valueFmt);
  if ($$props.dateFmt === void 0 && $$bindings.dateFmt && dateFmt !== void 0)
    $$bindings.dateFmt(dateFmt);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  interactive = interactive === "true" || interactive === true;
  yScale = yScale === "true" || yScale === true;
  {
    try {
      if (!["line", "area", "bar"].includes(type)) {
        throw Error("type must be line, area, or bar");
      }
      ({ height, width } = validateSize(height, width));
      checkInputs(data, [valueCol, dateCol]);
      ({ value_format_object, date_format_object } = getColumnFormats(data, valueCol, dateCol, valueFmt, dateFmt));
      const sparklineData = data.map((d) => [d[dateCol], d[valueCol]]);
      sparklineData.sort((a, b) => a[0] - b[0]);
      config = getSparklineConfig(sparklineData, type, seriesType, color, yScale, value_format_object, date_format_object, height, tooltipBackgroundColor);
      if (!browser) {
        const tempChart = init(null, "evidence-light", {
          ssr: true,
          renderer: "svg",
          height,
          width
        });
        tempChart.setOption(config);
        staticSVGSSR = tempChart.renderToSVGString();
        tempChart.dispose();
      }
      if (chartContainer && interactive && !chartInstance)
        ;
    } catch (e) {
      error = e;
      const setTextRed = "\x1B[31m%s\x1B[0m";
      console.error(setTextRed, `Error in Sparkline: ${error.message}`);
      if (strictBuild) {
        throw error;
      }
    }
  }
  {
    {
      initializeChart();
    }
  }
  return `${error ? `${validate_component(ValueError, "ValueError").$$render($$result, { error }, {}, {})}` : `${`<div class="inline-block align-baseline" style="${"width: " + escape(width, true) + "px; height: " + escape(height, true) + "px;"}"><!-- HTML_TAG_START -->${staticSVGSSR}<!-- HTML_TAG_END --></div>`}`}`;
});
const { Object: Object_1$1 } = globals;
let chartType$1 = "Sparkline";
const Sparkline_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data } = $$props;
  const initialHash = Query.isQuery(data) ? data.hash : void 0;
  let isInitial = data?.hash === initialHash;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  let queryID = data?.id;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  isInitial = data?.hash === initialHash;
  spreadProps = {
    ...Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0))
  };
  return ` ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data }, {}, {
    error: ({ loaded }) => {
      return `${validate_component(ErrorChart, "ErrorChart").$$render(
        $$result,
        {
          slot: "error",
          chartType: chartType$1,
          error: loaded.error.message
        },
        {},
        {}
      )}`;
    },
    empty: () => {
      return `${validate_component(EmptyChart, "EmptyChart").$$render(
        $$result,
        {
          slot: "empty",
          emptyMessage,
          emptySet,
          chartType: spreadProps.chartType,
          isInitial
        },
        {},
        {}
      )}`;
    },
    default: ({ loaded }) => {
      return `${validate_component(Sparkline, "Sparkline").$$render(
        $$result,
        Object_1$1.assign(
          {},
          spreadProps,
          {
            data: Query.isQuery(loaded) ? Array.from(loaded) : loaded
          },
          { queryID }
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
const BigValue$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { value = null } = $$props;
  let { comparison = null } = $$props;
  let { comparisonDelta = true } = $$props;
  let { sparkline = null } = $$props;
  let { sparklineType = "line" } = $$props;
  let { sparklineColor = void 0 } = $$props;
  let { sparklineValueFmt = void 0 } = $$props;
  let { sparklineDateFmt = void 0 } = $$props;
  let { sparklineYScale = false } = $$props;
  let { connectGroup = void 0 } = $$props;
  let { fmt = void 0 } = $$props;
  let { comparisonFmt = void 0 } = $$props;
  let { title = null } = $$props;
  let { comparisonTitle = null } = $$props;
  let { downIsGood = false } = $$props;
  let { neutralMin = 0 } = $$props;
  let { neutralMax = 0 } = $$props;
  let { maxWidth = "none" } = $$props;
  let { minWidth = "18%" } = $$props;
  let positive = true;
  let comparisonColor = "var(--grey-700)";
  let { link = null } = $$props;
  let error = void 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.comparisonDelta === void 0 && $$bindings.comparisonDelta && comparisonDelta !== void 0)
    $$bindings.comparisonDelta(comparisonDelta);
  if ($$props.sparkline === void 0 && $$bindings.sparkline && sparkline !== void 0)
    $$bindings.sparkline(sparkline);
  if ($$props.sparklineType === void 0 && $$bindings.sparklineType && sparklineType !== void 0)
    $$bindings.sparklineType(sparklineType);
  if ($$props.sparklineColor === void 0 && $$bindings.sparklineColor && sparklineColor !== void 0)
    $$bindings.sparklineColor(sparklineColor);
  if ($$props.sparklineValueFmt === void 0 && $$bindings.sparklineValueFmt && sparklineValueFmt !== void 0)
    $$bindings.sparklineValueFmt(sparklineValueFmt);
  if ($$props.sparklineDateFmt === void 0 && $$bindings.sparklineDateFmt && sparklineDateFmt !== void 0)
    $$bindings.sparklineDateFmt(sparklineDateFmt);
  if ($$props.sparklineYScale === void 0 && $$bindings.sparklineYScale && sparklineYScale !== void 0)
    $$bindings.sparklineYScale(sparklineYScale);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  if ($$props.comparisonFmt === void 0 && $$bindings.comparisonFmt && comparisonFmt !== void 0)
    $$bindings.comparisonFmt(comparisonFmt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.comparisonTitle === void 0 && $$bindings.comparisonTitle && comparisonTitle !== void 0)
    $$bindings.comparisonTitle(comparisonTitle);
  if ($$props.downIsGood === void 0 && $$bindings.downIsGood && downIsGood !== void 0)
    $$bindings.downIsGood(downIsGood);
  if ($$props.neutralMin === void 0 && $$bindings.neutralMin && neutralMin !== void 0)
    $$bindings.neutralMin(neutralMin);
  if ($$props.neutralMax === void 0 && $$bindings.neutralMax && neutralMax !== void 0)
    $$bindings.neutralMax(neutralMax);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.minWidth === void 0 && $$bindings.minWidth && minWidth !== void 0)
    $$bindings.minWidth(minWidth);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  comparisonDelta = comparisonDelta === "true" || comparisonDelta === true;
  sparklineYScale = sparklineYScale === "true" || sparklineYScale === true;
  downIsGood = downIsGood === "true" || downIsGood === true;
  {
    try {
      error = void 0;
      if (!value) {
        throw new Error("value is required");
      }
      if (!Array.isArray(data)) {
        data = [data];
      }
      checkInputs(data, [value]);
      let columnSummary = getColumnSummary(data, "array");
      let valueColumnSummary = columnSummary.find((d) => d.id === value);
      title = title ?? (valueColumnSummary ? valueColumnSummary.title : null);
      if (comparison) {
        checkInputs(data, [comparison]);
        let comparisonColumnSummary = columnSummary.find((d) => d.id === comparison);
        comparisonTitle = comparisonTitle ?? (comparisonColumnSummary ? comparisonColumnSummary.title : null);
      }
      if (data && comparison) {
        positive = data[0][comparison] >= 0;
        comparisonColor = positive && !downIsGood || !positive && downIsGood ? "var(--green-700)" : "var(--red-700)";
      }
      if (sparkline) {
        checkInputs(data, [sparkline]);
        if (columnSummary.find((d) => d.id === sparkline)?.type !== "date") {
          throw Error("sparkline must be a date column");
        }
      }
    } catch (e) {
      error = e;
      const setTextRed = "\x1B[31m%s\x1B[0m";
      console.error(setTextRed, `Error in Big Value: ${error.message}`);
      if (strictBuild) {
        throw error;
      }
    }
  }
  return `<div class="inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"${add_attribute(
    "style",
    `
        min-width: ${minWidth};
        max-width: ${maxWidth};
    `,
    0
  )}>${error ? `${validate_component(BigValueError, "BigValueError").$$render(
    $$result,
    {
      chartType: "Big Value",
      error: error.message
    },
    {},
    {}
  )}` : `<p class="text-sm text-gray-700">${escape(title)}</p> <div class="relative text-xl font-medium text-gray-700 my-0.5">${link ? `<a class="hover:bg-gray-100"${add_attribute("href", link, 0)}>${validate_component(Value_1, "Value").$$render($$result, { data, column: value, fmt }, {}, {})}</a>` : `${validate_component(Value_1, "Value").$$render($$result, { data, column: value, fmt }, {}, {})}`} ${sparkline ? `${validate_component(Sparkline_1, "Sparkline").$$render(
    $$result,
    {
      height: "15",
      data,
      dateCol: sparkline,
      valueCol: value,
      type: sparklineType,
      interactive: "true",
      color: sparklineColor,
      valueFmt: fmt ?? sparklineValueFmt,
      dateFmt: sparklineDateFmt,
      yScale: sparklineYScale,
      connectGroup
    },
    {},
    {}
  )}` : ``}</div> ${comparison ? `${comparisonDelta ? `<p class="text-xs font-sans"${add_attribute("style", `color:${comparisonColor}`, 0)}>${validate_component(Delta_1, "Delta").$$render(
    $$result,
    {
      data,
      column: comparison,
      fmt: comparisonFmt,
      fontClass: "text-xs",
      symbolPosition: "left",
      neutralMin,
      neutralMax,
      text: comparisonTitle,
      downIsGood
    },
    {},
    {}
  )}</p>` : `<p class="text-xs font-sans text-gray-500 pt-[0.5px]">${link ? `<a class="hover:bg-gray-100"${add_attribute("href", link, 0)}>${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data,
      column: comparison,
      fmt: comparisonFmt
    },
    {},
    {}
  )}</a>` : `${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data,
      column: comparison,
      fmt: comparisonFmt
    },
    {},
    {}
  )}`} <span>${escape(comparisonTitle)}</span></p>`}` : ``}`}</div>`;
});
const { Object: Object_1 } = globals;
let chartType = "Big Value";
const BigValue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data } = $$props;
  const initialHash = Query.isQuery(data) ? data.hash : void 0;
  let isInitial = data?.hash === initialHash;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  isInitial = data?.hash === initialHash;
  spreadProps = Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0));
  return ` ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data }, {}, {
    skeleton: ({ loaded }) => {
      return `<div class="inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"${add_attribute(
        "style",
        `
			min-width: ${$$props.minWidth};
			max-width: ${$$props.maxWidth};
		`,
        0
      )} slot="skeleton"><p class="text-sm text-gray-700">${escape($$props.title ?? " ")}</p> ${validate_component(Value_1, "Value").$$render(
        $$result,
        {
          column: $$props.value,
          fmt: $$props.fmt,
          data: loaded
        },
        {},
        {}
      )}</div>`;
    },
    empty: () => {
      return `<div slot="empty" class="inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"${add_attribute(
        "style",
        `
				min-width: ${$$props.minWidth};
				max-width: ${$$props.maxWidth};
		`,
        0
      )}>${validate_component(EmptyChart, "EmptyChart").$$render(
        $$result,
        {
          emptyMessage,
          emptySet,
          chartType,
          isInitial
        },
        {},
        {}
      )}</div>`;
    },
    error: ({ loaded }) => {
      return `<div slot="error" class="inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"${add_attribute(
        "style",
        `
				min-width: ${$$props.minWidth};
				max-width: ${$$props.maxWidth};
		`,
        0
      )}>${validate_component(BigValueError, "BigValueError").$$render($$result, { error: loaded.error.message }, {}, {})}</div>`;
    },
    default: ({ loaded }) => {
      return ` ${validate_component(BigValue$1, "InnerBigValue").$$render(
        $$result,
        Object_1.assign({}, spreadProps, {
          data: Query.isQuery(loaded) ? Array.from(loaded) : loaded
        }),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let x;
  let swapXY;
  let yFormat;
  let y2Format;
  let yCount;
  let y2Count;
  let xMismatch;
  let columnSummary;
  let baseConfig;
  let seriesConfig;
  let $props, $$unsubscribe_props;
  let props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let config = getContext(configKey);
  let { y = void 0 } = $$props;
  const ySet = y ? true : false;
  let { y2 = void 0 } = $$props;
  const y2Set = y2 ? true : false;
  let { series = void 0 } = $$props;
  const seriesSet = series ? true : false;
  let { options = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { lineColor = void 0 } = $$props;
  let { lineWidth = 2 } = $$props;
  let { lineType = "solid" } = $$props;
  let { lineOpacity = void 0 } = $$props;
  let { markers = false } = $$props;
  let { markerShape = "circle" } = $$props;
  let { markerSize = 8 } = $$props;
  let { labels = false } = $$props;
  let { labelSize = 11 } = $$props;
  let { labelPosition = "top" } = $$props;
  let { labelColor = void 0 } = $$props;
  let { labelFmt = void 0 } = $$props;
  let labelFormat;
  if (labelFmt) {
    labelFormat = getFormatObjectFromString(labelFmt);
  }
  let { yLabelFmt = void 0 } = $$props;
  let yLabelFormat;
  if (yLabelFmt) {
    yLabelFormat = getFormatObjectFromString(yLabelFmt);
  }
  let { y2LabelFmt = void 0 } = $$props;
  let y2LabelFormat;
  if (y2LabelFmt) {
    y2LabelFormat = getFormatObjectFromString(y2LabelFmt);
  }
  let { y2SeriesType = void 0 } = $$props;
  let { showAllLabels = false } = $$props;
  let { handleMissing = "gap" } = $$props;
  let { step = false } = $$props;
  let { stepPosition = "end" } = $$props;
  const labelPositions = {
    above: "top",
    below: "bottom",
    middle: "inside"
  };
  const swapXYLabelPositions = {
    above: "right",
    below: "left",
    middle: "inside"
  };
  let defaultLabelPosition = swapXY ? "right" : "top";
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.lineType === void 0 && $$bindings.lineType && lineType !== void 0)
    $$bindings.lineType(lineType);
  if ($$props.lineOpacity === void 0 && $$bindings.lineOpacity && lineOpacity !== void 0)
    $$bindings.lineOpacity(lineOpacity);
  if ($$props.markers === void 0 && $$bindings.markers && markers !== void 0)
    $$bindings.markers(markers);
  if ($$props.markerShape === void 0 && $$bindings.markerShape && markerShape !== void 0)
    $$bindings.markerShape(markerShape);
  if ($$props.markerSize === void 0 && $$bindings.markerSize && markerSize !== void 0)
    $$bindings.markerSize(markerSize);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.labelSize === void 0 && $$bindings.labelSize && labelSize !== void 0)
    $$bindings.labelSize(labelSize);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.labelFmt === void 0 && $$bindings.labelFmt && labelFmt !== void 0)
    $$bindings.labelFmt(labelFmt);
  if ($$props.yLabelFmt === void 0 && $$bindings.yLabelFmt && yLabelFmt !== void 0)
    $$bindings.yLabelFmt(yLabelFmt);
  if ($$props.y2LabelFmt === void 0 && $$bindings.y2LabelFmt && y2LabelFmt !== void 0)
    $$bindings.y2LabelFmt(y2LabelFmt);
  if ($$props.y2SeriesType === void 0 && $$bindings.y2SeriesType && y2SeriesType !== void 0)
    $$bindings.y2SeriesType(y2SeriesType);
  if ($$props.showAllLabels === void 0 && $$bindings.showAllLabels && showAllLabels !== void 0)
    $$bindings.showAllLabels(showAllLabels);
  if ($$props.handleMissing === void 0 && $$bindings.handleMissing && handleMissing !== void 0)
    $$bindings.handleMissing(handleMissing);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.stepPosition === void 0 && $$bindings.stepPosition && stepPosition !== void 0)
    $$bindings.stepPosition(stepPosition);
  markers = markers === "true" || markers === true;
  labels = labels === "true" || labels === true;
  step = step === "true" || step === true;
  data = $props.data;
  x = $props.x;
  y = ySet ? y : $props.y;
  y2 = y2Set ? y2 : $props.y2;
  swapXY = $props.swapXY;
  yFormat = $props.yFormat;
  y2Format = $props.y2Format;
  yCount = $props.yCount;
  y2Count = $props.y2Count;
  $props.xType;
  xMismatch = $props.xMismatch;
  columnSummary = $props.columnSummary;
  series = seriesSet ? series : $props.series;
  {
    if (!series && typeof y !== "object") {
      name = name ?? formatTitle(y, columnSummary[y].title);
    } else {
      try {
        data = getCompletedData(data, x, y, series);
      } catch (e) {
        console.warn("Failed to complete data", { e });
        data = [];
      }
    }
  }
  {
    if (handleMissing === "zero") {
      try {
        data = getCompletedData(data, x, y, series, true);
      } catch (e) {
        console.warn("Failed to complete data", { e });
        data = [];
      }
    }
  }
  labelPosition = (swapXY ? swapXYLabelPositions[labelPosition] : labelPositions[labelPosition]) ?? defaultLabelPosition;
  baseConfig = {
    type: "line",
    label: {
      show: labels,
      formatter(params) {
        return params.value[swapXY ? 0 : 1] === 0 ? "" : formatValue(params.value[swapXY ? 0 : 1], [
          yLabelFormat ?? labelFormat ?? yFormat,
          y2LabelFormat ?? labelFormat ?? y2Format
        ][getYAxisIndex(params.componentIndex, yCount, y2Count)]);
      },
      fontSize: labelSize,
      color: labelColor,
      position: labelPosition,
      padding: 3
    },
    labelLayout: {
      hideOverlap: showAllLabels ? false : true
    },
    connectNulls: handleMissing === "connect",
    emphasis: {
      focus: "series",
      endLabel: { show: false },
      lineStyle: { opacity: 1, width: 3 }
    },
    lineStyle: {
      width: parseInt(lineWidth),
      type: lineType,
      opacity: lineOpacity
    },
    itemStyle: { color: lineColor, opacity: lineOpacity },
    showSymbol: labels || markers,
    symbol: markerShape,
    symbolSize: labels && !markers ? 0 : markerSize,
    step: step ? stepPosition : false
  };
  seriesConfig = getSeriesConfig(data, x, y, series, swapXY, baseConfig, name, xMismatch, columnSummary, void 0, void 0, y2);
  {
    config.update((d) => {
      d.series.push(...seriesConfig);
      d.legend.data.push(...seriesConfig.map((d2) => d2.name.toString()));
      return d;
    });
  }
  {
    if (options) {
      config.update((d) => {
        return { ...d, ...options };
      });
    }
  }
  $$unsubscribe_props();
  return ``;
});
const LineChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { y2 = void 0 } = $$props;
  let { series = void 0 } = $$props;
  let { xType = void 0 } = $$props;
  let { yLog = void 0 } = $$props;
  let { yLogBase = void 0 } = $$props;
  let { y2SeriesType = void 0 } = $$props;
  let { yFmt = void 0 } = $$props;
  let { xFmt = void 0 } = $$props;
  let { y2Fmt = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { subtitle = void 0 } = $$props;
  let { legend = void 0 } = $$props;
  let { xAxisTitle = void 0 } = $$props;
  let { yAxisTitle = y2 ? "true" : void 0 } = $$props;
  let { y2AxisTitle = y2 ? "true" : void 0 } = $$props;
  let { xGridlines = void 0 } = $$props;
  let { yGridlines = void 0 } = $$props;
  let { y2Gridlines = void 0 } = $$props;
  let { xAxisLabels = void 0 } = $$props;
  let { yAxisLabels = void 0 } = $$props;
  let { y2AxisLabels = void 0 } = $$props;
  let { xBaseline = void 0 } = $$props;
  let { yBaseline = void 0 } = $$props;
  let { y2Baseline = void 0 } = $$props;
  let { xTickMarks = void 0 } = $$props;
  let { yTickMarks = void 0 } = $$props;
  let { y2TickMarks = void 0 } = $$props;
  let { yMin = void 0 } = $$props;
  let { yMax = void 0 } = $$props;
  let { yScale = void 0 } = $$props;
  let { y2Min = void 0 } = $$props;
  let { y2Max = void 0 } = $$props;
  let { y2Scale = void 0 } = $$props;
  let { lineColor = void 0 } = $$props;
  let { lineType = void 0 } = $$props;
  let { lineOpacity = void 0 } = $$props;
  let { lineWidth = void 0 } = $$props;
  let { chartAreaHeight = void 0 } = $$props;
  let { markers = void 0 } = $$props;
  let { markerShape = void 0 } = $$props;
  let { markerSize = void 0 } = $$props;
  let { handleMissing = void 0 } = $$props;
  let { step = void 0 } = $$props;
  let { stepPosition = void 0 } = $$props;
  let { sort = void 0 } = $$props;
  let { colorPalette = void 0 } = $$props;
  let { labels = void 0 } = $$props;
  let { labelSize = void 0 } = $$props;
  let { labelPosition = void 0 } = $$props;
  let { labelColor = void 0 } = $$props;
  let { labelFmt = void 0 } = $$props;
  let { yLabelFmt = void 0 } = $$props;
  let { y2LabelFmt = void 0 } = $$props;
  let { showAllLabels = void 0 } = $$props;
  let { yAxisColor = void 0 } = $$props;
  let { y2AxisColor = void 0 } = $$props;
  let { echartsOptions = void 0 } = $$props;
  let { seriesOptions = void 0 } = $$props;
  let { printEchartsConfig = false } = $$props;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  let { renderer = void 0 } = $$props;
  let { seriesColors = void 0 } = $$props;
  let { connectGroup = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.xType === void 0 && $$bindings.xType && xType !== void 0)
    $$bindings.xType(xType);
  if ($$props.yLog === void 0 && $$bindings.yLog && yLog !== void 0)
    $$bindings.yLog(yLog);
  if ($$props.yLogBase === void 0 && $$bindings.yLogBase && yLogBase !== void 0)
    $$bindings.yLogBase(yLogBase);
  if ($$props.y2SeriesType === void 0 && $$bindings.y2SeriesType && y2SeriesType !== void 0)
    $$bindings.y2SeriesType(y2SeriesType);
  if ($$props.yFmt === void 0 && $$bindings.yFmt && yFmt !== void 0)
    $$bindings.yFmt(yFmt);
  if ($$props.xFmt === void 0 && $$bindings.xFmt && xFmt !== void 0)
    $$bindings.xFmt(xFmt);
  if ($$props.y2Fmt === void 0 && $$bindings.y2Fmt && y2Fmt !== void 0)
    $$bindings.y2Fmt(y2Fmt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.xAxisTitle === void 0 && $$bindings.xAxisTitle && xAxisTitle !== void 0)
    $$bindings.xAxisTitle(xAxisTitle);
  if ($$props.yAxisTitle === void 0 && $$bindings.yAxisTitle && yAxisTitle !== void 0)
    $$bindings.yAxisTitle(yAxisTitle);
  if ($$props.y2AxisTitle === void 0 && $$bindings.y2AxisTitle && y2AxisTitle !== void 0)
    $$bindings.y2AxisTitle(y2AxisTitle);
  if ($$props.xGridlines === void 0 && $$bindings.xGridlines && xGridlines !== void 0)
    $$bindings.xGridlines(xGridlines);
  if ($$props.yGridlines === void 0 && $$bindings.yGridlines && yGridlines !== void 0)
    $$bindings.yGridlines(yGridlines);
  if ($$props.y2Gridlines === void 0 && $$bindings.y2Gridlines && y2Gridlines !== void 0)
    $$bindings.y2Gridlines(y2Gridlines);
  if ($$props.xAxisLabels === void 0 && $$bindings.xAxisLabels && xAxisLabels !== void 0)
    $$bindings.xAxisLabels(xAxisLabels);
  if ($$props.yAxisLabels === void 0 && $$bindings.yAxisLabels && yAxisLabels !== void 0)
    $$bindings.yAxisLabels(yAxisLabels);
  if ($$props.y2AxisLabels === void 0 && $$bindings.y2AxisLabels && y2AxisLabels !== void 0)
    $$bindings.y2AxisLabels(y2AxisLabels);
  if ($$props.xBaseline === void 0 && $$bindings.xBaseline && xBaseline !== void 0)
    $$bindings.xBaseline(xBaseline);
  if ($$props.yBaseline === void 0 && $$bindings.yBaseline && yBaseline !== void 0)
    $$bindings.yBaseline(yBaseline);
  if ($$props.y2Baseline === void 0 && $$bindings.y2Baseline && y2Baseline !== void 0)
    $$bindings.y2Baseline(y2Baseline);
  if ($$props.xTickMarks === void 0 && $$bindings.xTickMarks && xTickMarks !== void 0)
    $$bindings.xTickMarks(xTickMarks);
  if ($$props.yTickMarks === void 0 && $$bindings.yTickMarks && yTickMarks !== void 0)
    $$bindings.yTickMarks(yTickMarks);
  if ($$props.y2TickMarks === void 0 && $$bindings.y2TickMarks && y2TickMarks !== void 0)
    $$bindings.y2TickMarks(y2TickMarks);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.y2Min === void 0 && $$bindings.y2Min && y2Min !== void 0)
    $$bindings.y2Min(y2Min);
  if ($$props.y2Max === void 0 && $$bindings.y2Max && y2Max !== void 0)
    $$bindings.y2Max(y2Max);
  if ($$props.y2Scale === void 0 && $$bindings.y2Scale && y2Scale !== void 0)
    $$bindings.y2Scale(y2Scale);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.lineType === void 0 && $$bindings.lineType && lineType !== void 0)
    $$bindings.lineType(lineType);
  if ($$props.lineOpacity === void 0 && $$bindings.lineOpacity && lineOpacity !== void 0)
    $$bindings.lineOpacity(lineOpacity);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.chartAreaHeight === void 0 && $$bindings.chartAreaHeight && chartAreaHeight !== void 0)
    $$bindings.chartAreaHeight(chartAreaHeight);
  if ($$props.markers === void 0 && $$bindings.markers && markers !== void 0)
    $$bindings.markers(markers);
  if ($$props.markerShape === void 0 && $$bindings.markerShape && markerShape !== void 0)
    $$bindings.markerShape(markerShape);
  if ($$props.markerSize === void 0 && $$bindings.markerSize && markerSize !== void 0)
    $$bindings.markerSize(markerSize);
  if ($$props.handleMissing === void 0 && $$bindings.handleMissing && handleMissing !== void 0)
    $$bindings.handleMissing(handleMissing);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.stepPosition === void 0 && $$bindings.stepPosition && stepPosition !== void 0)
    $$bindings.stepPosition(stepPosition);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.colorPalette === void 0 && $$bindings.colorPalette && colorPalette !== void 0)
    $$bindings.colorPalette(colorPalette);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.labelSize === void 0 && $$bindings.labelSize && labelSize !== void 0)
    $$bindings.labelSize(labelSize);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.labelFmt === void 0 && $$bindings.labelFmt && labelFmt !== void 0)
    $$bindings.labelFmt(labelFmt);
  if ($$props.yLabelFmt === void 0 && $$bindings.yLabelFmt && yLabelFmt !== void 0)
    $$bindings.yLabelFmt(yLabelFmt);
  if ($$props.y2LabelFmt === void 0 && $$bindings.y2LabelFmt && y2LabelFmt !== void 0)
    $$bindings.y2LabelFmt(y2LabelFmt);
  if ($$props.showAllLabels === void 0 && $$bindings.showAllLabels && showAllLabels !== void 0)
    $$bindings.showAllLabels(showAllLabels);
  if ($$props.yAxisColor === void 0 && $$bindings.yAxisColor && yAxisColor !== void 0)
    $$bindings.yAxisColor(yAxisColor);
  if ($$props.y2AxisColor === void 0 && $$bindings.y2AxisColor && y2AxisColor !== void 0)
    $$bindings.y2AxisColor(y2AxisColor);
  if ($$props.echartsOptions === void 0 && $$bindings.echartsOptions && echartsOptions !== void 0)
    $$bindings.echartsOptions(echartsOptions);
  if ($$props.seriesOptions === void 0 && $$bindings.seriesOptions && seriesOptions !== void 0)
    $$bindings.seriesOptions(seriesOptions);
  if ($$props.printEchartsConfig === void 0 && $$bindings.printEchartsConfig && printEchartsConfig !== void 0)
    $$bindings.printEchartsConfig(printEchartsConfig);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.seriesColors === void 0 && $$bindings.seriesColors && seriesColors !== void 0)
    $$bindings.seriesColors(seriesColors);
  if ($$props.connectGroup === void 0 && $$bindings.connectGroup && connectGroup !== void 0)
    $$bindings.connectGroup(connectGroup);
  return `${validate_component(Chart_1, "Chart").$$render(
    $$result,
    {
      data,
      x,
      y,
      y2,
      xFmt,
      yFmt,
      y2Fmt,
      series,
      xType,
      yLog,
      yLogBase,
      legend,
      xAxisTitle,
      yAxisTitle,
      y2AxisTitle,
      xGridlines,
      yGridlines,
      y2Gridlines,
      xAxisLabels,
      yAxisLabels,
      y2AxisLabels,
      xBaseline,
      yBaseline,
      y2Baseline,
      xTickMarks,
      yTickMarks,
      y2TickMarks,
      yAxisColor,
      y2AxisColor,
      yMin,
      yMax,
      yScale,
      y2Min,
      y2Max,
      y2Scale,
      title,
      subtitle,
      chartType: "Line Chart",
      sort,
      chartAreaHeight,
      colorPalette,
      echartsOptions,
      seriesOptions,
      printEchartsConfig,
      emptySet,
      emptyMessage,
      renderer,
      connectGroup,
      seriesColors
    },
    {},
    {
      default: () => {
        return `${validate_component(Line, "Line").$$render(
          $$result,
          {
            lineColor,
            lineWidth,
            lineOpacity,
            lineType,
            markers,
            markerShape,
            markerSize,
            handleMissing,
            step,
            stepPosition,
            labels,
            labelSize,
            labelPosition,
            labelColor,
            labelFmt,
            yLabelFmt,
            y2LabelFmt,
            showAllLabels,
            y2SeriesType
          },
          {},
          {}
        )} ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    {
      "season_summary": "nba/season_summary.sql"
    },
    { "records_table": "nba/records_table.sql" },
    { "elo_latest": "nba/elo_latest.sql" },
    { "seed_details": "nba/seed_details.sql" },
    { "wins_details": "nba/wins_details.sql" },
    {
      "playoff_wins": "nba/playoff_odds_by_team_by_wins.sql"
    },
    { "playoff_odds": "nba/playoff_odds.sql" },
    {
      "most_recent_games": "nba/most_recent_games.sql"
    },
    { "game_trend": "nba/game_trend.sql" },
    { "future_games": "nba/future_games.sql" }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "4539330648b80f94ef3bf911f6d77ac9", $routeHash);
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
  let season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __season_summaryHasUnresolved = hasUnsetValues`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  let __season_summaryText = `select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  {
    try {
      if (!__season_summaryHasUnresolved)
        season_summaryInitialStates.initialData = profile(__db.query, __season_summaryText, { query_name: "season_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      season_summaryInitialStates.initialError = e;
    }
  }
  let season_summary;
  const __season_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        season_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "season_summary",
      initialData: season_summaryInitialStates.initialData,
      initialError: season_summaryInitialStates.initialError
    }
  );
  __season_summaryFactory(__season_summaryText, { noResolve: __season_summaryHasUnresolved });
  globalThis[Symbol.for("season_summary")] = {
    get value() {
      return season_summary;
    }
  };
  let records_tableInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __records_tableHasUnresolved = hasUnsetValues`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  let __records_tableText = `SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  {
    try {
      if (!__records_tableHasUnresolved)
        records_tableInitialStates.initialData = profile(__db.query, __records_tableText, { query_name: "records_table" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      records_tableInitialStates.initialError = e;
    }
  }
  let records_table;
  const __records_tableFactory = Query.createReactive(
    {
      callback: (v) => {
        records_table = v;
      },
      execFn: queryFunc
    },
    {
      id: "records_table",
      initialData: records_tableInitialStates.initialData,
      initialError: records_tableInitialStates.initialError
    }
  );
  __records_tableFactory(__records_tableText, { noResolve: __records_tableHasUnresolved });
  globalThis[Symbol.for("records_table")] = {
    get value() {
      return records_table;
    }
  };
  let elo_latestInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __elo_latestHasUnresolved = hasUnsetValues`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  let __elo_latestText = `SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  {
    try {
      if (!__elo_latestHasUnresolved)
        elo_latestInitialStates.initialData = profile(__db.query, __elo_latestText, { query_name: "elo_latest" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      elo_latestInitialStates.initialError = e;
    }
  }
  let elo_latest;
  const __elo_latestFactory = Query.createReactive(
    {
      callback: (v) => {
        elo_latest = v;
      },
      execFn: queryFunc
    },
    {
      id: "elo_latest",
      initialData: elo_latestInitialStates.initialData,
      initialError: elo_latestInitialStates.initialError
    }
  );
  __elo_latestFactory(__elo_latestText, { noResolve: __elo_latestHasUnresolved });
  globalThis[Symbol.for("elo_latest")] = {
    get value() {
      return elo_latest;
    }
  };
  let seed_detailsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  let __seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  {
    try {
      if (!__seed_detailsHasUnresolved)
        seed_detailsInitialStates.initialData = profile(__db.query, __seed_detailsText, { query_name: "seed_details" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      seed_detailsInitialStates.initialError = e;
    }
  }
  let seed_details;
  const __seed_detailsFactory = Query.createReactive(
    {
      callback: (v) => {
        seed_details = v;
      },
      execFn: queryFunc
    },
    {
      id: "seed_details",
      initialData: seed_detailsInitialStates.initialData,
      initialError: seed_detailsInitialStates.initialError
    }
  );
  __seed_detailsFactory(__seed_detailsText, { noResolve: __seed_detailsHasUnresolved });
  globalThis[Symbol.for("seed_details")] = {
    get value() {
      return seed_details;
    }
  };
  let wins_detailsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __wins_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  let __wins_detailsText = `SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  {
    try {
      if (!__wins_detailsHasUnresolved)
        wins_detailsInitialStates.initialData = profile(__db.query, __wins_detailsText, { query_name: "wins_details" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      wins_detailsInitialStates.initialError = e;
    }
  }
  let wins_details;
  const __wins_detailsFactory = Query.createReactive(
    {
      callback: (v) => {
        wins_details = v;
      },
      execFn: queryFunc
    },
    {
      id: "wins_details",
      initialData: wins_detailsInitialStates.initialData,
      initialError: wins_detailsInitialStates.initialError
    }
  );
  __wins_detailsFactory(__wins_detailsText, { noResolve: __wins_detailsHasUnresolved });
  globalThis[Symbol.for("wins_details")] = {
    get value() {
      return wins_details;
    }
  };
  let playoff_winsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __playoff_winsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  let __playoff_winsText = `SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  {
    try {
      if (!__playoff_winsHasUnresolved)
        playoff_winsInitialStates.initialData = profile(__db.query, __playoff_winsText, { query_name: "playoff_wins" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      playoff_winsInitialStates.initialError = e;
    }
  }
  let playoff_wins;
  const __playoff_winsFactory = Query.createReactive(
    {
      callback: (v) => {
        playoff_wins = v;
      },
      execFn: queryFunc
    },
    {
      id: "playoff_wins",
      initialData: playoff_winsInitialStates.initialData,
      initialError: playoff_winsInitialStates.initialError
    }
  );
  __playoff_winsFactory(__playoff_winsText, { noResolve: __playoff_winsHasUnresolved });
  globalThis[Symbol.for("playoff_wins")] = {
    get value() {
      return playoff_wins;
    }
  };
  let playoff_oddsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __playoff_oddsHasUnresolved = hasUnsetValues`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  let __playoff_oddsText = `SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  {
    try {
      if (!__playoff_oddsHasUnresolved)
        playoff_oddsInitialStates.initialData = profile(__db.query, __playoff_oddsText, { query_name: "playoff_odds" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      playoff_oddsInitialStates.initialError = e;
    }
  }
  let playoff_odds;
  const __playoff_oddsFactory = Query.createReactive(
    {
      callback: (v) => {
        playoff_odds = v;
      },
      execFn: queryFunc
    },
    {
      id: "playoff_odds",
      initialData: playoff_oddsInitialStates.initialData,
      initialError: playoff_oddsInitialStates.initialError
    }
  );
  __playoff_oddsFactory(__playoff_oddsText, { noResolve: __playoff_oddsHasUnresolved });
  globalThis[Symbol.for("playoff_odds")] = {
    get value() {
      return playoff_odds;
    }
  };
  let most_recent_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __most_recent_gamesHasUnresolved = hasUnsetValues`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  let __most_recent_gamesText = `SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  {
    try {
      if (!__most_recent_gamesHasUnresolved)
        most_recent_gamesInitialStates.initialData = profile(__db.query, __most_recent_gamesText, { query_name: "most_recent_games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      most_recent_gamesInitialStates.initialError = e;
    }
  }
  let most_recent_games;
  const __most_recent_gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        most_recent_games = v;
      },
      execFn: queryFunc
    },
    {
      id: "most_recent_games",
      initialData: most_recent_gamesInitialStates.initialData,
      initialError: most_recent_gamesInitialStates.initialError
    }
  );
  __most_recent_gamesFactory(__most_recent_gamesText, {
    noResolve: __most_recent_gamesHasUnresolved
  });
  globalThis[Symbol.for("most_recent_games")] = {
    get value() {
      return most_recent_games;
    }
  };
  let game_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __game_trendHasUnresolved = hasUnsetValues`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  let __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  {
    try {
      if (!__game_trendHasUnresolved)
        game_trendInitialStates.initialData = profile(__db.query, __game_trendText, { query_name: "game_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      game_trendInitialStates.initialError = e;
    }
  }
  let game_trend;
  const __game_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        game_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "game_trend",
      initialData: game_trendInitialStates.initialData,
      initialError: game_trendInitialStates.initialError
    }
  );
  __game_trendFactory(__game_trendText, { noResolve: __game_trendHasUnresolved });
  globalThis[Symbol.for("game_trend")] = {
    get value() {
      return game_trend;
    }
  };
  let future_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __future_gamesHasUnresolved = hasUnsetValues`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  let __future_gamesText = `SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  {
    try {
      if (!__future_gamesHasUnresolved)
        future_gamesInitialStates.initialData = profile(__db.query, __future_gamesText, { query_name: "future_games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      future_gamesInitialStates.initialError = e;
    }
  }
  let future_games;
  const __future_gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        future_games = v;
      },
      execFn: queryFunc
    },
    {
      id: "future_games",
      initialData: future_gamesInitialStates.initialData,
      initialError: future_gamesInitialStates.initialError
    }
  );
  __future_gamesFactory(__future_gamesText, { noResolve: __future_gamesHasUnresolved });
  globalThis[Symbol.for("future_games")] = {
    get value() {
      return future_games;
    }
  };
  let filtered_season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __filtered_season_summaryHasUnresolved = hasUnsetValues`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`;
  let __filtered_season_summaryText = `select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`;
  {
    try {
      if (!__filtered_season_summaryHasUnresolved)
        filtered_season_summaryInitialStates.initialData = profile(__db.query, __filtered_season_summaryText, { query_name: "filtered_season_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      filtered_season_summaryInitialStates.initialError = e;
    }
  }
  let filtered_season_summary;
  const __filtered_season_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        filtered_season_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "filtered_season_summary",
      initialData: filtered_season_summaryInitialStates.initialData,
      initialError: filtered_season_summaryInitialStates.initialError
    }
  );
  __filtered_season_summaryFactory(__filtered_season_summaryText, {
    noResolve: __filtered_season_summaryHasUnresolved
  });
  globalThis[Symbol.for("filtered_season_summary")] = {
    get value() {
      return filtered_season_summary;
    }
  };
  let aaaInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __aaaHasUnresolved = hasUnsetValues`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  let __aaaText = `select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  {
    try {
      if (!__aaaHasUnresolved)
        aaaInitialStates.initialData = profile(__db.query, __aaaText, { query_name: "aaa" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      aaaInitialStates.initialError = e;
    }
  }
  let aaa;
  const __aaaFactory = Query.createReactive(
    {
      callback: (v) => {
        aaa = v;
      },
      execFn: queryFunc
    },
    {
      id: "aaa",
      initialData: aaaInitialStates.initialData,
      initialError: aaaInitialStates.initialError
    }
  );
  __aaaFactory(__aaaText, { noResolve: __aaaHasUnresolved });
  globalThis[Symbol.for("aaa")] = {
    get value() {
      return aaa;
    }
  };
  let pieTestData1InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __pieTestData1HasUnresolved = hasUnsetValues`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  let __pieTestData1Text = `select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  {
    try {
      if (!__pieTestData1HasUnresolved)
        pieTestData1InitialStates.initialData = profile(__db.query, __pieTestData1Text, { query_name: "pieTestData1" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      pieTestData1InitialStates.initialError = e;
    }
  }
  let pieTestData1;
  const __pieTestData1Factory = Query.createReactive(
    {
      callback: (v) => {
        pieTestData1 = v;
      },
      execFn: queryFunc
    },
    {
      id: "pieTestData1",
      initialData: pieTestData1InitialStates.initialData,
      initialError: pieTestData1InitialStates.initialError
    }
  );
  __pieTestData1Factory(__pieTestData1Text, { noResolve: __pieTestData1HasUnresolved });
  globalThis[Symbol.for("pieTestData1")] = {
    get value() {
      return pieTestData1;
    }
  };
  let pieTestData2InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __pieTestData2HasUnresolved = hasUnsetValues`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  let __pieTestData2Text = `select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  {
    try {
      if (!__pieTestData2HasUnresolved)
        pieTestData2InitialStates.initialData = profile(__db.query, __pieTestData2Text, { query_name: "pieTestData2" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      pieTestData2InitialStates.initialError = e;
    }
  }
  let pieTestData2;
  const __pieTestData2Factory = Query.createReactive(
    {
      callback: (v) => {
        pieTestData2 = v;
      },
      execFn: queryFunc
    },
    {
      id: "pieTestData2",
      initialData: pieTestData2InitialStates.initialData,
      initialError: pieTestData2InitialStates.initialError
    }
  );
  __pieTestData2Factory(__pieTestData2Text, { noResolve: __pieTestData2HasUnresolved });
  globalThis[Symbol.for("pieTestData2")] = {
    get value() {
      return pieTestData2;
    }
  };
  {
    onDestroy(inputs_store.subscribe((inputs2) => {
      __aaaFactory(`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs2.conference}' group by conf order by _count desc`, {
        noResolve: hasUnsetValues`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs2.conference}' group by conf order by _count desc`
      });
      __pieTestData1Factory(`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs2.conference}' group by name order by value desc`, {
        noResolve: hasUnsetValues`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs2.conference}' group by name order by value desc`
      });
      __pieTestData2Factory(`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs2.conference}' group by name, tournament_group order by value desc`, {
        noResolve: hasUnsetValues`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs2.conference}' group by name, tournament_group order by value desc`
      });
    }));
  }
  let contextMenuOptions = [
    {
      "key": "Cross Filter",
      menuClass: "menu-option"
    },
    {
      "key": "Drill to Detail",
      menuClass: "menu-option"
    },
    {
      "key": "Drill By",
      menuClass: "menu-option",
      menuClass: "menu-option"
    },
    {
      "key": "Show Correlations",
      menuClass: "menu-option"
    }
  ];
  let contextMenuClickHandler = () => {
    console.log("clicked contextmenu option >>", event.target, " params ::: ", window.__selectedContextMenuParams);
    inputs.conference = window.__selectedContextMenuParams?.data?.name;
    event.target.parentElement.parentElement.style.display = "none";
    window.__selectedContextMenuParams = void 0;
  };
  let dblclickHandler = () => {
    console.log("dblclickHandler option >>", event.target);
    if (inputs.conference == "%") {
      inputs.conference = __dblclickParams.name || __dblclickParams?.data?.name;
    } else {
      inputs.conference = "%";
    }
  };
  if ($$props.data === void 0 && $$bindings.data && props !== void 0)
    $$bindings.data(props);
  ({ data = {}, customFormattingSettings, __db } = props);
  {
    pageHasQueries.set(Object.keys(data).length > 0);
  }
  $page.params;
  __season_summaryHasUnresolved = hasUnsetValues`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  __season_summaryText = `select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  {
    __season_summaryFactory(__season_summaryText, { noResolve: __season_summaryHasUnresolved });
  }
  __records_tableHasUnresolved = hasUnsetValues`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  __records_tableText = `SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  {
    __records_tableFactory(__records_tableText, { noResolve: __records_tableHasUnresolved });
  }
  __elo_latestHasUnresolved = hasUnsetValues`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  __elo_latestText = `SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  {
    __elo_latestFactory(__elo_latestText, { noResolve: __elo_latestHasUnresolved });
  }
  __seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  __seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  {
    __seed_detailsFactory(__seed_detailsText, { noResolve: __seed_detailsHasUnresolved });
  }
  __wins_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  __wins_detailsText = `SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  {
    __wins_detailsFactory(__wins_detailsText, { noResolve: __wins_detailsHasUnresolved });
  }
  __playoff_winsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  __playoff_winsText = `SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  {
    __playoff_winsFactory(__playoff_winsText, { noResolve: __playoff_winsHasUnresolved });
  }
  __playoff_oddsHasUnresolved = hasUnsetValues`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  __playoff_oddsText = `SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  {
    __playoff_oddsFactory(__playoff_oddsText, { noResolve: __playoff_oddsHasUnresolved });
  }
  __most_recent_gamesHasUnresolved = hasUnsetValues`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  __most_recent_gamesText = `SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  {
    __most_recent_gamesFactory(__most_recent_gamesText, {
      noResolve: __most_recent_gamesHasUnresolved
    });
  }
  __game_trendHasUnresolved = hasUnsetValues`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  {
    __game_trendFactory(__game_trendText, { noResolve: __game_trendHasUnresolved });
  }
  __future_gamesHasUnresolved = hasUnsetValues`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  __future_gamesText = `SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  {
    __future_gamesFactory(__future_gamesText, { noResolve: __future_gamesHasUnresolved });
  }
  __filtered_season_summaryHasUnresolved = hasUnsetValues`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`;
  __filtered_season_summaryText = `select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`;
  {
    __filtered_season_summaryFactory(__filtered_season_summaryText, {
      noResolve: __filtered_season_summaryHasUnresolved
    });
  }
  __aaaHasUnresolved = hasUnsetValues`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  __aaaText = `select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  {
    __aaaFactory(__aaaText, { noResolve: __aaaHasUnresolved });
  }
  __pieTestData1HasUnresolved = hasUnsetValues`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  __pieTestData1Text = `select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  {
    __pieTestData1Factory(__pieTestData1Text, { noResolve: __pieTestData1HasUnresolved });
  }
  __pieTestData2HasUnresolved = hasUnsetValues`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  __pieTestData2Text = `select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  {
    __pieTestData2Factory(__pieTestData2Text, { noResolve: __pieTestData2HasUnresolved });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${season_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "season_summary",
      queryResult: season_summary
    },
    {},
    {}
  )}` : ``} ${records_table ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "records_table",
      queryResult: records_table
    },
    {},
    {}
  )}` : ``} ${elo_latest ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "elo_latest",
      queryResult: elo_latest
    },
    {},
    {}
  )}` : ``} ${seed_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "seed_details",
      queryResult: seed_details
    },
    {},
    {}
  )}` : ``} ${wins_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "wins_details",
      queryResult: wins_details
    },
    {},
    {}
  )}` : ``} ${playoff_wins ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "playoff_wins",
      queryResult: playoff_wins
    },
    {},
    {}
  )}` : ``} ${playoff_odds ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "playoff_odds",
      queryResult: playoff_odds
    },
    {},
    {}
  )}` : ``} ${most_recent_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "most_recent_games",
      queryResult: most_recent_games
    },
    {},
    {}
  )}` : ``} ${game_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "game_trend",
      queryResult: game_trend
    },
    {},
    {}
  )}` : ``} ${future_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "future_games",
      queryResult: future_games
    },
    {},
    {}
  )}` : ``} ${filtered_season_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "filtered_season_summary",
      queryResult: filtered_season_summary
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="detailed-analysis-for-"><a href="#detailed-analysis-for-">Detailed Analysis for ${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data: filtered_season_summary,
      column: "team_long"
    },
    {},
    {}
  )}</a></h1> <h2 class="markdown" id="season-to-date-results" data-svelte-h="svelte-5bljsu"><a href="#season-to-date-results">Season-to-date Results</a></h2> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: elo_latest.filter((d) => d.team === "BOS"),
      value: "elo_rating",
      comparison: "since_start"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: filtered_season_summary,
      value: "predicted_wins",
      comparison: "vs_vegas_num1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: filtered_season_summary,
      value: "seed_range"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: filtered_season_summary,
      value: "win_range"
    },
    {},
    {}
  )} ${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: game_trend.filter((d) => d.team === "BOS"),
      x: "date",
      y: "cumulative_elo_change_num0",
      title: "elo change over time"
    },
    {},
    {}
  )} <h3 class="markdown" id="most-recent-games" data-svelte-h="svelte-efyf5h"><a href="#most-recent-games">Most Recent Games</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: most_recent_games.filter((d) => d.home_team === d.team === "BOS"),
      rows: "5"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "date" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "T", title: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "visiting_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "home_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "winning_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "score" }, {}, {})}`;
      }
    }
  )} <h3 class="markdown" id="matchup-summary" data-svelte-h="svelte-fhdi38"><a href="#matchup-summary">Matchup Summary</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: records_table.filter((d) => d.team === "BOS"),
      rows: "7"
    },
    {},
    {}
  )} ${future_games.length > 0 ? `<h3 class="markdown" id="upcoming-schedule" data-svelte-h="svelte-1aiam6d"><a href="#upcoming-schedule">Upcoming Schedule</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: future_games.filter((d) => d.team === "BOS"),
      rows: "5",
      link: "game_link"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "date" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "T", title: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "visitor" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "home" }, {}, {})} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "home_win_pct1",
            title: "Win % (Home)"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "american_odds",
            align: "right",
            title: "Odds (Home)"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "implied_line_num1",
            title: "Line (Home)"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render($$result, { id: "predicted_score", title: "Score" }, {}, {})}`;
      }
    }
  )} <h3 class="markdown" id="playoff-odds" data-svelte-h="svelte-1mwkix9"><a href="#playoff-odds">Playoff Odds</a></h3> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: playoff_odds.filter((d) => d.team === "BOS"),
      value: "top_six_pct1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: playoff_odds.filter((d) => d.team === "BOS"),
      value: "play_in_pct1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: playoff_odds.filter((d) => d.team === "BOS"),
      value: "missed_playoffs_pct1"
    },
    {},
    {}
  )} ${validate_component(AreaChart, "AreaChart").$$render(
    $$result,
    {
      data: playoff_wins.filter((d) => d.team === "BOS"),
      x: "wins",
      y: "odds_pct1",
      series: "season_result",
      xAxisTitle: "wins",
      title: "projected end of season wins"
    },
    {},
    {}
  )} ${validate_component(BarChart, "BarChart").$$render(
    $$result,
    {
      data: seed_details.filter((d) => d.team === "BOS"),
      x: "seed",
      y: "occurances_pct1",
      xAxisTitle: "seed",
      title: "projected end of season seeding"
    },
    {},
    {}
  )} ${game_trend.length == 0 ? `<h2 class="markdown" id="playoff-analysis" data-svelte-h="svelte-3nubcd"><a href="#playoff-analysis">Playoff Analysis</a></h2> <p class="markdown" data-svelte-h="svelte-1ugq117">add the following:</p> <ul class="markdown" data-svelte-h="svelte-1au48wa"><li class="markdown">play-in analysis (if playin games exist, i.e. count &gt; 1)<ul class="markdown"><li class="markdown">this will show % of time by spot, and then % of advancing by seed</li></ul></li> <li class="markdown">playoff analysis<ul class="markdown"><li class="markdown">most common opponents with win rate by series (mostly nulls, sparsely populated)</li></ul></li></ul>` : ``}` : ``} <h1 class="markdown" id="sample-dashboard" data-svelte-h="svelte-1x8efvu"><a href="#sample-dashboard">Sample Dashboard</a></h1> <p class="markdown" data-svelte-h="svelte-18tr17t">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> ${aaa ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "aaa", queryResult: aaa }, {}, {})}` : ``} ${validate_component(ButtonGroup, "ButtonGroup").$$render(
    $$result,
    {
      data: aaa,
      name: "conference",
      value: "conf"
    },
    {},
    {
      default: () => {
        return `${validate_component(ButtonGroupItem, "ButtonGroupItem").$$render(
          $$result,
          {
            valueLabel: "All",
            value: "%",
            default: true
          },
          {},
          {}
        )}`;
      }
    }
  )} ${inputs.conference != "null" ? `${validate_component(DataTable_1, "DataTable").$$render($$result, { data: aaa, link: "team_link", rows: "30" }, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, { id: "conf" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "_count" }, {}, {})}`;
    }
  })}` : `${validate_component(DataTable_1, "DataTable").$$render($$result, { data: aaa, link: "team_link", rows: "30" }, {}, {
    default: () => {
      return ` ${validate_component(Column, "Column").$$render($$result, { id: "conf" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "_count" }, {}, {})}`;
    }
  })}`} ${pieTestData1 ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "pieTestData1",
      queryResult: pieTestData1
    },
    {},
    {}
  )}` : ``} ${pieTestData2 ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "pieTestData2",
      queryResult: pieTestData2
    },
    {},
    {}
  )}` : ``} <span style="display:flex"><div style="width: 40vw; left: 10vw;"><h2>The filter applied is: ${escape(inputs.conference)}</h2> ${validate_component(ECharts, "ECharts").$$render(
    $$result,
    {
      connextGroup: 1,
      contextMenuOptions,
      contextMenuClickHandler,
      contextmenuEnabled: true,
      dblclickEnabled: true,
      dblclickHandler,
      config: {
        tooltip: { formatter: "{b}: {c} ({d}%)" },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [...pieTestData1],
            itemStyle: {
              emphasis: {
                click(params2) {
                  alert("Clicked on category: " + params2.name + ", value: " + params2.value);
                }
              }
            }
          }
        ],
        init: function(params2) {
          console.log(params2);
        }()
      }
    },
    {},
    {}
  )}</div> <div style="width: 40vw; left: 50vw;">${validate_component(ECharts, "ECharts").$$render(
    $$result,
    {
      contextMenuOptions,
      contextMenuClickHandler,
      dblclickEnabled: true,
      dblclickHandler,
      contextmenuEnabled: true,
      connextGroup: 1,
      config: {
        tooltip: { formatter: "{b}: {c} ({d}%)" },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [...pieTestData2]
          }
        ],
        init: function(params2) {
          console.log(params2);
        }(),
        tooltip: {
          trigger: "item",
          formatter(params2) {
            return params2.name + ": " + params2.value + '<br/><a href="report_details.html?category=' + params2.name + '">Details</a>';
          }
        }
      }
    },
    {},
    {}
  )}</div></span>`;
});
export {
  Page as default
};
