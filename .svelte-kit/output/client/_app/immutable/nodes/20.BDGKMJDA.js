import{s as de,a as R,e as L,b as x,c as S,h as ye,d as $,f as u,g as me,i as d,j as E,k as Z,l as oe,m as be,o as ce,p as Re,q as le,t as Se,r as Te,u as Ae,n as J}from"../chunks/scheduler.BVCo5HCX.js";import{S as Ne,i as Oe,c as k,a as B,m as P,t as b,b as A,d as ee,e as U,g as te}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as he,Q as q,p as we,r as ue,t as pe}from"../chunks/index.DAWWTyat.js";import{h as j}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as De,C as Le}from"../chunks/globalContexts.1hDlTDmj.js";import{w as $e}from"../chunks/entry.ZsnkuR_y.js";import{D as Ce}from"../chunks/DataTable.C27QukxD.js";import{p as He}from"../chunks/stores.C49gDDi_.js";import{B as ae}from"../chunks/BigValue.fsHmo18v.js";import{p as ve}from"../chunks/profile.BW8tN6E9.js";import{A as Me,a as Fe}from"../chunks/AccordionItem.DAYPUhQ2.js";import{Q as ie}from"../chunks/QueryViewer.CXzVRZ_y.js";function We(o){var _;let t,i=(l.title??((_=l.og)==null?void 0:_.title))+"",e;return{c(){t=L("h1"),e=Se(i),this.h()},l(r){t=$(r,"H1",{class:!0});var s=Te(t);e=Ae(s,i),s.forEach(u),this.h()},h(){d(t,"class","title")},m(r,s){E(r,t,s),Z(t,e)},p:J,d(r){r&&u(t)}}}function ke(o){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:J,p:J,d:J}}function Be(o){var s;let t,i,e,_,r;return document.title=t=l.title??((s=l.og)==null?void 0:s.title),{c(){i=R(),e=L("meta"),_=R(),r=L("meta"),this.h()},l(n){i=S(n),e=$(n,"META",{property:!0,content:!0}),_=S(n),r=$(n,"META",{name:!0,content:!0}),this.h()},h(){var n,p;d(e,"property","og:title"),d(e,"content",((n=l.og)==null?void 0:n.title)??l.title),d(r,"name","twitter:title"),d(r,"content",((p=l.og)==null?void 0:p.title)??l.title)},m(n,p){E(n,i,p),E(n,e,p),E(n,_,p),E(n,r,p)},p(n,p){var y;p&0&&t!==(t=l.title??((y=l.og)==null?void 0:y.title))&&(document.title=t)},d(n){n&&(u(i),u(e),u(_),u(r))}}}function Pe(o){var r,s;let t,i,e=(l.description||((r=l.og)==null?void 0:r.description))&&Ue(),_=((s=l.og)==null?void 0:s.image)&&Ye();return{c(){e&&e.c(),t=R(),_&&_.c(),i=x()},l(n){e&&e.l(n),t=S(n),_&&_.l(n),i=x()},m(n,p){e&&e.m(n,p),E(n,t,p),_&&_.m(n,p),E(n,i,p)},p(n,p){var y,Y;(l.description||(y=l.og)!=null&&y.description)&&e.p(n,p),(Y=l.og)!=null&&Y.image&&_.p(n,p)},d(n){n&&(u(t),u(i)),e&&e.d(n),_&&_.d(n)}}}function Ue(o){let t,i,e,_,r;return{c(){t=L("meta"),i=R(),e=L("meta"),_=R(),r=L("meta"),this.h()},l(s){t=$(s,"META",{name:!0,content:!0}),i=S(s),e=$(s,"META",{property:!0,content:!0}),_=S(s),r=$(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n,p;d(t,"name","description"),d(t,"content",l.description??((s=l.og)==null?void 0:s.description)),d(e,"property","og:description"),d(e,"content",((n=l.og)==null?void 0:n.description)??l.description),d(r,"name","twitter:description"),d(r,"content",((p=l.og)==null?void 0:p.description)??l.description)},m(s,n){E(s,t,n),E(s,i,n),E(s,e,n),E(s,_,n),E(s,r,n)},p:J,d(s){s&&(u(t),u(i),u(e),u(_),u(r))}}}function Ye(o){let t,i,e;return{c(){t=L("meta"),i=R(),e=L("meta"),this.h()},l(_){t=$(_,"META",{property:!0,content:!0}),i=S(_),e=$(_,"META",{name:!0,content:!0}),this.h()},h(){var _,r;d(t,"property","og:image"),d(t,"content",(_=l.og)==null?void 0:_.image),d(e,"name","twitter:image"),d(e,"content",(r=l.og)==null?void 0:r.image)},m(_,r){E(_,t,r),E(_,i,r),E(_,e,r)},p:J,d(_){_&&(u(t),u(i),u(e))}}}function Ee(o){let t,i;return t=new ie({props:{queryID:"past_games",queryResult:o[0]}}),{c(){k(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,_){P(t,e,_),i=!0},p(e,_){const r={};_&1&&(r.queryResult=e[0]),t.$set(r)},i(e){i||(b(t.$$.fragment,e),i=!0)},o(e){A(t.$$.fragment,e),i=!1},d(e){U(t,e)}}}function ge(o){let t,i;return t=new ie({props:{queryID:"past_games_summary",queryResult:o[1]}}),{c(){k(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,_){P(t,e,_),i=!0},p(e,_){const r={};_&2&&(r.queryResult=e[1]),t.$set(r)},i(e){i||(b(t.$$.fragment,e),i=!0)},o(e){A(t.$$.fragment,e),i=!1},d(e){U(t,e)}}}function fe(o){let t,i;return t=new ie({props:{queryID:"past_games_summary_by_team",queryResult:o[2]}}),{c(){k(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,_){P(t,e,_),i=!0},p(e,_){const r={};_&4&&(r.queryResult=e[2]),t.$set(r)},i(e){i||(b(t.$$.fragment,e),i=!0)},o(e){A(t.$$.fragment,e),i=!1},d(e){U(t,e)}}}function Ge(o){let t,i;return t=new Ce({props:{data:o[2],title:"Prediction Accuracy by Team",rows:"30"}}),{c(){k(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,_){P(t,e,_),i=!0},p(e,_){const r={};_&4&&(r.data=e[2]),t.$set(r)},i(e){i||(b(t.$$.fragment,e),i=!0)},o(e){A(t.$$.fragment,e),i=!1},d(e){U(t,e)}}}function qe(o){let t,i;return t=new Fe({props:{title:"Detailed Results by Team",$$slots:{default:[Ge]},$$scope:{ctx:o}}}),{c(){k(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,_){P(t,e,_),i=!0},p(e,_){const r={};_&1073741828&&(r.$$scope={dirty:_,ctx:e}),t.$set(r)},i(e){i||(b(t.$$.fragment,e),i=!0)},o(e){A(t.$$.fragment,e),i=!1},d(e){U(t,e)}}}function Ie(o){var z;let t,i,e,_,r,s,n,p,y,Y='<a href="#predictions">Predictions</a>',v,T,Q='<a href="#past-performance">Past Performance</a>',I,O,M,h,G,C,F,w,W,D=typeof l<"u"&&(l.title||((z=l.og)==null?void 0:z.title))&&l.hide_title!==!0&&We();function X(a,m){var K;return typeof l<"u"&&(l.title||(K=l.og)!=null&&K.title)?Be:ke}let H=X()(o),N=typeof l=="object"&&Pe(),g=o[0]&&Ee(o),f=o[1]&&ge(o),c=o[2]&&fe(o);return O=new ae({props:{data:o[1],value:"total_games_played"}}),h=new ae({props:{data:o[1],value:"correct_predictions"}}),C=new ae({props:{data:o[1],value:"accuracy_pct1"}}),w=new Me({props:{$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){D&&D.c(),t=R(),H.c(),i=L("meta"),e=L("meta"),N&&N.c(),_=x(),r=R(),g&&g.c(),s=R(),f&&f.c(),n=R(),c&&c.c(),p=R(),y=L("h1"),y.innerHTML=Y,v=R(),T=L("h2"),T.innerHTML=Q,I=R(),k(O.$$.fragment),M=R(),k(h.$$.fragment),G=R(),k(C.$$.fragment),F=R(),k(w.$$.fragment),this.h()},l(a){D&&D.l(a),t=S(a);const m=ye("svelte-1j2izld",document.head);H.l(m),i=$(m,"META",{name:!0,content:!0}),e=$(m,"META",{name:!0,content:!0}),N&&N.l(m),_=x(),m.forEach(u),r=S(a),g&&g.l(a),s=S(a),f&&f.l(a),n=S(a),c&&c.l(a),p=S(a),y=$(a,"H1",{class:!0,id:!0,"data-svelte-h":!0}),me(y)!=="svelte-1pi22ig"&&(y.innerHTML=Y),v=S(a),T=$(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),me(T)!=="svelte-r55kci"&&(T.innerHTML=Q),I=S(a),B(O.$$.fragment,a),M=S(a),B(h.$$.fragment,a),G=S(a),B(C.$$.fragment,a),F=S(a),B(w.$$.fragment,a),this.h()},h(){d(i,"name","twitter:card"),d(i,"content","summary"),d(e,"name","twitter:site"),d(e,"content","@evidence_dev"),d(y,"class","markdown"),d(y,"id","predictions"),d(T,"class","markdown"),d(T,"id","past-performance")},m(a,m){D&&D.m(a,m),E(a,t,m),H.m(document.head,null),Z(document.head,i),Z(document.head,e),N&&N.m(document.head,null),Z(document.head,_),E(a,r,m),g&&g.m(a,m),E(a,s,m),f&&f.m(a,m),E(a,n,m),c&&c.m(a,m),E(a,p,m),E(a,y,m),E(a,v,m),E(a,T,m),E(a,I,m),P(O,a,m),E(a,M,m),P(h,a,m),E(a,G,m),P(C,a,m),E(a,F,m),P(w,a,m),W=!0},p(a,[m]){var ne;typeof l<"u"&&(l.title||(ne=l.og)!=null&&ne.title)&&l.hide_title!==!0&&D.p(a,m),H.p(a,m),typeof l=="object"&&N.p(a,m),a[0]?g?(g.p(a,m),m&1&&b(g,1)):(g=Ee(a),g.c(),b(g,1),g.m(s.parentNode,s)):g&&(te(),A(g,1,1,()=>{g=null}),ee()),a[1]?f?(f.p(a,m),m&2&&b(f,1)):(f=ge(a),f.c(),b(f,1),f.m(n.parentNode,n)):f&&(te(),A(f,1,1,()=>{f=null}),ee()),a[2]?c?(c.p(a,m),m&4&&b(c,1)):(c=fe(a),c.c(),b(c,1),c.m(p.parentNode,p)):c&&(te(),A(c,1,1,()=>{c=null}),ee());const K={};m&2&&(K.data=a[1]),O.$set(K);const _e={};m&2&&(_e.data=a[1]),h.$set(_e);const re={};m&2&&(re.data=a[1]),C.$set(re);const se={};m&1073741828&&(se.$$scope={dirty:m,ctx:a}),w.$set(se)},i(a){W||(b(g),b(f),b(c),b(O.$$.fragment,a),b(h.$$.fragment,a),b(C.$$.fragment,a),b(w.$$.fragment,a),W=!0)},o(a){A(g),A(f),A(c),A(O.$$.fragment,a),A(h.$$.fragment,a),A(C.$$.fragment,a),A(w.$$.fragment,a),W=!1},d(a){a&&(u(t),u(r),u(s),u(n),u(p),u(y),u(v),u(T),u(I),u(M),u(G),u(F)),D&&D.d(a),H.d(a),u(i),u(e),N&&N.d(a),u(_),g&&g.d(a),f&&f.d(a),c&&c.d(a),U(O,a),U(h,a),U(C,a),U(w,a)}}}const l={queries:[{past_games:"ncaaf/past_games.sql"},{past_games_summary:"ncaaf/past_games_summary.sql"},{past_games_summary_by_team:"ncaaf/past_games_summary_by_team.sql"}]};function Qe(o,t,i){let e,_;oe(o,He,c=>i(11,e=c)),oe(o,ue,c=>i(21,_=c));let{data:r}=t,{data:s={},customFormattingSettings:n,__db:p,inputs:y}=r;be(ue,_="3421888954417828192d614ea0482c16",_);let Y=$e(y);ce(De,Y),Re(Y.subscribe(c=>y=c)),ce(Le,{getCustomFormats:()=>n.customFormats||[]});const v=(c,z)=>ve(p.query,c,{query_name:z});he(v);let T;const Q=()=>{T||(T=setTimeout(()=>{pe.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},I=()=>{T?(clearTimeout(T),T=null):pe.dismiss("LoadingToast")};le(()=>(q.addEventListener("inFlightQueryStart",Q),q.addEventListener("inFlightQueryEnd",I),q.QueriesLoading&&Q(),()=>{q.removeEventListener("inFlightQueryStart",Q),q.removeEventListener("inFlightQueryEnd",I)})),e.params,le(()=>!0);let O={initialData:void 0,initialError:void 0},M=j`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`,h=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;s.past_games&&(s.past_games instanceof Error?O.initialError=s.past_games:O.initialData=s.past_games);let G;const C=q.createReactive({callback:c=>{i(0,G=c)},execFn:v},{id:"past_games",initialData:O.initialData,initialError:O.initialError});C(h,{noResolve:M}),globalThis[Symbol.for("past_games")]={get value(){return G}};let F={initialData:void 0,initialError:void 0},w=j`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`,W=`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;s.past_games_summary&&(s.past_games_summary instanceof Error?F.initialError=s.past_games_summary:F.initialData=s.past_games_summary);let D;const X=q.createReactive({callback:c=>{i(1,D=c)},execFn:v},{id:"past_games_summary",initialData:F.initialData,initialError:F.initialError});X(W,{noResolve:w}),globalThis[Symbol.for("past_games_summary")]={get value(){return D}};let V={initialData:void 0,initialError:void 0},H=j`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`,N=`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;s.past_games_summary_by_team&&(s.past_games_summary_by_team instanceof Error?V.initialError=s.past_games_summary_by_team:V.initialData=s.past_games_summary_by_team);let g;const f=q.createReactive({callback:c=>{i(2,g=c)},execFn:v},{id:"past_games_summary_by_team",initialData:V.initialData,initialError:V.initialError});return f(N,{noResolve:H}),globalThis[Symbol.for("past_games_summary_by_team")]={get value(){return g}},o.$$set=c=>{"data"in c&&i(3,r=c.data)},o.$$.update=()=>{o.$$.dirty&8&&i(4,{data:s={},customFormattingSettings:n,__db:p}=r,s),o.$$.dirty&16&&we.set(Object.keys(s).length>0),o.$$.dirty&2048&&e.params,o.$$.dirty&96&&C(h,{noResolve:M}),o.$$.dirty&384&&X(W,{noResolve:w}),o.$$.dirty&1536&&f(N,{noResolve:H})},i(5,M=j`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),i(6,h=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),i(7,w=j`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`),i(8,W=`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`),i(9,H=j`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`),i(10,N=`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_ncaaf_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`),[G,D,g,r,s,M,h,w,W,H,N,e]}class rt extends Ne{constructor(t){super(),Oe(this,t,Qe,Ie,de,{data:3})}}export{rt as component};
