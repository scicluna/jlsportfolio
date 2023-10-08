import * as universal from '../entries/pages/resume/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/resume/+page.ts";
export const imports = ["_app/immutable/nodes/5.83a92909.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/index.383ef100.js"];
export const stylesheets = [];
export const fonts = [];
