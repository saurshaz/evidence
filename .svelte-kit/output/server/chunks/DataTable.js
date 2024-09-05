import { s as strictBuild, a as checkInputs, h as getColumnSummary, e as getFormatObjectFromString, d as formatValue, V as ValueError, Q as QueryLoad, b as EmptyChart, g as globals, p as propKey, u as uiColours, i as convertColumnToDate, S as Skeleton, D as DownloadData, C as CodeBlock, E as ErrorChart } from "./colours.js";
import { c as create_ssr_component, v as validate_component, d as add_attribute, i as each, h as escape, l as add_styles, g as getContext, f as createEventDispatcher, s as setContext } from "./ssr.js";
import { c as compute_rest_props, s as subscribe } from "./utils.js";
import { w as writable } from "./index2.js";
import { I as Icon } from "./VennDiagram.svelte_svelte_type_style_lang.js";
import { X, S as Search, f as ChevronUp, g as ChevronDown, h as ChevronsLeft, i as ChevronLeft, C as ChevronRight, j as ChevronsRight } from "./index4.js";
import { b as building } from "./environment.js";
import chroma from "chroma-js";
import { E as EnterFullScreen } from "./index5.js";
import { Query } from "@evidence-dev/sdk/usql";
import { t as toasts } from "./stores.js";
import { query } from "@evidence-dev/universal-sql/client-duckdb";
import debounce from "lodash.debounce";
const Fullscreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<dialog class="w-[90vw] rounded-lg relative"><button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">${validate_component(Icon, "Icon").$$render($$result, { class: "w-6 h-6", src: X }, {}, {})}</button> <div class="py-2 px-6">${slots.default ? slots.default({}) : ``}</div></dialog>`;
});
const css$7 = {
  code: ".search-container.svelte-104e064{width:30%;display:block;align-items:center;border:1px solid var(--grey-300);border-radius:4px;height:22px;position:relative;margin:25px 3px 10px 0px;box-sizing:content-box;background-color:white}.search-icon.svelte-104e064{height:16px;width:16px;padding-left:3px;margin:0;position:absolute;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);color:var(--grey-400);box-sizing:content-box}.search-bar.svelte-104e064{margin:0;position:absolute;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);border:none;padding-left:23px;color:var(--grey-600);font-size:9pt;width:calc(100% - 10px);font-family:Arial;line-height:normal}input.search-bar.svelte-104e064::-moz-placeholder{color:var(--grey-500)}input.search-bar.svelte-104e064::placeholder{color:var(--grey-500)}.svelte-104e064:focus{outline:none}@media(max-width: 600px){.search-container.svelte-104e064{width:98%;height:28px}.search-bar.svelte-104e064{font-size:16px;width:calc(100% - 20px)}}@media print{.search-container.svelte-104e064{display:none}}",
  map: `{"version":3,"file":"SearchBar.svelte","sources":["SearchBar.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { Icon } from '@steeze-ui/svelte-icon';\\n\\timport { Search } from '@steeze-ui/tabler-icons';\\n\\n\\texport let placeholder = 'Search';\\n\\texport let value;\\n\\texport let searchFunction;\\n<\/script>\\n\\n<div class=\\"search-container\\">\\n\\t<input\\n\\t\\tclass=\\"search-bar\\"\\n\\t\\ttype=\\"text\\"\\n\\t\\t{placeholder}\\n\\t\\tbind:value\\n\\t\\ton:keyup={() => searchFunction(value)}\\n\\t/>\\n\\t<div class=\\"search-icon\\">\\n\\t\\t<Icon src={Search} class=\\"pl-0.5\\" />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.search-container {\\n\\t\\twidth: 30%;\\n\\t\\tdisplay: block;\\n\\t\\talign-items: center;\\n\\t\\tborder: 1px solid var(--grey-300);\\n\\t\\tborder-radius: 4px;\\n\\t\\theight: 22px;\\n\\t\\tposition: relative;\\n\\t\\tmargin: 25px 3px 10px 0px;\\n\\t\\tbox-sizing: content-box;\\n\\t\\tbackground-color: white;\\n\\t}\\n\\n\\t.search-icon {\\n\\t\\theight: 16px;\\n\\t\\twidth: 16px;\\n\\t\\tpadding-left: 3px;\\n\\t\\tmargin: 0;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 50%;\\n\\t\\ttransform: translateY(-50%);\\n\\t\\t-ms-transform: translateY(-50%);\\n\\t\\tcolor: var(--grey-400);\\n\\t\\tbox-sizing: content-box;\\n\\t}\\n\\n\\t.search-bar {\\n\\t\\tmargin: 0;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 50%;\\n\\t\\ttransform: translateY(-50%);\\n\\t\\t-ms-transform: translateY(-50%);\\n\\n\\t\\tborder: none;\\n\\t\\tpadding-left: 23px;\\n\\n\\t\\tcolor: var(--grey-600);\\n\\t\\tfont-size: 9pt;\\n\\n\\t\\twidth: calc(100% - 10px);\\n\\n\\t\\tfont-family: Arial;\\n\\t\\tline-height: normal;\\n\\t}\\n\\n\\tinput.search-bar::-moz-placeholder {\\n\\t\\tcolor: var(--grey-500);\\n\\t}\\n\\n\\tinput.search-bar::placeholder {\\n\\t\\tcolor: var(--grey-500);\\n\\t}\\n\\n\\t*:focus {\\n\\t\\toutline: none;\\n\\t}\\n\\n\\t@media (max-width: 600px) {\\n\\t\\t.search-container {\\n\\t\\t\\twidth: 98%;\\n\\t\\t\\theight: 28px;\\n\\t\\t}\\n\\n\\t\\t.search-bar {\\n\\t\\t\\tfont-size: 16px;\\n\\t\\t\\twidth: calc(100% - 20px);\\n\\t\\t}\\n\\t}\\n\\n\\t@media print {\\n\\t\\t.search-container {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AA2BC,gCAAkB,CACjB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CAAC,CACjC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CACzB,UAAU,CAAE,WAAW,CACvB,gBAAgB,CAAE,KACnB,CAEA,2BAAa,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,aAAa,CAAE,WAAW,IAAI,CAAC,CAC/B,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,WACb,CAEA,0BAAY,CACX,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,aAAa,CAAE,WAAW,IAAI,CAAC,CAE/B,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,CAElB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,SAAS,CAAE,GAAG,CAEd,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAExB,WAAW,CAAE,KAAK,CAClB,WAAW,CAAE,MACd,CAEA,KAAK,0BAAW,kBAAmB,CAClC,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,KAAK,0BAAW,aAAc,CAC7B,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,eAAC,MAAO,CACP,OAAO,CAAE,IACV,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,gCAAkB,CACjB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACT,CAEA,0BAAY,CACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CACxB,CACD,CAEA,OAAO,KAAM,CACZ,gCAAkB,CACjB,OAAO,CAAE,IACV,CACD"}`
};
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "Search" } = $$props;
  let { value } = $$props;
  let { searchFunction } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.searchFunction === void 0 && $$bindings.searchFunction && searchFunction !== void 0)
    $$bindings.searchFunction(searchFunction);
  $$result.css.add(css$7);
  return `<div class="search-container svelte-104e064"><input class="search-bar svelte-104e064" type="text"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}> <div class="search-icon svelte-104e064">${validate_component(Icon, "Icon").$$render($$result, { src: Search, class: "pl-0.5" }, {}, {})}</div> </div>`;
});
const InvisibleLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { link } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return ` ${building ? `${each(Array.from(new Set(data.map((row) => row[link]))), (href) => {
    return `<a${add_attribute("href", href, 0)} class="hidden" aria-hidden="true">${escape("")}</a>`;
  })}` : ``}`;
});
function safeExtractColumn(column, columnSummary) {
  const foundCols = columnSummary.filter((d) => d.id === column.id);
  if (foundCols === void 0 || foundCols.length !== 1) {
    const error = column.id === void 0 ? new Error(`please add an "id" property to all the <Column ... />`) : new Error(`column with id: "${column.id}" not found`);
    if (strictBuild) {
      throw error;
    }
    console.warn(error.message);
    return "";
  }
  return foundCols[0];
}
function weightedMean(data, valueCol, weightCol) {
  if (!weightCol)
    return null;
  if (!data.length)
    return null;
  let totalWeightedValue = 0;
  let totalWeight = 0;
  data.forEach((item) => {
    const value = Number(item[valueCol] ?? 0);
    const weight = Number(item[weightCol] ?? 0);
    totalWeightedValue += value * weight;
    totalWeight += weight;
  });
  return totalWeight > 0 ? totalWeightedValue / totalWeight : 0;
}
function aggregateColumn(data, columnName, aggType, columnType, weightColumnName = null) {
  if (!aggType && columnType === "number") {
    aggType = "sum";
  }
  if (!data || !data.length)
    return null;
  if (columnType !== "number" && ["sum", "min", "max", "mean", "weightedMean", "median", void 0].includes(aggType)) {
    return "-";
  }
  const columnValues = data.map((row) => row[columnName]).filter((val) => val !== void 0);
  switch (aggType) {
    case "sum":
      return columnValues.reduce((sum, val) => sum + Number(val), 0);
    case "min":
      return Math.min(...columnValues);
    case "max":
      return Math.max(...columnValues);
    case "mean":
      return columnValues.length ? columnValues.reduce((sum, val) => sum + Number(val), 0) / columnValues.length : "-";
    case "count":
      return data.length;
    case "countDistinct":
      return new Set(columnValues).size;
    case "weightedMean": {
      if (!weightColumnName)
        return "Weight column name required for weightedMean";
      let totalWeight = 0;
      let weightedSum = data.reduce((sum, row) => {
        const weight = row[weightColumnName] || 0;
        totalWeight += weight;
        return sum + (Number(row[columnName]) || 0) * weight;
      }, 0);
      return totalWeight > 0 ? weightedSum / totalWeight : null;
    }
    case "median": {
      const sortedValues = columnValues.sort((a, b) => a - b);
      const mid = Math.floor(sortedValues.length / 2);
      return sortedValues.length % 2 !== 0 ? sortedValues[mid] : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    }
    default:
      return `${aggType}`;
  }
}
function getFinalColumnOrder(columns, priorityColumns) {
  const restColumns = columns.filter((key) => !priorityColumns.includes(key));
  return [...priorityColumns, ...restColumns];
}
const Delta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = void 0 } = $$props;
  let { row = 0 } = $$props;
  let { column = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { chip = false } = $$props;
  let { downIsGood = false } = $$props;
  let { fmt = void 0 } = $$props;
  let { format_object = void 0 } = $$props;
  let { columnUnitSummary = void 0 } = $$props;
  let { showValue = true } = $$props;
  let { showSymbol = true } = $$props;
  let { symbolPosition = "right" } = $$props;
  let { align = "right" } = $$props;
  let { fontClass = chip ? "text-sm" : "text-base" } = $$props;
  let { neutralMin = 0 } = $$props;
  let { neutralMax = 0 } = $$props;
  let colorOptions = {
    positive: {
      color: downIsGood ? "var(--red-700)" : "var(--green-700)",
      chipColor: downIsGood ? "var(--red-100)" : "var(--green-100)",
      chipBorder: downIsGood ? "var(--red-300)" : "var(--green-300)"
    },
    negative: {
      color: downIsGood ? "var(--green-700)" : "var(--red-700)",
      chipColor: downIsGood ? "var(--green-100)" : "var(--red-100)",
      chipBorder: downIsGood ? "var(--green-300)" : "var(--red-300)"
    },
    neutral: {
      color: "var(--grey-500)",
      chipColor: "var(--grey-100)",
      chipBorder: "var(--grey-300)"
    }
  };
  let error;
  let selected_value;
  let columnSummary;
  let selected_format;
  let valueStatus;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.chip === void 0 && $$bindings.chip && chip !== void 0)
    $$bindings.chip(chip);
  if ($$props.downIsGood === void 0 && $$bindings.downIsGood && downIsGood !== void 0)
    $$bindings.downIsGood(downIsGood);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  if ($$props.format_object === void 0 && $$bindings.format_object && format_object !== void 0)
    $$bindings.format_object(format_object);
  if ($$props.columnUnitSummary === void 0 && $$bindings.columnUnitSummary && columnUnitSummary !== void 0)
    $$bindings.columnUnitSummary(columnUnitSummary);
  if ($$props.showValue === void 0 && $$bindings.showValue && showValue !== void 0)
    $$bindings.showValue(showValue);
  if ($$props.showSymbol === void 0 && $$bindings.showSymbol && showSymbol !== void 0)
    $$bindings.showSymbol(showSymbol);
  if ($$props.symbolPosition === void 0 && $$bindings.symbolPosition && symbolPosition !== void 0)
    $$bindings.symbolPosition(symbolPosition);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.fontClass === void 0 && $$bindings.fontClass && fontClass !== void 0)
    $$bindings.fontClass(fontClass);
  if ($$props.neutralMin === void 0 && $$bindings.neutralMin && neutralMin !== void 0)
    $$bindings.neutralMin(neutralMin);
  if ($$props.neutralMax === void 0 && $$bindings.neutralMax && neutralMax !== void 0)
    $$bindings.neutralMax(neutralMax);
  chip = chip === "true" || chip === true;
  downIsGood = downIsGood === "true" || downIsGood === true;
  showValue = showValue === "true" || showValue === true;
  showSymbol = showSymbol === "true" || showSymbol === true;
  {
    {
      try {
        error = void 0;
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
          selected_value = data[row][column];
          columnSummary = columnSummary.filter((d) => d.id === column);
          if (fmt) {
            selected_format = getFormatObjectFromString(fmt, columnSummary[0].format?.valueType);
          } else {
            selected_format = columnSummary[0].format;
          }
        } else if (value !== void 0) {
          if (isNaN(value)) {
            throw Error("value must be a number (value=" + value + ")");
          } else {
            selected_value = value;
            selected_format = fmt ? getFormatObjectFromString(fmt, "number") : format_object ?? void 0;
          }
        } else {
          throw Error("No data or value provided. If you referenced a query result, check that the name is correct.");
        }
        valueStatus = selected_value > neutralMax ? "positive" : selected_value < neutralMin ? "negative" : "neutral";
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
  return `${!error ? `<span class="${[
    "m-0 " + escape(fontClass, true) + " font-ui inline-block rounded-md",
    chip ? "px-1" : ""
  ].join(" ").trim()}"${add_styles({
    "background-color": chip ? colorOptions[valueStatus].chipColor : void 0,
    "border": chip ? `1px solid ${colorOptions[valueStatus].chipBorder}` : void 0,
    "color": colorOptions[valueStatus].color
  })}><span${add_styles({ "text-align": align ?? "right" })}>${symbolPosition === "right" ? `${showValue ? `${selected_value === null ? `<span class="font-[system-ui]" data-svelte-h="svelte-45ueay">–</span>` : `<span>${escape(formatValue(selected_value, selected_format, columnUnitSummary))}</span>`}` : ``} ${showSymbol ? `<span class="font-[system-ui]"><!-- HTML_TAG_START -->${valueStatus === "positive" ? "&#9650;" : valueStatus === "negative" ? "&#9660;" : "–&thinsp;"}<!-- HTML_TAG_END --></span>` : ``}` : `${showSymbol ? `<span class="font-[system-ui]"><!-- HTML_TAG_START -->${valueStatus === "positive" ? "&#9650;" : valueStatus === "negative" ? "&#9660;" : "—"}<!-- HTML_TAG_END --></span>` : ``} ${showValue ? `${selected_value === null ? `<span class="font-[system-ui]" data-svelte-h="svelte-45ueay">–</span>` : `<span>${escape(formatValue(selected_value, selected_format, columnUnitSummary))}</span>`}` : ``}`} ${text ? `<span>${escape(text)}</span>` : ``}</span></span>` : `${validate_component(ValueError, "ValueError").$$render($$result, { error }, {}, {})}`}`;
});
const { Object: Object_1$2 } = globals;
let chartType$1 = "Delta";
const Delta_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data = void 0 } = $$props;
  const initialHash = typeof data === "object" && "__isQueryStore" in data ? data.hash : void 0;
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
    skeleton: () => {
      return `<p slot="skeleton" class="text-gray-500" data-svelte-h="svelte-e46ma0">Loading...</p>`;
    },
    empty: () => {
      return `<span slot="empty">${!spreadProps.placeholder ? `${validate_component(EmptyChart, "EmptyChart").$$render(
        $$result,
        {
          emptyMessage,
          emptySet,
          chartType: chartType$1,
          isInitial
        },
        {},
        {}
      )}` : ``}</span>`;
    },
    default: ({ loaded }) => {
      return `${validate_component(Delta, "Delta").$$render(
        $$result,
        Object_1$2.assign({}, spreadProps, {
          data: loaded?.__isQueryStore ? Array.from(loaded) : loaded
        }),
        {},
        {}
      )}`;
    }
  })}`;
});
const css$6 = {
  code: ".string.svelte-iw64fb{text-align:left}.date.svelte-iw64fb{text-align:left}.number.svelte-iw64fb{text-align:right}.boolean.svelte-iw64fb{text-align:left}.index.svelte-iw64fb{color:var(--grey-300);text-align:left;max-width:-moz-min-content;max-width:min-content}.svelte-iw64fb:focus{outline:none}",
  map: `{"version":3,"file":"TableCell.svelte","sources":["TableCell.svelte"],"sourcesContent":["<script>\\n\\texport let dataType = undefined;\\n\\texport let align = undefined;\\n\\texport let height = undefined;\\n\\texport let width = undefined;\\n\\texport let wrap = undefined;\\n\\n\\texport let verticalAlign = 'middle';\\n\\texport let rowSpan = 1;\\n\\texport let colSpan = 1;\\n\\texport let show = true;\\n\\texport let cellColor = undefined;\\n\\texport let fontColor = undefined;\\n\\n\\texport let topBorder = undefined;\\n\\texport let paddingLeft = undefined;\\n\\texport let borderBottom = undefined;\\n\\n\\texport let compact = false;\\n\\tconsole.log(' --- test logging---');\\n\\n<\/script>\\n\\n<td\\n\\tclass=\\"{$$restProps.class ||\\n\\t\\t''} {dataType} {topBorder} whitespace-nowrap overflow-hidden first:pl-[3px]\\n\\t{compact ? 'text-xs py-[1px] px-[4px]' : 'py-[2px] px-[8px]'}\\n\\t\\"\\n\\tstyle:text-align={align}\\n\\tstyle:height\\n\\tstyle:width\\n\\tstyle:white-space={wrap ? 'normal' : 'nowrap'}\\n\\tstyle:vertical-align={verticalAlign}\\n\\tstyle:display={show ? undefined : 'none'}\\n\\trowspan={rowSpan}\\n\\tcolspan={colSpan}\\n\\tstyle:background-color={cellColor}\\n\\tstyle:color={fontColor}\\n\\tstyle:padding-left={paddingLeft}\\n\\tstyle:border-bottom={borderBottom}\\n>\\n\\t<slot />\\n</td>\\n\\n<style>\\n\\t.string {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.date {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.number {\\n\\t\\ttext-align: right;\\n\\t}\\n\\n\\t.boolean {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.index {\\n\\t\\tcolor: var(--grey-300);\\n\\t\\ttext-align: left;\\n\\t\\tmax-width: -moz-min-content;\\n\\t\\tmax-width: min-content;\\n\\t}\\n\\n\\t*:focus {\\n\\t\\toutline: none;\\n\\t}</style>\\n"],"names":[],"mappings":"AA6CC,qBAAQ,CACP,UAAU,CAAE,IACb,CAEA,mBAAM,CACL,UAAU,CAAE,IACb,CAEA,qBAAQ,CACP,UAAU,CAAE,KACb,CAEA,sBAAS,CACR,UAAU,CAAE,IACb,CAEA,oBAAO,CACN,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,gBAAgB,CAC3B,SAAS,CAAE,WACZ,CAEA,cAAC,MAAO,CACP,OAAO,CAAE,IACV"}`
};
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "dataType",
    "align",
    "height",
    "width",
    "wrap",
    "verticalAlign",
    "rowSpan",
    "colSpan",
    "show",
    "cellColor",
    "fontColor",
    "topBorder",
    "paddingLeft",
    "borderBottom",
    "compact"
  ]);
  let { dataType = void 0 } = $$props;
  let { align = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { wrap = void 0 } = $$props;
  let { verticalAlign = "middle" } = $$props;
  let { rowSpan = 1 } = $$props;
  let { colSpan = 1 } = $$props;
  let { show = true } = $$props;
  let { cellColor = void 0 } = $$props;
  let { fontColor = void 0 } = $$props;
  let { topBorder = void 0 } = $$props;
  let { paddingLeft = void 0 } = $$props;
  let { borderBottom = void 0 } = $$props;
  let { compact = false } = $$props;
  console.log(" --- test logging---");
  if ($$props.dataType === void 0 && $$bindings.dataType && dataType !== void 0)
    $$bindings.dataType(dataType);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  if ($$props.verticalAlign === void 0 && $$bindings.verticalAlign && verticalAlign !== void 0)
    $$bindings.verticalAlign(verticalAlign);
  if ($$props.rowSpan === void 0 && $$bindings.rowSpan && rowSpan !== void 0)
    $$bindings.rowSpan(rowSpan);
  if ($$props.colSpan === void 0 && $$bindings.colSpan && colSpan !== void 0)
    $$bindings.colSpan(colSpan);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.cellColor === void 0 && $$bindings.cellColor && cellColor !== void 0)
    $$bindings.cellColor(cellColor);
  if ($$props.fontColor === void 0 && $$bindings.fontColor && fontColor !== void 0)
    $$bindings.fontColor(fontColor);
  if ($$props.topBorder === void 0 && $$bindings.topBorder && topBorder !== void 0)
    $$bindings.topBorder(topBorder);
  if ($$props.paddingLeft === void 0 && $$bindings.paddingLeft && paddingLeft !== void 0)
    $$bindings.paddingLeft(paddingLeft);
  if ($$props.borderBottom === void 0 && $$bindings.borderBottom && borderBottom !== void 0)
    $$bindings.borderBottom(borderBottom);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$result.css.add(css$6);
  return `<td class="${escape($$restProps.class || "", true) + " " + escape(dataType, true) + " " + escape(topBorder, true) + " whitespace-nowrap overflow-hidden first:pl-[3px] " + escape(
    compact ? "text-xs py-[1px] px-[4px]" : "py-[2px] px-[8px]",
    true
  ) + " svelte-iw64fb"}"${add_attribute("rowspan", rowSpan, 0)}${add_attribute("colspan", colSpan, 0)}${add_styles({
    "text-align": align,
    height,
    width,
    "white-space": wrap ? "normal" : "nowrap",
    "vertical-align": verticalAlign,
    "display": show ? void 0 : "none",
    "background-color": cellColor,
    "color": fontColor,
    "padding-left": paddingLeft,
    "border-bottom": borderBottom
  })}>${slots.default ? slots.default({}) : ``} </td>`;
});
const css$5 = {
  code: ".row-lines.svelte-1ukk5on{border-bottom:thin solid var(--grey-200)}.shaded-row.svelte-1ukk5on{background-color:var(--grey-50)}.svelte-1ukk5on:focus{outline:none}.row-link.svelte-1ukk5on{cursor:pointer}.row-link.svelte-1ukk5on:hover{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}",
  map: `{"version":3,"file":"TableRow.svelte","sources":["TableRow.svelte"],"sourcesContent":["<script>\\n\\timport { safeExtractColumn } from './datatable.js';\\n\\timport Delta from '../core/Delta.svelte';\\n\\timport {\\n\\t\\tformatValue,\\n\\t\\tgetFormatObjectFromString\\n\\t} from '@evidence-dev/component-utilities/formatting';\\n\\timport { getContext } from 'svelte';\\n\\timport { propKey } from '@evidence-dev/component-utilities/chartContext';\\n\\timport TableCell from './TableCell.svelte';\\n\\timport chroma from 'chroma-js';\\n\\timport { uiColours } from '@evidence-dev/component-utilities/colours';\\n\\n\\tconst props = getContext(propKey);\\n\\n\\texport let displayedData = undefined;\\n\\texport let rowShading = undefined;\\n\\texport let link = undefined;\\n\\texport let rowNumbers = undefined;\\n\\texport let rowLines = undefined;\\n\\texport let index = undefined;\\n\\texport let columnSummary = undefined;\\n\\texport let grouped = false; // if part of a group - styling will be adjusted\\n\\texport let groupType = undefined;\\n\\texport let groupColumn = undefined;\\n\\texport let rowSpan = undefined;\\n\\texport let groupNamePosition = 'middle'; // middle (default) | top | bottom\\n\\texport let finalColumnOrder = undefined;\\n\\texport let compact = undefined;\\n\\n\\tfunction handleRowClick(url) {\\n\\t\\tif (link) {\\n\\t\\t\\twindow.location = url;\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n{#each displayedData as row, i}\\n\\t<tr\\n\\t\\tclass:shaded-row={rowShading && i % 2 === 1}\\n\\t\\tclass:row-link={link != undefined}\\n\\t\\ton:click={() => handleRowClick(row[link])}\\n\\t\\tclass:row-lines={rowLines}\\n\\t>\\n\\t\\t{#if rowNumbers && groupType !== 'section'}\\n\\t\\t\\t<TableCell class={'index w-[2%]'} {compact}>\\n\\t\\t\\t\\t{#if i === 0}\\n\\t\\t\\t\\t\\t{(index + i + 1).toLocaleString()}\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t{(index + i + 1).toLocaleString()}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</TableCell>\\n\\t\\t{/if}\\n\\n\\t\\t{#if $props.columns.length > 0}\\n\\t\\t\\t{#each $props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) as column, k}\\n\\t\\t\\t\\t{@const useCol = safeExtractColumn(column, columnSummary)}\\n\\t\\t\\t\\t{@const scaleCol = column.scaleColumn\\n\\t\\t\\t\\t\\t? columnSummary.find((d) => d.id === column.scaleColumn)\\n\\t\\t\\t\\t\\t: useCol}\\n\\t\\t\\t\\t{@const column_min = column.colorMin ?? scaleCol.columnUnitSummary?.min}\\n\\t\\t\\t\\t{@const column_max = column.colorMax ?? scaleCol.columnUnitSummary?.max}\\n\\t\\t\\t\\t{@const is_nonzero =\\n\\t\\t\\t\\t\\tcolumn_max - column_min !== 0 && !isNaN(column_max) && !isNaN(column_min)}\\n\\t\\t\\t\\t{@const column_format = column.fmt\\n\\t\\t\\t\\t\\t? getFormatObjectFromString(column.fmt, useCol.format?.valueType)\\n\\t\\t\\t\\t\\t: column.fmtColumn\\n\\t\\t\\t\\t\\t\\t? getFormatObjectFromString(row[column.fmtColumn], useCol.format?.valuetype)\\n\\t\\t\\t\\t\\t\\t: useCol.format}\\n\\t\\t\\t\\t{@const color_domain =\\n\\t\\t\\t\\t\\tcolumn.colorBreakpoints ??\\n\\t\\t\\t\\t\\t(column.colorMid ? [column_min, column.colorMid, column_max] : [column_min, column_max])}\\n\\t\\t\\t\\t{@const color_scale = column.colorPalette\\n\\t\\t\\t\\t\\t? chroma.scale(column.colorPalette).domain(color_domain).nodata('white')\\n\\t\\t\\t\\t\\t: ''}\\n\\t\\t\\t\\t{@const cell_color =\\n\\t\\t\\t\\t\\tcolumn.contentType === 'colorscale' && is_nonzero && column.colorPalette\\n\\t\\t\\t\\t\\t\\t? column.scaleColumn\\n\\t\\t\\t\\t\\t\\t\\t? color_scale(row[column.scaleColumn]).hex()\\n\\t\\t\\t\\t\\t\\t\\t: color_scale(row[column.id]).hex()\\n\\t\\t\\t\\t\\t\\t: ''}\\n\\t\\t\\t\\t{@const font_color = column.redNegatives\\n\\t\\t\\t\\t\\t? row[column.id] < 0\\n\\t\\t\\t\\t\\t\\t? 'rgb(220 38 38)'\\n\\t\\t\\t\\t\\t\\t: ''\\n\\t\\t\\t\\t\\t: column.contentType === 'colorscale' && is_nonzero && column.colorPalette\\n\\t\\t\\t\\t\\t\\t? chroma.contrast(cell_color, uiColours.grey999) <\\n\\t\\t\\t\\t\\t\\t\\tchroma.contrast(cell_color, 'white') + 0.5\\n\\t\\t\\t\\t\\t\\t\\t? 'white'\\n\\t\\t\\t\\t\\t\\t\\t: uiColours.grey999\\n\\t\\t\\t\\t\\t\\t: ''}\\n\\t\\t\\t\\t{@const bottom_border =\\n\\t\\t\\t\\t\\ti !== displayedData.length - 1 &&\\n\\t\\t\\t\\t\\trowLines &&\\n\\t\\t\\t\\t\\tcolumn.contentType === 'colorscale' &&\\n\\t\\t\\t\\t\\tis_nonzero &&\\n\\t\\t\\t\\t\\tcolumn.colorPalette\\n\\t\\t\\t\\t\\t\\t? \`1px solid \${chroma(cell_color).darken(0.5)}\`\\n\\t\\t\\t\\t\\t\\t: ''}\\n\\t\\t\\t\\t<TableCell\\n\\t\\t\\t\\t\\tclass={useCol?.type}\\n\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\tverticalAlign={groupType === 'section' ? groupNamePosition : undefined}\\n\\t\\t\\t\\t\\trowSpan={groupType === 'section' && groupColumn === useCol.id && i === 0 ? rowSpan : 1}\\n\\t\\t\\t\\t\\tshow={!(groupType === 'section' && groupColumn === useCol.id && i !== 0)}\\n\\t\\t\\t\\t\\talign={column.align}\\n\\t\\t\\t\\t\\tpaddingLeft={k === 0 && grouped && groupType === 'accordion' && !rowNumbers\\n\\t\\t\\t\\t\\t\\t? '28px'\\n\\t\\t\\t\\t\\t\\t: undefined}\\n\\t\\t\\t\\t\\theight={column.height}\\n\\t\\t\\t\\t\\twidth={column.width}\\n\\t\\t\\t\\t\\twrap={column.wrap}\\n\\t\\t\\t\\t\\tcellColor={cell_color}\\n\\t\\t\\t\\t\\tfontColor={font_color}\\n\\t\\t\\t\\t\\tborderBottom={bottom_border}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{#if column.contentType === 'image' && row[column.id] !== undefined}\\n\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\tsrc={row[column.id]}\\n\\t\\t\\t\\t\\t\\t\\talt={column.alt\\n\\t\\t\\t\\t\\t\\t\\t\\t? row[column.alt]\\n\\t\\t\\t\\t\\t\\t\\t\\t: row[column.id].replace(/^(.*[/])/g, '').replace(/[.][^.]+$/g, '')}\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"mx-auto my-2 max-w-[unset] rounded-[unset]\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle:height={column.height}\\n\\t\\t\\t\\t\\t\\t\\tstyle:width={column.width}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{:else if column.contentType === 'link' && row[column.id] !== undefined}\\n\\t\\t\\t\\t\\t\\t<!-- if \`column.linkLabel\` is a column in \`row\`, but undefined, display - -->\\n\\t\\t\\t\\t\\t\\t{#if column.linkLabel != undefined && row[column.linkLabel] == undefined && column.linkLabel in row}\\n\\t\\t\\t\\t\\t\\t\\t-\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\thref={row[column.id]}\\n\\t\\t\\t\\t\\t\\t\\t\\ttarget={column.openInNewTab ? '_blank' : ''}\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"text-blue-600 hover:text-blue-700 transition-colors duration-200\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if column.linkLabel != undefined}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- if the linklabel is a column name, display that column -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if row[column.linkLabel] != undefined}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{@const labelSummary = safeExtractColumn(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{ id: column.linkLabel },\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{formatValue(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trow[column.linkLabel],\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumn.fmt\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? getFormatObjectFromString(column.fmt, labelSummary.format?.valueType)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: labelSummary.format,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlabelSummary.columnUnitSummary\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- otherwise, consider it a label (like Details ->) and display it -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{column.linkLabel}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- if no linkLabel is specified, display the link itself -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{@const columnSummary = useCol}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{formatValue(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trow[column.id],\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumn.fmt\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? getFormatObjectFromString(column.fmt, columnSummary.format?.valueType)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: columnSummary.format,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcolumnSummary.columnUnitSummary\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{:else if column.contentType === 'delta' && row[column.id] !== undefined}\\n\\t\\t\\t\\t\\t\\t<Delta\\n\\t\\t\\t\\t\\t\\t\\tvalue={row[column.id]}\\n\\t\\t\\t\\t\\t\\t\\tdownIsGood={column.downIsGood}\\n\\t\\t\\t\\t\\t\\t\\tformat_object={column_format}\\n\\t\\t\\t\\t\\t\\t\\tcolumnUnitSummary={useCol.columnUnitSummary}\\n\\t\\t\\t\\t\\t\\t\\tshowValue={column.showValue}\\n\\t\\t\\t\\t\\t\\t\\tshowSymbol={column.deltaSymbol}\\n\\t\\t\\t\\t\\t\\t\\talign={column.align}\\n\\t\\t\\t\\t\\t\\t\\tfontClass=\\"text-[9.25pt]\\"\\n\\t\\t\\t\\t\\t\\t\\tneutralMin={column.neutralMin}\\n\\t\\t\\t\\t\\t\\t\\tneutralMax={column.neutralMax}\\n\\t\\t\\t\\t\\t\\t\\tchip={column.chip}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{:else if column.contentType === 'html' && row[column.id] !== undefined}\\n\\t\\t\\t\\t\\t\\t{@html row[column.id]}\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t{formatValue(row[column.id], column_format, useCol.columnUnitSummary)}\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</TableCell>\\n\\t\\t\\t{/each}\\n\\t\\t{:else}\\n\\t\\t\\t{#each columnSummary\\n\\t\\t\\t\\t.filter((d) => d.show === true)\\n\\t\\t\\t\\t.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) as column, j}\\n\\t\\t\\t\\t<!-- Check if last row in table-->\\n\\t\\t\\t\\t<TableCell\\n\\t\\t\\t\\t\\tclass={column.type}\\n\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\trowSpan={groupType === 'section' && groupColumn === column.id && i === 0 ? rowSpan : 1}\\n\\t\\t\\t\\t\\tshow={!(groupType === 'section' && groupColumn === column.id && i !== 0)}\\n\\t\\t\\t\\t\\tpaddingLeft={j === 0 && grouped && groupType === 'accordion' && !rowNumbers\\n\\t\\t\\t\\t\\t\\t? '28px'\\n\\t\\t\\t\\t\\t\\t: undefined}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{formatValue(row[column.id], column.format, column.columnUnitSummary)}\\n\\t\\t\\t\\t</TableCell>\\n\\t\\t\\t{/each}\\n\\t\\t{/if}\\n\\t</tr>\\n{/each}\\n\\n<style>\\n\\t.row-lines {\\n\\t\\tborder-bottom: thin solid var(--grey-200);\\n\\t}\\n\\n\\t.shaded-row {\\n\\t\\tbackground-color: var(--grey-50);\\n\\t}\\n\\n\\t*:focus {\\n\\t\\toutline: none;\\n\\t}\\n\\n\\t.row-link {\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.row-link:hover {\\n\\t\\t--tw-bg-opacity: 1;\\n\\t\\tbackground-color: rgb(239 246 255 / var(--tw-bg-opacity));\\n\\t}</style>\\n"],"names":[],"mappings":"AAkNC,yBAAW,CACV,aAAa,CAAE,IAAI,CAAC,KAAK,CAAC,IAAI,UAAU,CACzC,CAEA,0BAAY,CACX,gBAAgB,CAAE,IAAI,SAAS,CAChC,CAEA,eAAC,MAAO,CACP,OAAO,CAAE,IACV,CAEA,wBAAU,CACT,MAAM,CAAE,OACT,CAEA,wBAAS,MAAO,CACf,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CACzD"}`
};
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $props, $$unsubscribe_props;
  const props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let { displayedData = void 0 } = $$props;
  let { rowShading = void 0 } = $$props;
  let { link = void 0 } = $$props;
  let { rowNumbers = void 0 } = $$props;
  let { rowLines = void 0 } = $$props;
  let { index = void 0 } = $$props;
  let { columnSummary = void 0 } = $$props;
  let { grouped = false } = $$props;
  let { groupType = void 0 } = $$props;
  let { groupColumn = void 0 } = $$props;
  let { rowSpan = void 0 } = $$props;
  let { groupNamePosition = "middle" } = $$props;
  let { finalColumnOrder = void 0 } = $$props;
  let { compact = void 0 } = $$props;
  if ($$props.displayedData === void 0 && $$bindings.displayedData && displayedData !== void 0)
    $$bindings.displayedData(displayedData);
  if ($$props.rowShading === void 0 && $$bindings.rowShading && rowShading !== void 0)
    $$bindings.rowShading(rowShading);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.rowNumbers === void 0 && $$bindings.rowNumbers && rowNumbers !== void 0)
    $$bindings.rowNumbers(rowNumbers);
  if ($$props.rowLines === void 0 && $$bindings.rowLines && rowLines !== void 0)
    $$bindings.rowLines(rowLines);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.columnSummary === void 0 && $$bindings.columnSummary && columnSummary !== void 0)
    $$bindings.columnSummary(columnSummary);
  if ($$props.grouped === void 0 && $$bindings.grouped && grouped !== void 0)
    $$bindings.grouped(grouped);
  if ($$props.groupType === void 0 && $$bindings.groupType && groupType !== void 0)
    $$bindings.groupType(groupType);
  if ($$props.groupColumn === void 0 && $$bindings.groupColumn && groupColumn !== void 0)
    $$bindings.groupColumn(groupColumn);
  if ($$props.rowSpan === void 0 && $$bindings.rowSpan && rowSpan !== void 0)
    $$bindings.rowSpan(rowSpan);
  if ($$props.groupNamePosition === void 0 && $$bindings.groupNamePosition && groupNamePosition !== void 0)
    $$bindings.groupNamePosition(groupNamePosition);
  if ($$props.finalColumnOrder === void 0 && $$bindings.finalColumnOrder && finalColumnOrder !== void 0)
    $$bindings.finalColumnOrder(finalColumnOrder);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$result.css.add(css$5);
  $$unsubscribe_props();
  return `${each(displayedData, (row, i) => {
    return `<tr class="${[
      "svelte-1ukk5on",
      (rowShading && i % 2 === 1 ? "shaded-row" : "") + " " + (link != void 0 ? "row-link" : "") + " " + (rowLines ? "row-lines" : "")
    ].join(" ").trim()}">${rowNumbers && groupType !== "section" ? `${validate_component(TableCell, "TableCell").$$render($$result, { class: "index w-[2%]", compact }, {}, {
      default: () => {
        return `${i === 0 ? `${escape((index + i + 1).toLocaleString())}` : `${escape((index + i + 1).toLocaleString())}`} `;
      }
    })}` : ``} ${$props.columns.length > 0 ? `${each($props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)), (column, k) => {
      let useCol = safeExtractColumn(column, columnSummary), scaleCol = column.scaleColumn ? columnSummary.find((d) => d.id === column.scaleColumn) : useCol, column_min = column.colorMin ?? scaleCol.columnUnitSummary?.min, column_max = column.colorMax ?? scaleCol.columnUnitSummary?.max, is_nonzero = column_max - column_min !== 0 && !isNaN(column_max) && !isNaN(column_min), column_format = column.fmt ? getFormatObjectFromString(column.fmt, useCol.format?.valueType) : column.fmtColumn ? getFormatObjectFromString(row[column.fmtColumn], useCol.format?.valuetype) : useCol.format, color_domain = column.colorBreakpoints ?? (column.colorMid ? [column_min, column.colorMid, column_max] : [column_min, column_max]), color_scale = column.colorPalette ? chroma.scale(column.colorPalette).domain(color_domain).nodata("white") : "", cell_color = column.contentType === "colorscale" && is_nonzero && column.colorPalette ? column.scaleColumn ? color_scale(row[column.scaleColumn]).hex() : color_scale(row[column.id]).hex() : "", font_color = column.redNegatives ? row[column.id] < 0 ? "rgb(220 38 38)" : "" : column.contentType === "colorscale" && is_nonzero && column.colorPalette ? chroma.contrast(cell_color, uiColours.grey999) < chroma.contrast(cell_color, "white") + 0.5 ? "white" : uiColours.grey999 : "", bottom_border = i !== displayedData.length - 1 && rowLines && column.contentType === "colorscale" && is_nonzero && column.colorPalette ? `1px solid ${chroma(cell_color).darken(0.5)}` : "";
      return `           ${validate_component(TableCell, "TableCell").$$render(
        $$result,
        {
          class: useCol?.type,
          compact,
          verticalAlign: groupType === "section" ? groupNamePosition : void 0,
          rowSpan: groupType === "section" && groupColumn === useCol.id && i === 0 ? rowSpan : 1,
          show: !(groupType === "section" && groupColumn === useCol.id && i !== 0),
          align: column.align,
          paddingLeft: k === 0 && grouped && groupType === "accordion" && !rowNumbers ? "28px" : void 0,
          height: column.height,
          width: column.width,
          wrap: column.wrap,
          cellColor: cell_color,
          fontColor: font_color,
          borderBottom: bottom_border
        },
        {},
        {
          default: () => {
            return `${column.contentType === "image" && row[column.id] !== void 0 ? `<img${add_attribute("src", row[column.id], 0)}${add_attribute(
              "alt",
              column.alt ? row[column.alt] : row[column.id].replace(/^(.*[/])/g, "").replace(/[.][^.]+$/g, ""),
              0
            )} class="mx-auto my-2 max-w-[unset] rounded-[unset] svelte-1ukk5on"${add_styles({
              "height": column.height,
              "width": column.width
            })}>` : `${column.contentType === "link" && row[column.id] !== void 0 ? ` ${column.linkLabel != void 0 && row[column.linkLabel] == void 0 && column.linkLabel in row ? `-` : `<a${add_attribute("href", row[column.id], 0)}${add_attribute("target", column.openInNewTab ? "_blank" : "", 0)} class="text-blue-600 hover:text-blue-700 transition-colors duration-200 svelte-1ukk5on">${column.linkLabel != void 0 ? ` ${row[column.linkLabel] != void 0 ? (() => {
              let labelSummary = safeExtractColumn({ id: column.linkLabel }, columnSummary);
              return ` ${escape(formatValue(
                row[column.linkLabel],
                column.fmt ? getFormatObjectFromString(column.fmt, labelSummary.format?.valueType) : labelSummary.format,
                labelSummary.columnUnitSummary
              ))} `;
            })() : `${escape(column.linkLabel)}`}` : (() => {
              let columnSummary2 = useCol;
              return `  ${escape(formatValue(
                row[column.id],
                column.fmt ? getFormatObjectFromString(column.fmt, columnSummary2.format?.valueType) : columnSummary2.format,
                columnSummary2.columnUnitSummary
              ))}`;
            })()} </a>`}` : `${column.contentType === "delta" && row[column.id] !== void 0 ? `${validate_component(Delta_1, "Delta").$$render(
              $$result,
              {
                value: row[column.id],
                downIsGood: column.downIsGood,
                format_object: column_format,
                columnUnitSummary: useCol.columnUnitSummary,
                showValue: column.showValue,
                showSymbol: column.deltaSymbol,
                align: column.align,
                fontClass: "text-[9.25pt]",
                neutralMin: column.neutralMin,
                neutralMax: column.neutralMax,
                chip: column.chip
              },
              {},
              {}
            )}` : `${column.contentType === "html" && row[column.id] !== void 0 ? `<!-- HTML_TAG_START -->${row[column.id]}<!-- HTML_TAG_END -->` : `${escape(formatValue(row[column.id], column_format, useCol.columnUnitSummary))}`}`}`}`} `;
          }
        }
      )}`;
    })}` : `${each(columnSummary.filter((d) => d.show === true).sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)), (column, j) => {
      return ` ${validate_component(TableCell, "TableCell").$$render(
        $$result,
        {
          class: column.type,
          compact,
          rowSpan: groupType === "section" && groupColumn === column.id && i === 0 ? rowSpan : 1,
          show: !(groupType === "section" && groupColumn === column.id && i !== 0),
          paddingLeft: j === 0 && grouped && groupType === "accordion" && !rowNumbers ? "28px" : void 0
        },
        {},
        {
          default: () => {
            return `${escape(formatValue(row[column.id], column.format, column.columnUnitSummary))} `;
          }
        }
      )}`;
    })}`} </tr>`;
  })}`;
});
const TotalRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $props, $$unsubscribe_props;
  const props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let { data = void 0 } = $$props;
  let { rowNumbers = void 0 } = $$props;
  let { columnSummary = void 0 } = $$props;
  let { rowColor = void 0 } = $$props;
  let { fontColor = void 0 } = $$props;
  let { groupType = void 0 } = $$props;
  let { finalColumnOrder = void 0 } = $$props;
  let { compact = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.rowNumbers === void 0 && $$bindings.rowNumbers && rowNumbers !== void 0)
    $$bindings.rowNumbers(rowNumbers);
  if ($$props.columnSummary === void 0 && $$bindings.columnSummary && columnSummary !== void 0)
    $$bindings.columnSummary(columnSummary);
  if ($$props.rowColor === void 0 && $$bindings.rowColor && rowColor !== void 0)
    $$bindings.rowColor(rowColor);
  if ($$props.fontColor === void 0 && $$bindings.fontColor && fontColor !== void 0)
    $$bindings.fontColor(fontColor);
  if ($$props.groupType === void 0 && $$bindings.groupType && groupType !== void 0)
    $$bindings.groupType(groupType);
  if ($$props.finalColumnOrder === void 0 && $$bindings.finalColumnOrder && finalColumnOrder !== void 0)
    $$bindings.finalColumnOrder(finalColumnOrder);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$unsubscribe_props();
  return `<tr class="font-semibold"${add_styles({
    "background-color": rowColor,
    "color": fontColor
  })}>${rowNumbers && groupType !== "section" ? `${validate_component(TableCell, "TableCell").$$render(
    $$result,
    {
      class: "index w-[2%]",
      compact,
      topBorder: "border-t border-gray-600"
    },
    {},
    {}
  )}` : ``} ${each(
    $props.columns.length > 0 ? $props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) : columnSummary.filter((d) => d.show === true).sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)),
    (column) => {
      let colColumnSummary = safeExtractColumn(column, columnSummary), format = column.totalFmt ? getFormatObjectFromString(column.totalFmt) : column.fmt ? getFormatObjectFromString(column.fmt) : colColumnSummary.format, totalAgg = column.totalAgg ?? "sum";
      return `   ${validate_component(TableCell, "TableCell").$$render(
        $$result,
        {
          compact,
          dataType: colColumnSummary.type,
          align: column.align,
          height: column.height,
          width: column.width,
          wrap: column.wrap,
          topBorder: "border-t border-gray-600"
        },
        {},
        {
          default: () => {
            return `${[
              "sum",
              "mean",
              "weightedMean",
              "median",
              "min",
              "max",
              "count",
              "countDistinct"
            ].includes(totalAgg) ? `${column.contentType === "delta" ? `${validate_component(Delta_1, "Delta").$$render(
              $$result,
              {
                value: totalAgg === "weightedMean" ? weightedMean(data, column.id, column.weightCol) : colColumnSummary.columnUnitSummary[totalAgg],
                downIsGood: column.downIsGood,
                format_object: format,
                columnUnitSummary: colColumnSummary.columnUnitSummary,
                showValue: column.showValue,
                showSymbol: column.deltaSymbol,
                align: column.align,
                fontClass: "font-semibold text-[9.25pt]",
                neutralMin: column.neutralMin,
                neutralMax: column.neutralMax,
                chip: column.chip
              },
              {},
              {}
            )}` : `${escape(formatValue(
              totalAgg === "weightedMean" ? weightedMean(data, column.id, column.weightCol) : colColumnSummary.columnUnitSummary[totalAgg],
              format,
              colColumnSummary.columnUnitSummary
            ))}`}` : ` ${escape(column.totalFmt ? formatValue(totalAgg, format, colColumnSummary.columnUnitSummary) : totalAgg)}`} `;
          }
        }
      )}`;
    }
  )}</tr>`;
});
const SubtotalRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $props, $$unsubscribe_props;
  const props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let { groupName = void 0 } = $$props;
  let { currentGroupData = void 0 } = $$props;
  let { columnSummary = void 0 } = $$props;
  let { rowColor = "var(--grey-100)" } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupType = void 0 } = $$props;
  let { fontColor = void 0 } = $$props;
  let { finalColumnOrder = void 0 } = $$props;
  let { compact = void 0 } = $$props;
  if ($$props.groupName === void 0 && $$bindings.groupName && groupName !== void 0)
    $$bindings.groupName(groupName);
  if ($$props.currentGroupData === void 0 && $$bindings.currentGroupData && currentGroupData !== void 0)
    $$bindings.currentGroupData(currentGroupData);
  if ($$props.columnSummary === void 0 && $$bindings.columnSummary && columnSummary !== void 0)
    $$bindings.columnSummary(columnSummary);
  if ($$props.rowColor === void 0 && $$bindings.rowColor && rowColor !== void 0)
    $$bindings.rowColor(rowColor);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupType === void 0 && $$bindings.groupType && groupType !== void 0)
    $$bindings.groupType(groupType);
  if ($$props.fontColor === void 0 && $$bindings.fontColor && fontColor !== void 0)
    $$bindings.fontColor(fontColor);
  if ($$props.finalColumnOrder === void 0 && $$bindings.finalColumnOrder && finalColumnOrder !== void 0)
    $$bindings.finalColumnOrder(finalColumnOrder);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$unsubscribe_props();
  return `<tr class="w-full border-b-gray-400 border-b-[1px]"${add_styles({
    "background-color": rowColor,
    "color": fontColor
  })}>${each(
    $props.columns.length > 0 ? $props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) : columnSummary.filter((d) => d.show === true).sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)),
    (column) => {
      let useCol = safeExtractColumn(column, columnSummary), column_format = column.fmt ? getFormatObjectFromString(column.fmt, useCol.format?.valueType) : useCol.format, format = column.subtotalFmt ? getFormatObjectFromString(column.subtotalFmt) : column.totalFmt ? getFormatObjectFromString(column.totalFmt) : column_format, useFormat = format?.valueType === "date" ? "" : format;
      return `    ${validate_component(TableCell, "TableCell").$$render(
        $$result,
        {
          class: useCol.type + " font-medium border-t-[1px] border-t-gray-300",
          compact,
          align: column.align
        },
        {},
        {
          default: () => {
            return `${column.id !== groupBy ? `${column.contentType === "delta" ? `${validate_component(Delta_1, "Delta").$$render(
              $$result,
              {
                value: aggregateColumn(currentGroupData, column.id, column.totalAgg, useCol.type, column.weightCol),
                downIsGood: column.downIsGood,
                format_object: column_format,
                columnUnitSummary: useCol.columnUnitSummary,
                showValue: column.showValue,
                showSymbol: column.deltaSymbol,
                align: column.align,
                fontClass: "font-medium text-[9.25pt]",
                neutralMin: column.neutralMin,
                neutralMax: column.neutralMax,
                chip: column.chip
              },
              {},
              {}
            )}` : `${escape(formatValue(aggregateColumn(currentGroupData, column.id, column.totalAgg, useCol.type, column.weightCol), useFormat, useCol.columnUnitSummary))}`}` : `${groupType === "section" ? `${escape(groupName)}` : ``}`} `;
          }
        }
      )}`;
    }
  )}</tr>`;
});
const SortIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ascending } = $$props;
  if ($$props.ascending === void 0 && $$bindings.ascending && ascending !== void 0)
    $$bindings.ascending(ascending);
  return `${ascending ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: ChevronUp,
      class: "w-3 h-3 inline mb-0.5"
    },
    {},
    {}
  )}` : `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: ChevronDown,
      class: "w-3 h-3 inline mb-0.5"
    },
    {},
    {}
  )}`}`;
});
const css$4 = {
  code: "th.svelte-1vzwapn{white-space:nowrap;overflow:hidden}th.svelte-1vzwapn:first-child{padding-left:3px}.index.svelte-1vzwapn{color:var(--grey-300);text-align:left;max-width:-moz-min-content;max-width:min-content}.string.svelte-1vzwapn{text-align:left}.date.svelte-1vzwapn{text-align:left}.number.svelte-1vzwapn{text-align:right}.boolean.svelte-1vzwapn{text-align:left}",
  map: `{"version":3,"file":"TableHeader.svelte","sources":["TableHeader.svelte"],"sourcesContent":["<script>\\n\\timport SortIcon from '../../ui/SortIcon.svelte';\\n\\timport { safeExtractColumn } from './datatable.js';\\n\\timport { getContext } from 'svelte';\\n\\timport { propKey } from '@evidence-dev/component-utilities/chartContext';\\n\\tconst props = getContext(propKey);\\n\\n\\texport let rowNumbers = undefined;\\n\\texport let headerColor = undefined;\\n\\texport let headerFontColor = undefined;\\n\\texport let finalColumnOrder = undefined;\\n\\texport let columnSummary = undefined;\\n\\texport let sortable = undefined;\\n\\texport let sort = undefined;\\n\\texport let formatColumnTitles = undefined;\\n\\texport let sortBy = undefined;\\n\\texport let wrapTitles = undefined;\\n\\texport let compact = undefined;\\n<\/script>\\n\\n<thead>\\n\\t{#if $props.columns.length > 0}\\n\\t\\t{@const columnsWithGroupSpan = $props.columns.map((column, index, array) => {\\n\\t\\t\\t// Determine if this column starts a new group or continues an existing one\\n\\t\\t\\tlet isNewGroup = index === 0 || column.colGroup !== array[index - 1].colGroup;\\n\\t\\t\\tlet span = 1;\\n\\t\\t\\tif (column.colGroup) {\\n\\t\\t\\t\\t// Count how many contiguous columns have the same group\\n\\t\\t\\t\\tfor (let i = index + 1; i < array.length && array[i].colGroup === column.colGroup; i++) {\\n\\t\\t\\t\\t\\tspan++;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t\\treturn { ...column, isNewGroup, span: isNewGroup ? span : 0 }; // Only assign span to the first column in a group\\n\\t\\t})}\\n\\t\\t{#if columnsWithGroupSpan.length > 0}\\n\\t\\t\\t<tr class=\\"border-0\\" style:background-color={headerColor}>\\n\\t\\t\\t\\t{#if rowNumbers}\\n\\t\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\t\\tclass=\\"index w-[2%] {compact ? 'text-xs py-[1px] px-[4px]' : 'py-[2px] px-[8px]'}\\"\\n\\t\\t\\t\\t\\t\\tstyle:background-color={headerColor}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{#each columnsWithGroupSpan as column}\\n\\t\\t\\t\\t\\t{#if column.colGroup && column.isNewGroup}\\n\\t\\t\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\t\\t\\tcolspan={column.span}\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"pt-1 align-bottom text-gray-900 {compact ? 'px-[1px]' : 'px-[2px]'}\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<!-- Group header with dynamic colspan -->\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\" border-b-[1px] border-b-gray-600 whitespace-normal pb-[2px]\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{column.colGroup}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t{:else if column.colGroup}\\n\\t\\t\\t\\t\\t\\t<!-- Not new group, th covered by previous column span-->\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<!-- Not part of a group - empty header cell -->\\n\\t\\t\\t\\t\\t\\t<th></th>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</tr>\\n\\t\\t{/if}\\n\\t{/if}\\n\\n\\t<tr class=\\"border-b border-gray-600\\">\\n\\t\\t{#if rowNumbers}\\n\\t\\t\\t<th\\n\\t\\t\\t\\tclass=\\"index w-[2%] {compact ? 'text-xs py-[1px] px-[4px]' : 'py-[2px] px-[8px]'}\\"\\n\\t\\t\\t\\tstyle:background-color={headerColor}\\n\\t\\t\\t/>\\n\\t\\t{/if}\\n\\t\\t{#if $props.columns.length > 0}\\n\\t\\t\\t{#each $props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) as column}\\n\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\tclass=\\"{safeExtractColumn(column, columnSummary).type} {compact\\n\\t\\t\\t\\t\\t\\t? 'text-xs py-[1px] px-[4px]'\\n\\t\\t\\t\\t\\t\\t: 'py-[2px] px-[8px]'}\\"\\n\\t\\t\\t\\t\\tstyle:text-align={column.align}\\n\\t\\t\\t\\t\\tstyle:color={headerFontColor}\\n\\t\\t\\t\\t\\tstyle:background-color={headerColor}\\n\\t\\t\\t\\t\\tstyle:cursor={sortable ? 'pointer' : 'auto'}\\n\\t\\t\\t\\t\\tstyle:white-space={column.wrapTitle || wrapTitles ? 'normal' : 'nowrap'}\\n\\t\\t\\t\\t\\ton:click={sortable ? sort(column.id) : ''}\\n\\t\\t\\t\\t\\tstyle:vertical-align=\\"bottom\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{column.title\\n\\t\\t\\t\\t\\t\\t? column.title\\n\\t\\t\\t\\t\\t\\t: formatColumnTitles\\n\\t\\t\\t\\t\\t\\t\\t? safeExtractColumn(column, columnSummary).title\\n\\t\\t\\t\\t\\t\\t\\t: safeExtractColumn(column, columnSummary).id}\\n\\t\\t\\t\\t\\t{#if sortBy.col === column.id}\\n\\t\\t\\t\\t\\t\\t<SortIcon ascending={sortBy.ascending} />\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</th>\\n\\t\\t\\t{/each}\\n\\t\\t{:else}\\n\\t\\t\\t{#each columnSummary\\n\\t\\t\\t\\t.filter((d) => d.show === true)\\n\\t\\t\\t\\t.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) as column}\\n\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\tclass=\\"{column.type} {compact ? 'text-xs py-[1px] px-[4px]' : 'py-[2px] px-[8px]'}\\"\\n\\t\\t\\t\\t\\tstyle:color={headerFontColor}\\n\\t\\t\\t\\t\\tstyle:background-color={headerColor}\\n\\t\\t\\t\\t\\tstyle:cursor={sortable ? 'pointer' : 'auto'}\\n\\t\\t\\t\\t\\tstyle:white-space={wrapTitles ? 'normal' : 'nowrap'}\\n\\t\\t\\t\\t\\tstyle:vertical-align=\\"bottom\\"\\n\\t\\t\\t\\t\\ton:click={sortable ? sort(column.id) : ''}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<span class=\\"col-header\\">\\n\\t\\t\\t\\t\\t\\t{formatColumnTitles ? column.title : column.id}\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t{#if sortBy.col === column.id}\\n\\t\\t\\t\\t\\t\\t<SortIcon ascending={sortBy.ascending} />\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</th>\\n\\t\\t\\t{/each}\\n\\t\\t{/if}\\n\\t</tr>\\n</thead>\\n\\n<style>\\n\\tth {\\n\\t\\twhite-space: nowrap;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\tth:first-child {\\n\\t\\tpadding-left: 3px;\\n\\t}\\n\\n\\t.index {\\n\\t\\tcolor: var(--grey-300);\\n\\t\\ttext-align: left;\\n\\t\\tmax-width: -moz-min-content;\\n\\t\\tmax-width: min-content;\\n\\t}\\n\\n\\t.string {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.date {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.number {\\n\\t\\ttext-align: right;\\n\\t}\\n\\n\\t.boolean {\\n\\t\\ttext-align: left;\\n\\t}</style>\\n"],"names":[],"mappings":"AAyHC,iBAAG,CACF,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MACX,CAEA,iBAAE,YAAa,CACd,YAAY,CAAE,GACf,CAEA,qBAAO,CACN,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,gBAAgB,CAC3B,SAAS,CAAE,WACZ,CAEA,sBAAQ,CACP,UAAU,CAAE,IACb,CAEA,oBAAM,CACL,UAAU,CAAE,IACb,CAEA,sBAAQ,CACP,UAAU,CAAE,KACb,CAEA,uBAAS,CACR,UAAU,CAAE,IACb"}`
};
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $props, $$unsubscribe_props;
  const props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let { rowNumbers = void 0 } = $$props;
  let { headerColor = void 0 } = $$props;
  let { headerFontColor = void 0 } = $$props;
  let { finalColumnOrder = void 0 } = $$props;
  let { columnSummary = void 0 } = $$props;
  let { sortable = void 0 } = $$props;
  let { sort = void 0 } = $$props;
  let { formatColumnTitles = void 0 } = $$props;
  let { sortBy = void 0 } = $$props;
  let { wrapTitles = void 0 } = $$props;
  let { compact = void 0 } = $$props;
  if ($$props.rowNumbers === void 0 && $$bindings.rowNumbers && rowNumbers !== void 0)
    $$bindings.rowNumbers(rowNumbers);
  if ($$props.headerColor === void 0 && $$bindings.headerColor && headerColor !== void 0)
    $$bindings.headerColor(headerColor);
  if ($$props.headerFontColor === void 0 && $$bindings.headerFontColor && headerFontColor !== void 0)
    $$bindings.headerFontColor(headerFontColor);
  if ($$props.finalColumnOrder === void 0 && $$bindings.finalColumnOrder && finalColumnOrder !== void 0)
    $$bindings.finalColumnOrder(finalColumnOrder);
  if ($$props.columnSummary === void 0 && $$bindings.columnSummary && columnSummary !== void 0)
    $$bindings.columnSummary(columnSummary);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.formatColumnTitles === void 0 && $$bindings.formatColumnTitles && formatColumnTitles !== void 0)
    $$bindings.formatColumnTitles(formatColumnTitles);
  if ($$props.sortBy === void 0 && $$bindings.sortBy && sortBy !== void 0)
    $$bindings.sortBy(sortBy);
  if ($$props.wrapTitles === void 0 && $$bindings.wrapTitles && wrapTitles !== void 0)
    $$bindings.wrapTitles(wrapTitles);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$result.css.add(css$4);
  $$unsubscribe_props();
  return `<thead>${$props.columns.length > 0 ? (() => {
    let columnsWithGroupSpan = $props.columns.map((column, index, array) => {
      let isNewGroup = index === 0 || column.colGroup !== array[index - 1].colGroup;
      let span = 1;
      if (column.colGroup) {
        for (let i = index + 1; i < array.length && array[i].colGroup === column.colGroup; i++) {
          span++;
        }
      }
      return {
        ...column,
        isNewGroup,
        span: isNewGroup ? span : 0
      };
    });
    return ` ${columnsWithGroupSpan.length > 0 ? `<tr class="border-0"${add_styles({ "background-color": headerColor })}>${rowNumbers ? `<th class="${"index w-[2%] " + escape(
      compact ? "text-xs py-[1px] px-[4px]" : "py-[2px] px-[8px]",
      true
    ) + " svelte-1vzwapn"}"${add_styles({ "background-color": headerColor })}></th>` : ``} ${each(columnsWithGroupSpan, (column) => {
      return `${column.colGroup && column.isNewGroup ? `<th${add_attribute("colspan", column.span, 0)} class="${"pt-1 align-bottom text-gray-900 " + escape(compact ? "px-[1px]" : "px-[2px]", true) + " svelte-1vzwapn"}"> <div class="border-b-[1px] border-b-gray-600 whitespace-normal pb-[2px]">${escape(column.colGroup)}</div> </th>` : `${column.colGroup ? `` : ` <th class="svelte-1vzwapn"></th>`}`}`;
    })}</tr>` : ``}`;
  })() : ``} <tr class="border-b border-gray-600">${rowNumbers ? `<th class="${"index w-[2%] " + escape(
    compact ? "text-xs py-[1px] px-[4px]" : "py-[2px] px-[8px]",
    true
  ) + " svelte-1vzwapn"}"${add_styles({ "background-color": headerColor })}></th>` : ``} ${$props.columns.length > 0 ? `${each($props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)), (column) => {
    return `<th class="${escape(safeExtractColumn(column, columnSummary).type, true) + " " + escape(
      compact ? "text-xs py-[1px] px-[4px]" : "py-[2px] px-[8px]",
      true
    ) + " svelte-1vzwapn"}"${add_styles({
      "text-align": column.align,
      "color": headerFontColor,
      "background-color": headerColor,
      "cursor": sortable ? "pointer" : "auto",
      "white-space": column.wrapTitle || wrapTitles ? "normal" : "nowrap",
      "vertical-align": `bottom`
    })}>${escape(column.title ? column.title : formatColumnTitles ? safeExtractColumn(column, columnSummary).title : safeExtractColumn(column, columnSummary).id)} ${sortBy.col === column.id ? `${validate_component(SortIcon, "SortIcon").$$render($$result, { ascending: sortBy.ascending }, {}, {})}` : ``} </th>`;
  })}` : `${each(columnSummary.filter((d) => d.show === true).sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)), (column) => {
    return `<th class="${escape(column.type, true) + " " + escape(
      compact ? "text-xs py-[1px] px-[4px]" : "py-[2px] px-[8px]",
      true
    ) + " svelte-1vzwapn"}"${add_styles({
      "color": headerFontColor,
      "background-color": headerColor,
      "cursor": sortable ? "pointer" : "auto",
      "white-space": wrapTitles ? "normal" : "nowrap",
      "vertical-align": `bottom`
    })}><span class="col-header">${escape(formatColumnTitles ? column.title : column.id)}</span> ${sortBy.col === column.id ? `${validate_component(SortIcon, "SortIcon").$$render($$result, { ascending: sortBy.ascending }, {}, {})}` : ``} </th>`;
  })}`}</tr> </thead>`;
});
const css$3 = {
  code: "svg.svelte-c6mrxw.svelte-c6mrxw{display:inline-block;vertical-align:middle;transition:transform 0.15s ease-in}span.svelte-c6mrxw.svelte-c6mrxw{margin:auto 0 auto 0}[aria-expanded='true'].svelte-c6mrxw svg.svelte-c6mrxw{transform:rotate(0.25turn)}",
  map: `{"version":3,"file":"TableGroupIcon.svelte","sources":["TableGroupIcon.svelte"],"sourcesContent":["<script>\\n\\texport let toggled = false;\\n\\texport let color = '#2d2d2d';\\n\\texport let size = 10;\\n<\/script>\\n\\n<span aria-expanded={toggled} class=\\"inline-flex\\">\\n\\t<svg viewBox=\\"0 0 16 16\\" width={size} height={size}\\n\\t\\t><path\\n\\t\\t\\tfill={color}\\n\\t\\t\\tfill-rule=\\"evenodd\\"\\n\\t\\t\\td=\\"M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z\\"\\n\\t\\t/></svg\\n\\t>\\n</span>\\n\\n<style>\\n\\tsvg {\\n\\t\\tdisplay: inline-block;\\n\\t\\tvertical-align: middle;\\n\\t\\ttransition: transform 0.15s ease-in;\\n\\t}\\n\\n\\tspan {\\n\\t\\tmargin: auto 0 auto 0;\\n\\t}\\n\\n\\t[aria-expanded='true'] svg {\\n\\t\\ttransform: rotate(0.25turn);\\n\\t}</style>\\n"],"names":[],"mappings":"AAiBC,+BAAI,CACH,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,OAC7B,CAEA,gCAAK,CACJ,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACrB,CAEA,CAAC,aAAa,CAAC,MAAM,eAAC,CAAC,iBAAI,CAC1B,SAAS,CAAE,OAAO,QAAQ,CAC3B"}`
};
const TableGroupIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggled = false } = $$props;
  let { color = "#2d2d2d" } = $$props;
  let { size = 10 } = $$props;
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$3);
  return `<span${add_attribute("aria-expanded", toggled, 0)} class="inline-flex svelte-c6mrxw"><svg viewBox="0 0 16 16"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} class="svelte-c6mrxw"><path${add_attribute("fill", color, 0)} fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path></svg> </span>`;
});
const css$2 = {
  code: "@media print{.chevron.svelte-bqpzbr{display:none}}",
  map: `{"version":3,"file":"GroupRow.svelte","sources":["GroupRow.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\timport TableGroupIcon from './TableGroupIcon.svelte';\\n\\timport Delta from '../core/Delta.svelte';\\n\\timport { safeExtractColumn, aggregateColumn } from './datatable.js';\\n\\timport {\\n\\t\\tformatValue,\\n\\t\\tgetFormatObjectFromString\\n\\t} from '@evidence-dev/component-utilities/formatting';\\n\\timport TableCell from './TableCell.svelte';\\n\\timport { getContext } from 'svelte';\\n\\timport { propKey } from '@evidence-dev/component-utilities/chartContext';\\n\\tconst props = getContext(propKey);\\n\\n\\texport let groupName;\\n\\texport let currentGroupData;\\n\\texport let toggled;\\n\\texport let columnSummary;\\n\\texport let rowNumbers;\\n\\texport let rowColor = undefined;\\n\\texport let subtotals = true;\\n\\texport let finalColumnOrder = undefined;\\n\\texport let compact = undefined;\\n\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\tfunction toggleGroup() {\\n\\t\\tdispatch('toggle', { groupName });\\n\\t}\\n<\/script>\\n\\n<tr\\n\\ton:click={toggleGroup}\\n\\tclass=\\"cursor-pointer hover:bg-gray-100 w-full border-t-[1px] border-gray-200\\"\\n\\trole=\\"button\\"\\n\\ttabindex=\\"0\\"\\n\\ton:keypress={(e) => e.key === 'Enter' && toggleGroup()}\\n\\tstyle:background-color={rowColor}\\n>\\n\\t{#each $props.columns.length > 0 ? $props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) : columnSummary\\n\\t\\t\\t\\t.filter((d) => d.show === true)\\n\\t\\t\\t\\t.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) as column, j}\\n\\t\\t{@const useCol = safeExtractColumn(column, columnSummary)}\\n\\t\\t{@const column_format = column.fmt\\n\\t\\t\\t? getFormatObjectFromString(column.fmt, useCol.format?.valueType)\\n\\t\\t\\t: useCol.format}\\n\\t\\t{@const format = column.subtotalFmt\\n\\t\\t\\t? getFormatObjectFromString(column.subtotalFmt)\\n\\t\\t\\t: column.totalFmt\\n\\t\\t\\t\\t? getFormatObjectFromString(column.totalFmt)\\n\\t\\t\\t\\t: column_format}\\n\\t\\t{@const useFormat = format?.valueType === 'date' ? '' : format}\\n\\t\\t{#if j === 0}\\n\\t\\t\\t<TableCell\\n\\t\\t\\t\\tclass=\\"font-medium py-[3px]\\"\\n\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\tcolSpan={rowNumbers ? 2 : 1}\\n\\t\\t\\t\\tpaddingLeft=\\"1px\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"items-center gap-2 align-top\\">\\n\\t\\t\\t\\t\\t<span class=\\"inline-flex print-hidden chevron\\"><TableGroupIcon {toggled} /></span>\\n\\t\\t\\t\\t\\t{groupName}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</TableCell>\\n\\t\\t{:else if subtotals}\\n\\t\\t\\t<TableCell class=\\"{useCol.type} font-medium\\" {compact} align={column.align}>\\n\\t\\t\\t\\t{#if [undefined, 'sum', 'mean', 'median', 'min', 'max', 'weightedMean', 'count', 'countDistinct'].includes(column.totalAgg) || column.subtotalFmt}\\n\\t\\t\\t\\t\\t{#if column.contentType === 'delta'}\\n\\t\\t\\t\\t\\t\\t<Delta\\n\\t\\t\\t\\t\\t\\t\\tvalue={aggregateColumn(\\n\\t\\t\\t\\t\\t\\t\\t\\tcurrentGroupData,\\n\\t\\t\\t\\t\\t\\t\\t\\tcolumn.id,\\n\\t\\t\\t\\t\\t\\t\\t\\tcolumn.totalAgg,\\n\\t\\t\\t\\t\\t\\t\\t\\tuseCol.type,\\n\\t\\t\\t\\t\\t\\t\\t\\tcolumn.weightCol\\n\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\tdownIsGood={column.downIsGood}\\n\\t\\t\\t\\t\\t\\t\\tformat_object={useFormat}\\n\\t\\t\\t\\t\\t\\t\\tcolumnUnitSummary={useCol.columnUnitSummary}\\n\\t\\t\\t\\t\\t\\t\\tshowValue={column.showValue}\\n\\t\\t\\t\\t\\t\\t\\tshowSymbol={column.deltaSymbol}\\n\\t\\t\\t\\t\\t\\t\\talign={column.align}\\n\\t\\t\\t\\t\\t\\t\\tfontClass=\\"font-medium text-[9.25pt]\\"\\n\\t\\t\\t\\t\\t\\t\\tneutralMin={column.neutralMin}\\n\\t\\t\\t\\t\\t\\t\\tneutralMax={column.neutralMax}\\n\\t\\t\\t\\t\\t\\t\\tchip={column.chip}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t{formatValue(\\n\\t\\t\\t\\t\\t\\t\\taggregateColumn(\\n\\t\\t\\t\\t\\t\\t\\t\\tcurrentGroupData,\\n\\t\\t\\t\\t\\t\\t\\t\\tcolumn.id,\\n\\t\\t\\t\\t\\t\\t\\t\\tcolumn.totalAgg,\\n\\t\\t\\t\\t\\t\\t\\t\\tuseCol.type,\\n\\t\\t\\t\\t\\t\\t\\t\\tcolumn.weightCol\\n\\t\\t\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\t\\t\\tuseFormat,\\n\\t\\t\\t\\t\\t\\t\\tuseCol.columnUnitSummary\\n\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t{column.totalAgg}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</TableCell>\\n\\t\\t{:else}\\n\\t\\t\\t<TableCell />\\n\\t\\t{/if}\\n\\t{/each}\\n</tr>\\n\\n<style>\\n\\t@media print {\\n\\t\\t.chevron {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AA+GC,OAAO,KAAM,CACZ,sBAAS,CACR,OAAO,CAAE,IACV,CACD"}`
};
const GroupRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $props, $$unsubscribe_props;
  const props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let { groupName } = $$props;
  let { currentGroupData } = $$props;
  let { toggled } = $$props;
  let { columnSummary } = $$props;
  let { rowNumbers } = $$props;
  let { rowColor = void 0 } = $$props;
  let { subtotals = true } = $$props;
  let { finalColumnOrder = void 0 } = $$props;
  let { compact = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.groupName === void 0 && $$bindings.groupName && groupName !== void 0)
    $$bindings.groupName(groupName);
  if ($$props.currentGroupData === void 0 && $$bindings.currentGroupData && currentGroupData !== void 0)
    $$bindings.currentGroupData(currentGroupData);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.columnSummary === void 0 && $$bindings.columnSummary && columnSummary !== void 0)
    $$bindings.columnSummary(columnSummary);
  if ($$props.rowNumbers === void 0 && $$bindings.rowNumbers && rowNumbers !== void 0)
    $$bindings.rowNumbers(rowNumbers);
  if ($$props.rowColor === void 0 && $$bindings.rowColor && rowColor !== void 0)
    $$bindings.rowColor(rowColor);
  if ($$props.subtotals === void 0 && $$bindings.subtotals && subtotals !== void 0)
    $$bindings.subtotals(subtotals);
  if ($$props.finalColumnOrder === void 0 && $$bindings.finalColumnOrder && finalColumnOrder !== void 0)
    $$bindings.finalColumnOrder(finalColumnOrder);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$result.css.add(css$2);
  $$unsubscribe_props();
  return `<tr class="cursor-pointer hover:bg-gray-100 w-full border-t-[1px] border-gray-200" role="button" tabindex="0"${add_styles({ "background-color": rowColor })}>${each(
    $props.columns.length > 0 ? $props.columns.sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)) : columnSummary.filter((d) => d.show === true).sort((a, b) => finalColumnOrder.indexOf(a.id) - finalColumnOrder.indexOf(b.id)),
    (column, j) => {
      let useCol = safeExtractColumn(column, columnSummary), column_format = column.fmt ? getFormatObjectFromString(column.fmt, useCol.format?.valueType) : useCol.format, format = column.subtotalFmt ? getFormatObjectFromString(column.subtotalFmt) : column.totalFmt ? getFormatObjectFromString(column.totalFmt) : column_format, useFormat = format?.valueType === "date" ? "" : format;
      return `    ${j === 0 ? `${validate_component(TableCell, "TableCell").$$render(
        $$result,
        {
          class: "font-medium py-[3px]",
          compact,
          colSpan: rowNumbers ? 2 : 1,
          paddingLeft: "1px"
        },
        {},
        {
          default: () => {
            return `<div class="items-center gap-2 align-top"><span class="inline-flex print-hidden chevron svelte-bqpzbr">${validate_component(TableGroupIcon, "TableGroupIcon").$$render($$result, { toggled }, {}, {})}</span> ${escape(groupName)}</div> `;
          }
        }
      )}` : `${subtotals ? `${validate_component(TableCell, "TableCell").$$render(
        $$result,
        {
          class: useCol.type + " font-medium",
          compact,
          align: column.align
        },
        {},
        {
          default: () => {
            return `${[
              void 0,
              "sum",
              "mean",
              "median",
              "min",
              "max",
              "weightedMean",
              "count",
              "countDistinct"
            ].includes(column.totalAgg) || column.subtotalFmt ? `${column.contentType === "delta" ? `${validate_component(Delta_1, "Delta").$$render(
              $$result,
              {
                value: aggregateColumn(currentGroupData, column.id, column.totalAgg, useCol.type, column.weightCol),
                downIsGood: column.downIsGood,
                format_object: useFormat,
                columnUnitSummary: useCol.columnUnitSummary,
                showValue: column.showValue,
                showSymbol: column.deltaSymbol,
                align: column.align,
                fontClass: "font-medium text-[9.25pt]",
                neutralMin: column.neutralMin,
                neutralMax: column.neutralMax,
                chip: column.chip
              },
              {},
              {}
            )}` : `${escape(formatValue(aggregateColumn(currentGroupData, column.id, column.totalAgg, useCol.type, column.weightCol), useFormat, useCol.columnUnitSummary))}`}` : `${escape(column.totalAgg)}`} `;
          }
        }
      )}` : `${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {})}`}`}`;
    }
  )} </tr>`;
});
const css$1 = {
  code: "button.svelte-p80uux svg{stroke:var(--grey-400);margin-top:auto;margin-bottom:auto;transition:stroke 200ms}button.svelte-p80uux{display:flex;cursor:pointer;font-family:var(--ui-font-family);font-size:1em;color:var(--grey-400);justify-items:flex-end;align-items:baseline;background-color:transparent;border:none;padding:0;margin:0 5px;gap:3px;transition:color 200ms;-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none}button.svelte-p80uux:hover{color:var(--blue-600);transition:color 200ms}button.svelte-p80uux:hover svg{stroke:var(--blue-600);transition:stroke 200ms}@media(max-width: 600px){button.svelte-p80uux{display:none}}@media print{button.svelte-p80uux{display:none}}",
  map: `{"version":3,"file":"EnterFullScreen.svelte","sources":["EnterFullScreen.svelte"],"sourcesContent":["<script>\\n\\timport { fade } from 'svelte/transition';\\n\\timport { Icon } from '@steeze-ui/svelte-icon';\\n\\timport { EnterFullScreen } from '@steeze-ui/radix-icons';\\n\\n\\texport let display;\\n<\/script>\\n\\n{#if display}\\n\\t<div transition:fade|local={{ duration: 200 }}>\\n\\t\\t<button type=\\"button\\" aria-label=\\"Enter Fullscreen\\" on:click>\\n\\t\\t\\t<span>Fullscreen</span>\\n\\t\\t\\t<Icon class=\\"w-3 h-3\\" src={EnterFullScreen} />\\n\\t\\t</button>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\tbutton :global(svg) {\\n\\t\\tstroke: var(--grey-400);\\n\\t\\tmargin-top: auto;\\n\\t\\tmargin-bottom: auto;\\n\\t\\ttransition: stroke 200ms;\\n\\t}\\n\\n\\tbutton {\\n\\t\\tdisplay: flex;\\n\\t\\tcursor: pointer;\\n\\t\\tfont-family: var(--ui-font-family);\\n\\t\\tfont-size: 1em;\\n\\t\\tcolor: var(--grey-400);\\n\\t\\tjustify-items: flex-end;\\n\\t\\talign-items: baseline;\\n\\t\\tbackground-color: transparent;\\n\\t\\tborder: none;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0 5px;\\n\\t\\tgap: 3px;\\n\\t\\ttransition: color 200ms;\\n\\t\\t-moz-user-select: none;\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-o-user-select: none;\\n\\t\\tuser-select: none;\\n\\t}\\n\\n\\tbutton:hover {\\n\\t\\tcolor: var(--blue-600);\\n\\t\\ttransition: color 200ms;\\n\\t}\\n\\n\\tbutton:hover :global(svg) {\\n\\t\\tstroke: var(--blue-600);\\n\\t\\ttransition: stroke 200ms;\\n\\t}\\n\\n\\t@media (max-width: 600px) {\\n\\t\\tbutton {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n\\n\\t@media print {\\n\\t\\tbutton {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AAkBC,oBAAM,CAAS,GAAK,CACnB,MAAM,CAAE,IAAI,UAAU,CAAC,CACvB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,MAAM,CAAC,KACpB,CAEA,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IAAI,gBAAgB,CAAC,CAClC,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,aAAa,CAAE,QAAQ,CACvB,WAAW,CAAE,QAAQ,CACrB,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,IAAI,CACtB,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,IAAI,CACpB,WAAW,CAAE,IACd,CAEA,oBAAM,MAAO,CACZ,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,KAAK,CAAC,KACnB,CAEA,oBAAM,MAAM,CAAS,GAAK,CACzB,MAAM,CAAE,IAAI,UAAU,CAAC,CACvB,UAAU,CAAE,MAAM,CAAC,KACpB,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,oBAAO,CACN,OAAO,CAAE,IACV,CACD,CAEA,OAAO,KAAM,CACZ,oBAAO,CACN,OAAO,CAAE,IACV,CACD"}`
};
const EnterFullScreen_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  $$result.css.add(css$1);
  return `${display ? `<div><button type="button" aria-label="Enter Fullscreen" class="svelte-p80uux"><span data-svelte-h="svelte-qzhydn">Fullscreen</span> ${validate_component(Icon, "Icon").$$render($$result, { class: "w-3 h-3", src: EnterFullScreen }, {}, {})}</button></div>` : ``}`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let $props, $$unsubscribe_props;
  let props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  let error;
  let { id } = $$props;
  function checkColumnName() {
    try {
      if (!Object.keys($props.data[0]).includes(id)) {
        error = "Error in table: " + id + " does not exist in the dataset";
        throw new Error(error);
      }
    } catch (e) {
      error = e.message;
      if (strictBuild) {
        throw error;
      }
    }
  }
  let { title = void 0 } = $$props;
  let { align = void 0 } = $$props;
  if (align === "centre") {
    align = "center";
  }
  let { wrap = false } = $$props;
  let { wrapTitle = false } = $$props;
  let { contentType = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  let { openInNewTab = false } = $$props;
  let { linkLabel = void 0 } = $$props;
  let { fmt = void 0 } = $$props;
  let { totalAgg = void 0 } = $$props;
  let { totalFmt = void 0 } = $$props;
  let { weightCol = void 0 } = $$props;
  let { subtotalFmt = void 0 } = $$props;
  let { colorMax = void 0 } = $$props;
  let { colorMin = void 0 } = $$props;
  let { colorMid = void 0 } = $$props;
  let { colorBreakpoints = void 0 } = $$props;
  let { scaleColor = "green" } = $$props;
  let { scaleColumn = void 0 } = $$props;
  let colorList = {
    green: ["white", "hsla(129, 33%, 57%,1)"],
    red: ["white", "hsla(0, 56%, 56%,1)"],
    blue: ["white", "hsla(198, 56%, 56%,1)"]
  };
  let colorPalette;
  if (scaleColor instanceof Array) {
    colorPalette = scaleColor;
  } else {
    colorPalette = colorList[scaleColor];
    if (colorPalette == void 0) {
      colorPalette = ["white", scaleColor];
    }
  }
  let { downIsGood = false } = $$props;
  let { showValue = true } = $$props;
  let { deltaSymbol = true } = $$props;
  let { neutralMin = 0 } = $$props;
  let { neutralMax = 0 } = $$props;
  let { chip = false } = $$props;
  let { colGroup = void 0 } = $$props;
  let { fmtColumn = void 0 } = $$props;
  let { redNegatives = false } = $$props;
  const updateProps = () => {
    props.update((d) => {
      const matchingIndex = d.columns.findIndex((c) => c.id === id);
      if (matchingIndex === -1) {
        d.columns.push(options);
      } else {
        d.columns = [
          ...d.columns.slice(0, matchingIndex),
          options,
          ...d.columns.slice(matchingIndex + 1)
        ];
      }
      return d;
    });
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  if ($$props.wrapTitle === void 0 && $$bindings.wrapTitle && wrapTitle !== void 0)
    $$bindings.wrapTitle(wrapTitle);
  if ($$props.contentType === void 0 && $$bindings.contentType && contentType !== void 0)
    $$bindings.contentType(contentType);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.openInNewTab === void 0 && $$bindings.openInNewTab && openInNewTab !== void 0)
    $$bindings.openInNewTab(openInNewTab);
  if ($$props.linkLabel === void 0 && $$bindings.linkLabel && linkLabel !== void 0)
    $$bindings.linkLabel(linkLabel);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  if ($$props.totalAgg === void 0 && $$bindings.totalAgg && totalAgg !== void 0)
    $$bindings.totalAgg(totalAgg);
  if ($$props.totalFmt === void 0 && $$bindings.totalFmt && totalFmt !== void 0)
    $$bindings.totalFmt(totalFmt);
  if ($$props.weightCol === void 0 && $$bindings.weightCol && weightCol !== void 0)
    $$bindings.weightCol(weightCol);
  if ($$props.subtotalFmt === void 0 && $$bindings.subtotalFmt && subtotalFmt !== void 0)
    $$bindings.subtotalFmt(subtotalFmt);
  if ($$props.colorMax === void 0 && $$bindings.colorMax && colorMax !== void 0)
    $$bindings.colorMax(colorMax);
  if ($$props.colorMin === void 0 && $$bindings.colorMin && colorMin !== void 0)
    $$bindings.colorMin(colorMin);
  if ($$props.colorMid === void 0 && $$bindings.colorMid && colorMid !== void 0)
    $$bindings.colorMid(colorMid);
  if ($$props.colorBreakpoints === void 0 && $$bindings.colorBreakpoints && colorBreakpoints !== void 0)
    $$bindings.colorBreakpoints(colorBreakpoints);
  if ($$props.scaleColor === void 0 && $$bindings.scaleColor && scaleColor !== void 0)
    $$bindings.scaleColor(scaleColor);
  if ($$props.scaleColumn === void 0 && $$bindings.scaleColumn && scaleColumn !== void 0)
    $$bindings.scaleColumn(scaleColumn);
  if ($$props.downIsGood === void 0 && $$bindings.downIsGood && downIsGood !== void 0)
    $$bindings.downIsGood(downIsGood);
  if ($$props.showValue === void 0 && $$bindings.showValue && showValue !== void 0)
    $$bindings.showValue(showValue);
  if ($$props.deltaSymbol === void 0 && $$bindings.deltaSymbol && deltaSymbol !== void 0)
    $$bindings.deltaSymbol(deltaSymbol);
  if ($$props.neutralMin === void 0 && $$bindings.neutralMin && neutralMin !== void 0)
    $$bindings.neutralMin(neutralMin);
  if ($$props.neutralMax === void 0 && $$bindings.neutralMax && neutralMax !== void 0)
    $$bindings.neutralMax(neutralMax);
  if ($$props.chip === void 0 && $$bindings.chip && chip !== void 0)
    $$bindings.chip(chip);
  if ($$props.colGroup === void 0 && $$bindings.colGroup && colGroup !== void 0)
    $$bindings.colGroup(colGroup);
  if ($$props.fmtColumn === void 0 && $$bindings.fmtColumn && fmtColumn !== void 0)
    $$bindings.fmtColumn(fmtColumn);
  if ($$props.redNegatives === void 0 && $$bindings.redNegatives && redNegatives !== void 0)
    $$bindings.redNegatives(redNegatives);
  {
    checkColumnName();
  }
  wrap = wrap === "true" || wrap === true;
  wrapTitle = wrapTitle === "true" || wrapTitle === true;
  openInNewTab = openInNewTab === "true" || openInNewTab === true;
  downIsGood = downIsGood === "true" || downIsGood === true;
  showValue = showValue === "true" || showValue === true;
  deltaSymbol = deltaSymbol === "true" || deltaSymbol === true;
  chip = chip === "true" || chip === true;
  redNegatives = redNegatives === "true" || redNegatives === true;
  options = {
    id,
    title,
    align,
    wrap,
    wrapTitle,
    contentType,
    height,
    width,
    alt,
    openInNewTab,
    linkLabel,
    fmt,
    fmtColumn,
    totalAgg,
    totalFmt,
    subtotalFmt,
    weightCol,
    downIsGood,
    deltaSymbol,
    chip,
    neutralMin,
    neutralMax,
    showValue,
    colorMax,
    colorMin,
    scaleColor,
    scaleColumn,
    colGroup,
    colorMid,
    colorBreakpoints,
    colorPalette,
    redNegatives
  };
  {
    updateProps();
  }
  $$unsubscribe_props();
  return ``;
});
const { Object: Object_1$1 } = globals;
const css = {
  code: ".table-container.svelte-fmobgf.svelte-fmobgf{font-size:9.5pt}.scrollbox.svelte-fmobgf.svelte-fmobgf{width:100%;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--scrollbar-color) var(--scrollbar-track-color)}:root{--scrollbar-track-color:transparent;--scrollbar-color:rgba(0, 0, 0, 0.2);--scrollbar-active-color:rgba(0, 0, 0, 0.4);--scrollbar-size:0.75rem;--scrollbar-minlength:1.5rem}.scrollbox.svelte-fmobgf.svelte-fmobgf::-webkit-scrollbar{height:var(--scrollbar-size);width:var(--scrollbar-size)}.scrollbox.svelte-fmobgf.svelte-fmobgf::-webkit-scrollbar-track{background-color:var(--scrollbar-track-color)}.scrollbox.svelte-fmobgf.svelte-fmobgf::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:7px;background-clip:padding-box}.scrollbox.svelte-fmobgf.svelte-fmobgf::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-active-color)}.scrollbox.svelte-fmobgf.svelte-fmobgf::-webkit-scrollbar-thumb:vertical{min-height:var(--scrollbar-minlength);border:3px solid transparent}.scrollbox.svelte-fmobgf.svelte-fmobgf::-webkit-scrollbar-thumb:horizontal{min-width:var(--scrollbar-minlength);border:3px solid transparent}table.svelte-fmobgf.svelte-fmobgf{display:table;width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}.page-changer.svelte-fmobgf.svelte-fmobgf{padding:0;color:var(--grey-400);height:1.1em;width:1.1em}.pagination.svelte-fmobgf.svelte-fmobgf{font-size:12px;display:flex;align-items:center;justify-content:flex-end;height:2em;font-family:var(--ui-font-family);color:var(--grey-500);-webkit-user-select:none;-moz-user-select:none;user-select:none;text-align:right;margin-top:0.5em;margin-bottom:1.8em;font-variant-numeric:tabular-nums}.page-labels.svelte-fmobgf.svelte-fmobgf{display:flex;justify-content:flex-start;align-items:center;gap:3px}.page-changer.svelte-fmobgf.svelte-fmobgf{font-size:20px;background:none;border:none;cursor:pointer;transition:color 200ms}.page-changer.hovering.svelte-fmobgf.svelte-fmobgf{color:var(--blue-600);transition:color 200ms}.page-changer.svelte-fmobgf.svelte-fmobgf:disabled{cursor:auto;color:var(--grey-300);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:color 200ms}.page-icon.svelte-fmobgf.svelte-fmobgf{height:1em;width:1em}.page-input.svelte-fmobgf.svelte-fmobgf{box-sizing:content-box;text-align:center;padding:0.25em 0.5em;margin:0;border:1px solid transparent;border-radius:4px;font-size:12px;color:var(--grey-500)}.table-footer.svelte-fmobgf.svelte-fmobgf{display:flex;justify-content:flex-end;align-items:center;margin:10px 0px;font-size:12px;height:9px}.page-input.svelte-fmobgf.svelte-fmobgf::-webkit-outer-spin-button,.page-input.svelte-fmobgf.svelte-fmobgf::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.page-input[type='number'].svelte-fmobgf.svelte-fmobgf{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.page-input.hovering.svelte-fmobgf.svelte-fmobgf{border:1px solid var(--grey-200)}.page-input.error.svelte-fmobgf.svelte-fmobgf{border:1px solid var(--red-600)}.page-input.svelte-fmobgf.svelte-fmobgf::-moz-placeholder{color:var(--grey-500)}.page-input.svelte-fmobgf.svelte-fmobgf::placeholder{color:var(--grey-500)}button.svelte-fmobgf:enabled>.page-icon.svelte-fmobgf:hover{color:var(--blue-800)}.svelte-fmobgf.svelte-fmobgf:focus{outline:none}.svelte-fmobgf.svelte-fmobgf::-moz-placeholder{color:var(--grey-400);opacity:1}.svelte-fmobgf.svelte-fmobgf::placeholder{color:var(--grey-400);opacity:1}.svelte-fmobgf.svelte-fmobgf:-ms-input-placeholder{color:var(--grey-400)}.svelte-fmobgf.svelte-fmobgf::-ms-input-placeholder{color:var(--grey-400)}.noresults.svelte-fmobgf.svelte-fmobgf{display:none;color:var(--grey-400);text-align:center;margin-top:5px}.shownoresults.svelte-fmobgf.svelte-fmobgf{display:block}.print-page-count.svelte-fmobgf.svelte-fmobgf{display:none}@media(max-width: 600px){.page-changer.svelte-fmobgf.svelte-fmobgf{height:1.2em;width:1.2em}.page-icon.svelte-fmobgf.svelte-fmobgf{height:1.2em;width:1.2em}.page-count.svelte-fmobgf.svelte-fmobgf{font-size:1.1em}.page-input.svelte-fmobgf.svelte-fmobgf{font-size:1.1em}}@media print{.pagination.svelte-fmobgf.svelte-fmobgf{-moz-column-break-inside:avoid;break-inside:avoid}.page-changer.svelte-fmobgf.svelte-fmobgf{display:none}.page-count.svelte-fmobgf.svelte-fmobgf{display:none}.print-page-count.svelte-fmobgf.svelte-fmobgf{display:inline}}",
  map: `{"version":3,"file":"_DataTable.svelte","sources":["_DataTable.svelte"],"sourcesContent":["<script>\\n\\timport { writable } from 'svelte/store';\\n\\timport { setContext } from 'svelte';\\n\\timport { slide } from 'svelte/transition';\\n\\timport { propKey, strictBuild } from '@evidence-dev/component-utilities/chartContext';\\n\\timport getColumnSummary from '@evidence-dev/component-utilities/getColumnSummary';\\n\\timport { convertColumnToDate } from '@evidence-dev/component-utilities/dateParsing';\\n\\timport ErrorChart from '../core/ErrorChart.svelte';\\n\\timport SearchBar from '../core/SearchBar.svelte';\\n\\timport checkInputs from '@evidence-dev/component-utilities/checkInputs';\\n\\timport DownloadData from '../../ui/DownloadData.svelte';\\n\\timport InvisibleLinks from '../../../atoms/InvisibleLinks.svelte';\\n\\n\\timport { Icon } from '@steeze-ui/svelte-icon';\\n\\timport CodeBlock from '../../ui/CodeBlock.svelte';\\n\\timport { aggregateColumn, getFinalColumnOrder } from './datatable.js';\\n\\timport TableRow from './TableRow.svelte';\\n\\timport TotalRow from './TotalRow.svelte';\\n\\timport SubtotalRow from './SubtotalRow.svelte';\\n\\timport TableHeader from './TableHeader.svelte';\\n\\timport GroupRow from './GroupRow.svelte';\\n\\timport { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from '@steeze-ui/tabler-icons';\\n\\timport EnterFullScreen from './EnterFullScreen.svelte';\\n\\timport Fullscreen from '../../../atoms/fullscreen/Fullscreen.svelte';\\n\\timport Column from './Column.svelte';\\n\\timport { Query } from '@evidence-dev/sdk/usql';\\n\\timport QueryLoad from '../../../atoms/query-load/QueryLoad.svelte';\\n\\timport { toasts } from '@evidence-dev/component-utilities/stores';\\n\\timport { query } from '@evidence-dev/universal-sql/client-duckdb';\\n\\timport Skeleton from '../../../atoms/skeletons/Skeleton.svelte';\\n\\timport debounce from 'lodash.debounce';\\n\\n\\t// Set up props store\\n\\tlet props = writable({});\\n\\tsetContext(propKey, props);\\n\\n\\t// Data, pagination, and row index numbers\\n\\texport let data;\\n\\texport let queryID = undefined;\\n\\texport let rows = 10; // number of rows to show\\n\\t$: rows = Number.parseInt(rows);\\n\\n\\texport let rowNumbers = false;\\n\\t$: rowNumbers = rowNumbers === 'true' || rowNumbers === true;\\n\\n\\texport let groupBy = undefined;\\n\\texport let groupsOpen = true; // starting toggle for groups - open or closed\\n\\t$: groupsOpen = groupsOpen === 'true' || groupsOpen === true;\\n\\texport let groupType = 'accordion'; // accordion | section\\n\\texport let accordionRowColor = undefined;\\n\\texport let groupNamePosition = 'middle'; // middle (default) | top | bottom\\n\\n\\tif (groupType === 'section') {\\n\\t\\trowNumbers = false; // turn off row numbers\\n\\t}\\n\\n\\texport let subtotals = false;\\n\\t$: subtotals = subtotals === 'true' || subtotals === true;\\n\\n\\texport let subtotalRowColor = undefined;\\n\\texport let subtotalFontColor = undefined;\\n\\n\\tlet groupToggleStates = {};\\n\\n\\tfunction handleToggle({ detail }) {\\n\\t\\tconst { groupName } = detail;\\n\\t\\tgroupToggleStates[groupName] = !groupToggleStates[groupName];\\n\\t}\\n\\n\\tlet paginated;\\n\\t$: paginated = data.length > rows && !groupBy;\\n\\n\\tlet hovering = false;\\n\\n\\tlet marginTop = '1.5em';\\n\\tlet marginBottom = '1em';\\n\\tlet paddingBottom = '0em';\\n\\n\\texport let generateMarkdown = false;\\n\\t$: generateMarkdown = generateMarkdown === 'true' || generateMarkdown === true;\\n\\n\\t// Table features\\n\\texport let search = false;\\n\\t$: search = search === 'true' || search === true;\\n\\n\\texport let sortable = true;\\n\\t$: sortable = sortable === 'true' || sortable === true;\\n\\n\\texport let downloadable = true;\\n\\t$: downloadable = downloadable === 'true' || downloadable === true;\\n\\n\\texport let totalRow = false;\\n\\t$: totalRow = totalRow === 'true' || totalRow === true;\\n\\n\\texport let totalRowColor = undefined;\\n\\texport let totalFontColor = undefined;\\n\\n\\texport let isFullPage = false;\\n\\n\\t// Row Links:\\n\\texport let link = undefined;\\n\\n\\texport let showLinkCol = false; // hides link column when columns have not been explicitly selected\\n\\t$: showLinkCol = showLinkCol === 'true' || showLinkCol === true;\\n\\n\\tlet error = undefined;\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// Add props to store to let child components access them\\n\\t// ---------------------------------------------------------------------------------------\\n\\tprops.update((d) => {\\n\\t\\treturn { ...d, data, columns: [] };\\n\\t});\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// STYLING\\n\\t// ---------------------------------------------------------------------------------------\\n\\texport let rowShading = false;\\n\\t$: rowShading = rowShading === 'true' || rowShading === true;\\n\\n\\texport let rowLines = true;\\n\\t$: rowLines = rowLines === 'true' || rowLines === true;\\n\\n\\texport let wrapTitles = false;\\n\\t$: wrapTitles = wrapTitles === 'true' || wrapTitles === true;\\n\\n\\texport let headerColor = undefined;\\n\\texport let headerFontColor = 'var(--grey-900)';\\n\\n\\texport let formatColumnTitles = true;\\n\\t$: formatColumnTitles = formatColumnTitles === 'true' || formatColumnTitles === true;\\n\\n\\texport let backgroundColor = 'white';\\n\\n\\texport let compact = undefined;\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// DATA SETUP\\n\\t// ---------------------------------------------------------------------------------------\\n\\n\\tlet columnSummary;\\n\\n\\tlet priorityColumns = [groupBy];\\n\\n\\tprops.update((d) => {\\n\\t\\treturn { ...d, priorityColumns };\\n\\t});\\n\\n\\t$: try {\\n\\t\\terror = undefined;\\n\\n\\t\\t// CHECK INPUTS\\n\\t\\tcheckInputs(data);\\n\\n\\t\\t// GET COLUMN SUMMARY\\n\\t\\tcolumnSummary = getColumnSummary(data, 'array');\\n\\n\\t\\t// PROCESS DATES\\n\\t\\t// Filter for columns with type of \\"date\\"\\n\\t\\tconst dateCols = columnSummary\\n\\t\\t\\t.filter((d) => d.type === 'date' && !(data[0]?.[d.id] instanceof Date))\\n\\t\\t\\t.map((d) => d.id);\\n\\n\\t\\tfor (let i = 0; i < dateCols.length; i++) {\\n\\t\\t\\tdata = convertColumnToDate(data, dateCols[i]);\\n\\t\\t}\\n\\n\\t\\t// Hide link column if columns have not been explicitly selected:\\n\\t\\tfor (let i = 0; i < columnSummary.length; i++) {\\n\\t\\t\\tcolumnSummary[i].show = showLinkCol === false && columnSummary[i].id === link ? false : true;\\n\\t\\t}\\n\\t} catch (e) {\\n\\t\\terror = e.message;\\n\\t\\tif (strictBuild) {\\n\\t\\t\\tthrow error;\\n\\t\\t}\\n\\t}\\n\\n\\tlet index = 0;\\n\\n\\tlet inputPage = null;\\n\\t$: inputPageElWidth = \`\${(inputPage ?? 1).toString().length}ch\`;\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// SEARCH\\n\\t// ---------------------------------------------------------------------------------------\\n\\tlet searchValue = '';\\n\\t/** @type {import(\\"@evidence-dev/sdk/usql\\").QueryValue} */\\n\\tlet filteredData;\\n\\t$: filteredData = data;\\n\\tlet showNoResults = false;\\n\\n\\t/** @type {ReturnValue<typeof Query[\\"createReactive\\"]>}*/\\n\\tlet searchFactory;\\n\\t$: if (Query.isQuery(data) && search) {\\n\\t\\tsearchFactory = debounce(\\n\\t\\t\\tQuery.createReactive(\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tloadGracePeriod: 1000,\\n\\t\\t\\t\\t\\tcallback: (v) => {\\n\\t\\t\\t\\t\\t\\tfilteredData = v;\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\texecFn: query\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\tdata.opts,\\n\\t\\t\\t\\tdata\\n\\t\\t\\t),\\n\\t\\t\\t200\\n\\t\\t);\\n\\t}\\n\\n\\t$: if (searchFactory) {\\n\\t\\tif (searchValue) {\\n\\t\\t\\tsearchFactory(\\n\\t\\t\\t\\tdata.search(\\n\\t\\t\\t\\t\\tsearchValue,\\n\\t\\t\\t\\t\\tdata.columns.map((c) => c.column_name),\\n\\t\\t\\t\\t\\tsearchValue.length === 1 ? 0.5 : searchValue.length >= 6 ? 0.9 : 0.8\\n\\t\\t\\t\\t),\\n\\t\\t\\t\\tdata\\n\\t\\t\\t);\\n\\t\\t} else filteredData = data;\\n\\t}\\n\\n\\t$: if (search && !Query.isQuery(data)) {\\n\\t\\ttoasts.add({\\n\\t\\t\\tstatus: 'warning',\\n\\t\\t\\ttitle: 'Search Failed',\\n\\t\\t\\tdescription: 'Please use a query instead.',\\n\\t\\t\\ttimeout: 5000\\n\\t\\t});\\n\\t}\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// SORTING\\n\\t// ---------------------------------------------------------------------------------------\\n\\n\\tlet sortBy = { col: null, ascending: null };\\n\\n\\t$: sort = (column) => {\\n\\t\\tif (sortBy.col == column) {\\n\\t\\t\\tsortBy.ascending = !sortBy.ascending;\\n\\t\\t} else {\\n\\t\\t\\tsortBy.col = column;\\n\\t\\t\\tsortBy.ascending = true;\\n\\t\\t}\\n\\n\\t\\t// Modifier to sorting function for ascending or descending\\n\\t\\tconst sortModifier = sortBy.ascending ? 1 : -1;\\n\\n\\t\\tconst forceTopOfAscending = (val) =>\\n\\t\\t\\tval === undefined || val === null || (typeof val === 'number' && isNaN(val));\\n\\n\\t\\tconst sort = (a, b) =>\\n\\t\\t\\t(forceTopOfAscending(a[column]) && !forceTopOfAscending(b[column])) || a[column] < b[column]\\n\\t\\t\\t\\t? -1 * sortModifier\\n\\t\\t\\t\\t: (forceTopOfAscending(b[column]) && !forceTopOfAscending(a[column])) ||\\n\\t\\t\\t\\t\\t  a[column] > b[column]\\n\\t\\t\\t\\t\\t? 1 * sortModifier\\n\\t\\t\\t\\t\\t: 0;\\n\\t\\tdata.sort(sort);\\n\\t\\tfilteredData = filteredData.sort(sort);\\n\\n\\t\\tif (groupBy) {\\n\\t\\t\\t// sort within grouped data\\n\\t\\t\\tObject.keys(groupedData).forEach((groupName) => {\\n\\t\\t\\t\\tgroupedData[groupName] = groupedData[groupName].sort(sort);\\n\\t\\t\\t});\\n\\t\\t}\\n\\t};\\n\\n\\tlet sortedGroupNames;\\n\\t$: if (groupBy && sortBy.col) {\\n\\t\\t// Sorting groups based on aggregated values or group names\\n\\t\\tsortedGroupNames = Object.entries(groupRowData)\\n\\t\\t\\t.sort((a, b) => {\\n\\t\\t\\t\\tconst valA = a[1][sortBy.col],\\n\\t\\t\\t\\t\\tvalB = b[1][sortBy.col];\\n\\t\\t\\t\\t// Use the existing sort logic but apply it to groupRowData's values\\n\\t\\t\\t\\tif (\\n\\t\\t\\t\\t\\t(valA === undefined || valA === null || isNaN(valA)) &&\\n\\t\\t\\t\\t\\tvalB !== undefined &&\\n\\t\\t\\t\\t\\tvalB !== null &&\\n\\t\\t\\t\\t\\t!isNaN(valB)\\n\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\treturn -1 * (sortBy.ascending ? 1 : -1);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif (\\n\\t\\t\\t\\t\\t(valB === undefined || valB === null || isNaN(valB)) &&\\n\\t\\t\\t\\t\\tvalA !== undefined &&\\n\\t\\t\\t\\t\\tvalA !== null &&\\n\\t\\t\\t\\t\\t!isNaN(valA)\\n\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\treturn 1 * (sortBy.ascending ? 1 : -1);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif (valA < valB) {\\n\\t\\t\\t\\t\\treturn -1 * (sortBy.ascending ? 1 : -1);\\n\\t\\t\\t\\t} else if (valA > valB) {\\n\\t\\t\\t\\t\\treturn 1 * (sortBy.ascending ? 1 : -1);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\treturn 0;\\n\\t\\t\\t})\\n\\t\\t\\t.map((entry) => entry[0]); // Extract sorted group names\\n\\t} else {\\n\\t\\t// Default to alphabetical order of group names or another criterion when not sorting by a specific column\\n\\t\\tsortedGroupNames = Object.keys(groupedData).sort();\\n\\t}\\n\\n\\t// Reset sort condition when data object is changed\\n\\t$: data, (sortBy = { col: null, ascending: null });\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// PAGINATION\\n\\t// ---------------------------------------------------------------------------------------\\n\\n\\tlet totalRows;\\n\\t$: totalRows = filteredData.length;\\n\\n\\tlet displayedData = filteredData;\\n\\n\\tlet pageCount;\\n\\tlet currentPage = 1;\\n\\n\\t$: currentPage = Math.ceil((index + rows) / rows);\\n\\t$: currentPageElWidth = \`\${(currentPage ?? 1).toString().length}ch\`;\\n\\tlet max;\\n\\n\\t$: goToPage = (pageNumber) => {\\n\\t\\tindex = pageNumber * rows;\\n\\t\\tmax = index + rows;\\n\\t\\tcurrentPage = Math.ceil(max / rows);\\n\\t\\tif (inputPage) {\\n\\t\\t\\tinputPage = Math.ceil(max / rows);\\n\\t\\t}\\n\\t\\ttotalRows = filteredData.length;\\n\\t\\tdisplayedData = filteredData.slice(index, index + rows);\\n\\t};\\n\\n\\tlet displayedPageLength = 0;\\n\\n\\t$: if (paginated) {\\n\\t\\tpageCount = Math.ceil(filteredData.length / rows);\\n\\t\\tdisplayedData = filteredData.slice(index, index + rows);\\n\\t\\tdisplayedPageLength = displayedData.length;\\n\\t\\tif (pageCount < currentPage) {\\n\\t\\t\\tgoToPage(pageCount - 1);\\n\\t\\t}\\n\\t} else {\\n\\t\\tcurrentPage = 1;\\n\\t\\tdisplayedData = filteredData;\\n\\t}\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// DATA FOR EXPORT\\n\\t// ---------------------------------------------------------------------------------------\\n\\n\\tfunction dataSubset(data, selectedCols) {\\n\\t\\treturn data.map((obj) => {\\n\\t\\t\\tvar toReturn = {}; //object that would give each desired key for each part in arr\\n\\t\\t\\tselectedCols.forEach((key) => (toReturn[key] = obj[key])); //placing wanted keys in toReturn\\n\\t\\t\\treturn toReturn;\\n\\t\\t});\\n\\t}\\n\\n\\tlet tableData;\\n\\t$: tableData =\\n\\t\\t$props.columns.length > 0\\n\\t\\t\\t? dataSubset(\\n\\t\\t\\t\\t\\tdata,\\n\\t\\t\\t\\t\\t$props.columns.map((d) => d.id)\\n\\t\\t\\t\\t)\\n\\t\\t\\t: data;\\n\\n\\t// ---------------------------------------------------------------------------------------\\n\\t// GROUPED DATA\\n\\t// ---------------------------------------------------------------------------------------\\n\\n\\tlet groupedData = {};\\n\\tlet groupRowData = [];\\n\\n\\t$: if (!error) {\\n\\t\\tgroupedData = data.reduce((acc, row) => {\\n\\t\\t\\tconst groupName = row[groupBy];\\n\\t\\t\\tif (!acc[groupName]) {\\n\\t\\t\\t\\tacc[groupName] = [];\\n\\t\\t\\t}\\n\\t\\t\\tacc[groupName].push(row);\\n\\t\\t\\treturn acc;\\n\\t\\t}, {});\\n\\n\\t\\t// After groupedData is populated, calculate aggregations for groupRowData\\n\\t\\tgroupRowData = Object.keys(groupedData).reduce((acc, groupName) => {\\n\\t\\t\\tacc[groupName] = {}; // Initialize groupRow object for this group\\n\\n\\t\\t\\t// Get a list of columns to aggregate from $props.columns\\n\\t\\t\\tconst columnsToAggregate = $props.columns.length > 0 ? $props.columns : columnSummary;\\n\\n\\t\\t\\tcolumnsToAggregate.forEach((columnDef) => {\\n\\t\\t\\t\\tconst column = columnDef.id;\\n\\t\\t\\t\\tconst colType = columnSummary.find((d) => d.id === column)?.type;\\n\\t\\t\\t\\tconst totalAgg = columnDef.totalAgg;\\n\\t\\t\\t\\tconst weightCol = columnDef.weightCol;\\n\\t\\t\\t\\tconst rows = groupedData[groupName];\\n\\t\\t\\t\\tacc[groupName][column] = aggregateColumn(rows, column, totalAgg, colType, weightCol);\\n\\t\\t\\t});\\n\\n\\t\\t\\treturn acc;\\n\\t\\t}, {});\\n\\n\\t\\t// Update groupToggleStates only for new groups\\n\\t\\tconst existingGroups = Object.keys(groupToggleStates);\\n\\t\\tObject.keys(groupedData).forEach((groupName) => {\\n\\t\\t\\tif (!existingGroups.includes(groupName)) {\\n\\t\\t\\t\\tgroupToggleStates[groupName] = groupsOpen; // Only add new groups with the default state\\n\\t\\t\\t}\\n\\t\\t\\t// Existing states are untouched\\n\\t\\t});\\n\\t}\\n\\n\\tlet fullscreen = false;\\n\\t/** @type {number} */\\n\\tlet innerHeight;\\n<\/script>\\n\\n<svelte:window bind:innerHeight />\\n\\n{#if !isFullPage && innerHeight !== undefined}\\n\\t<Fullscreen bind:open={fullscreen}>\\n\\t\\t<!-- header and last row are 22.5+22.5 = 45px, middle rows are 23 -->\\n\\t\\t{@const ROW_HEIGHT = 23}\\n\\t\\t{@const Y_AXIS_PADDING = 45 + 234}\\n\\t\\t<div class=\\"pl-8 pt-4\\">\\n\\t\\t\\t<svelte:self\\n\\t\\t\\t\\t{...$$props}\\n\\t\\t\\t\\trows={1 + Math.round((innerHeight - Y_AXIS_PADDING) / ROW_HEIGHT)}\\n\\t\\t\\t\\tisFullPage\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#each $props.columns as column}\\n\\t\\t\\t\\t\\t<Column {...column} />\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</svelte:self>\\n\\t\\t</div>\\n\\t</Fullscreen>\\n{/if}\\n\\n{#if error === undefined}\\n\\t<slot />\\n\\n\\t{#if link}\\n\\t\\t<InvisibleLinks {data} {link} />\\n\\t{/if}\\n\\t{#each $props.columns.filter((column) => column.contentType === 'link') as column}\\n\\t\\t<InvisibleLinks {data} link={column.id} />\\n\\t{/each}\\n\\n\\t<div\\n\\t\\trole=\\"none\\"\\n\\t\\tclass=\\"table-container\\"\\n\\t\\ttransition:slide|local\\n\\t\\tstyle:margin-top={marginTop}\\n\\t\\tstyle:margin-bottom={marginBottom}\\n\\t\\tstyle:padding-bottom={paddingBottom}\\n\\t\\ton:mouseenter={() => (hovering = true)}\\n\\t\\ton:mouseleave={() => (hovering = false)}\\n\\t>\\n\\t\\t{#if search}\\n\\t\\t\\t<SearchBar bind:value={searchValue} searchFunction={() => {}} />\\n\\t\\t{/if}\\n\\n\\t\\t<div class=\\"scrollbox\\" style:background-color={backgroundColor}>\\n\\t\\t\\t<table>\\n\\t\\t\\t\\t<TableHeader\\n\\t\\t\\t\\t\\t{rowNumbers}\\n\\t\\t\\t\\t\\t{headerColor}\\n\\t\\t\\t\\t\\t{headerFontColor}\\n\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t$props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t{sortable}\\n\\t\\t\\t\\t\\t{sort}\\n\\t\\t\\t\\t\\t{formatColumnTitles}\\n\\t\\t\\t\\t\\t{sortBy}\\n\\t\\t\\t\\t\\t{wrapTitles}\\n\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t<QueryLoad data={filteredData}>\\n\\t\\t\\t\\t\\t<svelte:fragment slot=\\"skeleton\\">\\n\\t\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t\\t<td colspan={filteredData.columns.length} class=\\"h-32\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Skeleton />\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t</svelte:fragment>\\n\\t\\t\\t\\t\\t{#if groupBy && groupedData && searchValue === ''}\\n\\t\\t\\t\\t\\t\\t{#each sortedGroupNames as groupName}\\n\\t\\t\\t\\t\\t\\t\\t{#if groupType === 'accordion'}\\n\\t\\t\\t\\t\\t\\t\\t\\t<GroupRow\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupName}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcurrentGroupData={groupedData[groupName]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttoggled={groupToggleStates[groupName]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:toggle={handleToggle}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\trowColor={accordionRowColor}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowNumbers}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{subtotals}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.columns.length > 0\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? $props.columns.map((d) => d.id)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if groupToggleStates[groupName]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<TableRow\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdisplayedData={groupedData[groupName]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupType}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowShading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{link}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowNumbers}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowLines}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{index}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tgrouped={true}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tgroupColumn={groupBy}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.columns.length > 0\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? $props.columns.map((d) => d.id)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t{:else if groupType === 'section'}\\n\\t\\t\\t\\t\\t\\t\\t\\t<TableRow\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgroupColumn={groupBy}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupType}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\trowSpan={groupedData[groupName].length}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdisplayedData={groupedData[groupName]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowShading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{link}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowNumbers}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{rowLines}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{index}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgrouped={true}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupNamePosition}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.columns.length > 0\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? $props.columns.map((d) => d.id)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if subtotals}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<SubtotalRow\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupName}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcurrentGroupData={groupedData[groupName]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trowColor={subtotalRowColor}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfontColor={subtotalFontColor}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupType}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{groupBy}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.columns.length > 0\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? $props.columns.map((d) => d.id)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<TableRow\\n\\t\\t\\t\\t\\t\\t\\t{displayedData}\\n\\t\\t\\t\\t\\t\\t\\t{rowShading}\\n\\t\\t\\t\\t\\t\\t\\t{link}\\n\\t\\t\\t\\t\\t\\t\\t{rowNumbers}\\n\\t\\t\\t\\t\\t\\t\\t{rowLines}\\n\\t\\t\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t\\t\\t{index}\\n\\t\\t\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t\\t\\t$props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t{#if totalRow && searchValue === ''}\\n\\t\\t\\t\\t\\t\\t<TotalRow\\n\\t\\t\\t\\t\\t\\t\\t{data}\\n\\t\\t\\t\\t\\t\\t\\t{rowNumbers}\\n\\t\\t\\t\\t\\t\\t\\t{columnSummary}\\n\\t\\t\\t\\t\\t\\t\\trowColor={totalRowColor}\\n\\t\\t\\t\\t\\t\\t\\tfontColor={totalFontColor}\\n\\t\\t\\t\\t\\t\\t\\t{groupType}\\n\\t\\t\\t\\t\\t\\t\\t{compact}\\n\\t\\t\\t\\t\\t\\t\\tfinalColumnOrder={getFinalColumnOrder(\\n\\t\\t\\t\\t\\t\\t\\t\\t$props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),\\n\\t\\t\\t\\t\\t\\t\\t\\t$props.priorityColumns\\n\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</QueryLoad>\\n\\t\\t\\t</table>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"noresults\\" class:shownoresults={showNoResults}>No Results</div>\\n\\n\\t\\t{#if paginated && pageCount > 1}\\n\\t\\t\\t<div class=\\"pagination\\">\\n\\t\\t\\t\\t<div class=\\"page-labels mr-auto\\">\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\taria-label=\\"first-page\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"page-changer\\"\\n\\t\\t\\t\\t\\t\\tclass:hovering\\n\\t\\t\\t\\t\\t\\tdisabled={currentPage === 1}\\n\\t\\t\\t\\t\\t\\ton:click={() => goToPage(0)}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\"page-icon flex items-center\\">\\n\\t\\t\\t\\t\\t\\t\\t<Icon src={ChevronsLeft} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\taria-label=\\"previous-page\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"page-changer\\"\\n\\t\\t\\t\\t\\t\\tclass:hovering\\n\\t\\t\\t\\t\\t\\tdisabled={currentPage === 1}\\n\\t\\t\\t\\t\\t\\ton:click={() => goToPage(currentPage - 2)}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\"page-icon h-[0.83em] flex items-center\\">\\n\\t\\t\\t\\t\\t\\t\\t<Icon src={ChevronLeft} class=\\"h-[0.83em]\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t<span class=\\"page-count\\">\\n\\t\\t\\t\\t\\t\\tPage\\n\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"page-input\\"\\n\\t\\t\\t\\t\\t\\t\\tclass:hovering\\n\\t\\t\\t\\t\\t\\t\\tclass:error={inputPage > pageCount}\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"width: {inputPage ? inputPageElWidth : currentPageElWidth};\\"\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\t\\tbind:value={inputPage}\\n\\t\\t\\t\\t\\t\\t\\ton:keyup={() => goToPage((inputPage ?? 1) - 1)}\\n\\t\\t\\t\\t\\t\\t\\ton:change={() => goToPage((inputPage ?? 1) - 1)}\\n\\t\\t\\t\\t\\t\\t\\tplaceholder={currentPage}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t/\\n\\t\\t\\t\\t\\t\\t<span class=\\"page-count ml-1\\">{pageCount.toLocaleString()}</span>\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t<span class=\\"print-page-count\\">\\n\\t\\t\\t\\t\\t\\t{displayedPageLength.toLocaleString()} of {totalRows.toLocaleString()} records\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\taria-label=\\"next-page\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"page-changer\\"\\n\\t\\t\\t\\t\\t\\tclass:hovering\\n\\t\\t\\t\\t\\t\\tdisabled={currentPage === pageCount}\\n\\t\\t\\t\\t\\t\\ton:click={() => goToPage(currentPage)}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\"page-icon h-[0.83em] flex items-center\\">\\n\\t\\t\\t\\t\\t\\t\\t<Icon src={ChevronRight} class=\\"h-[0.83em]\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\taria-label=\\"last-page\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"page-changer\\"\\n\\t\\t\\t\\t\\t\\tclass:hovering\\n\\t\\t\\t\\t\\t\\tdisabled={currentPage === pageCount}\\n\\t\\t\\t\\t\\t\\ton:click={() => goToPage(pageCount - 1)}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<div class=\\"page-icon flex items-center\\">\\n\\t\\t\\t\\t\\t\\t\\t<Icon src={ChevronsRight} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{#if downloadable}\\n\\t\\t\\t\\t\\t<DownloadData class=\\"download-button\\" data={tableData} {queryID} display={hovering} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{#if !isFullPage}\\n\\t\\t\\t\\t\\t<EnterFullScreen on:click={() => (fullscreen = true)} display={hovering} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{:else}\\n\\t\\t\\t<div class=\\"table-footer\\">\\n\\t\\t\\t\\t{#if downloadable}\\n\\t\\t\\t\\t\\t<DownloadData class=\\"download-button\\" data={tableData} {queryID} display={hovering} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{#if !isFullPage}\\n\\t\\t\\t\\t\\t<EnterFullScreen on:click={() => (fullscreen = true)} display={hovering} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t{#if generateMarkdown}\\n\\t\\t{#if queryID}\\n\\t\\t\\t<CodeBlock>\\n\\t\\t\\t\\t{\`<DataTable data={\${queryID}}>\`}\\n\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t{#each Object.keys(data[0]) as column}\\n\\t\\t\\t\\t\\t{\`   <Column id=\${column.includes(' ') ? \`'\${column}'\` : column}/>\`}\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t{\`</DataTable>\`}\\n\\t\\t\\t</CodeBlock>\\n\\t\\t{/if}\\n\\t{/if}\\n{:else}\\n\\t<ErrorChart {error} chartType=\\"Data Table\\" />\\n{/if}\\n\\n<style>\\n\\t.table-container {\\n\\t\\tfont-size: 9.5pt;\\n\\t}\\n\\n\\t.scrollbox {\\n\\t\\twidth: 100%;\\n\\t\\toverflow-x: auto;\\n\\t\\t/* border-bottom: 1px solid var(--grey-200);    */\\n\\t\\tscrollbar-width: thin;\\n\\t\\tscrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);\\n\\t}\\n\\n\\t:root {\\n\\t\\t--scrollbar-track-color: transparent;\\n\\t\\t--scrollbar-color: rgba(0, 0, 0, 0.2);\\n\\t\\t--scrollbar-active-color: rgba(0, 0, 0, 0.4);\\n\\t\\t--scrollbar-size: 0.75rem;\\n\\t\\t--scrollbar-minlength: 1.5rem; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar {\\n\\t\\theight: var(--scrollbar-size);\\n\\t\\twidth: var(--scrollbar-size);\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar-track {\\n\\t\\tbackground-color: var(--scrollbar-track-color);\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar-thumb {\\n\\t\\tbackground-color: var(--scrollbar-color);\\n\\t\\tborder-radius: 7px;\\n\\t\\tbackground-clip: padding-box;\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar-thumb:hover {\\n\\t\\tbackground-color: var(--scrollbar-active-color);\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar-thumb:vertical {\\n\\t\\tmin-height: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\n\\t.scrollbox::-webkit-scrollbar-thumb:horizontal {\\n\\t\\tmin-width: var(--scrollbar-minlength);\\n\\t\\tborder: 3px solid transparent;\\n\\t}\\n\\n\\ttable {\\n\\t\\tdisplay: table;\\n\\t\\twidth: 100%;\\n\\t\\tborder-collapse: collapse;\\n\\t\\tfont-variant-numeric: tabular-nums;\\n\\t}\\n\\n\\t.page-changer {\\n\\t\\tpadding: 0;\\n\\t\\tcolor: var(--grey-400);\\n\\t\\theight: 1.1em;\\n\\t\\twidth: 1.1em;\\n\\t}\\n\\n\\t.pagination {\\n\\t\\tfont-size: 12px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: flex-end;\\n\\t\\theight: 2em;\\n\\t\\tfont-family: var(--ui-font-family);\\n\\t\\tcolor: var(--grey-500);\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-moz-user-select: none;\\n\\t\\tuser-select: none;\\n\\t\\ttext-align: right;\\n\\t\\tmargin-top: 0.5em;\\n\\t\\tmargin-bottom: 1.8em;\\n\\t\\tfont-variant-numeric: tabular-nums;\\n\\t}\\n\\n\\t.page-labels {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-start;\\n\\t\\talign-items: center;\\n\\t\\tgap: 3px;\\n\\t}\\n\\n\\t.page-changer {\\n\\t\\tfont-size: 20px;\\n\\t\\tbackground: none;\\n\\t\\tborder: none;\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: color 200ms;\\n\\t}\\n\\n\\t.page-changer.hovering {\\n\\t\\tcolor: var(--blue-600);\\n\\t\\ttransition: color 200ms;\\n\\t}\\n\\n\\t.page-changer:disabled {\\n\\t\\tcursor: auto;\\n\\t\\tcolor: var(--grey-300);\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-moz-user-select: none;\\n\\t\\tuser-select: none;\\n\\t\\ttransition: color 200ms;\\n\\t}\\n\\n\\t.page-icon {\\n\\t\\theight: 1em;\\n\\t\\twidth: 1em;\\n\\t}\\n\\n\\t.page-input {\\n\\t\\tbox-sizing: content-box;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 0.25em 0.5em;\\n\\t\\tmargin: 0;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tfont-size: 12px;\\n\\t\\tcolor: var(--grey-500);\\n\\t}\\n\\n\\t.table-footer {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-end;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 10px 0px;\\n\\t\\tfont-size: 12px;\\n\\t\\theight: 9px;\\n\\t}\\n\\n\\t/* Remove number buttons in input box*/\\n\\t.page-input::-webkit-outer-spin-button,\\n\\t.page-input::-webkit-inner-spin-button {\\n\\t\\t-webkit-appearance: none;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t/* Firefox */\\n\\t.page-input[type='number'] {\\n\\t\\t-moz-appearance: textfield;\\n\\t\\t-webkit-appearance: textfield;\\n\\t\\tappearance: textfield;\\n\\t}\\n\\n\\t.page-input.hovering {\\n\\t\\tborder: 1px solid var(--grey-200);\\n\\t}\\n\\n\\t.page-input.error {\\n\\t\\tborder: 1px solid var(--red-600);\\n\\t}\\n\\n\\t.page-input::-moz-placeholder {\\n\\t\\tcolor: var(--grey-500);\\n\\t}\\n\\n\\t.page-input::placeholder {\\n\\t\\tcolor: var(--grey-500);\\n\\t}\\n\\n\\tbutton:enabled > .page-icon:hover {\\n\\t\\tcolor: var(--blue-800);\\n\\t}\\n\\n\\t*:focus {\\n\\t\\toutline: none;\\n\\t}\\n\\n\\t::-moz-placeholder {\\n\\t\\t/* Chrome, Firefox, Opera, Safari 10.1+ */\\n\\t\\tcolor: var(--grey-400);\\n\\t\\topacity: 1; /* Firefox */\\n\\t}\\n\\n\\t::placeholder {\\n\\t\\t/* Chrome, Firefox, Opera, Safari 10.1+ */\\n\\t\\tcolor: var(--grey-400);\\n\\t\\topacity: 1; /* Firefox */\\n\\t}\\n\\n\\t:-ms-input-placeholder {\\n\\t\\t/* Internet Explorer 10-11 */\\n\\t\\tcolor: var(--grey-400);\\n\\t}\\n\\n\\t::-ms-input-placeholder {\\n\\t\\t/* Microsoft Edge */\\n\\t\\tcolor: var(--grey-400);\\n\\t}\\n\\n\\t.noresults {\\n\\t\\tdisplay: none;\\n\\t\\tcolor: var(--grey-400);\\n\\t\\ttext-align: center;\\n\\t\\tmargin-top: 5px;\\n\\t}\\n\\n\\t.shownoresults {\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.print-page-count {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t@media (max-width: 600px) {\\n\\t\\t.page-changer {\\n\\t\\t\\theight: 1.2em;\\n\\t\\t\\twidth: 1.2em;\\n\\t\\t}\\n\\n\\t\\t.page-icon {\\n\\t\\t\\theight: 1.2em;\\n\\t\\t\\twidth: 1.2em;\\n\\t\\t}\\n\\n\\t\\t.page-count {\\n\\t\\t\\tfont-size: 1.1em;\\n\\t\\t}\\n\\n\\t\\t.page-input {\\n\\t\\t\\tfont-size: 1.1em;\\n\\t\\t}\\n\\t}\\n\\n\\t@media print {\\n\\t\\t.pagination {\\n\\t\\t\\t-moz-column-break-inside: avoid;\\n\\t\\t\\tbreak-inside: avoid;\\n\\t\\t}\\n\\n\\t\\t.page-changer {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\n\\t\\t.page-count {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\n\\t\\t.print-page-count {\\n\\t\\t\\tdisplay: inline;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AAitBC,4CAAiB,CAChB,SAAS,CAAE,KACZ,CAEA,sCAAW,CACV,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAEhB,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,iBAAiB,CAAC,CAAC,IAAI,uBAAuB,CACpE,CAEA,KAAM,CACL,uBAAuB,CAAE,WAAW,CACpC,iBAAiB,CAAE,kBAAkB,CACrC,wBAAwB,CAAE,kBAAkB,CAC5C,gBAAgB,CAAE,OAAO,CACzB,qBAAqB,CAAE,MACxB,CAEA,sCAAU,mBAAoB,CAC7B,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,KAAK,CAAE,IAAI,gBAAgB,CAC5B,CAEA,sCAAU,yBAA0B,CACnC,gBAAgB,CAAE,IAAI,uBAAuB,CAC9C,CAEA,sCAAU,yBAA0B,CACnC,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,WAClB,CAEA,sCAAU,yBAAyB,MAAO,CACzC,gBAAgB,CAAE,IAAI,wBAAwB,CAC/C,CAEA,sCAAU,yBAAyB,SAAU,CAC5C,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CAEA,sCAAU,yBAAyB,WAAY,CAC9C,SAAS,CAAE,IAAI,qBAAqB,CAAC,CACrC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACnB,CAEA,iCAAM,CACL,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,QAAQ,CACzB,oBAAoB,CAAE,YACvB,CAEA,yCAAc,CACb,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACR,CAEA,uCAAY,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,GAAG,CACX,WAAW,CAAE,IAAI,gBAAgB,CAAC,CAClC,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KAAK,CACpB,oBAAoB,CAAE,YACvB,CAEA,wCAAa,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACN,CAEA,yCAAc,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,KAAK,CAAC,KACnB,CAEA,aAAa,qCAAU,CACtB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,KAAK,CAAC,KACnB,CAEA,yCAAa,SAAU,CACtB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,KAAK,CAAC,KACnB,CAEA,sCAAW,CACV,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GACR,CAEA,uCAAY,CACX,UAAU,CAAE,WAAW,CACvB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,MAAM,CAAC,KAAK,CACrB,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,yCAAc,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GACT,CAGA,uCAAW,2BAA2B,CACtC,uCAAW,2BAA4B,CACtC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT,CAGA,WAAW,CAAC,IAAI,CAAC,QAAQ,6BAAE,CAC1B,eAAe,CAAE,SAAS,CAC1B,kBAAkB,CAAE,SAAS,CAC7B,UAAU,CAAE,SACb,CAEA,WAAW,qCAAU,CACpB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,UAAU,CACjC,CAEA,WAAW,kCAAO,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CAChC,CAEA,uCAAW,kBAAmB,CAC7B,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,uCAAW,aAAc,CACxB,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,oBAAM,QAAQ,CAAG,wBAAU,MAAO,CACjC,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,4BAAC,MAAO,CACP,OAAO,CAAE,IACV,6BAEA,kBAAmB,CAElB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,OAAO,CAAE,CACV,6BAEA,aAAc,CAEb,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,OAAO,CAAE,CACV,6BAEA,sBAAuB,CAEtB,KAAK,CAAE,IAAI,UAAU,CACtB,6BAEA,uBAAwB,CAEvB,KAAK,CAAE,IAAI,UAAU,CACtB,CAEA,sCAAW,CACV,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,GACb,CAEA,0CAAe,CACd,OAAO,CAAE,KACV,CAEA,6CAAkB,CACjB,OAAO,CAAE,IACV,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,yCAAc,CACb,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACR,CAEA,sCAAW,CACV,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACR,CAEA,uCAAY,CACX,SAAS,CAAE,KACZ,CAEA,uCAAY,CACX,SAAS,CAAE,KACZ,CACD,CAEA,OAAO,KAAM,CACZ,uCAAY,CACX,wBAAwB,CAAE,KAAK,CAC/B,YAAY,CAAE,KACf,CAEA,yCAAc,CACb,OAAO,CAAE,IACV,CAEA,uCAAY,CACX,OAAO,CAAE,IACV,CAEA,6CAAkB,CACjB,OAAO,CAAE,MACV,CACD"}`
};
let marginTop = "1.5em";
let marginBottom = "1em";
let paddingBottom = "0em";
function dataSubset(data, selectedCols) {
  return data.map((obj) => {
    var toReturn = {};
    selectedCols.forEach((key) => toReturn[key] = obj[key]);
    return toReturn;
  });
}
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sort;
  let currentPageElWidth;
  let goToPage;
  let $props, $$unsubscribe_props;
  let props = writable({});
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  setContext(propKey, props);
  let { data } = $$props;
  let { queryID = void 0 } = $$props;
  let { rows = 10 } = $$props;
  let { rowNumbers = false } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupsOpen = true } = $$props;
  let { groupType = "accordion" } = $$props;
  let { accordionRowColor = void 0 } = $$props;
  let { groupNamePosition = "middle" } = $$props;
  if (groupType === "section") {
    rowNumbers = false;
  }
  let { subtotals = false } = $$props;
  let { subtotalRowColor = void 0 } = $$props;
  let { subtotalFontColor = void 0 } = $$props;
  let groupToggleStates = {};
  let paginated;
  let hovering = false;
  let { generateMarkdown = false } = $$props;
  let { search = false } = $$props;
  let { sortable = true } = $$props;
  let { downloadable = true } = $$props;
  let { totalRow = false } = $$props;
  let { totalRowColor = void 0 } = $$props;
  let { totalFontColor = void 0 } = $$props;
  let { isFullPage = false } = $$props;
  let { link = void 0 } = $$props;
  let { showLinkCol = false } = $$props;
  let error = void 0;
  props.update((d) => {
    return { ...d, data, columns: [] };
  });
  let { rowShading = false } = $$props;
  let { rowLines = true } = $$props;
  let { wrapTitles = false } = $$props;
  let { headerColor = void 0 } = $$props;
  let { headerFontColor = "var(--grey-900)" } = $$props;
  let { formatColumnTitles = true } = $$props;
  let { backgroundColor = "white" } = $$props;
  let { compact = void 0 } = $$props;
  let columnSummary;
  let priorityColumns = [groupBy];
  props.update((d) => {
    return { ...d, priorityColumns };
  });
  let index = 0;
  let inputPage = null;
  let searchValue = "";
  let filteredData;
  let searchFactory;
  let sortBy = { col: null, ascending: null };
  let sortedGroupNames;
  let totalRows;
  let displayedData = filteredData;
  let pageCount;
  let currentPage = 1;
  let max;
  let displayedPageLength = 0;
  let tableData;
  let groupedData = {};
  let groupRowData = [];
  let fullscreen = false;
  let innerHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.queryID === void 0 && $$bindings.queryID && queryID !== void 0)
    $$bindings.queryID(queryID);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.rowNumbers === void 0 && $$bindings.rowNumbers && rowNumbers !== void 0)
    $$bindings.rowNumbers(rowNumbers);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupsOpen === void 0 && $$bindings.groupsOpen && groupsOpen !== void 0)
    $$bindings.groupsOpen(groupsOpen);
  if ($$props.groupType === void 0 && $$bindings.groupType && groupType !== void 0)
    $$bindings.groupType(groupType);
  if ($$props.accordionRowColor === void 0 && $$bindings.accordionRowColor && accordionRowColor !== void 0)
    $$bindings.accordionRowColor(accordionRowColor);
  if ($$props.groupNamePosition === void 0 && $$bindings.groupNamePosition && groupNamePosition !== void 0)
    $$bindings.groupNamePosition(groupNamePosition);
  if ($$props.subtotals === void 0 && $$bindings.subtotals && subtotals !== void 0)
    $$bindings.subtotals(subtotals);
  if ($$props.subtotalRowColor === void 0 && $$bindings.subtotalRowColor && subtotalRowColor !== void 0)
    $$bindings.subtotalRowColor(subtotalRowColor);
  if ($$props.subtotalFontColor === void 0 && $$bindings.subtotalFontColor && subtotalFontColor !== void 0)
    $$bindings.subtotalFontColor(subtotalFontColor);
  if ($$props.generateMarkdown === void 0 && $$bindings.generateMarkdown && generateMarkdown !== void 0)
    $$bindings.generateMarkdown(generateMarkdown);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.downloadable === void 0 && $$bindings.downloadable && downloadable !== void 0)
    $$bindings.downloadable(downloadable);
  if ($$props.totalRow === void 0 && $$bindings.totalRow && totalRow !== void 0)
    $$bindings.totalRow(totalRow);
  if ($$props.totalRowColor === void 0 && $$bindings.totalRowColor && totalRowColor !== void 0)
    $$bindings.totalRowColor(totalRowColor);
  if ($$props.totalFontColor === void 0 && $$bindings.totalFontColor && totalFontColor !== void 0)
    $$bindings.totalFontColor(totalFontColor);
  if ($$props.isFullPage === void 0 && $$bindings.isFullPage && isFullPage !== void 0)
    $$bindings.isFullPage(isFullPage);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.showLinkCol === void 0 && $$bindings.showLinkCol && showLinkCol !== void 0)
    $$bindings.showLinkCol(showLinkCol);
  if ($$props.rowShading === void 0 && $$bindings.rowShading && rowShading !== void 0)
    $$bindings.rowShading(rowShading);
  if ($$props.rowLines === void 0 && $$bindings.rowLines && rowLines !== void 0)
    $$bindings.rowLines(rowLines);
  if ($$props.wrapTitles === void 0 && $$bindings.wrapTitles && wrapTitles !== void 0)
    $$bindings.wrapTitles(wrapTitles);
  if ($$props.headerColor === void 0 && $$bindings.headerColor && headerColor !== void 0)
    $$bindings.headerColor(headerColor);
  if ($$props.headerFontColor === void 0 && $$bindings.headerFontColor && headerFontColor !== void 0)
    $$bindings.headerFontColor(headerFontColor);
  if ($$props.formatColumnTitles === void 0 && $$bindings.formatColumnTitles && formatColumnTitles !== void 0)
    $$bindings.formatColumnTitles(formatColumnTitles);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    rows = Number.parseInt(rows);
    rowNumbers = rowNumbers === "true" || rowNumbers === true;
    groupsOpen = groupsOpen === "true" || groupsOpen === true;
    subtotals = subtotals === "true" || subtotals === true;
    showLinkCol = showLinkCol === "true" || showLinkCol === true;
    {
      try {
        error = void 0;
        checkInputs(data);
        columnSummary = getColumnSummary(data, "array");
        const dateCols = columnSummary.filter((d) => d.type === "date" && !(data[0]?.[d.id] instanceof Date)).map((d) => d.id);
        for (let i = 0; i < dateCols.length; i++) {
          data = convertColumnToDate(data, dateCols[i]);
        }
        for (let i = 0; i < columnSummary.length; i++) {
          columnSummary[i].show = showLinkCol === false && columnSummary[i].id === link ? false : true;
        }
      } catch (e) {
        error = e.message;
        if (strictBuild) {
          throw error;
        }
      }
    }
    paginated = data.length > rows && !groupBy;
    generateMarkdown = generateMarkdown === "true" || generateMarkdown === true;
    search = search === "true" || search === true;
    sortable = sortable === "true" || sortable === true;
    downloadable = downloadable === "true" || downloadable === true;
    totalRow = totalRow === "true" || totalRow === true;
    rowShading = rowShading === "true" || rowShading === true;
    rowLines = rowLines === "true" || rowLines === true;
    wrapTitles = wrapTitles === "true" || wrapTitles === true;
    formatColumnTitles = formatColumnTitles === "true" || formatColumnTitles === true;
    filteredData = data;
    {
      if (Query.isQuery(data) && search) {
        searchFactory = debounce(
          Query.createReactive(
            {
              loadGracePeriod: 1e3,
              callback: (v) => {
                filteredData = v;
              },
              execFn: query
            },
            data.opts,
            data
          ),
          200
        );
      }
    }
    {
      if (searchFactory) {
        if (searchValue) {
          searchFactory(
            data.search(searchValue, data.columns.map((c) => c.column_name), searchValue.length === 1 ? 0.5 : searchValue.length >= 6 ? 0.9 : 0.8),
            data
          );
        } else
          filteredData = data;
      }
    }
    sort = (column) => {
      if (sortBy.col == column) {
        sortBy.ascending = !sortBy.ascending;
      } else {
        sortBy.col = column;
        sortBy.ascending = true;
      }
      const sortModifier = sortBy.ascending ? 1 : -1;
      const forceTopOfAscending = (val) => val === void 0 || val === null || typeof val === "number" && isNaN(val);
      const sort2 = (a, b) => forceTopOfAscending(a[column]) && !forceTopOfAscending(b[column]) || a[column] < b[column] ? -1 * sortModifier : forceTopOfAscending(b[column]) && !forceTopOfAscending(a[column]) || a[column] > b[column] ? 1 * sortModifier : 0;
      data.sort(sort2);
      filteredData = filteredData.sort(sort2);
      if (groupBy) {
        Object.keys(groupedData).forEach((groupName) => {
          groupedData[groupName] = groupedData[groupName].sort(sort2);
        });
      }
    };
    goToPage = (pageNumber) => {
      index = pageNumber * rows;
      max = index + rows;
      currentPage = Math.ceil(max / rows);
      totalRows = filteredData.length;
      displayedData = filteredData.slice(index, index + rows);
    };
    {
      if (search && !Query.isQuery(data)) {
        toasts.add({
          status: "warning",
          title: "Search Failed",
          description: "Please use a query instead.",
          timeout: 5e3
        });
      }
    }
    {
      sortBy = { col: null, ascending: null };
    }
    {
      if (!error) {
        groupedData = data.reduce(
          (acc, row) => {
            const groupName = row[groupBy];
            if (!acc[groupName]) {
              acc[groupName] = [];
            }
            acc[groupName].push(row);
            return acc;
          },
          {}
        );
        groupRowData = Object.keys(groupedData).reduce(
          (acc, groupName) => {
            acc[groupName] = {};
            const columnsToAggregate = $props.columns.length > 0 ? $props.columns : columnSummary;
            columnsToAggregate.forEach((columnDef) => {
              const column = columnDef.id;
              const colType = columnSummary.find((d) => d.id === column)?.type;
              const totalAgg = columnDef.totalAgg;
              const weightCol = columnDef.weightCol;
              const rows2 = groupedData[groupName];
              acc[groupName][column] = aggregateColumn(rows2, column, totalAgg, colType, weightCol);
            });
            return acc;
          },
          {}
        );
        const existingGroups = Object.keys(groupToggleStates);
        Object.keys(groupedData).forEach((groupName) => {
          if (!existingGroups.includes(groupName)) {
            groupToggleStates[groupName] = groupsOpen;
          }
        });
      }
    }
    {
      if (groupBy && sortBy.col) {
        sortedGroupNames = Object.entries(groupRowData).sort((a, b) => {
          const valA = a[1][sortBy.col], valB = b[1][sortBy.col];
          if ((valA === void 0 || valA === null || isNaN(valA)) && valB !== void 0 && valB !== null && !isNaN(valB)) {
            return -1 * (sortBy.ascending ? 1 : -1);
          }
          if ((valB === void 0 || valB === null || isNaN(valB)) && valA !== void 0 && valA !== null && !isNaN(valA)) {
            return 1 * (sortBy.ascending ? 1 : -1);
          }
          if (valA < valB) {
            return -1 * (sortBy.ascending ? 1 : -1);
          } else if (valA > valB) {
            return 1 * (sortBy.ascending ? 1 : -1);
          }
          return 0;
        }).map((entry) => entry[0]);
      } else {
        sortedGroupNames = Object.keys(groupedData).sort();
      }
    }
    totalRows = filteredData.length;
    currentPage = Math.ceil((index + rows) / rows);
    {
      if (paginated) {
        pageCount = Math.ceil(filteredData.length / rows);
        displayedData = filteredData.slice(index, index + rows);
        displayedPageLength = displayedData.length;
        if (pageCount < currentPage) {
          goToPage(pageCount - 1);
        }
      } else {
        currentPage = 1;
        displayedData = filteredData;
      }
    }
    currentPageElWidth = `${(currentPage ?? 1).toString().length}ch`;
    tableData = $props.columns.length > 0 ? dataSubset(data, $props.columns.map((d) => d.id)) : data;
    $$rendered = ` ${!isFullPage && innerHeight !== void 0 ? `${validate_component(Fullscreen, "Fullscreen").$$render(
      $$result,
      { open: fullscreen },
      {
        open: ($$value) => {
          fullscreen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          let ROW_HEIGHT = 23, Y_AXIS_PADDING = 45 + 234;
          return ` <div class="pl-8 pt-4 svelte-fmobgf">${validate_component(DataTable, "svelte:self").$$render(
            $$result,
            Object_1$1.assign(
              {},
              $$props,
              {
                rows: 1 + Math.round((innerHeight - Y_AXIS_PADDING) / ROW_HEIGHT)
              },
              { isFullPage: true }
            ),
            {},
            {
              default: () => {
                return `${each($props.columns, (column) => {
                  return `${validate_component(Column, "Column").$$render($$result, Object_1$1.assign({}, column), {}, {})}`;
                })}`;
              }
            }
          )}</div>`;
        }
      }
    )}` : ``} ${error === void 0 ? `${slots.default ? slots.default({}) : ``} ${link ? `${validate_component(InvisibleLinks, "InvisibleLinks").$$render($$result, { data, link }, {}, {})}` : ``} ${each($props.columns.filter((column) => column.contentType === "link"), (column) => {
      return `${validate_component(InvisibleLinks, "InvisibleLinks").$$render($$result, { data, link: column.id }, {}, {})}`;
    })} <div role="none" class="table-container svelte-fmobgf"${add_styles({
      "margin-top": marginTop,
      "margin-bottom": marginBottom,
      "padding-bottom": paddingBottom
    })}>${search ? `${validate_component(SearchBar, "SearchBar").$$render(
      $$result,
      {
        searchFunction: () => {
        },
        value: searchValue
      },
      {
        value: ($$value) => {
          searchValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="scrollbox svelte-fmobgf"${add_styles({ "background-color": backgroundColor })}><table class="svelte-fmobgf">${validate_component(TableHeader, "TableHeader").$$render(
      $$result,
      {
        rowNumbers,
        headerColor,
        headerFontColor,
        finalColumnOrder: getFinalColumnOrder(
          $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
          $props.priorityColumns
        ),
        columnSummary,
        compact,
        sortable,
        sort,
        formatColumnTitles,
        sortBy,
        wrapTitles
      },
      {},
      {}
    )} ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data: filteredData }, {}, {
      skeleton: () => {
        return `<tr class="svelte-fmobgf"><td${add_attribute("colspan", filteredData.columns.length, 0)} class="h-32 svelte-fmobgf">${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}</td></tr> `;
      },
      default: () => {
        return `${groupBy && groupedData && searchValue === "" ? `${each(sortedGroupNames, (groupName) => {
          return `${groupType === "accordion" ? `${validate_component(GroupRow, "GroupRow").$$render(
            $$result,
            {
              groupName,
              currentGroupData: groupedData[groupName],
              toggled: groupToggleStates[groupName],
              columnSummary,
              rowColor: accordionRowColor,
              rowNumbers,
              subtotals,
              compact,
              finalColumnOrder: getFinalColumnOrder(
                $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
                $props.priorityColumns
              )
            },
            {},
            {}
          )} ${groupToggleStates[groupName] ? `${validate_component(TableRow, "TableRow").$$render(
            $$result,
            {
              displayedData: groupedData[groupName],
              groupType,
              rowShading,
              link,
              rowNumbers,
              rowLines,
              compact,
              index,
              columnSummary,
              grouped: true,
              groupColumn: groupBy,
              finalColumnOrder: getFinalColumnOrder(
                $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
                $props.priorityColumns
              )
            },
            {},
            {}
          )}` : ``}` : `${groupType === "section" ? `${validate_component(TableRow, "TableRow").$$render(
            $$result,
            {
              groupColumn: groupBy,
              groupType,
              rowSpan: groupedData[groupName].length,
              displayedData: groupedData[groupName],
              rowShading,
              link,
              rowNumbers,
              rowLines,
              compact,
              index,
              columnSummary,
              grouped: true,
              groupNamePosition,
              finalColumnOrder: getFinalColumnOrder(
                $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
                $props.priorityColumns
              )
            },
            {},
            {}
          )} ${subtotals ? `${validate_component(SubtotalRow, "SubtotalRow").$$render(
            $$result,
            {
              groupName,
              currentGroupData: groupedData[groupName],
              columnSummary,
              rowColor: subtotalRowColor,
              fontColor: subtotalFontColor,
              groupType,
              groupBy,
              compact,
              finalColumnOrder: getFinalColumnOrder(
                $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
                $props.priorityColumns
              )
            },
            {},
            {}
          )}` : ``}` : ``}`}`;
        })}` : `${validate_component(TableRow, "TableRow").$$render(
          $$result,
          {
            displayedData,
            rowShading,
            link,
            rowNumbers,
            rowLines,
            compact,
            index,
            columnSummary,
            finalColumnOrder: getFinalColumnOrder(
              $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
              $props.priorityColumns
            )
          },
          {},
          {}
        )}`} ${totalRow && searchValue === "" ? `${validate_component(TotalRow, "TotalRow").$$render(
          $$result,
          {
            data,
            rowNumbers,
            columnSummary,
            rowColor: totalRowColor,
            fontColor: totalFontColor,
            groupType,
            compact,
            finalColumnOrder: getFinalColumnOrder(
              $props.columns.length > 0 ? $props.columns.map((d) => d.id) : Object.keys(data[0]),
              $props.priorityColumns
            )
          },
          {},
          {}
        )}` : ``}`;
      }
    })}</table></div> <div class="${["noresults svelte-fmobgf", ""].join(" ").trim()}" data-svelte-h="svelte-l3t0gi">No Results</div> ${paginated && pageCount > 1 ? `<div class="pagination svelte-fmobgf"><div class="page-labels mr-auto svelte-fmobgf"><button aria-label="first-page" class="${["page-changer svelte-fmobgf", ""].join(" ").trim()}" ${currentPage === 1 ? "disabled" : ""}><div class="page-icon flex items-center svelte-fmobgf">${validate_component(Icon, "Icon").$$render($$result, { src: ChevronsLeft }, {}, {})}</div></button> <button aria-label="previous-page" class="${["page-changer svelte-fmobgf", ""].join(" ").trim()}" ${currentPage === 1 ? "disabled" : ""}><div class="page-icon h-[0.83em] flex items-center svelte-fmobgf">${validate_component(Icon, "Icon").$$render($$result, { src: ChevronLeft, class: "h-[0.83em]" }, {}, {})}</div></button> <span class="page-count svelte-fmobgf">Page
						<input class="${[
      "page-input svelte-fmobgf",
      " " + (inputPage > pageCount ? "error" : "")
    ].join(" ").trim()}" style="${"width: " + escape(currentPageElWidth, true) + ";"}" type="number"${add_attribute("placeholder", currentPage, 0)}${add_attribute("value", inputPage, 0)}>
						/
						<span class="page-count ml-1 svelte-fmobgf">${escape(pageCount.toLocaleString())}</span></span> <span class="print-page-count svelte-fmobgf">${escape(displayedPageLength.toLocaleString())} of ${escape(totalRows.toLocaleString())} records</span> <button aria-label="next-page" class="${["page-changer svelte-fmobgf", ""].join(" ").trim()}" ${currentPage === pageCount ? "disabled" : ""}><div class="page-icon h-[0.83em] flex items-center svelte-fmobgf">${validate_component(Icon, "Icon").$$render($$result, { src: ChevronRight, class: "h-[0.83em]" }, {}, {})}</div></button> <button aria-label="last-page" class="${["page-changer svelte-fmobgf", ""].join(" ").trim()}" ${currentPage === pageCount ? "disabled" : ""}><div class="page-icon flex items-center svelte-fmobgf">${validate_component(Icon, "Icon").$$render($$result, { src: ChevronsRight }, {}, {})}</div></button></div> ${downloadable ? `${validate_component(DownloadData, "DownloadData").$$render(
      $$result,
      {
        class: "download-button",
        data: tableData,
        queryID,
        display: hovering
      },
      {},
      {}
    )}` : ``} ${!isFullPage ? `${validate_component(EnterFullScreen_1, "EnterFullScreen").$$render($$result, { display: hovering }, {}, {})}` : ``}</div>` : `<div class="table-footer svelte-fmobgf">${downloadable ? `${validate_component(DownloadData, "DownloadData").$$render(
      $$result,
      {
        class: "download-button",
        data: tableData,
        queryID,
        display: hovering
      },
      {},
      {}
    )}` : ``} ${!isFullPage ? `${validate_component(EnterFullScreen_1, "EnterFullScreen").$$render($$result, { display: hovering }, {}, {})}` : ``}</div>`}</div> ${generateMarkdown ? `${queryID ? `${validate_component(CodeBlock, "CodeBlock").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(`<DataTable data={${queryID}}>`)} <br class="svelte-fmobgf"> ${each(Object.keys(data[0]), (column) => {
          return `${escape(`   <Column id=${column.includes(" ") ? `'${column}'` : column}/>`)} <br class="svelte-fmobgf">`;
        })} ${escape(`</DataTable>`)}`;
      }
    })}` : ``}` : ``}` : `${validate_component(ErrorChart, "ErrorChart").$$render($$result, { error, chartType: "Data Table" }, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_props();
  return $$rendered;
});
const { Object: Object_1 } = globals;
let chartType = "Data Table";
const DataTable_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data } = $$props;
  const initialHash = Query.isQuery(data) ? data.hash : void 0;
  let isInitial = data?.hash === initialHash;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  let queryID = data?.id;
  console.log("datatable");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  isInitial = data?.hash === initialHash;
  spreadProps = Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0));
  return ` ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data }, {}, {
    error: ({ loaded }) => {
      return `${validate_component(ErrorChart, "ErrorChart").$$render(
        $$result,
        {
          slot: "error",
          chartType,
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
          chartType,
          isInitial
        },
        {},
        {}
      )}`;
    },
    default: ({ loaded }) => {
      return `${validate_component(DataTable, "DataTable").$$render($$result, Object_1.assign({}, spreadProps, { data: loaded }, { queryID }), {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Column as C,
  DataTable_1 as D,
  Delta_1 as a
};
