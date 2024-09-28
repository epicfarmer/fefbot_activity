export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".env","FEFBot.apple-touch-icon.png","FEFBot.audio.worklet.js","FEFBot.html","FEFBot.icon.png","FEFBot.js","FEFBot.pck","FEFBot.png","FEFBot.wasm","favicon.png","godotengine.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".js":"text/javascript",".html":"text/html",".wasm":"application/wasm",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BBSr8xQb.js","app":"_app/immutable/entry/app.DmUUqgjC.js","imports":["_app/immutable/entry/start.BBSr8xQb.js","_app/immutable/chunks/entry.DeoHTwb_.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DmUUqgjC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Y7cfURbq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/discord",
				pattern: /^\/discord\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/discord/_server.ts.js'))
			},
			{
				id: "/discord/token",
				pattern: /^\/discord\/token\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/discord/token/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
