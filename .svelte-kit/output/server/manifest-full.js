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
		client: {"start":"_app/immutable/entry/start.BJP8HgOs.js","app":"_app/immutable/entry/app.D6kYqkpZ.js","imports":["_app/immutable/entry/start.BJP8HgOs.js","_app/immutable/chunks/entry.BCF5SsRs.js","_app/immutable/chunks/scheduler.BVCo5HCX.js","_app/immutable/entry/app.D6kYqkpZ.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.BVCo5HCX.js","_app/immutable/chunks/index.C9mGAhn_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about/how_it_works",
				pattern: /^\/about\/how_it_works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/api/customFormattingSettings.json",
				pattern: /^\/api\/customFormattingSettings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/customFormattingSettings.json/_server.js'))
			},
			{
				id: "/api/customFormattingSettings.json/GET.json",
				pattern: /^\/api\/customFormattingSettings\.json\/GET\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/customFormattingSettings.json/GET.json/_server.js'))
			},
			{
				id: "/api/pagesManifest.json",
				pattern: /^\/api\/pagesManifest\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/pagesManifest.json/_server.js'))
			},
			{
				id: "/api/prerendered_queries/[query_hash].arrow",
				pattern: /^\/api\/prerendered_queries\/([^/]+?)\.arrow\/?$/,
				params: [{"name":"query_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/prerendered_queries/_query_hash_.arrow/_server.js'))
			},
			{
				id: "/api/settings.json",
				pattern: /^\/api\/settings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/settings.json/_server.js'))
			},
			{
				id: "/api/[...route]/evidencemeta.json",
				pattern: /^\/api(?:\/(.*))?\/evidencemeta\.json\/?$/,
				params: [{"name":"route","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_...route_/evidencemeta.json/_server.js'))
			},
			{
				id: "/api/[route_hash]/[additional_hash]/all-queries.json",
				pattern: /^\/api\/([^/]+?)\/([^/]+?)\/all-queries\.json\/?$/,
				params: [{"name":"route_hash","optional":false,"rest":false,"chained":false},{"name":"additional_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_route_hash_/_additional_hash_/all-queries.json/_server.js'))
			},
			{
				id: "/explore/console",
				pattern: /^\/explore\/console\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/explore/schema",
				pattern: /^\/explore\/schema\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/nba",
				pattern: /^\/nba\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/nba/Lakers_vs_Clippers",
				pattern: /^\/nba\/Lakers_vs_Clippers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/nba/advanced",
				pattern: /^\/nba\/advanced\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/nba/historical_matchups",
				pattern: /^\/nba\/historical_matchups\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/nba/in-season tournament",
				pattern: /^\/nba\/in-season tournament\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/nba/predictions",
				pattern: /^\/nba\/predictions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/nba/teams",
				pattern: /^\/nba\/teams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/nba/teams/[nba_teams]",
				pattern: /^\/nba\/teams\/([^/]+?)\/?$/,
				params: [{"name":"nba_teams","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/ncaaf",
				pattern: /^\/ncaaf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/ncaaf/conferences",
				pattern: /^\/ncaaf\/conferences\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/ncaaf/conferences/[ncaaf_conferences]",
				pattern: /^\/ncaaf\/conferences\/([^/]+?)\/?$/,
				params: [{"name":"ncaaf_conferences","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/ncaaf/predictions",
				pattern: /^\/ncaaf\/predictions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/ncaaf/teams",
				pattern: /^\/ncaaf\/teams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/ncaaf/teams/[ncaaf_teams]",
				pattern: /^\/ncaaf\/teams\/([^/]+?)\/?$/,
				params: [{"name":"ncaaf_teams","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/nfl",
				pattern: /^\/nfl\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/nfl/predictions",
				pattern: /^\/nfl\/predictions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/nfl/teams",
				pattern: /^\/nfl\/teams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/nfl/teams/[nfl_teams]",
				pattern: /^\/nfl\/teams\/([^/]+?)\/?$/,
				params: [{"name":"nfl_teams","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
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
