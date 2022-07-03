import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	// preprocess: preprocess({
	// 	preserve: ['ld+json']
	// 	// ...
	// })
};

export default config;
