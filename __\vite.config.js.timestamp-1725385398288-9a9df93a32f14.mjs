// vite.config.js
import { sveltekit } from "file:///home/dev/code/evidence-bi/completely-local-codebase/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { evidenceVitePlugin } from "file:///home/dev/code/evidence-bi/completely-local-codebase/node_modules/@evidence-dev/plugin-connector/dist/index.mjs";
import { createLogger } from "file:///home/dev/code/evidence-bi/completely-local-codebase/node_modules/vite/dist/node/index.js";
import { sourceQueryHmr } from "file:///home/dev/code/evidence-bi/completely-local-codebase/node_modules/@evidence-dev/sdk/src/build-dev/vite/plugins.js";
var logger = createLogger();
var loggerWarn = logger.warn;
var loggerOnce = logger.warnOnce;
logger.warnOnce = (m, o) => {
  if (m.match(/Sourcemap for ".+\/node_modules\/@duckdb\/duckdb-wasm\/dist\/duckdb-browser-eh\.worker\.js" points to missing source files/))
    return;
  loggerOnce(m, o);
};
logger.warn = (msg, options) => {
  if (msg.includes('Module "fs/promises" has been externalized for browser compatibility'))
    return;
  if (msg.includes("Use of eval in") && msg.includes("is strongly discouraged as it poses security risks and may cause issues with minification."))
    return;
  loggerWarn(msg, options);
};
var strictFs = process.env.NODE_ENV === "development" ? false : true;
var config = {
  plugins: [sveltekit(), evidenceVitePlugin(), sourceQueryHmr()],
  optimizeDeps: {
    include: [
      "echarts-stat",
      "echarts",
      "blueimp-md5",
      "nanoid",
      "@uwdata/mosaic-sql",
      // We need these to prevent HMR from doing a full page reload
      ...process.env.EVIDENCE_DISABLE_INCLUDE ? [] : [
        "./core-components",
        "./component-utilities/src",
        "./component-utilities/src/echarts",
        "./component-utilities/stores",
        "./component-utilities/formatting",
        "./component-utilities/globalContexts",
        "./component-utilities/buildQuery",
        "./component-utilities/profile",
        "@evidence-dev/sdk/usql",
        "debounce",
        "@duckdb/duckdb-wasm",
        "apache-arrow"
      ]
    ],
    exclude: ["svelte-icons", "@evidence-dev/universal-sql"]
  },
  ssr: {
    external: ["@evidence-dev/telemetry", "blueimp-md5", "nanoid", "@uwdata/mosaic-sql", "@evidence-dev/plugin-connector"]
  },
  server: {
    fs: {
      strict: strictFs
      // allow template to get dependencies outside the .evidence folder
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      external: [/^@evidence-dev\/tailwind\/fonts\//],
      onwarn(warning, warn) {
        if (warning.code === "EVAL")
          return;
        warn(warning);
      }
    }
  },
  customLogger: logger
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvY29kZS9ldmlkZW5jZS1iaS9jb21wbGV0ZWx5LWxvY2FsLWNvZGViYXNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9kZXYvY29kZS9ldmlkZW5jZS1iaS9jb21wbGV0ZWx5LWxvY2FsLWNvZGViYXNlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Rldi9jb2RlL2V2aWRlbmNlLWJpL2NvbXBsZXRlbHktbG9jYWwtY29kZWJhc2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tIFwiQHN2ZWx0ZWpzL2tpdC92aXRlXCJcblx0aW1wb3J0IHsgZXZpZGVuY2VWaXRlUGx1Z2luIH0gZnJvbSBcIkBldmlkZW5jZS1kZXYvcGx1Z2luLWNvbm5lY3RvclwiXG5cdGltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3ZpdGUnO1xuXHRpbXBvcnQgeyBzb3VyY2VRdWVyeUhtciB9IGZyb20gJ0BldmlkZW5jZS1kZXYvc2RrL3ZpdGUnO1xuXG5cdGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpO1xuXHRjb25zdCBsb2dnZXJXYXJuID0gbG9nZ2VyLndhcm47XG4gIGNvbnN0IGxvZ2dlck9uY2UgPSBsb2dnZXIud2Fybk9uY2VcbiAgXG4gIC8qKlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmlkZW5jZS1kZXYvZXZpZGVuY2UvaXNzdWVzLzE4NzZcbiAgICogSWdub3JlIHRoZSBkdWNrZGItd2FzbSBzb3VyY2VtYXAgd2FybmluZ1xuICAgKi9cbiAgbG9nZ2VyLndhcm5PbmNlID0gKG0sIG8pID0+IHtcbiAgaWYgKG0ubWF0Y2goL1NvdXJjZW1hcCBmb3IgXCIuK1xcL25vZGVfbW9kdWxlc1xcL0BkdWNrZGJcXC9kdWNrZGItd2FzbVxcL2Rpc3RcXC9kdWNrZGItYnJvd3Nlci1laFxcLndvcmtlclxcLmpzXCIgcG9pbnRzIHRvIG1pc3Npbmcgc291cmNlIGZpbGVzLykpIHJldHVybjtcbiAgbG9nZ2VyT25jZShtLCBvKVxufVxuXG5cdGxvZ2dlci53YXJuID0gKG1zZywgb3B0aW9ucykgPT4ge1xuXHRcdC8vIGlnbm9yZSBmcy9wcm9taXNlcyB3YXJuaW5nLCB1c2VkIGluICtsYXlvdXQuanMgYmVoaW5kIGlmICghYnJvd3NlcikgY2hlY2tcblx0XHRpZiAobXNnLmluY2x1ZGVzKCdNb2R1bGUgXCJmcy9wcm9taXNlc1wiIGhhcyBiZWVuIGV4dGVybmFsaXplZCBmb3IgYnJvd3NlciBjb21wYXRpYmlsaXR5JykpIHJldHVybjtcblx0XHQvLyBpZ25vcmUgZXZhbCB3YXJuaW5nLCB1c2VkIGluIGR1Y2tkYi13YXNtXG5cdFx0aWYgKG1zZy5pbmNsdWRlcygnVXNlIG9mIGV2YWwgaW4nKSAmJiBtc2cuaW5jbHVkZXMoJ2lzIHN0cm9uZ2x5IGRpc2NvdXJhZ2VkIGFzIGl0IHBvc2VzIHNlY3VyaXR5IHJpc2tzIGFuZCBtYXkgY2F1c2UgaXNzdWVzIHdpdGggbWluaWZpY2F0aW9uLicpKSByZXR1cm47XG5cdFx0bG9nZ2VyV2Fybihtc2csIG9wdGlvbnMpO1xufTtcblxuICAgIGNvbnN0IHN0cmljdEZzID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAvKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG4gICAgIGNvbnN0IGNvbmZpZyA9IFxuICAgIHtcbiAgICAgICAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBldmlkZW5jZVZpdGVQbHVnaW4oKSwgc291cmNlUXVlcnlIbXIoKV0sXG4gICAgICAgIG9wdGltaXplRGVwczoge1xuICAgICAgICAgICAgaW5jbHVkZTogWydlY2hhcnRzLXN0YXQnLCAnZWNoYXJ0cycsICdibHVlaW1wLW1kNScsICduYW5vaWQnLCAnQHV3ZGF0YS9tb3NhaWMtc3FsJyxcblx0XHRcdFx0Ly8gV2UgbmVlZCB0aGVzZSB0byBwcmV2ZW50IEhNUiBmcm9tIGRvaW5nIGEgZnVsbCBwYWdlIHJlbG9hZFxuXHRcdFx0XHQuLi4ocHJvY2Vzcy5lbnYuRVZJREVOQ0VfRElTQUJMRV9JTkNMVURFID8gW10gOiBbXG5cdFx0XHRcdFx0J0BldmlkZW5jZS1kZXYvY29yZS1jb21wb25lbnRzJyxcblx0XHRcdFx0XHQnQGV2aWRlbmNlLWRldi9jb21wb25lbnQtdXRpbGl0aWVzL3NyYycsXG5cdFx0XHRcdFx0J0BldmlkZW5jZS1kZXYvY29tcG9uZW50LXV0aWxpdGllcy9zcmMvZWNoYXJ0cycsXG5cdFx0XHRcdFx0J0BldmlkZW5jZS1kZXYvY29tcG9uZW50LXV0aWxpdGllcy9zdG9yZXMnLFxuXHRcdFx0XHRcdCcuL2NvbXBvbmVudC11dGlsaXRpZXMvZm9ybWF0dGluZycsXG5cdFx0XHRcdFx0Jy4vY29tcG9uZW50LXV0aWxpdGllcy9nbG9iYWxDb250ZXh0cycsXG5cdFx0XHRcdFx0Jy4vY29tcG9uZW50LXV0aWxpdGllcy9idWlsZFF1ZXJ5Jyxcblx0XHRcdFx0XHQnLi9jb21wb25lbnQtdXRpbGl0aWVzL3Byb2ZpbGUnLFxuXHRcdFx0XHRcdCdAZXZpZGVuY2UtZGV2L3Nkay91c3FsJyxcblx0XHRcdFx0XHQnZGVib3VuY2UnLCBcblx0XHRcdFx0XHQnQGR1Y2tkYi9kdWNrZGItd2FzbScsXG5cdFx0XHRcdFx0J2FwYWNoZS1hcnJvdydcblx0XHRcdFx0XSlcblx0XHRcdFx0XG5cdFx0XHRdLFxuICAgICAgICAgICAgZXhjbHVkZTogWydzdmVsdGUtaWNvbnMnLCAnQGV2aWRlbmNlLWRldi91bml2ZXJzYWwtc3FsJ11cbiAgICAgICAgfSxcbiAgICAgICAgc3NyOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogWydAZXZpZGVuY2UtZGV2L3RlbGVtZXRyeScsICdibHVlaW1wLW1kNScsICduYW5vaWQnLCAnQHV3ZGF0YS9tb3NhaWMtc3FsJywgJ0BldmlkZW5jZS1kZXYvcGx1Z2luLWNvbm5lY3RvciddXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgZnM6IHtcbiAgICAgICAgICAgICAgICBzdHJpY3Q6IHN0cmljdEZzIC8vIGFsbG93IHRlbXBsYXRlIHRvIGdldCBkZXBlbmRlbmNpZXMgb3V0c2lkZSB0aGUgLmV2aWRlbmNlIGZvbGRlclxuICAgICAgICAgICAgfSxcblx0XHRcdGhtcjoge1xuXHRcdFx0XHRvdmVybGF5OiBmYWxzZVxuXHRcdFx0fVxuICAgICAgICB9LFxuXHRcdGJ1aWxkOiB7XG5cdFx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRcdGV4dGVybmFsOiBbL15AZXZpZGVuY2UtZGV2XFwvdGFpbHdpbmRcXC9mb250c1xcLy9dLFxuXHRcdFx0XHRvbndhcm4od2FybmluZywgd2Fybikge1xuXHRcdFx0XHRcdGlmICh3YXJuaW5nLmNvZGUgPT09ICdFVkFMJykgcmV0dXJuO1xuXHRcdFx0XHRcdHdhcm4od2FybmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGN1c3RvbUxvZ2dlcjogbG9nZ2VyXG4gICAgfVxuICAgIGV4cG9ydCBkZWZhdWx0IGNvbmZpZyJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyxpQkFBaUI7QUFDdlcsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxzQkFBc0I7QUFFL0IsSUFBTSxTQUFTLGFBQWE7QUFDNUIsSUFBTSxhQUFhLE9BQU87QUFDekIsSUFBTSxhQUFhLE9BQU87QUFNMUIsT0FBTyxXQUFXLENBQUMsR0FBRyxNQUFNO0FBQzVCLE1BQUksRUFBRSxNQUFNLDRIQUE0SDtBQUFHO0FBQzNJLGFBQVcsR0FBRyxDQUFDO0FBQ2pCO0FBRUMsT0FBTyxPQUFPLENBQUMsS0FBSyxZQUFZO0FBRS9CLE1BQUksSUFBSSxTQUFTLHNFQUFzRTtBQUFHO0FBRTFGLE1BQUksSUFBSSxTQUFTLGdCQUFnQixLQUFLLElBQUksU0FBUyw0RkFBNEY7QUFBRztBQUNsSixhQUFXLEtBQUssT0FBTztBQUN6QjtBQUVJLElBQU0sV0FBWSxRQUFRLElBQUksYUFBYSxnQkFBaUIsUUFBUTtBQUVuRSxJQUFNLFNBQ1A7QUFBQSxFQUNJLFNBQVMsQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0FBQUEsRUFDN0QsY0FBYztBQUFBLElBQ1YsU0FBUztBQUFBLE1BQUM7QUFBQSxNQUFnQjtBQUFBLE1BQVc7QUFBQSxNQUFlO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFdEUsR0FBSSxRQUFRLElBQUksMkJBQTJCLENBQUMsSUFBSTtBQUFBLFFBQy9DO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFFRDtBQUFBLElBQ1MsU0FBUyxDQUFDLGdCQUFnQiw2QkFBNkI7QUFBQSxFQUMzRDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QsVUFBVSxDQUFDLDJCQUEyQixlQUFlLFVBQVUsc0JBQXNCLGdDQUFnQztBQUFBLEVBQ3pIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxJQUNaO0FBQUEsSUFDVCxLQUFLO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDVjtBQUFBLEVBQ0s7QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNOLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxtQ0FBbUM7QUFBQSxNQUM5QyxPQUFPLFNBQVMsTUFBTTtBQUNyQixZQUFJLFFBQVEsU0FBUztBQUFRO0FBQzdCLGFBQUssT0FBTztBQUFBLE1BQ2I7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsY0FBYztBQUNaO0FBQ0EsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
