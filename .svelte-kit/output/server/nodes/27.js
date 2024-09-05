import * as universal from '../entries/pages/settings/_page.js';
import * as server from '../entries/pages/settings/_page.server.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/settings/+page.js";
export { server };
export const server_id = "src/pages/settings/+page.server.js";
export const imports = ["_app/immutable/nodes/27.BW_T10Oq.js","_app/immutable/chunks/scheduler.BVCo5HCX.js","_app/immutable/chunks/index.C9mGAhn_.js","_app/immutable/chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js","_app/immutable/chunks/index.C8RIryS8.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/chunks/entry.BCF5SsRs.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.DBK5gAtQ.js","_app/immutable/chunks/index.y9s2U1iq.js","_app/immutable/chunks/index.B0g48D0w.js","_app/immutable/chunks/CopyIcon.fK-JPSDA.js","_app/immutable/chunks/globalContexts.1hDlTDmj.js","_app/immutable/chunks/AccordionItem.2KEDIgrf.js","_app/immutable/chunks/updater.Dor2QmPh.js","_app/immutable/chunks/index.BUqOVkrY.js","_app/immutable/chunks/Prismjs.CVH7unWR.js"];
export const stylesheets = ["_app/immutable/assets/VennDiagram.FMRvmD3Y.css"];
export const fonts = [];
