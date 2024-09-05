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
import { A as AreaChart } from "../../../chunks/AreaChart.js";
import { B as BarChart } from "../../../chunks/BarChart.js";
import { V as Value_1 } from "../../../chunks/Value.js";
import "echarts";
import "chroma-js";
import { E as ECharts } from "../../../chunks/getCompletedData.js";
import "downloadjs";
import "export-to-csv";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../chunks/profile.js";
import "debounce";
import { Q as QueryViewer } from "../../../chunks/QueryViewer.js";
import { B as ButtonGroup, a as ButtonGroupItem } from "../../../chunks/ButtonGroup.js";
import { A as Alert } from "../../../chunks/Alert.js";
import { D as Dropdown, a as DropdownOption } from "../../../chunks/Dropdown.js";
import { T as Tabs, a as Tab } from "../../../chunks/Tab.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    { "thru_date": "nba/thru_date.sql" },
    {
      "wins_seed_scatter": "nba/wins_seed_scatter.sql"
    },
    { "seed_details": "nba/seed_details.sql" },
    {
      "tournament_seeding": "nba/tournament_seeding.sql"
    },
    { "reg_season": "nba/reg_season.sql" },
    { "standings": "nba/standings.sql" },
    {
      "summary_by_team": "nba/summary_by_team.sql"
    },
    {
      "season_summary": "nba/season_summary.sql"
    },
    { "records_table": "nba/records_table.sql" },
    { "elo_latest": "nba/elo_latest.sql" },
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
  set_store_value(routeHash, $routeHash = "1a2305bfc3fb6d0d0281cdcf3e37d41b", $routeHash);
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
  let thru_dateInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __thru_dateHasUnresolved = hasUnsetValues`SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results`;
  let __thru_dateText = `SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results`;
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
  let wins_seed_scatterInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __wins_seed_scatterHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
 --   wins as wins,
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
  let __wins_seed_scatterText = `SELECT
    winning_team as team,
 --   wins as wins,
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
      if (!__wins_seed_scatterHasUnresolved)
        wins_seed_scatterInitialStates.initialData = profile(__db.query, __wins_seed_scatterText, { query_name: "wins_seed_scatter" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      wins_seed_scatterInitialStates.initialError = e;
    }
  }
  let wins_seed_scatter;
  const __wins_seed_scatterFactory = Query.createReactive(
    {
      callback: (v) => {
        wins_seed_scatter = v;
      },
      execFn: queryFunc
    },
    {
      id: "wins_seed_scatter",
      initialData: wins_seed_scatterInitialStates.initialData,
      initialError: wins_seed_scatterInitialStates.initialError
    }
  );
  __wins_seed_scatterFactory(__wins_seed_scatterText, {
    noResolve: __wins_seed_scatterHasUnresolved
  });
  globalThis[Symbol.for("wins_seed_scatter")] = {
    get value() {
      return wins_seed_scatter;
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
  let tournament_seedingInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __tournament_seedingHasUnresolved = hasUnsetValues`WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`;
  let __tournament_seedingText = `WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`;
  {
    try {
      if (!__tournament_seedingHasUnresolved)
        tournament_seedingInitialStates.initialData = profile(__db.query, __tournament_seedingText, { query_name: "tournament_seeding" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      tournament_seedingInitialStates.initialError = e;
    }
  }
  let tournament_seeding;
  const __tournament_seedingFactory = Query.createReactive(
    {
      callback: (v) => {
        tournament_seeding = v;
      },
      execFn: queryFunc
    },
    {
      id: "tournament_seeding",
      initialData: tournament_seedingInitialStates.initialData,
      initialError: tournament_seedingInitialStates.initialError
    }
  );
  __tournament_seedingFactory(__tournament_seedingText, {
    noResolve: __tournament_seedingHasUnresolved
  });
  globalThis[Symbol.for("tournament_seeding")] = {
    get value() {
      return tournament_seeding;
    }
  };
  let reg_seasonInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __reg_seasonHasUnresolved = hasUnsetValues`select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`;
  let __reg_seasonText = `select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`;
  {
    try {
      if (!__reg_seasonHasUnresolved)
        reg_seasonInitialStates.initialData = profile(__db.query, __reg_seasonText, { query_name: "reg_season" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      reg_seasonInitialStates.initialError = e;
    }
  }
  let reg_season;
  const __reg_seasonFactory = Query.createReactive(
    {
      callback: (v) => {
        reg_season = v;
      },
      execFn: queryFunc
    },
    {
      id: "reg_season",
      initialData: reg_seasonInitialStates.initialData,
      initialError: reg_seasonInitialStates.initialError
    }
  );
  __reg_seasonFactory(__reg_seasonText, { noResolve: __reg_seasonHasUnresolved });
  globalThis[Symbol.for("reg_season")] = {
    get value() {
      return reg_season;
    }
  };
  let standingsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __standingsHasUnresolved = hasUnsetValues`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`;
  let __standingsText = `SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`;
  {
    try {
      if (!__standingsHasUnresolved)
        standingsInitialStates.initialData = profile(__db.query, __standingsText, { query_name: "standings" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      standingsInitialStates.initialError = e;
    }
  }
  let standings;
  const __standingsFactory = Query.createReactive(
    {
      callback: (v) => {
        standings = v;
      },
      execFn: queryFunc
    },
    {
      id: "standings",
      initialData: standingsInitialStates.initialData,
      initialError: standingsInitialStates.initialError
    }
  );
  __standingsFactory(__standingsText, { noResolve: __standingsHasUnresolved });
  globalThis[Symbol.for("standings")] = {
    get value() {
      return standings;
    }
  };
  let summary_by_teamInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __summary_by_teamHasUnresolved = hasUnsetValues`select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`;
  let __summary_by_teamText = `select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`;
  {
    try {
      if (!__summary_by_teamHasUnresolved)
        summary_by_teamInitialStates.initialData = profile(__db.query, __summary_by_teamText, { query_name: "summary_by_team" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      summary_by_teamInitialStates.initialError = e;
    }
  }
  let summary_by_team;
  const __summary_by_teamFactory = Query.createReactive(
    {
      callback: (v) => {
        summary_by_team = v;
      },
      execFn: queryFunc
    },
    {
      id: "summary_by_team",
      initialData: summary_by_teamInitialStates.initialData,
      initialError: summary_by_teamInitialStates.initialError
    }
  );
  __summary_by_teamFactory(__summary_by_teamText, {
    noResolve: __summary_by_teamHasUnresolved
  });
  globalThis[Symbol.for("summary_by_team")] = {
    get value() {
      return summary_by_team;
    }
  };
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
  let aaaInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __aaaHasUnresolved = hasUnsetValues`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  let __aaaText = `select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  {
    try {
      if (!__aaaHasUnresolved)
        aaaInitialStates.initialData = profile(__db.query, __aaaText, { query_name: "aaa" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      aaaInitialStates.initialError = e;
    }
  }
  let aaa;
  const __aaaFactory = Query.createReactive(
    {
      callback: (v) => {
        aaa = v;
      },
      execFn: queryFunc
    },
    {
      id: "aaa",
      initialData: aaaInitialStates.initialData,
      initialError: aaaInitialStates.initialError
    }
  );
  __aaaFactory(__aaaText, { noResolve: __aaaHasUnresolved });
  globalThis[Symbol.for("aaa")] = {
    get value() {
      return aaa;
    }
  };
  let pieTestData1InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __pieTestData1HasUnresolved = hasUnsetValues`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  let __pieTestData1Text = `select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  {
    try {
      if (!__pieTestData1HasUnresolved)
        pieTestData1InitialStates.initialData = profile(__db.query, __pieTestData1Text, { query_name: "pieTestData1" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      pieTestData1InitialStates.initialError = e;
    }
  }
  let pieTestData1;
  const __pieTestData1Factory = Query.createReactive(
    {
      callback: (v) => {
        pieTestData1 = v;
      },
      execFn: queryFunc
    },
    {
      id: "pieTestData1",
      initialData: pieTestData1InitialStates.initialData,
      initialError: pieTestData1InitialStates.initialError
    }
  );
  __pieTestData1Factory(__pieTestData1Text, { noResolve: __pieTestData1HasUnresolved });
  globalThis[Symbol.for("pieTestData1")] = {
    get value() {
      return pieTestData1;
    }
  };
  let pieTestData2InitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __pieTestData2HasUnresolved = hasUnsetValues`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  let __pieTestData2Text = `select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  {
    try {
      if (!__pieTestData2HasUnresolved)
        pieTestData2InitialStates.initialData = profile(__db.query, __pieTestData2Text, { query_name: "pieTestData2" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      pieTestData2InitialStates.initialError = e;
    }
  }
  let pieTestData2;
  const __pieTestData2Factory = Query.createReactive(
    {
      callback: (v) => {
        pieTestData2 = v;
      },
      execFn: queryFunc
    },
    {
      id: "pieTestData2",
      initialData: pieTestData2InitialStates.initialData,
      initialError: pieTestData2InitialStates.initialError
    }
  );
  __pieTestData2Factory(__pieTestData2Text, { noResolve: __pieTestData2HasUnresolved });
  globalThis[Symbol.for("pieTestData2")] = {
    get value() {
      return pieTestData2;
    }
  };
  let teamsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __teamsHasUnresolved = hasUnsetValues`select * from src_nba_teams
