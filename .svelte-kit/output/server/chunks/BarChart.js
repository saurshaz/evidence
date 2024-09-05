import { c as create_ssr_component, g as getContext, v as validate_component } from "./ssr.js";
import { g as getCompletedData, b as getSortedData, a as getSeriesConfig, c as getYAxisIndex, C as Chart_1 } from "./getCompletedData.js";
import { s as subscribe, b as noop } from "./utils.js";
import { e as getFormatObjectFromString, p as propKey, c as configKey, f as formatTitle, d as formatValue } from "./colours.js";
import { tidy, groupBy, summarizeAt, sum } from "@tidyjs/tidy";
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
export {
  BarChart as B
};
