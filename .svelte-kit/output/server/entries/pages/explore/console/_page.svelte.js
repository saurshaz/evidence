import { c as create_ssr_component, d as add_attribute, v as validate_component, h as escape } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import "../../../../chunks/stores.js";
import "@evidence-dev/sdk/usql";
import "ssf";
import "../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import "@uwdata/mosaic-sql";
import "@evidence-dev/universal-sql/client-duckdb";
import { b as noop, s as subscribe } from "../../../../chunks/utils.js";
import { D as DataTable_1 } from "../../../../chunks/DataTable.js";
import { E as EyeOff, b as Eye, P as PlayerPlay } from "../../../../chunks/index4.js";
import { b as buildQuery } from "../../../../chunks/buildQuery.js";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import "tua-body-scroll-lock";
import "debounce";
import "downloadjs";
import "export-to-csv";
import "chroma-js";
import "lodash.debounce";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
const css = {
  code: "section.svelte-1bw0fbe .cm-editor{min-height:8rem;border-radius:0.25rem\n}",
  map: `{"version":3,"file":"SqlConsole.svelte","sources":["SqlConsole.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const evidenceInclude = true;\\n<\/script>\\n\\n<script>\\n\\t/** @typedef {import('./sqlConsole.action.js').SqlConsoleArgs} SqlConsoleArgs */\\n\\timport { sqlConsole, buildAutoCompletes } from './sqlConsole.action.js';\\n\\timport { slide } from 'svelte/transition';\\n\\timport { onMount } from 'svelte';\\n\\n\\timport { Button } from '../../atoms/button';\\n\\timport DataTable from '../../unsorted/viz/table/DataTable.svelte';\\n\\n\\timport { Eye, EyeOff, PlayerPlay } from '@evidence-dev/component-utilities/icons';\\n\\timport { buildQuery } from '@evidence-dev/component-utilities/buildQuery';\\n\\n\\t/** @type {boolean} */\\n\\texport let hideErrors = false;\\n\\t/** @type {string} */\\n\\texport let initialQuery = \\"select 'ABC' as category, 123 as num, 26400000 as sales_usd\\";\\n\\t/** @type {boolean} */\\n\\texport let showResults = true;\\n\\t/** @type {boolean} */\\n\\texport let disabled = false;\\n\\n\\t/** @type {string} */\\n\\tlet currentQuery = initialQuery;\\n\\n\\t/** @type {string} */\\n\\tlet editorQuery = currentQuery;\\n\\n\\t/*\\n\\t - Try to fix autocomplete\\n\\t\\t - non-namespaced?\\n\\t\\t- keyword updates\\n\\t */\\n\\n\\t/** @type {import(\\"@evidence-dev/sdk/usql\\").Query} */\\n\\texport let data = buildQuery(currentQuery);\\n\\n\\t$: if (currentQuery) {\\n\\t\\tdata = buildQuery(currentQuery);\\n\\t\\tdata.fetch();\\n\\t}\\n\\n\\t/** @type {HTMLElement | undefined} */\\n\\tlet editor;\\n\\t/** @type {SqlConsoleArgs | undefined} */\\n\\tlet consoleArgs;\\n\\n\\t$: if (consoleArgs) consoleArgs.disabled = disabled;\\n\\tonMount(\\n\\t\\t/** @returns {Promise<never>} */\\n\\t\\tasync () => {\\n\\t\\t\\tif (data) data.fetch(); // we actually don't really care about this\\n\\n\\t\\t\\tconsoleArgs = {\\n\\t\\t\\t\\tinitialState: initialQuery,\\n\\t\\t\\t\\tdisabled: disabled,\\n\\t\\t\\t\\tschema: await buildAutoCompletes(),\\n\\t\\t\\t\\tonChange: (v) => {\\n\\t\\t\\t\\t\\tif (!v.docChanged) return;\\n\\t\\t\\t\\t\\tif (editorQuery.trim() === v.state.doc.toString().trim()) return;\\n\\t\\t\\t\\t\\teditorQuery = v.state.doc.toString();\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\tonSubmit: () => {\\n\\t\\t\\t\\t\\tcurrentQuery = editorQuery.trim();\\n\\t\\t\\t\\t\\tif (currentQuery.endsWith(';'))\\n\\t\\t\\t\\t\\t\\tcurrentQuery = currentQuery.substring(0, currentQuery.length - 1);\\n\\t\\t\\t\\t\\tshowResults = true;\\n\\t\\t\\t\\t\\treturn true;\\n\\t\\t\\t\\t}\\n\\t\\t\\t};\\n\\t\\t}\\n\\t);\\n<\/script>\\n\\n<h1 class=\\"markdown\\">SQL Console</h1>\\n<section\\n\\tclass=\\"px-0 py-2 bg-white flex flex-col gap-2 min-h-[8rem]\\"\\n\\ton:click={() => editor?.focus()}\\n\\ton:keydown={(e) => e.key === 'Enter' && editor?.focus()}\\n\\trole=\\"none\\"\\n>\\n\\t<div\\n\\t\\tbind:this={editor}\\n\\t\\tclass=\\"w-full relative rounded border border-gray-300 min-h-[8rem] cursor-text\\"\\n\\t\\tuse:sqlConsole={consoleArgs}\\n\\t>\\n\\t\\t{#if !disabled}\\n\\t\\t\\t<div class=\\"absolute bottom-2 right-2 z-10 flex gap-2\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tsize=\\"sm\\"\\n\\t\\t\\t\\t\\toutline\\n\\t\\t\\t\\t\\ticon={showResults ? EyeOff : Eye}\\n\\t\\t\\t\\t\\ton:click={() => (showResults = !showResults)}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{#if showResults}\\n\\t\\t\\t\\t\\t\\tHide Results\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\tShow Results\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</Button>\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tsize=\\"sm\\"\\n\\t\\t\\t\\t\\tvariant=\\"success\\"\\n\\t\\t\\t\\t\\toutline\\n\\t\\t\\t\\t\\ticon={PlayerPlay}\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tcurrentQuery = editorQuery;\\n\\t\\t\\t\\t\\t\\tshowResults = true;\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>Submit\\n\\t\\t\\t\\t</Button>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t{#if $data.error && !hideErrors && Boolean(currentQuery)}\\n\\t\\t<pre class=\\"text-red-500 text-xs font-mono\\">{$data.error}</pre>\\n\\t{/if}\\n\\n\\t<!-- Result View -->\\n\\t{#if showResults}\\n\\t\\t<div transition:slide|local>\\n\\t\\t\\t<DataTable data={$data} />\\n\\t\\t</div>\\n\\t{/if}\\n</section>\\n\\n<style>\\n\\tsection :global(.cm-editor) {\\n    min-height: 8rem;\\n    border-radius: 0.25rem\\n}</style>\\n"],"names":[],"mappings":"AAmIC,sBAAO,CAAS,UAAY,CACzB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,OAAO;AAC1B"}`
};
const SqlConsole = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data = noop, $$subscribe_data = () => ($$unsubscribe_data(), $$unsubscribe_data = subscribe(data, ($$value) => $data = $$value), data);
  let { hideErrors = false } = $$props;
  let { initialQuery = "select 'ABC' as category, 123 as num, 26400000 as sales_usd" } = $$props;
  let { showResults = true } = $$props;
  let { disabled = false } = $$props;
  let currentQuery = initialQuery;
  let { data = buildQuery(currentQuery) } = $$props;
  $$subscribe_data();
  let editor;
  if ($$props.hideErrors === void 0 && $$bindings.hideErrors && hideErrors !== void 0)
    $$bindings.hideErrors(hideErrors);
  if ($$props.initialQuery === void 0 && $$bindings.initialQuery && initialQuery !== void 0)
    $$bindings.initialQuery(initialQuery);
  if ($$props.showResults === void 0 && $$bindings.showResults && showResults !== void 0)
    $$bindings.showResults(showResults);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    if (currentQuery) {
      $$subscribe_data(data = buildQuery(currentQuery));
      data.fetch();
    }
  }
  $$unsubscribe_data();
  return `<h1 class="markdown" data-svelte-h="svelte-7ylf69">SQL Console</h1> <section class="px-0 py-2 bg-white flex flex-col gap-2 min-h-[8rem] svelte-1bw0fbe" role="none"><div class="w-full relative rounded border border-gray-300 min-h-[8rem] cursor-text"${add_attribute("this", editor, 0)}>${!disabled ? `<div class="absolute bottom-2 right-2 z-10 flex gap-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "sm",
      outline: true,
      icon: showResults ? EyeOff : Eye
    },
    {},
    {
      default: () => {
        return `${showResults ? `Hide Results` : `Show Results`}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "sm",
      variant: "success",
      outline: true,
      icon: PlayerPlay
    },
    {},
    {
      default: () => {
        return `Submit`;
      }
    }
  )}</div>` : ``}</div> ${$data.error && !hideErrors && Boolean(currentQuery) ? `<pre class="text-red-500 text-xs font-mono">${escape($data.error)}</pre>` : ``}  ${showResults ? `<div>${validate_component(DataTable_1, "DataTable").$$render($$result, { data: $data }, {}, {})}</div>` : ``} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SqlConsole, "SqlConsole").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
