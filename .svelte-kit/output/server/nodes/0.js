import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DletvsSF.js","_app/immutable/chunks/D1owxQga.js","_app/immutable/chunks/CVom3JhN.js","_app/immutable/chunks/wlln0yWX.js","_app/immutable/chunks/D3WLKOYX.js"];
export const stylesheets = [];
export const fonts = [];
