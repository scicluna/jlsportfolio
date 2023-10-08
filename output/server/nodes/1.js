

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.033e520e.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/index.383ef100.js","_app/immutable/chunks/singletons.8de56a6c.js","_app/immutable/chunks/paths.08519455.js"];
export const stylesheets = [];
export const fonts = [];
