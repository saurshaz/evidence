import { c as create_ssr_component, g as getContext, v as validate_component } from "./ssr.js";
import { g as getCompletedData, a as getSeriesConfig, C as Chart_1 } from "./getCompletedData.js";
import { s as subscribe } from "./utils.js";
import { p as propKey, c as configKey, f as formatTitle, d as formatValue } from "./colours.js";
const Scatter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let x;
  let swapXY;
  let xFormat;
  let yFormat;
  let xMismatch;
  let columnSummary;
  let size;
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
  let { shape = "circle" } = $$props;
  let { fillColor = void 0 } = $$props;
  let { opacity = 0.7 } = $$props;
  let { outlineColor = void 0 } = $$props;
  let { outlineWidth = void 0 } = $$props;
  let { pointSize = 10 } = $$props;
  let { useTooltip: useTooltip2 = false } = $$props;
  let { tooltipTitle } = $$props;
  let multiSeries;
  let tooltipOutput;
  let baseConfig = {
    type: "scatter",
    label: { show: false },
    labelLayout: { hideOverlap: true },
    emphasis: { focus: "item" },
    symbol: shape,
    symbolSize: pointSize,
    itemStyle: {
      color: fillColor,
      opacity,
      borderColor: outlineColor,
      borderWidth: outlineWidth
    }
  };
  let tooltipOpts;
  if (useTooltip2) {
    tooltipOpts = {
      tooltip: {
        formatter(params) {
          if (multiSeries) {
            if (tooltipTitle) {
              tooltipOutput = `<span id="tooltip" style='font-weight:600'>${formatValue(params.value[2], "0")}</span><br/>
                            ${formatTitle(series)}: <span style='float:right; margin-left: 15px;'>${formatValue(params.seriesName)}</span><br/>
                            ${formatTitle(x, xFormat)}: <span style='float:right; margin-left: 15px;'>${formatValue(params.value[0], xFormat)}</span><br/>
                            ${formatTitle(typeof y === "object" ? params.seriesName : y, yFormat)}: <span style='float:right; margin-left: 15px;'>${formatValue(params.value[1], yFormat)}</span>`;
            } else {
              tooltipOutput = `<span id="tooltip" style='font-weight:600'>${formatValue(params.seriesName)}</span><br/>
                            ${formatTitle(x, xFormat)}: <span style='float:right; margin-left: 15px;'>${formatValue(params.value[0], xFormat)}</span><br/>
                            ${formatTitle(typeof y === "object" ? params.seriesName : y, yFormat)}: <span style='float:right; margin-left: 15px;'>${formatValue(params.value[1], yFormat)}</span>`;
            }
          } else {
            if (tooltipTitle) {
              tooltipOutput = `<span id="tooltip" style='font-weight:600;'>${formatValue(params.value[2], "0")}</span><br/>
                            <span style='font-weight: 400;'>${formatTitle(x, xFormat)}:</span> <span style='float:right; margin-left: 15px;'>${formatValue(params.value[0], xFormat)}</span><br/>
                            <span style='font-weight: 400;'>${formatTitle(y, yFormat)}:</span> <span style='float:right; margin-left: 15px;'>${formatValue(params.value[1], yFormat)}</span>`;
            } else {
              tooltipOutput = `<span id="tooltip" style='font-weight: 600;'>${formatTitle(x, xFormat)}:</span> <span style='float:right; margin-left: 15px;'>${formatValue(params.value[0], xFormat)}</span><br/>
                            <span style='font-weight: 600;'>${formatTitle(y, yFormat)}:</span> <span style='float:right; margin-left: 15px;'>${formatValue(params.value[1], yFormat)}</span>`;
            }
          }
          return tooltipOutput;
        }
      }
    };
    baseConfig = { ...baseConfig, ...tooltipOpts };
  }
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.series === void 0 && $$bindings.series && series !== void 0)
    $$bindings.series(series);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0)
    $$bindings.shape(shape);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.outlineColor === void 0 && $$bindings.outlineColor && outlineColor !== void 0)
    $$bindings.outlineColor(outlineColor);
  if ($$props.outlineWidth === void 0 && $$bindings.outlineWidth && outlineWidth !== void 0)
    $$bindings.outlineWidth(outlineWidth);
  if ($$props.pointSize === void 0 && $$bindings.pointSize && pointSize !== void 0)
    $$bindings.pointSize(pointSize);
  if ($$props.useTooltip === void 0 && $$bindings.useTooltip && useTooltip2 !== void 0)
    $$bindings.useTooltip(useTooltip2);
  if ($$props.tooltipTitle === void 0 && $$bindings.tooltipTitle && tooltipTitle !== void 0)
    $$bindings.tooltipTitle(tooltipTitle);
  data = $props.data;
  x = $props.x;
  swapXY = $props.swapXY;
  $props.xType;
  xFormat = $props.xFormat;
  yFormat = $props.yFormat;
  xMismatch = $props.xMismatch;
  columnSummary = $props.columnSummary;
  y = ySet ? y : $props.y;
  series = seriesSet ? series : $props.series;
  size = size ?? $props.size;
  tooltipTitle = tooltipTitle ?? $props.tooltipTitle;
  {
    if (!series && typeof y !== "object") {
      name = name ?? formatTitle(y, columnSummary[y].title);
      multiSeries = false;
    } else {
      data = getCompletedData(data, x, y, series);
      multiSeries = true;
    }
  }
  {
    if (options) {
      baseConfig = { ...baseConfig, ...options };
    }
  }
  seriesConfig = getSeriesConfig(data, x, y, series, swapXY, baseConfig, name, xMismatch, columnSummary, void 0, tooltipTitle);
  {
    config.update((d) => {
      d.series.push(...seriesConfig);
      d.legend.data.push(...seriesConfig.map((d2) => d2.name.toString()));
      return d;
    });
  }
  $$unsubscribe_props();
  return ``;
});
let chartType = "Scatter Plot";
let useTooltip = true;
const ScatterPlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { xAxisTitle = "true" } = $$props;
  let { yAxisTitle = "true" } = $$props;
  let { xGridlines = void 0 } = $$props;
  let { yGridlines = void 0 } = $$props;
  let { xAxisLabels = void 0 } = $$props;
  let { yAxisLabels = void 0 } = $$props;
  let { xBaseline = void 0 } = $$props;
  let { yBaseline = void 0 } = $$props;
  let { xTickMarks = void 0 } = $$props;
  let { yTickMarks = void 0 } = $$props;
  let { xMin = void 0 } = $$props;
  let { xMax = void 0 } = $$props;
  let { yMin = void 0 } = $$props;
  let { yMax = void 0 } = $$props;
  let { shape = void 0 } = $$props;
  let { fillColor = void 0 } = $$props;
  let { opacity = void 0 } = $$props;
  let { outlineColor = void 0 } = $$props;
  let { outlineWidth = void 0 } = $$props;
  let { pointSize = void 0 } = $$props;
  let { chartAreaHeight = void 0 } = $$props;
  let { sort = void 0 } = $$props;
  let { tooltipTitle = void 0 } = $$props;
  let { colorPalette = void 0 } = $$props;
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
  if ($$props.xMin === void 0 && $$bindings.xMin && xMin !== void 0)
    $$bindings.xMin(xMin);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0)
    $$bindings.shape(shape);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.outlineColor === void 0 && $$bindings.outlineColor && outlineColor !== void 0)
    $$bindings.outlineColor(outlineColor);
  if ($$props.outlineWidth === void 0 && $$bindings.outlineWidth && outlineWidth !== void 0)
    $$bindings.outlineWidth(outlineWidth);
  if ($$props.pointSize === void 0 && $$bindings.pointSize && pointSize !== void 0)
    $$bindings.pointSize(pointSize);
  if ($$props.chartAreaHeight === void 0 && $$bindings.chartAreaHeight && chartAreaHeight !== void 0)
    $$bindings.chartAreaHeight(chartAreaHeight);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.tooltipTitle === void 0 && $$bindings.tooltipTitle && tooltipTitle !== void 0)
    $$bindings.tooltipTitle(tooltipTitle);
  if ($$props.colorPalette === void 0 && $$bindings.colorPalette && colorPalette !== void 0)
    $$bindings.colorPalette(colorPalette);
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
      tooltipTitle,
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
      xMin,
      xMax,
      yMin,
      yMax,
      title,
      subtitle,
      chartType,
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
        return `${validate_component(Scatter, "Scatter").$$render(
          $$result,
          {
            shape,
            fillColor,
            opacity,
            outlineColor,
            outlineWidth,
            pointSize,
            useTooltip
          },
          {},
          {}
        )} ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  ScatterPlot as S
};
