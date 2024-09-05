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
import { T as Tabs, a as Tab } from "../../../../chunks/Tab.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    { "future_games": "nba/future_games.sql" },
    { "past_games": "nba/past_games.sql" },
    {
      "tournament_standings": "nba/tournament_standings.sql"
    },
    {
      "tournament_results": "nba/tournament_results.sql"
    },
    {
      "most_recent_games": "nba/most_recent_games.sql"
    },
    {
      "tournament_seeding": "nba/tournament_seeding.sql"
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
  set_store_value(routeHash, $routeHash = "e85f385b2658d1ae7ad8fe2987a1023b", $routeHash);
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
  let past_gamesInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __past_gamesHasUnresolved = hasUnsetValues`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;
  let __past_gamesText = `SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;
  {
    try {
      if (!__past_gamesHasUnresolved)
        past_gamesInitialStates.initialData = profile(__db.query, __past_gamesText, { query_name: "past_games" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      past_gamesInitialStates.initialError = e;
    }
  }
  let past_games;
  const __past_gamesFactory = Query.createReactive(
    {
      callback: (v) => {
        past_games = v;
      },
      execFn: queryFunc
    },
    {
      id: "past_games",
      initialData: past_gamesInitialStates.initialData,
      initialError: past_gamesInitialStates.initialError
    }
  );
  __past_gamesFactory(__past_gamesText, { noResolve: __past_gamesHasUnresolved });
  globalThis[Symbol.for("past_games")] = {
    get value() {
      return past_games;
    }
  };
  let tournament_standingsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __tournament_standingsHasUnresolved = hasUnsetValues`WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`;
  let __tournament_standingsText = `WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`;
  {
    try {
      if (!__tournament_standingsHasUnresolved)
        tournament_standingsInitialStates.initialData = profile(__db.query, __tournament_standingsText, { query_name: "tournament_standings" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      tournament_standingsInitialStates.initialError = e;
    }
  }
  let tournament_standings;
  const __tournament_standingsFactory = Query.createReactive(
    {
      callback: (v) => {
        tournament_standings = v;
      },
      execFn: queryFunc
    },
    {
      id: "tournament_standings",
      initialData: tournament_standingsInitialStates.initialData,
      initialError: tournament_standingsInitialStates.initialError
    }
  );
  __tournament_standingsFactory(__tournament_standingsText, {
    noResolve: __tournament_standingsHasUnresolved
  });
  globalThis[Symbol.for("tournament_standings")] = {
    get value() {
      return tournament_standings;
    }
  };
  let tournament_resultsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __tournament_resultsHasUnresolved = hasUnsetValues`SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`;
  let __tournament_resultsText = `SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`;
  {
    try {
      if (!__tournament_resultsHasUnresolved)
        tournament_resultsInitialStates.initialData = profile(__db.query, __tournament_resultsText, { query_name: "tournament_results" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      tournament_resultsInitialStates.initialError = e;
    }
  }
  let tournament_results;
  const __tournament_resultsFactory = Query.createReactive(
    {
      callback: (v) => {
        tournament_results = v;
      },
      execFn: queryFunc
    },
    {
      id: "tournament_results",
      initialData: tournament_resultsInitialStates.initialData,
      initialError: tournament_resultsInitialStates.initialError
    }
  );
  __tournament_resultsFactory(__tournament_resultsText, {
    noResolve: __tournament_resultsHasUnresolved
  });
  globalThis[Symbol.for("tournament_results")] = {
    get value() {
      return tournament_results;
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
  let wildcard_standingsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __wildcard_standingsHasUnresolved = hasUnsetValues`SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`;
  let __wildcard_standingsText = `SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`;
  {
    try {
      if (!__wildcard_standingsHasUnresolved)
        wildcard_standingsInitialStates.initialData = profile(__db.query, __wildcard_standingsText, { query_name: "wildcard_standings" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      wildcard_standingsInitialStates.initialError = e;
    }
  }
  let wildcard_standings;
  const __wildcard_standingsFactory = Query.createReactive(
    {
      callback: (v) => {
        wildcard_standings = v;
      },
      execFn: queryFunc
    },
    {
      id: "wildcard_standings",
      initialData: wildcard_standingsInitialStates.initialData,
      initialError: wildcard_standingsInitialStates.initialError
    }
  );
  __wildcard_standingsFactory(__wildcard_standingsText, {
    noResolve: __wildcard_standingsHasUnresolved
  });
  globalThis[Symbol.for("wildcard_standings")] = {
    get value() {
      return wildcard_standings;
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
  __past_gamesHasUnresolved = hasUnsetValues`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;
  __past_gamesText = `SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;
  {
    __past_gamesFactory(__past_gamesText, { noResolve: __past_gamesHasUnresolved });
  }
  __tournament_standingsHasUnresolved = hasUnsetValues`WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`;
  __tournament_standingsText = `WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`;
  {
    __tournament_standingsFactory(__tournament_standingsText, {
      noResolve: __tournament_standingsHasUnresolved
    });
  }
  __tournament_resultsHasUnresolved = hasUnsetValues`SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`;
  __tournament_resultsText = `SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`;
  {
    __tournament_resultsFactory(__tournament_resultsText, {
      noResolve: __tournament_resultsHasUnresolved
    });
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
  __wildcard_standingsHasUnresolved = hasUnsetValues`SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`;
  __wildcard_standingsText = `SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`;
  {
    __wildcard_standingsFactory(__wildcard_standingsText, {
      noResolve: __wildcard_standingsHasUnresolved
    });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${future_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "future_games",
      queryResult: future_games
    },
    {},
    {}
  )}` : ``} ${past_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "past_games",
      queryResult: past_games
    },
    {},
    {}
  )}` : ``} ${tournament_standings ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "tournament_standings",
      queryResult: tournament_standings
    },
    {},
    {}
  )}` : ``} ${tournament_results ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "tournament_results",
      queryResult: tournament_results
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
  )}` : ``} ${tournament_seeding ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "tournament_seeding",
      queryResult: tournament_seeding
    },
    {},
    {}
  )}` : ``} ${wildcard_standings ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "wildcard_standings",
      queryResult: wildcard_standings
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="nba-in-season-tournament" data-svelte-h="svelte-eie8wp"><a href="#nba-in-season-tournament">NBA In-season Tournament</a></h1> <p class="markdown" data-svelte-h="svelte-hyczke">Congrats to the Los Angeles Lakers for winning the 2023-24 NBA In-Season Tournament!</p> <p class="markdown" data-svelte-h="svelte-hd8dsc"><em class="markdown">New for the 2023-2024 season, the NBA has introduced an In-Season Tournament. The tournament consists of Group Play followed by single elimination knock out rounds. You can learn about it <a href="https://www.nba.com/news/in-season-tournament-101" rel="nofollow" class="markdown">here</a>.</em></p> <h2 class="markdown" id="standings" data-svelte-h="svelte-1gcdvcr"><a href="#standings">Standings</a></h2> ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render($$result, { label: "East" }, {}, {
        default: () => {
          return `<h3 class="markdown" id="group-a-standings" data-svelte-h="svelte-guvvb1"><a href="#group-a-standings">Group A Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_standings.filter((d) => d.group === "east_a"),
              link: "team_link",
              rows: "5"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )} <h3 class="markdown" id="group-b-standings" data-svelte-h="svelte-1scsybi"><a href="#group-b-standings">Group B Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_standings.filter((d) => d.group === "east_b"),
              link: "team_link",
              rows: "5"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )} <h3 class="markdown" id="group-c-standings" data-svelte-h="svelte-30in7b"><a href="#group-c-standings">Group C Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_standings.filter((d) => d.group === "east_c"),
              link: "team_link",
              rows: "5"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { label: "West" }, {}, {
        default: () => {
          return `<h3 class="markdown" id="group-a-standings-1" data-svelte-h="svelte-1vjypnl"><a href="#group-a-standings-1">Group A Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_standings.filter((d) => d.group === "west_a"),
              link: "team_link",
              rows: "5"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )} <h3 class="markdown" id="group-b-standings-1" data-svelte-h="svelte-1n0es8a"><a href="#group-b-standings-1">Group B Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_standings.filter((d) => d.group === "west_b"),
              link: "team_link",
              rows: "5"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )} <h3 class="markdown" id="group-c-standings-1" data-svelte-h="svelte-egfzs7"><a href="#group-c-standings-1">Group C Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_standings.filter((d) => d.group === "west_c"),
              link: "team_link",
              rows: "5"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })} <h2 class="markdown" id="wildcard" data-svelte-h="svelte-10fb0ry"><a href="#wildcard">Wildcard</a></h2> ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render($$result, { label: "East" }, {}, {
        default: () => {
          return `<h3 class="markdown" id="wildcard-standings" data-svelte-h="svelte-1yfopil"><a href="#wildcard-standings">Wildcard Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: wildcard_standings.filter((d) => d.conf === "East"),
              link: "team_link",
              rows: "15"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )} <h3 class="markdown" id="predicted-seeding---knockout-round" data-svelte-h="svelte-ja3he8"><a href="#predicted-seeding---knockout-round">Predicted Seeding - Knockout Round</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_seeding.filter((d) => d.conf === "East"),
              rows: "15"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "1_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "2_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "3_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "4_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "total_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { label: "West" }, {}, {
        default: () => {
          return `<h3 class="markdown" id="wildcard-standings-1" data-svelte-h="svelte-hwio89"><a href="#wildcard-standings-1">Wildcard Standings</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: wildcard_standings.filter((d) => d.conf === "West"),
              link: "team_link",
              rows: "15"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "record" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "pt_diff", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "proj_record", align: "right" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_group_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "won_wildcard_pct1" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "made_tournament_pct1" }, {}, {})}`;
              }
            }
          )} <h3 class="markdown" id="predicted-seeding---knockout-round-1" data-svelte-h="svelte-a47xyu"><a href="#predicted-seeding---knockout-round-1">Predicted Seeding - Knockout Round</a></h3> ${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: tournament_seeding.filter((d) => d.conf === "West"),
              rows: "15"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column, "Column").$$render($$result, { id: "team" }, {}, {})} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "1_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "2_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "3_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "4_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )} ${validate_component(Column, "Column").$$render(
                  $$result,
                  {
                    id: "total_pct1",
                    contentType: "colorscale",
                    colorMax: "1"
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })} <h2 class="markdown" id="recent-games" data-svelte-h="svelte-1u8yw34"><a href="#recent-games">Recent Games</a></h2> ${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: most_recent_games.filter((d) => d.type === "tournament" || d.type === "knockout"),
      rows: "5"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "date" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "visiting_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: " " }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "home_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "winning_team" }, {}, {})} ${validate_component(Column, "Column").$$render($$result, { id: "score" }, {}, {})}`;
      }
    }
  )}`;
});
export {
  Page as default
};
