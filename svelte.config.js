import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build', // This is where your output will go
            assets: 'build',
            fallback: null,  // Set if needed for SPA behavior
        })
    }
};

export default config;
