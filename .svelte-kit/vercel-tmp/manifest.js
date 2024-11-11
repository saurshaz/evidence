export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","data/manifest.json","data/mdsbox/src_nba_elo_history/src_nba_elo_history.parquet","data/mdsbox/src_nba_elo_history/src_nba_elo_history.schema.json","data/mdsbox/src_nba_elo_rollforward/src_nba_elo_rollforward.parquet","data/mdsbox/src_nba_elo_rollforward/src_nba_elo_rollforward.schema.json","data/mdsbox/src_nba_latest_elo/src_nba_latest_elo.parquet","data/mdsbox/src_nba_latest_elo/src_nba_latest_elo.schema.json","data/mdsbox/src_nba_latest_results/src_nba_latest_results.parquet","data/mdsbox/src_nba_latest_results/src_nba_latest_results.schema.json","data/mdsbox/src_nba_ratings/src_nba_ratings.parquet","data/mdsbox/src_nba_ratings/src_nba_ratings.schema.json","data/mdsbox/src_nba_results_by_team/src_nba_results_by_team.parquet","data/mdsbox/src_nba_results_by_team/src_nba_results_by_team.schema.json","data/mdsbox/src_nba_results_log/src_nba_results_log.parquet","data/mdsbox/src_nba_results_log/src_nba_results_log.schema.json","data/mdsbox/src_nba_season_teams/src_nba_season_teams.parquet","data/mdsbox/src_nba_season_teams/src_nba_season_teams.schema.json","data/mdsbox/src_nba_seasons/src_nba_seasons.parquet","data/mdsbox/src_nba_seasons/src_nba_seasons.schema.json","data/mdsbox/src_nba_team_matchups/src_nba_team_matchups.parquet","data/mdsbox/src_nba_team_matchups/src_nba_team_matchups.schema.json","data/mdsbox/src_nba_team_stats/src_nba_team_stats.parquet","data/mdsbox/src_nba_team_stats/src_nba_team_stats.schema.json","data/mdsbox/src_nba_teams/src_nba_teams.parquet","data/mdsbox/src_nba_teams/src_nba_teams.schema.json","data/mdsbox/src_ncaaf_elo_rollforward/src_ncaaf_elo_rollforward.parquet","data/mdsbox/src_ncaaf_elo_rollforward/src_ncaaf_elo_rollforward.schema.json","data/mdsbox/src_ncaaf_latest_elo/src_ncaaf_latest_elo.parquet","data/mdsbox/src_ncaaf_latest_elo/src_ncaaf_latest_elo.schema.json","data/mdsbox/src_ncaaf_latest_results/src_ncaaf_latest_results.parquet","data/mdsbox/src_ncaaf_latest_results/src_ncaaf_latest_results.schema.json","data/mdsbox/src_ncaaf_ratings/src_ncaaf_ratings.parquet","data/mdsbox/src_ncaaf_ratings/src_ncaaf_ratings.schema.json","data/mdsbox/src_ncaaf_reg_season_end/src_ncaaf_reg_season_end.parquet","data/mdsbox/src_ncaaf_reg_season_end/src_ncaaf_reg_season_end.schema.json","data/mdsbox/src_ncaaf_reg_season_predictions/src_ncaaf_reg_season_predictions.parquet","data/mdsbox/src_ncaaf_reg_season_predictions/src_ncaaf_reg_season_predictions.schema.json","data/mdsbox/src_ncaaf_reg_season_summary/src_ncaaf_reg_season_summary.parquet","data/mdsbox/src_ncaaf_reg_season_summary/src_ncaaf_reg_season_summary.schema.json","data/mdsbox/src_ncaaf_reg_season_summary_by_conf/src_ncaaf_reg_season_summary_by_conf.parquet","data/mdsbox/src_ncaaf_reg_season_summary_by_conf/src_ncaaf_reg_season_summary_by_conf.schema.json","data/mdsbox/src_ncaaf_schedules/src_ncaaf_schedules.parquet","data/mdsbox/src_ncaaf_schedules/src_ncaaf_schedules.schema.json","data/mdsbox/src_ncaaf_season_summary/src_ncaaf_season_summary.parquet","data/mdsbox/src_ncaaf_season_summary/src_ncaaf_season_summary.schema.json","data/mdsbox/src_nfl_elo_rollforward/src_nfl_elo_rollforward.parquet","data/mdsbox/src_nfl_elo_rollforward/src_nfl_elo_rollforward.schema.json","data/mdsbox/src_nfl_latest_elo/src_nfl_latest_elo.parquet","data/mdsbox/src_nfl_latest_elo/src_nfl_latest_elo.schema.json","data/mdsbox/src_nfl_latest_results/src_nfl_latest_results.parquet","data/mdsbox/src_nfl_latest_results/src_nfl_latest_results.schema.json","data/mdsbox/src_nfl_ratings/src_nfl_ratings.parquet","data/mdsbox/src_nfl_ratings/src_nfl_ratings.schema.json","data/mdsbox/src_nfl_reg_season_end/src_nfl_reg_season_end.parquet","data/mdsbox/src_nfl_reg_season_end/src_nfl_reg_season_end.schema.json","data/mdsbox/src_nfl_reg_season_predictions/src_nfl_reg_season_predictions.parquet","data/mdsbox/src_nfl_reg_season_predictions/src_nfl_reg_season_predictions.schema.json","data/mdsbox/src_nfl_reg_season_summary/src_nfl_reg_season_summary.parquet","data/mdsbox/src_nfl_reg_season_summary/src_nfl_reg_season_summary.schema.json","data/mdsbox/src_nfl_schedules/src_nfl_schedules.parquet","data/mdsbox/src_nfl_schedules/src_nfl_schedules.schema.json","data/mdsbox/src_playoff_summary/src_playoff_summary.parquet","data/mdsbox/src_playoff_summary/src_playoff_summary.schema.json","data/mdsbox/src_reg_season_actuals_enriched/src_reg_season_actuals_enriched.parquet","data/mdsbox/src_reg_season_actuals_enriched/src_reg_season_actuals_enriched.schema.json","data/mdsbox/src_reg_season_end/src_reg_season_end.parquet","data/mdsbox/src_reg_season_end/src_reg_season_end.schema.json","data/mdsbox/src_reg_season_predictions/src_reg_season_predictions.parquet","data/mdsbox/src_reg_season_predictions/src_reg_season_predictions.schema.json","data/mdsbox/src_reg_season_summary/src_reg_season_summary.parquet","data/mdsbox/src_reg_season_summary/src_reg_season_summary.schema.json","data/mdsbox/src_season_summary/src_season_summary.parquet","data/mdsbox/src_season_summary/src_season_summary.schema.json","data/mdsbox/src_tournament_end/src_tournament_end.parquet","data/mdsbox/src_tournament_end/src_tournament_end.schema.json","favicon.ico","icon-192.png","icon-512.png","icon.svg","manifest.webmanifest"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.w8YElCZq.js","app":"_app/immutable/entry/app.B4PzLBpf.js","imports":["_app/immutable/entry/start.w8YElCZq.js","_app/immutable/chunks/entry.BS6qe5sS.js","_app/immutable/chunks/scheduler.DJ5NyVUo.js","_app/immutable/entry/app.B4PzLBpf.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DJ5NyVUo.js","_app/immutable/chunks/index.vKcMOcrQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/api/customFormattingSettings.json",
				pattern: /^\/api\/customFormattingSettings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/customFormattingSettings.json/_server.js'))
			},
			{
				id: "/api/customFormattingSettings.json/GET.json",
				pattern: /^\/api\/customFormattingSettings\.json\/GET\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/customFormattingSettings.json/GET.json/_server.js'))
			},
			{
				id: "/api/pagesManifest.json",
				pattern: /^\/api\/pagesManifest\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/pagesManifest.json/_server.js'))
			},
			{
				id: "/api/prerendered_queries/[query_hash].arrow",
				pattern: /^\/api\/prerendered_queries\/([^/]+?)\.arrow\/?$/,
				params: [{"name":"query_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/prerendered_queries/_query_hash_.arrow/_server.js'))
			},
			{
				id: "/api/settings.json",
				pattern: /^\/api\/settings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/settings.json/_server.js'))
			},
			{
				id: "/api/[...route]/evidencemeta.json",
				pattern: /^\/api(?:\/(.*))?\/evidencemeta\.json\/?$/,
				params: [{"name":"route","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/_...route_/evidencemeta.json/_server.js'))
			},
			{
				id: "/api/[route_hash]/[additional_hash]/all-queries.json",
				pattern: /^\/api\/([^/]+?)\/([^/]+?)\/all-queries\.json\/?$/,
				params: [{"name":"route_hash","optional":false,"rest":false,"chained":false},{"name":"additional_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/_route_hash_/_additional_hash_/all-queries.json/_server.js'))
			},
			{
				id: "/explore/console",
				pattern: /^\/explore\/console\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/explore/schema",
				pattern: /^\/explore\/schema\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
