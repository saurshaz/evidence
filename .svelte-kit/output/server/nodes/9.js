import * as universal from '../entries/pages/settings/_page.js';
import * as server from '../entries/pages/settings/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/settings/+page.js";
export { server };
export const server_id = "src/pages/settings/+page.server.js";
export const imports = ["_app/immutable/nodes/9.BdzxJBZW.js","_app/immutable/chunks/scheduler.DJ5NyVUo.js","_app/immutable/chunks/index.vKcMOcrQ.js","_app/immutable/chunks/VennDiagram.svelte_svelte_type_style_lang.DMzzXzgf.js","_app/immutable/chunks/index.DaZzkq94.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/chunks/entry.BS6qe5sS.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.BA7lkrvV.js","_app/immutable/chunks/index.B0g48D0w.js","_app/immutable/chunks/CopyIcon.BnWtlypk.js","_app/immutable/chunks/globalContexts.1hDlTDmj.js","_app/immutable/chunks/AccordionItem.bHqvgDJn.js","_app/immutable/chunks/updater.WMHGngmR.js","_app/immutable/chunks/index.C4Bnz-Ec.js","_app/immutable/chunks/Prismjs.ucEsebzG.js"];
export const stylesheets = ["_app/immutable/assets/VennDiagram.FMRvmD3Y.css"];
export const fonts = [];
