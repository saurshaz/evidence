import { h as getColumnSummary, e as getFormatObjectFromString, d as formatValue, u as uiColours, a as checkInputs, s as strictBuild, V as ValueError, Q as QueryLoad, E as ErrorChart, b as EmptyChart, g as globals, B as BigValueError } from "./colours.js";
import { c as create_ssr_component, o as onDestroy, v as validate_component, h as escape, d as add_attribute } from "./ssr.js";
import { V as Value_1 } from "./Value.js";
import { Query } from "@evidence-dev/sdk/usql";
import { init, connect } from "echarts";
import { b as browser } from "./index3.js";
import chroma from "chroma-js";
import { a as Delta_1 } from "./DataTable.js";
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
      position: function(point, params, dom, rect, size) {
        const horizontalCenter = size.viewSize[0] / 2 - size.contentSize[0] / 2;
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
export {
  BigValue as B
};
