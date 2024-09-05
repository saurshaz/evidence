import * as client_hooks from '../../../src/hooks.client.js';


export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/about": [5],
		"/about/how_it_works": [6],
		"/explore/console": [7,[2]],
		"/explore/schema": [8,[2]],
		"/nba": [9],
		"/nba/Lakers_vs_Clippers": [10],
		"/nba/advanced": [11],
		"/nba/historical_matchups": [12],
		"/nba/in-season tournament": [13],
		"/nba/predictions": [14],
		"/nba/teams": [15],
		"/nba/teams/[nba_teams]": [16],
		"/ncaaf": [17],
		"/ncaaf/conferences": [18],
		"/ncaaf/conferences/[ncaaf_conferences]": [19],
		"/ncaaf/predictions": [20],
		"/ncaaf/teams": [21],
		"/ncaaf/teams/[ncaaf_teams]": [22],
		"/nfl": [23],
		"/nfl/predictions": [24],
		"/nfl/teams": [25],
		"/nfl/teams/[nfl_teams]": [26],
		"/settings": [~27,[3]],
		"/test": [28]
	};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';