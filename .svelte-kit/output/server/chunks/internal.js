import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
import { a as afterUpdate } from "./ssr2.js";
import "./environment.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="icon" href="/favicon.ico" sizes="32x32" />\n	<link rel="icon" href="/icon.svg" type="image/svg+xml" />\n	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />\n	<!-- 180×180 -->\n	<link rel="manifest" href="/manifest.webmanifest" />\n\n	<script src="https://code.jquery.com/jquery-3.1.0.js"><\/script>\n\n\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	' + head + '\n	<script src="https://fastly.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"><\/script>\n	<style>\n		body {\n			font-family: "Roboto", san-serif;\n		}\n\n		/* #chart-container {\n			position: relative;\n			height: 100vh;\n			overflow: hidden;\n		} */\n\n		.center {\n			text-align: center;\n		}\n\n		.menu {\n			width: 12vw;\n			z-index: 11;\n			box-shadow: 0 4px 5px 3px rgba(0, 0, 0, 0.2);\n			position: absolute;\n			display: none;\n			transition: 0.2s display ease-in;\n			background-color: white;\n\n			.menu-options {\n				list-style: none;\n				padding: 10px 0;\n				z-index: 11;\n\n				.menu-option {\n					font-weight: 500;\n					z-index: 11;\n					font-size: 14px;\n					padding: 10px 40px 10px 20px;\n					border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);\n					cursor: pointer;\n\n					&:hover {\n						background: rgba(0, 0, 0, 0.2);\n					}\n				}\n\n				.larger-height {\n					margin-top: 1vh;\n					align-items: center;\n					min-height: 7vh;\n					min-width: 7vw;\n				}\n			}\n		}\n\n\n\n		button {\n			background: grey;\n			border: none;\n\n			.next {\n				color: green;\n			}\n\n			&[disabled="false"]:hover {\n				.next {\n					color: red;\n					animation: move 0.5s;\n					animation-iteration-count: 2;\n				}\n			}\n		}\n\n		@keyframes move {\n			from {\n				transform: translate(0%);\n			}\n\n			50% {\n				transform: translate(-40%);\n			}\n\n			to {\n				transform: transform(0%);\n			}\n		}\n	</style>\n\n</head>\n\n<body>\n	<script>\n		/*loading*/\n	<\/script>\n\n\n	<div>\n		<!-- SvelteKit Hydrated Content -->\n		' + body + '\n		<!-- SplashScreen -->\n		<div aria-disabled id="__evidence_project_splash" style="visibility: hidden">\n			<svg width="100" height="100" viewBox="-8 -8 588 588" xmlns="http://www.w3.org/2000/svg">\n				<path\n					d="M7.19462e-05 74.3583C109.309 74.3583 195.795 86.2578 286.834 37.825C377.872 -10.6077 466.416 1.29174 573.667 1.29175L573.667 126.549C466.416 126.549 377.373 114.91 286.834 163.082C196.294 211.254 109.309 199.615 6.11417e-05 199.615L7.19462e-05 74.3583Z"\n					class="draw-path" />\n				<path\n					d="M573.669 499.31C464.36 499.31 377.874 487.411 286.835 535.843C195.797 584.276 107.252 572.377 0.0014801 572.377V447.12C107.252 447.12 196.295 458.758 286.835 410.586C377.375 362.415 464.36 374.053 573.669 374.053V499.31Z"\n					class="draw-path2" />\n				<path\n					d="M452.896 186.499C395.028 187.686 341.581 194.947 286.835 224.074C211.396 264.212 136.995 262.826 52.2355 261.247C35.2696 260.931 17.8887 260.608 0.0014801 260.608V385.865C18.1032 385.865 35.6721 386.204 52.81 386.534C137.212 388.162 211.162 389.589 286.835 349.331C341.838 320.07 395.18 312.831 452.896 311.685V186.499Z"\n					/home/dev/code/evidence-bi/completely-local-codebase/src/pages/nba/testclass="draw-path3" />\n			</svg>\n		</div>\n	</div>\n</body>\n\n</html>\n\n<style>\n	#__evidence_project_splash {\n		position: fixed;\n		top: 0;\n		left: 0;\n		width: 100vw;\n		height: 100vh;\n		background-color: #ffffff;\n		display: flex;\n		justify-content: center;\n		align-items: center;\n		z-index: 9999;\n	}\n\n	.draw-path,\n	.draw-path2,\n	.draw-path3 {\n		fill: #000000;\n		animation: blinking-logo 2s;\n		animation-fill-mode: both;\n		animation-iteration-count: infinite;\n		animation-timing-function: ease-in-out;\n	}\n\n	@keyframes blinking-logo {\n		0% {\n			fill-opacity: 1;\n		}\n\n		50% {\n			fill-opacity: 0.2;\n		}\n\n		100% {\n			fill-opacity: 1;\n		}\n	}\n</style>',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1nfr8yg"
};
async function get_hooks() {
  return {
    ...await import("./hooks.server.js")
  };
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  set_public_env as e,
  set_safe_public_env as f,
  get_hooks as g,
  set_assets as h,
  set_manifest as i,
  set_read_implementation as j,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
