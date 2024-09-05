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
  "queries": [{ "all_teams": "nfl/all_teams.sql" }]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "b9fea012512f9d3813161fc900c8d890", $routeHash);
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
  let all_teamsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __all_teamsHasUnresolved = hasUnsetValues`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;
  let __all_teamsText = `SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;
  {
    try {
      if (!__all_teamsHasUnresolved)
        all_teamsInitialStates.initialData = profile(__db.query, __all_teamsText, { query_name: "all_teams" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      all_teamsInitialStates.initialError = e;
    }
  }
  let all_teams;
  const __all_teamsFactory = Query.createReactive(
    {
      callback: (v) => {
        all_teams = v;
      },
      execFn: queryFunc
    },
    {
      id: "all_teams",
      initialData: all_teamsInitialStates.initialData,
      initialError: all_teamsInitialStates.initialError
    }
  );
  __all_teamsFactory(__all_teamsText, { noResolve: __all_teamsHasUnresolved });
  globalThis[Symbol.for("all_teams")] = {
    get value() {
      return all_teams;
    }
  };
  let afc_confInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __afc_confHasUnresolved = hasUnsetValues`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`;
  let __afc_confText = `select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`;
  {
    try {
      if (!__afc_confHasUnresolved)
        afc_confInitialStates.initialData = profile(__db.query, __afc_confText, { query_name: "afc_conf" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      afc_confInitialStates.initialError = e;
    }
  }
  let afc_conf;
  const __afc_confFactory = Query.createReactive(
    {
      callback: (v) => {
        afc_conf = v;
      },
      execFn: queryFunc
    },
    {
      id: "afc_conf",
      initialData: afc_confInitialStates.initialData,
      initialError: afc_confInitialStates.initialError
    }
  );
  __afc_confFactory(__afc_confText, { noResolve: __afc_confHasUnresolved });
  globalThis[Symbol.for("afc_conf")] = {
    get value() {
      return afc_conf;
    }
  };
  let nfc_confInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __nfc_confHasUnresolved = hasUnsetValues`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`;
  let __nfc_confText = `select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`;
  {
    try {
      if (!__nfc_confHasUnresolved)
        nfc_confInitialStates.initialData = profile(__db.query, __nfc_confText, { query_name: "nfc_conf" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      nfc_confInitialStates.initialError = e;
    }
  }
  let nfc_conf;
  const __nfc_confFactory = Query.createReactive(
    {
      callback: (v) => {
        nfc_conf = v;
      },
      execFn: queryFunc
    },
    {
      id: "nfc_conf",
      initialData: nfc_confInitialStates.initialData,
      initialError: nfc_confInitialStates.initialError
    }
  );
  __nfc_confFactory(__nfc_confText, { noResolve: __nfc_confHasUnresolved });
  globalThis[Symbol.for("nfc_conf")] = {
    get value() {
      return nfc_conf;
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
  __all_teamsHasUnresolved = hasUnsetValues`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;
  __all_teamsText = `SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;
  {
    __all_teamsFactory(__all_teamsText, { noResolve: __all_teamsHasUnresolved });
  }
  __afc_confHasUnresolved = hasUnsetValues`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`;
  __afc_confText = `select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`;
  {
    __afc_confFactory(__afc_confText, { noResolve: __afc_confHasUnresolved });
  }
  __nfc_confHasUnresolved = hasUnsetValues`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`;
  __nfc_confText = `select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`;
  {
    __nfc_confFactory(__nfc_confText, { noResolve: __nfc_confHasUnresolved });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${all_teams ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "all_teams",
      queryResult: all_teams
    },
    {},
    {}
  )}` : ``} ${afc_conf ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "afc_conf",
      queryResult: afc_conf
    },
    {},
    {}
  )}` : ``} ${nfc_conf ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "nfc_conf",
      queryResult: nfc_conf
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="nfl-teams" data-svelte-h="svelte-sqlhdi"><a href="#nfl-teams">NFL Teams</a></h1> <h2 class="markdown" id="american-football-conference" data-svelte-h="svelte-19zts81"><a href="#american-football-conference">American Football Conference</a></h2> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: afc_conf,
      link: "team_link",
      rows: "16",
      rowShading: "true"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "seed" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "elo_rating_num0" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "avg_wins_num1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "make_playoffs_pct1" }, {}, {})}`;
      }
    }
  )} <h2 class="markdown" id="national-football-conference" data-svelte-h="svelte-1rxg0uh"><a href="#national-football-conference">National Football Conference</a></h2> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: nfc_conf,
      link: "team_link",
      rows: "16",
      rowShading: "true"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "seed" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "elo_rating_num0" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "avg_wins_num1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "make_playoffs_pct1" }, {}, {})}`;
      }
    }
  )}`;
});
export {
  Page as default
};
