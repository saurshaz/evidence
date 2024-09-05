import { c as create_ssr_component, i as each, v as validate_component, h as escape } from "../../../../chunks/ssr.js";
import { I as Icon } from "../../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import "../../../../chunks/stores.js";
import { i as is_promise, b as noop } from "../../../../chunks/utils.js";
import { c as Database, T as Table, _ as _123, d as Calendar, e as CircleHalf2, A as Abc } from "../../../../chunks/index4.js";
import "@evidence-dev/sdk/usql";
import "ssf";
import "../../../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import "@uwdata/mosaic-sql";
import "@evidence-dev/universal-sql/client-duckdb";
import "export-to-csv";
import "chroma-js";
import "lodash.debounce";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import "tua-body-scroll-lock";
import "echarts";
import "debounce";
import "downloadjs";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
const SchemaExplorer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  async function loadMetadata() {
    return {};
  }
  let selectedTable = "";
  let selectedSource = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	Loading Schema Information...
`;
    }
    return function(metadata) {
      return ` <section><div><ul class="list-none m-0 p-0 flex flex-col gap-1 mb-1">${each(Object.entries(metadata), ([source, meta]) => {
        return `<li class="font-mono m-0 text-sm text-white"><button class="${[
          "bg-gray-500 px-2 py-1 rounded font-bold flex w-full hover:bg-blue-500",
          selectedSource === source ? "bg-blue-500" : ""
        ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            src: Database,
            class: "text-white w-5 h-5 mr-1"
          },
          {},
          {}
        )} ${escape(source)} </button></li> ${selectedSource === source ? `<ul class="list-none m-0 flex flex-col gap-1">${each(Object.entries(meta), ([name, tableMeta]) => {
          return `<li class="font-mono m-0 text-sm font-bold ml-3"><button class="${[
            "bg-gray-200 px-2 py-1 rounded flex w-full hover:bg-blue-200",
            selectedTable === tableMeta ? "bg-blue-200" : ""
          ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: Table,
              class: "text-gray-700 w-5 h-5 mr-1"
            },
            {},
            {}
          )} ${escape(name)} </button></li> ${selectedTable === tableMeta ? `<ul class="list-none m-0 flex flex-col gap-1">${each(tableMeta.columns, (column) => {
            return `<li class="font-mono text-sm ml-6 rounded flex flex-row"><div class="flex px-2 py-1 rounded w-full hover:bg-blue-50">${column.data_type === "INT" || column.data_type === "BIGINT" || column.data_type === "SMALLINT" || column.data_type === "TINYINT" || column.data_type === "DOUBLE" ? `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                src: _123,
                class: "text-gray-700 w-5 h-5"
              },
              {},
              {}
            )}` : `${column.data_type === "DATE" || column.data_type === "DATETIME" || column.data_type === "TIMESTAMP" ? `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                src: Calendar,
                class: "text-gray-700 w-5 h-5"
              },
              {},
              {}
            )}` : `${column.data_type === "BOOLEAN" ? `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                src: CircleHalf2,
                class: "text-gray-700 w-5 h-5"
              },
              {},
              {}
            )}` : `${validate_component(Icon, "Icon").$$render($$result, { src: Abc, class: "text-gray-700 w-5 h-5" }, {}, {})}`}`}`} <div class="pl-2 lowercase"><b>${escape(column.column_name)}</b>  ${escape(column.data_type)} </div></div> </li>`;
          })} </ul>` : ``}`;
        })} </ul>` : ``}`;
      })}</ul></div></section> `;
    }(__value);
  }(loadMetadata())}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="markdown" data-svelte-h="svelte-15777oi">Project Schema</h1> <p class="markdown" data-svelte-h="svelte-ak948l">This page details the tables and columns that are currently loaded in your project.</p> <h2 class="markdown" data-svelte-h="svelte-9qt1ro">Sources</h2> ${validate_component(SchemaExplorer, "SchemaExplorer").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
