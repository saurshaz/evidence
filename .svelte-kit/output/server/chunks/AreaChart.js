import { c as create_ssr_component, g as getContext, v as validate_component } from "./ssr.js";
import { g as getCompletedData, a as getSeriesConfig, C as Chart_1 } from "./getCompletedData.js";
import { s as subscribe } from "./utils.js";
import { p as propKey, c as configKey, e as getFormatObjectFromString, f as formatTitle, d as formatValue } from "./colours.js";
import { tidy, replaceNully } from "@tidyjs/tidy";
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
let chartType = "Area Chart";
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
      chartType,
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
export {
  AreaChart as A
};
