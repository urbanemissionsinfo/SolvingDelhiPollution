import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B5Qeor-f.js","_app/immutable/chunks/DpSAFk1g.js","_app/immutable/chunks/DrH3Tt2Q.js","_app/immutable/chunks/yCvRWiIb.js","_app/immutable/chunks/Cc4t8AHm.js","_app/immutable/chunks/DRavbFwi.js"];
export const stylesheets = [];
export const fonts = [];
