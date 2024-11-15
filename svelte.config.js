// import adapter from '@sveltejs/adapter-static';
import evidencePreprocess from '@evidence-dev/preprocess';
import preprocess from 'svelte-preprocess';
import { evidencePlugins } from '@evidence-dev/plugin-connector';
import fs from 'fs';
import path from 'path';
import adapter from '@sveltejs/adapter-vercel';

/**
 * @param {Object} a
 * @param {Object} b
 * @returns {Object}
 */
const deepMerge = (a, b) => {
	for (const key in b) {
		if (typeof b[key] === 'object' && !Array.isArray(b[key])) {
			if (!a[key]) a[key] = {};
			deepMerge(a[key], b[key]);
		} else {
			Object.assign(a, { [key]: b[key] });
		}
	}
	return a;
};

/**
 * Handles errors generated in the Svelte Vite plugin. Temporary approach until this plugin allows errors to be passed through to the browser
 * @param {{ message: string }} warning - The warning object from the Svelte Vite plugin.
 * @throws {Error}
 */
function errorHandler(warning) {
	if (warning.message.includes('defined') || warning.message.includes('Empty Block')) {
		throw new Error(warning.message, { cause: warning });
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		...evidencePreprocess(true),
		evidencePlugins(),
		preprocess({
			postcss: true
		})
	],
	onwarn: errorHandler,
	kit: {
		adapter: adapter(),
		// adapter: adapter({
		// 	strict: false
		// }),
		// adapter: adapter({	strict: false }),
		files: {
			routes: 'src/pages',
			lib: 'src/components'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}

				// otherwise fail the build
				// throw new Error(message); // FIXME:
			}
		},
	}
};

async function loadUserConfiguration() {
	if (!process.cwd().includes('.evidence')) return;
	const rootDir = process.cwd().split('.evidence')[0];
	const rootDirContents = fs.readdirSync(rootDir);

	if (!rootDirContents.includes('svelte.config.js')) return;

	const configFileLocation = path.join(rootDir, 'svelte.config.js');
	const configURL = new URL(`file:///${configFileLocation}`).href;
	/** @type {import("@sveltejs/kit").Config} */
	const userConfig = await import(configURL).then((r) => r.default);

	if ('preprocess' in userConfig) {
		if ('preprocess' in config) {
			config.preprocess.push(...userConfig.preprocess);
		} else {
			// This case shouldn't ever be reached.
			config.preprocess = userConfig.preprocess;
		}
		delete userConfig.preprocess;
	}
	if ('extensions' in userConfig) {
		console.warn('Configuring extensions is disabled for Evidence projects.');
		delete userConfig.extensions;
	}
	if ('kit' in userConfig && 'files' in userConfig.kit) {
		console.warn('Configuring file locations is disabled for Evidence projects.');
		delete userConfig.kit.files;
	}

	deepMerge(config, userConfig);
	console.log('Custom svelte.config.js applied');
}

await loadUserConfiguration();

export default config;