order by team`;
  let __teamsText = `select * from src_nba_teams
order by team`;
  {
    try {
      if (!__teamsHasUnresolved)
        teamsInitialStates.initialData = profile(__db.query, __teamsText, { query_name: "teams" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      teamsInitialStates.initialError = e;
    }
  }
  let teams;
  const __teamsFactory = Query.createReactive(
    {
      callback: (v) => {
        teams = v;
      },
      execFn: queryFunc
    },
    {
      id: "teams",
      initialData: teamsInitialStates.initialData,
      initialError: teamsInitialStates.initialError
    }
  );
  __teamsFactory(__teamsText, { noResolve: __teamsHasUnresolved });
  globalThis[Symbol.for("teams")] = {
    get value() {
      return teams;
    }
  };
  let filtered_future_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __filtered_future_gamesHasUnresolved = hasUnsetValues`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${inputs.team_dd.value}' OR visitor like '${inputs.team_dd.value}'`;
  let __filtered_future_gamesText = `select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${inputs.team_dd.value}' OR visitor like '${inputs.team_dd.value}'`;
  {
    try {
      if (!__filtered_future_gamesHasUnresolved)
        filtered_future_gamesInitialStates.initialData = profile(__db.query, __filtered_future_gamesText, { query_name: "filtered_future_games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      filtered_future_gamesInitialStates.initialError = e;
    }
  }
  let filtered_future_games;
  const __filtered_future_gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        filtered_future_games = v;
      },
      execFn: queryFunc
    },
    {
      id: "filtered_future_games",
      initialData: filtered_future_gamesInitialStates.initialData,
      initialError: filtered_future_gamesInitialStates.initialError
    }
  );
  __filtered_future_gamesFactory(__filtered_future_gamesText, {
    noResolve: __filtered_future_gamesHasUnresolved
  });
  globalThis[Symbol.for("filtered_future_games")] = {
    get value() {
      return filtered_future_games;
    }
  };
  {
    onDestroy(inputs_store.subscribe((inputs2) => {
      __aaaFactory(`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs2.conference}' group by conf order by _count desc`, {
        noResolve: hasUnsetValues`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs2.conference}' group by conf order by _count desc`
      });
      __pieTestData1Factory(`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs2.conference}' group by name order by value desc`, {
        noResolve: hasUnsetValues`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs2.conference}' group by name order by value desc`
      });
      __pieTestData2Factory(`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs2.conference}' group by name, tournament_group order by value desc`, {
        noResolve: hasUnsetValues`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs2.conference}' group by name, tournament_group order by value desc`
      });
      __filtered_future_gamesFactory(
        `select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${inputs2.team_dd.value}' OR visitor like '${inputs2.team_dd.value}'`,
        {
          noResolve: hasUnsetValues`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${inputs2.team_dd.value}' OR visitor like '${inputs2.team_dd.value}'`
        }
      );
    }));
  }
  setTimeout(
    () => {
      console.log("Echarts ", Echarts);
    },
    2e3
  );
  var contextMenu = new window.ContextMenu({
    menuItems: [
      {
        label: "Select",
        onClick: () => {
          console.log("event params >>> ", event.params);
          console.log("params >>> ", arguments);
          console.log(" chart ", ECharts);
          var closestChart = document.elementsFromPoint(event.screenX, event.screenY);
          console.log("closestChart ", closestChart);
          for (let i in closestChart) {
            const e = closestChart[i];
            if (e === "CANVAS" && closestChart[i].target.classList.contains("chart-container")) {
              console.log("select clicked >> for ", e);
              break;
            }
          }
        }
      },
      {
        label: "DrillDown",
        onClick: () => {
          console.log("params >>> ", arguments);
          var closestChart = document.elementsFromPoint(event.screenX, event.screenY);
          console.log("closestChart ", closestChart);
          for (let i in closestChart) {
            const e = closestChart[i];
            if (e === "CANVAS" && closestChart[i].target.classList.contains("chart-container")) {
              console.log("Drilldown clicked >> for ", e);
              console.log("Paste");
              break;
            }
          }
        }
      }
    ]
  });
  if ($$props.data === void 0 && $$bindings.data && props !== void 0)
    $$bindings.data(props);
  ({ data = {}, customFormattingSettings, __db } = props);
  {
    pageHasQueries.set(Object.keys(data).length > 0);
  }
  $page.params;
  __thru_dateHasUnresolved = hasUnsetValues`SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results`;
  __thru_dateText = `SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results`;
  {
    __thru_dateFactory(__thru_dateText, { noResolve: __thru_dateHasUnresolved });
  }
  __wins_seed_scatterHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
 --   wins as wins,
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
  __wins_seed_scatterText = `SELECT
    winning_team as team,
 --   wins as wins,
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
    __wins_seed_scatterFactory(__wins_seed_scatterText, {
      noResolve: __wins_seed_scatterHasUnresolved
    });
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
  __tournament_seedingHasUnresolved = hasUnsetValues`WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`;
  __tournament_seedingText = `WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`;
  {
    __tournament_seedingFactory(__tournament_seedingText, {
      noResolve: __tournament_seedingHasUnresolved
    });
  }
  __reg_seasonHasUnresolved = hasUnsetValues`select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`;
  __reg_seasonText = `select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`;
  {
    __reg_seasonFactory(__reg_seasonText, { noResolve: __reg_seasonHasUnresolved });
  }
  __standingsHasUnresolved = hasUnsetValues`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`;
  __standingsText = `SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`;
  {
    __standingsFactory(__standingsText, { noResolve: __standingsHasUnresolved });
  }
  __summary_by_teamHasUnresolved = hasUnsetValues`select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`;
  __summary_by_teamText = `select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`;
  {
    __summary_by_teamFactory(__summary_by_teamText, {
      noResolve: __summary_by_teamHasUnresolved
    });
  }
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
  __aaaHasUnresolved = hasUnsetValues`select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  __aaaText = `select  conf, count(conf) as _count from src_nba_teams where conf like '${inputs.conference}' group by conf order by _count desc`;
  {
    __aaaFactory(__aaaText, { noResolve: __aaaHasUnresolved });
  }
  __pieTestData1HasUnresolved = hasUnsetValues`select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  __pieTestData1Text = `select  count(conf) as value, conf as name from src_nba_teams where conf like '${inputs.conference}' group by name order by value desc`;
  {
    __pieTestData1Factory(__pieTestData1Text, { noResolve: __pieTestData1HasUnresolved });
  }
  __pieTestData2HasUnresolved = hasUnsetValues`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  __pieTestData2Text = `select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${inputs.conference}' group by name, tournament_group order by value desc`;
  {
    __pieTestData2Factory(__pieTestData2Text, { noResolve: __pieTestData2HasUnresolved });
  }
  __teamsHasUnresolved = hasUnsetValues`select * from src_nba_teams
order by team`;
  __teamsText = `select * from src_nba_teams
order by team`;
  {
    __teamsFactory(__teamsText, { noResolve: __teamsHasUnresolved });
  }
  __filtered_future_gamesHasUnresolved = hasUnsetValues`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${inputs.team_dd.value}' OR visitor like '${inputs.team_dd.value}'`;
  __filtered_future_gamesText = `select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${inputs.team_dd.value}' OR visitor like '${inputs.team_dd.value}'`;
  {
    __filtered_future_gamesFactory(__filtered_future_gamesText, {
      noResolve: __filtered_future_gamesHasUnresolved
    });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${thru_date ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "thru_date",
      queryResult: thru_date
    },
    {},
    {}
  )}` : ``} ${wins_seed_scatter ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "wins_seed_scatter",
      queryResult: wins_seed_scatter
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
  )}` : ``} ${tournament_seeding ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "tournament_seeding",
      queryResult: tournament_seeding
    },
    {},
    {}
  )}` : ``} ${reg_season ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "reg_season",
      queryResult: reg_season
    },
    {},
    {}
  )}` : ``} ${standings ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "standings",
      queryResult: standings
    },
    {},
    {}
  )}` : ``} ${summary_by_team ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "summary_by_team",
      queryResult: summary_by_team
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
  )}` : ``} <h1 class="markdown" id="aaaaaaaaaaa" data-svelte-h="svelte-1jaee9h"><a href="#aaaaaaaaaaa">AAAAAAAAAAA</a></h1> <p class="markdown" data-svelte-h="svelte-18tr17t">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> ${aaa ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "aaa", queryResult: aaa }, {}, {})}` : ``} ${validate_component(ButtonGroup, "ButtonGroup").$$render(
    $$result,
    {
      data: aaa,
      name: "conference",
      value: "conf"
    },
    {},
    {
      default: () => {
        return `${validate_component(ButtonGroupItem, "ButtonGroupItem").$$render(
          $$result,
          {
            valueLabel: "All",
            value: "%",
            default: true
          },
          {},
          {}
        )}`;
      }
    }
  )} ${inputs.conference != "null" ? `${validate_component(DataTable_1, "DataTable").$$render($$result, { data: aaa, link: "team_link", rows: "30" }, {}, {
    default: () => {
      return `${validate_component(Column, "Column").$$render($$result, { id: "conf" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "_count" }, {}, {})}`;
    }
  })}` : `${validate_component(DataTable_1, "DataTable").$$render($$result, { data: aaa, link: "team_link", rows: "30" }, {}, {
    default: () => {
      return ` ${validate_component(Column, "Column").$$render($$result, { id: "conf" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "_count" }, {}, {})}`;
    }
  })}`} ${pieTestData1 ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "pieTestData1",
      queryResult: pieTestData1
    },
    {},
    {}
  )}` : ``} ${pieTestData2 ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "pieTestData2",
      queryResult: pieTestData2
    },
    {},
    {}
  )}` : ``} <span style="display:flex"><div style="width: 40vw; left: 10vw;">${validate_component(ECharts, "ECharts").$$render(
    $$result,
    {
      config: {
        tooltip: { formatter: "{b}: {c} ({d}%)" },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [...pieTestData1],
            itemStyle: {
              emphasis: {
                click(params2) {
                  alert("Clicked on category: " + params2.name + ", value: " + params2.value);
                }
              }
            }
          }
        ],
        contextmenu: function(params2) {
          console.log(params2);
          console.log(event);
          contextMenu.mount();
        }()
      }
    },
    {},
    {}
  )}</div> <div style="width: 40vw; left: 50vw;">${validate_component(ECharts, "ECharts").$$render(
    $$result,
    {
      config: {
        tooltip: { formatter: "{b}: {c} ({d}%)" },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [...pieTestData2]
          }
        ],
        contextmenu: function(params2) {
          console.log(params2);
          console.log(event);
          contextMenu.mount();
        }(),
        tooltip: {
          trigger: "item",
          formatter(params2) {
            return params2.name + ": " + params2.value + '<br/><a href="report_details.html?category=' + params2.name + '">Details</a>';
          }
        }
      }
    },
    {},
    {}
  )}</div></span> ${teams ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "teams", queryResult: teams }, {}, {})}` : ``} ${filtered_future_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "filtered_future_games",
      queryResult: filtered_future_games
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="nba-monte-carlo-simulator" data-svelte-h="svelte-h7f9m5"><a href="#nba-monte-carlo-simulator">NBA Monte Carlo Simulator</a></h1> ${validate_component(Alert, "Alert").$$render($$result, { status: "info" }, {}, {
    default: () => {
      return `This data was last updated as of ${validate_component(Value_1, "Value").$$render($$result, { data: thru_date, column: "end_date" }, {}, {})}.`;
    }
  })} <h2 class="markdown" id="upcoming-games" data-svelte-h="svelte-v49hcr"><a href="#upcoming-games"><a href="/nba/predictions" class="markdown">Upcoming Games</a></a></h2> ${filtered_future_games.length > 0 ? `${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: teams,
      name: "team_dd",
      value: "team",
      title: "Select a Team"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownOption, "DropdownOption").$$render($$result, { valueLabel: "All Teams", value: "%" }, {}, {})}`;
      }
    }
  )} ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: filtered_future_games,
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
  )}` : `<p class="markdown" data-svelte-h="svelte-x6gz91"><em class="markdown">The regular season is over. Check back next year!</em></p>`} <h2 class="markdown" id="team-standings" data-svelte-h="svelte-1odep2k"><a href="#team-standings"><a href="/nba/teams" class="markdown">Team Standings</a></a></h2> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: summary_by_team,
      link: "team_link",
      rows: "5",
      search: "true"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: " ",
            contentType: "image",
            height: "25px"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "elo_rating" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "avg_wins" }, {}, {})} ${validate_component(Column, "Column").$$render(
          $$result,
          {
            id: "elo_vs_vegas_num1",
            contentType: "delta"
          },
          {},
          {}
        )} ${validate_component(Column, "Column").$$render($$result, { id: "make_playoffs_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "win_finals_pct1" }, {}, {})}`;
      }
    }
  )} <h2 class="markdown" id="conference-summaries" data-svelte-h="svelte-w0f3pu"><a href="#conference-summaries">Conference Summaries</a></h2> <h3 class="markdown" id="end-of-season-seeding" data-svelte-h="svelte-1hxadpo"><a href="#end-of-season-seeding">End of Season Seeding</a></h3> ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render($$result, { label: "East" }, {}, {
        default: () => {
          return `${validate_component(AreaChart, "AreaChart").$$render(
            $$result,
            {
              data: seed_details.filter((d) => d.conf === "East"),
              x: "seed",
              y: "occurances_pct1",
              series: "team",
              xAxisTitle: "seed",
              title: "Eastern Conference",
              yMax: "1"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { label: "West" }, {}, {
        default: () => {
          return `${validate_component(AreaChart, "AreaChart").$$render(
            $$result,
            {
              data: seed_details.filter((d) => d.conf === "West"),
              x: "seed",
              y: "occurances_pct1",
              series: "team",
              xAxisTitle: "seed",
              title: "Western Conference",
              yMax: "1"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} <h3 class="markdown" id="end-of-season-playoff-odds" data-svelte-h="svelte-75tz32"><a href="#end-of-season-playoff-odds">End of Season Playoff Odds</a></h3> ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render($$result, { label: "East" }, {}, {
        default: () => {
          return `${validate_component(BarChart, "BarChart").$$render(
            $$result,
            {
              data: wins_seed_scatter.filter((d) => d.conf === "East"),
              x: "team",
              y: "odds_pct1",
              series: "season_result",
              xAxisTitle: "seed",
              title: "Eastern Conference",
              swapXY: "true",
              sort: "sort_key"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { label: "West" }, {}, {
        default: () => {
          return `${validate_component(BarChart, "BarChart").$$render(
            $$result,
            {
              data: wins_seed_scatter.filter((d) => d.conf === "West"),
              x: "team",
              y: "odds_pct1",
              series: "season_result",
              xAxisTitle: "seed",
              title: "Western Conference",
              swapXY: "true",
              sort: "sort_key"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
