import { c as create_ssr_component, g as getContext, v as validate_component } from "./ssr.js";
import { g as getCompletedData, a as getSeriesConfig, c as getYAxisIndex, C as Chart_1 } from "./getCompletedData.js";
import { s as subscribe } from "./utils.js";
import { p as propKey, c as configKey, e as getFormatObjectFromString, f as formatTitle, d as formatValue } from "./colours.js";
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
export {
  LineChart as L
};
