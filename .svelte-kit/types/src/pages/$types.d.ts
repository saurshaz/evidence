import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/about" | "/about/how_it_works" | "/explore/console" | "/explore/schema" | "/nba" | "/nba/Lakers_vs_Clippers" | "/nba/advanced" | "/nba/historical_matchups" | "/nba/in-season tournament" | "/nba/predictions" | "/nba/teams" | "/nba/teams/[nba_teams]" | "/ncaaf" | "/ncaaf/conferences" | "/ncaaf/conferences/[ncaaf_conferences]" | "/ncaaf/predictions" | "/ncaaf/teams" | "/ncaaf/teams/[ncaaf_teams]" | "/nfl" | "/nfl/predictions" | "/nfl/teams" | "/nfl/teams/[nfl_teams]" | "/settings" | "/test" | null
type LayoutParams = RouteParams & { nba_teams?: string; ncaaf_conferences?: string; ncaaf_teams?: string; nfl_teams?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/pages/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/pages/+layout.js').load>>>>>>;