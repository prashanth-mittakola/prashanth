import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib'
		}
	}
	// resolve: {
	// 	alias: {
	// 		$lib: path.resolve('./src/lib'),
	// 		$components: path.resolve('./src/lib/components'),
	// 		$utils: path.resolve('./src/lib/utils')
	// 	}
	// }
};

export default config;
