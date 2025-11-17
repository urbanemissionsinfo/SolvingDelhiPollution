

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DpwA14uP.js","_app/immutable/chunks/D1owxQga.js","_app/immutable/chunks/CVom3JhN.js","_app/immutable/chunks/9DtJGbzt.js","_app/immutable/chunks/zuor-Nb_.js","_app/immutable/chunks/D49n6f9N.js","_app/immutable/chunks/wlln0yWX.js","_app/immutable/chunks/D3WLKOYX.js","_app/immutable/chunks/CV2YryGA.js"];
export const stylesheets = ["_app/immutable/assets/2.Dx3UUCn1.css"];
export const fonts = [];
