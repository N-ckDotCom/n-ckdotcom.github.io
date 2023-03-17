export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.856ed920.js","imports":["_app/immutable/entry/start.856ed920.js","_app/immutable/chunks/index.4672743b.js","_app/immutable/chunks/singletons.c704fee7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5845add9.js","imports":["_app/immutable/entry/app.5845add9.js","_app/immutable/chunks/index.4672743b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
