import { s as subscribe, a as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, s as setContext, o as onDestroy, h as escape, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { p as pageHasQueries, r as routeHash } from "../../../../chunks/stores.js";
import { hasUnsetValues, Query } from "@evidence-dev/sdk/usql";
import { s as setQueryFunction, I as INPUTS_CONTEXT_KEY, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../../chunks/buildQuery.js";
import { w as writable } from "../../../../chunks/index2.js";
import "ssf";
import "../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import { D as DataTable_1, C as Column } from "../../../../chunks/DataTable.js";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "export-to-csv";
import "chroma-js";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../chunks/QueryViewer.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    {
      "conf_summary": "ncaaf/past_games_by_conference.sql"
    }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "9cfe2450c66f139acf6f7984624428cc", $routeHash);
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
  let conf_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __conf_summaryHasUnresolved = hasUnsetValues`SELECT
    *,
    elo_vs_vegas*-1 as elo_vs_vegas_num1,
    '/ncaaf/conferences/' || conf as team_link
FROM src_ncaaf_reg_season_summary_by_conf
ORDER BY avg_elo_rating DESC`;
  let __conf_summaryText = `SELECT
    *,
    elo_vs_vegas*-1 as elo_vs_vegas_num1,
    '/ncaaf/conferences/' || conf as team_link
FROM src_ncaaf_reg_season_summary_by_conf
ORDER BY avg_elo_rating DESC`;
  {
    try {
      if (!__conf_summaryHasUnresolved)
        conf_summaryInitialStates.initialData = profile(__db.query, __conf_summaryText, { query_name: "conf_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      conf_summaryInitialStates.initialError = e;
    }
  }
  let conf_summary;
  const __conf_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        conf_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "conf_summary",
      initialData: conf_summaryInitialStates.initialData,
      initialError: conf_summaryInitialStates.initialError
    }
  );
  __conf_summaryFactory(__conf_summaryText, { noResolve: __conf_summaryHasUnresolved });
  globalThis[Symbol.for("conf_summary")] = {
    get value() {
      return conf_summary;
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
  __conf_summaryHasUnresolved = hasUnsetValues`SELECT
    *,
    elo_vs_vegas*-1 as elo_vs_vegas_num1,
    '/ncaaf/conferences/' || conf as team_link
FROM src_ncaaf_reg_season_summary_by_conf
ORDER BY avg_elo_rating DESC`;
  __conf_summaryText = `SELECT
    *,
    elo_vs_vegas*-1 as elo_vs_vegas_num1,
    '/ncaaf/conferences/' || conf as team_link
FROM src_ncaaf_reg_season_summary_by_conf
ORDER BY avg_elo_rating DESC`;
  {
    __conf_summaryFactory(__conf_summaryText, { noResolve: __conf_summaryHasUnresolved });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${conf_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "conf_summary",
      queryResult: conf_summary
    },
    {},
    {}
  )}` : ``} ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: conf_summary,
      title: "Conference Standings",
      rows: "16",
      rowShading: "true",
      rowLine: "false",
      link: "team_link"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "conf" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "teams" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "avg_elo_rating", title: "Avg ELO" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "tot_wins" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "vegas_wins" }, {}, {})} ${validate_component(Column, "Column").$$render(
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
