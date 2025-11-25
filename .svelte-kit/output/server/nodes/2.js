import * as universal from '../entries/pages/Sources/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Sources/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Sources/+layout.js";
export const imports = ["_app/immutable/nodes/2.TIoC5WMS.js","_app/immutable/chunks/DpSAFk1g.js","_app/immutable/chunks/DrH3Tt2Q.js","_app/immutable/chunks/yCvRWiIb.js","_app/immutable/chunks/Cc4t8AHm.js","_app/immutable/chunks/DRavbFwi.js"];
export const stylesheets = [];
export const fonts = [];
