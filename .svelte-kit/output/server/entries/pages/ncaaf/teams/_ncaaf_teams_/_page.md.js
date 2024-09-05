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
import { D as DataTable_1 } from "../../../../../chunks/DataTable.js";
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
import { B as BigValue } from "../../../../../chunks/BigValue.js";
import "chroma-js";
import "echarts-stat";
import { L as LineChart } from "../../../../../chunks/LineChart.js";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { V as Value_1 } from "../../../../../chunks/Value.js";
import { p as profile } from "../../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../../chunks/QueryViewer.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    { "all_teams": "ncaaf/all_teams.sql" },
    { "season_summary": "ncaaf/reg_season.sql" },
    { "elo_latest": "ncaaf/elo_latest.sql" },
    {
      "most_recent_games": "ncaaf/most_recent_games.sql"
    },
    { "game_trend": "ncaaf/game_trend.sql" }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "06b3c3ac37f2ebda04db118624556ea5", $routeHash);
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
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
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
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
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
  let season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __season_summaryHasUnresolved = hasUnsetValues`select
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
  let __season_summaryText = `select
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
      if (!__season_summaryHasUnresolved)
        season_summaryInitialStates.initialData = profile(__db.query, __season_summaryText, { query_name: "season_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      season_summaryInitialStates.initialError = e;
    }
  }
  let season_summary;
  const __season_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        season_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "season_summary",
      initialData: season_summaryInitialStates.initialData,
      initialError: season_summaryInitialStates.initialError
    }
  );
  __season_summaryFactory(__season_summaryText, { noResolve: __season_summaryHasUnresolved });
  globalThis[Symbol.for("season_summary")] = {
    get value() {
      return season_summary;
    }
  };
  let elo_latestInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __elo_latestHasUnresolved = hasUnsetValues`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`;
  let __elo_latestText = `SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`;
  {
    try {
      if (!__elo_latestHasUnresolved)
        elo_latestInitialStates.initialData = profile(__db.query, __elo_latestText, { query_name: "elo_latest" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      elo_latestInitialStates.initialError = e;
    }
  }
  let elo_latest;
  const __elo_latestFactory = Query.createReactive(
    {
      callback: (v) => {
        elo_latest = v;
      },
      execFn: queryFunc
    },
    {
      id: "elo_latest",
      initialData: elo_latestInitialStates.initialData,
      initialError: elo_latestInitialStates.initialError
    }
  );
  __elo_latestFactory(__elo_latestText, { noResolve: __elo_latestHasUnresolved });
  globalThis[Symbol.for("elo_latest")] = {
    get value() {
      return elo_latest;
    }
  };
  let most_recent_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __most_recent_gamesHasUnresolved = hasUnsetValues`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`;
  let __most_recent_gamesText = `SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`;
  {
    try {
      if (!__most_recent_gamesHasUnresolved)
        most_recent_gamesInitialStates.initialData = profile(__db.query, __most_recent_gamesText, { query_name: "most_recent_games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      most_recent_gamesInitialStates.initialError = e;
    }
  }
  let most_recent_games;
  const __most_recent_gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        most_recent_games = v;
      },
      execFn: queryFunc
    },
    {
      id: "most_recent_games",
      initialData: most_recent_gamesInitialStates.initialData,
      initialError: most_recent_gamesInitialStates.initialError
    }
  );
  __most_recent_gamesFactory(__most_recent_gamesText, {
    noResolve: __most_recent_gamesHasUnresolved
  });
  globalThis[Symbol.for("most_recent_games")] = {
    get value() {
      return most_recent_games;
    }
  };
  let game_trendInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __game_trendHasUnresolved = hasUnsetValues`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`;
  let __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`;
  {
    try {
      if (!__game_trendHasUnresolved)
        game_trendInitialStates.initialData = profile(__db.query, __game_trendText, { query_name: "game_trend" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      game_trendInitialStates.initialError = e;
    }
  }
  let game_trend;
  const __game_trendFactory = Query.createReactive(
    {
      callback: (v) => {
        game_trend = v;
      },
      execFn: queryFunc
    },
    {
      id: "game_trend",
      initialData: game_trendInitialStates.initialData,
      initialError: game_trendInitialStates.initialError
    }
  );
  __game_trendFactory(__game_trendText, { noResolve: __game_trendHasUnresolved });
  globalThis[Symbol.for("game_trend")] = {
    get value() {
      return game_trend;
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
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
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
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;
  {
    __all_teamsFactory(__all_teamsText, { noResolve: __all_teamsHasUnresolved });
  }
  __season_summaryHasUnresolved = hasUnsetValues`select
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
  __season_summaryText = `select
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
    __season_summaryFactory(__season_summaryText, { noResolve: __season_summaryHasUnresolved });
  }
  __elo_latestHasUnresolved = hasUnsetValues`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`;
  __elo_latestText = `SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`;
  {
    __elo_latestFactory(__elo_latestText, { noResolve: __elo_latestHasUnresolved });
  }
  __most_recent_gamesHasUnresolved = hasUnsetValues`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`;
  __most_recent_gamesText = `SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`;
  {
    __most_recent_gamesFactory(__most_recent_gamesText, {
      noResolve: __most_recent_gamesHasUnresolved
    });
  }
  __game_trendHasUnresolved = hasUnsetValues`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`;
  __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`;
  {
    __game_trendFactory(__game_trendText, { noResolve: __game_trendHasUnresolved });
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
  )}` : ``} ${season_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "season_summary",
      queryResult: season_summary
    },
    {},
    {}
  )}` : ``} ${elo_latest ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "elo_latest",
      queryResult: elo_latest
    },
    {},
    {}
  )}` : ``} ${most_recent_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "most_recent_games",
      queryResult: most_recent_games
    },
    {},
    {}
  )}` : ``} ${game_trend ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "game_trend",
      queryResult: game_trend
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsncaaf_teamstouppercase-columnteam"><a href="#detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsncaaf_teamstouppercase-columnteam">Detailed Analysis for ${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data: all_teams.filter((d) => d.team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      column: "team"
    },
    {},
    {}
  )}</a></h1> <h2 class="markdown" id="season-to-date-results" data-svelte-h="svelte-5bljsu"><a href="#season-to-date-results">Season-to-date Results</a></h2> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: elo_latest.filter((d) => d.team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      value: "elo_rating",
      comparison: "since_start_num1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: season_summary.filter((d) => d.team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      value: "avg_wins",
      comparison: "elo_vs_vegas_num1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: season_summary.filter((d) => d.team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      value: "seed_range",
      title: "Conf. Seed"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: season_summary.filter((d) => d.team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      value: "win_range"
    },
    {},
    {}
  )} ${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: game_trend.filter((d) => d.team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      x: "week",
      y: "cumulative_elo_change_num0",
      title: "elo change over time",
      xMax: "12"
    },
    {},
    {}
  )} <h3 class="markdown" id="most-recent-games" data-svelte-h="svelte-efyf5h"><a href="#most-recent-games">Most Recent Games</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: most_recent_games.filter((d) => d.home_team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase() | d.visiting_team.toUpperCase() === $page.params.ncaaf_teams.toUpperCase()),
      rows: "12"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
