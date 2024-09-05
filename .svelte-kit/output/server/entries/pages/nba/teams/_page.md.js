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
import { B as ButtonGroup, a as ButtonGroupItem } from "../../../../chunks/ButtonGroup.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    { "reg_season": "nba/reg_season.sql" },
    { "standings": "nba/standings.sql" },
    {
      "summary_by_team": "nba/summary_by_team.sql"
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
  set_store_value(routeHash, $routeHash = "35191ca311a2aea7c4e423ef2fe335ca", $routeHash);
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
  let filtered_summary_by_teamInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __filtered_summary_by_teamHasUnresolved = hasUnsetValues`select * 
    from (select
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
ORDER BY avg_wins DESC)
    where conf like '${inputs.conference}'`;
  let __filtered_summary_by_teamText = `select * 
    from (select
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
ORDER BY avg_wins DESC)
    where conf like '${inputs.conference}'`;
  {
    try {
      if (!__filtered_summary_by_teamHasUnresolved)
        filtered_summary_by_teamInitialStates.initialData = profile(__db.query, __filtered_summary_by_teamText, { query_name: "filtered_summary_by_team" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      filtered_summary_by_teamInitialStates.initialError = e;
    }
  }
  let filtered_summary_by_team;
  const __filtered_summary_by_teamFactory = Query.createReactive(
    {
      callback: (v) => {
        filtered_summary_by_team = v;
      },
      execFn: queryFunc
    },
    {
      id: "filtered_summary_by_team",
      initialData: filtered_summary_by_teamInitialStates.initialData,
      initialError: filtered_summary_by_teamInitialStates.initialError
    }
  );
  __filtered_summary_by_teamFactory(__filtered_summary_by_teamText, {
    noResolve: __filtered_summary_by_teamHasUnresolved
  });
  globalThis[Symbol.for("filtered_summary_by_team")] = {
    get value() {
      return filtered_summary_by_team;
    }
  };
  {
    onDestroy(inputs_store.subscribe((inputs2) => {
      __filtered_summary_by_teamFactory(
        `select * 
    from (select
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
ORDER BY avg_wins DESC)
    where conf like '${inputs2.conference}'`,
        {
          noResolve: hasUnsetValues`select * 
    from (select
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
ORDER BY avg_wins DESC)
    where conf like '${inputs2.conference}'`
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
  __filtered_summary_by_teamHasUnresolved = hasUnsetValues`select * 
    from (select
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
ORDER BY avg_wins DESC)
    where conf like '${inputs.conference}'`;
  __filtered_summary_by_teamText = `select * 
    from (select
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
ORDER BY avg_wins DESC)
    where conf like '${inputs.conference}'`;
  {
    __filtered_summary_by_teamFactory(__filtered_summary_by_teamText, {
      noResolve: __filtered_summary_by_teamHasUnresolved
    });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${reg_season ? `${validate_component(QueryViewer, "QueryViewer").$$render(
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
  )}` : ``} <h1 class="markdown" id="team-browser" data-svelte-h="svelte-6botrr"><a href="#team-browser">Team Browser</a></h1> <h2 class="markdown" id="select-a-conference" data-svelte-h="svelte-khbmdt"><a href="#select-a-conference">Select a conference</a></h2> ${filtered_summary_by_team ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "filtered_summary_by_team",
      queryResult: filtered_summary_by_team
    },
    {},
    {}
  )}` : ``} ${validate_component(ButtonGroup, "ButtonGroup").$$render(
    $$result,
    {
      data: summary_by_team,
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
  )} ${inputs.conference != "null" ? `${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: filtered_summary_by_team,
      link: "team_link",
      rows: "30"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "seed" }, {}, {})} ${validate_component(Column, "Column").$$render(
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
  )}` : `${validate_component(DataTable_1, "DataTable").$$render(
    $$result,
    {
      data: summary_by_team,
      link: "team_link",
      rows: "30"
    },
    {},
    {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, { id: "seed" }, {}, {})} ${validate_component(Column, "Column").$$render(
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
  )}`}`;
});
export {
  Page as default
};
