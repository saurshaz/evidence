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
import "export-to-csv";
import "chroma-js";
import "@evidence-dev/universal-sql/client-duckdb";
import "lodash.debounce";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import { p as page } from "../../../../chunks/stores2.js";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "echarts-stat";
import { L as LineChart } from "../../../../chunks/LineChart.js";
import "@evidence-dev/sdk/utils";
import { S as ScatterPlot } from "../../../../chunks/ScatterPlot.js";
import { p as profile } from "../../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../../chunks/QueryViewer.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [{ "seed_details": "nba/seed_details.sql" }]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "c51f50a45742e17b34a9b458dad98ee5", $routeHash);
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
  let seed_details_cdfInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __seed_details_cdfHasUnresolved = hasUnsetValues`WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`;
  let __seed_details_cdfText = `WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`;
  {
    try {
      if (!__seed_details_cdfHasUnresolved)
        seed_details_cdfInitialStates.initialData = profile(__db.query, __seed_details_cdfText, { query_name: "seed_details_cdf" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      seed_details_cdfInitialStates.initialError = e;
    }
  }
  let seed_details_cdf;
  const __seed_details_cdfFactory = Query.createReactive(
    {
      callback: (v) => {
        seed_details_cdf = v;
      },
      execFn: queryFunc
    },
    {
      id: "seed_details_cdf",
      initialData: seed_details_cdfInitialStates.initialData,
      initialError: seed_details_cdfInitialStates.initialError
    }
  );
  __seed_details_cdfFactory(__seed_details_cdfText, {
    noResolve: __seed_details_cdfHasUnresolved
  });
  globalThis[Symbol.for("seed_details_cdf")] = {
    get value() {
      return seed_details_cdf;
    }
  };
  let seed_details_cdf_scatterInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __seed_details_cdf_scatterHasUnresolved = hasUnsetValues`SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`;
  let __seed_details_cdf_scatterText = `SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`;
  {
    try {
      if (!__seed_details_cdf_scatterHasUnresolved)
        seed_details_cdf_scatterInitialStates.initialData = profile(__db.query, __seed_details_cdf_scatterText, { query_name: "seed_details_cdf_scatter" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      seed_details_cdf_scatterInitialStates.initialError = e;
    }
  }
  let seed_details_cdf_scatter;
  const __seed_details_cdf_scatterFactory = Query.createReactive(
    {
      callback: (v) => {
        seed_details_cdf_scatter = v;
      },
      execFn: queryFunc
    },
    {
      id: "seed_details_cdf_scatter",
      initialData: seed_details_cdf_scatterInitialStates.initialData,
      initialError: seed_details_cdf_scatterInitialStates.initialError
    }
  );
  __seed_details_cdf_scatterFactory(__seed_details_cdf_scatterText, {
    noResolve: __seed_details_cdf_scatterHasUnresolved
  });
  globalThis[Symbol.for("seed_details_cdf_scatter")] = {
    get value() {
      return seed_details_cdf_scatter;
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
  __seed_details_cdfHasUnresolved = hasUnsetValues`WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`;
  __seed_details_cdfText = `WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`;
  {
    __seed_details_cdfFactory(__seed_details_cdfText, {
      noResolve: __seed_details_cdfHasUnresolved
    });
  }
  __seed_details_cdf_scatterHasUnresolved = hasUnsetValues`SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`;
  __seed_details_cdf_scatterText = `SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`;
  {
    __seed_details_cdf_scatterFactory(__seed_details_cdf_scatterText, {
      noResolve: __seed_details_cdf_scatterHasUnresolved
    });
  }
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title ?? metadata.og?.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && (metadata.title || metadata.og?.title) ? `${$$result.title = `<title>${escape(metadata.title ?? metadata.og?.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   ${seed_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "seed_details",
      queryResult: seed_details
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="advanced-analytical-views" data-svelte-h="svelte-z10k9g"><a href="#advanced-analytical-views">Advanced Analytical views</a></h1> <p class="markdown" data-svelte-h="svelte-11wsitt">This is experimental and may break at any time</p> ${seed_details_cdf ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "seed_details_cdf",
      queryResult: seed_details_cdf
    },
    {},
    {}
  )}` : ``} ${seed_details_cdf_scatter ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "seed_details_cdf_scatter",
      queryResult: seed_details_cdf_scatter
    },
    {},
    {}
  )}` : ``} ${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: seed_details_cdf.filter((d) => d.conf === "East"),
      x: "seed",
      y: "cumulative_pct1",
      series: "team",
      title: "Eastern Conference",
      xAxisTitle: "seed",
      xTickMarks: "true",
      yMax: "1"
    },
    {},
    {}
  )} ${validate_component(LineChart, "LineChart").$$render(
    $$result,
    {
      data: seed_details_cdf.filter((d) => d.conf === "West"),
      x: "seed",
      y: "cumulative_pct1",
      series: "team",
      title: "Western Conference",
      xAxisTitle: "seed",
      xTickMarks: "true",
      yMax: "1"
    },
    {},
    {}
  )} ${seed_details_cdf_scatter.length > 0 ? `${validate_component(ScatterPlot, "ScatterPlot").$$render(
    $$result,
    {
      data: seed_details_cdf_scatter.filter((d) => d.conf === "East"),
      x: "seed",
      y: "cumulative_pct1",
      series: "team",
      title: "Eastern Conference",
      xAxisTitle: "seed",
      xTickMarks: "true",
      yMax: "1",
      yMin: "0"
    },
    {},
    {}
  )} ${validate_component(ScatterPlot, "ScatterPlot").$$render(
    $$result,
    {
      data: seed_details_cdf_scatter.filter((d) => d.conf === "West"),
      x: "seed",
      y: "cumulative_pct1",
      series: "team",
      title: "Western Conference",
      xAxisTitle: "seed",
      xTickMarks: "true",
      yMax: "1",
      yMin: "0"
    },
    {},
    {}
  )}` : ``}`;
});
export {
  Page as default
};
