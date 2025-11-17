export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "SolvingDelhiPollution/_app",
	assets: new Set([".nojekyll","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B58I9EvV.js",app:"_app/immutable/entry/app.D4MFhgrY.js",imports:["_app/immutable/entry/start.B58I9EvV.js","_app/immutable/chunks/BF1BPDuZ.js","_app/immutable/chunks/CVom3JhN.js","_app/immutable/chunks/CV2YryGA.js","_app/immutable/entry/app.D4MFhgrY.js","_app/immutable/chunks/CVom3JhN.js","_app/immutable/chunks/zuor-Nb_.js","_app/immutable/chunks/D1owxQga.js","_app/immutable/chunks/CV2YryGA.js","_app/immutable/chunks/D49n6f9N.js","_app/immutable/chunks/wlln0yWX.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
