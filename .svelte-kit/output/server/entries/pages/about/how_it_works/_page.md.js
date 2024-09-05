import { s as subscribe, a as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, s as setContext, o as onDestroy, h as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores2.js";
import { p as pageHasQueries, r as routeHash } from "../../../../chunks/stores.js";
import { w as writable } from "../../../../chunks/index2.js";
import "ssf";
import { s as setQueryFunction, I as INPUTS_CONTEXT_KEY, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../../chunks/buildQuery.js";
import "../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import { p as profile } from "../../../../chunks/profile.js";
import "debounce";
import { Query } from "@evidence-dev/sdk/usql";
const metadata = { "title": "How it works" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "220fb06c859dbedd032db4d6b22ec520", $routeHash);
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
  if ($$props.data === void 0 && $$bindings.data && props !== void 0)
    $$bindings.data(props);
  ({ data = {}, customFormattingSettings, __db } = props);
  {
    pageHasQueries.set(Object.keys(data).length > 0);
  }
  $page.params;
  $$unsubscribe_page();
  $$unsubscribe_routeHash();
  return `  ${typeof metadata !== "undefined" && metadata.title && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && metadata.title ? `${$$result.title = `<title>${escape(metadata.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   <h2 class="markdown" id="env-config" data-svelte-h="svelte-1uehcwb"><a href="#env-config">Env. config</a></h2> <ul class="markdown" data-svelte-h="svelte-1qnv107"><li class="markdown">devcontainer (python + node)</li></ul> <h2 class="markdown" id="extract" data-svelte-h="svelte-5fdop3"><a href="#extract">Extract</a></h2> <ul class="markdown" data-svelte-h="svelte-6yj3eb"><li class="markdown">tbd - extraction is via &quot;copy + paste&quot; today - although looking to implement dlthub &quot;soon&quot;</li></ul> <h2 class="markdown" id="load" data-svelte-h="svelte-1gf3294"><a href="#load">Load</a></h2> <ul class="markdown" data-svelte-h="svelte-v0fdfg"><li class="markdown">using seeds in dbt - but related to extract above, have the same considerations</li></ul> <h2 class="markdown" id="transform" data-svelte-h="svelte-7rupv0"><a href="#transform">Transform</a></h2> <ul class="markdown" data-svelte-h="svelte-ghj6lb"><li class="markdown">using dbt-duckdb + external tables</li> <li class="markdown">data can be consumed post transformation from either duckdb file or from the output parquet files</li> <li class="markdown">in all other ways, it is a normal dbt-core project</li> <li class="markdown">invoked with <code class="markdown">make run</code></li></ul> <h2 class="markdown" id="analyze" data-svelte-h="svelte-1oqr7n8"><a href="#analyze">Analyze</a></h2> <ul class="markdown" data-svelte-h="svelte-18zy5y9"><li class="markdown">using evidence.dev</li> <li class="markdown">can handle some final transforms as well, queries are staged and pages are built out in markdown</li> <li class="markdown">because evidence doesn&#39;t support pathing, have to copy files into the evidence directory</li> <li class="markdown">invoked with <code class="markdown">make dev</code></li></ul> <h2 class="markdown" id="other" data-svelte-h="svelte-1dmy74i"><a href="#other">Other</a></h2> <ul class="markdown" data-svelte-h="svelte-1gvvwip"><li class="markdown">take a look at the <a href="https://github.com/matsonj/nba-monte-carlo/blob/master/Makefile" rel="nofollow" class="markdown">makefile</a> and the <a href="https://github.com/matsonj/nba-monte-carlo/blob/master/.github/workflows/deploy_on_netlify.yml" rel="nofollow" class="markdown">deploy github action</a> to see how the pieces fit together in prod.</li></ul>`;
});
export {
  Page as default
};
