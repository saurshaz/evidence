import * as universal from '../entries/pages/explore/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/explore/+layout.js";
export const imports = ["_app/immutable/nodes/2.BuW9TC7B.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/nodes/3.DDPKqEuD.js","_app/immutable/chunks/scheduler.DJ5NyVUo.js","_app/immutable/chunks/index.vKcMOcrQ.js"];
export const stylesheets = [];
export const fonts = [];
