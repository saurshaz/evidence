import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import "../../../chunks/stores.js";
import "@evidence-dev/sdk/usql";
import "ssf";
import "../../../chunks/inferColumnTypes.js";
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${`<p data-svelte-h="svelte-591hpj">Settings are only available in development mode.</p>`}`;
});
export {
  Page as default
};
