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
		client: {start:"_app/immutable/entry/start.3N-5Jt69.js",app:"_app/immutable/entry/app.FgJAYIr4.js",imports:["_app/immutable/entry/start.3N-5Jt69.js","_app/immutable/chunks/j9EcHVTF.js","_app/immutable/chunks/DrH3Tt2Q.js","_app/immutable/chunks/DQl1l6DY.js","_app/immutable/entry/app.FgJAYIr4.js","_app/immutable/chunks/DrH3Tt2Q.js","_app/immutable/chunks/-RgOS62g.js","_app/immutable/chunks/DpSAFk1g.js","_app/immutable/chunks/DQl1l6DY.js","_app/immutable/chunks/DIO6iu1u.js","_app/immutable/chunks/Cc4t8AHm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Sources",
				pattern: /^\/Sources\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
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
