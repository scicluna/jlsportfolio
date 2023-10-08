import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.6e3a96e3.js","_app/immutable/chunks/proxichat5.7c8364ee.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/index.383ef100.js","_app/immutable/chunks/paths.08519455.js","_app/immutable/chunks/each.26cc0e45.js","_app/immutable/chunks/index.3192b696.js"];
export const stylesheets = ["_app/immutable/assets/2.7474fb52.css"];
export const fonts = [];
