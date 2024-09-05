import { c as create_ssr_component } from "./ssr.js";
const HiddenInPrint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { enabled = true } = $$props;
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0)
    $$bindings.enabled(enabled);
  return `<div class="${["contents", enabled ? "print:hidden" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  HiddenInPrint as H
};
