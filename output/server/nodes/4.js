import * as universal from '../entries/pages/projects/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.ts";
export const imports = ["_app/immutable/nodes/4.f4e15599.js","_app/immutable/chunks/proxichat5.7c8364ee.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/index.383ef100.js","_app/immutable/chunks/each.26cc0e45.js","_app/immutable/chunks/github.c6cb1f1e.js"];
export const stylesheets = ["_app/immutable/assets/github.cb0c4400.css"];
export const fonts = [];
