import { h as compute_slots, n as null_to_empty, c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, o as onDestroy, v as validate_component, g as getContext, h as escape, d as add_attribute, a as spread, b as escape_object } from "./ssr.js";
import { Query } from "@evidence-dev/sdk/usql";
import { tidy, mutate, summarize, n, nDistinct, min, max, median, mean, sum } from "@tidyjs/tidy";
import ssf from "ssf";
import { C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "./buildQuery.js";
import { B as BUILT_IN_FORMATS, i as isAutoFormat, a as autoFormat, f as fallbackFormat, b as findImplicitAutoFormat, c as inferColumnTypes, E as EvidenceType, T as TypeFidelity } from "./inferColumnTypes.js";
import { ExportToCsv } from "export-to-csv";
import "./VennDiagram.svelte_svelte_type_style_lang.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="animate-pulse h-full w-full my-2" data-svelte-h="svelte-7iquaz"><span class="sr-only">Loading...</span> <div class="h-full w-full bg-gray-200 rounded-md dark:bg-gray-400"></div></div>`;
});
function isEmptyDataset(data) {
  if (!data || !data[0] || !data.length) {
    return true;
  } else {
    return false;
  }
}
const QueryLoad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { data } = $$props;
  let unsub = () => {
  };
  let _data;
  onDestroy(unsub);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if (Query.isQuery(data)) {
      console.log("Query data", data);
      data.fetch();
      unsub();
      unsub = data.subscribe((v) => {
        _data = v;
      });
    }
  }
  return `${!data ? ` ${slots.default ? slots.default({ loaded: data }) : ``}` : `${!Query.isQuery(data) ? ` ${(Array.isArray(data) || !data) && isEmptyDataset(data) && $$slots.empty ? ` ${slots.empty ? slots.empty({ loaded: data }) : ``}` : ` ${slots.default ? slots.default({ loaded: data }) : ``}`}` : `${!_data || !_data.dataLoaded && !_data.error ? `${slots.skeleton ? slots.skeleton({ loaded: _data }) : ` <div class="w-full h-64">${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}</div> `}` : `${_data.error && $$slots.error ? `${slots.error ? slots.error({ loaded: _data }) : ``}` : `${!_data.length && !_data.error && $$slots.empty ? `${slots.empty ? slots.empty({ loaded: _data }) : ``}` : `${slots.default ? slots.default({ loaded: _data }) : ``}`}`}`}`}`} `;
});
function standardizeDateString(date) {
  if (date && typeof date === "string") {
    let dateSplit = date.split(" ");
    if (!date.includes(":")) {
      date = date + "T00:00:00";
    }
    if (dateSplit.length > 2) {
      date = dateSplit[0] + " " + dateSplit[1];
    }
    const re = /\.([^\s]+)/;
    date = date.replace(re, "");
    date = date.replace("Z", "");
    date = date.replace(" ", "T");
  }
  return date;
}
function convertColumnToDate(data, column) {
  data = tidy(
    data,
    mutate({ [column]: (d) => d[column] ? new Date(standardizeDateString(d[column])) : null })
  );
  return data;
}
function standardizeDateColumn(data, column) {
  data = tidy(data, mutate({ [column]: (d) => standardizeDateString(d[column]) }));
  return data;
}
const AXIS_FORMATTING_CONTEXT = "axis";
const VALUE_FORMATTING_CONTEXT = "value";
const getCustomFormats = () => {
  try {
    return getContext(CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY)?.getCustomFormats() || [];
  } catch (error) {
    return [];
  }
};
const lookupColumnFormat = (columnName, columnEvidenceType, columnUnitSummary) => {
  let potentialFormatTag = maybeExtractFormatTag(columnName);
  if (columnEvidenceType.evidenceType === "string") {
    return void 0;
  }
  if (potentialFormatTag) {
    let customFormats = getCustomFormats();
    let matchingFormat = [...BUILT_IN_FORMATS, ...customFormats].find(
      (format) => format.formatTag?.toLowerCase() === potentialFormatTag?.toLowerCase?.()
    );
    if (matchingFormat) {
      return matchingFormat;
    }
  }
  let matchingImplicitAutoFormat = findImplicitAutoFormat(
    columnName,
    columnEvidenceType,
    columnUnitSummary
  );
  if (matchingImplicitAutoFormat) {
    return matchingImplicitAutoFormat;
  }
  return void 0;
};
function getFormatObjectFromString(formatString, valueType = void 0) {
  let potentialFormatTag = formatString;
  let customFormats = getCustomFormats();
  let matchingFormat = [...BUILT_IN_FORMATS, ...customFormats].find(
    (format) => format.formatTag?.toLowerCase() === potentialFormatTag?.toLowerCase?.()
  );
  let newFormat = {};
  if (matchingFormat) {
    return matchingFormat;
  } else {
    newFormat = {
      formatTag: "custom",
      formatCode: potentialFormatTag
    };
    if (valueType) {
      newFormat.valueType = valueType;
    }
    return newFormat;
  }
}
const formatValue = (value, columnFormat = void 0, columnUnitSummary = void 0) => {
  try {
    return applyFormatting(value, columnFormat, columnUnitSummary, VALUE_FORMATTING_CONTEXT);
  } catch (error) {
    console.warn(
      `Unexpected error calling applyFormatting(${value}, ${columnFormat}, ${VALUE_FORMATTING_CONTEXT}, ${columnUnitSummary}). Error=${error}`
    );
    return value;
  }
};
const formatAxisValue = (value, columnFormat = void 0, columnUnitSummary = void 0) => {
  try {
    return applyFormatting(value, columnFormat, columnUnitSummary, AXIS_FORMATTING_CONTEXT);
  } catch (error) {
  }
  return value;
};
const applyTitleTagReplacement = (columnName, columnFormatSettings) => {
  let result = columnName;
  if (columnName && columnFormatSettings?.formatTag) {
    let lastIndexOfTag = columnName.toLowerCase().lastIndexOf(`_${columnFormatSettings.formatTag.toLowerCase()}`);
    let titleTagReplacement = "";
    if (lastIndexOfTag > 0) {
      if (typeof columnFormatSettings?.titleTagReplacement === "string") {
        titleTagReplacement = columnFormatSettings.titleTagReplacement;
      }
      result = columnName.substring(0, lastIndexOfTag) + titleTagReplacement;
    }
  }
  return result;
};
function applyFormatting(value, columnFormat = void 0, columnUnitSummary = void 0, formattingContext = VALUE_FORMATTING_CONTEXT) {
  if (value === void 0 || value === null) {
    return "-";
  }
  let result = void 0;
  if (columnFormat) {
    try {
      let formattingCode = getEffectiveFormattingCode(columnFormat, formattingContext);
      let typedValue;
      try {
        if (columnFormat.valueType === "date" && typeof value === "string") {
          typedValue = new Date(standardizeDateString(value));
        } else if (value instanceof Date) {
          typedValue = new Date(value.toISOString().slice(0, -1));
        } else if (columnFormat.valueType === "number" && typeof value !== "number" && !Number.isNaN(value)) {
          typedValue = Number(value);
        } else {
          typedValue = value;
        }
      } catch (error) {
        typedValue = value;
      }
      if (isAutoFormat(columnFormat, formattingCode)) {
        try {
          result = autoFormat(typedValue, columnFormat, columnUnitSummary);
        } catch (error) {
          console.warn(`Unexpected error applying auto formatting. Error=${error}`);
        }
      } else {
        result = ssf.format(formattingCode, typedValue);
      }
    } catch (error) {
      console.warn(`Unexpected error applying formatting ${error}`);
    }
  }
  if (result === void 0) {
    result = fallbackFormat(value);
  }
  return result;
}
function getEffectiveFormattingCode(columnFormat, formattingContext = VALUE_FORMATTING_CONTEXT) {
  if (typeof columnFormat === "string") {
    return columnFormat;
  } else {
    if (formattingContext === AXIS_FORMATTING_CONTEXT && columnFormat?.axisFormatCode) {
      return columnFormat.axisFormatCode;
    }
    return columnFormat?.formatCode;
  }
}
function maybeExtractFormatTag(columnName) {
  let normalizedColName = columnName.toLowerCase();
  let lastUnderScoreIndex = normalizedColName.lastIndexOf("_");
  if (lastUnderScoreIndex > 0) {
    return normalizedColName.substr(lastUnderScoreIndex).replace("_", "");
  } else {
    return void 0;
  }
}
function formatTitle(column, columnFormat) {
  let result = applyTitleTagReplacement(column, columnFormat);
  let acronyms = ["id", "gdp"];
  let lowercase = ["of", "the", "and", "in", "on"];
  function toTitleCase(str) {
    return str.replace(/\S*/g, function(txt) {
      if (!acronyms.includes(txt) && !lowercase.includes(txt)) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      } else if (acronyms.includes(txt)) {
        return txt.toUpperCase();
      } else {
        return txt.toLowerCase();
      }
    });
  }
  result = toTitleCase(result.replace(/_/g, " "));
  return result;
}
function getColumnUnitSummary(data, columnName, isNumeric = true) {
  const seriesExtents = tidy(
    data,
    isNumeric ? summarize({
      count: n(columnName),
      countDistinct: nDistinct(columnName),
      min: min(columnName),
      max: max(columnName),
      median: median(columnName),
      mean: mean(columnName),
      sum: sum(columnName)
    }) : summarize({ count: n(columnName), countDistinct: nDistinct(columnName) })
  )[0];
  const { maxDecimals, unitType } = summarizeUnits(data.map((row) => row[columnName]));
  return {
    min: seriesExtents.min,
    max: seriesExtents.max,
    median: seriesExtents.median,
    mean: seriesExtents.mean,
    count: seriesExtents.count,
    countDistinct: seriesExtents.countDistinct,
    sum: seriesExtents.sum,
    maxDecimals,
    unitType
  };
}
function summarizeUnits(series) {
  if (series === void 0 || series === null || series.length === 0) {
    return {
      maxDecimals: 0,
      unitType: "unknown"
    };
  } else {
    let maxDecimals = 0;
    for (const element of series) {
      const decimal_places = element?.toString().split(".")[1]?.length;
      if (decimal_places > maxDecimals) {
        maxDecimals = decimal_places;
      }
    }
    return {
      maxDecimals,
      unitType: "number"
    };
  }
}
function getColumnSummary(data, returnType = "object") {
  const columnSummary = {};
  const types = inferColumnTypes(data);
  for (const colName of Object.keys(data[0])) {
    const evidenceColumnType = types.find(
      (item) => item.name?.toLowerCase() === colName?.toLowerCase()
    ) ?? {
      name: colName,
      evidenceType: EvidenceType.NUMBER,
      typeFidelity: TypeFidelity.INFERRED
    };
    const type = evidenceColumnType.evidenceType;
    let columnUnitSummary = evidenceColumnType.evidenceType === "number" ? getColumnUnitSummary(data, colName, true) : getColumnUnitSummary(data, colName, false);
    if (evidenceColumnType.evidenceType !== "number") {
      columnUnitSummary.maxDecimals = 0;
      columnUnitSummary.unitType = evidenceColumnType.evidenceType;
    }
    const format = lookupColumnFormat(colName, evidenceColumnType, columnUnitSummary);
    columnSummary[colName] = {
      title: formatTitle(colName, format),
      type,
      evidenceColumnType,
      format,
      columnUnitSummary
    };
  }
  if (returnType !== "object") {
    return Object.entries(columnSummary).map(([key, value]) => ({ id: key, ...value }));
  }
  return columnSummary;
}
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const configKey = Symbol();
const propKey = Symbol();
const strictBuild = define_import_meta_env_default.VITE_BUILD_STRICT === "true";
const css$1 = {
  code: ".credentials-link.svelte-1no0yro{color:var(--blue-500);text-decoration:none}.credentials-link.svelte-1no0yro:hover{color:var(--blue-700)}",
  map: `{"version":3,"file":"ErrorChart.svelte","sources":["ErrorChart.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { dev } from '$app/environment';\\n\\texport let error;\\n\\texport let chartType;\\n\\texport let minHeight = '150';\\n\\n\\tconst DevMissingCredentialsError = 'SQL Error: Missing datasource connection.';\\n\\tconst ProdMissingCredentialsError =\\n\\t\\t'SQL Error: Missing database connection; set the EVIDENCE_DATABASE environment variable.';\\n<\/script>\\n\\n<div\\n\\twidth=\\"100%\\"\\n\\tclass=\\"grid grid-rows-auto box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 min-h-[{minHeight}px] py-5 px-8 my-5 print:break-inside-avoid\\"\\n>\\n\\t<div class=\\"m-auto w-full\\">\\n\\t\\t<div class=\\"font-bold text-center text-lg\\">\\n\\t\\t\\t{chartType}\\n\\t\\t</div>\\n\\t\\t<div class=\\"text-center [word-wrap:break-work] text-xs\\">\\n\\t\\t\\t{error}\\n\\t\\t\\t{#if dev && error === DevMissingCredentialsError}\\n\\t\\t\\t\\t<br /><a class=\\"credentials-link\\" href=\\"/settings\\"> Add&nbsp;credentials&nbsp;&rarr;</a>\\n\\t\\t\\t{:else if !dev && error === ProdMissingCredentialsError}\\n\\t\\t\\t\\t<br /><a\\n\\t\\t\\t\\t\\tclass=\\"credentials-link\\"\\n\\t\\t\\t\\t\\thref=\\"https://docs.evidence.dev/cli/#environment-variables\\"\\n\\t\\t\\t\\t\\t>View&nbsp;environment&nbsp;variables&nbsp;&rarr;</a\\n\\t\\t\\t\\t>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.credentials-link {\\n\\t\\tcolor: var(--blue-500);\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\n\\t.credentials-link:hover {\\n\\t\\tcolor: var(--blue-700);\\n\\t}</style>\\n"],"names":[],"mappings":"AAuCC,gCAAkB,CACjB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,eAAe,CAAE,IAClB,CAEA,gCAAiB,MAAO,CACvB,KAAK,CAAE,IAAI,UAAU,CACtB"}`
};
const ProdMissingCredentialsError = "SQL Error: Missing database connection; set the EVIDENCE_DATABASE environment variable.";
const ErrorChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { chartType } = $$props;
  let { minHeight = "150" } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.chartType === void 0 && $$bindings.chartType && chartType !== void 0)
    $$bindings.chartType(chartType);
  if ($$props.minHeight === void 0 && $$bindings.minHeight && minHeight !== void 0)
    $$bindings.minHeight(minHeight);
  $$result.css.add(css$1);
  return `<div width="100%" class="${"grid grid-rows-auto box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 min-h-[" + escape(minHeight, true) + "px] py-5 px-8 my-5 print:break-inside-avoid svelte-1no0yro"}"><div class="m-auto w-full"><div class="font-bold text-center text-lg">${escape(chartType)}</div> <div class="text-center [word-wrap:break-work] text-xs">${escape(error)} ${`${error === ProdMissingCredentialsError ? `<br><a class="credentials-link svelte-1no0yro" href="https://docs.evidence.dev/cli/#environment-variables" data-svelte-h="svelte-16l7o12">View environment variables →</a>` : ``}`}</div></div> </div>`;
});
function checkInputs(data, reqCols, optCols) {
  let columns = [];
  if (data === void 0) {
    throw Error("No data provided");
  } else if (typeof data !== "object") {
    throw Error(
      "'" + data + "' is not a recognized query result. Data should be provided in the format: data = {" + data.replace("data.", "") + "}"
    );
  } else if (data[0] === void 0 || data.length === 0) {
    throw Error(
      "Dataset is empty: query ran successfully, but no data was returned from the database"
    );
  }
  if (data[0]?.error_object?.error != null) {
    throw Error("SQL Error: " + data[0]?.error_object?.error?.message);
  }
  if (reqCols != void 0) {
    if (!(reqCols instanceof Array)) {
      throw Error("reqCols must be passed in as an array");
    }
    for (var i = 0; i < reqCols.length; i++) {
      if (reqCols[i] == null) {
        throw Error("Missing required columns");
      }
    }
    if (Query.isQuery(data)) {
      for (const col of data.columns) {
        columns.push(col.column_name);
      }
    } else {
      for (const key of Object.keys(data[0])) {
        columns.push(key);
      }
    }
    let currentCol;
    for (i = 0; i < reqCols.length; i++) {
      currentCol = reqCols[i];
      if (!columns.includes(currentCol)) {
        throw Error("'" + currentCol + "' is not a column in the dataset");
      }
    }
    if (optCols != void 0 && optCols[0] != null) {
      for (i = 0; i < optCols.length; i++) {
        currentCol = optCols[i];
        if (!columns.includes(currentCol)) {
          throw Error("'" + currentCol + "' is not a column in the dataset");
        }
      }
    }
  }
}
const css = {
  code: "button.svelte-p80uux svg{stroke:var(--grey-400);margin-top:auto;margin-bottom:auto;transition:stroke 200ms}button.svelte-p80uux{display:flex;cursor:pointer;font-family:var(--ui-font-family);font-size:1em;color:var(--grey-400);justify-items:flex-end;align-items:baseline;background-color:transparent;border:none;padding:0;margin:0 5px;gap:3px;transition:color 200ms;-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none}button.svelte-p80uux:hover{color:var(--blue-600);transition:color 200ms}button.svelte-p80uux:hover svg{stroke:var(--blue-600);transition:stroke 200ms}@media(max-width: 600px){button.svelte-p80uux{display:none}}@media print{button.svelte-p80uux{display:none}}",
  map: `{"version":3,"file":"DownloadData.svelte","sources":["DownloadData.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\timport { ExportToCsv } from 'export-to-csv';\\n\\timport { fade } from 'svelte/transition';\\n\\n\\texport let data = undefined;\\n\\texport let queryID = undefined;\\n\\texport let text = 'Download';\\n\\texport let display = true;\\n\\t$: display = display === 'true' || display === true;\\n\\n\\tconst date = new Date();\\n\\tconst localISOTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000)\\n\\t\\t.toISOString()\\n\\t\\t.slice(0, 19)\\n\\t\\t.replaceAll(':', '-');\\n\\n\\texport let downloadData = (data) => {\\n\\t\\tconst options = {\\n\\t\\t\\tfieldSeparator: ',',\\n\\t\\t\\tquoteStrings: '\\"',\\n\\t\\t\\tdecimalSeparator: '.',\\n\\t\\t\\tshowLabels: true,\\n\\t\\t\\tshowTitle: false,\\n\\t\\t\\tfilename: (queryID ?? 'evidence_download') + \` \${localISOTime}\`,\\n\\t\\t\\tuseTextFile: false,\\n\\t\\t\\tuseBom: true,\\n\\t\\t\\tuseKeysAsHeaders: true\\n\\t\\t};\\n\\n\\t\\tconst data_copy = JSON.parse(JSON.stringify(Array.from(data)));\\n\\n\\t\\tconst csvExporter = new ExportToCsv(options);\\n\\n\\t\\tcsvExporter.generateCsv(data_copy);\\n\\t};\\n<\/script>\\n\\n{#if display}\\n\\t<div transition:fade|local={{ duration: 200 }}>\\n\\t\\t<button type=\\"button\\" aria-label={text} class={$$props.class} on:click={downloadData(data)}>\\n\\t\\t\\t<span>{text}</span>\\n\\t\\t\\t<slot>\\n\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\twidth=\\"12\\"\\n\\t\\t\\t\\t\\theight=\\"12\\"\\n\\t\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\t><path d=\\"M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5\\" /></svg\\n\\t\\t\\t\\t>\\n\\t\\t\\t</slot>\\n\\t\\t</button>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\tbutton :global(svg) {\\n\\t\\tstroke: var(--grey-400);\\n\\t\\tmargin-top: auto;\\n\\t\\tmargin-bottom: auto;\\n\\t\\ttransition: stroke 200ms;\\n\\t}\\n\\n\\tbutton {\\n\\t\\tdisplay: flex;\\n\\t\\tcursor: pointer;\\n\\t\\tfont-family: var(--ui-font-family);\\n\\t\\tfont-size: 1em;\\n\\t\\tcolor: var(--grey-400);\\n\\t\\tjustify-items: flex-end;\\n\\t\\talign-items: baseline;\\n\\t\\tbackground-color: transparent;\\n\\t\\tborder: none;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0 5px;\\n\\t\\tgap: 3px;\\n\\t\\ttransition: color 200ms;\\n\\t\\t-moz-user-select: none;\\n\\t\\t-webkit-user-select: none;\\n\\t\\t-o-user-select: none;\\n\\t\\tuser-select: none;\\n\\t}\\n\\n\\tbutton:hover {\\n\\t\\tcolor: var(--blue-600);\\n\\t\\ttransition: color 200ms;\\n\\t}\\n\\n\\tbutton:hover :global(svg) {\\n\\t\\tstroke: var(--blue-600);\\n\\t\\ttransition: stroke 200ms;\\n\\t}\\n\\n\\t@media (max-width: 600px) {\\n\\t\\tbutton {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n\\n\\t@media print {\\n\\t\\tbutton {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AA8DC,oBAAM,CAAS,GAAK,CACnB,MAAM,CAAE,IAAI,UAAU,CAAC,CACvB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,MAAM,CAAC,KACpB,CAEA,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IAAI,gBAAgB,CAAC,CAClC,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,aAAa,CAAE,QAAQ,CACvB,WAAW,CAAE,QAAQ,CACrB,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,IAAI,CACtB,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,IAAI,CACpB,WAAW,CAAE,IACd,CAEA,oBAAM,MAAO,CACZ,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,UAAU,CAAE,KAAK,CAAC,KACnB,CAEA,oBAAM,MAAM,CAAS,GAAK,CACzB,MAAM,CAAE,IAAI,UAAU,CAAC,CACvB,UAAU,CAAE,MAAM,CAAC,KACpB,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,oBAAO,CACN,OAAO,CAAE,IACV,CACD,CAEA,OAAO,KAAM,CACZ,oBAAO,CACN,OAAO,CAAE,IACV,CACD"}`
};
const DownloadData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = void 0 } = $$props;
  let { queryID = void 0 } = $$props;
  let { text = "Download" } = $$props;
  let { display = true } = $$props;
  const date = /* @__PURE__ */ new Date();
  const localISOTime = new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 19).replaceAll(":", "-");
  let { downloadData = (data2) => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: false,
      filename: (queryID ?? "evidence_download") + ` ${localISOTime}`,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true
    };
    const data_copy = JSON.parse(JSON.stringify(Array.from(data2)));
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(data_copy);
  } } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.queryID === void 0 && $$bindings.queryID && queryID !== void 0)
    $$bindings.queryID(queryID);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.downloadData === void 0 && $$bindings.downloadData && downloadData !== void 0)
    $$bindings.downloadData(downloadData);
  $$result.css.add(css);
  display = display === "true" || display === true;
  return `${display ? `<div><button type="button"${add_attribute("aria-label", text, 0)} class="${escape(null_to_empty($$props.class), true) + " svelte-p80uux"}"><span>${escape(text)}</span> ${slots.default ? slots.default({}) : ` <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg> `}</button></div>` : ``}`;
});
const CopyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { width: "100%" },
      { height: "100%" },
      { preserveAspectRatio: "xMidYMid meet" },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>`;
});
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  let { copyToClipboard = false } = $$props;
  let { language = void 0 } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.copyToClipboard === void 0 && $$bindings.copyToClipboard && copyToClipboard !== void 0)
    $$bindings.copyToClipboard(copyToClipboard);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  return `<div class="my-5 bg-gray-50 border border-gray-200 rounded px-3 py-1 relative group">${copyToClipboard ? `<button${add_attribute("class", "absolute opacity-0 bg-gray-50 rounded-sm p-1 group-hover:opacity-100 top-4 right-6 h-6 w-6 z-10 transition-all duration-200 ease-in-out", 0)}>${`${validate_component(CopyIcon, "Copy").$$render($$result, {}, {}, {})}`}</button>` : ``} <pre class="overflow-auto max-h-64 pretty-scrollbar"><code class="${"language-" + escape(language, true) + " text-sm"}">${source ? `${escape(source)}` : `${slots.default ? slots.default({}) : ``}`}</code></pre></div>`;
});
const ValueError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error = void 0 } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<span class="group inline-flex items-center relative cursor-help cursor-helpfont-sans px-1 border border-red-200 py-[1px] bg-red-50 rounded"><span class="inline font-sans font-medium text-xs text-red-600" data-svelte-h="svelte-1927df">error</span> <span class="hidden text-white font-sans group-hover:inline absolute -top-1 left-[105%] text-sm z-10 px-2 py-1 bg-gray-800/80 leading-relaxed min-w-[150px] max-w-[400px] rounded-md">${escape(error)}</span></span>`;
});
const BigValueError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<div width="100%" class="inline-block group w-[100px] relative cursor-help cursor-helpfont-sans box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 h-[38px] mt-0.5 py-3 px-3 print:break-inside-avoid"><div class="font-bold text-center text-sm" data-svelte-h="svelte-f1i116">Big Value</div> <div class="m-auto w-[100px]"><div class="text-center [word-wrap:break-work] w-full font-medium text-xs text-red-600">error
			<span class="hidden text-white font-sans group-hover:inline-block absolute top-[50%] left-[50%] text-sm z-10 px-2 py-1 bg-gray-800/80 leading-relaxed min-w-[150px] max-w-[400px] rounded-md z-50 overflow-visible">${escape(error)}</span></div></div></div>`;
});
const EmptyChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isInitial = true } = $$props;
  let { emptySet = "error" } = $$props;
  let { emptyMessage = "No Records" } = $$props;
  let { chartType = "Component" } = $$props;
  let error = "Dataset is empty - query ran successfully, but no data was returned from the database";
  if (chartType === "Big Value") {
    error = "Dataset is empty";
  }
  if (emptySet === "error" && isInitial) {
    const setTextRed = "\x1B[31m%s\x1B[0m";
    console.error(setTextRed, `Error in ${chartType}: ${error}`);
    if (strictBuild) {
      throw Error(error);
    }
  } else if (emptySet === "warn" && isInitial) {
    console.warn(`Warning in ${chartType}: Dataset is empty - query ran successfully, but no data was returned from the database`);
  }
  if ($$props.isInitial === void 0 && $$bindings.isInitial && isInitial !== void 0)
    $$bindings.isInitial(isInitial);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  if ($$props.chartType === void 0 && $$bindings.chartType && chartType !== void 0)
    $$bindings.chartType(chartType);
  return `${["warn", "pass"].includes(emptySet) || !isInitial ? `${chartType === "Value" ? `<span class="text-xs text-gray-500 p-2 my-2 w-full border border-dashed rounded">${escape(emptyMessage)}</span>` : `${chartType === "Big Value" ? `<p class="text-xs text-gray-500 p-2 pt-[32px] my-0 text-center w-full align-middle h-[80px] border border-dashed rounded min-w-[120px]">${escape(emptyMessage)}</p>` : `<p class="text-xs text-gray-500 p-2 my-2 w-full border border-dashed rounded">${escape(emptyMessage)}</p>`}`}` : `${chartType === "Value" ? `${validate_component(ValueError, "ValueError").$$render($$result, { error }, {}, {})}` : `${chartType === "Big Value" ? `${validate_component(BigValueError, "BigValueError").$$render($$result, { error }, {}, {})}` : `${validate_component(ErrorChart, "ErrorChart").$$render($$result, { chartType, error }, {}, {})}`}`}`}`;
});
const uiColours = {
  blue100: "hsla(202, 100%, 95%, 1)",
  blue200: "hsla(204, 100%, 85%, 1)",
  blue300: "hsla(206, 95%, 72%, 1)",
  blue400: "hsla(208, 90%, 63%, 1)",
  blue500: "hsla(210, 85%, 54%, 1)",
  blue600: "hsla(212, 96%, 44%, 1)",
  blue700: "hsla(214, 98%, 38%, 1)",
  blue800: "hsla(217, 98%, 33%, 1)",
  blue900: "hsla(220, 99%, 24%, 1)",
  blue999: "hsla(222, 100%, 18%, 1)",
  bluelink: "hsla(205, 62%, 38%, 1)",
  green100: "hsla(167, 100%, 94%, 1)",
  green200: "hsla(166, 100%, 87%, 1)",
  green300: "hsla(163, 93%, 76%, 1)",
  green400: "hsla(161, 90%, 63%, 1)",
  green500: "hsla(159, 88%, 44%, 1)",
  green600: "hsla(158, 91%, 35%, 1)",
  green700: "hsla(156, 93%, 28%, 1)",
  green800: "hsla(154, 95%, 23%, 1)",
  green900: "hsla(152, 100%, 18%, 1)",
  green999: "hsla(150, 100%, 14%, 1)",
  grey100: "hsla(217, 33%, 97%, 1)",
  grey200: "hsla(215, 15%, 91%, 1)",
  grey300: "hsla(211, 16%, 82%, 1)",
  grey400: "hsla(212, 13%, 65%, 1)",
  grey500: "hsla(212, 10%, 53%, 1)",
  grey600: "hsla(212, 12%, 43%, 1)",
  grey700: "hsla(210, 14%, 37%, 1)",
  grey800: "hsla(210, 18%, 30%, 1)",
  grey900: "hsla(210, 20%, 25%, 1)",
  grey999: "hsla(211, 24%, 16%, 1)",
  yellow100: "hsl(49, 100%, 96%, 1)",
  yellow200: "hsl(48, 100%, 88%, 1)",
  yellow300: "hsl(48, 95%, 76%, 1)",
  yellow400: "hsl(48, 94%, 68%, 1)",
  yellow500: "hsl(44, 92%, 63%, 1)",
  yellow600: "hsl(42, 87%, 55%, 1)",
  yellow700: "hsl(36, 77%, 49%, 1)",
  yellow800: "hsl(29, 80%, 44%, 1)",
  yellow900: "hsl(22, 82%, 39%, 1)",
  yellow999: "hsl(15, 86%, 30%, 1)"
};
const chartColours = [
  "hsla(207, 65%, 39%, 1)",
  // Navy
  "hsla(195, 49%, 51%, 1)",
  // Teal
  "hsla(207, 69%, 79%, 1)",
  // Light Blue
  "hsla(202, 28%, 65%, 1)",
  // Grey
  "hsla(179, 37%, 65%, 1)",
  // Light Green
  "hsla(40, 30%, 75%, 1)",
  // Tan
  "hsla(38, 89%, 62%, 1)",
  // Yellow
  "hsla(342, 40%, 40%, 1)",
  // Maroon
  "hsla(207, 86%, 70%, 1)",
  // Blue
  "hsla(160, 40%, 46%, 1)",
  // Green
  // Grey Scale
  "#71777d",
  "#7e848a",
  "#8c9196",
  "#9a9fa3",
  "#a8acb0",
  "#b7babd",
  "#c5c8ca",
  "#d4d6d7",
  "#e3e4e5",
  "#f3f3f3"
];
export {
  BigValueError as B,
  CodeBlock as C,
  DownloadData as D,
  ErrorChart as E,
  QueryLoad as Q,
  Skeleton as S,
  ValueError as V,
  checkInputs as a,
  EmptyChart as b,
  configKey as c,
  formatValue as d,
  getFormatObjectFromString as e,
  formatTitle as f,
  globals as g,
  getColumnSummary as h,
  convertColumnToDate as i,
  standardizeDateColumn as j,
  formatAxisValue as k,
  chartColours as l,
  propKey as p,
  strictBuild as s,
  uiColours as u
};
