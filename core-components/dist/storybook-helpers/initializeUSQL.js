import {
	initDB,
	setParquetURLs,
	updateSearchPath
} from '@evidence-dev/universal-sql/client-duckdb';

export async function initialize() {
	try {
		await initDB();
		const res = await fetch('/data/manifest.json').then((r) => r.json());
		await setParquetURLs(res.renderedFiles ?? {});
		await updateSearchPath(Object.keys(res.renderedFiles ?? {}));
		if (!res.renderedFiles) console.error('No fixture data available!');
	} catch (e) {
		console.error('Failed to initialize USQL ', e);
	}
}
