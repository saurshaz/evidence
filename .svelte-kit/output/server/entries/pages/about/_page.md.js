import { s as subscribe, a as set_store_value } from "../../../chunks/utils.js";
import { c as create_ssr_component, s as setContext, o as onDestroy, h as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores2.js";
import { p as pageHasQueries, r as routeHash } from "../../../chunks/stores.js";
import { w as writable } from "../../../chunks/index2.js";
import "ssf";
import { s as setQueryFunction, I as INPUTS_CONTEXT_KEY, C as CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY } from "../../../chunks/buildQuery.js";
import "../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import { p as profile } from "../../../chunks/profile.js";
import "debounce";
import { Query } from "@evidence-dev/sdk/usql";
const metadata = { "title": "about" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $routeHash, $$unsubscribe_routeHash;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routeHash = subscribe(routeHash, (value) => $routeHash = value);
  let { data: props } = $$props;
  let { data = {}, customFormattingSettings, __db, inputs } = props;
  set_store_value(routeHash, $routeHash = "77102f70526b1c2db0eced54632dc618", $routeHash);
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
  return `  ${typeof metadata !== "undefined" && metadata.title && metadata.hide_title !== true ? `<h1 class="title">${escape(metadata.title)}</h1>` : ``} ${$$result.head += `<!-- HEAD_svelte-1j2izld_START -->${typeof metadata !== "undefined" && metadata.title ? `${$$result.title = `<title>${escape(metadata.title)}</title>`, ""} <meta property="og:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}> <meta name="twitter:title"${add_attribute("content", metadata.og?.title ?? metadata.title, 0)}>` : ` ${$$result.title = `<title>Evidence</title>`, ""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof metadata === "object" ? `${metadata.description || metadata.og?.description ? `<meta name="description"${add_attribute("content", metadata.description ?? metadata.og?.description, 0)}> <meta property="og:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}> <meta name="twitter:description"${add_attribute("content", metadata.og?.description ?? metadata.description, 0)}>` : ``} ${metadata.og?.image ? `<meta property="og:image"${add_attribute("content", metadata.og?.image, 0)}> <meta name="twitter:image"${add_attribute("content", metadata.og?.image, 0)}>` : ``}` : ``}<!-- HEAD_svelte-1j2izld_END -->`, ""}   <p class="markdown" data-svelte-h="svelte-1cf8npc">This project is built by <a href="https://twitter.com/matsonj" rel="nofollow" class="markdown">Jacob Matson</a>. The objective of the project is to see what can be done with a mono-repo approach the modern data stack, hence &quot;MDS in a box.&quot; In the time since the initial write up post published on the <a href="https://duckdb.org/2022/10/12/modern-data-stack-in-a-box.html" rel="nofollow" class="markdown">duckDB blog</a>, a few bits have been added:</p> <ul class="markdown" data-svelte-h="svelte-ram09l"><li class="markdown"><a href="https://containers.dev/" rel="nofollow" class="markdown">devcontainer support</a> for an improved development experience.</li> <li class="markdown">docker support for ease of deployment (although ironically not used to deploy the project into netlify).</li> <li class="markdown">replaced superset with <a href="https://evidence.dev" rel="nofollow" class="markdown">evidence</a> for fully managed viz in code.</li> <li class="markdown">auto build in github actions</li></ul>`;
});
export {
  Page as default
};
