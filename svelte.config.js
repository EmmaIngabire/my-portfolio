import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Configure the output directory (you can change this to your desired output)
			out: 'build'
		}),
		// Ensure you include this if using GitHub Pages
		paths: {
			base: process.env.BASE_PATH || '', // Using the environment variable for base path
		},
	},
};

export default config;
