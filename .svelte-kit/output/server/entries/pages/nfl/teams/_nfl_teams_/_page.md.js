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
import { A as AreaChart } from "../../../../../chunks/AreaChart.js";
import { B as BarChart } from "../../../../../chunks/BarChart.js";
import { B as BigValue } from "../../../../../chunks/BigValue.js";
import "echarts";
import "debounce";
import "downloadjs";
import "export-to-csv";
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
    { "all_teams": "nfl/all_teams.sql" },
    { "season_summary": "nfl/reg_season.sql" },
    { "elo_latest": "nfl/elo_latest.sql" },
    {
      "most_recent_games": "nfl/most_recent_games.sql"
    },
    { "game_trend": "nfl/game_trend.sql" }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "27148cc3b85afe6dd15823b97f4c75d4", $routeHash);
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
  let season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __season_summaryHasUnresolved = hasUnsetValues`select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`;
  let __season_summaryText = `select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
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
FROM src_nfl_latest_elo`;
  let __elo_latestText = `SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`;
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
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`;
  let __most_recent_gamesText = `SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`;
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
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`;
  let __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
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
  let nfl_season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __nfl_season_summaryHasUnresolved = hasUnsetValues`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`;
  let __nfl_season_summaryText = `select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`;
  {
    try {
      if (!__nfl_season_summaryHasUnresolved)
        nfl_season_summaryInitialStates.initialData = profile(__db.query, __nfl_season_summaryText, { query_name: "nfl_season_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      nfl_season_summaryInitialStates.initialError = e;
    }
  }
  let nfl_season_summary;
  const __nfl_season_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        nfl_season_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "nfl_season_summary",
      initialData: nfl_season_summaryInitialStates.initialData,
      initialError: nfl_season_summaryInitialStates.initialError
    }
  );
  __nfl_season_summaryFactory(__nfl_season_summaryText, {
    noResolve: __nfl_season_summaryHasUnresolved
  });
  globalThis[Symbol.for("nfl_season_summary")] = {
    get value() {
      return nfl_season_summary;
    }
  };
  let nfl_wins_seed_scatterInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __nfl_wins_seed_scatterHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  let __nfl_wins_seed_scatterText = `SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  {
    try {
      if (!__nfl_wins_seed_scatterHasUnresolved)
        nfl_wins_seed_scatterInitialStates.initialData = profile(__db.query, __nfl_wins_seed_scatterText, { query_name: "nfl_wins_seed_scatter" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      nfl_wins_seed_scatterInitialStates.initialError = e;
    }
  }
  let nfl_wins_seed_scatter;
  const __nfl_wins_seed_scatterFactory = Query.createReactive(
    {
      callback: (v) => {
        nfl_wins_seed_scatter = v;
      },
      execFn: queryFunc
    },
    {
      id: "nfl_wins_seed_scatter",
      initialData: nfl_wins_seed_scatterInitialStates.initialData,
      initialError: nfl_wins_seed_scatterInitialStates.initialError
    }
  );
  __nfl_wins_seed_scatterFactory(__nfl_wins_seed_scatterText, {
    noResolve: __nfl_wins_seed_scatterHasUnresolved
  });
  globalThis[Symbol.for("nfl_wins_seed_scatter")] = {
    get value() {
      return nfl_wins_seed_scatter;
    }
  };
  let nfl_playoff_oddsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __nfl_playoff_oddsHasUnresolved = hasUnsetValues`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`;
  let __nfl_playoff_oddsText = `SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`;
  {
    try {
      if (!__nfl_playoff_oddsHasUnresolved)
        nfl_playoff_oddsInitialStates.initialData = profile(__db.query, __nfl_playoff_oddsText, { query_name: "nfl_playoff_odds" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      nfl_playoff_oddsInitialStates.initialError = e;
    }
  }
  let nfl_playoff_odds;
  const __nfl_playoff_oddsFactory = Query.createReactive(
    {
      callback: (v) => {
        nfl_playoff_odds = v;
      },
      execFn: queryFunc
    },
    {
      id: "nfl_playoff_odds",
      initialData: nfl_playoff_oddsInitialStates.initialData,
      initialError: nfl_playoff_oddsInitialStates.initialError
    }
  );
  __nfl_playoff_oddsFactory(__nfl_playoff_oddsText, {
    noResolve: __nfl_playoff_oddsHasUnresolved
  });
  globalThis[Symbol.for("nfl_playoff_odds")] = {
    get value() {
      return nfl_playoff_odds;
    }
  };
  let nfl_seed_detailsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __nfl_seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  let __nfl_seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  {
    try {
      if (!__nfl_seed_detailsHasUnresolved)
        nfl_seed_detailsInitialStates.initialData = profile(__db.query, __nfl_seed_detailsText, { query_name: "nfl_seed_details" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      nfl_seed_detailsInitialStates.initialError = e;
    }
  }
  let nfl_seed_details;
  const __nfl_seed_detailsFactory = Query.createReactive(
    {
      callback: (v) => {
        nfl_seed_details = v;
      },
      execFn: queryFunc
    },
    {
      id: "nfl_seed_details",
      initialData: nfl_seed_detailsInitialStates.initialData,
      initialError: nfl_seed_detailsInitialStates.initialError
    }
  );
  __nfl_seed_detailsFactory(__nfl_seed_detailsText, {
    noResolve: __nfl_seed_detailsHasUnresolved
  });
  globalThis[Symbol.for("nfl_seed_details")] = {
    get value() {
      return nfl_seed_details;
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
  __season_summaryHasUnresolved = hasUnsetValues`select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`;
  __season_summaryText = `select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`;
  {
    __season_summaryFactory(__season_summaryText, { noResolve: __season_summaryHasUnresolved });
  }
  __elo_latestHasUnresolved = hasUnsetValues`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`;
  __elo_latestText = `SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`;
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
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`;
  __most_recent_gamesText = `SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`;
  {
    __most_recent_gamesFactory(__most_recent_gamesText, {
      noResolve: __most_recent_gamesHasUnresolved
    });
  }
  __game_trendHasUnresolved = hasUnsetValues`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`;
  __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`;
  {
    __game_trendFactory(__game_trendText, { noResolve: __game_trendHasUnresolved });
  }
  __nfl_season_summaryHasUnresolved = hasUnsetValues`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`;
  __nfl_season_summaryText = `select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`;
  {
    __nfl_season_summaryFactory(__nfl_season_summaryText, {
      noResolve: __nfl_season_summaryHasUnresolved
    });
  }
  __nfl_wins_seed_scatterHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  __nfl_wins_seed_scatterText = `SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  {
    __nfl_wins_seed_scatterFactory(__nfl_wins_seed_scatterText, {
      noResolve: __nfl_wins_seed_scatterHasUnresolved
    });
  }
  __nfl_playoff_oddsHasUnresolved = hasUnsetValues`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`;
  __nfl_playoff_oddsText = `SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`;
  {
    __nfl_playoff_oddsFactory(__nfl_playoff_oddsText, {
      noResolve: __nfl_playoff_oddsHasUnresolved
    });
  }
  __nfl_seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  __nfl_seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`;
  {
    __nfl_seed_detailsFactory(__nfl_seed_detailsText, {
      noResolve: __nfl_seed_detailsHasUnresolved
    });
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
  )}` : ``} <h1 class="markdown" id="detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsnfl_teamstouppercase-columnteam"><a href="#detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsnfl_teamstouppercase-columnteam">Detailed Analysis for ${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data: all_teams.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      column: "team"
    },
    {},
    {}
  )}</a></h1> ${nfl_season_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "nfl_season_summary",
      queryResult: nfl_season_summary
    },
    {},
    {}
  )}` : ``} ${nfl_wins_seed_scatter ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "nfl_wins_seed_scatter",
      queryResult: nfl_wins_seed_scatter
    },
    {},
    {}
  )}` : ``} ${nfl_playoff_odds ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "nfl_playoff_odds",
      queryResult: nfl_playoff_odds
    },
    {},
    {}
  )}` : ``} ${nfl_seed_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "nfl_seed_details",
      queryResult: nfl_seed_details
    },
    {},
    {}
  )}` : ``} <h2 class="markdown" id="season-to-date-results" data-svelte-h="svelte-5bljsu"><a href="#season-to-date-results">Season-to-date Results</a></h2> ${elo_latest.length > 0 ? `${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: elo_latest.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "elo_rating",
      comparison: "since_start_num1"
    },
    {},
    {}
  )}` : ``} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: nfl_season_summary.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "predicted_wins",
      comparison: "vs_vegas_num1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: nfl_season_summary.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "seed_range"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: nfl_season_summary.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "win_range"
    },
    {},
    {}
  )} ${game_trend.length > 0 ? `${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: game_trend.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
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
      data: most_recent_games.filter((d) => d.home_team.toUpperCase() === $page.params.nfl_teams.toUpperCase() | d.visiting_team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      rows: "12"
    },
    {},
    {}
  )}` : `<p class="markdown" data-svelte-h="svelte-170ognw"><em class="markdown">The regular season has yet to begin. Check back soon!</em></p>`} <h3 class="markdown" id="playoff-odds" data-svelte-h="svelte-1mwkix9"><a href="#playoff-odds">Playoff Odds</a></h3> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: nfl_playoff_odds.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "first_rd_bye_pct1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: nfl_playoff_odds.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "made_playoffs_pct1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: nfl_playoff_odds.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      value: "missed_playoffs_pct1"
    },
    {},
    {}
  )} ${validate_component(AreaChart, "AreaChart").$$render(
    $$result,
    {
      data: nfl_wins_seed_scatter.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      x: "wins",
      y: "odds_pct1",
      series: "season_result",
      xAxisTitle: "wins",
      title: "projected end of season wins"
    },
    {},
    {}
  )} ${validate_component(BarChart, "BarChart").$$render(
    $$result,
    {
      data: nfl_seed_details.filter((d) => d.team.toUpperCase() === $page.params.nfl_teams.toUpperCase()),
      x: "seed",
      y: "occurances_pct1",
      xAxisTitle: "seed",
      title: "projected end of season seeding"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
