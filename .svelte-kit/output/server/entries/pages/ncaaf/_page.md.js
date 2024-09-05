import { s as subscribe, a as set_store_value } from "../../../chunks/utils.js";
import { c as create_ssr_component, s as setContext, o as onDestroy, h as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { p as pageHasQueries, r as routeHash } from "../../../chunks/stores.js";
import { hasUnsetValues, Query } from "@evidence-dev/sdk/usql";
import { s as setQueryFunction, I as INPUTS_CONTEXT_KEY, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../chunks/buildQuery.js";
import { w as writable } from "../../../chunks/index2.js";
import "ssf";
import "../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import { D as DataTable_1, C as Column } from "../../../chunks/DataTable.js";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "export-to-csv";
import { V as Value_1 } from "../../../chunks/Value.js";
import "chroma-js";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../chunks/QueryViewer.js";
import { A as Alert } from "../../../chunks/Alert.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [{ "top_25": "ncaaf/top_25.sql" }, { "thru_date": "ncaaf/thru_date.sql" }]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "2bb6834e20d48b2f275b3fcc120b348b", $routeHash);
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
  let top_25InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __top_25HasUnresolved = hasUnsetValues`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC
limit 25`;
  let __top_25Text = `SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC
limit 25`;
  {
    try {
      if (!__top_25HasUnresolved)
        top_25InitialStates.initialData = profile(__db.query, __top_25Text, { query_name: "top_25" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      top_25InitialStates.initialError = e;
    }
  }
  let top_25;
  const __top_25Factory = Query.createReactive(
    {
      callback: (v) => {
        top_25 = v;
      },
      execFn: queryFunc
    },
    {
      id: "top_25",
      initialData: top_25InitialStates.initialData,
      initialError: top_25InitialStates.initialError
    }
  );
  __top_25Factory(__top_25Text, { noResolve: __top_25HasUnresolved });
  globalThis[Symbol.for("top_25")] = {
    get value() {
      return top_25;
    }
  };
  let thru_dateInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __thru_dateHasUnresolved = hasUnsetValues`SELECT '2023-12-09' as end_date`;
  let __thru_dateText = `SELECT '2023-12-09' as end_date`;
  {
    try {
      if (!__thru_dateHasUnresolved)
        thru_dateInitialStates.initialData = profile(__db.query, __thru_dateText, { query_name: "thru_date" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      thru_dateInitialStates.initialError = e;
    }
  }
  let thru_date;
  const __thru_dateFactory = Query.createReactive(
    {
      callback: (v) => {
        thru_date = v;
      },
      execFn: queryFunc
    },
    {
      id: "thru_date",
      initialData: thru_dateInitialStates.initialData,
      initialError: thru_dateInitialStates.initialError
    }
  );
  __thru_dateFactory(__thru_dateText, { noResolve: __thru_dateHasUnresolved });
  globalThis[Symbol.for("thru_date")] = {
    get value() {
      return thru_date;
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
  __top_25HasUnresolved = hasUnsetValues`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC
limit 25`;
  __top_25Text = `SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC
limit 25`;
  {
    __top_25Factory(__top_25Text, { noResolve: __top_25HasUnresolved });
  }
  __thru_dateHasUnresolved = hasUnsetValues`SELECT '2023-12-09' as end_date`;
  __thru_dateText = `SELECT '2023-12-09' as end_date`;
  {
    __thru_dateFactory(__thru_dateText, { noResolve: __thru_dateHasUnresolved });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${top_25 ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "top_25", queryResult: top_25 }, {}, {})}` : ``} ${thru_date ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "thru_date",
      queryResult: thru_date
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="ncaa-college-football-monte-carlo-simulator---2023-season" data-svelte-h="svelte-bot5ds"><a href="#ncaa-college-football-monte-carlo-simulator---2023-season">NCAA College Football Monte Carlo Simulator - 2023 Season</a></h1> <h2 class="markdown" id="conference-summaries" data-svelte-h="svelte-w0f3pu"><a href="#conference-summaries">Conference Summaries</a></h2> ${validate_component(Alert, "Alert").$$render($$result, { status: "info" }, {}, {
    default: () => {
      return `This data was last updated as of ${validate_component(Value_1, "Value").$$render($$result, { data: thru_date, column: "end_date" }, {}, {})}.`;
    }
  })} <h3 class="markdown" id="top-25-teams" data-svelte-h="svelte-3okca"><a href="#top-25-teams">Top 25 Teams</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: top_25,
      link: "team_link",
      rows: "25",
      rowShading: "true"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "Rk" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "conf" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "elo_rating_num0" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "avg_wins_num1" }, {}, {})}`;
      }
    }
  )} <center data-svelte-h="svelte-j4hrst"><p class="markdown">🏈 <a href="/ncaaf/predictions" class="markdown">Predictions</a> 🏈</p></center>`;
});
export {
  Page as default
};
