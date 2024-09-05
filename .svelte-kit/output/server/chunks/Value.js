import { a as checkInputs, h as getColumnSummary, i as convertColumnToDate, e as getFormatObjectFromString, s as strictBuild, d as formatValue, V as ValueError, Q as QueryLoad, b as EmptyChart, g as globals } from "./colours.js";
import { c as create_ssr_component, h as escape, v as validate_component } from "./ssr.js";
import { Query } from "@evidence-dev/sdk/usql";
import "./VennDiagram.svelte_svelte_type_style_lang.js";
const css = {
  code: ".placeholder.svelte-11norvs.svelte-11norvs{display:inline;position:relative;cursor:help;color:blue}.placeholder.svelte-11norvs .error-msg.svelte-11norvs{display:none;position:absolute;top:-5px;left:105%;max-width:400px;min-width:150px;padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:1px;color:white;font-size:0.8em;background-color:var(--grey-900);opacity:0.85;border-radius:6px;z-index:1;word-wrap:break-word}.placeholder.svelte-11norvs:hover .error-msg.svelte-11norvs{display:inline}",
  map: `{"version":3,"file":"_Value.svelte","sources":["_Value.svelte"],"sourcesContent":["<script>\\n\\timport getColumnSummary from '@evidence-dev/component-utilities/getColumnSummary';\\n\\timport {\\n\\t\\tformatValue,\\n\\t\\tgetFormatObjectFromString\\n\\t} from '@evidence-dev/component-utilities/formatting';\\n\\timport { convertColumnToDate } from '@evidence-dev/component-utilities/dateParsing';\\n\\timport checkInputs from '@evidence-dev/component-utilities/checkInputs';\\n\\timport ValueError from './ValueError.svelte';\\n\\timport { strictBuild } from '@evidence-dev/component-utilities/chartContext';\\n\\n\\t// Passing in value from dataset:\\n\\texport let data = null;\\n\\texport let row = 0;\\n\\texport let column = null;\\n\\n\\t// alias for column\\n\\texport let value = null;\\n\\t$: if (value && column) {\\n\\t\\tconsole.warn(\\n\\t\\t\\t'Both \\"value\\" and \\"column\\" were supplied as props to Value. \\"value\\" will be ignored.'\\n\\t\\t);\\n\\t}\\n\\t$: column = column ?? value;\\n\\n\\t// Placeholder text when data not supplied:\\n\\texport let placeholder = null;\\n\\n\\t// Value Formatting:\\n\\texport let fmt = undefined;\\n\\tlet format_object;\\n\\n\\tlet selected_value;\\n\\tlet error;\\n\\n\\tlet columnSummary;\\n\\t$: {\\n\\t\\ttry {\\n\\t\\t\\terror = undefined;\\n\\t\\t\\tif (!placeholder) {\\n\\t\\t\\t\\tif (data) {\\n\\t\\t\\t\\t\\tif (typeof data == 'string') {\\n\\t\\t\\t\\t\\t\\tthrow Error(\`Received: data=\${data}, expected: data={\${data}}\`);\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tif (!Array.isArray(data)) {\\n\\t\\t\\t\\t\\t\\t// Accept bare objects\\n\\t\\t\\t\\t\\t\\tdata = [data];\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tif (isNaN(row)) {\\n\\t\\t\\t\\t\\t\\tthrow Error('row must be a number (row=' + row + ')');\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\ttry {\\n\\t\\t\\t\\t\\t\\tObject.keys(data[row])[0];\\n\\t\\t\\t\\t\\t} catch (e) {\\n\\t\\t\\t\\t\\t\\tthrow Error('Row ' + row + ' does not exist in the dataset');\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tcolumn = column ?? Object.keys(data[row])[0];\\n\\n\\t\\t\\t\\t\\tcheckInputs(data, [column]);\\n\\n\\t\\t\\t\\t\\tcolumnSummary = getColumnSummary(data, 'array');\\n\\n\\t\\t\\t\\t\\tconst dateCols = columnSummary\\n\\t\\t\\t\\t\\t\\t.filter((d) => d.type === 'date' && !(data[0]?.[d.id] instanceof Date))\\n\\t\\t\\t\\t\\t\\t.map((d) => d.id);\\n\\n\\t\\t\\t\\t\\tfor (let i = 0; i < dateCols.length; i++) {\\n\\t\\t\\t\\t\\t\\tdata = convertColumnToDate(data, dateCols[i]);\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tselected_value = data[row][column];\\n\\t\\t\\t\\t\\tcolumnSummary = columnSummary.filter((d) => d.id === column);\\n\\t\\t\\t\\t\\tif (fmt) {\\n\\t\\t\\t\\t\\t\\tformat_object = getFormatObjectFromString(fmt, columnSummary[0].format?.valueType);\\n\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\tformat_object = columnSummary[0].format;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tthrow Error(\\n\\t\\t\\t\\t\\t\\t'No data provided. If you referenced a query result, check that the name is correct.'\\n\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t} catch (e) {\\n\\t\\t\\terror = e.message;\\n\\t\\t\\tconst setTextRed = '\\\\x1b[31m%s\\\\x1b[0m';\\n\\t\\t\\tconsole.error(setTextRed, \`Error in Value: \${error}\`);\\n\\t\\t\\tif (strictBuild) {\\n\\t\\t\\t\\tthrow error;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n{#if placeholder}\\n\\t<span class=\\"placeholder\\"\\n\\t\\t>[{placeholder}]<span class=\\"error-msg\\">Placeholder: no data currently referenced.</span></span\\n\\t>\\n{:else if !error}\\n\\t<span>\\n\\t\\t{formatValue(selected_value, format_object)}\\n\\t</span>\\n{:else}\\n\\t<ValueError {error} />\\n{/if}\\n\\n<style>\\n\\t.placeholder {\\n\\t\\tdisplay: inline;\\n\\t\\tposition: relative;\\n\\t\\tcursor: help;\\n\\t\\tcolor: blue;\\n\\t}\\n\\n\\t.placeholder .error-msg {\\n\\t\\tdisplay: none;\\n\\t\\tposition: absolute;\\n\\t\\ttop: -5px;\\n\\t\\tleft: 105%;\\n\\t\\tmax-width: 400px;\\n\\t\\tmin-width: 150px;\\n\\t\\tpadding-left: 5px;\\n\\t\\tpadding-right: 5px;\\n\\t\\tpadding-top: 2px;\\n\\t\\tpadding-bottom: 1px;\\n\\t\\tcolor: white;\\n\\t\\tfont-size: 0.8em;\\n\\t\\tbackground-color: var(--grey-900);\\n\\t\\topacity: 0.85;\\n\\t\\tborder-radius: 6px;\\n\\t\\tz-index: 1;\\n\\t\\tword-wrap: break-word;\\n\\t}\\n\\n\\t.placeholder:hover .error-msg {\\n\\t\\tdisplay: inline;\\n\\t}</style>\\n"],"names":[],"mappings":"AA+GC,0CAAa,CACZ,OAAO,CAAE,MAAM,CACf,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACR,CAEA,2BAAY,CAAC,yBAAW,CACvB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KAAK,CAChB,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,UACZ,CAEA,2BAAY,MAAM,CAAC,yBAAW,CAC7B,OAAO,CAAE,MACV"}`
};
const Value = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = null } = $$props;
  let { row = 0 } = $$props;
  let { column = null } = $$props;
  let { value = null } = $$props;
  let { placeholder = null } = $$props;
  let { fmt = void 0 } = $$props;
  let format_object;
  let selected_value;
  let error;
  let columnSummary;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  $$result.css.add(css);
  column = column ?? value;
  {
    {
      try {
        error = void 0;
        if (!placeholder) {
          if (data) {
            if (typeof data == "string") {
              throw Error(`Received: data=${data}, expected: data={${data}}`);
            }
            if (!Array.isArray(data)) {
              data = [data];
            }
            if (isNaN(row)) {
              throw Error("row must be a number (row=" + row + ")");
            }
            try {
              Object.keys(data[row])[0];
            } catch (e) {
              throw Error("Row " + row + " does not exist in the dataset");
            }
            column = column ?? Object.keys(data[row])[0];
            checkInputs(data, [column]);
            columnSummary = getColumnSummary(data, "array");
            const dateCols = columnSummary.filter((d) => d.type === "date" && !(data[0]?.[d.id] instanceof Date)).map((d) => d.id);
            for (let i = 0; i < dateCols.length; i++) {
              data = convertColumnToDate(data, dateCols[i]);
            }
            selected_value = data[row][column];
            columnSummary = columnSummary.filter((d) => d.id === column);
            if (fmt) {
              format_object = getFormatObjectFromString(fmt, columnSummary[0].format?.valueType);
            } else {
              format_object = columnSummary[0].format;
            }
          } else {
            throw Error("No data provided. If you referenced a query result, check that the name is correct.");
          }
        }
      } catch (e) {
        error = e.message;
        const setTextRed = "\x1B[31m%s\x1B[0m";
        console.error(setTextRed, `Error in Value: ${error}`);
        if (strictBuild) {
          throw error;
        }
      }
    }
  }
  {
    if (value && column) {
      console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.');
    }
  }
  return `${placeholder ? `<span class="placeholder svelte-11norvs">[${escape(placeholder)}]<span class="error-msg svelte-11norvs" data-svelte-h="svelte-ddarzq">Placeholder: no data currently referenced.</span></span>` : `${!error ? `<span>${escape(formatValue(selected_value, format_object))}</span>` : `${validate_component(ValueError, "ValueError").$$render($$result, { error }, {}, {})}`}`}`;
});
const { Object: Object_1 } = globals;
let chartType = "Value";
const Value_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spreadProps;
  let { data } = $$props;
  let { column } = $$props;
  let { agg } = $$props;
  const initialHash = Query.isQuery(data) ? data.hash : void 0;
  let isInitial = data?.hash === initialHash;
  let { emptySet = void 0 } = $$props;
  let { emptyMessage = void 0 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.agg === void 0 && $$bindings.agg && agg !== void 0)
    $$bindings.agg(agg);
  if ($$props.emptySet === void 0 && $$bindings.emptySet && emptySet !== void 0)
    $$bindings.emptySet(emptySet);
  if ($$props.emptyMessage === void 0 && $$bindings.emptyMessage && emptyMessage !== void 0)
    $$bindings.emptyMessage(emptyMessage);
  {
    if (agg) {
      data = data.groupBy(void 0).agg({ [agg]: { col: column, as: column } });
    }
  }
  isInitial = data?.hash === initialHash;
  spreadProps = Object.fromEntries(Object.entries($$props).filter(([, v]) => v !== void 0));
  return ` ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data }, {}, {
    skeleton: () => {
      return `<span slot="skeleton" class="text-gray-500" data-svelte-h="svelte-exu0be">Loading...</span>`;
    },
    empty: () => {
      return `<span slot="empty">${!spreadProps.placeholder ? `${validate_component(EmptyChart, "EmptyChart").$$render(
        $$result,
        {
          emptyMessage,
          emptySet,
          chartType,
          isInitial
        },
        {},
        {}
      )}` : ``}</span>`;
    },
    default: ({ loaded }) => {
      return `${validate_component(Value, "Value").$$render(
        $$result,
        Object_1.assign({}, spreadProps, {
          data: Query.isQuery(loaded) ? Array.from(loaded) : loaded
        }),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Value_1 as V
};
