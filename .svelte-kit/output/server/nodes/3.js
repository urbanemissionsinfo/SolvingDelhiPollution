

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.Bs7vFqhe.js","_app/immutable/chunks/DpSAFk1g.js","_app/immutable/chunks/DrH3Tt2Q.js","_app/immutable/chunks/BY29K6gv.js","_app/immutable/chunks/D1Tt3LiV.js","_app/immutable/chunks/-RgOS62g.js","_app/immutable/chunks/DIO6iu1u.js","_app/immutable/chunks/Cc4t8AHm.js","_app/immutable/chunks/DRavbFwi.js","_app/immutable/chunks/DQl1l6DY.js"];
export const stylesheets = ["_app/immutable/assets/index.BV8JJ9pn.css","_app/immutable/assets/3.CN8jcxqe.css"];
export const fonts = [];
