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
import "export-to-csv";
import "chroma-js";
import "@evidence-dev/universal-sql/client-duckdb";
import "lodash.debounce";
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
import "debounce";
import "downloadjs";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
import { p as profile } from "../../../chunks/profile.js";
import { Q as QueryViewer } from "../../../chunks/QueryViewer.js";
import { A as Alert } from "../../../chunks/Alert.js";
import { T as Tabs, a as Tab } from "../../../chunks/Tab.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const metadata = {
  "queries": [
    { "thru_date": "nfl/thru_date.sql" },
    { "seed_details": "nfl/seed_details.sql" },
    { "wins_seed_bar": "nfl/wins_seed_bar.sql" }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "f19bde7bbd2dfedf3eac1aed34f056bd", $routeHash);
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
  let __thru_dateHasUnresolved = hasUnsetValues`SELECT '2023-01-07' as end_date`;
  let __thru_dateText = `SELECT '2023-01-07' as end_date`;
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
  let seed_detailsInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  let __seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
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
  let wins_seed_barInitialStates = {
    initialData: void 0,
    initialError: void 0
  };
  let __wins_seed_barHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=1) * 10000 + COUNT(*) FILTER (WHERE season_rank <=7) AS sort_key
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY sort_key desc`;
  let __wins_seed_barText = `SELECT
    winning_team as team,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=1) * 10000 + COUNT(*) FILTER (WHERE season_rank <=7) AS sort_key
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY sort_key desc`;
  {
    try {
      if (!__wins_seed_barHasUnresolved)
        wins_seed_barInitialStates.initialData = profile(__db.query, __wins_seed_barText, { query_name: "wins_seed_bar" });
    } catch (e) {
      console.error(e);
      if (define_import_meta_env_default.VITE_BUILD_STRICT)
        throw e;
      wins_seed_barInitialStates.initialError = e;
    }
  }
  let wins_seed_bar;
  const __wins_seed_barFactory = Query.createReactive(
    {
      callback: (v) => {
        wins_seed_bar = v;
      },
      execFn: queryFunc
    },
    {
      id: "wins_seed_bar",
      initialData: wins_seed_barInitialStates.initialData,
      initialError: wins_seed_barInitialStates.initialError
    }
  );
  __wins_seed_barFactory(__wins_seed_barText, { noResolve: __wins_seed_barHasUnresolved });
  globalThis[Symbol.for("wins_seed_bar")] = {
    get value() {
      return wins_seed_bar;
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
  __thru_dateHasUnresolved = hasUnsetValues`SELECT '2023-01-07' as end_date`;
  __thru_dateText = `SELECT '2023-01-07' as end_date`;
  {
    __thru_dateFactory(__thru_dateText, { noResolve: __thru_dateHasUnresolved });
  }
  __seed_detailsHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  __seed_detailsText = `SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;
  {
    __seed_detailsFactory(__seed_detailsText, { noResolve: __seed_detailsHasUnresolved });
  }
  __wins_seed_barHasUnresolved = hasUnsetValues`SELECT
    winning_team as team,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=1) * 10000 + COUNT(*) FILTER (WHERE season_rank <=7) AS sort_key
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY sort_key desc`;
  __wins_seed_barText = `SELECT
    winning_team as team,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=1) * 10000 + COUNT(*) FILTER (WHERE season_rank <=7) AS sort_key
FROM src_nfl_reg_season_end
GROUP BY ALL
ORDER BY sort_key desc`;
  {
    __wins_seed_barFactory(__wins_seed_barText, { noResolve: __wins_seed_barHasUnresolved });
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
  )}` : ``} ${seed_details ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "seed_details",
      queryResult: seed_details
    },
    {},
    {}
  )}` : ``} ${wins_seed_bar ? `${validate_component(QueryViewer, "QueryViewer").$$render(
    $$result,
    {
      queryID: "wins_seed_bar",
      queryResult: wins_seed_bar
    },
    {},
    {}
  )}` : ``} <h1 class="markdown" id="nfl-monte-carlo-simulator" data-svelte-h="svelte-qa8i1c"><a href="#nfl-monte-carlo-simulator">NFL Monte Carlo Simulator</a></h1> <h2 class="markdown" id="conference-summaries" data-svelte-h="svelte-w0f3pu"><a href="#conference-summaries">Conference Summaries</a></h2> ${validate_component(Alert, "Alert").$$render($$result, { status: "info" }, {}, {
    default: () => {
      return `This data was last updated as of ${validate_component(Value_1, "Value").$$render($$result, { data: thru_date, column: "end_date" }, {}, {})}.`;
    }
  })} <h3 class="markdown" id="end-of-season-seeding" data-svelte-h="svelte-1hxadpo"><a href="#end-of-season-seeding">End of Season Seeding</a></h3> ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Tab, "Tab").$$render($$result, { label: "AFC" }, {}, {
        default: () => {
          return `${validate_component(AreaChart, "AreaChart").$$render(
            $$result,
            {
              data: seed_details.filter((d) => d.conf === "AFC"),
              x: "seed",
              y: "occurances_pct1",
              series: "team",
              xAxisTitle: "seed",
              title: "American Conference",
              yMax: "1"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { label: "NFC" }, {}, {
        default: () => {
          return `${validate_component(AreaChart, "AreaChart").$$render(
            $$result,
            {
              data: seed_details.filter((d) => d.conf === "NFC"),
              x: "seed",
              y: "occurances_pct1",
              series: "team",
              xAxisTitle: "seed",
              title: "National Conference",
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
      return `${validate_component(Tab, "Tab").$$render($$result, { label: "AFC" }, {}, {
        default: () => {
          return `${validate_component(BarChart, "BarChart").$$render(
            $$result,
            {
              data: wins_seed_bar.filter((d) => d.conf === "AFC"),
              x: "team",
              y: "odds_pct1",
              series: "season_result",
              xAxisTitle: "seed",
              title: "American Conference",
              swapXY: "true",
              sort: "sort_key"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { label: "NFC" }, {}, {
        default: () => {
          return `${validate_component(BarChart, "BarChart").$$render(
            $$result,
            {
              data: wins_seed_bar.filter((d) => d.conf === "NFC"),
              x: "team",
              y: "odds_pct1",
              series: "season_result",
              xAxisTitle: "seed",
              title: "National Conference",
              swapXY: "true",
              sort: "sort_key"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} <center data-svelte-h="svelte-1q80qzu"><p class="markdown">🏈 <a href="/nfl/teams" class="markdown">Teams</a> 🏈</p></center>`;
});
export {
  Page as default
};
