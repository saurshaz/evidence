import { d as dev, b as browser } from "../../chunks/index3.js";
import { query, setParquetURLs, initDB, updateSearchPath } from "@evidence-dev/universal-sql/client-duckdb";
import { p as profile } from "../../chunks/profile.js";
import { t as toasts } from "../../chunks/stores.js";
import { setTrackProxy } from "@evidence-dev/sdk/usql";
import md5 from "blueimp-md5";
import { b as building } from "../../chunks/environment.js";
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const ssr = !dev;
const prerender = define_import_meta_env_default.VITE_EVIDENCE_SPA !== "true";
const trailingSlash = "always";
const loadDB = async () => {
  let renderedFiles = {};
  {
    const { readFile } = await import("fs/promises");
    ({ renderedFiles } = JSON.parse(
      await readFile("./static/data/manifest.json", "utf-8").catch(() => "{}")
    ));
  }
  await profile(initDB);
  if (Object.keys(renderedFiles ?? {}).length === 0) {
    console.warn(`Unable to load manifest, do you need to generate sources?`.trim());
    toasts.add(
      {
        id: "MissingManifest",
        status: "warning",
        title: "Missing Manifest",
        message: "Without a manifest file, no data is available"
      },
      1e4
    );
  } else {
    await profile(setParquetURLs, renderedFiles);
    await profile(updateSearchPath, Object.keys(renderedFiles));
  }
};
const database_initialization = profile(loadDB);
const system_routes = ["/settings", "/explore"];
const dummy_pages = /* @__PURE__ */ new Map();
const load = async ({ fetch: fetch2, route, params, url }) => {
  const [{ customFormattingSettings }, pagesManifest, evidencemeta] = await Promise.all([
    fetch2("/api/customFormattingSettings.json/GET.json").then((x) => x.json()),
    fetch2("/api/pagesManifest.json").then((x) => x.json()),
    fetch2(`/api/${route.id}/evidencemeta.json`).then((x) => x.json()).catch(() => ({ queries: [] }))
  ]);
  const routeHash = md5(route.id);
  const paramsHash = md5(
    Object.entries(params).sort().map(([key, value]) => `${key}${value}`).join("")
  );
  const isUserPage = route.id && system_routes.every((system_route) => !route.id.startsWith(system_route));
  let data = {};
  const { inputs = {} } = dummy_pages.get(url.pathname) ?? {};
  const is_dummy_page = dummy_pages.has(url.pathname);
  if (building && !browser && !is_dummy_page) {
    dummy_pages.set(url.pathname, { inputs });
    await fetch2(url);
    dummy_pages.delete(url.pathname);
  }
  await database_initialization;
  return (
    /** @type {App.PageData} */
    {
      __db: {
        query(sql, { query_name, callback = (x) => x } = {}) {
          return callback(
            query(sql, {
              route_hash: routeHash,
              additional_hash: paramsHash,
              query_name,
              prerendering: building
            })
          );
        },
        async load() {
          return database_initialization;
        },
        async updateParquetURLs(manifest) {
          const { renderedFiles } = JSON.parse(manifest);
          await profile(setParquetURLs, renderedFiles);
        }
      },
      inputs: setTrackProxy({
        label: "",
        value: "(SELECT NULL WHERE 0 /* An Input has not been set */)"
      }),
      data,
      customFormattingSettings,
      isUserPage,
      evidencemeta,
      pagesManifest
    }
  );
};
export {
  load,
  prerender,
  ssr,
  trailingSlash
};
