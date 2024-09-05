import{s as pe,a as L,e as Y,b as V,c as D,h as Le,d as B,f as d,g as ce,i as R,j as m,k as ee,l as ne,m as De,o as ie,p as Ce,q as re,t as Ae,r as ge,u as Fe,n as j}from"../chunks/scheduler.BVCo5HCX.js";import{S as Me,i as Ne,c as H,a as q,m as J,t as p,b as C,d as X,e as W,g as Z}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as Ie,Q as $,p as Ye,r as _e,t as oe}from"../chunks/index.DAWWTyat.js";import{h as Q}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Be,C as ke}from"../chunks/globalContexts.1hDlTDmj.js";import{w as ve}from"../chunks/entry.ZsnkuR_y.js";import{p as ye}from"../chunks/stores.C49gDDi_.js";import{L as le}from"../chunks/LineChart.4dpktC06.js";import{S as de}from"../chunks/ScatterPlot.DquZpF-Y.js";import{p as we}from"../chunks/profile.BW8tN6E9.js";import{Q as te}from"../chunks/QueryViewer.CXzVRZ_y.js";function Ue(_){var n;let t,c=(l.title??((n=l.og)==null?void 0:n.title))+"",e;return{c(){t=Y("h1"),e=Ae(c),this.h()},l(a){t=B(a,"H1",{class:!0});var i=ge(t);e=Fe(i,c),i.forEach(d),this.h()},h(){R(t,"class","title")},m(a,i){m(a,t,i),ee(t,e)},p:j,d(a){a&&d(t)}}}function be(_){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:j,p:j,d:j}}function he(_){var i;let t,c,e,n,a;return document.title=t=l.title??((i=l.og)==null?void 0:i.title),{c(){c=L(),e=Y("meta"),n=L(),a=Y("meta"),this.h()},l(r){c=D(r),e=B(r,"META",{property:!0,content:!0}),n=D(r),a=B(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u;R(e,"property","og:title"),R(e,"content",((r=l.og)==null?void 0:r.title)??l.title),R(a,"name","twitter:title"),R(a,"content",((u=l.og)==null?void 0:u.title)??l.title)},m(r,u){m(r,c,u),m(r,e,u),m(r,n,u),m(r,a,u)},p(r,u){var M;u&0&&t!==(t=l.title??((M=l.og)==null?void 0:M.title))&&(document.title=t)},d(r){r&&(d(c),d(e),d(n),d(a))}}}function Pe(_){var a,i;let t,c,e=(l.description||((a=l.og)==null?void 0:a.description))&&$e(),n=((i=l.og)==null?void 0:i.image)&&Ge();return{c(){e&&e.c(),t=L(),n&&n.c(),c=V()},l(r){e&&e.l(r),t=D(r),n&&n.l(r),c=V()},m(r,u){e&&e.m(r,u),m(r,t,u),n&&n.m(r,u),m(r,c,u)},p(r,u){var M,A;(l.description||(M=l.og)!=null&&M.description)&&e.p(r,u),(A=l.og)!=null&&A.image&&n.p(r,u)},d(r){r&&(d(t),d(c)),e&&e.d(r),n&&n.d(r)}}}function $e(_){let t,c,e,n,a;return{c(){t=Y("meta"),c=L(),e=Y("meta"),n=L(),a=Y("meta"),this.h()},l(i){t=B(i,"META",{name:!0,content:!0}),c=D(i),e=B(i,"META",{property:!0,content:!0}),n=D(i),a=B(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r,u;R(t,"name","description"),R(t,"content",l.description??((i=l.og)==null?void 0:i.description)),R(e,"property","og:description"),R(e,"content",((r=l.og)==null?void 0:r.description)??l.description),R(a,"name","twitter:description"),R(a,"content",((u=l.og)==null?void 0:u.description)??l.description)},m(i,r){m(i,t,r),m(i,c,r),m(i,e,r),m(i,n,r),m(i,a,r)},p:j,d(i){i&&(d(t),d(c),d(e),d(n),d(a))}}}function Ge(_){let t,c,e;return{c(){t=Y("meta"),c=L(),e=Y("meta"),this.h()},l(n){t=B(n,"META",{property:!0,content:!0}),c=D(n),e=B(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a;R(t,"property","og:image"),R(t,"content",(n=l.og)==null?void 0:n.image),R(e,"name","twitter:image"),R(e,"content",(a=l.og)==null?void 0:a.image)},m(n,a){m(n,t,a),m(n,c,a),m(n,e,a)},p:j,d(n){n&&(d(t),d(c),d(e))}}}function ue(_){let t,c;return t=new te({props:{queryID:"seed_details",queryResult:_[0]}}),{c(){H(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,n){J(t,e,n),c=!0},p(e,n){const a={};n&1&&(a.queryResult=e[0]),t.$set(a)},i(e){c||(p(t.$$.fragment,e),c=!0)},o(e){C(t.$$.fragment,e),c=!1},d(e){W(t,e)}}}function me(_){let t,c;return t=new te({props:{queryID:"seed_details_cdf",queryResult:_[1]}}),{c(){H(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,n){J(t,e,n),c=!0},p(e,n){const a={};n&2&&(a.queryResult=e[1]),t.$set(a)},i(e){c||(p(t.$$.fragment,e),c=!0)},o(e){C(t.$$.fragment,e),c=!1},d(e){W(t,e)}}}function Ee(_){let t,c;return t=new te({props:{queryID:"seed_details_cdf_scatter",queryResult:_[2]}}),{c(){H(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,n){J(t,e,n),c=!0},p(e,n){const a={};n&4&&(a.queryResult=e[2]),t.$set(a)},i(e){c||(p(t.$$.fragment,e),c=!0)},o(e){C(t.$$.fragment,e),c=!1},d(e){W(t,e)}}}function fe(_){let t,c,e,n;return t=new de({props:{data:_[2].filter(Re),x:"seed",y:"cumulative_pct1",series:"team",title:"Eastern Conference",xAxisTitle:"seed",xTickMarks:"true",yMax:"1",yMin:"0"}}),e=new de({props:{data:_[2].filter(Oe),x:"seed",y:"cumulative_pct1",series:"team",title:"Western Conference",xAxisTitle:"seed",xTickMarks:"true",yMax:"1",yMin:"0"}}),{c(){H(t.$$.fragment),c=L(),H(e.$$.fragment)},l(a){q(t.$$.fragment,a),c=D(a),q(e.$$.fragment,a)},m(a,i){J(t,a,i),m(a,c,i),J(e,a,i),n=!0},p(a,i){const r={};i&4&&(r.data=a[2].filter(Re)),t.$set(r);const u={};i&4&&(u.data=a[2].filter(Oe)),e.$set(u)},i(a){n||(p(t.$$.fragment,a),p(e.$$.fragment,a),n=!0)},o(a){C(t.$$.fragment,a),C(e.$$.fragment,a),n=!1},d(a){a&&d(c),W(t,a),W(e,a)}}}function He(_){var O;let t,c,e,n,a,i,r,u='<a href="#advanced-analytical-views">Advanced Analytical views</a>',M,A,G="This is experimental and may break at any time",k,v,y,N,w,I,h,U,b,g=typeof l<"u"&&(l.title||((O=l.og)==null?void 0:O.title))&&l.hide_title!==!0&&Ue();function x(s,o){var z;return typeof l<"u"&&(l.title||(z=l.og)!=null&&z.title)?he:be}let P=x()(_),F=typeof l=="object"&&Pe(),E=_[0]&&ue(_),f=_[1]&&me(_),S=_[2]&&Ee(_);N=new le({props:{data:_[1].filter(Se),x:"seed",y:"cumulative_pct1",series:"team",title:"Eastern Conference",xAxisTitle:"seed",xTickMarks:"true",yMax:"1"}}),I=new le({props:{data:_[1].filter(Te),x:"seed",y:"cumulative_pct1",series:"team",title:"Western Conference",xAxisTitle:"seed",xTickMarks:"true",yMax:"1"}});let T=_[2].length>0&&fe(_);return{c(){g&&g.c(),t=L(),P.c(),c=Y("meta"),e=Y("meta"),F&&F.c(),n=V(),a=L(),E&&E.c(),i=L(),r=Y("h1"),r.innerHTML=u,M=L(),A=Y("p"),A.textContent=G,k=L(),f&&f.c(),v=L(),S&&S.c(),y=L(),H(N.$$.fragment),w=L(),H(I.$$.fragment),h=L(),T&&T.c(),U=V(),this.h()},l(s){g&&g.l(s),t=D(s);const o=Le("svelte-1j2izld",document.head);P.l(o),c=B(o,"META",{name:!0,content:!0}),e=B(o,"META",{name:!0,content:!0}),F&&F.l(o),n=V(),o.forEach(d),a=D(s),E&&E.l(s),i=D(s),r=B(s,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ce(r)!=="svelte-z10k9g"&&(r.innerHTML=u),M=D(s),A=B(s,"P",{class:!0,"data-svelte-h":!0}),ce(A)!=="svelte-11wsitt"&&(A.textContent=G),k=D(s),f&&f.l(s),v=D(s),S&&S.l(s),y=D(s),q(N.$$.fragment,s),w=D(s),q(I.$$.fragment,s),h=D(s),T&&T.l(s),U=V(),this.h()},h(){R(c,"name","twitter:card"),R(c,"content","summary"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),R(r,"class","markdown"),R(r,"id","advanced-analytical-views"),R(A,"class","markdown")},m(s,o){g&&g.m(s,o),m(s,t,o),P.m(document.head,null),ee(document.head,c),ee(document.head,e),F&&F.m(document.head,null),ee(document.head,n),m(s,a,o),E&&E.m(s,o),m(s,i,o),m(s,r,o),m(s,M,o),m(s,A,o),m(s,k,o),f&&f.m(s,o),m(s,v,o),S&&S.m(s,o),m(s,y,o),J(N,s,o),m(s,w,o),J(I,s,o),m(s,h,o),T&&T.m(s,o),m(s,U,o),b=!0},p(s,[o]){var ae;typeof l<"u"&&(l.title||(ae=l.og)!=null&&ae.title)&&l.hide_title!==!0&&g.p(s,o),P.p(s,o),typeof l=="object"&&F.p(s,o),s[0]?E?(E.p(s,o),o&1&&p(E,1)):(E=ue(s),E.c(),p(E,1),E.m(i.parentNode,i)):E&&(Z(),C(E,1,1,()=>{E=null}),X()),s[1]?f?(f.p(s,o),o&2&&p(f,1)):(f=me(s),f.c(),p(f,1),f.m(v.parentNode,v)):f&&(Z(),C(f,1,1,()=>{f=null}),X()),s[2]?S?(S.p(s,o),o&4&&p(S,1)):(S=Ee(s),S.c(),p(S,1),S.m(y.parentNode,y)):S&&(Z(),C(S,1,1,()=>{S=null}),X());const z={};o&2&&(z.data=s[1].filter(Se)),N.$set(z);const se={};o&2&&(se.data=s[1].filter(Te)),I.$set(se),s[2].length>0?T?(T.p(s,o),o&4&&p(T,1)):(T=fe(s),T.c(),p(T,1),T.m(U.parentNode,U)):T&&(Z(),C(T,1,1,()=>{T=null}),X())},i(s){b||(p(E),p(f),p(S),p(N.$$.fragment,s),p(I.$$.fragment,s),p(T),b=!0)},o(s){C(E),C(f),C(S),C(N.$$.fragment,s),C(I.$$.fragment,s),C(T),b=!1},d(s){s&&(d(t),d(a),d(i),d(r),d(M),d(A),d(k),d(v),d(y),d(w),d(h),d(U)),g&&g.d(s),P.d(s),d(c),d(e),F&&F.d(s),d(n),E&&E.d(s),f&&f.d(s),S&&S.d(s),W(N,s),W(I,s),T&&T.d(s)}}}const l={queries:[{seed_details:"nba/seed_details.sql"}]},Se=_=>_.conf==="East",Te=_=>_.conf==="West",Re=_=>_.conf==="East",Oe=_=>_.conf==="West";function qe(_,t,c){let e,n;ne(_,ye,O=>c(11,e=O)),ne(_,_e,O=>c(21,n=O));let{data:a}=t,{data:i={},customFormattingSettings:r,__db:u,inputs:M}=a;De(_e,n="c51f50a45742e17b34a9b458dad98ee5",n);let A=ve(M);ie(Be,A),Ce(A.subscribe(O=>M=O)),ie(ke,{getCustomFormats:()=>r.customFormats||[]});const G=(O,s)=>we(u.query,O,{query_name:s});Ie(G);let k;const v=()=>{k||(k=setTimeout(()=>{oe.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},y=()=>{k?(clearTimeout(k),k=null):oe.dismiss("LoadingToast")};re(()=>($.addEventListener("inFlightQueryStart",v),$.addEventListener("inFlightQueryEnd",y),$.QueriesLoading&&v(),()=>{$.removeEventListener("inFlightQueryStart",v),$.removeEventListener("inFlightQueryEnd",y)})),e.params,re(()=>!0);let N={initialData:void 0,initialError:void 0},w=Q`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`,I=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;i.seed_details&&(i.seed_details instanceof Error?N.initialError=i.seed_details:N.initialData=i.seed_details);let h;const U=$.createReactive({callback:O=>{c(0,h=O)},execFn:G},{id:"seed_details",initialData:N.initialData,initialError:N.initialError});U(I,{noResolve:w}),globalThis[Symbol.for("seed_details")]={get value(){return h}};let b={initialData:void 0,initialError:void 0},g=Q`WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`,x=`WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`;i.seed_details_cdf&&(i.seed_details_cdf instanceof Error?b.initialError=i.seed_details_cdf:b.initialData=i.seed_details_cdf);let K;const P=$.createReactive({callback:O=>{c(1,K=O)},execFn:G},{id:"seed_details_cdf",initialData:b.initialData,initialError:b.initialError});P(x,{noResolve:g}),globalThis[Symbol.for("seed_details_cdf")]={get value(){return K}};let F={initialData:void 0,initialError:void 0},E=Q`SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`,f=`SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`;i.seed_details_cdf_scatter&&(i.seed_details_cdf_scatter instanceof Error?F.initialError=i.seed_details_cdf_scatter:F.initialData=i.seed_details_cdf_scatter);let S;const T=$.createReactive({callback:O=>{c(2,S=O)},execFn:G},{id:"seed_details_cdf_scatter",initialData:F.initialData,initialError:F.initialError});return T(f,{noResolve:E}),globalThis[Symbol.for("seed_details_cdf_scatter")]={get value(){return S}},_.$$set=O=>{"data"in O&&c(3,a=O.data)},_.$$.update=()=>{_.$$.dirty&8&&c(4,{data:i={},customFormattingSettings:r,__db:u}=a,i),_.$$.dirty&16&&Ye.set(Object.keys(i).length>0),_.$$.dirty&2048&&e.params,_.$$.dirty&96&&U(I,{noResolve:w}),_.$$.dirty&384&&P(x,{noResolve:g}),_.$$.dirty&1536&&T(f,{noResolve:E})},c(5,w=Q`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),c(6,I=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),c(7,g=Q`WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`),c(8,x=`WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1`),c(9,E=Q`SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`),c(10,f=`SELECT * FROM (WITH 
cte_seeds AS (
    SELECT DISTINCT seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC)
    UNION ALL
    SELECT 0 AS seed
),
cte_teams AS(
    SELECT DISTINCT team, conf, S.seed
    FROM (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD
    LEFT JOIN cte_seeds S ON 1=1
),
cte_interim_calc AS (
SELECT 
    T.team, 
    T.seed, 
    T.conf, 
    COALESCE(SD.occurances_pct1,0) AS occurances_pct1
FROM cte_teams T
LEFT JOIN (SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC) SD ON T.team = SD.team AND T.seed = SD.seed
)
SELECT *, SUM(occurances_pct1) OVER (PARTITION BY team ORDER BY seed) AS cumulative_pct1
FROM cte_interim_calc
ORDER BY seed, cumulative_pct1)
WHERE cumulative_pct1 > 0.005 AND cumulative_pct1 < 0.995`),[h,K,S,a,i,w,I,g,x,E,f,e]}class st extends Me{constructor(t){super(),Ne(this,t,qe,He,pe,{data:3})}}export{st as component};
