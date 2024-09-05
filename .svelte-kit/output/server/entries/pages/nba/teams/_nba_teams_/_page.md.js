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
    {
      "season_summary": "nba/season_summary.sql"
    },
    { "records_table": "nba/records_table.sql" },
    { "elo_latest": "nba/elo_latest.sql" },
    { "seed_details": "nba/seed_details.sql" },
    { "wins_details": "nba/wins_details.sql" },
    {
      "playoff_wins": "nba/playoff_odds_by_team_by_wins.sql"
    },
    { "playoff_odds": "nba/playoff_odds.sql" },
    {
      "most_recent_games": "nba/most_recent_games.sql"
    },
    { "game_trend": "nba/game_trend.sql" },
    { "future_games": "nba/future_games.sql" }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "d6426291c0609e4028f6de0498a4f274", $routeHash);
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
  let params = $page.params;
  let season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __season_summaryHasUnresolved = hasUnsetValues`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  let __season_summaryText = `select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
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
  let records_tableInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __records_tableHasUnresolved = hasUnsetValues`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  let __records_tableText = `SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  {
    try {
      if (!__records_tableHasUnresolved)
        records_tableInitialStates.initialData = profile(__db.query, __records_tableText, { query_name: "records_table" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      records_tableInitialStates.initialError = e;
    }
  }
  let records_table;
  const __records_tableFactory = Query.createReactive(
    {
      callback: (v) => {
        records_table = v;
      },
      execFn: queryFunc
    },
    {
      id: "records_table",
      initialData: records_tableInitialStates.initialData,
      initialError: records_tableInitialStates.initialError
    }
  );
  __records_tableFactory(__records_tableText, { noResolve: __records_tableHasUnresolved });
  globalThis[Symbol.for("records_table")] = {
    get value() {
      return records_table;
    }
  };
  let elo_latestInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __elo_latestHasUnresolved = hasUnsetValues`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  let __elo_latestText = `SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
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
  let seed_detailsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  let __seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  {
    try {
      if (!__seed_detailsHasUnresolved)
        seed_detailsInitialStates.initialData = profile(__db.query, __seed_detailsText, { query_name: "seed_details" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      seed_detailsInitialStates.initialError = e;
    }
  }
  let seed_details;
  const __seed_detailsFactory = Query.createReactive(
    {
      callback: (v) => {
        seed_details = v;
      },
      execFn: queryFunc
    },
    {
      id: "seed_details",
      initialData: seed_detailsInitialStates.initialData,
      initialError: seed_detailsInitialStates.initialError
    }
  );
  __seed_detailsFactory(__seed_detailsText, { noResolve: __seed_detailsHasUnresolved });
  globalThis[Symbol.for("seed_details")] = {
    get value() {
      return seed_details;
    }
  };
  let wins_detailsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __wins_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  let __wins_detailsText = `SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  {
    try {
      if (!__wins_detailsHasUnresolved)
        wins_detailsInitialStates.initialData = profile(__db.query, __wins_detailsText, { query_name: "wins_details" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      wins_detailsInitialStates.initialError = e;
    }
  }
  let wins_details;
  const __wins_detailsFactory = Query.createReactive(
    {
      callback: (v) => {
        wins_details = v;
      },
      execFn: queryFunc
    },
    {
      id: "wins_details",
      initialData: wins_detailsInitialStates.initialData,
      initialError: wins_detailsInitialStates.initialError
    }
  );
  __wins_detailsFactory(__wins_detailsText, { noResolve: __wins_detailsHasUnresolved });
  globalThis[Symbol.for("wins_details")] = {
    get value() {
      return wins_details;
    }
  };
  let playoff_winsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __playoff_winsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  let __playoff_winsText = `SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  {
    try {
      if (!__playoff_winsHasUnresolved)
        playoff_winsInitialStates.initialData = profile(__db.query, __playoff_winsText, { query_name: "playoff_wins" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      playoff_winsInitialStates.initialError = e;
    }
  }
  let playoff_wins;
  const __playoff_winsFactory = Query.createReactive(
    {
      callback: (v) => {
        playoff_wins = v;
      },
      execFn: queryFunc
    },
    {
      id: "playoff_wins",
      initialData: playoff_winsInitialStates.initialData,
      initialError: playoff_winsInitialStates.initialError
    }
  );
  __playoff_winsFactory(__playoff_winsText, { noResolve: __playoff_winsHasUnresolved });
  globalThis[Symbol.for("playoff_wins")] = {
    get value() {
      return playoff_wins;
    }
  };
  let playoff_oddsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __playoff_oddsHasUnresolved = hasUnsetValues`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  let __playoff_oddsText = `SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  {
    try {
      if (!__playoff_oddsHasUnresolved)
        playoff_oddsInitialStates.initialData = profile(__db.query, __playoff_oddsText, { query_name: "playoff_odds" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      playoff_oddsInitialStates.initialError = e;
    }
  }
  let playoff_odds;
  const __playoff_oddsFactory = Query.createReactive(
    {
      callback: (v) => {
        playoff_odds = v;
      },
      execFn: queryFunc
    },
    {
      id: "playoff_odds",
      initialData: playoff_oddsInitialStates.initialData,
      initialError: playoff_oddsInitialStates.initialError
    }
  );
  __playoff_oddsFactory(__playoff_oddsText, { noResolve: __playoff_oddsHasUnresolved });
  globalThis[Symbol.for("playoff_odds")] = {
    get value() {
      return playoff_odds;
    }
  };
  let most_recent_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __most_recent_gamesHasUnresolved = hasUnsetValues`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  let __most_recent_gamesText = `SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
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
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  let __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
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
  let future_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __future_gamesHasUnresolved = hasUnsetValues`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  let __future_gamesText = `SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  {
    try {
      if (!__future_gamesHasUnresolved)
        future_gamesInitialStates.initialData = profile(__db.query, __future_gamesText, { query_name: "future_games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      future_gamesInitialStates.initialError = e;
    }
  }
  let future_games;
  const __future_gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        future_games = v;
      },
      execFn: queryFunc
    },
    {
      id: "future_games",
      initialData: future_gamesInitialStates.initialData,
      initialError: future_gamesInitialStates.initialError
    }
  );
  __future_gamesFactory(__future_gamesText, { noResolve: __future_gamesHasUnresolved });
  globalThis[Symbol.for("future_games")] = {
    get value() {
      return future_games;
    }
  };
  let filtered_season_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __filtered_season_summaryHasUnresolved = hasUnsetValues`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${params.nba_teams.toUpperCase()}'`;
  let __filtered_season_summaryText = `select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${params.nba_teams.toUpperCase()}'`;
  {
    try {
      if (!__filtered_season_summaryHasUnresolved)
        filtered_season_summaryInitialStates.initialData = profile(__db.query, __filtered_season_summaryText, { query_name: "filtered_season_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      filtered_season_summaryInitialStates.initialError = e;
    }
  }
  let filtered_season_summary;
  const __filtered_season_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        filtered_season_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "filtered_season_summary",
      initialData: filtered_season_summaryInitialStates.initialData,
      initialError: filtered_season_summaryInitialStates.initialError
    }
  );
  __filtered_season_summaryFactory(__filtered_season_summaryText, {
    noResolve: __filtered_season_summaryHasUnresolved
  });
  globalThis[Symbol.for("filtered_season_summary")] = {
    get value() {
      return filtered_season_summary;
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
  params = $page.params;
  __season_summaryHasUnresolved = hasUnsetValues`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  __season_summaryText = `select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;
  {
    __season_summaryFactory(__season_summaryText, { noResolve: __season_summaryHasUnresolved });
  }
  __records_tableHasUnresolved = hasUnsetValues`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  __records_tableText = `SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;
  {
    __records_tableFactory(__records_tableText, { noResolve: __records_tableHasUnresolved });
  }
  __elo_latestHasUnresolved = hasUnsetValues`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  __elo_latestText = `SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;
  {
    __elo_latestFactory(__elo_latestText, { noResolve: __elo_latestHasUnresolved });
  }
  __seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  __seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  {
    __seed_detailsFactory(__seed_detailsText, { noResolve: __seed_detailsHasUnresolved });
  }
  __wins_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  __wins_detailsText = `SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;
  {
    __wins_detailsFactory(__wins_detailsText, { noResolve: __wins_detailsHasUnresolved });
  }
  __playoff_winsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  __playoff_winsText = `SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;
  {
    __playoff_winsFactory(__playoff_winsText, { noResolve: __playoff_winsHasUnresolved });
  }
  __playoff_oddsHasUnresolved = hasUnsetValues`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  __playoff_oddsText = `SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;
  {
    __playoff_oddsFactory(__playoff_oddsText, { noResolve: __playoff_oddsHasUnresolved });
  }
  __most_recent_gamesHasUnresolved = hasUnsetValues`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  __most_recent_gamesText = `SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;
  {
    __most_recent_gamesFactory(__most_recent_gamesText, {
      noResolve: __most_recent_gamesHasUnresolved
    });
  }
  __game_trendHasUnresolved = hasUnsetValues`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  __game_trendText = `with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;
  {
    __game_trendFactory(__game_trendText, { noResolve: __game_trendHasUnresolved });
  }
  __future_gamesHasUnresolved = hasUnsetValues`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  __future_gamesText = `SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;
  {
    __future_gamesFactory(__future_gamesText, { noResolve: __future_gamesHasUnresolved });
  }
  __filtered_season_summaryHasUnresolved = hasUnsetValues`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${params.nba_teams.toUpperCase()}'`;
  __filtered_season_summaryText = `select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${params.nba_teams.toUpperCase()}'`;
  {
    __filtered_season_summaryFactory(__filtered_season_summaryText, {
      noResolve: __filtered_season_summaryHasUnresolved
    });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${season_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "season_summary",
      queryResult: season_summary
    },
    {},
    {}
  )}` : ``} ${records_table ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "records_table",
      queryResult: records_table
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
  )}` : ``} ${seed_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "seed_details",
      queryResult: seed_details
    },
    {},
    {}
  )}` : ``} ${wins_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "wins_details",
      queryResult: wins_details
    },
    {},
    {}
  )}` : ``} ${playoff_wins ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "playoff_wins",
      queryResult: playoff_wins
    },
    {},
    {}
  )}` : ``} ${playoff_odds ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "playoff_odds",
      queryResult: playoff_odds
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
  )}` : ``} ${future_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "future_games",
      queryResult: future_games
    },
    {},
    {}
  )}` : ``} ${filtered_season_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "filtered_season_summary",
      queryResult: filtered_season_summary
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="detailed-analysis-for-"><a href="#detailed-analysis-for-">Detailed Analysis for ${validate_component(Value_1, "Value").$$render(
    $$result,
    {
      data: filtered_season_summary,
      column: "team_long"
    },
    {},
    {}
  )}</a></h1> <h2 class="markdown" id="season-to-date-results" data-svelte-h="svelte-5bljsu"><a href="#season-to-date-results">Season-to-date Results</a></h2> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: elo_latest.filter((d) => d.team === params.nba_teams.toUpperCase()),
      value: "elo_rating",
      comparison: "since_start"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: filtered_season_summary,
      value: "predicted_wins",
      comparison: "vs_vegas_num1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: filtered_season_summary,
      value: "seed_range"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: filtered_season_summary,
      value: "win_range"
    },
    {},
    {}
  )} ${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: game_trend.filter((d) => d.team === params.nba_teams.toUpperCase()),
      x: "date",
      y: "cumulative_elo_change_num0",
      title: "elo change over time"
    },
    {},
    {}
  )} <h3 class="markdown" id="most-recent-games" data-svelte-h="svelte-efyf5h"><a href="#most-recent-games">Most Recent Games</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: most_recent_games.filter((d) => d.home_team === params.nba_teams.toUpperCase() | d.visiting_team === params.nba_teams.toUpperCase()),
      rows: "5"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "date" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "T", title: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "visiting_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "home_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "winning_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "score" }, {}, {})}`;
      }
    }
  )} <h3 class="markdown" id="matchup-summary" data-svelte-h="svelte-fhdi38"><a href="#matchup-summary">Matchup Summary</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: records_table.filter((d) => d.team === params.nba_teams.toUpperCase()),
      rows: "7"
    },
    {},
    {}
  )} ${future_games.length > 0 ? `<h3 class="markdown" id="upcoming-schedule" data-svelte-h="svelte-1aiam6d"><a href="#upcoming-schedule">Upcoming Schedule</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: future_games.filter((d) => d.home === params.nba_teams.toUpperCase() | d.visitor === params.nba_teams.toUpperCase()),
      rows: "5",
      link: "game_link"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "date" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "T", title: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "visitor" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "home" }, {}, {})} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "home_win_pct1",
            title: "Win % (Home)"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "american_odds",
            align: "right",
            title: "Odds (Home)"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "implied_line_num1",
            title: "Line (Home)"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render($$result, { id: "predicted_score", title: "Score" }, {}, {})}`;
      }
    }
  )} <h3 class="markdown" id="playoff-odds" data-svelte-h="svelte-1mwkix9"><a href="#playoff-odds">Playoff Odds</a></h3> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: playoff_odds.filter((d) => d.team === params.nba_teams.toUpperCase()),
      value: "top_six_pct1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: playoff_odds.filter((d) => d.team === params.nba_teams.toUpperCase()),
      value: "play_in_pct1"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: playoff_odds.filter((d) => d.team === params.nba_teams.toUpperCase()),
      value: "missed_playoffs_pct1"
    },
    {},
    {}
  )} ${validate_component(AreaChart, "AreaChart").$$render(
    $$result,
    {
      data: playoff_wins.filter((d) => d.team === params.nba_teams.toUpperCase()),
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
      data: seed_details.filter((d) => d.team === params.nba_teams.toUpperCase()),
      x: "seed",
      y: "occurances_pct1",
      xAxisTitle: "seed",
      title: "projected end of season seeding"
    },
    {},
    {}
  )} ${game_trend.length == 0 ? `<h2 class="markdown" id="playoff-analysis" data-svelte-h="svelte-3nubcd"><a href="#playoff-analysis">Playoff Analysis</a></h2> <p class="markdown" data-svelte-h="svelte-1ugq117">add the following:</p> <ul class="markdown" data-svelte-h="svelte-1au48wa"><li class="markdown">play-in analysis (if playin games exist, i.e. count &gt; 1)<ul class="markdown"><li class="markdown">this will show % of time by spot, and then % of advancing by seed</li></ul></li> <li class="markdown">playoff analysis<ul class="markdown"><li class="markdown">most common opponents with win rate by series (mostly nulls, sparsely populated)</li></ul></li></ul>` : ``}` : ``}`;
});
export {
  Page as default
};
