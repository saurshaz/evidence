import { D as DownloadData, C as CodeBlock, p as propKey, c as configKey, a as checkInputs, h as getColumnSummary, j as standardizeDateColumn, e as getFormatObjectFromString, f as formatTitle, k as formatAxisValue, l as chartColours, u as uiColours, d as formatValue, s as strictBuild, b as EmptyChart, E as ErrorChart, Q as QueryLoad, g as globals } from "./colours.js";
import { c as create_ssr_component, g as getContext, h as escape, f as createEventDispatcher, i as each, v as validate_component, s as setContext } from "./ssr.js";
import { Query } from "@evidence-dev/sdk/usql";
import { c as compute_rest_props, n as null_to_empty, s as subscribe } from "./utils.js";
import { w as writable } from "./index2.js";
import "echarts";
import "debounce";
import "downloadjs";
import "./VennDiagram.svelte_svelte_type_style_lang.js";
import { tidy, summarize, nDistinct, groupBy, mutateWithSummary, sum, mutate, rate, rename, complete } from "@tidyjs/tidy";
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
const css = {
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
  $$result.css.add(css);
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
  let { size = void 0 } = $$props;
  let { tooltipTitle = void 0 } = $$props;
  let { showAllXAxisLabels = false } = $$props;
  let { printEchartsConfig = false } = $$props;
  const ySet = y ? true : false;
  const xSet = x ? true : false;
  let { swapXY = false } = $$props;
  let { title = void 0 } = $$props;
  let { subtitle = void 0 } = $$props;
  let { chartType = "Chart" } = $$props;
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
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
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
  if ($$props.chartType === void 0 && $$bindings.chartType && chartType !== void 0)
    $$bindings.chartType(chartType);
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
            return ![x, series, size].includes(col);
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
          reqCols = { x, y, size };
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
        if (size) {
          inputCols.push(size);
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
        if (size) {
          if (sizeFmt) {
            sizeFormat = getFormatObjectFromString(sizeFmt, columnSummary[size].format?.valueType);
          } else {
            sizeFormat = columnSummary[size].format;
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
            size,
            yMin,
            y2Min,
            columnSummary,
            xAxisTitle,
            yAxisTitle,
            y2AxisTitle,
            tooltipTitle,
            chartAreaHeight,
            chartType,
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
        console.error(setTextRed, `Error in ${chartType}: ${e.message}`);
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
  )}`}` : `${validate_component(ErrorChart, "ErrorChart").$$render($$result, { error, chartType }, {}, {})}`}`;
});
const { Object: Object_1 } = globals;
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
        Object_1.assign(
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
function getSeriesConfig(data, x, y, series, swapXY, baseConfig, name, xMismatch, columnSummary, size = void 0, tooltipTitle = void 0, y2 = void 0) {
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
      if (size) {
        let sizeData = filteredData.map((d) => d[size]);
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
        if (size) {
          let sizeData = filteredData.map((d) => d[size]);
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
      if (size) {
        let sizeData = data.map((d) => d[size]);
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
    if (size) {
      let sizeData = data.map((d) => d[size]);
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
export {
  Chart_1 as C,
  ECharts as E,
  getSeriesConfig as a,
  getSortedData as b,
  getYAxisIndex as c,
  getCompletedData as g
};
