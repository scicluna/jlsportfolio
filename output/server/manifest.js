export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelteportfolio/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c80da228.js","app":"_app/immutable/entry/app.d305a02a.js","imports":["_app/immutable/entry/start.c80da228.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/singletons.8de56a6c.js","_app/immutable/chunks/paths.08519455.js","_app/immutable/entry/app.d305a02a.js","_app/immutable/chunks/scheduler.63e23178.js","_app/immutable/chunks/index.383ef100.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
