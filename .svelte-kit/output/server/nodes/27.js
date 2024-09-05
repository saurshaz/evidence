import * as universal from '../entries/pages/settings/_page.js';
import * as server from '../entries/pages/settings/_page.server.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/settings/+page.js";
export { server };
export const server_id = "src/pages/settings/+page.server.js";
export const imports = ["_app/immutable/nodes/27.LAS06ubD.js","_app/immutable/chunks/scheduler.BVCo5HCX.js","_app/immutable/chunks/index.C9mGAhn_.js","_app/immutable/chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js","_app/immutable/chunks/index.DAWWTyat.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/chunks/entry.ZsnkuR_y.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.DfddKQGg.js","_app/immutable/chunks/index.y9s2U1iq.js","_app/immutable/chunks/index.B0g48D0w.js","_app/immutable/chunks/CopyIcon.5MOzTE6L.js","_app/immutable/chunks/globalContexts.1hDlTDmj.js","_app/immutable/chunks/AccordionItem.DAYPUhQ2.js","_app/immutable/chunks/updater.DMRzQ2eU.js","_app/immutable/chunks/index.BUqOVkrY.js","_app/immutable/chunks/Prismjs.BBO2hxo5.js"];
export const stylesheets = ["_app/immutable/assets/VennDiagram.FMRvmD3Y.css"];
export const fonts = [];
