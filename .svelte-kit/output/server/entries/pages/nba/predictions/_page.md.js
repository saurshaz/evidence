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
import { B as BigValue } from "../../../../chunks/BigValue.js";
import "chroma-js";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import "lodash.debounce";
import { p as profile } from "../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../chunks/QueryViewer.js";
import { A as Accordion, a as AccordionItem } from "../../../../chunks/AccordionItem.js";
import { D as Dropdown, a as DropdownOption } from "../../../../chunks/Dropdown.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    { "future_games": "nba/future_games.sql" },
    { "past_games": "nba/past_games.sql" },
    {
      "past_games_summary": "nba/past_games_summary.sql"
    },
    {
      "past_games_summary_by_team": "nba/past_games_summary_by_team.sql"
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
  set_store_value(routeHash, $routeHash = "12ad46b1d25fbd902dd1ffc827a8b66e", $routeHash);
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
  let past_games_summaryInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __past_games_summaryHasUnresolved = hasUnsetValues`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;
  let __past_games_summaryText = `SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;
  {
    try {
      if (!__past_games_summaryHasUnresolved)
        past_games_summaryInitialStates.initialData = profile(__db.query, __past_games_summaryText, { query_name: "past_games_summary" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      past_games_summaryInitialStates.initialError = e;
    }
  }
  let past_games_summary;
  const __past_games_summaryFactory = Query.createReactive(
    {
      callback: (v) => {
        past_games_summary = v;
      },
      execFn: queryFunc
    },
    {
      id: "past_games_summary",
      initialData: past_games_summaryInitialStates.initialData,
      initialError: past_games_summaryInitialStates.initialError
    }
  );
  __past_games_summaryFactory(__past_games_summaryText, {
    noResolve: __past_games_summaryHasUnresolved
  });
  globalThis[Symbol.for("past_games_summary")] = {
    get value() {
      return past_games_summary;
    }
  };
  let past_games_summary_by_teamInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __past_games_summary_by_teamHasUnresolved = hasUnsetValues`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;
  let __past_games_summary_by_teamText = `WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;
  {
    try {
      if (!__past_games_summary_by_teamHasUnresolved)
        past_games_summary_by_teamInitialStates.initialData = profile(__db.query, __past_games_summary_by_teamText, { query_name: "past_games_summary_by_team" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      past_games_summary_by_teamInitialStates.initialError = e;
    }
  }
  let past_games_summary_by_team;
  const __past_games_summary_by_teamFactory = Query.createReactive(
    {
      callback: (v) => {
        past_games_summary_by_team = v;
      },
      execFn: queryFunc
    },
    {
      id: "past_games_summary_by_team",
      initialData: past_games_summary_by_teamInitialStates.initialData,
      initialError: past_games_summary_by_teamInitialStates.initialError
    }
  );
  __past_games_summary_by_teamFactory(__past_games_summary_by_teamText, {
    noResolve: __past_games_summary_by_teamHasUnresolved
  });
  globalThis[Symbol.for("past_games_summary_by_team")] = {
    get value() {
      return past_games_summary_by_team;
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
  let __filtered_future_gamesHasUnresolved = hasUnsetValues`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${inputs.team_dropdown.value}' OR visitor like '${inputs.team_dropdown.value}'`;
  let __filtered_future_gamesText = `select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${inputs.team_dropdown.value}' OR visitor like '${inputs.team_dropdown.value}'`;
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
      __filtered_future_gamesFactory(
        `select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${inputs2.team_dropdown.value}' OR visitor like '${inputs2.team_dropdown.value}'`,
        {
          noResolve: hasUnsetValues`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${inputs2.team_dropdown.value}' OR visitor like '${inputs2.team_dropdown.value}'`
        }
      );
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
  __past_games_summaryHasUnresolved = hasUnsetValues`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;
  __past_games_summaryText = `SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;
  {
    __past_games_summaryFactory(__past_games_summaryText, {
      noResolve: __past_games_summaryHasUnresolved
    });
  }
  __past_games_summary_by_teamHasUnresolved = hasUnsetValues`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;
  __past_games_summary_by_teamText = `WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;
  {
    __past_games_summary_by_teamFactory(__past_games_summary_by_teamText, {
      noResolve: __past_games_summary_by_teamHasUnresolved
    });
  }
  __teamsHasUnresolved = hasUnsetValues`select * from src_nba_teams
order by team`;
  __teamsText = `select * from src_nba_teams
order by team`;
  {
    __teamsFactory(__teamsText, { noResolve: __teamsHasUnresolved });
  }
  __filtered_future_gamesHasUnresolved = hasUnsetValues`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${inputs.team_dropdown.value}' OR visitor like '${inputs.team_dropdown.value}'`;
  __filtered_future_gamesText = `select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${inputs.team_dropdown.value}' OR visitor like '${inputs.team_dropdown.value}'`;
  {
    __filtered_future_gamesFactory(__filtered_future_gamesText, {
      noResolve: __filtered_future_gamesHasUnresolved
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
  )}` : ``} ${past_games_summary ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "past_games_summary",
      queryResult: past_games_summary
    },
    {},
    {}
  )}` : ``} ${past_games_summary_by_team ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "past_games_summary_by_team",
      queryResult: past_games_summary_by_team
    },
    {},
    {}
  )}` : ``} ${teams ? `${validate_component(QueryViewer, "QueryViewer").$$render($$result, { queryID: "teams", queryResult: teams }, {}, {})}` : ``} ${filtered_future_games ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "filtered_future_games",
      queryResult: filtered_future_games
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="predictions" data-svelte-h="svelte-1pi22ig"><a href="#predictions">Predictions</a></h1> <h2 class="markdown" id="past-performance" data-svelte-h="svelte-r55kci"><a href="#past-performance">Past Performance</a></h2> ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: past_games_summary,
      value: "total_games_played"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: past_games_summary,
      value: "correct_predictions"
    },
    {},
    {}
  )} ${validate_component(BigValue, "BigValue").$$render(
    $$result,
    {
      data: past_games_summary,
      value: "accuracy_pct1"
    },
    {},
    {}
  )} ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { title: "Detailed Results by Team" }, {}, {
        default: () => {
          return `${validate_component(DataTable_1, "DataTable").$$render(
            $$result,
            {
              data: past_games_summary_by_team,
              title: "Prediction Accuracy by Team",
              rows: "30"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} ${filtered_future_games.length > 0 ? `<h2 class="markdown" id="future-predictions" data-svelte-h="svelte-8rxrbb"><a href="#future-predictions">Future Predictions</a></h2> <p class="markdown" data-svelte-h="svelte-1mjds8c"><em class="markdown">Historically, NBA teams win 62% of their games at home, which explains why teams with lower elo ratings can be predicted to win.</em></p> ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: teams,
      name: "team_dropdown",
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
      rows: "15",
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
  )}` : ``}`;
});
export {
  Page as default
};
