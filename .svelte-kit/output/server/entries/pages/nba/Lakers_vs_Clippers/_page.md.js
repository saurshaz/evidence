import { s as subscribe, a as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, g as getContext, v as validate_component, s as setContext, o as onDestroy } from "../../../../chunks/ssr.js";
import "../../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { p as pageHasQueries, r as routeHash } from "../../../../chunks/stores.js";
import { Query, hasUnsetValues } from "@evidence-dev/sdk/usql";
import { s as setQueryFunction, I as INPUTS_CONTEXT_KEY, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../../chunks/buildQuery.js";
import { w as writable } from "../../../../chunks/index2.js";
import "ssf";
import "../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import "export-to-csv";
import "chroma-js";
import "@evidence-dev/universal-sql/client-duckdb";
import "lodash.debounce";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import { S as ScatterPlot } from "../../../../chunks/ScatterPlot.js";
import { p as propKey, c as configKey, a as checkInputs, E as ErrorChart, Q as QueryLoad, b as EmptyChart, g as globals } from "../../../../chunks/colours.js";
import { p as profile } from "../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../chunks/QueryViewer.js";
let defaultColor = "blue";
const ReferenceArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $props, $$unsubscribe_props;
  let props = getContext(propKey);
  $$unsubscribe_props = subscribe(props, (value) => $props = value);
  getContext(configKey);
  let { xMin = void 0 } = $$props;
  let { xMax = void 0 } = $$props;
  let { yMin = void 0 } = $$props;
  let { yMax = void 0 } = $$props;
  let { label = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { areaColor = void 0 } = $$props;
  let { opacity = 1 } = $$props;
  let { labelColor = void 0 } = $$props;
  let { border = false } = $$props;
  let { borderColor = void 0 } = $$props;
  let { borderType = void 0 } = $$props;
  let { borderWidth = void 0 } = $$props;
  let { labelPosition = void 0 } = $$props;
  let colorList = {
    red: {
      areaColor: "#fceeed",
      labelColor: "#b04646",
      borderColor: "#b04646"
    },
    green: {
      areaColor: "#e6f5e6",
      labelColor: "#65a665",
      borderColor: "#65a665"
    },
    yellow: {
      areaColor: "#fff9e0",
      labelColor: "#edb131",
      borderColor: "#edb131"
    },
    grey: {
      areaColor: "hsl(217, 33%, 97%)",
      labelColor: "hsl(212, 10%, 53%)",
      borderColor: "hsl(212, 10%, 53%)"
    },
    blue: {
      areaColor: "#EDF6FD",
      labelColor: "#51a2e0",
      borderColor: "#51a2e0"
    }
  };
  let chartType2;
  let error;
  let swapXY;
  const labelPositions = {
    topLeft: "insideTopLeft",
    top: "insideTop",
    topRight: "insideTopRight",
    bottomLeft: "insideBottomLeft",
    bottom: "insideBottom",
    bottomRight: "insideBottomRight",
    left: "insideLeft",
    center: "inside",
    centre: "inside",
    right: "insideRight"
  };
  let configData = [];
  let inputs = [xMin, xMax, yMin, yMax, label];
  let reqCols = [];
  if ($$props.xMin === void 0 && $$bindings.xMin && xMin !== void 0)
    $$bindings.xMin(xMin);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.areaColor === void 0 && $$bindings.areaColor && areaColor !== void 0)
    $$bindings.areaColor(areaColor);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.borderType === void 0 && $$bindings.borderType && borderType !== void 0)
    $$bindings.borderType(borderType);
  if ($$props.borderWidth === void 0 && $$bindings.borderWidth && borderWidth !== void 0)
    $$bindings.borderWidth(borderWidth);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  border = border === "true" || border === true;
  {
    if (labelColor) {
      if (Object.keys(colorList).includes(labelColor)) {
        labelColor = colorList[labelColor].labelColor;
      }
    }
  }
  {
    if (borderColor) {
      if (Object.keys(colorList).includes(borderColor)) {
        borderColor = colorList[borderColor].borderColor;
      }
    }
  }
  {
    if (areaColor) {
      if (Object.keys(colorList).includes(areaColor)) {
        areaColor = colorList[areaColor].areaColor;
      }
    }
  }
  {
    if (Object.keys(colorList).includes(color)) {
      areaColor = areaColor ?? colorList[color].areaColor;
      labelColor = labelColor ?? colorList[color].labelColor;
      borderColor = borderColor ?? colorList[color].borderColor;
    } else {
      areaColor = areaColor ?? color ?? colorList[defaultColor].areaColor;
      labelColor = labelColor ?? color ?? colorList[defaultColor].labelColor;
      borderColor = borderColor ?? color ?? colorList[defaultColor].borderColor;
    }
  }
  {
    try {
      chartType2 = $props.chartType;
    } catch (e) {
      chartType2 = "Reference Area";
      error = "Reference Area cannot be used outside of a chart component";
    }
  }
  {
    if (!error) {
      try {
        swapXY = $props.swapXY;
        if (swapXY) {
          [xMin, xMax, yMin, yMax] = [yMin, yMax, xMin, xMax];
          labelPosition = labelPosition ?? "topRight";
        } else {
          if (yMin && yMax && xMin && xMax) {
            labelPosition = labelPosition ?? "topLeft";
          } else if (yMin || yMax) {
            labelPosition = labelPosition ?? "right";
          } else {
            labelPosition = labelPosition ?? "top";
          }
        }
      } catch (e) {
        error = e;
      }
    }
  }
  labelPosition = labelPositions[labelPosition] ?? "insideEndTop";
  {
    for (let i = 0; i < inputs.length; i++) {
      reqCols = [];
      if (inputs[i] !== void 0) {
        reqCols.push(inputs[i]);
      }
    }
  }
  {
    if (data && !error) {
      try {
        checkInputs(data, reqCols);
        configData = [];
        for (let i = 0; i < data.length; i++) {
          configData.push([
            {
              name: data[i][label],
              xAxis: data[i][xMin],
              yAxis: data[i][yMin]
            },
            {
              xAxis: data[i][xMax],
              yAxis: data[i][yMax]
            }
          ]);
        }
      } catch (e) {
        error = e;
      }
    } else {
      configData.push([{ name: label, xAxis: xMin, yAxis: yMin }, { xAxis: xMax, yAxis: yMax }]);
    }
  }
  $$unsubscribe_props();
  return `${error ? `${validate_component(ErrorChart, "ErrorChart").$$render(
    $$result,
    {
      error,
      minHeight: "50",
      chartType: chartType2 === "Reference Area" ? chartType2 : `${chartType2}: Reference Area`
    },
    {},
    {}
  )}` : ``}`;
});
const { Object: Object_1 } = globals;
let chartType = "Reference Area";
const ReferenceArea_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data = void 0 } = $$props;
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
  spreadProps = {
    ...Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0))
  };
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
      return `${validate_component(ReferenceArea, "ReferenceArea").$$render(
        $$result,
        Object_1.assign({}, spreadProps, {
          data: Query.isQuery(loaded) ? Array.from(loaded) : loaded
        }),
        {},
        {}
      )}`;
    }
  })}`;
});
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y_min;
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "42a13a1eda68b70df5aab43c354bd4cd", $routeHash);
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
  let elo_historyInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __elo_historyHasUnresolved = hasUnsetValues`select *
    from src_nba_elo_history`;
  let __elo_historyText = `select *
    from src_nba_elo_history`;
  {
    try {
      if (!__elo_historyHasUnresolved)
        elo_historyInitialStates.initialData = profile(__db.query, __elo_historyText, { query_name: "elo_history" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      elo_historyInitialStates.initialError = e;
    }
  }
  let elo_history;
  const __elo_historyFactory = Query.createReactive(
    {
      callback: (v) => {
        elo_history = v;
      },
      execFn: queryFunc
    },
    {
      id: "elo_history",
      initialData: elo_historyInitialStates.initialData,
      initialError: elo_historyInitialStates.initialError
    }
  );
  __elo_historyFactory(__elo_historyText, { noResolve: __elo_historyHasUnresolved });
  globalThis[Symbol.for("elo_history")] = {
    get value() {
      return elo_history;
    }
  };
  let team1_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team1_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`;
  let __team1_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`;
  {
    try {
      if (!__team1_trendHasUnresolved)
        team1_trendInitialStates.initialData = profile(__db.query, __team1_trendText, { query_name: "team1_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team1_trendInitialStates.initialError = e;
    }
  }
  let team1_trend;
  const __team1_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        team1_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "team1_trend",
      initialData: team1_trendInitialStates.initialData,
      initialError: team1_trendInitialStates.initialError
    }
  );
  __team1_trendFactory(__team1_trendText, { noResolve: __team1_trendHasUnresolved });
  globalThis[Symbol.for("team1_trend")] = {
    get value() {
      return team1_trend;
    }
  };
  let team2_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team2_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`;
  let __team2_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`;
  {
    try {
      if (!__team2_trendHasUnresolved)
        team2_trendInitialStates.initialData = profile(__db.query, __team2_trendText, { query_name: "team2_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team2_trendInitialStates.initialError = e;
    }
  }
  let team2_trend;
  const __team2_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        team2_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "team2_trend",
      initialData: team2_trendInitialStates.initialData,
      initialError: team2_trendInitialStates.initialError
    }
  );
  __team2_trendFactory(__team2_trendText, { noResolve: __team2_trendHasUnresolved });
  globalThis[Symbol.for("team2_trend")] = {
    get value() {
      return team2_trend;
    }
  };
  let combined_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __combined_trendHasUnresolved = hasUnsetValues`select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`;
  let __combined_trendText = `select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`;
  {
    try {
      if (!__combined_trendHasUnresolved)
        combined_trendInitialStates.initialData = profile(__db.query, __combined_trendText, { query_name: "combined_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      combined_trendInitialStates.initialError = e;
    }
  }
  let combined_trend;
  const __combined_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        combined_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "combined_trend",
      initialData: combined_trendInitialStates.initialData,
      initialError: combined_trendInitialStates.initialError
    }
  );
  __combined_trendFactory(__combined_trendText, { noResolve: __combined_trendHasUnresolved });
  globalThis[Symbol.for("combined_trend")] = {
    get value() {
      return combined_trend;
    }
  };
  {
    onDestroy(inputs_store.subscribe((inputs2) => {
    }));
  }
  if ($$props.data === void 0 && $$bindings.data && props !== void 0)
    $$bindings.data(props);
  ({ data = {}, customFormattingSettings, __db } = props);
  {
    pageHasQueries.set(Object.keys(data).length > 0);
  }
  $page.params;
  __elo_historyHasUnresolved = hasUnsetValues`select *
    from src_nba_elo_history`;
  __elo_historyText = `select *
    from src_nba_elo_history`;
  {
    __elo_historyFactory(__elo_historyText, { noResolve: __elo_historyHasUnresolved });
  }
  __team1_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`;
  __team1_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`;
  {
    __team1_trendFactory(__team1_trendText, { noResolve: __team1_trendHasUnresolved });
  }
  __team2_trendHasUnresolved = hasUnsetValues`with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`;
  __team2_trendText = `with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`;
  {
    __team2_trendFactory(__team2_trendText, { noResolve: __team2_trendHasUnresolved });
  }
  __combined_trendHasUnresolved = hasUnsetValues`select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`;
  __combined_trendText = `select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`;
  {
    __combined_trendFactory(__combined_trendText, { noResolve: __combined_trendHasUnresolved });
  }
  y_min = Math.min(...combined_trend.map((item) => item.elo));
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${elo_history ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "elo_history",
      queryResult: elo_history
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="lakers-vs-clippers" data-svelte-h="svelte-m43vcp"><a href="#lakers-vs-clippers">Lakers vs Clippers</a></h1> <p class="markdown" data-svelte-h="svelte-1805p24">How are things looking for the Lakers vs Clippers on a historical basis?</p> <h2 class="markdown" id="elo-trends" data-svelte-h="svelte-1b0adum"><a href="#elo-trends">Elo Trends</a></h2> ${team1_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team1_trend",
      queryResult: team1_trend
    },
    {},
    {}
  )}` : ``} ${team2_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team2_trend",
      queryResult: team2_trend
    },
    {},
    {}
  )}` : ``} ${combined_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "combined_trend",
      queryResult: combined_trend
    },
    {},
    {}
  )}` : ``} ${validate_component(ScatterPlot, "ScatterPlot").$$render(
    $$result,
    {
      data: combined_trend,
      x: "date",
      y: "elo",
      title: "ELO value over time",
      series: "team",
      xAxisTitle: "date",
      handleMissing: "connect",
      yMin: parseFloat(y_min) - 25,
      yMax: "1900",
      pointSize: "4"
    },
    {},
    {
      default: () => {
        return `${validate_component(ReferenceArea_1, "ReferenceArea").$$render(
          $$result,
          {
            xMin: "1996-11-03",
            xMax: "2004-06-15",
            label: "Kobe & Shaq Era",
            color: "yellow"
          },
          {},
          {}
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
