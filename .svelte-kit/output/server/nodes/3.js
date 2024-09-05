import * as server from '../entries/pages/settings/_layout.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/pages/settings/+layout.server.js";
export const imports = ["_app/immutable/nodes/3.DDPKqEuD.js","_app/immutable/chunks/scheduler.DJ5NyVUo.js","_app/immutable/chunks/index.vKcMOcrQ.js"];
export const stylesheets = [];
export const fonts = [];
