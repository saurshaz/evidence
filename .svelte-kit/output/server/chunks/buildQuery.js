import { s as setContext } from "./ssr.js";
import { Query, sql } from "@uwdata/mosaic-sql";
import { resolveMaybePromise, Query as Query$1 } from "@evidence-dev/sdk/usql";
import { query } from "@evidence-dev/universal-sql/client-duckdb";
import { w as writable, d as derived } from "./index2.js";
const CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY = "customFormattingSettings";
const INPUTS_CONTEXT_KEY = "_inputs";
const QUERY_CONTEXT_KEY = "___usql_query";
let queryFunction = query;
const setQueryFunction = (queryFn) => {
  setContext(QUERY_CONTEXT_KEY, queryFn);
  queryFunction = queryFn;
};
const buildReactiveInputQuery = (queryProps, id, initialData) => {
  const internal = writable(buildInputQuery(queryProps, id, initialData));
  let currentQuery;
  return {
    results: derived(internal, (v) => v),
    update: async (queryProps2) => {
      const { hasQuery, query: query2 } = buildInputQuery(queryProps2, id);
      if (!hasQuery) {
        internal.set({ hasQuery: false });
      } else {
        resolveMaybePromise(() => {
          if (query2.hash !== currentQuery?.hash) {
            currentQuery = query2;
            internal.set({ hasQuery, query: query2 });
          }
        }, query2.fetch());
      }
    }
  };
};
const buildInputQuery = ({ value, label, select, data, where, order }, id, initialData) => {
  if (!data || !(value || select))
    return { hasQuery: false };
  let parentHasNoResolve = false;
  const q = new Query().distinct();
  if (value)
    q.select({ value: sql`${value}` });
  if (label) {
    q.select({ label: sql`${label}` });
  } else {
    q.select({ label: sql`${value}` });
  }
  if (select)
    q.select(select);
  if (typeof data === "string") {
    if (data.trim().match(/^[\w]+$/)) {
      q.from(data.trim());
    } else {
      q.from(sql(data.trim()));
    }
  } else if (Query$1.isQuery(data)) {
    q.from(sql`(${data.text})`);
    parentHasNoResolve = data.opts.noResolve ?? false;
  } else {
    return { hasQuery: false };
  }
  if (where) {
    q.where(where);
  }
  if (order) {
    q.orderby(sql`${order}`);
    q.select({
      ordinal: sql`row_number() over (ORDER BY ${order})`
    });
  }
  const newQuery = buildQuery(q.toString(), id, initialData, { noResolve: parentHasNoResolve });
  newQuery.fetch();
  return {
    hasQuery: true,
    query: newQuery
  };
};
const buildQuery = (queryString, id, initialData, opts) => {
  return Query$1.create(queryString, queryFunction, id, { ...opts, initialData });
};
export {
  CUSTOM_FORMATTING_SETTINGS_CONTEXT_KEY as C,
  INPUTS_CONTEXT_KEY as I,
  buildReactiveInputQuery as a,
  buildQuery as b,
  setQueryFunction as s
};
