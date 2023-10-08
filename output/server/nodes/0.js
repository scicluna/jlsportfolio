import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.517d2033.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/index.383ef100.js","_app/immutable/chunks/index.3192b696.js","_app/immutable/chunks/github.c6cb1f1e.js","_app/immutable/chunks/each.26cc0e45.js","_app/immutable/chunks/singletons.8de56a6c.js","_app/immutable/chunks/paths.08519455.js"];
export const stylesheets = ["_app/immutable/assets/0.a6033402.css","_app/immutable/assets/github.cb0c4400.css"];
export const fonts = [];
