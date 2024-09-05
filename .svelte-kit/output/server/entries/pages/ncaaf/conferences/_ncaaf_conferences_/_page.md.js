import { s as subscribe, a as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, s as setContext, o as onDestroy, h as escape, d as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { p as pageHasQueries, r as routeHash } from "../../../../../chunks/stores.js";
import { hasUnsetValues, Query } from "@evidence-dev/sdk/usql";
import { s as setQueryFunction, I as INPUTS_CONTEXT_KEY, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../../../chunks/buildQuery.js";
import { w as writable } from "../../../../../chunks/index2.js";
import "ssf";
import "../../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import { D as DataTable_1, C as Column } from "../../../../../chunks/DataTable.js";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "export-to-csv";
import { V as Value_1 } from "../../../../../chunks/Value.js";
import "chroma-js";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../../chunks/QueryViewer.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [{ "team_summary": "ncaaf/reg_season.sql" }]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "47bf9fba76ec1bd5246957495f850bd6", $routeHash);
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
  let team_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __team_summaryHasUnresolved = hasUnsetValues`select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`;
  let __team_summaryText = `select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`;
  {
    try {
      if (!__team_summaryHasUnresolved)
        team_summaryInitialStates.initialData = profile(__db.query, __team_summaryText, { query_name: "team_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      team_summaryInitialStates.initialError = e;
    }
  }
  let team_summary;
  const __team_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        team_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "team_summary",
      initialData: team_summaryInitialStates.initialData,
      initialError: team_summaryInitialStates.initialError
    }
  );
  __team_summaryFactory(__team_summaryText, { noResolve: __team_summaryHasUnresolved });
  globalThis[Symbol.for("team_summary")] = {
    get value() {
      return team_summary;
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
  __team_summaryHasUnresolved = hasUnsetValues`select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`;
  __team_summaryText = `select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`;
  {
    __team_summaryFactory(__team_summaryText, { noResolve: __team_summaryHasUnresolved });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${team_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "team_summary",
      queryResult: team_summary
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="detailed-analysis-for-value-datateam_summaryfilterd--dconftouppercase--pageparamsncaaf_conferencestouppercase-columnconf"><a href="#detailed-analysis-for-value-datateam_summaryfilterd--dconftouppercase--pageparamsncaaf_conferencestouppercase-columnconf">Detailed Analysis for ${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data: team_summary.filter((d) => d.conf.toUpperCase() === $page.params.ncaaf_conferences.toUpperCase()),
      column: "conf"
    },
    {},
    {}
  )}</a></h1> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: team_summary.filter((d) => d.conf.toUpperCase() === $page.params.ncaaf_conferences.toUpperCase()),
      title: "Conference Standings",
      rowShading: "true",
      rowLine: "false",
      rows: "100",
      link: "team_link"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "elo_rating", title: "ELO" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "avg_wins" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "vegas_wins" }, {}, {})} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "elo_vs_vegas_num1",
            contentType: "delta"
          },
          {},
          {}
        )}`;
      }
    }
  )} <p class="markdown" data-svelte-h="svelte-1quymny"><em class="markdown">Not all teams had vegas win totals provided, which explains why total wins compared to vegas wins doesn&#39;t match perfectly for some conferences.</em></p>`;
});
export {
  Page as default
};
